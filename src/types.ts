/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Insurer Category
export type InsurerType = 'property' | 'life'; // 손해보험 vs 생명보험

// 1. 보험금 청구서 (Claim Form) Interface
export interface Insurer {
  id: string;
  name: string;
  type: InsurerType;
  phone: string;
  monitoringPhone?: string;
  fax: string;
  claimUrl: string;
  homepageUrl?: string;
  requiredDocs: string[];
  tips?: string;
  logoColor: string; // Tailwind color classes for clean custom badges
}

// 2. 암 진단비 약관 (Cancer Cover Terms) Interface
export interface CancerClassification {
  id: string;
  category: 'general' | 'minor' | 'similar' | 'major';
  categoryName: string; // 일반암, 소액암, 유사암, 고액암
  payoutPercent: string; // 예: 100%, 10~20%, 200% 등
  description: string;
  diseases: {
    code: string; // KCD Code (e.g. C16)
    name: string; // Disease Name
    spec?: string; // Additional details
  }[];
}

// 3. 수술명 검색 & 4. 수술 분류표 (Surgery Search & Classification)
export interface SurgeryRecord {
  id: string;
  category?: string; // 수술 대분류 (예: 소화기계, 감각기계 등)
  name: string; // 수술명
  code?: string; // 관련 질병코드 또는 분류코드
  grade1to3?: string; // 1-3종 분류 (옵션)
  grade1to5: '1종' | '2종' | '3종' | '4종' | '5종' | '대상제외' | '비해당'; // 1-5종 분류
  grade1to7?: string; // 1-7종 분류 (옵션)
  grade1to8?: string; // 1-8종 분류 (옵션)
  description: string; // 수술 설명 및 보장 정의
  tips?: string; // 설계사 팁
}

// 5. 실손의료비 약관 (Indemnity Medical Insurance Generations)
export interface IndemnityGeneration {
  id: string;
  generation: string; // 1세대, 2세대, 3세대, 4세대
  period: string; // 가입 기간 (예: ~ 2009년 9월)
  deductible: string; // 자기부담금 (급여/비급여)
  limit: string; // 보장 한도
  features: string[]; // 주요 특징들
  pros: string; // 장점
  cons: string; // 단점
  copayRate: {
    national: number; // 급여 본인부담율 (0 ~ 1)
    nonNational: number; // 비급여 본인부담율 (0 ~ 1)
  };
}

// 6. 보험 정보 블로그 (Insurance Articles)
export interface InsuranceArticle {
  id: string;
  title: string;
  category: 'tip' | 'column' | 'planner'; // 팁, 칼럼, 설계사용
  summary: string;
  content: string; // Markdown or simple HTML format
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
