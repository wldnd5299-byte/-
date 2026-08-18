import { InfoArticle } from '../types';

export const SAMSUNG_15_DISEASE_SURGERY_ARTICLE: InfoArticle = {
  id: 'info-001',
  slug: 'samsung-15-disease-surgery',
  title: '삼성화재 15대질병수술비 약관 질병코드 보장항목',
  description: '삼성화재 15대질병수술비 약관 기준 15개 보장 질환 종류, 주요 질병분류코드(KCD), 수술 인정 기준 및 세부 약관 분류표 연결 정보를 안내합니다.',
  category: 'surgery',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',
  
  // 검색 의도와 가장 밀접한 첫 번째 핵심 링크
  primaryRelatedLink: {
    title: '삼성화재 15대 질병수술비 상세 질병코드 분류표',
    desc: '삼성화재 약관 기준 15개 질환군 전체 질병코드(KCD) 원문 분류표 확인',
    url: '/terms/samsung-fire/samsung_15_disease/',
    badge: '핵심 약관 분류표',
    iconType: 'terms'
  },
  
  // 나머지 보험브릿지 추천 실무 도구/자료 링크
  secondaryTools: [
    'terms',
    'surgery',
    'claim',
    'dispute',
    'age',
    'planner-goods'
  ],

  sourceDocs: [
    '삼성화재 장기손해보험 보통약관 및 특별약관 [별표-질병관련 15대질병 분류표]',
    '한국표준질병·사인분류(KCD)'
  ],

  tags: ['삼성화재', '15대질병수술비', '질병코드', '약관분류표', '수술비'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6">
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">1. 15대 질병 보장 항목 및 대표 질병코드 (KCD)</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-4">
          삼성화재 15대질병수술비 특약은 약관에 명시된 15가지 특정 질환으로 진단 확정되고, 치료를 직접적인 목적으로 수술을 받은 경우에 가입금액을 지급합니다.
        </p>

        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-4 py-2.5 w-12 text-center">No</th>
                <th class="px-4 py-2.5 w-36">보장 대상 질환</th>
                <th class="px-4 py-2.5">약관 기준 대표 질병분류코드 (KCD)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">1</td>
                <td class="px-4 py-2 font-semibold text-slate-900">뇌질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I60 ~ I69, D32, D33</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">2</td>
                <td class="px-4 py-2 font-semibold text-slate-900">심질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I00 ~ I09, I20 ~ I25, I30 ~ I52</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">3</td>
                <td class="px-4 py-2 font-semibold text-slate-900">간질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">B15 ~ B19, K70 ~ K77</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">4</td>
                <td class="px-4 py-2 font-semibold text-slate-900">췌장질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">K85, K86, K87.1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">5</td>
                <td class="px-4 py-2 font-semibold text-slate-900">폐질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">J43 ~ J47, J85 ~ J86, J90 ~ J94</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">6</td>
                <td class="px-4 py-2 font-semibold text-slate-900">위·십이지장궤양</td>
                <td class="px-4 py-2 font-mono text-slate-600">K25 ~ K28</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">7</td>
                <td class="px-4 py-2 font-semibold text-slate-900">결핵</td>
                <td class="px-4 py-2 font-mono text-slate-600">A15 ~ A19, B90</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">8</td>
                <td class="px-4 py-2 font-semibold text-slate-900">신부전</td>
                <td class="px-4 py-2 font-mono text-slate-600">N17 ~ N19</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">9</td>
                <td class="px-4 py-2 font-semibold text-slate-900">갑상선질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">E00 ~ E07</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">10</td>
                <td class="px-4 py-2 font-semibold text-slate-900">녹내장</td>
                <td class="px-4 py-2 font-mono text-slate-600">H40 ~ H42</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">11</td>
                <td class="px-4 py-2 font-semibold text-slate-900">당뇨병질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">E10 ~ E14</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">12</td>
                <td class="px-4 py-2 font-semibold text-slate-900">고혈압질환</td>
                <td class="px-4 py-2 font-mono text-slate-600">I10 ~ I15</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">13</td>
                <td class="px-4 py-2 font-semibold text-slate-900">동맥경화증</td>
                <td class="px-4 py-2 font-mono text-slate-600">I70</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">14</td>
                <td class="px-4 py-2 font-semibold text-slate-900">만성기관지염</td>
                <td class="px-4 py-2 font-mono text-slate-600">J40 ~ J42</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2 text-center font-bold">15</td>
                <td class="px-4 py-2 font-semibold text-slate-900">폐렴</td>
                <td class="px-4 py-2 font-mono text-slate-600">J12 ~ J18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">2. 수술의 정의 및 지급 기준</h2>
        <ul class="list-disc list-inside space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed">
          <li><strong>수술의 정의:</strong> 의사의 관리 하에 치료를 직접적인 목적으로 의료기구를 사용하여 생체에 절단, 절제 등의 조작을 가하는 행위를 말합니다.</li>
          <li><strong>신의료기술 인정:</strong> 보건복지부 고시 신의료기술평가위원회를 통해 안전성과 유효성을 인정받은 최신 수술 기법(레이저 수술 등)도 포함됩니다.</li>
          <li><strong>보장 제외 대상:</strong> 흡인(빨아들임), 천자(바늘 등으로 찌름), 약물주입요법, 생검(조직검사) 등은 약관상 수술에 해당하지 않습니다.</li>
        </ul>
      </div>
    </section>
  `
};
