// Terms data master index
export * from "./types";
export * from "./insurers";
export * from "./db";
export * from "./samsung";
export * from "./kb";
export * from "./meritz";
export * from "./hanwha";
export * from "./lotte";
export * from "./hyundai";

import { SubTabInfo } from "./types";

export const normalizeString = (str: string) => {
  return (str || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[-_.,/()[\]]/g, "");
};

export const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const INSURER_SUBTABS: Record<string, SubTabInfo[]> = {
  "db-ins": [
    { id: "cancer", label: "통합암(유사암제외)", groupCount: "10개 그룹" },
    { id: "db_cancer_metastasis", label: "전이암", groupCount: "10개 그룹" },
    { id: "db_11_specific_cancer", label: "11대 특정암", groupCount: "11개 항목" },
    { id: "db_high_cost_cancer", label: "고액암", groupCount: "5개 항목" },
    { id: "db_heart_1", label: "허혈심장질환 I", groupCount: "2개 그룹" },
    { id: "db_heart_2", label: "허혈심장질환 II", groupCount: "5개 그룹" },
    { id: "db_heart_simple", label: "단순심장질환", groupCount: "단일 분류" },
    { id: "db_brain_1", label: "뇌혈관질환 I", groupCount: "2개 그룹" },
    { id: "db_brain_2", label: "뇌혈관질환 II", groupCount: "3개 그룹" },
    { id: "db_major_5vascular_brain", label: "5대혈관 뇌질환", groupCount: "5대 분류" },
    { id: "surgery1_5", label: "1-5종 수술(신약관)", groupCount: "1~5종 분류" },
    { id: "surgery1_5_old", label: "1-5종 수술(구약관)", groupCount: "구약관 분류" },
    { id: "surgery13", label: "13대 질병수술", groupCount: "13개 분류" },
    { id: "surgery16", label: "16대 질병수술", groupCount: "16개 분류" },
    { id: "surgery18", label: "18대 질병수술", groupCount: "18개 분류" },
    { id: "surgery21", label: "21대 질병수술", groupCount: "21개 분류" },
    { id: "surgery40", label: "40대 질병수술", groupCount: "40개 분류" },
    { id: "surgery77", label: "77대 질병수술", groupCount: "77개 분류" },
    { id: "surgery106", label: "106대 질병수술", groupCount: "106개 분류" },
    { id: "surgery119", label: "119대 질병수술", groupCount: "119개 분류" },
    { id: "surgery120", label: "120대 질병수술", groupCount: "120개 분류" }
  ],
  "samsung-fire": [
    { id: "samsung_cancer", label: "암 분류표", groupCount: "9개 그룹" },
    { id: "samsung_major_cancer", label: "주요암 분류", groupCount: "주요 분류" },
    { id: "samsung_111", label: "111대 수술", groupCount: "111개 분류" },
    { id: "samsung_15_disease", label: "15대 질병수술", groupCount: "15개 분류" },
    { id: "samsung_21", label: "21대 질병수술", groupCount: "21개 분류" }
  ],
  "kb-ins": [
    { id: "kb_cancer", label: "통합암 분류", groupCount: "9개 그룹" },
    { id: "kb_cancer_metastasis", label: "암 전이 분류", groupCount: "9개 그룹" },
    { id: "kb_metastasis", label: "전이암 상세", groupCount: "전이암" },
    { id: "kb_specific_cancer2", label: "특정암 분류", groupCount: "특정암" },
    { id: "kb_10high_cancer", label: "10대 고액암", groupCount: "10대 고액암" },
    { id: "kb_brain", label: "뇌혈관질환", groupCount: "뇌혈관" },
    { id: "kb_heart_1", label: "허혈성심장 1", groupCount: "허혈성 1" },
    { id: "kb_heart_2", label: "허혈성심장 2", groupCount: "허혈성 2" },
    { id: "kb_surgery1_5", label: "1-5종 수술", groupCount: "1~5종 분류" },
    { id: "kb_integrated_treatment", label: "통합치료비", groupCount: "통합치료비" },
    { id: "kb_surgery14", label: "14대 수술", groupCount: "14개 분류" },
    { id: "kb_surgery16", label: "16대 수술", groupCount: "16개 분류" },
    { id: "kb_surgery20", label: "20대 수술", groupCount: "20개 분류" },
    { id: "kb_surgery21", label: "21대 수술", groupCount: "21개 분류" },
    { id: "kb_surgery101", label: "101대 수술", groupCount: "101개 분류" },
    { id: "kb_surgery112", label: "112대 수술", groupCount: "112개 분류" },
    { id: "kb_surgery116", label: "116대 수술", groupCount: "116개 분류" }
  ],
  "meritz-fire": [
    { id: "meritz_integrated_cancer", label: "통합암(전이암포함)", groupCount: "10개 그룹" },
    { id: "meritz_integrated_cancer_metastasis", label: "전이암", groupCount: "10개 그룹" },
    { id: "meritz_integrated_treatment", label: "통합치료비", groupCount: "기본형" },
    { id: "meritz_practical_treatment", label: "실속치료비", groupCount: "실속형" },
    { id: "meritz_noncovered_treatment", label: "비급여치료비", groupCount: "비급여형" },
    { id: "meritz_noncovered_primary_treatment", label: "비급여원발치료비", groupCount: "비급여원발형" },
    { id: "meritz_disease_integrated_treatment", label: "질병통합치료비", groupCount: "질병치료비" },
    { id: "meritz_surgery1_5", label: "1-5종 수술", groupCount: "1~5종 분류" },
    { id: "meritz_7diseases", label: "7대 질병수술", groupCount: "7개 분류" },
    { id: "meritz_18diseases", label: "18대 질병수술", groupCount: "18개 분류" },
    { id: "meritz_30diseases", label: "30대 질병수술", groupCount: "30개 분류" },
    { id: "meritz_32diseases", label: "32대 질병수술", groupCount: "32개 분류" },
    { id: "meritz_64diseases", label: "64대 질병수술", groupCount: "64개 분류" },
    { id: "meritz_82diseases", label: "82대 질병수술", groupCount: "82개 분류" },
    { id: "meritz_131diseases", label: "131대 질병수술", groupCount: "131개 분류" },
    { id: "meritz_6heart", label: "6대 심장질환", groupCount: "6대 분류" },
    { id: "meritz_5diseases", label: "5대 질병수술", groupCount: "5대 분류" }
  ],
  "hanwha-general": [
    { id: "hanwha_integrated_cancer", label: "여성 통합암", groupCount: "11개 그룹" },
    { id: "hanwha_integrated_cancer_primary", label: "여성 원발암", groupCount: "원발암" },
    { id: "hanwha_integrated_metastatic_cancer", label: "여성 전이암", groupCount: "전이암" },
    { id: "hanwha_integrated_heart_1", label: "심혈관질환 1", groupCount: "심혈관 1" },
    { id: "hanwha_integrated_heart_2", label: "심혈관질환 2", groupCount: "심혈관 2" },
    { id: "hanwha_cardiovascular_5", label: "심혈관 5대분류", groupCount: "5개 탭" },
    { id: "hanwha_integrated_brain", label: "뇌혈관질환", groupCount: "뇌혈관" },
    { id: "hanwha_integrated_treatment", label: "통합치료비", groupCount: "통합치료비" },
    { id: "hanwha_injury_integrated_treatment", label: "상해통합치료비", groupCount: "상해치료비" },
    { id: "hanwha_surgery1_5", label: "1-5종 수술", groupCount: "1~5종 분류" },
    { id: "hanwha_women_life_1_5", label: "여성생활 1-5종", groupCount: "여성생활" },
    { id: "hanwha_women_major_life_1_5", label: "여성주요생활 1-5종", groupCount: "여성주요생활" },
    { id: "hanwha_124diseases", label: "124대 질병수술", groupCount: "124개 분류" },
    { id: "hanwha_34diseases", label: "34대 질병수술", groupCount: "34개 분류" },
    { id: "hanwha_56diseases", label: "56대 질병수술", groupCount: "56개 분류" },
    { id: "hanwha_18diseases", label: "18대 질병수술", groupCount: "18개 분류" },
    { id: "hanwha_16diseases", label: "16대 질병수술", groupCount: "16개 분류" },
    { id: "hanwha_14diseases", label: "14대 질병수술", groupCount: "14개 분류" }
  ],
  "lotte-ins": [
    { id: "lotte_integrated_cancer", label: "통합암(유사암제외)", groupCount: "8개 그룹" },
    { id: "lotte_integrated_cancer_with_metastasis", label: "통합암(전이포함)", groupCount: "8개 그룹" },
    { id: "lotte_integrated_metastatic_cancer", label: "통합전이암", groupCount: "8개 그룹" },
    { id: "lotte_brain_disease", label: "뇌혈관질환", groupCount: "6개 그룹" },
    { id: "lotte_cardiovascular", label: "허혈성심장질환", groupCount: "5개 그룹" },
    { id: "lotte_surgery1_5", label: "1-5종 수술" },
    { id: "lotte_surgery7", label: "7대 수술" },
    { id: "lotte_surgery16", label: "16대 수술" },
    { id: "lotte_surgery18", label: "18대 수술" },
    { id: "lotte_surgery20", label: "20대 수술" },
    { id: "lotte_surgery34", label: "34대 수술" },
    { id: "lotte_surgery64", label: "64대 수술" }
  ],
  "hyundai-marine": [
    { id: "hyundai_male_cancer", label: "남성 통합암", groupCount: "11개 그룹" },
    { id: "hyundai_female_cancer", label: "여성 통합암", groupCount: "11개 그룹" },
    { id: "hyundai_specific_cancer", label: "특정암", groupCount: "특정암" },
    { id: "hyundai_heart", label: "심혈관질환", groupCount: "심혈관" },
    { id: "hyundai_brain", label: "뇌혈관질환", groupCount: "뇌혈관" },
    { id: "hyundai_surgery1_5", label: "1-5종 수술", groupCount: "1~5종 분류" },
    { id: "hyundai_7diseases", label: "7대 질병수술", groupCount: "7개 분류" },
    { id: "hyundai_14diseases", label: "14대 질병수술", groupCount: "14개 분류" },
    { id: "hyundai_16diseases", label: "16대 질병수술", groupCount: "16개 분류" },
    { id: "hyundai_71diseases", label: "71대 질병수술", groupCount: "71개 분류" },
    { id: "hyundai_120diseases", label: "120대 질병수술", groupCount: "120개 분류" }
  ]
};

