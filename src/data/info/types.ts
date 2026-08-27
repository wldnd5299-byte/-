export type InfoCategory =
  | 'cancer'       // 암보험·진단비
  | 'vascular'     // 뇌·심장질환
  | 'surgery'      // 수술비·질병분류
  | 'indemnity'    // 실손보험·의료비
  | 'claim'        // 보험금청구·보상실무
  | 'dispute'      // 판례·분쟁조정해설
  | 'planner';     // 보험설계·실무상식

export interface InfoCategoryMeta {
  id: InfoCategory;
  name: string;
  badgeColor: string;
  description: string;
}

export const INFO_CATEGORIES: InfoCategoryMeta[] = [
  {
    id: 'surgery',
    name: '수술비·질병분류',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'N대 질병수술비, 1~5종 수술비 분류 및 관혈/비관혈 수술 기준 해설'
  },
  {
    id: 'cancer',
    name: '암보험·진단비',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: '통합암, 전이암, 유사암 분류표 및 암진단비 보장 기준 해설'
  },
  {
    id: 'vascular',
    name: '뇌·심장질환',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: '뇌혈관·허혈성심장질환 분류와 주요 질병코드 실무 분석'
  },
  {
    id: 'indemnity',
    name: '실손보험·의료비',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: '1~4세대 실손보험 세대별 비교 및 급여/비급여 자기부담금 계산'
  },
  {
    id: 'claim',
    name: '보험금청구·보상실무',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    description: '질환별 필수 청구 서류, 고지의무, 부지급 대응 실무 가이드'
  },
  {
    id: 'dispute',
    name: '판례·분쟁조정해설',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: '금융감독원 분쟁조정사례와 법원 판례 실무 해설'
  },
  {
    id: 'planner',
    name: '보험설계·실무상식',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    description: '보험나이 계산, 상령일 기준, 특약 조합 가이드'
  }
];

export interface PrimaryRelatedLink {
  title: string;
  desc?: string;
  url: string;
  badge?: string;
  iconType?: 'terms' | 'age' | 'surgery' | 'indemnity' | 'claim' | 'dispute' | 'goods' | 'planner-goods';
}

export interface SecondaryToolLink {
  title: string;
  url: string;
  desc?: string;
  iconType: 'claim' | 'terms' | 'surgery' | 'dispute' | 'planner-goods' | 'age' | 'indemnity';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InfoArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: InfoCategory;
  publishedAt: string;
  updatedAt?: string;
  
  // 핵심 본문 내용 (간결하고 사실적인 내용)
  contentHtml: string;
  
  // 가장 중요한 첫 번째 연결 링크 (검색 의도와 가장 밀접한 링크)
  primaryRelatedLink: PrimaryRelatedLink;
  
  // 선택적 추가 연계 항목들 (필요한 경우에만 설정)
  additionalLinks?: PrimaryRelatedLink[];
  secondaryTools?: ('claim' | 'terms' | 'surgery' | 'dispute' | 'planner-goods' | 'age' | 'indemnity')[];
  faqs?: FAQItem[];
  sourceDocs?: string[];
  tags?: string[];
  
  isPublished: boolean;
}
