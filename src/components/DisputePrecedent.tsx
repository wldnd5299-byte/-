import React, { useState, useEffect } from 'react';
import { Search, Scale, Download, Printer, FileText, X, FileCheck, Eye } from 'lucide-react';
import { PRECEDENTS_DATA, PrecedentItem } from '../data/disputeData';

const updateDisputeItemSEOMeta = (item: PrecedentItem) => {
  if (typeof document === 'undefined') return;
  const cleanTitle = item.title.replace(/\n+/g, ' ').trim();
  const title = `${cleanTitle} | 보험브릿지`;
  const description = item.summary.replace(/\n+/g, ' ').trim();
  const canonicalUrl = `https://insurancebridge.co.kr/dispute/${item.id}/`;

  document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', canonicalUrl);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
};

const restoreDisputeHubSEOMeta = () => {
  if (typeof document === 'undefined') return;
  const title = '보험 판례·분쟁조정사례 | 보험브릿지';
  const description = '보험금 지급, 고지의무, 암, 수술, 후유장해 등 보험 관련 법원 판례와 금융감독원 분쟁조정사례를 보험설계사 실무 관점에서 확인할 수 있습니다.';
  const canonicalUrl = 'https://insurancebridge.co.kr/dispute/';

  document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', canonicalUrl);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
};

