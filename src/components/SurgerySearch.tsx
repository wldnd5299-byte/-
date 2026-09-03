/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Scissors, 
  ShieldCheck, 
  HeartPulse, 
  CheckSquare, 
  Sparkles, 
  Star, 
  Eye, 
  Layers, 
  Activity, 
  TrendingUp, 
  CornerDownRight,
  BookmarkCheck,
  Brain,
  Droplet,
  Compass,
  Zap,
  Info,
  ChevronRight,
  FileText,
  AlertTriangle,
  Upload,
  Stethoscope,
  Heart,
  FileSearch,
  Plus,
  Trash2
} from 'lucide-react';
import { SURGERY_RECORDS } from '../data';
import { SURGERY_1TO7_RECORDS } from '../data1to7';
import { SURGERY_1TO8_RECORDS } from '../data1to8';
import { SurgeryRecord } from '../types';

const ALL_PRISTINE_SURGERIES: SurgeryRecord[] = [...SURGERY_RECORDS, ...SURGERY_1TO7_RECORDS, ...SURGERY_1TO8_RECORDS];

interface InsuranceProduct {
  id: string;
  name: string;
  type: '종수술' | 'N대수술' | '특정수술';
  payoutLimit: string;
  description: string;
  tips?: string;
  exclusions: string[];
}

interface InsuranceCompany {
  id: string;
  name: string;
  category: 'general' | 'life'; // general: 손해보험, life: 생명보험
  logoText: string;
  color: string; // Tailwind class
  bgColor: string; // Tailwind class
  borderColor: string; // Tailwind class
  payoutPercent: string;
  products: InsuranceProduct[];
}

