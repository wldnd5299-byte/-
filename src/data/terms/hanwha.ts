// Hanwha General Insurance terms data
import {
  HanwhaHeartCategoryItem,
  HanwhaIntegratedTreatmentItem,
  HanwhaInjuryIntegratedTreatmentItem
} from "./types";

export const HANWHA_HEART_1_SUMMARY = [
  {
    group: '그룹 1',
    title: '만성류마티스심장질환',
    diseases: '류마티스성 승모판질환, 류마티스성 대동맥판질환, 류마티스성 삼천판질환, 다발판막질환, 기타 류마티스심장질환'
  },
  {
    group: '그룹 2',
    title: '특정심장판막질환',
    diseases: '비류마티스성 승모판장애, 비류마티스성 대동맥판장애, 비류마티스성 삼천판장애, 폐동맥판장애, 달리 분류된 질환에서의 심내막염 및 심장판막장애'
  },
  {
    group: '그룹 3',
    title: '특정심장방실및전도장애',
    diseases: '방실차단 2도, 완전방실차단, 기타 및 상세불명의 심방실차단, 이중섬유속차단, 삼중섬유속차단'
  },
  {
    group: '그룹 4',
    title: '주요심장염증질환',
    diseases: '급성 심장막염, 심장막의 기타질환, 달리 분류된 질환에서의 심장막염, 급성 및 아급성 심내막염, 상세불명 판막의 심내막염, 급성 심근염, 달리 분류된 질환에서의 심근염'
  },
  {
    group: '그룹 5',
    title: '심근병증',
    diseases: '심근병증, 달리 분류된 질환에서의 심근병증'
  },
  {
    group: '그룹 6',
    title: '심혈관특정질환 I (기타심장부정맥제외)',
    diseases: '협심증, 기타 급성 허혈심장질환, 만성 허혈심장병, 발작성 빈맥, 심방세동 및 조동, 심부전'
  },
  {
    group: '그룹 7',
    title: '심혈관특정질환 II',
    diseases: '급성심근경색증, 후속심근경색증, 급성심근경색증 후 특정 현존 합병증, 인공소생에 성공한 심장정지'
  },
  {
    group: '그룹 8',
    title: '기타 심장부정맥',
    diseases: '기타 심장부정맥'
  }
];

export const HANWHA_HEART_1_SECTIONS = [
  {
    group: '그룹 1',
    title: '만성류마티스심장질환',
    category: '1. 만성류마티스심장질환',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '류마티스성 승모판질환', name: '류마티스성 승모판질환', code: 'I05' },
      { num: '2', disease: '류마티스성 대동맥판질환', name: '류마티스성 대동맥판질환', code: 'I06' },
      { num: '3', disease: '류마티스성 삼천판질환', name: '류마티스성 삼천판질환', code: 'I07' },
      { num: '4', disease: '다발판막질환', name: '다발판막질환', code: 'I08' },
      { num: '5', disease: '기타 류마티스심장질환', name: '기타 류마티스심장질환', code: 'I09' },
    ],
  },
  {
    group: '그룹 2',
    title: '특정심장판막질환',
    category: '2. 특정심장판막질환',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '비류마티스성 승모판장애', name: '비류마티스성 승모판장애', code: 'I34' },
      { num: '2', disease: '비류마티스성 대동맥판장애', name: '비류마티스성 대동맥판장애', code: 'I35' },
      { num: '3', disease: '비류마티스성 삼천판장애', name: '비류마티스성 삼천판장애', code: 'I36' },
      { num: '4', disease: '폐동맥판장애', name: '폐동맥판장애', code: 'I37' },
      { num: '5', disease: '달리 분류된 질환에서의 심내막염 및 심장판막장애', name: '달리 분류된 질환에서의 심내막염 및 심장판막장애', code: 'I39' },
    ],
  },
  {
    group: '그룹 3',
    title: '특정심장방실및전도장애',
    category: '3. 특정심장방실및전도장애',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '방실차단 2도', name: '방실차단 2도', code: 'I44.1' },
      { num: '2', disease: '완전방실차단', name: '완전방실차단', code: 'I44.2' },
      { num: '3', disease: '기타 및 상세불명의 심방실차단', name: '기타 및 상세불명의 심방실차단', code: 'I44.3' },
      { num: '4', disease: '이중섬유속차단', name: '이중섬유속차단', code: 'I45.2' },
      { num: '5', disease: '삼중섬유속차단', name: '삼중섬유속차단', code: 'I45.3' },
    ],
  },
  {
    group: '그룹 4',
    title: '주요심장염증질환',
    category: '4. 주요심장염증질환',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '급성 심장막염', name: '급성 심장막염', code: 'I30' },
      { num: '2', disease: '심장막의 기타질환', name: '심장막의 기타질환', code: 'I31' },
      { num: '3', disease: '달리 분류된 질환에서의 심장막염', name: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { num: '4', disease: '급성 및 아급성 심내막염', name: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '5', disease: '상세불명 판막의 심내막염', name: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '6', disease: '급성 심근염', name: '급성 심근염', code: 'I40' },
      { num: '7', disease: '달리 분류된 질환에서의 심근염', name: '달리 분류된 질환에서의 심근염', code: 'I41' },
    ],
  },
  {
    group: '그룹 5',
    title: '심근병증',
    category: '5. 심근병증',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '심근병증', name: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', name: '달리 분류된 질환에서의 심근병증', code: 'I43' },
    ],
  },
  {
    group: '그룹 6',
    title: '심혈관특정질환 I (기타심장부정맥제외)',
    category: '6. 심혈관특정질환 I (기타심장부정맥제외)',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', name: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', name: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', name: '만성 허혈심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', name: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', name: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '심부전', name: '심부전', code: 'I50' },
    ],
  },
  {
    group: '그룹 7',
    title: '심혈관특정질환 II',
    category: '7. 심혈관특정질환 II',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '급성심근경색증', name: '급성심근경색증', code: 'I21' },
      { num: '2', disease: '후속심근경색증', name: '후속심근경색증', code: 'I22' },
      { num: '3', disease: '급성심근경색증 후 특정 현존 합병증', name: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '4', disease: '인공소생에 성공한 심장정지', name: '인공소생에 성공한 심장정지', code: 'I46.0' },
    ],
  },
  {
    group: '그룹 8',
    title: '기타 심장부정맥',
    category: '8. 기타 심장부정맥',
    definition: '약관에 규정하는 통합심장질병으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '기타 심장부정맥', name: '기타 심장부정맥', code: 'I49' },
    ],
  },
];

export const HANWHA_HEART_2_SUMMARY = [
  {
    group: '그룹 1',
    title: '만성류마티스심장질환',
    diseases: '류마티스성 승모판질환, 류마티스성 대동맥판질환, 류마티스성 삼천판질환, 다발판막질환, 기타 류마티스심장질환'
  },
  {
    group: '그룹 2',
    title: '특정심장판막질환',
    diseases: '비류마티스성 승모판장애, 비류마티스성 대동맥판장애, 비류마티스성 삼천판장애, 폐동맥판장애, 달리 분류된 질환에서의 심내막염 및 심장판막장애'
  },
  {
    group: '그룹 3',
    title: '특정심장방실및전도장애',
    diseases: '방실차단 2도, 완전방실차단, 기타 및 상세불명의 심방실차단, 이중섬유속차단, 삼중섬유속차단'
  },
  {
    group: '그룹 4',
    title: '주요심장염증질환',
    diseases: '급성 심장막염, 심장막의 기타질환, 달리 분류된 질환에서의 심장막염, 급성 및 아급성 심내막염, 상세불명 판막의 심내막염, 급성 심근염, 달리 분류된 질환에서의 심근염'
  },
  {
    group: '그룹 5',
    title: '심근병증',
    diseases: '심근병증, 달리 분류된 질환에서의 심근병증'
  },
  {
    group: '그룹 6',
    title: '심혈관특정질환(기타심장부정맥제외)',
    diseases: '협심증, 급성심근경색증, 후속심근경색증, 급성심근경색증 후 특정 현존 합병증, 기타 급성 허혈심장질환, 만성 허혈심장병, 발작성 빈맥, 심방세동 및 조동, 심부전, 인공소생에 성공한 심장정지'
  },
  {
    group: '그룹 7',
    title: '기타 심장부정맥',
    diseases: '기타 심장부정맥'
  }
];

export const HANWHA_HEART_2_SECTIONS = [
  {
    group: '그룹 1',
    title: '만성류마티스심장질환',
    category: '1. 만성류마티스심장질환',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '류마티스성 승모판질환', name: '류마티스성 승모판질환', code: 'I05' },
      { num: '2', disease: '류마티스성 대동맥판질환', name: '류마티스성 대동맥판질환', code: 'I06' },
      { num: '3', disease: '류마티스성 삼천판질환', name: '류마티스성 삼천판질환', code: 'I07' },
      { num: '4', disease: '다발판막질환', name: '다발판막질환', code: 'I08' },
      { num: '5', disease: '기타 류마티스심장질환', name: '기타 류마티스심장질환', code: 'I09' },
    ],
  },
  {
    group: '그룹 2',
    title: '특정심장판막질환',
    category: '2. 특정심장판막질환',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '비류마티스성 승모판장애', name: '비류마티스성 승모판장애', code: 'I34' },
      { num: '2', disease: '비류마티스성 대동맥판장애', name: '비류마티스성 대동맥판장애', code: 'I35' },
      { num: '3', disease: '비류마티스성 삼천판장애', name: '비류마티스성 삼천판장애', code: 'I36' },
      { num: '4', disease: '폐동맥판장애', name: '폐동맥판장애', code: 'I37' },
      { num: '5', disease: '달리 분류된 질환에서의 심내막염 및 심장판막장애', name: '달리 분류된 질환에서의 심내막염 및 심장판막장애', code: 'I39' },
    ],
  },
  {
    group: '그룹 3',
    title: '특정심장방실및전도장애',
    category: '3. 특정심장방실및전도장애',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '방실차단 2도', name: '방실차단 2도', code: 'I44.1' },
      { num: '2', disease: '완전방실차단', name: '완전방실차단', code: 'I44.2' },
      { num: '3', disease: '기타 및 상세불명의 심방실차단', name: '기타 및 상세불명의 심방실차단', code: 'I44.3' },
      { num: '4', disease: '이중섬유속차단', name: '이중섬유속차단', code: 'I45.2' },
      { num: '5', disease: '삼중섬유속차단', name: '삼중섬유속차단', code: 'I45.3' },
    ],
  },
  {
    group: '그룹 4',
    title: '주요심장염증질환',
    category: '4. 주요심장염증질환',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '급성 심장막염', name: '급성 심장막염', code: 'I30' },
      { num: '2', disease: '심장막의 기타질환', name: '심장막의 기타질환', code: 'I31' },
      { num: '3', disease: '달리 분류된 질환에서의 심장막염', name: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { num: '4', disease: '급성 및 아급성 심내막염', name: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '5', disease: '상세불명 판막의 심내막염', name: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '6', disease: '급성 심근염', name: '급성 심근염', code: 'I40' },
      { num: '7', disease: '달리 분류된 질환에서의 심근염', name: '달리 분류된 질환에서의 심근염', code: 'I41' },
    ],
  },
  {
    group: '그룹 5',
    title: '심근병증',
    category: '5. 심근병증',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '심근병증', name: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', name: '달리 분류된 질환에서의 심근병증', code: 'I43' },
    ],
  },
  {
    group: '그룹 6',
    title: '심혈관특정질환 (기타심장부정맥제외)',
    category: '6. 심혈관특정질환 (기타심장부정맥제외)',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', name: '협심증', code: 'I20' },
      { num: '2', disease: '급성심근경색증', name: '급성심근경색증', code: 'I21' },
      { num: '3', disease: '후속심근경색증', name: '후속심근경색증', code: 'I22' },
      { num: '4', disease: '급성심근경색증 후 특정 현존 합병증', name: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '5', disease: '기타 급성 허혈심장질환', name: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '6', disease: '만성 허혈심장병', name: '만성 허혈심장병', code: 'I25' },
      { num: '7', disease: '발작성 빈맥', name: '발작성 빈맥', code: 'I47' },
      { num: '8', disease: '심방세동 및 조동', name: '심방세동 및 조동', code: 'I48' },
      { num: '9', disease: '심부전', name: '심부전', code: 'I50' },
      { num: '10', disease: '인공소생에 성공한 심장정지', name: '인공소생에 성공한 심장정지', code: 'I46.0' },
    ],
  },
  {
    group: '그룹 7',
    title: '기타 심장부정맥',
    category: '7. 기타 심장부정맥',
    definition: '약관에 규정하는 통합심장질병 II 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '기타 심장부정맥', name: '기타 심장부정맥', code: 'I49' },
    ],
  },
];

