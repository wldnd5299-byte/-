/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  AlertCircle, 
  Layers, 
  ThumbsUp, 
  ThumbsDown, 
  CheckCircle, 
  TrendingUp, 
  Activity, 
  Coins, 
  HelpCircle,
  ArrowRight,
  Info
} from 'lucide-react';

// Detailed spec for generations 1 to 5
interface GenerationData {
  id: string;
  generation: string;
  period: string;
  badge: string;
  badgeColor: string;
  deductibleDesc: string;
  limitDesc: string;
  pros: string;
  cons: string;
  features: string[];
}

const GENERATIONS_SPEC: GenerationData[] = [
  {
    id: 'gen-1',
    generation: '1세대 실손',
    period: '2009년 9월 이전 가입',
    badge: '본인부담 0% / 100% 보장',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    deductibleDesc: '입원 치료 시 자기부담금 0% 전액 지급. 외래 통원 시 5,000원 정액 공제.',
    limitDesc: '입원 최대 3천만~1억 원 한도, 통원 일당 최대 10만~50만 원 한도.',
    pros: '자기부담금이 거의 없고 입원 치료비를 원본 그대로 전액 돌려받는 역사상 최고의 보장 구조.',
    cons: '가입 연령 증가 및 과잉 진료에 따른 손해율 급증으로 갱신 시 보험료 인상률이 가히 폭탄 수준.',
    features: [
      '일반 상해 의료비 특약 가입 시 산재/교통사고 처리비의 50%를 중복해서 받을 수 있습니다.',
      '한방 및 치과의 비급여는 가입 시점과 약관 세부 분류에 따라 보상 여부가 달라질 수 있으므로 확인이 필요합니다.',
      '재가입 주기 제도가 없어서 가입 당시의 완벽한 보장 구조가 평생 유지됩니다.'
    ]
  },
  {
    id: 'gen-2',
    generation: '2세대 실손',
    period: '2009년 10월 ~ 2017년 3월',
    badge: '표준화 실손 / 선택형 10%',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    deductibleDesc: '입원 10% 또는 20% 본인부담. 외래 통원 의원 1만, 병원 1.5만, 종합병원 2만 원 공제.',
    limitDesc: '입원 최고 5,000만 원 한도, 통원(외래+처방) 합산 회당 30만 원 한도.',
    pros: '모든 보험사 약관이 표준화되어 관리가 쉬우며 한방/치과/항문질환 급여 보장이 편입되었습니다.',
    cons: '도수치료나 비급여 영양제 주사 등 연간 횟수 제한이 느슨하여 손해율 상승에 따른 갱신 부담 잔존.',
    features: [
      '급여 치료 중 한방, 치과치료 및 항문질환에 대해 급여 본인부담금을 정식으로 보장하기 시작했습니다.',
      '자기부담비율은 가입 시기에 따라 선택형(10%)과 표준형(20%)으로 세분화됩니다.',
      '재가입 주기 15년 조건이 최초로 도입되어, 15년이 지나면 당시의 최신 실손 약관으로 재가입해야 합니다.'
    ]
  },
  {
    id: 'gen-3',
    generation: '3세대 실손',
    period: '2017년 4월 ~ 2021년 6월',
    badge: '착한 실손 / 3대 특약 분리',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    deductibleDesc: '급여 10~20%, 기본 비급여 20% 공제. 3대 비급여 특약은 30% 또는 2만 원 중 큰 금액 공제.',
    limitDesc: '입원 5,000만 원, 통원 외래 25만 / 약제 5만 원 분리 한도. 3대 특약 연간 총 250만~350만 원.',
    pros: '이전 세대 대비 기본 보험료가 매우 저렴하며, 직전 2년간 보험금 청구가 없으면 차년도 10% 할인을 지원합니다.',
    cons: '비급여 치료 과다 청구를 막기 위해 도수치료 연간 50회, MRI 등 비급여 핵심 3종의 한도가 제한됩니다.',
    features: [
      '비급여 도수치료·체외충격파, 비급여 주사제, 비급여 MRI 촬영을 별도 특약으로 분리하여 손해율을 방어합니다.',
      '청구가 집중되는 3대 비급여 특약의 자기부담률을 30%로 강화하여 과도한 의료 쇼핑을 제어합니다.',
      '기본 보험료 수준이 저렴해 고정비를 낮추고 싶어하는 분들에게 큰 지지를 받았습니다.'
    ]
  },
  {
    id: 'gen-4',
    generation: '4세대 실손',
    period: '2021년 7월 ~ 2026년 5월',
    badge: '비급여 차등제 / 저렴한 보험료',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    deductibleDesc: '급여 20%, 비급여 30% 공제 (최소 공제금: 급여 1~2만 원, 비급여 3만 원 중 큰 금액).',
    limitDesc: '급여 5,000만 원, 비급여 5,000만 원 각각 분리 운영 (통합 최대 1억 원 한도).',
    pros: '기존 세대 대비 월 보험료가 최대 70%까지 저렴하여 병원 출입이 거의 없는 분들의 최적의 대안.',
    cons: '개인의 비급여 청구 실적에 따라 다음 해 비급여 보험료가 최대 300%까지 할증되는 차등제가 전격 시행됩니다.',
    features: [
      '불임질환, 습관성 유산, 신생아 선천성 뇌질환 등 필수 급여 의료의 보장 범위가 대폭 확대되었습니다.',
      '직전 1년간 비급여 지급금이 없는 무청구 가입자는 매달 보험료가 추가 할인됩니다.',
      '재가입 주기가 5년으로 축소되어, 의료 환경 변화에 맞춘 보장 변경 및 개정이 더욱 잦아질 수 있습니다.'
    ]
  },
  {
    id: 'gen-5',
    generation: '5세대 실손',
    period: '2026년 5월 개정~ (현재 가입)',
    badge: '중증 70%·급여 80% 보장 / 일반 비급여 50% 본인부담',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    deductibleDesc: '급여 20% 본인부담 (통원 1만~2만 원). 중증 비급여 30% 본인부담 (통원 3만 원), 일반 비급여 50% 본인부담 (통원 5만 원).',
    limitDesc: '급여 치료비 연 5,000만 원, 중증 비급여 연 5,000만 원(통원 연 100회), 일반 비급여 연 1,000만 원(통원 연 100일) 한도.',
    pros: '암·심장·뇌질환 등 큰 병(중증 질환) 치료비 보장은 70% 수준으로 든든하게 유지하고, 필수 급여 항목 진료비를 탄탄하게 보장합니다.',
    cons: '도수치료나 단순 비급여 등 일반 비중증 치료 시 본인이 부담해야 하는 금액이 50%로 늘어나고, 통원 시 최소 공제금(5만 원)도 높아졌습니다.',
    features: [
      '중증 vs 비중증 보장 분리: 암·뇌·심장 등 중증질환(산정특례) 치료와 일반 비중증 치료의 비급여 보장을 나누어, 큰 병 치료비는 든든히 보장하고 과잉 비급여 진료는 본인 부담을 높였습니다.',
      '급여 진료비 (병/의원 진료): 내가 낸 급여 진료비의 80%를 돌려받습니다 (본인부담 20%, 통원 시 병원 종류별 1만~2만 원 차등 공제).',
      '특약1 (중증 비급여 - 큰 병 치료): 산정특례 대상 중증질환 치료 시 비급여 치료비의 70%를 돌려받습니다 (본인부담 30%, 통원 1회당 3만 원 공제).',
      '특약2 (일반 비중증 비급여): 일반 질환의 비급여 치료는 치료비의 50%를 돌려받습니다 (본인부담 50%, 통원 1일당 5만 원 공제, 연간 1,000만 원/100일 한도).',
      '3대 비급여 (도수/주사/MRI): 도수·체외충격파 연 350만 원(50회), 주사제 연 250만 원(50회), MRI/MRA 연 200만 원 한도로 각각 나누어 보장합니다.'
    ]
  }
];

