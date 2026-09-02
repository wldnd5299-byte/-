import React, { useState, useEffect } from "react";
import { 
  FileCheck2, 
  Search, 
  ExternalLink, 
  BookOpen, 
  BookmarkCheck, 
  Award, 
  Landmark, 
  Layers, 
  Heart, 
  Brain, 
  HelpCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Info, 
  FileText,
  Sparkles,
  SearchCode,
  ChevronDown,
  ChevronUp,
  Download,
  Printer,
  Compass,
  X,
  Loader2
} from "lucide-react";
import { downloadPdfFromHtml } from "../utils/pdfGenerator";
import AdZone from "./AdZone";
import { SURGERY_1TO8_RECORDS } from "../data1to8";
import { SURGERY_1TO7_RECORDS } from "../data1to7";
import {
  BRAIN_GROUPS,
  DB_11_SPECIFIC_CANCER_ITEMS,
  DB_11_SPECIFIC_CANCER_SECTIONS,
  DB_11_SPECIFIC_CANCER_UNROLLED,
  DB_BRAIN_II_SECTIONS,
  DB_BRAIN_II_SUMMARY,
  DB_BRAIN_I_SECTIONS,
  DB_BRAIN_I_SUMMARY,
  DB_CANCER_METASTASIS_SECTIONS,
  DB_CANCER_SECTIONS,
  DB_HEART_II_SECTIONS,
  DB_HEART_II_SUMMARY,
  DB_HEART_I_SECTIONS,
  DB_HEART_I_SUMMARY,
  DB_HEART_SIMPLE_SECTIONS,
  DB_HEART_SPECIFIC_III_SECTIONS,
  DB_HEART_SPECIFIC_II_SECTIONS,
  DB_HEART_SPECIFIC_I_SECTIONS,
  DB_HIGH_COST_CANCER_ITEMS,
  DB_HIGH_COST_CANCER_SECTIONS,
  DB_HIGH_COST_CANCER_UNROLLED,
  DB_MAJOR_5VASCULAR_BRAIN_SECTIONS,
  DB_SURGERY_106_SECTIONS,
  DB_SURGERY_106_SUMMARY_SECTIONS,
  DB_SURGERY_119_SECTIONS,
  DB_SURGERY_119_SUMMARY_SECTIONS,
  DB_SURGERY_120_SECTIONS,
  DB_SURGERY_120_SUMMARY_SECTIONS,
  DB_SURGERY_13_SECTIONS,
  DB_SURGERY_16_SECTIONS,
  DB_SURGERY_18_SECTIONS,
  DB_SURGERY_1_5_OLD_SECTIONS,
  DB_SURGERY_1_5_OLD_SUMMARY_SECTIONS,
  DB_SURGERY_1_5_SECTIONS,
  DB_SURGERY_1_5_SUMMARY_SECTIONS,
  DB_SURGERY_21_SECTIONS,
  DB_SURGERY_40_SECTIONS,
  DB_SURGERY_40_SUMMARY_SECTIONS,
  DB_SURGERY_77_SECTIONS,
  DB_SURGERY_77_SUMMARY_SECTIONS,
  DbCancerTableItem,
  HANWHA_124_DISEASES_SECTIONS,
  HANWHA_124_DISEASES_SUMMARY,
  HANWHA_14_DISEASES_SECTIONS,
  HANWHA_14_DISEASES_SUMMARY,
  HANWHA_16_DISEASES_SECTIONS,
  HANWHA_16_DISEASES_SUMMARY,
  HANWHA_18_DISEASES_SECTIONS,
  HANWHA_18_DISEASES_SUMMARY,
  HANWHA_34_DISEASES_SECTIONS,
  HANWHA_34_DISEASES_SUMMARY,
  HANWHA_56_DISEASES_SECTIONS,
  HANWHA_56_DISEASES_SUMMARY,
  HANWHA_CARDIOVASCULAR_5_ALL_SECTIONS,
  HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB1,
  HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB2,
  HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB3,
  HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB4,
  HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB5,
  HANWHA_CARDIO_VASCULAR_SPECIFIC_1,
  HANWHA_CARDIO_VASCULAR_SPECIFIC_1_EXCLUDE_ARRHYTHMIA,
  HANWHA_CARDIO_VASCULAR_SPECIFIC_2,
  HANWHA_CARDIO_VASCULAR_SPECIFIC_NOTES,
  HANWHA_HEART_1_SECTIONS,
  HANWHA_HEART_1_SUMMARY,
  HANWHA_HEART_2_SECTIONS,
  HANWHA_HEART_2_SUMMARY,
  HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS,
  HANWHA_INJURY_INTEGRATED_TREATMENT_SECTIONS,
  HANWHA_INJURY_INTEGRATED_TREATMENT_SUMMARY,
  HANWHA_INTEGRATED_BRAIN_SECTIONS,
  HANWHA_INTEGRATED_TREATMENT_ITEMS,
  HANWHA_INTEGRATED_TREATMENT_SECTIONS,
  HANWHA_INTEGRATED_TREATMENT_SUMMARY,
  HANWHA_SURGERY_1_5_GUIDELINES,
  HANWHA_SURGERY_1_5_SECTIONS,
  HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS,
  HANWHA_WOMEN_INTEGRATED_CANCER_SUMMARY,
  HANWHA_WOMEN_LIFE_1_5_GUIDELINES,
  HANWHA_WOMEN_LIFE_1_5_SECTIONS,
  HANWHA_WOMEN_MAJOR_LIFE_1_5_GUIDELINES,
  HANWHA_WOMEN_MAJOR_LIFE_1_5_NOTE,
  HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS,
  HANWHA_WOMEN_METASTATIC_CANCER_SECTIONS,
  HANWHA_WOMEN_METASTATIC_CANCER_SUMMARY,
  HANWHA_WOMEN_PRIMARY_CANCER_SECTIONS,
  HANWHA_WOMEN_PRIMARY_CANCER_SUMMARY,
  HEART_GROUPS,
  HYUNDAI_120_DISEASES_SECTIONS,
  HYUNDAI_120_SUMMARY_SECTIONS,
  HYUNDAI_14_DISEASES_SECTIONS,
  HYUNDAI_14_DISEASES_SUMMARY,
  HYUNDAI_16_DISEASES_SECTIONS,
  HYUNDAI_16_DISEASES_SUMMARY,
  HYUNDAI_3_DISEASES_SECTIONS,
  HYUNDAI_71_DISEASES_SECTIONS,
  HYUNDAI_71_SUMMARY_SECTIONS,
  HYUNDAI_7_DISEASES_SECTIONS,
  HYUNDAI_7_DISEASES_SUMMARY,
  HYUNDAI_BRAIN_II_SECTIONS,
  HYUNDAI_BRAIN_II_SUMMARY,
  HYUNDAI_BRAIN_I_SECTIONS,
  HYUNDAI_BRAIN_I_SUMMARY,
  HYUNDAI_FEMALE_CANCER_SECTIONS,
  HYUNDAI_FEMALE_CANCER_SUMMARY,
  HYUNDAI_HEART_SECTIONS,
  HYUNDAI_HEART_SUMMARY,
  HYUNDAI_MALE_CANCER_SECTIONS,
  HYUNDAI_MALE_CANCER_SUMMARY,
  HYUNDAI_SIMULTANEOUS_120_24_DISEASES,
  HYUNDAI_SIMULTANEOUS_120_58_DISEASES,
  HYUNDAI_SIMULTANEOUS_120_THYROID_DISEASES,
  HYUNDAI_SIMULTANEOUS_13_DISEASES,
  HYUNDAI_SIMULTANEOUS_22_DISEASES,
  HYUNDAI_SIMULTANEOUS_35_DISEASES,
  HYUNDAI_SPECIFIC_CANCER_ITEMS,
  HYUNDAI_SPECIFIC_CANCER_SECTIONS,
  HYUNDAI_SURGERY_1_5_SECTIONS,
  HanwhaHeartCategoryItem,
  HanwhaInjuryIntegratedTreatmentItem,
  HanwhaIntegratedTreatmentItem,
  Hyundai71Item,
  Hyundai71Section,
  HyundaiSimultaneousItem,
  HyundaiSimultaneousRow,
  HyundaiSpecificCancerItem,
  INSURER_PHONE_MAP,
  INSURER_SUBTABS,
  INSURER_TERMS_LIST,
  InsurerTerm,
  KB_10HIGH_CANCER_ITEMS,
  KB_10HIGH_CANCER_SECTIONS,
  KB_BRAIN_ITEMS,
  KB_BRAIN_SECTIONS,
  KB_CANCER_METASTASIS_SECTIONS,
  KB_CANCER_SECTIONS,
  KB_HEART_SPECIFIC1_ITEMS,
  KB_HEART_SPECIFIC1_SECTIONS,
  KB_HEART_SPECIFIC2_ITEMS,
  KB_HEART_SPECIFIC2_SECTIONS,
  KB_INTEGRATED_TREATMENT_ITEMS,
  KB_INTEGRATED_TREATMENT_SECTIONS,
  KB_METASTASIS_SECTIONS,
  KB_SPECIFIC_CANCER2_ITEMS,
  KB_SPECIFIC_CANCER2_SECTIONS,
  KB_SURGERY_101_SECTIONS,
  KB_SURGERY_101_SUMMARY_SECTIONS,
  KB_SURGERY_112_SECTIONS,
  KB_SURGERY_112_SUMMARY_SECTIONS,
  KB_SURGERY_116_SECTIONS,
  KB_SURGERY_116_SUMMARY_SECTIONS,
  KB_SURGERY_14_SECTIONS,
  KB_SURGERY_16_SECTIONS,
  KB_SURGERY_1_5_SECTIONS,
  KB_SURGERY_20_SECTIONS,
  KB_SURGERY_21_SECTIONS,
  KbBrainTableItem,
  KbCancerTableItem,
  KbHeartItem,
  LOTTE_64_DISEASES_SUMMARY,
  LOTTE_BRAIN_DISEASE_SECTIONS,
  LOTTE_BRAIN_DISEASE_SUMMARY,
  LOTTE_CARDIOVASCULAR_SECTIONS,
  LOTTE_CARDIOVASCULAR_SIMPLE_I_SECTIONS,
  LOTTE_CARDIOVASCULAR_SIMPLE_II_SECTIONS,
  LOTTE_CARDIOVASCULAR_SIMPLE_15_SECTIONS,
  LOTTE_CARDIOVASCULAR_SUMMARY,
  LOTTE_INTEGRATED_CANCER_SECTIONS,
  LOTTE_INTEGRATED_CANCER_SUMMARY,
  LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SECTIONS,
  LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SUMMARY,
  LOTTE_INTEGRATED_METASTATIC_CANCER_SECTIONS,
  LOTTE_INTEGRATED_METASTATIC_CANCER_SUMMARY,
  LOTTE_HIGH_CANCER_SECTIONS,
  LOTTE_SURGERY1_5_SECTIONS,
  LOTTE_SURGERY_16_SECTIONS,
  LOTTE_16_DISEASES_SUMMARY,
  LOTTE_18_DISEASES_SUMMARY,
  LOTTE_20_DISEASES_SUMMARY,
  LOTTE_34_DISEASES_SUMMARY,
  LOTTE_SURGERY_18_SECTIONS,
  LOTTE_SURGERY_20_SECTIONS,
  LOTTE_SURGERY_34_SECTIONS,
  LOTTE_SURGERY_64_SECTIONS,
  LOTTE_SURGERY_142_SECTIONS,
  LOTTE_SURGERY_142_SUMMARY_SECTIONS,
  LOTTE_SURGERY_7_SECTIONS,
  MERITZ_131_DISEASES_SECTIONS,
  MERITZ_18_DISEASES_SECTIONS,
  MERITZ_30_DISEASES_SECTIONS,
  MERITZ_32_DISEASES_SECTIONS,
  MERITZ_5_DISEASES_SECTIONS,
  MERITZ_5_DISEASES_SUMMARY,
  MERITZ_64_DISEASES_SECTIONS,
  MERITZ_64_DISEASES_SUMMARY_SECTIONS,
  MERITZ_6HEART_DISEASES_SECTIONS,
  MERITZ_7_DISEASES_SECTIONS,
  MERITZ_82_DISEASES_SECTIONS,
  MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS,
  MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS,
  MERITZ_DISEASE_INTEGRATED_TREATMENT_SUMMARY,
  MERITZ_INTEGRATED_CANCER_METASTASIS_SECTIONS,
  MERITZ_INTEGRATED_CANCER_SECTIONS,
  MERITZ_INTEGRATED_TREATMENT_ITEMS,
  MERITZ_INTEGRATED_TREATMENT_SECTIONS,
  MERITZ_INTEGRATED_TREATMENT_SUMMARY,
  MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS,
  MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS,
  MERITZ_NONCOVERED_PRIMARY_TREATMENT_SUMMARY,
  MERITZ_NONCOVERED_TREATMENT_ITEMS,
  MERITZ_NONCOVERED_TREATMENT_SECTIONS,
  MERITZ_NONCOVERED_TREATMENT_SUMMARY,
  MERITZ_PRACTICAL_TREATMENT_ITEMS,
  MERITZ_PRACTICAL_TREATMENT_SECTIONS,
  MERITZ_PRACTICAL_TREATMENT_SUMMARY,
  MERITZ_SURGERY1_5_OLD_SECTIONS,
  MERITZ_SURGERY1_5_SECTIONS,
  MeritzDiseaseIntegratedTreatmentItem,
  MeritzIntegratedTreatmentItem,
  MeritzNoncoveredPrimaryTreatmentItem,
  MeritzNoncoveredTreatmentItem,
  MeritzPracticalTreatmentItem,
  SAMSUNG_111_DISEASE_CODE_SECTIONS,
  SAMSUNG_111_SURGERY_SECTIONS,
  SAMSUNG_15_DISEASE_CODE_SECTIONS,
  SAMSUNG_15_SURGERY_SECTIONS,
  SAMSUNG_1_5_SURGERY_DATA,
  SAMSUNG_21_DISEASE_CODE_SECTIONS,
  SAMSUNG_21_SURGERY_SECTIONS,
  SAMSUNG_CANCER_SECTIONS,
  SAMSUNG_CANCER_SUMMARY,
  SAMSUNG_MAJOR_CANCER_SECTIONS,
  SAMSUNG_SURGERY_1_5_SECTIONS,
  NH_CANCER_SECTIONS,
  NH_CANCER_METASTASIS_SECTIONS,
  NH_5SPECIFIC_CANCER_SECTIONS,
  NH_CARDIOVASCULAR_4_ALL_SECTIONS,
  NH_CARDIOVASCULAR_4_SECTIONS_TAB1,
  NH_CARDIOVASCULAR_4_SECTIONS_TAB2,
  NH_CARDIOVASCULAR_4_SECTIONS_TAB3,
  NH_CARDIOVASCULAR_4_SECTIONS_TAB4,
  NH_CIRCULATORY_1_5_SECTIONS,
  NH_SURGERY_1_5_SECTIONS,
  NH_SURGERY_16_SECTIONS,
  NH_SURGERY_16_SUMMARY_SECTIONS,
  NH_SURGERY_34_SECTIONS,
  NH_SURGERY_34_SUMMARY_SECTIONS,
  NH_SURGERY_71_SECTIONS,
  NH_SURGERY_71_SUMMARY_SECTIONS,
  NH_SURGERY_144_SECTIONS,
  NH_SURGERY_144_SUMMARY_SECTIONS,
  HANA_INTEGRATED_CANCER_SECTIONS,
  HANA_HIGH_COST_CANCER_SECTIONS,
  HANA_HIGH_COST_CANCER_UNROLLED,
  HANA_11_SPECIFIC_CANCER_SECTIONS,
  HANA_11_SPECIFIC_CANCER_UNROLLED,
  HANA_BRAIN_DISEASE_SECTIONS,
  HANA_INTEGRATED_HEART_SECTIONS,
  HANA_INTEGRATED_HEART_SUMMARY,
  HANA_WOMEN_16_DISEASES_SECTIONS,
  HANA_SURGERY_1_5_SECTIONS,
  HANA_SURGERY_73_SECTIONS,
  HANA_SURGERY_136_SECTIONS,
  SubTabInfo,
  escapeRegExp,
  getCancerGroups,
  getInsurerTheme,
  getLogoText,
  getSectionsForInsurerSubTab,
  getSummaryForSubTab,
  normalizeString
} from "../data/terms";

