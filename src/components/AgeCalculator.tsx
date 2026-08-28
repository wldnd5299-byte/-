import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, AlertCircle, CheckCircle2, Clock, Info, BookOpen, ArrowRight } from 'lucide-react';

export default function AgeCalculator() {
  const [birthInput, setBirthInput] = useState<string>('');
  const [results, setResults] = useState<{
    manAge: number;
    insAge: number;
    remainingMonths: number;
    remainingDays: number;
    nextAgeChangeDate: string;
    daysUntilChange: number;
  } | null>(null);

  useEffect(() => {
    // Check if input is a valid 8-digit number
    if (!/^\d{8}$/.test(birthInput)) {
      setResults(null);
      return;
    }

    const year = parseInt(birthInput.substring(0, 4), 10);
    const month = parseInt(birthInput.substring(4, 6), 10) - 1; // 0-indexed
    const day = parseInt(birthInput.substring(6, 8), 10);

    const birth = new Date(year, month, day);
    if (isNaN(birth.getTime()) || birth.getFullYear() !== year || birth.getMonth() !== month || birth.getDate() !== day) {
      setResults(null);
      return;
    }

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    // 1. Calculate Man Age
    let manAge = todayYear - year;
    let isBirthdayPassedThisYear = true;
    if (todayMonth < month) {
      isBirthdayPassedThisYear = false;
    } else if (todayMonth === month) {
      if (todayDay < day) {
        isBirthdayPassedThisYear = false;
      }
    }
    if (!isBirthdayPassedThisYear) {
      manAge -= 1;
    }
    if (manAge < 0) manAge = 0;

    // 2. Calculate Exact Month & Day difference
    let diffMonths = todayMonth - month;
    let diffDays = todayDay - day;

    if (diffDays < 0) {
      const prevMonthDate = new Date(todayYear, todayMonth, 0);
      diffDays += prevMonthDate.getDate();
      diffMonths -= 1;
    }

    if (diffMonths < 0) {
      diffMonths += 12;
    }

    // 3. Insurance Age
    let totalMonthsDiff = (todayYear - year) * 12 + (todayMonth - month);
    let isMonthlyAnniversaryPassed = todayDay >= day;

    const lastDayOfTodayMonth = new Date(todayYear, todayMonth + 1, 0).getDate();
    if (!isMonthlyAnniversaryPassed && todayDay === lastDayOfTodayMonth && day >= todayDay) {
      isMonthlyAnniversaryPassed = true;
    }

    if (!isMonthlyAnniversaryPassed) {
      totalMonthsDiff -= 1;
    }
    if (totalMonthsDiff < 0) totalMonthsDiff = 0;

    const calculatedManAge = Math.floor(totalMonthsDiff / 12);
    const remainingMonths = totalMonthsDiff % 12;
    const insAge = remainingMonths >= 6 ? calculatedManAge + 1 : calculatedManAge;

    // 4. Calculate Next Age Change Date (상령일)
    // Insurance age increases by 1 when remaining months becomes 6.
    // This happens exactly on (Birth Month + 6 months) from the birth year, recurring annually.
    const candidates: Date[] = [];
    const baseCompare = new Date(todayYear, todayMonth, todayDay);

    for (let y = todayYear - 1; y <= todayYear + 2; y++) {
      let targetMonth = month + 6;
      let targetYear = y;
      if (targetMonth >= 12) {
        targetMonth -= 12;
        targetYear += 1;
      }

      const maxDaysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
      const targetDay = Math.min(day, maxDaysInTargetMonth);

      const changeDate = new Date(targetYear, targetMonth, targetDay);
      candidates.push(changeDate);
    }

    candidates.sort((a, b) => a.getTime() - b.getTime());

    const nextChange = candidates.find(c => {
      const cCompare = new Date(c.getFullYear(), c.getMonth(), c.getDate());
      return cCompare > baseCompare;
    }) || candidates[candidates.length - 1];

    const formattedNextChange = `${nextChange.getFullYear()}년 ${String(nextChange.getMonth() + 1).padStart(2, '0')}월 ${String(nextChange.getDate()).padStart(2, '0')}일`;

    // Days until change
    const nextChangeCompare = new Date(nextChange.getFullYear(), nextChange.getMonth(), nextChange.getDate());
    const diffTime = nextChangeCompare.getTime() - baseCompare.getTime();
    const daysUntilChange = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    setResults({
      manAge,
      insAge,
      remainingMonths,
      remainingDays: diffDays,
      nextAgeChangeDate: formattedNextChange,
      daysUntilChange,
    });
  }, [birthInput]);

  const hasResults = results !== null;
  const insAgeStr = hasResults ? `${results.insAge}세` : '0세';
  const insAgeDesc = hasResults 
    ? (results.remainingMonths >= 6 ? '실제 생일 기준 6개월 경과로 +1세 반올림 적용' : '실제 생일 기준 6개월 미만으로 버림 적용')
    : '생년월일을 입력하시면 반올림 적용 기준이 표시됩니다.';
  const nextAgeChangeDateStr = hasResults ? results.nextAgeChangeDate : '-년 -월 -일';
  const daysUntilChange = hasResults ? results.daysUntilChange : 0;
  const progressWidth = hasResults ? Math.max(2, Math.min(100, ((183 - results.daysUntilChange) / 183) * 100)) : 0;
  const isCloseToChange = hasResults ? (results.daysUntilChange <= 30) : false;

  return (
    <div className="space-y-6 text-left max-w-2xl mx-auto">
      {/* Title Header */}
      <div className="relative bg-[#123941] p-6 rounded-2xl border border-slate-800 shadow-md overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#cb9f74_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight break-keep leading-tight">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#cb9f74] inline-block mr-2 align-text-bottom shrink-0" />
            <span className="text-[#cb9f74]">보험나이</span> 및 상령일 정밀 계산기
          </h2>
          <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
            생년월일을 기준으로 법적인 만 나이와 다른 <span className="text-[#cb9f74] font-bold">보험나이</span>를 계산하고, 보험료가 오르는 기준일인 <span className="text-[#cb9f74] font-bold">상령일</span>까지 남은 기간을 추적합니다.
          </p>
        </div>
      </div>

      {/* Main Single Column Layout Card */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
        
        {/* Input Section */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            생년월일
          </label>
          <input
            type="text"
            pattern="\d*"
            maxLength={8}
            placeholder="생년월일 8자리 (예:19830102)"
            value={birthInput}
            onChange={(e) => setBirthInput(e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full px-4 py-3 text-base font-bold border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#253c6e] focus:border-[#253c6e] bg-slate-50 text-slate-900 transition-colors placeholder:text-slate-400 text-center tracking-widest"
          />
          <p className="text-xs text-slate-400 mt-2 font-medium leading-normal text-center">
            숫자 8자리만 입력하시면 자동으로 보험나이가 정밀 계산됩니다.
          </p>
        </div>

        <div className="space-y-6 pt-2 border-t border-slate-100">
          
          {/* Main Result Displays - Vertically Stacked */}
          <div className="space-y-4">
            
            {/* 1. Final Insurance Age (보험나이) */}
            <div className="p-5 bg-[#123941] rounded-xl text-white shadow-xs text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Calculator className="w-16 h-16 text-white" />
              </div>
              <div className="relative z-10">
                <span className="text-[11px] font-bold text-[#cb9f74] uppercase tracking-widest block">최종 보험나이</span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono mt-2 block">
                  {insAgeStr}
                </span>
                <span className="text-[11px] text-slate-300 font-medium mt-1.5 block">
                  {insAgeDesc}
                </span>
              </div>
            </div>

            {/* 3. Next Age Change Date (상령일) */}
            <div className="bg-[#cb9f74]/5 p-5 rounded-xl border border-[#cb9f74]/20 space-y-3 text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-xs font-bold text-[#cb9f74] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#cb9f74]" />
                  다음 상령일 (보험나이 인상 기준일)
                </span>
                <strong className="text-lg font-black text-slate-900 mt-1">
                  {nextAgeChangeDateStr}
                </strong>
              </div>
              
              <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
                <div className="w-full h-2.5 bg-slate-200 overflow-hidden rounded-full">
                  <div 
                    className={`h-full transition-all duration-500 rounded-full ${isCloseToChange ? 'bg-[#cb9f74]' : 'bg-[#123941]'}`}
                    style={{ width: `${progressWidth}%` }}
                  />
                </div>
                <span className="text-xs text-slate-600 font-bold">
                  보험나이 인상까지 <strong className="text-[#cb9f74] text-sm font-mono">{daysUntilChange}일</strong> 남음
                </span>
              </div>
            </div>

          </div>

          {/* Information Card & SEO Content */}
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-4 text-left">
            <div className="space-y-1.5">
              <h2 className="text-xs sm:text-sm font-bold text-[#123941] flex items-center gap-1.5 uppercase tracking-wider">
                <Info className="w-4 h-4 text-[#cb9f74] shrink-0" />
                보험 상령일이란?
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                <strong>상령일(보험 상령일)</strong>은 실제 생년월일에서 6개월이 경과하여 보험 약관상 <strong>보험나이가 1세 올라가는 기준일</strong>을 의미합니다. 법적 만 나이와 달리, 보험료 산출과 위험률 적용의 공식 기준점이 됩니다.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#123941] flex items-center gap-1.5 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#cb9f74] shrink-0" />
                보험 상령일은 어떻게 계산하나요?
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                보험 약관에서는 계약일(또는 현재일) 현재의 실제 만 나이를 기준으로 <strong>6개월 미만의 단수는 버리고, 6개월 이상의 단수는 1년으로 반올림</strong>하여 계산합니다. 즉, <strong>매년 실제 생일로부터 정확히 6개월이 지난 날</strong>이 상령일이 됩니다.
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-200/60 pt-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#123941] flex items-center gap-1.5 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#cb9f74] shrink-0" />
                상령일 계산 예시
              </h2>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <p>• <strong>예시 1:</strong> 생일이 <strong>1월 15일</strong>인 경우 → 매년 <strong>7월 15일</strong>이 상령일</p>
                <p>• <strong>예시 2:</strong> 생일이 <strong>8월 20일</strong>인 경우 → 다음 해 <strong>2월 20일</strong>이 상령일</p>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#123941] flex items-center gap-1.5 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#cb9f74] shrink-0" />
                보험나이와 상령일의 관계
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                실제 생일로부터 6개월이 지나 상령일이 도래하면 만 나이보다 먼저 보험나이가 1세 증가하게 됩니다. 위 계산기에서 생년월일 8자리를 입력하시면 다음 상령일 날짜와 인상까지 남은 일수를 실시간으로 확인하실 수 있습니다.
              </p>
            </div>

            {/* Link to Info Article */}
            <div className="pt-2">
              <a
                href="/info/insurance-age-change-date/"
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200/80 hover:border-[#cb9f74]/50 hover:bg-slate-50/80 transition-all text-xs font-bold text-[#123941] group"
              >
                <span className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-[#123941]/10 text-[#123941] text-[10px] font-bold">상세 가이드</span>
                  상령일 뜻과 보험나이 계산법 자세히 보기
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#cb9f74] group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
