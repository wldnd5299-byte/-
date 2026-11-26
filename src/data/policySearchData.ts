import samsungLifeDisclosureRaw from './samsungLifeDisclosure.json';

export type PolicySalesStatus = '판매 중' | '판매중지';
export type OfficialDisclosureTab = '판매상품' | '판매중지상품';
export type PolicyStatusFilter = 'ALL' | PolicySalesStatus;

export interface PolicyProductRecord {
  id: string;
  insurerName: '삼성생명';
  productName: string;
  productCode: string | null;
  salesStatus: PolicySalesStatus;
  officialTab: OfficialDisclosureTab;
  salesStartDate: string | null;
  salesEndDate: string | null;
  rawSalesEndDate: string | null;
  channelGroup: string | null;
  classification: string | null;
  contractKind: '제도성특약' | '특약' | null;
  mergedRawRowCount: number;
  officialSourceUrl: string;
  verifiedPolicyUrl?: string;
}

interface RawSamsungLifeRow {
  id: string;
  productName: string;
  productCode: string;
  salesStatus: PolicySalesStatus;
  officialTab: OfficialDisclosureTab;
  salesStartDate: string;
  salesEndDate: string;
  rawSalesEndDate: string;
  channelGroup: string;
  classification: string;
  contractKind: '제도성특약' | '특약' | null;
}

interface RawSamsungLifePayload {
  insurerName: '삼성생명';
  officialSourceUrl: string;
  capturedAt: string;
  officialTabCounts: {
    allTab: number;
    onSaleTab: number;
    discontinuedTab: number;
  };
  rows: RawSamsungLifeRow[];
}

const rawPayload = samsungLifeDisclosureRaw as RawSamsungLifePayload;

export const SAMSUNG_LIFE_DISCLOSURE_META = {
  insurerName: rawPayload.insurerName,
  officialSourceUrl: rawPayload.officialSourceUrl,
  capturedAt: rawPayload.capturedAt,
  officialTabCounts: rawPayload.officialTabCounts,
};

function buildDisplayRecords(rawRows: RawSamsungLifeRow[]): {
  displayRecords: PolicyProductRecord[];
  rawTotalRows: number;
  rawOnSaleCount: number;
  rawDiscontinuedCount: number;
  mergedDuplicateRowCount: number;
  mergedGroupCount: number;
} {
  let rawOnSaleCount = 0;
  let rawDiscontinuedCount = 0;

  const dedupMap = new Map<
    string,
    {
      record: PolicyProductRecord;
      classifications: string[];
    }
  >();

  for (const row of rawRows) {
    if (row.salesStatus === '판매 중') rawOnSaleCount++;
    else rawDiscontinuedCount++;

    const dedupKey = [
      row.productCode || '',
      row.productName || '',
      row.salesStartDate || '',
      row.salesEndDate || '',
      row.salesStatus,
    ].join('||');

    const existing = dedupMap.get(dedupKey);
    if (!existing) {
      const initialClassifications = row.classification ? [row.classification] : [];
      dedupMap.set(dedupKey, {
        record: {
          id: row.id,
          insurerName: rawPayload.insurerName,
          productName: row.productName,
          productCode: row.productCode || null,
          salesStatus: row.salesStatus,
          officialTab: row.officialTab,
          salesStartDate: row.salesStartDate || null,
          salesEndDate: row.salesEndDate || null,
          rawSalesEndDate: row.rawSalesEndDate || null,
          channelGroup: row.channelGroup || null,
          classification: row.classification || null,
          contractKind: row.contractKind || null,
          mergedRawRowCount: 1,
          officialSourceUrl: rawPayload.officialSourceUrl,
        },
        classifications: initialClassifications,
      });
    } else {
      existing.record.mergedRawRowCount += 1;
      if (row.classification && !existing.classifications.includes(row.classification)) {
        existing.classifications.push(row.classification);
        existing.record.classification = existing.classifications.join(' · ');
      }
      if (!existing.record.contractKind && row.contractKind) {
        existing.record.contractKind = row.contractKind;
      } else if (existing.record.contractKind === '특약' && row.contractKind === '제도성특약') {
        existing.record.contractKind = '제도성특약';
      }
    }
  }

  let mergedGroupCount = 0;
  const displayRecords: PolicyProductRecord[] = [];
  for (const entry of dedupMap.values()) {
    if (entry.record.mergedRawRowCount > 1) mergedGroupCount++;
    displayRecords.push(entry.record);
  }

  return {
    displayRecords,
    rawTotalRows: rawRows.length,
    rawOnSaleCount,
    rawDiscontinuedCount,
    mergedDuplicateRowCount: rawRows.length - displayRecords.length,
    mergedGroupCount,
  };
}

