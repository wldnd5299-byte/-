import { INSURER_SUBTABS, getSectionsForInsurerSubTab, INSURER_TERMS_LIST } from '../data/terms/index';

export interface DiseaseCodeMatchItem {
  insurerId: string;
  insurerName: string;
  subTabId: string;
  subTabLabel: string;
  sectionTitle: string;
  disease: string;
  code: string;
  matchType: 'exact_code' | 'partial_code' | 'disease_name';
}

export interface InsurerCoverageGroup {
  subTabId: string;
  subTabLabel: string;
  items: DiseaseCodeMatchItem[];
}

export interface InsurerMatchGroup {
  insurerId: string;
  insurerName: string;
  coverages: InsurerCoverageGroup[];
  totalItemCount: number;
}

export interface SearchDiseaseCodeResult {
  rawQuery: string;
  normalizedQuery: string;
  matchedInsurersCount: number;
  matchedCoveragesCount: number;
  totalItemsCount: number;
  groups: InsurerMatchGroup[];
}

/**
 * 안전한 검색용 정규화:
 * - 영문 대문자 변환
 * - 앞뒤 공백 제거
 * - 중간 연속 공백 축소
 */
export function normalizeSearchKeyword(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .toUpperCase()
    .replace(/\s+/g, ' ');
}

/**
 * 질병명 비교용 공백 없는 정규화:
 * '뇌경색증'과 '뇌 경색증' 같은 단순 공백 차이 완화
 */
function normalizeForComparison(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '');
}

/**
 * KCD 질병코드 및 질병명 역조회 함수
 * 
 * [SOURCE-LOCK 및 엄격한 규칙 준수]
 * 1. SOURCE 원본(src/data/terms/*)에 존재하는 데이터만 대조
 * 2. 상/하위 코드 자동 확장 금지 (예: I20이 있다고 I20.0 검색 시 매칭하지 않음)
 * 3. 범위 코드(예: I20~I25) 내부 수학적 계산 금지 (문자열 자체만 취급)
 * 4. AI 추론 및 새로운 질병 데이터 생성 0
 */
export function searchDiseaseCodeInTerms(query: string): SearchDiseaseCodeResult {
  const rawQuery = query || '';
  const normalizedQuery = normalizeSearchKeyword(rawQuery);
  const compQuery = normalizeForComparison(rawQuery);

  if (!compQuery) {
    return {
      rawQuery,
      normalizedQuery,
      matchedInsurersCount: 0,
      matchedCoveragesCount: 0,
      totalItemsCount: 0,
      groups: [],
    };
  }

  // 보험사 매핑 테이블
  const insurerNameMap = new Map<string, string>();
  for (const ins of INSURER_TERMS_LIST) {
    insurerNameMap.set(ins.id, ins.name);
  }

  const matches: DiseaseCodeMatchItem[] = [];

  // 전체 보험사 및 담보 전수 순회
  for (const [insurerId, subTabs] of Object.entries(INSURER_SUBTABS)) {
    const insurerName = insurerNameMap.get(insurerId) || insurerId;

    for (const subTab of subTabs) {
      const sections = getSectionsForInsurerSubTab(insurerId, subTab.id) || [];

      for (const sec of sections) {
        if (!sec || !sec.items) continue;
        const sectionTitle = (sec.title || sec.group || '').trim() || '분류표';

        for (const it of sec.items) {
          const rawCode = (it.code || '').trim();
          const rawDisease = (it.disease || it.name || '').trim();

          if (!rawCode && !rawDisease) continue;

          const compCode = normalizeForComparison(rawCode);
          const compDisease = normalizeForComparison(rawDisease);

          let matched = false;
          let matchType: DiseaseCodeMatchItem['matchType'] = 'exact_code';

          // 1. 코드 완전 일치 (대소문자/공백 무시)
          if (compCode && compCode === compQuery) {
            matched = true;
            matchType = 'exact_code';
          }
          // 2. 질병명 매칭 (공백 무시 부분일치 허용)
          else if (compDisease && compDisease.includes(compQuery)) {
            matched = true;
            matchType = 'disease_name';
          }
          // 3. 복합 코드 필드에서 특정 코드 분리 매칭 (콤마나 슬래시, 줄바꿈으로 나열된 경우에만 정밀 분리)
          // 주의: 범위코드(I20~I25)는 하위코드로 쪼개지 않고 원본 문자열 그대로 둠
          else if (compCode && (rawCode.includes(',') || rawCode.includes('\n') || rawCode.includes('/'))) {
            const splitCodes = rawCode
              .split(/[\n,\/]+/)
              .map((c: string) => normalizeForComparison(c))
              .filter(Boolean);
            if (splitCodes.includes(compQuery)) {
              matched = true;
              matchType = 'exact_code';
            }
          }

          if (matched) {
            matches.push({
              insurerId,
              insurerName,
              subTabId: subTab.id,
              subTabLabel: subTab.label,
              sectionTitle,
              disease: rawDisease, // 원본 질병명 그대로 유지
              code: rawCode,       // 원본 코드 그대로 유지
              matchType,
            });
          }
        }
      }
    }
  }

  // 보험사별 -> 담보별 그룹화
  const insurerMap = new Map<string, Map<string, DiseaseCodeMatchItem[]>>();
  const coverageSet = new Set<string>();

  for (const m of matches) {
    coverageSet.add(`${m.insurerId}:::${m.subTabId}`);
    if (!insurerMap.has(m.insurerId)) {
      insurerMap.set(m.insurerId, new Map());
    }
    const covMap = insurerMap.get(m.insurerId)!;
    if (!covMap.has(m.subTabId)) {
      covMap.set(m.subTabId, []);
    }
    covMap.get(m.subTabId)!.push(m);
  }

  // INSURER_TERMS_LIST 순서 보존
  const groups: InsurerMatchGroup[] = [];
  for (const ins of INSURER_TERMS_LIST) {
    if (!insurerMap.has(ins.id)) continue;
    const covMap = insurerMap.get(ins.id)!;
    const coverages: InsurerCoverageGroup[] = [];
    let insurerItemCount = 0;

    covMap.forEach((items, subTabId) => {
      coverages.push({
        subTabId,
        subTabLabel: items[0]?.subTabLabel || subTabId,
        items,
      });
      insurerItemCount += items.length;
    });

    groups.push({
      insurerId: ins.id,
      insurerName: ins.name,
      coverages,
      totalItemCount: insurerItemCount,
    });
  }

  return {
    rawQuery,
    normalizedQuery,
    matchedInsurersCount: groups.length,
    matchedCoveragesCount: coverageSet.size,
    totalItemsCount: matches.length,
    groups,
  };
}
