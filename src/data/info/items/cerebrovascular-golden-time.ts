import { InfoArticle } from '../types';

export const CEREBROVASCULAR_GOLDEN_TIME_ARTICLE: InfoArticle = {
  id: 'info-012',
  slug: 'cerebrovascular-golden-time',
  title: '뇌경색 골든타임 | tPA 혈전용해술·혈전제거술 시간 안내',
  seoTitle: '뇌경색 골든타임 | tPA 혈전용해술·혈전제거술 시간 안내 | 보험브릿지',
  h1: '뇌경색 골든타임과 혈전용해술·혈전제거술 안내',
  description: '뇌경색 급성기 치료에서 확인되는 정맥 내 혈전용해술(IV-tPA)과 기계적 혈전제거술의 시간 기준, 뇌혈관질환 KCD 코드와 건강보험 산정특례 기준을 안내합니다.',
  category: 'vascular',
  publishedAt: '2026-09-15',
  updatedAt: '2026-09-15',

  primaryRelatedLink: {
    title: 'KCD 질병코드 검색 바로가기',
    desc: 'I60부터 I69까지 뇌혈관질환 관련 질병분류코드와 보험사별 담보 분류표 확인',
    url: '/disease-code/',
    badge: '질병코드 검색',
    iconType: 'terms'
  },

  secondaryTools: [
    'terms',
    'surgery',
    'planner-goods'
  ],

  sourceDocs: [
    '건강보험심사평가원 급여적정성평가 기준',
    '보건복지부 고시 본인일부부담금 산정특례에 관한 기준',
    '한국표준질병·사인분류(KCD)'
  ],

  tags: [
    '뇌경색골든타임',
    '혈전용해술',
    'tPA',
    '혈전제거술',
    '뇌혈관질환',
    'KCD질병코드',
    '산정특례'
  ],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          급성 뇌경색은 뇌혈관이 막혀 혈류가 차단되는 질환으로, 응급실 이송 후 신속한 영상 검사와 진단을 통해 적합한 급성기 치료를 결정하게 됩니다.
        </p>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          ※ <strong>안내 기준:</strong> 본 문서는 건강보험심사평가원 급여적정성평가 기준, 보건복지부 본인일부부담금 산정특례 기준, 한국표준질병·사인분류(KCD)를 바탕으로 급성기 치료 시간 기준 및 제도적 조건을 안내합니다. 개별 환자의 치료 방법은 담당 의료진의 임상 판단에 따라 결정됩니다.
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">뇌경색 골든타임과 급성기 치료</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          뇌경색이 발생한 급성기에는 뇌 조직의 손상을 줄이기 위해 혈류를 다시 공급하는 재관류 치료가 표준 치료 프로토콜로 검토됩니다. 치료 단계는 환자의 증상 발생 시각과 혈관 상태에 따라 약물을 투여하는 정맥 내 혈전용해술과 기구를 이용하는 기계적 혈전제거술로 구분됩니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">정맥 내 혈전용해술 IV-tPA 시간 기준</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          정맥 내 혈전용해술(IV-tPA)은 혈관을 막고 있는 혈전을 용해하는 약물을 정맥으로 투여하는 치료 방법입니다.
        </p>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <ul class="list-disc list-inside space-y-1.5 text-slate-700">
            <li><strong>시간 기준:</strong> 증상 발현 후 <strong>4.5시간 이내</strong> 투여</li>
            <li><strong>적용 과정:</strong> 응급실 도착 후 뇌 전산화단층촬영(CT) 또는 자기공명영상(MRI) 검사를 시행하여 출혈 여부를 배제한 뒤 투약 여부를 판단합니다.</li>
            <li><strong>임상 유의점:</strong> 증상 발생 후 시간이 경과한 경우 환자 상태에 따라 약물 투여 여부가 달라질 수 있으므로 의료진의 정밀 평가가 요구됩니다.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">기계적 혈전제거술 EVT 시간 기준</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          기계적 혈전제거술(동맥 내 혈관재개통술, EVT)은 카테터를 혈관에 삽입하여 혈전을 기계적으로 포획하거나 흡인하여 제거하는 시술입니다.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <ul class="list-disc list-inside space-y-1.5 text-slate-700">
            <li><strong>시행 조건:</strong> <strong>대혈관 폐색 시</strong> 검토</li>
            <li><strong>시간 기준:</strong> 대혈관 폐색 시 <strong>6~24시간 내</strong> 시행</li>
            <li><strong>적용 특성:</strong> 대퇴동맥 등을 통해 카테터를 진입시켜 진행하며, 수술분류표 및 특약 기준에 따라 수술비 보장 항목에서 분류를 확인하게 됩니다.</li>
          </ul>
        </div>
        <p class="text-xs text-slate-500 mt-2">
          관련 수술 분류 및 약관상 수술명 정의는 <a href="/surgery/" class="text-emerald-700 font-semibold hover:underline">수술명 검색 및 수술분류표</a>에서 확인할 수 있습니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">뇌혈관질환 KCD 코드 확인</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          한국표준질병·사인분류(KCD)에서 뇌혈관질환은 <strong>I60~I69</strong> 범위로 분류되며, 세부 질환별로 개별 코드가 독립적으로 부여되어 있습니다.
        </p>
        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs sm:text-sm text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2 w-28 text-center">KCD 코드</th>
                <th class="px-4 py-2">질병명 (SOURCE 기준 명칭)</th>
                <th class="px-4 py-2">분류 범위 구분</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-blue-700">I60</td>
                <td class="px-4 py-2 font-semibold">거미막하출혈 (지주막하출혈)</td>
                <td class="px-4 py-2 text-slate-600">출혈성 뇌혈관질환</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-blue-700">I61</td>
                <td class="px-4 py-2 font-semibold">뇌내출혈</td>
                <td class="px-4 py-2 text-slate-600">출혈성 뇌혈관질환</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-blue-700">I62</td>
                <td class="px-4 py-2 font-semibold">기타 비외상성 두개내출혈</td>
                <td class="px-4 py-2 text-slate-600">출혈성 뇌혈관질환</td>
              </tr>
              <tr class="hover:bg-slate-50 bg-blue-50/40">
                <td class="px-3 py-2 font-mono font-bold text-center text-blue-700">I63</td>
                <td class="px-4 py-2 font-bold text-slate-900">뇌경색증</td>
                <td class="px-4 py-2 text-blue-900 font-medium">허혈성 뇌혈관질환</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-blue-700">I64</td>
                <td class="px-4 py-2 font-semibold">출혈 또는 경색증으로 명시되지 않는 뇌졸중</td>
                <td class="px-4 py-2 text-slate-600">급성 뇌졸중</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-slate-600">I65</td>
                <td class="px-4 py-2">뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착</td>
                <td class="px-4 py-2 text-slate-600">뇌전동맥 협착</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-slate-600">I66</td>
                <td class="px-4 py-2">뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착</td>
                <td class="px-4 py-2 text-slate-600">대뇌동맥 협착</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-slate-600">I67</td>
                <td class="px-4 py-2">기타 뇌혈관 질환</td>
                <td class="px-4 py-2 text-slate-600">기타 뇌혈관질환</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-slate-600">I68</td>
                <td class="px-4 py-2">달리 분류된 질환에서의 뇌혈관 장애</td>
                <td class="px-4 py-2 text-slate-600">타 질환 동반 장애</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="px-3 py-2 font-mono font-bold text-center text-slate-600">I69</td>
                <td class="px-4 py-2">뇌혈관 질환의 후유증</td>
                <td class="px-4 py-2 text-slate-600">후유증</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 mt-2">
          각 코드별 상세 약관 분류표는 <a href="/disease-code/" class="text-blue-600 font-semibold hover:underline">질병코드 검색</a>에서 확인할 수 있습니다.
        </p>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">뇌혈관질환 건강보험 산정특례 기준</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          뇌혈관질환은 국민건강보험 중증질환 산정특례 대상으로 등록될 경우 요양급여 비용 중 본인부담이 경감되지만, 적용 기간과 대상 항목에 명확한 조건이 있습니다.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <span class="text-xs font-bold text-emerald-800 block mb-1">건강보험 급여 본인부담금</span>
            <div class="text-xl font-bold text-emerald-950 mb-1">본인부담금 5%</div>
            <p class="text-xs text-slate-600 leading-relaxed">
              건강보험 요양급여 항목에 한하여 본인부담율이 경감됩니다.
            </p>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <span class="text-xs font-bold text-slate-700 block mb-1">급성기 적용 기간 기준</span>
            <div class="text-xl font-bold text-slate-900 mb-1">최대 30일</div>
            <p class="text-xs text-slate-600 leading-relaxed">
              급성기 입원 기준 최대 30일 적용되며, 수술 미시행 시 14일 기준이 적용됩니다.
            </p>
          </div>
        </div>
        <div class="mt-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong>※ 비급여 항목 적용 제외:</strong> 산정특례 제도는 건강보험 급여 항목에 한정되며, 비급여 치료 항목, 간병인 비용, 상급병실료 차액, 일부 비급여 재활치료 등은 전액 환자 본인이 부담하게 됩니다.
        </div>
      </div>

      <div>
        <h2 class="text-base sm:text-lg font-bold text-slate-900 mb-2">보험 약관에서 뇌혈관질환 확인하기</h2>
        <p class="text-sm leading-relaxed text-slate-700 mb-3">
          보험계약의 실제 보장 범위는 가입한 상품과 계약 당시 약관의 질병분류표를 확인해야 합니다. 동일한 뇌혈관 질환이라도 담보명(뇌출혈, 뇌졸중, 뇌혈관질환 등)에 따라 약관에 명시된 대상 KCD 코드 범위가 상이할 수 있습니다.
        </p>
        <p class="text-sm leading-relaxed text-slate-700">
          가입 시점의 상품별 분류표와 약관 세부 기준은 <a href="/terms/" class="text-blue-600 font-bold hover:underline">보험사별 담보 분류표</a>에서 직접 조회할 수 있습니다.
        </p>
      </div>
    </section>
  `
};
