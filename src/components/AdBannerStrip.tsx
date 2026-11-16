import { COUPANG_AD_BANNERS } from '../data/adBanners';

export default function AdBannerStrip() {
  return (
    <section
      aria-labelledby="ad-banner-heading"
      className="w-full min-w-0 bg-white border border-slate-200/90 rounded-xl shadow-2xs py-2.5 sm:py-3"
    >
      <div className="px-3 sm:px-4 mb-2">
        <h2
          id="ad-banner-heading"
          className="text-xs font-bold text-[#123941] tracking-tight"
        >
          추천 상품
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="mx-auto flex w-max items-start gap-3 sm:gap-4 px-3 sm:px-4">
          {COUPANG_AD_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="w-[120px] h-[240px] shrink-0 overflow-hidden bg-white"
            >
              <iframe
                src={banner.src}
                width={banner.width}
                height={banner.height}
                frameBorder={banner.frameBorder}
                scrolling={banner.scrolling}
                referrerPolicy={banner.referrerPolicy}
                title={banner.title}
                className="block w-[120px] h-[240px] border-0"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2.5 px-3 sm:px-4 text-center text-xs text-slate-600 leading-relaxed">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </section>
  );
}

