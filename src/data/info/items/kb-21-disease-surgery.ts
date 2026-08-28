import { InfoArticle } from '../types';

export const KB_21_DISEASE_SURGERY_ARTICLE: InfoArticle = {
  id: 'info-009',
  slug: 'kb-21-disease-surgery',
  title: 'KB손해보험 21대 질병수술이란? 질병 종류와 KCD 코드 확인',
  description: 'KB손해보험 21대 질병수술 약관 기준 21개 대상 질환 분류, 주요 질병분류코드(KCD), 약관상 포함 및 제외 기준, 세부 분류표 확인 방법을 안내합니다.',
  category: 'surgery',
  publishedAt: '2026-08-28',
  updatedAt: '2026-08-28',

  // 핵심 관련 분류표 직접 링크
  primaryRelatedLink: {
    title: 'KB손해보험 21대 질병수술 약관 및 질병코드 분류표',
    desc: 'KB손해보험 약관 기준 21개 질환군 전체 89개 세부 질병코드(KCD) 원문 분류표 확인',
    url: '/terms/kb-ins/kb_surgery21/',
    badge: '핵심 약관 분류표',
    iconType: 'terms'
  },

  // 보험브릿지 실무 연계 도구
  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute',
    'age',
    'planner-goods'
  ],

  sourceDocs: [
    'KB손해보험 보통약관 및 특별약관 [별표-21대 질병분류표]',
    '한국표준질병·사인분류(KCD)'
  ],

  tags: ['KB손해보험', '21대질병수술', '질병코드', '약관분류표', '수술비', 'KCD'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <!-- 1. 개요 -->
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">1. KB손해보험 21대 질병수술이란?</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          KB손해보험의 21대 질병수술 담보는 약관에 명시된 21가지 질환군을 분류하고, 각 질환군에 해당하는 한국표준질병·사인분류(KCD) 코드를 규정한 약관 분류표를 기준으로 합니다.
        </p>
      </div>

      <!-- 2. 21개 질환군 분류 체계 요약표 -->
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">2. 21대 질병수술 대상 질환 및 대표 질병코드 (KCD)</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-4">
          KB손해보험 약관 기준 21개 질환군과 각 질환군별 대표 질병분류코드 범위는 다음과 같습니다.
        </p>
        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-4 py-2.5 w-12 text-center">No</th>
                <th class="px-4 py-2.5 w-36">약관 분류 질환군</th>
                <th class="px-4 py-2.5">약관 기준 대표 질병코드 (KCD)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">1</td>
                <td class="px-4 py-2 font-semibold text-slate-900">당뇨병질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">E10 ~ E14, G59.0, G63.2, H28.0, H36.0, M14.2, N08.3</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">2</td>
                <td class="px-4 py-2 font-semibold text-slate-900">심장질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I00 ~ I02, I05 ~ I09, I20 ~ I25, I26 ~ I28, I30 ~ I52, A39.5, B37.6</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">3</td>
                <td class="px-4 py-2 font-semibold text-slate-900">고혈압질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I10 ~ I13, I15, I67.4, H35.02</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">4</td>
                <td class="px-4 py-2 font-semibold text-slate-900">뇌혈관질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I60 ~ I69</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">5</td>
                <td class="px-4 py-2 font-semibold text-slate-900">간 질 환</td>
                <td class="px-4 py-2 font-mono text-slate-600">B15 ~ B19, K70 ~ K77, B25.1, B58.1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">6</td>
                <td class="px-4 py-2 font-semibold text-slate-900">위·십이지장궤양</td>
                <td class="px-4 py-2 font-mono text-slate-600">K25 ~ K27</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">7</td>
                <td class="px-4 py-2 font-semibold text-slate-900">갑상선질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">E00 ~ E07, E89.0, H06.2</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">8</td>
                <td class="px-4 py-2 font-semibold text-slate-900">동맥경화증</td>
                <td class="px-4 py-2 font-mono text-slate-600">I70</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">9</td>
                <td class="px-4 py-2 font-semibold text-slate-900">만성하기도 질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">J40 ~ J42, J45, J46</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">10</td>
                <td class="px-4 py-2 font-semibold text-slate-900">폐 렴</td>
                <td class="px-4 py-2 font-mono text-slate-600">J12 ~ J18, A48.1, B05.2, B25.0, B01.2, B58.3</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">11</td>
                <td class="px-4 py-2 font-semibold text-slate-900">관 절 염</td>
                <td class="px-4 py-2 font-mono text-slate-600">M00 ~ M03, M05 ~ M14, M15 ~ M19, M20 ~ M25, J99.0</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">12</td>
                <td class="px-4 py-2 font-semibold text-slate-900">백 내 장</td>
                <td class="px-4 py-2 font-mono text-slate-600">H25 ~ H27</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">13</td>
                <td class="px-4 py-2 font-semibold text-slate-900">녹 내 장</td>
                <td class="px-4 py-2 font-mono text-slate-600">H40, H42</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">14</td>
                <td class="px-4 py-2 font-semibold text-slate-900">결 핵</td>
                <td class="px-4 py-2 font-mono text-slate-600">A15 ~ A19, B90, M49.0, M90.0, N33.0, K67.3, K93.0</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">15</td>
                <td class="px-4 py-2 font-semibold text-slate-900">신 부 전</td>
                <td class="px-4 py-2 font-mono text-slate-600">N17 ~ N19</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">16</td>
                <td class="px-4 py-2 font-semibold text-slate-900">생식기질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">N40 ~ N51, N70 ~ N77, N80 ~ N95, N99, A59.01, A18.13~A18.16, B26.0</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">17</td>
                <td class="px-4 py-2 font-semibold text-slate-900">담 석 증</td>
                <td class="px-4 py-2 font-mono text-slate-600">K80</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">18</td>
                <td class="px-4 py-2 font-semibold text-slate-900">사타구니탈장</td>
                <td class="px-4 py-2 font-mono text-slate-600">K40</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">19</td>
                <td class="px-4 py-2 font-semibold text-slate-900">편 도 염</td>
                <td class="px-4 py-2 font-mono text-slate-600">J35</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">20</td>
                <td class="px-4 py-2 font-semibold text-slate-900">축 농 증</td>
                <td class="px-4 py-2 font-mono text-slate-600">J32</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">21</td>
                <td class="px-4 py-2 font-semibold text-slate-900">치 핵</td>
                <td class="px-4 py-2 font-mono text-slate-600">I84</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. 약관상 포함 및 제외 세부 기준 -->
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">3. 약관상 포함 및 제외 기준 (원본 약관 표기)</h2>
        <ul class="list-disc list-inside space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed">
          <li>
            <strong>생식기질환:</strong> 남생식기관의 질환(N40~N45, N47~N51) 중 '남성 불임'은 제외되며, 여성 생식기관의 비염증성 장애(N80~N95) 중 '습관유산자', '여성 불임', '인공 수정과 관련된 합병증'은 제외됩니다.
          </li>
          <li>
            <strong>치핵:</strong> 치질, 항문 및 직장의 정맥류를 포함하며, 출산 및 산후기 합병증(O87.2)과 임신 합병증(O22.4)은 제외됩니다.
          </li>
          <li>
            <strong>동맥경화증:</strong> 한국표준질병·사인분류상 죽상경화증(I70) 코드를 기준으로 합니다.
          </li>
          <li>
            <strong>축농증 및 편도염:</strong> 만성 부비동염(J32), 편도 및 아데노이드의 만성 질환(J35) 코드를 기준으로 합니다.
          </li>
        </ul>
      </div>

      <!-- 4. 상세 분류표 연결 안내 -->
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">4. 세부 질병코드 및 89개 전체 항목 확인</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-3">
          각 질환군별 세부 질병명(예: 폐렴 세부 원인균, 당뇨병 합병증 질환, 결핵 세부 부위 등)과 전체 89개 KCD 질병코드 목록은 아래의 'KB손해보험 21대 질병수술 약관 및 질병코드 분류표' 전용 페이지에서 실시간 검색 및 조회가 가능합니다.
        </p>
      </div>
    </section>
  `
};