export default function SurgerySearch() {
  // 0. Tab Controller ('surgeryName': 수술명 검색, 'insurer': 보험사별 수술비)
  const [activeTab, setActiveTab] = useState<'surgeryName' | 'insurer'>('surgeryName');

  useEffect(() => {
    const handleNav = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        if (detail.tab) {
          setActiveTab(detail.tab);
        }
        if (detail.query !== undefined) {
          setSurgeryQuery(detail.query);
        }
        if (detail.categoryId !== undefined) {
          setSelectedSurgeryCategory(detail.categoryId);
        }
      }
    };
    window.addEventListener('ib-navigate-surgery', handleNav);
    return () => window.removeEventListener('ib-navigate-surgery', handleNav);
  }, []);

  // Tab 1: 수술명 검색용 상태
  const [surgeryQuery, setSurgeryQuery] = useState('');
  const [selectedSurgeryCategory, setSelectedSurgeryCategory] = useState<string>('전체');
  const [selectedSurgeryId, setSelectedSurgeryId] = useState<string>('');
  const [surgeryPage, setSurgeryPage] = useState(1);
  const [surgeryTab, setSurgeryTab] = useState<'grade1_5' | 'grade1_7' | 'grade1_8'>('grade1_5');
  const surgeriesPerPage = 8; // Number of items per page for clean layout

  // 1. Local surgery records state to persist user added/cleared surgeries.
  // We default to ALL_PRISTINE_SURGERIES
  const [localSurgeryRecords, setLocalSurgeryRecords] = useState<SurgeryRecord[]>(() => {
    const saved = localStorage.getItem('surgery_records');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Force synchronization if the list of surgeries has been updated
          if (parsed.length !== ALL_PRISTINE_SURGERIES.length) {
            localStorage.setItem('surgery_records', JSON.stringify(ALL_PRISTINE_SURGERIES));
            return ALL_PRISTINE_SURGERIES;
          }
          // Clean out any unrequested extra surgeries from previous sessions
          const cleanParsed = parsed.filter(s => !s.id.startsWith('scanned-surg-'));
          if (cleanParsed.length > 0) {
            // If the list changed (e.g. we removed the extra items), save the clean list back
            if (cleanParsed.length !== parsed.length) {
              localStorage.setItem('surgery_records', JSON.stringify(cleanParsed));
            }
            return cleanParsed;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    // Default to our clean, pristine list
    localStorage.setItem('surgery_records', JSON.stringify(ALL_PRISTINE_SURGERIES));
    return ALL_PRISTINE_SURGERIES;
  });

  // Add surgery item form state
  const [isAddingSurgery, setIsAddingSurgery] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newName, setNewName] = useState('');
  const [newCode, setNewCode] = useState('');
  const [newGrade1to3, setNewGrade1to3] = useState<'1종' | '2종' | '3종' | '비해당'>('비해당');
  const [newGrade1to5, setNewGrade1to5] = useState<'1종' | '2종' | '3종' | '4종' | '5종' | '대상제외' | '비해당'>('1종');
  const [newDescription, setNewDescription] = useState('');
  const [newTips, setNewTips] = useState('');

  const handleAddSurgery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newRecord: SurgeryRecord = {
      id: `surg-custom-${Date.now()}`,
      category: newCategory.trim() || '기타 수술',
      name: newName.trim(),
      code: newCode.trim() || undefined,
      grade1to3: newGrade1to3 === '비해당' ? undefined : newGrade1to3,
      grade1to5: newGrade1to5,
      description: newDescription.trim() || `${newName} 수술에 대한 보장 안내입니다.`,
      tips: newTips.trim() || undefined,
    };

    const updated = [newRecord, ...localSurgeryRecords];
    setLocalSurgeryRecords(updated);
    localStorage.setItem('surgery_records', JSON.stringify(updated));

    // Reset fields
    setNewCategory('');
    setNewName('');
    setNewCode('');
    setNewGrade1to3('비해당');
    setNewGrade1to5('1종');
    setNewDescription('');
    setNewTips('');
    setIsAddingSurgery(false);
  };

  const handleDeleteSurgery = (id: string) => {
    if (window.confirm('이 수술 항목을 정말 삭제하시겠습니까?')) {
      const updated = localSurgeryRecords.filter(s => s.id !== id);
      setLocalSurgeryRecords(updated);
      localStorage.setItem('surgery_records', JSON.stringify(updated));
    }
  };

  const handleClearAllSurgeries = () => {
    if (window.confirm('등록된 모든 수술 항목을 정말 지우시겠습니까?')) {
      setLocalSurgeryRecords([]);
      localStorage.removeItem('surgery_records');
    }
  };

  const handleRestoreDefaults = () => {
    if (window.confirm('기본 수술분류표 데이터로 복원하시겠습니까? 현재 등록된 개별 항목은 초기화됩니다.')) {
      setLocalSurgeryRecords(ALL_PRISTINE_SURGERIES);
      localStorage.setItem('surgery_records', JSON.stringify(ALL_PRISTINE_SURGERIES));
    }
  };

  // Tab 2: 보험사 수술비용 상태
  const [insurerQuery, setInsurerQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'life'>('all');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('samsung_fire');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  // 1. Comprehensive Insurance Company & Surgery Products Dataset (Standard Real-world Portfolios)
  const insuranceCompanies: InsuranceCompany[] = [
    {
      id: 'meritz',
      name: '메리츠화재',
      category: 'general',
      logoText: 'M',
      color: 'text-rose-600 bg-rose-50',
      borderColor: 'border-rose-200 hover:border-rose-500',
      bgColor: 'bg-rose-500/10',
      payoutPercent: '대표 손보사 한도형',
      products: [
        {
          id: 'meritz-jong',
          name: '메리츠 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,000만원 (5종 기준)',
          description: '전국 병의원에서 시행하는 일반 질병 수술을 치료 난이도 및 보상 등급(1~5종)에 따라 차등 정액 지급합니다.',
          tips: '메리츠는 업계 내 종수술비 누적 합산 한도가 비교적 여유롭습니다. 단순 양성 종양(대장 용종, 자궁근종)의 절제 및 절단 행위는 주로 1~2종 수술비로 청구 가능하므로 소견서상 수술 정의 단어를 확인하십시오.',
          exclusions: ['치료 목적이 아닌 미용 성형수술', '정밀 진단용 내시경 검사 중 단순 조직 채취', '주사기 등을 이용한 고름 흡인/천자 시술']
        },
        {
          id: 'meritz-120',
          name: '메리츠 120대 질병 수술비',
          type: 'N대수술',
          payoutLimit: '최대 5,000만원 (심뇌혈관 기준)',
          description: '국민건강보험공단 다빈도 질환 및 고액 수술을 유발하는 120종의 특정 질병에 대해 집중 정액 지급을 진행합니다.',
          tips: '진단서에 한국표준질병사인분류(KCD) 코드가 정확히 기재되어 있어야 지급 거절이 없습니다. 다빈도 10대/30대 및 생활질환 수술 한도를 각각 분리 확인하세요.',
          exclusions: ['약관상 정의된 120대 특정 질병 분류 코드 외의 수술', '외상 및 상해성 원인으로 기인한 수술']
        },
        {
          id: 'meritz-3dae',
          name: '메리츠 3대 질병 수술비 (암・뇌・심)',
          type: '특정수술',
          payoutLimit: '최대 3,000만원 (특약 가입금 기준)',
          description: '대한민국 사망원인 상위를 차지하는 암, 뇌혈관질환, 허혈성심장질환 수술 시 고액의 수술비를 정액 지급합니다.',
          tips: '암 수술비는 관혈/비관혈 구분 없이 지급되는 경우가 많으나, 뇌/심장 특약의 경우 스텐트 삽입술 등 카테터형 비관혈 시술 시 보장금액이 일부 감액될 수 있으므로 사전에 약관 비율을 필히 대조해야 합니다.',
          exclusions: ['기타 피부암 및 갑상선암 등의 유사암 (소액 지급 조건 적용)', '치료가 아닌 예방적 절제술']
        }
      ]
    },
    {
      id: 'samsung_fire',
      name: '삼성화재',
      category: 'general',
      logoText: 'S',
      color: 'text-blue-600 bg-blue-50',
      borderColor: 'border-blue-200 hover:border-blue-500',
      bgColor: 'bg-blue-500/10',
      payoutPercent: '안정적 대형사 표준',
      products: [
        {
          id: 'samsung-jong',
          name: '삼성화재 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,000만원',
          description: '생보사 약관의 보장 범위 장점을 도입한 삼성화재 대표 1-5종 정액 질병수술 특약입니다.',
          tips: '삼성화재 1-5종은 손해보험 고유의 면책 사항과 생명보험식 수술 정의가 결합된 형태입니다. 제왕절개 수술, 치핵, 요실금 수술 등 생보 약관에서 보장하는 일부 생활 질환의 손보 특약 약관상 면책 여부를 반드시 가입시기별로 따져보아야 합니다.',
          exclusions: ['가입 전 발병하여 지속된 만성 기왕증 수술', '치과 질환 수술 및 잇몸 뼈이식 임플란트 수술']
        },
        {
          id: 'samsung-119',
          name: '삼성화재 119대 질병 수술비',
          type: 'N대수술',
          payoutLimit: '최대 4,000만원',
          description: '한국인에게 가장 흔하게 발생하는 주요 생활 질병부터 암/심뇌혈관 수술까지 119가지 분류 코드 기준으로 가입금액을 지급합니다.',
          tips: '백내장 수술비 청구 시, 단순 시력 교정용 다초점 렌즈 삽입술은 비급여 항목으로 제외될 수 있으나 백내장 진행 소견과 치료 목적이 명시된 초음파 결과지가 있으면 정액 수술비 청구가 매끄럽습니다.',
          exclusions: ['미용 목적 안검하수 및 쌍꺼풀 수술', '피임 목적의 나팔관 결찰술']
        }
      ]
    },
    {
      id: 'hyundai',
      name: '현대해상',
      category: 'general',
      logoText: 'H',
      color: 'text-amber-600 bg-amber-50',
      borderColor: 'border-amber-200 hover:border-amber-500',
      bgColor: 'bg-amber-500/10',
      payoutPercent: '다빈도 보장 특화',
      products: [
        {
          id: 'hyundai-jong',
          name: '현대해상 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,200만원 (5종 기준)',
          description: '치료 목적의 수술 행위를 1종부터 5종까지 분류하여 빈틈없는 보장을 제공하는 약관 기준 수술비 특약입니다.',
          tips: '현대해상은 전통적으로 어린이 및 태아 보험에서 압도적인 지급 노하우를 갖고 있습니다. 성인 질병 수술비 청구 시 선천성 질환(Q코드)으로 분류되는 경우, 일반 질병수술비 특약이 아닌 선천이상수술비 특약으로 별도 청구해야 보상이 가능합니다.',
          exclusions: ['선천이상 질환 수술 (별도 특약에서 보장)', '모발이식 및 탈모 치료 목적 수술']
        },
        {
          id: 'hyundai-144',
          name: '현대해상 144대 질병 수술비',
          type: 'N대수술',
          payoutLimit: '최대 5,000만원',
          description: '총 144가지로 넓힌 역대 최고 수준의 대분류 질병 수술비 특약입니다.',
          tips: '여성 질환(자궁, 유방, 난소) 관련 수술비 보장 범위가 타사 대비 고액으로 탑재되는 구간이 많습니다. 자궁근종 하이푸(HIFU) 시술의 경우, 신의료기술로 지정되어 수술비 특약 청구 대상에 부합하므로 관련 시술 영수증 및 소견서를 첨부하십시오.',
          exclusions: ['치료를 동반하지 않는 미용상의 유방 수술', '단순 피임 수술']
        }
      ]
    },
    {
      id: 'db',
      name: 'DB손해보험',
      category: 'general',
      logoText: 'D',
      color: 'text-emerald-600 bg-emerald-50',
      borderColor: 'border-emerald-200 hover:border-emerald-500',
      bgColor: 'bg-emerald-500/10',
      payoutPercent: '설계사 만족도 우수',
      products: [
        {
          id: 'db-jong',
          name: 'DB 참좋은 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,000만원',
          description: '동일 질병 수술 시 보장 경쟁력이 탁월한 DB손해보험의 정액형 1-5종 수술 보장 특약입니다.',
          tips: 'DB의 경우 동일 부위 2회 이상 수술 시 원칙적으로 365일 이내 1회 한도 지급 제한이 있는지 가입시점 약관을 필수 점검해야 합니다. 용종 제거 후 인접 부위 재시술 시 일정 기간 면책 조건 유무를 고객 구약관에서 확인하십시오.',
          exclusions: ['동일 부위의 반복적/연속적 당일 수술 시 1회 초과분', '단순 미용 목적 피부 레이저 시술']
        },
        {
          id: 'db-119',
          name: 'DB 119대 질병 수술비',
          type: 'N대수술',
          payoutLimit: '최대 4,500만원',
          description: '암, 뇌, 심혈관 및 호흡기, 소화기 계통의 119대 질병을 맞춤 타겟팅하여 수술 한도액을 보장합니다.',
          exclusions: ['치과 발치 및 임플란트 기초 골이식', '단순 안과용 라식/라섹 안구 굴절 교정술']
        }
      ]
    },
    {
      id: 'kb',
      name: 'KB손해보험',
      category: 'general',
      logoText: 'K',
      color: 'text-yellow-600 bg-yellow-50',
      borderColor: 'border-yellow-200 hover:border-yellow-500',
      bgColor: 'bg-yellow-500/10',
      payoutPercent: '실손 병행 밸런스형',
      products: [
        {
          id: 'kb-jong',
          name: 'KB 희망플러스 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,000만원',
          description: '치료 난이도별 합리적인 설계를 지원하는 종수술비 기본 특약입니다.',
          tips: '체외충격파 쇄석술(요로결석 치료)의 경우, 수술 기구를 직접 대지 않지만 약관상 2종 또는 특정 수술비 항목으로 1회에 한해 인정되는 경우가 대부분입니다. 단, 연속 시술 시 지급 횟수 규정을 대조하십시오.',
          exclusions: ['요실금 수술 (손보사 표준 면책 또는 특수 제한)', '임신중독증 및 자연분만 수술']
        }
      ]
    },
    {
      id: 'hanwha_gen',
      name: '한화손해보험',
      category: 'general',
      logoText: 'W',
      color: 'text-orange-600 bg-orange-50',
      borderColor: 'border-orange-200 hover:border-orange-500',
      bgColor: 'bg-orange-500/10',
      payoutPercent: '보장 특약 특화형',
      products: [
        {
          id: 'hanwha-jong',
          name: '한화손보 질병 수술비 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,000만원',
          description: '약관 분류표 상 질병 치료를 목적으로 한 수술 시 등급별 정액금을 지급하는 담보입니다.',
          tips: '맘모톰 시술(유방 양성 종양 절제) 청구 시, 조직 검사 목적과 치료(절제) 목적이 혼재되어 있을 경우 진료비 세부 내역서에 치료용 바늘 대금이 명확하게 청구되어 있는지 확인해야 수술비 정액금 지급이 안전합니다.',
          exclusions: ['비치료적 유방 성형술', '종양 소견이 없는 자가 예방 목적 절제']
        }
      ]
    },
    {
      id: 'samsung_life',
      name: '삼성생명',
      category: 'life',
      logoText: 'L',
      color: 'text-blue-700 bg-blue-100',
      borderColor: 'border-blue-300 hover:border-blue-600',
      bgColor: 'bg-blue-600/10',
      payoutPercent: '생보업계 표준 대장주',
      products: [
        {
          id: 'samsung-life-jong',
          name: '삼성생명 종수술 보장특약 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 2,000만원 (5종 기준)',
          description: '역사와 전통의 생명보험 표준 1~5종 수술 분류표를 완벽히 준수하며 가입 금액의 고액 약정 비율을 지급합니다.',
          tips: '생명보험의 종수술비는 수술의 정의(절단, 절제 등)를 극히 기계적이고 철저하게 해석합니다. 칼이나 레이저 등으로 환부를 직접 절개하여 병변을 잘라내는 절제(Excision) 행위가 기재된 수술 확인서 또는 의사 소견서가 있어야 보상이 승인됩니다. 단순 주입, 흡인, 배액 시술은 지급이 누락될 수 있습니다.',
          exclusions: ['주사기 및 관을 이용한 체액 흡인(Aspiration)', '바늘로 찌르는 천자(Puncture) 시술', '성형 수술']
        },
        {
          id: 'samsung-life-shin',
          name: '삼성생명 신종수술 보장특약 (1-8종)',
          type: '종수술',
          payoutLimit: '최대 3,000만원 (8종 기준)',
          description: '최신 신의료기술 및 카테터, 내시경, 신체 삽입형 수술 기법의 증가 트렌드를 반영하여 넓힌 1-8종 체계 수술 특약입니다.',
          tips: '과거 1-5종에서 보장이 불명확했던 최신 비관혈적 시술(뇌동맥류 코일색전술, 심장 스텐트 삽입 등)이 고등급(6~8종)으로 선명하게 명시되어 있어 보장 분쟁을 원천 방지하는 메리트가 있습니다.',
          exclusions: ['일반 약관상 수술 정의에 부합하지 않는 약물 주입술', '노화로 인한 치아 임플란트 뼈이식']
        },
        {
          id: 'samsung-life-brain',
          name: '삼성생명 뇌심 특정질환수술특약',
          type: '특정수술',
          payoutLimit: '최대 4,000만원',
          description: '고액의 수술비용과 긴 재활이 필요한 뇌혈관 및 심장 질환 수술 특약입니다.',
          tips: '일부 구상품의 경우 관혈 수술(머리를 여는 개두술 등) 시에만 고액을 지급하고 비관혈 수술(카테터 삽입 등) 시 가입금액의 10%~20%만 지급하는 감액 규정이 있으므로 보유 계약의 세부 보장 한도를 정확히 확인하십시오.',
          exclusions: ['외상으로 인한 일시적 뇌출혈', '단순 부정맥 진단만으로 시행되지 않은 심장 시술']
        }
      ]
    },
    {
      id: 'hanwha_life',
      name: '한화생명',
      category: 'life',
      logoText: 'H',
      color: 'text-orange-700 bg-orange-100',
      borderColor: 'border-orange-300 hover:border-orange-600',
      bgColor: 'bg-orange-600/10',
      payoutPercent: '안정적인 고액 지급형',
      products: [
        {
          id: 'hanwha-life-jong',
          name: '한화생명 수술보장특약 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,500만원',
          description: '생명보험 협회 표준 약관을 적용하여 주요 성인병 및 생활질환 수술비를 정액 지급합니다.',
          tips: '자궁 물혹 등으로 시행하는 자궁경(내시경형 자궁 수술)은 생보 1종 또는 2종 수술비에 안정적으로 해당합니다. 시술 시 부인과 질병 수술비 특약과 함께 중복 청구 가능한지 청구 서류 송출 전에 설계사의 확인을 거치십시오.',
          exclusions: ['생명보험협회 표준 수술 면책 규정', '임신, 출산 및 산후기 관련 질환 수술']
        },
        {
          id: 'hanwha-life-shin',
          name: '한화생명 신종수술특약 (1-8종)',
          type: '종수술',
          payoutLimit: '최대 2,500만원',
          description: '최신 의료 인프라 맞춤 개정 1-8종 수술 고액 정액 특약입니다.',
          exclusions: ['단순 치조골 이식수술', '의학적 필요성이 없는 피부 점 빼기 레이저']
        }
      ]
    },
    {
      id: 'kyobo',
      name: '교보생명',
      category: 'life',
      logoText: 'G',
      color: 'text-emerald-700 bg-emerald-100',
      borderColor: 'border-emerald-300 hover:border-emerald-600',
      bgColor: 'bg-emerald-600/10',
      payoutPercent: '정통 생보 보수주의',
      products: [
        {
          id: 'kyobo-jong',
          name: '교보생명 종수술특약 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,500만원',
          description: '전통적인 수술의 정의를 철저히 지키며 안정적인 자산 보전을 지원하는 종수술 담보입니다.',
          tips: '백내장 수술 시 한 날에 좌우 눈을 동시 수술하더라도 약관상 1회 수술로 판단하여 1회분만 지급하는 시기가 있고, 각각 2회 지급하는 시기가 있으므로 증권 발행일자(가입 연도) 대조가 절대적으로 요구된다.',
          exclusions: ['안구의 굴절교정 목적 수술', '의사의 지시를 따르지 않은 임의적 민간 시술']
        }
      ]
    },
    {
      id: 'shinhan',
      name: '신한라이프',
      category: 'life',
      logoText: 'N',
      color: 'text-indigo-700 bg-indigo-100',
      borderColor: 'border-indigo-300 hover:border-indigo-600',
      bgColor: 'bg-indigo-600/10',
      payoutPercent: '스마트 하이브리드',
      products: [
        {
          id: 'shinhan-jong',
          name: '신한라이프 수술보장특약 (1-5종)',
          type: '종수술',
          payoutLimit: '최대 1,500만원',
          description: '신한과 오렌지라이프의 보장 DNA가 결합된 합리적 수술비 대표 특약입니다.',
          tips: '하지정맥류 수술 시, 미용 목적의 단순 레이저 경화 요법은 면책 대상이지만, 역류가 증명되어 고주파 절제술이나 베나실 시술 등을 받고 혈역학적 검사 결과지를 첨부하면 종수술비 보장 청구가 무리없이 통과됩니다.',
          exclusions: ['치료 목적이 아닌 외모 개선 목적의 정맥류 치료', '단순 주입 요법']
        }
      ]
    }
  ];

  // Initialize selected company and product IDs safely
  useEffect(() => {
    const defaultCompany = insuranceCompanies.find(c => c.id === 'samsung_fire') || insuranceCompanies[0];
    setSelectedCompanyId(defaultCompany.id);
    if (defaultCompany.products.length > 0) {
      setSelectedProductId(defaultCompany.products[0].id);
    }

    // Set default selected surgery record if available
    if (ALL_PRISTINE_SURGERIES.length > 0) {
      setSelectedSurgeryId(ALL_PRISTINE_SURGERIES[0].id);
    }
  }, []);

  // Update selected product when company changes
  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId(companyId);
    const company = insuranceCompanies.find(c => c.id === companyId);
    if (company && company.products.length > 0) {
      setSelectedProductId(company.products[0].id);
    } else {
      setSelectedProductId('');
    }
  };

  // helper to normalize text (remove spaces and convert to lowercase for robust Korean search)
  const normalizeText = (text: string) => {
    if (!text) return '';
    return text.replace(/\s+/g, '').toLowerCase();
  };

  // helper to normalize category names and unify duplicates
  const normalizeCategory = (cat: string | undefined | null): string => {
    if (!cat) return '';
    const trimmed = cat.trim();
    if (trimmed.startsWith('근골격계')) return '근골격계 수술';
    if (trimmed.startsWith('소화기계')) return '소화기계 수술';
    if (trimmed.startsWith('감각기')) return '감각기 수술';
    if (trimmed.startsWith('신경계')) return '신경계 수술';
    if (trimmed.startsWith('비뇨기') || trimmed.startsWith('비뇨기계')) return '비뇨기・생식기 수술';
    if (trimmed.startsWith('호흡기계')) return '호흡기계 수술';
    if (trimmed.startsWith('순환기계') || trimmed.startsWith('심장')) return '심장・혈관 수술';
    if (trimmed.startsWith('내분비계')) return '내분비계 수술';
    if (trimmed.startsWith('피부')) return '피부・유방 수술';
    if (trimmed.startsWith('임파선') || trimmed.startsWith('뇌수술')) return '임파선・뇌수술';
    return trimmed;
  };

  const get1to3Style = (val: string) => {
    switch (val) {
      case '1종': return 'bg-amber-50 text-amber-800 border border-amber-200 font-black shadow-sm';
      case '2종': return 'bg-amber-100 text-amber-900 border border-amber-300 font-black shadow-sm';
      case '3종': return 'bg-amber-200 text-amber-950 border border-amber-400 font-black shadow-sm';
      case '비해당':
      default: return 'bg-slate-100 text-slate-400 border border-slate-200';
    }
  };

  const get1to5Style = (val: string) => {
    switch (val) {
      case '1종': return 'bg-blue-50 text-blue-700 border border-blue-200 font-black shadow-sm';
      case '2종': return 'bg-blue-100 text-blue-800 border border-blue-300 font-black shadow-sm';
      case '3종': return 'bg-blue-200 text-blue-900 border border-blue-400 font-black shadow-sm';
      case '4종': return 'bg-blue-600 text-white border border-blue-700 font-black shadow-sm';
      case '5종': return 'bg-blue-800 text-white border border-blue-900 font-black shadow-sm';
      case '대상제외':
      case '비해당':
      default: return 'bg-slate-100 text-slate-400 border border-slate-200';
    }
  };

  const get1to7Style = (val: string) => {
    switch (val) {
      case '1종': return 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-black shadow-sm';
      case '2종': return 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-black shadow-sm';
      case '3종': return 'bg-emerald-200 text-emerald-900 border border-emerald-400 font-black shadow-sm';
      case '4종': return 'bg-emerald-500 text-white border border-emerald-600 font-black shadow-sm';
      case '5종': return 'bg-emerald-600 text-white border border-emerald-700 font-black shadow-sm';
      case '6종': return 'bg-emerald-700 text-white border border-emerald-800 font-black shadow-sm';
      case '7종': return 'bg-emerald-900 text-white border border-emerald-950 font-black shadow-sm';
      default: return 'bg-slate-100 text-slate-400 border border-slate-200';
    }
  };

  const get1to8Style = (val: string) => {
    switch (val) {
      case '1종': return 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-black shadow-sm';
      case '2종': return 'bg-indigo-100 text-indigo-800 border border-indigo-300 font-black shadow-sm';
      case '3종': return 'bg-indigo-200 text-indigo-900 border border-indigo-400 font-black shadow-sm';
      case '4종': return 'bg-indigo-300 text-indigo-950 border border-indigo-500 font-black shadow-sm';
      case '5종': return 'bg-indigo-500 text-white border border-indigo-600 font-black shadow-sm';
      case '6종': return 'bg-indigo-600 text-white border border-indigo-700 font-black shadow-sm';
      case '7종': return 'bg-indigo-700 text-white border border-indigo-800 font-black shadow-sm';
      case '8종': return 'bg-indigo-900 text-white border border-indigo-950 font-black shadow-sm';
      default: return 'bg-slate-100 text-slate-400 border border-slate-200';
    }
  };

  const getDerivedGrades = (s: SurgeryRecord) => {
    if (s.id.startsWith('1to7-')) {
      return { grade1to7: s.grade1to7 || '비해당', grade1to8: '비해당' };
    }
    if (s.id.startsWith('1to8-')) {
      return { grade1to7: '비해당', grade1to8: s.grade1to8 || '비해당' };
    }

    const grade5 = s.grade1to5;
    const name = s.name;
    const category = s.category || '';

    let grade7 = '비해당';
    let grade8 = '비해당';

    if (grade5 === '대상제외' || grade5 === '비해당') {
      return { grade1to7: '비해당', grade1to8: '비해당' };
    }

    const isBrainOrHeart = 
      category.includes('뇌') || 
      category.includes('심장') || 
      category.includes('순환기') || 
      category.includes('임파선') ||
      name.includes('뇌') || 
      name.includes('심장') || 
      name.includes('대동맥') || 
      name.includes('관상동맥') || 
      name.includes('개두') || 
      name.includes('개흉');

    const isCoilOrStentOrCatheter = 
      name.includes('코일') || 
      name.includes('스텐트') || 
      name.includes('카테터') || 
      name.includes('색전술') || 
      name.includes('경피적');

    const isEndoscopyOrMild = 
      name.includes('내시경') || 
      name.includes('경검') || 
      name.includes('용종') || 
      name.includes('폴립') || 
      (name.includes('절제술') && (grade5 === '1종' || grade5 === '2종'));

    if (grade5 === '1종') {
      grade7 = '1종';
      grade8 = '1종';
    } else if (grade5 === '2종') {
      if (isEndoscopyOrMild) {
        grade7 = '2종';
        grade8 = '2종';
      } else {
        grade7 = '3종';
        grade8 = '3종';
      }
    } else if (grade5 === '3종') {
      grade7 = '4종';
      grade8 = '4종';
    } else if (grade5 === '4종') {
      if (isCoilOrStentOrCatheter) {
        grade7 = '5종';
        grade8 = '6종';
      } else {
        grade7 = '5종';
        grade8 = '5종';
      }
    } else if (grade5 === '5종') {
      if (isBrainOrHeart) {
        grade7 = '7종';
        grade8 = '8종';
      } else {
        grade7 = '6종';
        grade8 = '7종';
      }
    }

    return { grade1to7: grade7, grade1to8: grade8 };
  };

  // --- Tab 1: 수술명 검색 (1-5종 수술분류표 기반) 로직 ---
  
  // Memoize filtered surgeries so its reference only changes when query changes
  const filteredSurgeries = React.useMemo(() => {
    if (!surgeryQuery.trim()) return [];
    
    const normalizedQuery = normalizeText(surgeryQuery);
    return localSurgeryRecords.filter(s => {
      // 1~3종 / 1~5종 수술 탭에서는 1~7종 및 1~8종 전용 데이터를 제외합니다.
      if (surgeryTab === 'grade1_5' && (s.id.startsWith('1to7-') || s.id.startsWith('1to8-'))) {
        return false;
      }
      // 1~7종 수술 탭에서는 오직 등록된 실제 1~7종 데이터만 검색되게 합니다.
      if (surgeryTab === 'grade1_7' && !s.id.startsWith('1to7-')) {
        return false;
      }
      // 1~8종 수술 탭에서는 오직 등록된 실제 1~8종 데이터만 검색되게 합니다.
      if (surgeryTab === 'grade1_8' && !s.id.startsWith('1to8-')) {
        return false;
      }
      return (
        normalizeText(s.name).includes(normalizedQuery) ||
        (s.code && normalizeText(s.code).includes(normalizedQuery)) ||
        (s.category && normalizeText(s.category).includes(normalizedQuery))
      );
    });
  }, [surgeryQuery, localSurgeryRecords, surgeryTab]);

  // Automatically select the first search result when search query or category changes
  useEffect(() => {
    if (filteredSurgeries.length > 0) {
      const exists = filteredSurgeries.some(s => s.id === selectedSurgeryId);
      if (!exists) {
        setSelectedSurgeryId(filteredSurgeries[0].id);
      }
    } else {
      setSelectedSurgeryId('');
    }
  }, [filteredSurgeries, selectedSurgeryId]);

  // Reset page when search query changes
  useEffect(() => {
    setSurgeryPage(1);
  }, [surgeryQuery]);

  const totalSurgeryPages = Math.ceil(filteredSurgeries.length / surgeriesPerPage) || 1;
  const currentSurgeryPage = Math.min(surgeryPage, totalSurgeryPages);
  const startIndex = (currentSurgeryPage - 1) * surgeriesPerPage;
  const paginatedSurgeries = filteredSurgeries.slice(startIndex, startIndex + surgeriesPerPage);

  const activeSurgery = localSurgeryRecords.find(s => s.id === selectedSurgeryId) || filteredSurgeries[0] || localSurgeryRecords[0];

  // --- Tab 2: 보험사별 수술비 로직 ---
  const allProducts = insuranceCompanies.flatMap(company => 
    company.products.map(prod => ({
      ...prod,
      companyId: company.id,
      companyName: company.name,
      companyColor: company.color
    }))
  );

  const filteredGlobalProducts = allProducts.filter(p => {
    if (!insurerQuery.trim()) return selectedCategory === 'all' || 
      insuranceCompanies.find(c => c.id === p.companyId)?.category === selectedCategory;

    const normalizedQuery = normalizeText(insurerQuery);
    const matchQuery = 
      normalizeText(p.name).includes(normalizedQuery) ||
      normalizeText(p.companyName).includes(normalizedQuery) ||
      normalizeText(p.description).includes(normalizedQuery) ||
      (p.tips && normalizeText(p.tips).includes(normalizedQuery)) ||
      p.exclusions.some(exc => normalizeText(exc).includes(normalizedQuery));
    
    if (selectedCategory === 'all') return matchQuery;
    const company = insuranceCompanies.find(c => c.id === p.companyId);
    return matchQuery && company?.category === selectedCategory;
  });

  const activeCompany = insuranceCompanies.find(c => c.id === selectedCompanyId) || insuranceCompanies[0];
  const activeProduct = activeCompany?.products.find(p => p.id === selectedProductId) || activeCompany?.products[0];

  return (
    <div className="space-y-6 text-left">
      {/* Header Info Panel */}
      <div className="relative bg-[#123941] p-5 rounded-xl border border-slate-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-base md:text-lg font-black text-white flex items-center flex-wrap gap-2 uppercase tracking-tight">
            <HeartPulse className="w-5 h-5 text-amber-400 shrink-0" />
            <span>종수술분류표 기반 <span className="text-amber-400">수술명검색</span></span>
            <span className="text-xs font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded ml-1">(단순참고용/가입약관확인)</span>
          </h2>
          <p className="text-xs text-slate-200 mt-2 leading-relaxed font-bold">
            본 정보는 약관상 수술분류표 기준을 따릅니다. 단, 가입 시기 및 상품에 따라 보장 내용이 상이할 수 있으므로, 정확한 지급 여부는 반드시 가입하신 상품에 맞는 개별 약관을 확인하시기 바랍니다.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* 3-1. Search Bar Block & Management Controls */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 text-left">
          {/* Surgery Classification standard search sub-tabs */}
          <div className="flex border-b border-slate-100 pb-3 gap-2 flex-wrap items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSurgeryTab('grade1_5')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all cursor-pointer ${
                  surgeryTab === 'grade1_5'
                    ? 'bg-[#123941] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                1~3종수술 / 1~5종수술 검색
              </button>
              <button
                onClick={() => setSurgeryTab('grade1_7')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all cursor-pointer ${
                  surgeryTab === 'grade1_7'
                    ? 'bg-[#123941] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                1~7종수술 검색
              </button>
              <button
                onClick={() => setSurgeryTab('grade1_8')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all cursor-pointer ${
                  surgeryTab === 'grade1_8'
                    ? 'bg-[#123941] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                1~8종수술 검색
              </button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 w-full sm:w-auto">
              <a
                href="/downloads/1-3종_수술분류표.pdf"
                download="1-3종_수술분류표.pdf"
                className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors cursor-pointer text-center whitespace-nowrap inline-flex items-center justify-center"
              >
                1~3종 분류표
              </a>
              <a
                href="/downloads/1-5종_수술분류표.pdf"
                download="1-5종_수술분류표.pdf"
                className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors cursor-pointer text-center whitespace-nowrap inline-flex items-center justify-center"
              >
                1~5종 분류표
              </a>
              <a
                href="/downloads/1-7종수술비 분류표pd.pdf"
                download="1-7종수술비 분류표pd.pdf"
                className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors cursor-pointer text-center whitespace-nowrap inline-flex items-center justify-center"
              >
                1~7종 분류표
              </a>
              <a
                href="/downloads/1-8종수술비분류표.pdf"
                download="1-8종수술비분류표.pdf"
                className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors cursor-pointer text-center whitespace-nowrap inline-flex items-center justify-center"
              >
                1~8종 분류표
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base md:text-lg font-black text-[#123941] uppercase tracking-wide flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-500" />
              수술분류표 수술명 통합 검색
            </h3>
          </div>

          <div className="relative max-w-2xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="검색할 수술명 또는 키워드를 입력하세요 (예: 백내장, 대장 용종, 제왕절개)..."
              value={surgeryQuery}
              onChange={(e) => setSurgeryQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 text-xs md:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-[#123941] transition-all bg-slate-50 font-bold"
            />
          </div>

          {/* Collapsible Add Surgery Form */}
          {isAddingSurgery && (
            <form onSubmit={handleAddSurgery} className="mt-4 p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <span className="text-xs font-black text-[#123941] flex items-center gap-1">
                  <Plus className="w-4 h-4 text-amber-500" />
                  새로운 수술 항목 등록
                </span>
                <button
                  type="button"
                  onClick={() => setIsAddingSurgery(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer border-none bg-transparent"
                >
                  닫기
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase">수술 분류</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 피부・유방의 수술, 소화기계의 수술, 호흡기계의 수술"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase">수술명</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 백내장 수술, 피지낭종 절제술"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase">질병 코드 / 수술 코드 (선택)</label>
                  <input
                    type="text"
                    placeholder="예: D23, L72, H25"
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                    className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase">1~3종 수술 등급</label>
                    <select
                      value={newGrade1to3}
                      onChange={(e: any) => setNewGrade1to3(e.target.value)}
                      className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold"
                    >
                      <option value="비해당">비해당</option>
                      <option value="1종">1종</option>
                      <option value="2종">2종</option>
                      <option value="3종">3종</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase">1~5종 수술 등급</label>
                    <select
                      value={newGrade1to5}
                      onChange={(e: any) => setNewGrade1to5(e.target.value)}
                      className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold"
                    >
                      <option value="1종">1종</option>
                      <option value="2종">2종</option>
                      <option value="3종">3종</option>
                      <option value="4종">4종</option>
                      <option value="5종">5종</option>
                      <option value="비해당">비해당</option>
                      <option value="대상제외">대상제외</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase">수술 설명 및 보장 정의</label>
                <textarea
                  placeholder="수술의 구체적인 방법이나 보장 범위에 대해 상세히 기재해 주세요..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold h-20 resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase">보상 실무 설계사 팁 (선택)</label>
                <textarea
                  placeholder="청구 시 유의해야 할 사항이나 전문가 조언을 입력해 주세요..."
                  value={newTips}
                  onChange={(e) => setNewTips(e.target.value)}
                  className="w-full p-2.5 text-xs border border-slate-200 rounded-lg bg-white font-bold h-20 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingSurgery(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg cursor-pointer border-none"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-[#123941] text-xs font-black rounded-lg cursor-pointer border-none shadow-sm"
                >
                  등록하기
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 3-2. Category Filters & Results Full-Width Table */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 text-left">
          
          {/* Full-Width Results Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse bg-white text-xs text-slate-700">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className={`py-3 px-4 text-left font-black text-[#123941] ${surgeryTab === 'grade1_5' ? 'w-1/4' : 'w-1/4'}`}>수술 분류</th>
                  <th className={`py-3 px-4 text-left font-black text-[#123941] ${surgeryTab === 'grade1_5' ? 'w-2/5' : 'w-1/2'}`}>수술명 / 코드</th>
                  {surgeryTab === 'grade1_5' ? (
                    <>
                      <th className="py-3 px-3 text-center font-black text-amber-900 bg-amber-500/5 border-l border-r border-slate-200 w-1/6">
                        <span className="block text-[14px] md:text-[16px] font-extrabold tracking-tight">1~3종 수술 등급</span>
                      </th>
                      <th className="py-3 px-3 text-center font-black text-blue-900 bg-blue-500/5 w-1/6">
                        <span className="block text-[14px] md:text-[16px] font-extrabold tracking-tight">1~5종 수술 등급</span>
                      </th>
                    </>
                  ) : surgeryTab === 'grade1_7' ? (
                    <th className="py-3 px-3 text-center font-black text-emerald-900 bg-emerald-500/5 border-l border-slate-200 w-1/4">
                      <span className="block text-[14px] md:text-[16px] font-extrabold tracking-tight">1~7종 수술 등급</span>
                    </th>
                  ) : (
                    <th className="py-3 px-3 text-center font-black text-indigo-900 bg-indigo-500/5 border-l border-slate-200 w-1/4">
                      <span className="block text-[14px] md:text-[16px] font-extrabold tracking-tight">1~8종 수술 등급</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedSurgeries.length > 0 ? (
                  paginatedSurgeries.map((s) => {
                    const class1to3 = s.grade1to3 || '비해당';
                    const derived = getDerivedGrades(s);
                    return (
                      <tr 
                        key={s.id}
                        className="hover:bg-slate-50/70 transition-colors"
                      >
                        <td className="py-3.5 px-4 text-left">
                          <span className="text-[11px] bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded">
                            {normalizeCategory(s.category)}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-left">
                          <div className="flex flex-col gap-1">
                            <span className="font-extrabold text-slate-800 text-sm">
                              {s.name}
                            </span>
                            {s.code && (
                              <span className="inline-flex items-center gap-1.5 mt-0.5 text-[11px] font-sans font-bold tracking-wider text-slate-600 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md w-fit shadow-3xs">
                                <span className="text-slate-500 text-[10px] font-semibold">{(surgeryTab === 'grade1_8' || surgeryTab === 'grade1_7') ? '코드' : '관련 코드'}</span>
                                <span className="text-[#123941] font-black">{s.code}</span>
                              </span>
                            )}
                          </div>
                        </td>
                        {surgeryTab === 'grade1_5' ? (
                          <>
                            <td className="py-3.5 px-3 text-center bg-amber-500/[0.02] border-l border-r border-slate-100">
                              <span className={`inline-block text-[11px] px-3.5 py-1 rounded-full ${get1to3Style(class1to3)}`}>
                                {class1to3}
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-center bg-blue-500/[0.01]">
                              <span className={`inline-block text-[11px] px-3.5 py-1 rounded-full ${get1to5Style(s.grade1to5 || '')}`}>
                                {s.grade1to5}
                              </span>
                            </td>
                          </>
                        ) : surgeryTab === 'grade1_7' ? (
                          <td className="py-3.5 px-3 text-center bg-emerald-500/[0.01] border-l border-slate-100">
                            <span className={`inline-block text-[11px] px-3.5 py-1 rounded-full ${get1to7Style(derived.grade1to7)}`}>
                              {derived.grade1to7}
                            </span>
                          </td>
                        ) : (
                          <td className="py-3.5 px-3 text-center bg-indigo-500/[0.01] border-l border-slate-100">
                            <span className={`inline-block text-[11px] px-3.5 py-1 rounded-full ${get1to8Style(derived.grade1to8)}`}>
                              {derived.grade1to8}
                            </span>
                          </td>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-400 font-bold bg-slate-50">
                      {surgeryQuery ? (
                        <>
                          <AlertTriangle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                          <p className="text-slate-500 text-xs font-black">검색된 수술명 가이드 데이터가 없습니다.</p>
                          <button
                            type="button"
                            onClick={() => setSurgeryQuery('')}
                            className="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-[#123941] font-black text-[10px] rounded-full shadow-sm cursor-pointer transition-colors border-none"
                          >
                            검색어 초기화하기
                          </button>
                        </>
                      ) : (
                        <div className="py-6">
                          <Search className="w-8 h-8 text-amber-500 mx-auto mb-3.5 animate-bounce" />
                          <p className="text-[#123941] text-sm font-extrabold mb-1">검색란에 수술명을 검색하시면 관련 등급을 확인하실 수 있습니다.</p>
                          <p className="text-slate-400 text-xs font-medium">예: 백내장, 대장 용종, 제왕절개 등</p>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Dynamic Pagination Control matching Screenshot */}
          {totalSurgeryPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSurgeryPage(p => Math.max(1, p - 1))}
                disabled={currentSurgeryPage === 1}
                className="p-1.5 rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer text-xs font-black"
              >
                이전
              </button>

              {Array.from({ length: totalSurgeryPages }).map((_, idx) => {
                const pageNum = idx + 1;
                // Limit visible pages for clean display
                if (
                  totalSurgeryPages > 6 &&
                  pageNum !== 1 &&
                  pageNum !== totalSurgeryPages &&
                  Math.abs(pageNum - currentSurgeryPage) > 1
                ) {
                  if (pageNum === 2 && currentSurgeryPage > 3) {
                    return <span key="ellipsis-start" className="text-slate-400 px-1 font-bold">...</span>;
                  }
                  if (pageNum === totalSurgeryPages - 1 && currentSurgeryPage < totalSurgeryPages - 2) {
                    return <span key="ellipsis-end" className="text-slate-400 px-1 font-bold">...</span>;
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setSurgeryPage(pageNum)}
                    className={`w-7 h-7 rounded-md text-xs font-extrabold transition-all cursor-pointer ${
                      currentSurgeryPage === pageNum
                        ? 'bg-[#123941] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setSurgeryPage(p => Math.min(totalSurgeryPages, p + 1))}
                disabled={currentSurgeryPage === totalSurgeryPages}
                className="p-1.5 rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer text-xs font-black"
              >
                다음
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