export default function TermsMaster() {
  const [activeTab, setActiveTab] = useState<'all' | 'property' | 'life'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInsurer, setSelectedInsurer] = useState<InsurerTerm>(() => {
    if (typeof window !== 'undefined') {
      const match = window.location.pathname.match(/^\/terms\/([^/]+)/);
      if (match && match[1]) {
        const found = INSURER_TERMS_LIST.find(ins => ins.id === match[1]);
        if (found) return found;
      }
      const saved = localStorage.getItem('ib_terms_selected_insurer_id');
      if (saved) {
        const found = INSURER_TERMS_LIST.find(ins => ins.id === saved);
        if (found) return found;
      }
    }
    return INSURER_TERMS_LIST[0];
  });
  
  // Classification sub tabs
  const [activeSubTab, setActiveSubTab] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const match = window.location.pathname.match(/^\/terms\/[^/]+\/([^/]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  });

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      const match = pathname.match(/^\/terms\/([^/]+)(?:\/([^/]+))?/);
      if (match) {
        const insId = match[1];
        const subTabId = match[2];
        const found = INSURER_TERMS_LIST.find(ins => ins.id === insId);
        if (found) {
          setSelectedInsurer(found);
          setActiveSubTab(subTabId || found.defaultSubTab || null);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const [hyundaiBrainSubTab, setHyundaiBrainSubTab] = useState<'1' | '2'>('1');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [kbIntegratedTab, setKbIntegratedTab] = useState<'practical' | 'basic' | 'luxury'>('practical');
  const [meritzDiseaseIntegratedTab, setMeritzDiseaseIntegratedTab] = useState<'20m' | '40m' | '70m'>('20m');
  const [meritzIntegratedTreatmentTab, setMeritzIntegratedTreatmentTab] = useState<'40m' | '80m' | '100m'>('40m');
  const [meritzPracticalTreatmentTab, setMeritzPracticalTreatmentTab] = useState<'10m' | '30m' | '50m' | '70m'>('10m');
  const [meritzNoncoveredTreatmentTab, setMeritzNoncoveredTreatmentTab] = useState<'40m' | '70m' | '100m'>('40m');
  const [meritzNoncoveredPrimaryTreatmentTab, setMeritzNoncoveredPrimaryTreatmentTab] = useState<'30m' | '50m' | '70m'>('30m');

  // 롯데손해보험 통합암 상태값
  const [expandedLotteCancerSections, setExpandedLotteCancerSections] = useState<Record<number, boolean>>({});

  const toggleLotteCancerSection = (idx: number) => {
    setExpandedLotteCancerSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedLotteCancerMetastasisSections, setExpandedLotteCancerMetastasisSections] = useState<Record<number, boolean>>({});

  const toggleLotteCancerMetastasisSection = (idx: number) => {
    setExpandedLotteCancerMetastasisSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedLotteMetastaticCancerSections, setExpandedLotteMetastaticCancerSections] = useState<Record<number, boolean>>({});

  const toggleLotteMetastaticCancerSection = (idx: number) => {
    setExpandedLotteMetastaticCancerSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedLotteBrainDiseaseSections, setExpandedLotteBrainDiseaseSections] = useState<Record<number, boolean>>({});

  const toggleLotteBrainDiseaseSection = (idx: number) => {
    setExpandedLotteBrainDiseaseSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedSimultaneousSections, setExpandedSimultaneousSections] = useState<Record<string, boolean>>({});

  const toggleSimultaneousSection = (key: string) => {
    setExpandedSimultaneousSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [expandedLotteSurgery1_5Sections, setExpandedLotteSurgery1_5Sections] = useState<Record<number, boolean>>({});

  const toggleLotteSurgery1_5Section = (idx: number) => {
    setExpandedLotteSurgery1_5Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

    const [expandedLotteSurgery7Sections, setExpandedLotteSurgery7Sections] = useState<Record<number, boolean>>({});

  const toggleLotteSurgery7Section = (idx: number) => {
    setExpandedLotteSurgery7Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

const [expandedLotteSurgery16Sections, setExpandedLotteSurgery16Sections] = useState<Record<number, boolean>>({});

  const toggleLotteSurgery16Section = (idx: number) => {
    setExpandedLotteSurgery16Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedLotteSurgery18Sections, setExpandedLotteSurgery18Sections] = useState<Record<number, boolean>>({});
  const [expandedLotteSurgery20Sections, setExpandedLotteSurgery20Sections] = useState<Record<number, boolean>>({});
  const [expandedLotteSurgery34Sections, setExpandedLotteSurgery34Sections] = useState<Record<number, boolean>>({});

  const toggleLotteSurgery18Section = (idx: number) => {
    setExpandedLotteSurgery18Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleLotteSurgery20Section = (idx: number) => {
    setExpandedLotteSurgery20Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleLotteSurgery34Section = (idx: number) => {
    setExpandedLotteSurgery34Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 여성통합암 및 전이암 추가 상태값
  const [expandedHanwhaPrimaryCancerSections, setExpandedHanwhaPrimaryCancerSections] = useState<Record<number, boolean>>({});

  const toggleHanwhaPrimaryCancerSection = (idx: number) => {
    setExpandedHanwhaPrimaryCancerSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedHanwhaMetastaticCancerSections, setExpandedHanwhaMetastaticCancerSections] = useState<Record<number, boolean>>({});

  const toggleHanwhaMetastaticCancerSection = (idx: number) => {
    setExpandedHanwhaMetastaticCancerSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedHanwhaCancerSections, setExpandedHanwhaCancerSections] = useState<Record<number, boolean>>({});

  const toggleHanwhaCancerSection = (idx: number) => {
    setExpandedHanwhaCancerSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 통합심장질병, 심혈관특정질환 및 통합뇌관련질환 추가 상태값
  const [hanwhaHeartTab, setHanwhaHeartTab] = useState<'heart1' | 'heart2'>('heart1');
  const [hanwhaCardioTab, setHanwhaCardioTab] = useState<'cardio1' | 'cardio1_no_arrhythmia' | 'cardio2'>('cardio1');
  const [hanwhaCardio5Tab, setHanwhaCardio5Tab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5'>('tab1');
  const [nhCardio4Tab, setNhCardio4Tab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4'>('tab1');
  const [hanwhaIntegratedTreatmentTab, setHanwhaIntegratedTreatmentTab] = useState<'10m' | '30m' | '40m'>('10m');
  const [hanwhaInjuryTreatmentTab, setHanwhaInjuryTreatmentTab] = useState<'luxury' | 'general' | 'saving'>('luxury');
  const [expandedHanwhaHeartSections, setExpandedHanwhaHeartSections] = useState<Record<number, boolean>>({});

  const toggleHanwhaHeartSection = (idx: number) => {
    setExpandedHanwhaHeartSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [expandedHanwhaBrainSections, setExpandedHanwhaBrainSections] = useState<Record<number, boolean>>({});

  const toggleHanwhaBrainSection = (idx: number) => {
    setExpandedHanwhaBrainSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 131대수술비 추가 상태값
  const [expandedMeritz131DiseasesSections, setExpandedMeritz131DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz131DiseasesSection = (idx: number) => {
    setExpandedMeritz131DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 124대질병 수술비 상태값
  const [expandedHanwha124DiseasesSections, setExpandedHanwha124DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHanwha124DiseasesSection = (idx: number) => {
    setExpandedHanwha124DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 34대질병 수술비 상태값
  const [expandedHanwha34DiseasesSections, setExpandedHanwha34DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHanwha34DiseasesSection = (idx: number) => {
    setExpandedHanwha34DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 18대질병 수술비 상태값
  const [expandedHanwha18DiseasesSections, setExpandedHanwha18DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHanwha18DiseasesSection = (idx: number) => {
    setExpandedHanwha18DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 16대질병 수술비 상태값
  const [expandedHanwha16DiseasesSections, setExpandedHanwha16DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHanwha16DiseasesSection = (idx: number) => {
    setExpandedHanwha16DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 한화손해보험 56대질병 수술비 상태값
  const [expandedHanwha56DiseasesSections, setExpandedHanwha56DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHanwha56DiseasesSection = (idx: number) => {
    setExpandedHanwha56DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 5대질환 추가 상태값
  const [expandedMeritz5DiseasesSections, setExpandedMeritz5DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz5DiseasesSection = (idx: number) => {
    setExpandedMeritz5DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 6대심장질환 추가 상태값
  const [expandedMeritz6HeartSections, setExpandedMeritz6HeartSections] = useState<Record<number, boolean>>({});

  const toggleMeritz6HeartSection = (idx: number) => {
    setExpandedMeritz6HeartSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 32대질병 추가 상태값
  const [expandedMeritz32DiseasesSections, setExpandedMeritz32DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz32DiseasesSection = (idx: number) => {
    setExpandedMeritz32DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 82대질병 추가 상태값
  const [expandedMeritz82DiseasesSections, setExpandedMeritz82DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz82DiseasesSection = (idx: number) => {
    setExpandedMeritz82DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 64대질병 추가 상태값
  const [expandedMeritz64DiseasesSections, setExpandedMeritz64DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz64DiseasesSection = (idx: number) => {
    setExpandedMeritz64DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 30대질병 추가 상태값
  const [expandedMeritz30DiseasesSections, setExpandedMeritz30DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz30DiseasesSection = (idx: number) => {
    setExpandedMeritz30DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 18대질병 추가 상태값
  const [expandedMeritz18DiseasesSections, setExpandedMeritz18DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz18DiseasesSection = (idx: number) => {
    setExpandedMeritz18DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 7대질병 추가 상태값
  const [expandedMeritz7DiseasesSections, setExpandedMeritz7DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleMeritz7DiseasesSection = (idx: number) => {
    setExpandedMeritz7DiseasesSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 1-5종수술비II 추가 상태값
  const [expandedMeritzSurgery1_5Sections, setExpandedMeritzSurgery1_5Sections] = useState<Record<number, boolean>>({});

  const toggleMeritzSurgery1_5Section = (idx: number) => {
    setExpandedMeritzSurgery1_5Sections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 메리츠화재 이전 1-5종수술비(별표29) 추가 상태값
  const [expandedMeritzSurgery1_5OldSections, setExpandedMeritzSurgery1_5OldSections] = useState<Record<number, boolean>>({});

  const toggleMeritzSurgery1_5OldSection = (idx: number) => {
    setExpandedMeritzSurgery1_5OldSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };
  const [kbIntegratedPlan, setKbIntegratedPlan] = useState<'practical' | 'basic' | 'luxury' | 'compare'>('practical');
  const [db11CancerHighTab, setDb11CancerHighTab] = useState<'specific' | 'high'>('specific');
  const [kbSpecificHighTab, setKbSpecificHighTab] = useState<'specific' | 'high'>('specific');
  const [kbHeartTab, setKbHeartTab] = useState<'specific1' | 'specific2'>('specific1');
  const [detailFilter, setDetailFilter] = useState('');
  const [samsung111DetailCategory, setSamsung111DetailCategory] = useState<'전체' | '5대주요기관질병' | '22대주요질병' | '3대주요질병' | '19대생활질병' | '62대생활질병'>('5대주요기관질병');
  const [expandedSamsung111Sections, setExpandedSamsung111Sections] = useState<Record<string, boolean>>({});
  const [showSamsungSuggestions, setShowSamsungSuggestions] = useState(false);
  const [highlightedSamsungSubsection, setHighlightedSamsungSubsection] = useState<string | null>(null);
  
  // 삼성화재 15대질병수술비 추가 상태값
  const [expandedSamsung15Sections, setExpandedSamsung15Sections] = useState<Record<string, boolean>>({});
  const [showSamsung15Suggestions, setShowSamsung15Suggestions] = useState(false);
  const [highlightedSamsung15Subsection, setHighlightedSamsung15Subsection] = useState<string | null>(null);

  // 삼성화재 21대질병수술비 추가 상태값
  const [expandedSamsung21Sections, setExpandedSamsung21Sections] = useState<Record<string, boolean>>({});
  const [showSamsung21Suggestions, setShowSamsung21Suggestions] = useState(false);
  const [highlightedSamsung21Subsection, setHighlightedSamsung21Subsection] = useState<string | null>(null);

  const [showDbSuggestions, setShowDbSuggestions] = useState(false);
  const [highlightedDbSubsection, setHighlightedDbSubsection] = useState<string | null>(null);
  const [expandedSamsungSurgery1_7Sections, setExpandedSamsungSurgery1_7Sections] = useState<Record<string, boolean>>({});
  const [expandedSamsungSurgery1_8Sections, setExpandedSamsungSurgery1_8Sections] = useState<Record<string, boolean>>({});

  const toggleSamsung111Section = (title: string) => {
    setExpandedSamsung111Sections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleSamsung15Section = (title: string) => {
    setExpandedSamsung15Sections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleSamsung21Section = (title: string) => {
    setExpandedSamsung21Sections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleSamsungSurgery1_7Section = (category: string) => {
    setExpandedSamsungSurgery1_7Sections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleSamsungSurgery1_8Section = (category: string) => {
    setExpandedSamsungSurgery1_8Sections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  useEffect(() => {
    const handleNav = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        if (detail.insurerId) {
          const found = INSURER_TERMS_LIST.find(ins => ins.id === detail.insurerId);
          if (found) {
            setSelectedInsurer(found);
            localStorage.setItem('ib_terms_selected_insurer_id', found.id);
          }
        }
        if (detail.subTab !== undefined) {
          setActiveSubTab(detail.subTab);
        }
        if (detail.filter !== undefined) {
          setDetailFilter(detail.filter);
        }
      }
    };
    window.addEventListener('ib-navigate-terms', handleNav);
    return () => window.removeEventListener('ib-navigate-terms', handleNav);
  }, []);

  // DB Surgery 16 Expandable Sections state
  const [expandedDbSurgerySections, setExpandedDbSurgerySections] = useState<Record<number, boolean>>({});

  const toggleDbSurgerySection = (index: number) => {
    setExpandedDbSurgerySections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 18 Expandable Sections state
  const [expandedDbSurgery18Sections, setExpandedDbSurgery18Sections] = useState<Record<number, boolean>>({});

  const toggleDbSurgery18Section = (index: number) => {
    setExpandedDbSurgery18Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 21 Expandable Sections state
  const [expandedDbSurgery21Sections, setExpandedDbSurgery21Sections] = useState<Record<number, boolean>>({});

  const toggleDbSurgery21Section = (index: number) => {
    setExpandedDbSurgery21Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 106 Expandable Sections state
  const [expandedDbSurgery106Sections, setExpandedDbSurgery106Sections] = useState<Record<number, boolean>>({});

  const toggleDbSurgery106Section = (index: number) => {
    setExpandedDbSurgery106Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 119 Expandable Sections state
  const [expandedDbSurgery119Sections, setExpandedDbSurgery119Sections] = useState<Record<number, boolean>>({});

  const toggleDbSurgery119Section = (index: number) => {
    setExpandedDbSurgery119Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 120 Expandable Sections state
  const [expandedDbSurgery120Sections, setExpandedDbSurgery120Sections] = useState<Record<number, boolean>>({});

  const toggleDbSurgery120Section = (index: number) => {
    setExpandedDbSurgery120Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Surgery 1-5 Expandable Sections state
  const [expandedDbSurgery1_5Sections, setExpandedDbSurgery1_5Sections] = useState<Record<number, boolean>>({});
  const [expandedDbSurgery1_5OldSections, setExpandedDbSurgery1_5OldSections] = useState<Record<number, boolean>>({});
  const [isGuidelineExpanded, setIsGuidelineExpanded] = useState(false);
  const [isGuidelineOldExpanded, setIsGuidelineOldExpanded] = useState(false);
  const [isCompareExpanded, setIsCompareExpanded] = useState(true);
  const [isCompareOldExpanded, setIsCompareOldExpanded] = useState(true);

  const toggleDbSurgery1_5Section = (index: number) => {
    setExpandedDbSurgery1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedSamsungSurgery1_5Sections, setExpandedSamsungSurgery1_5Sections] = useState<Record<number, boolean>>({});
  const [isGuidelineSamsungExpanded, setIsGuidelineSamsungExpanded] = useState(false);
  const toggleSamsungSurgery1_5Section = (index: number) => {
    setExpandedSamsungSurgery1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleDbSurgery1_5OldSection = (index: number) => {
    setExpandedDbSurgery1_5OldSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery1_5Sections, setExpandedKbSurgery1_5Sections] = useState<Record<number, boolean>>({});
  const [isGuidelineKbSurgery1_5Expanded, setIsGuidelineKbSurgery1_5Expanded] = useState(false);
  const toggleKbSurgery1_5Section = (index: number) => {
    setExpandedKbSurgery1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };



  const [expandedHanwhaSurgery1_5Sections, setExpandedHanwhaSurgery1_5Sections] = useState<Record<number, boolean>>({});
  const [isGuidelineHanwhaSurgery1_5Expanded, setIsGuidelineHanwhaSurgery1_5Expanded] = useState(false);
  const toggleHanwhaSurgery1_5Section = (index: number) => {
    setExpandedHanwhaSurgery1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedHanwhaWomenLife1_5Sections, setExpandedHanwhaWomenLife1_5Sections] = useState<Record<number, boolean>>({});
  const [isGuidelineHanwhaWomenLife1_5Expanded, setIsGuidelineHanwhaWomenLife1_5Expanded] = useState(false);
  const toggleHanwhaWomenLife1_5Section = (index: number) => {
    setExpandedHanwhaWomenLife1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedHanwhaWomenMajorLife1_5Sections, setExpandedHanwhaWomenMajorLife1_5Sections] = useState<Record<number, boolean>>({});
  const [isGuidelineHanwhaWomenMajorLife1_5Expanded, setIsGuidelineHanwhaWomenMajorLife1_5Expanded] = useState(false);
  const toggleHanwhaWomenMajorLife1_5Section = (index: number) => {
    setExpandedHanwhaWomenMajorLife1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery14Sections, setExpandedKbSurgery14Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery14Section = (index: number) => {
    setExpandedKbSurgery14Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery16Sections, setExpandedKbSurgery16Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery16Section = (index: number) => {
    setExpandedKbSurgery16Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery21Sections, setExpandedKbSurgery21Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery21Section = (index: number) => {
    setExpandedKbSurgery21Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery101Sections, setExpandedKbSurgery101Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery101Section = (index: number) => {
    setExpandedKbSurgery101Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery112Sections, setExpandedKbSurgery112Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery112Section = (index: number) => {
    setExpandedKbSurgery112Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedKbSurgery116Sections, setExpandedKbSurgery116Sections] = useState<Record<number, boolean>>({});
  const toggleKbSurgery116Section = (index: number) => {
    setExpandedKbSurgery116Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [expandedMeritzIntegratedCancerSections, setExpandedMeritzIntegratedCancerSections] = useState<Record<number, boolean>>({});
  const toggleMeritzIntegratedCancerSection = (index: number) => {
    setExpandedMeritzIntegratedCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Heart Tab (I vs II)
  const [dbHeartTab, setDbHeartTab] = useState<'I' | 'II'>('II');

  // DB Heart Simple Tab (I vs II vs III)
  const [dbHeartSimpleTab, setDbHeartSimpleTab] = useState<'I' | 'II' | 'III'>('I');

  // Lotte Cardiovascular Simple Tab (I vs II vs 15대)
  const [lotteCardiovascularSimpleTab, setLotteCardiovascularSimpleTab] = useState<'I' | 'II' | '15'>('I');

  // DB Brain Tab (I vs II)
  const [dbBrainTab, setDbBrainTab] = useState<'I' | 'II'>('I');

  // DB Heart Expandable Sections state (Record of section index -> expanded boolean)
  const [expandedDbHeartSections, setExpandedDbHeartSections] = useState<Record<number, boolean>>({});

  const toggleDbHeartSection = (index: number) => {
    setExpandedDbHeartSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Heart Simple Expandable Sections state
  const [expandedDbHeartSimpleSections, setExpandedDbHeartSimpleSections] = useState<Record<number, boolean>>({});

  const toggleDbHeartSimpleSection = (index: number) => {
    setExpandedDbHeartSimpleSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Cancer Tab ('primary' vs 'metastasis')
  const [dbCancerTab, setDbCancerTab] = useState<'primary' | 'metastasis'>('primary');

  // DB Cancer Metastasis Expandable Sections state
  const [expandedDbCancerMetastasisSections, setExpandedDbCancerMetastasisSections] = useState<Record<number, boolean>>({});

  const toggleDbCancerMetastasisSection = (index: number) => {
    setExpandedDbCancerMetastasisSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Brain Expandable Sections state (Record of section index -> expanded boolean)
  const [expandedDbBrainSections, setExpandedDbBrainSections] = useState<Record<number, boolean>>({});

  const toggleDbBrainSection = (index: number) => {
    setExpandedDbBrainSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // DB Cancer Expandable Sections state
  const [expandedDbCancerSections, setExpandedDbCancerSections] = useState<Record<number, boolean>>({});

  const toggleDbCancerSection = (index: number) => {
    setExpandedDbCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // KB Cancer Expandable Sections state
  const [expandedKbCancerSections, setExpandedKbCancerSections] = useState<Record<number, boolean>>({});
  const toggleKbCancerSection = (index: number) => {
    setExpandedKbCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // KB Cancer Metastasis Expandable Sections state
  const [expandedKbCancerMetastasisSections, setExpandedKbCancerMetastasisSections] = useState<Record<number, boolean>>({});
  const toggleKbCancerMetastasisSection = (index: number) => {
    setExpandedKbCancerMetastasisSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // KB Metastasis Expandable Sections state
  const [expandedKbMetastasisSections, setExpandedKbMetastasisSections] = useState<Record<number, boolean>>({});
  const toggleKbMetastasisSection = (index: number) => {
    setExpandedKbMetastasisSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // KB Brain Expandable Sections state
  const [expandedKbBrainSections, setExpandedKbBrainSections] = useState<Record<number, boolean>>({});
  const toggleKbBrainSection = (index: number) => {
    setExpandedKbBrainSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Samsung Cancer Expandable Sections state
  const [expandedSamsungCancerSections, setExpandedSamsungCancerSections] = useState<Record<number, boolean>>({});

  const toggleSamsungCancerSection = (index: number) => {
    setExpandedSamsungCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Hyundai Male Cancer Expandable Sections state
  const [expandedHyundaiMaleCancerSections, setExpandedHyundaiMaleCancerSections] = useState<Record<number, boolean>>({});

  const toggleHyundaiMaleCancerSection = (index: number) => {
    setExpandedHyundaiMaleCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Hyundai Female Cancer Expandable Sections state
  const [expandedHyundaiFemaleCancerSections, setExpandedHyundaiFemaleCancerSections] = useState<Record<number, boolean>>({});

  const toggleHyundaiFemaleCancerSection = (index: number) => {
    setExpandedHyundaiFemaleCancerSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Hyundai Heart Expandable Sections state
  const [expandedHyundaiHeartSections, setExpandedHyundaiHeartSections] = useState<Record<number, boolean>>({});

  const toggleHyundaiHeartSection = (index: number) => {
    setExpandedHyundaiHeartSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Hyundai Surgery 1-5 Expandable Sections state
  const [expandedHyundaiSurgery1_5Sections, setExpandedHyundaiSurgery1_5Sections] = useState<Record<number, boolean>>({});

  const toggleHyundaiSurgery1_5Section = (index: number) => {
    setExpandedHyundaiSurgery1_5Sections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Hyundai 7 Diseases Expandable Sections state
  const [expandedHyundai7DiseasesSections, setExpandedHyundai7DiseasesSections] = useState<Record<number, boolean>>({});

  const toggleHyundai7DiseasesSection = (index: number) => {
    setExpandedHyundai7DiseasesSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };



  const handleSelectInsurer = (insurer: InsurerTerm) => {
    setSelectedInsurer(insurer);
    localStorage.setItem('ib_terms_selected_insurer_id', insurer.id);
    setActiveSubTab(insurer.defaultSubTab || null);
    setDetailFilter('');
  };

  const filteredInsurers = INSURER_TERMS_LIST.filter(insurer => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'property' && insurer.type === 'property') ||
      (activeTab === 'life' && insurer.type === 'life');

    const matchesSearch =
      !searchQuery.trim() ||
      insurer.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  }).sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === 'property' ? -1 : 1;
  });

  const filteredGroups = (selectedInsurer?.tableRows || []).filter(row => {
    if (!detailFilter.trim()) return true;
    const q = detailFilter.toLowerCase();
    return (
      row.group.toLowerCase().includes(q) ||
      row.name.toLowerCase().includes(q) ||
      row.codes.toLowerCase().includes(q) ||
      row.diseases.toLowerCase().includes(q) ||
      row.payout.toLowerCase().includes(q)
    );
  });

  const highlightText = (text: string) => {
    if (!detailFilter.trim() || !text) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(detailFilter)})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === detailFilter.toLowerCase() ? (
        <mark key={i} className="bg-amber-200 text-amber-900 rounded-xs px-0.5">{part}</mark>
      ) : part
    );
  };

  const safeFilter = (sections: any[]) => {
    return (sections || []).filter(sec => {
      if (!sec) return false;
      if (!detailFilter.trim()) return true;
      const q = detailFilter.toLowerCase();
      const titleMatch = (sec.title || sec.category || '').toLowerCase().includes(q);
      const itemList = sec.items || sec.diseases || [];
      const itemMatch = itemList.some((item: any) =>
        typeof item === 'string'
          ? item.toLowerCase().includes(q)
          : (
            (item.disease && item.disease.toLowerCase().includes(q)) ||
            (item.name && item.name.toLowerCase().includes(q)) ||
            (item.code && item.code.toLowerCase().includes(q)) ||
            (item.grade && item.grade.toLowerCase().includes(q)) ||
            (item.num && item.num.toLowerCase().includes(q))
          )
      );
      return titleMatch || itemMatch;
    });
  };

  const filteredDbCancerSections = safeFilter(DB_CANCER_SECTIONS);
  const filteredDbCancerMetastasisSections = safeFilter(DB_CANCER_METASTASIS_SECTIONS);
  const filteredKbCancerSections = safeFilter(KB_CANCER_SECTIONS);
  const filteredKbCancerMetastasisSections = safeFilter(KB_CANCER_METASTASIS_SECTIONS);
  const filteredKbMetastasisSections = safeFilter(KB_METASTASIS_SECTIONS);
  const filteredDbBrainSections = safeFilter(dbBrainTab === 'I' ? DB_BRAIN_I_SECTIONS : DB_BRAIN_II_SECTIONS);
  const filteredDbSections = safeFilter(dbHeartTab === 'I' ? DB_HEART_I_SECTIONS : DB_HEART_II_SECTIONS);
  const filteredDbHeartSimpleSections = safeFilter(DB_HEART_SIMPLE_SECTIONS);
  const filteredDbSurgery1_5OldSections = safeFilter(DB_SURGERY_1_5_OLD_SECTIONS);
  const filteredDbSurgery1_5Sections = safeFilter(DB_SURGERY_1_5_SECTIONS);
  const filterSurgerySections = safeFilter;
  const filteredDbSurgery13Sections = safeFilter(DB_SURGERY_13_SECTIONS);
  const filteredDbSurgery16Sections = safeFilter(DB_SURGERY_16_SECTIONS);
  const filteredDbSurgery18Sections = safeFilter(DB_SURGERY_18_SECTIONS);
  const filteredDbSurgery21Sections = safeFilter(DB_SURGERY_21_SECTIONS);
  const filteredDbSurgery106Sections = safeFilter(DB_SURGERY_106_SECTIONS);
  const filteredDbSurgery119Sections = safeFilter(DB_SURGERY_119_SECTIONS);
  const filteredDbSurgery120Sections = safeFilter(DB_SURGERY_120_SECTIONS);
  const filteredKbSurgery1_5Sections = safeFilter(KB_SURGERY_1_5_SECTIONS);
  const filteredKbSurgery14Sections = safeFilter(KB_SURGERY_14_SECTIONS);
  const filteredKbSurgery16Sections = safeFilter(KB_SURGERY_16_SECTIONS);
  const filteredKbSurgery20Sections = filterSurgerySections(KB_SURGERY_20_SECTIONS);
  const filteredKbSurgery21Sections = filterSurgerySections(KB_SURGERY_21_SECTIONS);
  const filteredKbSurgery101Sections = filterSurgerySections(KB_SURGERY_101_SECTIONS);
  const filteredKbSurgery112Sections = filterSurgerySections(KB_SURGERY_112_SECTIONS);
  const filteredKbSurgery116Sections = filterSurgerySections(KB_SURGERY_116_SECTIONS);
  const filteredHanwhaSurgery1_5Sections = filterSurgerySections(HANWHA_SURGERY_1_5_SECTIONS);
  const filteredHanwhaWomenLife1_5Sections = filterSurgerySections(HANWHA_WOMEN_LIFE_1_5_SECTIONS);
  const filteredHanwhaWomenMajorLife1_5Sections = filterSurgerySections(HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS);
  const filteredLotteSurgery1_5Sections = filterSurgerySections(LOTTE_SURGERY1_5_SECTIONS);
  const filteredLotteSurgery7Sections = filterSurgerySections(LOTTE_SURGERY_7_SECTIONS);
  const filteredLotteSurgery16Sections = filterSurgerySections(LOTTE_SURGERY_16_SECTIONS);
  const filteredLotteSurgery18Sections = filterSurgerySections(LOTTE_SURGERY_18_SECTIONS);
  const filteredLotteSurgery20Sections = filterSurgerySections(LOTTE_SURGERY_20_SECTIONS);
  const filteredLotteSurgery34Sections = filterSurgerySections(LOTTE_SURGERY_34_SECTIONS);


  
    const renderDbSurgeryTab = (
    tabKey: string,
    tabTitle: string,
    allSections: any[],
    filteredSections: any[],
    expandedState: Record<number, boolean>,
    setExpandedState: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
    toggleFunc: (idx: number) => void,
    summarySections?: any
  ) => {
    const normalizeSummarySections = (raw: any): any[] => {
      if (!raw) return [];
      if (Array.isArray(raw)) return raw;
      if (typeof raw === 'object' && Array.isArray(raw.items)) {
        return raw.items.map((item: any, idx: number) => {
          if (typeof item === 'string') {
            return {
              title: `그룹 ${idx + 1}`,
              diseases: item
            };
          }
          return item;
        });
      }
      return [raw];
    };

    const query = normalizeString(detailFilter);
    const summaries = normalizeSummarySections(summarySections || allSections);

    if (tabKey === 'meritz_integrated_treatment') {
      const typeLabel = meritzIntegratedTreatmentTab === '40m' ? '암통합치료비(4천)'
                      : meritzIntegratedTreatmentTab === '80m' ? '암통합치료비(8천)'
                      : '암통합치료비(1억)';
      const guaranteeAmountLabel = meritzIntegratedTreatmentTab === '40m' ? '4,000만원'
                                  : meritzIntegratedTreatmentTab === '80m' ? '8,000만원'
                                  : '1억원';
      const curTitle = `메리츠화재 - 암통합치료비(기본형) (${typeLabel})`;
      const clauseNum = '2-86. 암 통합치료비(기본형)(건강가입)보장 특별약관';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = MERITZ_INTEGRATED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amount = item[meritzIntegratedTreatmentTab];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.count).includes(queryStr) ||
          normalizeString(amount).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (암통합치료비 4천 / 8천 / 1억) - PDF 다운로드란 위 */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setMeritzIntegratedTreatmentTab('40m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzIntegratedTreatmentTab === '40m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(4천)
            </button>
            <button
              onClick={() => {
                setMeritzIntegratedTreatmentTab('80m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzIntegratedTreatmentTab === '80m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(8천)
            </button>
            <button
              onClick={() => {
                setMeritzIntegratedTreatmentTab('100m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzIntegratedTreatmentTab === '100m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(1억)
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, MERITZ_INTEGRATED_TREATMENT_SUMMARY, MERITZ_INTEGRATED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${typeLabel} 내 검색 (통합치료항목, 지급횟수, 금액 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. 상단 요약 분류표 (약관 및 보장 개요) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">📋 상단 요약 분류표 - {clauseNum}</span>
              <span className="text-[11px] font-bold text-amber-300">보험가입금액 {guaranteeAmountLabel}</span>
            </div>
            


            <div className="p-3 bg-slate-100/80 border-b border-slate-200 text-xs font-black text-slate-900 flex items-center justify-between">
              <span>📌 주요 보장 영역 요약 ({typeLabel})</span>
              <span className="text-[11px] font-bold text-slate-500">총 5개 주요 구분</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs bg-slate-50/50">
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">1. 검사 (8종)</div>
                <div className="text-[11px] text-slate-600 font-bold">급여 암검사 (MRI, CT, PET, NGS 등)</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">2. 주요 치료 (7종)</div>
                <div className="text-[11px] text-slate-600 font-bold">수술, 항암방사선, 항암약물 등</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">3. 비급여 치료 (5종)</div>
                <div className="text-[11px] text-slate-600 font-bold">로봇수술, 표적/면역항암, 양성자</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">4. 통증완화 (1종)</div>
                <div className="text-[11px] text-slate-600 font-bold">특정통증완화치료(급여)</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">5. 재활치료 (2종)</div>
                <div className="text-[11px] text-slate-600 font-bold">입원/외래 암 재활치료(급여)</div>
              </div>
            </div>
          </div>

          {/* 5. 하단 세부 분류표 (상세 항목 및 금액 표) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보장항목 및 지급금액 표&gt; (보험가입금액 {guaranteeAmountLabel})</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[44%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">지급횟수</th>
                    <th className="py-2.5 px-3 text-center w-[18%] bg-teal-50/70 text-[#123941]">지급금액 ({guaranteeAmountLabel})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amount = item[meritzIntegratedTreatmentTab];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/60 align-middle">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-800 text-[11px] font-extrabold">
                            {highlightText(item.category)}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80 align-middle">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-700 border-r border-slate-200/80 align-middle">
                          {highlightText(item.count)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-[#123941] bg-teal-50/40 align-middle text-sm">
                          {highlightText(amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'meritz_practical_treatment') {
      const typeLabel = meritzPracticalTreatmentTab === '10m' ? '암통합치료비(1천)'
                      : meritzPracticalTreatmentTab === '30m' ? '암통합치료비(3천)'
                      : meritzPracticalTreatmentTab === '50m' ? '암통합치료비(5천)'
                      : '암통합치료비(7천)';
      const guaranteeAmountLabel = meritzPracticalTreatmentTab === '10m' ? '1,000만원'
                                  : meritzPracticalTreatmentTab === '30m' ? '3,000만원'
                                  : meritzPracticalTreatmentTab === '50m' ? '5,000만원'
                                  : '7,000만원';
      const curTitle = `메리츠화재 - 암통합치료비(실속형) (${typeLabel})`;
      const clauseNum = '2-87. 암 통합치료비(실속형)(건강가입)보장 특별약관';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = MERITZ_PRACTICAL_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amount = item[meritzPracticalTreatmentTab];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.count).includes(queryStr) ||
          normalizeString(amount).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (암통합치료비 1천 / 3천 / 5천 / 7천) - PDF 다운로드란 위 */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setMeritzPracticalTreatmentTab('10m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzPracticalTreatmentTab === '10m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(1천)
            </button>
            <button
              onClick={() => {
                setMeritzPracticalTreatmentTab('30m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzPracticalTreatmentTab === '30m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(3천)
            </button>
            <button
              onClick={() => {
                setMeritzPracticalTreatmentTab('50m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzPracticalTreatmentTab === '50m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(5천)
            </button>
            <button
              onClick={() => {
                setMeritzPracticalTreatmentTab('70m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzPracticalTreatmentTab === '70m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(7천)
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, MERITZ_PRACTICAL_TREATMENT_SUMMARY, MERITZ_PRACTICAL_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${typeLabel} 내 검색 (통합치료항목, 지급횟수, 금액 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. 상단 요약 분류표 (약관 및 보장 개요) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">📋 상단 요약 분류표 - {clauseNum}</span>
              <span className="text-[11px] font-bold text-amber-300">보험가입금액 {guaranteeAmountLabel}</span>
            </div>

            <div className="p-3 bg-slate-100/80 border-b border-slate-200 text-xs font-black text-slate-900 flex items-center justify-between">
              <span>📌 주요 보장 영역 요약 ({typeLabel})</span>
              <span className="text-[11px] font-bold text-slate-500">총 2개 주요 구분</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs bg-slate-50/50">
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">1. 주요 치료 (6종)</div>
                <div className="text-[11px] text-slate-600 font-bold">수술, 항암방사선, 항암약물 등</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">2. 비급여 치료 (3종)</div>
                <div className="text-[11px] text-slate-600 font-bold">표적/면역항암, 양성자방사선</div>
              </div>
            </div>
          </div>

          {/* 5. 하단 세부 분류표 (상세 항목 및 금액 표) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보장항목 및 지급금액 표&gt; (보험가입금액 {guaranteeAmountLabel})</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[44%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">지급횟수</th>
                    <th className="py-2.5 px-3 text-center w-[18%] bg-teal-50/70 text-[#123941]">지급금액 ({guaranteeAmountLabel})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amount = item[meritzPracticalTreatmentTab];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/60 align-middle">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-800 text-[11px] font-extrabold">
                            {highlightText(item.category)}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80 align-middle">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-700 border-r border-slate-200/80 align-middle">
                          {highlightText(item.count)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-[#123941] bg-teal-50/40 align-middle text-sm">
                          {highlightText(amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'meritz_noncovered_treatment') {
      const typeLabel = meritzNoncoveredTreatmentTab === '40m' ? '암통합치료비(4천)'
                      : meritzNoncoveredTreatmentTab === '70m' ? '암통합치료비(7천)'
                      : '암통합치료비(1억)';
      const guaranteeAmountLabel = meritzNoncoveredTreatmentTab === '40m' ? '4,000만원'
                                  : meritzNoncoveredTreatmentTab === '70m' ? '7,000만원'
                                  : '1억원';
      const curTitle = `메리츠화재 - 암통합치료비(비급여) (${typeLabel})`;
      const clauseNum = '2-94. 암 통합치료비II(비급여(전액본인부담 포함))(건강가입)보장 특별약관';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = MERITZ_NONCOVERED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amountUnder = meritzNoncoveredTreatmentTab === '40m' ? item['40m_under']
                          : meritzNoncoveredTreatmentTab === '70m' ? item['70m_under']
                          : item['100m_under'];
        const amountOver = meritzNoncoveredTreatmentTab === '40m' ? item['40m_over']
                         : meritzNoncoveredTreatmentTab === '70m' ? item['70m_over']
                         : item['100m_over'];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.count).includes(queryStr) ||
          normalizeString(amountUnder).includes(queryStr) ||
          normalizeString(amountOver).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (암통합치료비(4천) / 암통합치료비(7천) / 암통합치료비(1억)) - PDF 다운로드란 위 */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setMeritzNoncoveredTreatmentTab('40m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredTreatmentTab === '40m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(4천)
            </button>
            <button
              onClick={() => {
                setMeritzNoncoveredTreatmentTab('70m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredTreatmentTab === '70m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(7천)
            </button>
            <button
              onClick={() => {
                setMeritzNoncoveredTreatmentTab('100m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredTreatmentTab === '100m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(1억)
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, MERITZ_NONCOVERED_TREATMENT_SUMMARY, MERITZ_NONCOVERED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${typeLabel} 내 검색 (통합치료항목, 지급횟수, 금액 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. 상단 요약 분류표 (약관 및 보장 개요) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">📋 상단 요약 분류표 - {clauseNum}</span>
              <span className="text-[11px] font-bold text-amber-300">보험가입금액 {guaranteeAmountLabel}</span>
            </div>

            <div className="p-3 bg-slate-100/80 border-b border-slate-200 text-xs font-black text-slate-900 flex items-center justify-between">
              <span>📌 주요 보장 영역 요약 ({typeLabel})</span>
              <span className="text-[11px] font-bold text-slate-500">총 2개 주요 구분</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs bg-slate-50/50">
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">1. 주요 치료 (6종)</div>
                <div className="text-[11px] text-slate-600 font-bold">비급여 수술, 항암방사선, 항암약물 등</div>
              </div>
              <div className="p-3 space-y-1">
                <div className="font-extrabold text-[#123941] text-[11px]">2. 특정 치료 (5종)</div>
                <div className="text-[11px] text-slate-600 font-bold">다빈치로봇수술, 표적/면역항암, 양성자방사선</div>
              </div>
            </div>
          </div>

          {/* 5. 하단 세부 분류표 (상세 항목 및 금액 표) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보장항목 및 지급금액 표&gt; (보험가입금액 {guaranteeAmountLabel})</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[14%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[42%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[14%]">지급횟수</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[15%] bg-amber-50/80 text-amber-900">1년 경과전일 이전 (50%)</th>
                    <th className="py-2.5 px-3 text-center w-[15%] bg-teal-50/80 text-[#123941]">1년 경과시점 이후 (100%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amountUnder = meritzNoncoveredTreatmentTab === '40m' ? item['40m_under']
                                      : meritzNoncoveredTreatmentTab === '70m' ? item['70m_under']
                                      : item['100m_under'];
                    const amountOver = meritzNoncoveredTreatmentTab === '40m' ? item['40m_over']
                                     : meritzNoncoveredTreatmentTab === '70m' ? item['70m_over']
                                     : item['100m_over'];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/60 align-middle">
                          <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-extrabold ${
                            item.category === '주요 치료' ? 'bg-blue-100/80 text-blue-900' : 'bg-purple-100/80 text-purple-900'
                          }`}>
                            {highlightText(item.category)}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80 align-middle">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-700 border-r border-slate-200/80 align-middle">
                          {highlightText(item.count)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-extrabold text-amber-800 bg-amber-50/30 border-r border-slate-200/80 align-middle text-xs">
                          {highlightText(amountUnder)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-[#123941] bg-teal-50/40 align-middle text-sm">
                          {highlightText(amountOver)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 약관 유의사항 / 보장 관련 참고사항 */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 space-y-1.5 font-medium leading-relaxed">
              <p className="font-extrabold text-slate-800">[유의사항 및 보장 기준]</p>
              <p>• <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.</p>
              <p>• <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.</p>
              <p>• <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.</p>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'meritz_noncovered_primary_treatment') {
      const typeLabel = meritzNoncoveredPrimaryTreatmentTab === '30m' ? '암통합치료비(3천)'
                      : meritzNoncoveredPrimaryTreatmentTab === '50m' ? '암통합치료비(5천)'
                      : '암통합치료비(7천)';
      const guaranteeAmountLabel = meritzNoncoveredPrimaryTreatmentTab === '30m' ? '3,000만원'
                                  : meritzNoncoveredPrimaryTreatmentTab === '50m' ? '5,000만원'
                                  : '7,000만원';
      const curTitle = `메리츠화재 - 암통합치료비(비급여/주요치료) (${typeLabel})`;
      const clauseNum = '2-96. 암 통합치료비(주요치료)(비급여(전액본인부담 포함))(건강가입)보장 특별약관';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amountUnder = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_under']
                          : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_under']
                          : item['70m_under'];
        const amountOver = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_over']
                         : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_over']
                         : item['70m_over'];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.count).includes(queryStr) ||
          normalizeString(amountUnder).includes(queryStr) ||
          normalizeString(amountOver).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (암통합치료비(3천) / 암통합치료비(5천) / 암통합치료비(7천)) - PDF 다운로드란 위 */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setMeritzNoncoveredPrimaryTreatmentTab('30m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredPrimaryTreatmentTab === '30m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(3천)
            </button>
            <button
              onClick={() => {
                setMeritzNoncoveredPrimaryTreatmentTab('50m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredPrimaryTreatmentTab === '50m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(5천)
            </button>
            <button
              onClick={() => {
                setMeritzNoncoveredPrimaryTreatmentTab('70m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzNoncoveredPrimaryTreatmentTab === '70m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              암통합치료비(7천)
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, MERITZ_NONCOVERED_PRIMARY_TREATMENT_SUMMARY, MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${typeLabel} 내 검색 (통합치료항목, 지급횟수, 금액 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. 상단 요약 분류표 (약관 및 보장 개요) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">📋 상단 요약 분류표 - {clauseNum}</span>
              <span className="text-[11px] font-bold text-amber-300">보험가입금액 {guaranteeAmountLabel}</span>
            </div>

            <div className="p-3 bg-slate-100/80 border-b border-slate-200 text-xs font-black text-slate-900 flex items-center justify-between">
              <span>📌 주요 보장 영역 요약 ({typeLabel})</span>
              <span className="text-[11px] font-bold text-slate-500">주요 치료 6종 항목</span>
            </div>

            <div className="p-3 text-xs bg-slate-50/50 space-y-1">
              <div className="font-extrabold text-[#123941] text-[11px]">주요 치료 (6종)</div>
              <div className="text-[11px] text-slate-600 font-bold">비급여 수술(암/유사암), 비급여 항암방사선치료(암/기타피부·갑상선암), 비급여 항암약물치료(암/기타피부·갑상선암)</div>
            </div>
          </div>

          {/* 5. 하단 세부 분류표 (상세 항목 및 금액 표) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보장항목 및 지급금액 표&gt; (보험가입금액 {guaranteeAmountLabel})</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[14%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[42%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[14%]">지급횟수</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[15%] bg-amber-50/80 text-amber-900">1년 경과전일 이전 (50%)</th>
                    <th className="py-2.5 px-3 text-center w-[15%] bg-teal-50/80 text-[#123941]">1년 경과시점 이후 (100%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amountUnder = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_under']
                                      : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_under']
                                      : item['70m_under'];
                    const amountOver = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_over']
                                     : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_over']
                                     : item['70m_over'];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/60 align-middle">
                          <span className="inline-block px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-blue-100/80 text-blue-900">
                            {highlightText(item.category)}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80 align-middle">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-700 border-r border-slate-200/80 align-middle">
                          {highlightText(item.count)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-extrabold text-amber-800 bg-amber-50/30 border-r border-slate-200/80 align-middle text-xs">
                          {highlightText(amountUnder)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-[#123941] bg-teal-50/40 align-middle text-sm">
                          {highlightText(amountOver)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 약관 유의사항 / 보장 관련 참고사항 */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 space-y-1.5 font-medium leading-relaxed">
              <p className="font-extrabold text-slate-800">[유의사항 및 보장 기준]</p>
              <p>• <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.</p>
              <p>• <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.</p>
              <p>• <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.</p>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'meritz_disease_integrated_treatment') {
      const typeLabel = meritzDiseaseIntegratedTab === '20m' ? '2000만원' : meritzDiseaseIntegratedTab === '40m' ? '4000만원' : '7000만원';
      const curTitle = `메리츠화재 - 질병통합치료비 (${typeLabel})`;
      const clauseNum = '2-134. 질병 통합치료비보장 특별약관';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amount = item[meritzDiseaseIntegratedTab];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.count).includes(queryStr) ||
          normalizeString(amount).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (2000만원 / 4000만원 / 7000만원) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setMeritzDiseaseIntegratedTab('20m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzDiseaseIntegratedTab === '20m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              2000만원
            </button>
            <button
              onClick={() => {
                setMeritzDiseaseIntegratedTab('40m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzDiseaseIntegratedTab === '40m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              4000만원
            </button>
            <button
              onClick={() => {
                setMeritzDiseaseIntegratedTab('70m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                meritzDiseaseIntegratedTab === '70m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              7000만원
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, MERITZ_DISEASE_INTEGRATED_TREATMENT_SUMMARY, MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`질병통합치료비(${typeLabel}) 내 검색 (통합치료항목, 구분, 지급횟수 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. 약관 조항 및 지급사유 안내 */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{clauseNum}</span>
            </div>
            <div className="text-[11px] text-slate-700 font-bold leading-relaxed space-y-1">
              <p className="font-extrabold text-blue-950">제1조(보험금의 지급사유)</p>
              <p>① 회사는 보험증권에 기재된 피보험자가 이 특별약관의 보험기간 중 질병의 진단 및 치료를 위한 필요 소견을 토대로 「질병 통합치료(검사)」를 받은 경우 보험수익자에게 아래의 통합치료항목별 지급금액을 질병 통합치료비로 지급합니다.</p>
              <p>② 회사는 보험증권에 기재된 피보험자가 이 특별약관의 보험기간 중 질병으로 「질병 통합치료(수술(1-5종))」를 받은 경우 보험수익자에게 아래의 통합치료항목별 지급금액을 질병 통합치료비로 지급합니다.</p>
              <p>③ 회사는 보험증권에 기재된 피보험자가 이 특별약관의 보험기간 중에 진단확정된 질병의 치료를 직접적인 목적으로 「질병 통합치료(주요치료)」를 받은 경우 보험수익자에게 아래의 통합치료항목별 지급금액을 질병 통합치료비로 지급합니다.</p>
              <p className="text-slate-600 font-semibold pt-1">
                ④ 질병 통합치료비의 연간 총 지급액이란 제1항부터 제3항의 질병 통합치료항목별 연간 지급된 지급금액의 합계액을 말하며, 보험가입금액을 한도로 합니다.<br/>
                ⑤ 제1항부터 제4항의 「연간」이라 함은 계약일부터 매1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
              </p>
            </div>
          </div>

          {/* 5. 보장항목 및 지급금액 표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보험가입금액 {typeLabel}&gt; 보장항목 및 지급금액 표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[44%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">지급횟수</th>
                    <th className="py-2.5 px-3 text-center w-[18%] bg-teal-50/80 text-[#123941]">지급금액 ({typeLabel})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amount = item[meritzDiseaseIntegratedTab];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-800 text-[11px] font-extrabold">
                            {highlightText(item.category)}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                          {highlightText(item.count)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-[#123941] bg-teal-50/40 text-sm">
                          {highlightText(amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. 종합 비교표 (전 유형 2000만원 / 4000만원 / 7000만원 비교) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-slate-800 text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;전 유형(2000만원 / 4000만원 / 7000만원) 보장금액 종합 비교표&gt;</span>
              <span className="text-[11px] font-medium text-slate-300">
                3개 가입금액 플랜 비교
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[40%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[15%]">지급횟수</th>
                    <th className={`py-2.5 px-3 border-r border-slate-200 text-center w-[9%] ${meritzDiseaseIntegratedTab === '20m' ? 'bg-teal-100/80 font-black text-[#123941]' : 'bg-slate-50'}`}>2000만원</th>
                    <th className={`py-2.5 px-3 border-r border-slate-200 text-center w-[9%] ${meritzDiseaseIntegratedTab === '40m' ? 'bg-teal-100/80 font-black text-[#123941]' : 'bg-slate-50'}`}>4000만원</th>
                    <th className={`py-2.5 px-3 text-center w-[9%] ${meritzDiseaseIntegratedTab === '70m' ? 'bg-teal-100/80 font-black text-[#123941]' : 'bg-slate-50'}`}>7000만원</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                      <td className="py-2 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                        {item.category}
                      </td>
                      <td className="py-2 px-4 font-black text-slate-900 border-r border-slate-200/80">
                        {item.name}
                      </td>
                      <td className="py-2 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                        {item.count}
                      </td>
                      <td className={`py-2 px-2 text-center font-bold border-r border-slate-200/80 ${meritzDiseaseIntegratedTab === '20m' ? 'bg-teal-50 text-[#123941] font-black' : 'text-slate-800'}`}>
                        {item['20m']}
                      </td>
                      <td className={`py-2 px-2 text-center font-bold border-r border-slate-200/80 ${meritzDiseaseIntegratedTab === '40m' ? 'bg-teal-50 text-[#123941] font-black' : 'text-slate-800'}`}>
                        {item['40m']}
                      </td>
                      <td className={`py-2 px-2 text-center font-bold ${meritzDiseaseIntegratedTab === '70m' ? 'bg-teal-50 text-[#123941] font-black' : 'text-slate-800'}`}>
                        {item['70m']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 7. 약관 세부규정 안내 (KB와 동일한 Dark Box 구조) */}
          <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl space-y-3 shadow-lg border border-slate-800">
            <h4 className="font-extrabold text-white text-xs sm:text-sm border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
              【제2조(보험금 지급에 관한 세부규정)】
            </h4>
            <div className="text-[11px] leading-relaxed space-y-1.5 text-slate-300 font-medium">
              <p>① 피보험자가 연간 1년 이내에 각각 다른 「MRI촬영(급여)」을 받은 경우에도 통합치료항목 중 MRI촬영(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.</p>
              <p>② 피보험자가 연간 1년 이내에 각각 다른 「CT촬영(급여)」을 받은 경우에도 통합치료항목 중 CT촬영(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.</p>
              <p>③ 피보험자가 연간 1년 이내에 각각 다른 「양전자단층촬영(PET)(급여)」을 받은 경우에도 통합치료항목 중 양전자단층촬영(PET)(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.</p>
              <p>④ 피보험자가 연간 1년 이내에 각각 다른 「특정시술치료(흡인,천자,절개)(급여)」를 받은 경우에도 통합치료항목 중 특정시술치료(흡인,천자,절개)(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.</p>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'kb_integrated_treatment') {
      const typeLabel = kbIntegratedTab === 'practical' ? '실속형' : kbIntegratedTab === 'basic' ? '기본형' : '고급형';
      const curTitle = `KB손해보험 - 질병통합치료비(${typeLabel})`;
      const clauseNum = kbIntegratedTab === 'practical' ? '237. 질병통합치료비(실속형)(맞춤고지) / 237-1. 질병통합치료비(실속형)(맞춤고지) 【갱신계약】'
                      : kbIntegratedTab === 'basic' ? '238. 질병통합치료비(기본형)(맞춤고지) / 238-1. 질병통합치료비(기본형)(맞춤고지) 【갱신계약】'
                      : '239. 질병통합치료비(고급형)(맞춤고지) / 239-1. 질병통합치료비(고급형)(맞춤고지) 【갱신계약】';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = KB_INTEGRATED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amounts = item[kbIntegratedTab];
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.method).includes(queryStr) ||
          normalizeString(amounts.under1yr).includes(queryStr) ||
          normalizeString(amounts.over1yr).includes(queryStr) ||
          normalizeString(amounts.renew).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for KB 질병통합치료비 (실속형 / 기본형 / 고급형) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setKbIntegratedTab('practical');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                kbIntegratedTab === 'practical'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              실속형
            </button>
            <button
              onClick={() => {
                setKbIntegratedTab('basic');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                kbIntegratedTab === 'basic'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              기본형
            </button>
            <button
              onClick={() => {
                setKbIntegratedTab('luxury');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                kbIntegratedTab === 'luxury'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              고급형
            </button>
          </div>

          {/* 2. Top Control Bar */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], KB_INTEGRATED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`질병통합치료비(${typeLabel}) 내 검색 (보장항목, 지급방식 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Clause Title & Notice */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1 flex items-center gap-1.5">
              <span>{clauseNum}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              (【갱신계약】은 자동갱신으로 운영합니다) <br/>
              제1조(보험금의 지급사유): 회사는 피보험자가 특별약관의 보험기간 중 질병의 진단 및 치료를 위한 필요소견을 토대로 해당되는 의료행위를 받은 경우 보장항목별로 각각 정해진 지급금액을 지급합니다.
            </p>
          </div>

          {/* 5. Main Table for KB 질병통합치료비 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;{typeLabel}&gt; 보장항목 및 지급금액 표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[22%]">구분</th>
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-left w-[28%]">보장항목</th>
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[14%]">지급방식</th>
                    <th colSpan={3} className="py-1.5 px-3 text-center bg-slate-200/80 font-black">지급금액</th>
                  </tr>
                  <tr className="bg-slate-50 text-slate-900 font-black text-[11px] border-b border-slate-200">
                    <th className="py-1.5 px-2 text-center border-r border-slate-200/80 w-[12%]">최초의 계약<br/>1년미만</th>
                    <th className="py-1.5 px-2 text-center border-r border-slate-200/80 w-[12%]">최초의 계약<br/>1년이상</th>
                    <th className="py-1.5 px-2 text-center w-[12%]">갱신된<br/>계약</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amounts = item[kbIntegratedTab];
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                          {highlightText(item.category)}
                        </td>
                        <td className="py-2.5 px-3 font-black text-slate-900 border-r border-slate-200/80">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                          {highlightText(item.method)}
                        </td>
                        <td className="py-2.5 px-2 text-center font-bold text-slate-800 border-r border-slate-200/80">
                          {highlightText(amounts.under1yr)}
                        </td>
                        <td className="py-2.5 px-2 text-center font-extrabold text-[#123941] border-r border-slate-200/80 bg-teal-50/30">
                          {highlightText(amounts.over1yr)}
                        </td>
                        <td className="py-2.5 px-2 text-center font-extrabold text-[#123941] bg-teal-50/30">
                          {highlightText(amounts.renew)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Special Provisions Notice Box */}
          <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl space-y-3 shadow-lg border border-slate-800">
            <h4 className="font-extrabold text-white text-xs sm:text-sm border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
              【제2조(보험금 지급에 관한 세부규정)】
            </h4>
            <div className="text-[11px] leading-relaxed space-y-1.5 text-slate-300 font-medium">
              <p>1. "질병통합치료(수술)"의 경우 회사는 피보험자가 동시에 두 종류 이상의 질병수술을 받은 경우에는 그 수술 중 가장 높은 지급금액에 해당하는 한 종류의 수술에 대하여만 보장합니다.</p>
              <p>2. 동일한 신체부위라 함은 각각 눈, 귀, 코, 씹어먹거나 말하는 기능과 관련된 신체부위, 머리, 목, 척추(등뼈), 체간골, 흉부장기·복부장기·비뇨생식기, 팔, 다리, 손가락, 발가락을 말하며, 눈, 귀, 팔, 다리는 좌·우를 각각 다른 신체부위로 봅니다.</p>
              <p>3. 피보험자가 연간 1년 이내에 각각 다른 "질병특정시술치료(도수정복술)" / "질병특정시술치료(기타시술)" / "질병특정시술치료(단순창상봉합술)" 등을 받은 경우에도 부위 및 횟수와 관계없이 보장항목별로 연간 1회만 지급합니다.</p>
              <p>4. 지속적신대체요법(CRRT), 인공호흡기(12시간초과)치료, 저체온요법치료, 종합병원 전신마취치료(6시간이상) 등을 받은 경우에도 각 보장항목별 부위 및 횟수와 관계없이 규정에 따라 지급합니다.</p>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'db_integrated_heart' || tabKey === 'db_heart_1' || tabKey === 'db_heart_2') {
      const isHeart1 = dbHeartTab === 'I';
      const curTitle = isHeart1
        ? 'DB손해보험 - 통합형 심장관련질환 I 분류표'
        : 'DB손해보험 - 통합형 심장관련질환 II 분류표';
      const curSections = isHeart1 ? DB_HEART_I_SECTIONS : DB_HEART_II_SECTIONS;
      const curSummary = isHeart1 ? DB_HEART_I_SUMMARY : DB_HEART_II_SUMMARY;

      const queryStr = normalizeString(detailFilter);

      // Filter summary items based on query
      const filteredSummaryItems = curSummary.filter((item) => {
        if (!queryStr) return true;
        return (
          normalizeString(item.title || '').includes(queryStr) ||
          normalizeString(item.category || '').includes(queryStr) ||
          normalizeString(item.diseases || '').includes(queryStr)
        );
      });

      // Filter detail sections and items based on query
      const filteredHeartSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredHeartSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for Integrated Heart Disease I and II (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setDbHeartTab('I');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbHeartTab === 'I'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              통합형심장질환I
            </button>
            <button
              onClick={() => {
                setDbHeartTab('II');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbHeartTab === 'II'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              통합형심장질환II
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, curSummary, curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${isHeart1 ? '통합형 심장관련질환I' : '통합형 심장관련질환II'} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{isHeart1 ? '통합형 심장관련질환 I 분류표' : '통합형 심장관련질환 II 분류표'}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {isHeart1
                ? '약관에 규정하는 통합형 심장관련질환 I으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상질병 해당 여부를 판단합니다.'
                : '약관에 통합형 심장관련질환 II로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상질병 해당 여부를 판단합니다.'}
            </p>
          </div>

          {/* 5. 상단요약분류표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">상단요약분류표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {curSummary.length}개 세해보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[35%] sm:w-[240px] border-r border-slate-200 text-left font-black">구분 (세해보장)</th>
                    <th className="py-2.5 px-4 text-left font-black">대상이 되는 질병 (KCD 코드)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummaryItems.map((sec: any, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-900 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0 whitespace-nowrap">
                        {highlightText(sec.category || sec.title)}
                      </td>
                      <td className="py-3 px-4 text-xs font-bold text-slate-800 leading-relaxed">
                        {highlightText(sec.diseases)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                {curSections.length}개 카테고리 / 총 {totalDetailItemsCount}개 세부 질병
              </span>
            </div>

            {filteredHeartSections.length > 0 ? (
              filteredHeartSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                          <th className="py-2 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 7. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              1. 제10차 개정 이후 이 약관의 대상질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              3. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서를 따릅니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'kb_heart_1' || tabKey === 'kb_heart_2' || tabKey === 'kb_heart') {
      const isHeart1 = kbHeartTab === 'specific1';
      const curTitle = isHeart1
        ? 'KB손해보험 - 【별표35】 심장질환(특정 I) 분류표'
        : 'KB손해보험 - 【별표36】 심장질환(특정 II) 분류표';
      const curSections = isHeart1 ? KB_HEART_SPECIFIC1_SECTIONS : KB_HEART_SPECIFIC2_SECTIONS;

      const queryStr = normalizeString(detailFilter);

      const filteredHeartSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item: any) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || item.name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredHeartSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for 심장질환특정I and 심장질환특정II (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setKbHeartTab('specific1');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                kbHeartTab === 'specific1'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심장질환특정I
            </button>
            <button
              onClick={() => {
                setKbHeartTab('specific2');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                kbHeartTab === 'specific2'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심장질환특정II
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${isHeart1 ? '심장질환특정I' : '심장질환특정II'} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#123941]/20 focus:border-[#123941] transition-all shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search results count if filtered */}
          {detailFilter && (
            <div className="no-print px-1 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>검색 결과 {totalDetailItemsCount}개</span>
            </div>
          )}

          {/* Detail Table */}
          {filteredHeartSections.length > 0 ? (
            filteredHeartSections.map((sec, secIdx) => (
              <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <div className="px-4 py-3 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-xs font-black text-[#123941] flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-[#123941] rounded-full"></span>
                    {sec.title}
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                    {sec.matchingItems.length}개 항목
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-600 font-bold text-[11px]">
                        <th className="py-2.5 px-4 w-16 text-center border-r border-slate-200">번호</th>
                        <th className="py-2.5 px-4 border-r border-slate-200">대상이 되는 항목</th>
                        <th className="py-2.5 px-4 w-32 text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sec.matchingItems.map((item: any, itemIdx: number) => (
                        <tr key={itemIdx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-4 text-center font-medium text-slate-400 border-r border-slate-100">
                            {item.num}
                          </td>
                          <td className="py-2.5 px-4 font-bold text-slate-800 border-r border-slate-100">
                            {item.disease || item.name}
                          </td>
                          <td className="py-2.5 px-4 text-center font-mono font-bold text-[#123941] bg-slate-50/30">
                            {item.code}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
              검색 결과가 없습니다.
            </div>
          )}

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              1. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여가 가능한 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              2. 제10차 개정 이후 이 약관에서 보장하는 {isHeart1 ? '심장질환(특정 I)' : '심장질환(특정 II)'} 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              3. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서에 따라 기재된 것을 인정합니다.
            </p>
            <p className="pl-2">
              4. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'db_heart_simple') {
      const curTitle =
        dbHeartSimpleTab === 'I'
          ? 'DB손해보험 - 【별표18】 심장질환(특정 I) 분류표'
          : dbHeartSimpleTab === 'II'
          ? 'DB손해보험 - 【별표19】 심장질환(특정 II) 분류표'
          : 'DB손해보험 - 【별표20】 심장질환(특정 III) 분류표';

      const curSections =
        dbHeartSimpleTab === 'I'
          ? DB_HEART_SPECIFIC_I_SECTIONS
          : dbHeartSimpleTab === 'II'
          ? DB_HEART_SPECIFIC_II_SECTIONS
          : DB_HEART_SPECIFIC_III_SECTIONS;

      const subTabLabel =
        dbHeartSimpleTab === 'I'
          ? '심장질환(특정 I)'
          : dbHeartSimpleTab === 'II'
          ? '심장질환(특정 II)'
          : '심장질환(특정 III)';

      const noticeTitle =
        dbHeartSimpleTab === 'I'
          ? '【별표18】 심장질환(특정 I) 분류표'
          : dbHeartSimpleTab === 'II'
          ? '【별표19】 심장질환(특정 II) 분류표'
          : '【별표20】 심장질환(특정 III) 분류표';

      const noticeText = `약관에 규정하는 ${subTabLabel}로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상질병 해당 여부를 판단합니다.`;

      const queryStr = normalizeString(detailFilter);

      const filteredSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for 심장질환 (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setDbHeartSimpleTab('I');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbHeartSimpleTab === 'I'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심장질환 I
            </button>
            <button
              onClick={() => {
                setDbHeartSimpleTab('II');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbHeartSimpleTab === 'II'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심장질환 II
            </button>
            <button
              onClick={() => {
                setDbHeartSimpleTab('III');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbHeartSimpleTab === 'III'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심장질환 III
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${subTabLabel} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{noticeTitle}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {noticeText}
            </p>
          </div>

          {/* 5. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                {curSections.length}개 카테고리 / 총 {totalDetailItemsCount}개 세부 질병
              </span>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                          <th className="py-2 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 6. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              1. 제10차 개정 이후 이 약관의 대상질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              3. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서를 따릅니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'lotte_cardiovascular_simple') {
      const curTitle =
        lotteCardiovascularSimpleTab === 'I'
          ? '롯데손해보험 - 【별표88】 심혈관질환(특정심장질환 I) 분류표'
          : lotteCardiovascularSimpleTab === 'II'
          ? '롯데손해보험 - 【별표89】 심혈관질환(특정심장질환 II) 분류표'
          : '롯데손해보험 - 【별표90】 심혈관질환(특정15대심장질환) 분류표';

      const curSections =
        lotteCardiovascularSimpleTab === 'I'
          ? LOTTE_CARDIOVASCULAR_SIMPLE_I_SECTIONS
          : lotteCardiovascularSimpleTab === 'II'
          ? LOTTE_CARDIOVASCULAR_SIMPLE_II_SECTIONS
          : LOTTE_CARDIOVASCULAR_SIMPLE_15_SECTIONS;

      const subTabLabel =
        lotteCardiovascularSimpleTab === 'I'
          ? '심혈관질환(특정심장질환 I)'
          : lotteCardiovascularSimpleTab === 'II'
          ? '심혈관질환(특정심장질환 II)'
          : '심혈관질환(특정15대심장질환)';

      const noticeTitle =
        lotteCardiovascularSimpleTab === 'I'
          ? '【별표88】 심혈관질환(특정심장질환 I) 분류표'
          : lotteCardiovascularSimpleTab === 'II'
          ? '【별표89】 심혈관질환(특정심장질환 II) 분류표'
          : '【별표90】 심혈관질환(특정15대심장질환) 분류표';

      const noticeText = `약관에 규정하는 ${subTabLabel}로 분류되는 질병은 제9차 개정 한국표준질병사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병사인분류가 개정되는 경우에는 개정된 기준에 따라 이 약관에서 보장하는 ${subTabLabel} 해당 여부를 판단합니다.`;

      const queryStr = normalizeString(detailFilter);

      const filteredSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for 심혈관질환(I/II/15대) (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setLotteCardiovascularSimpleTab('I');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                lotteCardiovascularSimpleTab === 'I'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관질환 I
            </button>
            <button
              onClick={() => {
                setLotteCardiovascularSimpleTab('II');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                lotteCardiovascularSimpleTab === 'II'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관질환 II
            </button>
            <button
              onClick={() => {
                setLotteCardiovascularSimpleTab('15');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                lotteCardiovascularSimpleTab === '15'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              15대심장질환
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${subTabLabel} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{noticeTitle}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {noticeText}
            </p>
          </div>

          {/* 5. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                {curSections.length}개 카테고리 / 총 {totalDetailItemsCount}개 세부 질병
              </span>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                          <th className="py-2 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 6. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              1. 제10차 개정 이후 이 약관의 대상질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              3. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서를 따릅니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'hanwha_cardiovascular_5') {
      const curTitle =
        hanwhaCardio5Tab === 'tab1'
          ? '한화손해보험 - 【별표32】 심혈관질환 분류표'
          : hanwhaCardio5Tab === 'tab2'
          ? '한화손해보험 - 【별표33】 심혈관질환(기타심장부정맥제외) 분류표'
          : hanwhaCardio5Tab === 'tab3'
          ? '한화손해보험 - 【별표29】 심혈관특정질환Ⅰ 분류표'
          : hanwhaCardio5Tab === 'tab4'
          ? '한화손해보험 - 【별표30】 심혈관특정질환Ⅰ(기타심장부정맥제외) 분류표'
          : '한화손해보험 - 【별표31】 심혈관특정질환Ⅱ 분류표';

      const curSections =
        hanwhaCardio5Tab === 'tab1'
          ? HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB1
          : hanwhaCardio5Tab === 'tab2'
          ? HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB2
          : hanwhaCardio5Tab === 'tab3'
          ? HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB3
          : hanwhaCardio5Tab === 'tab4'
          ? HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB4
          : HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB5;

      const subTabLabel =
        hanwhaCardio5Tab === 'tab1'
          ? '심혈관질환'
          : hanwhaCardio5Tab === 'tab2'
          ? '심혈관질환(기타심장부정맥제외)'
          : hanwhaCardio5Tab === 'tab3'
          ? '심혈관특정질환Ⅰ'
          : hanwhaCardio5Tab === 'tab4'
          ? '심혈관특정질환Ⅰ(기타심장부정맥제외)'
          : '심혈관특정질환Ⅱ';

      const noticeTitle =
        hanwhaCardio5Tab === 'tab1'
          ? '【별표32】 심혈관질환 분류표'
          : hanwhaCardio5Tab === 'tab2'
          ? '【별표33】 심혈관질환(기타심장부정맥제외) 분류표'
          : hanwhaCardio5Tab === 'tab3'
          ? '【별표29】 심혈관특정질환Ⅰ 분류표'
          : hanwhaCardio5Tab === 'tab4'
          ? '【별표30】 심혈관특정질환Ⅰ(기타심장부정맥제외) 분류표'
          : '【별표31】 심혈관특정질환Ⅱ 분류표';

      const noticeText =
        curSections[0]?.definition ||
        `약관에 규정하는 ${subTabLabel}으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.`;

      const queryStr = normalizeString(detailFilter);

      const filteredSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for 한화 심혈관질환(5개담보별) (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setHanwhaCardio5Tab('tab1');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaCardio5Tab === 'tab1'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관질환
            </button>
            <button
              onClick={() => {
                setHanwhaCardio5Tab('tab2');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaCardio5Tab === 'tab2'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관(부정맥제외)
            </button>
            <button
              onClick={() => {
                setHanwhaCardio5Tab('tab3');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaCardio5Tab === 'tab3'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관특정Ⅰ
            </button>
            <button
              onClick={() => {
                setHanwhaCardio5Tab('tab4');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaCardio5Tab === 'tab4'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              특정Ⅰ(부정맥제외)
            </button>
            <button
              onClick={() => {
                setHanwhaCardio5Tab('tab5');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaCardio5Tab === 'tab5'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관특정Ⅱ
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${subTabLabel} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{noticeTitle}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {noticeText}
            </p>
          </div>

          {/* 5. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>대상질병 분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                총 {totalDetailItemsCount}개 대상질병
              </span>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">대상질병</th>
                          <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 6. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 적용기준</div>
            <p className="pl-2">
              주1) 이후 한국표준질병·사인분류가 개정되는 경우에는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              주2) 진단 당시의 한국표준질병·사인분류에 따라 상기 질병의 해당 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 상기 질병의 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              주3) 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.(단, 해당 약관 상에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다)
            </p>
            <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
              한화 시그니처 여성 건강보험4.0 무배당2604 (1345~1347p)
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'nh_cardiovascular_4') {
      const curTitle =
        nhCardio4Tab === 'tab1'
          ? '농협손해보험 - 【별표51】 심혈관특정질환 I 분류표'
          : nhCardio4Tab === 'tab2'
          ? '농협손해보험 - 【별표52】 심혈관특정질환 I (기타심장부정맥제외) 분류표'
          : nhCardio4Tab === 'tab3'
          ? '농협손해보험 - 【별표53】 심근병증 분류표'
          : '농협손해보험 - 【별표54】 주요심장염증질환 분류표';

      const curSections =
        nhCardio4Tab === 'tab1'
          ? NH_CARDIOVASCULAR_4_SECTIONS_TAB1
          : nhCardio4Tab === 'tab2'
          ? NH_CARDIOVASCULAR_4_SECTIONS_TAB2
          : nhCardio4Tab === 'tab3'
          ? NH_CARDIOVASCULAR_4_SECTIONS_TAB3
          : NH_CARDIOVASCULAR_4_SECTIONS_TAB4;

      const subTabLabel =
        nhCardio4Tab === 'tab1'
          ? '심혈관특정질환 I'
          : nhCardio4Tab === 'tab2'
          ? '심혈관특정질환 I (기타심장부정맥제외)'
          : nhCardio4Tab === 'tab3'
          ? '심근병증'
          : '주요심장염증질환';

      const noticeTitle =
        nhCardio4Tab === 'tab1'
          ? '【별표51】 심혈관특정질환 I 분류표'
          : nhCardio4Tab === 'tab2'
          ? '【별표52】 심혈관특정질환 I (기타심장부정맥제외) 분류표'
          : nhCardio4Tab === 'tab3'
          ? '【별표53】 심근병증 분류표'
          : '【별표54】 주요심장염증질환 분류표';

      const noticeText =
        curSections[0]?.definition ||
        `약관에 규정하는 ${subTabLabel}으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.`;

      const queryStr = normalizeString(detailFilter);

      const filteredSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for 농협 심장관련분류표(4개담보) (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setNhCardio4Tab('tab1');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                nhCardio4Tab === 'tab1'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심혈관특정Ⅰ
            </button>
            <button
              onClick={() => {
                setNhCardio4Tab('tab2');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                nhCardio4Tab === 'tab2'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              특정Ⅰ(부정맥제외)
            </button>
            <button
              onClick={() => {
                setNhCardio4Tab('tab3');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                nhCardio4Tab === 'tab3'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              심근병증
            </button>
            <button
              onClick={() => {
                setNhCardio4Tab('tab4');
                setDetailFilter('');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                nhCardio4Tab === 'tab4'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              주요심장염증질환
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, [], curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${subTabLabel} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{noticeTitle}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {noticeText}
            </p>
          </div>

          {/* 5. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>대상질병 분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                총 {totalDetailItemsCount}개 대상질병
              </span>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">분류항목</th>
                          <th className="py-2.5 px-3 w-[25%] text-center">분류코드</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 6. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              2. 제10차 개정 이후 대상 질병 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다. 또한, 대상 질병 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.
            </p>
            <p className="pl-2">
              3. 진단 당시의 한국표준질병·사인분류에 따라 대상 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 대상 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다.)에 기재된 것을 인정합니다.
            </p>
            <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
              무배당 NH5.10.5굿플러스건강보험2604(1~2종)약관 별표
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'db_integrated_brain' || tabKey === 'db_major_5vascular_brain') {
      const isBrain1 = dbBrainTab === 'I';
      const curTitle = isBrain1
        ? 'DB손해보험 - 통합형 뇌관련질환 I 분류표'
        : 'DB손해보험 - 통합형 뇌관련질환 II 분류표';
      const curSections = isBrain1 ? DB_BRAIN_I_SECTIONS : DB_BRAIN_II_SECTIONS;
      const curSummary = isBrain1 ? DB_BRAIN_I_SUMMARY : DB_BRAIN_II_SUMMARY;

      const queryStr = normalizeString(detailFilter);

      // Filter summary items based on query
      const filteredSummaryItems = curSummary.filter((item) => {
        if (!queryStr) return true;
        return (
          normalizeString(item.title || '').includes(queryStr) ||
          normalizeString(item.category || '').includes(queryStr) ||
          normalizeString(item.diseases || '').includes(queryStr)
        );
      });

      // Filter detail sections and items based on query
      const filteredBrainSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      const totalDetailItemsCount = filteredBrainSections.reduce((acc, sec) => acc + sec.matchingItems.length, 0);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection for Integrated Brain Disease I and II */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setDbBrainTab('I');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbBrainTab === 'I'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              통합형뇌관련질환I
            </button>
            <button
              onClick={() => {
                setDbBrainTab('II');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                dbBrainTab === 'II'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              통합형뇌관련질환II
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, curSummary, curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${isBrain1 ? '통합형 뇌관련질환I' : '통합형 뇌관련질환II'} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{isBrain1 ? '통합형 뇌관련질환 I 분류표' : '통합형 뇌관련질환 II 분류표'}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {isBrain1
                ? '약관에 규정하는 통합형 뇌관련질환 I으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상질병 해당 여부를 판단합니다.'
                : '약관에 규정하는 통합형 뇌관련질환 II으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상질병 해당 여부를 판단합니다.'}
            </p>
          </div>

          {/* 5. 상단요약분류표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">상단요약분류표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {curSummary.length}개 세해보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[35%] sm:w-[240px] border-r border-slate-200 text-left font-black">구분 (세해보장)</th>
                    <th className="py-2.5 px-4 text-left font-black">대상이 되는 질병 (KCD 코드)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummaryItems.map((sec: any, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-900 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0 whitespace-nowrap">
                        {highlightText(sec.category || sec.title)}
                      </td>
                      <td className="py-3 px-4 text-xs font-bold text-slate-800 leading-relaxed">
                        {highlightText(sec.diseases)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                {curSections.length}개 카테고리 / 총 {totalDetailItemsCount}개 세부 질병
              </span>
            </div>

            {filteredBrainSections.length > 0 ? (
              filteredBrainSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-2.5 bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200 flex items-center justify-between">
                    <span>{sec.title}</span>
                    <span className="text-[11px] text-slate-600 font-bold">
                      {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                          <th className="py-2 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease || item.name)}
                            </td>
                            <td className="py-2 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* 7. Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            <p className="pl-2">
              1. 제10차 개정 이후 이 약관의 대상질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              3. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서를 따릅니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'hanwha_integrated_treatment') {
      const typeLabel = hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원';
      const curTitle = `한화손해보험 - 상해및질병통합치료비 (${typeLabel})`;
      const clauseNum = '한화 시그니처 여성 건강보험4.0 무배당2604 (712p)';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = HANWHA_INTEGRATED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amount = hanwhaIntegratedTreatmentTab === '10m' ? item.plan10m : hanwhaIntegratedTreatmentTab === '30m' ? item.plan30m : item.plan40m;
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.limit).includes(queryStr) ||
          normalizeString(amount).includes(queryStr) ||
          normalizeString(item.plan10m).includes(queryStr) ||
          normalizeString(item.plan30m).includes(queryStr) ||
          normalizeString(item.plan40m).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (1천만원 / 3천만원 / 4천만원) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setHanwhaIntegratedTreatmentTab('10m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaIntegratedTreatmentTab === '10m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              1천만원
            </button>
            <button
              onClick={() => {
                setHanwhaIntegratedTreatmentTab('30m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaIntegratedTreatmentTab === '30m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              3천만원
            </button>
            <button
              onClick={() => {
                setHanwhaIntegratedTreatmentTab('40m');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaIntegratedTreatmentTab === '40m'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              4천만원
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, HANWHA_INTEGRATED_TREATMENT_SUMMARY, HANWHA_INTEGRATED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`상해및질병통합치료비(${typeLabel}) 내 검색 (통합치료항목, 구분, 지급한도 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Clause Title & Notice */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1 flex items-center gap-1.5">
              <span>{clauseNum}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              3. 제1항의 통합치료항목별 지급금액 및 지급한도라 함은 아래의 지급금액 및 지급한도를 말합니다.
            </p>
          </div>

          {/* 5. Main Table for Hanwha 상해및질병통합치료비 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;보험가입금액 {typeLabel}&gt; 보장항목 및 지급금액 표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[22%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[38%]">통합치료항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">지급한도</th>
                    <th className="py-2.5 px-3 text-center w-[20%] bg-teal-50/80 text-[#123941]">지급금액 ({typeLabel})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amount = hanwhaIntegratedTreatmentTab === '10m' ? item.plan10m : hanwhaIntegratedTreatmentTab === '30m' ? item.plan30m : item.plan40m;
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                          {highlightText(item.category)}
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                          {highlightText(item.limit)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-extrabold text-[#123941] bg-teal-50/40 text-sm">
                          {highlightText(amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. 종합 비교표 (전 유형 1천만원 / 3천만원 / 4천만원 비교) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-slate-800 text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;전 유형(1천만원 / 3천만원 / 4천만원) 보장금액 종합 비교표&gt;</span>
              <span className="text-[11px] font-medium text-slate-300">
                3개 가입금액 플랜 비교
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">구분</th>
                    <th rowSpan={2} className="py-2.5 px-4 border-r border-slate-200 text-left w-[32%]">통합치료항목</th>
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">지급한도</th>
                    <th colSpan={3} className="py-1.5 px-3 text-center bg-slate-200/80 font-black">보험가입금액별 지급금액</th>
                  </tr>
                  <tr className="bg-slate-50 text-slate-900 font-black text-[11px] border-b border-slate-200">
                    <th className={`py-1.5 px-2 text-center border-r border-slate-200/80 w-[10%] ${hanwhaIntegratedTreatmentTab === '10m' ? 'bg-teal-50 text-[#123941]' : ''}`}>1천만원</th>
                    <th className={`py-1.5 px-2 text-center border-r border-slate-200/80 w-[10%] ${hanwhaIntegratedTreatmentTab === '30m' ? 'bg-teal-50 text-[#123941]' : ''}`}>3천만원</th>
                    <th className={`py-1.5 px-2 text-center w-[10%] ${hanwhaIntegratedTreatmentTab === '40m' ? 'bg-teal-50 text-[#123941]' : ''}`}>4천만원</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {HANWHA_INTEGRATED_TREATMENT_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                      <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                        {item.category}
                      </td>
                      <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                        {item.limit}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold border-r border-slate-200/80 ${hanwhaIntegratedTreatmentTab === '10m' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.plan10m}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold border-r border-slate-200/80 ${hanwhaIntegratedTreatmentTab === '30m' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.plan30m}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold ${hanwhaIntegratedTreatmentTab === '40m' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.plan40m}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 7. Special Provisions Notice Box */}
          <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl space-y-3 shadow-lg border border-slate-800">
            <h4 className="font-extrabold text-white text-xs sm:text-sm border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
              【상해및질병 통합치료비 약관 규정】
            </h4>
            <div className="space-y-2 text-[11px] text-slate-300 leading-relaxed">
              <p>
                <strong className="text-amber-300">[4]</strong> 상해및질병 통합치료비의 연간 총 지급금액은 제1항 내지 제3항의 통합치료항목별 연간 지급된 지급금액의 합산금액을 말하며, 보험가입금액을 한도로 합니다.
              </p>
              <p>
                <strong className="text-amber-300">[5]</strong> 이 특별약관에서 “연간”이라 함은 이 특별약관의 계약일(갱신계약의 경우 갱신계약일)로부터 그 날을 포함하여 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말하며, 한도 산정의 기준일자는 아래의 일자로 합니다. 다만, 해당년도의 계약해당일이 없는 경우에는 해당월의 마지막 날을 계약해당일로 합니다.
              </p>
              <div className="pl-3 space-y-1 text-slate-400 border-l border-slate-700">
                <p>1. “상해및질병 통합치료(검사)”를 받은 경우 : 각 통합치료항목별 “상해및질병 통합치료(검사)”를 받은 날</p>
                <p>2. “상해및질병 통합치료(1-5종수술)”를 받은 경우 : 각 통합치료항목별 “상해및질병 통합치료(1-5종수술)”를 받은 날</p>
                <p>3. “상해및질병 통합치료(입원)”를 받은 경우 : 각 통합치료항목별 “상해및질병 통합치료(입원)”를 받은 날</p>
                <p>4. “상해및질병 통합치료(주요치료)”를 받은 경우 : 각 통합치료항목별 “상해및질병 통합치료(주요치료)”를 받은 날</p>
                <p className="text-slate-500">(단, 특정수혈치료비의 경우 각 “전혈 및 분획제제” 또는 “혈액성분채집술”에 의한 수혈을 받은 날)</p>
              </div>
            </div>
            <div className="pt-2 text-[10px] text-slate-500 font-medium text-right border-t border-slate-800">
              한화 시그니처 여성 건강보험4.0 무배당2604 (712p)
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'hanwha_injury_integrated_treatment') {
      const typeLabel = hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형';
      const curTitle = `한화손해보험 - 상해통합치료비 (${typeLabel})`;
      const clauseNum = '한화 시그니처 여성 건강보험4.0 무배당2604 (674p)';

      const queryStr = normalizeString(detailFilter);

      const filteredItems = HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS.filter((item) => {
        if (!queryStr) return true;
        const amount = hanwhaInjuryTreatmentTab === 'luxury' ? item.luxury : hanwhaInjuryTreatmentTab === 'general' ? item.general : item.saving;
        return (
          normalizeString(item.category).includes(queryStr) ||
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.limit).includes(queryStr) ||
          normalizeString(amount).includes(queryStr) ||
          normalizeString(item.luxury).includes(queryStr) ||
          normalizeString(item.general).includes(queryStr) ||
          normalizeString(item.saving).includes(queryStr)
        );
      });

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* 1. Sub-tabs Selection (고급형 / 일반형 / 실속형) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-3xs">
            <button
              onClick={() => {
                setHanwhaInjuryTreatmentTab('luxury');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaInjuryTreatmentTab === 'luxury'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              고급형
            </button>
            <button
              onClick={() => {
                setHanwhaInjuryTreatmentTab('general');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaInjuryTreatmentTab === 'general'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              일반형
            </button>
            <button
              onClick={() => {
                setHanwhaInjuryTreatmentTab('saving');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hanwhaInjuryTreatmentTab === 'saving'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              실속형
            </button>
          </div>

          {/* 2. Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, HANWHA_INJURY_INTEGRATED_TREATMENT_SUMMARY, HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`상해통합치료비(${typeLabel}) 내 검색 (통합치료 항목, 구분, 지급한도 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 4. Header Clause Title & Notice */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1 flex items-center gap-1.5">
              <span>{clauseNum}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              [3] 제1항의 통합치료 항목별 지급금액 및 지급한도라 함은 아래의 지급금액 및 지급한도를 말합니다.
            </p>
          </div>

          {/* 5. Main Table for Hanwha 상해통합치료비 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;형별 지급금액 ({typeLabel})&gt; 보장항목 및 지급금액 표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {filteredItems.length}개 보장 항목
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[20%]">구분</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 text-left w-[38%]">통합치료 항목</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-[22%]">지급한도</th>
                    <th className="py-2.5 px-3 text-center w-[20%] bg-teal-50/80 text-[#123941]">지급금액 ({typeLabel})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredItems.map((item, idx) => {
                    const amount = hanwhaInjuryTreatmentTab === 'luxury' ? item.luxury : hanwhaInjuryTreatmentTab === 'general' ? item.general : item.saving;
                    return (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                        <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                          {highlightText(item.category)}
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80">
                          {highlightText(item.name)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                          {highlightText(item.limit)}
                        </td>
                        <td className="py-2.5 px-3 text-center font-extrabold text-[#123941] bg-teal-50/40 text-sm">
                          {highlightText(amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. 종합 비교표 (전 유형 고급형 / 일반형 / 실속형 비교) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-3 bg-slate-800 text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">&lt;전 유형(고급형 / 일반형 / 실속형) 보장금액 종합 비교표&gt;</span>
              <span className="text-[11px] font-medium text-slate-300">
                3개 형별 플랜 비교
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">구분</th>
                    <th rowSpan={2} className="py-2.5 px-4 border-r border-slate-200 text-left w-[34%]">통합치료 항목</th>
                    <th rowSpan={2} className="py-2.5 px-3 border-r border-slate-200 text-center w-[18%]">지급한도</th>
                    <th colSpan={3} className="py-1.5 px-3 text-center bg-slate-200/80 font-black">형별 지급금액</th>
                  </tr>
                  <tr className="bg-slate-50 text-slate-900 font-black text-[11px] border-b border-slate-200">
                    <th className={`py-1.5 px-2 text-center border-r border-slate-200/80 w-[10%] ${hanwhaInjuryTreatmentTab === 'luxury' ? 'bg-teal-50 text-[#123941]' : ''}`}>고급형</th>
                    <th className={`py-1.5 px-2 text-center border-r border-slate-200/80 w-[10%] ${hanwhaInjuryTreatmentTab === 'general' ? 'bg-teal-50 text-[#123941]' : ''}`}>일반형</th>
                    <th className={`py-1.5 px-2 text-center w-[10%] ${hanwhaInjuryTreatmentTab === 'saving' ? 'bg-teal-50 text-[#123941]' : ''}`}>실속형</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                      <td className="py-2.5 px-3 font-bold text-slate-700 text-center border-r border-slate-200/80 bg-slate-50/50">
                        {item.category}
                      </td>
                      <td className="py-2.5 px-4 font-black text-slate-900 border-r border-slate-200/80">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-slate-600 border-r border-slate-200/80">
                        {item.limit}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold border-r border-slate-200/80 ${hanwhaInjuryTreatmentTab === 'luxury' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.luxury}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold border-r border-slate-200/80 ${hanwhaInjuryTreatmentTab === 'general' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.general}
                      </td>
                      <td className={`py-2.5 px-2 text-center font-bold ${hanwhaInjuryTreatmentTab === 'saving' ? 'font-black text-[#123941] bg-teal-50/50' : 'text-slate-800'}`}>
                        {item.saving}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 7. Special Provisions Notice Box */}
          <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl space-y-3 shadow-lg border border-slate-800">
            <h4 className="font-extrabold text-white text-xs sm:text-sm border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
              【상해통합치료비 약관 규정】
            </h4>
            <div className="space-y-2 text-[11px] text-slate-300 leading-relaxed">
              <p>
                <strong className="text-amber-300">[4]</strong> 이 특별약관에서 “연간”이라 함은 이 특별약관의 계약일로부터 그 날을 포함하여 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다. 다만, 해당년도의 계약해당일이 없는 경우에는 해당월의 마지막 날을 계약해당일로 합니다.
              </p>
            </div>
            <div className="pt-2 text-[10px] text-slate-500 font-medium text-right border-t border-slate-800">
              674 한화 시그니처 여성 건강보험4.0 무배당2604
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'hyundai_brain') {
      const isBrain1 = hyundaiBrainSubTab === '1';
      const curTitle = isBrain1 ? '현대해상 - [별표89] 뇌혈관질환(Ⅰ) 분류표' : '현대해상 - [별표90] 뇌혈관질환(Ⅱ) 분류표';
      const curSections = isBrain1 ? HYUNDAI_BRAIN_I_SECTIONS : HYUNDAI_BRAIN_II_SECTIONS;
      const curSummary = isBrain1 ? HYUNDAI_BRAIN_I_SUMMARY : HYUNDAI_BRAIN_II_SUMMARY;

      const queryStr = normalizeString(detailFilter);

      const filteredBrainSections = curSections.map((sec) => {
        const matchingItems = (sec.items || []).filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num || '').includes(queryStr) ||
            normalizeString(item.disease || (item as any).name || '').includes(queryStr) ||
            normalizeString(item.code || '').includes(queryStr) ||
            normalizeString(sec.title || sec.category || '').includes(queryStr)
          );
        });

        const isTitleMatch = !queryStr || normalizeString(sec.title || sec.category || '').includes(queryStr);

        return {
          ...sec,
          matchingItems: isTitleMatch ? sec.items : matchingItems,
          isMatch: isTitleMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Sub-tabs Selection for Brain Disease I and II (PDF 다운로드란 위에 위치) */}
          <div className="no-print flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => {
                setHyundaiBrainSubTab('1');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hyundaiBrainSubTab === '1'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              뇌혈관질환I ([별표89])
            </button>
            <button
              onClick={() => {
                setHyundaiBrainSubTab('2');
                setDetailFilter('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs font-black rounded-xl transition-all cursor-pointer text-center ${
                hyundaiBrainSubTab === '2'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              뇌혈관질환II ([별표90])
            </button>
          </div>

          {/* Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{curTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(curTitle, curSummary, curSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${isBrain1 ? '뇌혈관질환I' : '뇌혈관질환II'} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Header Notice Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{isBrain1 ? '[별표89] 뇌혈관질환(Ⅰ) 분류표' : '[별표90] 뇌혈관질환(Ⅱ) 분류표'}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              ① 약관에서 규정하는 '{isBrain1 ? '뇌혈관질환(Ⅰ)' : '뇌혈관질환(Ⅱ)'}'으로 분류되는 질병은 제9차 개정 한국표준질병사인분류(통계청 고시 제2025-299호, 2026.1.1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병사인분류가 개정되는 경우에는 개정된 기준에 따라 해당 여부를 판단합니다.
            </p>
          </div>

          {/* Main Content Tables */}
          <div className="space-y-4">
            {filteredBrainSections.length > 0 ? (
              filteredBrainSections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
                    <span>{sec.title || sec.category}</span>
                    <span className="text-[11px] text-amber-300 font-bold">
                      총 {sec.matchingItems.length}개 항목
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                          <th className="py-2.5 px-3 w-[15%] text-center border-r border-slate-200">No.</th>
                          <th className="py-2.5 px-3 w-[60%] border-r border-slate-200">대상이 되는 질병</th>
                          <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {sec.matchingItems.map((item: any, itemIdx: number) => (
                          <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                            <td className="py-2.5 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                              {item.num}
                            </td>
                            <td className="py-2.5 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                              {highlightText(item.disease)}
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono font-bold">
                              <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                {highlightText(item.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <p className="pl-2">
              ② 제10차 개정이후 한국표준질병사인분류에 있어서 상기 상병 또는 질병 해당 여부는 피보험자가 진단확정된 당시 시행하고 있는 한국표준질병사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              ③ 다만, 진단확정 당시의 한국표준질병사인분류에 따라 상기 상병 또는 질병에 대한 보험금 지급여부를 판단한 경우에는, 이후에 한국표준질병사인분류가 개정되더라도 상기 상병 또는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              ④ 진단서 상의 분류번호는 한국표준질병사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다)에 따라 기재된 것을 인정합니다.
            </p>
            <p className="pl-2">
              ⑤ 상기 외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.
            </p>
            <p className="pl-2">
              ⑥ 상기 질병 이외에 신생아에게 적용하는 '출생전후기에 기원한 특정병태(P코드)' 질병분류번호는 포함하지 않습니다.
            </p>
          </div>
        </div>
      );
    }



    if (tabKey === 'hyundai_surgery1_5') {
      const queryStr = normalizeString(detailFilter);

      const filteredSections = HYUNDAI_SURGERY_1_5_SECTIONS.map((sec) => {
        const matchingItems = sec.items.filter((item) => {
          if (!queryStr) return true;
          return (
            normalizeString(item.num).includes(queryStr) ||
            normalizeString(item.name).includes(queryStr) ||
            normalizeString(item.type).includes(queryStr) ||
            normalizeString(sec.category).includes(queryStr) ||
            (sec.subTitle && normalizeString(sec.subTitle).includes(queryStr))
          );
        });

        const isCategoryMatch = !queryStr || normalizeString(sec.category).includes(queryStr);

        return {
          ...sec,
          matchingItems: isCategoryMatch ? sec.items : matchingItems,
          isMatch: isCategoryMatch || matchingItems.length > 0
        };
      }).filter((sec) => sec.isMatch);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Top Control Bar with PDF Download */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const allExpanded: Record<number, boolean> = {};
                  HYUNDAI_SURGERY_1_5_SECTIONS.forEach((_, idx) => { allExpanded[idx] = true; });
                  setExpandedHyundaiSurgery1_5Sections(allExpanded);
                }}
                className="px-2.5 py-1.5 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-3xs"
              >
                전체 펼치기
              </button>
              <button
                onClick={() => setExpandedHyundaiSurgery1_5Sections({})}
                className="px-2.5 py-1.5 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-3xs"
              >
                전체 접기
              </button>
              <button
                onClick={() => handleDownloadPDF(tabTitle, [], HYUNDAI_SURGERY_1_5_SECTIONS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (수술명, 분류표, 카테고리 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 세부분류표 Section Title Bar */}
          <div className="px-4 py-3 bg-slate-100/90 border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#123941]" />
              <h4 className="text-xs sm:text-sm font-black text-[#123941]">
                [하단 세부 분류표] (수술명 및 분류표)
              </h4>
            </div>
            {queryStr && (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                검색 결과: {filteredSections.length}개 그룹 매칭
              </span>
            )}
          </div>

          {/* 2-Column Grid for Hyundai 1-5종 수술비 Categories */}
          {filteredSections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredSections.map((sec, secIdx) => {
                const originalIndex = HYUNDAI_SURGERY_1_5_SECTIONS.findIndex((s) => s.category === sec.category);
                const isExpanded = !!queryStr || (expandedHyundaiSurgery1_5Sections[originalIndex] ?? false);
                const itemsToDisplay = sec.matchingItems;

                return (
                  <div
                    key={secIdx}
                    className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                      isExpanded
                        ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm'
                        : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                    }`}
                  >
                    <button
                      onClick={() => toggleHyundaiSurgery1_5Section(originalIndex)}
                      className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 pr-2 min-w-0">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                          #{originalIndex + 1}
                        </span>
                        <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                          {highlightText(sec.category)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-1">
                        <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                          {sec.items.length}개 항목
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                          <span>{isExpanded ? '접기' : '상세보기'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                          )}
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-3 bg-white space-y-2.5">
                        {sec.subTitle && (
                          <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 font-bold leading-relaxed">
                            {sec.subTitle}
                          </div>
                        )}

                        <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-slate-200 bg-[#123941]/5 text-[#123941] font-black text-[11px]">
                                <th className="py-2 px-3 text-center w-[15%] border-r border-slate-200">No.</th>
                                <th className="py-2 px-3 text-left w-[65%] border-r border-slate-200">수술명</th>
                                <th className="py-2 px-3 text-center w-[20%]">분류표</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {itemsToDisplay.map((item, itemIdx) => (
                                <tr key={itemIdx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                                  <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                                    {item.num}
                                  </td>
                                  <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                                    {highlightText(item.name)}
                                  </td>
                                  <td className="py-2 px-3 text-center font-mono font-bold">
                                    {item.type !== '-' ? (
                                      <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white font-extrabold rounded-md text-[11px]">
                                        {highlightText(item.type)}
                                      </span>
                                    ) : (
                                      <span className="text-slate-400 font-bold">-</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {sec.footnotes && sec.footnotes.length > 0 && (
                          <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 leading-relaxed space-y-1">
                            {sec.footnotes.map((fn, fnIdx) => (
                              <p key={fnIdx} className="font-medium">{fn}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      );
    }

    if (tabKey === 'hyundai_specific_cancer') {
      const queryStr = normalizeString(detailFilter);
      const filteredItems = HYUNDAI_SPECIFIC_CANCER_ITEMS.filter((item) => {
        if (!queryStr) return true;
        return (
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.code).includes(queryStr) ||
          normalizeString(item.num).includes(queryStr)
        );
      });

      const half = Math.ceil(filteredItems.length / 2);
      const leftItems = filteredItems.slice(0, half);
      const rightItems = filteredItems.slice(half);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Top Control Bar */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, [], HYUNDAI_SPECIFIC_CANCER_SECTIONS)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Header Info Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>[별표-질병관련] 특정암 분류표</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              ① 약관에서 규정하는 '특정암'으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우에는 개정된 기준에 따라 해당 여부를 판단합니다.
            </p>
          </div>

          {/* 하단 세부분류표 (2줄 / 2컬럼 레이아웃) */}
          <div className="space-y-3">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단 세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                총 {filteredItems.length}개 항목
              </span>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-start">
                {/* Left Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[15%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[60%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {leftItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-extrabold rounded border border-slate-200 text-[11px]">
                              {highlightText(item.code)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[15%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[60%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {rightItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className="py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80">
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-extrabold rounded border border-slate-200 text-[11px]">
                              {highlightText(item.code)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <p className="pl-2">
              ② 제10차 개정이후 한국표준질병사인분류에 있어서 상기 상병 또는 질병 해당 여부는 피보험자가 진단확정된 당시 시행하고 있는 한국표준질병사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              ③ 다만, 진단확정 당시의 한국표준질병사인분류에 따라 상기 상병 또는 질병에 대한 보험금 지급여부를 판단한 경우에는, 이후에 한국표준질병사인분류가 개정되더라도 상기 상병 또는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
            <p className="pl-2">
              ④ 진단서 상의 분류번호는 한국표준질병사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다)에 따라 기재된 것을 인정합니다.
            </p>
            <p className="pl-2">
              ⑤ 한국표준질병사인분류 지침서의 '사망 및 질병이환의 분류번호부여를 위한 선정준칙과 지침'에 따라 C77~C80(불명확한, 이차성 및 상세불명 부위의 악성신생물(암))의 경우 일차성 악성신생물(암)이 확인되는 경우에는 원발부위(최초 발생한 부위)를 기준으로 분류합니다.
            </p>
            <p className="pl-2">
              ⑥ 상기 외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'db_11_specific_cancer' || tabKey === 'hana_11_specific_cancer') {
      const isHana = tabKey === 'hana_11_specific_cancer';
      const itemsList = isHana ? HANA_11_SPECIFIC_CANCER_UNROLLED : DB_11_SPECIFIC_CANCER_UNROLLED;
      const sectionsList = isHana ? HANA_11_SPECIFIC_CANCER_SECTIONS : DB_11_SPECIFIC_CANCER_SECTIONS;
      const queryStr = normalizeString(detailFilter);
      const filteredItems = itemsList.filter((item) => {
        if (!queryStr) return true;
        return (
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.code).includes(queryStr) ||
          normalizeString(item.num).includes(queryStr)
        );
      });

      const half = isHana ? 15 : 24;
      const leftItems = queryStr ? filteredItems.slice(0, Math.ceil(filteredItems.length / 2)) : itemsList.slice(0, half);
      const rightItems = queryStr ? filteredItems.slice(Math.ceil(filteredItems.length / 2)) : itemsList.slice(half);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Top Control Bar */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{isHana ? '하나손해보험 - 【별표17】 11대특정암 분류표' : 'DB손해보험 - [별표24] 11대특정암 분류표'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF('11대특정암 분류표', [], sectionsList)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="11대특정암 내 검색 (질병명, KCD 질병코드 등)"
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Header Info Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{isHana ? '【별표17】 11대특정암 분류표' : '[별표24] 11대특정암 분류표'}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {isHana
                ? '약관에 규정하는 11대특정암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 11대특정암 해당 여부를 판단합니다.'
                : '약관에 규정하는 11대특정암으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 아래에 적은 질병을 말하며, 개별 질병명 및 KCD 질병코드가 하나씩 세부적으로 나열되어 있습니다.'
              }
            </p>
          </div>

          {/* 하단 세부분류표 (2줄 / 2컬럼 레이아웃) */}
          <div className="space-y-3">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단 세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                총 {filteredItems.length}개 항목 (2열 배치)
              </span>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-start">
                {/* Left Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {leftItems.map((item, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.isGroupHeader ? 'bg-slate-100/90 font-black' : item.isSub ? 'bg-white' : 'even:bg-slate-50/40'}`}>
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className={`py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80 ${item.isSub ? 'pl-6 text-slate-700 font-semibold' : ''}`}>
                            {item.isSub && <span className="text-slate-400 mr-1.5">-</span>}
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            {item.code ? (
                              <span className={`inline-block px-2 py-0.5 rounded border text-[11px] font-extrabold ${item.isGroupHeader ? 'bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-100 text-[#123941] border-slate-200'}`}>
                                {highlightText(item.code)}
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {rightItems.map((item, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.isGroupHeader ? 'bg-slate-100/90 font-black' : item.isSub ? 'bg-white' : 'even:bg-slate-50/40'}`}>
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className={`py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80 ${item.isSub ? 'pl-6 text-slate-700 font-semibold' : ''}`}>
                            {item.isSub && <span className="text-slate-400 mr-1.5">-</span>}
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            {item.code ? (
                              <span className={`inline-block px-2 py-0.5 rounded border text-[11px] font-extrabold ${item.isGroupHeader ? 'bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-100 text-[#123941] border-slate-200'}`}>
                                {highlightText(item.code)}
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            {isHana ? (
              <>
                <p className="pl-2">
                  1. 제10차 개정 이후 이 약관에서 보장하는 11대특정암 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
                </p>
                <p className="pl-2">
                  2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
                </p>
                <p className="pl-2">
                  3. 상기 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 상기 분류에 포함합니다.
                </p>
              </>
            ) : (
              <>
                <p className="pl-2">
                  1. 약관에 규정하는 11대특정암으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 위에 적은 질병을 말합니다.
                </p>
                <p className="pl-2">
                  2. 제8차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
                </p>
                <p className="pl-2">
                  3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
                </p>
                <p className="pl-2">
                  4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서에 따라 기재된 것을 인정합니다.
                </p>
              </>
            )}
          </div>
        </div>
      );
    }

    if (tabKey === 'db_high_cost_cancer' || tabKey === 'hana_high_cost_cancer') {
      const isHana = tabKey === 'hana_high_cost_cancer';
      const itemsList = isHana ? HANA_HIGH_COST_CANCER_UNROLLED : DB_HIGH_COST_CANCER_UNROLLED;
      const sectionsList = isHana ? HANA_HIGH_COST_CANCER_SECTIONS : DB_HIGH_COST_CANCER_SECTIONS;
      const queryStr = normalizeString(detailFilter);
      const filteredItems = itemsList.filter((item) => {
        if (!queryStr) return true;
        return (
          normalizeString(item.name).includes(queryStr) ||
          normalizeString(item.code).includes(queryStr) ||
          normalizeString(item.num).includes(queryStr)
        );
      });

      const half = Math.ceil(filteredItems.length / 2);
      const leftItems = queryStr ? filteredItems.slice(0, half) : itemsList.slice(0, 13);
      const rightItems = queryStr ? filteredItems.slice(half) : itemsList.slice(13);

      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Top Control Bar */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{isHana ? '하나손해보험 - 【별표16】 고액치료비암 분류표' : 'DB손해보험 - 【별표25】 고액치료비암 분류표'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF('고액치료비암 분류표', [], sectionsList)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="고액치료비암 내 검색 (질병명, KCD 질병코드 등)"
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Header Info Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>{isHana ? '【별표16】 고액치료비암 분류표' : '【별표25】 고액치료비암 분류표'}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              {isHana
                ? '약관에 규정하는 고액치료비암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 고액치료비암 해당 여부를 판단합니다.'
                : '약관에 규정하는 고액치료비암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청고시 제2025-299호, 2026. 1. 1 시행)중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우 개정된 기준에 따라 이 약관의 보장 대상 질병 해당 여부를 판단합니다.'
              }
            </p>
          </div>

          {/* 하단 세부분류표 (2열 배치) */}
          <div className="space-y-3">
            <div className="px-4 py-2.5 bg-[#123941] text-white font-black text-xs rounded-xl flex items-center justify-between shadow-xs">
              <span>하단 세부분류표</span>
              <span className="text-[11px] text-amber-300 font-bold">
                총 {filteredItems.length}개 항목 (2열 배치)
              </span>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-start">
                {/* Left Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {leftItems.map((item, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.isGroupHeader ? 'bg-slate-100/90 font-black' : item.isSub ? 'bg-white' : 'even:bg-slate-50/40'}`}>
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className={`py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80 ${item.isSub ? 'pl-6 text-slate-700 font-semibold' : ''}`}>
                            {item.isSub && <span className="text-slate-400 mr-1.5">-</span>}
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            {item.code ? (
                              <span className={`inline-block px-2 py-0.5 rounded border text-[11px] font-extrabold ${item.isGroupHeader ? 'bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-100 text-[#123941] border-slate-200'}`}>
                                {highlightText(item.code)}
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right Column Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-[#123941] font-black text-xs border-b border-slate-200">
                        <th className="py-2.5 px-3 w-[12%] text-center border-r border-slate-200">No.</th>
                        <th className="py-2.5 px-3 w-[63%] border-r border-slate-200">대상이 되는 질병</th>
                        <th className="py-2.5 px-3 w-[25%] text-center">분류번호</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      {rightItems.map((item, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.isGroupHeader ? 'bg-slate-100/90 font-black' : item.isSub ? 'bg-white' : 'even:bg-slate-50/40'}`}>
                          <td className="py-2 px-3 text-center font-bold text-slate-500 border-r border-slate-200/80 text-[11px]">
                            {item.num}
                          </td>
                          <td className={`py-2 px-3 font-bold text-slate-800 leading-snug border-r border-slate-200/80 ${item.isSub ? 'pl-6 text-slate-700 font-semibold' : ''}`}>
                            {item.isSub && <span className="text-slate-400 mr-1.5">-</span>}
                            {highlightText(item.name)}
                          </td>
                          <td className="py-2 px-3 text-center font-mono font-bold">
                            {item.code ? (
                              <span className={`inline-block px-2 py-0.5 rounded border text-[11px] font-extrabold ${item.isGroupHeader ? 'bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-100 text-[#123941] border-slate-200'}`}>
                                {highlightText(item.code)}
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 font-bold">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
            {isHana ? (
              <>
                <p className="pl-2">
                  1. 제10차 개정 이후 이 약관에서 보장하는 고액치료비암 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
                </p>
                <p className="pl-2">
                  2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
                </p>
                <p className="pl-2">
                  3. 상기 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 상기 분류에 포함합니다.
                </p>
              </>
            ) : (
              <>
                <p className="pl-2">
                  1. 제10차 개정 이후 이 약관의 대상질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
                </p>
                <p className="pl-2">
                  2. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
                </p>
                <p className="pl-2">
                  3. 대상질병 분류표의 분류번호와 다르나 한국표준질병·사인분류의 기준에 따라 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.
                </p>
                <p className="pl-2">
                  4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서를 따릅니다.
                </p>
              </>
            )}
          </div>
        </div>
      );
    }

    if (tabKey === 'samsung_major_cancer') {
      return (
        <div id="printable-terms-area" className="space-y-4">
          {/* Top Control Bar */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (질병명, KCD 분류번호 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Header Info Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm mb-1.5 flex items-center gap-1.5">
              <span>[별표-질병관련7] 10대 주요암 분류표</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 10대 주요암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026. 1. 1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 질병의 해당 여부를 판단합니다.
            </p>
          </div>

          {/* Single Unified Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#123941] text-white font-black text-xs">
                    <th className="py-3 px-4 border-r border-slate-700/80 w-[70%]">분류항목</th>
                    <th className="py-3 px-4 text-center w-[30%]">분류번호</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {SAMSUNG_MAJOR_CANCER_SECTIONS.map((item, idx) => {
                    const queryStr = normalizeString(detailFilter);
                    const matchesParent = !queryStr || normalizeString(`${item.num}. ${item.disease}`).includes(queryStr) || normalizeString(item.code).includes(queryStr);
                    
                    const filteredSubItems = item.subItems ? item.subItems.filter(sub => {
                      if (!queryStr) return true;
                      return normalizeString(sub.disease).includes(queryStr) || normalizeString(sub.code).includes(queryStr);
                    }) : [];

                    const showParent = matchesParent || filteredSubItems.length > 0;
                    if (!showParent) return null;

                    return (
                      <React.Fragment key={idx}>
                        {/* Main Category Row */}
                        <tr className="bg-slate-50/80 font-black text-slate-900 border-t border-slate-200">
                          <td className="py-2.5 px-4 text-xs text-[#123941] border-r border-slate-200/80">
                            {highlightText(`${item.num}. ${item.disease}`)}
                          </td>
                          <td className="py-2.5 px-4 text-center font-mono font-extrabold text-[#123941]">
                            <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white rounded-md text-[11px]">
                              {highlightText(item.code)}
                            </span>
                          </td>
                        </tr>
                        {/* Sub Items Rows */}
                        {item.subItems && (matchesParent ? item.subItems : filteredSubItems).map((sub, sIdx) => (
                          <tr key={sIdx} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-2 px-4 pl-8 text-[11px] font-semibold text-slate-700 border-r border-slate-200/80">
                              <span className="text-slate-400 mr-1.5">-</span>
                              {highlightText(sub.disease)}
                            </td>
                            <td className="py-2 px-4 text-center font-mono font-bold text-slate-700">
                              <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] border border-slate-200 rounded text-[11px]">
                                {highlightText(sub.code)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnotes Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
            <div className="font-extrabold text-[#123941]">주)</div>
            <p className="pl-2">
              1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.
            </p>
            <p className="pl-2">
              2. 제10차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
            </p>
            <p className="pl-2">
              3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
            </p>
          </div>
        </div>
      );
    }

    if (tabKey === 'samsung_111') {
      const queryStr = normalizeString(detailFilter);

      // 상단 요약 분류표 필터링
      const filteredSummarySections = SAMSUNG_111_SURGERY_SECTIONS.filter((sec) => {
        if (!queryStr) return true;
        const catMatch = normalizeString(sec.category).includes(queryStr);
        const diseaseMatch = sec.diseases.some(d => normalizeString(d).includes(queryStr));
        return catMatch || diseaseMatch;
      });

      // 하단 세부 분류표 필터링
      const filteredDetailSections = SAMSUNG_111_DISEASE_CODE_SECTIONS.map(cat => {
        const matchingSubsections = cat.subsections.map(sub => {
          const titleMatch = normalizeString(sub.title).includes(queryStr);
          const matchingItems = sub.items.filter(item =>
            titleMatch ||
            normalizeString(item.disease).includes(queryStr) ||
            normalizeString(item.code).includes(queryStr)
          );
          return {
            ...sub,
            matchingItems
          };
        }).filter(sub => sub.matchingItems.length > 0);

        return {
          ...cat,
          matchingSubsections
        };
      }).filter(cat => cat.matchingSubsections.length > 0);

      const tableTitleMap: Record<string, string> = {
        '5대주요기관질병': '[별표-질병관련39] 5대주요기관질병 분류표Ⅱ',
        '22대주요질병': '[별표-질병관련42] 22대주요질병 분류표',
        '3대주요질병': '[별표-질병관련43] 3대주요질병 분류표',
        '19대생활질병': '[별표-질병관련44] 19대생활질병 분류표',
        '62대생활질병': '[별표-질병관련45] 62대생활질병 분류표',
      };

      return (
        <div id="printable-terms-area" className="space-y-6">
          {/* 1. PDF 다운로드란 */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 2. 검색란 */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (질병명, 분류항목, KCD 코드 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 3. 상단요약분류표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3 flex items-center justify-between">
              <span>상단요약분류표</span>
            </div>

            <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              ⑦ 「111대질병」의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[25%] border-r border-slate-200">구분</th>
                    <th className="py-2.5 px-4 w-[75%]">해당 질병</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummarySections.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-800 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0">
                        {sec.category}
                      </td>
                      <td className="py-3 px-4 text-xs font-semibold text-slate-800 leading-relaxed">
                        {sec.diseases.map((d, dIdx) => (
                          <span key={dIdx}>
                            {highlightText(d)}
                            {dIdx < sec.diseases.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
              <div className="font-extrabold text-[#123941]">제5조 (수술의 정의와 장소)</div>
              <p className="text-[11px] text-slate-600 pl-2">
                ① 이 특별약관에서 「수술」이라 함은 병원 또는 의원의 의사의 면허를 가진 자(이하 「의사」라 합니다)에 의하여 「111대질병」으로 치료가 필요하다고 인정된 경우로서 자택 등에서의 치료가 곤란하여 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리 하에 「111대질병」의 직접적인 치료를 목적으로 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것을 말합니다.
              </p>
              <p className="text-[11px] text-slate-600 pl-2">
                ② 제1항의 수술은 보건복지부 산하 신의료기술평가위원회(향후 제도변경 시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 술기법으로 생체에 절단, 절제 등의 조작을 가하는 것을 포함합니다.
              </p>
            </div>
          </div>

          {/* 4. 하단세부분류표 */}
          <div className="space-y-4">
            <div className="text-sm font-black text-[#123941] flex items-center justify-between border-b-2 border-[#123941] pb-2">
              <span>하단세부분류표</span>
              <span className="text-xs font-normal text-slate-500">총 {filteredDetailSections.length}개 분류 (클릭하여 펼치기/접기)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {filteredDetailSections.map((sec, secIdx) => {
                const sectionTitle = tableTitleMap[sec.category] || `[세부분류표] ${sec.category}`;
                const isExpanded = !!queryStr || (expandedSamsung111Sections[secIdx.toString()] ?? false);
                const totalItemsCount = sec.matchingSubsections.reduce((acc, sub) => acc + sub.matchingItems.length, 0);

                return (
                  <div key={secIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all">
                    <button
                      type="button"
                      onClick={() => toggleSamsung111Section(secIdx.toString())}
                      className="w-full bg-[#123941] hover:bg-[#123941]/95 text-white font-black text-xs px-4 py-3 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="text-left font-bold pr-2">{sectionTitle}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-normal text-slate-200 bg-white/10 px-2 py-0.5 rounded-full">
                          {totalItemsCount}개 항목
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="space-y-0">
                        <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                          약관에 규정하는 {sec.category}으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026. 1. 1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 질병의 해당 여부를 판단합니다.
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                                <th className="py-2.5 px-3 w-[28%] border-r border-slate-200">구분</th>
                                <th className="py-2.5 px-3 w-[52%] border-r border-slate-200">분류항목</th>
                                <th className="py-2.5 px-3 w-[20%] text-center">분류번호</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-xs">
                              {sec.matchingSubsections.map((sub, subIdx) => {
                                const rowSpan = sub.matchingItems.length;
                                return sub.matchingItems.map((item, itemIdx) => (
                                  <tr key={`${subIdx}-${itemIdx}`} className="hover:bg-slate-50/60 transition-colors">
                                    {itemIdx === 0 && (
                                      <td
                                        rowSpan={rowSpan}
                                        className="py-2 px-3 font-black text-slate-800 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs"
                                      >
                                        {sub.title}
                                      </td>
                                    )}
                                    <td className="py-2 px-3 text-xs font-semibold text-slate-800 border-r border-slate-200/80">
                                      {highlightText(item.disease)}
                                    </td>
                                    <td className="py-2 px-3 text-center font-bold text-slate-900">
                                      <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-[#123941] rounded border border-slate-200/80 font-mono text-[11px]">
                                        {highlightText(item.code)}
                                      </span>
                                    </td>
                                  </tr>
                                ));
                              })}
                            </tbody>
                          </table>
                        </div>

                        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-1">
                          <div className="font-extrabold text-[#123941]">주)</div>
                          <p className="pl-2">
                            1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.
                          </p>
                          <p className="pl-2">
                            2. 제10차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
                          </p>
                          <p className="pl-2">
                            3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'samsung_15_disease') {
      const queryStr = normalizeString(detailFilter);

      // 상단 요약 분류표 필터링
      const filteredSummarySections = SAMSUNG_15_SURGERY_SECTIONS.filter((sec) => {
        if (!queryStr) return true;
        const catMatch = normalizeString(sec.category).includes(queryStr);
        const diseaseMatch = sec.diseases.some(d => normalizeString(d).includes(queryStr));
        return catMatch || diseaseMatch;
      });

      // 하단 세부 분류표 필터링 (15대 질병 그룹별 개별 분류)
      const allSubsections = SAMSUNG_15_DISEASE_CODE_SECTIONS.flatMap(cat => cat.subsections);
      const filteredGroups = allSubsections.map(sub => {
        const titleMatch = normalizeString(sub.title).includes(queryStr);
        const matchingItems = sub.items.filter(item =>
          titleMatch ||
          normalizeString(item.disease).includes(queryStr) ||
          normalizeString(item.code).includes(queryStr)
        );
        return {
          ...sub,
          matchingItems
        };
      }).filter(sub => sub.matchingItems.length > 0);

      return (
        <div id="printable-terms-area" className="space-y-6">
          {/* 1. PDF 다운로드란 */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 2. 검색란 */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (질병명, 분류항목, KCD 코드 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 3. 상단요약분류표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3 flex items-center justify-between">
              <span>상단요약분류표</span>
            </div>

            <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              ⑦ 「15대질병」의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[25%] border-r border-slate-200">구분</th>
                    <th className="py-2.5 px-4 w-[75%]">해당 질병</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummarySections.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-800 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0">
                        {sec.category}
                      </td>
                      <td className="py-3 px-4 text-xs font-semibold text-slate-800 leading-relaxed">
                        {sec.diseases.map((d, dIdx) => (
                          <span key={dIdx}>
                            {highlightText(d)}
                            {dIdx < sec.diseases.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
              <div className="font-extrabold text-[#123941]">제5조 (수술의 정의와 장소)</div>
              <p className="text-[11px] text-slate-600 pl-2">
                ① 이 특별약관에서 「수술」이라 함은 병원 또는 의원의 의사의 면허를 가진 자(이하 「의사」라 합니다)에 의하여 「15대질병」으로 치료가 필요하다고 인정된 경우로서 자택 등에서의 치료가 곤란하여 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리 하에 「15대질병」의 직접적인 치료를 목적으로 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것을 말합니다.
              </p>
              <p className="text-[11px] text-slate-600 pl-2">
                ② 제1항의 수술은 보건복지부 산하 신의료기술평가위원회(향후 제도변경 시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 술기법으로 생체에 절단, 절제 등의 조작을 가하는 것을 포함합니다.
              </p>
            </div>
          </div>

          {/* 4. 하단세부분류표 (그룹별 2단 그리드) */}
          <div className="space-y-4">
            <div className="text-sm font-black text-[#123941] flex items-center justify-between border-b-2 border-[#123941] pb-2">
              <span>하단세부분류표</span>
              <span className="text-xs font-normal text-slate-500">총 {filteredGroups.length}개 질병그룹 (클릭하여 펼치기/접기)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {filteredGroups.map((group) => {
                const isExpanded = !!queryStr || (expandedSamsung15Sections[group.title] ?? true);
                const itemsCount = group.matchingItems.length;

                return (
                  <div key={group.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all">
                    <button
                      type="button"
                      onClick={() => toggleSamsung15Section(group.title)}
                      className="w-full bg-[#123941] hover:bg-[#123941]/95 text-white font-black text-xs px-4 py-3 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="text-left font-bold pr-2">{group.title}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-normal text-slate-200 bg-white/10 px-2 py-0.5 rounded-full">
                          상세보기
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-3.5 space-y-3 bg-white">
                        <div className="overflow-x-auto border border-slate-200 rounded-xl">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200">
                                <th className="py-2.5 px-3 w-[70%] border-r border-slate-200">분류항목</th>
                                <th className="py-2.5 px-3 w-[30%] text-center">분류번호</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {group.matchingItems.map((item, itemIdx) => (
                                <tr key={itemIdx} className="hover:bg-slate-50/60 transition-colors">
                                  <td className="py-2 px-3 text-xs font-semibold text-slate-800 border-r border-slate-200/80">
                                    {highlightText(item.disease)}
                                  </td>
                                  <td className="py-2 px-3 text-center font-bold text-slate-900">
                                    <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-[#123941] rounded border border-slate-200/80 font-mono text-[11px]">
                                      {highlightText(item.code)}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed space-y-1">
              <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
              <p className="pl-2">
                1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.
              </p>
              <p className="pl-2">
                2. 제7차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
              </p>
              <p className="pl-2">
                3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (tabKey === 'samsung_15') {
      const queryStr = normalizeString(detailFilter);
      return (
        <div id="printable-terms-area" className="space-y-6">
          {/* Top Control Bar (PDF Download) */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (수술명, 구분 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Title Banner */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs">
            <div className="font-black text-[#123941] text-sm flex items-center gap-1.5">
              <span>{SAMSUNG_1_5_SURGERY_DATA.title}</span>
            </div>
          </div>

          {/* Section I */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3">
              {SAMSUNG_1_5_SURGERY_DATA.section1.title}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[25%] border-r border-slate-200">구분</th>
                    <th className="py-2.5 px-4 w-[60%] border-r border-slate-200">수술명</th>
                    <th className="py-2.5 px-4 w-[15%] text-center">수술종류</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {SAMSUNG_1_5_SURGERY_DATA.section1.categories.map((cat, catIdx) => {
                    const matchingItems = cat.items.filter((item) => {
                      if (!queryStr) return true;
                      const itemMatch = normalizeString(`${item.num}. ${item.name}`).includes(queryStr) || normalizeString(cat.category).includes(queryStr);
                      const subMatch = item.subItems?.some(s => normalizeString(`${s.num}. ${s.name}`).includes(queryStr));
                      return itemMatch || subMatch;
                    });

                    if (queryStr && matchingItems.length === 0) return null;

                    const itemsToRender = queryStr ? matchingItems : cat.items;

                    return itemsToRender.map((item, itemIdx) => {
                      const isFirstInCat = itemIdx === 0;
                      const catRowCount = itemsToRender.reduce((acc, curr) => acc + 1 + (curr.subItems ? curr.subItems.length : 0), 0);

                      return (
                        <React.Fragment key={`${catIdx}-${itemIdx}`}>
                          <tr className="hover:bg-slate-50/60 transition-colors">
                            {isFirstInCat && (
                              <td
                                rowSpan={catRowCount}
                                className="py-3 px-4 font-black text-slate-800 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs leading-relaxed"
                              >
                                <div>{cat.category}</div>
                                {cat.subnote && (
                                  <div className="mt-1 text-[10px] text-slate-500 font-normal leading-normal">{cat.subnote}</div>
                                )}
                              </td>
                            )}
                            <td className="py-2.5 px-4 text-xs font-semibold text-slate-800 border-r border-slate-200/80">
                              {highlightText(`${item.num}. ${item.name}`)}
                            </td>
                            <td className="py-2.5 px-4 text-center font-bold text-slate-900">
                              {item.grade ? (
                                <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white rounded-md text-[11px] font-extrabold">
                                  {item.grade}종
                                </span>
                              ) : '-'}
                            </td>
                          </tr>
                          {item.subItems && item.subItems.map((sub, sIdx) => (
                            <tr key={sIdx} className="hover:bg-slate-50/60 transition-colors bg-slate-50/30">
                              <td className="py-2 px-4 pl-8 text-[11px] font-medium text-slate-700 border-r border-slate-200/80">
                                <span className="text-slate-400 mr-1.5">-</span>
                                {highlightText(`${sub.num}. ${sub.name}`)}
                              </td>
                              <td className="py-2 px-4 text-center font-bold text-slate-800">
                                <span className="inline-block px-2 py-0.5 bg-slate-200 text-[#123941] rounded text-[11px] font-bold">
                                  {sub.grade}종
                                </span>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
            {/* Section 1 Notes */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-1">
              <div className="font-extrabold text-[#123941]">주)</div>
              {SAMSUNG_1_5_SURGERY_DATA.section1.notes.map((note, idx) => (
                <p key={idx} className="pl-2">{note}</p>
              ))}
            </div>
          </div>

          {/* Section II */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3">
              {SAMSUNG_1_5_SURGERY_DATA.section2.title}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[85%] border-r border-slate-200">수술명</th>
                    <th className="py-2.5 px-4 w-[15%] text-center">수술종류</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {SAMSUNG_1_5_SURGERY_DATA.section2.items.map((item, idx) => {
                    const matchItem = !queryStr || normalizeString(`${item.num}. ${item.name}`).includes(queryStr) || item.subItems?.some(s => normalizeString(`${s.num}. ${s.name}`).includes(queryStr));
                    if (!matchItem) return null;

                    return (
                      <React.Fragment key={idx}>
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-2.5 px-4 font-semibold text-slate-800 border-r border-slate-200/80">
                            {highlightText(`${item.num}. ${item.name}`)}
                          </td>
                          <td className="py-2.5 px-4 text-center font-bold text-slate-900">
                            <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white rounded-md text-[11px] font-extrabold">
                              {item.grade}종
                            </span>
                          </td>
                        </tr>
                        {item.subItems && item.subItems.map((sub, sIdx) => (
                          <tr key={sIdx} className="hover:bg-slate-50/60 transition-colors bg-slate-50/30">
                            <td className="py-2 px-4 pl-8 text-[11px] font-medium text-slate-700 border-r border-slate-200/80">
                              <span className="text-slate-400 mr-1.5">-</span>
                              {highlightText(`${sub.num}. ${sub.name}`)}
                            </td>
                            <td className="py-2 px-4 text-center font-bold text-slate-800">
                              <span className="inline-block px-2 py-0.5 bg-slate-200 text-[#123941] rounded text-[11px] font-bold">
                                {sub.grade}종
                              </span>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Section II Notes */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-1">
              <div className="font-extrabold text-[#123941]">주)</div>
              {SAMSUNG_1_5_SURGERY_DATA.section2.notes.map((note, idx) => (
                <p key={idx} className="pl-2 whitespace-pre-wrap">{note}</p>
              ))}
            </div>
          </div>

          {/* Section III */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3">
              {SAMSUNG_1_5_SURGERY_DATA.section3.title}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[85%] border-r border-slate-200">수술명</th>
                    <th className="py-2.5 px-4 w-[15%] text-center">수술종류</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {SAMSUNG_1_5_SURGERY_DATA.section3.items.map((item, idx) => {
                    const matchItem = !queryStr || normalizeString(`${item.num}. ${item.name}`).includes(queryStr);
                    if (!matchItem) return null;

                    return (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-2.5 px-4 font-semibold text-slate-800 border-r border-slate-200/80">
                          {highlightText(`${item.num}. ${item.name}`)}
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-slate-900">
                          <span className="inline-block px-2.5 py-0.5 bg-[#123941] text-white rounded-md text-[11px] font-extrabold">
                            {item.grade}종
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Section III Notes */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-1">
              {SAMSUNG_1_5_SURGERY_DATA.section3.notes.map((note, idx) => (
                <p key={idx} className="pl-2">{note}</p>
              ))}
            </div>
          </div>

          {/* Section IV: Guidelines */}
          <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2.5 shadow-3xs">
            <div className="font-black text-[#123941] text-sm">
              {SAMSUNG_1_5_SURGERY_DATA.guidelines.title}
            </div>
            {SAMSUNG_1_5_SURGERY_DATA.guidelines.rules.map((rule, idx) => (
              <p key={idx} className="text-[11px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                {rule}
              </p>
            ))}
          </div>
        </div>
      );
    }

    if (tabKey === 'samsung_21') {
      const queryStr = normalizeString(detailFilter);

      // 상단 요약 분류표 필터링
      const filteredSummarySections = SAMSUNG_21_SURGERY_SECTIONS.filter((sec) => {
        if (!queryStr) return true;
        const catMatch = normalizeString(sec.category).includes(queryStr);
        const diseaseMatch = sec.diseases.some(d => normalizeString(d).includes(queryStr));
        return catMatch || diseaseMatch;
      });

      // 하단 세부 분류표 필터링 (21대 생활질병 그룹별)
      const allSubsections = SAMSUNG_21_DISEASE_CODE_SECTIONS.flatMap(cat => cat.subsections);
      const filteredGroups = allSubsections.map(sub => {
        const titleMatch = normalizeString(sub.title).includes(queryStr);
        const matchingItems = sub.items.filter(item =>
          titleMatch ||
          normalizeString(item.disease).includes(queryStr) ||
          normalizeString(item.code).includes(queryStr)
        );
        return {
          ...sub,
          matchingItems
        };
      }).filter(sub => sub.matchingItems.length > 0);

      return (
        <div id="printable-terms-area" className="space-y-6">
          {/* 1. PDF 다운로드란 */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
              <span>{tabTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                PDF 다운로드
              </button>
            </div>
          </div>

          {/* 2. 검색란 */}
          <div className="no-print relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`${tabTitle} 내 검색 (질병명, 분류항목, KCD 코드 등)`}
              value={detailFilter}
              onChange={(e) => setDetailFilter(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
            />
            {detailFilter && (
              <button
                onClick={() => setDetailFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* 3. 상단요약분류표 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="bg-[#123941] text-white font-black text-xs px-4 py-3 flex items-center justify-between">
              <span>상단요약분류표</span>
            </div>

            <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              ⑦ 「21대질병」(약관에 규정하는 21대생활질병)의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[25%] border-r border-slate-200">구분</th>
                    <th className="py-2.5 px-4 w-[75%]">해당 질병</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummarySections.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-800 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0">
                        {sec.category}
                      </td>
                      <td className="py-3 px-4 text-xs font-semibold text-slate-800 leading-relaxed">
                        {sec.diseases.map((d, dIdx) => (
                          <span key={dIdx}>
                            {highlightText(d)}
                            {dIdx < sec.diseases.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
              <div className="font-extrabold text-[#123941]">제5조 (수술의 정의와 장소)</div>
              <p className="text-[11px] text-slate-600 pl-2">
                ① 이 특별약관에서 「수술」이라 함은 병원 또는 의원의 의사의 면허를 가진 자(이하 「의사」라 합니다)에 의하여 「21대질병」으로 치료가 필요하다고 인정된 경우로서 자택 등에서의 치료가 곤란하여 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리 하에 「21대질병」의 직접적인 치료를 목적으로 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것을 말합니다.
              </p>
              <p className="text-[11px] text-slate-600 pl-2">
                ② 제1항의 수술은 보건복지부 산하 신의료기술평가위원회(향후 제도변경 시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 술기법으로 생체에 절단, 절제 등의 조작을 가하는 것을 포함합니다.
              </p>
            </div>
          </div>

          {/* 4. 하단세부분류표 (그룹별 2단 그리드) */}
          <div className="space-y-4">
            <div className="text-sm font-black text-[#123941] flex items-center justify-between border-b-2 border-[#123941] pb-2">
              <span>하단세부분류표</span>
              <span className="text-xs font-normal text-slate-500">총 {filteredGroups.length}개 질병그룹 (클릭하여 펼치기/접기)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {filteredGroups.map((group) => {
                const isExpanded = !!queryStr || (expandedSamsung21Sections[group.title] ?? true);

                return (
                  <div key={group.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all">
                    <button
                      type="button"
                      onClick={() => toggleSamsung21Section(group.title)}
                      className="w-full bg-[#123941] hover:bg-[#123941]/95 text-white font-black text-xs px-4 py-3 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="text-left font-bold pr-2">{group.title}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-normal text-slate-200 bg-white/10 px-2 py-0.5 rounded-full">
                          상세보기
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-3.5 space-y-3 bg-white">
                        <div className="overflow-x-auto border border-slate-200 rounded-xl">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200">
                                <th className="py-2.5 px-3 w-[70%] border-r border-slate-200">분류항목</th>
                                <th className="py-2.5 px-3 w-[30%] text-center">분류번호</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {group.matchingItems.map((item, itemIdx) => (
                                <tr key={itemIdx} className="hover:bg-slate-50/60 transition-colors">
                                  <td className="py-2 px-3 text-xs font-semibold text-slate-800 border-r border-slate-200/80">
                                    {highlightText(item.disease)}
                                  </td>
                                  <td className="py-2 px-3 text-center font-bold text-slate-900">
                                    <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-[#123941] rounded border border-slate-200/80 font-mono text-[11px]">
                                      {highlightText(item.code)}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed space-y-1">
              <div className="font-extrabold text-[#123941]">주) 약관 적용기준</div>
              <p className="pl-2">
                1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.
              </p>
              <p className="pl-2">
                2. 제7차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.
              </p>
              <p className="pl-2">
                3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      );
    }

    const filteredSummaries = summaries.filter((sec: any) => {
      if (!query) return true;
      const titleMatch = normalizeString(sec.title || sec.category || '').includes(query);
      const diseasesStr = typeof sec.diseases === 'string' ? sec.diseases : '';
      const itemMatch = (sec.items || []).some((i: any) =>
        normalizeString(i.disease || i.name || '').includes(query) ||
        normalizeString(i.code || '').includes(query)
      ) || normalizeString(diseasesStr).includes(query);
      return titleMatch || itemMatch;
    });

    return (
      <div id="printable-terms-area" className="space-y-5">
        {/* Top Control Bar */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200/80">
          <div className="px-3 py-1 text-xs font-black text-[#123941] shrink-0 flex items-center gap-2">
            <span> {tabTitle} ({allSections.length}개 카테고리)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const allExpanded: Record<number, boolean> = {};
                filteredSections.forEach((_, idx) => { allExpanded[idx] = true; });
                setExpandedState(allExpanded);
              }}
              className="px-2.5 py-1.5 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-3xs"
            >
              전체 펼치기
            </button>
            <button
              onClick={() => setExpandedState({})}
              className="px-2.5 py-1.5 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-3xs"
            >
              전체 접기
            </button>
            <button
              onClick={() => handleDownloadPDF(tabTitle, summaries, allSections)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-black text-white bg-[#123941] hover:bg-[#123941]/90 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              PDF 다운로드
            </button>
          </div>
        </div>

        {/* 1. Search Bar */}
        <div className="no-print relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={`${tabTitle} 내 검색 (질병명, 수술명, KCD 분류번호 등)`}
            value={detailFilter}
            onChange={(e) => setDetailFilter(e.target.value)}
            className="w-full pl-10 pr-16 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] transition-colors bg-white text-slate-900 font-bold shadow-3xs"
          />
          {detailFilter && (
            <button
              onClick={() => setDetailFilter('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
            >
              지우기
            </button>
          )}
        </div>

        {tabKey === 'hana_integrated_cancer' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 【별표26】 통합암(유사암제외) 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 통합암(유사암제외)으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 통합암(유사암제외)의 해당 여부를 판단합니다.
            </p>
          </div>
        )}

        {tabKey === 'hana_surgery1_5' && (
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs space-y-2">
            <div className="font-black text-[#123941] text-xs flex items-center gap-1.5">
              <span>📌 【별표78】 1~5종수술III 분류표 및 사용 지침 안내</span>
            </div>
            <div className="text-[11px] text-slate-600 leading-relaxed space-y-1.5 pt-1">
              <p><strong>1. "수술"의 정의:</strong> 의사, 치과의사 또는 한의사의 자격을 가진 자가 피보험자의 질병 또는 상해 치료를 직접목적으로 의료기관에서 의사의 관리하에 기구를 사용하여 생체에 절단(切斷), 적제(摘除) 등의 조작을 가하는 것(보건복지부 산하 신의료기술평가위원회로부터 안전성과 치료효과를 인정받은 최신 수술기법 포함 / 흡인, 천자, 적제 등의 조치 및 신경 BLOCK 제외).</p>
              <p><strong>2. 관혈(觀血) 수술:</strong> 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변부위를 노출시켜서 수술하는 것.</p>
              <p><strong>3. 근본(根本) 혹은 근치(根治) 수술:</strong> 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술.</p>
              <p><strong>4. 내시경/카테터 수술 적용:</strong> 1~87항의 수술 중 내시경 수술 또는 카테터 등에 의한 경피적 수술은 88항을 적용 (단, 복강경·흉강경에 의한 수술은 해당 부위 1~87항 수술로 적용).</p>
              <p><strong>5. 60일 이내 수술:</strong> 특정 수술(Mammotomy, 경질적 수술, 망막박리, 레이저, 냉동응고, 중이내 튜브유치술, ESWL, 내시경/경피적 수술 등)은 개시일부터 60일 이내 2회 이상 시 1회로 간주 지급.</p>
              <div className="pt-1 text-[10px] text-slate-500 border-t border-slate-200/60">
                <p>※ 보장 제외: 미용 성형상의 수술, 피임 목적의 수술, 피임 및 불임술 후 가임목적의 수술, 검사 및 진단을 위한 수술(생검, 복강경 검사 등)</p>
              </div>
            </div>
          </div>
        )}

        {tabKey === 'nh_cancer' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 통합암 Ⅱ(유사암제외) 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 통합암 Ⅱ(유사암제외)으로 분류되는 질병은 제9차 개정 한국표준질병사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.
            </p>
            <div className="text-[10px] text-slate-500 font-medium space-y-0.5 pt-1 border-t border-slate-200/60">
              <p>2. 제10차 개정 이후 대상 질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다. 또한, 대상 질병 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.</p>
              <p>3. 진단 당시의 한국표준질병·사인분류에 따라 대상 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 대상 질병 해당 여부를 다시 판단하지 않습니다.</p>
              <p>4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다.)에 기재된 것을 인정합니다.</p>
            </div>
          </div>
        )}

        {tabKey === 'nh_cancer_metastasis' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 통합암(전이포함) Ⅱ(유사암제외) 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 통합암(전이포함)Ⅱ(유사암제외)으로 분류되는 질병은 제9차 개정 한국표준질병사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.
            </p>
            <div className="text-[10px] text-slate-500 font-medium space-y-0.5 pt-1 border-t border-slate-200/60">
              <p>2. 제10차 개정 이후 대상 질병 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다. 또한, 대상 질병 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.</p>
              <p>3. 진단 당시의 한국표준질병·사인분류에 따라 대상 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 대상 질병 해당 여부를 다시 판단하지 않습니다.</p>
              <p>4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다.)에 기재된 것을 인정합니다.</p>
            </div>
          </div>
        )}

        {tabKey === 'nh_5specific_cancer' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 특정5대암 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 특정5대암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.
            </p>
            <div className="text-[10px] text-slate-500 font-medium space-y-0.5 pt-1 border-t border-slate-200/60">
              <p>2. 제10차 개정 이후 대상 질병 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다. 또한, 대상 질병 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.</p>
              <p>3. 진단 당시의 한국표준질병·사인분류에 따라 대상 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 대상 질병 해당 여부를 다시 판단하지 않습니다.</p>
              <p>4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다.)에 기재된 것을 인정합니다.</p>
            </div>
          </div>
        )}

        {tabKey === 'nh_circulatory_1_5' && (
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] text-xs flex items-center gap-1.5">
              <span>📌 【별표49】 특정순환계질환(1~5종)분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 특정순환계질환(1~5종)으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.
            </p>
          </div>
        )}

        {tabKey === 'lotte_surgery16' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 【별표25】 16대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 16대질병으로 분류되는 질병은 제5차 개정 한국표준질병·사인분류(통계청 고시 제2007-4호, 2008.1.1 시행) 중 다음에 적은 질병을 말합니다.
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              ※ 주) 제6차 개정이후 한국표준질병·사인분류에 있어서 상기 질병이외에 추가로 상기분류표에 해당하는 질병이 있는 경우에는 그 질병도 포함하는 것으로 합니다.
            </p>
          </div>
        )}
        {tabKey === 'lotte_surgery20' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 〈별표30〉 20대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 20대질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 다음에 적은 질병을 말합니다. 단, 아래 질병 이외에 출생전후기에 발생한 주요병태로 분류되는 질병(P코드)은 포함하지 않습니다.
            </p>
            <div className="text-[10px] text-slate-500 font-medium space-y-0.5">
              <p>※ 주) 1. 당뇨병 질환(E10~E14)에는 눈, 신장 등의 합병증을 동반한 당뇨병이 포함되어 있습니다 (자세한 내용은 '한국표준질병·사인분류'를 참고).</p>
              <p>2. 제8차 개정 이후 한국표준질병·사인분류에 있어서 상기 질병 이외에 추가로 상기 분류번호에 해당하는 질병이 있는 경우에는 그 질병도 포함하는 것으로 합니다.</p>
            </div>
          </div>
        )}
        {tabKey === 'lotte_surgery64' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 &lt;별표41&gt; 64대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 64대질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 20대특정질병, 갑상선질환, 4대특정질병, 39대특정질병 수술비보장에 해당되는 질병을 말합니다. 단, 출생전후기에 발생한 주요병태로 분류되는 질병(P코드)은 포함하지 않습니다.
            </p>
          </div>
        )}
        {tabKey === 'lotte_surgery142' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 142대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 142대질병으로 분류되는 질병은 제8차 개정 한국표준질병·사인분류(통계청고시 제2020-175호, 2021.1.1. 시행) 중 3대질병, 8대질병, 34대질병, 68대질병, 29대특정질병 수술비보장에 해당되는 질병을 말합니다. 단, 출생전후기에 발생한 주요병태로 분류되는 질병(P코드)은 포함하지 않습니다.
            </p>
          </div>
        )}
        {tabKey === 'lotte_surgery34' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 &lt;별표29&gt; 34대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 34대질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 다음에 적은 질병을 말합니다. 단, 아래 질병 이외에 출생전후기에 발생한 주요병태로 분류되는 질병(P코드)은 포함하지 않습니다.
            </p>
          </div>
        )}
        {(tabKey === 'meritz_5diseases' || tabKey === 'meritz_5diseases_surgery') && (
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-800 leading-relaxed font-medium shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] text-xs flex items-center gap-1.5">
              <span>📌 5대질환 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              1. 약관에 규정하는 5대질환으로 분류되는 질병은 제9차 한국표준질병사인분류(통계청 고시 제2025-299호, 2026. 1. 1. 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병사인분류가 개정되는 경우에는 개정된 기준에 따라 이 약관에서 보상하는 대상질병 해당여부를 판단합니다. 다만, 다음의 질병 이외의 출생전후기 질병(P00-P96)은 포함되지 않습니다.
            </p>
          </div>
        )}

        {tabKey === 'hanwha_34diseases' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 【별표35】 34대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 34대질병으로 분류되는 질병은 제6차 개정 한국표준질병·사인분류(통계청 고시 제2010-246호, 2011.1.1 시행) 중 다음에 적은 질병을 말합니다. 단, 아래의 질병의 제6차 개정 한국표준질병·사인분류 코드 중 출생전후기에 기원한 특정 병태(P코드)는 포함되지 않습니다.
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              ※ 주) 제7차 개정이후 한국표준질병·사인분류에 있어서 상기분류표에 변경사항이 발생하는 경우에는 변경된 분류표에 따라 보상합니다.
            </p>
          </div>
        )}

        {tabKey === 'hanwha_16diseases' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs space-y-1.5">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 【별표36】 16대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 16대질병으로 분류되는 질병은 제6차 개정 한국표준질병·사인분류(통계청 고시 제2010-246호, 2011.1.1 시행) 중 다음에 적은 질병을 말합니다. 단, 아래의 질병의 제6차 개정 한국표준질병·사인분류 코드 중 출생전후기에 기원한 특정 병태(P코드)는 포함되지 않습니다.
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              ※ 주) 제7차 개정이후 한국표준질병·사인분류에 있어서 상기분류표에 변경사항이 발생하는 경우에는 변경된 분류표에 따라 보상합니다.
            </p>
          </div>
        )}

        {tabKey === 'surgery1_5_old' && (() => {
          const coverageRows = [
            { num: '11-1', text: '▶ MRI 검사 (급여) (연간 1회 한)' },
            { num: '11-2', text: '▶ PET 검사 (급여) (연간 1회 한)' },
            { num: '11-3', text: '▶ CT 검사 (급여) (연간 1회 한)' },
            { num: '11-4', text: '▶ 1-5종 수술비 (급여) (동일질병당 1회 지급)' },
            { num: '11-5', text: '▶ 전신마취수술 (6시간 이상) (급여) (종합병원) (연간 1회 한)' },
          ];

          const matchedCoverageRows = coverageRows.filter(r =>
            !query || normalizeString(r.num).includes(query) || normalizeString(r.text).includes(query)
          );

          const row1SearchText = normalizeString("1 유방절단수술 세분화 유방절단수술 Mastectomy 3종 3-1. 유방의 비대(N62) 2종 3-2. 그 외 유방절단수술 3종 기존: 모두 3종 변경 후: 유방의 비대(N62)는 2종으로 하향 그 외 유방절단수술은 3종 (기존과 동일)");
          const row2SearchText = normalizeString("2 주석(예외사항) 변경 44번(치루·치열·치핵), 48번(요실금수술) 관련 주석 질병1~5종수술비 Ⅱ 담보에만 적용 상해1~5종수술비 Ⅱ 담보에서는 보상하지 않음 남성의 요실금수술은 보상하지 않음 (삭제) 질병수술비 담보에만 적용 (삭제) 상해수술비 담보에서는 보상하지 않음 남성의 요실금수술은 보상하지 않음 유지 기존 담보 제한 문구 일부 삭제 남성의 요실금수술 면책 조항은 유지");

          const showRow1 = !query || row1SearchText.includes(query);
          const showRow2 = !query || row2SearchText.includes(query);
          const showComparisonTable = showRow1 || showRow2;

          return (
            <div className="space-y-4">
              {/* 1. 보장내용 요약표 */}
              {matchedCoverageRows.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
                    <span className="text-xs font-black text-white">📋 보장내용 요약표 - 11 | (건강고지)질병통합치료비(실속형)(세부보장별) 특별약관</span>
                    <span className="text-[11px] font-bold text-amber-300">DB손해보험 세부보장({matchedCoverageRows.length}개 항목)</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
                    이 특별약관은 다음의 세부보장으로 구성되어 있습니다.
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200">
                          <th className="py-2.5 px-3 text-center w-[15%] border-r border-slate-200">번호</th>
                          <th className="py-2.5 px-4 w-[85%]">보장 조건 및 지급 한도</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs font-medium text-slate-800">
                        {matchedCoverageRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2.5 px-3 text-center font-bold text-slate-500 bg-slate-50/70 border-r border-slate-200">
                              {highlightText(row.num)}
                            </td>
                            <td className="py-2.5 px-4 font-bold text-emerald-800">
                              {highlightText(row.text)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 2. 기존1-5종(25.1월) VS 질병통합치료비(26.7) 개정내용 비교 */}
              {showComparisonTable && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
                    <span className="text-xs font-black text-white">🔄 기존1-5종(25.1월) VS 질병통합치료비(26.7) 개정내용 비교</span>
                    <span className="text-[11px] font-bold text-amber-300">약관 세부 개정 핵심</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200">
                          <th className="py-2.5 px-4 w-[18%] border-r border-slate-200">구분 / 변경 항목</th>
                          <th className="py-2.5 px-4 w-[31%] border-r border-slate-200 text-slate-700">기존 (별표78 - 25.1월)</th>
                          <th className="py-2.5 px-4 w-[31%] border-r border-slate-200 text-[#123941]">변경 (별표160 - 26.7월)</th>
                          <th className="py-2.5 px-4 w-[20%] text-rose-700">변경 핵심</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs">
                        {/* 1. 유방절단수술 세분화 */}
                        {showRow1 && (
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 px-4 font-black text-slate-900 bg-slate-50/70 border-r border-slate-200 align-top">
                              <div className="flex items-center gap-1.5 text-xs text-slate-900 font-black">
                                <span className="bg-blue-600 text-white rounded-full w-4 h-4 inline-flex items-center justify-center text-[10px]">1</span>
                                {highlightText('유방절단수술 세분화')}
                              </div>
                              <span className="text-[11px] text-rose-600 font-bold block mt-1">(가장 큰 변경)</span>
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-700 border-r border-slate-200 align-top leading-relaxed">
                              <div className="text-slate-500 text-[11px] mb-1">{highlightText('유방절단수술 (Mastectomy)')}</div>
                              <div className="inline-block bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md font-black text-xs">
                                {highlightText('3종')}
                              </div>
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-800 border-r border-slate-200 align-top leading-relaxed space-y-1.5">
                              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                                <span>{highlightText('3-1. 유방의 비대(N62)')}</span>
                                <span className="bg-rose-600 text-white px-2 py-0.5 rounded-md font-black text-xs">{highlightText('2종')}</span>
                              </div>
                              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                                <span>{highlightText('3-2. 그 외 유방절단수술')}</span>
                                <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md font-black text-xs">{highlightText('3종')}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-800 align-top leading-relaxed bg-rose-50/30">
                              <ul className="space-y-1 text-[11px]">
                                <li className="font-black text-rose-700">• {highlightText('기존: 모두 3종')}</li>
                                <li className="font-bold text-slate-800">
                                  • {highlightText('변경 후:')}<br/>
                                  - {highlightText('유방의 비대(N62)는')} <span className="text-rose-600 font-black">{highlightText('2종으로 하향')}</span><br/>
                                  - {highlightText('그 외 유방절단수술은')} <span className="font-black">{highlightText('3종 (기존과 동일)')}</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        )}

                        {/* 2. 주석(예외사항) 변경 */}
                        {showRow2 && (
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 px-4 font-black text-slate-900 bg-slate-50/70 border-r border-slate-200 align-top">
                              <div className="flex items-center gap-1.5 text-xs text-slate-900 font-black">
                                <span className="bg-blue-600 text-white rounded-full w-4 h-4 inline-flex items-center justify-center text-[10px]">2</span>
                                {highlightText('주석(예외사항) 변경')}
                              </div>
                              <span className="text-[11px] text-slate-500 font-bold block mt-1">(44번·48번 관련)</span>
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-700 border-r border-slate-200 align-top leading-relaxed text-[11px] space-y-1">
                              <div className="font-bold text-slate-900">{highlightText('44번(치루·치열·치핵), 48번(요실금수술) 관련 주석')}</div>
                              <div className="text-slate-600">• {highlightText('질병1~5종수술비 Ⅱ 담보에만 적용')}</div>
                              <div className="text-slate-600">• {highlightText('상해1~5종수술비 Ⅱ 담보에서는 보상하지 않음')}</div>
                              <div className="text-slate-600">• {highlightText('남성의 요실금수술은 보상하지 않음')}</div>
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-800 border-r border-slate-200 align-top leading-relaxed text-[11px] space-y-1">
                              <div className="font-bold text-slate-900">{highlightText('44번(치루·치열·치핵), 48번(요실금수술) 관련 주석')}</div>
                              <div className="text-rose-600 font-bold line-through">• {highlightText('(삭제) 질병수술비 담보에만 적용')}</div>
                              <div className="text-rose-600 font-bold line-through">• {highlightText('(삭제) 상해수술비 담보에서는 보상하지 않음')}</div>
                              <div className="text-emerald-700 font-bold">• {highlightText('남성의 요실금수술은 보상하지 않음')} <span className="bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded text-[10px] font-black">{highlightText('유지')}</span></div>
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-800 align-top leading-relaxed bg-amber-50/30">
                              <ul className="space-y-1 text-[11px]">
                                <li className="font-black text-amber-800">• {highlightText('기존 담보 제한 문구 일부 삭제')}</li>
                                <li className="font-bold text-slate-800">• {highlightText('남성의 요실금수술 면책 조항은')} <span className="text-emerald-700 font-black">{highlightText('유지')}</span></li>
                              </ul>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* 하단 요약 바 */}
                  <div className="p-3 bg-amber-50/80 border-t border-slate-200 text-xs font-bold text-amber-900 space-y-1">
                    <div>▶ <strong>유방절단수술:</strong> {highlightText("기존에는 모두 3종이었으나, 변경 후 N62(유방의 비대)는 2종으로 하향, 그 외는 3종 유지")}</div>
                    <div>▶ <strong>주석 변경:</strong> {highlightText("기존의 '담보 제한 문구'는 삭제되고, '남성의 요실금수술은 보상하지 않음' 조항만 유지")}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* 2. Top Summary Classification Table */}
        {tabKey !== 'surgery1_5' && tabKey !== 'surgery1_5_old' && tabKey !== 'kb_surgery1_5' && tabKey !== 'lotte_surgery1_5' && tabKey !== 'meritz_surgery1_5' && tabKey !== 'hanwha_surgery1_5' && tabKey !== 'hanwha_women_life_1_5' && tabKey !== 'hanwha_women_major_life_1_5' && tabKey !== 'nh_surgery1_5' && tabKey !== 'hana_surgery1_5' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
            <div className="px-4 py-3 bg-[#123941] text-white font-black text-xs flex items-center justify-between">
              <span className="text-xs font-black text-white">상단요약분류표</span>
              <span className="text-[11px] font-medium text-slate-200">
                총 {summaries.length}개 주요 항목
              </span>
            </div>

            <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              ⑦ 「{(tabTitle.replace(/현대해상\s*-?\s*|약관|분류표|수술비/g, '').trim()) || '대상질병'}」의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-black text-xs border-b border-slate-200">
                    <th className="py-2.5 px-4 w-[25%] sm:w-[200px] border-r border-slate-200 text-left font-black">구분</th>
                    <th className="py-2.5 px-4 text-left font-black">해당 질병</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {filteredSummaries.map((sec: any, idx: number) => {
                    let categoryLabel = sec.category;
                    if (!categoryLabel) {
                      if (sec.group && sec.title && sec.group !== sec.title) {
                        categoryLabel = `${sec.group} (${sec.title})`;
                      } else {
                        categoryLabel = sec.group || sec.title || `그룹 ${idx + 1}`;
                      }
                    }
                    let diseasesList: string[] = [];

                    if (Array.isArray(sec.diseases)) {
                      diseasesList = sec.diseases;
                    } else if (typeof sec.diseases === 'string') {
                      diseasesList = sec.diseases.split(',').map((s: string) => s.trim()).filter(Boolean);
                    } else if (Array.isArray(sec.items)) {
                      diseasesList = sec.items.map((i: any) => i.disease || i.name || '').filter(Boolean);
                    } else if (sec.title && sec.group && sec.title !== sec.group) {
                      diseasesList = [sec.title];
                    } else if (sec.title) {
                      diseasesList = [sec.title];
                    } else {
                      diseasesList = [categoryLabel];
                    }

                    return (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3 px-4 font-black text-slate-900 bg-slate-50/70 border-r border-slate-200/90 align-top text-xs shrink-0 whitespace-nowrap">
                          {highlightText(categoryLabel)}
                        </td>
                        <td className="py-3 px-4 text-xs font-bold text-slate-800 leading-relaxed whitespace-pre-wrap">
                          {diseasesList.length > 0 ? (
                            diseasesList.map((d: string, dIdx: number) => (
                              <span key={dIdx}>
                                {highlightText(d)}
                                {dIdx < diseasesList.length - 1 ? ', ' : ''}
                              </span>
                            ))
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. Bottom Detailed Classification Table */}
        <div className="space-y-3 pt-2">
          <div className="px-4 py-3 bg-[#123941]/5 border border-[#123941]/10 rounded-2xl flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#123941]"></span>
              <h4 className="text-xs font-black text-[#123941]">
                [하단 세부 분류표] (세부 질병명 및 KCD 분류번호)
              </h4>
            </div>
            {detailFilter && (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                검색 결과: {filteredSections.length}개 카테고리 매칭
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredSections.map((sec, idx) => {
              const isTitleMatch = !query || normalizeString(sec.title || sec.category || '').includes(query);
              const rawItemList = sec.items || sec.diseases || [];
              const itemList = query
                ? rawItemList.filter((i: any) => {
                    if (isTitleMatch) return true;
                    if (typeof i === 'string') return normalizeString(i).includes(query);
                    const isDirectMatch = (
                      normalizeString(i.disease || i.name || '').includes(query) ||
                      normalizeString(i.code || '').includes(query) ||
                      normalizeString(i.num || '').includes(query)
                    );
                    if (isDirectMatch) return true;
                    if (i.subItems && Array.isArray(i.subItems)) {
                      return i.subItems.some((s: any) =>
                        typeof s === 'string'
                          ? normalizeString(s).includes(query)
                          : (
                            normalizeString(s.disease || s.name || '').includes(query) ||
                            normalizeString(s.code || '').includes(query)
                          )
                      );
                    }
                    return false;
                  })
                : rawItemList;

              if (query && itemList.length === 0) return null;

              const isExpanded = !!query || (expandedState[idx] ?? false);

              let groupBadge = sec.group || sec.grade || '';
              let displayTitle = sec.title || sec.category || '구분';

              if (!groupBadge && displayTitle.startsWith('[')) {
                const match = displayTitle.match(/^\[(.*?)\]\s*(.*)$/);
                if (match) {
                  groupBadge = match[1];
                  displayTitle = match[2];
                }
              }

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm'
                      : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFunc(idx)}
                    className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 pr-2 min-w-0">
                      {groupBadge ? (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                          {groupBadge}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[11px] font-extrabold shrink-0">
                          #{idx + 1}
                        </span>
                      )}
                      <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                        {highlightText(displayTitle)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-1">
                      <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                        {itemList.length}개
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                        <span>{isExpanded ? '접기' : '상세보기'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-3 bg-white space-y-2.5">
                      {sec.definition && (
                        <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 font-medium leading-relaxed">
                          {sec.definition}
                        </div>
                      )}
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 bg-[#123941]/5 text-[#123941] font-black text-[11px]">
                            <th className="py-2 px-3 text-left w-[70%]">
                              {(tabKey === 'surgery1_5' || tabKey === 'surgery1_5_old' || tabKey === 'kb_surgery1_5' || tabKey === 'lotte_surgery1_5' || tabKey === 'meritz_surgery1_5' || tabKey === 'hanwha_surgery1_5' || tabKey === 'hanwha_women_life_1_5' || tabKey === 'hanwha_women_major_life_1_5' || tabKey === 'nh_surgery1_5' || tabKey === 'hana_surgery1_5') ? '수술명 / 보장대상 수술' : '질병명 / 보장대상 분류'}
                            </th>
                            <th className="py-2 px-3 text-center w-[30%]">
                              {(tabKey === 'surgery1_5' || tabKey === 'surgery1_5_old' || tabKey === 'kb_surgery1_5' || tabKey === 'lotte_surgery1_5' || tabKey === 'meritz_surgery1_5' || tabKey === 'hanwha_surgery1_5' || tabKey === 'hanwha_women_life_1_5' || tabKey === 'hanwha_women_major_life_1_5' || tabKey === 'nh_surgery1_5' || tabKey === 'hana_surgery1_5') ? '수술종류' : 'KCD 질병코드'}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {itemList.map((item: any, itemIdx: number) => {
                            const isObj = typeof item === 'object' && item !== null;
                            const diseaseName = isObj ? (item.disease || item.name) : item;
                            const diseaseCode = isObj ? (item.code || '-') : '-';
                            const itemNum = isObj ? item.num : null;
                            const hasAgeSplit = isObj && item.codeUnder49 && item.codeOver50 && item.codeUnder49 !== item.codeOver50;
                            const subList = isObj && Array.isArray(item.subItems) ? item.subItems : [];
                            return (
                              <React.Fragment key={itemIdx}>
                                <tr className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                                  <td className="py-2 px-3 font-bold text-slate-800 leading-snug whitespace-pre-wrap">
                                    {itemNum && (
                                      <span className="inline-block px-1.5 py-0.5 mr-1.5 bg-slate-200/80 text-[#123941] font-mono font-extrabold rounded text-[10px]">
                                        {highlightText(itemNum)}
                                      </span>
                                    )}
                                    {highlightText(diseaseName)}
                                  </td>
                                  <td className="py-2 px-3 text-center font-mono font-bold">
                                    {hasAgeSplit ? (
                                      <div className="flex items-center justify-center gap-1.5 flex-wrap">
                                        <span className="inline-flex items-center px-2 py-0.5 bg-rose-50 text-rose-700 font-extrabold rounded border border-rose-200 text-[11px]">
                                          49세이전: {highlightText(item.codeUnder49)}
                                        </span>
                                        <span className="inline-flex items-center px-2 py-0.5 bg-indigo-50 text-indigo-700 font-extrabold rounded border border-indigo-200 text-[11px]">
                                          50세이후: {highlightText(item.codeOver50)}
                                        </span>
                                      </div>
                                    ) : diseaseCode !== '-' ? (
                                      <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-extrabold rounded border border-slate-200 text-[11px]">
                                        {highlightText(diseaseCode)}
                                      </span>
                                    ) : (
                                      <span className="text-slate-400">-</span>
                                    )}
                                  </td>
                                </tr>
                                {subList.map((sub: any, sIdx: number) => {
                                  const subName = typeof sub === 'object' && sub !== null ? (sub.disease || sub.name) : sub;
                                  const subCode = typeof sub === 'object' && sub !== null ? (sub.code || '-') : '-';
                                  return (
                                    <tr key={`${itemIdx}-sub-${sIdx}`} className="hover:bg-slate-50/70 transition-colors bg-slate-50/30">
                                      <td className="py-1.5 px-3 pl-8 text-[11px] font-semibold text-slate-700 leading-snug">
                                        <span className="text-slate-400 mr-1.5">-</span>
                                        {highlightText(subName)}
                                      </td>
                                      <td className="py-1.5 px-3 text-center font-mono font-bold">
                                        {subCode !== '-' ? (
                                          <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-extrabold rounded border border-slate-200 text-[10px]">
                                            {highlightText(subCode)}
                                          </span>
                                        ) : (
                                          <span className="text-slate-400">-</span>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </React.Fragment>
                            );
                          })}
                        </tbody>
                      </table>
                      {sec.notes && Array.isArray(sec.notes) && sec.notes.length > 0 && (
                        <div className="p-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 font-medium leading-relaxed space-y-1">
                          {sec.notes.map((note: string, nIdx: number) => (
                            <div key={nIdx} className="flex items-start gap-1.5">
                              <span className="font-bold text-[#123941]">주)</span>
                              <span>{note}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {(tabKey === 'meritz_5diseases' || tabKey === 'meritz_5diseases_surgery') && (
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-700 leading-relaxed space-y-2 shadow-3xs">
              <div className="font-extrabold text-[#123941] text-xs">주) 5대질환 약관 적용 유의사항</div>
              <p className="pl-2">
                • 대상질병 분류표의 분류번호와 다르나 제9차 한국표준질병사인분류의 기준에 따라 분류번호를 동시에 부여가 가능한 경우 대상질병 분류에 포함합니다.
              </p>
              <p className="pl-2">
                • 제10차 개정 이후 약관에서 보상하는 대상질병 해당여부는 진단 당시 시행되고 있는 한국표준질병사인분류에 따라 판단합니다.
              </p>
              <p className="pl-2">
                • 진단서 상의 분류번호는 진단 당시 시행되고 있는 한국표준질병사인분류 질병코딩지침서에 따라 기재된 것을 인정합니다.
              </p>
              <p className="pl-2">
                • 2. 진단 당시의 한국표준질병사인분류에 따라 약관에서 보상하는 질병에 대한 보험금 지급여부가 판단된 경우, 이후 한국표준질병사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보상하는 질병 해당여부를 다시 판단하지 않습니다.
              </p>
            </div>
          )}

          {tabKey === 'nh_circulatory_1_5' && (
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
              <div className="font-extrabold text-[#123941] text-xs">주) 약관 적용기준</div>
              <p className="pl-2">
                2. 제10차 개정 이후 대상 질병 해당여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다. 또한, 대상 질병 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.
              </p>
              <p className="pl-2">
                3. 진단 당시의 한국표준질병·사인분류에 따라 대상 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 대상 질병 해당 여부를 다시 판단하지 않습니다.
              </p>
              <p className="pl-2">
                4. 진단서 상의 분류번호는 한국표준질병·사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다.)에 기재된 것을 인정합니다.
              </p>
              <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
                무배당 NH5.10.5굿플러스건강보험2604(1~2종)약관 별표
              </div>
            </div>
          )}

          {tabKey === 'nh_surgery16' && (
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
              <div className="font-extrabold text-[#123941] text-xs">📌 【별표11】 16대질병 분류표 적용 안내</div>
              <p className="pl-2">
                약관에서 규정하는 16대질병으로 분류되는 질병은 제6차 개정 한국표준질병·사인분류(KCD : 통계청 고시 제2010-246호, 2011.1.1 시행)중 다음에 적은 질병을 말합니다.
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주) 제7차 개정 이후 한국표준질병·사인분류에 있어서 상기분류표에 변경사항이 발생하는 경우에는 변경된 분류표에 따라 보상합니다.
              </p>
              <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
                무배당 헤아림어린이보험1501 특별약관
              </div>
            </div>
          )}

          {tabKey === 'nh_surgery34' && (
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
              <div className="font-extrabold text-[#123941] text-xs">📌 【별표】 34대질병 분류표 적용 안내</div>
              <p className="pl-2">
                약관에서 규정하는 34대질병으로 분류되는 질병은 제7차 개정 한국표준질병사인분류(통계청 고시 제2015-309호, 2016.1.1 시행)중 다음에 적은 질병을 말합니다.
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주1) 당뇨병(E10~E14)에는 눈, 신장 등의 합병증을 동반한 당뇨병이 포함되어 있음(자세한 내용은 「한국표준질병사인분류」를 참고)
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주2) 제8차 개정 이후 한국표준질병·사인분류에 있어서 상기 질병 이외에 추가로 상기 분류번호에 해당하는 질병이 있는 경우에는 그 질병도 포함하는 것으로 합니다. 또한, 상기 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.
              </p>
              <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
                무배당 NH가성비굿건강보험1904 특별약관
              </div>
            </div>
          )}

          {tabKey === 'nh_surgery71' && (
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-[11px] text-slate-600 leading-relaxed space-y-1.5 shadow-3xs">
              <div className="font-extrabold text-[#123941] text-xs">📌 【별표】 71대질병 분류표 적용 안내</div>
              <p className="pl-2">
                약관에서 규정하는 71대질병으로 분류되는 질병은 제7차 개정 한국표준질병사인분류(통계청 고시 제2015-309호, 2016.1.1 시행) 중 다음에 적은 질병을 말합니다.
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주1) 당뇨병(E10~E14)에는 눈, 신장 등의 합병증을 동반한 당뇨병이 포함되어 있음(자세한 내용은 「한국표준질병사인분류」를 참고)
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주2) 백내장(H25, H26, H28) 및 녹내장(H40, H42)에는 합병증을 동반한 백내장 및 녹내장이 포함되어 있음(자세한 내용은 「한국표준질병사인분류」를 참고)
              </p>
              <p className="pl-2 text-slate-500 font-medium">
                ※ 주3) 제8차 개정 이후 한국표준질병·사인분류에 있어서 상기 질병 이외에 추가로 상기 분류번호에 해당하는 질병이 있는 경우에는 그 질병도 포함하는 것으로 합니다. 또한, 상기 분류표의 분류번호와 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 그 질병도 포함합니다.
              </p>
              <div className="pt-2 text-[10px] text-slate-400 font-medium text-right border-t border-slate-200/60">
                무배당 NH가성비굿건강보험1904 특별약관
              </div>
            </div>
          )}

          {/* 3-1. 1-5종 수술비(동일질병당/질병통합치료비) 사용 지침 및 요실금/KB/메리츠/한화/농협 수술 지침 안내 */}
          {(tabKey === 'surgery1_5' || tabKey === 'surgery1_5_old' || tabKey === 'kb_surgery1_5' || tabKey === 'lotte_surgery1_5' || tabKey === 'meritz_surgery1_5' || tabKey === 'hanwha_surgery1_5' || tabKey === 'hanwha_women_life_1_5' || tabKey === 'hanwha_women_major_life_1_5' || tabKey === 'nh_surgery1_5' || tabKey === 'hana_surgery1_5') && (
            <div className="space-y-4 pt-4 border-t border-slate-200">
              {tabKey === 'hanwha_women_major_life_1_5' ? (
                <>
                  {/* Hanwha Women Major Life 1-5 Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【여성생애주요1-5종수술 분류표 주기 및 적용 기준】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 내시경·경피적 수술 적용 기준:</strong> 상기 1~11항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술은 해당되지 않습니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~11항)의 수술로 적용합니다.
                    </p>
                  </div>

                  {/* Hanwha Women Major Life Guidelines Box */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【여성생애주요1-5종수술 분류표 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2.5 text-slate-300">
                      {HANWHA_WOMEN_MAJOR_LIFE_1_5_GUIDELINES.map((guide, gIdx) => (
                        <p key={gIdx}>
                          <strong>{guide.num}. {guide.title}:</strong> {guide.content}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              ) : tabKey === 'hanwha_women_life_1_5' ? (
                <>
                  {/* Hanwha Women Life 1-5 Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【여성생애1-5종수술 분류표 주기 및 적용 기준】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 연령별 수술종류(종) 차등 적용:</strong> 피부이식 및 피판수술, 유방수술, 척추·골반·추간판, 근·건·인대·연골, 자궁·난소·난관, 질탈, 척수종양 및 척수경막내외 수술 등은 49세 이전과 50세 이후 수술 시 보험나이에 따라 수술종류(종)를 차등 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주2) 내시경·경피적 수술 적용 기준:</strong> 상기 1~88호의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술은 89호를 적용합니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~88호)의 수술로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주3) 특정 수술 보장 범위:</strong> 상기 44호(치루, 탈항, 치핵 근본수술), 48호(요실금수술(급여)), 55호(제왕절개만출술) 수술은 질병1-5종수술비IV(수술1회당) 보장만 적용되며, 상해및질병통합치료비 등 특정 연간한도/입원일수식 특약 보장에는 보상하지 않습니다. 또한 48호(요실금수술(급여))는 피보험자가 남성인 경우 보상하지 않습니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주4) 악성신생물 치료 목적의 수술:</strong>
                      <br />• 제자리암·경계성종양에 대한 수술은 「1. 피부, 유방의 수술」 ~ 「11. 상기 이외의 수술」 항목의 적용을 받습니다.
                      <br />• 카테터(Catheter)를 이용한 흡인·천자·약물주입요법은 포함하지 않습니다.
                      <br />• 비고형암에 대한 비관혈적 근치수술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다. (조혈모세포이식술은 일련의 과정을 모두 포함하여 1회의 수술로 인정하며, 약물투여 목적의 중심정맥삽관술 등은 5종 제외)
                    </p>
                  </div>

                  {/* Hanwha Women Life Guidelines Box */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【여성생애1-5종수술 분류표 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2.5 text-slate-300">
                      {HANWHA_WOMEN_LIFE_1_5_GUIDELINES.map((guide, gIdx) => (
                        <p key={gIdx}>
                          <strong>{guide.num}. {guide.title}:</strong> {guide.content}
                        </p>
                      ))}
                    </div>

                    {/* Incontinence Code Tables */}
                    <div className="mt-4 pt-3 border-t border-slate-800 space-y-4">
                      <div>
                        <h5 className="font-bold text-amber-300 text-xs mb-2">● 요실금수술(급여) 대상 진료행위 및 수가코드</h5>
                        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700 font-bold">
                                <th className="py-2 px-3 text-center w-24">수가코드</th>
                                <th className="py-2 px-3">한글 수술명</th>
                                <th className="py-2 px-3">영문 수술명</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/80 text-slate-300">
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3562</td>
                                <td className="py-2 px-3">요실금수술 - 개복에 의한 수술</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Open Surgery</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3564</td>
                                <td className="py-2 px-3">요실금수술 - 질강을 통한 수술 - 자가근막을 이용한 경우 (근막채취료 포함)</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Transvaginal with Autologous Fascia</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3565</td>
                                <td className="py-2 px-3">요실금수술 - 질강을 통한 수술 - 기타의 경우</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Transvaginal Other</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-amber-300 text-xs mb-2">● 요실금수술(급여) 대상 질병 분류표</h5>
                        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700 font-bold">
                                <th className="py-2 px-3">대상질병명</th>
                                <th className="py-2 px-3 text-center w-36">한국표준질병사인분류</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/80 text-slate-300">
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">스트레스요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">N39.3</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">기타 명시된 요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">N39.4</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">상세불명의 요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R32</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : tabKey === 'hanwha_surgery1_5' ? (
                <>
                  {/* Hanwha Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【1~5종수술 분류표 주기 및 적용 기준】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 내시경·경피적 수술 적용 기준:</strong> 상기 1~88호의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술은 89호를 적용합니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~88호)의 수술로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주2) 특정 수술 보장 범위:</strong> 상기 44호(치루, 탈항, 치핵 근본수술), 48호(요실금수술(급여)), 55호(제왕절개만출술) 수술은 질병1-5종수술비IV(수술1회당) 보장만 적용되며, 상해및질병통합치료비 등 특정 연간한도/입원일수식 특약 보장에는 보상하지 않습니다. 또한 48호(요실금수술(급여))는 피보험자가 남성인 경우 보상하지 않습니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주3) 악성신생물 치료 목적의 수술:</strong>
                      <br />• 제자리암·경계성종양에 대한 수술은 「Ⅰ. 일반적인 상해 및 질병치료 목적의 수술」 항목의 적용을 받습니다.
                      <br />• 카테터(Catheter)를 이용한 흡인·천자·약물주입요법은 포함하지 않습니다.
                      <br />• 비고형암에 대한 비관혈적 근치수술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다. (조혈모세포이식술은 일련의 과정을 모두 포함하여 1회의 수술로 인정하며, 약물투여 목적의 중심정맥삽관술 등은 5종 제외)
                    </p>
                  </div>

                  {/* Hanwha Guidelines Box */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【1~5종수술 분류표 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2.5 text-slate-300">
                      <p>
                        1. 「수술」이라 함은 의사, 치과의사의 자격을 가진 자가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 의료법 제3조(의료기관)에 규정한 국내의 병원이나 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리하에 「1~5종수술 분류표」에서 정한 행위를 받는 것을 말합니다. '수술'은 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라 내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것(보건복지부 산하 신의료기술평가위원회[향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관]로부터 안전성과 치료효과를 인정받은 최신 수술기법도 포함됩니다)을 말합니다. 다만, 흡인(吸引), 천자(穿刺) 등의 조치 및 신경차단(神經遮斷, Nerve Block)은 '수술'에서 제외합니다.
                      </p>
                      <p>
                        2. 「관혈(觀血)」수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변부위를 노출시켜서 수술하는 것을 말합니다.
                      </p>
                      <p>
                        3. 「근본(根本)」 혹은 「근치(根治)」수술이라 함은 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다.
                      </p>
                      <p>
                        4. 「관혈적 악성신생물 근치수술」이라 함은 관혈적 방법을 통해 악성신생물의 원발 병소를 완전히 절제, 적제, 적출하고 혹은 곽청술을 함께 실시한 경우입니다.
                      </p>
                      <p>
                        5. 「1~5종수술 분류표」 상에 명시되지 않은 선진의료적 첨단 수술에 대한 인정 및 적용 기준
                        <br /><span className="pl-3 inline-block">• '1~5종수술 분류표'에서의 선진의료적 첨단 수술은 상기 '수술'의 정의에 해당하여야 하고 약물투여치료, 방사선조사치료 또는 기타의 보존적 치료로 분류될 수 없는 경우이어야 합니다.</span>
                        <br /><span className="pl-3 inline-block">• 1) '1~5종수술 분류표' 상의 수술 이외에 보건복지부 산하 신의료기술평가위원회(향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법으로 치료한 경우 '1~5종수술 분류표' 상의 동일부위 수술로 봅니다. 이 때 해당 최신수술기법은 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.</span>
                        <br /><span className="pl-3 inline-block">• 2) 단, 이 선진의료적 첨단 수술이 본질적으로 내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적 수술인 경우에는 '1~5종수술 분류표' 상 「Ⅰ. 일반적인 상해 및 질병치료 목적의 수술」 89호(악성신생물의 경우는 「악성신생물 치료목적의 수술」 2항)을 우선 적용합니다.</span>
                      </p>
                      <p>
                        6. 「악성 신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료」라 함은 선형가속기(LINAC)에서 발생되는 가는 방사선(Pencil beam)들을 다양한 각도에서 악성 신생물을 향해 집중적으로 조사하면서 동시에 악성신생물의 움직임을 병변 추적 장치를 이용하여 실시간으로 추적하면서 치료하는 방법입니다.
                      </p>
                      <p>
                        7. 「두개내 신생물 근치 감마나이프(Gammaknife) 정위적 방사선 치료」라 함은 정위 좌표계를 이용하여 코발트 60 방사성 동위원소(Co-60)에서 나오는 감마선을 두개강 내의 신생물을 향해 집중 조사함으로써 두개(頭蓋)를 열지 않고도 수술적 제거와 같은 효과를 내는 치료를 말합니다.
                      </p>
                      <p>
                        8. 다음과 같은 수술은 수술급여금 지급대상에서 보장을 제외합니다.
                        <br /><span className="pl-3 inline-block">1) 흡인(吸引, 주사기 등으로 빨아들이는 것)</span>
                        <br /><span className="pl-3 inline-block">2) 천자(穿刺, 바늘 또는 관을 꽂아 체액·조직을 뽑아내거나 약물을 주입하는 것) 등의 조치</span>
                        <br /><span className="pl-3 inline-block">3) 신경(神經)차단(NERVE BLOCK)</span>
                        <br /><span className="pl-3 inline-block">4) 미용성형 목적의 수술</span>
                        <br /><span className="pl-3 inline-block">5) 피임(避妊)목적의 수술 및 검사, 피임(避妊) 및 불임술 후 가임목적의 수술</span>
                        <br /><span className="pl-3 inline-block">6) 검사 및 진단을 위한 수술(생검(生檢), 복강경검사(腹腔鏡檢査) 등)</span>
                        <br /><span className="pl-3 inline-block">7) 기타 「1~5종수술 분류표」에 해당하지 않는 시술</span>
                      </p>
                    </div>

                    {/* Incontinence Code Tables */}
                    <div className="mt-4 pt-3 border-t border-slate-800 space-y-4">
                      <div>
                        <h5 className="font-bold text-amber-300 text-xs mb-2">● 요실금수술(급여) 대상 진료행위 및 수가코드</h5>
                        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700 font-bold">
                                <th className="py-2 px-3 text-center w-24">수가코드</th>
                                <th className="py-2 px-3">한글 수술명</th>
                                <th className="py-2 px-3">영문 수술명</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/80 text-slate-300">
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3562</td>
                                <td className="py-2 px-3">요실금수술 - 개복에 의한 수술</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Open Surgery</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3564</td>
                                <td className="py-2 px-3">요실금수술 - 질강을 통한 수술 - 자가근막을 이용한 경우 (근막채취료 포함)</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Transvaginal with Autologous Fascia</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R3565</td>
                                <td className="py-2 px-3">요실금수술 - 질강을 통한 수술 - 기타의 경우</td>
                                <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Transvaginal Other</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-amber-300 text-xs mb-2">● 요실금수술(급여) 대상 질병 분류표</h5>
                        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700 font-bold">
                                <th className="py-2 px-3">대상질병명</th>
                                <th className="py-2 px-3 text-center w-36">한국표준질병사인분류</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/80 text-slate-300">
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">스트레스요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">N39.3</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">기타 명시된 요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">N39.4</td>
                              </tr>
                              <tr className="hover:bg-slate-900">
                                <td className="py-2 px-3">상세불명의 요실금</td>
                                <td className="py-2 px-3 text-center font-bold text-amber-400">R32</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : tabKey === 'meritz_surgery1_5' ? (
                <>
                  {/* Meritz Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【1-5종 수술분류표II 주요 주기 및 적용 기준】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 근골(筋骨)의 수술:</strong> 근골(筋骨)의 수술에서 발정술(拔釘術) 등 내고정물 제거술은 제외하며, 치(齒) · 치은(잇몸) · 치근(치아뿌리)(齒根) · 치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것도 제외합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주2) 내시경·경피적 수술:</strong> 상기 1~87항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적(經皮的, Percutaneous) 수술은 88항을 적용합니다. 다만, 복강경 · 흉강경에 의한 수술은 해당부위(1~87항)의 수술로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주3) 악성신생물 치료 목적의 수술:</strong>
                      <br />• 제자리암 · 경계성종양에 대한 수술은 「I . 일반 질병 및 상해 치료목적의 수술」 항목의 적용을 받습니다.
                      <br />• 카테터(Catheter)를 이용한 흡인 · 천자 · 약물주입요법은 포함하지 않습니다.
                      <br />• 비고형암에 대한 비관혈적 근치술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다. (조혈모세포이식술은 일련의 과정을 모두 포함하여 1회의 수술로 인정하며, 약물 투여 목적의 중심정맥삽관술 등은 5종 제외)
                      <br />• 복강경 · 흉강경에 의한 수술은 위의 '1.' 또는 '3'으로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주4) 방사선 조사 분류표:</strong> 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.
                    </p>
                  </div>

                  {/* Meritz Guidelines Box (KB Style) */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【1-5종 수술분류표II 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2.5 text-slate-300">
                      <p>
                        1. 「수술」이라 함은 의사, 치과의사 또는 한의사의 면허를 가진 자가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 의료법 제3조(의료기관)에서 정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리하에 「1-5종 수술분류표II」에 정한 행위[기구를 사용하여 생체에 절단(切斷), 적제(摘除) 등의 조작을 가하는 것(보건복지부 산하 신의료기술평가위원회【향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관】로부터 안전성과 치료효과를 인정받은 최신 수술기법도 포함됩니다.)을 말하며 흡인(吸引), 천자(穿刺), 적제(滴劑) 등의 조치 및 신경 BLOCK은 제외]를 하는 것을 말합니다.
                      </p>
                      <p>
                        2. 「관혈(觀血)」수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변부위를 노출시켜서 수술하는 것을 말합니다.
                      </p>
                      <p>
                        3. 「근본(根本)」혹은 「근치(根治)」수술이라 함은 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다.
                      </p>
                      <p>
                        4. 「관혈적 악성신생물 근치수술」이라 함은 관혈적 방법을 통해 악성신생물의 원발 병소를 완전히 절제, 적제, 적출하고 혹은 곽청술을 함께 실시한 경우입니다.
                      </p>
                      <p>
                        5. 「1-5종 수술분류표II」상에 열거되지 않은 선진의료적 첨단 수술에 대한 인정 및 적용 기준
                        <br /><span className="pl-3 inline-block">• 「1-5종 수술분류표II」에서의 선진의료적 첨단 수술은 상기 「수술」의 정의에 해당하여야 하고 약물투여치료, 방사선조사치료 또는 기타의 보존적 치료로 분류될 수 없는 경우이어야 합니다.</span>
                        <br /><span className="pl-3 inline-block">• 1) 「1-5종 수술분류표II」상의 수술 이외에 보건복지부 산하 신의료기술평가위원회로부터 안전성과 치료효과를 인정받은 최신 수술기법으로 치료한 경우 「1-5종 수술분류표II」상의 동일 부위 수술로 봅니다. 이 때에 해당 최신수술기법은 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.</span>
                        <br /><span className="pl-3 inline-block">• 2) 단, 이 선진의료적 첨단 수술이 본질적으로 내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적 수술인 경우에는 「1-5종 수술분류표II」중 「일반질병 및 상해치료 목적의 수술」 88항 (악성신생물의 경우는 「악성신생물 치료목적의 수술」 2항)을 우선 적용합니다.</span>
                      </p>
                      <p>
                        6. 「악성 신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료」라 함은 선형가속기(LINAC)에서 발생되는 가는 방사선(Pencil beam)들을 다양한 각도에서 악성 신생물을 향해 집중적으로 조사하면서 동시에 악성신생물의 움직임을 병변 추적 장치를 이용하여 실시간으로 추적하면서 치료하는 방법입니다.
                      </p>
                      <p>
                        7. 「두개내 신생물 근치 감마나이프 (Gammaknife)정위적 방사선 치료」라 함은 정위 좌표계를 이용하여 코발트 60 방사성 동위원소 (Co-60) 에서 나오는 감마선을 두개강 내의 신생물을 향해 집중 조사함으로 두개(頭蓋)를 열지 않고도 수술적 제거와 같은 효과를 내는 치료를 말합니다.
                      </p>
                      <p>
                        8. 다음과 같은 수술은 수술급여금 지급대상에서 보장을 제외합니다.
                        <br /><span className="pl-3 inline-block">1) 흡인(吸引, 주사기 등으로 빨아들이는 것)</span>
                        <br /><span className="pl-3 inline-block">2) 천자(穿刺, 바늘 또는 관을 꽂아 체액·조직을 뽑아내거나 약물을 주입하는 것) 등의 조치</span>
                        <br /><span className="pl-3 inline-block">3) 신경(神經)차단(NERVE BLOCK)</span>
                        <br /><span className="pl-3 inline-block">4) 미용성형 목적의 수술</span>
                        <br /><span className="pl-3 inline-block">5) 피임(避妊)목적의 수술 및 검사, 피임(避妊) 및 불임술 후 가임목적의 수술</span>
                        <br /><span className="pl-3 inline-block">6) 검사 및 진단을 위한 수술(생검(生檢), 복강경검사(腹腔鏡檢査) 등)</span>
                        <br /><span className="pl-3 inline-block">7) 기타 「1-5종 수술분류표II」에 해당하지 않는 시술</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : tabKey === 'nh_surgery1_5' ? (
                <>
                  {/* NH Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【내시경·경피적 수술 적용 기준 및 악성신생물 수술 주) 사항】
                    </h5>
                    <p className="pl-2.5">
                      <strong>(주) 1. 내시경·경피적 수술 적용 기준:</strong> 상기 1 ~ 85항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적(經皮的, Percutaneous) 수술은 86항을 적용합니다. 다만, 복강경·흉강경에 의한 수술은 해당부위 (1 ~ 85항)의 수술로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>(주) 2. 유방절단술 예외 적용:</strong> 상기 3항의 수술 중 남성의 '유방의 장애(N60~N64)' 진단으로 시행한 '유방절단술(Mastectomy)-피하절제[남성의 여성형 유방절제 포함](Subcutaneous)' 수술의 경우 4항을 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>(주) 악성신생물 치료 목적의 수술 주) 사항:</strong>
                      <br /><span className="pl-2 inline-block">1. 제자리암·경계성종양에 대한 수술은 'Ⅰ. 일반 질병 및 상해치료 목적의 수술' 항목의 적용을 받습니다.</span>
                      <br /><span className="pl-2 inline-block">2. 카테터(Catheter)를 이용한 흡인·천자·약물주입요법은 포함하지 않습니다.</span>
                      <br /><span className="pl-2 inline-block">3. 비고형암에 대한 비관혈적 근치수술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다.</span>
                    </p>
                  </div>

                  {/* NH Guidelines Box */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                        【수술분류표(1~5종) 사용 지침】
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        무배당 NH5.10.5굿플러스건강보험2604(1~2종)약관 별표
                      </span>
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2.5 text-slate-300">
                      <p>
                        <strong className="text-amber-300">1. '수술'이라 함은</strong> 의사, 치과의사의 면허를 가진 자(이하 "의사"라 합니다)가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 의료법 제3조(의료기관)에 규정한 국내의 병원이나 의원 또는 국외의 의료관련 법에서 정한 의료기관에서 의사의 관리 하에 수술하는 것을 말합니다. 이 때 수술이란 &lt;수술분류표(1~5종)&gt;에서 정한 행위[기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라 내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작을 가하는 것[보건복지부 산하 신의료기술평가위원회(향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법도 포함됩니다]을 말합니다. 단, 흡인(吸引, 주사기 등으로 빨아 들이는 것), 천자(穿刺, 바늘 또는 관을 꽂아 체액·조직을 뽑아내거나 약물을 주입하는 것) 등의 조치 및 신경(神經) BLOCK(신경의 차단) 등은 제외]를 하는 것을 말합니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">2. '관혈(觀血)'수술이라 함은</strong> 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변 부위를 노출시켜서 수술하는 것을 말합니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">3. '근본(根本)' 혹은 '근치(根治)'수술이라 함은</strong> 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">4. '관혈적 악성신생물 근치수술'이라 함은</strong> 관혈적 방법을 통해 악성생물의 원발 병소를 완전히 절제 또는 적출하고 혹은 곽청술을 함께 실시한 경우입니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">5. &lt;수술분류표(1~5종)&gt; 상에 열거되지 않은 선진의료적 첨단 수술에 대한 인정 및 적용 기준:</strong> &lt;수술분류표(1~5종)&gt;에서의 선진의료적 첨단 수술은 상기 '수술'의 정의에 해당하여야 하고 약물투여치료, 방사선 조사치료 또는 기타의 보존적 치료로 분류될 수 없는 경우이어야 합니다.
                        <br /><span className="pl-3 inline-block">(1) &lt;수술분류표(1~5종)&gt; 상의 수술 이외에 보건복지부 산하 신의료기술평가위원회(향후 제도 변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법으로 치료한 경우 &lt;수술분류표(1~5종)&gt; 상의 동일부위 수술로 봅니다. 이 때에 해당 최신수술기법은 수술개시일로부터 60일이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.</span>
                        <br /><span className="pl-3 inline-block">(2) 단, 이 선진의료적 첨단 수술이 본질적으로 내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적 수술인 경우에는 &lt;수술분류표(1~5종)&gt; 중 'Ⅰ.일반 질병 및 상해치료 목적의 수술' 86항 (악성신생물의 경우는 'Ⅱ. 악성신생물 치료목적의 수술' 2항)을 우선 적용합니다.</span>
                      </p>
                      <p>
                        <strong className="text-amber-300">6. '악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료'라 함은</strong> 선형가속기(LINAC)에서 발생되는 가는 방사선(Pencil beam)들을 다양한 각도에서 악성신생물을 향해 집중적으로 조사하면서 동시에 악성신생물의 움직임을 병변 추적 장치를 이용하여 실시간으로 추적하면서 치료하는 방법입니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">7. '두개내 신생물 근치 감마나이프 (Gammaknife) 정위적 방사선 치료'라 함은</strong> 정위 좌표계를 이용하여 코발트 60 방사성 동위원소 (Co-60) 에서 나오는 감마선을 두개강 내의 신생물을 향해 집중 조사함으로 두개(頭蓋)를 열지 않고도 수술적 제거와 같은 효과를 내는 치료를 말합니다.
                      </p>
                      <p>
                        <strong className="text-amber-300">8. 다음과 같은 수술은 수술보험금 지급대상에서 보장을 제외합니다.</strong>
                        <br /><span className="pl-3 inline-block">(1) 미용 성형상의 수술</span>
                        <br /><span className="pl-3 inline-block">(2) 피임(避妊) 목적의 수술</span>
                        <br /><span className="pl-3 inline-block">(3) 피임 및 불임술 후 가임목적의 수술</span>
                        <br /><span className="pl-3 inline-block">(4) 검사 및 진단을 위한 수술 [생검 (生檢), 복강경 검사(腹腔鏡檢査) 등]</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (tabKey === 'kb_surgery1_5' || tabKey === 'lotte_surgery1_5' || tabKey === 'hana_surgery1_5') ? (
                <>
                  {/* KB Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【내시경·경피적 수술 적용 기준 및 악성신생물 수술 주) 사항】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 내시경·경피적 수술:</strong> 상기 1~87항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적(經皮的) 수술은 88항을 적용합니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~87항)의 수술로 적용합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주2) 악성신생물 수술:</strong> 제자리암·경계성종양 수술은 "1. 일반 질병 및 상해 치료 목적의 수술" 항목을 적용합니다. 비관혈암에 대한 비관혈적 근치술은 5종 수술로 인정하며, 조혈모세포 이식술은 일련의 과정을 모두 포함하여 1회의 수술로 인정합니다.
                    </p>
                  </div>

                  {/* KB Guidelines Box */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【1~5종수술III 분류표 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2 text-slate-300">
                      <p>1. "수술"이라 함은 의사, 치과의사 면허를 가진 자가 피보험자의 질병 또는 상해 치료를 직접목적으로 의료기관에서 의사의 관리하에 "1~5종수술III 분류표"에 정한 행위를 받는 것을 말합니다 (절단, 절제 등 생체 조작). 단, 흡인, 천자, 신경차단은 제외합니다.</p>
                      <p>2. "관혈(觀血)" 수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 노출시켜서 수술하는 것을 말합니다.</p>
                      <p>3. "근본(根本)" 혹은 "근치(根治)" 수술이라 함은 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다.</p>
                      <p>4. "관혈적 악성신생물 근치수술"이라 함은 관혈적 방법을 통해 악성신생물의 원발병소를 완전히 절제, 적제, 적출하고 혹은 곽청술을 함께 실시한 경우입니다.</p>
                      <p>5. 선진의료적 첨단 수술: 보건복지부 산하 신의료기술평가위원회로부터 안전성과 치료효과를 인정받은 최신 수술기법은 동일부위 수술로 봅니다 (60일 이내 2회 이상 시 1회 간주). 내시경/경피적 수술인 경우 88항(악성신생물 2항) 우선 적용.</p>
                      <p>6. 악성 신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료: 선형가속기 방사선 집중 조사 및 실시간 병변 추적 치료.</p>
                      <p>7. 두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료: 코발트 60 감마선 두개강 내 집중 조사 치료.</p>
                      <p>8. 보장 제외 수술: 미용 성형상의 수술, 피임 목적 수술, 피임 및 불임술 후 가임목적 수술, 검사 및 진단을 위한 수술(생검, 복강경 검사 등).</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Part 1 Notes Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2 shadow-2xs">
                    <h5 className="font-extrabold text-[#123941] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-[#123941] rounded-xs"></span>
                      【1. 일반적인 상해 및 질병 치료목적의 수술 주기 사항】
                    </h5>
                    <p className="pl-2.5">
                      <strong>주1) 관혈수술(觀血手術):</strong> 병변 부위를 인체에 절개(切開)하여 직접 보면서 시행하는 수술을 말합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주2) 비관혈수술:</strong> 복강경, 흉강경, 내시경, 카테터 등을 이용한 수술로서 병변 부위를 직접 절개하지 않고 시행하는 수술을 포함합니다.
                    </p>
                    <p className="pl-2.5">
                      <strong>주3) 동시 수술의 처리:</strong> 동일한 신체 부위에 대하여 동일한 기회에 2가지 이상의 수술을 받은 경우에는 그 수술 중 가장 높은 종류의 수술비 1회분만 지급합니다.
                    </p>
                  </div>

                  {/* Guidelines & Incontinence Surgery Code Table */}
                  <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-4 shadow-lg border border-slate-800">
                    <h4 className="font-extrabold text-white text-sm sm:text-base border-b border-slate-700 pb-2.5 flex items-center gap-2">
                      <span className="w-2 h-4 bg-amber-400 rounded-xs"></span>
                      【1~5종 수술분류표 사용 지침】
                    </h4>
                    <div className="text-xs leading-relaxed space-y-2 text-slate-300">
                      <p>1. 수술분류표에 기재되지 않은 수술은 최신 의학적 기준에 따라 가장 유사한 수술의 종류에 준하여 적용합니다.</p>
                      <p>2. 검사, 처치, 약물주입요법, 마취 등은 보장대상 수술에서 제외됩니다.</p>
                      <p>3. 요실금수술(급여)은 보건복지부 고시 급여 항목 및 요실금 수술 수가코드에 해당하는 경우에 한하여 1종 수술로 인정됩니다.</p>
                    </div>

                    {/* Incontinence Code Table */}
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <h5 className="font-bold text-amber-300 text-xs mb-2">● 요실금수술(급여) 대상 수가코드</h5>
                      <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700 font-bold">
                              <th className="py-2 px-3 text-center w-24">수가코드</th>
                              <th className="py-2 px-3">한글 수술명</th>
                              <th className="py-2 px-3">영문 수술명</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/80 text-slate-300">
                            <tr className="hover:bg-slate-900">
                              <td className="py-2 px-3 text-center font-bold text-amber-400">R3562</td>
                              <td className="py-2 px-3">요실금수술 - 테이프를 이용한 수술</td>
                              <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Using Tape</td>
                            </tr>
                            <tr className="hover:bg-slate-900">
                              <td className="py-2 px-3 text-center font-bold text-amber-400">R3564</td>
                              <td className="py-2 px-3">요실금수술 - 근봉합술 또는 질전벽봉합술 등</td>
                              <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Muscle Suture etc.</td>
                            </tr>
                            <tr className="hover:bg-slate-900">
                              <td className="py-2 px-3 text-center font-bold text-amber-400">R3565</td>
                              <td className="py-2 px-3">요실금수술 - 복강경을 이용한 수술</td>
                              <td className="py-2 px-3 text-slate-400">Operation for Urinary Incontinence - Laparoscopic</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">
                        * 건강보험 행위 급여·비급여 목록표 및 급여 상대가치점수 고시 개정에 따라 수가코드가 변경되는 경우 해당 개정 고시를 따릅니다.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* 4. 현대해상 71대 질병수술비 하단 세부분류표 아래 동시진단가능 질병 안내 및 분류표 */}
          {tabKey === 'hyundai_71diseases' && (
            <div className="space-y-3 pt-6 border-t-2 border-[#123941]/20">
              {/* Header Bar matching screenshot design */}
              <div className="px-4 py-3 bg-[#123941]/5 border border-[#123941]/10 rounded-2xl flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#123941]"></span>
                  <h4 className="text-xs font-black text-[#123941]">
                    [유의사항] (동시진단가능 질병코드 및 보험금 동일 지급 기준)
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-[#123941] bg-[#123941]/10 px-2.5 py-0.5 rounded-md border border-[#123941]/20">
                  현대해상 71대질병수술비
                </span>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed font-bold shadow-3xs">
                💡 한국표준질병사인분류 기준에 의거하여 진단서에 동시진단 가능 코드가 같이 기재되어 있는 경우에도 동일하게 보험금을 지급합니다.
              </div>

              {/* Sub cards grid matching [하단 세부 분류표] card layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Card 1: 22대특정질병 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_22'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_22')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            22대특정질병 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            21개
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    22대특정질병 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_22_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 font-medium">
                            <p className="font-extrabold text-[#123941]">주) 22대특정질병 약관 적용 유의사항</p>
                            <p className="pl-2">주1) I32.0~I52.0은 약관상 동시에 보장하고 있는 경우만 A39.5+도 보장합니다.</p>
                            <p className="pl-2">주2) G02.0~G05.1은 약관상 동시에 보장하고 있는 경우만 B06.0+도 보장합니다.</p>
                            <p className="pl-2">주3) G01~G05.0은 약관상 동시에 보장하고 있는 경우만 A32.1+도 보장합니다.</p>
                            <p className="pl-2 text-slate-700 font-bold">※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Card 2: 다발성13대질병 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_13'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_13')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            다발성13대질병 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            5개
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    다발성13대질병 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_13_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 font-bold">
                            ※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Card 3: 35대생활질환 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_35'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_35')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            35대생활질환 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            13개
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    35대생활질환 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_35_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 font-medium">
                            <p className="font-extrabold text-[#123941]">주) 35대생활질환 약관 적용 유의사항</p>
                            <p className="pl-2">주1) H19.0~H32.0은 약관상 동시에 보장하고 있는 경우만 A18.5도 보장합니다.</p>
                            <p className="pl-2">주2) N08.5~N16.4은 약관상 동시에 보장하고 있는 경우만 M32.13+도 보장합니다.</p>
                            <p className="pl-2 text-slate-700 font-bold">※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 5. 현대해상 120대 질병수술비 하단 세부분류표 아래 동시진단가능 질병 안내 및 분류표 */}
          {tabKey === 'hyundai_120diseases' && (
            <div className="space-y-3 pt-6 border-t-2 border-[#123941]/20">
              {/* Header Bar matching screenshot design */}
              <div className="px-4 py-3 bg-[#123941]/5 border border-[#123941]/10 rounded-2xl flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#123941]"></span>
                  <h4 className="text-xs font-black text-[#123941]">
                    [유의사항] (동시진단가능 질병코드 및 보험금 동일 지급 기준)
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-[#123941] bg-[#123941]/10 px-2.5 py-0.5 rounded-md border border-[#123941]/20">
                  현대해상 120대질병수술비
                </span>
              </div>

              {/* Notice Banner */}
              <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed font-bold shadow-3xs">
                💡 한국표준질병사인분류 기준에 의거하여 상기 120대질병 중 일부는 아래와 같이 동시 진단될 수 있으며, 동시 진단 가능 코드가 기재된 진단서를 제출한 경우에도 동일하게 보험금을 지급합니다.
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Card 1: 58대질병 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_120_58'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_120_58')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            58대질병 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            16개 항목
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    58대질병 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_120_58_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 font-medium">
                            <p className="font-extrabold text-[#123941]">주) 58대질병 약관 적용 유의사항</p>
                            <p className="pl-2">주1) H19.0~H32.0은 약관상 동시에 보장하고 있는 경우만 A18.5도 보장합니다. 즉, H19.0~H32.0 중 일부만 보장하는 경우 A18.5는 보장하지 않습니다.</p>
                            <p className="pl-2 text-slate-700 font-bold">※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Card 2: 24대질병 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_120_24'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_120_24')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            24대질병 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            20개 항목
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    24대질병 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_120_24_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 font-medium">
                            <p className="font-extrabold text-[#123941]">주) 24대질병 약관 적용 유의사항</p>
                            <p className="pl-2">주1) I32.0~I52.0은 약관상 동시에 보장하고 있는 경우만 A39.5+도 보장합니다. 즉, I32.0~I52.0 중 일부만 보장하는 경우 A39.5+는 보장하지 않습니다.</p>
                            <p className="pl-2">주2) G02.0~G05.1은 약관상 동시에 보장하고 있는 경우만 B06.0+도 보장합니다. 즉, G02.0~G05.1 중 일부만 보장하는 경우 B06.0+는 보장하지 않습니다.</p>
                            <p className="pl-2">주3) G01~G05.0은 약관상 동시에 보장하고 있는 경우만 A32.1+도 보장합니다. 즉, G01~G05.0 중 일부만 보장하는 경우 A32.1+는 보장하지 않습니다.</p>
                            <p className="pl-2 text-slate-700 font-bold">※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Card 3: 갑상선관련질병 */}
                {(() => {
                  const isExp = !!query || (expandedSimultaneousSections['sim_120_thyroid'] ?? false);
                  return (
                    <div
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isExp
                          ? 'border-[#123941]/40 ring-1 ring-[#123941]/15 shadow-sm md:col-span-2'
                          : 'border-slate-200/90 hover:border-[#123941]/30 shadow-2xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSimultaneousSection('sim_120_thyroid')}
                        className="w-full px-4 py-3 bg-slate-100/90 hover:bg-slate-200/70 border-b border-slate-200 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 pr-2 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#123941] text-white text-[11px] font-black shrink-0 shadow-2xs">
                            별표-유의사항
                          </span>
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 truncate">
                            갑상선관련질병 대상코드 및 동시진단코드
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-1">
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[10px] font-bold hidden sm:inline-block">
                            1개 항목
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#123941] bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span>{isExp ? '접기' : '상세보기'}</span>
                            {isExp ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#123941]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#123941]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="p-3 bg-white space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-200 text-center">
                                  <th className="py-2.5 px-3 w-[50%] border-r border-slate-200 bg-slate-200/60" colSpan={2}>
                                    갑상선관련질병 대상코드
                                  </th>
                                  <th className="py-2.5 px-3 w-[50%] bg-amber-50/80 text-amber-900" colSpan={2}>
                                    동시진단코드
                                  </th>
                                </tr>
                                <tr className="bg-slate-50 text-slate-800 font-black border-b border-slate-200 text-xs">
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center border-r border-slate-200">분류번호</th>
                                  <th className="py-2 px-3 w-[35%] border-r border-slate-200">대상이 되는 질병</th>
                                  <th className="py-2 px-3 w-[15%] text-center">분류번호</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {HYUNDAI_SIMULTANEOUS_120_THYROID_DISEASES.map((row, idx) => {
                                  const rowMatch = !detailFilter || 
                                    normalizeString(row.targetDisease).includes(query) ||
                                    normalizeString(row.targetCode).includes(query) ||
                                    row.simultaneousItems.some(i => normalizeString(i.disease).includes(query) || normalizeString(i.code).includes(query));
                                  
                                  if (!rowMatch) return null;

                                  return (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200/80 align-middle">
                                        {highlightText(row.targetDisease)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center border-r border-slate-200/80 align-middle">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[#123941] font-mono font-extrabold rounded border border-slate-200 text-[11px]">
                                          {highlightText(row.targetCode)}
                                        </span>
                                      </td>
                                      <td className="py-2.5 px-3 font-semibold text-slate-800 border-r border-slate-200/80 align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx} className="leading-snug">
                                              {highlightText(item.disease)}
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-center align-middle">
                                        <div className="space-y-1">
                                          {row.simultaneousItems.map((item, itemIdx) => (
                                            <div key={itemIdx}>
                                              <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-900 font-mono font-extrabold rounded border border-amber-200/80 text-[11px]">
                                                {highlightText(item.code)}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1 font-medium">
                            <p className="font-extrabold text-[#123941]">주) 갑상선관련질병 약관 적용 유의사항</p>
                            <p className="pl-2 text-slate-700 font-bold">※ 상기외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };

  const handleDownloadPDF = async (title: string, summariesList: any[], sectionsList: any[]) => {
    // Automatically expand all sections in state
    const allExpanded: Record<number, boolean> = {};
    (sectionsList || []).forEach((_, idx) => {
      allExpanded[idx] = true;
    });
    setExpandedDbSurgerySections(allExpanded);

    const filename = `${selectedInsurer.name}_${title.replace(/[\s\/]/g, '_')}_세부분류표.pdf`;

    const htmlContent = (activeSubTab === 'meritz_integrated_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 암통합치료비(기본형)</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 메리츠화재 - 암통합치료비(기본형) (${meritzIntegratedTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzIntegratedTreatmentTab === '80m' ? '암통합치료비(8천)' : '암통합치료비(1억)'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">메리츠화재 - 암통합치료비(기본형) (${meritzIntegratedTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzIntegratedTreatmentTab === '80m' ? '암통합치료비(8천)' : '암통합치료비(1억)'})</h1>
      <div class="subtitle">2-92. 암 통합치료비(기본형)(건강가입)보장 특별약관</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[약관 및 보장 개요]</strong><br/>
    • 본 담보는 암 진단 후 검사, 주요 치료, 비급여 치료, 특정통증완화치료 및 재활치료까지 암 치료 종합 과정을 보장합니다.<br/>
    • 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 지급합니다. (단, 일부 검사/재활항목 제외)
  </div>

  <div class="sec-title">📋 &lt;${meritzIntegratedTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzIntegratedTreatmentTab === '80m' ? '암통합치료비(8천)' : '암통합치료비(1억)'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 22%; text-align: center;">지급횟수</th>
        <th style="width: 18%; text-align: center; background: #f0fdfa; color: #123941;">보장금액</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_INTEGRATED_TREATMENT_ITEMS.map((item) => {
        const valStr = item[meritzIntegratedTreatmentTab];
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.count}</td>
            <td class="text-center highlight">${valStr}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(기본형 4천 / 8천 / 1억) 가입금액 비교표&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 8%; text-align: center; ${meritzIntegratedTreatmentTab==='40m'?'background:#f0fdfa;color:#123941;':''}">4천</th>
        <th style="width: 8%; text-align: center; ${meritzIntegratedTreatmentTab==='80m'?'background:#f0fdfa;color:#123941;':''}">8천</th>
        <th style="width: 8%; text-align: center; ${meritzIntegratedTreatmentTab==='100m'?'background:#f0fdfa;color:#123941;':''}">1억</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_INTEGRATED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.count}</td>
          <td class="text-center" style="${meritzIntegratedTreatmentTab==='40m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['40m']}</td>
          <td class="text-center" style="${meritzIntegratedTreatmentTab==='80m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['80m']}</td>
          <td class="text-center" style="${meritzIntegratedTreatmentTab==='100m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['100m']}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>[약관 유의사항 및 보장 기준]</strong><br/>
    • <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.<br/>
    • <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.<br/>
    • <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'hanwha_integrated_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 상해및질병통합치료비 (${hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원'})</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 한화손해보험 - 상해및질병통합치료비 (${hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">한화손해보험 - 상해및질병통합치료비 (${hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원'})</h1>
      <div class="subtitle">한화 시그니처 여성 건강보험4.0 무배당2604 (712p)</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[상해및질병통합치료비 약관 규정]</strong><br/>
    3. 제1항의 통합치료항목별 지급금액 및 지급한도라 함은 아래의 지급금액 및 지급한도를 말합니다.<br/>
    상해및질병 통합치료비의 연간 총 지급금액은 통합치료항목별 연간 지급된 지급금액의 합산금액을 말하며, 보험가입금액을 한도로 합니다.
  </div>

  <div class="sec-title">📋 &lt;보험가입금액 ${hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원'}&gt; 보장항목 및 지급금액</div>
  <table>
    <thead>
      <tr>
        <th style="width: 22%; text-align: center;">구분</th>
        <th style="width: 38%;">통합치료항목</th>
        <th style="width: 20%; text-align: center;">지급한도</th>
        <th style="width: 20%; text-align: center;" class="highlight">지급금액 (${hanwhaIntegratedTreatmentTab === '10m' ? '1천만원' : hanwhaIntegratedTreatmentTab === '30m' ? '3천만원' : '4천만원'})</th>
      </tr>
    </thead>
    <tbody>
      ${HANWHA_INTEGRATED_TREATMENT_ITEMS.map((item) => {
        const amount = hanwhaIntegratedTreatmentTab === '10m' ? item.plan10m : hanwhaIntegratedTreatmentTab === '30m' ? item.plan30m : item.plan40m;
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black">${item.name}</td>
            <td class="text-center">${item.limit}</td>
            <td class="text-center highlight font-bold">${amount}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(1천만원 / 3천만원 / 4천만원) 가입금액 비교표&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 20%; text-align: center;">구분</th>
        <th style="width: 32%;">통합치료항목</th>
        <th style="width: 18%; text-align: center;">지급한도</th>
        <th style="width: 10%; text-align: center; ${hanwhaIntegratedTreatmentTab==='10m'?'background:#f0fdfa;color:#123941;':''}">1천만원</th>
        <th style="width: 10%; text-align: center; ${hanwhaIntegratedTreatmentTab==='30m'?'background:#f0fdfa;color:#123941;':''}">3천만원</th>
        <th style="width: 10%; text-align: center; ${hanwhaIntegratedTreatmentTab==='40m'?'background:#f0fdfa;color:#123941;':''}">4천만원</th>
      </tr>
    </thead>
    <tbody>
      ${HANWHA_INTEGRATED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.limit}</td>
          <td class="text-center" style="${hanwhaIntegratedTreatmentTab==='10m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.plan10m}</td>
          <td class="text-center" style="${hanwhaIntegratedTreatmentTab==='30m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.plan30m}</td>
          <td class="text-center" style="${hanwhaIntegratedTreatmentTab==='40m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.plan40m}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>【상해및질병 통합치료비 약관 규정】</strong><br/>
    • <strong>[4] 연간 총 지급금액:</strong> 통합치료항목별 연간 지급된 지급금액의 합산금액을 말하며, 보험가입금액을 한도로 합니다.<br/>
    • <strong>[5] 연간의 정의:</strong> 계약일(갱신계약의 경우 갱신계약일)로부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.<br/>
    • <strong>한도 산정 기준일자:</strong><br/>
    &nbsp;&nbsp;1. 상해및질병 통합치료(검사): 각 통합치료항목별 검사를 받은 날<br/>
    &nbsp;&nbsp;2. 상해및질병 통합치료(1-5종수술): 각 통합치료항목별 수술을 받은 날<br/>
    &nbsp;&nbsp;3. 상해및질병 통합치료(입원): 각 통합치료항목별 입원을 받은 날<br/>
    &nbsp;&nbsp;4. 상해및질병 통합치료(주요치료): 각 통합치료항목별 주요치료를 받은 날 (특정수혈의 경우 수혈을 받은 날)
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'hanwha_injury_integrated_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 상해통합치료비 (${hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형'})</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 한화손해보험 - 상해통합치료비 (${hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">한화손해보험 - 상해통합치료비 (${hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형'})</h1>
      <div class="subtitle">674 한화 시그니처 여성 건강보험4.0 무배당2604</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[상해통합치료비 약관 규정]</strong><br/>
    [3] 제1항의 통합치료 항목별 지급금액 및 지급한도라 함은 아래의 지급금액 및 지급한도를 말합니다.
  </div>

  <div class="sec-title">📋 &lt;형별 지급금액 (${hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형'})&gt; 보장항목 및 지급금액</div>
  <table>
    <thead>
      <tr>
        <th style="width: 22%; text-align: center;">구분</th>
        <th style="width: 38%;">통합치료 항목</th>
        <th style="width: 20%; text-align: center;">지급한도</th>
        <th style="width: 20%; text-align: center;" class="highlight">지급금액 (${hanwhaInjuryTreatmentTab === 'luxury' ? '고급형' : hanwhaInjuryTreatmentTab === 'general' ? '일반형' : '실속형'})</th>
      </tr>
    </thead>
    <tbody>
      ${HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS.map((item) => {
        const amount = hanwhaInjuryTreatmentTab === 'luxury' ? item.luxury : hanwhaInjuryTreatmentTab === 'general' ? item.general : item.saving;
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black">${item.name}</td>
            <td class="text-center">${item.limit}</td>
            <td class="text-center highlight font-bold">${amount}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(고급형 / 일반형 / 실속형) 보장금액 종합 비교표&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 20%; text-align: center;">구분</th>
        <th style="width: 32%;">통합치료 항목</th>
        <th style="width: 18%; text-align: center;">지급한도</th>
        <th style="width: 10%; text-align: center; ${hanwhaInjuryTreatmentTab==='luxury'?'background:#f0fdfa;color:#123941;':''}">고급형</th>
        <th style="width: 10%; text-align: center; ${hanwhaInjuryTreatmentTab==='general'?'background:#f0fdfa;color:#123941;':''}">일반형</th>
        <th style="width: 10%; text-align: center; ${hanwhaInjuryTreatmentTab==='saving'?'background:#f0fdfa;color:#123941;':''}">실속형</th>
      </tr>
    </thead>
    <tbody>
      ${HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.limit}</td>
          <td class="text-center" style="${hanwhaInjuryTreatmentTab==='luxury'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.luxury}</td>
          <td class="text-center" style="${hanwhaInjuryTreatmentTab==='general'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.general}</td>
          <td class="text-center" style="${hanwhaInjuryTreatmentTab==='saving'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item.saving}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>【상해통합치료비 약관 규정】</strong><br/>
    • <strong>[4] 연간의 정의:</strong> 이 특별약관에서 “연간”이라 함은 이 특별약관의 계약일로부터 그 날을 포함하여 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다. 다만, 해당년도의 계약해당일이 없는 경우에는 해당월의 마지막 날을 계약해당일로 합니다.<br/>
    • <strong>출처:</strong> 674 한화 시그니처 여성 건강보험4.0 무배당2604
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'meritz_practical_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 암통합치료비(실속형)</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 메리츠화재 - 암통합치료비(실속형) (${meritzPracticalTreatmentTab === '10m' ? '실속형(1천)' : meritzPracticalTreatmentTab === '30m' ? '실속형(3천)' : meritzPracticalTreatmentTab === '50m' ? '실속형(5천)' : '실속형(7천)'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">메리츠화재 - 암통합치료비(실속형) (${meritzPracticalTreatmentTab === '10m' ? '실속형(1천)' : meritzPracticalTreatmentTab === '30m' ? '실속형(3천)' : meritzPracticalTreatmentTab === '50m' ? '실속형(5천)' : '실속형(7천)'})</h1>
      <div class="subtitle">2-93. 암 통합치료비I(실속형)(건강가입)보장 특별약관</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[약관 및 보장 개요]</strong><br/>
    • 본 담보는 암 진단 후 수술, 항암방사선, 항암약물 및 표적/면역/양성자 등 핵심 암 치료에 대해 정액 보장합니다.<br/>
    • 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 지급합니다.
  </div>

  <div class="sec-title">📋 &lt;${meritzPracticalTreatmentTab === '10m' ? '실속형(1천)' : meritzPracticalTreatmentTab === '30m' ? '실속형(3천)' : meritzPracticalTreatmentTab === '50m' ? '실속형(5천)' : '실속형(7천)'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 12%; text-align: center; background: #fff7ed; color: #9a3412;">1년 미만 (50%)</th>
        <th style="width: 12%; text-align: center; background: #f0fdfa; color: #123941;">1년 이상 (100%)</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_PRACTICAL_TREATMENT_ITEMS.map((item) => {
        const valStr = item[meritzPracticalTreatmentTab];
        const numVal = parseInt(valStr.replace(/[^0-9]/g, ''), 10);
        const halfVal = isNaN(numVal) ? '-' : (numVal === 50 ? '25만원' : numVal === 250 ? '125만원' : (numVal / 2) + '만원');
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.count}</td>
            <td class="text-center font-bold" style="color: #c2410c; background: #fff7ed;">${halfVal}</td>
            <td class="text-center highlight">${valStr}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(실속형 1천 / 3천 / 5천 / 7천) 가입금액 비교표 (1년이상 100% 기준)&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 6%; text-align: center; ${meritzPracticalTreatmentTab==='10m'?'background:#f0fdfa;color:#123941;':''}">1천</th>
        <th style="width: 6%; text-align: center; ${meritzPracticalTreatmentTab==='30m'?'background:#f0fdfa;color:#123941;':''}">3천</th>
        <th style="width: 6%; text-align: center; ${meritzPracticalTreatmentTab==='50m'?'background:#f0fdfa;color:#123941;':''}">5천</th>
        <th style="width: 6%; text-align: center; ${meritzPracticalTreatmentTab==='70m'?'background:#f0fdfa;color:#123941;':''}">7천</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_PRACTICAL_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.count}</td>
          <td class="text-center" style="${meritzPracticalTreatmentTab==='10m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['10m']}</td>
          <td class="text-center" style="${meritzPracticalTreatmentTab==='30m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['30m']}</td>
          <td class="text-center" style="${meritzPracticalTreatmentTab==='50m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['50m']}</td>
          <td class="text-center" style="${meritzPracticalTreatmentTab==='70m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['70m']}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>[약관 유의사항 및 보장 기준]</strong><br/>
    • <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.<br/>
    • <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.<br/>
    • <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'meritz_noncovered_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 암통합치료비(비급여)</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 메리츠화재 - 암통합치료비(비급여) (${meritzNoncoveredTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzNoncoveredTreatmentTab === '70m' ? '암통합치료비(7천)' : '암통합치료비(1억)'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">메리츠화재 - 암통합치료비(비급여) (${meritzNoncoveredTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzNoncoveredTreatmentTab === '70m' ? '암통합치료비(7천)' : '암통합치료비(1억)'})</h1>
      <div class="subtitle">2-94. 암 통합치료비II(비급여(전액본인부담 포함))(건강가입)보장 특별약관</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[약관 및 보장 개요]</strong><br/>
    • 본 담보는 비급여(전액본인부담 포함) 암 수술, 항암방사선, 항암약물, 다빈치로봇수술, 표적/면역항암약물, 항암양성자방사선치료에 대해 집중 보장합니다.<br/>
    • 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 지급합니다.
  </div>

  <div class="sec-title">📋 &lt;${meritzNoncoveredTreatmentTab === '40m' ? '암통합치료비(4천)' : meritzNoncoveredTreatmentTab === '70m' ? '암통합치료비(7천)' : '암통합치료비(1억)'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 12%; text-align: center; background: #fff7ed; color: #9a3412;">1년 미만 (50%)</th>
        <th style="width: 12%; text-align: center; background: #f0fdfa; color: #123941;">1년 이상 (100%)</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_NONCOVERED_TREATMENT_ITEMS.map((item) => {
        const amountUnder = meritzNoncoveredTreatmentTab === '40m' ? item['40m_under']
                          : meritzNoncoveredTreatmentTab === '70m' ? item['70m_under']
                          : item['100m_under'];
        const amountOver = meritzNoncoveredTreatmentTab === '40m' ? item['40m_over']
                         : meritzNoncoveredTreatmentTab === '70m' ? item['70m_over']
                         : item['100m_over'];
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.count}</td>
            <td class="text-center font-bold" style="color: #c2410c; background: #fff7ed;">${amountUnder}</td>
            <td class="text-center highlight">${amountOver}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(비급여 4천 / 7천 / 1억) 가입금액 비교표 (1년이상 100% 기준)&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredTreatmentTab==='40m'?'background:#f0fdfa;color:#123941;':''}">4천</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredTreatmentTab==='70m'?'background:#f0fdfa;color:#123941;':''}">7천</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredTreatmentTab==='100m'?'background:#f0fdfa;color:#123941;':''}">1억</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_NONCOVERED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.count}</td>
          <td class="text-center" style="${meritzNoncoveredTreatmentTab==='40m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['40m_over']}</td>
          <td class="text-center" style="${meritzNoncoveredTreatmentTab==='70m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['70m_over']}</td>
          <td class="text-center" style="${meritzNoncoveredTreatmentTab==='100m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['100m_over']}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>[약관 유의사항 및 보장 기준]</strong><br/>
    • <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.<br/>
    • <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.<br/>
    • <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'meritz_noncovered_primary_treatment') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 암통합치료비(비급여/주요치료)</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 14px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 9.5px; color: #475569; line-height: 1.6; margin-top: 14px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 메리츠화재 - 암통합치료비(비급여/주요치료) (${meritzNoncoveredPrimaryTreatmentTab === '30m' ? '암통합치료비(3천)' : meritzNoncoveredPrimaryTreatmentTab === '50m' ? '암통합치료비(5천)' : '암통합치료비(7천)'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">메리츠화재 - 암통합치료비(비급여/주요치료) (${meritzNoncoveredPrimaryTreatmentTab === '30m' ? '암통합치료비(3천)' : meritzNoncoveredPrimaryTreatmentTab === '50m' ? '암통합치료비(5천)' : '암통합치료비(7천)'})</h1>
      <div class="subtitle">2-96. 암 통합치료비(주요치료)(비급여(전액본인부담 포함))(건강가입)보장 특별약관</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[약관 및 보장 개요]</strong><br/>
    • 본 담보는 비급여(전액본인부담 포함) 암 수술, 유사암 수술, 항암방사선치료, 기타피부암 및 갑상선암 항암방사선치료, 항암약물치료, 기타피부암 및 갑상선암 항암약물치료에 대해 보장합니다.<br/>
    • 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 지급합니다.
  </div>

  <div class="sec-title">📋 &lt;${meritzNoncoveredPrimaryTreatmentTab === '30m' ? '암통합치료비(3천)' : meritzNoncoveredPrimaryTreatmentTab === '50m' ? '암통합치료비(5천)' : '암통합치료비(7천)'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 12%; text-align: center; background: #fff7ed; color: #9a3412;">1년 미만 (50%)</th>
        <th style="width: 12%; text-align: center; background: #f0fdfa; color: #123941;">1년 이상 (100%)</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS.map((item) => {
        const amountUnder = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_under']
                          : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_under']
                          : item['70m_under'];
        const amountOver = meritzNoncoveredPrimaryTreatmentTab === '30m' ? item['30m_over']
                         : meritzNoncoveredPrimaryTreatmentTab === '50m' ? item['50m_over']
                         : item['70m_over'];
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.count}</td>
            <td class="text-center font-bold" style="color: #c2410c; background: #fff7ed;">${amountUnder}</td>
            <td class="text-center highlight">${amountOver}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="sec-title" style="background: #334155;">📊 &lt;전 유형(3천 / 5천 / 7천) 가입금액 비교표 (1년이상 100% 기준)&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 42%;">통합치료항목</th>
        <th style="width: 16%; text-align: center;">지급횟수</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredPrimaryTreatmentTab==='30m'?'background:#f0fdfa;color:#123941;':''}">3천</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredPrimaryTreatmentTab==='50m'?'background:#f0fdfa;color:#123941;':''}">5천</th>
        <th style="width: 8%; text-align: center; ${meritzNoncoveredPrimaryTreatmentTab==='70m'?'background:#f0fdfa;color:#123941;':''}">7천</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.count}</td>
          <td class="text-center" style="${meritzNoncoveredPrimaryTreatmentTab==='30m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['30m_over']}</td>
          <td class="text-center" style="${meritzNoncoveredPrimaryTreatmentTab==='50m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['50m_over']}</td>
          <td class="text-center" style="${meritzNoncoveredPrimaryTreatmentTab==='70m'?'background:#f0fdfa;font-weight:bold;color:#123941;':''}">${item['70m_over']}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>[약관 유의사항 및 보장 기준]</strong><br/>
    • <strong>연간 총 지급한도:</strong> 최초 계약일부터 1년 경과시점 전일 이전은 가입금액의 50%, 1년 경과시점 이후는 가입금액의 100%를 한도로 지급합니다.<br/>
    • <strong>보장개시일:</strong> 계약일 기준 15세 이상은 계약일부터 90일이 지난 날의 다음날, 15세 미만은 계약일부터 개시됩니다.<br/>
    • <strong>연간의 정의:</strong> 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'hyundai_surgery1_5') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10.5px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px; margin-top: 14px; margin-bottom: 10px; }
    .grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .group-card { border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 12px; page-break-inside: avoid; overflow: hidden; }
    .group-header { background: #123941; color: white; padding: 7px 10px; font-weight: 800; font-size: 11px; display: flex; justify-content: space-between; align-items: center; }
    .group-desc { background: #f8fafc; padding: 6px 10px; border-bottom: 1px solid #cbd5e1; font-size: 9.5px; color: #334155; line-height: 1.4; font-weight: 600; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; }
    th { background: #f8fafc; color: #0f172a; font-weight: 800; text-align: left; padding: 5px 6px; border-bottom: 1px solid #cbd5e1; }
    td { border-bottom: 1px solid #e2e8f0; padding: 4px 6px; color: #334155; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #123941; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-size: 9px; text-align: center; line-height: 1.2; vertical-align: middle; min-width: 36px; box-sizing: border-box; white-space: nowrap; }
    .footnotes { background: #f8fafc; border-top: 1px solid #cbd5e1; padding: 6px 10px; font-size: 9px; color: #475569; line-height: 1.4; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - ${title} (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">[별표153] 1-5종 수술Ⅳ(선천포함)분류표</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="sec-title">● [하단 세부 분류표] (수술명 및 분류표)</div>

  <div class="grid-2col">
    ${HYUNDAI_SURGERY_1_5_SECTIONS.map((sec, idx) => `
      <div class="group-card">
        <div class="group-header">
          <span>#${idx + 1} ${sec.category}</span>
          <span style="font-size: 9.5px; opacity: 0.9;">${sec.items.length}개 항목</span>
        </div>
        ${sec.subTitle ? `<div class="group-desc">${sec.subTitle}</div>` : ''}
        <table>
          <thead>
            <tr>
              <th style="width: 15%; text-align: center;">No.</th>
              <th style="width: 65%;">수술명</th>
              <th style="width: 20%; text-align: center;">분류표</th>
            </tr>
          </thead>
          <tbody>
            ${sec.items.map((item) => `
              <tr>
                <td class="text-center" style="font-weight: bold; color: #64748b;">${item.num}</td>
                <td style="font-weight: 600;">${item.name}</td>
                <td class="text-center">${item.type !== '-' ? `<span class="code">${item.type}</span>` : '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        ${sec.footnotes ? `
          <div class="footnotes">
            ${sec.footnotes.map((fn) => `<div>${fn}</div>`).join('')}
          </div>
        ` : ''}
      </div>
    `).join('')}
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'hyundai_heart' || activeSubTab === 'hyundai_cardiovascular') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10.5px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .group-card { border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 14px; page-break-inside: avoid; overflow: hidden; }
    .group-header { background: #123941; color: white; padding: 8px 12px; font-weight: 800; font-size: 11px; display: flex; justify-content: space-between; }
    .group-desc { background: #f8fafc; padding: 8px 12px; border-bottom: 1px solid #cbd5e1; font-size: 10px; color: #334155; line-height: 1.5; }
    .cat-title { background: #f1f5f9; padding: 6px 12px; font-weight: 800; color: #123941; font-size: 10.5px; border-bottom: 1px solid #cbd5e1; border-top: 1px solid #cbd5e1; }
    table { width: 100%; border-collapse: collapse; font-size: 10px; }
    th { background: #f8fafc; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border-bottom: 1px solid #cbd5e1; }
    td { border-bottom: 1px solid #e2e8f0; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .footnotes { background: #f8fafc; border-top: 1px solid #cbd5e1; padding: 8px 12px; font-size: 9.5px; color: #475569; line-height: 1.5; }
    .grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - ${title} (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">하단 세부분류표 (총 7개 그룹)</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="grid-2col">
    ${HYUNDAI_HEART_SECTIONS.map((sec, idx) => `
      <div class="group-card">
        <div class="group-header">
          <span>#${idx + 1} ${sec.title}</span>
          <span>${sec.items.length}개 항목</span>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width: 15%; text-align: center;">No.</th>
              <th>대상이 되는 질병</th>
              <th style="width: 25%; text-align: center;">분류번호</th>
            </tr>
          </thead>
          <tbody>
            ${sec.items.map((item) => `
              <tr>
                <td class="text-center" style="font-weight: bold; color: #64748b;">${item.num || ''}</td>
                <td style="font-weight: 600;">${item.disease}</td>
                <td class="text-center"><span class="code">${item.code || '-'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `).join('')}
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : (activeSubTab === 'hyundai_specific_cancer') ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10.5px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    .grid-container { display: flex; gap: 12px; margin-top: 10px; }
    .grid-col { flex: 1; min-width: 0; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 0px; font-size: 10px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 9.5px; color: #475569; line-height: 1.5; margin-top: 14px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 12px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - ${title} (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">하단 세부분류표</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    ① 약관에서 규정하는 '특정암'으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우에는 개정된 기준에 따라 해당 여부를 판단합니다.
  </div>

  <div class="sec-title">하단 세부분류표</div>
  <div class="grid-container">
    <div class="grid-col">
      <table>
        <thead>
          <tr>
            <th style="width: 15%; text-align: center;">No.</th>
            <th style="width: 60%;">대상이 되는 질병</th>
            <th style="width: 25%; text-align: center;">분류번호</th>
          </tr>
        </thead>
        <tbody>
          ${HYUNDAI_SPECIFIC_CANCER_ITEMS.slice(0, 14).map(item => `
            <tr>
              <td class="text-center" style="font-weight: bold; color: #64748b;">${item.num}</td>
              <td style="font-weight: 600;">${item.name}</td>
              <td class="text-center"><span class="code">${item.code}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="grid-col">
      <table>
        <thead>
          <tr>
            <th style="width: 15%; text-align: center;">No.</th>
            <th style="width: 60%;">대상이 되는 질병</th>
            <th style="width: 25%; text-align: center;">분류번호</th>
          </tr>
        </thead>
        <tbody>
          ${HYUNDAI_SPECIFIC_CANCER_ITEMS.slice(14).map(item => `
            <tr>
              <td class="text-center" style="font-weight: bold; color: #64748b;">${item.num}</td>
              <td style="font-weight: 600;">${item.name}</td>
              <td class="text-center"><span class="code">${item.code}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="notes">
    ② 제10차 개정이후 한국표준질병사인분류에 있어서 상기 상병 또는 질병 해당 여부는 피보험자가 진단확정된 당시 시행하고 있는 한국표준질병사인분류에 따라 판단합니다.<br/>
    ③ 다만, 진단확정 당시의 한국표준질병사인분류에 따라 상기 상병 또는 질병에 대한 보험금 지급여부를 판단한 경우에는, 이후에 한국표준질병사인분류가 개정되더라도 상기 상병 또는 질병 해당 여부를 다시 판단하지 않습니다.<br/>
    ④ 진단서 상의 분류번호는 한국표준질병사인분류 질병코딩지침서(향후 지침서가 변경되는 경우 변경된 지침서에 따릅니다)에 따라 기재된 것을 인정합니다.<br/>
    ⑤ 한국표준질병사인분류 지침서의 '사망 및 질병이환의 분류번호부여를 위한 선정준칙과 지침'에 따라 C77~C80(불명확한, 이차성 및 상세불명 부위의 악성신생물(암))의 경우 일차성 악성신생물(암)이 확인되는 경우에는 원발부위(최초 발생한 부위)를 기준으로 분류합니다.<br/>
    ⑥ 상기 외에도 대상질병 분류표의 분류번호와 연관성이 있어, 분류번호가 동시에 부여된 경우 대상질병 분류에 포함합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'samsung_111' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 11px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 13px; font-weight: 800; color: #ffffff; background: #123941; padding: 8px 12px; border-radius: 6px 6px 0 0; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 0px; font-size: 10.5px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 6px 10px; color: #334155; }
    .cat-td { font-weight: 800; background: #f8fafc; color: #0f172a; vertical-align: top; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; border-top: none; padding: 10px 12px; border-radius: 0 0 6px 6px; font-size: 10px; color: #475569; line-height: 1.5; margin-bottom: 16px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 12px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - 111대질병수술비 분류표 (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">상단요약분류표 및 하단세부분류표</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <!-- 상단요약분류표 -->
  <div class="sec-title">상단요약분류표</div>
  <div class="info-box">
    ⑦ 「111대질병」의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">구분</th>
        <th style="width: 75%;">해당 질병</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_111_SURGERY_SECTIONS.map(sec => `
        <tr>
          <td class="cat-td">${sec.category}</td>
          <td style="font-weight: 600;">${sec.diseases.join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  <div class="notes">
    <strong>제5조 (수술의 정의와 장소)</strong><br/>
    ① 이 특별약관에서 「수술」이라 함은 병원 또는 의원의 의사의 면허를 가진 자(이하 「의사」라 합니다)에 의하여 「111대질병」으로 치료가 필요하다고 인정된 경우로서 자택 등에서의 치료가 곤란하여 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리 하에 「111대질병」의 직접적인 치료를 목적으로 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것을 말합니다.<br/>
    ② 제1항의 수술은 보건복지부 산하 신의료기술평가위원회(향후 제도변경 시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 술기법으로 생체에 절단, 절제 등의 조작을 가하는 것을 포함합니다.
  </div>

  <!-- 하단세부분류표 -->
  <div style="margin-top: 24px; font-size: 14px; font-weight: 800; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 6px; margin-bottom: 12px;">
    하단세부분류표
  </div>

  ${SAMSUNG_111_DISEASE_CODE_SECTIONS.map(cat => {
    const tableTitleMap: Record<string, string> = {
      '5대주요기관질병': '[별표-질병관련39] 5대주요기관질병 분류표Ⅱ',
      '22대주요질병': '[별표-질병관련42] 22대주요질병 분류표',
      '3대주요질병': '[별표-질병관련43] 3대주요질병 분류표',
      '19대생활질병': '[별표-질병관련44] 19대생활질병 분류표',
      '62대생활질병': '[별표-질병관련45] 62대생활질병 분류표',
    };
    const secTitle = tableTitleMap[cat.category] || `[세부분류표] ${cat.category}`;
    return `
      <div class="sec-title">${secTitle}</div>
      <div class="info-box">
        약관에 규정하는 ${cat.category}으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026. 1. 1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 질병의 해당 여부를 판단합니다.
      </div>
      <table>
        <thead>
          <tr>
            <th style="width: 25%;">구분</th>
            <th style="width: 55%;">분류항목</th>
            <th style="width: 20%; text-align: center;">분류번호</th>
          </tr>
        </thead>
        <tbody>
          ${cat.subsections.map(sub => {
            const rowSpan = sub.items.length;
            return sub.items.map((item, itemIdx) => `
              <tr>
                ${itemIdx === 0 ? `<td rowspan="${rowSpan}" class="cat-td">${sub.title}</td>` : ''}
                <td style="font-weight: 600;">${item.disease}</td>
                <td class="text-center"><span class="code">${item.code}</span></td>
              </tr>
            `).join('');
          }).join('')}
        </tbody>
      </table>
      <div class="notes">
        <strong>주)</strong><br/>
        1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.<br/>
        2. 제10차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.<br/>
        3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
      </div>
    `;
  }).join('')}

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'samsung_15_disease' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 11px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 13px; font-weight: 800; color: #ffffff; background: #123941; padding: 8px 12px; border-radius: 6px 6px 0 0; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 0px; font-size: 10.5px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 6px 10px; color: #334155; }
    .cat-td { font-weight: 800; background: #f8fafc; color: #0f172a; vertical-align: top; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; border-top: none; padding: 10px 12px; border-radius: 0 0 6px 6px; font-size: 10px; color: #475569; line-height: 1.5; margin-bottom: 16px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 12px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - 15대질병수술비 분류표 (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">상단요약분류표 및 하단세부분류표</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <!-- 상단요약분류표 -->
  <div class="sec-title">상단요약분류표</div>
  <div class="info-box">
    ⑦ 「15대질병」의 진단확정은 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관의 의사자격을 가진 자에 의한 진단서에 의합니다.
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">구분</th>
        <th style="width: 75%;">해당 질병</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_15_SURGERY_SECTIONS.map(sec => `
        <tr>
          <td class="cat-td">${sec.category}</td>
          <td style="font-weight: 600;">${sec.diseases.join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  <div class="notes">
    <strong>제5조 (수술의 정의와 장소)</strong><br/>
    ① 이 특별약관에서 「수술」이라 함은 병원 또는 의원의 의사의 면허를 가진 자(이하 「의사」라 합니다)에 의하여 「15대질병」으로 치료가 필요하다고 인정된 경우로서 자택 등에서의 치료가 곤란하여 의료법 제3조(의료기관)에 규정한 국내의 병원, 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리 하에 「15대질병」의 직접적인 치료를 목적으로 기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것을 말합니다.<br/>
    ② 제1항의 수술은 보건복지부 산하 신의료기술평가위원회(향후 제도변경 시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 술기법으로 생체에 절단, 절제 등의 조작을 가하는 것을 포함합니다.
  </div>

  <!-- 하단세부분류표 -->
  <div style="margin-top: 24px; font-size: 14px; font-weight: 800; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 6px; margin-bottom: 12px;">
    하단세부분류표
  </div>

  ${SAMSUNG_15_DISEASE_CODE_SECTIONS.map(cat => `
    <div class="sec-title">15대주요질병 분류표Ⅱ</div>
    <div class="info-box">
      약관에 규정하는 15대주요질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청 고시 제2015-309호, 2016. 1. 1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 질병의 해당 여부를 판단합니다.
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 28%;">구분</th>
          <th style="width: 52%;">분류항목</th>
          <th style="width: 20%; text-align: center;">분류번호</th>
        </tr>
      </thead>
      <tbody>
        ${cat.subsections.map(sub => {
          const rowSpan = sub.items.length;
          return sub.items.map((item, itemIdx) => `
            <tr>
              ${itemIdx === 0 ? `<td rowspan="${rowSpan}" class="cat-td">${sub.title}</td>` : ''}
              <td style="font-weight: 600;">${item.disease}</td>
              <td class="text-center"><span class="code">${item.code}</span></td>
            </tr>
          `).join('');
        }).join('')}
      </tbody>
    </table>
    <div class="notes">
      <strong>주)</strong><br/>
      1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.<br/>
      2. 제8차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.<br/>
      3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
    </div>
  `).join('')}

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'samsung_21' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 11px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 13px; font-weight: 800; color: #ffffff; background: #123941; padding: 8px 12px; border-radius: 6px 6px 0 0; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 0px; font-size: 10.5px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 6px 10px; color: #334155; }
    .cat-td { font-weight: 800; background: #f8fafc; color: #0f172a; vertical-align: top; }
    .text-center { text-align: center; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; border-top: none; padding: 10px 12px; border-radius: 0 0 6px 6px; font-size: 10px; color: #475569; line-height: 1.5; margin-bottom: 16px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 12px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${selectedInsurer.name} - 21대질병수술비 분류표 (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">상단요약분류표 및 하단세부분류표</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <!-- 상단요약분류표 -->
  <div class="sec-title">상단요약분류표</div>
  <div class="info-box">
    약관에 규정하는 21대생활질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청 고시 제2015-309호, 2016. 1. 1시행) 중 다음에 적은 질병을 말합니다.
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">구분</th>
        <th style="width: 75%;">해당 질병</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_21_SURGERY_SECTIONS.map(sec => `
        <tr>
          <td class="cat-td">${sec.category}</td>
          <td style="font-weight: 600;">${sec.diseases.join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <!-- 하단세부분류표 -->
  <div style="margin-top: 24px; font-size: 14px; font-weight: 800; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 6px; margin-bottom: 12px;">
    하단세부분류표 (21대생활질병)
  </div>

  ${SAMSUNG_21_DISEASE_CODE_SECTIONS.map(cat => `
    ${cat.subsections.map(sub => `
      <div class="sec-title">[21대생활질병] ${sub.title}</div>
      <table>
        <thead>
          <tr>
            <th style="width: 70%;">분류항목</th>
            <th style="width: 30%; text-align: center;">분류번호</th>
          </tr>
        </thead>
        <tbody>
          ${sub.items.map(item => `
            <tr>
              <td style="font-weight: 600;">${item.disease}</td>
              <td class="text-center"><span class="code">${item.code}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `).join('')}
  `).join('')}

  <div class="notes">
    <strong>주) 약관 적용기준</strong><br/>
    1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.<br/>
    2. 제7차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.<br/>
    3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'samsung_15' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 11px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .sec-title { font-size: 13px; font-weight: 800; color: #ffffff; background: #123941; padding: 8px 12px; border-radius: 6px 6px 0 0; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 0px; font-size: 10.5px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 6px 10px; color: #334155; }
    .cat-td { font-weight: 800; background: #f8fafc; color: #0f172a; vertical-align: top; }
    .text-center { text-align: center; }
    .badge { display: inline-block; background: #123941; color: #fff; font-weight: 800; padding: 2px 8px; border-radius: 4px; font-size: 10px; }
    .notes { background: #f8fafc; border: 1px solid #cbd5e1; border-top: none; padding: 10px 12px; border-radius: 0 0 6px 6px; font-size: 10px; color: #475569; line-height: 1.5; margin-bottom: 16px; }
    .rules-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.6; margin-top: 20px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 ${SAMSUNG_1_5_SURGERY_DATA.title} (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">${SAMSUNG_1_5_SURGERY_DATA.title}</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <!-- Section I -->
  <div class="sec-title">${SAMSUNG_1_5_SURGERY_DATA.section1.title}</div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">구분</th>
        <th style="width: 60%;">수술명</th>
        <th style="width: 15%; text-align: center;">수술종류</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_1_5_SURGERY_DATA.section1.categories.map((cat) => {
        const catRows = cat.items.reduce((acc, curr) => acc + 1 + (curr.subItems ? curr.subItems.length : 0), 0);
        return cat.items.map((item, itemIdx) => {
          return `
            <tr>
              ${itemIdx === 0 ? `<td rowspan="${catRows}" class="cat-td">${cat.category}${cat.subnote ? `<br/><span style="font-size:9px;font-weight:normal;color:#64748b;">${cat.subnote}</span>` : ''}</td>` : ''}
              <td style="font-weight: 600;">${item.num}. ${item.name}</td>
              <td class="text-center">${item.grade ? `<span class="badge">${item.grade}종</span>` : '-'}</td>
            </tr>
            ${item.subItems ? item.subItems.map((sub) => `
              <tr style="background:#f8fafc;">
                <td style="padding-left: 20px; color: #475569;">- ${sub.num}. ${sub.name}</td>
                <td class="text-center"><span class="badge" style="background:#64748b;">${sub.grade}종</span></td>
              </tr>
            `).join('') : ''}
          `;
        }).join('');
      }).join('')}
    </tbody>
  </table>
  <div class="notes">
    <strong>주)</strong><br/>
    ${SAMSUNG_1_5_SURGERY_DATA.section1.notes.join('<br/>')}
  </div>

  <!-- Section II -->
  <div class="sec-title">${SAMSUNG_1_5_SURGERY_DATA.section2.title}</div>
  <table>
    <thead>
      <tr>
        <th style="width: 85%;">수술명</th>
        <th style="width: 15%; text-align: center;">수술종류</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_1_5_SURGERY_DATA.section2.items.map((item) => `
        <tr>
          <td style="font-weight: 600;">${item.num}. ${item.name}</td>
          <td class="text-center"><span class="badge">${item.grade}종</span></td>
        </tr>
        ${item.subItems ? item.subItems.map((sub) => `
          <tr style="background:#f8fafc;">
            <td style="padding-left: 20px; color: #475569;">- ${sub.num}. ${sub.name}</td>
            <td class="text-center"><span class="badge" style="background:#64748b;">${sub.grade}종</span></td>
          </tr>
        `).join('') : ''}
      `).join('')}
    </tbody>
  </table>
  <div class="notes">
    <strong>주)</strong><br/>
    ${SAMSUNG_1_5_SURGERY_DATA.section2.notes.join('<br/>')}
  </div>

  <!-- Section III -->
  <div class="sec-title">${SAMSUNG_1_5_SURGERY_DATA.section3.title}</div>
  <table>
    <thead>
      <tr>
        <th style="width: 85%;">수술명</th>
        <th style="width: 15%; text-align: center;">수술종류</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_1_5_SURGERY_DATA.section3.items.map((item) => `
        <tr>
          <td style="font-weight: 600;">${item.num}. ${item.name}</td>
          <td class="text-center"><span class="badge">${item.grade}종</span></td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  <div class="notes">
    ${SAMSUNG_1_5_SURGERY_DATA.section3.notes.join('<br/>')}
  </div>

  <!-- Section IV Guidelines -->
  <div class="rules-box">
    <strong style="font-size: 12px; color: #123941;">${SAMSUNG_1_5_SURGERY_DATA.guidelines.title}</strong><br/><br/>
    ${SAMSUNG_1_5_SURGERY_DATA.guidelines.rules.map(r => `<p style="margin-top:4px;margin-bottom:6px;">${r.replace(/\n/g, '<br/>')}</p>`).join('')}
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'meritz_disease_integrated_treatment' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 질병통합치료비(${meritzDiseaseIntegratedTab === '20m' ? '2000만원' : meritzDiseaseIntegratedTab === '40m' ? '4000만원' : '7000만원'})</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 10.5px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 16px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #1e293b; color: #f1f5f9; border: 1px solid #0f172a; padding: 12px; border-radius: 8px; font-size: 9.5px; line-height: 1.6; margin-top: 16px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 메리츠화재 - 질병통합치료비(${meritzDiseaseIntegratedTab === '20m' ? '2000만원' : meritzDiseaseIntegratedTab === '40m' ? '4000만원' : '7000만원'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">메리츠화재 - 질병통합치료비(${meritzDiseaseIntegratedTab === '20m' ? '2000만원' : meritzDiseaseIntegratedTab === '40m' ? '4000만원' : '7000만원'})</h1>
      <div class="subtitle">2-134. 질병 통합치료비보장 특별약관</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[약관 및 보장 개요]</strong><br/>
    • 제1조(보험금의 지급사유): 회사는 피보험자가 특별약관의 보험기간 중 질병의 진단 및 치료를 위한 필요 소견을 토대로 질병 통합치료(검사/수술(1-5종)/주요치료)를 받은 경우 각 통합치료항목별 지급금액을 질병 통합치료비로 지급합니다.<br/>
    • 질병 통합치료비의 연간 총 지급액은 연간 지급된 지급금액의 합계액을 말하며, 보험가입금액을 한도로 합니다.<br/>
    • 「연간」이라 함은 계약일부터 매 1년 단위로 도래하는 계약해당일 전일까지의 기간을 말합니다.
  </div>

  <div class="sec-title">&lt;보험가입금액 ${meritzDiseaseIntegratedTab === '20m' ? '2000만원' : meritzDiseaseIntegratedTab === '40m' ? '4000만원' : '7000만원'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th style="width: 20%; text-align: center;">구분</th>
        <th style="width: 44%;">통합치료항목</th>
        <th style="width: 18%; text-align: center;">지급횟수</th>
        <th style="width: 18%; text-align: center; background: #e2e8f0;">지급금액</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.map((item) => {
        const amount = item[meritzDiseaseIntegratedTab];
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.count}</td>
            <td class="text-center highlight">${amount}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <!-- 전 유형 (2000만원 / 4000만원 / 7000만원) 종합 비교표 -->
  <div class="sec-title" style="background: #334155;">&lt;전 유형(2000만원 / 4000만원 / 7000만원) 보장금액 종합 비교표&gt;</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%; text-align: center;">구분</th>
        <th style="width: 40%;">통합치료항목</th>
        <th style="width: 15%; text-align: center;">지급횟수</th>
        <th style="text-align: center; width: 9%; ${meritzDiseaseIntegratedTab === '20m' ? 'background:#f0fdfa;color:#123941;font-weight:bold;' : 'background:#f1f5f9;'}">2000만원</th>
        <th style="text-align: center; width: 9%; ${meritzDiseaseIntegratedTab === '40m' ? 'background:#f0fdfa;color:#123941;font-weight:bold;' : 'background:#f1f5f9;'}">4000만원</th>
        <th style="text-align: center; width: 9%; ${meritzDiseaseIntegratedTab === '70m' ? 'background:#f0fdfa;color:#123941;font-weight:bold;' : 'background:#f1f5f9;'}">7000만원</th>
      </tr>
    </thead>
    <tbody>
      ${MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.count}</td>
          <td class="text-center" style="${meritzDiseaseIntegratedTab === '20m' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item['20m']}</td>
          <td class="text-center" style="${meritzDiseaseIntegratedTab === '40m' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item['40m']}</td>
          <td class="text-center" style="${meritzDiseaseIntegratedTab === '70m' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item['70m']}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong style="color: #fbbf24; font-size: 10.5px;">【제2조(보험금 지급에 관한 세부규정)】</strong><br/>
    ① 피보험자가 연간 1년 이내에 각각 다른 「MRI촬영(급여)」을 받은 경우에도 통합치료항목 중 MRI촬영(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.<br/>
    ② 피보험자가 연간 1년 이내에 각각 다른 「CT촬영(급여)」을 받은 경우에도 통합치료항목 중 CT촬영(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.<br/>
    ③ 피보험자가 연간 1년 이내에 각각 다른 「양전자단층촬영(PET)(급여)」을 받은 경우에도 통합치료항목 중 양전자단층촬영(PET)(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.<br/>
    ④ 피보험자가 연간 1년 이내에 각각 다른 「특정시술치료(흡인,천자,절개)(급여)」를 받은 경우에도 통합치료항목 중 특정시술치료(흡인,천자,절개)(급여)에 한하여 부위 및 횟수와 관계없이 1회의 질병 통합치료비만 지급합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'kb_integrated_treatment' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - 질병통합치료비(${kbIntegratedTab === 'practical' ? '실속형' : kbIntegratedTab === 'basic' ? '기본형' : '고급형'})</title>
  <style>
    @page { size: A4 portrait; margin: 10mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 10px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 18px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 10.5px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 6px; font-size: 10px; color: #334155; line-height: 1.5; margin-bottom: 14px; }
    .sec-title { font-size: 12px; font-weight: 800; color: #ffffff; background: #123941; padding: 7px 10px; border-radius: 6px 6px 0 0; margin-top: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 9.5px; margin-bottom: 16px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 800; text-align: left; padding: 6px 8px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #cbd5e1; padding: 5px 8px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background: #f0fdfa; }
    .notes { background: #1e293b; color: #f1f5f9; border: 1px solid #0f172a; padding: 12px; border-radius: 8px; font-size: 9.5px; line-height: 1.6; margin-top: 16px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 12px;">📄 KB손해보험 - 질병통합치료비(${kbIntegratedTab === 'practical' ? '실속형' : kbIntegratedTab === 'basic' ? '기본형' : '고급형'}) (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">KB손해보험 - 질병통합치료비(${kbIntegratedTab === 'practical' ? '실속형' : kbIntegratedTab === 'basic' ? '기본형' : '고급형'})</h1>
      <div class="subtitle">${
        kbIntegratedTab === 'practical' ? '237. 질병통합치료비(실속형)(맞춤고지) / 237-1. 질병통합치료비(실속형)(맞춤고지) 【갱신계약】'
        : kbIntegratedTab === 'basic' ? '238. 질병통합치료비(기본형)(맞춤고지) / 238-1. 질병통합치료비(기본형)(맞춤고지) 【갱신계약】'
        : '239. 질병통합치료비(고급형)(맞춤고지) / 239-1. 질병통합치료비(고급형)(맞춤고지) 【갱신계약】'
      }</div>
    </div>
    <div style="text-align: right; font-size: 10px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>(【갱신계약】은 자동갱신으로 운영합니다)</strong><br/>
    제1조(보험금의 지급사유): 회사는 피보험자가 특별약관의 보험기간 중 질병의 진단 및 치료를 위한 필요소견을 토대로 해당되는 의료행위를 받은 경우 보장항목별로 각각 정해진 지급금액을 지급합니다.
  </div>

  <div class="sec-title">&lt;${kbIntegratedTab === 'practical' ? '실속형' : kbIntegratedTab === 'basic' ? '기본형' : '고급형'}&gt; 보장항목 및 지급금액 표</div>
  <table>
    <thead>
      <tr>
        <th rowSpan="2" style="width: 22%; text-align: center;">구분</th>
        <th rowSpan="2" style="width: 28%;">보장항목</th>
        <th rowSpan="2" style="width: 14%; text-align: center;">지급방식</th>
        <th colSpan="3" style="text-align: center; background: #e2e8f0;">지급금액</th>
      </tr>
      <tr>
        <th style="width: 12%; text-align: center;">최초의 계약<br/>1년미만</th>
        <th style="width: 12%; text-align: center;">최초의 계약<br/>1년이상</th>
        <th style="width: 12%; text-align: center;">갱신된 계약</th>
      </tr>
    </thead>
    <tbody>
      ${KB_INTEGRATED_TREATMENT_ITEMS.map((item) => {
        const amounts = item[kbIntegratedTab] || item.practical;
        return `
          <tr>
            <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
            <td class="font-black" style="color: #0f172a;">${item.name}</td>
            <td class="text-center font-bold" style="color: #475569;">${item.method}</td>
            <td class="text-center font-bold">${amounts.under1yr}</td>
            <td class="text-center highlight">${amounts.over1yr}</td>
            <td class="text-center highlight">${amounts.renew}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <!-- 전 유형 (실속형 / 기본형 / 고급형) 종합 비교표 -->
  <div class="sec-title" style="background: #334155;">&lt;전 유형(실속형 / 기본형 / 고급형) 보장금액 종합 비교표&gt;</div>
  <table>
    <thead>
      <tr>
        <th rowSpan="2" style="width: 20%; text-align: center;">구분</th>
        <th rowSpan="2" style="width: 26%;">보장항목</th>
        <th rowSpan="2" style="width: 12%; text-align: center;">지급방식</th>
        <th style="text-align: center; background: #f1f5f9;" colSpan="1">실속형</th>
        <th style="text-align: center; background: #f1f5f9;" colSpan="1">기본형</th>
        <th style="text-align: center; background: #f1f5f9;" colSpan="1">고급형</th>
      </tr>
      <tr>
        <th style="text-align: center;">1년이상 (1년미만/갱신)</th>
        <th style="text-align: center;">1년이상 (1년미만/갱신)</th>
        <th style="text-align: center;">1년이상 (1년미만/갱신)</th>
      </tr>
    </thead>
    <tbody>
      ${KB_INTEGRATED_TREATMENT_ITEMS.map((item) => `
        <tr>
          <td class="text-center font-bold" style="background: #f8fafc;">${item.category}</td>
          <td class="font-black">${item.name}</td>
          <td class="text-center">${item.method}</td>
          <td class="text-center" style="${kbIntegratedTab === 'practical' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item.practical.over1yr} (${item.practical.under1yr} / ${item.practical.renew})</td>
          <td class="text-center" style="${kbIntegratedTab === 'basic' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item.basic.over1yr} (${item.basic.under1yr} / ${item.basic.renew})</td>
          <td class="text-center" style="${kbIntegratedTab === 'luxury' ? 'background:#f0fdfa;font-weight:bold;color:#123941;' : ''}">${item.luxury.over1yr} (${item.luxury.under1yr} / ${item.luxury.renew})</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong style="color: #fbbf24; font-size: 10.5px;">【제2조(보험금 지급에 관한 세부규정)】</strong><br/>
    1. "질병통합치료(수술)"의 경우 회사는 피보험자가 동시에 두 종류 이상의 질병수술을 받은 경우에는 그 수술 중 가장 높은 지급금액에 해당하는 한 종류의 수술에 대하여만 보장합니다.<br/>
    2. 동일한 신체부위라 함은 각각 눈, 귀, 코, 씹어먹거나 말하는 기능과 관련된 신체부위, 머리, 목, 척추(등뼈), 체간골, 흉부장기·복부장기·비뇨생식기, 팔, 다리, 손가락, 발가락을 말하며, 눈, 귀, 팔, 다리는 좌·우를 각각 다른 신체부위로 봅니다.<br/>
    3. 피보험자가 연간 1년 이내에 각각 다른 "질병특정시술치료(도수정복술)" / "질병특정시술치료(기타시술)" / "질병특정시술치료(단순창상봉합술)" 등을 받은 경우에도 부위 및 횟수와 관계없이 보장항목별로 연간 1회만 지급합니다.<br/>
    4. 지속적신대체요법(CRRT), 인공호흡기(12시간초과)치료, 저체온요법치료, 종합병원 전신마취치료(6시간이상) 등을 받은 경우에도 각 보장항목별 부위 및 횟수와 관계없이 규정에 따라 지급합니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : activeSubTab === 'samsung_major_cancer' ? `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 12px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 20px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .info-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 11px; line-height: 1.6; color: #334155; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 11px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #123941; color: #ffffff; font-weight: 800; text-align: left; padding: 10px 12px; border: 1px solid #123941; }
    td { border: 1px solid #cbd5e1; padding: 8px 12px; color: #334155; }
    .main-row { background: #f8fafc; font-weight: 800; color: #123941; }
    .sub-row { color: #475569; }
    .text-center { text-align: center; }
    .badge { display: inline-block; background: #123941; color: #fff; font-weight: 800; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    .notes { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; font-size: 11px; color: #475569; line-height: 1.6; margin-top: 16px; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 20px; padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 13px;">📄 [별표-질병관련7] 10대 주요암 분류표 (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 8px 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">[별표-질병관련7] 10대 주요암 분류표</div>
    </div>
    <div style="text-align: right; font-size: 11px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  <div class="info-box">
    <strong>[별표-질병관련7] 10대 주요암 분류표 적용 안내</strong><br/>
    약관에 규정하는 10대 주요암으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026. 1. 1 시행) 중 다음에 적은 질병을 말하며, 이후 한국표준질병·사인분류가 개정되는 경우는 개정된 기준에 따라 이 약관에서 보장하는 질병의 해당 여부를 판단합니다.
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 70%;">분류항목</th>
        <th style="width: 30%; text-align: center;">분류번호</th>
      </tr>
    </thead>
    <tbody>
      ${SAMSUNG_MAJOR_CANCER_SECTIONS.map((item) => `
        <tr class="main-row">
          <td>${item.num}. ${item.disease}</td>
          <td class="text-center"><span class="badge">${item.code}</span></td>
        </tr>
        ${item.subItems ? item.subItems.map((sub) => `
          <tr class="sub-row">
            <td style="padding-left: 28px;">- ${sub.disease}</td>
            <td class="text-center"><span class="code">${sub.code}</span></td>
          </tr>
        `).join('') : ''}
      `).join('')}
    </tbody>
  </table>

  <div class="notes">
    <strong>주)</strong><br/>
    1. 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 한국표준질병·사인분류의 기준에 따라 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다. 단, 보통약관 및 특별약관에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다.<br/>
    2. 제10차 개정 이후 이 약관에서 보장하는 질병의 해당 여부는 피보험자가 진단된 당시 시행되고 있는 한국표준질병·사인분류에 따라 판단합니다.<br/>
    3. 진단 당시의 한국표준질병·사인분류에 따라 이 약관에서 보장하는 질병에 대한 보험금 지급 여부가 판단된 경우, 이후 한국표준질병·사인분류 개정으로 질병분류가 변경되더라도 이 약관에서 보장하는 질병 해당 여부를 다시 판단하지 않습니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>` : `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${selectedInsurer.name} - ${title} 약관 분류표</title>
  <style>
    @page { size: A4; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 12px; background: #fff; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 20px; font-weight: 800; color: #123941; margin: 0; }
    .subtitle { font-size: 12px; color: #64748b; font-weight: 600; margin-top: 4px; }
    .section-title { font-size: 14px; font-weight: 800; color: #123941; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 12px; border-radius: 6px; margin-top: 24px; margin-bottom: 12px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 11px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background: #f8fafc; color: #123941; font-weight: 800; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; }
    td { border: 1px solid #e2e8f0; padding: 7px 10px; color: #334155; }
    .text-center { text-align: center; }
    .badge { display: inline-block; background: #123941; color: #fff; font-weight: 800; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
    .code { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 700; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1; color: #123941; text-align: center; line-height: 1.25; vertical-align: middle; min-width: 44px; box-sizing: border-box; white-space: nowrap; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 20px; padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; color: #123941; font-size: 13px;">📄 약관 세부 질병 분류표 / KCD 코드 (인쇄 및 PDF 저장용)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 8px 16px; font-weight: bold; border-radius: 6px; cursor: pointer;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">${selectedInsurer.name} - ${title}</h1>
      <div class="subtitle">약관 세부 질병 분류표 및 KCD 질병코드 요약집</div>
    </div>
    <div style="text-align: right; font-size: 11px; color: #64748b;">
      발급일: ${new Date().toLocaleDateString('ko-KR')}
    </div>
  </div>

  ${summariesList && summariesList.length > 0 ? `
  <div class="section-title">📌 [상단 요약 분류표]</div>
  <table>
    <thead>
      <tr>
        <th style="width: 160px; text-align: center;">구 분</th>
        <th>해당 질병 / 주요 보장 분류</th>
      </tr>
    </thead>
    <tbody>
      ${summariesList.map((sec: any, idx: number) => {
        let categoryLabel = sec.category;
        if (!categoryLabel) {
          if (sec.group && sec.title && sec.group !== sec.title) {
            categoryLabel = `${sec.group} (${sec.title})`;
          } else {
            categoryLabel = sec.title || sec.group || sec.name || `그룹 ${idx + 1}`;
          }
        }

        let diseasesList: string[] = [];
        if (Array.isArray(sec.diseases)) {
          diseasesList = sec.diseases;
        } else if (typeof sec.diseases === 'string') {
          diseasesList = sec.diseases.split(',').map((s: string) => s.trim()).filter(Boolean);
        } else if (Array.isArray(sec.items)) {
          diseasesList = sec.items.map((i: any) => i.disease || i.name || '').filter(Boolean);
        } else if (sec.title && sec.group && sec.title !== sec.group) {
          diseasesList = [sec.title];
        } else if (sec.title && sec.title !== categoryLabel) {
          diseasesList = [sec.title];
        } else if (sec.name) {
          diseasesList = [sec.name];
        }

        const diseasesText = diseasesList.length > 0 ? diseasesList.join(', ') : '-';

        return `<tr>
          <td class="text-center" style="font-weight: bold; background: #f8fafc; vertical-align: top; width: 160px;">${categoryLabel}</td>
          <td style="font-weight: bold; color: #0f172a; line-height: 1.5; white-space: pre-wrap;">${diseasesText}</td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>
  ` : ''}

  <div class="section-title">📋 [하단 세부 분류표] (세부 질병명 및 KCD 분류번호)</div>
  ${(sectionsList || []).map((sec: any, idx: number) => {
    const itemList = sec.items || sec.diseases || [];
    let groupBadge = sec.group || '';
    let displayTitle = sec.title || sec.category || '구분';

    if (!groupBadge && displayTitle.startsWith('[')) {
      const match = displayTitle.match(/^\[(.*?)\]\s*(.*)$/);
      if (match) {
        groupBadge = match[1];
        displayTitle = match[2];
      }
    }

    return `
    <div style="margin-top: 16px; margin-bottom: 8px; font-weight: 800; font-size: 13px; color: #0f172a; display: flex; align-items: center; gap: 8px;">
      ${groupBadge ? `<span class="badge">${groupBadge}</span>` : `<span class="badge" style="background:#64748b;">#${idx+1}</span>`}
      <span>${displayTitle}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 70%;">질병명 / 보장대상 분류</th>
          <th style="width: 30%; text-align: center;">KCD 질병코드</th>
        </tr>
      </thead>
      <tbody>
        ${itemList.map((item: any) => {
          const isObj = typeof item === 'object' && item !== null;
          const diseaseName = isObj ? (item.disease || item.name) : item;
          const diseaseCode = isObj ? (item.code || '-') : '-';
          let rows = `<tr>
            <td style="font-weight: 600; white-space: pre-wrap;">${diseaseName}</td>
            <td class="text-center">${diseaseCode !== '-' ? `<span class="code">${diseaseCode}</span>` : '-'}</td>
          </tr>`;
          if (isObj && item.subItems && Array.isArray(item.subItems)) {
            rows += item.subItems.map((sub: any) => `
              <tr style="background: #f8fafc;">
                <td style="font-weight: 500; padding-left: 24px; font-size: 10.5px; color: #334155;">- ${sub.disease || sub.name}</td>
                <td class="text-center">${sub.code ? `<span class="code" style="font-size: 10px;">${sub.code}</span>` : '-'}</td>
              </tr>
            `).join('');
          }
          return rows;
        }).join('')}
      </tbody>
    </table>
    ${sec.notes && Array.isArray(sec.notes) && sec.notes.length > 0 ? `
      <div style="margin-top: -10px; margin-bottom: 16px; padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 10.5px; color: #475569;">
        ${sec.notes.map((n: string) => `<div><strong>주)</strong> ${n}</div>`).join('')}
      </div>
    ` : ''}
    `;
  }).join('')}

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

    // Generate and download true PDF file binary
    try {
      setIsGeneratingPdf(true);
      await downloadPdfFromHtml(htmlContent, filename);
    } catch (e) {
      console.error('PDF generation failed:', e);
      try {
        const printWin = window.open('', '_blank');
        if (printWin) {
          printWin.document.write(htmlContent);
          printWin.document.close();
        } else {
          window.print();
        }
      } catch (printErr) {
        console.error('Fallback print failed:', printErr);
      }
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Main Return for TermsMaster
  const currentSections = (() => {
    switch (selectedInsurer.id) {
      case 'meritz-fire':
        if (activeSubTab === 'meritz_integrated_cancer') return MERITZ_INTEGRATED_CANCER_SECTIONS;
        if (activeSubTab === 'meritz_integrated_cancer_metastasis') return MERITZ_INTEGRATED_CANCER_METASTASIS_SECTIONS;
        if (activeSubTab === 'meritz_integrated_treatment') return MERITZ_INTEGRATED_TREATMENT_SECTIONS;
        if (activeSubTab === 'meritz_practical_treatment') return MERITZ_PRACTICAL_TREATMENT_SECTIONS;
        if (activeSubTab === 'meritz_noncovered_treatment') return MERITZ_NONCOVERED_TREATMENT_SECTIONS;
        if (activeSubTab === 'meritz_noncovered_primary_treatment') return MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS;
        if (activeSubTab === 'meritz_disease_integrated_treatment') return MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS;
        if (activeSubTab === 'meritz_surgery1_5') return MERITZ_SURGERY1_5_SECTIONS;
        if (activeSubTab === 'meritz_7diseases') return MERITZ_7_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_18diseases') return MERITZ_18_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_30diseases') return MERITZ_30_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_32diseases') return MERITZ_32_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_64diseases') return MERITZ_64_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_82diseases') return MERITZ_82_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_131diseases') return MERITZ_131_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_6heart') return MERITZ_6HEART_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_5diseases' || activeSubTab === 'meritz_5diseases_surgery') return MERITZ_5_DISEASES_SECTIONS;
        if (activeSubTab === 'meritz_integrated_cancer_standard') return MERITZ_INTEGRATED_CANCER_SECTIONS;
        return MERITZ_INTEGRATED_CANCER_SECTIONS;
      case 'samsung-fire':
        if (activeSubTab === 'samsung_cancer') return SAMSUNG_CANCER_SECTIONS;
        if (activeSubTab === 'samsung_major_cancer') return SAMSUNG_MAJOR_CANCER_SECTIONS;
        if (activeSubTab === 'samsung_111') return SAMSUNG_111_SURGERY_SECTIONS;
        if (activeSubTab === 'samsung_15_disease') return SAMSUNG_15_SURGERY_SECTIONS;
        if (activeSubTab === 'samsung_15') return SAMSUNG_15_SURGERY_SECTIONS;
        if (activeSubTab === 'samsung_21') return SAMSUNG_21_SURGERY_SECTIONS;
        return SAMSUNG_CANCER_SECTIONS;
      case 'kb-ins':
        if (activeSubTab === 'kb_cancer') return KB_CANCER_SECTIONS;
        if (activeSubTab === 'kb_cancer_metastasis') return KB_CANCER_METASTASIS_SECTIONS;
        if (activeSubTab === 'kb_metastasis') return KB_METASTASIS_SECTIONS;
        if (activeSubTab === 'kb_specific_cancer2') return KB_SPECIFIC_CANCER2_SECTIONS;
        if (activeSubTab === 'kb_10high_cancer') return KB_10HIGH_CANCER_SECTIONS;
        if (activeSubTab === 'kb_brain') return KB_BRAIN_SECTIONS;
        if (activeSubTab === 'kb_heart_1') return KB_HEART_SPECIFIC1_SECTIONS;
        if (activeSubTab === 'kb_heart_2') return KB_HEART_SPECIFIC2_SECTIONS;
        if (activeSubTab === 'kb_surgery1_5') return KB_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'kb_integrated_treatment') return KB_INTEGRATED_TREATMENT_SECTIONS;
        if (activeSubTab === 'kb_surgery14') return KB_SURGERY_14_SECTIONS;
        if (activeSubTab === 'kb_surgery16') return KB_SURGERY_16_SECTIONS;
        if (activeSubTab === 'kb_surgery20') return KB_SURGERY_20_SECTIONS;
        if (activeSubTab === 'kb_surgery21') return KB_SURGERY_21_SECTIONS;
        if (activeSubTab === 'kb_surgery101') return KB_SURGERY_101_SECTIONS;
        if (activeSubTab === 'kb_surgery112') return KB_SURGERY_112_SECTIONS;
        if (activeSubTab === 'kb_surgery116') return KB_SURGERY_116_SECTIONS;
        return KB_CANCER_SECTIONS;
      case 'hanwha-general':
        if (activeSubTab === 'hanwha_integrated_cancer') return HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS;
        if (activeSubTab === 'hanwha_integrated_cancer_primary') return HANWHA_WOMEN_PRIMARY_CANCER_SECTIONS;
        if (activeSubTab === 'hanwha_integrated_metastatic_cancer') return HANWHA_WOMEN_METASTATIC_CANCER_SECTIONS;
        if (activeSubTab === 'hanwha_integrated_heart_1') return HANWHA_HEART_1_SECTIONS;
        if (activeSubTab === 'hanwha_integrated_heart_2') return HANWHA_HEART_2_SECTIONS;
        if (activeSubTab === 'hanwha_cardiovascular_5') {
          if (hanwhaCardio5Tab === 'tab1') return HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB1;
          if (hanwhaCardio5Tab === 'tab2') return HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB2;
          if (hanwhaCardio5Tab === 'tab3') return HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB3;
          if (hanwhaCardio5Tab === 'tab4') return HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB4;
          if (hanwhaCardio5Tab === 'tab5') return HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB5;
          return HANWHA_CARDIOVASCULAR_5_ALL_SECTIONS;
        }
        if (activeSubTab === 'hanwha_integrated_brain') return HANWHA_INTEGRATED_BRAIN_SECTIONS;
        if (activeSubTab === 'hanwha_integrated_treatment') return HANWHA_INTEGRATED_TREATMENT_SECTIONS;
        if (activeSubTab === 'hanwha_injury_integrated_treatment') return HANWHA_INJURY_INTEGRATED_TREATMENT_SECTIONS;
        if (activeSubTab === 'hanwha_surgery1_5') return HANWHA_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'hanwha_women_life_1_5') return HANWHA_WOMEN_LIFE_1_5_SECTIONS;
        if (activeSubTab === 'hanwha_women_major_life_1_5') return HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS;
        if (activeSubTab === 'hanwha_124diseases') return HANWHA_124_DISEASES_SECTIONS;
        if (activeSubTab === 'hanwha_34diseases') return HANWHA_34_DISEASES_SECTIONS;
        if (activeSubTab === 'hanwha_56diseases') return HANWHA_56_DISEASES_SECTIONS;
        if (activeSubTab === 'hanwha_18diseases') return HANWHA_18_DISEASES_SECTIONS;
        if (activeSubTab === 'hanwha_16diseases') return HANWHA_16_DISEASES_SECTIONS;
        if (activeSubTab === 'hanwha_14diseases') return HANWHA_14_DISEASES_SECTIONS;
        return HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS;
      case 'lotte-ins':
        if (activeSubTab === 'lotte_integrated_cancer') return LOTTE_INTEGRATED_CANCER_SECTIONS;
        if (activeSubTab === 'lotte_integrated_cancer_with_metastasis') return LOTTE_INTEGRATED_CANCER_WITH_METASTASIS_SECTIONS;
        if (activeSubTab === 'lotte_integrated_metastatic_cancer') return LOTTE_INTEGRATED_METASTATIC_CANCER_SECTIONS;
        if (activeSubTab === 'lotte_high_cancer') return LOTTE_HIGH_CANCER_SECTIONS;
        if (activeSubTab === 'lotte_brain_disease') return LOTTE_BRAIN_DISEASE_SECTIONS;
        if (activeSubTab === 'lotte_cardiovascular_simple') {
          return lotteCardiovascularSimpleTab === 'I'
            ? LOTTE_CARDIOVASCULAR_SIMPLE_I_SECTIONS
            : lotteCardiovascularSimpleTab === 'II'
            ? LOTTE_CARDIOVASCULAR_SIMPLE_II_SECTIONS
            : LOTTE_CARDIOVASCULAR_SIMPLE_15_SECTIONS;
        }
        if (activeSubTab === 'lotte_cardiovascular') return LOTTE_CARDIOVASCULAR_SECTIONS;
        if (activeSubTab === 'lotte_surgery1_5') return LOTTE_SURGERY1_5_SECTIONS;
        if (activeSubTab === 'lotte_surgery7') return LOTTE_SURGERY_7_SECTIONS;
        if (activeSubTab === 'lotte_surgery16') return LOTTE_SURGERY_16_SECTIONS;
        if (activeSubTab === 'lotte_surgery18') return LOTTE_SURGERY_18_SECTIONS;
        if (activeSubTab === 'lotte_surgery20') return LOTTE_SURGERY_20_SECTIONS;
        if (activeSubTab === 'lotte_surgery34') return LOTTE_SURGERY_34_SECTIONS;
        if (activeSubTab === 'lotte_surgery64') return LOTTE_SURGERY_64_SECTIONS;
        if (activeSubTab === 'lotte_surgery142') return LOTTE_SURGERY_142_SECTIONS;
        return LOTTE_INTEGRATED_CANCER_SECTIONS;
      case 'hyundai-marine':
        if (activeSubTab === 'hyundai_male_cancer') return HYUNDAI_MALE_CANCER_SECTIONS;
        if (activeSubTab === 'hyundai_female_cancer') return HYUNDAI_FEMALE_CANCER_SECTIONS;
        if (activeSubTab === 'hyundai_specific_cancer') return HYUNDAI_SPECIFIC_CANCER_SECTIONS;
        if (activeSubTab === 'hyundai_heart') return HYUNDAI_HEART_SECTIONS;
        if (activeSubTab === 'hyundai_brain') return hyundaiBrainSubTab === '1' ? HYUNDAI_BRAIN_I_SECTIONS : HYUNDAI_BRAIN_II_SECTIONS;
        if (activeSubTab === 'hyundai_surgery1_5') return HYUNDAI_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'hyundai_7diseases') return HYUNDAI_7_DISEASES_SECTIONS;
        if (activeSubTab === 'hyundai_14diseases') return HYUNDAI_14_DISEASES_SECTIONS;
        if (activeSubTab === 'hyundai_16diseases') return HYUNDAI_16_DISEASES_SECTIONS;
        if (activeSubTab === 'hyundai_71diseases') return HYUNDAI_71_DISEASES_SECTIONS;
        if (activeSubTab === 'hyundai_120diseases') return HYUNDAI_120_DISEASES_SECTIONS;
        return HYUNDAI_MALE_CANCER_SECTIONS;
      case 'hana-ins':
        if (activeSubTab === 'hana_integrated_cancer') return HANA_INTEGRATED_CANCER_SECTIONS;
        if (activeSubTab === 'hana_high_cost_cancer') return HANA_HIGH_COST_CANCER_SECTIONS;
        if (activeSubTab === 'hana_11_specific_cancer') return HANA_11_SPECIFIC_CANCER_SECTIONS;
        if (activeSubTab === 'hana_brain_disease') return HANA_BRAIN_DISEASE_SECTIONS;
        if (activeSubTab === 'hana_integrated_heart') return HANA_INTEGRATED_HEART_SECTIONS;
        if (activeSubTab === 'hana_women_16_diseases') return HANA_WOMEN_16_DISEASES_SECTIONS;
        if (activeSubTab === 'hana_surgery1_5') return HANA_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'hana_surgery73') return HANA_SURGERY_73_SECTIONS;
        if (activeSubTab === 'hana_surgery136') return HANA_SURGERY_136_SECTIONS;
        return HANA_INTEGRATED_CANCER_SECTIONS;
      case 'nh-fire':
        if (activeSubTab === 'nh_cancer') return NH_CANCER_SECTIONS;
        if (activeSubTab === 'nh_cancer_metastasis') return NH_CANCER_METASTASIS_SECTIONS;
        if (activeSubTab === 'nh_5specific_cancer') return NH_5SPECIFIC_CANCER_SECTIONS;
        if (activeSubTab === 'nh_cardiovascular_4') {
          if (nhCardio4Tab === 'tab1') return NH_CARDIOVASCULAR_4_SECTIONS_TAB1;
          if (nhCardio4Tab === 'tab2') return NH_CARDIOVASCULAR_4_SECTIONS_TAB2;
          if (nhCardio4Tab === 'tab3') return NH_CARDIOVASCULAR_4_SECTIONS_TAB3;
          if (nhCardio4Tab === 'tab4') return NH_CARDIOVASCULAR_4_SECTIONS_TAB4;
          return NH_CARDIOVASCULAR_4_SECTIONS_TAB1;
        }
        if (activeSubTab === 'nh_circulatory_1_5') return NH_CIRCULATORY_1_5_SECTIONS;
        if (activeSubTab === 'nh_surgery1_5') return NH_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'nh_surgery16') return NH_SURGERY_16_SECTIONS;
        if (activeSubTab === 'nh_surgery34') return NH_SURGERY_34_SECTIONS;
        if (activeSubTab === 'nh_surgery71') return NH_SURGERY_71_SECTIONS;
        if (activeSubTab === 'nh_surgery144') return NH_SURGERY_144_SECTIONS;
        return NH_CANCER_SECTIONS;
      default:
        if (activeSubTab === 'cancer') return DB_CANCER_SECTIONS;
        if (activeSubTab === 'db_cancer_metastasis') return DB_CANCER_METASTASIS_SECTIONS;
        if (activeSubTab === 'db_11_specific_cancer') return DB_11_SPECIFIC_CANCER_SECTIONS;
        if (activeSubTab === 'db_high_cost_cancer') return DB_HIGH_COST_CANCER_SECTIONS;
        if (activeSubTab === 'db_integrated_heart') return dbHeartTab === 'I' ? DB_HEART_I_SECTIONS : DB_HEART_II_SECTIONS;
        if (activeSubTab === 'db_heart_1') return DB_HEART_I_SECTIONS;
        if (activeSubTab === 'db_heart_2') return DB_HEART_II_SECTIONS;
        if (activeSubTab === 'db_heart_simple') return DB_HEART_SIMPLE_SECTIONS;
        if (activeSubTab === 'db_integrated_brain') return dbBrainTab === 'I' ? DB_BRAIN_I_SECTIONS : DB_BRAIN_II_SECTIONS;
        if (activeSubTab === 'db_brain_1') return DB_BRAIN_I_SECTIONS;
        if (activeSubTab === 'db_brain_2') return DB_BRAIN_II_SECTIONS;
        if (activeSubTab === 'db_major_5vascular_brain') return DB_MAJOR_5VASCULAR_BRAIN_SECTIONS;
        if (activeSubTab === 'surgery1_5') return DB_SURGERY_1_5_SECTIONS;
        if (activeSubTab === 'surgery1_5_old') return DB_SURGERY_1_5_OLD_SECTIONS;
        if (activeSubTab === 'surgery13') return DB_SURGERY_13_SECTIONS;
        if (activeSubTab === 'surgery16') return DB_SURGERY_16_SECTIONS;
        if (activeSubTab === 'surgery18') return DB_SURGERY_18_SECTIONS;
        if (activeSubTab === 'surgery21') return DB_SURGERY_21_SECTIONS;
        if (activeSubTab === 'surgery40') return DB_SURGERY_40_SECTIONS;
        if (activeSubTab === 'surgery77') return DB_SURGERY_77_SECTIONS;
        if (activeSubTab === 'surgery106') return DB_SURGERY_106_SECTIONS;
        if (activeSubTab === 'surgery119') return DB_SURGERY_119_SECTIONS;
        if (activeSubTab === 'surgery120') return DB_SURGERY_120_SECTIONS;
        return DB_CANCER_SECTIONS;
    }
  })();

  const query = normalizeString(detailFilter);
  const filteredCurrentSections = (currentSections || []).filter((sec: any) => {
    if (!query) return true;
    const titleMatch = normalizeString(sec.title || sec.category || sec.group || '').includes(query);
    const itemList = sec.items || sec.diseases || [];
    const itemMatch = itemList.some((i: any) => {
      if (typeof i === 'string') return normalizeString(i).includes(query);
      const directMatch = (
        normalizeString(i.disease || i.name || '').includes(query) ||
        normalizeString(i.code || '').includes(query) ||
        normalizeString(i.num || '').includes(query) ||
        normalizeString(i.grade || '').includes(query)
      );
      if (directMatch) return true;
      if (i.subItems && Array.isArray(i.subItems)) {
        return i.subItems.some((s: any) =>
          typeof s === 'string'
            ? normalizeString(s).includes(query)
            : (
              normalizeString(s.disease || s.name || '').includes(query) ||
              normalizeString(s.code || '').includes(query)
            )
        );
      }
      return false;
    });
    // For surgery1_5_old, also check if query matches top coverage text or comparison table text
    let topMatch = false;
    if (activeSubTab === 'surgery1_5_old' || activeSubTab === 'surgery1_5') {
      const topSearchText = normalizeString(
        "MRI 검사 PET 검사 CT 검사 1-5종수술비 전신마취수술 6시간이상 유방절단수술 세분화 Mastectomy 유방의 비대 N62 주석 예외사항 요실금 치핵 치루"
      );
      if (topSearchText.includes(query)) topMatch = true;
    }
    return titleMatch || itemMatch || topMatch;
  });

  const availableSubtabs = INSURER_SUBTABS[selectedInsurer.id] || [];
  const activeSubtabObj = availableSubtabs.find(st => st.id === activeSubTab);
  const currentSubtabLabel = activeSubtabObj ? activeSubtabObj.label : '';

  const selectedTheme = getInsurerTheme(selectedInsurer.id);
  const selectedLogoText = getLogoText(selectedInsurer.name);
  const selectedPhone = INSURER_PHONE_MAP[selectedInsurer.id] || '1588-0000';

  return (
    <div className="space-y-6">
      {/* Top Banner & Ad Zone */}
      <div className="space-y-4">
        <div className="relative bg-[#123941] p-6 sm:p-7 rounded-2xl border border-slate-900 shadow-md overflow-hidden text-white">
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight break-keep leading-tight">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 inline-block mr-2 align-text-bottom shrink-0" />
              보험사별 <span className="text-amber-400">담보 분류표</span>를 제공합니다.
            </h1>
            <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
              보험사별 암/뇌/심장/수술비 등 <span className="text-amber-400 font-bold">담보별 분류표</span>, <span className="text-amber-400 font-bold">세부질병코드</span>를 열람 및 다운로드 하실 수 있습니다.
            </p>
          </div>
        </div>

        <AdZone type="header" id="terms-header-ad" />
      </div>

      {/* Grid Layout: Left Column (Insurer List) & Right Column (Selected Insurer Details & Tables) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Insurer Search & Card Selector (5 Grid Span) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4 shadow-2xs h-fit">
          {/* Search Input Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="보험사명 검색 (예: 삼성, 현대, DB)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#123941] focus:border-[#123941] bg-slate-50/80 text-slate-900 transition-colors placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Type Filter Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 text-center py-2 text-xs font-bold transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#123941] text-white shadow-2xs font-black'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              전체 ({INSURER_TERMS_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`flex-1 text-center py-2 text-xs font-bold transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'property'
                  ? 'bg-[#123941] text-white shadow-2xs font-black'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              손해보험
            </button>
            <button
              onClick={() => setActiveTab('life')}
              className={`flex-1 text-center py-2 text-xs font-bold transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'life'
                  ? 'bg-[#123941] text-white shadow-2xs font-black'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              생명보험
            </button>
          </div>

          {/* Scrollable Insurer Cards List */}
          <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
            {filteredInsurers.length > 0 ? (
              filteredInsurers.map((insurer) => {
                const isSelected = selectedInsurer.id === insurer.id;
                const theme = getInsurerTheme(insurer.id);
                const logoText = getLogoText(insurer.name);
                const phone = INSURER_PHONE_MAP[insurer.id] || '1588-0000';

                return (
                  <button
                    key={insurer.id}
                    onClick={() => {
                      setSelectedInsurer(insurer);
                      const subtabs = INSURER_SUBTABS[insurer.id];
                      const defaultTab = insurer.defaultSubTab || (subtabs ? subtabs[0].id : null);
                      setActiveSubTab(defaultTab);
                      setDetailFilter('');
                      localStorage.setItem('ib_terms_selected_insurer_id', insurer.id);
                      if (typeof window !== 'undefined') {
                        const targetUrl = defaultTab ? `/terms/${insurer.id}/${defaultTab}/` : `/terms/${insurer.id}/`;
                        window.history.pushState(null, '', targetUrl);
                      }
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'border-amber-300 bg-amber-50/40 text-[#123941] font-bold shadow-xs ring-1 ring-amber-300/60'
                        : 'border-slate-200/80 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div
                        className={`w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center shrink-0 border border-slate-200/60 shadow-2xs ${theme.logoColor}`}
                      >
                        {logoText}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold flex items-center gap-1.5 text-[#123941]">
                          {insurer.name}
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border uppercase ${
                              isSelected
                                ? 'border-amber-300/80 bg-white text-[#123941]'
                                : 'border-slate-200 bg-slate-50 text-slate-500'
                            }`}
                          >
                            {insurer.type === 'property' ? '손해' : '생명'}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className={`text-xs font-bold transition-all ${isSelected ? 'text-[#123941] flex items-center gap-1' : 'text-slate-400 group-hover:text-[#123941] group-hover:translate-x-0.5'}`}>
                      {isSelected ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-[#123941] inline-block animate-pulse"></span>
                          <span>선택됨</span>
                        </>
                      ) : (
                        '상세보기 →'
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-xs text-slate-500 font-bold">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Selected Insurer Details, Subtabs & Main Content (7 Grid Span) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Subtabs for Selected Insurer */}
          {availableSubtabs.length > 0 && (
            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#123941]" />
                  <h3 className="text-xs font-black text-slate-800">
                    {selectedInsurer.name} 담보별 약관 분류 선택
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-slate-500">
                  {availableSubtabs.length}개 담보 분류
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {availableSubtabs.map((st) => {
                  const isSubActive = activeSubTab === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => {
                        setActiveSubTab(st.id);
                        setDetailFilter('');
                        if (typeof window !== 'undefined') {
                          window.history.pushState(null, '', `/terms/${selectedInsurer.id}/${st.id}/`);
                        }
                      }}
                      className={`px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center w-full truncate flex flex-col items-center justify-center ${
                        isSubActive
                          ? 'bg-[#123941] text-white shadow-xs font-black'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                      }`}
                    >
                      <span>{st.label}</span>
                      {st.groupCount && (
                        <span className={`text-[10px] font-medium mt-0.5 ${isSubActive ? 'text-amber-300' : 'text-slate-500'}`}>
                          ({st.groupCount})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Content Tables */}
          {availableSubtabs.length > 0 ? (
            renderDbSurgeryTab(
              activeSubTab || 'default',
              selectedInsurer.name + (currentSubtabLabel ? ` - ${currentSubtabLabel}` : ' 약관 분류표'),
              currentSections,
              filteredCurrentSections,
              expandedDbSurgery1_5Sections,
              setExpandedDbSurgery1_5Sections,
              (idx: number) => setExpandedDbSurgery1_5Sections(prev => ({ ...prev, [idx]: !prev[idx] })),
              getSummaryForSubTab(selectedInsurer.id, activeSubTab || '', hyundaiBrainSubTab, dbHeartTab, dbBrainTab)
            )
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs text-center space-y-4">
              <div className="w-12 h-12 bg-slate-100 text-[#123941] rounded-2xl flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="text-base font-black text-slate-900">{selectedInsurer.name} 약관 및 상품공시 안내</h3>
                <p className="text-xs text-slate-500 font-medium">
                  해당 보험사의 담보별 상세 분류표는 원본 상품공시실을 통해 정확한 최신 약관을 직접 확인하실 수 있습니다.
                </p>
              </div>
              {selectedInsurer.url && (
                <a
                  href={selectedInsurer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123941] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1a4d58] transition-all cursor-pointer"
                >
                  <span>{selectedInsurer.name} 상품공시실 바로가기</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom AdZone Banner under 담보별분류표 */}
      <div className="pt-2">
        <AdZone type="inline-bottom" id="terms-bottom-ad" />
      </div>

      {/* PDF Generation Floating Toast */}
      {isGeneratingPdf && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#123941] text-white rounded-xl shadow-2xl border border-teal-500/40 text-xs font-bold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <Loader2 className="w-4 h-4 animate-spin text-teal-300" />
          <span>정밀 PDF 약관분류표를 생성 중입니다...</span>
        </div>
      )}
    </div>
  );
}