import {
  MERITZ_INTEGRATED_CANCER_SECTIONS,
  MERITZ_INTEGRATED_CANCER_METASTASIS_SECTIONS,
  MERITZ_INTEGRATED_TREATMENT_SECTIONS,
  MERITZ_PRACTICAL_TREATMENT_SECTIONS,
  MERITZ_NONCOVERED_TREATMENT_SECTIONS,
  MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS,
  MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS,
  MERITZ_SURGERY1_5_SECTIONS,
  MERITZ_7_DISEASES_SECTIONS,
  MERITZ_18_DISEASES_SECTIONS,
  MERITZ_30_DISEASES_SECTIONS,
  MERITZ_32_DISEASES_SECTIONS,
  MERITZ_64_DISEASES_SECTIONS,
  MERITZ_82_DISEASES_SECTIONS,
  MERITZ_131_DISEASES_SECTIONS,
  MERITZ_6HEART_DISEASES_SECTIONS,
  MERITZ_5_DISEASES_SECTIONS,
  MERITZ_5_DISEASES_SUMMARY,
  MERITZ_INTEGRATED_TREATMENT_SUMMARY,
  MERITZ_PRACTICAL_TREATMENT_SUMMARY,
  MERITZ_NONCOVERED_TREATMENT_SUMMARY,
  MERITZ_NONCOVERED_PRIMARY_TREATMENT_SUMMARY,
  MERITZ_DISEASE_INTEGRATED_TREATMENT_SUMMARY,
  MERITZ_64_DISEASES_SUMMARY_SECTIONS
} from "./meritz";

