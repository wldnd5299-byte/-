import { InfoArticle } from '../types';

export const INSURANCE_AGE_CHANGE_DATE_ARTICLE: InfoArticle = {
  id: 'info-005',
  slug: 'insurance-age-change-date',
  title: '보험나이 상령일 계산법',
  description: '상령일은 보험나이가 1세 올라가는 기준일로, 실제 생일에서 6개월을 더한 날짜입니다. 상령일 계산 기준과 확인 방법을 안내합니다.',
  category: 'planner',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',

  primaryRelatedLink: {
    title: '보험나이·상령일 계산하기',
    desc: '다음 상령일 날짜 및 보험나이 인상까지 남은 일수 자동 계산',
    url: '/age/',
    badge: '상령일 계산기',
    iconType: 'age'
  },

  additionalLinks: [
    {
      title: '보험나이 계산하는 법',
      desc: '만 나이 기준 6개월 반올림 적용 공식 확인',
      url: '/info/how-to-calculate-insurance-age/'
    },
    {
      title: '보험나이계산기 바로가기',
      desc: '생년월일 8자리 입력으로 바로 결과 조회',
      url: '/info/insurance-age-calculator/'
    }
  ],

  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute',
    'planner-goods'
  ],

  tags: ['상령일', '보험나이상령일', '상령일계산', '보험나이변경일', '보험료인상일'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">상령일(보험나이 변경일)의 정의</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong>상령일</strong>이란 보험나이가 1세 증가하는 기준일을 의미합니다.
          보험나이는 생일 기준 6개월이 경과하는 시점에 반올림(+1세)되므로, <strong>매년 실제 생일로부터 정확히 6개월이 지난 날</strong>이 상령일이 됩니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">상령일 계산 공식</h2>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-2">
          <p>• <strong>상령일 = 실제 생년월일의 월(Month) + 6개월</strong> (일자는 동일)</p>
          <div class="border-t border-slate-200 pt-2 text-slate-600 text-xs leading-relaxed space-y-1">
            <p><strong>예시 1:</strong> 생일이 <strong>1월 15일</strong>인 경우 → 매년 <strong>7월 15일</strong>이 상령일</p>
            <p><strong>예시 2:</strong> 생일이 <strong>8월 20일</strong>인 경우 → 다음 해 <strong>2월 20일</strong>이 상령일</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">상령일 확인이 중요한 이유</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          상령일이 지나 보험나이가 1세 올라가면 동일한 보장 조건이라도 월 납입 보험료가 인상되거나 특정 특약의 가입 한도가 변경될 수 있습니다.
          보험 가입이나 리모델링을 고려 중이라면 상령일 전에 가입 여부를 결정하는 것이 유리합니다.
        </p>
      </div>
    </section>
  `
};
