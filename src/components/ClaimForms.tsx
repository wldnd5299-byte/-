/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INSURERS_DATA } from '../data';
import { Insurer, InsurerType } from '../types';
import { Phone, FileText, Search, Landmark, ExternalLink, HelpCircle, Check, Info, BookOpen } from 'lucide-react';
import AdZone from './AdZone';

const getLogoText = (name: string): string => {
  if (name.startsWith('BNP')) return 'BNP';
  if (name.startsWith('MG')) return 'MG';
  
  const coreName = name
    .replace(/(손해보험|연금보험|라이프생명|손해|화재|생명|보험|연금|해상|라이프)/g, '')
    .trim();

  if (coreName.length >= 3) {
    return coreName.substring(0, 3);
  }
  return coreName;
};

const getHomepageUrl = (insurer: Insurer): string => {
  if (insurer.homepageUrl) return insurer.homepageUrl;
  
  const customMap: Record<string, string> = {
    'lina-fire': 'https://www.chubb.com/kr-kr/',
    'mg-ins': 'https://www.yebyeol.co.kr/',
    'kdb-life': 'http://kdblife.co.kr/',
    'dongyang-life': 'https://www.myangel.co.kr/',
    'cardif-life': 'https://www.cardif.co.kr/',
    'hana-life': 'https://www.hanalife.co.kr/',
    'im-life': 'https://www.imlifeins.co.kr/',
    'chubblife-life': 'https://www.chubblife.co.kr/',
    'shinhanez-ins': 'https://www.shinhanez.co.kr/',
    'metlife-life': 'https://www.metlife.co.kr/',
  };

  if (customMap[insurer.id]) {
    return customMap[insurer.id];
  }

  try {
    const url = new URL(insurer.claimUrl);
    return `${url.protocol}//${url.hostname}`;
  } catch (e) {
    return insurer.claimUrl;
  }
};

const DISCLOSURE_URL_MAP: Record<string, string> = {
  'samsung-fire': 'https://www.samsungfire.com/vh/page/VH.HPIF0103.do',
  'hyundai-marine': 'https://www.hi.co.kr/serviceAction.do?view=bin/PA/03/HHPA03010M',
  'db-ins': 'https://www.idbins.com/FWMAIV1534.do',
  'kb-ins': 'https://www.kbinsure.co.kr/CG802030001.ec',
  'meritz-fire': 'https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/',
  'hanwha-general': 'https://www.hwgeneralins.com/notice/ir/product-ing01.do',
  'lotte-ins': 'https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp',
  'nh-fire': 'https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire',
  'hana-ins': 'https://www.hanainsure.co.kr/w/disclosure/product/saleProduct',
  'heungkuk-fire': 'https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do',
  'mg-ins': 'https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006',
  'lina-fire': 'https://www.chubb.com/kr-kr/disclosure/product.html',
  'aig-ins': 'https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702',
  'shinhanez-ins': 'https://www.shinhanez.co.kr/static/pub/PUB2000T021.html?ver=1.2_utm_source=shinhanez',
  'axa-ins': 'https://www.axa.co.kr/AsianPlatformInternet/html/axacms/common/intro/disclosure/insurance/index.html',
  'carrot-ins': 'https://www.carrotins.com/desktop/disclosure/product/term/',
  
  'samsung-life': 'https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M',
  'kyobo-life': 'https://www.kyobo.com/dgt/web/product-official/all-product/search',
  'hanwha-life': 'https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000',
  'shinhan-life': 'https://www.shinhanlife.co.kr/hp/cdhi0030.do',
  'metlife-life': 'https://brand.metlife.co.kr/pn/mcvrgProd/retrieveMcvrgProdMain.do',
  'kdb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'lina-life': 'https://www.lina.co.kr/disclosure/product-public-announcement/product-on-sales?key=0',
  'abl-life': 'https://www.abllife.co.kr/st/pban/prdtPban/whlPrdt/whlPrdt1/whlPrdt11?page=index',
  'heungkuk-life': 'https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y',
  'db-life': 'https://www.idblife.com/notice/product/sale',
  'dongyang-life': 'https://pbano.myangel.co.kr/paging/WE_AC_WEPAAP020100L',
  'kb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'miraeasset-life': 'https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do',
  'fubonhyundai-life': 'https://www.fubonhyundai.com/?lockDevice=PC&menuId=CUSI150000000000#CUSI150102010101',
  'hana-life': 'https://hanalife.co.kr/anm/product/allProduct.do?status=on',
  'im-life': 'https://www.imlifeins.co.kr/BA/BA_A020.do',
  'chubblife-life': 'https://www.chubblife.co.kr/front/official/sale/listSale.do',
  'nh-life': 'https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl',
  'aia-life': 'https://mypage.aia.co.kr/AIAHomepage/disclosure/our-products/selling/individual.do',
};