import {
  SAMSUNG_CANCER_SECTIONS,
  SAMSUNG_MAJOR_CANCER_SECTIONS,
  SAMSUNG_111_SURGERY_SECTIONS,
  SAMSUNG_15_SURGERY_SECTIONS,
  SAMSUNG_21_SURGERY_SECTIONS,
  SAMSUNG_CANCER_SUMMARY
} from "./samsung";

import {
  KB_CANCER_SECTIONS,
  KB_CANCER_METASTASIS_SECTIONS,
  KB_METASTASIS_SECTIONS,
  KB_SPECIFIC_CANCER2_SECTIONS,
  KB_10HIGH_CANCER_SECTIONS,
  KB_BRAIN_SECTIONS,
  KB_HEART_SPECIFIC1_SECTIONS,
  KB_HEART_SPECIFIC2_SECTIONS,
  KB_SURGERY_1_5_SECTIONS,
  KB_INTEGRATED_TREATMENT_SECTIONS,
  KB_SURGERY_14_SECTIONS,
  KB_SURGERY_16_SECTIONS,
  KB_SURGERY_20_SECTIONS,
  KB_SURGERY_21_SECTIONS,
  KB_SURGERY_101_SECTIONS,
  KB_SURGERY_112_SECTIONS,
  KB_SURGERY_116_SECTIONS,
  KB_SURGERY_101_SUMMARY_SECTIONS,
  KB_SURGERY_112_SUMMARY_SECTIONS,
  KB_SURGERY_116_SUMMARY_SECTIONS
} from "./kb";

