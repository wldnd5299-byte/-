import { InfoArticle } from '../types';

export const INSURANCE_AGE_CALCULATOR_ARTICLE: InfoArticle = {
  id: 'info-002',
  slug: 'insurance-age-calculator',
  title: '보험나이계산기',
  description: '생년월일 8자리를 입력하여 만 나이와 다른 보험나이 및 보험료가 오르는 기준일인 상령일을 바로 계산할 수 있습니다.',
  category: 'planner',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',

  primaryRelatedLink: {
    title: '보험나이 계산기 바로가기',
    desc: '생년월일 8자리 입력 시 보험나이 및 상령일 즉시 계산',
    url: '/age/',
    badge: '실시간 계산기',
    iconType: 'age'
  },

  additionalLinks: [
    {
      title: '보험나이 계산하는 법 상세 기준',
      desc: '만 나이 기준 6개월 반올림 계산 원리 확인',
      url: '/info/how-to-calculate-insurance-age/'
    },
    {
      title: '보험나이 상령일 계산법 및 인상 기준일',
      desc: '생일 + 6개월 기준 상령일 확인법',
      url: '/info/insurance-age-change-date/'
    }
  ],

  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute',
    'planner-goods'
  ],

  tags: ['보험나이계산기', '보험나이', '상령일계산', '보험나이조회', '만나이비교'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">보험 가입 시 적용되는 보험나이 바로 계산</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          보험 상품에 가입할 때 적용되는 <strong>보험나이</strong>는 주민등록상 만 나이와 다르게 산출됩니다.
          보험브릿지 보험나이 계산기에 생년월일 8자리(예: 19830102)를 입력하시면, 현재 시점의 최종 보험나이와 다음 상령일까지 남은 일수를 즉시 확인하실 수 있습니다.
        </p>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
        <h3 class="text-xs sm:text-sm font-bold text-slate-900">보험나이 확인 시 주요 포인트</h3>
        <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li><strong>만 나이와의 차이:</strong> 생일 기준 6개월이 지나면 만 나이보다 1세 높게 산출됩니다.</li>
          <li><strong>상령일 확인:</strong> 보험나이가 1세 증가하는 기준 날짜와 남은 일수를 바로 확인할 수 있습니다.</li>
        </ul>
      </div>
    </section>
  `
};