// 한화손해보험 심혈관특정질환 I, I(기타심장부정맥제외), II 분류표
export const HANWHA_CARDIO_VASCULAR_SPECIFIC_1 = [
  { num: '1', disease: '협심증', code: 'I20' },
  { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
  { num: '3', disease: '만성 허혈심장병', code: 'I25' },
  { num: '4', disease: '발작성 빈맥', code: 'I47' },
  { num: '5', disease: '심방세동 및 조동', code: 'I48' },
  { num: '6', disease: '기타 심장부정맥', code: 'I49' },
  { num: '7', disease: '심부전', code: 'I50' },
];

export const HANWHA_CARDIO_VASCULAR_SPECIFIC_1_EXCLUDE_ARRHYTHMIA = [
  { num: '1', disease: '협심증', code: 'I20' },
  { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
  { num: '3', disease: '만성 허혈심장병', code: 'I25' },
  { num: '4', disease: '발작성 빈맥', code: 'I47' },
  { num: '5', disease: '심방세동 및 조동', code: 'I48' },
  { num: '6', disease: '심부전', code: 'I50' },
];

export const HANWHA_CARDIO_VASCULAR_SPECIFIC_2 = [
  { num: '1', disease: '급성심근경색증', code: 'I21' },
  { num: '2', disease: '후속심근경색증', code: 'I22' },
  { num: '3', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
  { num: '4', disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
];

export const HANWHA_CARDIO_VASCULAR_SPECIFIC_NOTES = [
  '주1) 이후 한국표준질병사인분류가 개정되는 경우에는 피보험자가 진단된 당시 시행되고 있는 한국표준질병사인분류에 따라 판단합니다.',
  '주2) 진단 당시의 한국표준질병사인분류에 따라 상기 질병의 해당 여부가 판단된 경우, 이후 한국표준질병사인분류 개정으로 질병분류가 변경되더라도 상기 질병의 해당 여부를 다시 판단하지 않습니다.',
  '주3) 대상질병 분류표의 분류번호와 상당한 연관성이 있어, 분류번호를 동시에 부여 가능한 경우 대상질병 분류에 포함합니다.(단, 해당 약관 상에 별도의 규정이 있는 경우 해당 조항을 우선 적용합니다)',
];

// 한화손해보험 심혈관질환(5개담보별) 분류표 데이터 (한화 시그니처 여성 건강보험4.0 무배당2604 기준)
export const HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB1 = [
  {
    title: '【별표32】 심혈관질환 분류표',
    definition: '약관에 규정하는 심혈관질환으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '급성심근경색증', code: 'I21' },
      { num: '3', disease: '후속심근경색증', code: 'I22' },
      { num: '4', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '5', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '6', disease: '만성 허혈심장병', code: 'I25' },
      { num: '7', disease: '발작성 빈맥', code: 'I47' },
      { num: '8', disease: '심방세동 및 조동', code: 'I48' },
      { num: '9', disease: '기타 심장부정맥', code: 'I49' },
      { num: '10', disease: '심부전', code: 'I50' },
      { num: '11', disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
    ],
  },
];

export const HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB2 = [
  {
    title: '【별표33】 심혈관질환(기타심장부정맥제외) 분류표',
    definition: '약관에 규정하는 심혈관질환(기타심장부정맥제외)으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '급성심근경색증', code: 'I21' },
      { num: '3', disease: '후속심근경색증', code: 'I22' },
      { num: '4', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '5', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '6', disease: '만성 허혈심장병', code: 'I25' },
      { num: '7', disease: '발작성 빈맥', code: 'I47' },
      { num: '8', disease: '심방세동 및 조동', code: 'I48' },
      { num: '9', disease: '심부전', code: 'I50' },
      { num: '10', disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
    ],
  },
];

export const HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB3 = [
  {
    title: '【별표29】 심혈관특정질환Ⅰ 분류표',
    definition: '약관에 규정하는 심혈관특정질환Ⅰ으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '기타 심장부정맥', code: 'I49' },
      { num: '7', disease: '심부전', code: 'I50' },
    ],
  },
];

export const HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB4 = [
  {
    title: '【별표30】 심혈관특정질환Ⅰ(기타심장부정맥제외) 분류표',
    definition: '약관에 규정하는 심혈관특정질환Ⅰ(기타심장부정맥제외)으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '심부전', code: 'I50' },
    ],
  },
];

export const HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB5 = [
  {
    title: '【별표31】 심혈관특정질환Ⅱ 분류표',
    definition: '약관에 규정하는 심혈관특정질환Ⅱ으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행) 중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '급성심근경색증', code: 'I21' },
      { num: '2', disease: '후속심근경색증', code: 'I22' },
      { num: '3', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '4', disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
    ],
  },
];

export const HANWHA_CARDIOVASCULAR_5_ALL_SECTIONS = [
  ...HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB1,
  ...HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB2,
  ...HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB3,
  ...HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB4,
  ...HANWHA_CARDIOVASCULAR_5_SECTIONS_TAB5,
];

export const HANWHA_INTEGRATED_BRAIN_SECTIONS = [
  {
    category: '1. 뇌전증',
    items: [
      { name: '뇌전증', code: 'G40' },
      { name: '뇌전증지속상태', code: 'G41' },
    ],
  },
  {
    category: '2. 일과성뇌허혈발작',
    items: [
      { name: '척추-뇌기저동맥증후군', code: 'G45.0' },
      { name: '경동맥증후군(대뇌반구성)', code: 'G45.1' },
      { name: '다발성 및 양쪽 뇌전동맥증후군', code: 'G45.2' },
      { name: '일과성 흑암시', code: 'G45.3' },
      { name: '기타 일과성 뇌허혈발작 및 관련 증후군', code: 'G45.8' },
      { name: '상세불명의 일과성 뇌허혈발작', code: 'G45.9' },
    ],
  },
  {
    category: '3. 뇌출혈',
    items: [
      { name: '거미막하출혈', code: 'I60' },
      { name: '뇌내출혈', code: 'I61' },
      { name: '기타 비외상성 두개내출혈', code: 'I62' },
    ],
  },
  {
    category: '4. 뇌졸중(뇌출혈제외)',
    items: [
      { name: '뇌경색증', code: 'I63' },
      { name: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { name: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' },
    ],
  },
  {
    category: '5. 뇌혈관특정질환',
    items: [
      { name: '출혈 또는 경색증으로 명시되지 않은 뇌졸중', code: 'I64' },
      { name: '기타 뇌혈관질환', code: 'I67' },
      { name: '달리 분류된 질환에서의 뇌혈관장애', code: 'I68*' },
      { name: '뇌혈관질환의 후유증', code: 'I69' },
    ],
  },
  {
    category: '6. 특정상해성뇌출혈',
    items: [
      { name: '경막외출혈', code: 'S06.4' },
      { name: '외상성 경막하출혈', code: 'S06.5' },
      { name: '외상성 거미막하출혈', code: 'S06.6' },
    ],
  },
];

// 한화손해보험 1-5종수술 분류표 [별표10] 데이터 (한화 시그니처 여성 건강보험4.0)
export const HANWHA_SURGERY_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy) (단, 유방의 비대(N62)로 인한 유방절단수술 제외)', code: '3종' },
      { num: '3-1', disease: '유방의 비대(N62)로 인한 유방절단수술', code: '1종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외)', code: '1종' },
    ],
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는 것] (다지증에 대한 절단수술은 제외함)', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 (다지증에 대한 절단수술은 제외함)', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는 것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', code: '1종' },
    ],
  },
  {
    category: '3. 호흡기계, 흉부(胸部)의 수술',
    title: '호흡기계, 흉부(胸部)의 수술',
    group: '일반수술',
    items: [
      { num: '15', disease: '만성부비강염(慢性副鼻腔炎) 근본수술(根本手術)', code: '1종' },
      { num: '16', disease: '후두(喉頭) 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것]', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' },
    ],
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락·발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심막(心膜) 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
      { num: '26', disease: '심장내(心臟內) 관혈수술 [개흉술을 수반하는 것]', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', code: '5종' },
      { num: '28', disease: '체내용(體內用) 인공심박조율기(人工心搏調律機, Artificial pacemaker) 매입술(埋入術)', code: '3종' },
      { num: '29', disease: '비장(脾臟) 절제수술', code: '3종' },
    ],
  },
  {
    category: '5. 소화기계의 수술',
    title: '소화기계의 수술',
    group: '일반수술',
    items: [
      { num: '30', disease: '이하선 절제수술', code: '3종' },
      { num: '31-1', disease: '악하선, 설하선 절제수술', code: '2종' },
      { num: '31-2', disease: '기타 타액선 절제수술(타석제거는 제외)', code: '1종' },
      { num: '32', disease: '식도(食道) 이단술(離斷術) [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]', code: '4종' },
      { num: '33', disease: '위 절제수술(胃 切除手術, Gastrectomy) [개복술을 수반하는 것]', code: '4종' },
      { num: '34', disease: '기타의 위·식도 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '3종' },
      { num: '35', disease: '간장(肝臟), 췌장(膵臟) 관혈수술 [개복술을 수반하는 것]', code: '4종' },
      { num: '36', disease: '담낭(膽囊), 담도(膽道) 관혈수술 [개복술을 수반하는 것]', code: '3종' },
      { num: '37', disease: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', code: '5종' },
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외함)', code: '5종' },
      { num: '39', disease: '탈장(脫腸) 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염(全身性 腹膜炎, Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수(蟲垂)절제술(충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', code: '2종' },
      { num: '42', disease: '직장탈(直腸脫) 근본수술', code: '1종' },
      { num: '43', disease: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', code: '4종' },
      { num: '44', disease: '치루(痔瘻), 탈항(脫肛), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외]', code: '1종' },
    ],
  },
  {
    category: '6. 비뇨기계 생식기계의 수술',
    title: '비뇨기계 생식기계의 수술 [인공임신중절 수술은 제외함]',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管) 관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류 교정수술', code: '1종' },
      { num: '48', disease: '요실금수술(급여)', code: '1종' },
      { num: '49', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '50', disease: '음경(陰莖) 절단수술 (포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '51', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊) 관혈수술, 전립선(前立腺) 관혈수술', code: '2종' },
      { num: '52', disease: '음낭관혈수술', code: '1종' },
      { num: '53', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '54', disease: '경질적 자궁, 난소, 난관 수술', code: '1종' },
      { num: '55', disease: '제왕절개만출술(帝王切開娩出術)', code: '1종' },
      { num: '56', disease: '질탈(膣脫)근본수술', code: '1종' },
    ],
  },
  {
    category: '7. 내분비계의 수술',
    title: '내분비계의 수술',
    group: '일반수술',
    items: [
      { num: '57', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '58', disease: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', code: '3종' },
      { num: '59', disease: '부신(副腎) 절제수술', code: '4종' },
    ],
  },
  {
    category: '8. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '60', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, craniotomy)을 수반하는 것]', code: '5종' },
      { num: '61', disease: '신경(神經) 관혈수술', code: '2종' },
      { num: '62', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', code: '4종' },
      { num: '63', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', code: '3종' },
    ],
  },
  {
    category: '9. 시각기의 수술',
    title: '시각기의 수술 [약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '64', disease: '안검하수증(眼瞼下垂症)수술', code: '1종' },
      { num: '65', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '66', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '67', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '68', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '69', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '70', disease: '전방(前房), 홍채(虹彩), 유리체(玻璃體) 관혈수술', code: '2종' },
      { num: '71', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '72', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '73', disease: '망막박리(網膜剝離) 수술', code: '2종' },
      { num: '74', disease: '레이저(Laser)에 의한 안구(眼球) 수술(시력회복 및 시력개선 목적의 수술은 제외)', code: '1종' },
      { num: '75', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술', code: '2종' },
      { num: '76', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '77', disease: '안와내종양절제수술', code: '3종' },
      { num: '78', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '79', disease: '안근(眼筋)관혈수술', code: '1종' },
    ],
  },
  {
    category: '10. 청각기(聽覺器)의 수술',
    title: '청각기(聽覺器)의 수술',
    group: '일반수술',
    items: [
      { num: '80', disease: '관혈적 고막(鼓膜) 성형술 [고막 패치술은 제외]', code: '2종' },
      { num: '81', disease: '유양동 절제술(乳樣洞切除術, mastoidectomy)', code: '2종' },
      { num: '82', disease: '중이(中耳) 관혈수술 [중이내 튜브유치술 제외]', code: '2종' },
      { num: '83', disease: '중이내(中耳內) 튜브유치술 [고막 패치술은 제외]', code: '1종' },
      { num: '84', disease: '내이(內耳) 관혈수술', code: '3종' },
    ],
  },
  {
    category: '11. 상기 이외의 수술',
    title: '상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '85', disease: '상기 이외의 개두술(開頭術)', code: '3종' },
      { num: '86', disease: '상기 이외의 개흉술(開胸術)', code: '3종' },
      { num: '87', disease: '상기 이외의 개복술(開腹術)', code: '2종' },
      { num: '88', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) * 체외충격파치료술(E.S.W.T)은 제외', code: '1종' },
      { num: '89-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장', code: '3종' },
      { num: '89-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외)', code: '2종' },
      { num: '89-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' },
    ],
  },
  {
    category: '2. 악성신생물 치료 목적의 수술',
    title: '악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery) [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외함] (단, 기타피부암(C44) 제외)', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '1종' },
      { num: '2', disease: '내시경 수술', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술', code: '3종' },
    ],
  },
  {
    category: '3. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    title: '악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마나이프(Gammaknife) 정위적 방사선 치료', code: '3종' },
    ],
  },
];

export const HANWHA_SURGERY_1_5_GUIDELINES = [
  {
    num: '1',
    title: '수술의 정의 및 장소',
    content: '수술이라 함은 의사, 치과의사 자격을 가진 자에 의하여 치료가 필요하다고 인정한 경우로서 의사의 관리 하에 치료를 직접적인 목적으로 기구를 사용하여 생체()에 절단(), 절제() 등의 조작을 가하는 것을 말합니다. 단, 흡인(), 천자() 등의 조작 및 신경 Block(신경차단)은 제외합니다.'
  },
  {
    num: '2',
    title: '1~5종 수술의 구분 및 적용',
    content: '1) 수술분류표에 정하지 아니한 수술은 피보험자의 상태, 수술의 난이도, 위험도 등을 감안하여 가장 유사한 수술종류에 준하여 수술종류를 적용합니다.\n2) 동일한 목적을 위하여 2회 이상의 수술을 받은 경우 또는 동시에 2종류 이상의 수술을 받은 경우에는 1회의 수술로 보아 그 수술 중 가장 높은 종에 해당하는 수술비만을 지급합니다.'
  },
  {
    num: '3',
    title: '동시/지속 수술 및 재수술에 관한 규정',
    content: '동일 질병 또는 상해로 인하여 두 가지 이상의 수술을 받거나 2회 이상 수술을 받은 경우, 각각의 수술이 서로 다른 목적이 아닌 한 1회 수술로 간주하여 최상위 종의 수술비를 지급합니다.'
  },
  {
    num: '4',
    title: '보장대상 제외 수술',
    content: '치열, 치질 등 항문질환 수술 중 보장 대상에서 제외되는 항목 및 미용성형 목적의 수술, 검사 및 진단을 위한 수술(생검 등)은 수술비 지급 대상에서 제외될 수 있으므로 세부 약관 규정을 확인하시기 바랍니다.'
  }
];

// 한화 시그니처 여성 건강보험 4.0 [별표11] 여성생애1-5종수술 분류표 (여성생활1-5종)
export const HANWHA_WOMEN_LIFE_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', codeUnder49: '4종', codeOver50: '3종', code: '4종(49세이전) / 3종(50세이후)' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy)', codeUnder49: '5종', codeOver50: '3종', code: '5종(49세이전) / 3종(50세이후)' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외)', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
      { num: '5', disease: '골(骨) 이식수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
    ],
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술 제외]', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', codeUnder49: '3종', codeOver50: '4종', code: '3종(49세이전) / 4종(50세이후)' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는 것] (다지증에 대한 절단수술은 제외함)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢) 절단수술 (다지증에 대한 절단수술은 제외함)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는 것]', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', codeUnder49: '1종', codeOver50: '2종', code: '1종(49세이전) / 2종(50세이후)' },
    ],
  },
  {
    category: '3. 호흡기계, 흉부(胸部)의 수술',
    title: '호흡기계, 흉부(胸部)의 수술',
    group: '일반수술',
    items: [
      { num: '15', disease: '만성부비강염(慢性副鼻腔炎) 근본수술(根本手術)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '16', disease: '후두(喉頭) 관혈적 절제수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
    ],
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술 (하지정맥류 및 손가락·발가락은 제외)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '24', disease: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술 [개흉술, 개복술을 수반하는 것]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '25', disease: '심막(心膜) 관혈수술 [개흉술을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '26', disease: '심장내(心臟內) 관혈수술 [개흉술을 수반하는 것]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '28', disease: '체내용(體內用) 인공심박조율기(人工心搏調律機, Artificial pacemaker) 매입술(埋入術)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '29', disease: '비장(脾臟) 절제수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
    ],
  },
  {
    category: '5. 소화기계의 수술',
    title: '소화기계의 수술',
    group: '일반수술',
    items: [
      { num: '30', disease: '이하선 절제수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '31-1', disease: '악하선, 설하선 절제수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '31-2', disease: '기타 타액선 절제수술 (타석제거는 제외)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '32', disease: '식도(食道) 이단술(離斷術) [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '33', disease: '위 절제수술(胃 切除手術, Gastrectomy) [개복술을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '34', disease: '기타의 위·식도 관혈수술 [개흉술, 개복술을 수반하는 것]', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '35', disease: '간장(肝臟), 췌장(膵臟) 관혈수술 [개복술을 수반하는 것]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '36', disease: '담낭(膽囊), 담도(膽道) 관혈수술 [개복술을 수반하는 것]', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '37', disease: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함 (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외함)]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '39', disease: '탈장(脫腸) 근본수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '40', disease: '전신성 복막염(全身性 腹膜炎, Generalized peritonitis) 수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '41', disease: '충수(蟲垂)절제술 (충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '42', disease: '직장탈(直腸脫) 근본수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '43', disease: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '44', disease: '치루(痔瘻), 탈항(脫肛), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외]', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
    ],
  },
  {
    category: '6. 비뇨기계 생식기계의 수술',
    title: '비뇨기계 생식기계의 수술 [인공임신중절 수술은 제외함]',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管) 관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '47', disease: '방광류 교정수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '48', disease: '요실금수술(급여)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '49', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '50', disease: '음경(陰莖) 절단수술 (포경수술 및 음경이물제거수술은 제외)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '51', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊) 관혈수술, 전립선(前立腺) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '52', disease: '음낭관혈수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '53', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', codeUnder49: '4종', codeOver50: '2종', code: '4종(49세이전) / 2종(50세이후)' },
      { num: '54', disease: '경질적 자궁, 난소, 난관 수술', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
      { num: '55', disease: '제왕절개만출술(帝王切開娩出術)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '56', disease: '질탈(膣脫)근본수술', codeUnder49: '3종', codeOver50: '1종', code: '3종(49세이전) / 1종(50세이후)' },
    ],
  },
  {
    category: '7. 내분비기계의 수술',
    title: '내분비기계의 수술',
    group: '일반수술',
    items: [
      { num: '57', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '58', disease: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '59', disease: '부신(副腎) 절제수술', codeUnder49: '4종', codeOver50: '4종', code: '4종' },
    ],
  },
  {
    category: '8. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '60', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, craniotomy)을 수반하는 것]', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '61', disease: '신경(神經) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '62', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', codeUnder49: '4종', codeOver50: '5종', code: '4종(49세이전) / 5종(50세이후)' },
      { num: '63', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', codeUnder49: '3종', codeOver50: '5종', code: '3종(49세이전) / 5종(50세이후)' },
    ],
  },
  {
    category: '9. 시각기의 수술',
    title: '시각기의 수술 [약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '64', disease: '안검하수증(眼瞼下垂症)수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '65', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '66', disease: '누낭비강(淚囊鼻腔) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '67', disease: '결막낭(結膜囊) 형성수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '68', disease: '각막, 결막, 공막 봉합수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '69', disease: '각막, 공막 이식수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '70', disease: '전방(前房), 홍채(虹彩), 유리체(玻璃體) 관혈수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '71', disease: '녹내장(綠內障) 관혈수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '72', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '73', disease: '망막박리(網膜剝離) 수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '74', disease: '레이저(Laser)에 의한 안구(眼球) 수술 (시력회복 및 시력개선 목적의 수술은 제외)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '75', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '76', disease: '안구적출술, 조직충전술(組織充塡術)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '77', disease: '안와내종양절제수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '78', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '79', disease: '안근(眼筋)관혈수술', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
    ],
  },
  {
    category: '10. 청각기(聽覺器)의 수술',
    title: '청각기(聽覺器)의 수술',
    group: '일반수술',
    items: [
      { num: '80', disease: '관혈적 고막(鼓膜) 성형술 [고막 패치술은 제외]', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '81', disease: '유양동 절제술(乳樣洞切除術, mastoidectomy)', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '82', disease: '중이(中耳) 관혈수술 [중이내 튜브유치술 제외]', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '83', disease: '중이내(中耳內) 튜브유치술 [고막 패치술은 제외]', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '84', disease: '내이(內耳) 관혈수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
    ],
  },
  {
    category: '11. 상기 이외의 수술',
    title: '상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '85', disease: '상기 이외의 개두술(開頭術)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '86', disease: '상기 이외의 개흉술(開胸術)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '87', disease: '상기 이외의 개복술(開腹術)', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '88', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) * 체외충격파치료술(E.S.W.T)은 제외', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
      { num: '89-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '89-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외)', codeUnder49: '2종', codeOver50: '2종', code: '2종' },
      { num: '89-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', codeUnder49: '1종', codeOver50: '1종', code: '1종' },
    ],
  },
  {
    category: '2. 악성신생물 치료 목적의 수술',
    title: '악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery) [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외함] (단, 기타피부암(C44) 제외)', codeUnder49: '5종', codeOver50: '5종', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '2', disease: '내시경 수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
    ],
  },
  {
    category: '3. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    title: '악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마나이프(Gammaknife) 정위적 방사선 치료', codeUnder49: '3종', codeOver50: '3종', code: '3종' },
    ],
  },
];

