import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Scissors,
  Calculator,
  ShieldCheck,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import {
  INFO_ARTICLES,
  INFO_CATEGORIES,
  InfoArticle,
  InfoCategory,
  PrimaryRelatedLink,
  getArticleBySlug,
  getPublishedArticles
} from '../data/info';

interface InfoArticlesProps {
  initialSlug?: string | null;
  onNavigate?: (view: string, path?: string) => void;
}

const TOOL_DEFINITIONS: Record<string, { title: string; url: string; desc: string; icon: React.ReactNode }> = {
  claim: {
    title: '보험사별 고객센터 및 청구서류',
    url: '/claim/',
    desc: '국내 주요 보험사 고객센터 번호 및 보험금 청구 양식 다운로드',
    icon: <FileText className="w-4 h-4 text-amber-600" />
  },
  terms: {
    title: '보험사별 담보별 분류표',
    url: '/terms/',
    desc: '7대 손해보험사 주요 담보별 질병코드(KCD) 원문 분류표',
    icon: <FileText className="w-4 h-4 text-blue-600" />
  },
  surgery: {
    title: '1~3종·1~5종 수술명 검색',
    url: '/surgery/',
    desc: '약관 기반 1~3종 및 1~5종 질병/상해 수술명 즉시 검색',
    icon: <Scissors className="w-4 h-4 text-emerald-600" />
  },
  dispute: {
    title: '판례 & 분쟁자료',
    url: '/dispute/',
    desc: '금융감독원 분쟁조정사례 및 법원 판례 실무 해설',
    icon: <ShieldCheck className="w-4 h-4 text-purple-600" />
  },
  'planner-goods': {
    title: '영업자료',
    url: '/planner-goods/',
    desc: '보험설계사를 위한 상담자료, 인포그래픽 및 실무자료',
    icon: <Briefcase className="w-4 h-4 text-indigo-600" />
  },
  age: {
    title: '보험나이 계산기',
    url: '/age/',
    desc: '생년월일 기준 보험나이 및 상령일(나이 증가일) 자동 계산',
    icon: <Calculator className="w-4 h-4 text-teal-600" />
  },
  indemnity: {
    title: '실손의료비 계산기',
    url: '/indemnity/',
    desc: '1~5세대 실손보험 세대별 예상 실손의료비 계산',
    icon: <Calculator className="w-4 h-4 text-sky-600" />
  }
};

