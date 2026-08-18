export interface InsurerTerm {
  id: string;
  name: string;
  type: "property" | "life";
  url: string;
  defaultSubTab?: any;
  tableRows?: any[];
}

export interface SubTabInfo {
  id: string;
  label: string;
  groupCount?: string;
}

export interface MeritzIntegratedTreatmentItem {
  category: string;
  name: string;
  count: string;
  "40m": string;
  "80m": string;
  "100m": string;
}

export interface MeritzPracticalTreatmentItem {
  category: string;
  name: string;
  count: string;
  "10m": string;
  "30m": string;
  "50m": string;
  "70m": string;
}

export interface MeritzNoncoveredTreatmentItem {
  category: string;
  name: string;
  count: string;
  "40m_under": string;
  "40m_over": string;
  "70m_under": string;
  "70m_over": string;
  "100m_under": string;
  "100m_over": string;
}

export interface MeritzNoncoveredPrimaryTreatmentItem {
  category: string;
  name: string;
  count: string;
  "30m_under": string;
  "30m_over": string;
  "50m_under": string;
  "50m_over": string;
  "70m_under": string;
  "70m_over": string;
}

export interface MeritzDiseaseIntegratedTreatmentItem {
  category: string;
  name: string;
  count: string;
  "20m": string;
  "40m": string;
  "70m": string;
}

export interface HyundaiSpecificCancerItem {
  num: string;
  name: string;
  code: string;
  subItems?: { name: string; code: string }[];
}

export interface DbCancerTableItem {
  num: string;
  name: string;
  code: string;
  subItems?: { name: string; code: string }[];
}

export interface KbBrainTableItem {
  category: string;
  items: { name: string; code: string }[];
}

export interface KbHeartItem {
  num: string;
  name: string;
  code: string;
}

export interface KbCancerTableItem {
  num: string;
  name: string;
  code: string;
  subItems?: { name: string; code: string }[];
}

export interface HyundaiSimultaneousItem {
  disease: string;
  code: string;
}

export interface HyundaiSimultaneousRow {
  targetDisease: string;
  targetCode: string;
  simultaneousItems: HyundaiSimultaneousItem[];
}

export interface Hyundai71Item {
  subGroup?: string;
  disease: string;
  code: string;
}

export interface Hyundai71Section {
  category: string;
  items: Hyundai71Item[];
}

export interface HanwhaHeartCategoryItem {
  category: string;
  items: { name: string; code: string }[];
}

export interface HanwhaIntegratedTreatmentItem {
  category: string;
  name: string;
  limit: string;
  plan10m: string;
  plan30m: string;
  plan40m: string;
}

export interface HanwhaInjuryIntegratedTreatmentItem {
  category: string;
  name: string;
  limit: string;
  luxury: string;
  general: string;
  saving: string;
}
