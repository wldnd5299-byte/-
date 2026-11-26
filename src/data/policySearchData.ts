export interface PolicySearchItem {
  id: string;
  insurerName: string;
  productGroupName: string;
  searchAliases: string[];
  officialDisclosureUrl: string;
  guideText: string;
}

export const POLICY_SEARCH_ITEMS: PolicySearchItem[] = [
  {
    id: 'samsung-life-hope-love',
    insurerName: '삼성생명',
    productGroupName: '희망사랑보험 계열',
    searchAliases: [
      '삼성생명 희망사랑보험',
      '희망사랑보험',
      '희망사랑보험 무배당',
      '희망사랑보험 1.0',
      '희망사랑보험 2.0',
      '희망사랑보험 3.0',
      '희망사랑보험 4.0',
      '희망사랑보험 5.0',
      '퓨처30 희망사랑보험',
      '퓨처30+희망사랑보험',
    ],
    officialDisclosureUrl:
      'https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M',
    guideText:
      '희망사랑보험은 판매 시기와 상품 버전에 따라 희망사랑보험, 희망사랑보험 1.0~5.0, 퓨처30+희망사랑보험 등으로 구분될 수 있습니다.\n보험증권에 기재된 정확한 상품명과 계약일을 확인한 후 삼성생명 공식 상품공시실에서 가입 당시 판매기간에 해당하는 약관을 선택해 주세요.',
  },
];

export function normalizePolicySearchText(text: string): string {
  return text.trim().replace(/\s+/g, '').toLowerCase();
}

export function searchPolicyItems(query: string): PolicySearchItem[] {
  const normalizedQuery = normalizePolicySearchText(query);
  if (!normalizedQuery) return [];

  return POLICY_SEARCH_ITEMS.filter((item) => {
    const normalizedInsurer = normalizePolicySearchText(item.insurerName);
    return item.searchAliases.some((alias) => {
      const normalizedAlias = normalizePolicySearchText(alias);
      return (
        normalizedQuery === normalizedAlias ||
        normalizedQuery === `${normalizedInsurer}${normalizedAlias}`
      );
    });
  });
}