export const HANWHA_WOMEN_LIFE_1_5_GUIDELINES = [
  {
    num: '1',
    title: '수술의 정의',
    content: '‘수술’이라 함은 의료법 제5조에 규정한 의사, 치과의사의 자격을 가진 자가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 의사의 관리하에 ‘여성생애1-5종수술 분류표’에서 정한 행위(생체에 절단, 절제 등의 조작)를 받는 경우를 말합니다. (단, 흡인, 천자, 신경차단 등은 제외)'
  },
  {
    num: '2',
    title: '연령별 수술종류(종) 적용',
    content: '분류표에 기재된 수술종류(종) 구분을 위한 연령은 수술 시 보험나이를 기준으로 합니다 (49세 이전 / 50세 이후).'
  },
  {
    num: '3',
    title: '관혈 수술의 정의',
    content: '‘관혈(觀血)’ 수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변부위를 노출시켜서 수술하는 것을 말합니다.'
  },
  {
    num: '4',
    title: '근본 / 근치 수술의 정의',
    content: '‘근본(根本)’ 혹은 ‘근치(根治)’ 수술이라 함은 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다.'
  },
  {
    num: '5',
    title: '선진의료적 첨단 수술 인정 및 적용 기준',
    content: '분류표상에 열거되지 않은 선진의료적 첨단 수술도 보건복지부 산하 신의료기술평가위원회로부터 안전성과 치료효과를 인정받은 최신 수술기법인 경우 동일부위 수술로 인정합니다.'
  },
  {
    num: '6',
    title: '요실금수술(급여) 인정 기준 및 수가코드',
    content: '진단확정된 요실금을 원인으로 요양급여/의료급여 인정 기준에 해당하는 개복/질강/기타 수술(진료행위코드: R3562, R3564, R3565) 및 대상질병(N39.3, N39.4, R32)에 적용됩니다.'
  }
];

// 한화 시그니처 여성 건강보험 [별표12] 여성생애주요1-5종수술 분류표
export const HANWHA_WOMEN_MAJOR_LIFE_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', codeUnder49: '4종', codeOver50: '3종', code: '4종(49세이전) / 3종(50세이후)' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy)', codeUnder49: '5종', codeOver50: '3종', code: '5종(49세이전) / 3종(50세이후)' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외)', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
    ],
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant)등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', codeUnder49: '3종', codeOver50: '4종', code: '3종(49세이전) / 4종(50세이후)' },
      { num: '6', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', codeUnder49: '1종', codeOver50: '2종', code: '1종(49세이전) / 2종(50세이후)' },
    ],
  },
  {
    category: '3. 비뇨기계 생식기계의 수술',
    title: '비뇨기계 생식기계의 수술 [인공임신중절 수술은 제외함]',
    group: '일반수술',
    items: [
      { num: '7', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', codeUnder49: '4종', codeOver50: '2종', code: '4종(49세이전) / 2종(50세이후)' },
      { num: '8', disease: '경질적 자궁, 난소, 난관 수술', codeUnder49: '2종', codeOver50: '1종', code: '2종(49세이전) / 1종(50세이후)' },
      { num: '9', disease: '질탈(膣脫)근본수술', codeUnder49: '3종', codeOver50: '1종', code: '3종(49세이전) / 1종(50세이후)' },
    ],
  },
  {
    category: '4. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '10', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', codeUnder49: '4종', codeOver50: '5종', code: '4종(49세이전) / 5종(50세이후)' },
      { num: '11', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', codeUnder49: '3종', codeOver50: '5종', code: '3종(49세이전) / 5종(50세이후)' },
    ],
  },
];

export const HANWHA_WOMEN_MAJOR_LIFE_1_5_NOTE = '주1) 상기 1~11항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술은 해당되지 않습니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~11항)의 수술로 적용합니다.';

export const HANWHA_WOMEN_MAJOR_LIFE_1_5_GUIDELINES = [
  {
    num: '1',
    title: "'수술'의 정의 및 범위",
    content: `‘수술’이라 함은 「의료법」 제5조(의사,치과의사 및 한의사 면허)에 규정한 의사, 치과의사의 자격을 가진 자가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 「의료법」 제3조(의료기관)에 규정한 국내의 병원이나 의원 또는 국외의 의료관련법에서 정한 의료기관에서 의사의 관리하에 ‘여성생애주요1-5종수술 분류표’에서 정한 행위를 받는 경우를 말합니다.\n‘수술’은 기구를 사용해서 생체(生體)에 절단(切斷, 특정부위를 잘라 내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작(操作)을 가하는 것(보건복지부 산하 신의료기술평가위원회(향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법도 포함됩니다)을 말합니다.\n다만, 흡인(吸引, 주사기 등으로 빨아 들이는 것), 천자(穿刺, 바늘 또는 관을 꽂아 체액·조직을 뽑아내거나 약물을 주입하는 것) 등의 조치 및 신경차단(神經遮斷, Nerve Block)은 ‘수술’에서 제외합니다.`
  },
  {
    num: '2',
    title: '연령 기준',
    content: `분류표에 기재된 수술종류(종) 구분을 위한 연령은 수술 시 보험나이를 기준으로 합니다.`
  },
  {
    num: '3',
    title: "'관혈(觀血)' 수술의 정의",
    content: `‘관혈(觀血)’ 수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변부위를 노출시켜서 수술하는 것을 말합니다.`
  },
  {
    num: '4',
    title: "'여성생애주요1-5종수술 분류표' 상에 열거되지 않은 선진의료적 첨단 수술에 대한 인정 및 적용 기준",
    content: `‘여성생애주요1-5종수술 분류표’에서의 선진의료적 첨단 수술은 상기 ‘수술’의 정의에 해당하여야 하고 약물투여치료, 방사선조사치료 또는 기타의 보존적 치료로 분류될 수 없는 경우이어야 합니다.\n1) ‘여성생애주요1-5종수술 분류표’ 상의 수술 이외에 보건복지부 산하 신의료기술평가위원회(향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법으로 치료한 경우 ‘여성생애주요1-5종수술 분류표’ 상의 동일부위 수술로 봅니다.`
  }
];


export const HANWHA_WOMEN_PRIMARY_CANCER_SUMMARY = [
  {
    group: '그룹 1',
    title: '입술,구강및인두암',
    diseases: '입술, 구강 및 인두의 악성 신생물'
  },
  {
    group: '그룹 2',
    title: '대장암(전이암포함)',
    diseases: '결장의 악성 신생물, 직장구불결장접합부의 악성 신생물, 직장의 악성신생물, 대장 및 직장의 이차성 악성 신생물'
  },
  {
    group: '그룹 3',
    title: '특정소화기관암(전이암포함)',
    diseases: '식도의 악성 신생물, 위의 악성 신생물, 소장의 악성 신생물, 항문 및 항문관의 악성 신생물, 간 및 간내 담관의 악성 신생물, 담낭의 악성 신생물, 담도의 기타 및 상세불명 부분의 악성 신생물, 췌장의 악성 신생물, 기타 및 부위불명 소화기관의 악성 신생물, 소장·간·위·췌장·비장 등 소화기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 4',
    title: '폐암(전이암포함)',
    diseases: '기관의 악성 신생물, 기관지 및 폐의 악성 신생물, 폐의 이차성 악성 신생물'
  },
  {
    group: '그룹 5',
    title: '특정호흡기및흉곽내기관암(전이암포함)',
    diseases: '비강 및 중이의 악성 신생물, 부비동의 악성 신생물, 후두의 악성 신생물, 흉선의 악성 신생물, 심장, 종격 및 흉막의 악성 신생물, 기타 및 부위불명의 호흡기 및 흉곽내 기관의 악성 신생물, 종격·흉막 등 호흡기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 6',
    title: '뼈,관절,악성흑색종,중피성및연조직암(전이암포함)',
    diseases: '골 및 관절연골의 악성 신생물, 피부의 악성 흑색종, 중피성 및 연조직의 악성 신생물, 기타 및 부위불명의 악성 신생물, 림프절·후복막·피부·신경계통·골수 등 이차성 악성 신생물, 부위의 명시가 없는 악성 신생물, 독립된(원발성) 여러부위의 악성 신생물'
  },
  {
    group: '그룹 7',
    title: '유방암(전이암포함)',
    diseases: '유방의 악성 신생물, 유방의 이차성 악성 신생물'
  },
  {
    group: '그룹 8',
    title: '특정여성생식기관암(전이암포함)',
    diseases: '외음의 악성 신생물, 질의 악성 신생물, 기타 및 상세불명의 여성생식기관의 악성 신생물, 태반의 악성 신생물, 생식기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 9',
    title: '자궁관련암',
    diseases: '자궁경부의 악성 신생물, 자궁체부의 악성 신생물, 자궁의 상세불명 부분의 악성 신생물'
  },
  {
    group: '그룹 10',
    title: '난소암(전이암포함)',
    diseases: '난소의 악성 신생물, 난소의 이차성 악성 신생물'
  },
  {
    group: '그룹 11',
    title: '비뇨기관암(요로암)(전이암포함)',
    diseases: '요로의 악성 신생물, 신장 및 신우의 이차성 악성 신생물, 방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 12',
    title: '눈,뇌,중추신경계통및내분비선암(전이암포함)',
    diseases: '눈, 뇌 및 중추신경계통의 기타 부분의 악성 신생물, 부신의 악성 신생물, 기타 내분비선 및 관련구조물의 악성 신생물, 뇌 및 뇌막·부신의 이차성 악성 신생물'
  },
  {
    group: '그룹 13',
    title: '혈액암',
    diseases: '림프, 조혈 및 관련 조직의 악성 신생물, 진성 적혈구증다증, 골수형성이상증후군, 만성 골수증식질환, 본태성(출혈성) 혈소판증다증, 골수섬유증, 만성 호산구성 백혈병(과호산구증후군)'
  }
];

export const HANWHA_124_DISEASES_SUMMARY = [
  {
    title: '1. 특정10대질병',
    diseases: '심장질환, 고혈압질환, 뇌혈관질환, 신부전, 패혈증, 크로이츠펠트-야콥병, 파킨슨병, 뇌전증, 대동맥류, 중추신경계통의 탈수초질환'
  },
  {
    title: '2. 특정13대질병A',
    diseases: '결핵, 당뇨병질환, 수막염, 뇌 및 척수의 염증성질환, 폐렴, 만성하부 호흡기 질환, 간질환, 위십이지장궤양, 위공장궤양, 급성췌장염, 췌장질환, 비장질환, 중증근무력증'
  },
  {
    title: '3. 특정13대질병B',
    diseases: '폐질환, 간담관췌장의 양성 신생물, 수막의 양성 신생물, 뇌 및 중추신경계통의 기타 부분의 양성 신생물, 부갑상선기능질환, 뇌하수체기능질환, 뇌성마비, 자율신경계통의 장애, 수두증, 버거씨병, 기관지폐의 특정질환, 폐부종, 특정호흡기질환'
  },
  {
    title: '4. 30대경증질병',
    diseases: '특정 소화기 양성 신생물, 기타 흉곽내기관의 양성 신생물, 골 및 관절연골의 양성 신생물, 조직의 양성 신생물, 눈 및 부속기의 양성 신생물, 갑상선의 양성신생물, 기타 내분비선의 양성 신생물, 안면신경장애, 단일신경병증, 마비, 동맥 및 세동맥의 질환, 특정부위의 탈장, 비감염성장염 및 결장염, 특정장질환, 복막의 질환, 통풍, 골수염, 골괴사증, 뼈의 파젯병, 기타 비대성 골관절병증, 사구체질환, 신세뇨관-간질질환, 신장 및 요관의 기타 장애, 방광의 기타 질환, 하부호흡계통 및 흉곽의 양성종양, 여성생식기의 양성 신생물, 남성생식기의 양성 신생물, 비뇨기관의 양성 신생물, 동맥경화증, 갑상선 질환'
  },
  {
    title: '5. 50대경증질병',
    diseases: '유방의 양성 신생물, 상부호흡계통의 양성종양, 공막, 각막, 홍채 및 섬모체의 장애, 시신경 및 시각경로의 장애, 맥락막 및 망막의 장애, 유리체의 장애, 외이의 질환, 중이염, 중이 및 유돌의 질환, 귀경화증, 내이의 질환, 귀의 기타 장애, 림프절염, 급성 상기도감염, 후각특정질환, 축농증, 편도염, 인후부위의 특정질환, 성대결절, 식도 질환, 위십이지장 질환, 사타구니 탈장, 기타 소화기 질환, 담석증, 담낭 및 담도의 질환, 관절염 및 다발관절병증, 관절증, 사지후천변형, 관절장애, 척추변형, 척추병증, 추간판장애, 특정 누적외상성 질환, 어깨병변, 근육장애, 윤활막 및 힘줄장애, 기타 등병증, 골다공증, 연골병증, 신장 및 요관의 결석, 방광의 결석, 요도결석증, 비뇨기의 기타질환, 전립선 질환, 남성 생식기관의 질환, 유방의 장애, 난소 및 난관의 질환, 여성골반내 기관의 염증성질환, 여성생식관의 비염증성 장애, 비뇨생식계통의 기타 장애'
  },
  {
    title: '6. 7대생활질병',
    diseases: '하지의 정맥류, 발바닥근막성 섬유종증, 어깨의 유착성 관절낭염, 손목터널증후군, 안검하수, 수면무호흡증, 전신결합조직 장애'
  },
  {
    title: '7. 치핵',
    diseases: '치핵 및 항문주위정맥혈전증'
  }
];

