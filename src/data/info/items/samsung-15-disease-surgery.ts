import { InfoArticle } from '../types';

export const SAMSUNG_15_DISEASE_SURGERY_ARTICLE: InfoArticle = {
  id: 'info-001',
  slug: 'samsung-15-disease-surgery',
  title: '삼성화재 15대질병수술비란? 15대 질병 종류와 질병코드 및 수술비 청구 핵심 가이드',
  description: '삼성화재 건강보험의 대표 특약인 15대질병수술비의 보장 질병 종류, 주요 질병코드(KCD), 1~5종 수술비와의 차이점, 보험금 청구 시 확인해야 할 실무 핵심 팁을 알기 쉽게 정리했습니다.',
  category: 'surgery',
  publishedAt: '2026-08-18',
  updatedAt: '2026-08-18',
  author: {
    name: '보험브릿지 실무연구팀',
    role: '보험약관 및 보상실무 분석'
  },
  summary: '삼성화재 15대질병수술비는 뇌·심장·간·췌장 등 중대 장기 질환부터 녹내장·당뇨·고혈압 등 다빈도 만성질환까지 15가지 핵심 질병 치료를 위한 수술을 집중 보장하는 담보입니다. 1~5종 질병수술비와 중복 수령이 가능하며, 관혈 및 최신 비관혈 수술 인정 기준을 확인해야 합니다.',
  tags: ['삼성화재', '15대질병수술비', 'N대수술비', '질병코드', '수술비청구', '질병수술비'],
  relatedTerms: [
    {
      insurerId: 'samsung-fire',
      subTabId: 'samsung_15_disease',
      label: '삼성화재 15대 질병수술비 상세 질병코드 분류표',
      insurerName: '삼성화재'
    },
    {
      insurerId: 'samsung-fire',
      subTabId: 'samsung_111',
      label: '삼성화재 111대 질병수술비 분류표',
      insurerName: '삼성화재'
    }
  ],
  relatedTools: ['surgery', 'claim'],
  sourceDocs: [
    '삼성화재 장기손해보험 보통약관 및 특별약관 [별표-질병관련 15대질병 분류표]',
    '한국표준질병·사인분류(KCD-8/KCD-9)'
  ],
  isPublished: true,
  contentHtml: `
    <section class="space-y-6">
      <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">1. 삼성화재 15대질병수술비 담보의 개요</h2>
      <p class="text-slate-700 leading-relaxed">
        <strong>15대질병수술비</strong>는 삼성화재 통합건강보험 및 종합보험에서 오랜 기간 유지되어 온 대표적인 'N대 특정 질병수술비' 특약입니다.
        단순 질병수술비(모든 질병 대상, 지급 한도 30~50만원 수준)보다 지급 한도가 높게 설계(수백만 원~1천만 원 이상)되어,
        의료비 부담이 큰 핵심 질환의 수술을 집중적으로 대비하는 데 목적이 있습니다.
      </p>

      <div class="bg-amber-50/70 border border-amber-200 p-4 rounded-lg my-4">
        <p class="font-bold text-amber-900 mb-1">💡 실무 핵심 체크포인트</p>
        <p class="text-xs text-amber-800 leading-relaxed">
          15대질병수술비는 일반 <strong>질병수술비</strong> 및 <strong>1~5종 수술비</strong>와 <strong>중복 지급</strong>됩니다.
          예를 들어 허혈심장질환으로 스텐트 삽입술(3종 수술)을 받았다면, [질병수술비 + 3종수술비 + 15대질병수술비]가 모두 합산되어 지급됩니다.
        </p>
      </div>

      <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 pt-4">2. 15대 질병의 종류와 주요 질병분류코드(KCD)</h2>
      <p class="text-slate-700 leading-relaxed">
        삼성화재 약관 기준 15대 질병은 크게 <strong>중대 장기 질환군</strong>과 <strong>주요 만성·생활 질환군</strong>으로 구분됩니다.
      </p>

      <div class="overflow-x-auto my-4 border border-slate-200 rounded-lg">
        <table class="min-w-full text-xs text-slate-800 text-left">
          <thead class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
            <tr>
              <th class="px-4 py-3 w-16">순번</th>
              <th class="px-4 py-3 w-36">보장 질병명</th>
              <th class="px-4 py-3 w-44">대표 질병코드 (KCD)</th>
              <th class="px-4 py-3">주요 대상 질환 및 수술 예시</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">1</td>
              <td class="px-4 py-2.5 font-semibold text-blue-900">뇌질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">I60 ~ I69, D32, D33</td>
              <td class="px-4 py-2.5">뇌출혈, 뇌경색, 뇌동맥류 결찰술/코일색전술, 뇌양성종양 적출술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">2</td>
              <td class="px-4 py-2.5 font-semibold text-blue-900">심질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">I00~I09, I20~I25, I30~I52</td>
              <td class="px-4 py-2.5">협심증, 심근경색, 스텐트 삽입술, 관상동맥우회술, 판막성형술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">3</td>
              <td class="px-4 py-2.5 font-semibold text-blue-900">간질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">B15~B19, K70~K77</td>
              <td class="px-4 py-2.5">만성 간염, 간경변증, 간엽절제술, 간이식 수술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">4</td>
              <td class="px-4 py-2.5 font-semibold text-blue-900">췌장질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">K85, K86, K87.1</td>
              <td class="px-4 py-2.5">급성 및 만성 췌장염, 췌장 낭종 절제술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">5</td>
              <td class="px-4 py-2.5 font-semibold text-blue-900">폐질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">J43~J47, J85~J86, J90~J94</td>
              <td class="px-4 py-2.5">폐기종, 만성 폐쇄성 폐질환(COPD), 기관지확장증, 흉막절제술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">6</td>
              <td class="px-4 py-2.5 font-semibold">위·십이지장궤양</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">K25 ~ K28</td>
              <td class="px-4 py-2.5">출혈성 궤양 지혈술, 궤양 천공 봉합술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">7</td>
              <td class="px-4 py-2.5 font-semibold">결핵</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">A15 ~ A19, B90</td>
              <td class="px-4 py-2.5">폐결핵 및 장기 결핵 합병증에 따른 절제술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">8</td>
              <td class="px-4 py-2.5 font-semibold">신부전</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">N17 ~ N19</td>
              <td class="px-4 py-2.5">만성 신부전 혈관통로 조성술(동정맥루 성형술), 신장이식술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">9</td>
              <td class="px-4 py-2.5 font-semibold">갑상선질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">E00 ~ E07</td>
              <td class="px-4 py-2.5">갑상선 기능항진증/저하증 관련 수술, 갑상선 결절 절제술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">10</td>
              <td class="px-4 py-2.5 font-semibold">녹내장</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">H40 ~ H42</td>
              <td class="px-4 py-2.5">섬유주절제술, 녹내장 밸브 삽입술, 레이저 홍채절개술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">11</td>
              <td class="px-4 py-2.5 font-semibold">당뇨병질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">E10 ~ E14</td>
              <td class="px-4 py-2.5">당뇨병성 궤양 처치 수술, 당뇨 합병증 치료 목적 수술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">12</td>
              <td class="px-4 py-2.5 font-semibold">고혈압질환</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">I10 ~ I15</td>
              <td class="px-4 py-2.5">본태성/이차성 고혈압 합병증 관련 혈관 수술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">13</td>
              <td class="px-4 py-2.5 font-semibold">동맥경화증</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">I70</td>
              <td class="px-4 py-2.5">말초혈관 죽상경화증 혈관성형술, 죽종절제술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">14</td>
              <td class="px-4 py-2.5 font-semibold">만성기관지염</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">J40 ~ J42</td>
              <td class="px-4 py-2.5">만성 기관지염에 따른 기관 절개 및 치료 목적 수술</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-4 py-2.5 font-bold text-center">15</td>
              <td class="px-4 py-2.5 font-semibold">폐렴</td>
              <td class="px-4 py-2.5 font-mono text-slate-700">J12 ~ J18</td>
              <td class="px-4 py-2.5">화농성 폐렴 합병증(농흉) 배액 및 흉막박피술</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-xs text-slate-500">
        * 본 표는 대표 질병코드 요약입니다. 수백 개에 달하는 세부 KCD 분류코드는 아래 [담보별 분류표] 링크에서 보험사 원문 기준표로 확인하실 수 있습니다.
      </p>

      <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 pt-4">3. 약관상 수술의 인정 기준 및 주의사항</h2>
      <ul class="list-disc list-inside space-y-2 text-slate-700 leading-relaxed text-sm">
        <li>
          <strong>생체에 절단·절제 등의 조작:</strong> 의사의 관리 하에 의료기구를 사용하여 생체에 절단(특정 부위를 잘라냄), 절제(특정 부위를 잘라 없앰) 등의 조작을 가해야 합니다.
        </li>
        <li>
          <strong>신의료기술 및 레이저 인정:</strong> 보건복지부 신의료기술평가위원회를 통해 인정된 최신 술기 및 레이저 절제 조작도 약관상 수술에 포함됩니다.
        </li>
        <li>
          <strong>보장 제외 대상:</strong> 흡인(주사기 등으로 빨아들임), 천자(바늘 등으로 찌름), 약물주입요법, 생검(조직검사) 등은 수술급여금 지급 대상에서 제외됩니다.
        </li>
      </ul>

      <h2 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 pt-4">4. 보험금 청구 시 필수 구비서류</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
          <p class="font-bold text-slate-800 text-sm mb-1">1) 수술확인서 또는 진단서</p>
          <p class="text-xs text-slate-600">질병분류기호(KCD 코드), 수술명, 수술일자, 관혈/비관혈 여부가 명시되어야 합니다.</p>
        </div>
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
          <p class="font-bold text-slate-800 text-sm mb-1">2) 진료비 영수증 및 진료비 세부내역서</p>
          <p class="text-xs text-slate-600">급여/비급여 항목 구분 및 마취료, 수술재료대 등이 확인 가능한 세부내역서가 필요합니다.</p>
        </div>
      </div>
    </section>
  `
};
