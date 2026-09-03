/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Insurance Bridge (보험브릿지) 통합검색 인덱스 엔진
 * 사이트 내의 담보분류표, 질병코드(KCD), 보험사 청구안내, 종수술비, 판례·분쟁, 도구·계산기, 영업자료를 통합 검색합니다.
 */

import { INSURERS_DATA } from '../data';
import { PRECEDENTS_DATA } from './disputeData';
import { INITIAL_SURGERY_RECORDS } from '../surgeryData';
import { SURGERY_1TO7_RECORDS } from '../data1to7';
import { SURGERY_1TO8_RECORDS } from '../data1to8';
import { INSURER_SUBTABS, getSectionsForInsurerSubTab } from './terms/index';

export type ViewState = 'home' | 'claim' | 'terms' | 'surgery' | 'indemnity' | 'age' | 'planner-goods' | 'dispute' | 'info';

export interface SearchResultItem {
  id: string;
  title: string;
  desc: string;
  category: '담보분류표' | '보험사' | '수술' | '판례·분쟁' | '영업자료' | '계산기' | '도구';
  view: ViewState;
  insurerId?: string;
  subTab?: string;
  filter?: string;
  query?: string;
  keywords?: string[];
  exactCode?: string;
}

const INSURER_KOREAN_NAMES: Record<string, string> = {
  'db-ins': 'DB손해보험',
  'samsung-fire': '삼성화재',
  'kb-ins': 'KB손해보험',
  'meritz-fire': '메리츠화재',
  'hanwha-general': '한화손해보험',
  'lotte-ins': '롯데손해보험',
  'hyundai-marine': '현대해상',
  'nh-fire': '농협손해보험',
  'hana-ins': '하나손해보험'
};

function normalizeString(str: string): string {
  if (!str) return '';
  return str.toLowerCase().replace(/[\s\-_/.,()·＆&[\]]+/g, '');
}

let cachedSearchIndex: SearchResultItem[] | null = null;