export const HANWHA_124_DISEASES_SECTIONS = [
  {
    category: '1) 특정10대질병',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' },
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 뇌병증', code: 'I67.4' },
      { disease: '뇌혈관질환', code: 'I60~I69' },
      { disease: '신부전', code: 'N17~N19' },
      { disease: '연쇄알균패혈증', code: 'A40' },
      { disease: '기타 패혈증', code: 'A41' },
      { disease: '크로이츠펠트-야콥병', code: 'A81.0' },
      { disease: '파킨슨병', code: 'G20' },
      { disease: '이차성 파킨슨증', code: 'G21' },
      { disease: '뇌전증', code: 'G40' },
      { disease: '뇌전증지속상태', code: 'G41' },
      { disease: '대동맥동맥류 및 박리', code: 'I71' },
      { disease: '다발경화증', code: 'G35' },
      { disease: '기타 급성 파종성 탈수초', code: 'G36' },
      { disease: '중추신경계통의 기타 탈수초질환', code: 'G37' }
    ]
  },
  {
    category: '2) 특정13대질병A',
    items: [
      { disease: '결핵', code: 'A15~A19' },
      { disease: '결핵의 후유증', code: 'B90' },
      { disease: '결핵관절염(A18.01†)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.00†)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.02†)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.11†)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.17†)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환(A18.17†)', code: 'N74.1*' },
      { disease: '결핵성 복막염(A18.30†)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3-†)', code: 'K93.0*' },
      { disease: '1형 당뇨병', code: 'E10' },
      { disease: '2형 당뇨병', code: 'E11' },
      { disease: '영양실조-관련 당뇨병', code: 'E12' },
      { disease: '기타 명시된 당뇨병', code: 'E13' },
      { disease: '상세불명의 당뇨병', code: 'E14' },
      { disease: '당뇨병성 단일신경병증', code: 'G59.0*' },
      { disease: '당뇨병성 다발신경병증', code: 'G63.2*' },
      { disease: '당뇨병성 백내장', code: 'H28.0*' },
      { disease: '당뇨병성 망막병증', code: 'H36.0*' },
      { disease: '당뇨병성 관절병증', code: 'M14.2*' },
      { disease: '당뇨병에서의 사구체장애', code: 'N08.3*' },
      { disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01*' },
      { disease: '리스테리아 수막염 및 수막뇌염', code: 'A32.1†' },
      { disease: '수막알균수막염(G01*)', code: 'A39.0†' },
      { disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02*' },
      { disease: '엔테로바이러스수막염(G02.0*)', code: 'A87.0†' },
      { disease: '아데노바이러스수막염(G02.0*)', code: 'A87.1†' },
      { disease: '헤르페스바이러스수막염(G02.0*)', code: 'B00.3†' },
      { disease: '수막염이 합병된 홍역(G02.0*)', code: 'B05.1†' },
      { disease: '볼거리수막염(G02.0*)', code: 'B26.1†' },
      { disease: '신경학적 합병증을 동반한 풍진', code: 'B06.0†' },
      { disease: '수두수막염(G02.0*)', code: 'B01.0†' },
      { disease: '대상포진수막염(G02.0*)', code: 'B02.1†' },
      { disease: '칸디다수막염(G02.1*)', code: 'B37.5†' },
      { disease: '콕시디오이데스진균수막염(G02.1*)', code: 'B38.4†' },
      { disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05*' },
      { disease: '아메바성 뇌농양(G07*)', code: 'A06.6†' },
      { disease: '엔테로바이러스뇌염(G05.1*)', code: 'A85.0†' },
      { disease: '아데노바이러스뇌염(G05.1*)', code: 'A85.1†' },
      { disease: '헤르페스바이러스뇌염(G05.1*)', code: 'B00.4†' },
      { disease: '수두뇌염(G05.1*)', code: 'B01.1†' },
      { disease: '대상포진뇌염(G05.1*)', code: 'B02.0†' },
      { disease: '뇌염이 합병된 홍역(G05.1*)', code: 'B05.0†' },
      { disease: '볼거리뇌염(G05.1*)', code: 'B26.2†' },
      { disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종', code: 'G07*' },
      { disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' },
      { disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17*' },
      { disease: '수두폐렴(J17.1*)', code: 'B01.2†' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2†' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0†' },
      { disease: '폐톡소포자충증(J17.3*)', code: 'B58.3†' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '레지오놀라병', code: 'A48.1' },
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' },
      { disease: '바이러스간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1†' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1†' },
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명 부위의 소화성 궤양', code: 'K27' },
      { disease: '위공장궤양', code: 'K28' },
      { disease: '급성 췌장염', code: 'K85' },
      { disease: '췌장의 기타 질환', code: 'K86' },
      { disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87*' },
      { disease: '거대세포바이러스췌장염(K87.1*)', code: 'B25.2†' },
      { disease: '볼거리췌장염(K87.1*)', code: 'B26.3†' },
      { disease: '비장의 질환', code: 'D73' },
      { disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    category: '3) 특정13대질병B',
    items: [
      { disease: '폐 및 종격의 농양', code: 'J85' },
      { disease: '농흉', code: 'J86' },
      { disease: '달리 분류되지 않은 흉막삼출액', code: 'J90' },
      { disease: '달리 분류된 병태에서의 흉막삼출액', code: 'J91*' },
      { disease: '흉막판', code: 'J92' },
      { disease: '기흉', code: 'J93' },
      { disease: '기타 흉막의 병태', code: 'J94' },
      { disease: '간의 양성 신생물', code: 'D13.4' },
      { disease: '간외담관의 양성 신생물', code: 'D13.5' },
      { disease: '췌장의 양성 신생물', code: 'D13.6' },
      { disease: '내분비췌장의 양성 신생물', code: 'D13.7' },
      { disease: '수막의 양성 신생물', code: 'D32' },
      { disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' },
      { disease: '부갑상선기능저하증', code: 'E20' },
      { disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' },
      { disease: '뇌하수체의 기능항진', code: 'E22' },
      { disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' },
      { disease: '뇌성마비', code: 'G80' },
      { disease: '자율신경계통의 장애', code: 'G90' },
      { disease: '수두증', code: 'G91' },
      { disease: '폐색혈전혈관염[버거병]', code: 'I73.1' },
      { disease: '폐기종', code: 'J43' },
      { disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { disease: '기관지확장증', code: 'J47' },
      { disease: '폐부종', code: 'J81' },
      { disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    category: '4) 30대경증질병',
    items: [
      { disease: '식도의 양성 신생물', code: 'D13.0' },
      { disease: '위의 양성 신생물', code: 'D13.1' },
      { disease: '십이지장의 양성 신생물', code: 'D13.2' },
      { disease: '기타 및 상세불명 부분 소장의 양성 신생물', code: 'D13.3' },
      { disease: '부위불명의 소화계통의 양성 신생물', code: 'D13.9' },
      { disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' },
      { disease: '골 및 관절연골의 양성 신생물', code: 'D16' },
      { disease: '중피조직의 양성 신생물', code: 'D19' },
      { disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' },
      { disease: '눈 및 부속기의 양성 신생물', code: 'D31' },
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' },
      { disease: '삼차신경의 장애', code: 'G50' },
      { disease: '안면신경장애', code: 'G51' },
      { disease: '기타 뇌신경의 장애', code: 'G52' },
      { disease: '팔의 단일신경병증 (손목터널증후군 제외)', code: 'G56 (G56.0제외)' },
      { disease: '다리의 단일신경병증', code: 'G57' },
      { disease: '기타 단일신경병증', code: 'G58' },
      { disease: '달리 분류된 질환에서의 기타 단일신경병증', code: 'G59.8*' },
      { disease: '편마비', code: 'G81' },
      { disease: '하반신마비 및 사지마비', code: 'G82' },
      { disease: '기타 마비증후군', code: 'G83' },
      { disease: '동맥색전증 및 혈전증', code: 'I74' },
      { disease: '동맥 및 세동맥의 기타 장애', code: 'I77' },
      { disease: '대퇴탈장', code: 'K41' },
      { disease: '배꼽탈장', code: 'K42' },
      { disease: '복벽탈장', code: 'K43' },
      { disease: '횡격막탈장', code: 'K44' },
      { disease: '기타 복부탈장', code: 'K45' },
      { disease: '상세불명의 복부탈장', code: 'K46' },
      { disease: '크론병[국소성 장염]', code: 'K50' },
      { disease: '궤양성 대장염', code: 'K51' },
      { disease: '기타 비감염성 위장염 및 결장염', code: 'K52' },
      { disease: '장의 혈관장애', code: 'K55' },
      { disease: '탈장이 없는 마비성 장폐색증 및 장폐쇄', code: 'K56' },
      { disease: '장의 게실병', code: 'K57' },
      { disease: '복막염', code: 'K65' },
      { disease: '복막의 기타 장애', code: 'K66' },
      { disease: '달리 분류된 감염성 질환에서의 복막의 장애 (결핵성 복막염(A18.30†) 제외)', code: 'K67* (K67.3*제외)' },
      { disease: '통풍', code: 'M10' },
      { disease: '골수염', code: 'M86' },
      { disease: '골괴사', code: 'M87' },
      { disease: '뼈의 파젯병[변형성 골염]', code: 'M88' },
      { disease: '기타 비대성 골관절병증', code: 'M89.4' },
      { disease: '사구체질환 (당뇨병에서의 사구체장애 제외)', code: 'N00~N08 (N08.3*제외)' },
      { disease: '신세뇨관-간질질환', code: 'N10~N16' },
      { disease: '신장 및 요관의 기타 장애', code: 'N25~N29' },
      { disease: '방광염', code: 'N30' },
      { disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { disease: '방광의 기타 장애', code: 'N32' },
      { disease: '기관의 양성 신생물', code: 'D14.2' },
      { disease: '기관지 및 폐의 양성 신생물', code: 'D14.3' },
      { disease: '상세불명의 호흡계통의 양성 신생물', code: 'D14.4' },
      { disease: '자궁의 평활근종', code: 'D25' },
      { disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { disease: '난소의 양성 신생물', code: 'D27' },
      { disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { disease: '남성생식기관의 양성 신생물', code: 'D29' },
      { disease: '비뇨기관의 양성 신생물', code: 'D30' },
      { disease: '죽상경화증', code: 'I70' },
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0†)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '5) 50대경증질병',
    items: [
      { disease: '유방의 양성 신생물', code: 'D24' },
      { disease: '중이, 비강 및 부비동의 양성 신생물', code: 'D14.0' },
      { disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15~H22' },
      { disease: '아데노바이러스에 의한 각막결막염(H19.2*)', code: 'B30.0†' },
      { disease: '시신경염', code: 'H46' },
      { disease: '시[제2]신경 및 시각경로의 기타 장애', code: 'H47' },
      { disease: '달리 분류된 질환에서의 시[제2]신경 및 시각경로의 장애', code: 'H48*' },
      { disease: '맥락막 및 망막의 장애 (황반 및 후극부의 변성 제외) (당뇨병성 망막병증 제외)', code: 'H30~H36 (H35.3제외) (H36.0*제외)' },
      { disease: '유리체의 장애', code: 'H43' },
      { disease: '외이염', code: 'H60' },
      { disease: '외이의 기타 장애', code: 'H61' },
      { disease: '달리 분류된 질환에서의 외이의 장애', code: 'H62*' },
      { disease: '비화농성 중이염', code: 'H65' },
      { disease: '화농성 및 상세불명의 중이염', code: 'H66' },
      { disease: '달리 분류된 질환에서의 중이염', code: 'H67*' },
      { disease: '귀인두관염 및 귀인두관 폐색', code: 'H68' },
      { disease: '귀인두관의 기타 장애', code: 'H69' },
      { disease: '유돌염 및 관련 병태', code: 'H70' },
      { disease: '중이의 진주종', code: 'H71' },
      { disease: '고막의 천공', code: 'H72' },
      { disease: '고막의 기타 장애', code: 'H73' },
      { disease: '중이 및 유돌의 기타 장애', code: 'H74' },
      { disease: '달리 분류된 질환에서의 중이 및 유돌의 기타 장애', code: 'H75*' },
      { disease: '귀경화증', code: 'H80' },
      { disease: '전정기능의 장애', code: 'H81' },
      { disease: '달리 분류된 질환에서의 현기증후군', code: 'H82*' },
      { disease: '내이의 기타 질환', code: 'H83' },
      { disease: '귀의 기타 장애', code: 'H90~H95' },
      { disease: '비특이성 림프절염', code: 'I88' },
      { disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' },
      { disease: '급성 상기도감염', code: 'J00~J06' },
      { disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { disease: '만성 비염, 비인두염 및 인두염', code: 'J31' },
      { disease: '코용종', code: 'J33' },
      { disease: '코 및 비동의 기타 장애', code: 'J34' },
      { disease: '만성 부비동염', code: 'J32' },
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' },
      { disease: '편도주위농양', code: 'J36' },
      { disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { disease: '상기도의 기타 질환', code: 'J39' },
      { disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { disease: '후두의 양성 신생물', code: 'D14.1' },
      { disease: '식도염', code: 'K20' },
      { disease: '위-식도역류병', code: 'K21' },
      { disease: '식도의 기타 질환', code: 'K22' },
      { disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23*' },
      { disease: '위염 및 십이지장염', code: 'K29' },
      { disease: '기능성 소화불량', code: 'K30' },
      { disease: '사타구니탈장', code: 'K40' },
      { disease: '위 및 십이지장의 기타 질환', code: 'K31' },
      { disease: '장의 기타 질환', code: 'K63' },
      { disease: '장흡수장애', code: 'K90' },
      { disease: '소화계통의 기타 질환', code: 'K92' },
      { disease: '달리 분류된 질환에서의 기타 소화기관장애 (장, 복막 및 장간막림프절의 결핵성 장애(A18.3-†) 제외)', code: 'K93* (K93.0*제외)' },
      { disease: '담석증', code: 'K80' },
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타 질환', code: 'K82' },
      { disease: '담도의 기타 질환', code: 'K83' },
      { disease: '감염성 관절병증 (결핵관절염(A18.01†) 제외)', code: 'M00~M03 (M01.1*제외)' },
      { disease: '염증성 다발관절병증 (통풍 제외) (당뇨병성 관절병증 제외)', code: 'M05~M14 (M10제외) (M14.2*제외)' },
      { disease: '류마티스폐질환(M05.1†)', code: 'J99.0*' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '손가락 및 발가락의 후천변형', code: 'M20' },
      { disease: '사지의 기타 후천변형', code: 'M21' },
      { disease: '무릎뼈의 장애', code: 'M22' },
      { disease: '무릎의 내부장애', code: 'M23' },
      { disease: '기타 특정 관절장애', code: 'M24' },
      { disease: '달리 분류되지 않은 기타 관절장애', code: 'M25' },
      { disease: '척주후만증 및 척주전만증', code: 'M40' },
      { disease: '척주측만증', code: 'M41' },
      { disease: '척추골연골증', code: 'M42' },
      { disease: '기타 변형성 등병증', code: 'M43' },
      { disease: '강직척추염', code: 'M45' },
      { disease: '기타 염증성 척추병증', code: 'M46' },
      { disease: '척추증', code: 'M47' },
      { disease: '기타 척추병증', code: 'M48' },
      { disease: '척추증에서의 신경근 및 신경총 압박(M47.-†)', code: 'G55.2*' },
      { disease: '기타 등병증에서의 신경근 및 신경총 압박 (M45-M46†, M48.-†, M53-M54†)', code: 'G55.3*' },
      { disease: '경추간판장애', code: 'M50' },
      { disease: '기타 추간판장애', code: 'M51' },
      { disease: '결합조직의 기타 전신침범', code: 'M35' },
      { disease: '사용, 과용 및 압박에 관련된 연조직장애', code: 'M70' },
      { disease: '기타 윤활낭병증', code: 'M71' },
      { disease: '섬유모세포장애 (발바닥근막성 섬유종증 제외)', code: 'M72 (M72.2제외)' },
      { disease: '달리 분류된 질환에서의 연조직장애', code: 'M73*' },
      { disease: '발을 제외한 다리의 골부착부병증', code: 'M76' },
      { disease: '기타 골부착부병증', code: 'M77' },
      { disease: '달리 분류되지 않은 기타 연조직장애', code: 'M79' },
      { disease: '어깨병변 (어깨의 유착성 관절낭염 제외)', code: 'M75 (M75.0제외)' },
      { disease: '근육 장애', code: 'M60~M63' },
      { disease: '윤활막 및 힘줄장애', code: 'M65~M68' },
      { disease: '달리 분류되지 않은 기타 등병증', code: 'M53' },
      { disease: '등통증', code: 'M54' },
      { disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { disease: '달리 분류된 질환에서의 골다공증', code: 'M82*' },
      { disease: '골연속성의 장애', code: 'M84' },
      { disease: '고관절 및 골반의 연소성 골연골증', code: 'M91' },
      { disease: '기타 연소성 골연골증', code: 'M92' },
      { disease: '기타 골연골병증', code: 'M93' },
      { disease: '연골의 기타 장애', code: 'M94' },
      { disease: '신장 및 요관의 결석', code: 'N20' },
      { disease: '방광의 결석', code: 'N21.0' },
      { disease: '요도결석', code: 'N21.1' },
      { disease: '기타 하부요로결석', code: 'N21.8' },
      { disease: '상세불명의 하부요로결석', code: 'N21.9' },
      { disease: '상세불명의 신장 급통증', code: 'N23' },
      { disease: '달리 분류된 질환에서의 방광장애 (결핵성 방광염(A18.11†) 제외)', code: 'N33* (N33.0*제외)' },
      { disease: '달리 분류된 질환에서의 요도장애', code: 'N37*' },
      { disease: '비뇨계통의 기타 장애', code: 'N39' },
      { disease: '전립선증식증', code: 'N40' },
      { disease: '전립선의 염증성 질환', code: 'N41' },
      { disease: '전립선의 기타 장애', code: 'N42' },
      { disease: '음낭수종 및 정액류', code: 'N43' },
      { disease: '고환의 염전', code: 'N44' },
      { disease: '고환염 및 부고환염', code: 'N45' },
      { disease: '달리 분류되지 않은 남성생식기관의 염증성 장애', code: 'N49' },
      { disease: '남성생식기관의 기타 장애', code: 'N50' },
      { disease: '달리 분류된 질환에서의 남성생식기관의 장애', code: 'N51*' },
      { disease: '편모충성 전립선염(N51.0*)', code: 'A59.08†' },
      { disease: '볼거리고환염(N51.1*)', code: 'B26.0†' },
      { disease: '유방의 장애', code: 'N60~N64' },
      { disease: '난관염 및 난소염', code: 'N70' },
      { disease: '난소, 난관 및 넓은인대의 비염증성 장애', code: 'N83' },
      { disease: '자궁경부를 제외한 자궁의 염증성 질환', code: 'N71' },
      { disease: '자궁경부의 염증성 질환', code: 'N72' },
      { disease: '기타 여성골반염증질환', code: 'N73' },
      { disease: '달리 분류된 질환에서의 여성골반염증장애 (자궁경부의 결핵감염(A18.17†) 제외, 여성 결핵성 골반염증질환(A18.17†) 제외)', code: 'N74* (N74.0*제외) (N74.1*제외)' },
      { disease: '바르톨린선의 질환', code: 'N75' },
      { disease: '질 및 외음부의 기타 염증', code: 'N76' },
      { disease: '달리 분류된 질환에서의 외음질의 궤양 및 염증', code: 'N77*' },
      { disease: '자궁내막증', code: 'N80' },
      { disease: '여성생식기탈출', code: 'N81' },
      { disease: '여성생식관을 침범한 누공', code: 'N82' },
      { disease: '여성생식관의 용종', code: 'N84' },
      { disease: '자궁경부를 제외한 자궁의 기타 비염증성 장애', code: 'N85' },
      { disease: '자궁경부의 미란 및 외반', code: 'N86' },
      { disease: '자궁경부의 이형성', code: 'N87' },
      { disease: '자궁경부의 기타 비염증성 장애', code: 'N88' },
      { disease: '질의 기타 비염증성 장애', code: 'N89' },
      { disease: '외음부 및 회음부의 기타 비염증성 장애', code: 'N90' },
      { disease: '무월경, 소량 및 희발 월경', code: 'N91' },
      { disease: '과다, 빈발 및 불규칙 월경', code: 'N92' },
      { disease: '기타 이상 자궁 및 질 출혈', code: 'N93' },
      { disease: '여성생식기관 및 월경주기와 관련된 통증 및 기타 병태', code: 'N94' },
      { disease: '폐경 및 기타 폐경전후 장애', code: 'N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    category: '6) 7대생활질병',
    items: [
      { disease: '하지의 정맥류', code: 'I83' },
      { disease: '발바닥근막성 섬유종증', code: 'M72.2' },
      { disease: '어깨의 유착성 관절낭염', code: 'M75.0' },
      { disease: '손목터널증후군', code: 'G56.0' },
      { disease: '안검하수', code: 'H02.4' },
      { disease: '수면무호흡증', code: 'G47.3' },
      { disease: '전신홍반루푸스', code: 'M32' },
      { disease: '피부다발근염', code: 'M33' },
      { disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    category: '7) 치핵',
    items: [
      { disease: '치핵 및 항문주위정맥혈전증 (포함: 치질, 제외: 합병증(출산 및 산후기(O87.2), 임신(O22.4)))', code: 'K64' }
    ]
  }
];

export const HANWHA_34_DISEASES_SUMMARY = [
  {
    title: '34대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위·십이지장궤양, 갑상선질환, 동맥경화증, 만성하부호흡기 질환, 결핵, 신부전, 폐렴, 백내장, 녹내장, 황반변성, 담석증, 사타구니탈장, 편도염, 축농증, 급성상기도감염, 담낭담도질환, 중이의 진주종, 귀경화증, 소화기계통의 양성 신생물, 중이·호흡기계통 및 흉곽의 양성 신생물, 골 및 관절연골의 양성 신생물, 조직의 양성 신생물, 수막의 양성 신생물, 뇌 및 중추신경계통의 양성 신생물, 갑상선 및 내분비선의 양성 신생물, 관절염, 생식기질환, 유방의 양성 신생물, 골다공증'
  }
];

export const HANWHA_34_DISEASES_SECTIONS = [
  {
    category: 'A - 1) 당뇨병',
    items: [
      { disease: '1형 당뇨병', code: 'E10' },
      { disease: '2형 당뇨병', code: 'E11' },
      { disease: '영양실조-관련 당뇨병', code: 'E12' },
      { disease: '기타 명시된 당뇨병', code: 'E13' },
      { disease: '상세불명의 당뇨병', code: 'E14' },
      { disease: '당뇨병성 단일신경병증', code: 'G59.0*' },
      { disease: '당뇨병성 다발신경병증', code: 'G63.2*' },
      { disease: '당뇨병성 백내장', code: 'H28.0*' },
      { disease: '당뇨병성 망막병증', code: 'H36.0*' },
      { disease: '당뇨병성 관절병증', code: 'M14.2*' },
      { disease: '당뇨병에서의 사구체장애', code: 'N08.3*' }
    ]
  },
  {
    category: 'A - 2) 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막구균성 심장막염(I32.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심내막염(I39.8*)', code: 'A39.5+' },
      { disease: '수막구균성 심근염(I41.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심장염 NOS(I52.0*)', code: 'A39.5+' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6+' }
    ]
  },
  {
    category: 'A - 3) 고혈압',
    items: [
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 뇌병증', code: 'I67.4' },
      { disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    category: 'A - 4) 뇌혈관질환',
    items: [
      { disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    category: 'A - 5) 간질환',
    items: [
      { disease: '바이러스간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1+' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1+' }
    ]
  },
  {
    category: 'A - 6) 위십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명 부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: 'A - 7) 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: 'A - 8) 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: 'A - 9) 만성하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식, 천식지속상태', code: 'J45, J46' }
    ]
  },
  {
    category: 'A - 10) 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' },
      { disease: '결핵관절염(A18.01+)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.00+)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.02+)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.11+)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.15+)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환(A18.16+)', code: 'N74.1*' },
      { disease: '결핵성 복막염(A18.30+)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3-+)', code: 'K93.0*' }
    ]
  },
  {
    category: 'A - 11) 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: 'A - 12) 폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17*' },
      { disease: '수두폐렴(J17.1*)', code: 'B01.2+' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { disease: '폐톡소포자충증(J17.3*)', code: 'B58.3+' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' }
    ]
  },
  {
    category: 'B - 13) 백내장',
    items: [
      { disease: '노년백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    category: 'B - 14) 녹내장',
    items: [
      { disease: '녹내장, 달리 분류된 질환에서의 녹내장', code: 'H40, H42*' }
    ]
  },
  {
    category: 'B - 15) 황반변성',
    items: [
      { disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    category: 'B - 16) 담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    category: 'B - 17) 사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    category: 'B - 18) 편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    category: 'B - 19) 축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    category: 'B - 20) 급성상기도감염',
    items: [
      { disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    category: 'B - 21) 담낭담도질환',
    items: [
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타 질환', code: 'K82' },
      { disease: '담도의 기타 질환', code: 'K83' }
    ]
  },
  {
    category: 'B - 22) 중이의 진주종',
    items: [
      { disease: '중이의 진주종', code: 'H71' }
    ]
  },
  {
    category: 'B - 23) 귀경화증',
    items: [
      { disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    category: 'B - 24) 소화기계통의 양성 신생물',
    items: [
      { disease: '기타 및 부위불명의 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    category: 'B - 25) 중이, 호흡기계통 및 흉곽의 양성 신생물',
    items: [
      { disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    category: 'B - 26) 골 및 관절연골의 양성 신생물',
    items: [
      { disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    category: 'B - 27) 조직의 양성 신생물',
    items: [
      { disease: '중피조직의 양성 신생물', code: 'D19' },
      { disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    category: 'B - 28) 수막의 양성 신생물',
    items: [
      { disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    category: 'B - 29) 뇌 및 중추신경계통의 양성 신생물',
    items: [
      { disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    category: 'B - 30) 갑상선 및 내분비선의 양성 신생물',
    items: [
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    category: 'B - 31) 관절염',
    items: [
      { disease: '감염성 관절병증', code: 'M00~M03' },
      { disease: '염증성 다발관절병증', code: 'M05~M14' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '기타 관절장애', code: 'M20~M25' },
      { disease: '류마티스폐질환(M05.1+)', code: 'J99.0*' }
    ]
  },
  {
    category: 'B - 32) 생식기질환',
    items: [
      { disease: '남성생식기관의 질환(남성불임 제외)', code: 'N40~N45, N47~N51' },
      { disease: '편모충성 전립선염(N51.0*)', code: 'A59.01+' },
      { disease: '전립선의 결핵(N51.0*)', code: 'A18.13+' },
      { disease: '기타 남성생식기관의 결핵(N51.-*)', code: 'A18.14+' },
      { disease: '볼거리고환염(N51.1*)', code: 'B26.0+' },
      { disease: '여성골반내기관의 염증성 질환', code: 'N70~N77' },
      { disease: '자궁경부의 결핵(N74.0*)', code: 'A18.15+' },
      { disease: '결핵성 여성골반염증질환(N74.1*)', code: 'A18.16+' },
      { disease: '여성생식관의 비염증성 장애(습관성 유산자, 여성불임, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    category: 'B - 33) 유방의 양성 신생물',
    items: [
      { disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    category: 'B - 34) 골다공증',
    items: [
      { disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { disease: '달리 분류된 질환에서의 골다공증', code: 'M82*' },
      { disease: '골연속성의 장애', code: 'M84' }
    ]
  }
];

export const HANWHA_56_DISEASES_SUMMARY = [
  {
    title: '1) 12대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위십이지장궤양, 갑상선질환, 동맥경화증, 만성하부호흡기 질환, 결핵, 신부전, 폐렴'
  },
  {
    title: '2) 19대경증질병',
    diseases: '생식기질환(포경수술제외), 담석증, 사타구니 탈장, 편도염, 축농증, 급성상기도 감염, 담낭담도질환, 중이의 진주종, 귀경화증, 관절염, 골다공증, 소화기계통의 양성 신생물, 중이호흡기계통 및 흉곽의 양성 신생물, 골 및 관절연골의 양성 신생물, 조직의 양성 신생물, 수막의 양성 신생물, 뇌 및 중추신경계통의 양성 신생물, 갑상선 및 내분비선의 양성 신생물, 유방의 양성 신생물'
  },
  {
    title: '3) 25특정대질병',
    diseases: '패혈증, 파킨슨병, 중추신경계통의 탈수초질환, 자율신경계통의 장애, 대동맥류, 폐질환, 급성췌장염, 췌장질환, 후각특정질환, 인후부위의 특정질환, 중이 및 유돌의 질환(중이의 진주종 제외), 내이의 질환(귀경화증 제외), 사구체질환(당뇨병에서의 사구체장애 제외), 신세뇨관-간질질환, 방광의 결석, 신장 및 요관의 기타 장애, 방광의 질환(결핵성 방광염 제외), 유방의 장애, 특정 부위의 탈장, 비감염성 장염 및 결장염, 특정 장질환, 복막의 질환(결핵성 복막염 제외), 척추변형, 안면신경장애, 단일신경 병증(당뇨병성 단일신경병증 제외)'
  }
];

export const HANWHA_56_DISEASES_SECTIONS = [
  // 1) 12대질병
  {
    category: '12대질병 - 1) 당뇨병',
    items: [
      { disease: '1형 당뇨병', code: 'E10' },
      { disease: '2형 당뇨병', code: 'E11' },
      { disease: '영양실조-관련 당뇨병', code: 'E12' },
      { disease: '기타 명시된 당뇨병', code: 'E13' },
      { disease: '상세불명의 당뇨병', code: 'E14' },
      { disease: '당뇨병성 단일신경병증', code: 'G59.0*' },
      { disease: '당뇨병성 다발신경병증', code: 'G63.2*' },
      { disease: '당뇨병성 백내장', code: 'H28.0*' },
      { disease: '당뇨병성 망막병증', code: 'H36.0*' },
      { disease: '당뇨병성 관절병증', code: 'M14.2*' },
      { disease: '당뇨병에서의 사구체장애', code: 'N08.3*' }
    ]
  },
  {
    category: '12대질병 - 2) 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막구균성 심장막염(I32.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심내막염(I39.8*)', code: 'A39.5+' },
      { disease: '수막구균성 심근염(I41.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심장염 NOS(I52.0*)', code: 'A39.5+' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6+' }
    ]
  },
  {
    category: '12대질병 - 3) 고혈압',
    items: [
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 뇌병증', code: 'I67.4' },
      { disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    category: '12대질병 - 4) 뇌혈관질환',
    items: [
      { disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    category: '12대질병 - 5) 간질환',
    items: [
      { disease: '바이러스간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1+' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1+' }
    ]
  },
  {
    category: '12대질병 - 6) 위십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명 부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: '12대질병 - 7) 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '12대질병 - 8) 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '12대질병 - 9) 만성하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식, 천식지속상태', code: 'J45, J46' }
    ]
  },
  {
    category: '12대질병 - 10) 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' },
      { disease: '결핵관절염(A18.01+)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.00+)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.02+)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.11+)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.15+)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환(A18.16+)', code: 'N74.1*' },
      { disease: '결핵성 복막염(A18.30+)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3-+)', code: 'K93.0*' }
    ]
  },
  {
    category: '12대질병 - 11) 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '12대질병 - 12) 폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17*' },
      { disease: '수두폐렴(J17.1*)', code: 'B01.2+' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { disease: '폐톡소포자충증(J17.3*)', code: 'B58.3+' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' }
    ]
  },

  // 2) 19대경증질병
  {
    category: '19대경증질병 - 1) 생식기질환(포경수술제외)',
    items: [
      { disease: '남성 생식기관의 질환(남성불임, 단순포경, 과잉포피, 포경 및 감돈포경, 귀두포피염 제외)', code: 'N40~N45, N48~N51 (N48.1 제외)' },
      { disease: '편모충성 전립선염(N51.0*)', code: 'A59.01+' },
      { disease: '전립선의 결핵(N51.0*)', code: 'A18.13+' },
      { disease: '기타 남성생식기관의 결핵(N51.-*)', code: 'A18.14+' },
      { disease: '볼거리고환염(N51.1*)', code: 'B26.0+' },
      { disease: '여성골반내기관의 염증성 질환', code: 'N70~N77' },
      { disease: '자궁경부의 결핵(N74.0*)', code: 'A18.15+' },
      { disease: '결핵성 여성골반염증 질환(N74.1*)', code: 'A18.16+' },
      { disease: '여성생식관의 비염증성 장애(습관성 유산자, 여성불임, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    category: '19대경증질병 - 2) 담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    category: '19대경증질병 - 3) 사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    category: '19대경증질병 - 4) 편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    category: '19대경증질병 - 5) 축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    category: '19대경증질병 - 6) 급성상기도 감염',
    items: [
      { disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    category: '19대경증질병 - 7) 담낭담도질환',
    items: [
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타 질환', code: 'K82' },
      { disease: '담도의 기타 질환', code: 'K83' }
    ]
  },
  {
    category: '19대경증질병 - 8) 중이의 진주종',
    items: [
      { disease: '중이의 진주종', code: 'H71' }
    ]
  },
  {
    category: '19대경증질병 - 9) 귀경화증',
    items: [
      { disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    category: '19대경증질병 - 10) 관절염',
    items: [
      { disease: '감염성 관절병증', code: 'M00~M03' },
      { disease: '염증성 다발관절병증', code: 'M05~M14' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '기타 관절장애', code: 'M20~M25' },
      { disease: '류마티스폐질환(M05.1+)', code: 'J99.0*' }
    ]
  },
  {
    category: '19대경증질병 - 11) 골다공증',
    items: [
      { disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { disease: '달리 분류된 질환에서의 골다공증', code: 'M82*' },
      { disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    category: '19대경증질병 - 12) 소화기계통의 양성 신생물',
    items: [
      { disease: '기타 및 부위불명의 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    category: '19대경증질병 - 13) 중이, 호흡기계통 및 흉곽의 양성 신생물',
    items: [
      { disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    category: '19대경증질병 - 14) 골 및 관절연골의 양성 신생물',
    items: [
      { disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    category: '19대경증질병 - 15) 조직의 양성 신생물',
    items: [
      { disease: '중피조직의 양성 신생물', code: 'D19' },
      { disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    category: '19대경증질병 - 16) 수막의 양성 신생물',
    items: [
      { disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    category: '19대경증질병 - 17) 뇌 및 중추신경계통의 양성 신생물',
    items: [
      { disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    category: '19대경증질병 - 18) 갑상선 및 내분비선의 양성 신생물',
    items: [
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    category: '19대경증질병 - 19) 유방의 양성 신생물',
    items: [
      { disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },

  // 3) 25특정대질병
  {
    category: '25특정대질병 - 1) 패혈증',
    items: [
      { disease: '연쇄구균패혈증', code: 'A40' },
      { disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    category: '25특정대질병 - 2) 파킨슨병',
    items: [
      { disease: '파킨슨병', code: 'G20' },
      { disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    category: '25특정대질병 - 3) 중추신경계통의 탈수초질환',
    items: [
      { disease: '중추신경계통의 탈수초질환', code: 'G35~G37' }
    ]
  },
  {
    category: '25특정대질병 - 4) 자율신경계통의 장애',
    items: [
      { disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    category: '25특정대질병 - 5) 대동맥류',
    items: [
      { disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    category: '25특정대질병 - 6) 폐질환',
    items: [
      { disease: '폐기종', code: 'J43' },
      { disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { disease: '기관지확장증', code: 'J47' },
      { disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    category: '25특정대질병 - 7) 급성췌장염',
    items: [
      { disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    category: '25특정대질병 - 8) 췌장질환',
    items: [
      { disease: '췌장의 기타 질환', code: 'K86' },
      { disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { disease: '거대세포바이러스췌장염(K87.1*)', code: 'B25.2+' },
      { disease: '볼거리췌장염(K87.1*)', code: 'B26.3+' }
    ]
  },
  {
    category: '25특정대질병 - 9) 후각특정질환',
    items: [
      { disease: '혈관운동성 및 앨러지성 비염', code: 'J30' },
      { disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { disease: '코폴립', code: 'J33' },
      { disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    category: '25특정대질병 - 10) 인후부위의 특정질환',
    items: [
      { disease: '편도주위 농양', code: 'J36' },
      { disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    category: '25특정대질병 - 11) 중이 및 유돌의 질환',
    items: [
      { disease: '중이 및 유돌의 질환(중이의 진주종 제외)', code: 'H65~H75 (H71 제외)' }
    ]
  },
  {
    category: '25특정대질병 - 12) 내이의 질환',
    items: [
      { disease: '전정기능의 장애', code: 'H81' },
      { disease: '달리 분류된 질환에서의 현기증후군', code: 'H82' },
      { disease: '내이의 기타 질환', code: 'H83' }
    ]
  },
  {
    category: '25특정대질병 - 13) 사구체질환',
    items: [
      { disease: '사구체질환(당뇨병에서의 사구체장애 제외)', code: 'N00~N08 (N08.3 제외)' }
    ]
  },
  {
    category: '25특정대질병 - 14) 신세뇨관-간질질환',
    items: [
      { disease: '신세뇨관-간질질환', code: 'N10~N16' }
    ]
  },
  {
    category: '25특정대질병 - 15) 방광의 결석',
    items: [
      { disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    category: '25특정대질병 - 16) 신장 및 요관의 기타 장애',
    items: [
      { disease: '신장 및 요관의 기타 장애', code: 'N25~N29' }
    ]
  },
  {
    category: '25특정대질병 - 17) 방광의 질환',
    items: [
      { disease: '방광염', code: 'N30' },
      { disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { disease: '방광의 기타 장애', code: 'N32' },
      { disease: '달리 분류된 질환에서의 방광장애(결핵성 방광염 제외)', code: 'N33 (N33.0 제외)' }
    ]
  },
  {
    category: '25특정대질병 - 18) 유방의 장애',
    items: [
      { disease: '양성 유방형성이상', code: 'N60' },
      { disease: '유방의 염증성 장애', code: 'N61' },
      { disease: '유방의 비대', code: 'N62' },
      { disease: '유방의 상세불명의 덩이', code: 'N63' },
      { disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    category: '25특정대질병 - 19) 특정 부위의 탈장',
    items: [
      { disease: '대퇴탈장', code: 'K41' },
      { disease: '배꼽탈장', code: 'K42' },
      { disease: '복벽탈장', code: 'K43' },
      { disease: '횡격막탈장', code: 'K44' },
      { disease: '기타 복벽탈장', code: 'K45' },
      { disease: '상세불명의 복벽탈장', code: 'K46' }
    ]
  },
  {
    category: '25특정대질병 - 20) 비감염성 장염 및 결장염',
    items: [
      { disease: '크론병[국소성 장염]', code: 'K50' },
      { disease: '궤양성 대장염', code: 'K51' },
      { disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    category: '25특정대질병 - 21) 특정 장질환',
    items: [
      { disease: '장의 혈관장애', code: 'K55' },
      { disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    category: '25특정대질병 - 22) 복막의 질환',
    items: [
      { disease: '복막의 질환(결핵성 복막염 제외)', code: 'K65~K67 (K67.3 제외)' }
    ]
  },
  {
    category: '25특정대질병 - 23) 척추변형',
    items: [
      { disease: '척주후만증 및 척주전만증', code: 'M40' },
      { disease: '척주측만증', code: 'M41' },
      { disease: '척추골연골증', code: 'M42' },
      { disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    category: '25특정대질병 - 24) 안면신경장애',
    items: [
      { disease: '삼차신경의 장애', code: 'G50' },
      { disease: '안면신경장애', code: 'G51' },
      { disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    category: '25특정대질병 - 25) 단일신경 병증',
    items: [
      { disease: '팔의 단일신경병증', code: 'G56' },
      { disease: '다리의 단일신경병증', code: 'G57' },
      { disease: '기타 단일신경병증', code: 'G58' },
      { disease: '달리 분류된 질환에서의 단일신경병증(당뇨병성 단일신경병증 제외)', code: 'G59 (G59.0 제외)' }
    ]
  }
];

export const HANWHA_18_DISEASES_SUMMARY = [
  {
    title: '18대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위십이지장궤양, 갑상선질환, 동맥경화증, 만성하부호흡기 질환, 폐렴, 백내장, 녹내장, 결핵, 신부전, 담석증, 사타구니 탈장, 편도염, 축농증'
  }
];

export const HANWHA_18_DISEASES_SECTIONS = [
  {
    category: '1) 당뇨병',
    items: [
      { disease: '1형 당뇨병', code: 'E10' },
      { disease: '2형 당뇨병', code: 'E11' },
      { disease: '영양실조 관련 당뇨병', code: 'E12' },
      { disease: '기타명시된 당뇨병', code: 'E13' },
      { disease: '상세불명의 당뇨병', code: 'E14' },
      { disease: '당뇨병성단일신경병증', code: 'G59.0' },
      { disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { disease: '당뇨병성 백내장', code: 'H28.0' },
      { disease: '당뇨병성 망막병증', code: 'H36.0' },
      { disease: '당뇨병성 관절병증', code: 'M14.2' },
      { disease: '당뇨병에서의사구체장애', code: 'N08.3' }
    ]
  },
  {
    category: '2) 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타형태의 심장병', code: 'I30~I52' },
      { disease: '수막구균성 심장막염(I32.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심내막염(I39.8*)', code: 'A39.5+' },
      { disease: '수막구균성 심근염(I41.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심장염 NOS(I52.0*)', code: 'A39.5+' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6+' }
    ]
  },
  {
    category: '3) 고혈압',
    items: [
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 뇌병증', code: 'I67.4' },
      { disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    category: '4) 뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    category: '5) 간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스 간염(K77.0*)', code: 'B25.1+' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1+' }
    ]
  },
  {
    category: '6) 위십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: '7) 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '8) 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '9) 만성하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성기관지염', code: 'J41' },
      { disease: '상세불명의 만성기관지염', code: 'J42' },
      { disease: '천식 및 천식지속상태', code: 'J45, J46' }
    ]
  },
  {
    category: '10) 폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '수두 폐렴(J17.1*)', code: 'B01.2+' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { disease: '폐 톡소포자충증(J17.3*)', code: 'B58.3+' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    category: '11) 백내장',
    items: [
      { disease: '노년성 백내장, 기타 백내장, 수정체의 기타장애', code: 'H25, H26, H27' }
    ]
  },
  {
    category: '12) 녹내장',
    items: [
      { disease: '녹내장, 달리 분류된 질환에서의 녹내장', code: 'H40, H42' }
    ]
  },
  {
    category: '13) 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' },
      { disease: '결핵 관절염(A18.0+)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.0+)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.0+)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.1+)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.1+)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반 염증 질환(A18.1+)', code: 'N74.1*' },
      { disease: '결핵성복막염(A18.3+)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3+)', code: 'K93.0*' }
    ]
  },
  {
    category: '14) 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '15) 담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    category: '16) 사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    category: '17) 편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    category: '18) 축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  }
];

export const HANWHA_16_DISEASES_SUMMARY = [
  {
    title: '【별표36】16대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위·십이지장궤양, 갑상선질환, 동맥경화증, 만성하기도질환, 폐렴, 관절염, 백내장, 녹내장, 결핵, 신부전, 생식기질환'
  }
];

export const HANWHA_16_DISEASES_SECTIONS = [
  {
    category: '1. 당뇨병',
    items: [
      { disease: '당뇨병', code: 'E10~E14' }
    ]
  },
  {
    category: '2. 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { disease: '허혈성 심장질환', code: 'I20~I25' },
      { disease: '폐성심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타형태의 심장병', code: 'I30~I52' }
    ]
  },
  {
    category: '3. 고혈압',
    items: [
      { disease: '고혈압 질환', code: 'I10~I15' }
    ]
  },
  {
    category: '4. 뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    category: '5. 간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' }
    ]
  },
  {
    category: '6. 위·십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: '7. 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '8. 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '9. 만성하기도질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액농성 만성기관지염', code: 'J41' },
      { disease: '상세불명의 만성기관지염', code: 'J42' },
      { disease: '천식 및 천식지속상태', code: 'J45, J46' }
    ]
  },
  {
    category: '10. 폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    category: '11. 관절염',
    items: [
      { disease: '감염성 관절병증', code: 'M00~M03' },
      { disease: '염증성 다발관절병증', code: 'M05~M14' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '기타 관절 장애', code: 'M20~M25' }
    ]
  },
  {
    category: '12. 백내장',
    items: [
      { disease: '노년성 백내장, 기타 백내장, 수정체의 기타장애', code: 'H25, H26, H27' }
    ]
  },
  {
    category: '13. 녹내장',
    items: [
      { disease: '녹내장, 달리 분류된 질환에서의 녹내장', code: 'H40, H42' }
    ]
  },
  {
    category: '14. 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' }
    ]
  },
  {
    category: '15. 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '16. 생식기질환',
    items: [
      { disease: '남성 생식기관의 질환', code: 'N40~N45, N47~N51' },
      { disease: '여성 골반내 기관의 염증성 질환', code: 'N70~N77' },
      { disease: '여성생식관의 비염증성 장애(습관성 유산자, 여성불임증, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { disease: '비뇨생식계통의 기타장애', code: 'N99' }
    ]
  }
];

export const HANWHA_14_DISEASES_SUMMARY = [
  {
    title: '14대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위십이지장궤양, 갑상선질환, 동맥경화증, 만성하부호흡기 질환, 폐렴, 백내장, 녹내장, 결핵, 신부전'
  }
];

export const HANWHA_14_DISEASES_SECTIONS = [
  {
    category: '1) 당뇨병',
    items: [
      { disease: '1형 당뇨병', code: 'E10' },
      { disease: '2형 당뇨병', code: 'E11' },
      { disease: '영양실조 관련 당뇨병', code: 'E12' },
      { disease: '기타명시된 당뇨병', code: 'E13' },
      { disease: '상세불명의 당뇨병', code: 'E14' },
      { disease: '당뇨병성단일신경병증', code: 'G59.0' },
      { disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { disease: '당뇨병성 백내장', code: 'H28.0' },
      { disease: '당뇨병성 망막병증', code: 'H36.0' },
      { disease: '당뇨병성 관절병증', code: 'M14.2' },
      { disease: '당뇨병에서의사구체장애', code: 'N08.3' }
    ]
  },
  {
    category: '2) 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타형태의 심장병', code: 'I30~I52' },
      { disease: '수막구균성 심장막염(I32.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심내막염(I39.8*)', code: 'A39.5+' },
      { disease: '수막구균성 심근염(I41.0*)', code: 'A39.5+' },
      { disease: '수막구균성 심장염 NOS(I52.0*)', code: 'A39.5+' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6+' }
    ]
  },
  {
    category: '3) 고혈압',
    items: [
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 뇌병증', code: 'I67.4' },
      { disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    category: '4) 뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    category: '5) 간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스 간염(K77.0*)', code: 'B25.1+' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1+' }
    ]
  },
  {
    category: '6) 위십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: '7) 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '8) 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '9) 만성하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성기관지염', code: 'J41' },
      { disease: '상세불명의 만성기관지염', code: 'J42' },
      { disease: '천식 및 천식지속상태', code: 'J45, J46' }
    ]
  },
  {
    category: '10) 폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '수두 폐렴(J17.1*)', code: 'B01.2+' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { disease: '폐 톡소포자충증(J17.3*)', code: 'B58.3+' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    category: '11) 백내장',
    items: [
      { disease: '노년성 백내장, 기타 백내장, 수정체의 기타장애', code: 'H25, H26, H27' }
    ]
  },
  {
    category: '12) 녹내장',
    items: [
      { disease: '녹내장, 달리 분류된 질환에서의 녹내장', code: 'H40, H42' }
    ]
  },
  {
    category: '13) 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' },
      { disease: '결핵 관절염(A18.0+)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.0+)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.0+)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.1+)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.1+)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반 염증 질환(A18.1+)', code: 'N74.1*' },
      { disease: '결핵성복막염(A18.3+)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3+)', code: 'K93.0*' }
    ]
  },
  {
    category: '14) 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  }
];

export const HANWHA_WOMEN_PRIMARY_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '입술,구강및인두암',
    definition: '이 특별약관에서 "입술,구강및인두암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' }
    ]
  },
  {
    group: '그룹 2',
    title: '대장암(전이암포함)',
    definition: '이 특별약관에서 "대장암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '2', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '3', disease: '직장의 악성신생물', code: 'C20' },
      { num: '4', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' }
    ]
  },
  {
    group: '그룹 3',
    title: '특정소화기관암(전이암포함)',
    definition: '이 특별약관에서 "특정소화기관암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '4', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '5', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '6', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '7', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '8', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '9', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '10', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '11', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '12', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '13', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' },
      { num: '14', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '15', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '16', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 4',
    title: '폐암(전이암포함)',
    definition: '이 특별약관에서 "폐암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '2', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '3', disease: '폐의 이차성 악성 신생물', code: 'C78.0' }
    ]
  },
  {
    group: '그룹 5',
    title: '특정호흡기및흉곽내기관암(전이암포함)',
    definition: '이 특별약관에서 "특정호흡기및흉곽내기관암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '2', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '3', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내 기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '8', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '9', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' }
    ]
  },
  {
    group: '그룹 6',
    title: '뼈,관절,악성흑색종,중피성및연조직암(전이암포함)',
    definition: '이 특별약관에서 "뼈,관절,악성흑색종,중피성및연조직암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '골 및 관절연골의 악성 신생물', code: 'C40~C41' },
      { num: '2', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '3', disease: '중피성 및 연조직의 악성 신생물', code: 'C45~C49' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '림프절의 이차성 및 상세 불명의 악성 신생물', code: 'C77' },
      { num: '6', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '7', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '8', disease: '신경계통의 기타 및 상세불명의 이차성 악성 신생물', code: 'C79.4' },
      { num: '9', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '10', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '11', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '12', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '13', disease: '독립된(원발성) 여러부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    group: '그룹 7',
    title: '유방암(전이암포함)',
    definition: '이 특별약관에서 "유방암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    group: '그룹 8',
    title: '특정여성생식기관암(전이암포함)',
    definition: '이 특별약관에서 "특정여성생식기관암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '4', disease: '태반의 악성 신생물', code: 'C58' },
      { num: '5', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 9',
    title: '자궁관련암',
    definition: '이 특별약관에서 "자궁관련암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '2', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '3', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' }
    ]
  },
  {
    group: '그룹 10',
    title: '난소암(전이암포함)',
    definition: '이 특별약관에서 "난소암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '2', disease: '난소의 이차성 악성 신생물', code: 'C79.6' }
    ]
  },
  {
    group: '그룹 11',
    title: '비뇨기관암(요로암)(전이암포함)',
    definition: '이 특별약관에서 "비뇨기관암(요로암)(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '요로의 악성 신생물', code: 'C64~C68' },
      { num: '2', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '3', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' }
    ]
  },
  {
    group: '그룹 12',
    title: '눈,뇌,중추신경계통및내분비선암(전이암포함)',
    definition: '이 특별약관에서 "눈,뇌,중추신경계통및내분비선암(전이암포함)"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '눈, 뇌 및 중추신경계통의 기타 부분의 악성 신생물', code: 'C69~C72' },
      { num: '2', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '3', disease: '기타 내분비선 및 관련구조물의 악성 신생물', code: 'C75' },
      { num: '4', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '5', disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    group: '그룹 13',
    title: '혈액암',
    definition: '이 특별약관에서 "혈액암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '림프, 조혈 및 관련 조직의 악성 신생물', code: 'C81~C96' },
      { num: '2', disease: '진성 적혈구증다증', code: 'D45' },
      { num: '3', disease: '골수형성이상증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판증다증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  }
];

export const HANWHA_WOMEN_METASTATIC_CANCER_SUMMARY = [
  {
    group: '그룹 1',
    title: '소화기관전이암',
    diseases: '소장의 이차성 악성 신생물, 대장 및 직장의 이차성 악성 신생물, 간 및 간내 담관의 이차성 악성 신생물, 기타 및 상세불명의 소화기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 2',
    title: '유방전이암',
    diseases: '유방의 이차성 악성 신생물'
  },
  {
    group: '그룹 3',
    title: '생식기관전이암',
    diseases: '난소의 이차성 악성 신생물, 생식기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 4',
    title: '호흡기및흉곽내기관전이암',
    diseases: '폐의 이차성 악성 신생물, 종격의 이차성 악성 신생물, 흉막의 이차성 악성 신생물, 기타 및 상세불명의 호흡기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 5',
    title: '관절및피부전이암',
    diseases: '후복막 및 복막의 이차성 악성 신생물, 피부의 이차성 악성 신생물, 신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물, 골 및 골수의 이차성 악성 신생물'
  },
  {
    group: '그룹 6',
    title: '요로전이암',
    diseases: '신장 및 신우의 이차성 악성 신생물, 방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 7',
    title: '뇌전이암',
    diseases: '뇌 및 뇌막의 이차성 악성 신생물, 부신의 이차성 악성 신생물'
  },
  {
    group: '그룹 8',
    title: '림프및기타특정전이암',
    diseases: '머리·얼굴·목·흉곽내·복강내·겨드랑·팔·사타구니·다리·골반내·여러 부위·상세불명의 림프절의 이차성 및 상세불명의 악성신생물, 상세불명 부위의 이차성 악성 신생물, 기타 명시된 부위의 이차성 악성 신생물, 부위의 명시가 없는 악성 신생물'
  }
];

export const HANWHA_WOMEN_METASTATIC_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '소화기관전이암',
    definition: '이 특별약관에서 "소화기관전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '2', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '3', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '4', disease: '기타 및 상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.8' }
    ]
  },
  {
    group: '그룹 2',
    title: '유방전이암',
    definition: '이 특별약관에서 "유방전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    group: '그룹 3',
    title: '생식기관전이암',
    definition: '이 특별약관에서 "생식기관전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '난소의 이차성 악성 신생물', code: 'C79.6' },
      { num: '2', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 4',
    title: '호흡기및흉곽내기관전이암',
    definition: '이 특별약관에서 "호흡기및흉곽내기관전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '2', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '3', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '4', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' }
    ]
  },
  {
    group: '그룹 5',
    title: '관절및피부전이암',
    definition: '이 특별약관에서 "관절및피부전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '2', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '3', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' },
      { num: '4', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' }
    ]
  },
  {
    group: '그룹 6',
    title: '요로전이암',
    definition: '이 특별약관에서 "요로전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '2', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' }
    ]
  },
  {
    group: '그룹 7',
    title: '뇌전이암',
    definition: '이 특별약관에서 "뇌전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '2', disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    group: '그룹 8',
    title: '림프및기타특정전이암',
    definition: '이 특별약관에서 "림프및기타특정전이암"이라 함은 악성신생물 분류표(【별표14】 참조)에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병·사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '머리, 얼굴 및 목의 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.0' },
      { num: '2', disease: '흉곽내림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.1' },
      { num: '3', disease: '복강내림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.2' },
      { num: '4', disease: '겨드랑 및 팔 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.3' },
      { num: '5', disease: '사타구니 및 다리 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.4' },
      { num: '6', disease: '골반내 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.5' },
      { num: '7', disease: '여러 부위의 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.8' },
      { num: '8', disease: '상세불명의 림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.9' },
      { num: '9', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '10', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '11', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  }
];

export const HANWHA_WOMEN_INTEGRATED_CANCER_SUMMARY = [
  {
    group: '그룹 1',
    title: '입술,구강및인두암',
    diseases: '입술, 구강 및 인두의 악성 신생물'
  },
  {
    group: '그룹 2',
    title: '대장암(전이암포함)',
    diseases: '결장의 악성 신생물, 직장구불결장접합부의 악성 신생물, 직장의 악성신생물, 대장 및 직장의 이차성 악성 신생물'
  },
  {
    group: '그룹 3',
    title: '특정소화기관암(전이암포함)',
    diseases: '식도의 악성 신생물, 위의 악성 신생물, 소장의 악성 신생물, 항문 및 항문관의 악성 신생물, 간 및 간내 담관의 악성 신생물, 담낭의 악성 신생물, 담도의 기타 및 상세불명 부분의 악성 신생물, 췌장의 악성 신생물, 기타 및 부위불명 소화기관의 악성 신생물, 소장·간·위·췌장·비장 등 소화기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 4',
    title: '폐암(전이암포함)',
    diseases: '기관의 악성 신생물, 기관지 및 폐의 악성 신생물, 폐의 이차성 악성 신생물'
  },
  {
    group: '그룹 5',
    title: '특정호흡기및흉곽내기관암(전이암포함)',
    diseases: '비강 및 중이의 악성 신생물, 부비동의 악성 신생물, 후두의 악성 신생물, 흉선의 악성 신생물, 심장, 종격 및 흉막의 악성 신생물, 기타 및 부위불명의 호흡기 및 흉곽내 기관의 악성 신생물, 종격·흉막 등 호흡기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 6',
    title: '뼈,관절,악성흑색종,중피성및연조직암(전이암포함)',
    diseases: '골 및 관절연골의 악성 신생물, 피부의 악성 흑색종, 중피성 및 연조직의 악성 신생물, 기타 및 부위불명의 악성 신생물, 림프절·후복막·피부·신경계통·골수 등 이차성 악성 신생물, 부위의 명시가 없는 악성 신생물, 독립된(원발성) 여러부위의 악성 신생물'
  },
  {
    group: '그룹 7',
    title: '유방암(전이암포함)',
    diseases: '유방의 악성 신생물, 유방의 이차성 악성 신생물'
  },
  {
    group: '그룹 8',
    title: '특정여성생식기관암(전이암포함)',
    diseases: '외음의 악성 신생물, 질의 악성 신생물, 기타 및 상세불명의 여성생식기관의 악성 신생물, 태반의 악성 신생물, 생식기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 9',
    title: '자궁관련암',
    diseases: '자궁경부의 악성 신생물, 자궁체부의 악성 신생물, 자궁의 상세불명 부분의 악성 신생물'
  },
  {
    group: '그룹 10',
    title: '난소암(전이암포함)',
    diseases: '난소의 악성 신생물, 난소의 이차성 악성 신생물'
  },
  {
    group: '그룹 11',
    title: '비뇨기관암(요로암)(전이암포함)',
    diseases: '요로의 악성 신생물, 신장 및 신우의 이차성 악성 신생물, 방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물'
  },
  {
    group: '그룹 12',
    title: '눈,뇌,중추신경계통및내분비선암(전이암포함)',
    diseases: '눈, 뇌 및 중추신경계통의 기타 부분의 악성 신생물, 부신의 악성 신생물, 기타 내분비선 및 관련구조물의 악성 신생물, 뇌 및 뇌막·부신의 이차성 악성 신생물'
  },
  {
    group: '그룹 13',
    title: '혈액암',
    diseases: '림프, 조혈 및 관련 조직의 악성 신생물, 진성 적혈구증다증, 골수형성이상증후군, 만성 골수증식질환, 본태성(출혈성) 혈소판증다증, 골수섬유증, 만성 호산구성 백혈병(과호산구증후군)'
  }
];

export const HANWHA_WOMEN_INTEGRATED_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '입술,구강및인두암',
    definition: '이 특별약관에서 "입술,구강및인두암"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' }
    ]
  },
  {
    group: '그룹 2',
    title: '대장암(전이암포함)',
    definition: '이 특별약관에서 "대장암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '2', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '3', disease: '직장의 악성신생물', code: 'C20' },
      { num: '4', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' }
    ]
  },
  {
    group: '그룹 3',
    title: '특정소화기관암(전이암포함)',
    definition: '이 특별약관에서 "특정소화기관암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '4', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '5', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '6', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '7', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '8', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '9', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '10', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '11', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '12', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '13', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' },
      { num: '14', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '15', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '16', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 4',
    title: '폐암(전이암포함)',
    definition: '이 특별약관에서 "폐암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '2', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '3', disease: '폐의 이차성 악성 신생물', code: 'C78.0' }
    ]
  },
  {
    group: '그룹 5',
    title: '특정호흡기및흉곽내기관암(전이암포함)',
    definition: '이 특별약관에서 "특정호흡기및흉곽내기관암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '2', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '3', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내 기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '8', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '9', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' }
    ]
  },
  {
    group: '그룹 6',
    title: '뼈,관절,악성흑색종,중피성및연조직암(전이암포함)',
    definition: '이 특별약관에서 "뼈,관절,악성흑색종,중피성및연조직암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '골 및 관절연골의 악성 신생물', code: 'C40~C41' },
      { num: '2', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '3', disease: '중피성 및 연조직의 악성 신생물', code: 'C45~C49' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '림프절의 이차성 및 상세 불명의 악성 신생물', code: 'C77' },
      { num: '6', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '7', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '8', disease: '신경계통의 기타 및 상세불명의 이차성 악성 신생물', code: 'C79.4' },
      { num: '9', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '10', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '11', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '12', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '13', disease: '독립된(원발성) 여러부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    group: '그룹 7',
    title: '유방암(전이암포함)',
    definition: '이 특별약관에서 "유방암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    group: '그룹 8',
    title: '특정여성생식기관암(전이암포함)',
    definition: '이 특별약관에서 "특정여성생식기관암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '4', disease: '태반의 악성 신생물', code: 'C58' },
      { num: '5', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 9',
    title: '자궁관련암',
    definition: '이 특별약관에서 "자궁관련암"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '2', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '3', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' }
    ]
  },
  {
    group: '그룹 10',
    title: '난소암(전이암포함)',
    definition: '이 특별약관에서 "난소암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '2', disease: '난소의 이차성 악성 신생물', code: 'C79.6' }
    ]
  },
  {
    group: '그룹 11',
    title: '비뇨기관암(요로암)(전이암포함)',
    definition: '이 특별약관에서 "비뇨기관암(요로암)(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '요로의 악성 신생물', code: 'C64~C68' },
      { num: '2', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '3', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' }
    ]
  },
  {
    group: '그룹 12',
    title: '눈,뇌,중추신경계통및내분비선암(전이암포함)',
    definition: '이 특별약관에서 "눈,뇌,중추신경계통및내분비선암(전이암포함)"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '눈, 뇌 및 중추신경계통의 기타 부분의 악성 신생물', code: 'C69~C72' },
      { num: '2', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '3', disease: '기타 내분비선 및 관련구조물의 악성 신생물', code: 'C75' },
      { num: '4', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '5', disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    group: '그룹 13',
    title: '혈액암',
    definition: '이 특별약관에서 "혈액암"이라 함은 악성신생물 분류표에서 정한 질병 중 아래에 해당하는 질병을 말하며, 질병분류기준은 제9차 개정 한국표준질병사인분류에 따릅니다.',
    items: [
      { num: '1', disease: '림프, 조혈 및 관련 조직의 악성 신생물', code: 'C81~C96' },
      { num: '2', disease: '진성 적혈구증다증', code: 'D45' },
      { num: '3', disease: '골수형성이상증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판증다증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  }
];


export const HANWHA_INTEGRATED_TREATMENT_ITEMS: HanwhaIntegratedTreatmentItem[] = [
  // 상해및질병통합치료(검사)
  {
    category: '상해및질병통합치료(검사)',
    name: 'MRI촬영검사비',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '5만원',
  },
  {
    category: '상해및질병통합치료(검사)',
    name: 'CT촬영검사비',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '5만원',
  },
  {
    category: '상해및질병통합치료(검사)',
    name: '양전자방출단층촬영(PET)검사비',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '5만원',
  },

  // 상해및질병통합치료(1-5종수술)
  {
    category: '상해및질병통합치료(1-5종수술)',
    name: '1-5종수술비(1종)',
    limit: '수술 1회당',
    plan10m: '10만원',
    plan30m: '20만원',
    plan40m: '20만원',
  },
  {
    category: '상해및질병통합치료(1-5종수술)',
    name: '1-5종수술비(2종)',
    limit: '수술 1회당',
    plan10m: '20만원',
    plan30m: '30만원',
    plan40m: '30만원',
  },
  {
    category: '상해및질병통합치료(1-5종수술)',
    name: '1-5종수술비(3종)',
    limit: '수술 1회당',
    plan10m: '30만원',
    plan30m: '50만원',
    plan40m: '100만원',
  },
  {
    category: '상해및질병통합치료(1-5종수술)',
    name: '1-5종수술비(4종)',
    limit: '수술 1회당',
    plan10m: '200만원',
    plan30m: '500만원',
    plan40m: '800만원',
  },
  {
    category: '상해및질병통합치료(1-5종수술)',
    name: '1-5종수술비(5종)',
    limit: '수술 1회당',
    plan10m: '500만원',
    plan30m: '700만원',
    plan40m: '1000만원',
  },

  // 상해및질병통합치료(입원)
  {
    category: '상해및질병통합치료(입원)',
    name: '상급종합병원입원생활비',
    limit: '입원 1일당',
    plan10m: '2만원',
    plan30m: '3만원',
    plan40m: '5만원',
  },
  {
    category: '상해및질병통합치료(입원)',
    name: '수술동반입원생활비',
    limit: '입원 1일당',
    plan10m: '2만원',
    plan30m: '3만원',
    plan40m: '5만원',
  },
  {
    category: '상해및질병통합치료(입원)',
    name: '중환자실입원생활비',
    limit: '입원 1일당',
    plan10m: '40만원',
    plan30m: '40만원',
    plan40m: '40만원',
  },

  // 상해및질병통합치료(주요치료)
  {
    category: '상해및질병통합치료(주요치료)',
    name: '특정시술치료비(흡인,천자,절개,배액,배농)',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '특정시술치료비(신경차단)',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '특정시술치료비(도수정복)',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '창상봉합술치료비(안면부)',
    limit: '입원/외래 각각 1일 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '창상봉합술치료비(안면부제외)',
    limit: '연간 3회한 (입원/외래 각각 1일 1회한)',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '고압산소요법치료비',
    limit: '연간 1회한',
    plan10m: '5만원',
    plan30m: '5만원',
    plan40m: '10만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '특정수혈치료비',
    limit: '각 연간 3회한',
    plan10m: '30만원',
    plan30m: '30만원',
    plan40m: '30만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '저체온요법치료비',
    limit: '연간 1회한',
    plan10m: '50만원',
    plan30m: '75만원',
    plan40m: '100만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '인공호흡기치료비(12시간초과)',
    limit: '연간 1회한',
    plan10m: '100만원',
    plan30m: '150만원',
    plan40m: '200만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '지속적신대체요법치료비(CRRT)',
    limit: '연간 1회한',
    plan10m: '300만원',
    plan30m: '400만원',
    plan40m: '500만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '종합병원전신마취치료비(6시간이상)',
    limit: '수술 1회당',
    plan10m: '300만원',
    plan30m: '400만원',
    plan40m: '500만원',
  },
  {
    category: '상해및질병통합치료(주요치료)',
    name: '부분체외순환치료비',
    limit: '연간 1회한',
    plan10m: '500만원',
    plan30m: '750만원',
    plan40m: '1,000만원',
  },
];

export const HANWHA_INTEGRATED_TREATMENT_SECTIONS = (() => {
  const map: Record<string, any[]> = {};
  HANWHA_INTEGRATED_TREATMENT_ITEMS.forEach((item, idx) => {
    if (!map[item.category]) map[item.category] = [];
    map[item.category].push({
      num: String(idx + 1),
      disease: `${item.name} (${item.limit}) [1천만원: ${item.plan10m} | 3천만원: ${item.plan30m} | 4천만원: ${item.plan40m}]`,
      code: '통합치료'
    });
  });
  return Object.keys(map).map(cat => ({
    title: cat,
    items: map[cat]
  }));
})();

export const HANWHA_INTEGRATED_TREATMENT_SUMMARY = [
  {
    group: '상해및질병통합치료(검사)',
    title: '상해및질병통합치료(검사)',
    items: [
      { name: 'MRI촬영검사비 (연간 1회한)', code: '5만원' },
      { name: 'CT촬영검사비 (연간 1회한)', code: '5만원' },
      { name: '양전자방출단층촬영(PET)검사비 (연간 1회한)', code: '5만원' },
    ]
  },
  {
    group: '상해및질병통합치료(1-5종수술)',
    title: '상해및질병통합치료(1-5종수술)',
    items: [
      { name: '1-5종수술비(1종) (수술 1회당)', code: '10만~20만원' },
      { name: '1-5종수술비(2종) (수술 1회당)', code: '20만~30만원' },
      { name: '1-5종수술비(3종) (수술 1회당)', code: '30만~100만원' },
      { name: '1-5종수술비(4종) (수술 1회당)', code: '200만~800만원' },
      { name: '1-5종수술비(5종) (수술 1회당)', code: '500만~1,000만원' },
    ]
  },
  {
    group: '상해및질병통합치료(입원)',
    title: '상해및질병통합치료(입원)',
    items: [
      { name: '상급종합병원입원생활비 (입원 1일당)', code: '2만~5만원' },
      { name: '수술동반입원생활비 (입원 1일당)', code: '2만~5만원' },
      { name: '중환자실입원생활비 (입원 1일당)', code: '40만원' },
    ]
  },
  {
    group: '상해및질병통합치료(주요치료)',
    title: '상해및질병통합치료(주요치료)',
    items: [
      { name: '특정시술치료비(흡인,천자,절개,배액,배농)', code: '5만~10만원' },
      { name: '특정시술치료비(신경차단)', code: '5만~10만원' },
      { name: '특정시술치료비(도수정복)', code: '5만~10만원' },
      { name: '창상봉합술치료비(안면부)', code: '5만~10만원' },
      { name: '창상봉합술치료비(안면부제외)', code: '5만~10만원' },
      { name: '고압산소요법치료비', code: '5만~10만원' },
      { name: '특정수혈치료비', code: '30만원' },
      { name: '저체온요법치료비', code: '50만~100만원' },
      { name: '인공호흡기치료비(12시간초과)', code: '100만~200만원' },
      { name: '지속적신대체요법치료비(CRRT)', code: '300만~500만원' },
      { name: '종합병원전신마취치료비(6시간이상)', code: '300만~500만원' },
      { name: '부분체외순환치료비', code: '500만~1,000만원' },
    ]
  }
];

// 한화손해보험 상해통합치료비 (고급형 / 일반형 / 실속형) 데이터 - 674 한화 시그니처 여성 건강보험4.0 무배당2604
// interface moved to types.ts

export const HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS: HanwhaInjuryIntegratedTreatmentItem[] = [
  // 상해통합치료(검사)
  {
    category: '상해통합치료(검사)',
    name: '상해MRI촬영검사비',
    limit: '연간 1회한',
    luxury: '10만원',
    general: '5만원',
    saving: '3만원',
  },
  {
    category: '상해통합치료(검사)',
    name: '상해CT촬영검사비',
    limit: '연간 1회한',
    luxury: '10만원',
    general: '5만원',
    saving: '3만원',
  },
  {
    category: '상해통합치료(검사)',
    name: '골밀도검사비',
    limit: '연간 1회한',
    luxury: '3만원',
    general: '3만원',
    saving: '3만원',
  },

  // 상해통합치료(1-5종수술)
  {
    category: '상해통합치료(1-5종수술)',
    name: '상해1-5종수술비(1종)',
    limit: '수술 1회당',
    luxury: '20만원',
    general: '10만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(1-5종수술)',
    name: '상해1-5종수술비(2종)',
    limit: '수술 1회당',
    luxury: '30만원',
    general: '30만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(1-5종수술)',
    name: '상해1-5종수술비(3종)',
    limit: '수술 1회당',
    luxury: '300만원',
    general: '100만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(1-5종수술)',
    name: '상해1-5종수술비(4종)',
    limit: '수술 1회당',
    luxury: '1,000만원',
    general: '500만원',
    saving: '100만원',
  },
  {
    category: '상해통합치료(1-5종수술)',
    name: '상해1-5종수술비(5종)',
    limit: '수술 1회당',
    luxury: '2,000만원',
    general: '1,000만원',
    saving: '1,000만원',
  },

  // 상해통합치료(수술)
  {
    category: '상해통합치료(수술)',
    name: '상해종합병원수술비',
    limit: '사고 1회당',
    luxury: '200만원',
    general: '100만원',
    saving: '50만원',
  },
  {
    category: '상해통합치료(수술)',
    name: '상해상급종합병원수술비',
    limit: '사고 1회당',
    luxury: '100만원',
    general: '50만원',
    saving: '30만원',
  },

  // 상해통합치료(치료Ⅰ)
  {
    category: '상해통합치료(치료Ⅰ)',
    name: '상해특정수혈치료비',
    limit: '각 연간 3회한',
    luxury: '30만원',
    general: '20만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(치료Ⅰ)',
    name: '깁스치료비',
    limit: '사고 1회당',
    luxury: '50만원',
    general: '30만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(치료Ⅰ)',
    name: '창상봉합술치료비(안면부)',
    limit: '각 1일 1회한',
    luxury: '50만원',
    general: '30만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(치료Ⅰ)',
    name: '창상봉합술치료비(안면부제외)',
    limit: '연간 3회한 (입원/외래 각각 1일 1회한)',
    luxury: '50만원',
    general: '30만원',
    saving: '10만원',
  },
  {
    category: '상해통합치료(치료Ⅰ)',
    name: '응급실내원치료비',
    limit: '내원 1회당',
    luxury: '5만원',
    general: '3만원',
    saving: '2만원',
  },

  // 상해통합치료(치료Ⅱ)
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '지속적신대체요법치료비',
    limit: '연간 1회한',
    luxury: '500만원',
    general: '300만원',
    saving: '300만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '인공호흡기치료비(12시간초과)',
    limit: '연간 1회한',
    luxury: '200만원',
    general: '100만원',
    saving: '50만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '저체온요법치료비',
    limit: '연간 1회한',
    luxury: '100만원',
    general: '100만원',
    saving: '50만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '부분체외순환치료비',
    limit: '연간 1회한',
    luxury: '2,000만원',
    general: '1,500만원',
    saving: '1,000만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '종합병원전신마취치료비(6시간이상)',
    limit: '수술 1회당',
    luxury: '500만원',
    general: '400만원',
    saving: '300만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '중증외상산정특례대상치료비',
    limit: '연간 1회한',
    luxury: '1,000만원',
    general: '800만원',
    saving: '500만원',
  },
  {
    category: '상해통합치료(치료Ⅱ)',
    name: '종합병원중환자실치료비',
    limit: '연간 1회한',
    luxury: '1,000만원',
    general: '800만원',
    saving: '500만원',
  },

  // 상해통합치료(재활치료)
  {
    category: '상해통합치료(재활치료)',
    name: '상해재활치료비',
    limit: '연간 15회한 (입원/외래 각각 1일 1회한)',
    luxury: '2만원',
    general: '2만원',
    saving: '1만원',
  },
];

export const HANWHA_INJURY_INTEGRATED_TREATMENT_SECTIONS = (() => {
  const map: Record<string, any[]> = {};
  HANWHA_INJURY_INTEGRATED_TREATMENT_ITEMS.forEach((item, idx) => {
    if (!map[item.category]) map[item.category] = [];
    map[item.category].push({
      num: String(idx + 1),
      disease: `${item.name} (${item.limit}) [고급형: ${item.luxury} | 일반형: ${item.general} | 실속형: ${item.saving}]`,
      code: '상해통합치료'
    });
  });
  return Object.keys(map).map(cat => ({
    title: cat,
    items: map[cat]
  }));
})();

export const HANWHA_INJURY_INTEGRATED_TREATMENT_SUMMARY = [
  {
    group: '상해통합치료(검사)',
    title: '상해통합치료(검사)',
    items: [
      { name: '상해MRI촬영검사비 (연간 1회한)', code: '3만~10만원' },
      { name: '상해CT촬영검사비 (연간 1회한)', code: '3만~10만원' },
      { name: '골밀도검사비 (연간 1회한)', code: '3만원' },
    ]
  },
  {
    group: '상해통합치료(1-5종수술)',
    title: '상해통합치료(1-5종수술)',
    items: [
      { name: '상해1-5종수술비(1종) (수술 1회당)', code: '10만~20만원' },
      { name: '상해1-5종수술비(2종) (수술 1회당)', code: '10만~30만원' },
      { name: '상해1-5종수술비(3종) (수술 1회당)', code: '10만~300만원' },
      { name: '상해1-5종수술비(4종) (수술 1회당)', code: '100만~1,000만원' },
      { name: '상해1-5종수술비(5종) (수술 1회당)', code: '1,000만~2,000만원' },
    ]
  },
  {
    group: '상해통합치료(수술)',
    title: '상해통합치료(수술)',
    items: [
      { name: '상해종합병원수술비 (사고 1회당)', code: '50만~200만원' },
      { name: '상해상급종합병원수술비 (사고 1회당)', code: '30만~100만원' },
    ]
  },
  {
    group: '상해통합치료(치료Ⅰ)',
    title: '상해통합치료(치료Ⅰ)',
    items: [
      { name: '상해특정수혈치료비 (각 연간 3회한)', code: '10만~30만원' },
      { name: '깁스치료비 (사고 1회당)', code: '10만~50만원' },
      { name: '창상봉합술치료비(안면부) (각 1일 1회한)', code: '10만~50만원' },
      { name: '창상봉합술치료비(안면부제외) (연간 3회한)', code: '10만~50만원' },
      { name: '응급실내원치료비 (내원 1회당)', code: '2만~5만원' },
    ]
  },
  {
    group: '상해통합치료(치료Ⅱ)',
    title: '상해통합치료(치료Ⅱ)',
    items: [
      { name: '지속적신대체요법치료비 (연간 1회한)', code: '300만~500만원' },
      { name: '인공호흡기치료비(12시간초과) (연간 1회한)', code: '50만~200만원' },
      { name: '저체온요법치료비 (연간 1회한)', code: '50만~100만원' },
      { name: '부분체외순환치료비 (연간 1회한)', code: '1,000만~2,000만원' },
      { name: '종합병원전신마취치료비(6시간이상) (수술 1회당)', code: '300만~500만원' },
      { name: '중증외상산정특례대상치료비 (연간 1회한)', code: '500만~1,000만원' },
      { name: '종합병원중환자실치료비 (연간 1회한)', code: '500만~1,000만원' },
    ]
  },
  {
    group: '상해통합치료(재활치료)',
    title: '상해통합치료(재활치료)',
    items: [
      { name: '상해재활치료비 (연간 15회한)', code: '1만~2만원' },
    ]
  }
];

// KB손해보험 질병통합치료비 (고급형/기본형/실속형) 데이터