const CLAIM_PDF_URL_MAP: Record<string, string> = {
  // 손해보험사
  'samsung-fire': 'https://www.samsungfire.com/individual/customer/claim/document/index.html',
  'hyundai-marine': 'https://www.hi.co.kr/bin/CR/CR/CRCR1100G.jsp',
  'db-ins': 'https://www.idbins.com/FWMAIV1534.do',
  'kb-ins': 'https://www.kbinsure.co.kr/CG802030001.ec',
  'meritz-fire': 'https://www.meritzfire.com/customer/claim/document.do',
  'hanwha-general': 'https://www.hwgeneralins.com/notice/claim/document.do',
  'lotte-ins': 'https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp',
  'nh-fire': 'https://www.nhfire.co.kr/compensation/guide/retrieveGuideRequiredDocuments.nhfire',
  'hana-ins': 'https://www.hanainsure.co.kr/w/compensation/accident/requireDocument',
  'heungkuk-fire': 'https://www.heungkukfire.co.kr/FRW/compensation/guide/requireDocument.do',
  'mg-ins': 'https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006',
  'lina-fire': 'https://www.chubb.com/kr-kr/compensation/guide.html',
  'aig-ins': 'https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702',
  'carrot-ins': 'https://www.carrotins.com/desktop/claim/general/document/',
  'kakaopay-ins': 'https://www.kakaopayinsurance.com/disclosure/product',

  // 생명보험사
  'samsung-life': 'https://www.samsunglife.com/individual/customer/claim/document/index.html',
  'kyobo-life': 'https://www.kyobo.com/dgt/web/customer/claim/document',
  'hanwha-life': 'https://www.hanwhalife.com/main/customer/claim/document/DF_CDDM100_P10000.do',
  'shinhan-life': 'https://www.shinhanlife.co.kr/hp/cdhi0030.do',
  'metlife-life': 'https://brand.metlife.co.kr/pn/mcvrgProd/retrieveMcvrgProdMain.do',
  'kdb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'lina-life': 'https://www.lina.co.kr/customer/claim/document.do',
  'abl-life': 'https://www.abllife.co.kr/customer/claim/document.do',
  'heungkuk-life': 'https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y',
  'db-life': 'https://www.idblife.com/notice/product/sale',
  'dongyang-life': 'https://pbano.myangel.co.kr/paging/WE_AC_WEPAAP020100L',
  'kb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'miraeasset-life': 'https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do',
  'fubonhyundai-life': 'https://www.fubonhyundai.com/?lockDevice=PC&menuId=CUSI150000000000#CUSI150102010101',
  'hana-life': 'https://hanalife.co.kr/anm/product/allProduct.do?status=on',
  'im-life': 'https://www.imlifeins.co.kr/BA/BA_A020.do',
  'chubblife-life': 'https://www.chubblife.co.kr/front/official/sale/listSale.do',
  'nh-life': 'https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl',
  'aia-life': 'https://mypage.aia.co.kr/AIAHomepage/disclosure/our-products/selling/individual.do',
};

