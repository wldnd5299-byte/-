/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  ShieldAlert,
  Building2,
  FileSearch,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import {
  PolicySearchItem,
  searchPolicyItems,
} from '../data/policySearchData';

type SearchStatus = 'idle' | 'empty' | 'found' | 'not-found';

export default function PolicySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState<SearchStatus>('idle');
  const [results, setResults] = useState<PolicySearchItem[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) {
      setSubmittedQuery('');
      setResults([]);
      setSearchStatus('empty');
      return;
    }

    const matched = searchPolicyItems(trimmed);
    setSubmittedQuery(trimmed);
    setResults(matched);
    setSearchStatus(matched.length > 0 ? 'found' : 'not-found');
  };

  const handleClear = () => {
    setSearchQuery('');
    setSubmittedQuery('');
    setResults([]);
    setSearchStatus('idle');
  };

  return (
    <div className="space-y-6 text-left">
      {/* 1. 상단 타이틀 및 설명 헤더 */}
      <div className="relative bg-[#123941] p-5 sm:p-6 rounded-xl border border-slate-800 overflow-hidden text-white shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(#cb9f74_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#cb9f74]/20 border border-[#cb9f74]/40 text-[#fde047] text-[11px] font-extrabold tracking-wider uppercase">
            <FileSearch className="w-3.5 h-3.5 text-[#fde047]" />
            보험사 공식 공시실 안내
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            보험상품 약관 찾기
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium max-w-3xl">
            보험회사와 보험상품명을 검색하여 해당 보험회사의 공식 상품공시실에서 가입 당시 약관을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 2. 검색 입력 영역 */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 text-left">
        <form onSubmit={handleSearch} className="space-y-3" noValidate>
          <label
            htmlFor="policy-search-input"
            className="block text-xs font-black text-slate-700 tracking-wider"
          >
            보험회사 또는 보험상품명 검색
          </label>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="policy-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="보험회사 또는 보험상품명을 입력하세요 예: 삼성생명 희망사랑보험"
                className="w-full pl-11 pr-10 py-3 text-sm sm:text-base bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#123941] focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label="입력 지우기"
                  title="입력 지우기"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#123941] hover:bg-[#0d2b31] text-white font-black text-sm sm:text-base transition-colors cursor-pointer shrink-0 shadow-xs inline-flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-[#cb9f74]" />
              <span>상품 검색</span>
            </button>
          </div>
        </form>
      </div>

      {/* 3. 검색 상태별 결과 영역 */}
      {searchStatus === 'empty' && (
        <div
          role="status"
          className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-5 sm:p-6 text-left shadow-2xs flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm font-bold text-amber-900">
            보험회사 또는 보험상품명을 입력해 주세요.
          </p>
        </div>
      )}

      {searchStatus === 'found' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#123941] text-sm sm:text-base">
                &ldquo;{submittedQuery}&rdquo;
              </span>
              <span className="text-slate-500 font-medium">검색 결과</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-[#123941] text-white font-bold">
              확인된 상품군 <span className="text-[#fde047] font-black">{results.length}</span>건
            </span>
          </div>

          <div className="space-y-4">
            {results.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 text-left"
              >
                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#123941] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#cb9f74]" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-black text-[#123941]">
                      {item.insurerName}
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      {item.productGroupName}
                    </h2>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2">
                  {item.guideText.split('\n').map((line, idx) => (
                    <p
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-start">
                  <a
                    href={item.officialDisclosureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#123941] hover:bg-[#0d2b31] text-white font-black text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    <span>삼성생명 공식 상품공시실에서 확인</span>
                    <ExternalLink className="w-4 h-4 text-[#cb9f74] shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchStatus === 'not-found' && (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-base font-black text-slate-800">
            아직 보험브릿지에 등록되지 않은 상품입니다.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
            보험증권의 정확한 보험회사와 상품명을 확인해 주세요.
            <br />
            상품별 공식 공시실 연결은 순차적으로 추가될 예정입니다.
          </p>
        </div>
      )}

      {/* 4. 필수 주의사항 안내문 (항상 표시) */}
      <section className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs text-left">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-black text-amber-900">
              이용 안내 및 주의사항
            </h2>
            <div className="space-y-1.5 text-xs text-amber-900/90 leading-relaxed font-medium">
              <p>
                본 페이지는 보험상품 약관을 쉽게 찾을 수 있도록 보험회사의 공식 상품공시실을 안내합니다.
              </p>
              <p>
                동일하거나 유사한 상품명이라도 가입 시기와 상품 버전에 따라 적용 약관 및 보장내용이 다를 수 있습니다.
              </p>
              <p>
                보험증권의 정확한 상품명과 계약일을 확인한 후 해당 판매기간의 공식 약관을 확인하시기 바랍니다.
              </p>
              <p>
                보험브릿지는 보험회사의 공식 홈페이지가 아니며, 최종적인 보장 여부와 보험금 지급 여부는 가입 당시 약관 및 보험회사의 심사에 따라 결정됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
