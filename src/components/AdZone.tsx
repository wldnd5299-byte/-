/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, HelpCircle } from 'lucide-react';

interface AdZoneProps {
  type: 'header' | 'inline-top' | 'inline-bottom' | 'sidebar';
  id?: string;
}

export default function AdZone({ type, id }: AdZoneProps) {
  // Determine layout class based on type
  const getLayoutClasses = () => {
    switch (type) {
      case 'header':
        return 'w-full min-h-[90px] md:min-h-[100px] py-2 px-4 bg-soft-cloud border border-dashed border-hairline rounded-none flex flex-col md:flex-row items-center justify-between text-center md:text-left overflow-hidden gap-2';
      case 'inline-top':
        return 'w-full min-h-[100px] md:min-h-[120px] p-4 bg-soft-cloud border border-dashed border-hairline rounded-none flex flex-col md:flex-row items-center justify-between overflow-hidden gap-2 my-4';
      case 'inline-bottom':
        return 'w-full min-h-[100px] md:min-h-[120px] p-4 bg-soft-cloud border border-dashed border-hairline rounded-none flex flex-col md:flex-row items-center justify-between overflow-hidden gap-2 my-6';
      case 'sidebar':
        return 'w-full min-h-[250px] md:min-h-[300px] p-6 bg-soft-cloud border border-dashed border-hairline rounded-none flex flex-col items-center justify-center text-center overflow-hidden gap-3';
      default:
        return 'w-full p-4 bg-soft-cloud border border-dashed border-hairline rounded-none';
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'header':
        return '상단 배너 광고 영역 (AdSense Header Banner)';
      case 'inline-top':
        return '본문 상단 광고 영역 (AdSense Inline Top)';
      case 'inline-bottom':
        return '본문 하단 광고 영역 (AdSense Inline Bottom)';
      case 'sidebar':
        return '사이드바 광고 영역 (AdSense Sidebar Box)';
    }
  };

  const getSizeInfo = () => {
    switch (type) {
      case 'header':
        return '추천 크기: 970x90 또는 반응형 배너';
      case 'inline-top':
        return '추천 크기: 728x90 또는 반응형 슬롯';
      case 'inline-bottom':
        return '추천 크기: 728x90, 300x250 멀티플렉스';
      case 'sidebar':
        return '추천 크기: 300x250, 300x600 고정형';
    }
  };

  return (
    <div id={id || `ad-zone-${type}`} className={`${getLayoutClasses()} transition-all hover:bg-[#e5e5e5]`}>
      <div className="flex items-start gap-2.5">
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-bold tracking-widest text-white bg-nike-black rounded-none">
          AD
        </span>
        <div className="text-left">
          <h4 className="text-xs font-bold text-nike-black leading-tight uppercase">
            {getLabel()}
          </h4>
          <p className="text-[11px] text-[#707072] mt-0.5 font-mono">
            {getSizeInfo()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-[#707072] font-sans mt-2 md:mt-0">
        <Eye className="w-3.5 h-3.5 text-[#9e9ea0]" />
        <span className="font-semibold uppercase tracking-tight text-[10px]">AD REVENUE OPTIMIZED</span>
        <div className="relative group">
          <HelpCircle className="w-3.5 h-3.5 text-[#9e9ea0] cursor-help" />
          <div className="absolute right-0 bottom-full mb-2 w-48 p-2 bg-nike-black text-white text-[10px] rounded-none shadow-none opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
            구글 애드센스 승인 후 제공된 스크립트 코드(ins 태그)를 이 자리에 그대로 붙여넣으시면 실광고가 송출됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