export function buildSearchIndex(): SearchResultItem[] {
  if (cachedSearchIndex) return cachedSearchIndex;

  const items: SearchResultItem[] = [];

  // 1. 계산기 & 핵심 도구 페이지
  items.push(
    {
      id: 'tool-age-calc',
      title: '보험나이 계산기',
      desc: '고객 생년월일 기준 보험나이와 상령일 자동 연산',
      category: '계산기',
      view: 'age',
      keywords: ['보험나이', '상령일', '나이계산', '보험나이계산기', '상령일계산', '만나이', '생년월일']
    },
    {
      id: 'tool-sangryeong',
      title: '상령일 계산',
      desc: '보험나이가 한 살 올라가는 날(상령일) 계산 및 확인',
      category: '계산기',
      view: 'age',
      keywords: ['상령일', '보험나이', '상령일계산', '상령일자']
    },
    {
      id: 'tool-indemnity-calc',
      title: '실손의료비 계산기',
      desc: '1세대부터 5세대까지 세대별 맞춤형 예상 실손의료비 계산 및 자기부담금 산출',
      category: '계산기',
      view: 'indemnity',
      keywords: ['실손', '실손의료비', '실손계산기', '실손보험', '1세대실손', '2세대실손', '3세대실손', '4세대실손', '5세대실손', '급여', '비급여']
    },
    {
      id: 'tool-surgery-search',
      title: '수술명 검색',
      desc: '표준 질병 및 상해 종수술비(1~5종, 1~7종, 1~8종) 약관 정보 수술명 조회',
      category: '수술',
      view: 'surgery',
      keywords: ['수술명검색', '수술검색', '수술분류표', '종수술비', '1-5종', '1-7종', '1-8종', '수술비']
    },
    {
      id: 'tool-dispute-db',
      title: '판례 ＆ 분쟁조정 DB',
      desc: '금융감독원 분쟁조정사례, 대법원 중요 판례 및 실무 보상 분쟁 가이드',
      category: '판례·분쟁',
      view: 'dispute',
      keywords: ['판례', '분쟁조정', '금감원', '보상분쟁', '판례검색', '소송', '조정결정']
    },
    {
      id: 'tool-planner-goods',
      title: '영업자료실',
      desc: '보험설계사 맞춤 영업 브리핑 자료, 통계 및 보상 요약집',
      category: '영업자료',
      view: 'planner-goods',
      keywords: ['영업자료', '영업자료실', '브리핑자료', '설계사자료', '영업자료홍보몰', '화법']
    },
    {
      id: 'tool-claim-guide',
      title: '보험금 청구 서류 및 고객센터 연락처',
      desc: '전국 손해보험사 및 생명보험사 고객센터 연락처, 팩스번호, 청구서류 안내',
      category: '보험사',
      view: 'claim',
      keywords: ['보험금청구', '청구서류', '고객센터', '팩스번호', '보험금청구서', '구비서류', '팩스']
    }
  );

  // 2. 보험사 정보 (청구/고객센터/팩스)
  for (const ins of INSURERS_DATA) {
    const shortName = ins.name.replace(/(손해보험|해상|화재|생명|라이프|보험)/g, '').trim();
    items.push({
      id: `ins-${ins.id}`,
      title: `${ins.name} 고객센터 및 청구서류`,
      desc: `고객센터: ${ins.phone} | 팩스: ${ins.fax || '정보 없음'}${ins.monitoringPhone ? ` | 모니터링: ${ins.monitoringPhone}` : ''}`,
      category: '보험사',
      view: 'claim',
      insurerId: ins.id,
      query: ins.name,
      keywords: [
        ins.name,
        shortName,
        `${shortName}손보`,
        `${shortName}화재`,
        `${shortName}생명`,
        `${shortName}해상`,
        ins.phone,
        ins.fax || ''
      ]
    });
  }

  // 3. 담보별 분류표, 서브탭, 세부 질병코드(KCD)
  for (const [insId, subTabs] of Object.entries(INSURER_SUBTABS)) {
    const insName = INSURER_KOREAN_NAMES[insId] || insId;
    const shortInsName = insName.replace(/(손해보험|해상|화재|생명|라이프|보험)/g, '').trim();

    for (const subTab of subTabs) {
      // 서브탭 자체 인덱스
      items.push({
        id: `terms-tab-${insId}-${subTab.id}`,
        title: `${subTab.label} 분류표 - ${insName}`,
        desc: `${insName} ${subTab.label} 약관 기준 및 질병/수술 분류표`,
        category: '담보분류표',
        view: 'terms',
        insurerId: insId,
        subTab: subTab.id,
        keywords: [
          subTab.label,
          insName,
          shortInsName,
          `${insName} ${subTab.label}`,
          `${shortInsName} ${subTab.label}`,
          subTab.id
        ]
      });

      // 서브탭 내부 섹션 및 질병코드 인덱스
      const sections = getSectionsForInsurerSubTab(insId, subTab.id) || [];
      const seenKeys = new Set<string>();

      for (const sec of sections) {
        if (!sec) continue;
        const secTitle = sec.title || (sec.group ? `${sec.group}` : '');
        if (secTitle && !seenKeys.has(secTitle)) {
          seenKeys.add(secTitle);
          items.push({
            id: `terms-sec-${insId}-${subTab.id}-${secTitle}`,
            title: `${secTitle} - ${insName} ${subTab.label}`,
            desc: `${insName} ${subTab.label} > ${secTitle} 분류표 및 세부 코드`,
            category: '담보분류표',
            view: 'terms',
            insurerId: insId,
            subTab: subTab.id,
            filter: secTitle,
            keywords: [secTitle, insName, shortInsName, subTab.label]
          });
        }

        if (Array.isArray(sec.items)) {
          for (const it of sec.items) {
            if (!it) continue;
            const disease = (it.disease || it.name || '').trim();
            const code = (it.code || '').trim();
            if (code || disease) {
              const itemKey = `${disease}_${code}`;
              if (!seenKeys.has(itemKey)) {
                seenKeys.add(itemKey);
                items.push({
                  id: `terms-item-${insId}-${subTab.id}-${itemKey}`,
                  title: `${disease}${code ? ` (${code})` : ''} - ${insName} ${subTab.label}`,
                  desc: `${insName} ${subTab.label} ${secTitle ? `> ${secTitle}` : ''} 질병코드: ${code || '해당없음'}`,
                  category: '담보분류표',
                  view: 'terms',
                  insurerId: insId,
                  subTab: subTab.id,
                  filter: code || disease,
                  exactCode: code,
                  keywords: [
                    disease,
                    code,
                    insName,
                    shortInsName,
                    subTab.label,
                    ...(code ? [code.toLowerCase(), code.toUpperCase()] : [])
                  ]
                });
              }
            }
          }
        }
      }
    }
  }

  // 4. 판례 & 분쟁조정
  for (const p of PRECEDENTS_DATA) {
    const cleanTitle = p.title.replace(/\n+/g, ' ').trim();
    items.push({
      id: `dispute-${p.id}`,
      title: cleanTitle,
      desc: `사건번호: ${p.caseNumber} | 분류: ${p.category} | ${p.summary.replace(/\n+/g, ' ').slice(0, 60)}...`,
      category: '판례·분쟁',
      view: 'dispute',
      filter: p.id,
      keywords: [
        cleanTitle,
        p.category,
        p.caseNumber,
        ...(p.tags || []).map((t: string) => t.replace(/^#/, ''))
      ]
    });
  }

  // 5. 종수술비 수술명
  const seenSurgeries = new Set<string>();
  const allSurgeries = [
    ...INITIAL_SURGERY_RECORDS,
    ...SURGERY_1TO7_RECORDS,
    ...SURGERY_1TO8_RECORDS
  ];

  for (const s of allSurgeries) {
    if (!s || !s.name) continue;
    const sName = s.name.trim();
    if (seenSurgeries.has(sName)) continue;
    seenSurgeries.add(sName);

    items.push({
      id: `surgery-${s.id || sName}`,
      title: `${sName} (종수술비)`,
      desc: `종구분: ${s.grade1to5 || s.grade1to7 || s.grade1to8 || '약관확인'} | 코드: ${s.code || '-'} | ${s.category}`,
      category: '수술',
      view: 'surgery',
      filter: sName,
      keywords: [sName, s.code || '', s.category || '', '수술']
    });
  }

  cachedSearchIndex = items;
  return cachedSearchIndex;
}

export function searchSite(query: string, limit: number = 10): SearchResultItem[] {
  if (!query || !query.trim()) return [];

  const rawQuery = query.trim();
  const q = normalizeString(rawQuery);
  if (!q) return [];

  const index = buildSearchIndex();
  const scored: { item: SearchResultItem; score: number }[] = [];

  for (const item of index) {
    const titleNorm = normalizeString(item.title);
    const keywordsNorm = (item.keywords || []).map(normalizeString);
    const codeNorm = item.exactCode ? normalizeString(item.exactCode) : '';

    let score = 0;

    // 1. 질병코드 정확 일치 (예: I20, C16, M51, S001)
    if (codeNorm && codeNorm === q) {
      score = 150;
    }
    // 2. 제목 정확 일치
    else if (titleNorm === q) {
      score = 120;
    }
    // 3. 키워드 정확 일치 (예: '삼성화재', '보험나이', '실손', '협심증', '상령일', '영업자료')
    else if (keywordsNorm.some(k => k === q)) {
      score = 100;
      // 계산기나 영업자료 같은 핵심 도구 이름인 경우 보너스
      if (item.category === '계산기' || item.category === '영업자료' || item.category === '도구' || item.category === '보험사') {
        score += 10;
      }
    }
    // 4. 질병코드 전방 일치 (예: I2 -> I20)
    else if (codeNorm && codeNorm.startsWith(q)) {
      score = 90;
    }
    // 5. 제목 전방 일치
    else if (titleNorm.startsWith(q)) {
      score = 80;
    }
    // 6. 키워드 전방 일치
    else if (keywordsNorm.some(k => k.startsWith(q))) {
      score = 70;
    }
    // 7. 제목 부분 일치
    else if (titleNorm.includes(q)) {
      score = 60;
    }
    // 8. 키워드 부분 일치
    else if (keywordsNorm.some(k => k.includes(q))) {
      score = 40;
    }
    // 9. 설명(desc) 부분 일치
    else if (normalizeString(item.desc).includes(q)) {
      score = 20;
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  // 점수 높은 순으로 정렬
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(s => s.item);
}