const builtData = buildDisplayRecords(rawPayload.rows);

export const SAMSUNG_LIFE_POLICY_RECORDS: PolicyProductRecord[] = builtData.displayRecords;

export const SAMSUNG_LIFE_RAW_COUNTS = {
  rawTotalRows: builtData.rawTotalRows,
  rawOnSaleCount: builtData.rawOnSaleCount,
  rawDiscontinuedCount: builtData.rawDiscontinuedCount,
  mergedDuplicateRowCount: builtData.mergedDuplicateRowCount,
  mergedGroupCount: builtData.mergedGroupCount,
};

export function getSamsungLifeDisclosureStats(records: PolicyProductRecord[] = SAMSUNG_LIFE_POLICY_RECORDS) {
  let onSaleCount = 0;
  let discontinuedCount = 0;
  let verifiedDirectLinkCount = 0;
  const uniqueNames = new Set<string>();
  const onSaleUniqueNames = new Set<string>();
  const discontinuedUniqueNames = new Set<string>();

  for (const r of records) {
    uniqueNames.add(r.productName);
    if (r.salesStatus === '판매 중') {
      onSaleCount++;
      onSaleUniqueNames.add(r.productName);
    } else {
      discontinuedCount++;
      discontinuedUniqueNames.add(r.productName);
    }
    if (r.verifiedPolicyUrl) {
      verifiedDirectLinkCount++;
    }
  }

  return {
    displayTotalRows: records.length,
    onSaleCount,
    discontinuedCount,
    uniqueProductCount: uniqueNames.size,
    onSaleUniqueCount: onSaleUniqueNames.size,
    discontinuedUniqueCount: discontinuedUniqueNames.size,
    verifiedDirectLinkCount,
  };
}

export function normalizePolicySearchText(text: string): string {
  return text.trim().replace(/\s+/g, '').toLowerCase();
}

function normalizeForMatch(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '');
}

function stripCorporateModifiers(text: string): string {
  return text
    .replace(/\(무배당[^)]*\)/g, '')
    .replace(/\(무\)/g, '')
    .replace(/^무배당/g, '')
    .replace(/^무/g, '')
    .replace(/\+/g, '')
    .trim();
}

const OTHER_INSURER_KEYWORDS = [
  '삼성화재',
  '현대해상',
  'db손해보험',
  'db손해',
  'kb손해보험',
  'kb손해',
  '메리츠화재',
  '메리츠',
  '한화손해보험',
  '한화손해',
  '롯데손해보험',
  '롯데손해',
  '흥국화재',
  'nh농협손해보험',
  '농협손해보험',
  '하나손해보험',
  '교보생명',
  '한화생명',
  '신한라이프',
  '신한생명',
  '메트라이프',
  'kdb생명',
  '동양생명',
  '흥국생명',
  '미래에셋생명',
  'nh농협생명',
  '농협생명',
  '푸본현대생명',
  '하나생명',
  'db생명',
  'aia생명',
  '라이나생명',
  'abl생명',
  '처브라이프',
  'ibk연금보험',
  '카디프생명',
  '악사손해보험',
  'axa손해보험',
  '캐롯손해보험',
  'aig손해보험',
];

function stripSamsungLifePrefix(rawQuery: string): string {
  return rawQuery
    .trim()
    .replace(/^삼성생명보험\s*/i, '')
    .replace(/^삼성생명\s*/i, '')
    .trim();
}

