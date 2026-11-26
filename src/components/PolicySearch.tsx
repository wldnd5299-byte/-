/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import {
  Search,
  ExternalLink,
  ShieldAlert,
  Building2,
  FileSearch,
  AlertCircle,
  RotateCcw,
  Copy,
  Check,
  Calendar,
  Hash,
  Layers,
  ChevronDown,
  Info,
} from 'lucide-react';
import {
  PolicyProductRecord,
  PolicyStatusFilter,
  SAMSUNG_LIFE_DISCLOSURE_META,
  SAMSUNG_LIFE_POLICY_RECORDS,
  SAMSUNG_LIFE_RAW_COUNTS,
  getPolicyRecordsByStatus,
  getSamsungLifeDisclosureStats,
  searchPolicyProducts,
} from '../data/policySearchData';

type SearchStatus = 'idle' | 'empty' | 'found' | 'not-found';

const PAGE_SIZE = 20;

const EXAMPLE_QUERIES = [
  '삼성생명 희망사랑보험',
  '희망사랑보험 3.0',
  '삼성생명',
];

async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }
  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    } catch {
      return false;
    }
  }
  return false;
}

export default function PolicySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState<SearchStatus>('idle');
  const [statusFilter, setStatusFilter] = useState<PolicyStatusFilter>('ALL');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const datasetStats = useMemo(
    () => getSamsungLifeDisclosureStats(SAMSUNG_LIFE_POLICY_RECORDS),
    []
  );

  const allMatchedInSearch = useMemo(() => {
    if (searchStatus !== 'found' || !submittedQuery) return [];
    return searchPolicyProducts(submittedQuery, 'ALL');
  }, [searchStatus, submittedQuery]);

  const browseRecords = useMemo(() => {
    return getPolicyRecordsByStatus(statusFilter);
  }, [statusFilter]);

  const activeCounts = useMemo(() => {
    if (searchStatus === 'found') {
      let onSale = 0;
      let discontinued = 0;
      for (const item of allMatchedInSearch) {
        if (item.salesStatus === '판매 중') onSale++;
        else discontinued++;
      }
      return {
        all: allMatchedInSearch.length,
        onSale,
        discontinued,
      };
    }

    return {
      all: datasetStats.displayTotalRows,
      onSale: datasetStats.onSaleCount,
      discontinued: datasetStats.discontinuedCount,
    };
  }, [searchStatus, allMatchedInSearch, datasetStats]);

  const filteredDisplayRows: PolicyProductRecord[] = useMemo(() => {
    if (searchStatus === 'found') {
      if (statusFilter === 'ALL') return allMatchedInSearch;
      return allMatchedInSearch.filter((item) => item.salesStatus === statusFilter);
    }
    if (searchStatus === 'idle') {
      return browseRecords;
    }
    return [];
  }, [searchStatus, statusFilter, allMatchedInSearch, browseRecords]);

  const visibleRows = useMemo(
    () => filteredDisplayRows.slice(0, visibleCount),
    [filteredDisplayRows, visibleCount]
  );

  const executeSearch = (rawInput: string) => {
    const trimmed = rawInput.trim();
    setVisibleCount(PAGE_SIZE);
    if (!trimmed) {
      setSubmittedQuery('');
      setSearchStatus('empty');
      return;
    }

    const matched = searchPolicyProducts(trimmed, 'ALL');
    setSubmittedQuery(trimmed);
    setSearchStatus(matched.length > 0 ? 'found' : 'not-found');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    executeSearch(searchQuery);
  };

  const handleExampleSearch = (example: string) => {
    setSearchQuery(example);
    setStatusFilter('ALL');
    executeSearch(example);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSubmittedQuery('');
    setSearchStatus('idle');
    setStatusFilter('ALL');
    setVisibleCount(PAGE_SIZE);
  };

  const handleStatusChange = (nextStatus: PolicyStatusFilter) => {
    setStatusFilter(nextStatus);
    setVisibleCount(PAGE_SIZE);
  };

  const handleCopyProductName = async (row: PolicyProductRecord) => {
    const ok = await copyTextToClipboard(row.productName);
    if (ok) {
      setCopiedId(row.id);
      window.setTimeout(() => {
        setCopiedId((prev) => (prev === row.id ? null : prev));
      }, 2000);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const showRowsSection = searchStatus === 'idle' || searchStatus === 'found';

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

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] font-bold text-slate-500">빠른 검색 예시:</span>
          {EXAMPLE_QUERIES.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => handleExampleSearch(example)}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-[#123941] transition-colors cursor-pointer"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 삼성생명 공식 상품공시실 연동 현황 요약 */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#123941] shrink-0" />
            <h2 className="text-sm font-black text-slate-900">
              삼성생명 공식 상품공시실 등록 목록
            </h2>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-600">
              수집 기준일 {SAMSUNG_LIFE_DISCLOSURE_META.capturedAt}
            </span>
          </div>
          <a
            href={SAMSUNG_LIFE_DISCLOSURE_META.officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#123941] hover:underline"
          >
            <span>삼성생명 공식 공시실 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#cb9f74]" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-bold text-slate-500">화면 표시 행 (중복 병합)</div>
            <div className="text-base font-black text-slate-900 mt-0.5">
              {datasetStats.displayTotalRows.toLocaleString()}건
            </div>
            <div className="text-[10px] font-medium text-slate-500 mt-0.5">
              공시 원본 {SAMSUNG_LIFE_RAW_COUNTS.rawTotalRows.toLocaleString()}행
            </div>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3">
            <div className="text-[11px] font-bold text-emerald-700">판매 중 (화면 표시)</div>
            <div className="text-base font-black text-emerald-900 mt-0.5">
              {datasetStats.onSaleCount.toLocaleString()}건
            </div>
            <div className="text-[10px] font-medium text-emerald-700/80 mt-0.5">
              판매상품 원본 {SAMSUNG_LIFE_RAW_COUNTS.rawOnSaleCount.toLocaleString()}행
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-bold text-slate-500">판매중지 (화면 표시)</div>
            <div className="text-base font-black text-slate-900 mt-0.5">
              {datasetStats.discontinuedCount.toLocaleString()}건
            </div>
            <div className="text-[10px] font-medium text-slate-500 mt-0.5">
              판매중지 원본 {SAMSUNG_LIFE_RAW_COUNTS.rawDiscontinuedCount.toLocaleString()}행
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-bold text-slate-500">고유 상품명 수</div>
            <div className="text-base font-black text-[#123941] mt-0.5">
              {datasetStats.uniqueProductCount.toLocaleString()}종
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed bg-slate-50/80 border border-slate-200/70 rounded-xl px-3.5 py-2.5">
          <Info className="w-3.5 h-3.5 text-[#123941] shrink-0 mt-0.5" />
          <p>
            동일 상품명이라도 상품코드·판매기간·버전이 다르면 별도 행으로 유지됩니다.
            공시 원본 {SAMSUNG_LIFE_RAW_COUNTS.rawTotalRows.toLocaleString()}행(판매상품 {SAMSUNG_LIFE_RAW_COUNTS.rawOnSaleCount.toLocaleString()}행 + 판매중지상품 {SAMSUNG_LIFE_RAW_COUNTS.rawDiscontinuedCount.toLocaleString()}행, 공식 전체 탭 {SAMSUNG_LIFE_DISCLOSURE_META.officialTabCounts.allTab.toLocaleString()}건)은 원문 그대로 보존하고, 상품코드·상품명·판매기간·판매상태가 모두 동일한 중복 {SAMSUNG_LIFE_RAW_COUNTS.mergedDuplicateRowCount}건만 화면에서 하나로 합쳐 {datasetStats.displayTotalRows.toLocaleString()}건을 표시합니다.
          </p>
        </div>
      </div>

      {/* 4. 빈 입력 안내 */}
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

      {/* 5. 미등록 상품 / 타사 안내 */}
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
            현재 삼성생명 공식 상품공시실 전체 목록이 반영되어 있으며, 다른 보험사 목록은 순차적으로 추가될 예정입니다.
          </p>
        </div>
      )}

      {/* 6. 검색 결과 및 공시 목록 (상태 필터 + 페이지네이션) */}
      {showRowsSection && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {searchStatus === 'found' ? (
                <>
                  <span className="font-black text-[#123941] text-sm sm:text-base">
                    &ldquo;{submittedQuery}&rdquo;
                  </span>
                  <span className="text-slate-500 font-medium">검색 결과</span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="ml-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-[11px] cursor-pointer"
                  >
                    전체 목록으로
                  </button>
                </>
              ) : (
                <span className="font-black text-[#123941] text-sm sm:text-base">
                  삼성생명 공식 상품공시 목록 둘러보기
                </span>
              )}
            </div>

            {/* 판매 상태 필터 */}
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="판매 상태 필터">
              {(
                [
                  { key: 'ALL' as PolicyStatusFilter, label: '전체', count: activeCounts.all },
                  { key: '판매 중' as PolicyStatusFilter, label: '판매 중', count: activeCounts.onSale },
                  { key: '판매중지' as PolicyStatusFilter, label: '판매중지', count: activeCounts.discontinued },
                ] as const
              ).map((tab) => {
                const isActive = statusFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleStatusChange(tab.key)}
                    aria-pressed={isActive}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#123941] text-white border-[#123941]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label} ({tab.count.toLocaleString()})
                  </button>
                );
              })}
            </div>
          </div>

          {filteredDisplayRows.length === 0 ? (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center space-y-2 shadow-2xs">
              <p className="text-sm font-black text-slate-800">
                선택한 &lsquo;{statusFilter}&rsquo; 상태에 해당하는 공시 행이 없습니다.
              </p>
              <p className="text-xs text-slate-500 font-medium">
                상단 상태 필터에서 &lsquo;전체&rsquo; 또는 다른 판매 상태를 선택해 확인해 주세요.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {visibleRows.map((item) => {
                  const isCopied = copiedId === item.id;
                  const isOnSale = item.salesStatus === '판매 중';

                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3.5 text-left"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3.5 border-b border-slate-100">
                        <div className="space-y-2 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-black text-[#123941]">
                              {item.insurerName}
                            </span>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-[11px] font-black ${
                                isOnSale
                                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                  : 'bg-slate-100 border-slate-300 text-slate-700'
                              }`}
                            >
                              {item.salesStatus}
                            </span>
                            {item.contractKind && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-black text-amber-800">
                                {item.contractKind}
                              </span>
                            )}
                            {item.mergedRawRowCount > 1 && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600">
                                공시 동일행 {item.mergedRawRowCount}건 병합
                              </span>
                            )}
                            {item.classification && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600">
                                <Layers className="w-3 h-3 text-slate-400" />
                                {item.classification}
                              </span>
                            )}
                          </div>

                          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight break-keep">
                            {item.productName}
                          </h2>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#123941] shrink-0" />
                          <div>
                            <div className="text-[10px] font-bold text-slate-500">공시 판매기간</div>
                            <div className="font-black text-slate-900">
                              {item.salesStartDate || '-'} ~ {item.salesEndDate || '-'}
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                          <Hash className="w-4 h-4 text-[#123941] shrink-0" />
                          <div>
                            <div className="text-[10px] font-bold text-slate-500">공시 상품코드</div>
                            <div className="font-black text-slate-900 font-mono">
                              {item.productCode || '미표기'}
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#123941] shrink-0" />
                          <div>
                            <div className="text-[10px] font-bold text-slate-500">공식 공시실 탭</div>
                            <div className="font-black text-[#123941]">{item.officialTab}</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl px-4 py-3 text-xs text-slate-700 leading-relaxed font-medium">
                        삼성생명 공식 공시실에서 <strong className="text-[#123941]">「{item.officialTab}」</strong> 탭을 선택한 뒤,
                        정식 상품명을 검색하여 판매기간({item.salesStartDate || '-'} ~ {item.salesEndDate || '-'})에 해당하는 약관을 확인해 주세요.
                      </div>

                      <div className="pt-0.5 flex flex-wrap items-center gap-2.5">
                        <a
                          href={item.officialSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#123941] hover:bg-[#0d2b31] text-white font-black text-xs sm:text-sm transition-colors shadow-xs"
                        >
                          <span>삼성생명 공식 공시실에서 검색</span>
                          <ExternalLink className="w-4 h-4 text-[#cb9f74] shrink-0" />
                        </a>

                        <button
                          type="button"
                          onClick={() => handleCopyProductName(item)}
                          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border font-black text-xs sm:text-sm transition-colors cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                              : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>복사됨</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-slate-500 shrink-0" />
                              <span>정식 상품명 복사</span>
                            </>
                          )}
                        </button>

                        {item.verifiedPolicyUrl && (
                          <a
                            href={item.verifiedPolicyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#cb9f74] hover:bg-[#b88b5f] text-white font-black text-xs sm:text-sm transition-colors shadow-xs"
                          >
                            <span>공식 약관 열기</span>
                            <ExternalLink className="w-4 h-4 shrink-0" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 페이지네이션 / 더 보기 */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs font-bold text-slate-600">
                  현재 <span className="text-[#123941] font-black">{visibleRows.length.toLocaleString()}</span>건 /
                  전체 <span className="text-[#123941] font-black">{filteredDisplayRows.length.toLocaleString()}</span>건 표시 중
                </p>

                {visibleRows.length < filteredDisplayRows.length && (
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#123941] hover:bg-[#0d2b31] text-white font-black text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <span>
                      더 보기 (+{Math.min(PAGE_SIZE, filteredDisplayRows.length - visibleRows.length).toLocaleString()}건)
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#cb9f74]" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* 7. 필수 주의사항 안내문 (항상 표시) */}
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
              <p className="text-amber-950 font-bold pt-1">
                공식 출처: 삼성생명 상품공시실 ({SAMSUNG_LIFE_DISCLOSURE_META.officialSourceUrl}, 기준일 {SAMSUNG_LIFE_DISCLOSURE_META.capturedAt})
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
