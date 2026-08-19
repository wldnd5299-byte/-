import { InfoArticle } from '../types';

export const HOW_IS_INSURANCE_AGE_CALCULATED_ARTICLE: InfoArticle = {
  id: 'info-004',
  slug: 'how-is-insurance-age-calculated',
  title: '보험나이는 어떻게 계산해요?',
  description: '만 나이와 보험나이가 왜 다른지, 생년월일 기준으로 보험나이를 확인해야 하는 이유를 알기 쉽게 설명해 드립니다.',
  category: 'planner',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',

  primaryRelatedLink: {
    title: '내 보험나이 확인하기',
    desc: '생년월일 8자리 입력으로 현재 내 보험나이 즉시 확인',
    url: '/age/',
    badge: '보험나이 조회',
    iconType: 'age'
  },

  additionalLinks: [
    {
      title: '보험나이 계산하는 법 (공식 및 예시)',
      desc: '6개월 미만 버림, 6개월 이상 반올림 세부 원리',
      url: '/info/how-to-calculate-insurance-age/'
    },
    {
      title: '보험나이 상령일 계산법',
      desc: '내 생일로부터 6개월 후 도래하는 상령일 알아보기',
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

  tags: ['보험나이', '보험나이개념', '만나이차이', '보험나이질문', '보험가입나이'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">Q. 내 만 나이와 보험나이는 왜 다른가요?</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          일상생활에서는 생일이 지나야 나이가 1살 늘어나는 <strong>만 나이</strong>를 사용하지만, 보험에서는 가입 시점의 위험률을 정밀하게 반영하기 위해 <strong>보험나이</strong>라는 별도 기준을 적용합니다.
          내 실제 생일로부터 6개월이 지나면 보험나이상으로는 이미 1살이 더해진 나이로 산출됩니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">Q. 생년월일을 입력하면 무엇을 알 수 있나요?</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
          보험브릿지 계산기에 생년월일을 입력하시면 다음 항목을 한눈에 확인하실 수 있습니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs sm:text-sm text-slate-700">
          <p>• <strong>현재 법적 만 나이</strong> 및 <strong>최종 보험나이</strong></p>
          <p>• <strong>반올림/버림 적용 여부</strong> (생일 기준 6개월 경과 여부)</p>
          <p>• <strong>다음 상령일(보험나이가 올라가는 날짜)</strong> 및 남은 일수</p>
        </div>
      </div>
    </section>
  `
};
