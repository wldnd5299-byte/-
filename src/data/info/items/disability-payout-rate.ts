import { InfoArticle } from '../types';

export const DISABILITY_PAYOUT_RATE_ARTICLE: InfoArticle = {
  id: 'info-011',
  slug: 'disability-payout-rate',
  title: '후유장해 지급률 및 신체 부위별 장해분류표',
  seoTitle: '후유장해 지급률 | 신체 부위별 장해분류표 안내 | 보험브릿지',
  h1: '후유장해 지급률 및 신체 부위별 장해분류표',
  description: '보험 약관의 장해분류표에 기재된 후유장해 지급률을 신체 부위별로 확인할 수 있습니다. 눈·관절·척추·신경계 등 장해 판정 기준과 확인 시 유의사항을 안내합니다.',
  category: 'planner',
  publishedAt: '2026-09-15',
  updatedAt: '2026-09-15',

  primaryRelatedLink: {
    title: '후유장해 영업 및 보장분석 필수자료',
    desc: '대표질환별 약관 장해지급률 요약 및 보건복지부 연령별 등록장애인 통계 리포트 바로가기',
    url: '/planner-goods/',
    badge: '보장분석 필수자료',
    iconType: 'planner-goods'
  },

  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute'
  ],

  sourceDocs: [
    '생명·손해보험 통합 표준약관 장해분류표',
    '보건복지부 2020년 등록장애인 현황 통계'
  ],

  tags: [
    '후유장해',
    '장해분류표',
    '후유장해지급률',
    '눈의장해',
    '관절장해',
    '척추장해',
    '치매CDR',
    '등록장애인통계'
  ],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          생명보험 및 손해보험 표준약관의 <strong>[장해분류표]</strong>에는 신체 부위별로 장해의 상태와 정도에 따라 백분율(%)로 표기된 <strong>장해지급률</strong>이 규정되어 있으며, 보험가입금액에 해당 지급률을 곱하여 후유장해보험금이 산정됩니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          ※ <strong>안내 기준:</strong> 본 문서는 생·손보 통합 표준약관 장해분류표 및 보건복지부 2020년 등록장애인 현황 통계 자료를 기반으로 작성되었습니다. 구체적 지급 여부와 세부 지급률은 계약 체결 당시의 약관 규정에 따릅니다.
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">눈의 장해 및 지급률</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          대표질환으로 백내장, 녹내장 등이 있으며, 한 눈의 <strong>교정시력</strong> 기준에 따라 장해지급률이 구분됩니다.
        </p>
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
              <tr>
                <th class="p-3 border-r border-slate-200">장해의 분류 (표준약관 기준)</th>
                <th class="p-3 w-28 text-center text-blue-700">지급률</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-3 border-r border-slate-200">한 눈의 교정시력 0.2 이하</td>
                <td class="p-3 text-center font-bold text-slate-900">5%</td>
              </tr>
              <tr class="bg-blue-50/40">
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-950">한 눈의 교정시력 0.1 이하</td>
                <td class="p-3 text-center font-black text-blue-700">15%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">한 눈의 교정시력 0.06 이하</td>
                <td class="p-3 text-center font-bold text-slate-900">25%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">한 눈의 교정시력 0.02 이하</td>
                <td class="p-3 text-center font-bold text-slate-900">35%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">3대 관절(팔·다리 주요 관절) 장해 및 지급률</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          대표질환으로 관절염, 골절 등이 있으며, 3대 관절 중 하나의 기능 장해 정도에 따라 지급률이 구분됩니다.
        </p>
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
              <tr>
                <th class="p-3 border-r border-slate-200">장해의 분류 (3대 관절 기능 장해)</th>
                <th class="p-3 w-28 text-center text-blue-700">지급률</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-3 border-r border-slate-200">3대 관절 중 하나의 기능 약간장해</td>
                <td class="p-3 text-center font-bold text-slate-900">5%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">3대 관절 중 하나의 기능 뚜렷한 장해</td>
                <td class="p-3 text-center font-bold text-slate-900">10%</td>
              </tr>
              <tr class="bg-blue-50/40">
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-950">3대 관절 중 하나의 기능 심한장해</td>
                <td class="p-3 text-center font-black text-blue-700">20%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">3대 관절 중 하나의 기능 완전상실</td>
                <td class="p-3 text-center font-bold text-slate-900">30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">척추(등뼈)의 운동장해 및 기형 장해</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          대표질환으로 추간판 탈출증(디스크) 등이 있으며, 척추(등뼈)의 운동장해 및 기형 상태에 따라 지급률이 구분됩니다.
        </p>
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs mb-3">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
              <tr>
                <th class="p-3 border-r border-slate-200">장해의 분류 (척추 운동 및 기형)</th>
                <th class="p-3 w-28 text-center text-blue-700">지급률</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-3 border-r border-slate-200">척추(등뼈)에 약간의 운동장해</td>
                <td class="p-3 text-center font-bold text-slate-900">10%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">척추(등뼈)에 뚜렷한 운동장해</td>
                <td class="p-3 text-center font-bold text-slate-900">30%</td>
              </tr>
              <tr class="bg-blue-50/40">
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-950">척추(등뼈)에 약간의 기형</td>
                <td class="p-3 text-center font-black text-blue-700">15%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">척추(등뼈)에 뚜렷한 기형</td>
                <td class="p-3 text-center font-bold text-slate-900">30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <div class="font-bold flex items-center gap-1.5 text-amber-950 mb-1">
            <span>⚠️</span>
            <span>추간판 탈출증(디스크) 약관 확인 안내</span>
          </div>
          <p>
            추간판 탈출증(디스크) 관련 장해 판정 여부 및 지급률 기준은 가입 시기 및 계약 체결 당시의 해당 보험 약관 규정에 따릅니다.
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">신경계·정신행동(치매 CDR 척도) 장해 및 지급률</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          대표질환으로 치매가 있으며, 임상치매척도(CDR 점수) 기준에 따라 장해지급률이 규정되어 있습니다.
        </p>
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
              <tr>
                <th class="p-3 border-r border-slate-200">치매 척도 (CDR 점수 기준)</th>
                <th class="p-3 w-28 text-center text-blue-700">지급률</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="bg-blue-50/40">
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-950">약간의 치매 (CDR 2점)</td>
                <td class="p-3 text-center font-black text-blue-700">40%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">뚜렷한 치매 (CDR 3점)</td>
                <td class="p-3 text-center font-bold text-slate-900">60%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">심한 치매 (CDR 4점)</td>
                <td class="p-3 text-center font-bold text-slate-900">80%</td>
              </tr>
              <tr>
                <td class="p-3 border-r border-slate-200">극심한 치매 (CDR 5점)</td>
                <td class="p-3 text-center font-bold text-slate-900">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">연령별 등록장애인 현황 (보건복지부 참고 통계)</h2>
        
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium mb-3">
          <strong>※ 중요 구분 안내:</strong><br />
          보건복지부 장애인복지법상 <strong>'등록장애인'</strong> 기준과 민간 보험약관의 <strong>'후유장해'</strong> 판정 기준은 동일한 기준이 아닙니다. 아래 통계는 단순 참고 통계이며, 보험금 지급률의 근거가 아닙니다.
        </div>

        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          보건복지부 통계에 따르면 국내 총 등록장애인 수는 <strong>263만 명</strong>(전체인구 5%)입니다.
        </p>

        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs mb-3">
          <div class="overflow-x-auto">
            <table class="w-full text-xs sm:text-sm text-center border-collapse">
              <thead class="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                <tr>
                  <th class="p-2 sm:p-3 border-r border-slate-200">구분</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200">30대 이하</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200">40대</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200">50대</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200 font-semibold text-rose-700">60대</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200 font-semibold text-rose-700">70대</th>
                  <th class="p-2 sm:p-3 border-r border-slate-200 font-semibold text-rose-700">80대 이상</th>
                  <th class="p-2 sm:p-3 bg-rose-50 text-rose-900 font-black">총계</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50 text-slate-800 border-r border-slate-200">장애인 수</td>
                  <td class="p-2.5 border-r border-slate-200">31만 명</td>
                  <td class="p-2.5 border-r border-slate-200">24만 명</td>
                  <td class="p-2.5 border-r border-slate-200">45만 명</td>
                  <td class="p-2.5 border-r border-slate-200 font-bold">60만 명</td>
                  <td class="p-2.5 border-r border-slate-200 font-bold">58만 명</td>
                  <td class="p-2.5 border-r border-slate-200 font-bold">44만 명</td>
                  <td class="p-2.5 font-black text-rose-700 bg-rose-50/50">263만 명</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50 text-slate-800 border-r border-slate-200">인구 대비 비율</td>
                  <td class="p-2.5 border-r border-slate-200">1.3%</td>
                  <td class="p-2.5 border-r border-slate-200">2.9%</td>
                  <td class="p-2.5 border-r border-slate-200">5.2%</td>
                  <td class="p-2.5 border-r border-slate-200 font-black text-rose-600">8.9%</td>
                  <td class="p-2.5 border-r border-slate-200 font-black text-rose-600">15.8%</td>
                  <td class="p-2.5 border-r border-slate-200 font-black text-rose-600">22.0%</td>
                  <td class="p-2.5 font-black text-rose-700 bg-rose-50/50">전체 인구 5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="text-xs text-slate-500">
          * 출처: 보건복지부 2020년 등록장애인 현황 통계 자료
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">후유장해 확인 시 유의사항 및 약관 확인 안내</h2>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          <p>
            • <strong>보험계약 체결 당시 약관 적용 원칙 (대법원 2005다36687 판결 참조):</strong> 보험계약은 체결 당시의 약관을 내용으로 하여 성립하므로, 당사자 사이에 별도의 합의가 없는 한 보험기간 중 약관이 개정되었더라도 변경된 약관은 기존 보험계약에 영향을 미치지 않고 체결 당시 약관이 적용됩니다.
          </p>
          <p>
            • <strong>세부 장해 판정 기준:</strong> 구체적인 장해 판정 여부와 지급률 적용 기준은 피보험자가 가입한 해당 계약 체결 당시의 약관 규정을 확인해야 합니다.
          </p>
        </div>
      </div>

      <div class="pt-2 border-t border-slate-200">
        <h3 class="text-sm font-bold text-slate-900 mb-2">관련 업무 및 실무 도구 바로가기</h3>
        <ul class="text-xs sm:text-sm space-y-1.5 text-slate-700">
          <li>• 질병 원인 질병코드(KCD) 확인: <a href="/disease-code/" class="text-blue-600 hover:underline font-semibold">질병코드(KCD) 검색 바로가기</a></li>
          <li>• 수술을 동반한 경우 수술분류표 확인: <a href="/surgery/" class="text-blue-600 hover:underline font-semibold">1~3종 및 1~5종 수술명 검색 바로가기</a></li>
          <li>• 보험금 청구에 필요한 서류 확인: <a href="/claim/documents/" class="text-blue-600 hover:underline font-semibold">보험금 청구 필요서류 안내 바로가기</a></li>
          <li>• 장해분류표 개정 관련 분쟁 해설: <a href="/dispute/" class="text-blue-600 hover:underline font-semibold">판례 &amp; 분쟁사례 해설 바로가기</a></li>
        </ul>
      </div>
    </section>
  `,

  faqs: [
    {
      question: '후유장해보험금 청구 시 어떤 약관 기준이 적용되나요?',
      answer: '보험계약 체결 당시의 약관을 내용으로 하여 성립하므로, 당사자 사이에 별도의 합의가 없는 한 보험기간 중 약관이 개정되었더라도 체결 당시의 약관 장해분류표가 적용됩니다(대법원 2005다36687 판결 참조).'
    },
    {
      question: '보건복지부 등록장애인으로 인정받으면 보험사 후유장해보험금도 자동으로 지급되나요?',
      answer: '장애인복지법상 등록장애인 기준과 보험약관상 장해 판정 기준은 동일한 기준이 아닙니다. 등록장애인 통계는 단순 참고 통계이며, 구체적인 보험금 지급 여부는 가입 당시 보험약관 규정에 따릅니다.'
    },
    {
      question: '추간판 탈출증(디스크) 진단 시 후유장해 지급률은 어떻게 확인하나요?',
      answer: '추간판 탈출증(디스크) 관련 장해 인정 기준과 지급률은 계약 체결 당시 가입한 해당 보험약관의 세부 규정에 따릅니다.'
    }
  ]
};