export default function DisputePrecedent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [modalItem, setModalItem] = useState<PrecedentItem | null>(null);

  const categories = ['전체', '체외충격파', '실손/치료비', '수술비/선천이상', '운전자/형사합의', '고지의무', '후유장해', '이륜차/직업'];
  const precedents: PrecedentItem[] = PRECEDENTS_DATA;

  // Sync modal with URL on mount and browser back/forward (popstate)
  useEffect(() => {
    const syncWithUrl = () => {
      if (typeof window === 'undefined') return;
      const pathname = window.location.pathname;
      const match = pathname.match(/^\/dispute\/([a-zA-Z0-9_-]+)\/?$/);
      if (match && match[1]) {
        const slug = match[1];
        const target = PRECEDENTS_DATA.find((p) => p.id === slug);
        if (target) {
          setModalItem(target);
          updateDisputeItemSEOMeta(target);
          return;
        }
      }
      if (pathname === '/dispute' || pathname === '/dispute/') {
        setModalItem(null);
        restoreDisputeHubSEOMeta();
      }
    };

    syncWithUrl();

    const handlePopState = () => {
      syncWithUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalItem) {
        handleCloseModal(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalItem]);

  const handleOpenModal = (item: PrecedentItem, pushHistory = true) => {
    setModalItem(item);
    updateDisputeItemSEOMeta(item);
    if (pushHistory && typeof window !== 'undefined') {
      const targetUrl = `/dispute/${item.id}/`;
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'dispute', slug: item.id }, '', targetUrl);
      }
    }
  };

  const handleCloseModal = (pushHistory = true) => {
    setModalItem(null);
    restoreDisputeHubSEOMeta();
    if (pushHistory && typeof window !== 'undefined') {
      if (window.location.pathname !== '/dispute/' && window.location.pathname !== '/dispute') {
        window.history.pushState({ view: 'dispute' }, '', '/dispute/');
      }
    }
  };

  const filteredPrecedents = precedents.filter((p) => {
    const matchesCategory = selectedCategory === '전체' || p.category.includes(selectedCategory);
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(query) ||
      p.caseNumber.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.decision.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  // Download single item as PDF document
  const handleDownloadItem = (e: React.MouseEvent, item: PrecedentItem) => {
    e.stopPropagation();
    const cleanTitle = `[판례분쟁]_${item.category.replace(/[^a-zA-Z0-9가-힣]/g, '_')}_${item.title.substring(0, 20)}`;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${cleanTitle}</title>
          <meta charset="utf-8">
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            body { font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; padding: 20px; line-height: 1.6; color: #111; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .pdf-banner { background: #003366; color: #fff; padding: 10px 14px; font-size: 13px; font-weight: bold; border-radius: 6px; margin-bottom: 20px; text-align: center; }
            @media print {
              .pdf-banner { display: none; }
            }
            .fss-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 15px; }
            .fss-logo { font-size: 22px; font-weight: 900; color: #003366; }
            .press-tag { font-size: 26px; font-weight: 900; letter-spacing: 4px; color: #111; }
            .dept-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px; }
            .dept-table th, .dept-table td { border: 1px solid #aaa; padding: 6px 10px; text-align: left; }
            .dept-table th { background: #f0f4f8; }
            .title-box { border: 3px double #003366; padding: 16px; font-size: 18px; font-weight: bold; text-align: center; margin-bottom: 20px; background: #fafafa; color: #111; }
            .section-h2 { font-size: 15px; font-weight: bold; color: #003366; margin-top: 20px; margin-bottom: 8px; border-bottom: 2px solid #003366; padding-bottom: 4px; }
            .content-box { font-size: 12.5px; white-space: pre-line; padding: 10px; background: #fff; line-height: 1.7; }
            .highlight-box { background: #fffde7; border: 1px solid #fbc02d; padding: 12px; font-size: 12.5px; margin: 10px 0; border-radius: 4px; }
            .footer { margin-top: 30px; font-size: 11px; color: #666; text-align: center; border-top: 1px solid #ccc; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="pdf-banner">📄 PDF 저장 안내: 인쇄 창 대상에서 'PDF로 저장'을 선택해 주세요.</div>

          <div class="fss-header">
            <div class="fss-logo">금융감독원</div>
            <div class="press-tag">보 도 자 료</div>
            <div style="font-size:11px; color:#555;">금융은 든든하게 소비자는 행복하게</div>
          </div>

          <table class="dept-table">
            <tr>
              <th width="15%">보도 시</th>
              <td width="35%">즉시 보도 가능</td>
              <th width="15%">배포일</th>
              <td width="35%">2026. 6. 24.(수)</td>
            </tr>
            ${item.deptInfo ? item.deptInfo.map(d => `
              <tr>
                <th>담당부서</th>
                <td><b>${d.dept}</b></td>
                <th>담당자</th>
                <td>${d.manager} (☎ ${d.contact})</td>
              </tr>
            `).join('') : ''}
          </table>

          <div class="title-box">
            ${item.title}
          </div>

          <div class="section-h2">Ⅰ. 개요 및 추진배경</div>
          <div class="content-box">${item.background}</div>

          <div class="section-h2">Ⅱ. 주요 판단기준 및 분쟁조정 내용</div>
          <div class="content-box">${item.decision}</div>

          <div class="section-h2">Ⅲ. 실무 대응 및 고객 안내 솔루션</div>
          <div class="highlight-box">${item.tip}</div>

          <div class="footer">
            본 자료는 금융감독원 공시 보도자료 및 대법원 종합법률정보 판례 기준입니다. (http://www.fss.or.kr)
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  // Download all filtered items
  const handleDownloadAll = () => {
    const content = `===========================================================
[보험 보상 핵심 판례 ＆ 분쟁조정 모음집]
===========================================================
총 ${filteredPrecedents.length}건의 자료 포함
생성일시: ${new Date().toLocaleString('ko-KR')}
출처: 금융감독원 (http://www.fss.or.kr) / 대법원 종합법률정보
===========================================================

` + filteredPrecedents.map((item, idx) => `
[자료 ${idx + 1}] ${item.title}
- 분류: ${item.category}
- 사건/배포: ${item.caseNumber}
- 출처: ${item.source}
-----------------------------------------------------------
▶ 요약:
${item.summary}

▶ 쟁점 및 개요:
${item.background}

▶ 최종 판단 및 보상 기준:
${item.decision}

▶ 실무 가이드:
${item.tip}
-----------------------------------------------------------
`).join('\n\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `[보상분쟁판례모음]_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Print function
  const handlePrint = (e: React.MouseEvent, item: PrecedentItem) => {
    e.stopPropagation();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${item.title}</title>
          <style>
            body { font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; padding: 30px; line-height: 1.6; color: #111; }
            .fss-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 15px; }
            .fss-logo { font-size: 24px; font-weight: 900; color: #003366; }
            .press-tag { font-size: 28px; font-weight: 900; letter-spacing: 5px; color: #111; }
            .dept-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px; }
            .dept-table th, .dept-table td { border: 1px solid #aaa; padding: 6px 10px; text-align: left; }
            .dept-table th { background: #f0f4f8; }
            .title-box { border: 3px double #003366; padding: 16px; font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 25px; background: #fafafa; color: #111; }
            .section-h2 { font-size: 16px; font-weight: bold; color: #003366; margin-top: 25px; margin-bottom: 10px; border-bottom: 2px solid #003366; padding-bottom: 4px; }
            .content-box { font-size: 13px; white-space: pre-line; padding: 12px; background: #fff; line-height: 1.7; }
            .highlight-box { background: #fffde7; border: 1px solid #fbc02d; padding: 12px; font-size: 13px; margin: 10px 0; border-radius: 4px; }
            .footer { margin-top: 40px; font-size: 11px; color: #666; text-align: center; border-top: 1px solid #ccc; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="fss-header">
            <div class="fss-logo">금융감독원</div>
            <div class="press-tag">보 도 자 료</div>
            <div style="font-size:11px; color:#555;">금융은 든든하게 소비자는 행복하게</div>
          </div>

          <table class="dept-table">
            <tr>
              <th width="15%">보도 시</th>
              <td width="35%">즉시 보도 가능</td>
              <th width="15%">배포일</th>
              <td width="35%">2026. 6. 24.(수)</td>
            </tr>
            ${item.deptInfo ? item.deptInfo.map(d => `
              <tr>
                <th>담당부서</th>
                <td><b>${d.dept}</b></td>
                <th>담당자</th>
                <td>${d.manager} (☎ ${d.contact})</td>
              </tr>
            `).join('') : ''}
          </table>

          <div class="title-box">
            ${item.title}
          </div>

          <div class="section-h2">Ⅰ. 개요 및 추진배경</div>
          <div class="content-box">${item.background}</div>

          <div class="section-h2">Ⅱ. 주요 판단기준 및 분쟁조정 내용</div>
          <div class="content-box">${item.decision}</div>

          <div class="section-h2">Ⅲ. 실무 대응 및 고객 안내 솔루션</div>
          <div class="highlight-box">${item.tip}</div>

          <div class="footer">
            본 자료는 금융감독원 공시 보도자료 및 대법원 종합법률정보 판례 기준입니다. (http://www.fss.or.kr)
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative bg-[#123941] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md overflow-hidden text-white text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-[10px] font-bold border border-amber-500/30 tracking-wider uppercase mb-3">
              <Scale className="w-3.5 h-3.5 shrink-0" />
              판례 및 분쟁
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase break-keep leading-tight">
              판례 ＆ 분쟁
            </h2>
            <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
              금융감독원 분쟁조정기준과 대법원판례등 정보를 제공합니다. 열람 ＆ 다운로드 가능합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="판례, 분쟁사례, 체외충격파, 도수치료, 판례번호 등을 검색해보세요..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#123941] focus:ring-1 focus:ring-[#123941] placeholder-slate-400 shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs font-bold cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Filter Tabs & Total Count */}
      <div className="space-y-3 text-left">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#123941] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Total Count */}
          <div className="text-xs text-slate-500 font-bold px-1 flex items-center justify-between sm:justify-end gap-2">
            <span>
              총 <span className="text-[#123941] font-black">{filteredPrecedents.length}</span>개의 분쟁·판례 자료
            </span>
          </div>
        </div>
      </div>

      {/* Grid Layout (3-Column compact layout) */}
      {filteredPrecedents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 text-left">
          {filteredPrecedents.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top Compact Header Bar (Short vertical height) */}
                <div className="bg-[#fbf9f6] border-b border-slate-100 px-3.5 py-2 flex items-center justify-between gap-2 group-hover:bg-[#f6f3ee] transition-colors">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full shrink-0">
                      {item.category}
                    </span>
                    <span className="bg-[#123941] text-amber-300 font-black text-[10px] px-2 py-0.5 rounded-md shrink-0 truncate">
                      {item.badge}
                    </span>
                  </div>
                  <FileText className="w-4 h-4 text-[#123941] shrink-0 opacity-70 group-hover:text-[#cb9f74] transition-colors" />
                </div>

                {/* Content Section */}
                <div className="p-3.5 space-y-2.5">
                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-black text-[#0f2b31] group-hover:text-[#123941] transition-colors leading-snug whitespace-pre-line break-keep">
                    {item.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Bar */}
              <div className="px-3.5 py-2.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono font-semibold text-slate-400 truncate max-w-[130px]">
                  OFFICIAL DOC
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={(e) => handleDownloadItem(e, item)}
                    className="px-2.5 py-1 bg-[#123941] hover:bg-[#cb9f74] text-white rounded-md font-bold text-[11px] flex items-center gap-1 transition-all shadow-2xs cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    <span>자료받기</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(item);
                    }}
                    className="px-2.5 py-1 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-md font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Eye className="w-3 h-3" />
                    <span>상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 p-12 rounded-2xl text-center text-slate-500 font-semibold text-xs">
          검색조건과 일치하는 판례 및 분쟁 자료가 없습니다.
        </div>
      )}

      {/* Modal Overlay for Detailed View */}
      {modalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => handleCloseModal()}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 text-left relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="sticky top-0 z-20 bg-[#123941] text-white px-5 py-3 flex items-center justify-between border-b border-slate-700 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md uppercase">
                  {modalItem.category}
                </span>
                <span className="text-xs font-mono font-bold text-amber-200 truncate max-w-[280px] sm:max-w-md">
                  {modalItem.caseNumber}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handlePrint(e, modalItem)}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">인쇄</span>
                </button>
                <button
                  onClick={(e) => handleDownloadItem(e, modalItem)}
                  className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-md text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">다운로드</span>
                </button>
                <button
                  onClick={() => handleCloseModal()}
                  className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Document Body - Styled like Official FSS Press Release / Legal Document */}
            <div className="p-4 sm:p-8 space-y-6 bg-white font-sans text-slate-900">
              
              {/* 1. Official Press Release Header Table Box (Authentic Financial Supervisory Service Style) */}
              <div className="border-2 border-slate-800 rounded-lg p-4 sm:p-5 bg-white space-y-4 shadow-2xs">
                {/* Logo & Title Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-3 border-b-2 border-slate-800 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#003366] text-white font-black flex items-center justify-center text-xs">
                      FSS
                    </div>
                    <span className="text-lg font-black tracking-tight text-[#003366]">
                      금융감독원
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl font-black tracking-[0.25em] text-slate-900 border-b-2 border-slate-900 pb-0.5">
                    보 도 자 료
                  </div>

                  <div className="text-[11px] font-bold text-slate-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    금융은 든든하게 소비자는 행복하게
                  </div>
                </div>

                {/* Press & Department Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-slate-300">
                    <tbody>
                      <tr className="bg-slate-100/90 border-b border-slate-300">
                        <th className="p-2 border-r border-slate-300 font-bold text-slate-800 w-20">보도 시</th>
                        <td className="p-2 border-r border-slate-300 font-semibold text-slate-900">즉시 보도 가능</td>
                        <th className="p-2 border-r border-slate-300 font-bold text-slate-800 w-20">배포일시</th>
                        <td className="p-2 font-mono font-semibold text-slate-900">2026. 6. 24.(수) 배포시부터</td>
                      </tr>
                      {modalItem.deptInfo && modalItem.deptInfo.map((dept, idx) => (
                        <tr key={idx} className="border-b border-slate-300 last:border-b-0">
                          <th className="p-2 border-r border-slate-300 font-bold text-slate-800 bg-slate-50">담당부서</th>
                          <td className="p-2 border-r border-slate-300 font-bold text-slate-900">{dept.dept}</td>
                          <th className="p-2 border-r border-slate-300 font-bold text-slate-800 bg-slate-50">담당자</th>
                          <td className="p-2 font-medium text-slate-800">
                            {dept.manager} <span className="text-slate-500 font-mono">(☎ {dept.contact})</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Double Border Giant Title Header Box */}
                <div className="border-4 border-double border-[#123941] p-4 sm:p-5 bg-slate-50/90 rounded-md text-center">
                  <h2 className="text-base sm:text-xl font-black text-slate-950 leading-snug tracking-tight break-keep">
                    {modalItem.title}
                  </h2>
                </div>
              </div>

              {modalItem.id === 'case-eswt' ? (
                <>
                  {/* 2. Official Document Section Ⅰ: 개요 및 추진배경 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b-2 border-[#123941] pb-1.5">
                      <span className="text-base sm:text-lg font-black text-[#123941]">
                        Ⅰ. 개요 및 추진배경
                      </span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-900 shrink-0">□</span>
                        <p>
                          <strong>체외충격파 치료</strong>는 도수치료와 함께 근골격계 질환 치료에 널리 활용되는 대표적인 <strong>비급여 항목</strong>입니다.
                        </p>
                      </div>

                      <div className="flex items-start gap-2 pl-3">
                        <span className="text-slate-600 shrink-0">○</span>
                        <p className="text-slate-800">
                          도수치료 관리급여 지정(7.1 시행예정)에 따라 의료기관이 도수치료 대신 체외충격파 치료를 적극 권유(<span className="underline decoration-amber-500 decoration-2 font-bold">풍선효과</span>)할 유인이 커질 경우, 과잉이용에 따른 의료비 부담 증가와 비급여 의료 쏠림이 재발될 우려가 있습니다.
                        </p>
                      </div>

                      <div className="flex items-start gap-2 pt-1">
                        <span className="font-bold text-slate-900 shrink-0">□</span>
                        <p>
                          이에 대한의사협회는 선제적·자율적으로 대응하기 위해 관련 전문의학회 논의 절차를 거쳐 <strong>체외충격파치료 가이드라인</strong>을 포함한 자율 관리방안을 마련하였습니다.
                        </p>
                      </div>

                      <div className="flex items-start gap-2 pl-3">
                        <span className="text-slate-600 shrink-0">○</span>
                        <p className="text-slate-800">
                          금융감독원 분쟁조정위원회(분쟁조정소위원회)는 동 가이드라인의 의학적 타당성 등을 검토하여, 소비자 보호 및 정당한 치료에 대한 신속한 보상이 이루어지도록 <strong>체외충격파 치료 분쟁조정기준</strong>을 마련하였습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Official Document Section Ⅱ: 주요 판단기준 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b-2 border-[#123941] pb-1.5">
                      <span className="text-base sm:text-lg font-black text-[#123941]">
                        Ⅱ. 주요 판단기준 (분쟁조정기준)
                      </span>
                    </div>

                    <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 space-y-4">
                      <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-lg text-xs sm:text-sm text-blue-950 font-bold">
                        ※ 아래 (가)~(다) 기준을 모두 충족하고 보험사기 정황 등이 없는 경우, 원칙적으로 체외충격파 치료의 필요성을 인정하여 실손보험금을 지급합니다.
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <div>
                          <h4 className="font-bold text-slate-950 mb-1 flex items-center gap-1.5">
                            <span className="w-4.5 h-4.5 rounded-full bg-[#123941] text-white flex items-center justify-center text-[10px] shrink-0">가</span>
                            [치료대상 (적응증)] 아래 7개 부위 대상 질환에 시행한 치료일 것
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-6 pt-1 text-slate-700 text-xs">
                            <div className="bg-white p-2 rounded border border-slate-200">1) <strong>어깨관절:</strong> 석회성 건염, 회전근개 건변증</div>
                            <div className="bg-white p-2 rounded border border-slate-200">2) <strong>팔꿈치관절:</strong> 외측상과염, 내측상과염</div>
                            <div className="bg-white p-2 rounded border border-slate-200">3) <strong>고관절:</strong> 대전자 통증 증후군</div>
                            <div className="bg-white p-2 rounded border border-slate-200">4) <strong>슬관절:</strong> 슬개건염</div>
                            <div className="bg-white p-2 rounded border border-slate-200">5) <strong>발목관절:</strong> 아킬레스건염</div>
                            <div className="bg-white p-2 rounded border border-slate-200">6) <strong>족부:</strong> 족저근막염</div>
                            <div className="bg-white p-2 rounded border border-slate-200 sm:col-span-2">7) <strong>척추부:</strong> 경추·요추부 근막통증증후군</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-950 mb-1 flex items-center gap-1.5">
                            <span className="w-4.5 h-4.5 rounded-full bg-[#123941] text-white flex items-center justify-center text-[10px] shrink-0">나</span>
                            [치료횟수 및 방법] 연간 12회 (부위당 6회, 주 1회) 이내에서 시행한 치료일 것
                          </h4>
                          <ul className="list-disc list-inside space-y-1 pl-6 text-slate-700 text-xs">
                            <li>양측(좌/우), 질환명 등과 관계없이 7개 부위별 각 6회 한도 적용 (예: 좌·우 어깨는 한 부위로 산정)</li>
                            <li>동일 회차 내 다수 부위 치료 시 1개 부위 치료에 대한 의료비만 보상 대상 인정</li>
                            <li>연간 산정기준: 2026.7.1. 이후 최초로 체외충격파 치료를 받는 날부터 1년 계산</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-950 mb-1 flex items-center gap-1.5">
                            <span className="w-4.5 h-4.5 rounded-full bg-[#123941] text-white flex items-center justify-center text-[10px] shrink-0">다</span>
                            [치료 금지대상 (금기증)] 아래 금기증에 해당하지 않는 환자일 것
                          </h4>
                          <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-rose-950 text-xs space-y-1 ml-6">
                            <p>• 출혈성 경향 또는 항응고 치료로 출혈 위험이 높은 경우</p>
                            <p>• 치료 부위의 종양(악성/양성), 감염 조직, 임신</p>
                            <p>• 급성 골절·파열 (예: 회전근개 파열, 아킬레스건 파열 등)</p>
                            <p>• 18세 미만 성장판 근처 병변, 금속고정물 주위, 폐조직, 뇌, 척수 부위</p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium pl-2">
                          □ 중증 등으로 인해 다수 부위에서 복합적으로 질환이 발생하는 등의 특수한 사정이 있는 경우에는 주요 판단기준 일부 미충족(연간 12회 초과 등) 시에도 <span className="font-bold underline">치료 필요성 등을 추가 검토할 수 있음</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Generic Document Sections */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b-2 border-[#123941] pb-1.5">
                      <span className="text-base sm:text-lg font-black text-[#123941]">
                        Ⅰ. 개요 및 사건 경과
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-slate-50/70 p-4 rounded-xl border border-slate-200 whitespace-pre-line">
                      {modalItem.background}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b-2 border-[#123941] pb-1.5">
                      <span className="text-base sm:text-lg font-black text-[#123941]">
                        Ⅱ. 주요 판단기준 및 판결 요지
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-slate-50/70 p-4 rounded-xl border border-slate-200 whitespace-pre-line">
                      {modalItem.decision}
                    </div>
                  </div>
                </>
              )}

              {/* 4. Official Document Section Ⅲ: 실무 솔루션 가이드 */}
              <div className="p-4 sm:p-5 bg-amber-50 border-2 border-amber-300 rounded-xl space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-950 font-black text-sm sm:text-base border-b border-amber-200 pb-1.5">
                  <FileCheck className="w-5 h-5 text-amber-700" />
                  <span>Ⅲ. 설계사 실무 안내 ＆ 분쟁 대응 솔루션</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold whitespace-pre-line pl-1">
                  {modalItem.tip}
                </p>
              </div>

              {/* Official Source Footnote */}
              <div className="pt-4 border-t border-slate-300 text-center text-xs text-slate-500 font-semibold space-y-1">
                <p>※ 본 자료를 인용하여 고객 상담 시 출처를 정확히 고지하시기 바랍니다. (http://www.fss.or.kr)</p>
                <p className="text-[11px] text-slate-400">발행/공시 기관: 금융감독원 보험상품분쟁2국 · 소비자권익보호국</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
