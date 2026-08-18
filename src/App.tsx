/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ShieldAlert,
  Scissors,
  Table,
  Layers,
  ChevronRight,
  Network,
  Award,
  Users,
  Menu,
  X,
  Search,
  HelpCircle,
  Calculator,
  ShoppingBag,
  FileCheck2,
  QrCode,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Modular Sub-components
import ClaimForms from './components/ClaimForms';
import TermsMaster from './components/TermsMaster';
import SurgerySearch from './components/SurgerySearch';
import IndemnityTerms from './components/IndemnityTerms';
import AgeCalculator from './components/AgeCalculator';
import PlannerGoods from './components/PlannerGoods';
import DisputePrecedent from './components/DisputePrecedent';
import AdZone from './components/AdZone';

import { INSURERS_DATA } from './data';

export type ViewState = 'home' | 'claim' | 'terms' | 'surgery' | 'indemnity' | 'age' | 'planner-goods' | 'dispute';

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  path: string;
}

export const SEO_CONFIG: Record<ViewState, SEOData> = {
  home: {
    title: '보험브릿지 | 보험설계사 실무 정보 플랫폼',
    description: '보험약관·담보분류·수술명 검색·실손의료비 계산·판례 및 분쟁조정사례 등 보험설계사를 위한 실무 정보를 제공합니다.',
    canonical: 'https://insurancebridge.co.kr/',
    path: '/',
  },
  claim: {
    title: '보험사 고객센터·보험금청구 정보 | 보험브릿지',
    description: '국내 주요 생명보험사와 손해보험사의 고객센터, 보험금 청구, 팩스번호, 공시실 등 보험설계사 실무정보를 확인할 수 있습니다.',
    canonical: 'https://insurancebridge.co.kr/claim/',
    path: '/claim/',
  },
  terms: {
    title: '보험사별 담보·질병코드 분류표 | 보험브릿지',
    description: '주요 보험사의 암, 뇌혈관, 심장, 수술 관련 담보별 질병코드와 분류 기준을 보험설계사 실무용으로 확인할 수 있습니다.',
    canonical: 'https://insurancebridge.co.kr/terms/',
    path: '/terms/',
  },
  surgery: {
    title: '보험 수술명 검색·수술분류표 | 보험브릿지',
    description: '질병수술비 1~5종, 1~7종, 1~8종 등 보험사별 수술분류와 수술명을 검색할 수 있는 보험설계사 실무 도구입니다.',
    canonical: 'https://insurancebridge.co.kr/surgery/',
    path: '/surgery/',
  },
  indemnity: {
    title: '실손의료비 계산기·세대별 실손보험 비교 | 보험브릿지',
    description: '1세대부터 최신 세대까지 실손의료비 보장 기준과 자기부담금을 확인하고 예상 보험금을 계산할 수 있습니다.',
    canonical: 'https://insurancebridge.co.kr/indemnity/',
    path: '/indemnity/',
  },
  age: {
    title: '보험나이 계산기·상령일 계산 | 보험브릿지',
    description: '생년월일을 입력하여 보험나이와 보험 상령일을 빠르게 계산할 수 있는 보험설계사 실무 계산기입니다.',
    canonical: 'https://insurancebridge.co.kr/age/',
    path: '/age/',
  },
  'planner-goods': {
    title: '보험설계사 영업자료·상담자료 | 보험브릿지',
    description: '보험설계사가 고객 상담과 영업 현장에서 활용할 수 있는 보험 안내자료, 질환별 자료, 인포그래픽 및 실무자료를 확인할 수 있습니다.',
    canonical: 'https://insurancebridge.co.kr/planner-goods/',
    path: '/planner-goods/',
  },
  dispute: {
    title: '보험 판례·분쟁조정사례 | 보험브릿지',
    description: '보험금 지급, 고지의무, 암, 수술, 후유장해 등 보험 관련 법원 판례와 금융감독원 분쟁조정사례를 보험설계사 실무 관점에서 확인할 수 있습니다.',
    canonical: 'https://insurancebridge.co.kr/dispute/',
    path: '/dispute/',
  },
};

