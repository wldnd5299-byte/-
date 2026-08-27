import { InfoArticle } from '../types';

export const HEAVY_ION_THERAPY_ARTICLE: InfoArticle = {
  id: 'info-006',
  slug: 'heavy-ion-therapy',
  title: '중입자치료 원리 및 대상 암종 (연세암병원 공식 가이드)',
  description: '연세암병원 중입자치료센터 공식 가이드 기준 탄소이온 Bragg Peak 원리, 입자선별 물리적 특성 비교, 주요 적용 암종 및 치료기간·비용 정보를 정리합니다.',
  category: 'cancer',
  publishedAt: '2026-08-27',
  updatedAt: '2026-08-27',

  primaryRelatedLink: {
    title: '중입자치료 상담 브리핑 및 인쇄용 PDF 자료 보기',
    desc: '연세암병원 공식 가이드 기반 브래그 피크 다이어그램 및 설계사 상담용 인쇄 리포트',
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
    '연세암병원 중입자치료센터 공식 가이드',
    '보건복지부',
    '대한방사선종양학회',
    'Nature 508 (133-138)'
  ],

  tags: ['중입자치료', '연세암병원', '브래그피크', 'BraggPeak', '탄소이온', '방사선치료'],
  isPublished: true,

  contentHtml: `
    <section class="space-y-6 text-slate-800">
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">1. 중입자치료(Heavy Ion Therapy) 개요 및 원리</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-3">
          중입자치료는 탄소입자(Carbon Ion)를 이용한 방사선치료 기법입니다. 수소입자보다 <strong>12배 무거운 탄소입자</strong>를 빛의 속도의 70%까지 가속하여 암세포(종양)만을 표적 조준하여 파괴합니다.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mb-4">
          기존 X-선 방사선치료 대비 <strong>2~3배 높은 상대적 생물학적 효과(RBE, 세포 살상 능력)</strong>를 나타내며 난치암 극복에 활용됩니다.
        </p>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">2. 방사선치료에 사용되는 광자, 전자, 입자선의 물리적 특성 비교</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-3">
          연세암병원 중입자치료센터 및 대한방사선종양학회 공식 가이드에 따른 방사선 종류별 물리적 특성 비교 데이터입니다.
        </p>

        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-center">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2.5 text-left pl-4">구분</th>
                <th class="px-3 py-2.5">X-선 치료 (X-ray)</th>
                <th class="px-3 py-2.5">전자선 치료 (Electron)</th>
                <th class="px-3 py-2.5">양성자치료 (Proton)</th>
                <th class="px-3 py-2.5 bg-blue-50 text-blue-900 font-bold">중입자치료 (Carbon)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="px-3 py-2 text-left pl-4 font-semibold text-slate-900">질량비 (Mass)</td>
                <td class="px-3 py-2 text-slate-600">질량 없음</td>
                <td class="px-3 py-2 text-slate-600">1</td>
                <td class="px-3 py-2 text-slate-600">2,000</td>
                <td class="px-3 py-2 bg-blue-50/50 font-bold text-blue-900">24,000 (양성자 대비 12배)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 text-left pl-4 font-semibold text-slate-900">전하비 (Charge)</td>
                <td class="px-3 py-2 text-slate-600">전하 없음</td>
                <td class="px-3 py-2 text-slate-600">-1</td>
                <td class="px-3 py-2 text-slate-600">+1</td>
                <td class="px-3 py-2 bg-blue-50/50 font-bold text-blue-900">+6 (6가 전하)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 text-left pl-4 font-semibold text-slate-900">상대적 생물학적 효과 (RBE)</td>
                <td class="px-3 py-2 text-slate-600">1</td>
                <td class="px-3 py-2 text-slate-600">1</td>
                <td class="px-3 py-2 text-slate-600">1.1</td>
                <td class="px-3 py-2 bg-blue-50/50 font-bold text-rose-700">2 ~ 3 배</td>
              </tr>
              <tr>
                <td class="px-3 py-2 text-left pl-4 font-semibold text-slate-900">에너지 방출 방식</td>
                <td class="px-3 py-2 text-slate-600">투과 중 지속 방출 (정상조직 영향)</td>
                <td class="px-3 py-2 text-slate-600">표면 근처 방출 (침투 얕음)</td>
                <td class="px-3 py-2 text-slate-600">브래그 피크 (Bragg Peak)</td>
                <td class="px-3 py-2 bg-blue-50/50 font-bold text-blue-900">초정밀 브래그 피크 (Bragg Peak)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">3. 브래그 피크(Bragg Peak) 에너지 전달 메커니즘</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-3">
          중입자는 체표면을 통과할 때는 방사선 선량이 적고, 몸속 암 조직 목표 지점(Bragg Peak)에 도달했을 때 최대 에너지를 쏟아낸 후 직후 소멸합니다. 이를 통해 종양 주변 정상 장기 및 세포의 손상을 줄이면서 암세포를 집중 타격합니다.
        </p>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">4. 방사선 종류별 DNA 절단 메커니즘 차이 (Nature 508)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-slate-200 rounded-lg p-4 bg-slate-50">
            <h3 class="text-sm font-bold text-slate-900 mb-1">X-선 / 양성자치료</h3>
            <p class="text-xs font-semibold text-amber-800 mb-2">DNA 단일 가닥 절단 (Single-Strand Break)</p>
            <p class="text-xs text-slate-600 leading-relaxed">
              에너지가 드문드문 전달되어 DNA 한쪽 가닥만 절단됩니다. 암세포가 스스로 DNA를 복구하여 살아남거나 재발할 위험이 잔존합니다.
            </p>
          </div>
          <div class="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <h3 class="text-sm font-bold text-blue-950 mb-1">중입자치료 (Carbon-Ion)</h3>
            <p class="text-xs font-bold text-blue-900 mb-2">DNA 이중 가닥 절단 (Clustered Double-Strand Break)</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              고밀도 탄소 입자가 암세포 DNA 이중 가닥을 완전히 파괴하여 암세포의 자체 복구가 불가능하며 암세포 사멸을 유도합니다.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">5. 중입자치료 3대 핵심 장점 및 주요 대상 암종</h2>
        <div class="overflow-x-auto border border-slate-200 rounded-lg">
          <table class="min-w-full text-xs text-slate-800 text-left">
            <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th class="px-3 py-2.5 w-1/4">핵심 장점</th>
                <th class="px-3 py-2.5 w-1/2">상세 메커니즘 및 치료 원리</th>
                <th class="px-3 py-2.5 w-1/4">주요 적용 암종 및 대상</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="px-3 py-2.5 font-bold text-blue-950">① 난치성 암 적용 가능</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">기존 수술이나 X-선 치료로 어려웠던 깊은 부위 및 항암제 저항성 암 파괴 가능. 세포 생물학적 살상 능력 2~3배 우수.</td>
                <td class="px-3 py-2.5 text-slate-900 font-medium">췌장암, 간암, 폐암, 전립선암, 두경부암, 척삭종, 육종(골육종)</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-emerald-950">② 부작용 감소 (브래그 피크)</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">몸 표면 방사량이 적고 암 조직 지점에서 최대 에너지를 쏟아낸 뒤 소멸하여 주변 정상 세포 손상 방지.</td>
                <td class="px-3 py-2.5 text-slate-900 font-medium">정상 장기 인접 암, 재발암 및 고령 환자</td>
              </tr>
              <tr>
                <td class="px-3 py-2.5 font-bold text-purple-950">③ 치료기간 단축 (환자 편의성)</td>
                <td class="px-3 py-2.5 text-slate-700 leading-relaxed">기존 방사선치료 평균 25회(1~2개월) 대비 중입자치료 평균 12회(3주 내외)로 단축. 입원 없이 통원 치료 가능.</td>
                <td class="px-3 py-2.5 text-slate-900 font-medium">통원 치료 대상자, 빠른 사회복귀 필요자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">6. 치료 비용 및 보험 참고 사항 (원본 자료 기준)</h2>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700 leading-relaxed">
          <p>
            • <strong>건강보험 미적용 비급여 치료</strong>: 중입자치료는 건강보험이 적용되지 않는 비급여 치료로, 회당/코스당 <strong>약 5,000만~1억 원</strong> 수준의 고액 치료비가 발생합니다.
          </p>
          <p>
            • <strong>보험 대비</strong>: 고액 비급여 치료비 부담에 대비하기 위해 표적항암 및 특수방사선치료비 특약(중입자치료 보장)이나 고액 암진단비 등 사전 보장 준비가 검토됩니다.
          </p>
        </div>
      </div>
    </section>
  `
};