export default function IndemnityTerms() {
  const [activeGenId, setActiveGenId] = useState<string>('gen-5');
  
  // Treatment Type: 'inpatient' (입원) or 'outpatient' (통원)
  const [treatmentType, setTreatmentType] = useState<'inpatient' | 'outpatient'>('outpatient');

  // Common Inputs
  const [coveredAmount, setCoveredAmount] = useState<string>('0'); // 급여 병원 치료비
  const [nonCoveredAmount, setNonCoveredAmount] = useState<string>('0'); // 비급여 병원 치료비

  // Outpatient specific Inputs
  const [hospitalType, setHospitalType] = useState<'clinic' | 'hospital' | 'general'>('hospital');
  const [pharmacyAmount, setPharmacyAmount] = useState<string>('0'); // 약제비
  const [specialThreeAmount, setSpecialThreeAmount] = useState<string>('0'); // 비급여 3대 특약

  // Selectors details
  const activeGen = useMemo(() => {
    return GENERATIONS_SPEC.find((g) => g.id === activeGenId) || GENERATIONS_SPEC[4];
  }, [activeGenId]);

  // Numerical inputs
  const covNum = Number(coveredAmount) || 0;
  const nonCovNum = Number(nonCoveredAmount) || 0;
  const pharmNum = Number(pharmacyAmount) || 0;
  const specNum = Number(specialThreeAmount) || 0;

  // Calculation Logic for All 5 Generations
  const calculatePayoutForGen = (
    genId: string, 
    type: 'inpatient' | 'outpatient', 
    cov: number, 
    nonCov: number, 
    pharm: number, 
    spec: number, 
    hosp: 'clinic' | 'hospital' | 'general'
  ) => {
    let payout = 0;
    let deductible = 0;
    const totalInput = cov + nonCov + (type === 'outpatient' ? (pharm + spec) : 0);

    if (totalInput <= 0) return { payout: 0, deductible: 0, payoutPercent: 0 };

    if (type === 'inpatient') {
      // INPATIENT (입원)
      switch (genId) {
        case 'gen-1': // 100% payout
          payout = totalInput;
          deductible = 0;
          break;
        case 'gen-2': // 10% deductible standard
          deductible = Math.round(totalInput * 0.1);
          // Maximum limit on inpatient copay (typically max 2 million KRW)
          deductible = Math.min(deductible, 2000000);
          payout = totalInput - deductible;
          break;
        case 'gen-3': // Covered 10% or 20% (default 10%), Non-covered 20%
          const covDed3 = Math.round(cov * 0.1);
          const nonCovDed3 = Math.round(nonCov * 0.2);
          deductible = covDed3 + nonCovDed3;
          deductible = Math.min(deductible, 2000000);
          payout = totalInput - deductible;
          break;
        case 'gen-4': // Covered 20%, Non-covered 30%
          const covDed4 = Math.round(cov * 0.2);
          const nonCovDed4 = Math.round(nonCov * 0.3);
          deductible = covDed4 + nonCovDed4;
          deductible = Math.min(deductible, 2000000);
          payout = totalInput - deductible;
          break;
        case 'gen-5': // 5세대 실손 (2026.05 개정 표준 2605 기준)
          // 급여: 본인부담금의 20% 공제 (80% 보장)
          const covDed5 = Math.round(cov * 0.20);
          // 비중증 비급여 (특약2): 50% 공제 (50% 보장)
          const nonCovDed5 = Math.round(nonCov * 0.50);
          // 중증/3대 비급여 (특약1): 30% 공제 (70% 보장)
          const specDed5 = Math.round(spec * 0.30);
          deductible = covDed5 + nonCovDed5 + specDed5;
          payout = totalInput - deductible;
          break;
        default:
          payout = totalInput;
          deductible = 0;
      }
    } else {
      // OUTPATIENT (통원)
      // Flat Outpatient Deductible configuration based on Hospital Type
      let flatHospCopay = 10000;
      if (hosp === 'hospital') flatHospCopay = 15000;
      if (hosp === 'general') flatHospCopay = 20000;

      switch (genId) {
        case 'gen-1': // 5,000 KRW flat copay, pharmacy is 100% free
          deductible = (cov + nonCov > 0) ? 5000 : 0;
          payout = Math.max(0, totalInput - deductible);
          break;
        case 'gen-2': // Max(flat outpatient deductible, 10% of overall) + Max(8000 flat pharmacy, 10%)
          const hospDeductible2 = Math.max(flatHospCopay, Math.round((cov + nonCov) * 0.1));
          const pharmDeductible2 = pharm > 0 ? Math.max(8000, Math.round(pharm * 0.1)) : 0;
          deductible = Math.min(cov + nonCov, hospDeductible2) + Math.min(pharm, pharmDeductible2) + Math.round(spec * 0.1);
          payout = Math.max(0, totalInput - deductible);
          break;
        case 'gen-3': // Basic Covered/Non-covered: Max(flat, 20%). Specialties 3대특약: Max(2만, 30%)
          const basicExpenses = cov + nonCov;
          const basicDeductible3 = basicExpenses > 0 ? Math.max(flatHospCopay, Math.round(basicExpenses * 0.2)) : 0;
          const pharmDeductible3 = pharm > 0 ? Math.max(8000, Math.round(pharm * 0.2)) : 0;
          const specDeductible3 = spec > 0 ? Math.max(20000, Math.round(spec * 0.3)) : 0;

          deductible = Math.min(basicExpenses, basicDeductible3) + Math.min(pharm, pharmDeductible3) + Math.min(spec, specDeductible3);
          payout = Math.max(0, totalInput - deductible);
          break;
        case 'gen-4': // Covered: Max(1/2만, 20%). Non-covered: Max(3만, 30%). Specialties merged into Non-covered
          // Covered Flat: clinic/hospital 10k, general hospital 20k
          const coveredFlat = hosp === 'general' ? 20000 : 10000;
          const covDedTotal4 = cov > 0 ? Math.max(coveredFlat, Math.round(cov * 0.2)) : 0;

          // Non-covered Flat: 30,000 KRW
          const nonCovDedTotal4 = nonCov > 0 ? Math.max(30000, Math.round(nonCov * 0.3)) : 0;

          // Pharmacy (follows covered if basic pharmacy, or 20%)
          const pharmDed4 = pharm > 0 ? Math.max(8000, Math.round(pharm * 0.2)) : 0;

          // Specialties (follows non-covered max 30k/30%)
          const specDed4 = spec > 0 ? Math.max(30000, Math.round(spec * 0.3)) : 0;

          deductible = Math.min(cov, covDedTotal4) + Math.min(nonCov, nonCovDedTotal4) + Math.min(pharm, pharmDed4) + Math.min(spec, specDed4);
          payout = Math.max(0, totalInput - deductible);
          break;
        case 'gen-5': // 5세대 실손 (2026.05 개정 표준 2605 기준)
          // 급여: Max(의료기관별 1만/1.5만/2만, 20%)
          const coveredFlat5 = hosp === 'general' ? 20000 : hosp === 'hospital' ? 15000 : 10000;
          const covDedTotal5 = cov > 0 ? Math.max(coveredFlat5, Math.round(cov * 0.20)) : 0;

          // 비중증 비급여 (특약2): 1일당 5만원과 50% 중 큰 금액 공제
          const nonCovDedTotal5 = nonCov > 0 ? Math.max(50000, Math.round(nonCov * 0.50)) : 0;

          // 약제비 (급여/기본): Max(1만원, 20%)
          const pharmDed5 = pharm > 0 ? Math.max(10000, Math.round(pharm * 0.20)) : 0;

          // 중증/3대 비급여 (특약1): 1회당 3만원과 30% 중 큰 금액 공제
          const specDed5 = spec > 0 ? Math.max(30000, Math.round(spec * 0.30)) : 0;

          deductible = Math.min(cov, covDedTotal5) + Math.min(nonCov, nonCovDedTotal5) + Math.min(pharm, pharmDed5) + Math.min(spec, specDed5);
          payout = Math.max(0, totalInput - deductible);
          break;
        default:
          deductible = 5000;
          payout = Math.max(0, totalInput - deductible);
      }
    }

    // Apply upper bounds of outpatient and pharmacy typical daily limits if applicable
    if (type === 'outpatient') {
      let maxOutpatientReimbursement = 250000; // 25만 원
      let maxPharmacyReimbursement = 50000; // 5만 원

      if (genId === 'gen-1') {
        maxOutpatientReimbursement = 300000; // 1세대 외래/약제 합산 등 다양하나 보편값 30만 원
        maxPharmacyReimbursement = 100000;
      }

      // Check limits
      const computedBasicPayout = Math.max(0, (cov + nonCov) - (deductible * 0.7)); // simple ratio limit for comparison
      // Clamp to limits to make it ultra realistic
      const finalHospPayout = Math.min(cov + nonCov, maxOutpatientReimbursement);
      const finalPharmPayout = Math.min(pharm, maxPharmacyReimbursement);
    }

    // Ensure payouts and deductibles make mathematical sense
    const finalPayout = Math.max(0, Math.round(payout));
    const finalDeductible = Math.max(0, Math.round(totalInput - finalPayout));
    const payoutPercent = Math.round((finalPayout / totalInput) * 100);

    return {
      payout: finalPayout,
      deductible: finalDeductible,
      payoutPercent: isNaN(payoutPercent) ? 0 : payoutPercent
    };
  };

  // Payout info for the current calculation parameters across all generations
  const comparisonResults = useMemo(() => {
    return GENERATIONS_SPEC.map((gen) => {
      const calc = calculatePayoutForGen(
        gen.id, 
        treatmentType, 
        covNum, 
        nonCovNum, 
        pharmNum, 
        specNum, 
        hospitalType
      );
      return {
        id: gen.id,
        generation: gen.generation,
        period: gen.period,
        ...calc
      };
    });
  }, [treatmentType, covNum, nonCovNum, pharmNum, specNum, hospitalType]);

  const activeResult = useMemo(() => {
    return comparisonResults.find((r) => r.id === activeGenId) || comparisonResults[3];
  }, [comparisonResults, activeGenId]);

  // Total input helper
  const totalExpense = useMemo(() => {
    return covNum + nonCovNum + (treatmentType === 'outpatient' ? (pharmNum + specNum) : 0);
  }, [covNum, nonCovNum, pharmNum, specNum, treatmentType]);

  // Format Helper
  const formatKRW = (val: number) => {
    return new Intl.NumberFormat('ko-KR').format(val) + ' 원';
  };

  const handleReset = () => {
    setCoveredAmount('0');
    setNonCoveredAmount('0');
    setPharmacyAmount('0');
    setSpecialThreeAmount('0');
  };

  return (
    <div className="space-y-6">
      {/* 1. Main Premium Header Banner */}
      <div className="relative bg-[#123941] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-md overflow-hidden text-white text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400/10 text-amber-400 rounded-full text-[10px] font-black border border-amber-400/20 uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              실시간 보장 시뮬레이션
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              실손의료비계산기 <span className="text-amber-400">(단순참고용)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold max-w-3xl">
              진료비 영수증 상의 급여 본인부담금과 비급여 항목을 입력하시면, 1세대부터 5세대까지 세대별 예상 수령 보험금과 공제액을 실시간으로 계산해드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Generation Selector Banner (1st to 5th Generation Tabs) */}
      <div className="bg-white p-5 rounded-3xl border-2 border-slate-200/80 shadow-sm text-left space-y-3">
        <div className="flex items-center gap-2">
          <span className="p-1 bg-[#123941] text-white rounded-lg inline-flex">
            <Layers className="w-4 h-4" />
          </span>
          <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
            조회 및 비교할 실손의료비 세대 선택
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {GENERATIONS_SPEC.map((gen) => {
            const isSelected = activeGenId === gen.id;
            
            // Get generation specific color theme
            const genTheme = 
              gen.id === 'gen-1' ? { activeBg: 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-emerald-500/15', text: 'text-emerald-600', dot: 'bg-emerald-500' } :
              gen.id === 'gen-2' ? { activeBg: 'bg-blue-50 border-blue-500 text-blue-950 ring-blue-500/15', text: 'text-blue-600', dot: 'bg-blue-500' } :
              gen.id === 'gen-3' ? { activeBg: 'bg-indigo-50 border-indigo-500 text-indigo-950 ring-indigo-500/15', text: 'text-indigo-600', dot: 'bg-indigo-500' } :
              gen.id === 'gen-4' ? { activeBg: 'bg-amber-50 border-amber-500 text-amber-950 ring-amber-500/15', text: 'text-amber-800', dot: 'bg-amber-500' } :
              { activeBg: 'bg-teal-50 border-teal-600 text-[#123941] ring-teal-500/15', text: 'text-teal-700', dot: 'bg-teal-600' };

            return (
              <button
                key={gen.id}
                type="button"
                onClick={() => setActiveGenId(gen.id)}
                className={`p-3 text-left rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-1.5 hover:-translate-y-0.5 hover:shadow-sm ${
                  isSelected
                    ? `${genTheme.activeBg} font-extrabold ring-4`
                    : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-black tracking-tight">{gen.generation}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? genTheme.dot : 'bg-slate-300'}`} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold leading-none mb-0.5">{gen.period}</span>
                  <span className={`block text-[9px] font-black leading-tight tracking-tight ${isSelected ? genTheme.text : 'text-slate-500'}`}>
                    {gen.badge.split(' / ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Parameters Input Form (7 columns) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border-2 border-blue-500/35 shadow-md space-y-6 hover:border-blue-500/50 transition-all duration-300 ring-4 ring-blue-500/5">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h3 className="text-base sm:text-lg font-black text-slate-950 flex items-center gap-2.5 uppercase tracking-tight">
              <span className="p-1.5 bg-blue-500 text-white rounded-xl inline-flex shadow-sm">
                <Activity className="w-4.5 h-4.5" />
              </span>
              진료비 영수증 상세 정보 입력
            </h3>
            <button 
              onClick={handleReset}
              className="text-[11px] bg-slate-100 hover:bg-[#123941] hover:text-white text-slate-600 px-3 py-1.5 rounded-lg font-extrabold transition-all duration-250 cursor-pointer"
            >
              초기화
            </button>
          </div>

          {/* Treatment Type selector (통원 vs 입원) */}
          <div className="space-y-2">
            <span className="block text-xs font-black text-slate-500 uppercase tracking-wider">진료 방식 유형 선택</span>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setTreatmentType('outpatient')}
                className={`py-3 px-4 text-xs font-black rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  treatmentType === 'outpatient'
                    ? 'border-[#123941] bg-[#123941] text-white shadow-md font-extrabold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>통원 치료</span>
                <span className={`text-[9px] font-bold ${treatmentType === 'outpatient' ? 'text-amber-400' : 'text-slate-400'}`}>
                  외래 진료 및 처방 조제약
                </span>
              </button>
              <button
                type="button"
                onClick={() => setTreatmentType('inpatient')}
                className={`py-3 px-4 text-xs font-black rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  treatmentType === 'inpatient'
                    ? 'border-[#123941] bg-[#123941] text-white shadow-md font-extrabold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>입원 치료</span>
                <span className={`text-[9px] font-bold ${treatmentType === 'inpatient' ? 'text-amber-400' : 'text-slate-400'}`}>
                  6시간 이상 체류 / 입원실 병상 이용
                </span>
              </button>
            </div>
          </div>

          {/* Outpatient Hospital Type Selection - DELETED by user request */}

          {/* Numeric Expenses Input Fields */}
          <div className="space-y-5">
            
            {/* 1. 급여 본인부담금 */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 focus-within:border-blue-500 focus-within:bg-white transition-all space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  급여병원치료비(공단부담금 제외)
                </label>
                <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-black border border-blue-100">건강보험 적용</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={coveredAmount === '0' ? '' : coveredAmount}
                  onChange={(e) => setCoveredAmount(e.target.value || '0')}
                  placeholder="예: 250,000"
                  className="w-full pl-3 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-sm font-bold text-slate-800 placeholder-slate-400 transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">원</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal pl-2 font-semibold">
                진료비 영수증 상 &apos;급여&apos; 항목의 본인부담금 합계액입니다. (공단부담금 제외)
              </p>
            </div>

            {/* 2. 일반 비급여 */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 focus-within:border-amber-500 focus-within:bg-white transition-all space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  일반 비급여 병원비 <span className="text-amber-600 font-extrabold">(선택 비보장)</span>
                </label>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-black border border-amber-100 font-mono">비급여</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={nonCoveredAmount === '0' ? '' : nonCoveredAmount}
                  onChange={(e) => setNonCoveredAmount(e.target.value || '0')}
                  placeholder="예: 150,000"
                  className="w-full pl-3 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-sm font-bold text-slate-800 placeholder-slate-400 transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">원</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal pl-2 font-semibold">
                초음파, MRI 진단 외 단순 비급여 처치, 선택형 상급병실 차액 등이 해당됩니다.
              </p>
            </div>

            {treatmentType === 'outpatient' && (
              <>
                {/* 3. 약제비 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 focus-within:border-emerald-500 focus-within:bg-white transition-all space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      약국 약제비 <span className="text-emerald-600 font-extrabold">(처방 조제약값)</span>
                    </label>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-black border border-emerald-100 font-mono">약국 영수증</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="1000"
                      value={pharmacyAmount === '0' ? '' : pharmacyAmount}
                      onChange={(e) => setPharmacyAmount(e.target.value || '0')}
                      placeholder="예: 15,000"
                      className="w-full pl-3 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 text-sm font-bold text-slate-800 placeholder-slate-400 transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">원</span>
                  </div>
                </div>

                {/* 4. 비급여 3대 특약 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 focus-within:border-teal-600 focus-within:bg-white transition-all space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      비급여 3대 특약 항목 <span className="text-teal-700 font-extrabold">(도수치료/주사료/MRI)</span>
                    </label>
                    <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-black border border-teal-200 font-mono">고강도 공제</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="1000"
                      value={specialThreeAmount === '0' ? '' : specialThreeAmount}
                      onChange={(e) => setSpecialThreeAmount(e.target.value || '0')}
                      placeholder="예: 120,000"
                      className="w-full pl-3 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/10 focus:border-teal-600 text-sm font-bold text-slate-800 placeholder-slate-400 transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">원</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal pl-2 font-semibold">
                    도수치료/체외충격파, 비급여 영양제 주사, 비급여 MRI/MRA 촬영 정밀 진단액입니다.
                  </p>
                </div>
              </>
            )}

          </div>

          <div className="pt-5 border-t border-slate-200 flex items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-3xs">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">병원비 총 지출 합계액:</span>
            <span className="font-mono font-black text-slate-900 text-xl md:text-2xl tracking-tight">
              {formatKRW(totalExpense)}
            </span>
          </div>

        </div>

        {/* Right Side: Calculation & Simulated Comparison Panel (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Calculation focus panel for selected Generation */}
          <div className="bg-[#123941] text-white p-5 md:p-6 rounded-2xl border border-slate-800 shadow-lg space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
            
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  선택 세대 결과
                </span>
                <h3 className="text-base font-black mt-1">{activeGen.generation} 상세 진단</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 font-bold">{activeGen.period}</span>
            </div>

            <div className="relative z-10 space-y-3.5 pt-1.5">
              
              <div className="flex justify-between items-end">
                <span className="text-xs text-slate-300 font-bold">병원 청구 금액</span>
                <span className="text-sm font-bold font-mono text-slate-200">{formatKRW(totalExpense)}</span>
              </div>

              <div className="flex justify-between items-end border-b border-white/5 pb-3">
                <span className="text-xs text-slate-300 font-bold">자기부담금 (공제액)</span>
                <span className="text-sm font-bold font-mono text-amber-400">
                  - {formatKRW(activeResult.deductible)}
                </span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1 text-center">
                <span className="block text-[10px] text-slate-300 font-black uppercase tracking-wider">최종 예상 보험금 수령액</span>
                <span className="block text-2xl font-black font-mono text-white tracking-tight">
                  {formatKRW(activeResult.payout)}
                </span>
                <span className="inline-block text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-1">
                  지출 대비 보장율 {activeResult.payoutPercent}%
                </span>
              </div>

            </div>
          </div>

          {/* Quick Informational Guide */}
          <div className="bg-amber-500/5 p-4 rounded-2xl border border-amber-500/20 text-slate-700 space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <AlertCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-extrabold text-slate-900 leading-tight">실손 세대별 모의 계산 핵심 공지</p>
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  본 계산기는 표준적인 입/통원 자기부담비율 가이드에 의거해 실시간 시뮬레이션합니다. 가입시기/세대별/가입상품에 따라 실제 지급 결과가 상이할 수 있으므로, <span className="text-amber-800 font-extrabold bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px] inline-block mt-0.5">단순 참고용</span>으로만 활용해 주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Selected Generation Detailed Spec Specifications */}
      {(() => {
        const genColorTheme = 
          activeGenId === 'gen-1' ? { border: 'border-emerald-200 focus:border-emerald-500', bg: 'bg-emerald-50/40', text: 'text-emerald-700', badge: 'bg-emerald-500 text-white', accent: 'emerald' } :
          activeGenId === 'gen-2' ? { border: 'border-blue-200 focus:border-blue-500', bg: 'bg-blue-50/40', text: 'text-blue-700', badge: 'bg-blue-500 text-white', accent: 'blue' } :
          activeGenId === 'gen-3' ? { border: 'border-indigo-200 focus:border-indigo-500', bg: 'bg-indigo-50/40', text: 'text-indigo-700', badge: 'bg-indigo-500 text-white', accent: 'indigo' } :
          activeGenId === 'gen-4' ? { border: 'border-amber-200 focus:border-amber-500', bg: 'bg-amber-50/40', text: 'text-amber-800', badge: 'bg-amber-500 text-white', accent: 'amber' } :
          { border: 'border-teal-200 focus:border-teal-600', bg: 'bg-teal-50/40', text: 'text-teal-800', badge: 'bg-[#123941] text-white', accent: 'teal' };

        return (
          <div className={`bg-white p-6 md:p-8 rounded-3xl border-2 ${genColorTheme.border} shadow-md space-y-6 transition-all duration-300`}>
            
            {/* 5세대 실손 (2026.05 개정) 담보별 세부 명세표 (상단 배치) */}
            {activeGenId === 'gen-5' && (
              <div className="space-y-4 bg-teal-50/30 p-5 md:p-6 rounded-2xl border border-teal-200/70">
                <div className="flex items-center gap-2 border-b border-teal-200/80 pb-3">
                  <span className="p-1.5 bg-[#123941] text-white rounded-lg inline-flex">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[#123941]">
                      5세대 실손의료비보험 담보별 가입 제안 요약 (2026년 5월 개정)
                    </h4>
                    <p className="text-[11px] text-teal-800 font-bold">
                      전 보험사 공통 실손의료비보험2605 표준형 기준
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-teal-100/70 text-[#123941] border-b border-teal-200 text-[11px] font-black">
                        <th className="p-2.5 rounded-l-lg">구분 및 담보명</th>
                        <th className="p-2.5">가입금액</th>
                        <th className="p-2.5 rounded-r-lg">주요 보장 내용 및 공제액</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-teal-100/80 font-semibold text-slate-700">
                      <tr className="bg-white/80">
                        <td className="p-2.5 font-bold text-slate-900">
                          (기본형) 상해급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">5,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          급여 본인부담금 80% 보장 (20% 공제, 통원 1만~2만 원/20% 중 큰 금액, 통원 회당 20만 한도)
                        </td>
                      </tr>
                      <tr className="bg-white/80">
                        <td className="p-2.5 font-bold text-slate-900">
                          (기본형) 질병급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">5,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          급여 본인부담금 80% 보장 (20% 공제, 통원 1만~2만 원/20% 중 큰 금액, 통원 회당 20만 한도)
                        </td>
                      </tr>
                      <tr className="bg-teal-50/60">
                        <td className="p-2.5 font-bold text-[#123941]">
                          (특약형1, 중증) 상해비급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">5,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 대상 중증 치료 비급여 70% 보장 (통원 회당 3만 원/30% 중 큰 금액, 연 100회)
                        </td>
                      </tr>
                      <tr className="bg-teal-50/60">
                        <td className="p-2.5 font-bold text-[#123941]">
                          (특약형1, 중증) 질병비급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">5,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 대상 중증 치료 비급여 70% 보장 (통원 회당 3만 원/30% 중 큰 금액, 연 100회)
                        </td>
                      </tr>
                      <tr className="bg-teal-50/60">
                        <td className="p-2.5 font-bold text-[#123941]">
                          (특약형1, 중증) 3대비급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">350만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 3대비급여 공제 1회당 3만 원/30% (도수 350만/연 50회, 주사 250만/연 50회)
                        </td>
                      </tr>
                      <tr className="bg-white/80">
                        <td className="p-2.5 font-bold text-slate-900">
                          (특약형2, 비중증) 상해비급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">1,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 외 일반 비급여 50% 보장 (통원 1일당 5만 원/50% 중 큰 금액, 연 100일)
                        </td>
                      </tr>
                      <tr className="bg-white/80">
                        <td className="p-2.5 font-bold text-slate-900">
                          (특약형2, 비중증) 질병비급여의료비
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">1,000만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 외 일반 비급여 50% 보장 (통원 1일당 5만 원/50% 중 큰 금액, 연 100일)
                        </td>
                      </tr>
                      <tr className="bg-white/80">
                        <td className="p-2.5 font-bold text-slate-900">
                          (특약형2, 비중증) 비급여 MRI/MRA
                        </td>
                        <td className="p-2.5 font-mono text-slate-800">200만 원</td>
                        <td className="p-2.5 text-[11px]">
                          산정특례 외 자기공명영상 1회당 5만 원/50% 중 큰 금액 공제 (연간 200만 원 한도)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Header section with dynamic colors and icons */}
            <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    activeGenId === 'gen-1' ? 'bg-emerald-500' :
                    activeGenId === 'gen-2' ? 'bg-blue-500' :
                    activeGenId === 'gen-3' ? 'bg-indigo-500' :
                    activeGenId === 'gen-4' ? 'bg-amber-500' :
                    'bg-teal-600'
                  }`} />
                  <h3 className="text-lg md:text-xl font-black text-slate-800 tracking-tight">
                    {activeGen.generation} 핵심 분석 가이드
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-bold">
                  {activeGenId === 'gen-5'
                    ? '가장 쉽게 이해하는 5세대 실손의료비 핵심 보장 및 공제 안내입니다.'
                    : '보험 설계사와 실무 소비자가 완벽하게 숙지해야 할 세대별 심층 장단점 분석 자료입니다.'}
                </p>
              </div>
              <span className={`text-xs font-black px-3.5 py-1.5 rounded-xl shadow-2xs tracking-wide self-start sm:self-center uppercase ${activeGen.badgeColor}`}>
                {activeGen.badge}
              </span>
            </div>

            {/* Grid Specs: 2-column layout with bold visual boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 자기부담 및 공제 방식 Card */}
              <div className="bg-slate-50/60 hover:bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3 transition-colors duration-200">
                <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
                  <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                    <Coins className="w-4 h-4" />
                  </div>
                  <span>자기부담 및 공제 방식</span>
                </div>
                <div className="text-xs md:text-[13px] font-extrabold text-slate-700 leading-relaxed pl-1">
                  {activeGen.deductibleDesc}
                </div>
              </div>

              {/* 보장 한도액 설정 Card */}
              <div className="bg-slate-50/60 hover:bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3 transition-colors duration-200">
                <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
                  <div className="p-1.5 bg-indigo-500/10 text-indigo-600 rounded-lg">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>보장 한도액 설정</span>
                </div>
                <div className="text-xs md:text-[13px] font-extrabold text-slate-700 leading-relaxed pl-1">
                  {activeGen.limitDesc}
                </div>
              </div>

            </div>

            {/* Pros & Cons with distinct modern side-by-side card styles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Pros Card */}
              <div className="bg-emerald-50/30 hover:bg-emerald-50/50 border-2 border-emerald-100/80 rounded-2xl p-5 md:p-6 space-y-3 text-left transition-all duration-200 shadow-3xs">
                <h5 className="text-sm font-black text-emerald-800 flex items-center gap-2 uppercase">
                  <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg inline-flex">
                    <ThumbsUp className="w-4 h-4" />
                  </span>
                  주요 장점 및 추천 포인트
                </h5>
                <p className="text-xs md:text-[13px] text-slate-700 leading-relaxed font-bold">
                  {activeGen.pros}
                </p>
              </div>

              {/* Cons Card */}
              <div className="bg-amber-50/30 hover:bg-amber-50/60 border-2 border-amber-100/80 rounded-2xl p-5 md:p-6 space-y-3 text-left transition-all duration-200 shadow-3xs">
                <h5 className="text-sm font-black text-amber-900 flex items-center gap-2 uppercase">
                  <span className="p-1.5 bg-amber-100 text-amber-800 rounded-lg inline-flex">
                    <ThumbsDown className="w-4 h-4" />
                  </span>
                  단점 및 주요 주의 사항
                </h5>
                <p className="text-xs md:text-[13px] text-slate-700 leading-relaxed font-bold">
                  {activeGen.cons}
                </p>
              </div>

            </div>

            {/* Checklist of core points */}
            <div className="space-y-4 bg-slate-50/40 p-5 md:p-6 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#123941]" />
                {activeGenId === 'gen-5' 
                  ? '5세대 실손 쉽게 이해하는 핵심 요약 노트'
                  : '실무 영업 및 계약 관리를 위한 설계사 핵심 요약 노트'}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {activeGen.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100/80 hover:border-slate-200 text-xs md:text-[13px] text-slate-700 font-extrabold leading-relaxed transition-all shadow-3xs"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-[10px] font-black text-slate-500 shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );
      })()}

    </div>
  );
}