export const InfoArticles: React.FC<InfoArticlesProps> = ({ initialSlug, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<InfoCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlug, setCurrentSlug] = useState<string | null>(initialSlug || null);

  // Sync with browser URL changes
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/info/')) {
        const slug = pathname.replace('/info/', '').replace(/\/$/, '');
        setCurrentSlug(slug || null);
      } else {
        setCurrentSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (initialSlug !== undefined) {
      setCurrentSlug(initialSlug);
    }
  }, [initialSlug]);

  const allPublished = useMemo(() => getPublishedArticles(), []);

  const filteredArticles = useMemo(() => {
    return allPublished.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        (article.tags && article.tags.some((t) => t.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [allPublished, selectedCategory, searchQuery]);

  const currentArticle = useMemo(() => {
    if (!currentSlug) return null;
    return getArticleBySlug(currentSlug);
  }, [currentSlug]);

  const handleSelectArticle = (slug: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentSlug(slug);
    window.history.pushState(null, '', `/info/${slug}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentSlug(null);
    window.history.pushState(null, '', '/info/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInternalLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      if (url.startsWith('/terms/')) {
        onNavigate('terms', url);
      } else if (url.startsWith('/surgery/')) {
        onNavigate('surgery', url);
      } else if (url.startsWith('/claim/')) {
        onNavigate('claim', url);
      } else if (url.startsWith('/age/')) {
        onNavigate('age', url);
      } else if (url.startsWith('/indemnity/')) {
        onNavigate('indemnity', url);
      } else if (url.startsWith('/planner-goods/')) {
        onNavigate('planner-goods', url);
      } else if (url.startsWith('/dispute/')) {
        onNavigate('dispute', url);
      } else if (url.startsWith('/info/')) {
        const slug = url.replace('/info/', '').replace(/\/$/, '');
        if (slug) {
          setCurrentSlug(slug);
          window.history.pushState(null, '', url);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          handleBackToList();
        }
      } else {
        window.location.href = url;
      }
    } else {
      window.location.href = url;
    }
  };

  // 1. Single Article Detail View (Simplified Common Template)
  if (currentArticle) {
    const categoryMeta = INFO_CATEGORIES.find((c) => c.id === currentArticle.category);

    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap font-medium">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home', '/');
            }}
            className="hover:text-[#123941] transition-colors"
          >
            홈
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a
            href="/info/"
            onClick={handleBackToList}
            className="hover:text-[#123941] transition-colors"
          >
            정보글
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {categoryMeta?.name || '가이드'}
          </span>
        </nav>

        {/* Back Button */}
        <button
          onClick={handleBackToList}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 hover:text-[#123941] bg-white border border-slate-200 px-3.5 py-2 rounded-lg mb-6 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          전체 정보글 목록
        </button>

        {/* Simplified Article Container */}
        <article className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-2xs mb-8">
          {/* Header */}
          <header className="border-b border-slate-100 pb-5 mb-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              {currentArticle.title}
            </h1>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>발행일: {currentArticle.publishedAt}</span>
              {currentArticle.updatedAt && currentArticle.updatedAt !== currentArticle.publishedAt && (
                <span>(수정: {currentArticle.updatedAt})</span>
              )}
            </div>
          </header>

          {/* Main Content */}
          <div
            className="text-slate-800 leading-relaxed text-sm md:text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: currentArticle.contentHtml }}
          />

          {/* Primary Related Link (Most Important & Prominent Link) */}
          {currentArticle.primaryRelatedLink && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <span>📌 핵심 관련 페이지</span>
              </h2>
              <a
                href={currentArticle.primaryRelatedLink.url}
                onClick={(e) => handleInternalLinkClick(currentArticle.primaryRelatedLink.url, e)}
                className="block p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-[#123941] text-white rounded-xl shadow-xs hover:shadow-md hover:from-slate-800 hover:to-[#1a4f5a] transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {currentArticle.primaryRelatedLink.badge && (
                      <span className="inline-block bg-[#cb9f74] text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-sm mb-1.5">
                        {currentArticle.primaryRelatedLink.badge}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors flex items-center gap-1.5">
                      {currentArticle.primaryRelatedLink.title}
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-amber-200 transition-colors shrink-0" />
                    </h3>
                    {currentArticle.primaryRelatedLink.desc && (
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {currentArticle.primaryRelatedLink.desc}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </a>
            </div>
          )}

          {/* Optional Additional Direct Links */}
          {currentArticle.additionalLinks && currentArticle.additionalLinks.length > 0 && (
            <div className="mt-4 space-y-2">
              {currentArticle.additionalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  onClick={(e) => handleInternalLinkClick(link.url, e)}
                  className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                >
                  <span>{link.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          )}

          {/* Secondary Related Tools / Goods Links */}
          {currentArticle.secondaryTools && currentArticle.secondaryTools.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                보험브릿지 관련 자료 및 실무 도구
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentArticle.secondaryTools.map((toolKey) => {
                  const def = TOOL_DEFINITIONS[toolKey];
                  if (!def) return null;
                  return (
                    <a
                      key={toolKey}
                      href={def.url}
                      onClick={(e) => handleInternalLinkClick(def.url, e)}
                      className="flex items-start gap-2.5 p-3 bg-slate-50 border border-slate-200/80 rounded-lg hover:bg-slate-100 hover:border-slate-300 transition-colors group"
                    >
                      <div className="shrink-0 mt-0.5">{def.icon}</div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#123941] transition-colors">
                          {def.title}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {def.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional FAQs */}
          {currentArticle.faqs && currentArticle.faqs.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-slate-600" />
                자주 묻는 질문 (FAQ)
              </h2>
              <div className="space-y-3">
                {currentArticle.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Q. {faq.question}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Optional Sources */}
          {currentArticle.sourceDocs && currentArticle.sourceDocs.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-500">참조: </span>
              {currentArticle.sourceDocs.join(' · ')}
            </div>
          )}
        </article>
      </div>
    );
  }

  // 2. Hub / List View (`/info/`)
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Header Banner */}
      <div className="bg-[#123941] text-white p-6 md:p-8 rounded-2xl mb-6 shadow-xs">
        <div className="flex items-center gap-2 text-[#cb9f74] font-bold text-xs uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>INSURANCE INFORMATION & GUIDES</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
          정보글
        </h1>
        <p className="text-slate-200 text-xs md:text-sm max-w-3xl leading-relaxed">
          보험설계사와 금융소비자를 위한 약관 해설, 질병분류코드 안내, 보상 실무 및 관련 도구 가이드입니다.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 mb-6 shadow-2xs space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 담보명, 질병코드, 키워드를 검색하세요 (예: 15대질병, 수술비, 삼성화재)"
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123941] focus:bg-white transition-all text-slate-900"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#123941] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            전체 ({allPublished.length})
          </button>
          {INFO_CATEGORIES.map((cat) => {
            const count = allPublished.filter((a) => a.category === cat.id).length;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#123941] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Article Cards List */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-500">
          <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-2" />
          <p className="text-sm font-bold text-slate-700">검색 조건에 맞는 정보글이 없습니다.</p>
          <p className="text-xs text-slate-400 mt-1">다른 검색어를 입력하시거나 카테고리 필터를 변경해보세요.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map((article) => {
            const categoryMeta = INFO_CATEGORIES.find((c) => c.id === article.category);
            return (
              <a
                key={article.slug}
                href={`/info/${article.slug}/`}
                onClick={(e) => handleSelectArticle(article.slug, e)}
                className="group bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-md hover:border-[#123941]/30 transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
                        categoryMeta?.badgeColor || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {categoryMeta?.name}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {article.publishedAt}
                    </span>
                  </div>

                  <h2 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#123941] transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {article.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#123941]">
                  <span>자세히 보기</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InfoArticles;