import {
  HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS,
  HANWHA_WOMEN_PRIMARY_CANCER_SECTIONS,
  HANWHA_WOMEN_METASTATIC_CANCER_SECTIONS,
  HANWHA_HEART_1_SECTIONS,
  HANWHA_HEART_2_SECTIONS,
  HANWHA_CARDIOVASCULAR_5_ALL_SECTIONS,
  HANWHA_INTEGRATED_BRAIN_SECTIONS,
  HANWHA_INTEGRATED_TREATMENT_SECTIONS,
  HANWHA_INJURY_INTEGRATED_TREATMENT_SECTIONS,
  HANWHA_SURGERY_1_5_SECTIONS,
  HANWHA_WOMEN_LIFE_1_5_SECTIONS,
  HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS,
  HANWHA_124_DISEASES_SECTIONS,
  HANWHA_34_DISEASES_SECTIONS,
  HANWHA_56_DISEASES_SECTIONS,
  HANWHA_18_DISEASES_SECTIONS,
  HANWHA_16_DISEASES_SECTIONS,
  HANWHA_14_DISEASES_SECTIONS,
  HANWHA_HEART_1_SUMMARY,
  HANWHA_HEART_2_SUMMARY,
  HANWHA_WOMEN_PRIMARY_CANCER_SUMMARY,
  HANWHA_WOMEN_METASTATIC_CANCER_SUMMARY,
  HANWHA_WOMEN_INTEGRATED_CANCER_SUMMARY,
  HANWHA_INTEGRATED_TREATMENT_SUMMARY,
  HANWHA_INJURY_INTEGRATED_TREATMENT_SUMMARY,
  HANWHA_124_DISEASES_SUMMARY,
  HANWHA_34_DISEASES_SUMMARY,
  HANWHA_56_DISEASES_SUMMARY,
  HANWHA_18_DISEASES_SUMMARY,
  HANWHA_16_DISEASES_SUMMARY,
  HANWHA_14_DISEASES_SUMMARY
} from "./hanwha";

import {
  LOTTE_INTEGRATED_CANCER_SECTIONS,
  LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SECTIONS,
  LOTTE_INTEGRATED_METASTATIC_CANCER_SECTIONS,
  LOTTE_BRAIN_DISEASE_SECTIONS,
  LOTTE_CARDIOVASCULAR_SECTIONS,
  LOTTE_SURGERY1_5_SECTIONS,
  LOTTE_SURGERY_7_SECTIONS,
  LOTTE_SURGERY_16_SECTIONS,
  LOTTE_SURGERY_18_SECTIONS,
  LOTTE_SURGERY_20_SECTIONS,
  LOTTE_SURGERY_34_SECTIONS,
  LOTTE_SURGERY_64_SECTIONS,
  LOTTE_INTEGRATED_CANCER_SUMMARY,
  LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SUMMARY,
  LOTTE_INTEGRATED_METASTATIC_CANCER_SUMMARY,
  LOTTE_BRAIN_DISEASE_SUMMARY,
  LOTTE_CARDIOVASCULAR_SUMMARY,
  LOTTE_64_DISEASES_SUMMARY
} from "./lotte";

import {
  HYUNDAI_MALE_CANCER_SECTIONS,
  HYUNDAI_FEMALE_CANCER_SECTIONS,
  HYUNDAI_SPECIFIC_CANCER_SECTIONS,
  HYUNDAI_HEART_SECTIONS,
  HYUNDAI_BRAIN_I_SECTIONS,
  HYUNDAI_BRAIN_II_SECTIONS,
  HYUNDAI_SURGERY_1_5_SECTIONS,
  HYUNDAI_7_DISEASES_SECTIONS,
  HYUNDAI_14_DISEASES_SECTIONS,
  HYUNDAI_16_DISEASES_SECTIONS,
  HYUNDAI_71_DISEASES_SECTIONS,
  HYUNDAI_120_DISEASES_SECTIONS,
  HYUNDAI_MALE_CANCER_SUMMARY,
  HYUNDAI_FEMALE_CANCER_SUMMARY,
  HYUNDAI_HEART_SUMMARY,
  HYUNDAI_BRAIN_I_SUMMARY,
  HYUNDAI_BRAIN_II_SUMMARY,
  HYUNDAI_7_DISEASES_SUMMARY,
  HYUNDAI_14_DISEASES_SUMMARY,
  HYUNDAI_16_DISEASES_SUMMARY,
  HYUNDAI_71_SUMMARY_SECTIONS,
  HYUNDAI_120_SUMMARY_SECTIONS
} from "./hyundai";

