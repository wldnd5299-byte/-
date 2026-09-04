import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AD_BANNERS, AdBannerItem } from '../data/adBanners';

export default function AdBannerStrip() {
  const activeBanners = AD_BANNERS.filter((banner) => banner.enabled);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Touch gesture refs for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isSwiping = useRef(false);

  // Check prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handler);
      return () => mediaQuery.removeEventListener?.('change', handler);
    }
  }, []);

  // Safe navigation helpers
  const total = activeBanners.length;

  const nextBanner = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevBanner = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Reset auto-slide timer helper
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (total > 1) {
      timerRef.current = setInterval(() => {
        nextBanner();
      }, 2000);
    }
  }, [total, nextBanner]);

  // Mobile 2-second auto slide effect
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.touches[0].clientX;
    const diffY = touchStartY.current - e.touches[0].clientY;
    if (Math.abs(diffX) > 10 && Math.abs(diffX) > Math.abs(diffY)) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe threshold: 35px
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextBanner();
      } else {
        prevBanner();
      }
      resetTimer();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    // Clear swiping flag shortly after touchend so click event is filtered
    setTimeout(() => {
      isSwiping.current = false;
    }, 60);
  };

  const handleBannerClick = (e: React.MouseEvent, banner: AdBannerItem) => {
    if (isSwiping.current || !banner.link) {
      e.preventDefault();
      return;
    }
  };

  // If no banners are active, do not render anything (no empty space)
  if (total === 0) {
    return null;
  }

  // PC Grid column count based on active banners (up to 5)
  const pcGridCols =
    total === 1
      ? 'grid-cols-1'
      : total === 2
      ? 'grid-cols-2'
      : total === 3
      ? 'grid-cols-3'
      : total === 4
      ? 'grid-cols-4'
      : 'grid-cols-5';

  const renderBannerContent = (banner: AdBannerItem) => {
    if (banner.image) {
      return (
        <img
          src={banner.image}
          alt={banner.alt || banner.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      );
    }

    return (
      <div className="flex flex-col items-center justify-center px-3 py-1.5 text-center w-full h-full">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200/80 leading-none tracking-tight shrink-0">
            AD
          </span>
          <span className="text-xs xl:text-[13px] font-black text-[#123941] tracking-tight truncate">
            {banner.title}
          </span>
        </div>
        {banner.subtitle && (
          <span className="text-[11px] text-slate-400 font-bold tracking-tight truncate max-w-[140px] mt-0.5">
            {banner.subtitle}
          </span>
        )}
      </div>
    );
  };

  return (
    <section aria-label="광고 배너" className="w-full">
      {/* 1. Desktop Layout (lg and above: up to 5 banners in a single row simultaneously) */}
      <div className={`hidden lg:grid ${pcGridCols} gap-2.5 w-full`}>
        {activeBanners.slice(0, 5).map((banner) => (
          <a
            key={banner.id}
            href={banner.link || '#'}
            target={banner.link ? '_blank' : undefined}
            rel={banner.link ? 'noopener noreferrer' : undefined}
            onClick={(e) => handleBannerClick(e, banner)}
            aria-label={banner.alt || banner.title}
            className={`h-[74px] rounded-lg border border-slate-200/90 bg-white shadow-2xs hover:border-[#cb9f74]/80 hover:shadow-xs transition-all overflow-hidden flex items-center justify-center relative select-none ${
              banner.link ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {renderBannerContent(banner)}
          </a>
        ))}
      </div>

      {/* 2. Mobile Layout (under lg: 1 banner with 2-second auto-slide & swipe) */}
      <div className="lg:hidden w-full">
        <div
          className="relative w-full overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-2xs"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex w-full ${reducedMotion ? '' : 'transition-transform duration-300 ease-out'}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {activeBanners.map((banner) => (
              <div key={banner.id} className="w-full shrink-0 h-[74px] flex items-center justify-center">
                <a
                  href={banner.link || '#'}
                  target={banner.link ? '_blank' : undefined}
                  rel={banner.link ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleBannerClick(e, banner)}
                  aria-label={banner.alt || banner.title}
                  className={`w-full h-full flex items-center justify-center relative select-none ${
                    banner.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {renderBannerContent(banner)}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator (only when active banners > 1) */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            {activeBanners.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  resetTimer();
                }}
                aria-label={`광고 ${idx + 1}로 이동`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-hidden ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-[#123941]'
                    : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
