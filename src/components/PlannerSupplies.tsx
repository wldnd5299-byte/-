import React from 'react';
import { Package, Sparkles, Clock } from 'lucide-react';

export default function PlannerSupplies() {
  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="bg-[#123941] text-white p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl text-center flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-[#cb9f74]">
          <Package className="w-7 h-7" />
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#cb9f74]/10 text-[#cb9f74] rounded-full text-xs font-bold border border-[#cb9f74]/30 tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          PLANNER SUPPLIES
        </span>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">설계사용품</h2>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl font-medium leading-relaxed">
          보험설계사를 위한 실무용품 카테고리입니다.
        </p>
      </div>

      {/* Preparation Notice Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-14 text-center shadow-2xs space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto text-[#cb9f74]">
          <Clock className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-lg font-black text-[#123941]">서비스 준비 중입니다</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            보험설계사님들의 실무에 도움이 되는 엄선된 실무용품 카테고리를 준비하고 있습니다. 보다 유용한 구성으로 찾아뵙겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