export const updateSEOMeta = (view: ViewState) => {
  if (typeof document === 'undefined') return;
  const config = SEO_CONFIG[view] || SEO_CONFIG.home;

  // 1. Title
  document.title = config.title;

  // 2. Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // 3. Canonical link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', config.canonical);

  // 4. Open Graph Meta Tags
  const updateOrCreateMeta = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  updateOrCreateMeta('og:title', config.title);
  updateOrCreateMeta('og:description', config.description);
  updateOrCreateMeta('og:url', config.canonical);
  updateOrCreateMeta('og:type', 'website');
  updateOrCreateMeta('og:site_name', '보험브릿지');
  updateOrCreateMeta('og:image', 'https://insurancebridge.co.kr/og-image.png');
  updateOrCreateMeta('og:image:width', '1200');
  updateOrCreateMeta('og:image:height', '630');
  updateOrCreateMeta('og:image:alt', '보험브릿지 - 보험설계사 실무 정보 플랫폼');

  // 5. Twitter Meta Tags
  const updateOrCreateTwitterMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
  updateOrCreateTwitterMeta('twitter:title', config.title);
  updateOrCreateTwitterMeta('twitter:description', config.description);
  updateOrCreateTwitterMeta('twitter:image', 'https://insurancebridge.co.kr/og-image.png');
};

export const VIEW_PATH_MAP: Record<ViewState, string> = {
  home: '/',
  claim: '/claim/',
  terms: '/terms/',
  surgery: '/surgery/',
  indemnity: '/indemnity/',
  age: '/age/',
  'planner-goods': '/planner-goods/',
  dispute: '/dispute/',
};

export const PATH_VIEW_MAP: Record<string, ViewState> = {
  '/': 'home',
  '/claim': 'claim',
  '/claim/': 'claim',
  '/terms': 'terms',
  '/terms/': 'terms',
  '/surgery': 'surgery',
  '/surgery/': 'surgery',
  '/indemnity': 'indemnity',
  '/indemnity/': 'indemnity',
  '/age': 'age',
  '/age/': 'age',
  '/planner-goods': 'planner-goods',
  '/planner-goods/': 'planner-goods',
  '/dispute': 'dispute',
  '/dispute/': 'dispute',
};

export const getViewFromLocation = (): ViewState => {
  if (typeof window === 'undefined') return 'home';
  const rawPath = window.location.pathname;
  if (rawPath.startsWith('/dispute/')) {
    return 'dispute';
  }
  if (PATH_VIEW_MAP[rawPath]) {
    return PATH_VIEW_MAP[rawPath];
  }
  const cleanPath = rawPath.replace(/\/+$/, '') || '/';
  if (cleanPath.startsWith('/dispute/')) {
    return 'dispute';
  }
  if (PATH_VIEW_MAP[cleanPath]) {
    return PATH_VIEW_MAP[cleanPath];
  }
  const search = window.location.search;
  if (search) {
    const params = new URLSearchParams(search);
    const p = params.get('p');
    if (p && PATH_VIEW_MAP[p]) {
      return PATH_VIEW_MAP[p];
    }
  }
  return 'home';
};

interface SearchItem {
  title: string;
  desc: string;
  category: string;
  view: ViewState;
  insurerId?: string;
  subTab?: string;
  filter?: string;
  query?: string;
}

