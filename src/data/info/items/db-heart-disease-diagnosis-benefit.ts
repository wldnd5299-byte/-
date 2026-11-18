import { InfoArticle } from '../types';

export const DB_HEART_DISEASE_DIAGNOSIS_BENEFIT_ARTICLE: InfoArticle = {
  id: 'info-015',
  slug: 'db-heart-disease-diagnosis-benefit',
  title: 'DB손해보험 심장질환진단비(I·II·III) 분류표와 질병코드',
  seoTitle: 'DB손해보험 심장질환진단비(I·II·III) 질병코드·약관 분류표 | 보험브릿지',
  h1: 'DB손해보험 심장질환진단비(I·II·III) 보장항목 및 질병코드',
  description: 'DB손해보험 심장질환진단비(I·II·III)의 약관상 보장대상 질병과 KCD 질병코드를 비교하고 협심증, 심근경색증, 판막질환, 부정맥 및 심부전 분류를 안내합니다.',
  category: 'vascular',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',

  primaryRelatedLink: {
    title: 'DB손해보험 심장질환진단비(I·II·III) 약관 분류표 확인',
    desc: 'DB손해보험 심장질환(특정 I·II·III) 약관 분류표와 질병코드(KCD) 원문을 바로 확인합니다.',
    url: '/terms/db-ins/db_heart_simple/',
    badge: 'DB손해보험 약관',
    iconType: 'terms'
  },

  additionalLinks: [
    {
      title: 'DB손해보험 담보별 약관 분류표',
      url: '/terms/db-ins/'
    },
    {
      title: '질병코드 검색',
      url: '/disease-code/'
    },
    {
      title: '보험사별 담보·질병코드 분류표',
      url: '/terms/'
    }
  ],

  secondaryTools: [
    'terms',
    'surgery',
    'age',
    'indemnity'
  ],

  sourceDocs: [
    '건강보험심사평가원 보도자료 ‘심사평가원, 심장질환 진료 현황 발표’ (2023년 11월 7일)',
    'DB손해보험 심장질환진단비(I/II/III) 약관 분류표 (심장질환 특정 I·II·III)'
  ],

  tags: [
    'DB손해보험',
    '심장질환진단비',
    '심장질환진단비I',
    '심장질환진단비II',
    '심장질환진단비III',
    '질병코드',
    'KCD',
    '협심증',
    '심근경색증',
    '심장판막질환',
    '부정맥',
    '심부전',
    'I20',
    'I21',
    'I34',
    'I47',
    'I48',
    'I50'
  ],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div class="space-y-3 text-sm leading-relaxed text-slate-700">
        <p>
          심장질환을 보장하는 보험이라고 하면 가장 먼저 떠오르는 것이 급성심근경색증이나 협심증일 것입니다. 하지만 심장질환에는 이외에도 부정맥, 심부전, 심장판막질환, 심근병증 등 다양한 질병이 포함됩니다.
        </p>
        <p>
          문제는 심장과 관련된 질병이라고 해서 모든 심장질환 진단비에서 동일하게 보장하는 것은 아니라는 점입니다.
        </p>
        <p>
          보험회사마다 보장하는 질병의 범위가 다를 수 있고, 같은 보험회사에서 판매하는 담보라 하더라도 담보 종류에 따라 보장대상 질병과 질병코드가 구분될 수 있습니다.
        </p>
        <p>
          이번 글에서는 DB손해보험의 심혈관 관련 담보 중 심장질환진단비(I), 심장질환진단비(II), 심장질환진단비(III)의 약관상 보장대상 질병과 질병코드를 살펴보겠습니다.
        </p>
        <p>
          건강보험심사평가원이 발표한 심장질환 진료현황을 통해 심장질환 환자 수와 진료비가 어떻게 변화했는지도 함께 확인합니다.
        </p>
      </div>

      <nav aria-label="목차" class="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <p class="text-xs sm:text-sm font-bold text-slate-900 mb-2.5">목차</p>
        <ol class="space-y-1.5 text-xs sm:text-sm text-[#123941] font-medium list-decimal list-inside">
          <li><a href="#section-1" class="hover:underline">심장질환 환자 수와 진료비 현황</a></li>
          <li><a href="#section-2" class="hover:underline">심장질환진단비의 의미</a></li>
          <li><a href="#section-3" class="hover:underline">DB손해보험 심장질환진단비(I) 보장항목</a></li>
          <li><a href="#section-4" class="hover:underline">DB손해보험 심장질환진단비(II) 보장항목</a></li>
          <li><a href="#section-5" class="hover:underline">DB손해보험 심장질환진단비(III) 보장항목</a></li>
          <li><a href="#section-6" class="hover:underline">심장질환진단비 확인 시 주의사항</a></li>
          <li><a href="#section-7" class="hover:underline">DB손해보험 약관 분류표 확인</a></li>
        </ol>
      </nav>

      <div id="section-1" class="space-y-4 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">1. 심장질환 환자 수와 진료비 현황</h2>
        <div class="space-y-3 text-sm leading-relaxed text-slate-700">
          <p>심장질환은 특정 연령대에서만 발생하는 질병이 아닙니다.</p>
          <p>
            연령이 높아질수록 심장질환으로 진료받는 비율이 높아지는 것이 사실이나, 비교적 젊은 연령층에서도 심장질환으로 진료받는 사례가 나타납니다.
          </p>
          <p>
            건강보험심사평가원이 2023년 11월 발표한 ‘심장질환 진료 현황’에 따르면, 2018년부터 2022년까지 심장질환 환자 수와 진료비는 모두 증가한 것으로 나타났습니다.
          </p>
        </div>

        <div class="space-y-2.5">
          <h3 class="text-sm sm:text-base font-bold text-slate-800">심장질환 환자 수 변화</h3>
          <div class="space-y-2.5 text-sm leading-relaxed text-slate-700">
            <p>2018년과 비교하면 2022년 심장질환 환자 수는 19.9%, 총진료비는 38.5% 증가했습니다.</p>
            <p>2022년 기준 심장질환 환자 1인당 평균 진료비는 약 138만 원으로 집계되었습니다.</p>
            <p>
              다만 이 금액은 건강보험 청구자료를 바탕으로 산출한 평균 진료비로, 환자가 실제 부담한 본인부담금이나 특정 중증질환의 치료비를 의미하는 것은 아닙니다.
            </p>
          </div>
        </div>

        <div class="space-y-2.5">
          <h3 class="text-sm sm:text-base font-bold text-slate-800">협심증·심근경색증·부정맥 환자 현황</h3>
          <p class="text-sm leading-relaxed text-slate-700">2018년 대비 2022년 환자 수 변화는 다음과 같습니다.</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-3.5">
            <li>협심증: 약 6% 증가</li>
            <li>심근경색증: 약 19.6% 증가</li>
            <li>부정맥질환: 약 25% 증가</li>
          </ul>
          <div class="space-y-2.5 text-sm leading-relaxed text-slate-700">
            <p>특히 부정맥질환 환자 수는 2018년 약 37만 명에서 2022년 약 46만 명으로 증가했습니다.</p>
            <p>
              같은 기간 부정맥질환의 총진료비는 61.6% 증가했고, 부정맥수술을 받은 환자 수 역시 36.5% 증가한 것으로 나타났습니다.
            </p>
            <p>
              이러한 통계는 심장질환을 살펴볼 때 심근경색증과 협심증뿐 아니라 부정맥 등 다른 심장질환도 함께 이해할 필요가 있다는 점을 보여줍니다.
            </p>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed space-y-1">
          <p class="font-semibold text-slate-900">
            출처: 건강보험심사평가원, ‘심사평가원, 심장질환 진료 현황 발표’, 2023년 11월 7일.
          </p>
          <p>
            공식 출처 URL:
            <a href="https://www.hira.or.kr/bbsDummy.do?pgmid=HIRAA020041000100&brdScnBltNo=4&brdBltNo=11037" target="_blank" rel="noopener noreferrer" class="text-[#0369a1] font-semibold underline break-all">
              건강보험심사평가원 ‘심장질환 진료 현황’ 보도자료 원문 보기
            </a>
          </p>
        </div>
      </div>

      <div id="section-2" class="space-y-3 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">2. 심장질환진단비의 의미</h2>
        <div class="space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            심장질환진단비는 보험약관에서 정한 심장 관련 질병으로 진단이 확정되었을 때 약관에서 정한 보험금을 지급하는 진단비 담보입니다.
          </p>
          <p>
            일반적으로 심장 관련 진단비에는 급성심근경색증진단비, 허혈성심장질환진단비, 특정심장질환진단비 등 다양한 종류가 있습니다.
          </p>
          <p>
            이러한 담보들은 모두 심장과 관련된 질병을 대상으로 하지만 실제 보장범위는 서로 다릅니다.
          </p>
          <p>
            급성심근경색증을 중심으로 보장하는 담보와 협심증을 포함하는 허혈성심장질환진단비는 보장대상 질병에 차이가 있습니다.
          </p>
          <p>
            부정맥이나 심부전, 심장판막질환 등은 허혈성심장질환과 별도로 구분되는 질병이기 때문에 어떤 담보에 가입했는지에 따라 보장 여부가 달라질 수 있습니다.
          </p>
          <p>
            따라서 심장질환진단비를 확인할 때는 담보명만 보는 것이 아니라 약관에 기재된 대상질병과 한국표준질병·사인분류(KCD) 질병코드를 함께 확인하는 것이 중요합니다.
          </p>
        </div>
      </div>

      <div id="section-3" class="space-y-3 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">3. DB손해보험 심장질환진단비(I) 보장항목</h2>
        <p class="text-sm leading-relaxed text-slate-700">
          DB손해보험 약관상 심장질환(특정Ⅰ) 분류표에는 다음 10개 질병 항목이 기재되어 있습니다.
        </p>
        <div class="overflow-x-auto my-3 rounded-lg border border-slate-200">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 font-bold">보장대상 질병</th>
                <th class="p-2.5 w-24 sm:w-32 font-bold">질병코드</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">협심증</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I20</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">기타 급성 허혈심장질환</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I24</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">만성 허혈심장병</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I25</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">급성 심장막염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I30</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">심장막의 기타질환</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I31</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">달리 분류된 질환에서의 심장막염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I32</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">급성 및 아급성 심내막염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I33</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">상세불명 판막의 심내막염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I38</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">급성 심근염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I40</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">달리 분류된 질환에서의 심근염</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I41</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            심장질환진단비(I)의 특징은 협심증과 일부 허혈성심장질환뿐 아니라 심장막염, 심내막염, 심근염 등 염증성 심장질환도 포함하고 있다는 점입니다.
          </p>
          <p>
            협심증은 심장근육에 혈액을 공급하는 관상동맥의 혈류가 부족해지면서 발생하는 대표적인 허혈성심장질환입니다.
          </p>
          <p>
            반면 심근염이나 심장막염은 심장근육 또는 심장을 둘러싼 막에 염증이 발생하는 질병입니다.
          </p>
          <p>
            이처럼 심장질환진단비(I)는 서로 다른 원인과 특징을 가진 심장질환을 하나의 분류표에 포함하고 있습니다.
          </p>
          <p>
            다만 질병명과 질병코드가 약관에 포함되어 있더라도 실제 보험금 지급 여부는 진단확정 및 기타 약관상 지급조건을 충족하는지에 따라 판단됩니다.
          </p>
        </div>
      </div>

      <div id="section-4" class="space-y-3 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">4. DB손해보험 심장질환진단비(II) 보장항목</h2>
        <p class="text-sm leading-relaxed text-slate-700">
          DB손해보험 약관상 심장질환(특정Ⅱ) 분류표에는 다음 4개 질병 항목이 기재되어 있습니다.
        </p>
        <div class="overflow-x-auto my-3 rounded-lg border border-slate-200">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 font-bold">보장대상 질병</th>
                <th class="p-2.5 w-24 sm:w-32 font-bold">질병코드</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">급성 심근경색증</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I21</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">후속 심근경색증</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I22</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">급성 심근경색증 후 특정 현존 합병증</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I23</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">인공소생에 성공한 심장정지</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I46.0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="space-y-3 text-sm leading-relaxed text-slate-700">
          <p>심장질환진단비(II)는 급성심근경색증을 중심으로 구성되어 있습니다.</p>
          <p>
            급성심근경색증은 심장근육에 혈액을 공급하는 관상동맥이 막히는 등의 원인으로 심장근육에 손상이 발생하는 질환입니다.
          </p>
          <p>
            협심증과 마찬가지로 허혈성심장질환에 속하지만, 심장근육의 손상이 발생한다는 점에서 차이가 있습니다.
          </p>
          <p>
            후속 심근경색증과 급성심근경색증 이후 발생한 특정 합병증도 별도의 질병코드로 구분되어 있습니다.
          </p>
        </div>
      </div>

      <div id="section-5" class="space-y-4 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">5. DB손해보험 심장질환진단비(III) 보장항목</h2>
        <p class="text-sm leading-relaxed text-slate-700">
          DB손해보험 약관상 심장질환(특정Ⅲ) 분류표에는 다음 8개 질병 항목이 기재되어 있습니다.
        </p>
        <div class="overflow-x-auto my-3 rounded-lg border border-slate-200">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 font-bold">보장대상 질병</th>
                <th class="p-2.5 w-24 sm:w-32 font-bold">질병코드</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">비류마티스성 승모판장애</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I34</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">비류마티스성 대동맥판장애</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I35</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">비류마티스성 삼첨판장애</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I36</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">폐동맥판장애</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I37</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">달리 분류된 질환에서의 심내막염 및 심장판막장애</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I39</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">발작성 빈맥</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I47</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">심방세동 및 조동</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I48</td>
              </tr>
              <tr>
                <td class="p-2.5 text-slate-900 font-medium border-r border-slate-200">심부전</td>
                <td class="p-2.5 font-mono font-bold text-[#0369a1] whitespace-nowrap">I50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm leading-relaxed text-slate-700">
          심장질환진단비(III)는 심장판막질환과 일부 부정맥질환, 심부전 등을 포함하고 있습니다.
        </p>

        <div class="space-y-2.5">
          <h3 class="text-sm sm:text-base font-bold text-slate-800">심장판막질환</h3>
          <div class="space-y-2 text-sm leading-relaxed text-slate-700">
            <p>심장에는 혈액이 일정한 방향으로 흐르도록 돕는 판막이 있습니다.</p>
            <p>
              이 판막에 문제가 발생하면 혈액이 원활하게 흐르지 못하거나 역류하는 등의 현상이 나타날 수 있습니다.
            </p>
            <p>분류표에는 승모판, 대동맥판, 삼첨판, 폐동맥판과 관련된 질병이 포함되어 있습니다.</p>
          </div>
        </div>

        <div class="space-y-2.5">
          <h3 class="text-sm sm:text-base font-bold text-slate-800">부정맥질환</h3>
          <div class="space-y-2 text-sm leading-relaxed text-slate-700">
            <p>부정맥은 심장박동이 정상적인 리듬을 벗어나는 질환을 말합니다.</p>
            <p>심장이 지나치게 빠르게 뛰거나 불규칙하게 뛰는 등 다양한 형태로 나타날 수 있습니다.</p>
            <p>심장질환진단비(III)에는 발작성 빈맥(I47), 심방세동 및 조동(I48)이 포함되어 있습니다.</p>
            <p>다만 부정맥에 해당하는 모든 질병코드가 포함된 것은 아닙니다.</p>
            <p>
              예를 들어 기타 심장부정맥(I49)은 제공된 심장질환진단비(III) 분류표에 기재되어 있지 않습니다.
            </p>
            <p>
              따라서 부정맥이라는 명칭만으로 보장 여부를 판단해서는 안 되며, 실제 진단코드와 가입한 계약의 약관 분류표를 함께 확인해야 합니다.
            </p>
          </div>
        </div>

        <div class="space-y-2.5">
          <h3 class="text-sm sm:text-base font-bold text-slate-800">심부전</h3>
          <div class="space-y-2 text-sm leading-relaxed text-slate-700">
            <p>심부전은 심장이 신체에 필요한 혈액을 충분히 공급하지 못하는 상태와 관련된 질환입니다.</p>
            <p>
              원인과 상태에 따라 다양한 치료가 필요할 수 있으며, 제공된 약관 분류표에서는 심부전(I50)을 보장대상 질병으로 명시하고 있습니다.
            </p>
            <p>
              이처럼 심장질환진단비(III)는 심근경색증이나 협심증과는 다른 종류의 심장질환을 포함하고 있다는 점에서 구분해 볼 필요가 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div id="section-6" class="space-y-3 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">6. 심장질환진단비 확인 시 주의사항</h2>
        <div class="space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            심장질환은 종류가 다양하고 비슷한 질병명이라도 진단코드에 따라 보험에서 보장하는 범위가 달라질 수 있습니다.
          </p>
          <p>
            현재 가입한 보험의 보장내용을 확인하거나 새로운 보험을 알아볼 때는 담보명뿐 아니라 다음 내용을 함께 확인해야 합니다.
          </p>
          <ul class="list-disc list-inside space-y-1 bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-sm text-slate-700">
            <li>가입한 상품의 정확한 담보명</li>
            <li>보험 가입 시기</li>
            <li>해당 계약에 적용되는 약관</li>
            <li>약관상 대상질병 분류표</li>
            <li>진단서 등에 기재된 질병코드</li>
            <li>진단확정 및 지급조건</li>
            <li>면책사항과 기타 약관상 제한사항</li>
          </ul>
          <p>
            같은 DB손해보험 상품이라도 가입 시기와 상품, 약관 개정 여부에 따라 담보명과 보장대상 분류가 달라질 수 있습니다.
          </p>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2 font-medium">
            <p>
              ※ 본 글의 분류표는 사용자에게 제공된 약관 자료를 토대로 정리한 정보이며, 개별 계약의 보험금 지급 여부를 확정하는 내용이 아닙니다.
            </p>
            <p>
              실제 보장 여부는 가입한 계약의 보험증권과 해당 시점의 약관, 진단 내용 및 보험회사의 심사 결과를 통해 확인해야 합니다.
            </p>
          </div>
        </div>
      </div>

      <div id="section-7" class="space-y-3 pt-2 scroll-mt-6">
        <h2 class="text-base sm:text-lg font-bold text-slate-900">7. DB손해보험 약관 분류표 확인</h2>
        <p class="text-sm leading-relaxed text-slate-700">
          보험브릿지에서는 보험사별·담보별 질병분류표와 질병코드, 보험약관을 비롯해 수술명 검색, 보험나이 계산기, 실손보험 모의계산기와 보험사별 정보를 확인할 수 있습니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-3">
          <div>
            <a href="/terms/db-ins/db_heart_simple/" class="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] text-white rounded-lg text-xs sm:text-sm font-bold hover:bg-[#1a4f5a] transition-colors">
              DB손해보험 심장질환진단비(I·II·III) 약관 분류표 확인
            </a>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="/terms/db-ins/" class="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors">
              DB손해보험 담보별 약관 분류표
            </a>
            <a href="/disease-code/" class="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors">
              질병코드 검색
            </a>
            <a href="/terms/" class="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors">
              보험사별 담보·질병코드 분류표
            </a>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 pt-1">
            보험브릿지에서 필요한 담보의 약관 분류표와 질병코드를 직접 확인해 보시기 바랍니다.
          </p>
        </div>
      </div>
    </section>
  `
};
