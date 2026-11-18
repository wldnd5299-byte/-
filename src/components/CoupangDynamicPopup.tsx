import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const HIDE_UNTIL_STORAGE_KEY = 'insurancebridge_coupang_popup_hide_until';
const CLOSED_SESSION_STORAGE_KEY = 'insurancebridge_coupang_popup_closed_session';
const POPUP_DELAY_MS = 5000;
const HIDE_DURATION_MS = 24 * 60 * 60 * 1000;
const DESKTOP_BREAKPOINT_QUERY = '(min-width: 768px)';

const PC_BANNER = {
  src: 'https://ads-partners.coupang.com/widgets.html?id=1051524&template=carousel&trackingCode=AF7809458&subId=&width=680&height=140&tsource=',
  width: 680,
  height: 140,
  title: '쿠팡파트너스 추천 상품 PC 배너',
} as const;

const MOBILE_BANNER = {
  src: 'https://ads-partners.coupang.com/widgets.html?id=1051524&template=carousel&trackingCode=AF7809458&subId=&width=320&height=100&tsource=',
  width: 320,
  height: 100,
  title: '쿠팡파트너스 추천 상품 모바일 배너',
} as const;

function isPopupSuppressed(): boolean {
  if (typeof window === 'undefined') return true;

  try {
    const closedInSession = window.sessionStorage.getItem(CLOSED_SESSION_STORAGE_KEY);
    if (closedInSession === 'true') {
      return true;
    }
  } catch {
    // sessionStorage unavailable
  }

  try {
    const rawHideUntil = window.localStorage.getItem(HIDE_UNTIL_STORAGE_KEY);
    if (rawHideUntil !== null) {
      const trimmed = rawHideUntil.trim();
      const hideUntil = Number(trimmed);
      if (trimmed === '' || !Number.isFinite(hideUntil) || hideUntil <= 0) {
        window.localStorage.removeItem(HIDE_UNTIL_STORAGE_KEY);
      } else if (Date.now() < hideUntil) {
        return true;
      } else {
        window.localStorage.removeItem(HIDE_UNTIL_STORAGE_KEY);
      }
    }
  } catch {
    // localStorage unavailable
  }

  return false;
}

function getIsDesktopViewport(): boolean {
  if (typeof window === 'undefined') return true;
  if (typeof window.matchMedia === 'function') {
    return window.matchMedia(DESKTOP_BREAKPOINT_QUERY).matches;
  }
  return window.innerWidth >= 768;
}

function getFallbackSlotWidth(isDesktop: boolean): number {
  if (typeof window === 'undefined') {
    return isDesktop ? PC_BANNER.width : MOBILE_BANNER.width;
  }
  if (isDesktop) {
    const cardMaxWidth = Math.min(window.innerWidth * 0.9, 714);
    return Math.max(200, cardMaxWidth - 34);
  }
  const cardMaxWidth = Math.min(window.innerWidth * 0.9, 346);
  return Math.max(200, cardMaxWidth - 26);
}

