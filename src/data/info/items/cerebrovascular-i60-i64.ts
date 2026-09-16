import { InfoArticle } from '../types';

export const CEREBROVASCULAR_I60_I64_ARTICLE: InfoArticle = {
  id: 'info-014',
  slug: 'cerebrovascular-i60-i64',
  title: '뇌혈관질환 I60~I64 질병코드 및 보험 담보 분류표 비교 | 보험브릿지',
  seoTitle: '뇌혈관질환 I60~I64 질병코드 및 보험 담보 분류표 비교 | 보험브릿지',
  h1: '뇌혈관질환 I60~I64 질병코드 및 보험 담보 분류표 비교',
  description: '질병코드 I60부터 I64까지 보험브릿지에 등록된 보험사 약관 담보 분류표의 질병명과 코드 기재 현황을 비교하고, 세부 분류표의 기재 방식을 확인합니다.',
  category: 'vascular',
  publishedAt: '2026-09-16',
  updatedAt: '2026-09-16',

  primaryRelatedLink: {
    title: 'KCD 질병코드 검색 바로가기',
    desc: 'I60~I64 질병코드 입력 시 등록된 주요 보험사 담보 분류표 기재 항목 전수 조회',
    url: '/disease-code/',
    badge: '질병코드 검색',
    iconType: 'terms'
  },

  secondaryTools: [
    'terms',
    'planner-goods'
  ],

  sourceDocs: [
    '보험브릿지 등록 주요 손해보험사 뇌혈관·뇌졸중 관련 특별약관 분류표',
    '각 보험사별 통합뇌질병·통합형뇌관련질환·질병수술 약관 별표 원문'
  ],

  tags: [
    'I60',
    'I61',
    'I62',
    'I63',
    'I64',
    '뇌혈관질환',
    '뇌졸중',
    '약관분류표',
    '질병코드'
  ],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          보험브릿지에 등록된 보험사별 약관 분류표를 기준으로 독립 코드 I60부터 I64까지의 질병명과 담보별 기재 현황을 비교합니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          ※ <strong>확인 안내:</strong> 본 문서는 현재 보험브릿지에 등록된 손해보험사 약관 분류표 원본의 코드 기재 현황을 확인하기 위한 비교 자료입니다. 실제 보험금 지급 여부 및 세부 보장 요건은 계약자가 가입한 해당 상품의 약관과 계약 내용을 별도로 확인해야 합니다.
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">1. I60~I64 질병코드와 약관상 질병명</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          보험브릿지 약관 데이터베이스에 등록된 분류표를 전수 대조한 결과, I60부터 I64까지의 질병코드는 각각 다음과 같은 질병명으로 기재되어 있습니다.
        </p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 w-24">질병코드</th>
                <th class="p-2.5 border-r border-slate-200">약관상 질병명 표기</th>
                <th class="p-2.5">등록 약관 내 기재 현황</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2.5 font-bold text-slate-900 border-r border-slate-200">I60</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200 font-medium">거미막하출혈<br><span class="text-xs text-slate-600 font-normal">(일부 약관은 '거미막하 출혈'로 띄어 표기)</span></td>
                <td class="p-2.5 text-slate-700">5개 보험사, 7개 담보 분류표에 총 7개 독립 코드로 기재</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900 border-r border-slate-200">I61</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200 font-medium">뇌내출혈</td>
                <td class="p-2.5 text-slate-700">5개 보험사, 7개 담보 분류표에 총 7개 독립 코드로 기재</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900 border-r border-slate-200">I62</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200 font-medium">기타 비외상성 두개내출혈<br><span class="text-xs text-slate-600 font-normal">(일부 약관은 '기타 비외상성 두개내 출혈'로 띄어 표기)</span></td>
                <td class="p-2.5 text-slate-700">5개 보험사, 7개 담보 분류표에 총 7개 독립 코드로 기재</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900 border-r border-slate-200">I63</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200 font-medium">뇌경색증</td>
                <td class="p-2.5 text-slate-700">6개 보험사, 9개 담보 분류표에 총 9개 독립 코드로 기재</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-slate-900 border-r border-slate-200">I64</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200 font-medium">출혈 또는 경색증으로 명시되지 않은 뇌졸중<br><span class="text-xs text-slate-600 font-normal">(일부 약관은 '출혈 또는 경색증으로 명시되지 않는 뇌졸중'으로 표기)</span></td>
                <td class="p-2.5 text-slate-700">6개 보험사, 8개 담보 분류표에 총 8개 독립 코드로 기재</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-600 mt-2">
          * 상기 보험사 수, 담보 수, 레코드 수는 현재 보험브릿지 데이터베이스에 등록된 약관 분류표 기준입니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">2. I60~I64 다섯 코드가 함께 기재된 담보 분류표</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          현재 등록된 약관 데이터 중 독립 코드 I60부터 I64까지 다섯 코드가 모두 기재되어 있는 담보는 총 7개입니다.
        </p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 w-28">보험사</th>
                <th class="p-2.5 border-r border-slate-200">담보명</th>
                <th class="p-2.5 border-r border-slate-200">포함된 독립 코드</th>
                <th class="p-2.5 w-24 text-center">약관 링크</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">DB손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">통합형뇌관련질환(I/II)</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/db-ins/db_integrated_brain/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">KB손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">통합뇌질병</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/kb-ins/kb_brain/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">메리츠화재</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">80대질병수술</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/meritz-fire/meritz_80diseases/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">메리츠화재</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">82대 질병</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/meritz-fire/meritz_82diseases/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">메리츠화재</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">131대 질병</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/meritz-fire/meritz_131diseases/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">한화손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">통합 뇌혈관질환</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/hanwha-general/hanwha_integrated_brain/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">하나손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">통합뇌질환</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200 font-mono text-xs">I60, I61, I62, I63, I64</td>
                <td class="p-2.5 text-center"><a href="/terms/hana-ins/hana_brain_disease/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-600 mt-2">
          * 상기 7개 담보는 분류표 원본에 I60부터 I64까지 다섯 개의 독립 코드가 모두 기재되어 있는 담보입니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">3. 보험사 약관의 세부 섹션 기재 방식</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          다섯 코드가 모두 기재된 담보 중에서도 약관 내부에서 코드가 어떤 세부 섹션으로 나뉘어 배치되는지 실제 3개 보험사의 기재 사례를 확인합니다.
        </p>
        <div class="space-y-3">
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs sm:text-sm">
            <p class="font-bold text-slate-900 mb-1.5">DB손해보험 「통합형뇌관련질환(I/II)」 약관 사례:</p>
            <ul class="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>&lt;세해보장 - 1&gt; 뇌졸중:</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60, I61, I62, I63</code> 기재</li>
              <li><strong>&lt;세해보장 - 2&gt; 뇌혈관질환(뇌졸중제외):</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I64</code> 기재</li>
            </ul>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs sm:text-sm">
            <p class="font-bold text-slate-900 mb-1.5">KB손해보험 「통합뇌질병」 약관 사례:</p>
            <ul class="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>뇌혈관질환(뇌출혈 · 뇌경색):</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60, I61, I62, I63</code> 기재</li>
              <li><strong>뇌혈관질환(뇌졸중제외):</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I64</code> 기재</li>
            </ul>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs sm:text-sm">
            <p class="font-bold text-slate-900 mb-1.5">하나손해보험 「통합뇌질환」 약관 사례:</p>
            <ul class="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>뇌혈관질환(뇌출혈 · 뇌경색):</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60, I61, I62, I63</code> 기재</li>
              <li><strong>뇌혈관질환(뇌졸중제외):</strong> <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I64</code> 기재</li>
            </ul>
          </div>
        </div>
        <p class="text-xs text-slate-600 mt-2">
          * 상기 사례와 같이 동일한 담보 내에서도 I60~I63은 '뇌졸중' 또는 '뇌출혈 · 뇌경색' 섹션에, I64는 '뇌졸중제외' 섹션에 분리 기재되는 방식이 확인됩니다. (이 구조는 해당 3개 보험사의 확인된 약관 기준이며 모든 보험사에 일률적으로 적용되는 것은 아닙니다.)
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">4. I63·I64 개별 기재 담보와 범위 코드 확인</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          이번 독립 코드 대조에서 다섯 코드가 모두 나타나지 않고, I63 또는 I64 중 특정 코드만 독립 코드로 확인된 담보 목록입니다.
        </p>
        <div class="overflow-x-auto my-2">
          <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th class="p-2.5 border-r border-slate-200 w-28">보험사</th>
                <th class="p-2.5 border-r border-slate-200">담보명</th>
                <th class="p-2.5 border-r border-slate-200">확인된 독립 코드 및 세부 섹션</th>
                <th class="p-2.5 w-24 text-center">약관 링크</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">DB손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">119대 질병수술</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200"><span class="font-mono font-bold text-slate-900">I63</span> (섹션: 뇌혈관질환)</td>
                <td class="p-2.5 text-center"><a href="/terms/db-ins/surgery119/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">농협손해보험</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">특정순환계질환(1~5종)</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200"><span class="font-mono font-bold text-slate-900">I63</span> (섹션: 5종 - 급성심근경색증, 뇌출혈, 뇌경색증 등)</td>
                <td class="p-2.5 text-center"><a href="/terms/nh-fire/nh_circulatory_1_5/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
              <tr>
                <td class="p-2.5 font-medium text-slate-900 border-r border-slate-200">현대해상</td>
                <td class="p-2.5 text-slate-800 border-r border-slate-200">뇌혈관질환(I/II)</td>
                <td class="p-2.5 text-slate-700 border-r border-slate-200"><span class="font-mono font-bold text-slate-900">I64</span> (섹션: [별표89] 뇌혈관질환(Ⅰ) 분류표)</td>
                <td class="p-2.5 text-center"><a href="/terms/hyundai-marine/hyundai_brain/" class="text-teal-700 font-semibold underline text-xs">약관 보기</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 leading-relaxed mt-3">
          <p class="font-bold text-slate-900 mb-1">범위 코드 기재 방식 확인:</p>
          보험사 약관 원본에는 독립 코드 방식 외에도 <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60~I69</code>(뇌혈관질환 등), <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60~I62</code>, <code class="bg-white px-1 py-0.5 border border-slate-200 rounded font-mono">I60~I64</code>와 같은 범위 코드가 함께 사용됩니다. 본 비교 수치는 범위 문자열이나 I63.0과 같은 세부 하위코드를 포함하지 않고 약관 원문에 독립 코드로 기재된 항목만 산출한 결과이므로, 개별 약관의 별표 전체 구조를 확인하는 것이 필요합니다.
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">5. 질병코드 검색과 보험사 약관 분류표 확인</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          보험브릿지에서는 주요 보험사의 담보별 분류표 데이터를 데이터베이스화하여 직접 검색할 수 있도록 제공하고 있습니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <p class="font-bold text-slate-900 mb-1">질병코드 검색 및 관련 안내:</p>
          <p class="text-slate-700 mb-2">
            <a href="/disease-code/" class="text-teal-700 font-bold underline">질병코드 검색</a> 화면에서 <code class="bg-white px-1.5 py-0.5 border border-slate-300 rounded font-mono font-bold">I60</code>, <code class="bg-white px-1.5 py-0.5 border border-slate-300 rounded font-mono font-bold">I63</code> 등 원하는 코드를 입력하면 해당 코드가 기재된 보험사별 담보 분류표 항목과 질병명을 실시간으로 전수 조회할 수 있습니다.
          </p>
          <p class="text-slate-600 text-xs mb-3">
            * 뇌경색 급성기 치료 시간(tPA 및 혈전제거술 골든타임)과 관련된 기준은 <a href="/info/cerebrovascular-golden-time/" class="text-teal-700 underline font-medium">뇌경색 골든타임 안내 정보글</a>에서 확인할 수 있습니다.
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <a href="/disease-code/" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-800 text-white rounded-lg text-xs font-semibold hover:bg-teal-900 transition-colors">
              질병코드 검색 바로가기 →
            </a>
            <a href="/terms/" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors">
              보험사별 담보 분류표 목록 →
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};