import {
  DB_CANCER_SECTIONS,
  DB_CANCER_METASTASIS_SECTIONS,
  DB_11_SPECIFIC_CANCER_SECTIONS,
  DB_HIGH_COST_CANCER_SECTIONS,
  DB_HEART_I_SECTIONS,
  DB_HEART_II_SECTIONS,
  DB_HEART_SIMPLE_SECTIONS,
  DB_BRAIN_I_SECTIONS,
  DB_BRAIN_II_SECTIONS,
  DB_MAJOR_5VASCULAR_BRAIN_SECTIONS,
  DB_SURGERY_1_5_SECTIONS,
  DB_SURGERY_1_5_OLD_SECTIONS,
  DB_SURGERY_13_SECTIONS,
  DB_SURGERY_16_SECTIONS,
  DB_SURGERY_18_SECTIONS,
  DB_SURGERY_21_SECTIONS,
  DB_SURGERY_40_SECTIONS,
  DB_SURGERY_77_SECTIONS,
  DB_SURGERY_106_SECTIONS,
  DB_SURGERY_119_SECTIONS,
  DB_SURGERY_120_SECTIONS,
  DB_HEART_I_SUMMARY,
  DB_HEART_II_SUMMARY,
  DB_BRAIN_I_SUMMARY,
  DB_BRAIN_II_SUMMARY,
  DB_SURGERY_40_SUMMARY_SECTIONS,
  DB_SURGERY_77_SUMMARY_SECTIONS,
  DB_SURGERY_106_SUMMARY_SECTIONS,
  DB_SURGERY_119_SUMMARY_SECTIONS,
  DB_SURGERY_120_SUMMARY_SECTIONS,
  DB_SURGERY_1_5_SUMMARY_SECTIONS,
  DB_SURGERY_1_5_OLD_SUMMARY_SECTIONS
} from "./db";

export function getSummaryForSubTab(
  insurerId: string,
  subTabId: string,
  hyundaiBrainSubTab?: string,
  dbHeartTab?: string,
  dbBrainTab?: string
): any {
  switch (insurerId) {
    case "meritz-fire":
      if (subTabId === "meritz_5diseases") return MERITZ_5_DISEASES_SUMMARY;
      if (subTabId === "meritz_integrated_treatment") return MERITZ_INTEGRATED_TREATMENT_SUMMARY;
      if (subTabId === "meritz_practical_treatment") return MERITZ_PRACTICAL_TREATMENT_SUMMARY;
      if (subTabId === "meritz_noncovered_treatment") return MERITZ_NONCOVERED_TREATMENT_SUMMARY;
      if (subTabId === "meritz_noncovered_primary_treatment") return MERITZ_NONCOVERED_PRIMARY_TREATMENT_SUMMARY;
      if (subTabId === "meritz_disease_integrated_treatment") return MERITZ_DISEASE_INTEGRATED_TREATMENT_SUMMARY;
      if (subTabId === "meritz_64diseases") return MERITZ_64_DISEASES_SUMMARY_SECTIONS;
      return null;

    case "samsung-fire":
      if (subTabId === "samsung_cancer") return SAMSUNG_CANCER_SUMMARY;
      return null;

    case "kb-ins":
      if (subTabId === "kb_surgery101") return KB_SURGERY_101_SUMMARY_SECTIONS;
      if (subTabId === "kb_surgery112") return KB_SURGERY_112_SUMMARY_SECTIONS;
      if (subTabId === "kb_surgery116") return KB_SURGERY_116_SUMMARY_SECTIONS;
      return null;

    case "hanwha-general":
      if (subTabId === "hanwha_integrated_heart_1") return HANWHA_HEART_1_SUMMARY;
      if (subTabId === "hanwha_integrated_heart_2") return HANWHA_HEART_2_SUMMARY;
      if (subTabId === "hanwha_integrated_cancer_primary") return HANWHA_WOMEN_PRIMARY_CANCER_SUMMARY;
      if (subTabId === "hanwha_integrated_metastatic_cancer") return HANWHA_WOMEN_METASTATIC_CANCER_SUMMARY;
      if (subTabId === "hanwha_integrated_cancer") return HANWHA_WOMEN_INTEGRATED_CANCER_SUMMARY;
      if (subTabId === "hanwha_integrated_treatment") return HANWHA_INTEGRATED_TREATMENT_SUMMARY;
      if (subTabId === "hanwha_injury_integrated_treatment") return HANWHA_INJURY_INTEGRATED_TREATMENT_SUMMARY;
      if (subTabId === "hanwha_124diseases") return HANWHA_124_DISEASES_SUMMARY;
      if (subTabId === "hanwha_34diseases") return HANWHA_34_DISEASES_SUMMARY;
      if (subTabId === "hanwha_56diseases") return HANWHA_56_DISEASES_SUMMARY;
      if (subTabId === "hanwha_18diseases") return HANWHA_18_DISEASES_SUMMARY;
      if (subTabId === "hanwha_16diseases") return HANWHA_16_DISEASES_SUMMARY;
      if (subTabId === "hanwha_14diseases") return HANWHA_14_DISEASES_SUMMARY;
      return null;

    case "lotte-ins":
      if (subTabId === "lotte_integrated_cancer") return LOTTE_INTEGRATED_CANCER_SUMMARY;
      if (subTabId === "lotte_integrated_cancer_with_metastasis") return LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SUMMARY;
      if (subTabId === "lotte_integrated_metastatic_cancer") return LOTTE_INTEGRATED_METASTATIC_CANCER_SUMMARY;
      if (subTabId === "lotte_brain_disease") return LOTTE_BRAIN_DISEASE_SUMMARY;
      if (subTabId === "lotte_cardiovascular") return LOTTE_CARDIOVASCULAR_SUMMARY;
      if (subTabId === "lotte_surgery64") return LOTTE_64_DISEASES_SUMMARY;
      return null;

    case "hyundai-marine":
      if (subTabId === "hyundai_male_cancer") return HYUNDAI_MALE_CANCER_SUMMARY;
      if (subTabId === "hyundai_female_cancer") return HYUNDAI_FEMALE_CANCER_SUMMARY;
      if (subTabId === "hyundai_heart") return HYUNDAI_HEART_SUMMARY;
      if (subTabId === "hyundai_brain") return (hyundaiBrainSubTab === "2") ? HYUNDAI_BRAIN_II_SUMMARY : HYUNDAI_BRAIN_I_SUMMARY;
      if (subTabId === "hyundai_7diseases") return HYUNDAI_7_DISEASES_SUMMARY;
      if (subTabId === "hyundai_14diseases") return HYUNDAI_14_DISEASES_SUMMARY;
      if (subTabId === "hyundai_16diseases") return HYUNDAI_16_DISEASES_SUMMARY;
      if (subTabId === "hyundai_71diseases") return HYUNDAI_71_SUMMARY_SECTIONS;
      if (subTabId === "hyundai_120diseases") return HYUNDAI_120_SUMMARY_SECTIONS;
      return null;

    default: // DB
      if (subTabId === "db_heart_1") return DB_HEART_I_SUMMARY;
      if (subTabId === "db_heart_2") return DB_HEART_II_SUMMARY;
      if (subTabId === "db_brain_1") return DB_BRAIN_I_SUMMARY;
      if (subTabId === "db_brain_2") return DB_BRAIN_II_SUMMARY;
      if (subTabId === "surgery40") return DB_SURGERY_40_SUMMARY_SECTIONS;
      if (subTabId === "surgery77") return DB_SURGERY_77_SUMMARY_SECTIONS;
      if (subTabId === "surgery106") return DB_SURGERY_106_SUMMARY_SECTIONS;
      if (subTabId === "surgery119") return DB_SURGERY_119_SUMMARY_SECTIONS;
      if (subTabId === "surgery120") return DB_SURGERY_120_SUMMARY_SECTIONS;
      if (subTabId === "surgery1_5") return DB_SURGERY_1_5_SUMMARY_SECTIONS;
      if (subTabId === "surgery1_5_old") return DB_SURGERY_1_5_OLD_SUMMARY_SECTIONS;
      return null;
  }
}

