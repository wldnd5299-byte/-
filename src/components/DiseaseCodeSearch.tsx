/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  AlertCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Building2,
  ExternalLink,
  ShieldAlert,
  Info,
  Layers,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import {
  searchDiseaseCodeInTerms,
  SearchDiseaseCodeResult,
  InsurerMatchGroup
} from '../data/diseaseCodeSearch';
import { INSURER_SUBTABS } from '../data/terms';

interface DiseaseCodeSearchProps {
  initialQuery?: string;
  onNavigateTerms?: (insurerId: string, subTabId: string, filter?: string) => void;
}

export default function DiseaseCodeSearch({ initialQuery = '', onNavigateTerms }: DiseaseCodeSearchProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  
  // 아코디언 상태 관리 (기본적으로 모두 펼침)
  const [expandedInsurers, setExpandedInsurers] = useState<Record<string, boolean>>({});

  // URL 쿼리 파라미터 연동
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        setSearchQuery(q);
        setDebouncedQuery(q);
      }
    }
  }, []);

  // 디바운스 입력 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 150);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // 검색 결과 계산 (동적 집계)
  const searchResult: SearchDiseaseCodeResult = useMemo(() => {
    return searchDiseaseCodeInTerms(debouncedQuery);
  }, [debouncedQuery]);

  // 검색어가 변경될 때 아코디언 상태 초기화 (결과가 있으면 기본 펼침)
  useEffect(() => {
    if (searchResult.groups.length > 0) {
      const initialExpanded: Record<string, boolean> = {};
      searchResult.groups.forEach((g) => {
        initialExpanded[g.insurerId] = true;
      });
      setExpandedInsurers(initialExpanded);
    }
  }, [searchResult]);

  const toggleInsurer = (insurerId: string) => {
    setExpandedInsurers((prev) => ({
      ...prev,
      [insurerId]: !prev[insurerId],
    }));
  };

  const handleClear = () => {
    setSearchQuery('');
    setDebouncedQuery('');
  };

  const handleSelectExample = (code: string) => {
    setSearchQuery(code);
    setDebouncedQuery(code);
  };

  const handleGoToTerms = (insurerId: string, subTabId: string, filterText: string) => {
    if (onNavigateTerms) {
      onNavigateTerms(insurerId, subTabId, filterText);
      return;
    }

    if (typeof window !== 'undefined') {
      // 기존 terms 라우팅 이벤트 발생
      window.dispatchEvent(
        new CustomEvent('ib-navigate-terms', {
          detail: {
            insurerId,
            subTab: subTabId,
            filter: filterText,
          },
        })
      );
      // URL 변경 및 popstate
      window.history.pushState(null, '', `/terms/${insurerId}/${subTabId}/`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const hasSearched = debouncedQuery.trim().length > 0;

  return (
    <div className="space-y-6 text-left">
      {/* 1. 상단 타이틀 및 설명 헤더 */}
      <div className="relative bg-[#123941] p-5 sm:p-6 rounded-xl border border-slate-800 overflow-hidden text-white shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#cb9f74]/20 border border-[#cb9f74]/40 text-[#fde047] text-[11px] font-extrabold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
            SOURCE-LOCK 약관 대조 도구
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            질병코드 검색 및 보험 담보 분류표 찾기
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium max-w-3xl">
            한국표준질병사인분류(KCD) 질병코드 또는 질병명을 검색하여, 현재 보험브릿지 약관 원본에 등록된 보험사별 담보 분류표에서 해당 코드가 기재된 항목을 실시간으로 역조회합니다.
          </p>
        </div>
      </div>

      {/* 2. 안전장치 주의 안내문 */}
      <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-4 text-left shadow-2xs">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-black text-amber-900 uppercase tracking-wide">
              검색 전 필독 안전 안내사항 (참고자료 확인)
            </h4>
            <p className="text-[11px] sm:text-xs text-amber-800 leading-relaxed font-medium">
              본 검색 결과는 보험브릿지에 등록된 약관 및 담보별 분류표 원본에 해당 KCD 코드 또는 질병명이 기재되어 있는지를 단순 대조하여 보여주는 참고자료입니다. 
              검색 결과만으로 보험금 지급 여부 또는 실제 보장 여부를 판단할 수 없으며, 가입하신 개별 보험계약의 증권과 약관을 반드시 확인해야 합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 3. 단일 통합 검색창 영역 */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 text-left">
        <div className="space-y-1.5">
          <label htmlFor="disease-search-input" className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            KCD 질병코드 또는 질병명 입력
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="disease-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="질병코드(예: I20, I63, C50, M51, E11) 또는 질병명(예: 협심증, 뇌경색증, 당뇨병) 입력"
              className="w-full pl-11 pr-10 py-3 text-sm sm:text-base bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#123941] focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                title="입력 지우기"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 빠른 예시 검색 태그 버튼 */}
        <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <span className="font-bold text-slate-600 mr-1 text-[11px]">다빈도 예시 코드:</span>
          {['I20', 'I63', 'C50', 'M51', 'E11', '협심증', '뇌경색증', '기타 추간판장애', '유방의 악성 신생물'].map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => handleSelectExample(ex)}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#123941] hover:text-white border border-slate-200/80 font-bold text-slate-700 transition-all cursor-pointer text-[11px]"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* 4. 검색 결과 영역 */}
      {hasSearched && (
        <div className="space-y-4">
          {/* 동적 통계 바 */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#123941] text-sm sm:text-base">
                &ldquo;{searchResult.normalizedQuery}&rdquo;
              </span>
              <span className="text-slate-400 font-medium">검색 결과</span>
            </div>

            <div className="flex items-center gap-3 font-bold text-slate-700">
              <div className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                확인된 보험사: <span className="text-[#123941] font-black">{searchResult.matchedInsurersCount}</span>개사
              </div>
              <div className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                확인된 담보: <span className="text-[#123941] font-black">{searchResult.matchedCoveragesCount}</span>개
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#123941] text-white">
                확인된 항목: <span className="text-[#fde047] font-black">{searchResult.totalItemsCount}</span>건
              </div>
            </div>
          </div>

          {/* 결과가 0건일 때 */}
          {searchResult.totalItemsCount === 0 ? (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-800">
                일치하는 담보 분류표 항목을 찾지 못했습니다
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                현재 보험브릿지에 등록된 11개 보험사 125개 담보 분류표 SOURCE에서 해당 검색어(&ldquo;{searchResult.normalizedQuery}&rdquo;)와 일치하는 약관 기재 항목이 존재하지 않습니다.
              </p>
              <div className="pt-2 text-[11px] text-slate-400">
                단독 코드가 등록되지 않았거나, 범위코드(예: I20~I25) 형태로만 기재되어 있을 수 있습니다.
              </div>
            </div>
          ) : (
            /* 결과 목록: 보험사별 그룹 */
            <div className="space-y-4">
              {searchResult.groups.map((group) => {
                const isExpanded = expandedInsurers[group.insurerId] ?? true;
                return (
                  <div
                    key={group.insurerId}
                    className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs text-left"
                  >
                    {/* 보험사 카드 헤더 (클릭 시 아코디언 토글) */}
                    <button
                      type="button"
                      onClick={() => toggleInsurer(group.insurerId)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 bg-slate-50/80 hover:bg-slate-100/80 border-b border-slate-200/80 transition-colors cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#123941] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
                          <Building2 className="w-4 h-4 text-[#cb9f74]" />
                        </div>
                        <div>
                          <h2 className="text-base font-black text-slate-900">
                            {group.insurerName}
                          </h2>
                          <div className="text-[11px] font-bold text-slate-500">
                            매칭 담보 {group.coverages.length}개 · 총 {group.totalItemCount}개 레코드 확인
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black text-slate-600 hidden sm:inline-block">
                          {isExpanded ? '접기' : '상세보기'}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </button>

                    {/* 담보별 세부 내역 (아코디언 바디) */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 space-y-4 divide-y divide-slate-100">
                        {group.coverages.map((cov, covIdx) => (
                          <div key={cov.subTabId} className={covIdx > 0 ? 'pt-4' : ''}>
                            {/* 담보 헤더 및 바로가기 버튼 */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#cb9f74]" />
                                <h3 className="text-sm font-black text-[#123941]">
                                  {cov.subTabLabel}
                                </h3>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                  {cov.items.length}건
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleGoToTerms(group.insurerId, cov.subTabId, searchResult.normalizedQuery)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-black bg-slate-100 hover:bg-[#123941] hover:text-white text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                                title={`${group.insurerName} ${cov.subTabLabel} 분류표 화면으로 이동`}
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span>담보 분류표 보기</span>
                              </button>
                            </div>

                            {/* 분류표 행 목록 테이블 */}
                            <div className="overflow-x-auto border border-slate-200 rounded-xl">
                              <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 font-bold">
                                    <th className="py-2 px-3 w-1/4">약관상 분류명</th>
                                    <th className="py-2 px-3 w-1/2">SOURCE 질병명</th>
                                    <th className="py-2 px-3 w-1/4">KCD 코드</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                  {cov.items.map((item, itIdx) => (
                                    <tr key={itIdx} className="hover:bg-slate-50/60 transition-colors">
                                      <td className="py-2 px-3 text-slate-600 font-semibold align-top text-[11px]">
                                        {item.sectionTitle}
                                      </td>
                                      <td className="py-2 px-3 text-slate-900 font-black align-top">
                                        {item.disease || '-'}
                                      </td>
                                      <td className="py-2 px-3 align-top font-mono font-black text-[#123941]">
                                        <span className="inline-block px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/70 text-[11px]">
                                          {item.code}
                                        </span>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 5. 초기 미검색 상태 안내 */}
      {!hasSearched && (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#123941]/5 border border-[#123941]/10 flex items-center justify-center mx-auto text-[#123941]">
            <Layers className="w-6 h-6 text-[#123941]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900">
              KCD 질병코드 또는 질병명을 검색해 보세요
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              조회하고자 하는 한국표준질병사인분류(KCD) 코드나 질병명을 입력하시면, 현재 보험브릿지가 보유한 11개 보험사 125개 담보별 약관 분류표에서 해당 코드가 기재된 위치를 즉시 찾아드립니다.
            </p>
          </div>
        </div>
      )}

      {/* 6. 정적 SEO 안내 콘텐츠 (설명 문서) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-left">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            질병코드 검색 및 약관 분류표 대조 가이드
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            보험설계사 및 보상 실무자를 위한 약관 질병코드(KCD) 역조회 도구 활용 안내
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-2 text-xs font-black text-[#123941]">
              <Info className="w-4 h-4 text-[#cb9f74]" />
              <h3>질병코드 검색은 어떻게 사용하나요</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              진단서나 진료확인서에 기재된 한국표준질병사인분류(KCD) 알파벳+숫자 코드(예: I20, C50)나 질병명(예: 협심증, 뇌경색증)을 상단 검색창에 입력합니다. 영문 대소문자나 단순 공백 차이는 자동으로 인식되어 매칭됩니다.
            </p>
          </div>

          <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-2 text-xs font-black text-[#123941]">
              <Layers className="w-4 h-4 text-[#cb9f74]" />
              <h3>검색 결과에서 무엇을 확인할 수 있나요</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              해당 코드가 현재 보험브릿지에 등록된 어떤 보험사, 어떤 담보(암, 뇌, 심장, 수술비 등), 그리고 어떤 세부 약관 분류표에 포함되어 있는지를 계층 구조로 열람할 수 있습니다. 각 담보의 [담보 분류표 보기] 버튼을 누르면 원본 약관 화면으로 즉시 이동합니다.
            </p>
          </div>

          <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-2 text-xs font-black text-[#123941]">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <h3>질병코드 검색 시 주의할 점</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              본 도구는 약관 원본과의 단순 기재 대조 도구이며, 실제 보험금 지급 여부나 면책 조항, 감액 기간, 특정 시술 여부 등은 가입자의 개별 보험 증권과 약관 규정에 따라 결정되므로 반드시 가입 약관을 대조해야 합니다.
            </p>
          </div>
        </div>

        {/* 관련 링크 안내 */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-500 font-medium">
            전체 보험사별 상세 담보 목록과 원본 약관을 확인하시려면 담보별 분류표를 이용하세요.
          </div>
          <a
            href="/terms/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123941] text-white font-bold hover:bg-[#123941]/90 transition-colors"
          >
            <span>담보별 분류표 전체 보기</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#cb9f74]" />
          </a>
        </div>
      </section>
    </div>
  );
}