const GLOBAL_SEARCH_ITEMS: SearchItem[] = [
  // Pages / Tools
  { title: '보험나이 계산기', desc: '고객 생년월일 기준 보험나이와 상령일 자동 연산', category: '도구', view: 'age' },
  { title: '상령일 계산', desc: '보험나이가 한 살 올라가는 날 계산', category: '도구', view: 'age' },
  { title: '실손의료비 계산기', desc: '1세대부터 5세대까지 세대별 맞춤형 예상 실손의료비 계산', category: '도구', view: 'indemnity' },
  { title: '실손의료비 1세대/2세대/3세대/4세대/5세대', desc: '실손의료비 예상액 및 부담금 연산', category: '도구', view: 'indemnity' },
  { title: '영업자료 홍보몰', desc: '맞춤 명함, 천연 가죽 서류 바인더 및 필수 보상 요약집', category: '영업자료', view: 'planner-goods' },
  { title: '판례 ＆ 분쟁조정 DB', desc: '금융감독원 분쟁조정사례, 대법원 중요 판례 및 실무 보상 분쟁 가이드', category: '판례＆분쟁', view: 'dispute' },
  { title: '보험금 청구 서류 및 고객센터 연락처', desc: '주요 손해 및 생명보험사 정보 제공', category: '보험사정보', view: 'claim' },
  { title: '수술명 검색', desc: '표준 수술 및 종수술비 약관 정보를 수술명으로 조회', category: '수술명검색', view: 'surgery' },

  // Classifications (TermsMaster)
  { title: '통합암(유사암제외) 분류표 - DB손보', desc: 'DB손해보험 통합암 진단 기준 및 질병코드 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'cancer', filter: '' },
  { title: '통합전이암 분류표 - DB손보', desc: 'DB손해보험 통합전이암 분류표 (림프절 전이암 등)', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'cancer', filter: '' },
  { title: '심장질환진단비(간편) 분류표 - DB손보', desc: '협심증(I20), 심근경색증(I21), 심부전(I50) 등 간편 심장질환 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '' },
  { title: '통합형 심장관련질환진단비I 분류표 - DB손보', desc: '급성심근경색증, 허혈심장질환 등 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'heart', filter: '' },
  { title: '통합형 심장관련질환진단비II 분류표 - DB손보', desc: '주요심장염증질환, 심근병증, 특정3대심장질환 등 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'heart', filter: '' },
  { title: '통합형 뇌관련질환진단비 분류표 - DB손보', desc: '뇌출혈, 뇌경색증, 기타 뇌혈관질환 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'brain', filter: '' },
  { title: '1-5종 수술비 분류표 (동일질병당) - DB손보', desc: '피부, 골격, 호흡기, 순환기 등 최신 1-5종 수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery1_5', filter: '' },
  { title: '1-5종 수술비 분류표 (구형) - DB손보', desc: '과거 표준 1-5종 수술분류표 기준 조회', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery1_5_old', filter: '' },
  { title: '13대 질병수술 분류표 - DB손보', desc: '당뇨병, 심장질환, 고혈압, 뇌혈관질환 등 13대 수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery13', filter: '' },
  { title: '16대 질병수술 분류표 - DB손보', desc: '당뇨병, 심장질환, 고혈압, 뇌혈관질환 등 16대 수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery16', filter: '' },
  { title: '18대 질병수술 분류표 - DB손보', desc: '백내장, 녹내장, 결핵 등 18대 수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery18', filter: '' },
  { title: '21대 질병수술 분류표 - DB손보', desc: '유방선종, 생식기질환 등 21대 질병수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery21', filter: '' },
  { title: '40대 질병수술 분류표 - DB손보', desc: '당뇨병, 심장질환, 고혈압, 뇌혈관질환 등 40대 수술분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery40', filter: '' },
  { title: '106대 질병수술 분류표 - DB손보', desc: '특정 106대 질병수술비 분류 및 지급 조건', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery106', filter: '' },
  { title: '119대 질병수술 분류표 - DB손보', desc: '특정 119대 질병수술비 대상질병 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery119', filter: '' },
  { title: '120대 질병수술 분류표 - DB손보', desc: '특정 120대 질병수술비 대상 및 코드 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery120', filter: '' },

  // Key Specific Diseases
  { title: '협심증 (I20) - DB손보 심장질환진단비(간편)', desc: '협심증(I20) 진단 기준 및 질병코드 조회', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '협심증' },
  { title: '급성 심근경색증 (I21) - DB손보 심장질환(간편)', desc: '급성 심근경색증(I21) 분류표 및 진단비 기준', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '심근경색' },
  { title: '심부전 (I50) - DB손보 심장질환진단비(간편)', desc: '심부전(I50) 진단 기준 및 질병코드 조회', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '심부전' },
  { title: '심방세동 및 조동 (I48) - DB손보 심장질환(간편)', desc: '부정맥 심방세동 및 조동(I48) 질병코드 조회', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '심방세동' },
  { title: '발작성 빈맥 (I47) - DB손보 심장질환(간편)', desc: '발작성 빈맥(I47) 질병분류표 확인', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '발작성 빈맥' },
  { title: '인공소생에 성공한 심장정지 (I46.0)', desc: '심장정지 인공소생 성공(I46.0) 분류표 확인', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'db_heart_simple', filter: '인공소생' },
  { title: '뇌경색증 (I63) - DB손보 통합형 뇌관련질환', desc: '뇌경색증(I63) 진단비 및 질병코드 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'brain', filter: '뇌경색' },
  { title: '뇌출혈 (I60~I62) - DB손보 통합형 뇌관련질환', desc: '지주막하출혈, 뇌내출혈 등 뇌출혈 진단비 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'brain', filter: '뇌출혈' },
  { title: '기타 뇌혈관질환 (I67~I69) - DB손보 통합형 뇌관련질환', desc: '기타 뇌혈관질환(I67), 뇌혈관질환 후유증(I69) 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'brain', filter: '뇌혈관' },
  { title: '위암 / 폐암 / 간암 / 유방암 / 대장암 (통합암)', desc: '원발암 통합형 암진단비 분류표 조회', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'cancer', filter: '' },
  { title: '치핵 / 치열 / 치루 수술 (1-5종 수술비)', desc: '항문 질환 수술 1종 보장 범위 및 제외 사항', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery1_5', filter: '치핵' },
  { title: '요도결석 / 요로결석 (체외충격파쇄석술)', desc: '쇄석술 2종 수술비 지급 기준 분류표', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery1_5', filter: '쇄석술' },
  { title: '제왕절개만출술 (자궁/난소 수술 1종)', desc: '제왕절개 1종 수술비 보장 안내 (질병통합치료비 전용)', category: '담보별 분류표', view: 'terms', insurerId: 'db-ins', subTab: 'surgery1_5', filter: '제왕절개' },
  { title: '1-5종 수술비II 분류표 - 메리츠화재', desc: '일반질병 및 상해 치료목적 수술, 악성신생물 수술 등 메리츠화재 1-5종 수술분류표II', category: '담보별 분류표', view: 'terms', insurerId: 'meritz-fire', subTab: 'meritz_surgery1_5', filter: '' },
];

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      if (pathname.startsWith('/dispute/')) {
        return 'dispute';
      }
      if (PATH_VIEW_MAP[pathname]) {
        return PATH_VIEW_MAP[pathname];
      }
    }
    const saved = localStorage.getItem('ib_current_view');
    return (saved as ViewState) || 'home';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const initialView = getViewFromLocation();
    setCurrentView(initialView);
    localStorage.setItem('ib_current_view', initialView);
    
    // If not a dispute sub-item page, update SEO meta with default view meta
    if (typeof window !== 'undefined' && !window.location.pathname.match(/^\/dispute\/[a-zA-Z0-9_-]+\/?$/)) {
      updateSEOMeta(initialView);
    }

    const handlePopState = () => {
      const poppedView = getViewFromLocation();
      setCurrentView(poppedView);
      localStorage.setItem('ib_current_view', poppedView);
      if (typeof window !== 'undefined' && !window.location.pathname.match(/^\/dispute\/[a-zA-Z0-9_-]+\/?$/)) {
        updateSEOMeta(poppedView);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState, pushHistory = true) => {
    setCurrentView(view);
    localStorage.setItem('ib_current_view', view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSEOMeta(view);

    const targetPath = VIEW_PATH_MAP[view] || '/';
    if (pushHistory && typeof window !== 'undefined' && window.location.pathname !== targetPath) {
      window.history.pushState({ view }, '', targetPath);
    }
  };

  const getSearchResults = () => {
    if (!globalSearchQuery.trim()) return [];
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
    const normalizedQuery = normalize(globalSearchQuery);
    
    // 1. Filter static items
    const matchedStatic = GLOBAL_SEARCH_ITEMS.filter(item => 
      normalize(item.title).includes(normalizedQuery) || 
      normalize(item.desc).includes(normalizedQuery) ||
      normalize(item.category).includes(normalizedQuery)
    );
    
    // 2. Filter insurers dynamically
    const matchedInsurers = INSURERS_DATA.filter(ins => 
      normalize(ins.name).includes(normalizedQuery)
    ).map(ins => ({
      title: `${ins.name} 고객센터 및 청구서류`,
      desc: `고객센터: ${ins.phone} | 팩스: ${ins.fax || '정보 없음'}`,
      category: '보험사정보',
      view: 'claim' as ViewState,
      insurerId: ins.id,
      query: ins.name
    }));

    return [...matchedStatic, ...matchedInsurers].slice(0, 10);
  };

  const handleSearchResultClick = (item: any) => {
    handleNavigate(item.view);
    setGlobalSearchQuery('');
    setShowSearchResults(false);
    
    setTimeout(() => {
      if (item.view === 'terms') {
        window.dispatchEvent(new CustomEvent('ib-navigate-terms', {
          detail: {
            insurerId: item.insurerId || 'db-ins',
            subTab: item.subTab || null,
            filter: item.filter || ''
          }
        }));
      } else if (item.view === 'claim') {
        window.dispatchEvent(new CustomEvent('ib-navigate-claim', {
          detail: {
            insurerId: item.insurerId || null,
            query: item.query || ''
          }
        }));
      } else if (item.view === 'surgery') {
        window.dispatchEvent(new CustomEvent('ib-navigate-surgery', {
          detail: {
            tab: 'surgeryName',
            query: item.filter || ''
          }
        }));
      }
    }, 150);
  };

  // Quick navigation menu data
  const menus = [
    { id: 'home' as ViewState, label: 'HOME' },
    { id: 'claim' as ViewState, label: '보험사정보' },
    { id: 'terms' as ViewState, label: '담보별 분류표' },
    { id: 'surgery' as ViewState, label: '수술명검색' },
    { id: 'indemnity' as ViewState, label: '실손의료비계산기' },
    { id: 'age' as ViewState, label: '보험나이계산기' },
    { id: 'planner-goods' as ViewState, label: '영업자료' },
    { id: 'dispute' as ViewState, label: '판례＆분쟁' }
  ];

  // Main navigation link renderer
  const renderNavLinks = () => {
    return (
      <div className="flex items-center border border-white/10 bg-[#0F172A]/40 p-1 rounded-none gap-0.5">
        {menus.map((menu, idx) => {
          const isActive = currentView === menu.id;
          return (
            <React.Fragment key={menu.id}>
              <a
                href={VIEW_PATH_MAP[menu.id]}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(menu.id);
                }}
                className={`whitespace-nowrap px-1 lg:px-1.5 xl:px-2.5 2xl:px-3.5 py-1.5 text-xs lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-black tracking-tight uppercase transition-all cursor-pointer border rounded-none inline-block ${
                  isActive
                    ? 'bg-[#cb9f74] text-white border-[#cb9f74] shadow-md'
                    : 'bg-transparent text-slate-100 border-transparent hover:text-white hover:bg-white/10'
                }`}
              >
                {menu.label}
              </a>
              {idx < menus.length - 1 && (
                <span className="text-white/10 font-normal mx-0.5 select-none">|</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-nike-black font-sans flex flex-col antialiased selection:bg-[#123941] selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#123941] border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16 py-2 flex items-center justify-between">
          
          {/* Left Side: Logo Brand + Desktop Global Search Bar */}
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('home');
              }}
              className="flex items-center group cursor-pointer text-left shrink-0"
            >
              <div className="flex flex-col items-start leading-none">
                <h1 className="text-lg md:text-xl lg:text-2xl font-black text-white group-hover:text-[#cb9f74] tracking-tight leading-none uppercase transition-colors duration-200">
                  보험브릿지
                </h1>
                <span className="text-[10px] md:text-[11px] text-[#cb9f74] font-extrabold block mt-1 tracking-wider leading-none">
                  INSURANCE BRIDGE
                </span>
              </div>
            </a>

            {/* Global Search Bar (Only Desktop, placed next to logo) */}
            <div className="hidden lg:block relative w-36 lg:w-44 xl:w-56 2xl:w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cb9f74]/80" />
                <input
                  type="text"
                  placeholder="무엇이든 검색하세요 (예: 심장, 암, 현대해상)"
                  value={globalSearchQuery}
                  onChange={(e) => {
                    setGlobalSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-full pl-9 pr-8 py-1.5 text-xs bg-white/10 text-white placeholder-slate-300 rounded-lg border border-white/15 focus:outline-hidden focus:ring-1 focus:ring-[#cb9f74] focus:border-[#cb9f74] focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 transition-all font-bold"
                />
                {globalSearchQuery && (
                  <button 
                    onClick={() => setGlobalSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-100 focus:outline-hidden"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {showSearchResults && globalSearchQuery.trim() && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowSearchResults(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-72 sm:w-96 bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden max-h-[380px] overflow-y-auto">
                    <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">검색 결과 ({getSearchResults().length}개)</span>
                      <span className="text-[9px] font-bold text-[#cb9f74]">보험브릿지 통합검색</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {getSearchResults().length > 0 ? (
                        getSearchResults().map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSearchResultClick(item)}
                            className="w-full text-left p-3 hover:bg-slate-50/80 transition-colors flex flex-col gap-1 focus:outline-hidden cursor-pointer"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-black text-[#123941] truncate">{item.title}</span>
                              <span className="shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                                {item.category}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.desc}</span>
                          </button>
                        ))
                      ) : (
                        <div className="p-8 text-center text-slate-400">
                          <p className="text-xs font-bold">검색 결과가 없습니다.</p>
                          <p className="text-[10px] mt-1 text-slate-400">다른 키워드로 검색해 보세요 (예: 심장, 암, 현대해상)</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {renderNavLinks()}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-none text-white hover:bg-white/10 focus:outline-hidden transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

         </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-[#123941] border-b border-white/10 z-40 p-4 space-y-3 shadow-xl"
          >
            {/* Mobile Search Bar */}
            <div className="relative w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cb9f74]/80" />
                <input
                  type="text"
                  placeholder="무엇이든 검색하세요 (예: 심장, 암, 현대해상)"
                  value={globalSearchQuery}
                  onChange={(e) => {
                    setGlobalSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-full pl-9 pr-8 py-2 text-xs bg-white/10 text-white placeholder-slate-300 rounded-lg border border-white/15 focus:outline-hidden focus:ring-1 focus:ring-[#cb9f74] focus:border-[#cb9f74] focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 transition-all font-bold"
                />
                {globalSearchQuery && (
                  <button 
                    onClick={() => setGlobalSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-100 focus:outline-hidden"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              
              {/* Mobile Search Results list */}
              {showSearchResults && globalSearchQuery.trim() && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden max-h-[280px] overflow-y-auto">
                  <div className="p-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">검색 결과 ({getSearchResults().length}개)</span>
                    <span className="text-[9px] font-bold text-[#cb9f74]">보험브릿지 통합검색</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {getSearchResults().length > 0 ? (
                      getSearchResults().map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearchResultClick(item)}
                          className="w-full text-left p-3 hover:bg-slate-50/80 transition-colors flex flex-col gap-1 focus:outline-hidden cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-black text-[#123941] truncate">{item.title}</span>
                            <span className="shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                              {item.category}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.desc}</span>
                        </button>
                      ))
                    ) : (
                      <div className="p-6 text-center text-slate-400">
                        <p className="text-xs font-bold">검색 결과가 없습니다.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="h-px bg-white/10 my-1" />

            {menus.map((menu) => (
              <a
                key={menu.id}
                href={VIEW_PATH_MAP[menu.id]}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(menu.id);
                }}
                className={`w-full block text-left px-5 py-3 text-base font-medium uppercase transition-colors rounded-none ${
                  currentView === menu.id
                    ? 'bg-[#cb9f74] text-white font-semibold shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {menu.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6">

        {/* Views Router */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {currentView === 'home' ? (
              /* Landing Dashboard View */
              <div className="space-y-10">
                
                {/* 1. Global Adsense Horizontal Banner Placeholder (Above Main Banner) */}
                <div className="w-full">
                  <AdZone type="header" id="global-ad-header" />
                </div>

                {/* 2. Unified Mega Banner & Shortcuts Block (No space, merged background) */}
                <div className="bg-[#123941] rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col">
                  {/* High-Fidelity Premium Hero Banner with clean solid #123941 background */}
                  <div 
                    className="relative text-white p-8 md:p-14 lg:p-16 overflow-hidden flex flex-col items-center text-center justify-center min-h-[300px] bg-[#123941]"
                  >
                    {/* Full width content */}
                    <div className="max-w-4xl space-y-5 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#cb9f74]/10 text-[#cb9f74] rounded-full text-[10px] font-bold border border-[#cb9f74]/30 tracking-wider uppercase mx-auto">
                        <Sparkles className="w-3.5 h-3.5" />
                        INSURANCE CONNECT PLATFORM
                      </span>
                      
                      <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] leading-none tracking-tight font-black">
                        <span className="text-[#cb9f74]">보험</span>의 모든 것을 <span className="text-[#cb9f74]">연결</span>하다.
                      </h2>
                      
                      <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-3xl font-bold pt-1 mx-auto">
                        고객에게는 쉽고 정확한 보험 정보를, 전문가에게는 더 강력한 실무 솔루션을 제공합니다.
                      </p>
                    </div>

                  </div>

                  {/* 3. Unified Theme High-Fidelity Simple Shortcut Area (1 Row on Desktop, no English) */}
                  <div className="bg-[#123941] p-5 sm:p-6 border-t border-white/10">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 lg:gap-3">
                      {[
                        { id: 'claim' as ViewState, title: '보험사정보', desc: '고객센터 번호 ＆ 홈페이지 ＆ 보험금청구서류' },
                        { id: 'terms' as ViewState, title: '담보별 분류표', desc: '담보분류 기준 및 정의' },
                        { id: 'surgery' as ViewState, title: '수술명검색', desc: '약관 기반 수술비 및 종수술비 검색' },
                        { id: 'indemnity' as ViewState, title: '실손의료비계산기', desc: '1~5세대 맞춤형 계산기' },
                        { id: 'age' as ViewState, title: '보험나이계산기', desc: '상령일 계산기' },
                        { id: 'planner-goods' as ViewState, title: '영업자료', desc: '실무역량을 극대화 해주는 용품' },
                        { id: 'dispute' as ViewState, title: '판례＆분쟁', desc: '분쟁조정 및 주요 판례 DB' },
                      ].map((item) => (
                        <a 
                          key={item.id}
                          href={VIEW_PATH_MAP[item.id]}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(item.id);
                          }}
                          className="bg-white border border-slate-200/90 rounded-xl p-3.5 flex flex-col justify-between items-center text-center min-h-[142px] group shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:bg-[#cb9f74] hover:border-[#cb9f74] transition-all duration-200 cursor-pointer block"
                        >
                          <div className="space-y-1 flex flex-col items-center w-full">
                            <h4 className="text-lg md:text-xl font-black text-[#123941] group-hover:text-[#123941] leading-tight transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
                              {item.title}
                            </h4>
                            <p className="text-[10px] md:text-xs text-slate-500 group-hover:text-[#123941] font-extrabold leading-normal transition-colors duration-200 max-w-[130px] line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex items-center justify-center gap-1 pt-1.5 w-full border-t border-slate-100 group-hover:border-[#123941]/20 text-[10px] md:text-[11px] text-slate-400 font-bold group-hover:text-[#123941] group-hover:underline transition-all duration-200">
                            <span>바로가기</span>
                            <span>&gt;</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

                {/* 4. Sub banner / Info guide footer */}
                <div className="bg-[#f8fafc] border border-slate-200/80 rounded-none p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left shadow-2xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-none bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-3xs">
                      <HelpCircle className="w-5 h-5 text-slate-800" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-extrabold text-slate-900">
                        질병사인 분류 및 최신 수술비 변동이 반영되었습니다
                      </h4>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                        본 사이트는 2026년 기준 금융위원회 및 보건복지부 고시 최신 개정 실손/수술 종수를 참고합니다.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0 uppercase tracking-wider bg-white px-2.5 py-1 border border-slate-200">
                    DATA REFRESHED: JUL 2026
                  </span>
                </div>

              </div>
            ) : currentView === 'claim' ? (
              <ClaimForms />
            ) : currentView === 'terms' ? (
              <TermsMaster />
            ) : currentView === 'surgery' ? (
              <SurgerySearch />
            ) : currentView === 'indemnity' ? (
              <IndemnityTerms />
            ) : currentView === 'age' ? (
              <AgeCalculator />
            ) : currentView === 'dispute' ? (
              <DisputePrecedent />
            ) : currentView === 'planner-goods' ? (
              <PlannerGoods />
            ) : null}
          </motion.div>
        </AnimatePresence>

      </main>

      {/* 4. Global Footer with legal notice */}
      <footer className="bg-white text-nike-black text-xs mt-12 py-10 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-hairline-soft pb-6">
            <div className="space-y-1 text-left">
              <span className="text-sm font-bold text-nike-black tracking-tight uppercase">보험브릿지 (Insurance Bridge)</span>
              <p className="text-[11px] text-[#707072]">보험설계사 업무 조력 및 고객 보상 지식 전파를 위한 정보제공형 독립 웹 플랫폼</p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-[11px] text-[#707072]">
              <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="hover:text-nike-black font-semibold cursor-pointer">홈으로</a>
              <span>|</span>
              <a href="/planner-goods/" onClick={(e) => { e.preventDefault(); handleNavigate('planner-goods'); }} className="hover:text-nike-black font-semibold cursor-pointer">영업자료</a>
              <span>|</span>
              <a href="/dispute/" onClick={(e) => { e.preventDefault(); handleNavigate('dispute'); }} className="hover:text-nike-black font-semibold cursor-pointer">판례＆분쟁</a>
              <span>|</span>
              <a href="https://www.fss.or.kr" target="_blank" rel="noreferrer" className="hover:text-nike-black font-semibold flex items-center gap-1">
                금융감독원 바로가기
              </a>
            </div>
          </div>

          <div className="space-y-3 text-[11px] text-[#707072] leading-relaxed text-left">
            <p>
              <strong>법적 면책 조항:</strong> 본 웹사이트에서 제공하는 보험사별 청구서류, 질병코드별 암 진단비 분류, 수술분류표 및 실손 보상 모의 계산 데이터는 한국의 표준약관 및 보편적 지급 사례를 기초로 제작된 <strong>단순 가이드라인(정보 참고용)</strong>입니다. 
            </p>
            <p>
              실제 보험금의 지급 유무, 보장 금액 및 약관의 최종 유권해석은 계약자가 가입한 해당 보험상품의 개별 약관 및 각 보험사 심사부서의 최종 보상 심사 기준을 따르며, 어떠한 경우에도 본 가이드 데이터가 법적 분쟁의 책임 소재나 계약상의 증빙서류로 효력을 가질 수 없습니다.
            </p>
            <p className="font-mono pt-2 text-[9px] text-[#9e9ea0] text-center sm:text-left uppercase">
              &copy; 2026 INSURANCE BRIDGE. POWERED BY AI STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