// Helper to retrieve all sections for any insurer subtab
export function getSectionsForInsurerSubTab(insurerId: string, subTabId: string): any[] {
  switch (insurerId) {
    case "meritz-fire":
      if (subTabId === "meritz_integrated_cancer") return MERITZ_INTEGRATED_CANCER_SECTIONS;
      if (subTabId === "meritz_integrated_cancer_metastasis") return MERITZ_INTEGRATED_CANCER_METASTASIS_SECTIONS;
      if (subTabId === "meritz_integrated_treatment") return MERITZ_INTEGRATED_TREATMENT_SECTIONS;
      if (subTabId === "meritz_practical_treatment") return MERITZ_PRACTICAL_TREATMENT_SECTIONS;
      if (subTabId === "meritz_noncovered_treatment") return MERITZ_NONCOVERED_TREATMENT_SECTIONS;
      if (subTabId === "meritz_noncovered_primary_treatment") return MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS;
      if (subTabId === "meritz_disease_integrated_treatment") return MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS;
      if (subTabId === "meritz_surgery1_5") return MERITZ_SURGERY1_5_SECTIONS;
      if (subTabId === "meritz_7diseases") return MERITZ_7_DISEASES_SECTIONS;
      if (subTabId === "meritz_18diseases") return MERITZ_18_DISEASES_SECTIONS;
      if (subTabId === "meritz_30diseases") return MERITZ_30_DISEASES_SECTIONS;
      if (subTabId === "meritz_32diseases") return MERITZ_32_DISEASES_SECTIONS;
      if (subTabId === "meritz_64diseases") return MERITZ_64_DISEASES_SECTIONS;
      if (subTabId === "meritz_82diseases") return MERITZ_82_DISEASES_SECTIONS;
      if (subTabId === "meritz_131diseases") return MERITZ_131_DISEASES_SECTIONS;
      if (subTabId === "meritz_6heart") return MERITZ_6HEART_DISEASES_SECTIONS;
      if (subTabId === "meritz_5diseases" || subTabId === "meritz_5diseases_surgery") return MERITZ_5_DISEASES_SECTIONS;
      return MERITZ_INTEGRATED_CANCER_SECTIONS;

    case "samsung-fire":
      if (subTabId === "samsung_cancer") return SAMSUNG_CANCER_SECTIONS;
      if (subTabId === "samsung_major_cancer") return SAMSUNG_MAJOR_CANCER_SECTIONS;
      if (subTabId === "samsung_111") return SAMSUNG_111_SURGERY_SECTIONS;
      if (subTabId === "samsung_15_disease" || subTabId === "samsung_15") return SAMSUNG_15_SURGERY_SECTIONS;
      if (subTabId === "samsung_21") return SAMSUNG_21_SURGERY_SECTIONS;
      return SAMSUNG_CANCER_SECTIONS;

    case "kb-ins":
      if (subTabId === "kb_cancer") return KB_CANCER_SECTIONS;
      if (subTabId === "kb_cancer_metastasis") return KB_CANCER_METASTASIS_SECTIONS;
      if (subTabId === "kb_metastasis") return KB_METASTASIS_SECTIONS;
      if (subTabId === "kb_specific_cancer2") return KB_SPECIFIC_CANCER2_SECTIONS;
      if (subTabId === "kb_10high_cancer") return KB_10HIGH_CANCER_SECTIONS;
      if (subTabId === "kb_brain") return KB_BRAIN_SECTIONS;
      if (subTabId === "kb_heart_1") return KB_HEART_SPECIFIC1_SECTIONS;
      if (subTabId === "kb_heart_2") return KB_HEART_SPECIFIC2_SECTIONS;
      if (subTabId === "kb_surgery1_5") return KB_SURGERY_1_5_SECTIONS;
      if (subTabId === "kb_integrated_treatment") return KB_INTEGRATED_TREATMENT_SECTIONS;
      if (subTabId === "kb_surgery14") return KB_SURGERY_14_SECTIONS;
      if (subTabId === "kb_surgery16") return KB_SURGERY_16_SECTIONS;
      if (subTabId === "kb_surgery20") return KB_SURGERY_20_SECTIONS;
      if (subTabId === "kb_surgery21") return KB_SURGERY_21_SECTIONS;
      if (subTabId === "kb_surgery101") return KB_SURGERY_101_SECTIONS;
      if (subTabId === "kb_surgery112") return KB_SURGERY_112_SECTIONS;
      if (subTabId === "kb_surgery116") return KB_SURGERY_116_SECTIONS;
      return KB_CANCER_SECTIONS;

    case "hanwha-general":
      if (subTabId === "hanwha_integrated_cancer") return HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS;
      if (subTabId === "hanwha_integrated_cancer_primary") return HANWHA_WOMEN_PRIMARY_CANCER_SECTIONS;
      if (subTabId === "hanwha_integrated_metastatic_cancer") return HANWHA_WOMEN_METASTATIC_CANCER_SECTIONS;
      if (subTabId === "hanwha_integrated_heart_1") return HANWHA_HEART_1_SECTIONS;
      if (subTabId === "hanwha_integrated_heart_2") return HANWHA_HEART_2_SECTIONS;
      if (subTabId === "hanwha_cardiovascular_5") return HANWHA_CARDIOVASCULAR_5_ALL_SECTIONS;
      if (subTabId === "hanwha_integrated_brain") return HANWHA_INTEGRATED_BRAIN_SECTIONS;
      if (subTabId === "hanwha_integrated_treatment") return HANWHA_INTEGRATED_TREATMENT_SECTIONS;
      if (subTabId === "hanwha_injury_integrated_treatment") return HANWHA_INJURY_INTEGRATED_TREATMENT_SECTIONS;
      if (subTabId === "hanwha_surgery1_5") return HANWHA_SURGERY_1_5_SECTIONS;
      if (subTabId === "hanwha_women_life_1_5") return HANWHA_WOMEN_LIFE_1_5_SECTIONS;
      if (subTabId === "hanwha_women_major_life_1_5") return HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS;
      if (subTabId === "hanwha_124diseases") return HANWHA_124_DISEASES_SECTIONS;
      if (subTabId === "hanwha_34diseases") return HANWHA_34_DISEASES_SECTIONS;
      if (subTabId === "hanwha_56diseases") return HANWHA_56_DISEASES_SECTIONS;
      if (subTabId === "hanwha_18diseases") return HANWHA_18_DISEASES_SECTIONS;
      if (subTabId === "hanwha_16diseases") return HANWHA_16_DISEASES_SECTIONS;
      if (subTabId === "hanwha_14diseases") return HANWHA_14_DISEASES_SECTIONS;
      return HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS;

    case "lotte-ins":
      if (subTabId === "lotte_integrated_cancer") return LOTTE_INTEGRATED_CANCER_SECTIONS;
      if (subTabId === "lotte_integrated_cancer_with_metastasis") return LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SECTIONS;
      if (subTabId === "lotte_integrated_metastatic_cancer") return LOTTE_INTEGRATED_METASTATIC_CANCER_SECTIONS;
      if (subTabId === "lotte_brain_disease") return LOTTE_BRAIN_DISEASE_SECTIONS;
      if (subTabId === "lotte_cardiovascular") return LOTTE_CARDIOVASCULAR_SECTIONS;
      if (subTabId === "lotte_surgery1_5") return LOTTE_SURGERY1_5_SECTIONS;
      if (subTabId === "lotte_surgery7") return LOTTE_SURGERY_7_SECTIONS;
      if (subTabId === "lotte_surgery16") return LOTTE_SURGERY_16_SECTIONS;
      if (subTabId === "lotte_surgery18") return LOTTE_SURGERY_18_SECTIONS;
      if (subTabId === "lotte_surgery20") return LOTTE_SURGERY_20_SECTIONS;
      if (subTabId === "lotte_surgery34") return LOTTE_SURGERY_34_SECTIONS;
      if (subTabId === "lotte_surgery64") return LOTTE_SURGERY_64_SECTIONS;
      return LOTTE_INTEGRATED_CANCER_SECTIONS;

    case "hyundai-marine":
      if (subTabId === "hyundai_male_cancer") return HYUNDAI_MALE_CANCER_SECTIONS;
      if (subTabId === "hyundai_female_cancer") return HYUNDAI_FEMALE_CANCER_SECTIONS;
      if (subTabId === "hyundai_specific_cancer") return HYUNDAI_SPECIFIC_CANCER_SECTIONS;
      if (subTabId === "hyundai_heart") return HYUNDAI_HEART_SECTIONS;
      if (subTabId === "hyundai_brain") return HYUNDAI_BRAIN_I_SECTIONS;
      if (subTabId === "hyundai_surgery1_5") return HYUNDAI_SURGERY_1_5_SECTIONS;
      if (subTabId === "hyundai_7diseases") return HYUNDAI_7_DISEASES_SECTIONS;
      if (subTabId === "hyundai_14diseases") return HYUNDAI_14_DISEASES_SECTIONS;
      if (subTabId === "hyundai_16diseases") return HYUNDAI_16_DISEASES_SECTIONS;
      if (subTabId === "hyundai_71diseases") return HYUNDAI_71_DISEASES_SECTIONS;
      if (subTabId === "hyundai_120diseases") return HYUNDAI_120_DISEASES_SECTIONS;
      return HYUNDAI_MALE_CANCER_SECTIONS;

    default: // DB
      if (subTabId === "cancer") return DB_CANCER_SECTIONS;
      if (subTabId === "db_cancer_metastasis") return DB_CANCER_METASTASIS_SECTIONS;
      if (subTabId === "db_11_specific_cancer") return DB_11_SPECIFIC_CANCER_SECTIONS;
      if (subTabId === "db_high_cost_cancer") return DB_HIGH_COST_CANCER_SECTIONS;
      if (subTabId === "db_heart_1") return DB_HEART_I_SECTIONS;
      if (subTabId === "db_heart_2") return DB_HEART_II_SECTIONS;
      if (subTabId === "db_heart_simple") return DB_HEART_SIMPLE_SECTIONS;
      if (subTabId === "db_brain_1") return DB_BRAIN_I_SECTIONS;
      if (subTabId === "db_brain_2") return DB_BRAIN_II_SECTIONS;
      if (subTabId === "db_major_5vascular_brain") return DB_MAJOR_5VASCULAR_BRAIN_SECTIONS;
      if (subTabId === "surgery1_5") return DB_SURGERY_1_5_SECTIONS;
      if (subTabId === "surgery1_5_old") return DB_SURGERY_1_5_OLD_SECTIONS;
      if (subTabId === "surgery13") return DB_SURGERY_13_SECTIONS;
      if (subTabId === "surgery16") return DB_SURGERY_16_SECTIONS;
      if (subTabId === "surgery18") return DB_SURGERY_18_SECTIONS;
      if (subTabId === "surgery21") return DB_SURGERY_21_SECTIONS;
      if (subTabId === "surgery40") return DB_SURGERY_40_SECTIONS;
      if (subTabId === "surgery77") return DB_SURGERY_77_SECTIONS;
      if (subTabId === "surgery106") return DB_SURGERY_106_SECTIONS;
      if (subTabId === "surgery119") return DB_SURGERY_119_SECTIONS;
      if (subTabId === "surgery120") return DB_SURGERY_120_SECTIONS;
      return DB_CANCER_SECTIONS;
  }
}