function scoreRecord(
  compactQuery: string,
  tokens: string[],
  rawProductCompact: string,
  strippedProductCompact: string,
  codeCompact: string
): number {
  if (!compactQuery) return 1;

  if (codeCompact && codeCompact === compactQuery) return 1200;
  if (rawProductCompact === compactQuery) return 1100;
  if (strippedProductCompact === compactQuery) return 1000;

  if (rawProductCompact.startsWith(compactQuery)) return 920;
  if (strippedProductCompact.startsWith(compactQuery)) return 880;

  if (rawProductCompact.includes(compactQuery)) return 800;
  if (strippedProductCompact.includes(compactQuery)) return 760;

  const compactNoPlusQuery = compactQuery.replace(/\+/g, '');
  const rawNoPlus = rawProductCompact.replace(/\+/g, '');
  if (compactNoPlusQuery && rawNoPlus.includes(compactNoPlusQuery)) {
    return rawNoPlus.startsWith(compactNoPlusQuery) ? 740 : 700;
  }

  if (tokens.length > 0) {
    const allTokensInName = tokens.every((tok) => rawNoPlus.includes(tok.replace(/\+/g, '')));
    const allTokensInCode = codeCompact
      ? tokens.every((tok) => codeCompact.includes(tok))
      : false;

    if (allTokensInName) {
      const firstIdx = rawNoPlus.indexOf(tokens[0].replace(/\+/g, ''));
      return 620 - Math.min(firstIdx, 100);
    }
    if (allTokensInCode) {
      return 550;
    }
  }

  return 0;
}

export function searchPolicyProducts(
  query: string,
  statusFilter: PolicyStatusFilter = 'ALL'
): PolicyProductRecord[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const compactFull = normalizeForMatch(trimmed);
  const mentionsSamsungLife = compactFull.includes('삼성생명');
  if (!mentionsSamsungLife) {
    const mentionsOtherInsurer = OTHER_INSURER_KEYWORDS.some((kw) =>
      compactFull.includes(normalizeForMatch(kw))
    );
    if (mentionsOtherInsurer) {
      return [];
    }
  }

  const withoutInsurer = stripSamsungLifePrefix(trimmed);
  const isInsurerOnlyQuery = mentionsSamsungLife && withoutInsurer.length === 0;

  const tokens = withoutInsurer
    .split(/\s+/)
    .map((t) => normalizeForMatch(t))
    .filter(Boolean);
  const compactQuery = normalizeForMatch(withoutInsurer);

  const scored: { record: PolicyProductRecord; score: number }[] = [];

  for (const record of SAMSUNG_LIFE_POLICY_RECORDS) {
    if (statusFilter !== 'ALL' && record.salesStatus !== statusFilter) {
      continue;
    }

    if (isInsurerOnlyQuery) {
      scored.push({ record, score: 1 });
      continue;
    }

    const rawProductCompact = normalizeForMatch(record.productName);
    const strippedProductCompact = normalizeForMatch(stripCorporateModifiers(record.productName));
    const codeCompact = record.productCode ? normalizeForMatch(record.productCode) : '';

    const s = scoreRecord(
      compactQuery,
      tokens,
      rawProductCompact,
      strippedProductCompact,
      codeCompact
    );

    if (s > 0) {
      scored.push({ record, score: s });
    }
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.record.salesStatus !== b.record.salesStatus) {
      return a.record.salesStatus === '판매 중' ? -1 : 1;
    }
    const dateA = a.record.salesStartDate || '';
    const dateB = b.record.salesStartDate || '';
    if (dateB !== dateA) return dateB.localeCompare(dateA);
    return a.record.productName.localeCompare(b.record.productName, 'ko');
  });

  return scored.map((item) => item.record);
}

export function getPolicyRecordsByStatus(
  statusFilter: PolicyStatusFilter = 'ALL'
): PolicyProductRecord[] {
  const list =
    statusFilter === 'ALL'
      ? [...SAMSUNG_LIFE_POLICY_RECORDS]
      : SAMSUNG_LIFE_POLICY_RECORDS.filter((r) => r.salesStatus === statusFilter);

  list.sort((a, b) => {
    if (a.salesStatus !== b.salesStatus) {
      return a.salesStatus === '판매 중' ? -1 : 1;
    }
    const dateA = a.salesStartDate || '';
    const dateB = b.salesStartDate || '';
    if (dateB !== dateA) return dateB.localeCompare(dateA);
    return a.productName.localeCompare(b.productName, 'ko');
  });

  return list;
}
