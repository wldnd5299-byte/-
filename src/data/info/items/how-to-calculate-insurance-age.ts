import { InfoArticle } from '../types';

export const HOW_TO_CALCULATE_INSURANCE_AGE_ARTICLE: InfoArticle = {
  id: 'info-003',
  slug: 'how-to-calculate-insurance-age',
  title: '보험나이 계산하는 법',
  description: '보험나이는 실제 만 나이를 기준으로 6개월 미만은 버리고 6개월 이상은 1년으로 반올림하여 계산합니다. 실제 계산 공식과 예시를 안내합니다.',
  category: 'planner',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',

  primaryRelatedLink: {
    title: '직접 보험나이 계산하기',
    desc: '생년월일을 입력하여 실제 6개월 반올림 적용 결과를 바로 확인',
    url: '/age/',
    badge: '보험나이 계산기',
    iconType: 'age'
  },

  additionalLinks: [
    {
      title: '보험나이 상령일 계산법',
      desc: '보험나이가 증가하는 날짜(상령일) 계산 기준 알아보기',
      url: '/info/insurance-age-change-date/'
    },
    {
      title: '보험나이는 어떻게 계산해요?',
      desc: '만 나이와의 차이점 및 보험나이 기본 개념 해설',
      url: '/info/how-is-insurance-age-calculated/'
    }
  ],

  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute',
    'planner-goods'
  ],

  tags: ['보험나이계산법', '보험나이계산하는법', '보험나이기준', '6개월반올림', '만나이차이'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">보험나이의 산출 공식과 기본 원리</h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
          보험 약관에서 정하는 보험나이는 <strong>계약일(또는 현재일) 현재의 실제 만 나이를 기준으로 6개월 미만의 단수는 버리고, 6개월 이상의 단수는 1년으로 반올림</strong>하여 계산합니다.
        </p>
        
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-1 font-medium">
          <p>• <strong>생일로부터 6개월 미만 경과:</strong> 만 나이 그대로 적용 (버림)</p>
          <p>• <strong>생일로부터 6개월 이상 경과:</strong> 만 나이 + 1세 적용 (반올림)</p>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">계산 예시</h2>
        <div class="border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
          <p><strong>생년월일이 1990년 3월 1일인 경우:</strong></p>
          <ul class="list-disc list-inside space-y-1 text-slate-600">
            <li><strong>2026년 5월 1일 기준:</strong> 만 36세 2개월 경과 (6개월 미만이므로 <strong>보험나이 36세</strong>)</li>
            <li><strong>2026년 9월 1일 이후 기준:</strong> 만 36세 6개월 도래 (6개월 이상이므로 <strong>보험나이 37세</strong>)</li>
          </ul>
        </div>
      </div>
    </section>
  `
};
