import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  User,
  ArrowLeft,
  ExternalLink,
  Tag,
  ShieldCheck,
  FileText,
  Calculator,
  Scissors,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import {
  INFO_ARTICLES,
  INFO_CATEGORIES,
  InfoArticle,
  InfoCategory,
  getArticleBySlug,
  getPublishedArticles
} from '../data/info';

interface InfoArticlesProps {
  initialSlug?: string | null;
  onNavigate?: (view: string, path?: string) => void;
}

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
        article.summary.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
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

  // 1. Single Article Detail View
  if (currentArticle) {
    const categoryMeta = INFO_CATEGORIES.find((c) => c.id === currentArticle.category);

    return (
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Breadcrumb navigation */}
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
            보험정보·실무가이드
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {categoryMeta?.name || '가이드'}
          </span>
        </nav>

        {/* Back Button */}
        <button
          onClick={handleBackToList}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 hover:text-[#123941] bg-white border border-slate-200 px-3.5 py-2 rounded-lg mb-6 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          전체 실무 가이드 목록으로 돌아가기
        </button>

        {/* Article Header Card */}
        <article className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-xs mb-8">
          <header className="border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-2.5 flex-wrap mb-4">
              <span
                className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md border ${
                  categoryMeta?.badgeColor || 'bg-slate-100 text-slate-700'
                }`}
              >
                {categoryMeta?.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>발행일: {currentArticle.publishedAt}</span>
                {currentArticle.updatedAt && currentArticle.updatedAt !== currentArticle.publishedAt && (
                  <span className="text-slate-400">· 수정일: {currentArticle.updatedAt}</span>
                )}
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5">
              {currentArticle.title}
            </h1>

            {/* Author & Verification Meta */}
            <div className="flex items-center justify-between flex-wrap gap-3 bg-slate-50 border border-slate-100 p-3.5 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#123941] text-white flex items-center justify-center font-bold text-xs">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-slate-900 leading-none mb-1">
                    {currentArticle.author.name}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-none">
                    {currentArticle.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>약관 및 공시자료 팩트체크 완료</span>
              </div>
            </div>
          </header>

          {/* Key Summary Callout Box */}
          <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>3줄 핵심 요약</span>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed font-medium">
              {currentArticle.summary}
            </p>
          </div>

          {/* Main Article Content */}
          <div
            className="prose max-w-none text-slate-800 leading-relaxed text-sm md:text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: currentArticle.contentHtml }}
          />

          {/* Tags */}
          {currentArticle.tags && currentArticle.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-500">태그:</span>
                {currentArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Source Reference Box */}
          {currentArticle.sourceDocs && currentArticle.sourceDocs.length > 0 && (
            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
              <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                근거 약관 및 참조 자료
              </p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 mt-1">
                {currentArticle.sourceDocs.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* Bidirectional Linking: Related Terms & Tools Section */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-xs mb-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#123941]" />
            보험브릿지 연관 실무 도구 및 세부 약관 분류표
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mb-5">
            본 가이드에서 다룬 담보의 정확한 질병코드 전체 목록과 관련 계산 도구를 즉시 확인하실 수 있습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentArticle.relatedTerms?.map((term) => (
              <a
                key={`${term.insurerId}-${term.subTabId}`}
                href={`/terms/${term.insurerId}/${term.subTabId}/`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('terms', `/terms/${term.insurerId}/${term.subTabId}/`);
                  } else {
                    window.location.href = `/terms/${term.insurerId}/${term.subTabId}/`;
                  }
                }}
                className="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all group"
              >
                <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-blue-700 block mb-0.5">
                    {term.insurerName || '담보 약관'} 상세 분류표
                  </span>
                  <p className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    {term.label}
                    <ExternalLink className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </a>
            ))}

            {currentArticle.relatedTools?.includes('surgery') && (
              <a
                href="/surgery/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('surgery', '/surgery/');
                  else window.location.href = '/surgery/';
                }}
                className="flex items-start gap-3 p-4 bg-emerald-50/50 border border-emerald-100 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all group"
              >
                <Scissors className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">
                    수술명 실무 검색
                  </span>
                  <p className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1">
                    1~5종·1~8종 수술분류 검색기 바로가기
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  </p>
                </div>
              </a>
            )}

            {currentArticle.relatedTools?.includes('claim') && (
              <a
                href="/claim/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('claim', '/claim/');
                  else window.location.href = '/claim/';
                }}
                className="flex items-start gap-3 p-4 bg-amber-50/50 border border-amber-100 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-all group"
              >
                <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-amber-800 block mb-0.5">
                    보험금 청구 실무
                  </span>
                  <p className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                    보험사별 고객센터 및 청구 서류 안내
                    <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  </p>
                </div>
              </a>
            )}
          </div>
        </section>
      </div>
    );
  }

  // 2. Hub / List View (`/info/`)
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Header Banner */}
      <div className="bg-[#123941] text-white p-6 md:p-10 rounded-2xl mb-8 shadow-sm">
        <div className="flex items-center gap-2.5 text-[#cb9f74] font-bold text-xs md:text-sm uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>INSURANCE PRACTICAL GUIDE</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
          보험정보·실무가이드
        </h1>
        <p className="text-slate-200 text-xs md:text-sm max-w-3xl leading-relaxed">
          보험설계사와 금융소비자가 약관과 분류표를 보다 쉽게 이해하고 현장에서 즉시 활용할 수 있도록,
          핵심 담보와 보상 실무를 체계적으로 해설해 드립니다.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 mb-8 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 담보명, 질병코드, 수술비 키워드를 검색하세요 (예: 15대질병, 수술비, 삼성화재)"
            className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123941] focus:bg-white transition-all text-slate-900"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#123941] text-white shadow-xs'
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
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#123941] text-white shadow-xs'
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

      {/* Article Cards Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
          <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
          <p className="text-sm font-bold text-slate-700">검색 조건에 맞는 가이드가 없습니다.</p>
          <p className="text-xs text-slate-400 mt-1">다른 검색어를 입력하시거나 카테고리 필터를 변경해보세요.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => {
            const categoryMeta = INFO_CATEGORIES.find((c) => c.id === article.category);
            return (
              <a
                key={article.slug}
                href={`/info/${article.slug}/`}
                onClick={(e) => handleSelectArticle(article.slug, e)}
                className="group bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#123941]/30 transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                        categoryMeta?.badgeColor || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {categoryMeta?.name}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {article.publishedAt}
                    </span>
                  </div>

                  <h2 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#123941] transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    {article.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#123941]">
                    <span>실무 가이드 전문 읽기</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
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
