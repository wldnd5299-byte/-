/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Search, Download, ExternalLink, Filter, HelpCircle, CheckCircle, Tag, Layers, Star, Printer, ArrowRight } from 'lucide-react';
import AdZone from './AdZone';

interface GoodItem {
  id: number;
  title: string;
  category: 'materials' | 'stationery' | 'gifts' | 'digital';
  categoryLabel: string;
  price: string;
  desc: string;
  isDownloadable: boolean;
  downloadUrl?: string;
  linkText?: string;
  rating: number;
  image: string; // inline custom styling or vector placeholder
  tags: string[];
}

export default function PlannerGoods() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'materials' | 'stationery' | 'gifts' | 'digital'>('all');
  const [downloadCount, setDownloadCount] = useState<Record<number, number>>({});
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<GoodItem | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const goods: GoodItem[] = [
    {
      id: 1,
      title: 'KCD-8 대장점막내암 분류코드 정리표',
      category: 'materials',
      categoryLabel: '보조 도구 / 전산 자료',
      price: '무료 다운로드',
      desc: '의사 소견서 상의 C코드/D코드 충돌 시 대장점막내암 지급 기준을 명확하게 해석하기 위한 요약 출력용 PDF 시트',
      isDownloadable: true,
      downloadUrl: '대장점막내암_KCD8_정리표.pdf',
      rating: 4.9,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['PDF 출력', '필수 지참', '상담용']
    },
    {
      id: 2,
      title: '1-5종 수술 표준분류 종수술 요약 가이드',
      category: 'materials',
      categoryLabel: '보조 도구 / 전산 자료',
      price: '무료 다운로드',
      desc: '자주 쓰이는 실무 약 200가지 수술명의 종 구분을 한눈에 대조할 수 있도록 최적화된 양면 데스크탑 코팅판 시트',
      isDownloadable: true,
      downloadUrl: '표준_종수술_분류_가이드.pdf',
      rating: 4.8,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['요약판', '엑셀 원본 포함', '고객 증정']
    },
    {
      id: 3,
      title: '고급 수입 가죽 계약서 폴더 & 포트폴리오 바인더',
      category: 'stationery',
      categoryLabel: '홍보물 / 계약 가구',
      price: '34,000원',
      desc: '계약 체결율을 극대화해 주는 고품격 천연 우수 소가죽 클립보드 폴더. 펜홀더, 명함 슬롯, 태블릿 거치대 결합형',
      isDownloadable: false,
      linkText: '상세정보 및 주문처',
      rating: 4.9,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['프리미엄', '단체인쇄 가능', '신뢰도 제고']
    },
    {
      id: 4,
      title: '4세대 실손 전환 모의 보상 정산서 양식',
      category: 'digital',
      categoryLabel: '전산 자동화 서식',
      price: '무료 다운로드',
      desc: '구 실손 가입자에게 전환 전후의 비급여 자기부담금 변동과 10년간 납입보험료 누적 절감액을 자동 시뮬레이션해 주는 전산 엑셀',
      isDownloadable: true,
      downloadUrl: '실손전환_모의보상_시뮬레이터.xlsx',
      rating: 4.7,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['엑셀 자동계산', '실손 전환', '상담 필수템']
    },
    {
      id: 5,
      title: '신뢰감을 주는 메탈릭 골드 프레임 최고급 명함',
      category: 'stationery',
      categoryLabel: '홍보물 / 계약 가구',
      price: '18,000원 (200매)',
      desc: '모서리 라운딩 및 테두리 무광 골드박 가공으로 첫 인사에서 전문성과 깊은 인상을 영구히 심어줄 특별 주문 명함',
      isDownloadable: false,
      linkText: '맞춤 디자인 신청',
      rating: 5.0,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['수입지', '골드박', '퍼스널 브랜딩']
    },
    {
      id: 6,
      title: '고객 증정용 안심 보상 약봉투 & 약관 정리 투명 파우치',
      category: 'gifts',
      categoryLabel: '판촉 마케팅 용품',
      price: '12,500원 (50개입)',
      desc: '고객이 가입한 복잡한 약관과 증권을 깔끔하게 보관하고, 연락처가 직관적으로 노출되어 지속적인 리마인드를 유도하는 판촉 수납 가방',
      isDownloadable: false,
      linkText: '샘플 신청 바로가기',
      rating: 4.6,
      image: 'bg-soft-cloud text-nike-black',
      tags: ['개척 마케팅', '증정용', '바이럴 효과']
    }
  ];

  const handleDownload = (id: number, filename: string) => {
    setDownloadCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    
    // Create a mock download action
    const element = document.createElement('a');
    const fileContent = `보험브릿지 Planner Materials Download: ${filename}\n본 자료의 저작권은 보험브릿지에 있으며, 전업 설계사의 효율적인 대면 영업 활동을 위해 상업적 재배포 없이 자유롭게 이용하실 수 있습니다.`;
    const file = new Blob([fileContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filteredGoods = goods.filter((good) => {
    const matchesSearch = good.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          good.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          good.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTab = activeTab === 'all' || good.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedInquiryProduct(null);
      setInquiryName('');
      setInquiryPhone('');
    }, 3000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Top Main Banner */}
      <div className="relative bg-[#123941] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#cb9f74_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight break-keep leading-tight">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#cb9f74] inline-block mr-2 align-text-bottom shrink-0" />
              <span className="text-[#cb9f74]">영업자료</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
              아는 것이 힘! 알아야 영업도 쉬워집니다. <span className="text-[#cb9f74] font-bold">설계사의 전문 역량 강화</span>와 성공적인 고객 상담을 위한 핵심 실무 영업 자료 모음입니다.
            </p>
          </div>
          <span className="text-[10px] bg-[#cb9f74]/10 text-[#cb9f74] border border-[#cb9f74]/30 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider shrink-0">
            ★ WEEKLY HIGHLIGHT: PREMIUM CARDS
          </span>
        </div>
      </div>

      <AdZone type="header" id="global-ad-header" />

      {/* Filter Options & Search bar */}
      <div className="bg-white p-4 rounded-none border border-hairline flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: '전체 상품/자료' },
            { id: 'materials', label: '보조자료/PDF' },
            { id: 'digital', label: '엑셀/자동서식' },
            { id: 'stationery', label: '명함/서류폴더' },
            { id: 'gifts', label: '고객기념품' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold transition-colors cursor-pointer rounded-full ${
                activeTab === tab.id
                  ? 'bg-nike-black text-white'
                  : 'bg-soft-cloud text-[#707072] hover:bg-nike-black hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="자료명, 상품명, 태그 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs font-bold border border-hairline rounded-none focus:outline-hidden focus:ring-1 focus:ring-nike-black focus:border-nike-black bg-[#f5f5f5] text-nike-black"
          />
          <Search className="w-4 h-4 text-[#707072] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Grid Layout of Goods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGoods.length > 0 ? (
          filteredGoods.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-none border border-hairline hover:border-nike-black transition-colors p-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image Placeholder Frame */}
                <div className={`h-40 rounded-none ${item.image} flex flex-col items-center justify-center p-4 relative overflow-hidden border border-hairline-soft`}>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-none border border-hairline-soft text-[9px] font-bold text-nike-black uppercase tracking-wide">
                    {item.categoryLabel}
                  </div>
                  
                  {item.isDownloadable ? (
                    <Download className="w-10 h-10 stroke-[1.2] text-nike-black" />
                  ) : (
                    <Printer className="w-10 h-10 stroke-[1.2] text-nike-black" />
                  )}
                  
                  <span className="text-[10px] font-bold mt-2 text-nike-black uppercase tracking-wider">{item.isDownloadable ? 'FREE DOWNLOAD' : 'CUSTOMIZED PROPOSAL'}</span>
                </div>

                {/* Stars and Category badge */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold text-white bg-nike-black px-2 py-0.5 rounded-none uppercase tracking-wide">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-1 text-nike-black font-bold">
                    <Star className="w-3.5 h-3.5 fill-nike-black" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Details text */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-sm font-bold text-nike-black group-hover:underline decoration-1 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#707072] leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tg) => (
                    <span key={tg} className="text-[9px] font-bold text-[#707072] bg-soft-cloud border border-hairline-soft px-1.5 py-0.5 rounded-none">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger row */}
              <div className="mt-5 pt-4 border-t border-hairline-soft flex items-center justify-between">
                {item.isDownloadable ? (
                  <>
                    <span className="text-[10px] text-[#707072] font-semibold">DOWNLOADS: {downloadCount[item.id] || 48 + item.id * 12}</span>
                    <button
                      onClick={() => handleDownload(item.id, item.downloadUrl || '')}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-nike-black hover:bg-nike-black/90 text-white rounded-full text-xs font-bold transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <Download className="w-3.5 h-3.5" />
                      자료받기
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] text-[#707072] font-semibold">PREMIUM MATERIAL</span>
                    <button
                      onClick={() => setSelectedInquiryProduct(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-nike-black hover:bg-nike-black/90 text-white rounded-full text-xs font-bold transition-all cursor-pointer uppercase tracking-wider"
                    >
                      맞춤문의
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white p-12 text-center border border-hairline rounded-none">
            <p className="text-sm text-[#707072] font-bold uppercase tracking-wider">No matching products found</p>
          </div>
        )}
      </div>

      {/* Bottom Ad Zone */}
      <AdZone type="inline-bottom" id="ad-planner-goods-bottom" />

      {/* Inquiry Modal Simulation */}
      {selectedInquiryProduct && (
        <div className="fixed inset-0 bg-nike-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none shadow-none max-w-md w-full p-6 border-2 border-nike-black relative">
            <h3 className="text-base font-bold text-nike-black uppercase tracking-tight">맞춤 제작 &amp; 공동구매 문의</h3>
            <p className="text-xs text-[#707072] mt-1 font-medium">선택하신 제품에 대한 단체 제작 주문 및 설계사 할인 우대 정보를 유선 안내해 드립니다.</p>

            <div className="p-3 bg-soft-cloud border border-hairline-soft my-4 text-left rounded-none">
              <span className="text-[8px] font-bold text-[#707072] block uppercase tracking-wider">문의 상품</span>
              <span className="text-xs font-bold text-nike-black mt-0.5 block">{selectedInquiryProduct.title}</span>
              <span className="text-[10px] text-nike-black font-bold mt-0.5 block uppercase tracking-wider">PRICE: {selectedInquiryProduct.price}</span>
            </div>

            {inquirySuccess ? (
              <div className="p-4 bg-soft-cloud text-nike-black rounded-none text-center border border-hairline font-bold text-xs">
                <p>🎉 제휴 우대 문의가 전달되었습니다!</p>
                <p className="text-[10px] text-[#707072] mt-1 font-medium">24시간 이내에 전담 상담원이 맞춤 제안서를 전달해 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-[#707072] mb-1">상함 (설계사 성함)</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 홍길동"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-hairline rounded-none focus:outline-hidden focus:ring-1 focus:ring-nike-black focus:border-nike-black font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#707072] mb-1">휴대폰 번호</label>
                  <input
                    type="tel"
                    required
                    placeholder="예: 010-1234-5678"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-hairline rounded-none focus:outline-hidden focus:ring-1 focus:ring-nike-black focus:border-nike-black font-bold"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInquiryProduct(null)}
                    className="w-1/2 py-2 border border-hairline hover:bg-soft-cloud rounded-none text-xs font-bold text-[#707072] cursor-pointer uppercase tracking-wider"
                  >
                    닫기
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2 bg-nike-black hover:bg-nike-black/90 text-white rounded-none text-xs font-bold cursor-pointer uppercase tracking-wider"
                  >
                    신청하기
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
