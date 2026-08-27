import { InfoArticle } from '../types';

export const COLORECTAL_CANCER_TREATMENT_ARTICLE: InfoArticle = {
  id: 'info-007',
  slug: 'colorectal-cancer-treatment',
  title: '대장암 치료방법 및 부위별 수술·항암치료 가이드 (국가암지식정보센터)',
  description: '국가암지식정보센터·보건복지부 공식 자료 기준 대장암 치료 결정 핵심 기준(침윤도), 내시경 절제술, 결장·직장 부위별 수술법 및 장루 여부, 표적·면역항암제, 방사선치료(TNT) 정보를 정리합니다.',
  category: 'cancer',
  publishedAt: '2026-08-27',
  updatedAt: '2026-08-27',

  primaryRelatedLink: {
    title: '대장암 치료방법 영업자료 보기',
    desc: '국가암지식정보센터 및 보건복지부 공식 자료 기반 대장암 치료방법(내시경·수술·항암·방사선) 가이드',
    url: '/planner-goods/',
    badge: '영업자료실',
    iconType: 'planner-goods'
  },

  secondaryTools: [
    'planner-goods',
    'terms',
    'surgery',
    'dispute',
    'claim',
    'age'
  ],

  sourceDocs: [
    '보건복지부',
    '국립암센터',
    '국가암지식정보센터',
    '대한암학회 · 대한대장항문학회 · 대한종양내과학회 공동제작'
  ],

  tags: [
    '대장암',
    '대장암치료방법',
    '내시경절제술',
    '결장암수술',
    '직장암수술',
    '저위전방절제술',
    '복회음절제술',
    '표적치료제',
    '면역항암제',
    '방사선치료',
    '국가암지식정보센터'
  ],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">1. 대장암 치료방법 결정 핵심 기준</h2>
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-slate-800 leading-relaxed mb-3">
          대장암의 치료법을 결정하는 데서 가장 중요한 것은 <strong>종양의 크기가 아니라 암세포가 조직을 침투한 정도(침윤도)</strong>입니다. 대개 수술, 항암화학요법, 방사선치료를 적절히 병행합니다.
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">2. 대장암 병기 및 침윤도별 치료 경로</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="border border-teal-200 rounded-lg p-3.5 bg-teal-50/50">
            <span class="text-[11px] font-bold text-teal-800 block mb-1">Step 1. 조기 대장암</span>
            <strong class="text-sm font-bold text-slate-900 block mb-1.5">내시경적 절제술</strong>
            <p class="text-xs text-slate-600 leading-relaxed">
              암세포가 점막 또는 점막하층 일부에만 국한되고 분화도가 좋은 경우 내시경 용종절제술 시행.
            </p>
          </div>
          <div class="border border-blue-200 rounded-lg p-3.5 bg-blue-50/50">
            <span class="text-[11px] font-bold text-blue-800 block mb-1">Step 2. 국소 침윤 암</span>
            <strong class="text-sm font-bold text-slate-900 block mb-1.5">수술적 절제술</strong>
            <p class="text-xs text-slate-600 leading-relaxed">
              근육층 이상 침윤 시 광범위 결장절제술 또는 저위전방절제술 시행 (주변 림프절 함께 적출).
            </p>
          </div>
          <div class="border border-amber-200 rounded-lg p-3.5 bg-amber-50/50">
            <span class="text-[11px] font-bold text-amber-800 block mb-1">Step 3. 2~3기 진행성 암</span>
            <strong class="text-sm font-bold text-slate-900 block mb-1.5">수술 + 항암/방사선</strong>
            <p class="text-xs text-slate-600 leading-relaxed">
              직장암의 경우 수술 전 방사선/항암(TNT)으로 크기를 줄인 후 수술 시행 (항문 괄약근 보존).
            </p>
          </div>
          <div class="border border-rose-200 rounded-lg p-3.5 bg-rose-50/50">
            <span class="text-[11px] font-bold text-rose-800 block mb-1">Step 4. 4기 / 전이성 암</span>
            <strong class="text-sm font-bold text-slate-900 block mb-1.5">표적 / 면역 항암치료</strong>
            <p class="text-xs text-slate-600 leading-relaxed">
              간/폐 전이 시 선행 항암으로 크기 축소 후 절제, 또는 표적제(아바스틴/얼비툭스) 및 면역제(키트루다) 투여.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">3. 대장암 치료법 종류 및 적응증 비교</h2>
        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2.5 w-1/5">구분</th>
                <th class="px-3 py-2.5 w-1/3">적응증 및 대상</th>
                <th class="px-3 py-2.5">주요 치료 내용 및 특징</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="px-3 py-2.5 font-bold text-slate-900">내시경적 절제술</td>
                <td class="px-3 py-2.5 text-slate-700">암세포 분화도 우수, 점막/점막하층 일부 국한 조기 대장암</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">내시경 용종절제술(Snare Resection). 혈관/림프관 미침범 시 적용. 시술 후 정기 추적검사 필수.</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-blue-900">결장암 수술</td>
                <td class="px-3 py-2.5 text-slate-700">결장 부위 발생 암 (우측, 횡행, 좌측, 에스결장)</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">우측/횡행/좌측 결장절제술, 전방절제술. 암 위치에 따라 결장 및 광범위 림프절 절제 후 문합.</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-rose-900">직장암 수술</td>
                <td class="px-3 py-2.5 text-slate-700">직장 부위 발생 암 (상부, 중간부, 하부 직장)</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">저위전방절제술(괄약근 보존, 필요시 임시 회장루), 복회음절제술(하부 직장암 - 영구 인공항문/장루).</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-emerald-900">항암화학요법</td>
                <td class="px-3 py-2.5 text-slate-700">수술 후 재발 방지(2~3기), 수술 전 크기 감소, 전이성 암</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">보조/선행/전이/고식적 항암. 세포독성(5-FU, 옥살리플라틴 등) + 표적제(아바스틴, 얼비툭스) + 면역제(키트루다).</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-amber-900">방사선치료</td>
                <td class="px-3 py-2.5 text-slate-700">2~3기 진행성 직장암 (수술 전/후)</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">수술 전 방사선+항암(TNT)으로 종양 축소 및 항문 괄약근 보존율 향상. Neoadjuvant 면역치료 시 Watch & Wait 가능.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">4. 내시경적 절제술 (Endoscopic Resection)</h2>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700 leading-relaxed">
          <p>
            • <strong>적응증</strong>: 암세포 분화도가 우수하고, 혈관이나 림프관을 침범하지 않으며, 점막 또는 점막하층 일부에만 국한된 조기 대장암의 경우 수술 없이 내시경적 절제술을 시행할 수 있습니다.
          </p>
          <p>
            • <strong>시술 방법</strong>: 올가미(Snare)를 용종 기저부에 걸어 조인 후 고주파 전류로 절제하는 내시경 용종절제술(Snare Resection)을 적용합니다.
          </p>
          <p>
            • <strong>추적 검사</strong>: 시술 후 정기적인 추적검사가 필수적입니다.
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">5. 대장암 위치별 수술 방식 및 문합·장루 여부</h2>
        <p class="text-xs text-slate-600 mb-2 leading-relaxed">
          암세포가 근육층 이상 침윤한 경우 대장의 해당 부위와 주변 림프절을 광범위하게 절제합니다. 최근 최소침습 수술(복강경, 로봇수술) 비율이 급증하여 회복이 빠르고 통증이 대폭 감소했습니다.
        </p>
        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2.5 w-1/5">암 발생 위치</th>
                <th class="px-3 py-2.5 w-1/4">수술명</th>
                <th class="px-3 py-2.5">절제 및 문합 부위</th>
                <th class="px-3 py-2.5 w-1/4">인공항문(장루) 여부</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="px-3 py-2.5 font-bold text-slate-900">우측 결장</td>
                <td class="px-3 py-2.5 text-slate-700">우측 결장절제술</td>
                <td class="px-3 py-2.5 text-slate-700">맹장, 상행결장, 횡행결장 근위부 절제 ➔ 회장결장문합</td>
                <td class="px-3 py-2.5 text-slate-600 font-medium">없음 (자연 항문)</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-slate-900">횡행/좌측/에스결장</td>
                <td class="px-3 py-2.5 text-slate-700">횡행/좌측 결장절제술, 전방절제술</td>
                <td class="px-3 py-2.5 text-slate-700">해당 결장 절제 후 결장-결장 또는 결장-직장 문합</td>
                <td class="px-3 py-2.5 text-slate-600 font-medium">없음 (자연 항문)</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-blue-900">상부/중간부 직장</td>
                <td class="px-3 py-2.5 text-blue-900 font-semibold">저위전방절제술</td>
                <td class="px-3 py-2.5 text-slate-700">직장 절제 후 결장-직장 자동문합기 문합 (괄약근 보존)</td>
                <td class="px-3 py-2.5 text-blue-800 font-semibold">필요시 임시 회장루 (복구 가능)</td>
              </tr>
              <tr class="bg-rose-50/50">
                <td class="px-3 py-2.5 font-bold text-rose-900">하부 직장 (항문 3~5cm)</td>
                <td class="px-3 py-2.5 font-bold text-rose-900">복회음절제술 (Miles 수술)</td>
                <td class="px-3 py-2.5 text-slate-700">직장 전체 및 항문 괄약근 완전 절제 후 복부 적출</td>
                <td class="px-3 py-2.5 font-bold text-rose-700">영구 인공항문 (복부 장루) 조성</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">6. 항암화학요법 및 표적·면역치료제 라인업</h2>
        <div class="overflow-x-auto border border-slate-200 rounded-lg mb-3">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2.5 w-1/4">분류</th>
                <th class="px-3 py-2.5 w-1/3">대표 약제명 (성분명/상품명)</th>
                <th class="px-3 py-2.5">치료 특성 및 적응증</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="px-3 py-2.5 font-bold text-slate-900">세포독성 항암제</td>
                <td class="px-3 py-2.5 text-slate-700">5-FU, 카페시타빈(젤로다), 옥살리플라틴, 이리노테칸, 론서프</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">대장암 항암의 기본 근간. 수술 후 보조항암 6개월 투여 및 전이성 암 표준항암.</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-teal-900">표적치료제</td>
                <td class="px-3 py-2.5 text-slate-700">베바시주맙(아바스틴), 세툭시맙(얼비툭스), 엔코라페닙(브라프토비), 엔허투</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">신생혈관 억제(아바스틴), EGFR 억제(얼비툭스 - RAS 야생형), BRAF V600E, HER2 표적치료.</td>
              </tr>
              <tr class="bg-emerald-50/50">
                <td class="px-3 py-2.5 font-bold text-emerald-900">면역관문억제제</td>
                <td class="px-3 py-2.5 text-slate-700">펨브롤리주맙(키트루다), 니볼루맙(옵디보), 도스타릴맙(젬퍼리)</td>
                <td class="px-3 py-2.5 text-emerald-900 font-medium leading-relaxed">MSI-H / dMMR 유전자 변이 대상.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-950 space-y-1">
          <strong class="font-bold text-emerald-900 block">수술 전 선행면역치료 (Neoadjuvant Watch & Wait)</strong>
          <p class="leading-relaxed">
            dMMR/MSI-H 직장암 환자에게 수술 전 젬퍼리/키트루다 투여 시 <strong>완전관해율(cCR) 90~100% 달성</strong>하여 수술 없이 항문 괄약근과 신체 기능을 보존하는 비수술적 치료법이 가능합니다.
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">7. 방사선치료 및 전체수술전치료 (TNT)</h2>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700 leading-relaxed">
          <p>
            • <strong>방사선치료 적응증</strong>: 국소 재발 가능성이 높은 2~3기 진행성 직장암 환자를 대상으로 수술 전 또는 수술 후 총 25~30회 시행하여 국소 재발률을 대폭 낮춥니다.
          </p>
          <p>
            • <strong>전체수술전치료 (Total Neoadjuvant Therapy; TNT)</strong>: 수술 전에 방사선 치료와 항암화학요법을 모두 완료하는 치료 전략으로, 종양의 크기를 줄이고 항문 괄약근 보존 확률을 향상시킵니다.
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">8. 대장암 보장 상담 및 보험 참고 사항 (원본 자료 기준)</h2>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700 leading-relaxed">
          <p>
            • <strong>표적/면역항암 특약 준비</strong>: 아바스틴, 얼비툭스, 엔허투, 키트루다 등 비급여 고가 표적 및 면역항암제 투여 비중이 증가함에 따라 고액 약물치료비 특약 준비가 필요합니다.
          </p>
          <p>
            • <strong>수술비 및 인공항문(장루) 형성 특약</strong>: 하부 직장암(항문 3~5cm) 환자는 복회음절제술 시행 시 영구 인공항문(장루)을 조성해야 하므로 장루 형성 수술비 및 질병후유장해 특약 점검이 유효합니다.
          </p>
          <p>
            • <strong>대장 내시경 용종절제 및 D01 제자리암 대비</strong>: 건강검진 대장내시경 용종(선종) 절제 및 조직검사 시 상피내암(D01) 판정 사례가 빈번하므로 용종절제 수술비 및 유사암 진단비 사전 점검이 권장됩니다.
          </p>
        </div>
      </div>
    </section>
  `
};