export default function ClaimForms() {
  const [activeTab, setActiveTab] = useState<'all' | InsurerType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInsurer, setSelectedInsurer] = useState<Insurer>(() => {
    const saved = localStorage.getItem('ib_selected_insurer_id');
    if (saved) {
      const found = INSURERS_DATA.find(ins => ins.id === saved);
      if (found) return found;
    }
    return INSURERS_DATA[0];
  });

  React.useEffect(() => {
    const handleNav = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        if (detail.insurerId) {
          const found = INSURERS_DATA.find(ins => ins.id === detail.insurerId);
          if (found) {
            setSelectedInsurer(found);
            localStorage.setItem('ib_selected_insurer_id', found.id);
          }
        }
        if (detail.query !== undefined) {
          setSearchQuery(detail.query);
        }
      }
    };
    window.addEventListener('ib-navigate-claim', handleNav);
    return () => window.removeEventListener('ib-navigate-claim', handleNav);
  }, []);
  // Filter insurers based on category and search query
  const filteredInsurers = INSURERS_DATA.filter((ins) => {
    const matchesTab = activeTab === 'all' || ins.type === activeTab;
    const matchesSearch = ins.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  }).sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === 'property' ? -1 : 1;
  });

  const handleSelectInsurer = (ins: Insurer) => {
    setSelectedInsurer(ins);
    localStorage.setItem('ib_selected_insurer_id', ins.id);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Page Title Header */}
      <div className="relative bg-[#123941] p-6 sm:p-7 rounded-2xl border border-slate-900 shadow-md overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight break-keep leading-tight">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 inline-block mr-2 align-text-bottom shrink-0" />
            <span className="text-amber-400">보험사 고객센터</span> · 보험금 청구서류
          </h2>
          <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
            국내외 주요 <span className="text-amber-400 font-bold">손해보험 ＆ 생명보험사</span>의 고객센터 번호와 보험금청구 팩스번호, 필요서류, 약관공시실 등을 간편하게 이용하실 수 있습니다.
          </p>
        </div>
      </div>

      {/* Top Banner Advertisement (Swapped here) */}
      <AdZone type="header" id="global-ad-header" />

      {/* Detail Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Insurer List & Search (5 Grid Span) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="보험사명 검색 (예: 삼성, 현대, DB)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#253c6e] focus:border-[#253c6e] transition-colors bg-slate-50 text-slate-900 font-medium"
            />
          </div>

          {/* Tab Filter */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 text-center py-2 text-xs font-bold uppercase transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              전체 ({INSURERS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`flex-1 text-center py-2 text-xs font-bold uppercase transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'property'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              손해보험
            </button>
            <button
              onClick={() => setActiveTab('life')}
              className={`flex-1 text-center py-2 text-xs font-bold uppercase transition-all duration-150 rounded-lg cursor-pointer ${
                activeTab === 'life'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#123941]'
              }`}
            >
              생명보험
            </button>
          </div>

          {/* Insurer Cards Scrollable Grid */}
          <div className="space-y-2 max-h-[450px] overflow-y-auto pr-1">
            {filteredInsurers.length > 0 ? (
              filteredInsurers.map((insurer) => {
                const isSelected = selectedInsurer.id === insurer.id;
                return (
                  <button
                    key={insurer.id}
                    onClick={() => handleSelectInsurer(insurer)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'border-amber-500/30 bg-amber-500/5 text-[#123941] font-bold shadow-xs'
                        : 'border-slate-200/80 bg-white hover:bg-slate-100/60 hover:border-[#123941]/40 text-nike-black'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div
                        className={`w-10 h-10 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200/60 ${insurer.logoColor}`}
                      >
                        {getLogoText(insurer.name)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold flex items-center gap-1.5 text-[#123941]">
                          {insurer.name}
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border uppercase ${
                              isSelected 
                                ? 'border-amber-300/60 bg-white text-[#123941]' 
                                : 'border-slate-200 bg-slate-50 text-slate-600'
                            }`}
                          >
                            {insurer.type === 'property' ? '손해' : '생명'}
                          </span>
                        </h4>
                        <p className="text-xs font-sans font-semibold mt-0.5 text-slate-500">
                          📞 {insurer.phone}
                        </p>
                      </div>
                    </div>
                    <div className={`text-xs font-bold transition-all ${isSelected ? 'text-[#123941]' : 'text-slate-400 group-hover:text-[#123941] group-hover:translate-x-1'}`}>
                      {isSelected ? '● 선택됨' : '상세보기 →'}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <Landmark className="w-10 h-10 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-wider">No matching insurers</p>
              </div>
            )}
          </div>

          {/* AdZone inside Sidebar Area */}
          <div className="pt-2">
            <AdZone type="sidebar" id="ad-claim-sidebar" />
          </div>

        </div>

        {/* Right Column: Selected Insurer Details (7 Grid Span) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Detail Component Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-4 text-left">
                <div className={`w-12 h-12 rounded-xl font-black text-sm flex items-center justify-center border border-slate-200 ${selectedInsurer.logoColor}`}>
                  {getLogoText(selectedInsurer.name)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-[#123941]">
                      {selectedInsurer.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 uppercase tracking-tight">
                      {selectedInsurer.type === 'property' ? '손해보험' : '생명보험'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    영업시간: 평일 09시 ~ 18시
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-2">
                  <a
                    href={getHomepageUrl(selectedInsurer)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#123941] hover:bg-[#123941]/90 rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    홈페이지 바로가기 ↗
                  </a>
                  <a
                    href={selectedInsurer.claimUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#123941] hover:bg-[#123941]/90 rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    청구서류안내 ↗
                  </a>
                </div>
                {DISCLOSURE_URL_MAP[selectedInsurer.id] && (
                  <div className="flex flex-col gap-1.5 w-full">
                    <a
                      href={DISCLOSURE_URL_MAP[selectedInsurer.id]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#123941] hover:bg-[#123941]/90 rounded-full transition-colors cursor-pointer shadow-xs w-full text-center"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      보험사약관조회 ↗
                    </a>
                    {selectedInsurer.id === 'hyundai-marine' && (
                      <span className="text-[10px] text-amber-600 font-extrabold text-center block mt-0.5 bg-amber-50 py-1 px-2.5 rounded-md border border-amber-200">
                        ※ 보험상품공시 클릭
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Contacts Table (Styling matches selected insurer theme color) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#123941]/5 rounded-2xl border border-[#123941]/10 flex items-start gap-4 text-[#123941] shadow-xs">
                <div className="p-3 bg-white rounded-xl text-[#123941] shrink-0 mt-0.5 border border-[#123941]/10 shadow-3xs">
                  <Phone className="w-6 h-6 shrink-0" />
                </div>
                <div className="text-left w-full">
                  <h5 className="text-xs font-bold text-[#123941]/70 uppercase tracking-wider">
                    대표 콜센터 번호
                  </h5>
                  <p className="text-xl md:text-2xl font-black text-[#123941] mt-1 font-sans tracking-tight">
                    {selectedInsurer.phone}
                  </p>
                  {selectedInsurer.monitoringPhone && (
                    <div className="mt-2.5 pt-2.5 border-t border-[#123941]/10">
                      <h5 className="text-[11px] font-black text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse"></span>
                        인콜 모니터링 번호
                      </h5>
                      <p className="text-base md:text-lg font-extrabold text-[#123941] mt-0.5 font-sans tracking-tight">
                        {selectedInsurer.monitoringPhone}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 bg-[#123941]/5 rounded-2xl border border-[#123941]/10 flex items-start gap-4 text-[#123941] shadow-xs">
                <div className="p-3 bg-white rounded-xl text-[#123941] shrink-0 mt-0.5 border border-[#123941]/10 shadow-3xs">
                  <FileText className="w-5 h-5 shrink-0" />
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold text-[#123941]/70 uppercase tracking-wider">
                    보상 청구 팩스 / 방법
                  </h5>
                  <p className="text-sm md:text-base font-black text-[#123941] mt-1 font-sans tracking-tight">
                    {selectedInsurer.fax}
                  </p>
                  <p className="text-[10px] text-[#123941] font-bold mt-1.5 bg-[#123941]/10 px-2.5 py-0.5 rounded-full inline-block">
                    발송 오류시 고객센터 확인 요망
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Banner Advertisement */}
          <AdZone type="inline-bottom" id="ad-claim-detail-bottom" />

        </div>

      </div>
    </div>
  );
}
