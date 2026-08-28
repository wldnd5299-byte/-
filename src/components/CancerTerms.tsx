/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CANCER_CLASSIFICATIONS } from '../data';
import { CancerClassification } from '../types';
import { Search, Flame, ShieldAlert, BadgePercent, HelpCircle, AlertTriangle, CheckCircle, Award } from 'lucide-react';

export default function CancerTerms() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flatten all diseases with their parent category info for full search
  const allDiseases = CANCER_CLASSIFICATIONS.flatMap((category) =>
    category.diseases.map((d) => ({
      ...d,
      categoryName: category.categoryName,
      categoryId: category.id,
      payoutPercent: category.payoutPercent,
      categoryDesc: category.description,
      rawCategory: category.category
    }))
  );

  // Filter diseases based on tab & query
  const filteredDiseases = allDiseases.filter((d) => {
    const matchesCategory = activeCategory === 'all' || d.rawCategory === activeCategory;
    const matchesQuery =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.spec && d.spec.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'general':
        return 'text-nike-black bg-soft-cloud border-hairline';
      case 'minor':
        return 'text-nike-black bg-soft-cloud border-hairline';
      case 'similar':
        return 'text-nike-black bg-soft-cloud border-hairline';
      case 'major':
        return 'text-white bg-nike-black border-nike-black';
      default:
        return 'text-nike-black bg-soft-cloud border-hairline';
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'general':
        return '일반암 (100% 지급)';
      case 'minor':
        return '소액/생식기암 (감액대상)';
      case 'similar':
        return '유사암 (10~20% 한도)';
      case 'major':
        return '고액암 (특약 추가가급)';
      default:
        return '기타';
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header Info Panel */}
      <div className="relative bg-[#123941] p-5 rounded-xl border border-slate-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-tight">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            KCD <span className="text-amber-400">암 진단비</span> 약관 조회
          </h2>
          <p className="text-xs text-slate-200 mt-1.5 leading-relaxed font-bold">
            보험 약관 상 규정된 <span className="text-amber-400">암 분류</span>(일반암, 유사암, 소액암, 고액암) 및 질병코드(C00~C97, D00~D48) 가이드를 조회하실 수 있습니다. 가입 연도와 회사별 차이가 있으니 설계 시 필수 대조 바랍니다.
          </p>
        </div>
      </div>

      {/* Cancer Categories Cards Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CANCER_CLASSIFICATIONS.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.category);
              setSearchQuery('');
            }}
            className={`p-5 rounded-none border text-left transition-all ${
              activeCategory === cat.category
                ? 'border-nike-black bg-soft-cloud font-bold'
                : 'border-hairline-soft bg-white hover:border-nike-black'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-hairline bg-white uppercase tracking-tight text-nike-black">
                {cat.categoryName}
              </span>
              <BadgePercent className="w-5 h-5 text-nike-black opacity-40" />
            </div>
            <h3 className="text-xl font-black text-nike-black mt-3 font-display tracking-tight uppercase">{cat.payoutPercent}</h3>
            <p className="text-xs text-[#707072] mt-2 line-clamp-3 leading-relaxed font-medium">
              {cat.description}
            </p>
          </button>
        ))}
      </div>

      {/* Interactive Finder/Search Section */}
      <div className="bg-white p-6 rounded-none border border-hairline space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-nike-black flex items-center gap-1.5 uppercase tracking-tight">
              <Flame className="w-5 h-5 text-nike-black" />
              KCD 질병코드 &amp; 약관 카테고리 실시간 검색기
            </h3>
            <p className="text-xs text-[#707072] mt-0.5">
              질병명(예: 위암, 유사암, 제자리암) 또는 질병코드(예: C16, C73, D01)를 입력하여 보상 여부를 검토하세요.
            </p>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707072]" />
            <input
              type="text"
              placeholder="질병명, 질병코드(KCD), 특약 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-hairline rounded-none focus:outline-hidden focus:ring-1 focus:ring-nike-black focus:border-nike-black transition-colors bg-soft-cloud text-nike-black font-medium"
            />
          </div>
        </div>

        {/* Tab Filters inside search area */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-hairline-soft">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase transition-all rounded-none border ${
              activeCategory === 'all'
                ? 'bg-nike-black border-nike-black text-white'
                : 'bg-white border-hairline text-[#707072] hover:bg-soft-cloud'
            }`}
          >
            전체 질병코드 ({allDiseases.length})
          </button>
          {CANCER_CLASSIFICATIONS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase transition-all rounded-none border ${
                activeCategory === cat.category
                  ? 'bg-nike-black border-nike-black text-white'
                  : 'bg-white border-hairline text-[#707072] hover:bg-soft-cloud'
              }`}
            >
              {cat.categoryName} ({allDiseases.filter((d) => d.rawCategory === cat.category).length})
            </button>
          ))}
        </div>

        {/* Search Results Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map((d, index) => (
              <div
                key={index}
                className="p-4 bg-soft-cloud border border-hairline-soft hover:border-nike-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-nike-black bg-white px-2.5 py-1 border border-hairline-soft uppercase">
                      KCD {d.code}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border shrink-0 ${getCategoryColor(d.rawCategory)}`}>
                      {getCategoryBadge(d.rawCategory)}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-nike-black mt-2.5">
                    {d.name}
                  </h4>
                  {d.spec && (
                    <p className="text-xs text-[#707072] mt-1 flex items-center gap-1 font-medium">
                      <HelpCircle className="w-3.5 h-3.5 text-[#9e9ea0]" />
                      {d.spec}
                    </p>
                  )}
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-hairline-soft flex items-center justify-between text-[11px]">
                  <span className="text-[#707072] font-semibold">지급 한도:</span>
                  <span className="font-bold text-nike-black">{d.payoutPercent}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-16 bg-soft-cloud border border-dashed border-hairline">
              <AlertTriangle className="w-10 h-10 text-nike-black opacity-30 mx-auto" />
              <h4 className="text-sm font-bold text-nike-black mt-3">일치하는 KCD 코드 또는 질병명이 없습니다</h4>
              <p className="text-xs text-[#707072] mt-1 max-w-md mx-auto leading-relaxed">
                검색어를 확인해 주시거나 범주 탭을 전환해 보세요. 한국표준질병사인분류표에서 상피내암, 경계성종양 등은 알파벳 D코드로, 악성 신생물(암)은 C코드로 검색할 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Underwriting Planner Guideline Notice */}
      <div className="bg-nike-black text-white p-6 rounded-none space-y-4 border border-nike-black">
        <h4 className="text-sm font-bold flex items-center gap-2 text-white uppercase tracking-wider">
          <Award className="w-5 h-5 text-white" />
          설계사를 위한 보상 청구 핵심 가이드 (갑상선암 전이 포함)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-hairline">
          <div className="space-y-2 p-4 bg-white/5 border border-white/10 rounded-none">
            <h5 className="font-bold text-white flex items-center gap-1.5 uppercase">
              <CheckCircle className="w-4 h-4 text-white" />
              소액암 전환 분쟁 대처 요령
            </h5>
            <p className="text-[#d0d0d2] font-medium leading-relaxed">
              일부 가입자의 구약관에서는 자궁암 및 전립선암이 일반암 가입금액의 20%만 지급되는 소액암으로 기재되어 있으나, 해당 가입 연도의 법원 판례 및 타보험사 연계 약관에 따라 <strong>100% 일반암 기준 보장</strong>을 소송 및 조정 권고를 통해 환원받을 수 있는 소지가 존재합니다. 가입 일자를 확인하고 분쟁 사례집을 활용하세요.
            </p>
          </div>

          <div className="space-y-2 p-4 bg-white/5 border border-white/10 rounded-none">
            <h5 className="font-bold text-white flex items-center gap-1.5 uppercase">
              <CheckCircle className="w-4 h-4 text-white" />
              갑상선암 전이(C77)의 일반암 인정 여부
            </h5>
            <p className="text-[#d0d0d2] font-medium leading-relaxed">
              갑상선암(C73, 유사암)이 림프절로 전이될 경우 전이암 코드(C77, 림프절 전이)를 부여받게 됩니다. 보험사는 원발암 기준 조항을 내세워 유사암으로만 지급하려 하지만, 2011년 이전 가입 약관 중 원발암 소급 조항이 명문화되지 않은 계약건은 <strong>일반암 100% 수령이 소송 및 금감원 권고로 판결</strong> 난 실무 사례가 매우 풍부하므로 설계사의 즉각적인 소견 대조가 이롭습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
