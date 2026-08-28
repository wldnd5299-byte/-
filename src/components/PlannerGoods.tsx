/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Search, Download, ExternalLink, Filter, HelpCircle, CheckCircle, Tag, Layers, Star, Printer, ArrowRight, FileText, PieChart, TrendingUp, Users, Eye, X, Award } from 'lucide-react';

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

export default function PlannerGoods() {
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

  const handleOpenColonCancerTreatPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>대장암 치료방법 - 국가암지식정보센터·보건복지부</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 8.5px; color: #1e293b; line-height: 1.35; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 5px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 14px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 8px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .def-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 5px; padding: 5px 8px; font-size: 8px; margin-bottom: 8px; color: #14532d; }
    .sec-title { font-size: 9.5px; font-weight: 900; color: #0f172a; margin: 8px 0 4px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 6px; font-size: 7.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3px 3px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 2.5px 3px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .sales-box { background-color: #e6f4f1; border: 1px solid #99d6cb; border-radius: 6px; padding: 7px; color: #0c282e; margin-top: 6px; font-size: 7.5px; }
    .notes { font-size: 7px; color: #64748b; text-align: right; margin-top: 5px; border-top: 1px solid #e2e8f0; padding-top: 3px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암지식정보센터 · 보건복지부 공식 가이드</span>
      <div class="header-title">🩺 대장암 치료방법 (내시경·수술·항암·방사선치료)</div>
    </div>
    <div class="header-sub">대한암학회·대한대장항문학회·대한종양내과학회공동제작 (2026.08)</div>
  </div>

  <div class="def-box">
    <strong>💡 치료방법 결정 핵심 기준</strong>: 대장암의 치료법을 결정하는 데서 중요한 것은 <strong>종양의 크기가 아니라 암세포가 조직을 침투한 정도(침윤도)</strong>입니다. 대개 수술, 항암화학요법, 방사선치료를 적절히 병행합니다.
  </div>

  <div class="sec-title">1. 치료법 종류 및 적응증 비교</div>
  <table>
    <thead>
      <tr>
        <th style="width:18%;">구분</th>
        <th style="width:32%;">적응증 및 대상</th>
        <th style="width:50%;">주요 치료 내용 및 특징</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800; color:#123941;">내시경적 절제술</td>
        <td>암세포 분화도 우수, 점막/점막하층 일부 국한 조기 대장암</td>
        <td style="text-align:left;">내시경 용종절제술(Snare Resection). 혈관/림프관 미침범 시 적용. 시술 후 정기 추적검사 필수.</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#1e40af;">결장암 수술</td>
        <td>결장 부위 발생 암 (우측, 횡행, 좌측, 에스결장)</td>
        <td style="text-align:left;">우측/횡행/좌측 결장절제술, 전방절제술. 암 위치에 따라 결장 및 광범위 림프절 절제 후 문합.</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#be123c;">직장암 수술</td>
        <td>직장 부위 발생 암 (상부, 중간부, 하부 직장)</td>
        <td style="text-align:left;">저위전방절제술(괄약근 보존, 필요시 임시 회장루), 복회음절제술(하부 직장암 - 영구 인공항문/장루).</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#0d9488;">항암화학요법</td>
        <td>수술 후 재발 방지(2~3기), 수술 전 크기 감소, 전이성 암</td>
        <td style="text-align:left;">보조/선행/전이/고식적 항암. 세포독성(5-FU, 옥살리플라틴 등) + 표적제(아바스틴, 얼비툭스) + 면역제(키트루다).</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#b45309;">방사선치료</td>
        <td>2~3기 진행성 직장암 (수술 전/후)</td>
        <td style="text-align:left;">수술 전 방사선+항암(TNT)으로 종양 축소 및 항문 괄약근 보존율 향상. Neoadjuvant 면역치료시 Watch & Wait 가능.</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 대장암 위치별 수술 방식 및 문합/장루 여부</div>
  <table>
    <thead>
      <tr>
        <th style="width:15%;">암 발생 위치</th>
        <th style="width:25%;">수술명</th>
        <th style="width:35%;">절제 및 문합 부위</th>
        <th style="width:25%;">인공항문(장루) 여부</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800;">우측 결장</td>
        <td>우측 결장절제술</td>
        <td>맹장, 상행결장, 횡행결장 근위부 절제 ➔ 회장결장문합</td>
        <td>없음 (자연 항문)</td>
      </tr>
      <tr>
        <td style="font-weight:800;">횡행/좌측/에스결장</td>
        <td>횡행/좌측 결장절제술, 전방절제술</td>
        <td>해당 결장 절제 후 결장-결장 또는 결장-직장 문합</td>
        <td>없음 (자연 항문)</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#1e40af;">상부/중간부 직장</td>
        <td>저위전방절제술</td>
        <td>직장 절제 후 결장-직장 자동문합기 문합</td>
        <td>필요시 임시 회장루 (복구 가능)</td>
      </tr>
      <tr style="background:#fff1f2;">
        <td style="font-weight:800; color:#be123c;">하부 직장 (3~5cm)</td>
        <td style="font-weight:800; color:#be123c;">복회음절제술 (Miles 수술)</td>
        <td>직장 전체 및 항문 괄약근 완전 절제 및 복부 적출</td>
        <td style="font-weight:900; color:#be123c;">영구 인공항문(복부 장루) 조성</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">3. 항암제 및 표적/면역치료제 주요 라인업</div>
  <table>
    <thead>
      <tr>
        <th style="width:20%;">분류</th>
        <th style="width:30%;">대표 약제명 (성분명/상품명)</th>
        <th style="width:50%;">치료 특성 및 적응증</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800;">세포독성 항암제</td>
        <td>5-FU, 카페시타빈(젤로다), 옥살리플라틴, 이리노테칸, 론서프</td>
        <td style="text-align:left;">대장암 항암의 기본 근간. 수술 후 보조항암 6개월 투여 및 전이성 암 표준항암.</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#0d9488;">표적치료제</td>
        <td>베바시주맙(아바스틴), 세툭시맙(얼비툭스), 브라프토비, 엔허투</td>
        <td style="text-align:left;">신생혈관 억제(아바스틴), EGFR 억제(얼비툭스 - RAS 야생형), BRAF V600E, HER2 표적치료.</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="font-weight:800; color:#166534;">면역관문억제제</td>
        <td>펨브롤리주맙(키트루다), 니볼루맙(옵디보), 도스타릴맙(젬퍼리)</td>
        <td style="text-align:left;">MSI-H / dMMR 유전자 변이 대상. 수술 전 선행면역치료시 90~100% 완전관해(cCR) 달성.</td>
      </tr>
    </tbody>
  </table>

  <div class="sales-box">
    <strong style="font-size: 9.5px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 대장암 보장 브리핑 가이드</strong>
    1. <strong>표적항암 / 면역항암치료비 특약 필수!</strong>: 아바스틴, 얼비툭스, 엔허투, 키트루다 등 비급여 고가 표적/면역항암제에 대비한 고액 약물치료비 특약 준비 필요.<br/>
    2. <strong>수술비 & 인공항문(장루) 형성 특약</strong>: 하부 직장암 환자는 복회음절제술로 영구 인공항문(장루)을 조성하게 되므로 수술비 및 장애진단 특약 필수 소구.<br/>
    3. <strong>대장 내시경 용종절제 & 제자리암(D01) 대비</strong>: 건강검진 대장내시경 용종(선종) 절제 시 제자리암(상피내암) 판정 빈번. 용종절제 수술비 및 유사암 진단비 사전 보강 제안.
  </div>

  <div class="notes">
    * 출처: 보건복지부, 국립암센터, 국가암지식정보센터 (대한암학회 · 대한대장항문학회 · 대한종양내과학회 공동제작)
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

  const handleOpenBreastCancerRecurrencePdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>유방암 재발 및 전이 - 국가암지식정보센터 & 란셋 임상가이드</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 8.5px; color: #1e293b; line-height: 1.35; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #831843; padding-bottom: 5px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 14px; font-weight: 900; color: #831843; letter-spacing: -0.5px; }
    .header-sub { font-size: 8px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #831843; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .def-box { background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 5px; padding: 6px 8px; font-size: 8px; margin-bottom: 8px; color: #831843; }
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-bottom: 8px; }
    .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 5px; padding: 5px; text-align: center; }
    .stat-val { font-size: 12px; font-weight: 900; color: #9d174d; margin-top: 2px; }
    .stat-lbl { font-size: 7.5px; color: #475569; font-weight: 700; }
    .sec-title { font-size: 9.5px; font-weight: 900; color: #0f172a; margin: 8px 0 4px 0; border-left: 3px solid #831843; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 6px; font-size: 7.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3.5px 3px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 3px 3px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .warning-box { background: #fff1f2; border: 1px solid #fecdd3; border-radius: 5px; padding: 6px; margin-bottom: 6px; font-size: 7.5px; color: #9f1239; }
    .sales-box { background-color: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 6px; padding: 7px; color: #831843; margin-top: 6px; font-size: 7.5px; }
    .notes { font-size: 7px; color: #64748b; text-align: right; margin-top: 5px; border-top: 1px solid #e2e8f0; padding-top: 3px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암지식정보센터 · 영국 란셋(Lancet) 임상 데이터</span>
      <div class="header-title">💗 유방암 재발 및 전이 (5년 생존율 vs 10~20년 후기 재발 리포트)</div>
    </div>
    <div class="header-sub">최종수정일: 2026년 08월 (국립암센터 & 한국유방암학회 검수)</div>
  </div>

  <div class="def-box">
    <strong>📌 유방암 재발의 핵심 특성</strong>: 유방암은 0~2기 발견 시 5년 생존율이 90% 이상으로 높으나, <strong>5년 치료가 끝난 후에도 10~20년 뒤 후기 재발 위험이 지속</strong>되는 특이한 암종입니다. 의학계에서는 함부로 '완치'라는 표현을 쓰지 않으며, 지속적인 정기 추적검사를 시행합니다.
  </div>

  <div class="stat-grid">
    <div class="stat-card">
      <div class="stat-lbl">0~2기 5년 상대생존율</div>
      <div class="stat-val" style="color:#059669;">90% 이상</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">조기 발견 시 완치율 높음</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">10년 후 후기 재발 비율</div>
      <div class="stat-val">약 25%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">전체 재발의 1/4이 후기발생</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">호르몬양성(70%) 15년재발</div>
      <div class="stat-val" style="color:#2563eb;">25.0%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">영국 Lancet 임상 논문</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">산정특례 5년 종료</div>
      <div class="stat-val" style="color:#dc2626;">본인부담 5% 혜택 종료</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">진료비/검사비 부담 급증</div>
    </div>
  </div>

  <div class="sec-title">1. 재발 유형 비교 (국소 재발 vs 전이성 재발/원격 전이)</div>
  <table>
    <thead>
      <tr>
        <th style="width:14%;">구분</th>
        <th style="width:26%;">발생 부위 및 정 의</th>
        <th style="width:22%;">발생 시기 및 특성</th>
        <th style="width:22%;">표준 치료 방법</th>
        <th style="width:16%;">예후 및 보장</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:900; color:#831843;">국소 재발<br/>(Local)</td>
        <td style="text-align:left;">· 수술했던 유방 잔여 조직<br/>· 유방 절제 피부 및 흉터 부위<br/>· 동측 림프절 재발</td>
        <td style="text-align:left;">· <strong>80~90%가 5년 내 발생</strong><br/>· 10~20년 뒤 발생사례 있음<br/>· 정기검진 시 수술 부위 관찰</td>
        <td style="text-align:left;">· 외과적 국소 절제 수술<br/>· 항암화학요법 병행<br/>· 방사선 치료 / 항호르몬제</td>
        <td style="text-align:left;">수술 가능 시 완치 기대.<br/>재진단암 특약 보장.</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#be123c;">전이성 재발<br/>(원격 전이)</td>
        <td style="text-align:left;">· 유방 외 다른 타 장기로 전이<br/>· <strong>① 뼈(골)전이 (가장 흔함)</strong><br/>· ② 폐전이, ③ 간전이, ④ 뇌전이</td>
        <td style="text-align:left;">· 수술 후 5~20년 지속적 발생<br/>· 호르몬 양성 암에서 후기전이 다발<br/>· 전이 장기별 증상 다양</td>
        <td style="text-align:left;">· 표적항암제 (허셉틴, 버제니오 등)<br/>· 방사선 치료 (뼈/뇌 전이)<br/>· 항호르몬제 (타목시펜, 페마라)</td>
        <td style="text-align:left;">전신 치료 시행.<br/>고액 진단비 준비 필요.</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 원격 전이 주요 장기 4곳 특성 및 치료 가이드</div>
  <table>
    <thead>
      <tr>
        <th style="width:14%;">전이 장기</th>
        <th style="width:10%;">발생 순위</th>
        <th style="width:36%;">주요 임상 증상</th>
        <th style="width:40%;">주요 치료법 및 대응 방안</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:900; color:#be123c;">뼈 (골) 전이</td>
        <td style="font-weight:800; color:#be123c;">1위 (최다)</td>
        <td style="text-align:left;">· 척추, 골반, 대퇴골 극심한 뼈 통증<br/>· 병적 압박골절 및 고칼슘혈증 위험</td>
        <td style="text-align:left;">· 방사선 치료 (통증 완화 및 골절 방지)<br/>· 뼈 보호 표적주사 (데노수맙, 조메타)<br/>· 질병후유장해(3~100%) 보장 대상</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#2563eb;">폐 전이</td>
        <td style="font-weight:800; color:#2563eb;">2위</td>
        <td style="text-align:left;">· 지속되는 가래, 기침, 가슴 답답함, 숨참<br/>· 흉수(가슴에 물 참) 발생으로 호흡곤란</td>
        <td style="text-align:left;">· 국소 종양 시 폐 절제 수술<br/>· 표적/면역항암제 및 항암화학요법<br/>· 흉수 천자 및 흉막 고착술</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#d97706;">간 전이</td>
        <td style="font-weight:800; color:#d97706;">3위</td>
        <td style="text-align:left;">· 우상복부 둔통, 피로감, 식욕 부진<br/>· 황달, 복수 발생 및 간기능 수치 상승</td>
        <td style="text-align:left;">· 전신 표적/항암화학요법<br/>· 조건 충족 시 간 절제술 또는 고주파 열치료(RFA)<br/>· 고액 비급여 치료비 소구</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#475569;">중추신경계<br/>(뇌 전이)</td>
        <td style="font-weight:800; color:#475569;">4위</td>
        <td style="text-align:left;">· 심한 두통, 아침 구토, 어지럼증<br/>· 사지 신경 마비, 언어 장애, 시력 저하</td>
        <td style="text-align:left;">· 감마나이프 / 서버나이프 방사선 수술<br/>· 뇌혈관장벽(BBB) 투과 표적항암제<br/>· 뇌전이 방사선 수술비 특약 제안</td>
      </tr>
    </tbody>
  </table>

  <div class="warning-box">
    <strong>⚠️ [임상 경보] 5년 산정특례 종료에 따른 환자 의료비 공백 및 정기검진 소홀 위험</strong><br/>
    암 진단 후 5년이 지나 산정특례 혜택(본인부담 5%)이 끝나면, PET-CT, MRI, 뼈스캔 등 고가 추적검사비가 환자 부담으로 크게 늘어납니다. 이에 따라 검사를 연기하거나 받지 않다가 10~15년 후 뒤늦게 뼈전이·뇌전이가 발견되는 안타까운 사례가 급증하고 있습니다.
  </div>

  <div class="sales-box">
    <strong style="font-size: 9.5px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 유방암 재발·전이 영업 브리핑 가이드</strong>
    1. <strong>"유방암은 5년 지났다고 끝이 아닙니다!" ➔ 재진단암 / 암재발 특약 제안</strong>: 호르몬 양성 암 환자(70%)는 10~15년 뒤에도 재발률이 25%에 달하므로 1회성 진단비가 아닌 10~20년 장기 반복 보장되는 재진단암 특약 필수.<br/>
    2. <strong>산정특례 5년 종료 후 불어나는 검사비/의료비 공백 메우기</strong>: 5년 후 본인부담 5% 혜택 소멸에 대비해 넉넉한 암진단비를 확보하여 부담 없이 매년 정기 추적검사(MRI/PET-CT)를 받도록 소구.<br/>
    3. <strong>뼈전이 압박골절 & 뇌전이 신경마비 대비 ➔ 질병후유장해(3~100%) 및 방사선수술비</strong>: 뼈 전이 시 척추 골절, 뇌 전이 시 마비 장애가 발생하므로 질병후유장해 특약과 감마나이프 등 방사선수술 특약을 묶어 통합 보장 설계.
  </div>

  <div class="notes">
    * 출처: 보건복지부, 국립암센터, 국가암지식정보센터, 영국 란셋(Lancet) 임상 논문, 중앙대학교병원 건강칼럼 (2026.08 검수)
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

  const handleOpenStomachCancerRecurrencePdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>위암 재발 및 전이 - 국가암지식정보센터 가이드</title>
  <style>
    @page { size: A4 portrait; margin: 10mm 12mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 8.5px; color: #1e293b; line-height: 1.35; margin: 0; padding: 0; }
    .header { border-bottom: 2px solid #123941; padding-bottom: 5px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 14px; font-weight: 900; color: #123941; letter-spacing: -0.5px; }
    .header-sub { font-size: 8px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #123941; color: #ffffff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-bottom: 3px; }
    .def-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 5px; padding: 6px 8px; font-size: 8px; margin-bottom: 8px; color: #166534; }
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-bottom: 8px; }
    .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 5px; padding: 5px; text-align: center; }
    .stat-val { font-size: 12px; font-weight: 900; color: #dc2626; margin-top: 2px; }
    .stat-lbl { font-size: 7.5px; color: #475569; font-weight: 700; }
    .sec-title { font-size: 9.5px; font-weight: 900; color: #0f172a; margin: 8px 0 4px 0; border-left: 3px solid #123941; padding-left: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 6px; font-size: 7.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3.5px 3px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 3px 3px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .warning-box { background: #fff1f2; border: 1px solid #fecdd3; border-radius: 5px; padding: 6px; margin-bottom: 6px; font-size: 7.5px; color: #9f1239; }
    .sales-box { background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 7px; color: #14532d; margin-top: 6px; font-size: 7.5px; }
    .notes { font-size: 7px; color: #64748b; text-align: right; margin-top: 5px; border-top: 1px solid #e2e8f0; padding-top: 3px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">국가암지식정보센터 · 보건복지부 공식 가이드</span>
      <div class="header-title">🩺 위암 재발 및 전이 (수술 후 5년 내 90% 재발·3대 재발 패턴 리포트)</div>
    </div>
    <div class="header-sub">검수 기관: 대한암학회 · 대한위암학회 · 대한중앙내과학회</div>
  </div>

  <div class="def-box">
    <strong>📌 위암 재발의 주요 임상 특징</strong>: 전체 위암 환자의 <strong>40~60%는 재발로 인해 사망</strong>합니다. 수술 후 2년 내 50%, 3년 내 70%, <strong>5년 내 90%가 재발</strong>하므로 수술 후 최소 5년간 3~6개월 단위의 철저한 추적관찰과 보장자산 준비가 필수적입니다.
  </div>

  <div class="stat-grid">
    <div class="stat-card">
      <div class="stat-lbl">위암 재발 사망 비율</div>
      <div class="stat-val" style="color:#dc2626;">40 ~ 60%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">전체 환자 기준 위험성</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">수술 후 2년 내 재발</div>
      <div class="stat-val" style="color:#b91c1c;">50%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">전체 재발의 절반 발생</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">수술 후 3년 내 재발</div>
      <div class="stat-val" style="color:#c2410c;">70%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">10명 중 7명 재발</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">수술 후 5년 내 재발</div>
      <div class="stat-val" style="color:#15803d;">90%</div>
      <div style="font-size:7px; color:#64748b; margin-top:1px;">재발의 90%가 5년 집중</div>
    </div>
  </div>

  <div class="sec-title">1. 위암 3대 재발 및 전이 유형 완벽 비교</div>
  <table>
    <thead>
      <tr>
        <th style="width:14%;">구분</th>
        <th style="width:26%;">주요 발생 부위</th>
        <th style="width:22%;">임상 증상 특성</th>
        <th style="width:22%;">표준 치료 방법</th>
        <th style="width:16%;">수술 가능 여부</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:900; color:#123941;">국소 재발<br/>(Local)</td>
        <td style="text-align:left;">· 수술 부위 주위 림프절<br/>· 남아있는 위/식도, 십이지장<br/>· 대장 인접 부위 침범</td>
        <td style="text-align:left;">· 초기 무증상 다발<br/>· 복통, 체중 감소, 식욕부진<br/>· 대장 침범 시 대장 막힘(폐색)</td>
        <td style="text-align:left;">· 복부 CT 확인 후 재수술<br/>· 대동맥 림프절 전이 시<br/>  전신 항암화학요법 시행</td>
        <td style="font-weight:800; color:#15803d;">국한 시 제한적<br/>재수술 가능</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#dc2626;">복강 내 재발<br/>(Peritoneal)</td>
        <td style="text-align:left;">· 복강 내 암세포가 씨 뿌려지듯 복막 전체에 광범위하게 퍼짐</td>
        <td style="text-align:left;">· <strong>장폐색</strong> (복통, 대변/방귀 차단)<br/>· 복수(물 차오름) 심각 동반<br/>· 영양 공급 불가 및 극심한 고통</td>
        <td style="text-align:left;">· 전신 항암화학요법 시행<br/>· 방사선 치료 불가<br/>· 통증 완화 및 완화요법</td>
        <td style="font-weight:900; color:#b91c1c;">재수술 절대 불가<br/>(전신 항암 의존)</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#2563eb;">타장기 원격전이<br/>(Distant)</td>
        <td style="text-align:left;">· 혈관/림프관을 통한 이동<br/>· <strong>간, 폐, 뼈, 뇌</strong> 등 전신 이동</td>
        <td style="text-align:left;">· 뼈/뇌 전이는 뒤늦게 발견<br/>· 황달, 뼈 통증, 골절, 뇌마비<br/>· 전이 부위별 증상 다양</td>
        <td style="text-align:left;">· 전신 항암화학요법<br/>· 뼈/뇌 방사선 치료 병행<br/>· 고액 표적/면역항암 특약</td>
        <td style="font-weight:800; color:#475569;">전신 치료<br/>(수술 불가)</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title">2. 수술 후 주기적 추적검사 일정 및 주요 검사항목</div>
  <table>
    <thead>
      <tr>
        <th style="width:20%;">구분</th>
        <th style="width:25%;">권장 추적검사 주기</th>
        <th style="width:55%;">주요 검사 내용 및 목적</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800; color:#123941;">수술 후 1~3년 차</td>
        <td style="font-weight:900; color:#dc2626;">3개월 ~ 6개월 마다</td>
        <td style="text-align:left;">· 재발의 70%가 집중되는 고위험 시기.<br/>· 외래 진찰, 혈액검사(간기능/CBC), 종양표지자(CEA, CA19-9) 필수 추적.</td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#123941;">수술 후 3~5년 차</td>
        <td style="font-weight:900; color:#15803d;">6개월 ~ 1년 마다</td>
        <td style="text-align:left;">· 복부 전산화단층촬영(CT)으로 복강/림프절 재발 및 간전이 관찰.<br/>· 식도·위 내시경검사를 통해 잔존 위 수술 부위 재발 여부 정밀 확인.</td>
      </tr>
    </tbody>
  </table>

  <div class="warning-box">
    <strong>⚠️ [임상 경보] 복강 내 재발(복막전이) 및 수술 후 5년 내 집중 재발 소구 포인트</strong><br/>
    위암 재발의 90%가 수술 후 5년 이내에 발생하며, 특히 복강 내 재발 시 재수술이 불가능하여 표적/면역항암 약물 치료비 및 지속적인 재진단암 진단비 준비가 생존의 핵심 조건입니다.
  </div>

  <div class="sales-box">
    <strong style="font-size: 9.5px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 위암 재발·전이 영업 브리핑 가이드</strong>
    1. <strong>"위암 수술 후 5년 내 90% 재발! 계속받는 암진단비 필수"</strong>: 수술 후 2년 내 50%, 5년 내 90% 재발하므로 1회성 진단비로 끝나는 보장이 아닌, 재발 시 반복 지급되는 재진단암/재발암 특약 제안.<br/>
    2. <strong>"복강 내 재발 시 재수술 불가 ➔ 표적/면역항암 치료비 선제 대비"</strong>: 복강 내 재발 시 수술 및 방사선이 불가능하고 2차·3차 항암 약물 치료만 가능하므로 비급여 표적항암 및 신의료기술 특약 필수 설계.<br/>
    3. <strong>"장폐색, 복수, 간·뼈·뇌 전이 관리를 위한 통합 보장 설계"</strong>: 장폐색·복수로 인한 장기 입원, 뼈전이 압박골절 및 뇌전이 신경마비에 대비해 질병후유장해(3~100%) 및 입원/간병인 일당 함께 소구.
  </div>

  <div class="notes">
    * 출처: 보건복지부, 국립암센터, 국가암지식정보센터 (대한암학회 · 대한위암학회 · 대한중앙내과학회 공동제작)
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

  const handleOpenHeavyIonPdfPrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>중입자치료 - 연세암병원 중입자치료센터 공식 가이드</title>
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm; }
    body { font-family: 'Pretendard', -apple-system, sans-serif; font-size: 8px; color: #1e293b; line-height: 1.35; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .header { border-bottom: 2px solid #0f2b5c; padding-bottom: 4px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-title { font-size: 13px; font-weight: 900; color: #0f2b5c; letter-spacing: -0.5px; }
    .header-sub { font-size: 7.5px; color: #64748b; font-weight: 700; }
    .badge { display: inline-block; background-color: #0f2b5c; color: #ffffff; font-size: 7.5px; font-weight: 800; padding: 2px 5px; border-radius: 4px; text-transform: uppercase; margin-bottom: 2px; }
    .def-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 5px; padding: 5px 7px; font-size: 7.5px; margin-bottom: 6px; color: #1e40af; }
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-bottom: 6px; }
    .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 5px; padding: 4px; text-align: center; }
    .stat-val { font-size: 10.5px; font-weight: 900; color: #0f2b5c; margin-top: 1px; }
    .stat-lbl { font-size: 7px; color: #475569; font-weight: 700; }
    .sec-title { font-size: 9px; font-weight: 900; color: #0f172a; margin: 6px 0 3px 0; border-left: 3px solid #0f2b5c; padding-left: 5px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 6px; font-size: 7.5px; }
    th { background: #f1f5f9; color: #334155; font-weight: 800; border: 1px solid #cbd5e1; padding: 3px 3px; text-align: center; }
    td { border: 1px solid #e2e8f0; padding: 2.5px 3px; text-align: center; color: #334155; }
    tr:nth-child(even) { background: #f8fafc; }
    .highlight-row { background: #eff6ff !important; font-weight: 800; }
    .sales-box { background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 6px; color: #14532d; margin-top: 5px; font-size: 7.5px; }
    .notes { font-size: 6.5px; color: #64748b; text-align: right; margin-top: 4px; border-top: 1px solid #e2e8f0; padding-top: 2px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span class="badge">연세암병원 중입자치료센터 공식 검수 가이드</span>
      <div class="header-title">⚛️ 중입자치료 (꿈의 암 치료기 · 탄소이온 Bragg Peak 기술 리포트)</div>
    </div>
    <div class="header-sub">검수: 연세암병원 중입자치료센터 · 대한방사선종양학회</div>
  </div>

  <div class="def-box">
    <strong>📌 중입자치료(Heavy Ion Therapy)란?</strong>: 탄소입자(Carbon Ion)를 이용한 방사선치료의 하나로서, 수소입자보다 <strong>12배 무거운 탄소입자</strong>를 빛의 속도의 70%까지 가속시켜 암세포만을 표적 조준하여 파괴합니다. 기존 X-선 방사선치료 대비 <strong>2~3배 높은 생물학적 세포 살상 효과</strong>로 난치암을 극복하는 현존 최고 '꿈의 암 치료기'입니다.
  </div>

  <div class="stat-grid">
    <div class="stat-card">
      <div class="stat-lbl">탄소입자 질량비</div>
      <div class="stat-val" style="color:#0f2b5c;">24,000 배</div>
      <div style="font-size:6.5px; color:#64748b; margin-top:1px;">전해 질량비 (수소 2,000)</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">탄소입자 전하비</div>
      <div class="stat-val" style="color:#1d4ed8;">+6 (6가 전하)</div>
      <div style="font-size:6.5px; color:#64748b; margin-top:1px;">양성자(+1) 대비 파괴력 강함</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">상대적 생물학적 효과(RBE)</div>
      <div class="stat-val" style="color:#b91c1c;">2 ~ 3 배</div>
      <div style="font-size:6.5px; color:#64748b; margin-top:1px;">X-선(1) 대비 세포 살상능력</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">평균 치료 횟수</div>
      <div class="stat-val" style="color:#15803d;">평균 12 회</div>
      <div style="font-size:6.5px; color:#64748b; margin-top:1px;">기존 25회 대비 절반 단축</div>
    </div>
  </div>

  <!-- [시각 자료 1] 입자 질량 및 전하 다이어그램 -->
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:5px; padding:6px; margin-bottom:6px; text-align:center;">
    <span style="font-size:7.5px; font-weight:800; color:#334155; display:block; margin-bottom:4px;">🎨 [시각자료 1] 방사선치료 입자선 질량비 및 전하 비교 다이어그램</span>
    <div style="display:flex; justify-content:space-around; align-items:center; background:#fff; padding:6px; border-radius:5px; border:1px solid #e2e8f0;">
      <div style="text-align:center;">
        <div style="width:24px; height:24px; border-radius:50%; border:1px dashed #94a3b8; display:flex; align-items:center; justify-content:center; margin:0 auto; font-size:6.5px; color:#64748b; font-weight:bold;">~</div>
        <div style="font-size:7px; font-weight:bold; color:#334155; margin-top:2px;">X-선 (광자)</div>
        <div style="font-size:6px; color:#64748b;">질량 0 / 전하 0</div>
      </div>
      <div style="text-align:center;">
        <div style="width:14px; height:14px; border-radius:50%; background:#94a3b8; color:#fff; display:flex; align-items:center; justify-content:center; margin:5px auto; font-size:5.5px; font-weight:bold;">e⁻</div>
        <div style="font-size:7px; font-weight:bold; color:#334155; margin-top:2px;">Electron (전자)</div>
        <div style="font-size:6px; color:#64748b;">질량 1 / 전하 -1</div>
      </div>
      <div style="text-align:center;">
        <div style="width:32px; height:32px; border-radius:50%; background:#3b82f6; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto; font-size:7.5px; font-weight:bold;">H⁺</div>
        <div style="font-size:7px; font-weight:bold; color:#1e40af; margin-top:2px;">Proton (양성자)</div>
        <div style="font-size:6px; color:#1d4ed8; font-weight:bold;">질량 2,000 / 전하 +1</div>
      </div>
      <div style="text-align:center;">
        <div style="width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg, #3730a3, #1e1b4b); color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto; font-size:7.5px; font-weight:900;">
          <span>Carbon</span>
          <span style="font-size:6.5px; color:#fde047;">¹²C⁶⁺</span>
        </div>
        <div style="font-size:7px; font-weight:900; color:#1e1b4b; margin-top:2px;">Carbon Ion (중입자)</div>
        <div style="font-size:6px; color:#be123c; font-weight:900;">질량 24,000 (12배) / 전하 +6</div>
      </div>
    </div>
  </div>

  <div class="sec-title">1. 방사선치료에 사용되는 광자, 전자, 입자선의 물리적 특성 비교</div>
  <table>
    <thead>
      <tr>
        <th style="width:20%;">구분</th>
        <th style="width:20%;">X-선 치료 (X-ray)</th>
        <th style="width:20%;">전자선 치료 (Electron)</th>
        <th style="width:20%;">양성자치료 (Proton)</th>
        <th style="width:20%; background:#dbeafe; color:#1e40af;">중입자치료 (Carbon)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800;">질량비 (Mass)</td>
        <td>x (질량 없음)</td>
        <td>1</td>
        <td>2,000</td>
        <td class="highlight-row" style="color:#1e40af;">24,000 (12배 무거움)</td>
      </tr>
      <tr>
        <td style="font-weight:800;">전하비 (Charge)</td>
        <td>x (전하 없음)</td>
        <td>-1</td>
        <td>+1</td>
        <td class="highlight-row" style="color:#1e40af;">+6 (6가 이온)</td>
      </tr>
      <tr class="highlight-row">
        <td style="font-weight:900; color:#1e40af;">상대적 생물학적 효과 (RBE)</td>
        <td>1</td>
        <td>1</td>
        <td>1.1</td>
        <td style="font-weight:900; color:#b91c1c;">2 ~ 3 배 (최고 파괴력)</td>
      </tr>
      <tr>
        <td style="font-weight:800;">에너지 방출 방식</td>
        <td>투과 중 지속 방출 (정상조직 손상)</td>
        <td>표면근처 방출 (침투 얕음)</td>
        <td>브래그 피크 (Bragg Peak)</td>
        <td style="font-weight:900; color:#0f2b5c;">초정밀 브래그 피크 (Bragg Peak)</td>
      </tr>
    </tbody>
  </table>

  <!-- [시각 자료 2] SVG Bragg Peak 에너지 곡선 -->
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:5px; padding:6px; margin-bottom:6px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
      <strong style="font-size:8px; color:#0f172a;">📈 [시각자료 2] 중입자의 브래그 피크(Bragg Peak) 에너지 전달 곡선</strong>
      <span style="background:#dbeafe; color:#1e40af; font-size:6.5px; font-weight:800; padding:1px 4px; border-radius:3px;">정상세포 보호 & 암세포 집중 타격</span>
    </div>
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:5px; padding:6px; position:relative;">
      <div style="position:relative; height:100px; width:100%; border-bottom:1px solid #cbd5e1; border-left:1px solid #cbd5e1;">
        <span style="position:absolute; left:2px; top:2px; font-size:6px; color:#64748b; font-weight:bold;">선량 (%)</span>
        <span style="position:absolute; left:2px; top:15px; font-size:5.5px; color:#94a3b8;">100%</span>
        <span style="position:absolute; left:2px; top:48px; font-size:5.5px; color:#94a3b8;">50%</span>
        <span style="position:absolute; left:2px; bottom:2px; font-size:5.5px; color:#94a3b8;">0%</span>
        
        <span style="position:absolute; right:4px; bottom:-11px; font-size:6px; color:#64748b; font-weight:bold;">체내 침투 깊이 (cm)</span>
        <span style="position:absolute; left:25px; bottom:-11px; font-size:5.5px; color:#94a3b8;">0</span>
        <span style="position:absolute; left:110px; bottom:-11px; font-size:5.5px; color:#94a3b8;">5</span>
        <span style="position:absolute; left:200px; bottom:-11px; font-size:5.5px; color:#94a3b8;">10</span>
        <span style="position:absolute; right:25px; bottom:-11px; font-size:5.5px; color:#be123c; font-weight:bold;">15 (종양 표적)</span>

        <div style="position:absolute; right:15px; top:8px; bottom:0; width:40px; background:rgba(254, 205, 211, 0.6); border-left:1px solid #fda4af; border-right:1px solid #fda4af; display:flex; align-items:center; justify-content:center;">
          <span style="font-size:6.5px; font-weight:900; color:#9f1239; text-align:center;">🎯 종양<br/>(암세포)</span>
        </div>

        <svg viewBox="0 0 400 100" style="position:absolute; inset:0; width:100%; height:100%; overflow:visible;">
          <path d="M 25 12 Q 70 20, 140 45 T 260 68 T 350 82" fill="none" stroke="#16a34a" stroke-width="2" />
          <path d="M 25 82 C 90 82, 200 78, 260 74 Q 295 70, 312 10 L 320 95 L 350 98" fill="none" stroke="#2563eb" stroke-width="2.5" />
          <circle cx="312" cy="10" r="3.5" fill="#dc2626" />
        </svg>
      </div>
      <div style="display:flex; justify-content:center; gap:16px; margin-top:13px; font-size:6.5px; font-weight:bold;">
        <div style="display:flex; align-items:center; gap:3px;">
          <div style="width:12px; height:2.5px; background:#16a34a; border-radius:2px;"></div>
          <span style="color:#166534;">X-선 (표면 침투 시 고선량, 종양 깊이에서 선량 감소)</span>
        </div>
        <div style="display:flex; align-items:center; gap:3px;">
          <div style="width:12px; height:3px; background:#2563eb; border-radius:2px;"></div>
          <span style="color:#1e40af; font-weight:900;">중입자 (체표면 저선량 ➔ 종양 표적에서 브래그 피크 폭발 ➔ 직후 소멸)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- [시각 자료 3] DNA 절단 비교 카고 -->
  <div style="background:#e0e7ff; border:1px solid #c7d2fe; border-radius:5px; padding:6px; margin-bottom:6px;">
    <strong style="font-size:8px; color:#312e81; display:block; margin-bottom:3px;">🧬 [시각자료 3] 방사선 종류에 따른 DNA 절단 메커니즘 차이 (Nature 508)</strong>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:5px;">
      <div style="background:#fff; border:1px solid #cbd5e1; border-radius:4px; padding:5px;">
        <span style="font-size:7.5px; font-weight:900; color:#334155; display:block; margin-bottom:2px;">X-선 / 양성자치료</span>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:3px; text-align:center; font-size:7px; font-weight:bold; color:#c2410c; margin-bottom:3px; border-radius:3px;">
          DNA 단일 가닥 절단 (Single-Strand Break)
        </div>
        <p style="font-size:6.5px; color:#475569; margin:0; line-height:1.25;">
          에너지가 드문드문 전달되어 DNA 한쪽 가닥만 절단됨. 암세포가 스스로 DNA를 복구하여 살아남거나 재발할 가능성 잔존.
        </p>
      </div>
      <div style="background:linear-gradient(135deg, #1e1b4b, #312e81); color:#fff; border-radius:4px; padding:5px;">
        <span style="font-size:7.5px; font-weight:900; color:#fde047; display:block; margin-bottom:2px;">중입자치료 (Carbon-Ion)</span>
        <div style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); padding:3px; text-align:center; font-size:7px; font-weight:900; color:#fde047; margin-bottom:3px; border-radius:3px;">
          DNA 이중 가닥 절단 (Clustered Double-Strand Break)
        </div>
        <p style="font-size:6.5px; color:#e0e7ff; margin:0; line-height:1.25;">
          고밀도 탄소 입자가 암세포 DNA 이중 가닥을 완전히 파괴함. 암세포 자가복구 절대 불가능, 확실한 암세포 사멸!
        </p>
      </div>
    </div>
  </div>

  <div class="sec-title">2. 중입자치료 3대 핵심 장점 및 대상 암종</div>
  <table>
    <thead>
      <tr>
        <th style="width:22%;">핵심 장점</th>
        <th style="width:48%;">상세 메커니즘 및 치료 원리</th>
        <th style="width:30%;">주요 적용 암종</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:900; color:#0f2b5c;">① 난치성 암 적용 가능</td>
        <td style="text-align:left;">기존 수술이나 X-선 치료로 치료가 어려웠던 깊은 부위 및 항암제 저항성 암 파괴 가능. 세포 생물학적 살상 능력 2~3배 우수.</td>
        <td style="text-align:left; font-weight:800; color:#1e40af;">· 췌장암, 간암, 폐암<br/>· 전립선암, 두경부암<br/>· 척삭종, 육종(골육종)</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#15803d;">② 부작용 현저히 감소<br/>(브래그 피크)</td>
        <td style="text-align:left;">몸 표면에서는 방사량이 적고, 암 조직 도착 지점(Bragg Peak)에서 최대 에너지를 쏟아낸 뒤 즉시 소멸. 주변 정상 세포 손상 방지.</td>
        <td style="text-align:left;">· 정상장기 인접 암<br/>· 재발암 및 고령 환자</td>
      </tr>
      <tr>
        <td style="font-weight:900; color:#b91c1c;">③ 치료기간 대폭 단축<br/>(환자 편의성)</td>
        <td style="text-align:left;">기존 방사선치료 평균 25회(1~2개월) ➔ 중입자치료 평균 12회(3주 내외) 단축. 고령 및 경제활동 환자 삶의 질 향상.</td>
        <td style="text-align:left;">· 통원 치료 대상자<br/>· 빠른 사회복귀 필요자</td>
      </tr>
    </tbody>
  </table>

  <div class="sales-box">
    <strong style="font-size: 8.5px; display: block; margin-bottom: 3px;">💡 [설계사 셀링 포인트] 중입자치료 영업 브리핑 가이드</strong>
    1. <strong>"꿈의 암치료 중입자치료, 비급여 치료비 약 5,000만~1억 원 발생!"</strong>: 중입자치료는 건강보험 미적용 비급여 치료로 회당/코스당 고액 비용이 발생하므로, 표적항암 및 특수방사선치료비/중입자치료 특약의 사전 대비 필수 제안.<br/>
    2. <strong>"췌장암·폐암·간암 5년 생존율 획기적 향상!"</strong>: 기존 수술 불가능했던 3대 난치암(췌장암, 간암, 폐암) 및 전립선암 환자에게 완치 기회를 제공하는 최고의 치료 기술 소구.<br/>
    3. <strong>"단 12회 치료로 부작용 없이 일상 복귀"</strong>: 입원 치료 없이 통원으로 3주 내 치료 완료. 부작용이 적어 고령층 고객 및 경제활동 직장인에게 설득력 높음.
  </div>

  <div class="notes">
    * 출처: 연세암병원 중입자치료센터 공식 가이드, 보건복지부, 대한방사선종양학회, Nature 508 (133-138)
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

  const handleOpenReportPdf = (reportId: number | string) => {
    const id = Number(reportId);
    if (id === 10) {
      handleOpenHeavyIonPdfPrint();
    } else if (id === 9) {
      handleOpenStomachCancerRecurrencePdfPrint();
    } else if (id === 8) {
      handleOpenBreastCancerRecurrencePdfPrint();
    } else if (id === 7) {
      handleOpenColonCancerTreatPdfPrint();
    } else if (id === 6) {
      handleOpenInsituCancerPdfPrint();
    } else if (id === 5) {
      handleOpenAgeCancerPdfPrint();
    } else if (id === 4) {
      handleOpenCancerStatsPdfPrint();
    } else if (id === 3) {
      handleOpenBreastCancerPdfPrint();
    } else if (id === 2) {
      handleOpenDisabilityPdfPrint();
    } else {
      handleOpenPdfPrint();
    }
  };

  const getReportFilename = (reportId: number | string) => {
    const id = Number(reportId);
    if (id === 10) return '중입자치료_연세암병원_공식가이드.pdf';
    if (id === 9) return '위암_재발및전이_국가암지식정보센터.pdf';
    if (id === 8) return '유방암_재발및전이_국가암지식정보센터.pdf';
    if (id === 7) return '대장암_치료방법_국가암지식정보센터.pdf';
    if (id === 6) return '제자리암_상피내암_발생률_국가암지식정보센터.pdf';
    if (id === 5) return '연령별_암발생률_국가암지식정보센터.pdf';
    if (id === 4) return '암종별_발생현황.pdf';
    if (id === 3) return '유방암_관련_영업자료.pdf';
    if (id === 2) return '후유장해담보_필요성.pdf';
    return '2024년_사망원인통계_결과.pdf';
  };

  const handleDownload = (id: number | string, _filename?: string) => {
    const numId = Number(id);
    setDownloadCount((prev) => ({
      ...prev,
      [numId]: (prev[numId] || 0) + 1
    }));
    handleOpenReportPdf(numId);
  };

  const filteredGoods = goods.filter((good) => {
    const matchesCategory = activeTab === 'all' || good.category === activeTab;
    const matchesSearch =
      good.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      good.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      good.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedInquiryProduct(null);
      setInquiryName('');
      setInquiryPhone('');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="relative bg-[#123941] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md overflow-hidden text-white text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-[10px] font-bold border border-amber-500/30 tracking-wider uppercase mb-3">
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              영업 자료
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase break-keep leading-tight">
              영업 자료 ＆ 고객제안서
            </h2>
            <p className="text-xs md:text-sm text-slate-200 mt-2 leading-relaxed font-semibold break-keep">
              설계사 역량 강화 ＆ 고객 신뢰성을 높이기 위해 통계청 사망원인통계, 보건복지부 장애인 통계, 약관분석 등 전문 영업자료를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full text-left">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="영업자료 제목, 태그(#사망원인통계, #후유장해), 내용 등을 검색해보세요..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#123941] focus:ring-1 focus:ring-[#123941] placeholder-slate-400 shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs font-bold cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Options & Result Count */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-left">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'all', label: '전체' },
            { id: 'heavyiontherapy', label: '중입자치료' },
            { id: 'stomachcancerrecurrence', label: '위암 재발 및 전이' },
            { id: 'breastcancerrecurrence', label: '유방암 재발 및 전이' },
            { id: 'coloncancertreat', label: '대장암치료방법' },
            { id: 'insitucancer', label: '제자리암(상피내암)발생률' },
            { id: 'agecancer', label: '연령별 암발생률' },
            { id: 'cancerstats', label: '암종별발생현황' },
            { id: 'breastcancer', label: '유방암관련자료' },
            { id: 'disability', label: '후유장해담보 필요성' },
            { id: 'materials', label: '보조자료/PDF' },
            { id: 'digital', label: '엑셀/자동서식' },
            { id: 'stationery', label: '명함/서류폴더' },
            { id: 'gifts', label: '고객기념품' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Count display on right side */}
        <div className="text-xs text-slate-500 font-semibold self-end sm:self-center shrink-0">
          총 <span className="font-bold text-[#123941]">{filteredGoods.length}</span>개의 영업 자료
        </div>
      </div>

      {/* Embedded Visual Breast Cancer Recurrence & Metastasis Panel when breastcancerrecurrence tab is selected */}
      {activeTab === 'breastcancerrecurrence' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#831843] text-white text-[10px] font-black rounded-md uppercase">
                  국가암지식정보센터 · 보건복지부 · 란셋(Lancet) 임상
                </span>
                <span className="text-xs font-bold text-slate-500">공식 자료 (국립암센터 검수)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>💗 유방암 재발 및 전이 (5년 생존율 vs 10~20년 후기 재발 리포트)</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenBreastCancerRecurrencePdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#831843] hover:bg-[#6b1236] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-4 h-4 text-pink-300" />
                A4 PDF 출력/인쇄
              </button>
              <button
                onClick={() => {
                  setSelectedReportId(8);
                  setActiveReportSubTab('summary');
                  setShowReportModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-300"
              >
                <FileText className="w-4 h-4 text-[#831843]" />
                전문 리포트 보기
              </button>
            </div>
          </div>

          {/* Definition Banner */}
          <div className="p-4 bg-pink-50/80 border border-pink-200 rounded-xl text-xs leading-relaxed text-slate-800">
            <span className="font-black text-[#831843] inline-block mr-1">📌 유방암 재발 및 전이 핵심 임상 특성:</span>
            유방암은 0~2기 발견 시 5년 생존율이 <span className="font-bold text-emerald-700 underline">90% 이상으로 높으나</span>, 다른 암종과 달리 <span className="font-bold text-rose-700">치료 후 10년~20년 뒤에도 재발 및 원격 전이가 발생</span>하는 독특한 암종입니다. 전체 유방암의 70%를 차지하는 <span className="font-bold text-[#831843]">호르몬 수용체 양성 유방암</span>의 경우, 수술 후 5년 치료를 마친 뒤에도 <span className="font-bold text-rose-700">10년 재발률 14%, 15년 재발률 25%</span>에 달해 지속적인 추적관찰이 필수적입니다.
          </div>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl">
              <span className="text-xs text-emerald-800 font-bold block">0~2기 5년 생존율</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-emerald-950">90% +</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">조기 발견 시 양호한 치료 성적</span>
            </div>

            <div className="p-4 bg-pink-50/80 border border-pink-200 rounded-xl">
              <span className="text-xs text-pink-800 font-bold block">10년 후 후기 재발 비율</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-[#831843]">약 25 %</span>
              </div>
              <span className="text-[11px] text-pink-700 font-semibold mt-1 block">전체 재발 환자의 1/4이 후기 발생</span>
            </div>

            <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl">
              <span className="text-xs text-blue-800 font-bold block">호르몬 양성(70%) 15년 재발</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-blue-950">25.0 %</span>
              </div>
              <span className="text-[11px] text-blue-700 font-semibold mt-1 block">영국 Lancet 논문 (10년 14% / 15년 25%)</span>
            </div>

            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl">
              <span className="text-xs text-amber-800 font-bold block">산정특례 5년 종료 경보</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black text-amber-950">본인부담 5% 혜택 소멸</span>
              </div>
              <span className="text-[11px] text-amber-700 font-semibold mt-1 block">진료비/검사비 부담 급증으로 검사 미룸 위험</span>
            </div>
          </div>

          {/* Visual Timeline & Recurrence Rate Graph */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <span>📈 유방암 치료 후 연도별 재발 발생 타임라인 &amp; 누적 재발률 추이</span>
              </h4>
              <span className="text-[11px] font-bold text-slate-500">출처: 국가암지식정보센터 &amp; 영국 Lancet(란셋) 논문</span>
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] bg-white border border-slate-200 rounded-xl p-4 space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-800">1) 0 ~ 5년 이내 (국소 재발 집중기)</span>
                      <span className="text-pink-700">국소 재발 80~90% 발생 / 4~6개월 추적검사</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden">
                      <div className="bg-pink-500 h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#831843] font-black">2) 5 ~ 10년 (산정특례 만료 + 후기 재발 본격화) ⚠️</span>
                      <span className="text-[#831843] font-black">호르몬 양성 암 10년 누적 재발률 14%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                      <div className="bg-[#831843] h-full rounded-full transition-all duration-500" style={{ width: '56%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-blue-900">3) 10 ~ 15년 (후기 원격전이 지속 발생)</span>
                      <span className="text-blue-700 font-bold">호르몬 양성 암 15년 누적 재발률 25%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>4) 15 ~ 20년 경과 (장기 후기 원격전이 보고)</span>
                      <span>수술 후 15~20년 뒤 뒤늦은 뼈/폐/뇌 전이 확인 사례 지속 보고</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-pink-50/50 border border-pink-200 rounded-lg text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-[#831843]">💡 항호르몬 복용 10년 연장 이유:</span>
                  영국 Lancet 논문 발표 후, 5년간 항호르몬제(타목시펜, 페마라 등) 복용 후에도 10~15년에 25% 재발률이 확인되어, 현재 주요 가이드라인은 고위험군 환자에게 <strong>항호르몬제 복용 기간을 10년으로 연장 권고</strong>하고 있습니다.
                </div>
              </div>
            </div>
          </div>

          {/* Metastatic Recurrence Organ 4 Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>🩺 1. 전이성 재발 (원격 전이) 주요 발생 장기 Top 4 및 특성</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50/40 border border-pink-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-pink-200">
                  <h5 className="text-sm font-black text-[#831843] flex items-center gap-1.5">
                    <span>🦴 1위 뼈 (골) 전이 (Bone Metastasis)</span>
                  </h5>
                  <span className="px-2 py-0.5 bg-[#831843] text-white text-[10px] font-black rounded">
                    유방암 원격전이 1위
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  원격 전이 중 가장 빈번하게 발생하며, 척추, 골반, 대퇴골, 갈비뼈 등에 주로 발생합니다.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white border border-pink-100 rounded-xl space-y-1">
                    <strong className="text-[#831843] block font-bold">주요 증상 및 합병증</strong>
                    <span className="text-slate-600 text-[11px] leading-tight block">
                      극심한 뼈 통증, 병적 압박골절, 고칼슘혈증(입안 마름, 구토, 의식 저하), 척수 압박에 의한 사지 신경 마비.
                    </span>
                  </div>

                  <div className="p-2.5 bg-white border border-pink-100 rounded-xl space-y-1">
                    <strong className="text-pink-900 block font-bold">주요 치료법 &amp; 보장 연계</strong>
                    <span className="text-slate-600 text-[11px] leading-tight block">
                      방사선 치료(통증 완화 및 골절 예방), 데노수맙/조메타 뼈 보호 표적주사. 척추 골절 및 마비 발생 시 <strong>질병후유장해(3~100%) 특약</strong> 보장 대상.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                  <h5 className="text-sm font-black text-blue-950 flex items-center gap-1.5">
                    <span>🫁 2위 폐 전이 (Lung Metastasis)</span>
                  </h5>
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-black rounded">
                    원격전이 2위
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  초기에는 증상이 없다가 전이가 진행되면서 호흡기 증상이 나타납니다.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white border border-blue-100 rounded-xl space-y-1">
                    <strong className="text-blue-900 block font-bold">주요 증상 및 합병증</strong>
                    <span className="text-slate-600 text-[11px] leading-tight block">
                      지속되는 기침, 가래, 가슴 답답함, 숨참, 흉수(가슴속에 물이 차는 현상) 발생으로 호흡곤란.
                    </span>
                  </div>

                  <div className="p-2.5 bg-white border border-blue-100 rounded-xl space-y-1">
                    <strong className="text-blue-900 block font-bold">주요 치료법</strong>
                    <span className="text-slate-600 text-[11px] leading-tight block">
                      국소 단독 전이 시 폐 절제술, 전신 표적/면역항암치료 및 항암화학요법, 흉수 배액 및 흉막 고착술.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                  <h5 className="text-sm font-black text-amber-950 flex items-center gap-1.5">
                    <span>🫀 3위 간 전이 (Liver Metastasis)</span>
                  </h5>
                  <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-black rounded">
                    원격전이 3위
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  간 전이는 혈액을 통해 암세포가 이행하여 발생하며, 전신 치료가 중심이 됩니다.
                </p>

                <div className="p-3 bg-white border border-amber-200 rounded-xl space-y-1.5 text-xs">
                  <strong className="text-amber-950 font-black block">주요 증상 &amp; 치료법</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    우상복부 통증, 팽만감, 황달, 복수, 간기능 저하. 전신 표적항암제(허셉틴, 버제니오, 엔허투 등) 치료 및 조건 충족 시 간 절제술 또는 고주파 열치료(RFA) 병행.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h5 className="text-sm font-black text-slate-950 flex items-center gap-1.5">
                    <span>🧠 4위 중추신경계 / 뇌 전이 (Brain)</span>
                  </h5>
                  <span className="px-2 py-0.5 bg-slate-700 text-white text-[10px] font-black rounded">
                    원격전이 4위
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  뇌혈관장벽(BBB)으로 인해 일반 항암제의 접근이 제한적이어 방사선 수술이 핵심.
                </p>

                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 text-xs">
                  <strong className="text-slate-900 font-black block">주요 증상 &amp; 방사선수술 특약</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    심한 두통, 아침 구토, 어지럼증, 언어 장애, 사지 마비. <strong>감마나이프 / 사이버나이프 정밀 방사선수술</strong> 시행. 감마나이프 방사선 수술비 특약 소구.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>📊 2. 유방암 재발 형태 비교 (국소 재발 vs 전이성 재발 / 원격 전이)</span>
            </h4>

            <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-2.5 w-1/5">구분</th>
                    <th className="p-2.5 w-2/5">국소 재발 (Local Recurrence)</th>
                    <th className="p-2.5 w-2/5">전이성 재발 (Metastatic Recurrence)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  <tr>
                    <td className="p-2.5 font-bold text-[#831843]">발생 부위</td>
                    <td className="p-2.5">수술했던 유방 잔여 조직, 수술 흉터, 피부, 동측 림프절</td>
                    <td className="p-2.5 font-bold text-rose-700">유방 외 타 장기 (뼈 1위 &gt; 폐 &gt; 간 &gt; 중추신경계/뇌)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#831843]">발생 시기</td>
                    <td className="p-2.5">80~90%가 치료 후 5년 이내 집중 발생</td>
                    <td className="p-2.5 font-bold text-blue-900">5년 이후 10년~20년 뒤에도 지속 발생 (후기 재발 25%)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#831843]">치료 방법</td>
                    <td className="p-2.5">외과적 절제 수술, 방사선 치료, 항암/항호르몬 요법</td>
                    <td className="p-2.5">표적항암제(허셉틴/엔허투), 방사선수술(뼈/뇌), 전신 치료</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#831843]">보장 핵심</td>
                    <td className="p-2.5 font-semibold text-emerald-800">수술 성공 시 완치 기대 ➔ 재진단암 특약 보장</td>
                    <td className="p-2.5 font-semibold text-rose-800">장기 치료 ➔ 고액 암진단비 &amp; 질병후유장해(3~100%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="p-4 bg-amber-50/90 border border-amber-300 rounded-2xl space-y-2">
            <h4 className="text-sm font-black text-amber-950 flex items-center gap-1.5">
              <span>⚠️ [보험 소비자 및 환자 경고] 암 산정특례 5년 종료에 따른 의료비 공백 이슈</span>
            </h4>
            <p className="text-xs text-slate-800 leading-relaxed">
              암 환자 등록 후 <strong>5년이 지나면 중증질환 산정특례 혜택(본인부담금 5%)이 만료</strong>됩니다. 5년 경과 후 환자가 지불해야 하는 PET-CT, MRI, 뼈스캔, 초음파 검사비 및 약제비 부담이 이전 대비 <strong>20배(본인부담 5% ➔ 20~100%) 급증</strong>합니다. 이로 인해 경제적 부담으로 검사를 소홀히 하거나 연기하다가 <strong>10~15년 후 뒤늦게 뼈전이·뇌전이를 발견하는 위험성</strong>이 매우 큽니다.
            </p>
          </div>

          {/* Sales Briefing Points */}
          <div className="p-4 bg-pink-50/80 border border-pink-200 rounded-xl space-y-2 text-slate-800">
            <h4 className="text-sm font-black text-[#831843] flex items-center gap-1.5">
              <span>💡 [설계사 셀링 포인트] 유방암 재발·전이 영업 브리핑 가이드</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed mt-2">
              <div className="bg-white p-3 rounded-lg border border-pink-100 shadow-2xs space-y-1">
                <span className="font-bold text-[#831843] block">1. 5년 지나도 안심 불가! (재진단암)</span>
                <p className="text-slate-600 text-[11px]">
                  호르몬 양성 유방암(70%)은 10~15년 뒤 후기 재발률이 25%에 달합니다! 1회성 암진단비에 그치지 않고, 10~20년 장기 반복 보장되는 재진단암 / 암재발 특약 가입을 적극 제안하세요.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-pink-100 shadow-2xs space-y-1">
                <span className="font-bold text-rose-700 block">2. 산정특례 5년 종료 후 검사비 공백</span>
                <p className="text-slate-600 text-[11px]">
                  5년 지난 후 본인부담 5% 혜택이 소멸되면 고가 PET-CT/MRI/뼈스캔 검사비 부담이 폭증합니다. 환자가 부담 없이 매년 추적검사를 받도록 충분한 진단비와 검사비 특약을 준비하도록 소구하세요.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-pink-100 shadow-2xs space-y-1">
                <span className="font-bold text-blue-700 block">3. 뼈·뇌전이 마비 &amp; 질병후유장해</span>
                <p className="text-slate-600 text-[11px]">
                  원격전이 1위인 뼈 전이 시 척추 압박골절, 뇌 전이 시 신경 마비 장애가 오므로, 질병후유장해(3~100%) 특약과 감마나이프 방사선수술 특약을 패키지로 설계하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Visual Colon Cancer Treatment Panel when coloncancertreat tab is selected */}
      {activeTab === 'coloncancertreat' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#123941] text-white text-[10px] font-black rounded-md uppercase">
                  국가암지식정보센터 · 보건복지부
                </span>
                <span className="text-xs font-bold text-slate-500">치료 지침 (대한암학회·대한대장항문학회)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>🩺 대장암 치료방법 완벽 가이드 (내시경·수술·항암·방사선)</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenColonCancerTreatPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                A4 PDF 출력/인쇄
              </button>
              <button
                onClick={() => {
                  setSelectedReportId(7);
                  setActiveReportSubTab('summary');
                  setShowReportModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-300"
              >
                <FileText className="w-4 h-4 text-[#123941]" />
                전문 리포트 보기
              </button>
            </div>
          </div>

          {/* Core Decision Banner */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs leading-relaxed text-slate-800">
            <span className="font-black text-[#123941] inline-block mr-1">💡 대장암 치료방법 결정 핵심 기준:</span>
            대장암의 치료법을 결정하는 데서 가장 중요한 것은 <span className="font-bold text-emerald-800 underline">종양의 크기가 아니라 암세포가 조직을 침투한 정도(침윤도)</span>입니다. 대개 수술, 항암화학요법, 방사선치료를 적절히 병행합니다.
          </div>

          {/* Visual Treatment Decision Matrix Flowchart */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span>🔄 대장암 병기 및 침윤도별 최적 치료 경로 (Treatment Decision Flow)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3.5 bg-white border border-teal-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-black rounded">Step 1</span>
                  <span className="text-[10px] font-bold text-teal-600">조기 대장암</span>
                </div>
                <strong className="text-xs font-black text-slate-900 block">내시경적 절제술</strong>
                <p className="text-[11px] text-slate-600 leading-normal">
                  암세포가 점막 또는 점막하층 일부에만 국한되고 분화도가 좋은 경우 내시경 용종절제술 시행.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-blue-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded">Step 2</span>
                  <span className="text-[10px] font-bold text-blue-600">국소 침윤 암</span>
                </div>
                <strong className="text-xs font-black text-slate-900 block">수술적 절제술</strong>
                <p className="text-[11px] text-slate-600 leading-normal">
                  근육층 이상 침윤 시 광범위 결장절제술 또는 저위전방절제술 시행 (주변 림프절 함께 적출).
                </p>
              </div>

              <div className="p-3.5 bg-white border border-amber-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-black rounded">Step 3</span>
                  <span className="text-[10px] font-bold text-amber-600">2~3기 진행성 암</span>
                </div>
                <strong className="text-xs font-black text-slate-900 block">수술 + 항암/방사선</strong>
                <p className="text-[11px] text-slate-600 leading-normal">
                  직장암의 경우 수술 전 방사선/항암(TNT)으로 크기를 줄인 후 수술 시행 (항문 괄약근 보존).
                </p>
              </div>

              <div className="p-3.5 bg-white border border-rose-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-black rounded">Step 4</span>
                  <span className="text-[10px] font-bold text-rose-600">4기 / 전이성 암</span>
                </div>
                <strong className="text-xs font-black text-slate-900 block">표적 / 면역 항암치료</strong>
                <p className="text-[11px] text-slate-600 leading-normal">
                  간/폐 전이 시 선행 항암으로 크기 축소 후 절제, 또는 표적제(아바스틴/얼비툭스) 및 면역제(키트루다) 투여.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 & 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* 1. Endoscopic Resection Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <span>🔬 1. 내시경적 절제술 (Endoscopic Resection)</span>
                </h4>
                <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-bold rounded">조기암 적응</span>
              </div>
              
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong>적응증:</strong> 암세포 분화도가 우수하고, 혈관이나 림프관을 침범하지 않으며, 점막 또는 점막하층 일부에만 국한된 조기 대장암.
                </p>
                
                {/* SVG Snare Resection Procedure Diagram */}
                <div className="bg-white p-3 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[11px] font-bold text-[#123941] block">📌 내시경적 용종절제술(Snare Resection) 4단계 절차</span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                      <span className="font-black text-slate-800 block">A. 병변 발견</span>
                      <span className="text-slate-500 block">내시경 관찰</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                      <span className="font-black text-teal-700 block">B. 스네어 포획</span>
                      <span className="text-slate-500 block">올가미 조이기</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                      <span className="font-black text-blue-700 block">C. 고주파 절단</span>
                      <span className="text-slate-500 block">전류 통전 절제</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                      <span className="font-black text-emerald-700 block">D. 병변 회수</span>
                      <span className="text-slate-500 block">조직검사 의뢰</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-900 font-medium">
                  ⚠️ 절단면 검사 결과 암세포 잔류, 림프관 침범, 분화도 불량 시 <strong>추가 수술적 절제</strong>가 필요하며, 시술 후 정기 내시경 추적검사가 필수입니다.
                </div>
              </div>
            </div>

            {/* 2. Surgical Resection Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <span>🔪 2. 수술적 절제 (결장암 vs 직장암)</span>
                </h4>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">근본 치료법</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Colon Cancer */}
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl space-y-1">
                    <strong className="text-xs font-black text-[#123941] block">[결장암 수술법]</strong>
                    <ul className="text-[11px] space-y-1 text-slate-600 list-disc list-inside">
                      <li><strong>우측 결장절제술:</strong> 맹장/상행결장 암 ➔ 회장결장문합술</li>
                      <li><strong>횡행 결장절제술:</strong> 횡행결장 중앙부 암 절제</li>
                      <li><strong>좌측 결장절제술:</strong> 하행결장 암 절제 후 문합</li>
                      <li><strong>전방절제술:</strong> 에스결장 암 절제 후 문합</li>
                    </ul>
                  </div>

                  {/* Rectal Cancer */}
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl space-y-1">
                    <strong className="text-xs font-black text-[#123941] block">[직장암 수술법]</strong>
                    <ul className="text-[11px] space-y-1 text-slate-600 list-disc list-inside">
                      <li><strong>조기 직장암:</strong> 항문관 12cm 이내 국소절제술</li>
                      <li><strong>상부/중간부:</strong> 저위전방절제술 (괄약근 보존)</li>
                      <li className="text-rose-700 font-bold"><strong>하부 직장(3~5cm):</strong> 복회음절제술 (영구 인공항문/장루 조성)</li>
                    </ul>
                  </div>
                </div>

                <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-[11px] text-blue-900 font-medium flex items-center justify-between">
                  <span>💡 최근 최소침습 수술(복강경, 로봇수술) 비율이 급증하여 회복이 빠르고 통증이 대폭 감소했습니다.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 & 4 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* 3. Chemotherapy Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <span>💊 3. 항암화학요법 및 표적·면역치료제</span>
                </h4>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">최신 정밀치료</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 text-[11px] block">세포독성 항암제</span>
                    <p className="text-[10.5px] text-slate-600">
                      5-FU, 카페시타빈(젤로다), 옥살리플라틴, 이리노테칸, 론서프 (수술 후 보조항암 6개월)
                    </p>
                  </div>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-teal-800 text-[11px] block">표적치료제</span>
                    <p className="text-[10.5px] text-slate-600">
                      베바시주맙(아바스틴), 세툭시맙(얼비툭스), 엔코라페닙(브라프토비), 엔허투
                    </p>
                  </div>
                  <div className="p-2.5 bg-white border border-emerald-200 rounded-xl space-y-1 bg-emerald-50/50">
                    <span className="font-bold text-emerald-900 text-[11px] block">면역항암제</span>
                    <p className="text-[10.5px] text-emerald-800 font-medium">
                      키트루다, 옵디보, 젬퍼리 (MSI-H/dMMR 유전자 변이 대상)
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-100/60 border border-emerald-300 rounded-xl text-[11px] text-emerald-950 space-y-1">
                  <strong className="font-black block text-emerald-900">🌟 [혁신 기술] 수술 전 선행면역치료 (Neoadjuvant Watch & Wait)</strong>
                  <p>
                    dMMR/MSI-H 직장암 환자에게 수술 전 젬퍼리/키트루다 투여시 <span className="font-black text-rose-700">완전관해율(cCR) 90~100% 달성!</span> 수술 없이 항문을 완벽하게 보존하는 비수술적 치료법 가능.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Radiation Therapy Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <span>⚡ 4. 방사선치료 (Radiation) & TNT 요법</span>
                </h4>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">직장암 필수</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong>적응증:</strong> 국소 재발 가능성이 높은 2~3기 진행성 직장암. 수술 전/후 총 25~30회 시행하여 국소 재발률을 대폭 낮춥니다.
                </p>

                <div className="p-3 bg-white border border-amber-200 rounded-xl space-y-1.5">
                  <strong className="text-xs font-black text-amber-900 block">💡 전체수술전치료 (Total Neoadjuvant Therapy; TNT)</strong>
                  <p className="text-[11px] text-slate-600">
                    수술 전에 방사선 치료와 항암화학요법을 모두 완료하는 치료 전략으로, 종양의 크기를 극대화하여 줄이고 항문 괄약근 보존 확률을 획기적으로 향상시킵니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Strategy Guide */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2 text-slate-800">
            <h4 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
              <span>💡 [설계사 셀링 포인트] 대장암 보장 대면 상담 가이드</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed mt-2">
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-[#123941] block">1. 표적/면역항암 특약 필수 준비</span>
                <p className="text-slate-600 text-[11px]">
                  아바스틴, 얼비툭스, 엔허투, 키트루다 등 고가 비급여 항암제 사용 비율이 높아졌습니다. 고액의 표적/면역항암약물치료비 특약을 사전 보강 제안하세요.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-rose-700 block">2. 인공항문(장루) 수술비 & 장애 특약</span>
                <p className="text-slate-600 text-[11px]">
                  하부 직장암(항문 3~5cm) 환자는 복회음절제술 시행 시 영구 인공항문(장루)을 조성해야 하므로 장루 형성 수술비 및 질병후유장해 특약 가입 소구가 효과적입니다.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-blue-700 block">3. 대장 내시경 용종절제 & D01 유사암</span>
                <p className="text-slate-600 text-[11px]">
                  건강검진시 대장 용종(선종) 절제 및 조직검사 결과 상피내암(D01) 판정이 빈번하므로, 질병수술비 및 유사암 진단비를 꼼꼼히 체크해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Visual In-situ Cancer Statistics Panel when insitucancer tab is selected */}
      {activeTab === 'insitucancer' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#123941] text-white text-[10px] font-black rounded-md uppercase">
                  국가암지식정보센터 · 보건복지부
                </span>
                <span className="text-xs font-bold text-slate-500">2023년 국가암통계 (2026년 1월 최종수정)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>🧬 제자리암(상피내암) 발생률 및 주요 암종별 현황</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenInsituCancerPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                A4 PDF 출력/인쇄
              </button>
              <button
                onClick={() => {
                  setSelectedReportId(6);
                  setActiveReportSubTab('summary');
                  setShowReportModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-300"
              >
                <FileText className="w-4 h-4 text-[#123941]" />
                전문 리포트 보기
              </button>
            </div>
          </div>

          {/* Definition Banner */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs leading-relaxed text-slate-700">
            <span className="font-bold text-[#123941] inline-block mr-1">📌 상피내암(제자리암) 정의:</span>
            암이 <span className="font-bold text-blue-700">원발 장소(상피층)</span>에 머무르면서 다른 조직층으로의 <span className="font-bold text-rose-700">침윤</span> 및 악성의 행태를 보이지 않는 단계 혹은 그러한 성질을 가지는 경우의 암입니다. (질병코드 D00~D09 / 제자리암).
          </div>

          {/* KPI Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
              <span className="text-xs text-teal-800 font-bold block">2023년 총 제자리암 발생자수</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-[#123941]">38,204 명</span>
              </div>
              <span className="text-[11px] text-teal-700 font-semibold mt-1 block">남자 12,219명 / 여자 25,985명 (여성이 2.1배)</span>
            </div>

            <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
              <span className="text-xs text-rose-800 font-bold block">상피내암 조발생률 (인구 10만명당)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-rose-950">74.7 명</span>
              </div>
              <span className="text-[11px] text-rose-700 font-semibold mt-1 block">남자 48.0명 / 여자 101.2명 (여성 10만명당 100명 돌파)</span>
            </div>

            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
              <span className="text-xs text-amber-800 font-bold block">1999년 대비 발생 폭증률</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-amber-950">10.6 배 (962.7%↑)</span>
              </div>
              <span className="text-[11px] text-amber-700 font-semibold mt-1 block">1999년 3,595명 ➔ 2023년 38,204명 급증</span>
            </div>
          </div>

          {/* 1. Interactive Trend Chart (1999 ~ 2023) */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <span>📈 상피내암 발생자수 연도별 추이 (1999년 ~ 2023년)</span>
              </h4>
              <div className="flex items-center gap-3 text-[11px] font-bold">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#123941]"></span> 남녀전체</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> 남자</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> 여자</span>
              </div>
            </div>

            {/* SVG Visual Graph */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] h-[180px] bg-white border border-slate-200 rounded-lg p-3 relative">
                <svg viewBox="0 0 600 150" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="580" y2="20" stroke="#f1f5f9" strokeWidth="1"/>
                  <line x1="40" y1="50" x2="580" y2="50" stroke="#f1f5f9" strokeWidth="1"/>
                  <line x1="40" y1="80" x2="580" y2="80" stroke="#f1f5f9" strokeWidth="1"/>
                  <line x1="40" y1="110" x2="580" y2="110" stroke="#f1f5f9" strokeWidth="1"/>
                  <line x1="40" y1="130" x2="580" y2="130" stroke="#cbd5e1" strokeWidth="1"/>

                  {/* Y-axis Labels */}
                  <text x="35" y="23" fontSize="9" fill="#94a3b8" textAnchor="end">4만</text>
                  <text x="35" y="53" fontSize="9" fill="#94a3b8" textAnchor="end">3만</text>
                  <text x="35" y="83" fontSize="9" fill="#94a3b8" textAnchor="end">2만</text>
                  <text x="35" y="113" fontSize="9" fill="#94a3b8" textAnchor="end">1만</text>
                  <text x="35" y="133" fontSize="9" fill="#94a3b8" textAnchor="end">0</text>

                  {/* X-axis Labels */}
                  <text x="60" y="145" fontSize="9" fill="#64748b" textAnchor="middle">1999</text>
                  <text x="125" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2011</text>
                  <text x="190" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2017</text>
                  <text x="255" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2018</text>
                  <text x="320" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2019</text>
                  <text x="385" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2020</text>
                  <text x="450" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2021</text>
                  <text x="515" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2022</text>
                  <text x="565" y="145" fontSize="9" fill="#123941" fontWeight="bold" textAnchor="middle">2023</text>

                  {/* Line: Total */}
                  <polyline fill="none" stroke="#123941" strokeWidth="2.5" points="
                    60,120 125,90 190,57 255,53 320,47 385,49 450,34 515,31 565,25
                  " />

                  {/* Line: Male */}
                  <polyline fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3,3" points="
                    60,129 125,120 190,106 255,104 320,102 385,103 450,100 515,99 565,96
                  " />

                  {/* Line: Female */}
                  <polyline fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="3,3" points="
                    60,120 125,99 190,81 255,79 320,74 385,75 450,64 515,62 565,58
                  " />

                  {/* End Data Circles */}
                  <circle cx="565" cy="25" r="4" fill="#123941" />
                  <circle cx="565" cy="96" r="3.5" fill="#2563eb" />
                  <circle cx="565" cy="58" r="3.5" fill="#e11d48" />

                  {/* Callout box for 10.6x growth */}
                  <rect x="420" y="8" width="130" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
                  <text x="485" y="21" fontSize="9" fill="#b45309" fontWeight="bold" textAnchor="middle">⚡ 1999년 대비 10.6배 폭증!</text>
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Detailed Trend Table (1999~2023) */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800">📊 연도별 상피내암 발생자수, 조발생률, 연령표준화발생률 추이 (1999~2023)</h4>
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="py-2.5 px-2 border-r border-slate-200">구분</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">성별</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">1999년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2011년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2017년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2018년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2019년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2020년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2021년</th>
                    <th className="py-2.5 px-2 border-r border-slate-200">2022년</th>
                    <th className="py-2.5 px-2 bg-teal-50 text-[#123941] font-black">2023년</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 font-medium">
                    <td rowSpan={3} className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200 text-slate-900">발생자수<br/>(명)</td>
                    <td className="py-2 px-2 border-r border-slate-200 font-bold">남녀전체</td>
                    <td className="py-2 px-2 border-r border-slate-200">3,595</td>
                    <td className="py-2 px-2 border-r border-slate-200">14,645</td>
                    <td className="py-2 px-2 border-r border-slate-200">26,596</td>
                    <td className="py-2 px-2 border-r border-slate-200">27,979</td>
                    <td className="py-2 px-2 border-r border-slate-200">30,212</td>
                    <td className="py-2 px-2 border-r border-slate-200">29,507</td>
                    <td className="py-2 px-2 border-r border-slate-200">34,736</td>
                    <td className="py-2 px-2 border-r border-slate-200">35,859</td>
                    <td className="py-2 px-2 bg-teal-50/50 font-black text-[#123941]">38,204</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-2 border-r border-slate-200 text-blue-700 font-bold">남자</td>
                    <td className="py-2 px-2 border-r border-slate-200">120</td>
                    <td className="py-2 px-2 border-r border-slate-200">3,381</td>
                    <td className="py-2 px-2 border-r border-slate-200">8,660</td>
                    <td className="py-2 px-2 border-r border-slate-200">9,419</td>
                    <td className="py-2 px-2 border-r border-slate-200">10,013</td>
                    <td className="py-2 px-2 border-r border-slate-200">9,715</td>
                    <td className="py-2 px-2 border-r border-slate-200">11,008</td>
                    <td className="py-2 px-2 border-r border-slate-200">11,391</td>
                    <td className="py-2 px-2 bg-teal-50/50 font-bold text-blue-800">12,219</td>
                  </tr>
                  <tr className="bg-rose-50/30 hover:bg-rose-50/60">
                    <td className="py-2 px-2 border-r border-slate-200 text-rose-700 font-bold">여자</td>
                    <td className="py-2 px-2 border-r border-slate-200">3,475</td>
                    <td className="py-2 px-2 border-r border-slate-200">11,264</td>
                    <td className="py-2 px-2 border-r border-slate-200">17,936</td>
                    <td className="py-2 px-2 border-r border-slate-200">18,560</td>
                    <td className="py-2 px-2 border-r border-slate-200">20,199</td>
                    <td className="py-2 px-2 border-r border-slate-200">19,792</td>
                    <td className="py-2 px-2 border-r border-slate-200">23,728</td>
                    <td className="py-2 px-2 border-r border-slate-200">24,468</td>
                    <td className="py-2 px-2 bg-rose-100/50 font-black text-rose-800">25,985</td>
                  </tr>

                  <tr className="hover:bg-slate-50 border-t-2 border-slate-200 font-medium">
                    <td rowSpan={3} className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200 text-slate-900">조발생률<br/>(10만명당)</td>
                    <td className="py-2 px-2 border-r border-slate-200 font-bold">남녀전체</td>
                    <td className="py-2 px-2 border-r border-slate-200">7.6</td>
                    <td className="py-2 px-2 border-r border-slate-200">29.2</td>
                    <td className="py-2 px-2 border-r border-slate-200">51.9</td>
                    <td className="py-2 px-2 border-r border-slate-200">54.5</td>
                    <td className="py-2 px-2 border-r border-slate-200">58.8</td>
                    <td className="py-2 px-2 border-r border-slate-200">57.5</td>
                    <td className="py-2 px-2 border-r border-slate-200">67.7</td>
                    <td className="py-2 px-2 border-r border-slate-200">70.0</td>
                    <td className="py-2 px-2 bg-teal-50/50 font-black text-[#123941]">74.7</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-2 border-r border-slate-200 text-blue-700 font-bold">남자</td>
                    <td className="py-2 px-2 border-r border-slate-200">0.5</td>
                    <td className="py-2 px-2 border-r border-slate-200">13.5</td>
                    <td className="py-2 px-2 border-r border-slate-200">33.9</td>
                    <td className="py-2 px-2 border-r border-slate-200">36.8</td>
                    <td className="py-2 px-2 border-r border-slate-200">39.1</td>
                    <td className="py-2 px-2 border-r border-slate-200">37.9</td>
                    <td className="py-2 px-2 border-r border-slate-200">43.0</td>
                    <td className="py-2 px-2 border-r border-slate-200">44.6</td>
                    <td className="py-2 px-2 bg-teal-50/50 font-bold text-blue-800">48.0</td>
                  </tr>
                  <tr className="bg-rose-50/30 hover:bg-rose-50/60">
                    <td className="py-2 px-2 border-r border-slate-200 text-rose-700 font-bold">여자</td>
                    <td className="py-2 px-2 border-r border-slate-200">14.8</td>
                    <td className="py-2 px-2 border-r border-slate-200">45.0</td>
                    <td className="py-2 px-2 border-r border-slate-200">69.9</td>
                    <td className="py-2 px-2 border-r border-slate-200">72.2</td>
                    <td className="py-2 px-2 border-r border-slate-200">78.5</td>
                    <td className="py-2 px-2 border-r border-slate-200">76.9</td>
                    <td className="py-2 px-2 border-r border-slate-200">92.2</td>
                    <td className="py-2 px-2 border-r border-slate-200">95.1</td>
                    <td className="py-2 px-2 bg-rose-100/50 font-black text-rose-800">101.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Major In-situ Cancers by Gender (2023) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left: Overall Top 5 */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800 flex items-center justify-between">
                <span>🏆 2023년 남녀 전체 상피내암 Top 5</span>
                <span className="text-xs text-slate-500 font-normal">총 38,204명 기준</span>
              </h4>
              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                <table className="w-full text-xs text-center border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-2 px-2">순위</th>
                      <th className="py-2 px-2 text-left">상피내암 암종</th>
                      <th className="py-2 px-2">발생자수</th>
                      <th className="py-2 px-2">분율 (%)</th>
                      <th className="py-2 px-2">조발생률</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-rose-50/40 font-bold text-rose-900">
                      <td className="py-2 px-2">1위</td>
                      <td className="py-2 px-2 text-left">자궁경부암</td>
                      <td className="py-2 px-2 font-black">11,202명</td>
                      <td className="py-2 px-2 font-black">29.3%</td>
                      <td className="py-2 px-2">21.9</td>
                    </tr>
                    <tr className="bg-blue-50/30 font-bold text-blue-900">
                      <td className="py-2 px-2">2위</td>
                      <td className="py-2 px-2 text-left">대장암</td>
                      <td className="py-2 px-2 font-black">8,540명</td>
                      <td className="py-2 px-2 font-black">22.4%</td>
                      <td className="py-2 px-2">16.7</td>
                    </tr>
                    <tr className="bg-rose-50/40 font-bold text-rose-900">
                      <td className="py-2 px-2">3위</td>
                      <td className="py-2 px-2 text-left">유방암</td>
                      <td className="py-2 px-2 font-black">7,032명</td>
                      <td className="py-2 px-2 font-black">18.4%</td>
                      <td className="py-2 px-2">13.7</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2">4위</td>
                      <td className="py-2 px-2 text-left font-medium">방광암</td>
                      <td className="py-2 px-2 font-bold">3,216명</td>
                      <td className="py-2 px-2 font-bold">8.4%</td>
                      <td className="py-2 px-2">6.3</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2">5위</td>
                      <td className="py-2 px-2 text-left font-medium">위암</td>
                      <td className="py-2 px-2 font-bold">2,719명</td>
                      <td className="py-2 px-2 font-bold">7.1%</td>
                      <td className="py-2 px-2">5.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Gender Specific Ranking */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">👥 성별 주요 상피내암 순위 (2023)</h4>
              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                <table className="w-full text-xs text-center border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-2 px-2">성별</th>
                      <th className="py-2 px-2">순위</th>
                      <th className="py-2 px-2 text-left">암종</th>
                      <th className="py-2 px-2">발생자수</th>
                      <th className="py-2 px-2">분율 (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-blue-50/50 text-blue-900 font-bold">
                      <td rowSpan={3} className="py-2 px-2 border-r border-slate-200 text-blue-800">남자<br/>(12,219명)</td>
                      <td className="py-2 px-2">1위</td>
                      <td className="py-2 px-2 text-left font-black">대장암</td>
                      <td className="py-2 px-2">5,378명</td>
                      <td className="py-2 px-2 font-black text-blue-700">44.0%</td>
                    </tr>
                    <tr className="bg-blue-50/30 text-blue-900">
                      <td className="py-2 px-2">2위</td>
                      <td className="py-2 px-2 text-left font-medium">방광암</td>
                      <td className="py-2 px-2">2,654명</td>
                      <td className="py-2 px-2 font-bold">21.7%</td>
                    </tr>
                    <tr className="bg-blue-50/30 text-blue-900">
                      <td className="py-2 px-2">3위</td>
                      <td className="py-2 px-2 text-left font-medium">위암</td>
                      <td className="py-2 px-2">1,947명</td>
                      <td className="py-2 px-2 font-bold">15.9%</td>
                    </tr>

                    <tr className="bg-rose-50/60 text-rose-900 font-bold border-t-2 border-slate-200">
                      <td rowSpan={5} className="py-2 px-2 border-r border-slate-200 text-rose-800">여자<br/>(25,985명)</td>
                      <td className="py-2 px-2">1위</td>
                      <td className="py-2 px-2 text-left font-black">자궁경부암</td>
                      <td className="py-2 px-2">11,202명</td>
                      <td className="py-2 px-2 font-black text-rose-700">43.1%</td>
                    </tr>
                    <tr className="bg-rose-50/40 text-rose-900 font-bold">
                      <td className="py-2 px-2">2위</td>
                      <td className="py-2 px-2 text-left font-black">유방암</td>
                      <td className="py-2 px-2">7,018명</td>
                      <td className="py-2 px-2 font-black text-rose-700">27.0%</td>
                    </tr>
                    <tr className="bg-rose-50/20 text-rose-900">
                      <td className="py-2 px-2">3위</td>
                      <td className="py-2 px-2 text-left font-medium">대장암</td>
                      <td className="py-2 px-2">3,162명</td>
                      <td className="py-2 px-2 font-bold">12.2%</td>
                    </tr>
                    <tr className="bg-rose-50/20 text-rose-900">
                      <td className="py-2 px-2">4위</td>
                      <td className="py-2 px-2 text-left font-medium">피부암</td>
                      <td className="py-2 px-2">1,177명</td>
                      <td className="py-2 px-2 font-bold">4.5%</td>
                    </tr>
                    <tr className="bg-rose-50/20 text-rose-900">
                      <td className="py-2 px-2">5위</td>
                      <td className="py-2 px-2 text-left font-medium">위암</td>
                      <td className="py-2 px-2">772명</td>
                      <td className="py-2 px-2 font-bold">3.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4. Sales Strategy & Briefing Guide */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2 text-slate-800">
            <h4 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
              <span>💡 [설계사 셀링 포인트] 제자리암(유사암) 보장 대면 상담 가이드</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed mt-2">
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-[#123941] block">1. 1999년 대비 10.6배 폭증!</span>
                <p className="text-slate-600 text-[11px]">
                  초기 건강검진 및 내시경 기술 발달로 제자리암(상피내암) 발견자가 38,204명으로 폭증했습니다. 일반암 대비 삭감되는 유사암 진단비 한도를 집중점검할 타이밍입니다.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-rose-700 block">2. 여성 타겟 (자궁경부 43.1% + 유방 27.0%)</span>
                <p className="text-slate-600 text-[11px]">
                  여성 제자리암의 무려 70.1%가 자궁경부 및 유방암입니다. 20~40대 여성 검진 증가에 따른 자궁경부 제자리암 및 유방 제자리암 진단비/수술비 가입 필수 소구.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs space-y-1">
                <span className="font-bold text-blue-700 block">3. 남성 타겟 (대장 44.0% + 방광 21.7%)</span>
                <p className="text-slate-600 text-[11px]">
                  남성 제자리암의 65.7%가 대장 및 방광 암종입니다. 대장 내시경 용종(선종) 절제 후 조직검사 시 제자리암(D01) 확정 사례가 매우 많으므로 용종절제 특약 및 제자리암 보장 강조.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Visual Age Group Cancer Statistics Panel when agecancer tab is selected */}
      {activeTab === 'agecancer' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#123941] text-white text-[10px] font-black rounded-md uppercase">
                  국가암지식정보센터 · 보건복지부
                </span>
                <span className="text-xs font-bold text-slate-500">2023년 국가암통계 (2026년 1월 최종수정)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>📈 연령군별 암발생률 및 연령대별 주요 발생 암종</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenAgeCancerPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                A4 PDF 출력/인쇄
              </button>
              <button
                onClick={() => {
                  setSelectedReportId(5);
                  setShowReportModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#cb9f74] hover:bg-[#b88c61] text-slate-950 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                전문 리포트 보기
              </button>
            </div>
          </div>

          {/* Top Key Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-xl">
              <span className="text-xs text-teal-800 font-bold block">60세 이상 암발생률 (고위험군)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-[#123941]">10만명당 1,021.2 명</span>
              </div>
              <span className="text-[11px] text-teal-700 font-semibold mt-1 block">고령화에 따른 자연적 암발생 급증</span>
            </div>
            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
              <span className="text-xs text-blue-800 font-bold block">50대 남녀 암발생률 역전 지점</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-blue-950">50대 후반 남성 역전</span>
              </div>
              <span className="text-[11px] text-blue-700 font-semibold mt-1 block">50대 초반까지 여자 &gt; 50대 후반부터 남자 &gt; 여자</span>
            </div>
            <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl">
              <span className="text-xs text-rose-800 font-bold block">조발생률 최고 연령군 (80세 이상)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-rose-950">10만명당 1,867.1 명</span>
              </div>
              <span className="text-[11px] text-rose-700 font-semibold mt-1 block">80세 이상 남성 10만명당 2,930.2명 발병</span>
            </div>
          </div>

          {/* Graph Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>📊 연령군별 암발생률 추이 그래프 (조발생률, 단위: 명/10만 명, 2023년)</span>
              <span className="text-[11px] font-semibold text-slate-500">출처: 국가암지식정보센터</span>
            </h4>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <svg viewBox="0 0 500 160" className="w-full h-auto max-h-[220px]">
                {/* Background Grid */}
                <line x1="40" y1="20" x2="480" y2="20" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="40" y1="50" x2="480" y2="50" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="40" y1="80" x2="480" y2="80" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="40" y1="110" x2="480" y2="110" stroke="#cbd5e1" strokeWidth="1"/>
                
                {/* Y-Axis Labels */}
                <text x="35" y="23" fontSize="7" fill="#64748b" textAnchor="end">3,000</text>
                <text x="35" y="53" fontSize="7" fill="#64748b" textAnchor="end">2,000</text>
                <text x="35" y="83" fontSize="7" fill="#64748b" textAnchor="end">1,000</text>
                <text x="35" y="113" fontSize="7" fill="#64748b" textAnchor="end">0</text>

                {/* X-Axis Labels */}
                <text x="50" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">0-9세</text>
                <text x="100" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">10-19세</text>
                <text x="150" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">20-29세</text>
                <text x="200" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">30-39세</text>
                <text x="250" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">40-49세</text>
                <text x="300" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">50-59세</text>
                <text x="350" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">60-69세</text>
                <text x="400" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">70-79세</text>
                <text x="450" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">80세이상</text>

                {/* Polyline: Total (Purple) */}
                <polyline fill="none" stroke="#8b5cf6" strokeWidth="2.5" points="
                  50,109.5 100,109.4 150,107.5 200,103.1 250,97.6 300,92.1 350,79.4 400,60.7 450,54.0
                " />
                
                {/* Polyline: Male (Blue) */}
                <polyline fill="none" stroke="#2563eb" strokeWidth="2.5" points="
                  50,109.5 100,109.5 150,108.5 200,105.7 250,102.7 300,94.4 350,72.2 400,39.0 450,22.1
                " />

                {/* Polyline: Female (Pink) */}
                <polyline fill="none" stroke="#e11d48" strokeWidth="2.5" points="
                  50,109.6 100,109.4 150,106.5 200,100.4 250,92.3 300,89.8 350,86.3 400,79.1 450,70.9
                " />

                {/* Intersection Annotation Line */}
                <line x1="300" y1="25" x2="300" y2="110" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,3"/>
                <circle cx="300" cy="94.4" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="300" cy="89.8" r="4" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="235" y="8" width="130" height="18" rx="4" fill="#123941"/>
                <text x="300" y="20" fontSize="7.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">50대 후반 남성 암발생률 역전!</text>

                {/* Legend */}
                <circle cx="320" cy="150" r="3.5" fill="#8b5cf6"/>
                <text x="327" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">남녀전체</text>
                
                <circle cx="375" cy="150" r="3.5" fill="#2563eb"/>
                <text x="382" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">남자</text>
                
                <circle cx="425" cy="150" r="3.5" fill="#e11d48"/>
                <text x="432" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">여자</text>
              </svg>
            </div>
          </div>

          {/* Table 1: 연령군별 암발생 현황 Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>📋 1. 연령군별 암발생 현황: 2023 (조발생률, 단위: 명/10만 명)</span>
              <span className="text-[11px] font-normal text-slate-500">보건복지부 / 국가암지식정보센터</span>
            </h4>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                    <th rowSpan={2} className="p-2.5 border-r border-slate-200 min-w-[80px]">연령군</th>
                    <th colSpan={2} className="p-2.5 bg-teal-50 text-teal-900 border-r border-slate-200">남녀전체</th>
                    <th colSpan={2} className="p-2.5 bg-blue-50 text-blue-900 border-r border-slate-200">남자</th>
                    <th colSpan={2} className="p-2.5 bg-rose-50 text-rose-900">여자</th>
                  </tr>
                  <tr className="bg-slate-50 text-slate-600 font-bold text-[11px] border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200">발생자수(명)</th>
                    <th className="p-2 border-r border-slate-200">조발생률</th>
                    <th className="p-2 border-r border-slate-200">발생자수(명)</th>
                    <th className="p-2 border-r border-slate-200">조발생률</th>
                    <th className="p-2 border-r border-slate-200">발생자수(명)</th>
                    <th className="p-2">조발생률</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  <tr>
                    <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">0-9세</td>
                    <td className="p-2.5 border-r border-slate-200">499</td>
                    <td className="p-2.5 border-r border-slate-200">14.5</td>
                    <td className="p-2.5 border-r border-slate-200">283</td>
                    <td className="p-2.5 border-r border-slate-200">16.1</td>
                    <td className="p-2.5 border-r border-slate-200">216</td>
                    <td className="p-2.5">12.9</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">10-19세</td>
                    <td className="p-2.5 border-r border-slate-200">889</td>
                    <td className="p-2.5 border-r border-slate-200">19.0</td>
                    <td className="p-2.5 border-r border-slate-200">438</td>
                    <td className="p-2.5 border-r border-slate-200">18.2</td>
                    <td className="p-2.5 border-r border-slate-200">451</td>
                    <td className="p-2.5">19.9</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">20-29세</td>
                    <td className="p-2.5 border-r border-slate-200">5,221</td>
                    <td className="p-2.5 border-r border-slate-200">83.0</td>
                    <td className="p-2.5 border-r border-slate-200">1,686</td>
                    <td className="p-2.5 border-r border-slate-200">51.2</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold text-rose-700">3,535</td>
                    <td className="p-2.5 font-bold text-rose-700">117.8</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">30-39세</td>
                    <td className="p-2.5 border-r border-slate-200">15,032</td>
                    <td className="p-2.5 border-r border-slate-200">228.9</td>
                    <td className="p-2.5 border-r border-slate-200">4,886</td>
                    <td className="p-2.5 border-r border-slate-200">143.4</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold text-rose-700">10,146</td>
                    <td className="p-2.5 font-bold text-rose-700">321.2</td>
                  </tr>
                  <tr className="bg-rose-50/50">
                    <td className="p-2.5 font-bold bg-rose-100/60 border-r border-slate-200 text-rose-950">40-49세</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">32,884</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">413.8</td>
                    <td className="p-2.5 border-r border-slate-200">9,801</td>
                    <td className="p-2.5 border-r border-slate-200">243.0</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-rose-700">23,083</td>
                    <td className="p-2.5 font-black text-rose-700">590.0</td>
                  </tr>
                  <tr className="bg-emerald-50/70 font-bold">
                    <td className="p-2.5 bg-emerald-100 border-r border-slate-200 text-emerald-950">50-59세 (역전구간)</td>
                    <td className="p-2.5 border-r border-slate-200">51,137</td>
                    <td className="p-2.5 border-r border-slate-200">595.4</td>
                    <td className="p-2.5 border-r border-slate-200 text-blue-900 font-black">22,451</td>
                    <td className="p-2.5 border-r border-slate-200 text-blue-900 font-black">518.5</td>
                    <td className="p-2.5 border-r border-slate-200 text-rose-900">28,686</td>
                    <td className="p-2.5 text-rose-900">673.7</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">60-69세</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold text-[#123941]">76,309</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold text-[#123941]">1,021.2</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">46,225</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">1,258.9</td>
                    <td className="p-2.5 border-r border-slate-200">30,084</td>
                    <td className="p-2.5">791.6</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">70-79세</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">63,747</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">1,641.9</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">42,060</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">2,367.7</td>
                    <td className="p-2.5 border-r border-slate-200">21,687</td>
                    <td className="p-2.5">1,029.7</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">80세 이상</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">42,895</td>
                    <td className="p-2.5 border-r border-slate-200 font-bold">1,867.1</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">23,296</td>
                    <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">2,930.2</td>
                    <td className="p-2.5 border-r border-slate-200">19,599</td>
                    <td className="p-2.5">1,304.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: 연령대별 자주 발생하는 암종 현황 Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>🩺 2. 연령대별 자주 발생하는 주요 암종 현황, 2023</span>
              <span className="text-[11px] font-normal text-slate-500">1위 암종 기준</span>
            </h4>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-2.5 border-r border-slate-200 min-w-[70px]">구분</th>
                    <th className="p-2 border-r border-slate-200">0-9세</th>
                    <th className="p-2 border-r border-slate-200">10-19세</th>
                    <th className="p-2 border-r border-slate-200">20-29세</th>
                    <th className="p-2 border-r border-slate-200">30-39세</th>
                    <th className="p-2 border-r border-slate-200">40-49세</th>
                    <th className="p-2 border-r border-slate-200">50-59세</th>
                    <th className="p-2 border-r border-slate-200">60-69세</th>
                    <th className="p-2 border-r border-slate-200">70-79세</th>
                    <th className="p-2">80세이상</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                  <tr className="bg-slate-50/70">
                    <td className="p-2.5 bg-slate-100 border-r border-slate-200 text-slate-900">전체</td>
                    <td className="p-2 border-r border-slate-200">백혈병</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                    <td className="p-2 border-r border-slate-200 text-blue-800">폐</td>
                    <td className="p-2 border-r border-slate-200 text-blue-800">폐</td>
                    <td className="p-2 text-blue-800">폐</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 bg-blue-50 text-blue-900 border-r border-slate-200">남자</td>
                    <td className="p-2 border-r border-slate-200">백혈병</td>
                    <td className="p-2 border-r border-slate-200">백혈병</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">대장</td>
                    <td className="p-2 border-r border-slate-200 text-blue-700">전립선</td>
                    <td className="p-2 border-r border-slate-200 text-blue-700">전립선</td>
                    <td className="p-2 text-blue-700">폐</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 bg-rose-50 text-rose-900 border-r border-slate-200">여자</td>
                    <td className="p-2 border-r border-slate-200">백혈병</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200">갑상선</td>
                    <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                    <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                    <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                    <td className="p-2 border-r border-slate-200">폐</td>
                    <td className="p-2">대장</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sales Briefing Strategy Box */}
          <div className="bg-[#e6f4f1] border border-[#99d6cb] rounded-2xl p-4 text-[#0c282e] space-y-2">
            <strong className="text-xs sm:text-sm font-black block flex items-center gap-1.5 text-[#123941]">
              💡 [보험 설계사 브리핑 가이드] 연령별 암 보장 소구점 및 고객 제안 전략
            </strong>
            <ul className="text-xs space-y-1.5 leading-relaxed font-medium">
              <li>
                <strong>• 30~40대 여성 타겟 (유방암·갑상선암 폭발)</strong>: 40대 여성 암발생률은 10만명당 590.0명으로 동연령대 남성(243.0명)의 2.4배! 유방암/갑상선암 진단비 및 표적항암 특약 집중 설계.
              </li>
              <li>
                <strong>• 50대 남성 골든타임 (성별 발생률 역전)</strong>: 50대 후반부터 남성 암발생률이 여성을 추월하며 60대(1,258.9명)에 급증. 50대 남성 대상 전립선암, 대장암, 위암 보장 및 뇌/심장 3대 진단비 보강 제안.
              </li>
              <li>
                <strong>• 60대 이상 고령층 (10만명당 1,000명 돌파)</strong>: 60세 이상은 암 발생 고위험군으로, 간편심사 유병자 암보험, 표적항암약물허가치료비, 암수술비 및 입원/재가 특약 필수 가입 권유.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Embedded Visual Cancer Statistics Panel when cancerstats tab is selected */}
      {activeTab === 'cancerstats' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#123941] text-white text-[10px] font-black rounded-md uppercase">
                  국가암통계 전문자료
                </span>
                <span className="text-xs font-bold text-slate-500">국가암정보센터 · 보건복지부 · 국가통계포털(KOSIS)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>📊 암종별 발생 현황 완벽 분석 &amp; 영업 브리핑 가이드</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenCancerStatsPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                A4 PDF 출력/인쇄
              </button>
              <button
                onClick={() => {
                  setSelectedReportId(4);
                  setShowReportModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#cb9f74] hover:bg-[#b88c61] text-slate-950 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                전문 리포트 보기
              </button>
            </div>
          </div>

          {/* Top Key Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-xl">
              <span className="text-xs text-teal-800 font-bold block">2023년 전체 악성암 신규 발생자수</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-[#123941]">288,613 명</span>
                <span className="text-xs font-bold text-teal-700 ml-auto bg-teal-100 px-1.5 py-0.5 rounded">
                  남 15.1만 / 여 13.7만
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs text-slate-500 font-bold block">남녀 전체 1위 암종</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900">갑상선암</span>
                <span className="text-xs font-bold text-slate-600">35,440명 (12.3%)</span>
                <span className="text-xs font-bold text-[#123941] ml-auto bg-slate-200 px-1.5 py-0.5 rounded">
                  2위 폐암 / 3위 대장암
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs text-slate-500 font-bold block">성별 1위 암종 (남 vs 여)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-lg sm:text-xl font-black text-slate-900">남 전립선 / 여 유방</span>
                <span className="text-xs font-bold text-rose-700 ml-auto bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                  남 15% / 여 21.6%
                </span>
              </div>
            </div>
          </div>

          {/* 1. Overall Top 10 Cancer Statistics Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>🏆 1. 2023년 주요 암발생 현황 (남녀 전체 Top 10)</span>
              <span className="text-[11px] font-normal text-slate-500">(단위: 명, %, 명/10만명)</span>
            </h4>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold text-[11px]">
                    <th className="p-2.5 text-center w-12">순위</th>
                    <th className="p-2.5">암종 (2022년 순위)</th>
                    <th className="p-2.5 text-right">발생자수(명)</th>
                    <th className="p-2.5 text-right">분율(%)</th>
                    <th className="p-2.5 text-right hidden sm:table-cell">조발생률</th>
                    <th className="p-2.5 text-right hidden md:table-cell">표준화발생률*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr className="bg-teal-50/50 font-bold text-[#123941]">
                    <td className="p-2.5 text-center">-</td>
                    <td className="p-2.5">모든 악성암</td>
                    <td className="p-2.5 text-right">288,613</td>
                    <td className="p-2.5 text-right">100.0%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell">564.3</td>
                    <td className="p-2.5 text-right hidden md:table-cell">522.9</td>
                  </tr>
                  <tr className="bg-slate-50/60 text-slate-600">
                    <td className="p-2.5 text-center">-</td>
                    <td className="p-2.5">갑상선암 제외</td>
                    <td className="p-2.5 text-right">253,173</td>
                    <td className="p-2.5 text-right">87.7%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell">495.0</td>
                    <td className="p-2.5 text-right hidden md:table-cell">454.0</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-[#123941]">1</td>
                    <td className="p-2.5 font-bold text-slate-900">갑상선</td>
                    <td className="p-2.5 text-right font-bold text-slate-900">35,440</td>
                    <td className="p-2.5 text-right font-bold text-teal-700">12.3%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">69.3</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">68.9</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-slate-700">2</td>
                    <td className="p-2.5 font-bold text-slate-900">
                      폐 <span className="text-[10px] text-slate-500 font-normal">('22년 3위)</span>
                    </td>
                    <td className="p-2.5 text-right font-bold text-slate-900">32,953</td>
                    <td className="p-2.5 text-right font-bold text-teal-700">11.4%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">64.4</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">57.5</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-slate-700">3</td>
                    <td className="p-2.5 font-bold text-slate-900">
                      대장 <span className="text-[10px] text-slate-500 font-normal">('22년 2위)</span>
                    </td>
                    <td className="p-2.5 text-right font-bold text-slate-900">32,610</td>
                    <td className="p-2.5 text-right font-bold text-teal-700">11.3%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">63.8</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">58.7</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-rose-700">4</td>
                    <td className="p-2.5 font-bold text-slate-900">유방</td>
                    <td className="p-2.5 text-right font-bold text-slate-900">29,871</td>
                    <td className="p-2.5 text-right font-bold text-rose-700">10.3%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">58.4</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">56.8</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-slate-700">5</td>
                    <td className="p-2.5 font-bold text-slate-900">위</td>
                    <td className="p-2.5 text-right font-bold text-slate-900">28,943</td>
                    <td className="p-2.5 text-right font-bold text-slate-700">10.0%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">56.6</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">51.4</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-black text-blue-700">6</td>
                    <td className="p-2.5 font-bold text-slate-900">전립선</td>
                    <td className="p-2.5 text-right font-bold text-slate-900">22,640</td>
                    <td className="p-2.5 text-right font-bold text-blue-700">7.8%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">44.3</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">39.2</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-bold text-slate-600">7</td>
                    <td className="p-2.5 text-slate-900">간</td>
                    <td className="p-2.5 text-right text-slate-900">14,707</td>
                    <td className="p-2.5 text-right text-slate-700">5.1%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">28.8</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">26.1</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-bold text-slate-600">8</td>
                    <td className="p-2.5 text-slate-900">췌장</td>
                    <td className="p-2.5 text-right text-slate-900">9,748</td>
                    <td className="p-2.5 text-right text-slate-700">3.4%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">19.1</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">17.1</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-bold text-slate-600">9</td>
                    <td className="p-2.5 text-slate-900">담낭 및 기타담도</td>
                    <td className="p-2.5 text-right text-slate-900">7,997</td>
                    <td className="p-2.5 text-right text-slate-700">2.8%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">15.6</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">13.8</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-center font-bold text-slate-600">10</td>
                    <td className="p-2.5 text-slate-900">신장</td>
                    <td className="p-2.5 text-right text-slate-900">7,367</td>
                    <td className="p-2.5 text-right text-slate-700">2.6%</td>
                    <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">14.4</td>
                    <td className="p-2.5 text-right hidden md:table-cell text-slate-600">13.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              * 연령표준화발생률: 우리나라 2020년 주민등록연령인구를 표준인구로 사용 (출처: 보건복지부, 국립암센터)
            </p>
          </div>

          {/* 2. Gender Comparison Tables (Male vs Female) */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900">
              👫 2. 성별 주요 암발생 현황 (2023년 남성 vs 여성 Top 10)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Male Table Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-black text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
                    👨 남자 주요 암발생 (총 151,126명)
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">10만명당 조발생률 593.4</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="text-slate-500 border-b border-slate-200 font-bold text-[10px]">
                        <th className="py-1.5 px-1 text-center">순위</th>
                        <th className="py-1.5 px-1">암종 ('22년 순위)</th>
                        <th className="py-1.5 px-1 text-right">발생자수</th>
                        <th className="py-1.5 px-1 text-right">분율</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/60 font-medium text-slate-800">
                      <tr className="bg-blue-50/80 font-bold">
                        <td className="py-1.5 px-1 text-center text-blue-800">1</td>
                        <td className="py-1.5 px-1 text-blue-950">전립선 ('22년 2위 ↑)</td>
                        <td className="py-1.5 px-1 text-right">22,640명</td>
                        <td className="py-1.5 px-1 text-right text-blue-700">15.0%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">2</td>
                        <td className="py-1.5 px-1">폐 ('22년 1위 ↓)</td>
                        <td className="py-1.5 px-1 text-right">21,846명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">14.5%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">3</td>
                        <td className="py-1.5 px-1">위 ('22년 4위 ↑)</td>
                        <td className="py-1.5 px-1 text-right">19,295명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">12.8%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">4</td>
                        <td className="py-1.5 px-1">대장 ('22년 3위 ↓)</td>
                        <td className="py-1.5 px-1 text-right">19,156명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">12.7%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">5</td>
                        <td className="py-1.5 px-1">간</td>
                        <td className="py-1.5 px-1 text-right">10,875명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">7.2%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">6</td>
                        <td className="py-1.5 px-1">갑상선</td>
                        <td className="py-1.5 px-1 text-right">9,326명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">6.2%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">7</td>
                        <td className="py-1.5 px-1">신장 ('22년 8위 ↑)</td>
                        <td className="py-1.5 px-1 text-right">5,073명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">3.4%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">8</td>
                        <td className="py-1.5 px-1">췌장 ('22년 7위 ↓)</td>
                        <td className="py-1.5 px-1 text-right">4,925명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">3.3%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">9</td>
                        <td className="py-1.5 px-1">방광 ('22년 10위 ↑)</td>
                        <td className="py-1.5 px-1 text-right">4,465명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">3.0%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">10</td>
                        <td className="py-1.5 px-1">담낭 및 기타담도</td>
                        <td className="py-1.5 px-1 text-right">4,446명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">2.9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Female Table Card */}
              <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-rose-200">
                  <span className="text-xs font-black text-rose-900 bg-rose-100 px-2.5 py-0.5 rounded-full">
                    👩 여자 주요 암발생 (총 137,487명)
                  </span>
                  <span className="text-[10px] font-bold text-rose-700">10만명당 조발생률 535.5</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="text-rose-700 border-b border-rose-200 font-bold text-[10px]">
                        <th className="py-1.5 px-1 text-center">순위</th>
                        <th className="py-1.5 px-1">암종 ('22년 순위)</th>
                        <th className="py-1.5 px-1 text-right">발생자수</th>
                        <th className="py-1.5 px-1 text-right">분율</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-rose-200/60 font-medium text-slate-800">
                      <tr className="bg-rose-100/70 font-bold">
                        <td className="py-1.5 px-1 text-center text-rose-900">1</td>
                        <td className="py-1.5 px-1 text-rose-950">유방</td>
                        <td className="py-1.5 px-1 text-right">29,715명</td>
                        <td className="py-1.5 px-1 text-right text-rose-800">21.6%</td>
                      </tr>
                      <tr className="font-bold">
                        <td className="py-1.5 px-1 text-center text-rose-800">2</td>
                        <td className="py-1.5 px-1 text-rose-900">갑상선</td>
                        <td className="py-1.5 px-1 text-right">26,114명</td>
                        <td className="py-1.5 px-1 text-right text-rose-700">19.0%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">3</td>
                        <td className="py-1.5 px-1">대장</td>
                        <td className="py-1.5 px-1 text-right">13,454명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">9.8%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">4</td>
                        <td className="py-1.5 px-1">폐</td>
                        <td className="py-1.5 px-1 text-right">11,107명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">8.1%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center font-bold">5</td>
                        <td className="py-1.5 px-1">위</td>
                        <td className="py-1.5 px-1 text-right">9,648명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">7.0%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">6</td>
                        <td className="py-1.5 px-1">췌장</td>
                        <td className="py-1.5 px-1 text-right">4,823명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">3.5%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">7</td>
                        <td className="py-1.5 px-1">자궁체부</td>
                        <td className="py-1.5 px-1 text-right">4,037명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">2.9%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">8</td>
                        <td className="py-1.5 px-1">간</td>
                        <td className="py-1.5 px-1 text-right">3,832명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">2.8%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">9</td>
                        <td className="py-1.5 px-1">담낭 및 기타담도</td>
                        <td className="py-1.5 px-1 text-right">3,551명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">2.6%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1 text-center">10</td>
                        <td className="py-1.5 px-1">난소</td>
                        <td className="py-1.5 px-1 text-right">3,299명</td>
                        <td className="py-1.5 px-1 text-right text-slate-600">2.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Sales Briefing Guide Box */}
          <div className="bg-teal-50/90 border border-teal-200 rounded-2xl p-4 space-y-2 shadow-2xs">
            <strong className="text-xs sm:text-sm text-[#123941] font-black block flex items-center gap-1.5">
              💡 [설계사 셀링 포인트] 암종별 발생 현황 브리핑 소구 포인트
            </strong>
            <ul className="space-y-1.5 text-xs text-slate-800 font-medium leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-[#123941] font-bold shrink-0">1.</span>
                <span><strong>남성 전립선암 1위 급증 대응:</strong> 전립선암이 남성 발생 1위(22,640명, 15.0%)로 상승함에 따라, 50대 이상 남성 고객 상담 시 전립선비대증 및 전립선암 진단비·수술비 특약 가입 당위성을 안내합니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#123941] font-bold shrink-0">2.</span>
                <span><strong>여성 유방암·갑상선암 40% 초과:</strong> 여성 암 환자 10명 중 4명 이상(40.6%)이 유방암(21.6%) 및 갑상선암(19.0%)입니다. 여성 전용 암진단비 및 표적항암 약물치료비 플랜을 보장분석 제안서에 꼭 포함하세요.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#123941] font-bold shrink-0">3.</span>
                <span><strong>남녀 공통 주요 암(폐·대장·위) 입체 보장:</strong> 폐암, 대장암, 위암은 남녀 불문 최고 발병 위험을 자랑합니다. 단순 진단비 외에도 표적항암치료비, 항암방사선약물치료비, 암수술비 등 다층 보장 설계를 추천합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Embedded Visual Breast Cancer Panel when breastcancer tab is selected */}
      {activeTab === 'breastcancer' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-rose-600 text-white text-[10px] font-black rounded-md uppercase">
                  암 보장 전문자료
                </span>
                <span className="text-xs font-bold text-slate-500">보건복지부 · 국립암센터 · 대한암학회 공식자료</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>🎀 유방암(Breast Cancer) 완벽 분석 &amp; 영업 브리핑 가이드</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenBreastCancerPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                A4 PDF 출력/인쇄
              </button>
            </div>
          </div>

          {/* Top Key Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl">
              <span className="text-xs text-rose-700 font-bold block">국내 여성 암 발병 순위</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-rose-900">전체 암 중 2위</span>
                <span className="text-xs font-bold text-rose-700 ml-auto bg-rose-100 px-1.5 py-0.5 rounded">
                  세계적 지속 증가
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs text-slate-500 font-bold block">연령표준화 사망률 (10만명당)</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900">6.1</span>
                <span className="text-xs font-bold text-slate-600">명</span>
                <span className="text-xs font-bold text-teal-700 ml-auto bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100">
                  OECD 최하위 수준 (조기검진 성과)
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs text-slate-500 font-bold block">자가검진 조기발견 비율</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-[#123941]">70% 이상</span>
                <span className="text-xs font-bold text-amber-700 ml-auto bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  매월 자가검진 필수
                </span>
              </div>
            </div>
          </div>

          {/* 1. Definition & Risk Factors */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>📌 1. 유방암 정의 및 3대 발병 원인</span>
            </h4>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                <strong>유방암이란?</strong> 유방 밖으로 퍼져 생명을 위협할 수 있는 악성 종양으로 유방 내 세포(주로 유관 및 유엽 세포)에서 기원합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="text-xs font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block">
                    1) 유전적 요인 (5~10%)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    · 모친/자매 중 한쪽 유방암 시: <strong>2~3배</strong> 위험<br/>
                    · 양쪽 유방암 가족력 시: <strong>8~12배</strong> 위험 (정기검진 권유)
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block">
                    2) 호르몬 요인 (에스트로겐)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    · 이른 초경, 늦은 폐경, 장기 호르몬제 투여자 = 고위험군<br/>
                    · 호르몬 치료 시 연 1회 이상 검진 추천
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 inline-block">
                    3) 연령 및 출산/수유
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    · 40세 이후 연령 비례 증가<br/>
                    · 자녀 없음, 30세 이후 첫 출산, 미수유 여성 발병율 증가
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Symptoms, 3-Step Self Check & Screening */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>🔍 2. 주요 증상, 3단계 자가검진법 &amp; 연령별 조기검진 권고안</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Symptoms Card */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <span className="text-xs font-black text-slate-800 block">🩺 주요 증상 및 의심 신호</span>
                <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>초기 증상 (90~95%):</strong> 무증상, 가장 흔한 증상은 <strong>통증 없는 멍울</strong></span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>진행 시:</strong> 겨드랑이 덩어리, 유두 혈성 분비물, 잘 낫지 않는 습진 (파제트병 의심)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>심할 경우:</strong> 유방 피부 움푹 패임, 유두 함몰, 오렌지껍질 모양 피부 부종</span>
                  </li>
                </ul>
              </div>

              {/* 3-Step Self Exam Card */}
              <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
                <span className="text-xs font-black text-rose-950 block">✋ 3단계 자가검진법 (생리 끝 2~7일 후 최적)</span>
                <div className="space-y-1.5 text-xs text-slate-800">
                  <div className="p-2 bg-white rounded-lg border border-rose-100 flex items-start gap-2">
                    <span className="px-1.5 py-0.5 bg-rose-600 text-white font-black text-[10px] rounded shrink-0">1단계</span>
                    <span><strong>거울 앞에서:</strong> 유방 모양, 피부 패임, 유두 함몰 여부 관찰</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-rose-100 flex items-start gap-2">
                    <span className="px-1.5 py-0.5 bg-rose-600 text-white font-black text-[10px] rounded shrink-0">2단계</span>
                    <span><strong>앉거나 서서:</strong> 유방과 겨드랑이에 만져지는 멍울이나 덩어리 촉진</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-rose-100 flex items-start gap-2">
                    <span className="px-1.5 py-0.5 bg-rose-600 text-white font-black text-[10px] rounded shrink-0">3단계</span>
                    <span><strong>누워서:</strong> 반대편 손가락 끝으로 원을 그리며 꼼꼼히 촉진</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Screening Recommendation Table */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-black text-slate-800 block">🗓️ 보건복지부 연령별 유방암 조기검진 권고안 (5대암 선정)</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-500 block text-[10px]">30세 이후</span>
                  <span className="font-black text-slate-900 mt-1 block">매월 자가검진</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-500 block text-[10px]">35세 이후</span>
                  <span className="font-black text-slate-900 mt-1 block">2년 간격 임상검진</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl">
                  <span className="font-bold text-rose-700 block text-[10px]">40세 이후</span>
                  <span className="font-black text-rose-900 mt-1 block">1~2년 간격 촬영술</span>
                  <span className="text-[10px] text-rose-600 font-semibold block">(필요시 초음파)</span>
                </div>
                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="font-bold text-amber-700 block text-[10px]">고위험군</span>
                  <span className="font-black text-amber-900 mt-1 block">의사와 상의후 검진</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Treatments & Drug Therapies */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
              <span>🏥 3. 유방암 치료법 및 약물·표적치료 체계</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Hormonal Therapy */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <span className="text-xs font-black text-[#123941] bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                  ① 항호르몬 요법
                </span>
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  호르몬 수용체 양성 대상. 부작용 적고 삶의 질 유지
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">아로마타제 억제제 (AI)</strong>
                    <span className="text-slate-600 text-[10px]">여성호르몬 생성 억제 (폐경 후 환자)</span>
                    <span className="text-teal-700 font-bold block text-[10px] mt-0.5">아나스트로졸, 레트로졸, 엑스메스탄</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">SERM (수용체 조절제)</strong>
                    <span className="text-slate-600 text-[10px]">여성호르몬 작용 억제</span>
                    <span className="text-teal-700 font-bold block text-[10px] mt-0.5">타목시펜(폐경전/후), 풀베스트란트(재발)</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">LHRH 촉진제</strong>
                    <span className="text-slate-600 text-[10px]">난소 기능 억제</span>
                    <span className="text-teal-700 font-bold block text-[10px] mt-0.5">고세렐린 (폐경 전 타목시펜 병용)</span>
                  </div>
                </div>
              </div>

              {/* Chemotherapy */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <span className="text-xs font-black text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block">
                  ② 항암 화학 요법
                </span>
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  수술 전/후 및 완화 목적 (정맥주사 투여)
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">독소루비신 (Doxorubicin)</strong>
                    <span className="text-slate-600 text-[10px]">DNA 구조 손상 및 세포 분열 차단</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">사이클로포스파미드</strong>
                    <span className="text-slate-600 text-[10px]">알킬화제제, 암세포 성장 억제</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-[11px]">5-FU &amp; 파클리탁셀</strong>
                    <span className="text-slate-600 text-[10px]">DNA/RNA 합성 저해 및 염색체 형성 억제</span>
                  </div>
                </div>
              </div>

              {/* HER2 Targeted Therapy */}
              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2">
                <span className="text-xs font-black text-rose-950 bg-rose-200/80 px-2 py-0.5 rounded inline-block">
                  ③ HER2 표적치료 (20~30%)
                </span>
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  허투(HER2) 수용체 양성 암세포 선택적 억제
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-rose-200">
                    <strong className="text-rose-900 block text-[11px]">트라스투주맙 (허셉틴)</strong>
                    <span className="text-slate-600 text-[10px]">HER2 1차 표적제 (3주 1회/매주)</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-rose-200">
                    <strong className="text-rose-900 block text-[11px]">퍼투주맙 &amp; T-DM1</strong>
                    <span className="text-slate-600 text-[10px]">HER2 병용 및 ADC 표적치료제</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-rose-200">
                    <strong className="text-rose-900 block text-[11px]">라파티닙 (Lapatinib)</strong>
                    <span className="text-slate-600 text-[10px]">경구용 표적항암제 (매일 투여)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Sales Briefing Guide Box */}
          <div className="bg-rose-50/90 border border-rose-200 rounded-2xl p-4 space-y-2 shadow-2xs">
            <strong className="text-xs sm:text-sm text-rose-950 font-black block flex items-center gap-1.5">
              💡 [설계사 고객 상담 가이드] 유방암 브리핑 소구 포인트
            </strong>
            <ul className="space-y-1.5 text-xs text-rose-950 font-medium leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-rose-700 font-bold shrink-0">1.</span>
                <span><strong>초기 무증상 고위험 대비:</strong> 유방암 초기 90% 이상은 무증상이므로 30대 자가검진 및 40대 이상 촬영/초음파 정기검진과 암진단비 가입 필요성을 강조합니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-700 font-bold shrink-0">2.</span>
                <span><strong>고가의 표적항암 치료비 준비:</strong> HER2 양성 유방암 환자(20~30%)의 경우 허셉틴, 퍼투주맙 등 표적항암약물치료비 특약 가입이 치료비 부담 완화의 핵심입니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-700 font-bold shrink-0">3.</span>
                <span><strong>장기 보조요법 종합 보장:</strong> 수술(부분절제/전절제) 후 5년 이상 지속되는 항호르몬치료 및 방사선치료에 대비한 든든한 보장 설계를 제안합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Embedded Visual Disability Panel when disability tab is selected */}
      {activeTab === 'disability' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6 text-left">
          {/* Panel Title & Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#123941] text-white text-[10px] font-black rounded-md uppercase">
                  보장분석 필수자료
                </span>
                <span className="text-xs font-bold text-slate-500">보건복지부 공식통계 &amp; 약관분석</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                <span>🛡️ 후유장해담보 필요성 및 대표질환별 장애지급률 가이드</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenDisabilityPdfPrint()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#123941] hover:bg-[#0c282e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                A4 PDF 출력/인쇄
              </button>
            </div>
          </div>

          {/* 4 Representative Diseases Grid Cards */}
          <div>
            <h4 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-1.5">
              <span>🏥 1. 대표질환별 후유장해 지급률 요약</span>
              <span className="text-xs font-semibold text-slate-500">(약관지급률 기준)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Eye Diseases */}
              <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-3 pb-2.5 border-b border-slate-200/80">
                  <EyeIllustration />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs text-slate-500 font-bold">대표질환</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        눈의 장해
                      </span>
                    </div>
                    <span className="text-base font-black text-slate-900">백내장, 녹내장</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 한 눈의 교정시력 0.2 이하</span>
                    <span className="font-bold text-slate-800">5%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50 bg-blue-50/90 px-2 rounded-lg border border-blue-100">
                    <span className="text-blue-900 font-black">• 한 눈의 교정시력 0.1 이하</span>
                    <span className="font-black text-blue-700 text-sm">15%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 한 눈의 교정시력 0.06 이하</span>
                    <span className="font-bold text-slate-800">25%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-600 font-semibold">• 한 눈의 교정시력 0.02 이하</span>
                    <span className="font-bold text-slate-800">35%</span>
                  </div>
                </div>
              </div>

              {/* Joint Diseases */}
              <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-3 pb-2.5 border-b border-slate-200/80">
                  <JointIllustration />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs text-slate-500 font-bold">대표질환</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        3대 관절 장해
                      </span>
                    </div>
                    <span className="text-base font-black text-slate-900">관절염, 골절</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 3대 관절 중 하나의 기능 약간장해</span>
                    <span className="font-bold text-slate-800">5%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 3대 관절 중 하나의 기능 뚜렷한 장해</span>
                    <span className="font-bold text-slate-800">10%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50 bg-blue-50/90 px-2 rounded-lg border border-blue-100">
                    <span className="text-blue-900 font-black">• 3대 관절 중 하나의 기능 심한장해</span>
                    <span className="font-black text-blue-700 text-sm">20%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-600 font-semibold">• 3대 관절 중 하나의 기능 완전상실</span>
                    <span className="font-bold text-slate-800">30%</span>
                  </div>
                </div>
              </div>

              {/* Disc Diseases */}
              <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-3 pb-2.5 border-b border-slate-200/80">
                  <SpineIllustration />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs text-slate-500 font-bold">대표질환</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        척추 장해
                      </span>
                    </div>
                    <span className="text-base font-black text-slate-900">추간판 탈출증</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 척추(등뼈)에 약간의 운동장해</span>
                    <span className="font-bold text-slate-800">10%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 척추(등뼈)에 뚜렷한 운동장해</span>
                    <span className="font-bold text-slate-800">30%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50 bg-blue-50/90 px-2 rounded-lg border border-blue-100">
                    <span className="text-blue-900 font-black">• 척추(등뼈)에 약간의 기형</span>
                    <span className="font-black text-blue-700 text-sm">15%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-600 font-semibold">• 척추(등뼈)에 뚜렷한 기형</span>
                    <span className="font-bold text-slate-800">30%</span>
                  </div>
                </div>
              </div>

              {/* Dementia Diseases */}
              <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-3 pb-2.5 border-b border-slate-200/80">
                  <BrainIllustration />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs text-slate-500 font-bold">대표질환</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        신경계·정신동작
                      </span>
                    </div>
                    <span className="text-base font-black text-slate-900">치매</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50 bg-blue-50/90 px-2 rounded-lg border border-blue-100">
                    <span className="text-blue-900 font-black">• 약간의 치매(CDR 2점)</span>
                    <span className="font-black text-blue-700 text-sm">40%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 뚜렷한 치매(CDR 3점)</span>
                    <span className="font-bold text-slate-800">60%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span className="text-slate-600 font-semibold">• 심한 치매(CDR 4점)</span>
                    <span className="font-bold text-slate-800">80%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-600 font-semibold">• 극심한 치매(CDR 5점)</span>
                    <span className="font-bold text-slate-800">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age Distribution Table & Red Total Highlight */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <span>📊 2. 연령별 등록 장애인 현황 및 비율</span>
                <span className="text-xs font-normal text-slate-500">(보건복지부)</span>
              </h4>
              <span className="text-xs text-slate-400 font-medium">* 출처: 보건복지부 2020년 등록 장애인</span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold">
                    <th className="p-3 border-r border-slate-200 text-center font-black min-w-[100px]">연령층</th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age30Char />
                      <span>30대 이하</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age40Char />
                      <span>40대</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age50Char />
                      <span>50대</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age60Char />
                      <span>60대</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age70Char />
                      <span>70대</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 min-w-[90px]">
                      <Age80Char />
                      <span>80대 이상</span>
                    </th>
                    <th className="p-3 bg-red-600 text-white font-black min-w-[110px]"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-black bg-slate-50 border-r border-slate-200 text-slate-900">장애인(명)</td>
                    <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">31만</td>
                    <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">24만</td>
                    <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">45만</td>
                    <td className="p-3 border-r border-slate-200 font-bold text-slate-900">60만</td>
                    <td className="p-3 border-r border-slate-200 font-bold text-slate-900">58만</td>
                    <td className="p-3 border-r border-slate-200 font-bold text-slate-900">44만</td>
                    <td className="p-3 bg-red-600 text-white font-black text-base tracking-tight">총 263만명</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black bg-slate-50 border-r border-slate-200 text-slate-900">인구대비 장애인 비율</td>
                    <td className="p-3 border-r border-slate-200 text-slate-600">1.3%</td>
                    <td className="p-3 border-r border-slate-200 text-slate-600">2.9%</td>
                    <td className="p-3 border-r border-slate-200 text-slate-700">5.2%</td>
                    <td className="p-3 border-r border-slate-200 font-black text-slate-900 text-sm">8.9%</td>
                    <td className="p-3 border-r border-slate-200 font-black text-slate-900 text-sm">15.8%</td>
                    <td className="p-3 border-r border-slate-200 font-black text-slate-900 text-sm">22.0%</td>
                    <td className="p-3 bg-red-600 text-white font-black text-sm tracking-tight">전체인구 5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 font-medium mt-1 text-left">* 출처: 보건복지부 2020년 등록 장애인</p>
          </div>

          {/* Sales Briefing Guide Box */}
          <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 space-y-2 shadow-2xs">
            <strong className="text-xs sm:text-sm text-emerald-950 font-black block flex items-center gap-1.5">
              💡 [설계사 고객 상담 가이드] 후유장해 필요성 핵심 소구 포인트
            </strong>
            <ul className="space-y-1.5 text-xs text-emerald-950 font-medium leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold shrink-0">1.</span>
                <span><strong>일상 생활질환 보장</strong>: 허리 디스크 수술/시술(15%), 인공관절 수술(20%), 백내장 시력저하(15%), 약간의 치매(40%) 등 고령화 시 흔히 겪는 질환이 모두 포함됩니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold shrink-0">2.</span>
                <span><strong>부위별 반복·합산 보장</strong>: 사고나 질병 발생 부위별로 매번 지급률(3~100%)을 독립적으로 적용받아 치료비 및 노후 간병 자금을 지속적으로 마련할 수 있습니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold shrink-0">3.</span>
                <span><strong>60대 이상 장애 위험 급증</strong>: 보건복지부 통계 기준 60대 8.9%, 70대 15.8%, 80대 22.0%로 인구 10명 중 1~2명 이상이 장애를 등록하므로 젊을 때 가입해 두는 것이 절대적으로 유리합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Grid Layout of Goods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGoods.length > 0 ? (
          filteredGoods.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-all p-5 flex flex-col justify-between group shadow-3xs hover:shadow-xs text-left"
            >
              <div>
                {/* Top Header Row with Badges and Document Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">
                      {item.badgeLeft || item.categoryLabel}
                    </span>
                    {item.badgeRight && (
                      <span className="px-2.5 py-1 bg-[#123941] text-white text-xs font-bold rounded-md">
                        {item.badgeRight}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedReportId(item.id);
                      setShowReportModal(true);
                    }}
                    className="p-1.5 rounded-lg border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title="상세보기 / 보고서 미리보기"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>

                {/* Title */}
                <h3
                  onClick={() => {
                    setSelectedReportId(item.id);
                    setShowReportModal(true);
                  }}
                  className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#123941] transition-colors my-3.5 cursor-pointer"
                >
                  {item.title}
                </h3>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 my-2">
                  {item.tags.map((tg) => (
                    <span key={tg} className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-black text-slate-400 tracking-wider uppercase">
                  OFFICIAL DOC
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(item.id, item.downloadUrl || '영업자료.pdf')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#123941] hover:bg-[#0c282e] text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    자료받기
                  </button>
                  <button
                    onClick={() => {
                      setSelectedReportId(item.id);
                      setShowReportModal(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white p-12 text-center border border-slate-200 rounded-2xl space-y-2">
            <p className="text-sm text-slate-700 font-bold">등록된 영업자료가 없습니다.</p>
            <p className="text-xs text-slate-400 font-medium">새로운 영업자료 내용을 추가해 주세요.</p>
          </div>
        )}
      </div>

      {/* Report Details Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-auto overflow-hidden border border-slate-200/90 relative flex flex-col max-h-[90vh]">
            
            {/* Modal Top Header */}
            <div className="p-4 sm:p-6 bg-[#123941] text-white flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl border border-white/20">
                  <FileText className="w-6 h-6 text-[#cb9f74]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#cb9f74] text-slate-950 text-[10px] font-black rounded uppercase">
                      {selectedReportId === 10
                        ? '연세암병원 중입자치료센터'
                        : selectedReportId === 9
                        ? '국가암지식정보센터 & 대한위암학회'
                        : selectedReportId === 8
                        ? '국가암지식정보센터 & 란셋(Lancet) 임상'
                        : selectedReportId === 7
                        ? '국가암지식정보센터 & 보건복지부'
                        : selectedReportId === 6
                        ? '국가암지식정보센터 & 보건복지부'
                        : selectedReportId === 5
                        ? '국가암지식정보센터 & 보건복지부'
                        : selectedReportId === 4
                        ? '국가암정보센터 & 보건복지부'
                        : selectedReportId === 3
                        ? '국립암센터 & 보건복지부'
                        : selectedReportId === 2
                        ? '보건복지부 & 약관분석'
                        : '통계청 OFFICIAL'}
                    </span>
                    <span className="text-xs text-slate-300 font-bold">
                      {selectedReportId === 10
                        ? '공식 가이드 (연세암병원·대한방사선종양학회 검수)'
                        : selectedReportId === 9
                        ? '공식 가이드 (대한위암학회·대한중앙내과학회 검수)'
                        : selectedReportId === 8
                        ? '공식 가이드 (국립암센터 검수)'
                        : selectedReportId === 7
                        ? '공식 치료 지침 (대한암학회·대장항문학회)'
                        : selectedReportId === 6
                        ? '국가암통계공시'
                        : selectedReportId === 5
                        ? '국가암통계공시'
                        : selectedReportId === 4
                        ? '국가암통계공시'
                        : selectedReportId === 3
                        ? '보건복지부 암등록통계'
                        : selectedReportId === 2
                        ? '보건복지부 공식통계 기준'
                        : '2025년 9월 25일 발표'}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                    {selectedReportId === 10
                      ? '중입자치료 (연세암병원 중입자치료센터 공식 가이드 · 브래그 피크 · 입자비교 · DNA절단 리포트)'
                      : selectedReportId === 9
                      ? '위암 재발 및 전이 (수술 후 5년 내 90% 재발·3대 재발 패턴·추적검사 주기·항암치료 가이드)'
                      : selectedReportId === 8
                      ? '유방암 재발 및 전이 (5년 생존율 vs 10~20년 후기 재발·원격전이·산정특례 5년 만료 가이드)'
                      : selectedReportId === 7
                      ? '대장암 치료방법 (내시경·수술·항암·방사선 치료 가이드)'
                      : selectedReportId === 6
                      ? '제자리암(상피내암) 발생률 및 주요 암종별 현황'
                      : selectedReportId === 5
                      ? '연령군별 암발생률 및 연령대별 주요 발생 암종'
                      : selectedReportId === 4
                      ? '암종별발생현황'
                      : selectedReportId === 3
                      ? '유방암관련자료'
                      : selectedReportId === 2
                      ? '후유장해담보 필요성 (대표질환별 지급률 및 보건복지부 장애인 통계)'
                      : '2024년 사망원인통계 결과 (10대 사망원인 및 성별·연령별 분석)'}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenReportPdf(selectedReportId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#cb9f74] hover:bg-[#b88c61] text-slate-950 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <Printer className="w-3.5 h-3.5" />
                  PDF 출력/인쇄
                </button>
                <button
                  onClick={() => handleDownload(selectedReportId, getReportFilename(selectedReportId))}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all cursor-pointer active:scale-95 border border-white/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF 다운로드
                </button>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Sub-navigation Tabs */}
            <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 flex gap-2 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveReportSubTab('summary')}
                className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeReportSubTab === 'summary'
                    ? 'border-[#123941] text-[#123941] bg-white rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <PieChart className="w-4 h-4" />
                요약 및 주요 지표
              </button>
              <button
                onClick={() => setActiveReportSubTab('top10')}
                className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeReportSubTab === 'top10'
                    ? 'border-[#123941] text-[#123941] bg-white rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                {selectedReportId === 10 ? '입자물리 특성비교' : selectedReportId === 9 ? '재발률/누적비율' : selectedReportId === 8 ? '재발률/통계개요' : selectedReportId === 7 ? '내시경/수술 절제' : selectedReportId === 6 ? '25년간 추이' : selectedReportId === 5 ? '연령군별 발생률' : selectedReportId === 4 ? '남녀 전체 Top10' : selectedReportId === 3 ? '치료제/자가검진' : selectedReportId === 2 ? '대표질환별 지급률' : '10대 사망원인 그래프'}
              </button>
              {(selectedReportId === 1 || selectedReportId === 4 || selectedReportId === 5 || selectedReportId === 6 || selectedReportId === 7 || selectedReportId === 8 || selectedReportId === 9 || selectedReportId === 10) && (
                <button
                  onClick={() => setActiveReportSubTab('gender')}
                  className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeReportSubTab === 'gender'
                      ? 'border-[#123941] text-[#123941] bg-white rounded-t-lg'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  {selectedReportId === 10 ? '브래그피크 & DNA' : selectedReportId === 9 ? '3대 재발유형' : selectedReportId === 8 ? '원격 전이 치료법' : selectedReportId === 7 ? '항암/표적/면역치료' : selectedReportId === 6 ? '성별 주요 발생암' : selectedReportId === 5 ? '50대 남녀역전 분석' : selectedReportId === 4 ? '성별 발생 비교' : '성별 비교 분석'}
                </button>
              )}
              <button
                onClick={() => setActiveReportSubTab('age')}
                className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeReportSubTab === 'age'
                    ? 'border-[#123941] text-[#123941] bg-white rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                {selectedReportId === 10 ? '치료혜택 & 대상암종' : selectedReportId === 9 ? '추적검사 일정' : selectedReportId === 8 ? '국소재발 vs 원격전이' : selectedReportId === 7 ? '방사선치료/TNT' : selectedReportId === 6 ? '연도별 통계표' : selectedReportId === 5 ? '연령대별 주요 암종' : selectedReportId === 4 ? '조발생률/표준화' : selectedReportId === 3 ? '검진권고안' : selectedReportId === 2 ? '연령별 장애인 통계' : '연령별 5대 사망원인'}
              </button>
              <button
                onClick={() => setActiveReportSubTab('sales')}
                className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeReportSubTab === 'sales'
                    ? 'border-[#123941] text-[#123941] bg-white rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Award className="w-4 h-4 text-[#cb9f74]" />
                영업 상담 가이드
              </button>
            </div>

            {/* Modal Body Content (Scrollable) */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
              
              {/* HEAVY ION THERAPY REPORT CONTENT (selectedReportId === 10) */}
              {selectedReportId === 10 ? (
                <div className="space-y-6 text-left">
                  {/* Overview Banner */}
                  <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl space-y-2 border border-blue-800/50 shadow-md">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-[11px] font-black rounded-md uppercase tracking-wide">
                        꿈의 암치료기 · 연세암병원 중입자치료센터
                      </span>
                      <span className="text-xs text-blue-200 font-bold">
                        상담 대상: 췌장암 · 폐암 · 간암 · 전립선암 그 외 난치암
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <span>⚛️ 중입자치료(Heavy Ion Therapy) 핵심 개요</span>
                    </h3>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      중입자치료는 탄소이온(Carbon Ion)을 가속시켜 암세포(종양)만을 미세 조준하여 파괴하는 방사선치료 기법입니다. 수소입자보다 <strong className="text-amber-300 underline font-black">12배 무거운 탄소입자</strong>를 빛의 속도의 70%까지 가속하여, 기존 방사선치료 대비 <strong className="text-amber-300 underline font-black">2~3배 높은 높은 세포 생물학적 살상 능력</strong>을 보입니다.
                    </p>
                  </div>

                  {/* Summary Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-5">
                      {/* Particle Types Comparison Table */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                          <span>📊 방사선치료에 사용되는 광자, 전자, 입자선 비교</span>
                        </h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                          <table className="w-full text-xs text-center border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-700 font-bold">
                                <th className="p-2.5 border-b border-r border-slate-200 text-left pl-3">구분</th>
                                <th className="p-2.5 border-b border-r border-slate-200">X-선치료 (X-ray)</th>
                                <th className="p-2.5 border-b border-r border-slate-200">전자선치료 (Electron)</th>
                                <th className="p-2.5 border-b border-r border-slate-200">양성자치료 (Proton)</th>
                                <th className="p-2.5 border-b border-slate-200 bg-blue-900 text-white font-black">중입자치료 (Carbon)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              <tr>
                                <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200 text-left pl-3">질량비 (Mass Ratio)</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">x (질량 없음)</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">1</td>
                                <td className="p-2.5 border-r border-slate-200 text-blue-700 font-bold">2,000</td>
                                <td className="p-2.5 bg-blue-50/80 font-black text-blue-950">24,000 (양성자 12배)</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200 text-left pl-3">전하비 (Charge Ratio)</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">x (전하 없음)</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">-1</td>
                                <td className="p-2.5 border-r border-slate-200 text-blue-700 font-bold">+1</td>
                                <td className="p-2.5 bg-blue-50/80 font-black text-blue-950">+6 (6가 전하)</td>
                              </tr>
                              <tr className="bg-amber-50/50">
                                <td className="p-2.5 font-black text-slate-900 border-r border-slate-200 text-left pl-3">상대적 생물학적 효과 (RBE)</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">1</td>
                                <td className="p-2.5 border-r border-slate-200 text-slate-600">1</td>
                                <td className="p-2.5 border-r border-slate-200 text-blue-700 font-bold">1.1</td>
                                <td className="p-2.5 bg-amber-100/80 font-black text-rose-700 text-sm">2 ~ 3 배 (압도적 살상력)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Visual Particle Mass Bubble Diagram */}
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-center">
                        <span className="text-xs font-black text-slate-800 block">
                          [시각 자료 1] 방사선치료에 사용되는 입자의 질량비 및 전하 크기 비교
                        </span>
                        <div className="flex items-center justify-around flex-wrap gap-4 py-4 bg-white rounded-xl border border-slate-200/80 p-4">
                          {/* X-ray */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                              ~
                            </div>
                            <span className="text-xs font-bold text-slate-700">X-rays (광자)</span>
                            <span className="text-[10px] text-slate-500">질량 0 / 전하 0</span>
                          </div>
                          {/* Electron */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-slate-400 flex items-center justify-center text-[8px] text-white font-bold">
                              e⁻
                            </div>
                            <span className="text-xs font-bold text-slate-700">Electron (전자)</span>
                            <span className="text-[10px] text-slate-500">질량 1 / 전하 -1</span>
                          </div>
                          {/* Proton */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                              H⁺
                            </div>
                            <span className="text-xs font-bold text-blue-900">Proton (양성자)</span>
                            <span className="text-[10px] text-blue-700 font-semibold">질량 2,000 / 전하 +1</span>
                          </div>
                          {/* Carbon Heavy Ion */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-blue-900 text-white font-black text-sm flex flex-col items-center justify-center shadow-md ring-4 ring-blue-200">
                              <span>Carbon</span>
                              <span className="text-[11px] font-bold text-amber-300">¹²C⁶⁺</span>
                            </div>
                            <span className="text-xs font-black text-indigo-950">Carbon Ion (중입자)</span>
                            <span className="text-[11px] font-black text-rose-600">질량 24,000 (양성자 12배) / 전하 +6</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bragg Peak & DNA Damage Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'gender') && (
                    <div className="space-y-5">
                      {/* Visual Bragg Peak Graph */}
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                            <span>📈 [시각 자료 2] 중입자의 브래그 피크(Bragg Peak) 에너지 전달 곡선</span>
                          </h4>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[10px] font-bold rounded">
                            정상세포 보호 &amp; 암세포 집중 타격
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          목표 지점(암 부위)에서 에너지가 최대(100%)로 방출되는 <strong>브래그 피크(Bragg Peak)</strong> 특성으로, 빛의 속도 70%로 가속된 탄소 이온이 암세포 표적 깊이에서 폭발적 에너지를 방출하고 그 직후 즉시 소멸하여 주변 정상 장기 손상을 방지합니다.
                        </p>

                        {/* Bragg Peak Graph Container */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                          <div className="relative h-56 w-full flex items-end pt-6 pb-8 px-8 border-b border-l border-slate-300">
                            {/* Y-axis Label */}
                            <span className="absolute -left-2 top-2 text-[10px] font-bold text-slate-500">용량 (%)</span>
                            <span className="absolute left-1 top-8 text-[9px] text-slate-400">100%</span>
                            <span className="absolute left-1 top-24 text-[9px] text-slate-400">50%</span>
                            <span className="absolute left-1 bottom-8 text-[9px] text-slate-400">0%</span>

                            {/* X-axis Label */}
                            <span className="absolute right-4 -bottom-6 text-[10px] font-bold text-slate-500">조직 침투 깊이 depth in tissue (cm)</span>
                            <span className="absolute left-12 -bottom-5 text-[9px] text-slate-400">0</span>
                            <span className="absolute left-1/3 -bottom-5 text-[9px] text-slate-400">5</span>
                            <span className="absolute left-2/3 -bottom-5 text-[9px] text-slate-400">10</span>
                            <span className="absolute right-12 -bottom-5 text-[9px] text-slate-400">15 (암 조직)</span>

                            {/* Tumor Zone Highlight */}
                            <div className="absolute right-8 top-4 bottom-8 w-16 bg-rose-100/80 border-x border-rose-300 flex items-center justify-center">
                              <span className="text-[11px] font-black text-rose-800 rotate-0 sm:rotate-0 text-center">
                                🎯 종양<br/>(암세포)
                              </span>
                            </div>

                            {/* SVG Curves */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
                              {/* Grid lines */}
                              <line x1="40" y1="20" x2="380" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
                              <line x1="40" y1="100" x2="380" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
                              <line x1="40" y1="170" x2="380" y2="170" stroke="#e2e8f0" strokeWidth="1"/>

                              {/* X-ray Curve (Green) */}
                              <path
                                d="M 40 170 Q 70 30, 100 40 T 200 90 T 320 130 T 380 150"
                                fill="none"
                                stroke="#16a34a"
                                strokeWidth="3"
                              />

                              {/* Heavy Ion Bragg Peak Curve (Blue / Red Peak) */}
                              <path
                                d="M 40 140 C 120 140, 240 135, 300 130 Q 325 125, 335 20 Q 340 15, 345 160 L 380 170"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="4"
                              />

                              {/* Bragg Peak Point Indicator */}
                              <circle cx="335" cy="20" r="6" fill="#dc2626" className="animate-pulse" />
                            </svg>
                          </div>

                          {/* Legend */}
                          <div className="flex items-center justify-center gap-6 pt-6 text-xs font-bold">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-1 bg-emerald-600 rounded"></div>
                              <span className="text-emerald-900">X-선 (표면 조사량 높고 투과 중 감소)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-1.5 bg-blue-600 rounded"></div>
                              <span className="text-blue-900 font-black">중입자 (표면 저선량 ➔ 종양 깊이에서 브래그 피크 폭발 ➔ 직후 0)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* DNA Structural Damage Breakdown */}
                      <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-sm font-black text-indigo-950 flex items-center gap-2">
                            <span>🧬 [시각 자료 3] 방사선 종류에 따른 DNA 절단 메커니즘 차이</span>
                          </h4>
                          <span className="text-[10px] text-indigo-700 font-bold">출처: Nature 508, 133-138</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Conventional X-ray / Proton */}
                          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                            <span className="text-xs font-black text-slate-800 block">
                              X-선 / 양성자치료 (X-ray &amp; Proton)
                            </span>
                            <div className="p-3 bg-slate-50 rounded-lg text-center font-mono text-xs font-bold text-amber-700">
                              DNA 단일 가닥 절단 (Single-Strand Break)
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              에너지가 드문드문 작용하여 DNA 한쪽 가닥만 절단됩니다. 암세포가 스스로 DNA를 복구하여 살아남거나 재발할 위험이 존재합니다.
                            </p>
                          </div>

                          {/* Heavy Ion Carbon */}
                          <div className="p-4 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-xl space-y-2 border border-blue-700">
                            <span className="text-xs font-black text-amber-300 block">
                              중입자치료 (Carbon-Ion Beam)
                            </span>
                            <div className="p-3 bg-blue-900/90 rounded-lg text-center font-mono text-xs font-black text-amber-300 border border-amber-400/50">
                              DNA 이중 가닥 절단 (Clustered Double-Strand Break)
                            </div>
                            <p className="text-xs text-blue-100 leading-relaxed">
                              고밀도 탄소 입자가 암세포 DNA 이중 가닥을 완전히 부숴버립니다. 암세포의 자체 복구가 절대 불가능하여 확실한 암세포 사멸을 유도합니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Treatment Benefits & Target Cancers Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <span>🏆 중입자치료 현존 최고 암치료기 3대 핵심 장점</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                            1
                          </div>
                          <strong className="text-xs font-black text-emerald-950 block">대부분의 난치암 적용 가능</strong>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            기존 수술이나 방사선으로 치료가 어려웠던 난치성 암(췌장암, 간암, 폐암, 전립선암, 두경부암, 육종 등) 치료 가능.
                          </p>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                            2
                          </div>
                          <strong className="text-xs font-black text-blue-950 block">부작용이 현저히 적은 치료</strong>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            브래그 피크 특성으로 정상 장기 방사선 노출이 극소화되어 고령자 및 고위험군 환자도 안전하게 치료 가능.
                          </p>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-black text-sm flex items-center justify-center">
                            3
                          </div>
                          <strong className="text-xs font-black text-purple-950 block">짧은 치료기간 (환자 편의성)</strong>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            기존 방사선 평균 25회(1~2달) ➔ 중입자 평균 12회(3주 내외) 단축! 통원 치료로 빠른 사회복귀 가능.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sales Briefing Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-3">
                      <strong className="text-xs text-amber-950 font-black block text-sm">
                        💡 [설계사 셀링 포인트] 중입자치료 영업 브리핑 가이드
                      </strong>
                      <div className="space-y-2 text-xs text-slate-800 leading-relaxed">
                        <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
                          <span className="font-black text-rose-700 block">1. "꿈의 암치료 중입자치료, 비급여 치료비 약 5,000만~1억 원 발생!"</span>
                          <p className="text-slate-600">
                            중입자치료는 건강보험 미적용 비급여 치료로 회당/코스당 고액 비용이 발생합니다. 이에 따라 고액 암진단비 및 표적/특수방사선치료비 특약(중입자치료 보장)의 선제적 가입 필수성을 설득하세요.
                          </p>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
                          <span className="font-black text-blue-900 block">2. "췌장암·폐암·간암 등 3대 난치암 완치율 획기적 향상!"</span>
                          <p className="text-slate-600">
                            생존율이 낮은 췌장암, 간암, 폐암 환자에게 수술 없이 암세포를 완전 사멸시키는 혁신적 대안을 제시하여 암보험 보장 자산의 가치를 높이세요.
                          </p>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
                          <span className="font-black text-emerald-900 block">3. "단 12회 통원 치료로 일상생활 유지!"</span>
                          <p className="text-slate-600">
                            입원 없이 3주 내 12회 치료로 끝나므로 경제활동을 중단하지 않고 치료를 받을 수 있는 점을 적극 안내하세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 9 ? (
                <div className="space-y-6 text-left">
                  {/* Summary Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-2">
                        <h4 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
                          <span>📌 위암 재발 및 전이 핵심 임상 요약 (국가암지식정보센터 공식자료)</span>
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          전체 위암 환자의 <strong className="text-rose-700 underline font-black">40~60%는 재발로 인해 생명을 잃습니다</strong>. 암 자체가 진행되거나 수술 후 재발하는 것이 주요 사망 원인입니다. 특히 수술 후 누적 재발 통계를 보면 <strong className="text-emerald-900 underline font-black">전체 재발의 90%가 수술 후 5년 이내에 집중</strong>되므로, 최소 5년간의 철저한 주기적 추적검사가 생존율을 결정짓습니다.
                        </p>
                      </div>

                      {/* Cumulative Rates Card Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-1.5 text-center">
                          <span className="text-[11px] font-bold text-rose-800">수술 후 2년 내 발생</span>
                          <strong className="text-xl font-black text-rose-950 block">전체 재발의 50%</strong>
                          <p className="text-[11px] text-rose-900 leading-normal">
                            초기 2년이 가장 위험한 고비! 3~6개월 단위 집중 추적 관찰 필수.
                          </p>
                        </div>
                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5 text-center">
                          <span className="text-[11px] font-bold text-amber-800">수술 후 3년 내 발생</span>
                          <strong className="text-xl font-black text-amber-950 block">전체 재발의 70%</strong>
                          <p className="text-[11px] text-amber-900 leading-normal">
                            3년 내 10명 중 7명 재발. 복부 CT 및 내시경, 종양표지자 정기 검사.
                          </p>
                        </div>
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1.5 text-center">
                          <span className="text-[11px] font-bold text-emerald-800">수술 후 5년 내 발생</span>
                          <strong className="text-xl font-black text-emerald-950 block">전체 재발의 90%</strong>
                          <p className="text-[11px] text-emerald-900 leading-normal">
                            재발의 90%가 5년 안에서 발생. 산정특례 5년과 재발 위험 시기 일치!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3 Major Types of Recurrence & Metastasis */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'gender') && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                        <span>🩺 위암의 3대 재발 및 전이 유형 완벽 분석</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-purple-900">① 국소 재발 (Local)</span>
                            <span className="px-2 py-0.5 bg-purple-200 text-purple-900 text-[10px] font-bold rounded">가장 흔함</span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            · <strong>발생 위치</strong>: 수술한 자리 주위 <strong>림프절</strong>, 남아있는 위/식도, 십이지장.<br/>
                            · <strong>증상</strong>: 초기 무증상, 진행 시 배통증, 식욕 부진, 체중 감소, 대장 막힘(폐색).<br/>
                            · <strong>치료법</strong>: 복부 CT상 한 군데 국한 시 <strong>재수술</strong> 가능. 대동맥 주위 림프절 전이 시 전신 재발로 보아 <strong>항암화학요법</strong> 시행.
                          </p>
                        </div>

                        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-rose-900">② 복강 내 재발 (Peritoneal)</span>
                            <span className="px-2 py-0.5 bg-rose-200 text-rose-900 text-[10px] font-bold rounded">재수술 절대불가</span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            · <strong>발생 위치</strong>: 암세포가 씨가 뿌려진 듯 복강 내에 넓게 퍼짐 (복막 전이).<br/>
                            · <strong>증상</strong>: 장폐색(배 복통, 대변/방귀 차단), 복수 차오름.<br/>
                            · <strong>치료법</strong>: <strong>재수술 및 방사선 치료 절대 불가!</strong> 전신 <strong>항암화학요법</strong> 또는 완화 치료만 가능.
                          </p>
                        </div>

                        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-blue-900">③ 원격 장기 전이 (Distant)</span>
                            <span className="px-2 py-0.5 bg-blue-200 text-blue-900 text-[10px] font-bold rounded">전신 전이</span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            · <strong>발생 위치</strong>: 혈관/림프관을 타고 <strong>간, 폐, 뼈, 뇌</strong> 등 전신 타 장기 이동.<br/>
                            · <strong>특성</strong>: 뼈나 뇌 전이는 발견이 늦는 경향. 전이 장기별 심한 통증 및 신경마비.<br/>
                            · <strong>치료법</strong>: 전신 <strong>항암화학요법</strong> + 통증 완화 및 표적/면역항암 특약 소구.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Follow-up Schedule & Tests */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900">📊 수술 후 주기적 추적검사 일정 및 필수 검사항목</h4>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3 bg-white border border-slate-200 rounded-lg">
                            <span className="text-xs font-black text-[#123941] block mb-1">📅 첫 3년 동안 추적검사 주기</span>
                            <p className="text-xs text-slate-700"><strong>3개월 ~ 6개월 마다</strong> 정기 외래 방문 및 종합 검사 실시</p>
                          </div>
                          <div className="p-3 bg-white border border-slate-200 rounded-lg">
                            <span className="text-xs font-black text-[#123941] block mb-1">📅 3년 ~ 5년 동안 추적검사 주기</span>
                            <p className="text-xs text-slate-700"><strong>6개월 ~ 1년 마다</strong> 정기 외래 방문 및 검사 실시</p>
                          </div>
                        </div>
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg space-y-1">
                          <span className="text-xs font-black text-emerald-900 block">🩺 필수 추적검사 5가지 항목</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-700">
                            <li>· <strong>혈액 검사</strong>: 일반 혈액검사(CBC), 간기능 검사</li>
                            <li>· <strong>종양표지자 검사</strong>: CEA, CA19-9 수치 추적</li>
                            <li>· <strong>복부 CT (전산화단층촬영)</strong>: 복강/림프절 재발 관찰</li>
                            <li>· <strong>내시경 검사</strong>: 식도·위 내시경 (잔존 위 재발)</li>
                            <li>· <strong>흉부 X-선 촬영</strong>: 폐전이 및 흉수 유무 확인</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sales Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
                      <strong className="text-xs text-amber-950 font-black block">💡 [설계사 셀링 포인트] 위암 재발·전이 영업 브리핑 가이드</strong>
                      <ul className="space-y-1.5 text-xs text-slate-800 leading-relaxed">
                        <li><strong>1. "수술 후 5년 이내 90%가 재발합니다!" ➔ 계속받는 암진단비 / 재발전이암 특약 필수!</strong><br/>위암 환자 40~60%가 재발로 사망하고 수술 후 2년 내 50%, 5년 내 90% 재발하므로 1회성 진단비 소진에 대비해 재발·전이 시 매번 지급되는 암진단비 준비를 강조.</li>
                        <li><strong>2. "복강 내 재발 시 재수술 불가! 전신 항암치료비 선제 준비" ➔ 표적/면역항암치료비 소구</strong><br/>복강 내 재발(복막 전이) 시 재수술이 불가능하여 오직 표적/면역항암제 등 2차·3차 화학요법에 의존하므로 고액 비급여 항암 약물 치료비 특약 소구.</li>
                        <li><strong>3. "장폐색·복수 차오름 &amp; 간·뼈·뇌 전이 통증 완화" ➔ 항암방사선약물치료비 &amp; 질병후유장해</strong><br/>뼈 전이 시 병적 골절, 뇌 전이 시 마비 장애가 발생하므로 질병후유장해(3~100%) 및 완화 목적의 방사선/약물치료비를 포괄적으로 설계.</li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 8 ? (
                <div className="space-y-6 text-left">
                  {/* Summary Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-4">
                      <div className="p-4 bg-pink-50 border border-pink-200 rounded-2xl space-y-2">
                        <h4 className="text-sm font-black text-[#831843] flex items-center gap-1.5">
                          <span>📌 유방암 재발 및 전이 핵심 임상 요약</span>
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          유방암은 0~2기 발견 시 5년 상대생존율이 <strong>90% 이상</strong>으로 치료 성적이 양호하지만, 수술 후 5년 치료를 마친 뒤에도 <strong className="text-[#831843] underline">10년~20년 후 발생하는 '후기 재발' 비율이 전체 재발의 25%</strong>에 달합니다. 의학계에서는 완치라는 표현 대신 장기 추적검사를 권고합니다.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                          <span className="text-xs font-bold text-slate-500">영국 Lancet(란셋) 논문 통계</span>
                          <strong className="text-sm font-black text-[#831843] block">호르몬 수용체 양성 유방암 (70%)</strong>
                          <p className="text-xs text-slate-600 leading-normal">
                            5년 항호르몬 치료 후에도 10년 재발률 14%, 15년 재발률 25% 도달. 이에 따라 고위험군은 복용 기간을 10년으로 연장 적용.
                          </p>
                        </div>
                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5">
                          <span className="text-xs font-bold text-amber-800">의료비 위험 요인</span>
                          <strong className="text-sm font-black text-amber-950 block">5년 산정특례 종료에 따른 검사비 급증</strong>
                          <p className="text-xs text-amber-900 leading-normal">
                            5년 경과 시 본인부담 5% 혜택 소멸로 PET-CT, MRI, 뼈스캔 검사비 부담 급증. 검사 미룸으로 후기 원격전이 발견 지연 위험.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gender / Organ Metastasis Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'gender') && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                        <span>🩺 원격 전이 (Metastatic Recurrence) 주요 발생 장기 Top 4</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 bg-pink-50/50 border border-pink-200 rounded-xl space-y-1">
                          <span className="text-xs font-black text-[#831843]">1위. 뼈 (골) 전이</span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            척추, 골반, 대퇴골 극심한 통증 및 병적 압박골절. 방사선치료 &amp; 데노수맙 표적주사. <strong>질병후유장해(3~100%)</strong> 소구.
                          </p>
                        </div>
                        <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl space-y-1">
                          <span className="text-xs font-black text-blue-900">2위. 폐 전이</span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            지속적 기침, 가슴 답답함, 숨참, 흉수 발생. 국소 단독전이 시 폐절제술 및 표적/면역항암치료.
                          </p>
                        </div>
                        <div className="p-3.5 bg-amber-50/50 border border-amber-200 rounded-xl space-y-1">
                          <span className="text-xs font-black text-amber-900">3위. 간 전이</span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            우상복부 통증, 황달, 복수, 간기능 저하. 허셉틴/엔허투 등 전신 표적항암치료 및 고주파열치료(RFA).
                          </p>
                        </div>
                        <div className="p-3.5 bg-slate-100 border border-slate-300 rounded-xl space-y-1">
                          <span className="text-xs font-black text-slate-900">4위. 중추신경계 (뇌 전이)</span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            심한 두통, 아침 구토, 어지럼증, 사지 신경 마비. 감마나이프 / 사이버나이프 정밀 방사선수술 특약 제안.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Age / Comparison Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900">📊 국소 재발 vs 전이성 재발 (원격 전이) 비교</h4>
                      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                              <th className="p-2.5">구분</th>
                              <th className="p-2.5">국소 재발 (Local)</th>
                              <th className="p-2.5">전이성 재발 (원격 전이)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-800">
                            <tr>
                              <td className="p-2.5 font-bold text-[#831843]">발생 부위</td>
                              <td className="p-2.5">수술 유방 조직, 흉터, 동측 림프절</td>
                              <td className="p-2.5 font-bold text-rose-700">뼈(1위) &gt; 폐 &gt; 간 &gt; 중추신경계(뇌)</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-bold text-[#831843]">발생 시기</td>
                              <td className="p-2.5">80~90%가 5년 내 발생</td>
                              <td className="p-2.5 font-bold text-blue-900">5년 후 10~20년 뒤에도 지속 발생 (후기재발 25%)</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-bold text-[#831843]">보장 핵심</td>
                              <td className="p-2.5 font-semibold text-emerald-800">재진단암 / 암재발 특약</td>
                              <td className="p-2.5 font-semibold text-rose-800">고액 진단비 &amp; 질병후유장해(3~100%)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Sales Subtab Content */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-4 bg-pink-50 border border-pink-200 rounded-2xl space-y-2">
                      <strong className="text-xs text-[#831843] font-black block">💡 [설계사 셀링 포인트] 영업 브리핑 핵심 가이드</strong>
                      <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                        <li><strong>1. 10~20년 장기 재발 보장</strong>: 호르몬 양성(70%)은 10~15년 재발률이 25%이므로 재진단암 / 암재발 특약 필수!</li>
                        <li><strong>2. 산정특례 5년 만료 의료비 공백 메우기</strong>: 5년 후 본인부담 5% 종료 시 PET-CT/MRI 검사비 부담 소구 ➔ 암진단비 확보.</li>
                        <li><strong>3. 뼈·뇌 전이 장애 대비</strong>: 뼈전이 척추골절 &amp; 뇌전이 마비에 대비해 질병후유장해(3~100%) 및 방사선수술비 특약 제안.</li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 7 ? (
                <div className="space-y-6 text-left">
                  {/* Key Principles Banner */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                      <h4 className="text-sm font-black text-[#123941] flex items-center gap-1.5">
                        <span>💡 대장암 치료방법 결정 핵심 기준</span>
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        대장암의 치료법을 결정하는 데서 가장 중요한 것은 <strong className="text-emerald-800 underline">종양의 크기가 아니라 암세포가 조직을 침투한 정도(침윤도)</strong>입니다. 대게 수술, 항암화학요법, 방사선치료를 적절히 병행합니다.
                      </p>
                    </div>
                  )}

                  {/* Section 1: Endoscopic & Surgical Resection */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                        <h4 className="text-sm font-black text-slate-900">🔬 1. 내시경적 절제술 (Endoscopic Resection)</h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          암세포의 분화도가 우수하고, 혈관이나 림프관을 침범하지 않으며, 점막 또는 점막하층 일부에만 국한된 조기 대장암의 경우 수술 없이 내시경적 용종절제술(Snare Resection)로 치료 가능합니다.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                          <div className="p-2.5 bg-white border border-slate-200 rounded-xl">
                            <span className="font-bold text-slate-900 block">Step A</span>
                            <span className="text-[11px] text-slate-600">내시경 병변 관찰</span>
                          </div>
                          <div className="p-2.5 bg-white border border-teal-200 rounded-xl">
                            <span className="font-bold text-teal-800 block">Step B</span>
                            <span className="text-[11px] text-slate-600">스네어 올가미 걸기</span>
                          </div>
                          <div className="p-2.5 bg-white border border-blue-200 rounded-xl">
                            <span className="font-bold text-blue-800 block">Step C</span>
                            <span className="text-[11px] text-slate-600">고주파 전류 통전 절제</span>
                          </div>
                          <div className="p-2.5 bg-white border border-emerald-200 rounded-xl">
                            <span className="font-bold text-emerald-800 block">Step D</span>
                            <span className="text-[11px] text-slate-600">절제 조직 회수 검사</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                        <h4 className="text-sm font-black text-slate-900">🔪 2. 수술적 절제 (결장암 & 직장암 위치별 절제술)</h4>
                        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                          <table className="w-full text-xs text-center border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                                <th className="py-2.5 px-2 border-r border-slate-200">암 위치</th>
                                <th className="py-2.5 px-2 border-r border-slate-200">수술명</th>
                                <th className="py-2.5 px-2 border-r border-slate-200">절제 및 문합 방식</th>
                                <th className="py-2.5 px-2">인공항문(장루) 조성 여부</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                              <tr>
                                <td className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200">우측 결장</td>
                                <td className="py-2 px-2 border-r border-slate-200">우측 결장절제술</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-left">맹장, 상행결장, 횡행결장 근위부 절제 ➔ 회장결장문합</td>
                                <td className="py-2 px-2 text-slate-500">없음 (자연 항문)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200">횡행/좌측/에스결장</td>
                                <td className="py-2 px-2 border-r border-slate-200">횡행/좌측 결장절제술, 전방절제술</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-left">해당 결장 절제 후 결장-결장 또는 결장-직장 문합</td>
                                <td className="py-2 px-2 text-slate-500">없음 (자연 항문)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-2 font-bold bg-blue-50 border-r border-slate-200 text-blue-900">상부/중간부 직장</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-blue-900 font-bold">저위전방절제술</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-left">직장 절제 후 결장-직장 자동문합기 문합 (괄약근 보존)</td>
                                <td className="py-2 px-2 text-blue-800 font-bold">필요시 임시 회장루 (복구 가능)</td>
                              </tr>
                              <tr className="bg-rose-50/60 text-rose-900 font-bold">
                                <td className="py-2 px-2 border-r border-slate-200">하부 직장 (항문 3~5cm)</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-rose-800">복회음절제술 (Miles)</td>
                                <td className="py-2 px-2 border-r border-slate-200 text-left">직장 전체 및 항문 괄약근 완전 절제 후 복부 적출</td>
                                <td className="py-2 px-2 font-black text-rose-700">영구 인공항문 (복부 장루) 조성</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 2: Chemotherapy & Targeted/Immuno Therapy */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'gender') && (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                        <h4 className="text-sm font-black text-slate-900">💊 3. 항암화학요법 및 표적·면역치료제 라인업</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                            <span className="font-bold text-slate-900 text-xs block">세포독성 항암제</span>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              5-FU, 카페시타빈(젤로다), 옥살리플라틴, 이리노테칸, 론서프. 수술 후 6개월 보조항암 및 전이암 표준투여.
                            </p>
                          </div>
                          <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1.5">
                            <span className="font-bold text-teal-800 text-xs block">표적치료제 (Targeted)</span>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              베바시주맙(아바스틴), 세툭시맙(얼비툭스), 브라프토비, 엔허투. 신생혈관 및 EGFR 표적 차단.
                            </p>
                          </div>
                          <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl space-y-1.5">
                            <span className="font-bold text-emerald-900 text-xs block">면역관문억제제 (Immuno)</span>
                            <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                              펨브롤리주맙(키트루다), 옵디보, 젬퍼리. MSI-H / dMMR 유전자 변이 대상 신기술.
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 bg-emerald-100/70 border border-emerald-300 rounded-xl text-xs text-emerald-950 space-y-1">
                          <strong className="font-black text-emerald-900 text-sm block">🌟 [혁신 신기술] 수술 전 선행면역치료 (Neoadjuvant Watch & Wait)</strong>
                          <p className="leading-relaxed">
                            수술 전 젬퍼리/키트루다 투여시 <strong className="text-rose-700 underline">완전관해율(cCR) 90~100% 달성!</strong> 수술 없이 항문 괄약근과 신체 기능을 완벽하게 보존하는 혁신적 비수술적 치료법이 가능해졌습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 3: Radiation Therapy */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <h4 className="text-sm font-black text-slate-900">⚡ 4. 방사선치료 & 전체수술전치료 (TNT)</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        국소 재발 위험이 높은 2~3기 직장암 환자를 대상으로 수술 전/후 25~30회 방사선 치료를 진행합니다. 최근에는 수술 전에 방사선+항암 치료를 모두 끝내는 <strong>TNT(Total Neoadjuvant Therapy)</strong> 요법으로 항문 보존율을 획기적으로 향상시킵니다.
                      </p>
                    </div>
                  )}

                  {/* Sales Pitch Guide */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-3">
                      <h4 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
                        <span>💡 [설계사 셀링 포인트] 대장암 보장 상담 대면 브리핑 가이드</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
                        <div className="bg-white p-3.5 rounded-xl border border-emerald-100 space-y-1">
                          <strong className="font-bold text-[#123941] block">1. 표적/면역항암 특약 필수</strong>
                          <p className="text-slate-600 text-[11.5px]">
                            아바스틴, 얼비툭스, 엔허투, 키트루다 등 비급여 고가 항암제 투여 비중이 늘어남에 따라 고액 약물치료비 특약 제안.
                          </p>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-emerald-100 space-y-1">
                          <strong className="font-bold text-rose-700 block">2. 인공항문(장루) 수술비 & 장애</strong>
                          <p className="text-slate-600 text-[11.5px]">
                            하부 직장암(항문 3~5cm) 절제시 영구 인공항문(장루)을 만들어야 하므로 장루 형성 수술비 및 질병후유장해 특약 점검.
                          </p>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-emerald-100 space-y-1">
                          <strong className="font-bold text-blue-700 block">3. 대장 용종절제 & D01 제자리암</strong>
                          <p className="text-slate-600 text-[11.5px]">
                            대장 내시경 용종(선종) 절제 및 조직검사 시 상피내암(D01) 판정 사례 빈번 ➔ 용종절제 수술비 및 유사암 진단비 보강.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 6 ? (
                <div className="space-y-6 text-left">
                  {/* Key Stats Row */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
                        <span className="text-xs text-teal-800 font-bold block">2023년 총 제자리암 발생자수</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-[#123941]">38,204 명</span>
                        </div>
                        <span className="text-[11px] text-teal-700 font-semibold mt-1 block">남 12,219명 / 여 25,985명 (여성이 2.1배)</span>
                      </div>
                      <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
                        <span className="text-xs text-rose-800 font-bold block">상피내암 조발생률 (인구 10만명당)</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-rose-950">74.7 명</span>
                        </div>
                        <span className="text-[11px] text-rose-700 font-semibold mt-1 block">남 48.0명 / 여 101.2명 (여성 100명 돌파)</span>
                      </div>
                      <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                        <span className="text-xs text-amber-800 font-bold block">1999년 대비 폭증률</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-amber-950">10.6 배 (962.7%↑)</span>
                        </div>
                        <span className="text-[11px] text-amber-700 font-semibold mt-1 block">1999년 3,595명 ➔ 2023년 38,204명</span>
                      </div>
                    </div>
                  )}

                  {/* Definition & Trend Chart */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                          <span>📈 1. 제자리암(상피내암) 발생자수 25년간 추이 (1999~2023)</span>
                        </h4>
                        <span className="text-[11px] text-slate-500 font-medium">출처: 보건복지부 · 국가암지식정보센터</span>
                      </div>
                      
                      {/* Definition */}
                      <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                        <strong>📌 상피내암(제자리암) 정의:</strong> 암이 원발 장소(상피층)에 머무르면서 다른 조직층으로의 침윤 및 악성의 행태를 보이지 않는 단계 (질병코드 D00~D09).
                      </div>

                      {/* SVG Graph */}
                      <div className="w-full overflow-x-auto bg-white border border-slate-200 rounded-xl p-3">
                        <svg viewBox="0 0 600 150" className="w-full h-auto max-h-[220px]">
                          <line x1="40" y1="20" x2="580" y2="20" stroke="#f1f5f9" strokeWidth="1"/>
                          <line x1="40" y1="50" x2="580" y2="50" stroke="#f1f5f9" strokeWidth="1"/>
                          <line x1="40" y1="80" x2="580" y2="80" stroke="#f1f5f9" strokeWidth="1"/>
                          <line x1="40" y1="110" x2="580" y2="110" stroke="#f1f5f9" strokeWidth="1"/>
                          <line x1="40" y1="130" x2="580" y2="130" stroke="#cbd5e1" strokeWidth="1"/>

                          <text x="35" y="23" fontSize="9" fill="#94a3b8" textAnchor="end">4만</text>
                          <text x="35" y="53" fontSize="9" fill="#94a3b8" textAnchor="end">3만</text>
                          <text x="35" y="83" fontSize="9" fill="#94a3b8" textAnchor="end">2만</text>
                          <text x="35" y="113" fontSize="9" fill="#94a3b8" textAnchor="end">1만</text>
                          <text x="35" y="133" fontSize="9" fill="#94a3b8" textAnchor="end">0</text>

                          <text x="60" y="145" fontSize="9" fill="#64748b" textAnchor="middle">1999</text>
                          <text x="125" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2011</text>
                          <text x="190" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2017</text>
                          <text x="255" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2018</text>
                          <text x="320" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2019</text>
                          <text x="385" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2020</text>
                          <text x="450" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2021</text>
                          <text x="515" y="145" fontSize="9" fill="#64748b" textAnchor="middle">2022</text>
                          <text x="565" y="145" fontSize="9" fill="#123941" fontWeight="bold" textAnchor="middle">2023</text>

                          <polyline fill="none" stroke="#123941" strokeWidth="2.5" points="60,120 125,90 190,57 255,53 320,47 385,49 450,34 515,31 565,25" />
                          <polyline fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3,3" points="60,129 125,120 190,106 255,104 320,102 385,103 450,100 515,99 565,96" />
                          <polyline fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="3,3" points="60,120 125,99 190,81 255,79 320,74 385,75 450,64 515,62 565,58" />

                          <circle cx="565" cy="25" r="4" fill="#123941" />
                          <circle cx="565" cy="96" r="3.5" fill="#2563eb" />
                          <circle cx="565" cy="58" r="3.5" fill="#e11d48" />

                          <rect x="420" y="8" width="130" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
                          <text x="485" y="21" fontSize="9" fill="#b45309" fontWeight="bold" textAnchor="middle">⚡ 1999년 대비 10.6배 폭증!</text>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Gender Ranking Subtab */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'gender') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900">👥 2. 2023년 성별 주요 상피내암 암종 순위</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Male */}
                        <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-2xl space-y-2">
                          <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                            <span className="text-xs font-black text-blue-900">👨 남성 주요 상피내암 (총 12,219명)</span>
                            <span className="text-[11px] font-bold text-blue-700">10만명당 48.0명</span>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-blue-100 font-bold">
                              <span>1위 대장암</span>
                              <span className="text-blue-800">5,378명 (44.0%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-200">
                              <span>2위 방광암</span>
                              <span className="font-semibold text-slate-700">2,654명 (21.7%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-200">
                              <span>3위 위암</span>
                              <span className="font-semibold text-slate-700">1,947명 (15.9%)</span>
                            </div>
                          </div>
                        </div>

                        {/* Female */}
                        <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
                          <div className="flex justify-between items-center pb-2 border-b border-rose-200">
                            <span className="text-xs font-black text-rose-900">👩 여성 주요 상피내암 (총 25,985명)</span>
                            <span className="text-[11px] font-bold text-rose-700">10만명당 101.2명</span>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-rose-100 font-bold">
                              <span>1위 자궁경부암</span>
                              <span className="text-rose-800">11,202명 (43.1%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-rose-100 font-bold">
                              <span>2위 유방암</span>
                              <span className="text-rose-800">7,018명 (27.0%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-200">
                              <span>3위 대장암</span>
                              <span className="font-semibold text-slate-700">3,162명 (12.2%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-200">
                              <span>4위 피부암</span>
                              <span className="font-semibold text-slate-700">1,177명 (4.5%)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-200">
                              <span>5위 위암</span>
                              <span className="font-semibold text-slate-700">772명 (3.0%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Year-by-year Trend Table */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-black text-slate-900">📊 3. 연도별 상피내암 발생자수 및 조발생률 상세 추이 (1999~2023)</h4>
                      <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                        <table className="w-full text-xs text-center border-collapse">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                              <th className="py-2.5 px-2 border-r border-slate-200">구분</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">성별</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">1999년</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">2011년</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">2017년</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">2019년</th>
                              <th className="py-2.5 px-2 border-r border-slate-200">2021년</th>
                              <th className="py-2.5 px-2 bg-teal-50 text-[#123941] font-black">2023년</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                            <tr>
                              <td rowSpan={3} className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200 text-slate-900">발생자수<br/>(명)</td>
                              <td className="py-2 px-2 border-r border-slate-200 font-bold">남녀전체</td>
                              <td className="py-2 px-2 border-r border-slate-200">3,595</td>
                              <td className="py-2 px-2 border-r border-slate-200">14,645</td>
                              <td className="py-2 px-2 border-r border-slate-200">26,596</td>
                              <td className="py-2 px-2 border-r border-slate-200">30,212</td>
                              <td className="py-2 px-2 border-r border-slate-200">34,736</td>
                              <td className="py-2 px-2 bg-teal-50/50 font-black text-[#123941]">38,204</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 border-r border-slate-200 text-blue-700 font-bold">남자</td>
                              <td className="py-2 px-2 border-r border-slate-200">120</td>
                              <td className="py-2 px-2 border-r border-slate-200">3,381</td>
                              <td className="py-2 px-2 border-r border-slate-200">8,660</td>
                              <td className="py-2 px-2 border-r border-slate-200">10,013</td>
                              <td className="py-2 px-2 border-r border-slate-200">11,008</td>
                              <td className="py-2 px-2 bg-teal-50/50 font-bold text-blue-800">12,219</td>
                            </tr>
                            <tr className="bg-rose-50/30">
                              <td className="py-2 px-2 border-r border-slate-200 text-rose-700 font-bold">여자</td>
                              <td className="py-2 px-2 border-r border-slate-200">3,475</td>
                              <td className="py-2 px-2 border-r border-slate-200">11,264</td>
                              <td className="py-2 px-2 border-r border-slate-200">17,936</td>
                              <td className="py-2 px-2 border-r border-slate-200">20,199</td>
                              <td className="py-2 px-2 border-r border-slate-200">23,728</td>
                              <td className="py-2 px-2 bg-rose-100/50 font-black text-rose-800">25,985</td>
                            </tr>
                            <tr className="border-t-2 border-slate-200">
                              <td rowSpan={3} className="py-2 px-2 font-bold bg-slate-50 border-r border-slate-200 text-slate-900">조발생률<br/>(10만명당)</td>
                              <td className="py-2 px-2 border-r border-slate-200 font-bold">남녀전체</td>
                              <td className="py-2 px-2 border-r border-slate-200">7.6</td>
                              <td className="py-2 px-2 border-r border-slate-200">29.2</td>
                              <td className="py-2 px-2 border-r border-slate-200">51.9</td>
                              <td className="py-2 px-2 border-r border-slate-200">58.8</td>
                              <td className="py-2 px-2 border-r border-slate-200">67.7</td>
                              <td className="py-2 px-2 bg-teal-50/50 font-black text-[#123941]">74.7</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 border-r border-slate-200 text-blue-700 font-bold">남자</td>
                              <td className="py-2 px-2 border-r border-slate-200">0.5</td>
                              <td className="py-2 px-2 border-r border-slate-200">13.5</td>
                              <td className="py-2 px-2 border-r border-slate-200">33.9</td>
                              <td className="py-2 px-2 border-r border-slate-200">39.1</td>
                              <td className="py-2 px-2 border-r border-slate-200">43.0</td>
                              <td className="py-2 px-2 bg-teal-50/50 font-bold text-blue-800">48.0</td>
                            </tr>
                            <tr className="bg-rose-50/30">
                              <td className="py-2 px-2 border-r border-slate-200 text-rose-700 font-bold">여자</td>
                              <td className="py-2 px-2 border-r border-slate-200">14.8</td>
                              <td className="py-2 px-2 border-r border-slate-200">45.0</td>
                              <td className="py-2 px-2 border-r border-slate-200">69.9</td>
                              <td className="py-2 px-2 border-r border-slate-200">78.5</td>
                              <td className="py-2 px-2 border-r border-slate-200">92.2</td>
                              <td className="py-2 px-2 bg-rose-100/50 font-black text-rose-800">101.2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Sales Briefing Guide Subtab */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 text-slate-800 space-y-2">
                      <strong className="text-xs sm:text-sm font-black block flex items-center gap-1.5 text-emerald-950">
                        💡 [설계사 셀링 포인트] 제자리암(유사암) 보장 브리핑 가이드
                      </strong>
                      <ul className="text-xs space-y-1.5 leading-relaxed font-medium">
                        <li>
                          <strong>1. 1999년 대비 10.6배 폭증하는 제자리암!</strong>: 건강검진 및 내시경 검사 증가로 조기 발견되는 제자리암 환자가 3만 8천명을 넘어섰습니다. 일반암 대비 축소되는 유사암 진단비 한도를 집중 점검하세요.
                        </li>
                        <li>
                          <strong>2. 여성 타겟 소구점 (자궁경부 43.1% + 유방 27.0% = 70.1%)</strong>: 여성 제자리암의 70.1%가 자궁경부 및 유방암! 20~40대 여성 고객 검진 시 자궁경부 제자리암 발견 급증에 따른 진단비/수술비 가입 소구.
                        </li>
                        <li>
                          <strong>3. 남성 타겟 소구점 (대장 44.0% + 방광 21.7% = 65.7%)</strong>: 남성 제자리암의 65.7%가 대장 및 방광! 내시경 대장용종(선종) 절제 후 조직검사 시 제자리암(D01) 판정 사례 빈번. 용종절제 및 제자리암 진단비 제안.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 5 ? (
                <div className="space-y-6 text-left">
                  {/* Key Stats Row */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
                        <span className="text-xs text-teal-800 font-bold block">60세 이상 암발생률 (고위험군)</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-[#123941]">10만명당 1,021.2 명</span>
                        </div>
                        <span className="text-[11px] text-teal-700 font-semibold mt-1 block">고령화에 따른 자연적 암발생 급증</span>
                      </div>
                      <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl">
                        <span className="text-xs text-blue-800 font-bold block">50대 남녀 암발생률 역전 지점</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-blue-950">50대 후반 남성 역전</span>
                        </div>
                        <span className="text-[11px] text-blue-700 font-semibold mt-1 block">50대 초반까지 여자 &gt; 50대 후반부터 남자 &gt; 여자</span>
                      </div>
                      <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
                        <span className="text-xs text-rose-800 font-bold block">조발생률 최고 연령군 (80세 이상)</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-rose-950">10만명당 1,867.1 명</span>
                        </div>
                        <span className="text-[11px] text-rose-700 font-semibold mt-1 block">80세 이상 남성 10만명당 2,930.2명 발병</span>
                      </div>
                    </div>
                  )}

                  {/* Summary & Top 10 Subtab (Graph & Table) */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
                          <span>📊 연령군별 암발생률 추이 (조발생률, 단위: 명/10만 명, 2023년)</span>
                          <span className="text-[11px] font-normal text-slate-500">출처: 국가암지식정보센터</span>
                        </h4>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                          <svg viewBox="0 0 500 160" className="w-full h-auto max-h-[220px]">
                            {/* Background Grid */}
                            <line x1="40" y1="20" x2="480" y2="20" stroke="#e2e8f0" strokeWidth="1"/>
                            <line x1="40" y1="50" x2="480" y2="50" stroke="#e2e8f0" strokeWidth="1"/>
                            <line x1="40" y1="80" x2="480" y2="80" stroke="#e2e8f0" strokeWidth="1"/>
                            <line x1="40" y1="110" x2="480" y2="110" stroke="#cbd5e1" strokeWidth="1"/>
                            
                            {/* Y-Axis Labels */}
                            <text x="35" y="23" fontSize="7" fill="#64748b" textAnchor="end">3,000</text>
                            <text x="35" y="53" fontSize="7" fill="#64748b" textAnchor="end">2,000</text>
                            <text x="35" y="83" fontSize="7" fill="#64748b" textAnchor="end">1,000</text>
                            <text x="35" y="113" fontSize="7" fill="#64748b" textAnchor="end">0</text>

                            {/* X-Axis Labels */}
                            <text x="50" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">0-9세</text>
                            <text x="100" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">10-19세</text>
                            <text x="150" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">20-29세</text>
                            <text x="200" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">30-39세</text>
                            <text x="250" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">40-49세</text>
                            <text x="300" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">50-59세</text>
                            <text x="350" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">60-69세</text>
                            <text x="400" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">70-79세</text>
                            <text x="450" y="125" fontSize="7" fill="#475569" textAnchor="middle" fontWeight="bold">80세이상</text>

                            {/* Polyline: Total (Purple) */}
                            <polyline fill="none" stroke="#8b5cf6" strokeWidth="2.5" points="
                              50,109.5 100,109.4 150,107.5 200,103.1 250,97.6 300,92.1 350,79.4 400,60.7 450,54.0
                            " />
                            
                            {/* Polyline: Male (Blue) */}
                            <polyline fill="none" stroke="#2563eb" strokeWidth="2.5" points="
                              50,109.5 100,109.5 150,108.5 200,105.7 250,102.7 300,94.4 350,72.2 400,39.0 450,22.1
                            " />

                            {/* Polyline: Female (Pink) */}
                            <polyline fill="none" stroke="#e11d48" strokeWidth="2.5" points="
                              50,109.6 100,109.4 150,106.5 200,100.4 250,92.3 300,89.8 350,86.3 400,79.1 450,70.9
                            " />

                            {/* Intersection Annotation Line */}
                            <line x1="300" y1="25" x2="300" y2="110" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,3"/>
                            <circle cx="300" cy="94.4" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx="300" cy="89.8" r="4" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
                            <rect x="235" y="8" width="130" height="18" rx="4" fill="#123941"/>
                            <text x="300" y="20" fontSize="7.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">50대 후반 남성 암발생률 역전!</text>

                            {/* Legend */}
                            <circle cx="320" cy="150" r="3.5" fill="#8b5cf6"/>
                            <text x="327" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">남녀전체</text>
                            
                            <circle cx="375" cy="150" r="3.5" fill="#2563eb"/>
                            <text x="382" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">남자</text>
                            
                            <circle cx="425" cy="150" r="3.5" fill="#e11d48"/>
                            <text x="432" y="152" fontSize="7.5" fill="#334155" fontWeight="bold">여자</text>
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
                          <span>📋 연령군별 암발생 현황 상세 데이터 (2023년)</span>
                          <span className="text-[11px] font-normal text-slate-500">(단위: 명, 명/10만 명)</span>
                        </h4>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                          <table className="w-full text-xs text-center border-collapse">
                            <thead>
                              <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                                <th rowSpan={2} className="p-2.5 border-r border-slate-200 min-w-[80px]">연령군</th>
                                <th colSpan={2} className="p-2.5 bg-teal-50 text-teal-900 border-r border-slate-200">남녀전체</th>
                                <th colSpan={2} className="p-2.5 bg-blue-50 text-blue-900 border-r border-slate-200">남자</th>
                                <th colSpan={2} className="p-2.5 bg-rose-50 text-rose-900">여자</th>
                              </tr>
                              <tr className="bg-slate-50 text-slate-600 font-bold text-[11px] border-b border-slate-200">
                                <th className="p-2 border-r border-slate-200">발생자수</th>
                                <th className="p-2 border-r border-slate-200">조발생률</th>
                                <th className="p-2 border-r border-slate-200">발생자수</th>
                                <th className="p-2 border-r border-slate-200">조발생률</th>
                                <th className="p-2 border-r border-slate-200">발생자수</th>
                                <th className="p-2">조발생률</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-800">
                              <tr>
                                <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">0-9세</td>
                                <td className="p-2.5 border-r border-slate-200">499</td>
                                <td className="p-2.5 border-r border-slate-200">14.5</td>
                                <td className="p-2.5 border-r border-slate-200">283</td>
                                <td className="p-2.5 border-r border-slate-200">16.1</td>
                                <td className="p-2.5 border-r border-slate-200">216</td>
                                <td className="p-2.5">12.9</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">10-19세</td>
                                <td className="p-2.5 border-r border-slate-200">889</td>
                                <td className="p-2.5 border-r border-slate-200">19.0</td>
                                <td className="p-2.5 border-r border-slate-200">438</td>
                                <td className="p-2.5 border-r border-slate-200">18.2</td>
                                <td className="p-2.5 border-r border-slate-200">451</td>
                                <td className="p-2.5">19.9</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">20-29세</td>
                                <td className="p-2.5 border-r border-slate-200">5,221</td>
                                <td className="p-2.5 border-r border-slate-200">83.0</td>
                                <td className="p-2.5 border-r border-slate-200">1,686</td>
                                <td className="p-2.5 border-r border-slate-200">51.2</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold text-rose-700">3,535</td>
                                <td className="p-2.5 font-bold text-rose-700">117.8</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 font-bold bg-slate-50 border-r border-slate-200">30-39세</td>
                                <td className="p-2.5 border-r border-slate-200">15,032</td>
                                <td className="p-2.5 border-r border-slate-200">228.9</td>
                                <td className="p-2.5 border-r border-slate-200">4,886</td>
                                <td className="p-2.5 border-r border-slate-200">143.4</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold text-rose-700">10,146</td>
                                <td className="p-2.5 font-bold text-rose-700">321.2</td>
                              </tr>
                              <tr className="bg-rose-50/50">
                                <td className="p-2.5 font-bold bg-rose-100/60 border-r border-slate-200 text-rose-950">40-49세</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">32,884</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">413.8</td>
                                <td className="p-2.5 border-r border-slate-200">9,801</td>
                                <td className="p-2.5 border-r border-slate-200">243.0</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-rose-700">23,083</td>
                                <td className="p-2.5 font-black text-rose-700">590.0</td>
                              </tr>
                              <tr className="bg-emerald-50/70 font-bold">
                                <td className="p-2.5 bg-emerald-100 border-r border-slate-200 text-emerald-950">50-59세 (역전구간)</td>
                                <td className="p-2.5 border-r border-slate-200">51,137</td>
                                <td className="p-2.5 border-r border-slate-200">595.4</td>
                                <td className="p-2.5 border-r border-slate-200 text-blue-900 font-black">22,451</td>
                                <td className="p-2.5 border-r border-slate-200 text-blue-900 font-black">518.5</td>
                                <td className="p-2.5 border-r border-slate-200 text-rose-900">28,686</td>
                                <td className="p-2.5 text-rose-900">673.7</td>
                              </tr>
                              <tr className="bg-blue-50/40">
                                <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">60-69세</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold text-[#123941]">76,309</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold text-[#123941]">1,021.2</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">46,225</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">1,258.9</td>
                                <td className="p-2.5 border-r border-slate-200">30,084</td>
                                <td className="p-2.5">791.6</td>
                              </tr>
                              <tr className="bg-blue-50/40">
                                <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">70-79세</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">63,747</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">1,641.9</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">42,060</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">2,367.7</td>
                                <td className="p-2.5 border-r border-slate-200">21,687</td>
                                <td className="p-2.5">1,029.7</td>
                              </tr>
                              <tr className="bg-blue-50/40">
                                <td className="p-2.5 font-bold bg-blue-100/60 border-r border-slate-200 text-blue-950">80세 이상</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">42,895</td>
                                <td className="p-2.5 border-r border-slate-200 font-bold">1,867.1</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">23,296</td>
                                <td className="p-2.5 border-r border-slate-200 font-black text-blue-800">2,930.2</td>
                                <td className="p-2.5 border-r border-slate-200">19,599</td>
                                <td className="p-2.5">1,304.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gender Analysis Subtab */}
                  {(activeReportSubTab === 'gender' || activeReportSubTab === 'summary') && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <span>⚡ 50대 남녀 암발생률 역전 및 연령별 성별 특이점 분석</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed text-slate-700">
                        <div className="p-3 bg-white rounded-xl border border-rose-200 space-y-1">
                          <strong className="text-rose-700 font-black block">👩 20~40대: 여성이 남성보다 암발생률 우위</strong>
                          <p>
                            갑상선암과 유방암의 호르몬 영향으로 20대부터 40대까지는 여성의 암발생률이 남성을 크게 상회합니다. (40대 여성 조발생률 590.0명 vs 남성 243.0명, 약 2.4배)
                          </p>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-blue-200 space-y-1">
                          <strong className="text-blue-700 font-black block">👨 50대 후반 이후: 남성이 여성을 역전 및 폭발적 증가</strong>
                          <p>
                            50대 후반부터 전립선암, 폐암, 대장암, 간암 등이 남성에서 급격히 증가하면서 역전 현상이 일어납니다. 80세 이상 남성 조발생률은 2,930.2명으로 여성(1,304.5명)의 2.2배에 달합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Age Group Cancers Subtab */}
                  {(activeReportSubTab === 'age' || activeReportSubTab === 'summary') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
                        <span>🩺 연령대별 자주 발생하는 1위 암종 현황 (2023년)</span>
                      </h4>

                      <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                        <table className="w-full text-xs text-center border-collapse">
                          <thead>
                            <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                              <th className="p-2.5 border-r border-slate-200 min-w-[70px]">구분</th>
                              <th className="p-2 border-r border-slate-200">0-9세</th>
                              <th className="p-2 border-r border-slate-200">10-19세</th>
                              <th className="p-2 border-r border-slate-200">20-29세</th>
                              <th className="p-2 border-r border-slate-200">30-39세</th>
                              <th className="p-2 border-r border-slate-200">40-49세</th>
                              <th className="p-2 border-r border-slate-200">50-59세</th>
                              <th className="p-2 border-r border-slate-200">60-69세</th>
                              <th className="p-2 border-r border-slate-200">70-79세</th>
                              <th className="p-2">80세이상</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                            <tr className="bg-slate-50/70">
                              <td className="p-2.5 bg-slate-100 border-r border-slate-200 text-slate-900">전체</td>
                              <td className="p-2 border-r border-slate-200">백혈병</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                              <td className="p-2 border-r border-slate-200 text-blue-800">폐</td>
                              <td className="p-2 border-r border-slate-200 text-blue-800">폐</td>
                              <td className="p-2 text-blue-800">폐</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 bg-blue-50 text-blue-900 border-r border-slate-200">남자</td>
                              <td className="p-2 border-r border-slate-200">백혈병</td>
                              <td className="p-2 border-r border-slate-200">백혈병</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">대장</td>
                              <td className="p-2 border-r border-slate-200 text-blue-700">전립선</td>
                              <td className="p-2 border-r border-slate-200 text-blue-700">전립선</td>
                              <td className="p-2 text-blue-700">폐</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 bg-rose-50 text-rose-900 border-r border-slate-200">여자</td>
                              <td className="p-2 border-r border-slate-200">백혈병</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200">갑상선</td>
                              <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                              <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                              <td className="p-2 border-r border-slate-200 text-rose-700">유방</td>
                              <td className="p-2 border-r border-slate-200">폐</td>
                              <td className="p-2">대장</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Sales Briefing Guide Subtab */}
                  {(activeReportSubTab === 'sales' || activeReportSubTab === 'summary') && (
                    <div className="bg-[#e6f4f1] border border-[#99d6cb] rounded-2xl p-4 text-[#0c282e] space-y-2">
                      <strong className="text-xs sm:text-sm font-black block flex items-center gap-1.5 text-[#123941]">
                        💡 [보험 설계사 브리핑 가이드] 연령별 암 보장 소구점 및 고객 제안 전략
                      </strong>
                      <ul className="text-xs space-y-1.5 leading-relaxed font-medium">
                        <li>
                          <strong>• 30~40대 여성 타겟 (유방암·갑상선암 폭발)</strong>: 40대 여성 암발생률은 10만명당 590.0명으로 동연령대 남성(243.0명)의 2.4배! 유방암/갑상선암 진단비 및 표적항암 특약 집중 설계.
                        </li>
                        <li>
                          <strong>• 50대 남성 골든타임 (성별 발생률 역전)</strong>: 50대 후반부터 남성 암발생률이 여성을 추월하며 60대(1,258.9명)에 급증. 50대 남성 대상 전립선암, 대장암, 위암 보장 및 뇌/심장 3대 진단비 보강 제안.
                        </li>
                        <li>
                          <strong>• 60대 이상 고령층 (10만명당 1,000명 돌파)</strong>: 60세 이상은 암 발생 고위험군으로, 간편심사 유병자 암보험, 표적항암약물허가치료비, 암수술비 및 입원/재가 특약 필수 가입 권유.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 4 ? (
                <div className="space-y-6 text-left">
                  {/* Top Key Statistics for Cancer Stats */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
                        <span className="text-xs text-teal-800 font-bold block">2023년 악성암 전체 발생자수</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-[#123941]">288,613 명</span>
                          <span className="text-xs font-bold text-teal-700 ml-auto bg-teal-100 px-1.5 py-0.5 rounded">
                            남 15.1만 / 여 13.7만
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">남녀 전체 1위 암종</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-slate-900">갑상선암</span>
                          <span className="text-xs font-bold text-slate-600">35,440명 (12.3%)</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">성별 1위 암종</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-lg font-black text-slate-900">남 전립선 / 여 유방</span>
                          <span className="text-xs font-bold text-rose-700 ml-auto bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                            남 15% / 여 21.6%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Summary & Top 10 Subtab */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
                        <span>🏆 2023년 주요 암발생 현황 (남녀 전체 Top 10)</span>
                        <span className="text-[11px] font-normal text-slate-500">(단위: 명, %, 명/10만명)</span>
                      </h4>

                      <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold text-[11px]">
                              <th className="p-2.5 text-center w-12">순위</th>
                              <th className="p-2.5">암종 (2022년 순위)</th>
                              <th className="p-2.5 text-right">발생자수(명)</th>
                              <th className="p-2.5 text-right">분율(%)</th>
                              <th className="p-2.5 text-right hidden sm:table-cell">조발생률</th>
                              <th className="p-2.5 text-right hidden md:table-cell">표준화발생률*</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                            <tr className="bg-teal-50/50 font-bold text-[#123941]">
                              <td className="p-2.5 text-center">-</td>
                              <td className="p-2.5">모든 악성암</td>
                              <td className="p-2.5 text-right">288,613</td>
                              <td className="p-2.5 text-right">100.0%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell">564.3</td>
                              <td className="p-2.5 text-right hidden md:table-cell">522.9</td>
                            </tr>
                            <tr className="bg-slate-50/60 text-slate-600">
                              <td className="p-2.5 text-center">-</td>
                              <td className="p-2.5">갑상선암 제외</td>
                              <td className="p-2.5 text-right">253,173</td>
                              <td className="p-2.5 text-right">87.7%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell">495.0</td>
                              <td className="p-2.5 text-right hidden md:table-cell">454.0</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-[#123941]">1</td>
                              <td className="p-2.5 font-bold text-slate-900">갑상선</td>
                              <td className="p-2.5 text-right font-bold text-slate-900">35,440</td>
                              <td className="p-2.5 text-right font-bold text-teal-700">12.3%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">69.3</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">68.9</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-slate-700">2</td>
                              <td className="p-2.5 font-bold text-slate-900">
                                폐 <span className="text-[10px] text-slate-500 font-normal">('22년 3위)</span>
                              </td>
                              <td className="p-2.5 text-right font-bold text-slate-900">32,953</td>
                              <td className="p-2.5 text-right font-bold text-teal-700">11.4%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">64.4</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">57.5</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-slate-700">3</td>
                              <td className="p-2.5 font-bold text-slate-900">
                                대장 <span className="text-[10px] text-slate-500 font-normal">('22년 2위)</span>
                              </td>
                              <td className="p-2.5 text-right font-bold text-slate-900">32,610</td>
                              <td className="p-2.5 text-right font-bold text-teal-700">11.3%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">63.8</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">58.7</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-rose-700">4</td>
                              <td className="p-2.5 font-bold text-slate-900">유방</td>
                              <td className="p-2.5 text-right font-bold text-slate-900">29,871</td>
                              <td className="p-2.5 text-right font-bold text-rose-700">10.3%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">58.4</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">56.8</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-slate-700">5</td>
                              <td className="p-2.5 font-bold text-slate-900">위</td>
                              <td className="p-2.5 text-right font-bold text-slate-900">28,943</td>
                              <td className="p-2.5 text-right font-bold text-slate-700">10.0%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">56.6</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">51.4</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-black text-blue-700">6</td>
                              <td className="p-2.5 font-bold text-slate-900">전립선</td>
                              <td className="p-2.5 text-right font-bold text-slate-900">22,640</td>
                              <td className="p-2.5 text-right font-bold text-blue-700">7.8%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">44.3</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">39.2</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-bold text-slate-600">7</td>
                              <td className="p-2.5 text-slate-900">간</td>
                              <td className="p-2.5 text-right text-slate-900">14,707</td>
                              <td className="p-2.5 text-right text-slate-700">5.1%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">28.8</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">26.1</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-bold text-slate-600">8</td>
                              <td className="p-2.5 text-slate-900">췌장</td>
                              <td className="p-2.5 text-right text-slate-900">9,748</td>
                              <td className="p-2.5 text-right text-slate-700">3.4%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">19.1</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">17.1</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-bold text-slate-600">9</td>
                              <td className="p-2.5 text-slate-900">담낭 및 기타담도</td>
                              <td className="p-2.5 text-right text-slate-900">7,997</td>
                              <td className="p-2.5 text-right text-slate-700">2.8%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">15.6</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">13.8</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 text-center font-bold text-slate-600">10</td>
                              <td className="p-2.5 text-slate-900">신장</td>
                              <td className="p-2.5 text-right text-slate-900">7,367</td>
                              <td className="p-2.5 text-right text-slate-700">2.6%</td>
                              <td className="p-2.5 text-right hidden sm:table-cell text-slate-600">14.4</td>
                              <td className="p-2.5 text-right hidden md:table-cell text-slate-600">13.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Gender Subtab */}
                  {(activeReportSubTab === 'gender' || activeReportSubTab === 'summary') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900">
                        👫 성별 주요 암발생 현황 (2023년 남성 vs 여성 Top 10)
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Male Table */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <span className="text-xs font-black text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
                              👨 남자 주요 암발생 (총 151,126명)
                            </span>
                            <span className="text-[10px] font-bold text-slate-500">조발생률 593.4</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="text-slate-500 border-b border-slate-200 font-bold text-[10px]">
                                  <th className="py-1.5 px-1 text-center">순위</th>
                                  <th className="py-1.5 px-1">암종 ('22년)</th>
                                  <th className="py-1.5 px-1 text-right">발생자수</th>
                                  <th className="py-1.5 px-1 text-right">분율</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200/60 font-medium text-slate-800">
                                <tr className="bg-blue-50/80 font-bold">
                                  <td className="py-1.5 px-1 text-center text-blue-800">1</td>
                                  <td className="py-1.5 px-1 text-blue-950">전립선 ('22년 2위 ↑)</td>
                                  <td className="py-1.5 px-1 text-right">22,640명</td>
                                  <td className="py-1.5 px-1 text-right text-blue-700">15.0%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">2</td>
                                  <td className="py-1.5 px-1">폐 ('22년 1위 ↓)</td>
                                  <td className="py-1.5 px-1 text-right">21,846명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">14.5%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">3</td>
                                  <td className="py-1.5 px-1">위 ('22년 4위 ↑)</td>
                                  <td className="py-1.5 px-1 text-right">19,295명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">12.8%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">4</td>
                                  <td className="py-1.5 px-1">대장 ('22년 3위 ↓)</td>
                                  <td className="py-1.5 px-1 text-right">19,156명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">12.7%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">5</td>
                                  <td className="py-1.5 px-1">간</td>
                                  <td className="py-1.5 px-1 text-right">10,875명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">7.2%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">6</td>
                                  <td className="py-1.5 px-1">갑상선</td>
                                  <td className="py-1.5 px-1 text-right">9,326명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">6.2%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">7</td>
                                  <td className="py-1.5 px-1">신장 ('22년 8위 ↑)</td>
                                  <td className="py-1.5 px-1 text-right">5,073명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">3.4%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">8</td>
                                  <td className="py-1.5 px-1">췌장 ('22년 7위 ↓)</td>
                                  <td className="py-1.5 px-1 text-right">4,925명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">3.3%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">9</td>
                                  <td className="py-1.5 px-1">방광 ('22년 10위 ↑)</td>
                                  <td className="py-1.5 px-1 text-right">4,465명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">3.0%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">10</td>
                                  <td className="py-1.5 px-1">담낭 및 기타담도</td>
                                  <td className="py-1.5 px-1 text-right">4,446명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">2.9%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Female Table */}
                        <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-4 space-y-2">
                          <div className="flex items-center justify-between pb-2 border-b border-rose-200">
                            <span className="text-xs font-black text-rose-900 bg-rose-100 px-2.5 py-0.5 rounded-full">
                              👩 여자 주요 암발생 (총 137,487명)
                            </span>
                            <span className="text-[10px] font-bold text-rose-700">조발생률 535.5</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="text-rose-700 border-b border-rose-200 font-bold text-[10px]">
                                  <th className="py-1.5 px-1 text-center">순위</th>
                                  <th className="py-1.5 px-1">암종 ('22년)</th>
                                  <th className="py-1.5 px-1 text-right">발생자수</th>
                                  <th className="py-1.5 px-1 text-right">분율</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-rose-200/60 font-medium text-slate-800">
                                <tr className="bg-rose-100/70 font-bold">
                                  <td className="py-1.5 px-1 text-center text-rose-900">1</td>
                                  <td className="py-1.5 px-1 text-rose-950">유방</td>
                                  <td className="py-1.5 px-1 text-right">29,715명</td>
                                  <td className="py-1.5 px-1 text-right text-rose-800">21.6%</td>
                                </tr>
                                <tr className="font-bold">
                                  <td className="py-1.5 px-1 text-center text-rose-800">2</td>
                                  <td className="py-1.5 px-1 text-rose-900">갑상선</td>
                                  <td className="py-1.5 px-1 text-right">26,114명</td>
                                  <td className="py-1.5 px-1 text-right text-rose-700">19.0%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">3</td>
                                  <td className="py-1.5 px-1">대장</td>
                                  <td className="py-1.5 px-1 text-right">13,454명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">9.8%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">4</td>
                                  <td className="py-1.5 px-1">폐</td>
                                  <td className="py-1.5 px-1 text-right">11,107명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">8.1%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center font-bold">5</td>
                                  <td className="py-1.5 px-1">위</td>
                                  <td className="py-1.5 px-1 text-right">9,648명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">7.0%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">6</td>
                                  <td className="py-1.5 px-1">췌장</td>
                                  <td className="py-1.5 px-1 text-right">4,823명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">3.5%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">7</td>
                                  <td className="py-1.5 px-1">자궁체부</td>
                                  <td className="py-1.5 px-1 text-right">4,037명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">2.9%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">8</td>
                                  <td className="py-1.5 px-1">간</td>
                                  <td className="py-1.5 px-1 text-right">3,832명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">2.8%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">9</td>
                                  <td className="py-1.5 px-1">담낭 및 기타담도</td>
                                  <td className="py-1.5 px-1 text-right">3,551명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">2.6%</td>
                                </tr>
                                <tr>
                                  <td className="py-1.5 px-1 text-center">10</td>
                                  <td className="py-1.5 px-1">난소</td>
                                  <td className="py-1.5 px-1 text-right">3,299명</td>
                                  <td className="py-1.5 px-1 text-right text-slate-600">2.4%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Crude Rate / Age Subtab */}
                  {(activeReportSubTab === 'age' || activeReportSubTab === 'summary') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900">
                        📈 조발생률 및 표준화발생률 지표 분석
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                          <strong className="text-slate-900 font-bold block">조발생률 (Crude Rate)</strong>
                          <p className="text-slate-600 leading-relaxed">
                            해당 인구 집단의 특정 기간 발생 인원수를 해당 인구로 나눈 확률 (인구 10만명당 발생수). 2023년 전체 악성암 조발생률은 <strong>564.3명</strong>입니다.
                          </p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                          <strong className="text-slate-900 font-bold block">연령표준화발생률 (Age-Standardized Rate)</strong>
                          <p className="text-slate-600 leading-relaxed">
                            연령구조 차이에 따른 영향을 제거하기 위해 2020년 주민등록연령인구를 표준인구로 보정한 발생률입니다. 2023년 모든 악성암 표준화발생률은 <strong>522.9명</strong>입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sales Briefing Subtab */}
                  {(activeReportSubTab === 'sales' || activeReportSubTab === 'summary') && (
                    <div className="bg-teal-50/90 border border-teal-200 rounded-2xl p-4 space-y-2 shadow-2xs">
                      <strong className="text-xs sm:text-sm text-[#123941] font-black block flex items-center gap-1.5">
                        💡 [설계사 셀링 포인트] 암종별 발생 현황 브리핑 소구 포인트
                      </strong>
                      <ul className="space-y-1.5 text-xs text-slate-800 font-medium leading-relaxed">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#123941] font-bold shrink-0">1.</span>
                          <span><strong>남성 전립선암 1위 급증 대응:</strong> 전립선암이 남성 발생 1위(22,640명, 15.0%)로 상승함에 따라, 50대 이상 남성 고객 상담 시 전립선비대증 및 전립선암 진단비·수술비 특약 가입 당위성을 안내합니다.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#123941] font-bold shrink-0">2.</span>
                          <span><strong>여성 유방암·갑상선암 40% 초과:</strong> 여성 암 환자 10명 중 4명 이상(40.6%)이 유방암(21.6%) 및 갑상선암(19.0%)입니다. 여성 전용 암진단비 및 표적항암 약물치료비 플랜을 보장분석 제안서에 꼭 포함하세요.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#123941] font-bold shrink-0">3.</span>
                          <span><strong>남녀 공통 주요 암(폐·대장·위) 입체 보장:</strong> 폐암, 대장암, 위암은 남녀 불문 최고 발병 위험을 자랑합니다. 단순 진단비 외에도 표적항암치료비, 항암방사선약물치료비, 암수술비 등 다층 보장 설계를 추천합니다.</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 3 ? (
                <div className="space-y-6 text-left">
                  {/* Top Key Statistics for Breast Cancer */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
                        <span className="text-xs text-rose-700 font-bold block">국내 여성 암 발병 순위</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-rose-900">전체 암 중 2위</span>
                          <span className="text-xs font-bold text-rose-700 ml-auto bg-rose-100 px-1.5 py-0.5 rounded">
                            세계적 지속 증가
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">연령표준화 사망률 (10만명당)</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-slate-900">6.1</span>
                          <span className="text-xs font-bold text-slate-600">명</span>
                          <span className="text-xs font-bold text-teal-700 ml-auto bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100">
                            OECD 최하위 수준
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">자가검진 조기발견 비율</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-[#123941]">70% 이상</span>
                          <span className="text-xs font-bold text-amber-700 ml-auto bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            매월 자가검진
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 1. Definition & Causes */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <h4 className="text-sm font-black text-slate-900">📌 1. 유방암 개요 및 3대 원인</h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        <strong>유방암이란?</strong> 유방 밖으로 퍼져 생명을 위협할 수 있는 악성 종양으로 유관(Milk Duct)과 유엽(Lobule) 세포에서 기원합니다.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 bg-white border border-slate-200 rounded-xl">
                          <span className="text-xs font-bold text-rose-700 block">유전/가족력</span>
                          <p className="text-xs text-slate-600 mt-1">모친/자매 한쪽 2~3배, 양쪽 8~12배 발병 위험 상승</p>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-xl">
                          <span className="text-xs font-bold text-amber-700 block">호르몬 요인</span>
                          <p className="text-xs text-slate-600 mt-1">이른 초경, 늦은 폐경, 장기 여성호르몬제 투여자</p>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-xl">
                          <span className="text-xs font-bold text-blue-700 block">연령 &amp; 출산</span>
                          <p className="text-xs text-slate-600 mt-1">40세 이상 비례 증가, 미혼, 무자녀, 미수유 여성</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Self Check & Screening */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age' || activeReportSubTab === 'top10') && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-black text-slate-900">🔍 2. 3단계 자가검진법 &amp; 연령별 검진권고안</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
                          <span className="text-xs font-black text-rose-950 block">✋ 3단계 자가검진 (생리 종료 2~7일 후)</span>
                          <div className="space-y-1 text-xs text-slate-800">
                            <div><strong>1단계:</strong> 거울 앞에서 모양, 유두, 피부 관찰</div>
                            <div><strong>2단계:</strong> 앉거나 서서 유방 및 겨드랑이 촉진</div>
                            <div><strong>3단계:</strong> 누워서 반대편 손가락 끝으로 원 촉진</div>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <span className="text-xs font-black text-slate-800 block">🗓️ 보건복지부 연령별 조기검진 권고안</span>
                          <div className="space-y-1 text-xs text-slate-700">
                            <div><strong>30세 이후:</strong> 매월 자가검진</div>
                            <div><strong>35세 이후:</strong> 2년 간격 의사 임상검진</div>
                            <div><strong>40세 이후:</strong> 1~2년 간격 촬영술 (필요시 초음파)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. Drug & Targeted Therapies */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <h4 className="text-sm font-black text-slate-900">💊 3. 약물치료 및 HER2 표적치료제 분석</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 bg-white border border-slate-200 rounded-xl">
                          <strong className="text-xs font-bold text-teal-800 block">항호르몬 요법</strong>
                          <span className="text-[11px] text-slate-600 block mt-1">아로마타제 억제제(아나스트로졸, 레트로졸), SERM(타목시펜, 풀베스트란트)</span>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-xl">
                          <strong className="text-xs font-bold text-rose-800 block">항암 화학 요법</strong>
                          <span className="text-[11px] text-slate-600 block mt-1">독소루비신, 사이클로포스파미드, 5-FU, 파클리탁셀</span>
                        </div>
                        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                          <strong className="text-xs font-bold text-rose-950 block">HER2 표적치료 (20~30%)</strong>
                          <span className="text-[11px] text-rose-900 font-semibold block mt-1">트라스투주맙(허셉틴), 퍼투주맙, T-DM1, 라파티닙</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. Sales Guide */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-4 bg-rose-50/90 border border-rose-200 rounded-2xl space-y-2">
                      <strong className="text-xs font-black text-rose-950 block">💡 [설계사 셀링 포인트] 유방암 브리핑 가이드</strong>
                      <ul className="text-xs text-rose-900 space-y-1 font-medium">
                        <li>• <strong>무증상 초기 조기검진:</strong> 초기 90% 이상 무증상이므로 정기 검진과 암진단비 가입 당위성 안내</li>
                        <li>• <strong>고가 HER2 표적치료비:</strong> 환자의 20~30%인 HER2 양성 유방암 표적항암약물치료비 특약 가입 강조</li>
                        <li>• <strong>장기 치료 보장 플랜:</strong> 수술 후 5년 이상 진행되는 항호르몬 요법과 방사선 치료에 대비한 든든한 설계</li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedReportId === 2 ? (
                <div className="space-y-6">
                  {/* Top Key Indicators for Disability */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">총 등록 장애인 수</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-slate-900">2,633,000</span>
                          <span className="text-xs font-bold text-slate-600">명</span>
                          <span className="text-xs font-bold text-[#123941] ml-auto bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100">
                            보건복지부 공식
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">전체 인구 대비 비율</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-rose-600">5.0</span>
                          <span className="text-xs font-bold text-rose-600">%</span>
                          <span className="text-xs font-bold text-rose-600 ml-auto bg-rose-50 px-1.5 py-0.5 rounded">
                            20명 중 1명
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs text-slate-500 font-bold block">60대 이상 장애 발생률</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-black text-[#123941]">8.9% ~ 22%</span>
                          <span className="text-xs font-bold text-rose-600 ml-auto bg-rose-50 px-1.5 py-0.5 rounded">
                            고령층 위험 급증
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Representative Disease Cards Section */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                    <div className="space-y-3">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center justify-between">
                        <span>🏥 1. 대표질환별 후유장해 지급률 요약</span>
                        <span className="text-xs font-semibold text-slate-500">(약관지급률 기준)</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 1. Eye */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                          <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-3">
                            <EyeIllustration />
                            <div>
                              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                [눈의 장해]
                              </span>
                              <h5 className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                                대표질환: 백내장, 녹내장
                              </h5>
                            </div>
                          </div>
                          <div className="p-3 space-y-1.5 text-xs text-slate-700 flex-1">
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 한 눈의 교정시력 0.2 이하</span>
                              <span className="font-bold text-slate-900">5%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 font-black text-blue-600 bg-blue-50/50 px-1 rounded">
                              <span>· 한 눈의 교정시력 0.1 이하</span>
                              <span>15%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 한 눈의 교정시력 0.06 이하</span>
                              <span className="font-bold text-slate-900">25%</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                              <span>· 한 눈의 교정시력 0.02 이하</span>
                              <span className="font-bold text-slate-900">35%</span>
                            </div>
                          </div>
                        </div>

                        {/* 2. Joint */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                          <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-3">
                            <JointIllustration />
                            <div>
                              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                [3대 관절 장해]
                              </span>
                              <h5 className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                                대표질환: 관절염, 골절
                              </h5>
                            </div>
                          </div>
                          <div className="p-3 space-y-1.5 text-xs text-slate-700 flex-1">
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 3대 관절 중 하나의 기능 약간장해</span>
                              <span className="font-bold text-slate-900">5%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 3대 관절 중 하나의 기능 뚜렷한 장해</span>
                              <span className="font-bold text-slate-900">10%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 font-black text-blue-600 bg-blue-50/50 px-1 rounded">
                              <span>· 3대 관절 중 하나의 기능 심한장해</span>
                              <span>20%</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                              <span>· 3대 관절 중 하나의 기능 완전상실</span>
                              <span className="font-bold text-slate-900">30%</span>
                            </div>
                          </div>
                        </div>

                        {/* 3. Spine */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                          <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-3">
                            <SpineIllustration />
                            <div>
                              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                [척추 장해]
                              </span>
                              <h5 className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                                대표질환: 추간판 탈출증 (디스크)
                              </h5>
                            </div>
                          </div>
                          <div className="p-3 space-y-1.5 text-xs text-slate-700 flex-1">
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 척추(등뼈)에 약간의 운동장해</span>
                              <span className="font-bold text-slate-900">10%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 척추(등뼈)에 뚜렷한 운동장해</span>
                              <span className="font-bold text-slate-900">30%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 font-black text-blue-600 bg-blue-50/50 px-1 rounded">
                              <span>· 척추(등뼈)에 약간의 기형</span>
                              <span>15%</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                              <span>· 척추(등뼈)에 뚜렷한 기형</span>
                              <span className="font-bold text-slate-900">30%</span>
                            </div>
                          </div>
                        </div>

                        {/* 4. Brain */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                          <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-3">
                            <BrainIllustration />
                            <div>
                              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                [신경계·정신동작]
                              </span>
                              <h5 className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                                대표질환: 치매
                              </h5>
                            </div>
                          </div>
                          <div className="p-3 space-y-1.5 text-xs text-slate-700 flex-1">
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 font-black text-blue-600 bg-blue-50/50 px-1 rounded">
                              <span>· 약간의 치매 (CDR 2점)</span>
                              <span>40%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 뚜렷한 치매 (CDR 3점)</span>
                              <span className="font-bold text-slate-900">60%</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200">
                              <span>· 심한 치매 (CDR 4점)</span>
                              <span className="font-bold text-slate-900">80%</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                              <span>· 극심한 치매 (CDR 5점)</span>
                              <span className="font-bold text-slate-900">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Age Distribution Table & Progress Bars */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'age') && (
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center justify-between">
                        <span>📊 2. 연령별 등록 장애인 현황 및 비율 (보건복지부)</span>
                        <span className="text-xs font-semibold text-rose-600">60대 이상 장애위험 급증</span>
                      </h4>

                      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-center border-collapse">
                            <thead>
                              <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                                <th className="p-2 sm:p-3 border-r border-slate-200">연령층</th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age30Char />
                                  30대 이하
                                </th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age40Char />
                                  40대
                                </th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age50Char />
                                  50대
                                </th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age60Char />
                                  60대
                                </th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age70Char />
                                  70대
                                </th>
                                <th className="p-2 sm:p-3 border-r border-slate-200 min-w-[70px]">
                                  <Age80Char />
                                  80대 이상
                                </th>
                                <th className="p-2 sm:p-3 bg-rose-600 text-white font-black">총계</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              <tr className="bg-white">
                                <td className="p-2.5 font-bold bg-slate-50 text-slate-800 border-r border-slate-200">
                                  장애인(명)
                                </td>
                                <td className="p-2.5 border-r border-slate-200">31만</td>
                                <td className="p-2.5 border-r border-slate-200">24만</td>
                                <td className="p-2.5 border-r border-slate-200">45만</td>
                                <td className="p-2.5 border-r border-slate-200">60만</td>
                                <td className="p-2.5 border-r border-slate-200">58만</td>
                                <td className="p-2.5 border-r border-slate-200">44만</td>
                                <td className="p-2.5 font-black text-rose-600 bg-rose-50">총 263만명</td>
                              </tr>
                              <tr className="bg-slate-50/50">
                                <td className="p-2.5 font-bold bg-slate-50 text-slate-800 border-r border-slate-200">
                                  인구대비 비율
                                </td>
                                <td className="p-2.5 border-r border-slate-200">1.3%</td>
                                <td className="p-2.5 border-r border-slate-200">2.9%</td>
                                <td className="p-2.5 border-r border-slate-200">5.2%</td>
                                <td className="p-2.5 font-black text-rose-600 border-r border-slate-200">8.9%</td>
                                <td className="p-2.5 font-black text-rose-600 border-r border-slate-200">15.8%</td>
                                <td className="p-2.5 font-black text-rose-600 border-r border-slate-200">22.0%</td>
                                <td className="p-2.5 font-black text-rose-600 bg-rose-50">전체인구 5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Visual Progress Bar Chart */}
                        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
                          <h5 className="text-xs font-black text-slate-800 flex items-center justify-between">
                            <span>📈 연령별 장애인 비율 추이 (60대 8.9% → 80대 22.0% 급증)</span>
                            <span className="text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded">
                              노후 후유장해 대비 필수
                            </span>
                          </h5>
                          <div className="space-y-2">
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-slate-600">
                                <span>30대 이하</span>
                                <span>1.3% (31만명)</span>
                              </div>
                              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-sky-500 rounded-full" style={{ width: '5.9%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-slate-600">
                                <span>40대</span>
                                <span>2.9% (24만명)</span>
                              </div>
                              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-sky-500 rounded-full" style={{ width: '13.1%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-slate-600">
                                <span>50대</span>
                                <span>5.2% (45만명)</span>
                              </div>
                              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-sky-600 rounded-full" style={{ width: '23.6%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-rose-700">
                                <span className="font-black">60대 (급증 시작)</span>
                                <span className="font-black">8.9% (60만명)</span>
                              </div>
                              <div className="h-3 bg-rose-100 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-600 rounded-full" style={{ width: '40.4%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-rose-700">
                                <span className="font-black">70대</span>
                                <span className="font-black">15.8% (58만명)</span>
                              </div>
                              <div className="h-3 bg-rose-100 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-600 rounded-full" style={{ width: '71.8%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-rose-800">
                                <span className="font-black">80세 이상 (최고 위험)</span>
                                <span className="font-black">22.0% (44만명)</span>
                              </div>
                              <div className="h-3.5 bg-rose-100 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-700 rounded-full" style={{ width: '100%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sales Briefing Guide */}
                  {(activeReportSubTab === 'summary' || activeReportSubTab === 'sales') && (
                    <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                      <h4 className="text-base font-black text-emerald-950 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-600" />
                        <span>💡 [설계사 셀링 포인트] 후유장해담보 필요성 브리핑 가이드</span>
                      </h4>

                      <div className="space-y-3 pt-1 text-xs text-emerald-900 leading-relaxed font-medium">
                        <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                          <strong className="text-emerald-950 font-black block text-sm mb-1">
                            1. 일상 생활질환 후유장해 포함
                          </strong>
                          디스크 수술/시술(15%), 인공관절 수술(20%), 백내장 교정시력 저하(15%), 치매(40%) 등 고령층에서 매우 흔한 일상 생활질환이 후유장해 지급 대상에 모두 포함됩니다.
                        </div>

                        <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                          <strong className="text-emerald-950 font-black block text-sm mb-1">
                            2. 질병·사고 부위별 각각 반복 및 합산 보장
                          </strong>
                          질병이나 사고 부위별로 각각 지급률을 적용받아 반복적으로 합산 보장되므로, 노후 병원 치료비 및 자녀에게 부담을 주지 않는 생활자금 준비의 핵심 담보입니다.
                        </div>

                        <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                          <strong className="text-emerald-950 font-black block text-sm mb-1">
                            3. 60대 이상 장애위험 급증 현황 소구
                          </strong>
                          보건복지부 통계 기준 60대 8.9%, 70대 15.8%, 80대 22.0%로 나이가 들수록 장애 비율이 급상승합니다. 건강할 때 비갱신 후유장해 담보를 가입해야 하는 당위성을 브리핑할 수 있습니다.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* MORTALITY REPORT CONTENT (selectedReportId === 1) */}
              {/* SUMMARY TAB */}
              {(activeReportSubTab === 'summary' || activeReportSubTab === 'top10') && (
                <div className="space-y-6">
                  {/* Top Key Indicator Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-xs text-slate-500 font-bold block">2024년 총 사망자 수</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-black text-slate-900">358,569</span>
                        <span className="text-xs font-bold text-slate-600">명</span>
                        <span className="text-xs font-bold text-rose-600 ml-auto bg-rose-50 px-1.5 py-0.5 rounded">
                          ▲ 1.7% (+6,058명)
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-xs text-slate-500 font-bold block">조사망률 (인구 10만명당)</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-black text-slate-900">702.6</span>
                        <span className="text-xs font-bold text-slate-600">명</span>
                        <span className="text-xs font-bold text-rose-600 ml-auto bg-rose-50 px-1.5 py-0.5 rounded">
                          ▲ 1.9% (+13.3명)
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-xs text-slate-500 font-bold block">80세 이상 사망 비중</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-black text-[#123941]">54.1</span>
                        <span className="text-xs font-bold text-slate-600">%</span>
                        <span className="text-xs font-bold text-amber-600 ml-auto bg-amber-50 px-1.5 py-0.5 rounded">
                          10년전 대비 +15.3%p
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Chart: 10 Major Causes */}
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                          <span>📊 10대 사망원인 순위 및 사망률</span>
                          <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                            3대 질환 42.6% 점유
                          </span>
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                          인구 10만 명당 사망자 수 (명) | 통계청 발표
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-400">2024년 공식통계</span>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Cancer */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-rose-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-rose-600 text-white flex items-center justify-center text-[10px] font-black">1</span>
                            악성신생물 (암)
                          </span>
                          <span className="text-rose-700 font-black">174.3명 (전체 사망의 24.8%)</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                          <div className="h-full bg-linear-to-r from-rose-500 to-rose-700 rounded-full text-[10px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '100%' }}>
                            174.3
                          </div>
                        </div>
                      </div>

                      {/* Heart */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-rose-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">2</span>
                            심장 질환
                          </span>
                          <span className="text-rose-700 font-black">65.7명</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-linear-to-r from-rose-400 to-rose-600 rounded-full text-[10px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '37.7%' }}>
                            65.7
                          </div>
                        </div>
                      </div>

                      {/* Pneumonia */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-rose-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">3</span>
                            폐렴
                          </span>
                          <span className="text-rose-700 font-black">59.0명</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-linear-to-r from-rose-400 to-rose-600 rounded-full text-[10px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '33.8%' }}>
                            59.0
                          </div>
                        </div>
                      </div>

                      {/* Callout divider */}
                      <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-xl text-xs text-rose-900 font-bold flex items-center justify-between">
                        <span>💡 상위 3대 사망원인(암·심장·폐렴) 사망자 비중</span>
                        <span className="text-sm font-black text-rose-700">전체 사망의 42.6%</span>
                      </div>

                      {/* Cerebrovascular */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-700 text-white flex items-center justify-center text-[10px] font-black">4</span>
                            뇌혈관 질환
                          </span>
                          <span className="text-slate-700 font-bold">48.2명</span>
                        </div>
                        <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-600 rounded-full text-[9px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '27.6%' }}>
                            48.2
                          </div>
                        </div>
                      </div>

                      {/* Suicide */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-600 text-white flex items-center justify-center text-[10px] font-black">5</span>
                            고의적 자해 (자살)
                          </span>
                          <span className="text-slate-700 font-bold">29.1명</span>
                        </div>
                        <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-500 rounded-full text-[9px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '16.7%' }}>
                            29.1
                          </div>
                        </div>
                      </div>

                      {/* Alzheimer */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-600 text-white flex items-center justify-center text-[10px] font-black">6</span>
                            알츠하이머병
                          </span>
                          <span className="text-slate-700 font-bold">23.9명</span>
                        </div>
                        <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-600 rounded-full text-[9px] font-bold text-white text-right pr-2 flex items-center justify-end" style={{ width: '13.7%' }}>
                            23.9
                          </div>
                        </div>
                      </div>

                      {/* Diabetes */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-500 text-white flex items-center justify-center text-[10px] font-black">7</span>
                            당뇨병
                          </span>
                          <span className="text-slate-700 font-bold">21.7명</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400 rounded-full" style={{ width: '12.4%' }} />
                        </div>
                      </div>

                      {/* Hypertension */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-500 text-white flex items-center justify-center text-[10px] font-black">8</span>
                            고혈압성 질환
                          </span>
                          <span className="text-slate-700 font-bold">16.1명</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400 rounded-full" style={{ width: '9.2%' }} />
                        </div>
                      </div>

                      {/* Liver */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-500 text-white flex items-center justify-center text-[10px] font-black">9</span>
                            간 질환
                          </span>
                          <span className="text-blue-600 font-bold">15.3명 (▲ 2단계 상승)</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '8.8%' }} />
                        </div>
                      </div>

                      {/* Sepsis */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-slate-500 text-white flex items-center justify-center text-[10px] font-black">10</span>
                            패혈증
                          </span>
                          <span className="text-slate-500 font-bold">15.1명 (▼ 1단계 하락)</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400 rounded-full" style={{ width: '8.6%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Age Distribution Trend Graph */}
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3">
                    <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                      <span>📈 연령별 사망자 수 구성비 변화 (10년 간의 변화)</span>
                    </h4>
                    
                    <div className="space-y-3 text-xs pt-1">
                      <div>
                        <div className="flex justify-between font-bold text-slate-700 mb-1">
                          <span>2024년 연령별 사망 구성비 (초고령화 본격화)</span>
                          <span className="text-[#123941] font-black">80세 이상: 54.1%</span>
                        </div>
                        <div className="h-7 w-full rounded-xl overflow-hidden flex font-bold text-white text-center text-[10px] leading-7 shadow-xs">
                          <div className="bg-slate-400" style={{ width: '2.4%' }}>2.4%</div>
                          <div className="bg-sky-400" style={{ width: '10.2%' }}>10.2%</div>
                          <div className="bg-sky-600" style={{ width: '33.3%' }}>33.3%</div>
                          <div className="bg-[#123941]" style={{ width: '54.1%' }}>80세 이상 54.1%</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-slate-500 mb-1">
                          <span>2014년 연령별 사망 구성비 (10년 전)</span>
                          <span className="font-bold">80세 이상: 38.8%</span>
                        </div>
                        <div className="h-6 w-full rounded-xl overflow-hidden flex font-bold text-white text-center text-[10px] leading-6 opacity-75">
                          <div className="bg-slate-400" style={{ width: '4.3%' }}>4.3%</div>
                          <div className="bg-sky-400" style={{ width: '16.6%' }}>16.6%</div>
                          <div className="bg-sky-600" style={{ width: '40.4%' }}>40.4%</div>
                          <div className="bg-[#123941]" style={{ width: '38.8%' }}>38.8%</div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2 text-[11px] font-bold text-slate-600 justify-center">
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-400 inline-block"/> 0~39세</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-sky-400 inline-block"/> 40~59세</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-sky-600 inline-block"/> 60~79세</span>
                        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#123941] inline-block"/> 80세 이상</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GENDER TAB */}
              {activeReportSubTab === 'gender' && (
                <div className="space-y-6">
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-4">
                    <h4 className="text-base font-black text-slate-900">
                      🚻 성별 사망원인 비교 분석 (남성 vs 여성)
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      성별에 따라 주요 사망 원인의 격차가 뚜렷하게 드러납니다.
                    </p>

                    <div className="space-y-4 pt-2">
                      {/* Cancer Gender Comparison */}
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-xs font-black">
                          <span className="text-slate-900">1위 악성신생물 (암)</span>
                          <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                            남성이 여성보다 1.6배 높음
                          </span>
                        </div>
                        <div className="space-y-1.5 text-xs font-bold">
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-blue-700">남성</span>
                            <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 rounded-full text-[9px] text-white text-right pr-2 flex items-center justify-end" style={{ width: '85%' }}>
                                215.1명
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-pink-700">여성</span>
                            <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full text-[9px] text-white text-right pr-2 flex items-center justify-end" style={{ width: '53%' }}>
                                133.7명
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Heart Disease */}
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-xs font-black">
                          <span className="text-slate-900">2위 심장 질환</span>
                          <span className="text-slate-600">남녀 사망률 거의 동등</span>
                        </div>
                        <div className="space-y-1.5 text-xs font-bold">
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-blue-700">남성</span>
                            <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 rounded-full text-[9px] text-white text-right pr-2 flex items-center justify-end" style={{ width: '50%' }}>
                                66.2명
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-pink-700">여성</span>
                            <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full text-[9px] text-white text-right pr-2 flex items-center justify-end" style={{ width: '49%' }}>
                                65.3명
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Suicide (Male high) vs Alzheimer (Female high) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                          <span className="text-xs font-black text-blue-900 block">
                            👨 남성 고위험 질환: 간 질환 &amp; 자살
                          </span>
                          <ul className="text-xs text-blue-800 space-y-1 font-semibold">
                            <li>• 자살 사망률: 남성 41.8명 vs 여성 16.6명 (2.5배)</li>
                            <li>• 간 질환 사망률: 남성 21.8명 vs 여성 8.8명 (2.5배)</li>
                            <li>• 40~50대 가장/생계책임자 특화 보장 소구점</li>
                          </ul>
                        </div>
                        <div className="p-3.5 bg-pink-50/70 border border-pink-200 rounded-xl space-y-2">
                          <span className="text-xs font-black text-pink-900 block">
                            👩 여성 고위험 질환: 알츠하이머 &amp; 고혈압
                          </span>
                          <ul className="text-xs text-pink-800 space-y-1 font-semibold">
                            <li>• 알츠하이머 사망률: 여성 32.8명 vs 남성 15.0명 (2.2배)</li>
                            <li>• 고혈압성 질환: 여성 20.5명 (여성 사망원인 6위)</li>
                            <li>• 노후 간병치매 및 심뇌혈관 특약 연계 필수</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AGE TAB */}
              {activeReportSubTab === 'age' && (
                <div className="space-y-6">
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-4">
                    <h4 className="text-base font-black text-slate-900">
                      🎂 연령별 5대 사망원인 및 주요 특징
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-xs font-black text-slate-900 block mb-2">10~39세 (청장년층)</span>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between font-bold text-rose-600 bg-rose-50 p-1.5 rounded">
                            <span>1위 자살</span>
                            <span>구성비 44%~54%</span>
                          </div>
                          <div className="flex justify-between font-medium text-slate-700 p-1">
                            <span>2위 악성신생물 (암)</span>
                            <span>10%~15%</span>
                          </div>
                          <div classNx��Zms����_qU�6�	�N�V(u�4��L�z�|��HB"j�`@В�qFN��1�ZNE�rH�i�Hn�)-S15U�������� ����ŕG�x���>�����0?�$	��ł*.�qIA]�Y�s*��b1KTaU�
�
�L0H�\hj�52�+Q����}ئ�����I��*ѽ��]K�3c,;�i�܋O��u�FN��^�0IR_(|ȣ��\�#�eN�

/��X0������ћ����KinU�7vX���Ղa��ħ���V�����$�Z�?��HK⣻���#m�D��]B+u�R����/R���tJ�ָ1�2��η�ae;�"nt�d���@����BZ�!��AKOi�I?oh'������_�{t �k�%�ECg��D*���üxZ���r V'�{��i_��k�n{�L�q�s���?�����@|�X��|���l�/��µ5����d�s)Y���lP�3�ăeh�M?�^�.ChךǴs4q�YV�4��8�v��Bv��1F��<�&��{�����
��<�ǖO	9�z�8�x%̯^���h���Rc�qhi+PN-@X#�Ќ?rn��6�����-|&��f�6#��B��+����4ǖc�3R�Z}��?��h0��4�Oƾ�W�scg��M�U��NS�� �h��pc/��$뉦<&\��o:����d���[$��y#p�9ϧT�𑐗u����O���yr��KB�9���e{p�����1�(tƨr��C,)P%2�!{'��0��a���-X�e�����Wx%m��������P�N���"c���}V�*�hwֵ�m�G��Y}�=k3�ݬ�j���u��1����- ����owFa5�D=X���"$��˲��A�����J��U6���./�9Q�ezb`$�T9�<d���o�M#�d�w�.B~� �מ�����rz�k��_��Ǧ�h��*�Ӵ	����-(�F	c���ay���C]�W'��V��	�h{B����h�?s�ۂmV��$����Y��Lӽu�`�r
ym��;�;ez��x���'��c}�L�AvfFĵ��RW6�j��0C��������ֵo�o��?JZek^�((�h��>��-,��Z��Ȥ���	�#8^�V��1H,k���j�VO@���=��� �a?�� l����6�����Yw6� q�i��c���>hi_8󇴿lL���le�B�������h��M� �ׯ��}%����g����6�i��{liC�`N��5mo�	�!�@�Z��;VenyEO�^+��:�%�O,��$���a��#�5�m���n�kt{���;�����:о�/�A�6�Az��|Z�:(�g��YZ�7�����k��m��2���h�( �جĢ��9�; �	�PGu�+�M�ii�6���h_`MKu���F�"��A�̑�`�#8�1@�XYlk�C�EMm����9�w�e9b(���l��r��_��d�Bt[uz����W�X2��MM�HG>c�w�	R�_�i^"�Ȫ*g�����Ib�(�:\�r-zɩ���� �f�F��=�\�j%��1�r؄s��\��lj�ݡ?��js䆋�?,b��+��R��A�/��W�/������X�R�.���&B
V/�`.��9BE�ֵ�c@+-5�7��{zu[x�?�բ"�X0~��M�������LM�-$�mV���խ�Xs6]݆�nf̝b�q6��}
����氡�u�Q�}��R�
Ik�Q��gO!�g	>ޟ>�Й��=o$�.�T꧑��J�J���FL�@
P��(�ax�i�Q�sU�O!���&�������c�ϔh�1���jb8���#���@���n��a���q�e����*��g�'+�RQ�0z�p|Q�{Zȹ5��"�����ܻ���6�:] >����䅜����a�;��_�D�
�&�f�Ȯ�
G.FCWIF�.(sl(�
�Â��2���&��I�DU�\ATE9��p�TQ)�
��E���#��4�8s�/	@馆���/+ƺ͌(���ч{=���4���ʸ���	$-���(�˒)0,rSu1#�Va����Ka"��s~�<�P�j]��g1ѩ�U�
dtlչ��
�����~�)֥�'EQY3�֢�-�"�x6�u����ˊ�.������G��$s`>�]���k�Qf�0 ?ӊ��������ڎ�����w4�R�ꦜ�H!ç���,�ʭpٴZ�܌E��/���v�M�&���j6�n�m+�yAI�3���5l���rF�Z0�Q,�w��|6���Gu1��A�z���D q�"�IE��>��$�]��f�>�s���J��_�Y�(�qjak7���n�!���nd����*�qY�So����$�:dG�I�*إ�e�*/�\J��λ�/*ȡ�$�fE*I��v���ۯ���a���j��n+"���̂}[РG�})��W; �}����UQ�����_����7b<�ԗ?���{s^A��WĔ���� 7D���b*%
@t��^�]#����Z�LNS��Q@"���?��+�-���| ��oB�~������/⇗i�Q��Ue�F<�utQ�uw�mb�'�261Xg�Ět�Ot��Ƈ�>]��4��Β�d!c/�YQ��a�K�Qq��UQ�qݴ��y��� ��~�jةl�d�,t��>[�@FKOad:`��s���� Q����<~)jAH�N��B�*(�S�V�#��ﻝ}�ծ�RQ���O��{#,ã>��O��/���+˂�g��(2H	�4��Dk������[�S�\TY�6[!Ơ�!%d�0�pt8�/�]��BR�Z��"�Ah�$z�E�ò^�W�K�U0�4�r����8к��M�-�������j[��ͫw��Ր��w�TL��ٗm�c�P l�N�v�Q�4<�vG9��p�.{uoW{TQ�J�q�^`9�]�* [OS���b��x��^�����u݄�rm�'� D���T�c�o�v�  �� N1