export default function CoupangDynamicPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktopViewport);
  const [slotWidth, setSlotWidth] = useState<number>(() =>
    getFallbackSlotWidth(getIsDesktopViewport())
  );

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const bannerSlotRef = useRef<HTMLDivElement | null>(null);
  const wasOpenRef = useRef(false);

  const handleSessionClose = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(CLOSED_SESSION_STORAGE_KEY, 'true');
      }
    } catch {
      // sessionStorage unavailable
    }
    setIsOpen(false);
  }, []);

  const handleHideToday = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        const hideUntil = Date.now() + HIDE_DURATION_MS;
        window.localStorage.setItem(HIDE_UNTIL_STORAGE_KEY, String(hideUntil));
      }
    } catch {
      // localStorage unavailable
    }
    setIsOpen(false);
  }, []);

  // Show popup once after 5 seconds if not suppressed
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isOpen || isPopupSuppressed()) return;

    const timerId = window.setTimeout(() => {
      if (!isPopupSuppressed()) {
        setIsOpen(true);
      }
    }, POPUP_DELAY_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  // Track 768px breakpoint cleanly via matchMedia + resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateViewportState = () => {
      const desktop = getIsDesktopViewport();
      setIsDesktop(desktop);
      setSlotWidth((prev) => {
        const measured = bannerSlotRef.current?.clientWidth;
        return measured && measured > 0 ? measured : getFallbackSlotWidth(desktop) || prev;
      });
    };

    updateViewportState();

    const mediaQueryList =
      typeof window.matchMedia === 'function'
        ? window.matchMedia(DESKTOP_BREAKPOINT_QUERY)
        : null;

    if (mediaQueryList) {
      if (typeof mediaQueryList.addEventListener === 'function') {
        mediaQueryList.addEventListener('change', updateViewportState);
      } else if (typeof mediaQueryList.addListener === 'function') {
        mediaQueryList.addListener(updateViewportState);
      }
    }

    window.addEventListener('resize', updateViewportState);

    return () => {
      if (mediaQueryList) {
        if (typeof mediaQueryList.removeEventListener === 'function') {
          mediaQueryList.removeEventListener('change', updateViewportState);
        } else if (typeof mediaQueryList.removeListener === 'function') {
          mediaQueryList.removeListener(updateViewportState);
        }
      }
      window.removeEventListener('resize', updateViewportState);
    };
  }, []);

  // Observe actual banner container width while open so narrow viewports scale proportionally
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;

    const el = bannerSlotRef.current;
    const updateWidth = () => {
      if (el && el.clientWidth > 0) {
        setSlotWidth(el.clientWidth);
      } else {
        setSlotWidth(getFallbackSlotWidth(isDesktop));
      }
    };

    updateWidth();

    if (typeof ResizeObserver === 'function' && el) {
      const observer = new ResizeObserver(() => {
        updateWidth();
      });
      observer.observe(el);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isOpen, isDesktop]);

  // Body scroll lock while open, restoring original overflow on close/unmount
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Focus management and Escape key handling
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isOpen) {
      wasOpenRef.current = true;
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;

      const rafId = window.requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          handleSessionClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.cancelAnimationFrame(rafId);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen, handleSessionClose]);

  if (!isOpen) {
    return null;
  }

  const activeBanner = isDesktop ? PC_BANNER : MOBILE_BANNER;
  const availableWidth = slotWidth > 0 ? slotWidth : activeBanner.width;
  const scale = Math.min(1, availableWidth / activeBanner.width);
  const scaledWidth = Math.floor(activeBanner.width * scale);
  const scaledHeight = Math.round(activeBanner.height * scale);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleSessionClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="coupang-dynamic-popup-title"
        className="w-full max-w-[min(90vw,346px)] md:max-w-[min(90vw,714px)] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 md:p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header row: title + X close button (completely separate from banner) */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100">
          <h2
            id="coupang-dynamic-popup-title"
            className="text-xs sm:text-sm font-bold text-[#123941] tracking-tight"
          >
            추천 상품
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleSessionClose}
            aria-label="광고 닫기"
            className="w-9 h-9 -mr-1 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123941] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner container: renders strictly 1 iframe (PC or Mobile), proportionally scaled if needed */}
        <div ref={bannerSlotRef} className="w-full flex justify-center">
          <div
            className="relative overflow-hidden bg-white"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
            }}
          >
            <iframe
              key={isDesktop ? 'pc' : 'mobile'}
              src={activeBanner.src}
              width={activeBanner.width}
              height={activeBanner.height}
              frameBorder="0"
              scrolling="no"
              referrerPolicy="unsafe-url"
              title={activeBanner.title}
              className="block border-0"
              style={{
                width: `${activeBanner.width}px`,
                height: `${activeBanner.height}px`,
                transform: scale < 1 ? `scale(${scale})` : undefined,
                transformOrigin: 'top left',
              }}
            />
          </div>
        </div>

        {/* Mandatory Coupang Partners disclosure */}
        <p className="mt-2.5 text-xs text-slate-600 leading-relaxed text-center break-keep">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>

        {/* Bottom action row: Hide for 24 hours */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            onClick={handleHideToday}
            className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123941] transition-colors cursor-pointer"
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
