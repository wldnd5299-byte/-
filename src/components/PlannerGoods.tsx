/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Search, Download, ExternalLink, Filter, HelpCircle, CheckCircle, Tag, Layers, Star, Printer, ArrowRight, FileText, PieChart, TrendingUp, Users, Eye, X, Award, Check, Copy } from 'lucide-react';
import AdZone from './AdZone';

interface GoodItem {
  id: number;
  title: string;
  category: 'materials' | 'stationery' | 'gifts' | 'digital' | 'disability' | 'breastcancer' | 'breastcancerrecurrence' | 'stomachcancerrecurrence' | 'heavyiontherapy' | 'cancerstats' | 'agecancer' | 'insitucancer' | 'coloncancertreat';
  categoryLabel: string;
  badgeLeft?: string;
  badgeRight?: string;
  price: string;
  desc: string;
  isDownloadable: boolean;
  downloadUrl?: string;
  linkText?: string;
  rating?: number;
  image: string; // inline custom styling or vector placeholder
  tags: string[];
  details?: { sections: { title: string; content: string }[] };
  target?: string;
  date?: string;
  summary?: string;
  svgIllustration?: React.ReactNode;
}

// SVG Illustration components for 4 Representative Diseases
function EyeIllustration() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-1.5 flex items-center justify-center shadow-2xs">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 50 Q50 15 90 50 Q50 85 10 50 Z" fill="#ffffff" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="50" r="22" fill="#3b82f6" opacity="0.95" />
        <circle cx="50" cy="50" r="14" fill="#1e293b" />
        <circle cx="44" cy="44" r="4" fill="#ffffff" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="#ef4444" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="5" fill="#dc2626" />
        <line x1="34" y1="50" x2="66" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2"/>
        <line x1="50" y1="34" x2="50" y2="66" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2"/>
        <path d="M25 31 Q30 20 35 25" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
        <path d="M45 23 Q50 12 55 23" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
        <path d="M65 25 Q70 20 75 31" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function JointIllustration() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-1.5 flex items-center justify-center shadow-2xs">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M38 10 L62 10 L62 38 Q66 48 50 48 Q34 48 38 38 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2.5"/>
        <path d="M40 54 Q50 54 60 54 L58 90 L42 90 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2.5"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="3,3"/>
        <circle cx="50" cy="50" r="14" fill="#ef4444" opacity="0.3"/>
        <circle cx="50" cy="50" r="9" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
        <circle cx="50" cy="50" r="4" fill="#b91c1c"/>
      </svg>
    </div>
  );
}

function SpineIllustration() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-1.5 flex items-center justify-center shadow-2xs">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 8 Q62 28 48 50 Q36 72 52 92" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round"/>
        <rect x="42" y="10" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"/>
        <rect x="44" y="22" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"/>
        <rect x="43" y="34" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"/>
        <rect x="38" y="46" width="18" height="9" rx="2" fill="#f87171" stroke="#dc2626" strokeWidth="1.5"/>
        <circle cx="36" cy="50.5" r="4.5" fill="#ef4444"/>
        <rect x="41" y="58" width="18" height="9" rx="2" fill="#f87171" stroke="#dc2626" strokeWidth="1.5"/>
        <rect x="44" y="70" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"/>
        <rect x="46" y="82" width="14" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"/>
      </svg>
    </div>
  );
}

function BrainIllustration() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-1.5 flex items-center justify-center shadow-2xs">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M25 88 C 22 75, 20 60, 25 45 C 30 22, 55 12, 75 25 C 88 35, 88 55, 80 65 C 75 72, 72 78, 70 88" fill="#ffedd5" stroke="#fdba74" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M38 42 C 35 28, 55 20, 68 30 C 78 38, 72 58, 62 58 C 50 62, 38 55, 38 42 Z" fill="#fed7aa" stroke="#fb923c" strokeWidth="1.5"/>
        <circle cx="58" cy="40" r="16" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="3,3"/>
        <circle cx="58" cy="40" r="10" fill="#ef4444" opacity="0.3"/>
        <circle cx="58" cy="40" r="6" fill="#dc2626"/>
      </svg>
    </div>
  );
}

// SVG Illustration components for Age Groups Characters
function Age30Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <path d="M18 18 C18 8 42 8 42 18 L44 38 C44 38 40 40 38 32 L38 22 L22 22 L22 32 C20 40 16 38 16 38 Z" fill="#854d0e" />
        <circle cx="30" cy="20" r="8" fill="#fed7aa" />
        <circle cx="27" cy="19" r="1" fill="#1e293b"/>
        <circle cx="33" cy="19" r="1" fill="#1e293b"/>
        <path d="M28 22 Q30 24 32 22" fill="none" stroke="#334155" strokeWidth="1" strokeLinecap="round"/>
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#16a34a" />
        <path d="M26 36 L30 46 L34 36 Z" fill="#ffffff" />
        <rect x="16" y="40" width="10" height="14" rx="1.5" fill="#15803d" stroke="#ffffff" strokeWidth="1"/>
        <circle cx="43" cy="30" r="3.5" fill="#fed7aa"/>
      </svg>
    </div>
  );
}

function Age40Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <path d="M22 18 C22 10 38 10 38 18 L38 20 L22 20 Z" fill="#1e293b" />
        <circle cx="30" cy="20" r="8" fill="#fed7aa" />
        <rect x="23" y="17" width="5" height="4" rx="1" fill="none" stroke="#1e293b" strokeWidth="1"/>
        <rect x="32" y="17" width="5" height="4" rx="1" fill="none" stroke="#1e293b" strokeWidth="1"/>
        <line x1="28" y1="19" x2="32" y2="19" stroke="#1e293b" strokeWidth="1"/>
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#1e293b" />
        <path d="M26 36 L30 48 L34 36 Z" fill="#ffffff" />
        <path d="M29 39 L31 39 L30.5 48 Z" fill="#dc2626" />
        <rect x="34" y="42" width="14" height="12" rx="1" fill="#f59e0b" stroke="#ffffff" strokeWidth="1"/>
      </svg>
    </div>
  );
}

function Age50Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <path d="M22 18 C22 11 38 11 38 18 L38 20 L22 20 Z" fill="#475569" />
        <circle cx="30" cy="20" r="8" fill="#fed7aa" />
        <path d="M27 23 Q30 25 33 23" fill="none" stroke="#334155" strokeWidth="1" strokeLinecap="round"/>
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#eab308" />
        <path d="M26 36 L30 43 L34 36 Z" fill="#ffffff" />
        <circle cx="43" cy="38" r="3.5" fill="#fed7aa"/>
      </svg>
    </div>
  );
}

function Age60Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <path d="M21 18 C21 9 39 9 39 18 L39 21 L21 21 Z" fill="#94a3b8" />
        <circle cx="30" cy="20" r="8" fill="#fed7aa" />
        <circle cx="21" cy="15" r="3.5" fill="#fed7aa"/>
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#3b82f6" />
        <path d="M26 36 L30 42 L34 36 Z" fill="#ffffff" />
      </svg>
    </div>
  );
}

function Age70Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <circle cx="30" cy="11" r="5" fill="#cbd5e1"/>
        <path d="M20 20 C20 12 40 12 40 20 L40 23 L20 23 Z" fill="#cbd5e1" />
        <circle cx="30" cy="21" r="8" fill="#fed7aa" />
        <circle cx="26" cy="20" r="2.5" fill="none" stroke="#475569" strokeWidth="1"/>
        <circle cx="34" cy="20" r="2.5" fill="none" stroke="#475569" strokeWidth="1"/>
        <line x1="28.5" y1="20" x2="31.5" y2="20" stroke="#475569" strokeWidth="1"/>
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#84cc16" />
        <path d="M22 42 L30 45 L38 42 L38 54 L30 52 L22 54 Z" fill="#ffffff" stroke="#475569" strokeWidth="1"/>
      </svg>
    </div>
  );
}

function Age80Char() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-1 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <path d="M21 19 C21 10 39 10 39 19 L39 22 L21 22 Z" fill="#e2e8f0" />
        <circle cx="30" cy="21" r="8" fill="#fed7aa" />
        <path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#b45309" />
        <path d="M27 36 L30 45 L33 36 Z" fill="#fef3c7" />
        <path d="M43 32 Q47 32 46 38 L45 58" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}



function PlannerGoods() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'heavyiontherapy' | 'stomachcancerrecurrence' | 'agecancer' | 'cancerstats' | 'breastcancer' | 'breastcancerrecurrence' | 'disability' | 'insitucancer' | 'coloncancertreat' | 'materials' | 'stationery' | 'gifts' | 'digital'>('all');
  const [downloadCount, setDownloadCount] = useState<Record<number, number>>({ 1: 1248, 2: 954, 3: 1120, 4: 1380, 5: 1450, 9: 1620, 10: 2150 });
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<GoodItem | null>(null);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const [selectedReportId, setSelectedReportId] = useState<number>(1);
  const [activeReportSubTab, setActiveReportSubTab] = useState<'summary' | 'top10' | 'gender' | 'age' | 'sales'>('summary');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGood, setSelectedGood] = useState<GoodItem | null>(null);

  const categories = ['전체', 'materials', 'stationery', 'gifts', 'digital', 'disability', 'breastcancer', 'breastcancerrecurrence', 'stomachcancerrecurrence', 'heavyiontherapy', 'cancerstats', 'agecancer', 'insitucancer', 'coloncancertreat'];

  const goods: GoodItem[] = [
    {
      id: 10,
      title: '중입자치료 (연세암병원 중입자치료센터 공식 가이드)',
      category: 'heavyiontherapy',
      categoryLabel: '중입자치료',
      badgeLeft: '연세암병원 / 중입자치료센터',
      price: '무료 PDF / 웹뷰',
      desc: '현존하는 최고의 암 치료법 꿈의 암치료 중입자치료 완벽 정리! 수소입자 대비 12배 무거운 탄소입자 가속, Bragg Peak(브래그 피크) 종양 표적 타격, X-선 대비 2~3배 높고 강력한 세포 생물학적 생포 효과, DNA 클러스터 절단, 췌장암·폐암·간암·전립선암 적용, 12회 짧은 치료 및 고액 비급여 치료비 영업 브리핑 자료.',
      isDownloadable: true,
      downloadUrl: '중입자치료_연세암병원_공식가이드.pdf',
      image: 'bg-[#0f2b5c] text-white',
      tags: ['중입자치료', '연세암병원', '브래그피크', 'BraggPeak', '탄소이온가속', '꿈의암치료기', '췌장암폐암간암전립선암', 'DNA쌍가닥절단', '12회short치료', '영업브리핑자료']
    },
    {
      id: 9,
      title: '위암 재발 및 전이 (국가암지식정보센터 & 대한위암학회 가이드)',
      category: 'stomachcancerrecurrence',
      categoryLabel: '위암 재발/전이',
      badgeLeft: '국가암지식정보센터 / 보건복지부',
      price: '무료 PDF / 웹뷰',
      desc: '전체 위암 환자의 40~60% 재발 사망. 수술 후 2년 내 50%, 3년 내 70%, 5년 내 90% 재발 집중! 국소재발(림프절), 복강내재발(장폐색·복수·재수술불가), 타장기전이(간·폐·뼈·뇌) 3대 재발 패턴 완벽 분석 및 영업 활용 브리핑 자료.',
      isDownloadable: true,
      downloadUrl: '위암_재발및전이_국가암지식정보센터.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['위암재발전이', '국가암지식정보센터', '수술후5년내90%', '복강내재발', '국소재발', '장폐색복수', '원격전이', '영업브리핑자료']
    },
    {
      id: 8,
      title: '유방암 재발 및 전이 (국가암지식정보센터 & 란셋 임상통계 가이드)',
      category: 'breastcancerrecurrence',
      categoryLabel: '유방암 재발/전이',
      badgeLeft: '국가암지식정보센터 / 란셋(Lancet)',
      price: '무료 PDF / 웹뷰',
      desc: '유방암 5년 생존율 90% 이상이나, 10~20년 후 발생하는 후기 재발률 25% 달발. 호르몬 수용체 양성(70%) 10년/15년 재발 통계, 뼈·폐·간·뇌 원격전이 장기별 특성, 산정특례 5년 만료 후 검사비/의료비 공백 및 영업 브리핑 자료.',
      isDownloadable: true,
      downloadUrl: '유방암_재발및전이_국가암지식정보센터.pdf',
      image: 'bg-[#831843] text-white',
      tags: ['유방암재발전이', '국가암지식정보센터', '후기재발25%', '호르몬양성70%', '란셋통계', '산정특례5년만료', '뼈전이', '이차암', 'BRCA']
    },
    {
      id: 7,
      title: '대장암 치료방법 (국가암지식정보센터·보건복지부 공식 자료)',
      category: 'coloncancertreat',
      categoryLabel: '암 치료 가이드',
      badgeLeft: '국가암지식정보센터 / 보건복지부',
      price: '무료 PDF / 웹뷰',
      desc: '대장암 치료법 결정 핵심(침윤도), 내시경적 용종절제술, 결장암·직장암 부위별 절제 수술법, 세포독성·표적·면역항암치료제, 방사선치료(TNT/Watch & Wait) 및 표적/면역항암 특약 영업 브리핑 자료.',
      isDownloadable: true,
      downloadUrl: '대장암_치료방법_국가암지식정보센터.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['대장암치료방법', '국가암지식정보센터', '내시경절제술', '결장암수술', '직장암수술', '표적항암제', '면역항암제', '영업브리핑자료']
    },
    {
      id: 6,
      title: '제자리암(상피내암) 발생률 (2023년 국가암지식정보센터·보건복지부 통계)',
      category: 'insitucancer',
      categoryLabel: '국가암통계 전문자료',
      badgeLeft: '국가암지식정보센터 / 보건복지부',
      price: '무료 PDF / 웹뷰',
      desc: '2023년 상피내암(제자리암) 발생자수 총 38,204명 (1999년 3,595명 대비 10.6배 폭증!). 연도별 발생자수 및 조발생률 추이(1999~2023), 남녀 주요 발생 암종(자궁경부암 43.1%, 유방암 27.0%, 대장암 44.0%, 방광암 21.7%), 유사암 진단비 필수 소구자료.',
      isDownloadable: true,
      downloadUrl: '제자리암_상피내암_발생률_국가암지식정보센터.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['제자리암발생률', '상피내암통계', '국가암지식정보센터', '자궁경부제자리암', '유방제자리암', '대장제자리암', '유사암소구자료']
    },
    {
      id: 5,
      title: '연령별 암발생률 (2023년 국가암지식정보센터·보건복지부 통계)',
      category: 'agecancer',
      categoryLabel: '국가암통계 전문자료',
      badgeLeft: '국가암지식정보센터 / 보건복지부',
      price: '무료 PDF / 웹뷰',
      desc: '60세 이상 암발생률 10만 명당 1,021.2명 돌파! 연령군별 암발생 현황(0~80세이상 남녀 발생자수 및 조발생률), 50대 후반 남성 암발생률 역전 현상, 연령대별 자주 발생하는 주요 암종(백혈병, 갑상선암, 유방암, 전립선암, 폐암, 대장암) 완벽 분석 리포트.',
      isDownloadable: true,
      downloadUrl: '연령별_암발생률_국가암지식정보센터.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['연령별암발생률', '국가암지식정보센터', '60대이상고위험', '50대성별역전', '연령대별주요암', '영업브리핑자료']
    },
    {
      id: 1,
      title: '2024년 사망원인통계 결과 (10대 사망원인 및 성별·연령별 순위)',
      category: 'materials',
      categoryLabel: '통계청 보도자료',
      badgeLeft: '통계청 / 사망원인',
      price: '무료 PDF',
      desc: '통계청 발표 2024년 사망원인통계 결과 분석. 10대 사망원인 순위, 성별 및 연령별 사망원인 5대 순위, 3대 질환(암·심장·뇌) 사망률 및 영업 대면 상담용 완벽 브리핑 가이드입니다.',
      isDownloadable: true,
      downloadUrl: '2024년_사망원인통계_결과.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['통계청official', '10대사망원인', '성별연령별순위', '3대질병통계', '고객상담필수']
    },
    {
      id: 4,
      title: '암종별발생현황',
      category: 'cancerstats',
      categoryLabel: '국가암통계 전문자료',
      badgeLeft: '국가암정보센터 / 보건복지부',
      price: '무료 PDF / 웹뷰',
      desc: '국가암정보센터·보건복지부 공시 2023년 주요 암종별 발생 현황 완벽 분석자료. 남녀 전체 Top 10 암종, 성별(남/여) 10대 암종 순위, 발생자수, 분율(%), 조발생률 및 표준화발생률 데이터 완벽 제공.',
      isDownloadable: true,
      downloadUrl: '암종별_발생현황_국가암정보센터.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['국가암정보센터', '암종별발생현황', '남녀전체Top10', '남성10대암', '여성10대암', '보건복지부통계']
    },
    {
      id: 2,
      title: '후유장해담보 필요성 (대표질환별 지급률 및 보건복지부 장애인 통계)',
      category: 'disability',
      categoryLabel: '보장분석 필수자료',
      badgeLeft: '후유장해 / 약관분석',
      badgeRight: '보건복지부 공식통계',
      price: '무료 PDF',
      desc: '백내장·녹내장, 관절염·골절, 추간판 탈출증(디스크), 치매 등 4대 대표질환 약관 지급률 및 보건복지부 연령별 등록장애인 현황 분석. 고객 대면 브리핑용 핵심 영업자료입니다.',
      isDownloadable: true,
      downloadUrl: '후유장해담보_필요성_및_대표질환별_장애지급률.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['후유장해필요성', '대표질환지급률', '백내장', '관절염', '추간판탈출증', '치매', '보건복지부통계']
    },
    {
      id: 3,
      title: '유방암관련자료',
      category: 'breastcancer',
      categoryLabel: '암 보장 전문자료',
      badgeLeft: '유방암 / 보건복지부',
      badgeRight: '국립암센터 공식자료',
      price: '무료 PDF / 웹뷰',
      desc: '국내 여성 암 2위 유방암의 정의, 원인(유전·호르몬·연령), 증상, 3단계 자가검진법, 보건복지부 연령별 검진권고안, 수술요법, 항호르몬제/항암제/HER2 표적치료제(허셉틴 등) 완벽 분석자료.',
      isDownloadable: true,
      downloadUrl: '유방암_관련_영업자료.pdf',
      image: 'bg-[#123941] text-white',
      tags: ['유방암', '자가검진', '연령별검진', '항호르몬요법', 'HER2표적치료', '허셉틴', '국립암센터']
    }
  ];


  const handleOpenPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>2024년 사망원인통계 결과 (3대 질환 암·뇌·심 집중 분석)</title>
  <style>
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box;
    }
    @page { size: A4 portrait; margin: 8mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 14px; font-size: 10px; background: #fff; line-height: 1.5; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 17px; font-weight: 900; color: #123941; margin: 0; }
    .subtitle { font-size: 10px; color: #64748b; margin-top: 2px; font-weight: 700; }
    
    .meta-box { background: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 8px 12px; border-radius: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; font-size: 9.5px; color: #334155; }
    
    /* Highlight Banner for 3 Major Critical Illnesses */
    .highlight-banner {
      background: linear-gradient(135deg, #881337 0%, #be123c 50%, #4c1d95 100%) !important;
      color: #ffffff !important;
      padding: 10px 14px;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .highlight-banner-title {
      font-size: 12px;
      font-weight: 900;
      letter-spacing: -0.2px;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding-bottom: 4px;
    }
    .highlight-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      text-align: center;
    }
    .highlight-card {
      background: rgba(255,255,255,0.15) !important;
      border: 1px solid rgba(255,255,255,0.3) !important;
      padding: 6px 8px;
      border-radius: 6px;
    }
    .highlight-card-tag { font-size: 8px; font-weight: 800; background: #fef08a !important; color: #854d0e !important; padding: 1px 4px; border-radius: 3px; display: inline-block; margin-bottom: 2px; }
    .highlight-card-name { font-size: 11px; font-weight: 900; }
    .highlight-card-val { font-size: 12px; font-weight: 900; color: #fef08a !important; }

    .sec-title { font-size: 11.5px; font-weight: 800; color: #ffffff !important; background-color: #123941 !important; padding: 5px 9px; border-radius: 6px 6px 0 0; margin-top: 10px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center; }
    
    /* Graphic Bar Chart Styles for Print */
    .chart-box { border: 1px solid #cbd5e1 !important; border-radius: 8px; padding: 10px; background-color: #fafafa !important; margin-bottom: 10px; }
    .chart-row { display: flex; align-items: center; margin-bottom: 5px; font-size: 9.5px; }
    .chart-label { width: 125px; font-weight: 800; color: #1e293b; text-align: right; padding-right: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: flex-end; gap: 4px; }
    .chart-bar-bg { flex-grow: 1; background-color: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; height: 17px; border-radius: 4px; overflow: hidden; position: relative; display: flex; align-items: center; }
    .chart-bar-fill { height: 100%; border-radius: 3px; display: flex; align-items: center; justify-content: flex-end; padding-right: 6px; color: #ffffff !important; font-weight: 800; font-size: 9px; }
    
    /* Color Gradients for Specific Diseases */
    .bg-cancer { background-color: #be123c !important; background: linear-gradient(90deg, #e11d48, #be123c) !important; border-right: 2px solid #881337 !important; }
    .bg-heart { background-color: #e11d48 !important; background: linear-gradient(90deg, #f43f5e, #be123c) !important; border-right: 2px solid #881337 !important; }
    .bg-cerebro { background-color: #6d28d9 !important; background: linear-gradient(90deg, #8b5cf6, #6d28d9) !important; border-right: 2px solid #4c1d95 !important; }
    .bg-normal { background-color: #0284c7 !important; background: linear-gradient(90deg, #0284c7, #0369a1) !important; border-right: 2px solid #075985 !important; }
    .chart-val { width: 70px; font-weight: 800; color: #0f172a; padding-left: 8px; flex-shrink: 0; }

    /* Badge Tags */
    .tag-3da { background-color: #ffe4e6 !important; color: #9f1239 !important; border: 1px solid #fecdd3 !important; font-size: 8px; font-weight: 900; padding: 1px 4px; border-radius: 3px; white-space: nowrap; }

    /* Stacked bar */
    .stacked-container { display: flex; height: 22px; border-radius: 4px; overflow: hidden; font-size: 9px; font-weight: 800; color: #ffffff !important; text-align: center; line-height: 22px; margin-top: 4px; border: 1px solid #94a3b8 !important; }
    .st-0-39 { background-color: #64748b !important; }
    .st-40-59 { background-color: #38bdf8 !important; color: #0f172a !important; }
    .st-60-79 { background-color: #0284c7 !important; }
    .st-80 { background-color: #123941 !important; }

    table { width: 100%; border-collapse: collapse; font-size: 9px; margin-bottom: 12px; page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th { background-color: #f1f5f9 !important; color: #0f172a; font-weight: 800; text-align: left; padding: 5px 7px; border: 1px solid #cbd5e1 !important; }
    td { border: 1px solid #cbd5e1 !important; padding: 5px 7px; color: #334155; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .highlight { font-weight: 800; color: #123941; background-color: #f0fdfa !important; }
    .badge { display: inline-block; padding: 2px 5px; border-radius: 4px; font-weight: 800; font-size: 8.5px; }
    .badge-rank1 { background-color: #fee2e2 !important; color: #991b1b !important; border: 1px solid #fca5a5 !important; }
    .badge-rank2 { background-color: #fef3c7 !important; color: #92400e !important; border: 1px solid #fcd34d !important; }
    .badge-rank3 { background-color: #e0f2fe !important; color: #075985 !important; border: 1px solid #7dd3fc !important; }
    .notes { background-color: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 10px; border-radius: 6px; font-size: 9px; color: #475569; line-height: 1.5; margin-top: 12px; }
    .sales-box { background-color: #f0fdf4 !important; border: 1px solid #bbf7d0 !important; padding: 10px; border-radius: 6px; margin-top: 12px; font-size: 9px; color: #166534; line-height: 1.5; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 12px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <span style="font-weight: bold; color: #123941; font-size: 11px;">📄 통계청 - 2024년 사망원인통계 결과 (3대 질환 암·뇌·심 포인트 분석 브리핑)</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 8px 16px; font-weight: bold; border-radius: 6px; cursor: pointer; font-size: 11px;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">2024년 사망원인통계 분석 (암 · 뇌혈관 · 심장질환 보장 포인트)</h1>
      <div class="subtitle">통계청 사회통계국 인구동향과 공식 발표 (2025. 9. 25) | 보험브릿지 기획분석</div>
    </div>
    <div style="text-align: right; font-size: 9px; color: #64748b;">
      영업브리핑 및 대면 상담용
    </div>
  </div>

  <div class="meta-box">
    <div><strong>총 사망자 수:</strong> 358,569명 (+1.7%)</div>
    <div><strong>조사망률(10만명당):</strong> 702.6명 (+1.9%)</div>
    <div><strong>80세 이상 사망비중:</strong> 54.1% (역대 최고)</div>
  </div>

  <!-- Special Point Highlight Banner for 3 Major Illnesses -->
  <div class="highlight-banner">
    <div class="highlight-banner-title">
      <span>🔥 핵심 보장 포인트: 3대 주요 질환 (암 · 심장 · 뇌혈관) 사망 현황</span>
    </div>
    <div style="font-size: 9.5px; margin-bottom: 8px; opacity: 0.95;">
      💡 3대 질환 합산 사망률은 인구 10만 명당 <strong>288.2명</strong>으로, 대한민국 전체 사망원인의 <strong>41.0%</strong>를 차지합니다.
    </div>
    <div class="highlight-grid">
      <div class="highlight-card">
        <span class="highlight-card-tag">사망원인 1위</span>
        <div class="highlight-card-name">악성신생물 (암)</div>
        <div class="highlight-card-val">174.3명 (24.8%)</div>
      </div>
      <div class="highlight-card">
        <span class="highlight-card-tag">사망원인 2위</span>
        <div class="highlight-card-name">심장 질환</div>
        <div class="highlight-card-val">65.7명 (9.4%)</div>
      </div>
      <div class="highlight-card">
        <span class="highlight-card-tag">사망원인 4위</span>
        <div class="highlight-card-name">뇌혈관 질환</div>
        <div class="highlight-card-val">48.2명 (6.9%)</div>
      </div>
    </div>
  </div>

  <!-- Graphic Infographic 1: Top 10 Cause Bar Chart -->
  <div class="sec-title">
    <span>📊 1. 10대 사망원인 및 사망률 그래프 (인구 10만 명당 명)</span>
    <span style="font-size: 8.5px; opacity: 0.9;">* 3대 질환(암·뇌·심) 강조 표시</span>
  </div>
  <div class="chart-box">
    <div class="chart-row">
      <div class="chart-label"><span class="tag-3da">3대질환</span> 1위 암</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-cancer" style="width: 100%;">174.3명</div></div>
      <div class="chart-val" style="color: #be123c; font-weight: 900;">174.3명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label"><span class="tag-3da">3대질환</span> 2위 심장질환</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-heart" style="width: 37.7%;">65.7명</div></div>
      <div class="chart-val" style="color: #be123c; font-weight: 900;">65.7명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">3위 폐렴</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 33.8%;">59.0명</div></div>
      <div class="chart-val">59.0명</div>
    </div>
    <div class="chart-row" style="background: #f5f3ff; padding: 2px 0; border-radius: 4px;">
      <div class="chart-label"><span class="tag-3da" style="background-color: #edd4ff !important; color: #581c87 !important;">3대질환</span> 4위 뇌혈관질환</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-cerebro" style="width: 27.6%;">48.2명</div></div>
      <div class="chart-val" style="color: #6d28d9; font-weight: 900;">48.2명</div>
    </div>
    <div style="border-top: 1px dashed #cbd5e1; margin: 5px 0; padding-top: 3px; font-size: 8.5px; color: #9f1239; font-weight: bold; text-align: right;">
      🎯 3대 질환(암 174.3 + 심장 65.7 + 뇌혈관 48.2) 합계: 288.2명 (전체 사망의 41.0%)
    </div>
    <div class="chart-row">
      <div class="chart-label">5위 자살</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 16.7%;">29.1명</div></div>
      <div class="chart-val">29.1명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">6위 알츠하이머</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 13.7%;">23.9명</div></div>
      <div class="chart-val">23.9명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">7위 당뇨병</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 12.4%;">21.7명</div></div>
      <div class="chart-val">21.7명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">8위 고혈압성질환</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 9.2%;">16.1명</div></div>
      <div class="chart-val">16.1명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">9위 간 질환</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 8.8%;">15.3명</div></div>
      <div class="chart-val">15.3명 (+2)</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">10위 패혈증</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 8.6%;">15.1명</div></div>
      <div class="chart-val">15.1명 (-1)</div>
    </div>
  </div>

  <!-- Graphic Infographic 2: Age Composition Trend Stacked Bar Chart -->
  <div class="sec-title">📈 2. 연령별 사망 구성비 추이 (고령화 심화)</div>
  <div class="chart-box">
    <div style="font-size: 8.5px; font-weight: bold; margin-bottom: 4px; display: flex; justify-content: space-between;">
      <span>■ 0~39세 (2.4%) &nbsp; ■ 40~59세 (10.2%) &nbsp; ■ 60~79세 (33.3%) &nbsp; ■ 80세 이상 (54.1%)</span>
    </div>
    <div style="margin-bottom: 6px;">
      <div style="font-size: 8px; font-weight: bold; color: #475569; margin-bottom: 2px;">2024년 사망자 구성비 (80세 이상 54.1% 역대 최고치)</div>
      <div class="stacked-container">
        <div class="st-0-39" style="width: 2.4%;">2.4%</div>
        <div class="st-40-59" style="width: 10.2%;">10.2%</div>
        <div class="st-60-79" style="width: 33.3%;">33.3%</div>
        <div class="st-80" style="width: 54.1%;">80세 이상 54.1%</div>
      </div>
    </div>
    <div>
      <div style="font-size: 8px; font-weight: bold; color: #475569; margin-bottom: 2px;">2014년 사망자 구성비 (10년 전 비교)</div>
      <div class="stacked-container">
        <div class="st-0-39" style="width: 4.3%;">4.3%</div>
        <div class="st-40-59" style="width: 16.6%;">16.6%</div>
        <div class="st-60-79" style="width: 40.4%;">40.4%</div>
        <div class="st-80" style="width: 38.8%;">38.8%</div>
      </div>
    </div>
  </div>

  <div class="sec-title">🚻 3. 성별 사망원인 순위 및 3대 질환 비교</div>
  <table>
    <thead>
      <tr>
        <th style="width: 8%; text-align: center;">순위</th>
        <th style="width: 26%;">남성 사망원인</th>
        <th style="width: 15%; text-align: center;">사망률(남)</th>
        <th style="width: 26%;">여성 사망원인</th>
        <th style="width: 15%; text-align: center;">사망률(여)</th>
        <th style="width: 10%; text-align: center;">보장 구분</th>
      </tr>
    </thead>
    <tbody>
      <tr class="row-3da">
        <td class="text-center font-black" style="color: #be123c;">1위</td>
        <td class="font-black" style="color: #be123c;">🔥 악성신생물(암)</td>
        <td class="text-center font-black" style="color: #2563eb;">215.1명</td>
        <td class="font-black" style="color: #be123c;">🔥 악성신생물(암)</td>
        <td class="text-center font-black" style="color: #db2777;">133.7명</td>
        <td class="text-center"><span class="tag-3da">3대 핵심</span></td>
      </tr>
      <tr class="row-3da">
        <td class="text-center font-black" style="color: #be123c;">2위</td>
        <td class="font-black" style="color: #be123c;">🔥 심장 질환</td>
        <td class="text-center font-black">66.2명</td>
        <td class="font-black" style="color: #be123c;">🔥 심장 질환</td>
        <td class="text-center font-black">65.3명</td>
        <td class="text-center"><span class="tag-3da">3대 핵심</span></td>
      </tr>
      <tr>
        <td class="text-center font-bold">3위</td>
        <td class="font-bold">폐렴</td>
        <td class="text-center">61.5명</td>
        <td class="font-bold">폐렴</td>
        <td class="text-center">56.5명</td>
        <td class="text-center" style="color: #64748b; font-size: 8px;">호흡기</td>
      </tr>
      <tr class="row-3da" style="background-color: #f5f3ff !important;">
        <td class="text-center font-black" style="color: #6d28d9;">4위</td>
        <td class="font-black" style="color: #6d28d9;">🔥 뇌혈관 질환</td>
        <td class="text-center font-black">48.1명</td>
        <td class="font-black" style="color: #6d28d9;">🔥 뇌혈관 질환</td>
        <td class="text-center font-black">48.3명</td>
        <td class="text-center"><span class="tag-3da" style="background-color: #edd4ff !important; color: #581c87 !important;">3대 핵심</span></td>
      </tr>
      <tr>
        <td class="text-center font-bold">5위</td>
        <td class="font-bold">고의적 자해(자살)</td>
        <td class="text-center font-bold" style="color: #2563eb;">41.8명</td>
        <td class="font-bold">알츠하이머병</td>
        <td class="text-center font-bold" style="color: #db2777;">32.8명</td>
        <td class="text-center" style="color: #64748b; font-size: 8px;">특이 원인</td>
      </tr>
      <tr>
        <td class="text-center font-bold">7위</td>
        <td class="font-bold">간 질환</td>
        <td class="text-center font-bold" style="color: #2563eb;">21.8명</td>
        <td class="font-bold">당뇨병</td>
        <td class="text-center">20.2명</td>
        <td class="text-center font-bold" style="color: #2563eb;">남성 2.5배</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">🎂 4. 연령별 5대 사망원인 중 3대 질환(암·뇌·심) 점유율</div>
  <table>
    <thead>
      <tr>
        <th style="width: 12%; text-align: center;">연령대</th>
        <th style="width: 22%;">1순위 (최대위험)</th>
        <th style="width: 22%;">2순위</th>
        <th style="width: 22%;">3순위</th>
        <th style="width: 22%;">4~5순위</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center font-bold">10~39세</td>
        <td class="font-bold" style="color: #dc2626;">자살 (44~54%)</td>
        <td class="font-bold" style="color: #be123c;">🔥 암 (11~15%)</td>
        <td>운수사고</td>
        <td>간/심장 질환</td>
      </tr>
      <tr style="background-color: #fff1f2 !important;">
        <td class="text-center font-black" style="color: #9f1239;">40~79세 (주요 경제연령)</td>
        <td class="font-black" style="color: #be123c;">🔥 암 (25~41%) [절대적 1위]</td>
        <td class="font-black" style="color: #be123c;">🔥 심장 질환 (8~12%)</td>
        <td class="font-black" style="color: #6d28d9;">🔥 뇌혈관 질환 (6~9%)</td>
        <td>간 질환 / 폐렴</td>
      </tr>
      <tr style="background-color: #f8fafc !important;">
        <td class="text-center font-black">80세 이상 (초고령층)</td>
        <td class="font-black" style="color: #be123c;">🔥 암 (16.3%)</td>
        <td class="font-bold">폐렴 (11.8%)</td>
        <td class="font-bold" style="color: #be123c;">🔥 심장 질환 (10.5%)</td>
        <td class="font-bold" style="color: #6d28d9;">🔥 뇌혈관 (7.3%) / 알츠하이머</td>
      </tr>
    </tbody>
  </table>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 3대 질환(암·뇌·심) 통합 보장자산 상담 가이드</strong>
    1. <strong>암(1위, 174.3명)</strong>: 전체 사망의 24.8% 차지. 40대 이상 암 진단비 및 최신 표적/면역항암 특약 설계 필수.<br/>
    2. <strong>심장 질환(2위, 65.7명)</strong>: 급성심근경색증을 넘어 부정맥/빈맥 및 허혈성 심장질환 전체를 커버하는 넓은 범위 특약 구성 필요.<br/>
    3. <strong>뇌혈관 질환(4위, 48.2명)</strong>: 사망원인 4위이자 장기 입원/후유장해 유발 1위 질환. 뇌경색·뇌동맥류 포함 뇌혈관질환 진단비·수술비 비갱신 설계 유도.
  </div>

  <div class="notes">
    <strong>[출처]</strong> 통계청 사회통계국 인구동향과 2024년 사망원인통계 결과 (2025. 9. 발표) | 본 자료는 보험설계사의 고객 대면 브리핑용 인쇄/PDF 저장본입니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenDisabilityPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>후유장해담보 필요성 및 대표질환별 장애지급률 가이드</title>
  <style>
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box;
    }
    @page { size: A4 portrait; margin: 8mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 14px; font-size: 10px; background: #fff; line-height: 1.5; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 16px; font-weight: 900; color: #123941; margin: 0; }
    .subtitle { font-size: 9.5px; color: #64748b; margin-top: 2px; font-weight: 700; }
    .meta-box { background: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 6px 12px; border-radius: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; font-size: 9px; color: #334155; }
    
    .sec-title { font-size: 11px; font-weight: 800; color: #ffffff !important; background-color: #123941 !important; padding: 5px 9px; border-radius: 6px; margin-top: 10px; margin-bottom: 8px; }
    
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
    .card { border: 1px solid #cbd5e1 !important; border-radius: 8px; background-color: #fafafa !important; overflow: hidden; display: flex; flex-direction: column; }
    .card-head { background-color: #f1f5f9 !important; padding: 8px 10px; border-bottom: 1px solid #cbd5e1 !important; font-size: 11px; font-weight: 900; color: #0f172a; display: flex; align-items: center; gap: 10px; }
    .card-body { padding: 6px 10px; flex: 1; }
    .item-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px dashed #e2e8f0; font-size: 9px; }
    .item-row:last-child { border-bottom: none; }
    .hl-blue { color: #1d4ed8 !important; font-weight: 900; background-color: #eff6ff !important; padding: 2px 4px; border-radius: 4px; }
    
    table { width: 100%; border-collapse: collapse; font-size: 9px; margin-bottom: 10px; }
    th { background-color: #f1f5f9 !important; color: #0f172a; font-weight: 800; text-align: center; padding: 6px 4px; border: 1px solid #cbd5e1 !important; vertical-align: bottom; }
    td { border: 1px solid #cbd5e1 !important; padding: 6px 4px; text-align: center; color: #334155; }
    .bg-red-total { background-color: #dc2626 !important; color: #ffffff !important; font-weight: 900; }

    /* Chart Box in Print PDF */
    .chart-box { border: 1px solid #cbd5e1 !important; border-radius: 8px; padding: 10px; background-color: #fafafa !important; margin-bottom: 10px; }
    .chart-row { display: flex; align-items: center; margin-bottom: 5px; font-size: 9px; }
    .chart-label { width: 110px; font-weight: 800; color: #1e293b; text-align: right; padding-right: 8px; flex-shrink: 0; }
    .chart-bar-bg { flex-grow: 1; background-color: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; height: 16px; border-radius: 4px; overflow: hidden; position: relative; display: flex; align-items: center; }
    .chart-bar-fill { height: 100%; border-radius: 3px; display: flex; align-items: center; justify-content: flex-end; padding-right: 6px; color: #ffffff !important; font-weight: 800; font-size: 8.5px; }
    .bg-normal { background-color: #0284c7 !important; background: linear-gradient(90deg, #0284c7, #0369a1) !important; }
    .bg-cancer { background-color: #be123c !important; background: linear-gradient(90deg, #e11d48, #be123c) !important; }
    .chart-val { width: 65px; font-weight: 800; color: #0f172a; padding-left: 8px; flex-shrink: 0; }

    .sales-box { background-color: #f0fdf4 !important; border: 1px solid #bbf7d0 !important; border-radius: 8px; padding: 8px 12px; margin-top: 10px; font-size: 9px; color: #14532d; line-height: 1.6; }
    .notes { font-size: 8px; color: #94a3b8; margin-top: 8px; text-align: right; }

    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 12px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <span style="font-weight: bold; color: #123941; font-size: 11px;">📄 보건복지부 - 후유장해담보 필요성 및 대표질환별 장애지급률 가이드</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 8px 16px; font-weight: bold; border-radius: 6px; cursor: pointer; font-size: 11px;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">🛡️ 후유장해담보 필요성 및 대표질환별 장애지급률 가이드</h1>
      <div class="subtitle">대표질환(백내장·관절염·디스크·치매) 약관지급률 및 보건복지부 연령별 장애인 통계</div>
    </div>
    <div style="text-align: right;">
      <span style="background-color: #123941; color: white; padding: 3px 8px; border-radius: 4px; font-weight: 800; font-size: 9px;">보장분석 필수자료</span>
    </div>
  </div>

  <div class="meta-box">
    <span><strong>발행처:</strong> 영업자료 지원센터</span>
    <span><strong>기준 자료:</strong> 보건복지부 2020년 등록장애인 현황 &amp; 표준약관 후유장해 분류표</span>
    <span><strong>용도:</strong> 대면 고객 상담 &amp; 후유장해 필요성 환기용</span>
  </div>

  <div class="sec-title">🏥 1. 대표질환별 후유장해 지급률 요약</div>
  <div class="grid-2">
    <!-- Eye Disease Card -->
    <div class="card">
      <div class="card-head">
        <svg viewBox="0 0 100 100" style="width: 42px; height: 42px; shrink: 0;"><path d="M10 50 Q50 15 90 50 Q50 85 10 50 Z" fill="#ffffff" stroke="#334155" stroke-width="2.5"/><circle cx="50" cy="50" r="22" fill="#3b82f6" opacity="0.95"/><circle cx="50" cy="50" r="14" fill="#1e293b"/><circle cx="44" cy="44" r="4" fill="#ffffff"/><circle cx="50" cy="50" r="12" fill="none" stroke="#ef4444" stroke-width="2.5"/><circle cx="50" cy="50" r="5" fill="#dc2626"/><line x1="34" y1="50" x2="66" y2="50" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/><line x1="50" y1="34" x2="50" y2="66" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/></svg>
        <div>
          <div style="font-size: 8.5px; color: #2563eb; font-weight: 800;">[눈의 장해]</div>
          <div style="font-size: 11px; font-weight: 900; color: #0f172a;">대표질환: 백내장, 녹내장</div>
        </div>
      </div>
      <div class="card-body">
        <div class="item-row"><span>· 한 눈의 교정시력 0.2 이하</span><span>5%</span></div>
        <div class="item-row hl-blue"><span>· 한 눈의 교정시력 0.1 이하</span><span>15%</span></div>
        <div class="item-row"><span>· 한 눈의 교정시력 0.06 이하</span><span>25%</span></div>
        <div class="item-row"><span>· 한 눈의 교정시력 0.02 이하</span><span>35%</span></div>
      </div>
    </div>

    <!-- Joint Disease Card -->
    <div class="card">
      <div class="card-head">
        <svg viewBox="0 0 100 100" style="width: 42px; height: 42px; shrink: 0;"><path d="M38 10 L62 10 L62 38 Q66 48 50 48 Q34 48 38 38 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2.5"/><path d="M40 54 Q50 54 60 54 L58 90 L42 90 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2.5"/><circle cx="50" cy="50" r="20" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="50" cy="50" r="14" fill="#ef4444" opacity="0.3"/><circle cx="50" cy="50" r="9" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="50" cy="50" r="4" fill="#b91c1c"/></svg>
        <div>
          <div style="font-size: 8.5px; color: #2563eb; font-weight: 800;">[3대 관절 장해]</div>
          <div style="font-size: 11px; font-weight: 900; color: #0f172a;">대표질환: 관절염, 골절</div>
        </div>
      </div>
      <div class="card-body">
        <div class="item-row"><span>· 3대 관절 중 하나의 기능 약간장해</span><span>5%</span></div>
        <div class="item-row"><span>· 3대 관절 중 하나의 기능 뚜렷한 장해</span><span>10%</span></div>
        <div class="item-row hl-blue"><span>· 3대 관절 중 하나의 기능 심한장해</span><span>20%</span></div>
        <div class="item-row"><span>· 3대 관절 중 하나의 기능 완전상실</span><span>30%</span></div>
      </div>
    </div>

    <!-- Spine Disease Card -->
    <div class="card">
      <div class="card-head">
        <svg viewBox="0 0 100 100" style="width: 42px; height: 42px; shrink: 0;"><path d="M50 8 Q62 28 48 50 Q36 72 52 92" fill="none" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/><rect x="42" y="10" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/><rect x="44" y="22" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/><rect x="43" y="34" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/><rect x="38" y="46" width="18" height="9" rx="2" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/><circle cx="36" cy="50.5" r="4.5" fill="#ef4444"/><rect x="41" y="58" width="18" height="9" rx="2" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/><rect x="44" y="70" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/><rect x="46" y="82" width="14" height="7" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/></svg>
        <div>
          <div style="font-size: 8.5px; color: #2563eb; font-weight: 800;">[척추 장해]</div>
          <div style="font-size: 11px; font-weight: 900; color: #0f172a;">대표질환: 추간판 탈출증 (디스크)</div>
        </div>
      </div>
      <div class="card-body">
        <div class="item-row"><span>· 척추(등뼈)에 약간의 운동장해</span><span>10%</span></div>
        <div class="item-row"><span>· 척추(등뼈)에 뚜렷한 운동장해</span><span>30%</span></div>
        <div class="item-row hl-blue"><span>· 척추(등뼈)에 약간의 기형</span><span>15%</span></div>
        <div class="item-row"><span>· 척추(등뼈)에 뚜렷한 기형</span><span>30%</span></div>
      </div>
    </div>

    <!-- Brain Disease Card -->
    <div class="card">
      <div class="card-head">
        <svg viewBox="0 0 100 100" style="width: 42px; height: 42px; shrink: 0;"><path d="M25 88 C 22 75, 20 60, 25 45 C 30 22, 55 12, 75 25 C 88 35, 88 55, 80 65 C 75 72, 72 78, 70 88" fill="#ffedd5" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/><path d="M38 42 C 35 28, 55 20, 68 30 C 78 38, 72 58, 62 58 C 50 62, 38 55, 38 42 Z" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5"/><circle cx="58" cy="40" r="16" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="58" cy="40" r="10" fill="#ef4444" opacity="0.3"/><circle cx="58" cy="40" r="6" fill="#dc2626"/></svg>
        <div>
          <div style="font-size: 8.5px; color: #2563eb; font-weight: 800;">[신경계·정신동작]</div>
          <div style="font-size: 11px; font-weight: 900; color: #0f172a;">대표질환: 치매</div>
        </div>
      </div>
      <div class="card-body">
        <div class="item-row hl-blue"><span>· 약간의 치매 (CDR 2점)</span><span>40%</span></div>
        <div class="item-row"><span>· 뚜렷한 치매 (CDR 3점)</span><span>60%</span></div>
        <div class="item-row"><span>· 심한 치매 (CDR 4점)</span><span>80%</span></div>
        <div class="item-row"><span>· 극심한 치매 (CDR 5점)</span><span>100%</span></div>
      </div>
    </div>
  </div>

  <div class="sec-title">📊 2. 연령별 등록 장애인 현황 및 비율 (보건복지부)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 14%;">연령층</th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><path d="M18 18 C18 8 42 8 42 18 L44 38 C44 38 40 40 38 32 L38 22 L22 22 L22 32 C20 40 16 38 16 38 Z" fill="#854d0e"/><circle cx="30" cy="20" r="8" fill="#fed7aa"/><circle cx="27" cy="19" r="1" fill="#1e293b"/><circle cx="33" cy="19" r="1" fill="#1e293b"/><path d="M28 22 Q30 24 32 22" fill="none" stroke="#334155" stroke-width="1" stroke-linecap="round"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#16a34a"/><path d="M26 36 L30 46 L34 36 Z" fill="#ffffff"/><rect x="16" y="40" width="10" height="14" rx="1.5" fill="#15803d" stroke="#ffffff" stroke-width="1"/><circle cx="43" cy="30" r="3.5" fill="#fed7aa"/></svg>
          30대 이하
        </th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><path d="M22 18 C22 10 38 10 38 18 L38 20 L22 20 Z" fill="#1e293b"/><circle cx="30" cy="20" r="8" fill="#fed7aa"/><rect x="23" y="17" width="5" height="4" rx="1" fill="none" stroke="#1e293b" stroke-width="1"/><rect x="32" y="17" width="5" height="4" rx="1" fill="none" stroke="#1e293b" stroke-width="1"/><line x1="28" y1="19" x2="32" y2="19" stroke="#1e293b" stroke-width="1"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#1e293b"/><path d="M26 36 L30 48 L34 36 Z" fill="#ffffff"/><path d="M29 39 L31 39 L30.5 48 Z" fill="#dc2626"/><rect x="34" y="42" width="14" height="12" rx="1" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/></svg>
          40대
        </th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><path d="M22 18 C22 11 38 11 38 18 L38 20 L22 20 Z" fill="#475569"/><circle cx="30" cy="20" r="8" fill="#fed7aa"/><path d="M27 23 Q30 25 33 23" fill="none" stroke="#334155" stroke-width="1" stroke-linecap="round"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#eab308"/><path d="M26 36 L30 43 L34 36 Z" fill="#ffffff"/><circle cx="43" cy="38" r="3.5" fill="#fed7aa"/></svg>
          50대
        </th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><path d="M21 18 C21 9 39 9 39 18 L39 21 L21 21 Z" fill="#94a3b8"/><circle cx="30" cy="20" r="8" fill="#fed7aa"/><circle cx="21" cy="15" r="3.5" fill="#fed7aa"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#3b82f6"/><path d="M26 36 L30 42 L34 36 Z" fill="#ffffff"/></svg>
          60대
        </th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><circle cx="30" cy="11" r="5" fill="#cbd5e1"/><path d="M20 20 C20 12 40 12 40 20 L40 23 L20 23 Z" fill="#cbd5e1"/><circle cx="30" cy="21" r="8" fill="#fed7aa"/><circle cx="26" cy="20" r="2.5" fill="none" stroke="#475569" stroke-width="1"/><circle cx="34" cy="20" r="2.5" fill="none" stroke="#475569" stroke-width="1"/><line x1="28.5" y1="20" x2="31.5" y2="20" stroke="#475569" stroke-width="1"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#84cc16"/><path d="M22 42 L30 45 L38 42 L38 54 L30 52 L22 54 Z" fill="#ffffff" stroke="#475569" stroke-width="1"/></svg>
          70대
        </th>
        <th style="width: 12%;">
          <svg viewBox="0 0 60 60" style="width:30px; height:30px; display:block; margin:0 auto 2px;"><path d="M21 19 C21 10 39 10 39 19 L39 22 L21 22 Z" fill="#e2e8f0"/><circle cx="30" cy="21" r="8" fill="#fed7aa"/><path d="M14 54 C14 36 46 36 46 54 L46 60 L14 60 Z" fill="#b45309"/><path d="M27 36 L30 45 L33 36 Z" fill="#fef3c7"/><path d="M43 32 Q47 32 46 38 L45 58" fill="none" stroke="#78350f" stroke-width="2.5" stroke-linecap="round"/></svg>
          80대 이상
        </th>
        <th style="width: 14%;" class="bg-red-total">총계</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight: 800; background-color: #f8fafc;">장애인(명)</td>
        <td>31만</td>
        <td>24만</td>
        <td>45만</td>
        <td>60만</td>
        <td>58만</td>
        <td>44만</td>
        <td class="bg-red-total">총 263만명</td>
      </tr>
      <tr>
        <td style="font-weight: 800; background-color: #f8fafc;">인구대비 비율</td>
        <td>1.3%</td>
        <td>2.9%</td>
        <td>5.2%</td>
        <td style="font-weight: 800; color: #dc2626; font-size: 10px;">8.9%</td>
        <td style="font-weight: 800; color: #dc2626; font-size: 10px;">15.8%</td>
        <td style="font-weight: 800; color: #dc2626; font-size: 10px;">22.0%</td>
        <td class="bg-red-total">전체인구 5%</td>
      </tr>
    </tbody>
  </table>

  <!-- Graphic Infographic for Age Disability Prevalence -->
  <div class="chart-box">
    <div style="font-size: 9.5px; font-weight: 900; color: #0f172a; margin-bottom: 6px;">📈 연령별 인구 대비 장애인 비율 그래프 (60대 이후 발생률 급증)</div>
    <div class="chart-row">
      <div class="chart-label">30대 이하</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 5.9%;">1.3%</div></div>
      <div class="chart-val">31만명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">40대</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 13.1%;">2.9%</div></div>
      <div class="chart-val">24만명</div>
    </div>
    <div class="chart-row">
      <div class="chart-label">50대</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-normal" style="width: 23.6%;">5.2%</div></div>
      <div class="chart-val">45만명</div>
    </div>
    <div class="chart-row" style="background: #fff1f2; padding: 2px 0; border-radius: 4px;">
      <div class="chart-label" style="color: #be123c;">60대 (급증)</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-cancer" style="width: 40.4%;">8.9%</div></div>
      <div class="chart-val" style="color: #be123c; font-weight: 900;">60만명</div>
    </div>
    <div class="chart-row" style="background: #fff1f2; padding: 2px 0; border-radius: 4px;">
      <div class="chart-label" style="color: #be123c;">70대</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-cancer" style="width: 71.8%;">15.8%</div></div>
      <div class="chart-val" style="color: #be123c; font-weight: 900;">58만명</div>
    </div>
    <div class="chart-row" style="background: #fff1f2; padding: 2px 0; border-radius: 4px;">
      <div class="chart-label" style="color: #be123c;">80대 이상 (최고)</div>
      <div class="chart-bar-bg"><div class="chart-bar-fill bg-cancer" style="width: 100%;">22.0%</div></div>
      <div class="chart-val" style="color: #be123c; font-weight: 900;">44만명</div>
    </div>
  </div>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 후유장해담보 상담 브리핑 가이드</strong>
    1. <strong>일상 생활질환 후유장해 포함</strong>: 디스크 수술/시술(15%), 인공관절 수술(20%), 백내장 교정시력 저하(15%), 치매(40%) 등 고령층 흔한 질환이 모두 포함됩니다.<br/>
    2. <strong>반복 및 합산 보장</strong>: 질병/사고 부위별로 각각 지급률을 적용받아 반복적으로 보장되므로 노후 치료비 및 생활자금 대비 필수 특약입니다.<br/>
    3. <strong>60대 이상 장애위험 급증</strong>: 60대 8.9%, 70대 15.8%, 80대 22%로 나이가 들수록 후유장해 발생률이 급상승합니다.
  </div>

  <div class="notes">
    * 출처: 보건복지부 2020년 등록 장애인 통계 &amp; 생손보 통합 표준약관 후유장해 분류표
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenBreastCancerPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>유방암 관련 영업자료 (원인, 증상, 자가검진, 치료 및 표적항암제 분석)</title>
  <style>
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box;
    }
    @page { size: A4 portrait; margin: 8mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #0f172a; margin: 0; padding: 14px; font-size: 9.5px; background: #fff; line-height: 1.5; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 17px; font-weight: 900; color: #123941; margin: 0; }
    .subtitle { font-size: 10px; color: #64748b; margin-top: 2px; font-weight: 700; }
    
    .meta-box { background: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 8px 12px; border-radius: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; font-size: 9.5px; color: #334155; }
    
    .highlight-banner {
      background: linear-gradient(135deg, #831843 0%, #be185d 50%, #123941 100%) !important;
      color: #ffffff !important;
      padding: 10px 14px;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .highlight-banner-title {
      font-size: 12px;
      font-weight: 900;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding-bottom: 4px;
    }
    .highlight-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      text-align: center;
    }
    .highlight-card {
      background: rgba(255,255,255,0.15) !important;
      border: 1px solid rgba(255,255,255,0.3) !important;
      padding: 6px 8px;
      border-radius: 6px;
    }
    .highlight-card-tag { font-size: 8px; font-weight: 800; background: #fef08a !important; color: #854d0e !important; padding: 1px 4px; border-radius: 3px; display: inline-block; margin-bottom: 2px; }
    .highlight-card-name { font-size: 11px; font-weight: 900; }
    .highlight-card-val { font-size: 11.5px; font-weight: 900; color: #fef08a !important; }

    .sec-title { font-size: 11px; font-weight: 800; color: #ffffff !important; background-color: #123941 !important; padding: 5px 9px; border-radius: 6px 6px 0 0; margin-top: 10px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center; }
    
    .box { border: 1px solid #cbd5e1 !important; border-radius: 8px; padding: 8px 10px; background-color: #fafafa !important; margin-bottom: 8px; }
    
    table { width: 100%; border-collapse: collapse; font-size: 8.5px; margin-bottom: 10px; }
    th { background-color: #f1f5f9 !important; color: #0f172a; font-weight: 800; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1 !important; }
    td { border: 1px solid #cbd5e1 !important; padding: 4px 6px; color: #334155; }
    .bg-highlight { background-color: #fdf2f8 !important; color: #9d174d !important; font-weight: 800; }
    
    .sales-box { background-color: #f0fdf4 !important; border: 1px solid #bbf7d0 !important; padding: 8px 10px; border-radius: 6px; margin-top: 10px; font-size: 8.5px; color: #166534; line-height: 1.5; }
    .notes { background-color: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 8px; border-radius: 6px; font-size: 8.5px; color: #475569; line-height: 1.5; margin-top: 8px; }
    
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 12px; padding: 10px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <span style="font-weight: bold; color: #123941; font-size: 11px;">📄 보건복지부 · 국립암센터 · 대한암학회 - 유방암 완벽 분석 및 브리핑 가이드</span>
    <button onclick="window.print()" style="background: #123941; color: white; border: none; padding: 8px 16px; font-weight: bold; border-radius: 6px; cursor: pointer; font-size: 11px;">🖨️ PDF 출력 / 인쇄하기</button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">유방암(Breast Cancer) 완벽 분석 & 영업 브리핑 가이드</h1>
      <div class="subtitle">보건복지부 · 국립암센터 · 대한암학회 공식 자료 기준 | 보험브릿지 기획분석</div>
    </div>
    <div style="text-align: right; font-size: 9px; color: #64748b;">
      고객 상담 및 보장 분석 브리핑용
    </div>
  </div>

  <div class="meta-box">
    <div><strong>발병 순위:</strong> 국내 여성 암 2위</div>
    <div><strong>사망률(10만명당):</strong> 6.1명 (OECD 최하위 수준 - 조기검진 성과)</div>
    <div><strong>자가검진 조기발견:</strong> 환자의 70% 이상</div>
  </div>

  <div class="highlight-banner">
    <div class="highlight-banner-title">
      <span>🎀 유방암 개요 및 핵심 요약</span>
    </div>
    <div style="font-size: 9px; margin-bottom: 6px; opacity: 0.95;">
      유방 밖으로 퍼져 생명을 위협할 수 있는 악성 종양으로 주로 유관(Milk Duct)과 유엽(Lobule) 세포에서 기원합니다.
    </div>
    <div class="highlight-grid">
      <div class="highlight-card">
        <span class="highlight-card-tag">위험 요인 1</span>
        <div class="highlight-card-name">유전 및 가족력</div>
        <div class="highlight-card-val">양쪽 가족력 시 8~12배 위험</div>
      </div>
      <div class="highlight-card">
        <span class="highlight-card-tag">위험 요인 2</span>
        <div class="highlight-card-name">에스트로겐 노출</div>
        <div class="highlight-card-val">이른 초경 / 늦은 폐경 / 호르몬제</div>
      </div>
      <div class="highlight-card">
        <span class="highlight-card-tag">위험 요인 3</span>
        <div class="highlight-card-name">연령 & 출산/수유</div>
        <div class="highlight-card-val">40세 이상 / 미출산 / 미수유</div>
      </div>
    </div>
  </div>

  <div class="sec-title">
    <span>🔍 1. 주요 증상, 3단계 자가검진법 & 연령별 조기검진 권고안</span>
  </div>
  <div class="box">
    <div style="margin-bottom: 6px;">
      <strong>• 주요 증상:</strong> 초기 90~95% 무증상. 가장 흔한 증상은 <strong>통증 없는 멍울</strong>. 겨드랑이 덩어리, 유두 피 섞인 분비물, 잘 낫지 않는 습진(파제트병), 피부 함몰, 함몰 유두, 오렌지껍질 모양 부종.
    </div>
    <div style="margin-bottom: 6px;">
      <strong>• 3단계 자가검진 (생리 끝 2~7일 후 최적):</strong><br/>
      - 1단계 [관찰]: 거울 앞에서 유방의 모양, 피부, 유두 함몰 여부 관찰<br/>
      - 2단계 [촉진]: 앉거나 서서 유방과 겨드랑이 멍울 만져보기<br/>
      - 3단계 [촉진]: 누워서 반대편 손가락 끝으로 원을 그리며 꼼꼼히 만져보기
    </div>
    <div>
      <strong>• 연령별 조기검진 권고안 (보건복지부 5대암):</strong><br/>
      - <strong>30세 이후:</strong> 매월 유방 자가검진<br/>
      - <strong>35세 이후:</strong> 2년 간격 의사에 의한 임상검진<br/>
      - <strong>40세 이후:</strong> 1~2년 간격 임상검진 + 유방 촬영술 (치밀유방 시 유방초음파 병행)<br/>
      - <strong>고위험군:</strong> 의사와 상의하여 정기 검진
    </div>
  </div>

  <div class="sec-title">
    <span>🏥 2. 치료방법 (수술, 방사선 & 약물치료)</span>
  </div>
  <div class="box">
    <div style="margin-bottom: 6px;">
      <strong>• 수술치료:</strong> 유방부분절제술(보존술) vs 유방전절제술(변형근치절제술). 수술 후 재발 방지 보조요법 시행.
    </div>
    <div style="margin-bottom: 6px;">
      <strong>• 약물치료 종류:</strong><br/>
      1) <strong>항호르몬 요법 (호르몬 수용체 양성):</strong> 여성호르몬 생성/작용 억제<br/>
      &nbsp;&nbsp;- 아로마타제 억제제: 아나스트로졸, 레트로졸, 엑스메스탄 (폐경 후)<br/>
      &nbsp;&nbsp;- 선택적 에스트로겐 수용체 조절제: 타목시펜 (폐경 전/후), 풀베스트란트 (폐경 후 재발)<br/>
      &nbsp;&nbsp;- 황체형성호르몬방출 촉진제: 고세렐린 (폐경 전 타목시펜 요법에 추가)<br/>
      2) <strong>항암 화학 요법:</strong> 독소루비신, 사이클로포스파미드, 5-FU, 파클리탁셀 (세포분열 및 DNA 저해)<br/>
      3) <strong>표적치료 (HER2 양성 환자 20~30% 대상):</strong> 암 세포 특정 유전자 선택적 억제
    </div>
  </div>

  <div class="sec-title">
    <span>💊 3. HER2 표적치료제 현황 (약제별 투여방법)</span>
  </div>
  <table>
    <thead>
      <tr>
        <th>약물명</th>
        <th>표적 유전자</th>
        <th>투여 방법 및 특징</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight: 800; text-align: center;" class="bg-highlight">트라스투주맙 (Trastuzumab / 허셉틴)</td>
        <td style="text-align: center; font-weight: 800;">HER2</td>
        <td>1차 표준 표적치료제, 보통 3주에 1번 또는 매주 주사 투여</td>
      </tr>
      <tr>
        <td style="font-weight: 800; text-align: center;">퍼투주맙 (Pertuzumab)</td>
        <td style="text-align: center; font-weight: 800;">HER2</td>
        <td>HER2 병용 표적치료제, 보통 3주에 1번 주사 투여</td>
      </tr>
      <tr>
        <td style="font-weight: 800; text-align: center;">트라스투주맙 엠탄신 (T-DM1)</td>
        <td style="text-align: center; font-weight: 800;">HER2</td>
        <td>항체-약물 접합체(ADC), 보통 3주에 1번 주사 투여</td>
      </tr>
      <tr>
        <td style="font-weight: 800; text-align: center;">라파티닙 (Lapatinib)</td>
        <td style="text-align: center; font-weight: 800;">HER2</td>
        <td>경구용 표적항암제, 매일 복용</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">
    <span>📈 4. 치료 후 정기 추적검사 주기</span>
  </div>
  <div class="box">
    - <strong>수술 후 1~2년:</strong> 3~4개월 마다 추적검사<br/>
    - <strong>수술 후 3~5년:</strong> 6개월 마다 추적검사<br/>
    - <strong>수술 후 5년 이후:</strong> 매년 정기검사 (수술 부위 멍울, 통증, 월경변화 발생 시 즉시 담당의 상담)
  </div>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 유방암 고객 상담 가이드</strong>
    1. <strong>초기 무증상 고위험 여성 대비</strong>: 유방암은 초기 90% 이상 무증상이므로 30대 자가검진, 40대 이상 촬영/초음파 검진 필수 안내<br/>
    2. <strong>고가의 표적항암 치료비 준비</strong>: HER2 양성 유방암의 경우 허셉틴, 퍼투주맙 등 표적항암약물치료비 특약 가입이 경제적 치료의 핵심<br/>
    3. <strong>장기 치료 및 보조요법 보장</strong>: 수술비, 진단비 외에도 수술 후 5년 이상 지속되는 항호르몬 치료 및 방사선 치료 대비 종합플랜 필요
  </div>

  <div class="notes">
    * 출처: 보건복지부, 국립암센터, 대한암학회 공식 유방암 가이드
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenCancerStatsPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>암종별 발생 현황 - 국가암정보센터·보건복지부</title>
  <style>
    @page { size: A4 portrait; margin: 12mm 15mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 10px; color: #1e293b; line-height: 1.45; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 16px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 9px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 4px; }
    .top-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; }
    .metric-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px; }
    .metric-title { font-size: 8px; font-weight: 800; color: #475569; display: block; }
    .metric-val { font-size: 13px; font-weight: 900; color: #123941; margin-top: 2px; }
    .metric-desc { font-size: 7.5px; color: #64748b; font-weight: 600; margin-top: 2px; }
    .sec-title { font-size: 11px; font-weight: 900; color: #0f172a; margin: 12px 0 6px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 4px 5px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 3.5px 5px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .highlight-row { background: #f0fdf4 !important; font-weight: 800; }
    .highlight-row td { color: #166534; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
    .sales-box { background-color: #e6f4f1; border: 1px solid #99d6cb; border-radius: 6px; padding: 8px; color: #0c282e; margin-top: 10px; }
    .notes { font-size: 8px; color: #64748b; text-align: right; margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암정보센터 · 보건복지부 공식통계</span>
      <div class="header-title">📊 암종별 발생 현황 (2023년 기준)</div>
    </div>
    <div class="header-sub">출처: 국가암정보센터 / 국가통계포털(KOSIS)</div>
  </div>

  <div class="top-grid">
    <div class="metric-card">
      <span class="metric-title">2023년 전체 악성암 발생자수</span>
      <div class="metric-val">288,613 명</div>
      <div class="metric-desc">남자 151,126명 / 여자 137,487명</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">남녀전체 1위 암종</span>
      <div class="metric-val">갑상선암 (12.3%)</div>
      <div class="metric-desc">35,440명 (2위 폐암 32,953명, 3위 대장암 32,610명)</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">성별 1위 암종</span>
      <div class="metric-val">남: 전립선암 / 여: 유방암</div>
      <div class="metric-desc">남성 전립선 22,640명(15%) / 여성 유방 29,715명(21.6%)</div>
    </div>
  </div>

  <div class="sec-title">1. 주요 암발생 현황 (남녀 전체 Top 10, 2023년)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 8%;">순위</th>
        <th>암종 ('22년 순위)</th>
        <th>발생자수(명)</th>
        <th>분율(%)</th>
        <th>조발생률</th>
        <th>표준화발생률*</th>
      </tr>
    </thead>
    <tbody>
      <tr class="highlight-row">
        <td>-</td>
        <td style="font-weight: 800;">모든 악성암</td>
        <td>288,613</td>
        <td>100.0</td>
        <td>564.3</td>
        <td>522.9</td>
      </tr>
      <tr>
        <td>-</td>
        <td>갑상선암 제외</td>
        <td>253,173</td>
        <td>87.7</td>
        <td>495.0</td>
        <td>454.0</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#123941;">1</td>
        <td style="font-weight:800;">갑상선</td>
        <td>35,440</td>
        <td>12.3</td>
        <td>69.3</td>
        <td>68.9</td>
      </tr>
      <tr>
        <td style="font-weight:800;">2</td>
        <td>폐 (3위)</td>
        <td>32,953</td>
        <td>11.4</td>
        <td>64.4</td>
        <td>57.5</td>
      </tr>
      <tr>
        <td style="font-weight:800;">3</td>
        <td>대장 (2위)</td>
        <td>32,610</td>
        <td>11.3</td>
        <td>63.8</td>
        <td>58.7</td>
      </tr>
      <tr>
        <td style="font-weight:800;">4</td>
        <td>유방</td>
        <td>29,871</td>
        <td>10.3</td>
        <td>58.4</td>
        <td>56.8</td>
      </tr>
      <tr>
        <td style="font-weight:800;">5</td>
        <td>위</td>
        <td>28,943</td>
        <td>10.0</td>
        <td>56.6</td>
        <td>51.4</td>
      </tr>
      <tr>
        <td style="font-weight:800;">6</td>
        <td>전립선</td>
        <td>22,640</td>
        <td>7.8</td>
        <td>44.3</td>
        <td>39.2</td>
      </tr>
      <tr>
        <td>7</td>
        <td>간</td>
        <td>14,707</td>
        <td>5.1</td>
        <td>28.8</td>
        <td>26.1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>췌장</td>
        <td>9,748</td>
        <td>3.4</td>
        <td>19.1</td>
        <td>17.1</td>
      </tr>
      <tr>
        <td>9</td>
        <td>담낭 및 기타담도</td>
        <td>7,997</td>
        <td>2.8</td>
        <td>15.6</td>
        <td>13.8</td>
      </tr>
      <tr>
        <td>10</td>
        <td>신장</td>
        <td>7,367</td>
        <td>2.6</td>
        <td>14.4</td>
        <td>13.5</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 성별 주요 암발생 현황 비교 (2023년)</div>
  <div class="two-col">
    <div>
      <div style="font-weight:800; font-size:10px; color:#123941; margin-bottom:3px; text-align:center; background:#e2e8f0; padding:3px; border-radius:4px;">
        👨 남자 주요 암발생 (총 151,126명)
      </div>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>암종 ('22년)</th>
            <th>발생자수</th>
            <th>분율</th>
          </tr>
        </thead>
        <tbody>
          <tr style="font-weight:800; background:#eff6ff;">
            <td>1</td>
            <td>전립선 (2위↑)</td>
            <td>22,640</td>
            <td>15.0%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>폐 (1위↓)</td>
            <td>21,846</td>
            <td>14.5%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>위 (4위↑)</td>
            <td>19,295</td>
            <td>12.8%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>대장 (3위↓)</td>
            <td>19,156</td>
            <td>12.7%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>간</td>
            <td>10,875</td>
            <td>7.2%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>갑상선</td>
            <td>9,326</td>
            <td>6.2%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>신장 (8위↑)</td>
            <td>5,073</td>
            <td>3.4%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>췌장 (7위↓)</td>
            <td>4,925</td>
            <td>3.3%</td>
          </tr>
          <tr>
            <td>9</td>
            <td>방광 (10위↑)</td>
            <td>4,465</td>
            <td>3.0%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>담낭 및 기타담도</td>
            <td>4,446</td>
            <td>2.9%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div style="font-weight:800; font-size:10px; color:#9f1239; margin-bottom:3px; text-align:center; background:#ffe4e6; padding:3px; border-radius:4px;">
        👩 여자 주요 암발생 (총 137,487명)
      </div>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>암종 ('22년)</th>
            <th>발생자수</th>
            <th>분율</th>
          </tr>
        </thead>
        <tbody>
          <tr style="font-weight:800; background:#fff1f2;">
            <td>1</td>
            <td>유방</td>
            <td>29,715</td>
            <td>21.6%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>갑상선</td>
            <td>26,114</td>
            <td>19.0%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>대장</td>
            <td>13,454</td>
            <td>9.8%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>폐</td>
            <td>11,107</td>
            <td>8.1%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>위</td>
            <td>9,648</td>
            <td>7.0%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>췌장</td>
            <td>4,823</td>
            <td>3.5%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>자궁체부</td>
            <td>4,037</td>
            <td>2.9%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>간</td>
            <td>3,832</td>
            <td>2.8%</td>
          </tr>
          <tr>
            <td>9</td>
            <td>담낭 및 기타담도</td>
            <td>3,551</td>
            <td>2.6%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>난소</td>
            <td>3,299</td>
            <td>2.4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 암 보장 브리핑 가이드</strong>
    1. <strong>남성 전립선암 급증 (1위 등극)</strong>: 전립선암이 남성 암발생 1위로 상승함에 따라 고연령 남성 대상 전립선비대증 및 전립선암 특약 제안의 중요성 강조<br/>
    2. <strong>여성 유방암·갑상선암 압도적 비중</strong>: 여성 암 환자 10명 중 4명(40.6%)이 유방암(21.6%) 및 갑상선암(19.0%)에 해당. 여성 맞춤형 암진단비 및 표적치료비 보장 필수 안내<br/>
    3. <strong>남녀 공통 주요 암(폐·대장·위) 대비</strong>: 남녀 불문 상위권인 폐암, 대장암, 위암에 대해 암진단비, 표적항암약물치료비, 수술비의 다층적 보장 플랜 필요
  </div>

  <div class="notes">
    * 연령표준화발생률: 우리나라 2020년 주민등록연령인구를 표준인구로 사용 | 출처: 보건복지부, 국립암센터, 국가통계포털(KOSIS)
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenAgeCancerPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>연령군별 암발생률 - 국가암지식정보센터·보건복지부</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 9.5px; color: #1e293b; line-height: 1.4; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 15px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 8.5px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .top-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 10px; }
    .metric-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 8px; }
    .metric-title { font-size: 8px; font-weight: 800; color: #475569; display: block; }
    .metric-val { font-size: 12px; font-weight: 900; color: #123941; margin-top: 2px; }
    .metric-desc { font-size: 7.5px; color: #64748b; font-weight: 600; margin-top: 1px; }
    .sec-title { font-size: 10.5px; font-weight: 900; color: #0f172a; margin: 10px 0 5px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 8px; font-size: 8px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3.5px 4px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 3px 4px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .highlight-row { background: #f0fdf4 !important; font-weight: 800; }
    .highlight-row td { color: #166534; }
    .chart-container { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px; margin-bottom: 10px; text-align: center; }
    .sales-box { background-color: #e6f4f1; border: 1px solid #99d6cb; border-radius: 6px; padding: 8px; color: #0c282e; margin-top: 8px; }
    .notes { font-size: 7.5px; color: #64748b; text-align: right; margin-top: 8px; border-top: 1px solid #e2e8f0; padding-top: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암지식정보센터 · 보건복지부 공식통계</span>
      <div class="header-title">📊 연령군별 암발생률 및 주요 암종 현황 (2023년)</div>
    </div>
    <div class="header-sub">출처: 국가암지식정보센터 / 국가통계포털(KOSIS)</div>
  </div>

  <div class="top-grid">
    <div class="metric-card">
      <span class="metric-title">60세 이상 암발생률 (고위험군)</span>
      <div class="metric-val">10만명당 1,021.2 명</div>
      <div class="metric-desc">고령화에 따른 자연적 암발생 급증</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">50대 남녀 암발생률 교차 역전</span>
      <div class="metric-val">50대 후반부터 남성 역전</div>
      <div class="metric-desc">50대 초반까지 여자 > 50대 후반부터 남자 > 여자</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">조발생률 최고 연령군 (80세 이상)</span>
      <div class="metric-val">1,867.1 명 (남 2,930.2명)</div>
      <div class="metric-desc">남성 80세 이상 10만명당 2,930명 발병</div>
    </div>
  </div>

  <!-- Main Age Group Incidence SVG Chart -->
  <div class="chart-container">
    <div style="font-size:9.5px; font-weight:800; color:#123941; margin-bottom:4px;">
      [연령군별 암발생률 추이 (조발생률, 단위: 명/10만 명, 2023년)]
    </div>
    <svg viewBox="0 0 500 150" style="width:100%; max-height:140px;">
      <!-- Grid Lines -->
      <line x1="40" y1="20" x2="480" y2="20" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="40" y1="50" x2="480" y2="50" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="40" y1="80" x2="480" y2="80" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="40" y1="110" x2="480" y2="110" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Y-Axis Labels -->
      <text x="35" y="23" font-size="7" fill="#64748b" text-anchor="end">3,000</text>
      <text x="35" y="53" font-size="7" fill="#64748b" text-anchor="end">2,000</text>
      <text x="35" y="83" font-size="7" fill="#64748b" text-anchor="end">1,000</text>
      <text x="35" y="113" font-size="7" fill="#64748b" text-anchor="end">0</text>

      <!-- X-Axis Labels -->
      <text x="50" y="123" font-size="6.5" fill="#475569" text-anchor="middle">0-9세</text>
      <text x="100" y="123" font-size="6.5" fill="#475569" text-anchor="middle">10-19세</text>
      <text x="150" y="123" font-size="6.5" fill="#475569" text-anchor="middle">20-29세</text>
      <text x="200" y="123" font-size="6.5" fill="#475569" text-anchor="middle">30-39세</text>
      <text x="250" y="123" font-size="6.5" fill="#475569" text-anchor="middle">40-49세</text>
      <text x="300" y="123" font-size="6.5" fill="#475569" text-anchor="middle">50-59세</text>
      <text x="350" y="123" font-size="6.5" fill="#475569" text-anchor="middle">60-69세</text>
      <text x="400" y="123" font-size="6.5" fill="#475569" text-anchor="middle">70-79세</text>
      <text x="450" y="123" font-size="6.5" fill="#475569" text-anchor="middle">80세이상</text>

      <!-- Line: Total (Purple) -->
      <polyline fill="none" stroke="#8b5cf6" stroke-width="2" points="
        50,109.5 100,109.4 150,107.5 200,103.1 250,97.6 300,92.1 350,79.4 400,60.7 450,54.0
      " />
      
      <!-- Line: Male (Blue) -->
      <polyline fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="0" points="
        50,109.5 100,109.5 150,108.5 200,105.7 250,102.7 300,94.4 350,72.2 400,39.0 450,22.1
      " />

      <!-- Line: Female (Pink) -->
      <polyline fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="0" points="
        50,109.6 100,109.4 150,106.5 200,100.4 250,92.3 300,89.8 350,86.3 400,79.1 450,70.9
      " />

      <!-- Intersection Callout Annotation at 50-59세 -->
      <circle cx="300" cy="94.4" r="3" fill="#2563eb" />
      <circle cx="300" cy="89.8" r="3" fill="#e11d48" />
      <line x1="300" y1="25" x2="300" y2="110" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
      <rect x="250" y="10" width="100" height="14" rx="3" fill="#123941" opacity="0.9"/>
      <text x="300" y="20" font-size="6.5" fill="#ffffff" font-weight="bold" text-anchor="middle">50대 후반 남성 역전 지점!</text>

      <!-- Legend -->
      <circle cx="340" cy="140" r="3" fill="#8b5cf6"/>
      <text x="347" y="142" font-size="7" fill="#334155" font-weight="bold">남녀전체</text>
      
      <circle cx="390" cy="140" r="3" fill="#2563eb"/>
      <text x="397" y="142" font-size="7" fill="#334155" font-weight="bold">남자</text>
      
      <circle cx="435" cy="140" r="3" fill="#e11d48"/>
      <text x="442" y="142" font-size="7" fill="#334155" font-weight="bold">여자</text>
    </svg>
  </div>

  <div class="sec-title">1. 연령군별 암발생 현황: 2023 (조발생률, 단위: 명/10만 명)</div>
  <table>
    <thead>
      <tr>
        <th rowspan="2" style="width: 12%;">연령군</th>
        <th colspan="2" style="background:#e0f2fe; color:#0369a1;">남녀전체</th>
        <th colspan="2" style="background:#dbeafe; color:#1e40af;">남자</th>
        <th colspan="2" style="background:#ffe4e6; color:#9f1239;">여자</th>
      </tr>
      <tr>
        <th style="background:#f0f9ff;">발생자수(명)</th>
        <th style="background:#f0f9ff;">조발생률</th>
        <th style="background:#eff6ff;">발생자수(명)</th>
        <th style="background:#eff6ff;">조발생률</th>
        <th style="background:#fff1f2;">발생자수(명)</th>
        <th style="background:#fff1f2;">조발생률</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0-9세</td>
        <td>499</td>
        <td>14.5</td>
        <td>283</td>
        <td>16.1</td>
        <td>216</td>
        <td>12.9</td>
      </tr>
      <tr>
        <td>10-19세</td>
        <td>889</td>
        <td>19.0</td>
        <td>438</td>
        <td>18.2</td>
        <td>451</td>
        <td>19.9</td>
      </tr>
      <tr>
        <td>20-29세</td>
        <td>5,221</td>
        <td>83.0</td>
        <td>1,686</td>
        <td>51.2</td>
        <td>3,535</td>
        <td>117.8</td>
      </tr>
      <tr>
        <td>30-39세</td>
        <td>15,032</td>
        <td>228.9</td>
        <td>4,886</td>
        <td>143.4</td>
        <td>10,146</td>
        <td>321.2</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>40-49세</td>
        <td>32,884</td>
        <td>413.8</td>
        <td>9,801</td>
        <td>243.0</td>
        <td style="font-weight:800; color:#9f1239;">23,083</td>
        <td style="font-weight:800; color:#9f1239;">590.0</td>
      </tr>
      <tr class="highlight-row">
        <td style="font-weight:800;">50-59세 (역전)</td>
        <td>51,137</td>
        <td>595.4</td>
        <td style="font-weight:800;">22,451</td>
        <td style="font-weight:800;">518.5</td>
        <td>28,686</td>
        <td>673.7</td>
      </tr>
      <tr style="background:#eff6ff;">
        <td style="font-weight:800; color:#1e40af;">60-69세</td>
        <td style="font-weight:800;">76,309</td>
        <td style="font-weight:800;">1,021.2</td>
        <td style="font-weight:800; color:#1e40af;">46,225</td>
        <td style="font-weight:800; color:#1e40af;">1,258.9</td>
        <td>30,084</td>
        <td>791.6</td>
      </tr>
      <tr style="background:#eff6ff;">
        <td style="font-weight:800; color:#1e40af;">70-79세</td>
        <td>63,747</td>
        <td>1,641.9</td>
        <td style="font-weight:800; color:#1e40af;">42,060</td>
        <td style="font-weight:800; color:#1e40af;">2,367.7</td>
        <td>21,687</td>
        <td>1,029.7</td>
      </tr>
      <tr style="background:#eff6ff;">
        <td style="font-weight:800; color:#1e40af;">80세 이상</td>
        <td>42,895</td>
        <td>1,867.1</td>
        <td style="font-weight:800; color:#1e40af;">23,296</td>
        <td style="font-weight:800; color:#1e40af;">2,930.2</td>
        <td>19,599</td>
        <td>1,304.5</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 연령대별 자주 발생하는 암종 현황, 2023</div>
  <table>
    <thead>
      <tr>
        <th style="width: 12%;">구분</th>
        <th>0-9세</th>
        <th>10-19세</th>
        <th>20-29세</th>
        <th>30-39세</th>
        <th>40-49세</th>
        <th>50-59세</th>
        <th>60-69세</th>
        <th>70-79세</th>
        <th>80세이상</th>
      </tr>
    </thead>
    <tbody>
      <tr style="font-weight:800; background:#f8fafc;">
        <td style="background:#f1f5f9;">전체</td>
        <td>백혈병</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td style="color:#9f1239;">유방</td>
        <td style="color:#1e40af;">폐</td>
        <td style="color:#1e40af;">폐</td>
        <td style="color:#1e40af;">폐</td>
      </tr>
      <tr>
        <td style="background:#eff6ff; font-weight:800; color:#1e40af;">남자</td>
        <td>백혈병</td>
        <td>백혈병</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td>대장</td>
        <td style="font-weight:800; color:#1e40af;">전립선</td>
        <td style="font-weight:800; color:#1e40af;">전립선</td>
        <td style="font-weight:800; color:#1e40af;">폐</td>
      </tr>
      <tr>
        <td style="background:#fff1f2; font-weight:800; color:#9f1239;">여자</td>
        <td>백혈병</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td>갑상선</td>
        <td style="font-weight:800; color:#9f1239;">유방</td>
        <td style="font-weight:800; color:#9f1239;">유방</td>
        <td style="font-weight:800; color:#9f1239;">유방</td>
        <td>폐</td>
        <td>대장</td>
      </tr>
    </tbody>
  </table>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 연령별 암 보장 브리핑 소구점</strong>
    1. <strong>30~40대 여성 타겟 (유방·갑상선암)</strong>: 40대 여성 암발생률은 남성의 2.4배(590.0명)로 유방암·갑상선암 폭발적 증가. 여성 전용 암진단비 및 표적치료 특약 필수 안내<br/>
    2. <strong>50대 남성 골든타임 (역전 구간)</strong>: 50대 후반부터 남성 암발생률이 여성을 추월하며 60대(1,258.9명)에 급증. 50대 남성 고객 대상 전립선암, 대장암, 위암 보장 보강 제안<br/>
    3. <strong>60대 이상 고령층 (10만명당 1,000명 돌파)</strong>: 60세 이상은 암 발생 고위험군으로 간편심사 유병자 암보험, 암수술비, 항암방사선약물치료비 및 재가/입원비 다층 설계 필수
  </div>

  <div class="notes">
    * 출처: 보건복지부, 국립암센터, 국가통계포털(KOSIS) 연령군별 암발생률 통계 (최종수정: 2026년 1월 27일)
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenInsituCancerPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>제자리암(상피내암) 발생률 - 국가암지식정보센터·보건복지부</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 9px; color: #1e293b; line-height: 1.35; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 5px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 15px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 8.5px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .def-box { background: #f8fafc; border: 1px dashed #94a3b8; border-radius: 5px; padding: 5px 8px; font-size: 8px; margin-bottom: 8px; color: #334155; }
    .top-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 8px; }
    .metric-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 5px 7px; }
    .metric-title { font-size: 8px; font-weight: 800; color: #475569; display: block; }
    .metric-val { font-size: 12px; font-weight: 900; color: #123941; margin-top: 1px; }
    .metric-desc { font-size: 7.5px; color: #64748b; font-weight: 600; margin-top: 1px; }
    .sec-title { font-size: 10px; font-weight: 900; color: #0f172a; margin: 8px 0 4px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 6px; font-size: 7.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3px 3px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 2.5px 3px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .highlight-row { background: #fff1f2 !important; font-weight: 800; }
    .highlight-row td { color: #9f1239; }
    .sales-box { background-color: #e6f4f1; border: 1px solid #99d6cb; border-radius: 6px; padding: 7px; color: #0c282e; margin-top: 6px; font-size: 8px; }
    .notes { font-size: 7px; color: #64748b; text-align: right; margin-top: 6px; border-top: 1px solid #e2e8f0; padding-top: 3px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암지식정보센터 · 보건복지부 공식통계</span>
      <div class="header-title">🧬 상피내암(제자리암) 발생률 및 암종별 발생 현황 (2023년)</div>
    </div>
    <div class="header-sub">출처: 국가암지식정보센터 / 보건복지부 (2026.01 최종수정)</div>
  </div>

  <div class="def-box">
    <strong>📌 상피내암(제자리암) 정의</strong>: 암이 <strong>원발 장소(상피층)</strong>에 머무르면서 다른 조직층으로의 <strong>침윤 및 악성의 행태</strong>를 보이지 않는 단계 혹은 그러한 성질을 가지는 경우의 암 (질병코드 D00~D09).
  </div>

  <div class="top-grid">
    <div class="metric-card">
      <span class="metric-title">2023년 총 상피내암 발생자수</span>
      <div class="metric-val">38,204 명</div>
      <div class="metric-desc">남자 12,219명 / 여자 25,985명 (여성이 2.1배)</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">상피내암 조발생률 (10만명당)</span>
      <div class="metric-val">74.7 명</div>
      <div class="metric-desc">남자 48.0명 / 여자 101.2명 (여성 10만명당 100명 돌파)</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">1999년 대비 발생 폭증률</span>
      <div class="metric-val">10.6 배 (962.7%↑)</div>
      <div class="metric-desc">1999년 3,595명 ➔ 2023년 38,204명 폭발적 증가</div>
    </div>
  </div>

  <div class="sec-title">1. 상피내암 발생자수, 조발생률, 연령표준화발생률 추이: 1999-2023 (단위: 명, 명/10만명)</div>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>성별</th>
        <th>1999년</th>
        <th>2011년</th>
        <th>2017년</th>
        <th>2018년</th>
        <th>2019년</th>
        <th>2020년</th>
        <th>2021년</th>
        <th>2022년</th>
        <th>2023년</th>
      </tr>
    </thead>
    <tbody>
      <tr style="font-weight:800; background:#f1f5f9;">
        <td rowspan="3" style="font-weight:800;">발생자수<br/>(명)</td>
        <td>남녀전체</td>
        <td>3,595</td>
        <td>14,645</td>
        <td>26,596</td>
        <td>27,979</td>
        <td>30,212</td>
        <td>29,507</td>
        <td>34,736</td>
        <td>35,859</td>
        <td style="font-weight:900; color:#123941;">38,204</td>
      </tr>
      <tr>
        <td>남자</td>
        <td>120</td>
        <td>3,381</td>
        <td>8,660</td>
        <td>9,419</td>
        <td>10,013</td>
        <td>9,715</td>
        <td>11,008</td>
        <td>11,391</td>
        <td style="font-weight:800; color:#1e40af;">12,219</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>여자</td>
        <td>3,475</td>
        <td>11,264</td>
        <td>17,936</td>
        <td>18,560</td>
        <td>20,199</td>
        <td>19,792</td>
        <td>23,728</td>
        <td>24,468</td>
        <td style="font-weight:900; color:#be123c;">25,985</td>
      </tr>
      <tr style="border-top:2px solid #cbd5e1;">
        <td rowspan="3" style="font-weight:800;">조발생률<br/>(10만명당)</td>
        <td>남녀전체</td>
        <td>7.6</td>
        <td>29.2</td>
        <td>51.9</td>
        <td>54.5</td>
        <td>58.8</td>
        <td>57.5</td>
        <td>67.7</td>
        <td>70.0</td>
        <td style="font-weight:900;">74.7</td>
      </tr>
      <tr>
        <td>남자</td>
        <td>0.5</td>
        <td>13.5</td>
        <td>33.9</td>
        <td>36.8</td>
        <td>39.1</td>
        <td>37.9</td>
        <td>43.0</td>
        <td>44.6</td>
        <td style="font-weight:800; color:#1e40af;">48.0</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>여자</td>
        <td>14.8</td>
        <td>45.0</td>
        <td>69.9</td>
        <td>72.2</td>
        <td>78.5</td>
        <td>76.9</td>
        <td>92.2</td>
        <td>95.1</td>
        <td style="font-weight:900; color:#be123c;">101.2</td>
      </tr>
      <tr style="border-top:2px solid #cbd5e1;">
        <td rowspan="3" style="font-weight:800;">표준화발생률*<br/>(10만명당)</td>
        <td>남녀전체</td>
        <td>9.0</td>
        <td>32.9</td>
        <td>54.6</td>
        <td>56.5</td>
        <td>59.9</td>
        <td>57.5</td>
        <td>66.6</td>
        <td>67.8</td>
        <td style="font-weight:900;">71.3</td>
      </tr>
      <tr>
        <td>남자</td>
        <td>1.2</td>
        <td>20.2</td>
        <td>40.7</td>
        <td>42.7</td>
        <td>43.8</td>
        <td>40.9</td>
        <td>44.8</td>
        <td>44.9</td>
        <td>46.7</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>여자</td>
        <td>16.7</td>
        <td>46.8</td>
        <td>70.9</td>
        <td>72.8</td>
        <td>78.5</td>
        <td>76.4</td>
        <td>91.0</td>
        <td>93.5</td>
        <td style="font-weight:900; color:#be123c;">98.8</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 상피내암 암종별 발생 현황: 남녀전체, 2023 (단위: 명, %, 명/10만 명)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 12%;">순위</th>
        <th>상피내암 암종</th>
        <th>발생자수(명)</th>
        <th>분율 (%)</th>
        <th>조발생률</th>
        <th>표준화발생률*</th>
      </tr>
    </thead>
    <tbody>
      <tr style="font-weight:800; background:#f1f5f9;">
        <td>-</td>
        <td style="text-align:left; font-weight:800;">모든 상피내암</td>
        <td style="font-weight:900;">38,204</td>
        <td>100.0</td>
        <td>74.7</td>
        <td>71.3</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td style="font-weight:800; color:#be123c;">1위</td>
        <td style="text-align:left; font-weight:800; color:#be123c;">자궁경부암</td>
        <td style="font-weight:800; color:#be123c;">11,202</td>
        <td style="font-weight:800; color:#be123c;">29.3%</td>
        <td>21.9</td>
        <td>22.0</td>
      </tr>
      <tr>
        <td style="font-weight:800;">2위</td>
        <td style="text-align:left; font-weight:800;">대장암</td>
        <td style="font-weight:800;">8,540</td>
        <td style="font-weight:800;">22.4%</td>
        <td>16.7</td>
        <td>15.4</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td style="font-weight:800; color:#be123c;">3위</td>
        <td style="text-align:left; font-weight:800; color:#be123c;">유방암</td>
        <td style="font-weight:800; color:#be123c;">7,032</td>
        <td style="font-weight:800; color:#be123c;">18.4%</td>
        <td>13.7</td>
        <td>13.6</td>
      </tr>
      <tr>
        <td>4위</td>
        <td style="text-align:left;">방광암</td>
        <td>3,216</td>
        <td>8.4%</td>
        <td>6.3</td>
        <td>5.7</td>
      </tr>
      <tr>
        <td>5위</td>
        <td style="text-align:left;">위암</td>
        <td>2,719</td>
        <td>7.1%</td>
        <td>5.3</td>
        <td>4.8</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">3. 성별 주요 상피내암 암종 현황, 2023</div>
  <table style="margin-bottom:4px;">
    <thead>
      <tr>
        <th style="width: 15%;">성별</th>
        <th style="width: 12%;">순위</th>
        <th>상피내암 암종</th>
        <th>발생자수(명)</th>
        <th>분율 (%)</th>
        <th>조발생률</th>
        <th>표준화발생률*</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#eff6ff;">
        <td rowspan="3" style="font-weight:800; color:#1e40af;">남자<br/>(12,219명)</td>
        <td style="font-weight:800; color:#1e40af;">1위</td>
        <td style="font-weight:800; color:#1e40af;">대장암</td>
        <td style="font-weight:800;">5,378</td>
        <td style="font-weight:800;">44.0%</td>
        <td>21.1</td>
        <td>20.3</td>
      </tr>
      <tr style="background:#eff6ff;">
        <td style="font-weight:800;">2위</td>
        <td>방광암</td>
        <td>2,654</td>
        <td>21.7%</td>
        <td>10.4</td>
        <td>10.4</td>
      </tr>
      <tr style="background:#eff6ff;">
        <td>3위</td>
        <td>위암</td>
        <td>1,947</td>
        <td>15.9%</td>
        <td>7.6</td>
        <td>7.3</td>
      </tr>
      <tr style="background:#fff1f2; border-top:2px solid #cbd5e1;">
        <td rowspan="5" style="font-weight:800; color:#be123c;">여자<br/>(25,985명)</td>
        <td style="font-weight:800; color:#be123c;">1위</td>
        <td style="font-weight:800; color:#be123c;">자궁경부암</td>
        <td style="font-weight:800; color:#be123c;">11,202</td>
        <td style="font-weight:800; color:#be123c;">43.1%</td>
        <td>43.6</td>
        <td>44.8</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td style="font-weight:800; color:#be123c;">2위</td>
        <td style="font-weight:800; color:#be123c;">유방암</td>
        <td style="font-weight:800; color:#be123c;">7,018</td>
        <td style="font-weight:800; color:#be123c;">27.0%</td>
        <td>27.3</td>
        <td>27.1</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td style="font-weight:800;">3위</td>
        <td>대장암</td>
        <td>3,162</td>
        <td>12.2%</td>
        <td>12.3</td>
        <td>11.1</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>4위</td>
        <td>피부암</td>
        <td>1,177</td>
        <td>4.5%</td>
        <td>4.6</td>
        <td>3.5</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td>5위</td>
        <td>위암</td>
        <td>772</td>
        <td>3.0%</td>
        <td>3.0</td>
        <td>2.5</td>
      </tr>
    </tbody>
  </table>

  <div class="sales-box">
    <strong style="font-size: 9.5px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 제자리암(유사암) 보장 브리핑 가이드</strong>
    1. <strong>1999년 대비 10.6배 폭증하는 제자리암!</strong>: 건강검진 활성화로 조기 발견되는 제자리암 환자가 3만 8천명을 넘어섰습니다. 일반암 대비 축소되는 유사암 진단비 한도 적극 준비 필요.<br/>
    2. <strong>여성 고객 소구점 (자궁경부 43.1% + 유방 27.0% = 70.1%)</strong>: 여성 제자리암의 70.1%가 자궁경부 및 유방암! 20~40대 여성 고객 검진 시 자궁경부 제자리암 발견 급증에 따른 진단비/수술비 가입 소구.<br/>
    3. <strong>남성 고객 소구점 (대장 44.0% + 방광 21.7% = 65.7%)</strong>: 남성 제자리암의 65.7%가 대장 및 방광! 내시경 대장용종(선종) 절제 후 조직검사 시 제자리암(D01) 판정 사례 빈번. 용종절제 및 제자리암 진단비 제안.
  </div>

  <div class="notes">
    * 연령표준화발생률: 2020년 주민등록연령인구 기준 | 출처: 보건복지부, 국립암센터, 국가암지식정보센터 2023년 국가암통계 (최종수정: 2026년 1월 27일)
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleOpenSurgeryStatsPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>2024년 주요수술통계연보 - 국민건강보험공단</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 9.5px; color: #1e293b; line-height: 1.4; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 15px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 8.5px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .top-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 10px; }
    .metric-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 8px; }
    .metric-title { font-size: 8px; font-weight: 800; color: #475569; display: block; }
    .metric-val { font-size: 12px; font-weight: 900; color: #123941; margin-top: 2px; }
    .metric-desc { font-size: 7.5px; color: #64748b; font-weight: 600; margin-top: 1px; }
    .sec-title { font-size: 10.5px; font-weight: 900; color: #0f172a; margin: 10px 0 5px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 8px; font-size: 8px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3.5px 4px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 3px 4px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .highlight-row { background: #f0fdf4 !important; font-weight: 800; }
    .highlight-row td { color: #166534; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
    .sales-box { background-color: #e6f4f1; border: 1px solid #99d6cb; border-radius: 6px; padding: 8px; color: #0c282e; margin-top: 8px; }
    .notes { font-size: 7.5px; color: #64748b; text-align: right; margin-top: 8px; border-top: 1px solid #e2e8f0; padding-top: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국민건강보험공단 공식통계</span>
      <div class="header-title">📊 2024년 주요수술통계연보 핵심 분석</div>
    </div>
    <div class="header-sub">출처: 국민건강보험공단 35개 주요수술 통계연보 (2025. 11. 발표)</div>
  </div>

  <div class="top-grid">
    <div class="metric-card">
      <span class="metric-title">35개 주요수술 총 수술건수</span>
      <div class="metric-val">198만 2천 건</div>
      <div class="metric-desc">수술인원 161만 8천 명 (인구 10만명당 3,846건)</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">35개 주요수술 총 진료비</span>
      <div class="metric-val">8조 8,829 억 원</div>
      <div class="metric-desc">전년 대비 +7.9% 증가 (건당 진료비 448만원)</div>
    </div>
    <div class="metric-card">
      <span class="metric-title">최다 다빈도 수술 1위</span>
      <div class="metric-val">백내장 수술 (62.3만건)</div>
      <div class="metric-desc">2위 일반척추(20.3만건), 3위 치핵(15.2만건)</div>
    </div>
  </div>

  <div class="sec-title">1. 다빈도 수술 상위 10위 수술건수 및 진료비 (2024년)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 8%;">순위</th>
        <th>수술명</th>
        <th>수술건수 (건)</th>
        <th>수술인원 (명)</th>
        <th>총진료비 (억원)</th>
        <th>건당 진료비 (만원)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="highlight-row">
        <td>1</td>
        <td style="font-weight: 800;">백내장수술</td>
        <td>622,960</td>
        <td>413,291</td>
        <td>8,623</td>
        <td>138</td>
      </tr>
      <tr>
        <td>2</td>
        <td style="font-weight: 800;">일반척추수술</td>
        <td>203,142</td>
        <td>187,544</td>
        <td>10,482</td>
        <td>516</td>
      </tr>
      <tr>
        <td>3</td>
        <td>치핵수술</td>
        <td>151,882</td>
        <td>147,605</td>
        <td>1,842</td>
        <td>121</td>
      </tr>
      <tr>
        <td>4</td>
        <td>제왕절개분만</td>
        <td>144,321</td>
        <td>143,890</td>
        <td>4,215</td>
        <td>292</td>
      </tr>
      <tr>
        <td>5</td>
        <td style="font-weight: 800; color:#b91c1c;">스텐트삽입술 (심장)</td>
        <td>96,548</td>
        <td>68,432</td>
        <td>7,921</td>
        <td>820</td>
      </tr>
      <tr>
        <td>6</td>
        <td>담낭절제술</td>
        <td>91,240</td>
        <td>89,950</td>
        <td>3,845</td>
        <td>421</td>
      </tr>
      <tr>
        <td>7</td>
        <td>인공관절치환술 (무릎·고관절)</td>
        <td>88,712</td>
        <td>64,520</td>
        <td>8,450</td>
        <td>953</td>
      </tr>
      <tr>
        <td>8</td>
        <td>충수절제술 (맹장)</td>
        <td>75,410</td>
        <td>75,120</td>
        <td>2,410</td>
        <td>320</td>
      </tr>
      <tr>
        <td>9</td>
        <td>자궁근종절제술</td>
        <td>68,920</td>
        <td>68,110</td>
        <td>3,120</td>
        <td>453</td>
      </tr>
      <tr>
        <td>10</td>
        <td>내시경하 부비동수술</td>
        <td>58,340</td>
        <td>47,210</td>
        <td>1,050</td>
        <td>180</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 최고 고비용 수술 vs 연령대별 다빈도 수술</div>
  <div class="two-col">
    <div>
      <div style="font-weight:800; font-size:9.5px; color:#123941; margin-bottom:3px; text-align:center; background:#e2e8f0; padding:3px; border-radius:4px;">
        💰 건당 진료비 최고 고액 수술 Top 5
      </div>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>수술명</th>
            <th>건당 진료비</th>
          </tr>
        </thead>
        <tbody>
          <tr style="font-weight:800; background:#fef2f2; color:#991b1b;">
            <td>1</td>
            <td>관상동맥우회수술 (심장)</td>
            <td>3,640 만원</td>
          </tr>
          <tr style="font-weight:800; background:#fef2f2; color:#991b1b;">
            <td>2</td>
            <td>줄기세포이식술</td>
            <td>2,890 만원</td>
          </tr>
          <tr style="font-weight:800; background:#fef2f2; color:#991b1b;">
            <td>3</td>
            <td>뇌기저부 및 개두수술</td>
            <td>2,150 만원</td>
          </tr>
          <tr>
            <td>4</td>
            <td>간이식 및 장기이식술</td>
            <td>1,980 만원</td>
          </tr>
          <tr>
            <td>5</td>
            <td>인공심박동기삽입술</td>
            <td>1,420 만원</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div style="font-weight:800; font-size:9.5px; color:#123941; margin-bottom:3px; text-align:center; background:#e2e8f0; padding:3px; border-radius:4px;">
        🎂 연령대별 1위 다빈도 수술 현황
      </div>
      <table>
        <thead>
          <tr>
            <th>연령대</th>
            <th>1위 다빈도 수술</th>
            <th>2위 다빈도 수술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9세 이하</td>
            <td>편도절제술 (구개·아데노이드)</td>
            <td>서혜부 탈장수술</td>
          </tr>
          <tr>
            <td>10대</td>
            <td>충수절제술 (맹장염)</td>
            <td>편도절제술</td>
          </tr>
          <tr>
            <td>20~30대</td>
            <td>제왕절개분만 / 치핵</td>
            <td>자궁근종절제술</td>
          </tr>
          <tr style="background:#eff6ff; font-weight:800;">
            <td>40~50대</td>
            <td>백내장수술 / 치핵</td>
            <td>일반척추수술 / 담낭</td>
          </tr>
          <tr style="background:#fff1f2; font-weight:800; color:#9f1239;">
            <td>60세 이상</td>
            <td>백내장수술 (압도적 1위)</td>
            <td>일반척추 / 인공관절치환</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="sales-box">
    <strong style="font-size: 10px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 1-5종 및 N대 질병수술비 브리핑 가이드</strong>
    1. <strong>다빈도 생활수술 (백내장·치핵·관절·척추)</strong>: 수술건수의 60% 이상이 생활 질환에 집중. 종수술비 및 N대 질병수술비의 반복 지급 혜택 필수 안내<br/>
    2. <strong>초고액 중증수술 (관상동맥우회·뇌기저부개두술)</strong>: 건당 2,000만~3,600만원에 달하는 고액 심·뇌혈관 수술비 대비를 위한 5종 수술비 및 특정중증수술비 한도 극대화<br/>
    3. <strong>노후 인공관절 및 척추 수술비 대비</strong>: 60세 이후 백내장, 척추수술, 인공관절치환술 급증. 노후 의료비 공백 방지를 위한 비갱신 수술비 플랜 구축
  </div>

  <div class="notes">
    * 출처: 국민건강보험공단 2024년 주요수술통계연보 (2025. 11. 발표) | 본 자료는 보험설계사용 대면 브리핑 자료입니다.
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
    };
  </script>
</body>
</html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };


  const handleDownloadGoodPDF = (good: GoodItem) => {
    // 2024 사망원인통계 팝업
    if (good.id === 1) {
      handleOpenPdfPrint();
      return;
    }
    // 후유장해 팝업
    if (good.id === 2) {
      handleOpenDisabilityPdfPrint();
      return;
    }
    // 유방암 팝업
    if (good.id === 3) {
      handleOpenBreastCancerPdfPrint();
      return;
    }
    // 암종별 발생 현황 팝업
    if (good.id === 4) {
      handleOpenCancerStatsPdfPrint();
      return;
    }
    // 연령군별 암발생률 팝업
    if (good.id === 5) {
      handleOpenAgeCancerPdfPrint();
      return;
    }
    // 상피내암 발생률 팝업
    if (good.id === 6) {
      handleOpenInsituCancerPdfPrint();
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const sectionsHtml = good.details.sections
      .map(
        (sec) => `
        <div style="margin-bottom: 20px;">
          <h3 style="font-size: 13px; font-weight: bold; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 4px; margin-bottom: 8px;">
            ${sec.title}
          </h3>
          <div style="font-size: 11px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
            ${sec.content}
          </div>
        </div>
      `
      )
      .join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${good.title} - 상세 자료</title>
          <style>
            @media print {
              body { -webkit-print-color-adjust: exact; padding: 20px; }
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #1e293b;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
            }
            .header {
              border-bottom: 2px solid #0f172a;
              padding-bottom: 16px;
              margin-bottom: 24px;
            }
            .badge {
              display: inline-block;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 11px;
              font-weight: bold;
              background-color: #f1f5f9;
              color: #475569;
              margin-bottom: 8px;
            }
            .title {
              font-size: 20px;
              font-weight: bold;
              color: #0f172a;
              margin: 0 0 8px 0;
            }
            .meta {
              font-size: 12px;
              color: #64748b;
            }
            .summary-box {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 24px;
              font-size: 12px;
              line-height: 1.6;
              color: #334155;
            }
            .footer {
              margin-top: 40px;
              border-top: 1px solid #e2e8f0;
              padding-top: 16px;
              font-size: 11px;
              color: #94a3b8;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="badge">${good.category} · ${good.target}</div>
            <h1 class="title">${good.title}</h1>
            <div class="meta">발행일: ${good.date} | 제공: 보험브릿지(Insurance Bridge)</div>
          </div>
          
          <div class="summary-box">
            <strong>[핵심 요약]</strong><br/>
            ${good.summary}
          </div>

          <div class="content">
            ${sectionsHtml}
          </div>

          <div class="footer">
            본 자료는 보험영업 및 고객 상담을 돕기 위해 제작된 브리핑 자료입니다.<br/>
            © Insurance Bridge. All rights reserved.
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleCopySummary = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredGoods = goods.filter((item) => {
    const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#123941] to-[#1a535c] rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#84e0cf] mb-3 border border-white/10">
            <FileText className="w-3.5 h-3.5" />
            <span>영업 화법 & 브리핑 자료실</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            설계사용 영업자료실
          </h1>
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            고객 상담, 브리핑, 보장분석 클로징에 바로 활용할 수 있는 통계 기반 화법과 약관 해설 자료를 다운로드하여 상담에 활용하세요.
          </p>
        </div>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#123941] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="자료명, 태그, 키워드 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#123941]/20 focus:border-[#123941] transition-all"
          />
        </div>
      </div>

      {/* Grid of Materials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGoods.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
          >
            {/* Card Graphic Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-teal-50 text-teal-700 border border-teal-200/60">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600">
                  {item.target}
                </span>
              </div>
              <span className="text-[11px] text-slate-600 font-bold">{item.date}</span>
            </div>

            {/* Visual SVG Container */}
            <div className="h-44 bg-slate-900 border-b border-slate-100 flex items-center justify-center p-3 relative overflow-hidden">
              {item.svgIllustration}
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#123941] transition-colors line-clamp-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium flex items-center gap-1"
                  >
                    <Tag className="w-2.5 h-2.5 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedGood(item)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>상세보기</span>
                </button>
                <button
                  onClick={() => handleDownloadGoodPDF(item)}
                  className="flex-1 bg-[#123941] hover:bg-[#1a535c] text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF / 인쇄</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      {selectedGood && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#123941] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#84e0cf]/20 text-[#84e0cf] border border-[#84e0cf]/30">
                  {selectedGood.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white">
                  {selectedGood.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGood(null)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs sm:text-sm">
              {/* Meta information */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1 font-medium">
                  <span className="text-slate-400">발행일:</span> {selectedGood.date}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <span className="text-slate-400">추천 대상:</span> {selectedGood.target}
                </span>
              </div>

              {/* Summary Card with Copy Button */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#123941]" />
                    핵심 상담 요약 (클릭하여 복사)
                  </h4>
                  <button
                    onClick={() => handleCopySummary(selectedGood.summary)}
                    className="text-[11px] font-bold text-[#123941] hover:underline flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-green-600" />
                        <span className="text-green-600">복사 완료!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-500" />
                        <span>요약 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-sans text-xs">
                  {selectedGood.summary}
                </p>
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-4">
                {selectedGood.details.sections.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-100 p-4 shadow-2xs">
                    <h5 className="font-bold text-slate-900 text-sm mb-2 border-b border-slate-100 pb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-slate-100 text-[#123941] flex items-center justify-center text-[10px] font-black">
                        {idx + 1}
                      </span>
                      {section.title}
                    </h5>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-sans text-xs">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedGood.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedGood(null)}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs transition-colors"
              >
                닫기
              </button>
              <button
                onClick={() => handleDownloadGoodPDF(selectedGood)}
                className="px-4 py-2 bg-[#123941] hover:bg-[#1a535c] text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF 출력 / 인쇄</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerGoods;
