// NH (농협손해보험) terms data

export const NH_CANCER_SECTIONS = [
  {
    title: '두경부암',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '3', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '4', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    title: '위및식도암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' }
    ]
  },
  {
    title: '소장,대장,항문 및 기타소화기관암',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문, 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' }
    ]
  },
  {
    title: '간,담낭,담도 및 췌장암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' }
    ]
  },
  {
    title: '흉곽내기관, 중피성 및 연조직암',
    items: [
      { num: '1', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '2', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '3', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '중피성 및 연조직의 악성 신생물', code: 'C45~C49' }
    ]
  },
  {
    title: '골,피부 등 전신부위암',
    items: [
      { num: '1', disease: '골 및 관절연골의 악성 신생물', code: 'C40~C41' },
      { num: '2', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '3', disease: '불명확한, 이차성 및 상세불명 부위의 악성 신생물', code: 'C76~C80' },
      { num: '4', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    title: '유방,비뇨기관, 부신 및 내분비선암',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '요로의 악성 신생물', code: 'C64~C68' },
      { num: '3', disease: '부신 및 기타 내분비선의 악성 신생물', code: 'C74~C75' }
    ]
  },
  {
    title: '남녀생식기암',
    items: [
      { num: '1', disease: '[남성] 음경의 악성 신생물', code: 'C60' },
      { num: '2', disease: '[남성] 전립선의 악성 신생물', code: 'C61' },
      { num: '3', disease: '[남성] 고환의 악성 신생물', code: 'C62' },
      { num: '4', disease: '[남성] 기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '5', disease: '[여성] 외음의 악성 신생물', code: 'C51' },
      { num: '6', disease: '[여성] 질의 악성 신생물', code: 'C52' },
      { num: '7', disease: '[여성] 자궁경부의 악성 신생물', code: 'C53' },
      { num: '8', disease: '[여성] 자궁체부의 악성 신생물', code: 'C54' },
      { num: '9', disease: '[여성] 자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '10', disease: '[여성] 난소의 악성 신생물', code: 'C56' },
      { num: '11', disease: '[여성] 기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '12', disease: '[여성] 태반의 악성 신생물', code: 'C58' }
    ]
  },
  {
    title: '혈액암',
    items: [
      { num: '1', disease: '림프, 조혈 및 관련 조직의 악성 신생물', code: 'C81~C96' },
      { num: '2', disease: '진성 적혈구증가증', code: 'D45' },
      { num: '3', disease: '골수형성이상증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  },
  {
    title: '뇌 및 중추신경계통암',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' }
    ]
  }
];

export const NH_CANCER_METASTASIS_SECTIONS = [
  {
    title: '두경부암',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '3', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '4', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    title: '위및식도암(전이포함)',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '위의 이차성 악성 신생물', code: 'C78.80' }
    ]
  },
  {
    title: '소장,대장,항문 및 기타소화기관암(전이포함)',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문, 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '7', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '8', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '9', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '10', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '11', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    title: '간,담낭,담도 및 췌장암(전이포함)',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '5', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '6', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    title: '흉곽내기관, 중피성 및 연조직암(전이포함)',
    items: [
      { num: '1', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '2', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '3', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '중피성 및 연조직의 악성 신생물', code: 'C45~C49' },
      { num: '8', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '9', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '10', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '11', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { num: '12', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' }
    ]
  },
  {
    title: '골,피부 등 전신부위암(전이포함)',
    items: [
      { num: '1', disease: '골 및 관절연골의 악성 신생물', code: 'C40~C41' },
      { num: '2', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '3', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '4', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' },
      { num: '5', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { num: '6', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '7', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '8', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '9', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '10', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  },
  {
    title: '유방,비뇨기관, 부신 및 내분비선암(전이포함)',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '요로의 악성 신생물', code: 'C64~C68' },
      { num: '3', disease: '부신 및 기타 내분비선의 악성 신생물', code: 'C74~C75' },
      { num: '4', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '5', disease: '방광과 기타 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '6', disease: '부신의 이차성 악성 신생물', code: 'C79.7' },
      { num: '7', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    title: '남녀생식기암(전이포함)',
    items: [
      { num: '1', disease: '[남성] 음경의 악성 신생물', code: 'C60' },
      { num: '2', disease: '[남성] 전립선의 악성 신생물', code: 'C61' },
      { num: '3', disease: '[남성] 고환의 악성 신생물', code: 'C62' },
      { num: '4', disease: '[남성] 기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '5', disease: '[남성] 생식기관의 이차성 악성 신생물', code: 'C79.81' },
      { num: '6', disease: '[여성] 외음의 악성 신생물', code: 'C51' },
      { num: '7', disease: '[여성] 질의 악성 신생물', code: 'C52' },
      { num: '8', disease: '[여성] 자궁경부의 악성 신생물', code: 'C53' },
      { num: '9', disease: '[여성] 자궁체부의 악성 신생물', code: 'C54' },
      { num: '10', disease: '[여성] 자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '11', disease: '[여성] 난소의 악성 신생물', code: 'C56' },
      { num: '12', disease: '[여성] 기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '13', disease: '[여성] 태반의 악성 신생물', code: 'C58' },
      { num: '14', disease: '[여성] 생식기관의 이차성 악성 신생물', code: 'C79.81' },
      { num: '15', disease: '[여성] 난소의 이차성 악성 신생물', code: 'C79.6' }
    ]
  },
  {
    title: '혈액암',
    items: [
      { num: '1', disease: '림프, 조혈 및 관련 조직의 악성 신생물', code: 'C81~C96' },
      { num: '2', disease: '진성 적혈구증가증', code: 'D45' },
      { num: '3', disease: '골수형성이상증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  },
  {
    title: '뇌 및 중추신경계통암(전이포함)',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '4', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '5', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' }
    ]
  }
];

export const NH_5SPECIFIC_CANCER_ITEMS = [
  { num: '1', disease: '식도의 악성신생물', code: 'C15' },
  { num: '2', disease: '췌장의 악성신생물', code: 'C25' },
  {
    num: '3',
    disease: '골 및 관절연골의 악성신생물',
    code: 'C40-C41',
    subItems: [
      { disease: '사지의 골 및 관절연골의 악성신생물', code: 'C40' },
      { disease: '기타 및 상세불명 부위의 골 및 관절 연골의 악성신생물', code: 'C41' }
    ]
  },
  {
    num: '4',
    disease: '뇌 및 중추신경계통의 기타부위의 악성신생물',
    code: 'C70-C72',
    subItems: [
      { disease: '수막의 악성신생물', code: 'C70' },
      { disease: '뇌의 악성신생물', code: 'C71' },
      { disease: '척수, 뇌신경 및 중추신경계의 기타 부분의 악성신생물', code: 'C72' }
    ]
  },
  {
    num: '5',
    disease: '림프, 조혈 및 관련조직의 악성신생물',
    code: '-',
    subItems: [
      { disease: '호지킨림프종', code: 'C81' },
      { disease: '소포성 림프종', code: 'C82' },
      { disease: '비소포성 림프종', code: 'C83' },
      { disease: '성숙 T/NK-세포 림프종', code: 'C84' },
      { disease: '기타 및 상세불명 유형의 비호지킨림프종', code: 'C85' },
      { disease: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { disease: '악성 면역증식성 질환', code: 'C88' },
      { disease: '다발골수종 및 악성 형질세포 신생물', code: 'C90' },
      { disease: '림프성 백혈병', code: 'C91' },
      { disease: '골수성 백혈병', code: 'C92' },
      { disease: '단핵구성 백혈병', code: 'C93' },
      { disease: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { disease: '상세불명 세포형의 백혈병', code: 'C95' },
      { disease: '림프, 조혈 및 관련 조직의 기타 및 상세 불명의 악성신생물', code: 'C96' },
      { disease: '만성 골수증식질환', code: 'D47.1' },
      { disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  }
];

export const NH_5SPECIFIC_CANCER_SECTIONS = [
  {
    title: '특정5대암 분류표',
    items: NH_5SPECIFIC_CANCER_ITEMS.map(item => ({
      num: item.num,
      disease: item.disease,
      code: item.code,
      subItems: item.subItems?.map(s => ({ disease: s.disease, code: s.code }))
    }))
  }
];

// 농협손해보험 심장관련분류표(4개담보) 분류표 데이터
export const NH_CARDIOVASCULAR_4_SECTIONS_TAB1 = [
  {
    title: '【별표51】 심혈관특정질환 I 분류표',
    definition: '약관에 규정하는 심혈관특정질환 I 으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타급성 허혈성심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈성심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '기타 심장부정맥', code: 'I49' },
      { num: '7', disease: '심부전', code: 'I50' },
    ],
  },
];

export const NH_CARDIOVASCULAR_4_SECTIONS_TAB2 = [
  {
    title: '【별표52】 심혈관특정질환 I (기타심장부정맥제외) 분류표',
    definition: '약관에 규정하는 심혈관특정질환 I (기타심장부정맥제외)로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타급성 허혈성심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈성심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '심부전', code: 'I50' },
    ],
  },
];

export const NH_CARDIOVASCULAR_4_SECTIONS_TAB3 = [
  {
    title: '【별표53】 심근병증 분류표',
    definition: '약관에 규정하는 심근병증으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', code: 'I43' },
    ],
  },
];

export const NH_CARDIOVASCULAR_4_SECTIONS_TAB4 = [
  {
    title: '【별표54】 주요심장염증질환 분류표',
    definition: '약관에 규정하는 주요심장염증질환으로 분류되는 질병은 제9차 개정 한국표준질병·사인분류(통계청 고시 제2025-299호, 2026.1.1. 시행)중 다음에 적은 질병을 말합니다.',
    items: [
      { num: '1', disease: '급성 심장막염', code: 'I30' },
      { num: '2', disease: '심장막의 기타질환', code: 'I31' },
      { num: '3', disease: '달리분류된 질환에서의 심장막염', code: 'I32' },
      { num: '4', disease: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '5', disease: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '6', disease: '급성 심근염', code: 'I40' },
      { num: '7', disease: '달리 분류된 질환에서의 심근염', code: 'I41' },
    ],
  },
];

export const NH_CARDIOVASCULAR_4_ALL_SECTIONS = [
  ...NH_CARDIOVASCULAR_4_SECTIONS_TAB1,
  ...NH_CARDIOVASCULAR_4_SECTIONS_TAB2,
  ...NH_CARDIOVASCULAR_4_SECTIONS_TAB3,
  ...NH_CARDIOVASCULAR_4_SECTIONS_TAB4,
];

// 농협손해보험 특정순환계질환(1~5종)분류표 데이터
export const NH_CIRCULATORY_1_5_SECTIONS = [
  {
    title: '1종 (본태성 고혈압, 이상지질혈증, 당뇨병)',
    grade: '1종',
    items: [
      {
        num: '1',
        disease: '본태성 고혈압',
        code: 'I10, H35.0',
        subItems: [
          { disease: '본태성(원발성) 고혈압', code: 'I10' },
          { disease: '[ 배경망막병증 및 망막혈관변화\n(H35.0 중고 혈압성 망막병증에 한하며, 고혈압성 이외의 배경망막병증 및 망막혈관 변화 제외) ]', code: 'H35.0' },
        ],
      },
      {
        num: '2',
        disease: '이상지질혈증',
        code: 'E78',
        subItems: [
          { disease: '지질단백질대사장애 및 기타 지질증', code: 'E78' },
        ],
      },
      {
        num: '3',
        disease: '당뇨병',
        code: 'E10~E14, G59.0, G63.2, H28.0, H36.0, M14.2, N08.3',
        subItems: [
          { disease: '1형 당뇨병', code: 'E10' },
          { disease: '2형 당뇨병', code: 'E11' },
          { disease: '영양실조-관련 당뇨병', code: 'E12' },
          { disease: '기타 명시된 당뇨병', code: 'E13' },
          { disease: '상세불명의 당뇨병', code: 'E14' },
          { disease: '[당뇨병성 단일신경병증]', code: 'G59.0' },
          { disease: '[당뇨병성 다발신경병증]', code: 'G63.2' },
          { disease: '[당뇨병성 백내장]', code: 'H28.0' },
          { disease: '[당뇨병성 망막병증]', code: 'H36.0' },
          { disease: '[당뇨병성 관절병증]', code: 'M14.2' },
          { disease: '[당뇨병에서의 사구체장애]', code: 'N08.3' },
        ],
      },
    ],
  },
  {
    title: '2종 (특정 고혈압성 질환, 심장판막질환, 전도장애 등)',
    grade: '2종',
    items: [
      {
        num: '1',
        disease: '특정 고혈압성 질환',
        code: 'I11~I13, I15',
        subItems: [
          { disease: '고혈압성 심장병', code: 'I11' },
          { disease: '고혈압성 신장병', code: 'I12' },
          { disease: '고혈압성 심장 및 신장병', code: 'I13' },
          { disease: '이차성 고혈압', code: 'I15' },
        ],
      },
      {
        num: '2',
        disease: '심장판막질환',
        code: 'I34~I37, I39',
        subItems: [
          { disease: '비류마티스성 승모판장애', code: 'I34' },
          { disease: '비류마티스성 대동맥판장애', code: 'I35' },
          { disease: '비류마티스성 삼첨판장애', code: 'I36' },
          { disease: '폐동맥판장애', code: 'I37' },
          { disease: '달리 분류된 질환에서의 심내막염 및 심장판막장애', code: 'I39' },
        ],
      },
      {
        num: '3',
        disease: '특정 방실·좌각차단 및 전도장애',
        code: 'I44.0, I44.4~I44.7, I45',
        subItems: [
          { disease: '방실차단 1도', code: 'I44.0' },
          { disease: '좌전섬유속차단', code: 'I44.4' },
          { disease: '좌후섬유속차단', code: 'I44.5' },
          { disease: '기타 및 상세불명의 섬유속차단', code: 'I44.6' },
          { disease: '상세불명의 좌각차단', code: 'I44.7' },
          { disease: '기타 전도장애', code: 'I45' },
        ],
      },
      {
        num: '4',
        disease: '심장병 합병증 및 심장장애',
        code: 'I51, I52',
        subItems: [
          { disease: '심장병의 불명확한 기록 및 합병증', code: 'I51' },
          { disease: '달리 분류된 질환에서의 기타 심장장애', code: 'I52' },
        ],
      },
      {
        num: '5',
        disease: '죽상경화증',
        code: 'I70',
        subItems: [
          { disease: '죽상경화증', code: 'I70' },
        ],
      },
      {
        num: '6',
        disease: '말초 및 모세혈관 질환',
        code: 'I73, I78, I79',
        subItems: [
          { disease: '기타 말초혈관질환', code: 'I73' },
          { disease: '모세혈관의 질환', code: 'I78' },
          { disease: '달리 분류된 질환에서의 동맥, 세동맥 및 모세혈관의 장애', code: 'I79' },
        ],
      },
      {
        num: '7',
        disease: '특정 정맥혈관 질환',
        code: 'I80, I82, I86',
        subItems: [
          { disease: '정맥염 및 혈전정맥염', code: 'I80' },
          { disease: '기타 정맥의 색전증 및 혈전증', code: 'I82' },
          { disease: '기타 부위의 정맥류', code: 'I86' },
        ],
      },
      {
        num: '8',
        disease: '림프절 질환',
        code: 'I88, I89',
        subItems: [
          { disease: '비특이성 림프절염', code: 'I88' },
          { disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' },
        ],
      },
      {
        num: '9',
        disease: '특정 순환계통의 기타장애',
        code: 'I97, I98.0, I98.1',
        subItems: [
          { disease: '달리 분류되지 않은 순환계통의 처치후 장애', code: 'I97' },
          { disease: '심혈관매독', code: 'I98.0' },
          { disease: '달리 분류된 기타 감염성 및 기생충성 질환에서의 심혈관장애', code: 'I98.1' },
        ],
      },
    ],
  },
  {
    title: '3종 (류마티스열, 심장염증질환, 부정맥 등)',
    grade: '3종',
    items: [
      {
        num: '1',
        disease: '급성 류마티스열',
        code: 'I00~I02',
        subItems: [
          { disease: '심장침범에 대한 언급이 없는 류마티스열', code: 'I00' },
          { disease: '심장 침범이 있는 류마티스열', code: 'I01' },
          { disease: '류마티스무도병', code: 'I02' },
        ],
      },
      {
        num: '2',
        disease: '만성 류마티스심장질환',
        code: 'I05~I09',
        subItems: [
          { disease: '류마티스성 승모판질환', code: 'I05' },
          { disease: '류마티스성 대동맥판질환', code: 'I06' },
          { disease: '류마티스성 삼첨판질환', code: 'I07' },
          { disease: '다발판막질환', code: 'I08' },
          { disease: '기타 류마티스심장질환', code: 'I09' },
        ],
      },
      {
        num: '3',
        disease: '심장염증질환',
        code: 'I30~I33, I38, I40, I41',
        subItems: [
          { disease: '급성 심장막염', code: 'I30' },
          { disease: '심장막의 기타 질환', code: 'I31' },
          { disease: '달리 분류된 질환에서의 심장막염', code: 'I32' },
          { disease: '급성 및 아급성 심내막염', code: 'I33' },
          { disease: '상세불명 판막의 심내막염', code: 'I38' },
          { disease: '급성 심근염', code: 'I40' },
          { disease: '달리 분류된 질환에서의 심근염', code: 'I41' },
        ],
      },
      {
        num: '4',
        disease: '중증 방실차단',
        code: 'I44.1~I44.3',
        subItems: [
          { disease: '방실차단 2도', code: 'I44.1' },
          { disease: '완전방실차단', code: 'I44.2' },
          { disease: '기타 및 상세불명의 심방실차단', code: 'I44.3' },
        ],
      },
      {
        num: '5',
        disease: '부정맥',
        code: 'I47~I49',
        subItems: [
          { disease: '발작성 빈맥', code: 'I47' },
          { disease: '심방세동 및 조동', code: 'I48' },
          { disease: '기타 심장부정맥', code: 'I49' },
        ],
      },
      {
        num: '6',
        disease: '특정 동맥혈관 질환',
        code: 'I72, I74, I77',
        subItems: [
          { disease: '기타 동맥류 및 박리', code: 'I72' },
          { disease: '동맥색전증 및 혈전증', code: 'I74' },
          { disease: '동맥 및 세동맥의 기타 장애', code: 'I77' },
        ],
      },
      {
        num: '7',
        disease: '문맥혈전증',
        code: 'I81',
        subItems: [
          { disease: '문맥혈전증', code: 'I81' },
        ],
      },
    ],
  },
  {
    title: '4종 (협심증, 경증 허혈성심장질환, 폐성심장병, 뇌혈관질환 등)',
    grade: '4종',
    items: [
      {
        num: '1',
        disease: '협심증',
        code: 'I20',
        subItems: [
          { disease: '협심증', code: 'I20' },
        ],
      },
      {
        num: '2',
        disease: '경증 허혈성심장질환',
        code: 'I24, I25',
        subItems: [
          { disease: '기타 급성 허혈성심장질환', code: 'I24' },
          { disease: '만성 허혈성심장병', code: 'I25' },
        ],
      },
      {
        num: '3',
        disease: '폐성심장병 및 폐순환의 질환',
        code: 'I26~I28',
        subItems: [
          { disease: '폐색전증', code: 'I26' },
          { disease: '기타 폐성 심장질환', code: 'I27' },
          { disease: '폐혈관의 기타 질환', code: 'I28' },
        ],
      },
      {
        num: '4',
        disease: '심근병증',
        code: 'I42, I43',
        subItems: [
          { disease: '심근병증', code: 'I42' },
          { disease: '달리 분류된 질환에서의 심근병증', code: 'I43' },
        ],
      },
      {
        num: '5',
        disease: '심부전',
        code: 'I50',
        subItems: [
          { disease: '심부전', code: 'I50' },
        ],
      },
      {
        num: '6',
        disease: '경증 뇌혈관질환',
        code: 'I64~I69',
        subItems: [
          { disease: '출혈 또는 경색증으로 명시되지 않은 뇌졸중', code: 'I64' },
          { disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
          { disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' },
          { disease: '기타 뇌혈관질환', code: 'I67' },
          { disease: '달리 분류된 질환에서의 뇌혈관장애', code: 'I68' },
          { disease: '뇌혈관질환의 후유증', code: 'I69' },
        ],
      },
      {
        num: '7',
        disease: '대동맥동맥류 및 박리',
        code: 'I71',
        subItems: [
          { disease: '대동맥동맥류 및 박리', code: 'I71' },
        ],
      },
      {
        num: '8',
        disease: '식도정맥류',
        code: 'I85, I98.2, I98.3',
        subItems: [
          { disease: '식도정맥류', code: 'I85' },
          { disease: '달리 분류된 질환에서의 출혈을 동반하지 않은 식도정맥류', code: 'I98.2' },
          { disease: '달리 분류된 질환에서의 출혈을 동반한 식도정맥류', code: 'I98.3' },
        ],
      },
    ],
  },
  {
    title: '5종 (급성심근경색증, 심장정지, 뇌출혈, 뇌경색증)',
    grade: '5종',
    items: [
      {
        num: '1',
        disease: '급성심근경색증',
        code: 'I21~I23',
        subItems: [
          { disease: '급성 심근경색증', code: 'I21' },
          { disease: '후속심근경색증', code: 'I22' },
          { disease: '급성 심근경색증 후 특정 현존 합병증', code: 'I23' },
        ],
      },
      {
        num: '2',
        disease: '인공소생에 성공한 심장정지',
        code: 'I46.0',
        subItems: [
          { disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
        ],
      },
      {
        num: '3',
        disease: '뇌출혈',
        code: 'I60~I62',
        subItems: [
          { disease: '거미막하출혈', code: 'I60' },
          { disease: '뇌내출혈', code: 'I61' },
          { disease: '기타 비외상성 두개내출혈', code: 'I62' },
        ],
      },
      {
        num: '4',
        disease: '뇌경색증',
        code: 'I63',
        subItems: [
          { disease: '뇌경색증', code: 'I63' },
        ],
      },
    ],
  },
];

// 농협손해보험 1~5종 수술분류표 [무배당 NH5.10.5굿플러스건강보험2604(1~2종)약관 별표]
export const NH_SURGERY_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy)', code: '3종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외)', code: '1종' }
    ]
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술[발정술(拔釘術) 등 내고정물 제거술은 제외함][치(齒)·치은(잇몸)·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨)·비중격(鼻中隔)·상악골(上顎骨)·하악골(下顎骨)·악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는 것] (다지증에 대한 절단수술은 제외함)', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 (다지증에 대한 절단수술은 제외함)', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再結合手術) [골, 관절의 이단(離斷)에 수반하는것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', code: '1종' }
    ]
  },
  {
    category: '3. 호흡기계·흉부(胸部)의 수술',
    title: '호흡기계·흉부(胸部)의 수술',
    group: '일반수술',
    items: [
      { num: '15', disease: '만성부비강염(慢性副鼻腔炎) 근본수술(根本手術)', code: '1종' },
      { num: '16', disease: '후두(喉頭) 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술[개흉술(開胸術, Thoracotomy)을 수반하는 것]', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술[개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락·발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술[개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심막(心膜) 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
      { num: '26', disease: '심장내(心臟內) 관혈수술 [개흉술을 수반하는 것]', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', code: '5종' },
      { num: '28', disease: '체내용(體內用) 인공심박조율기(人工心搏調律機, Artificial pacemaker) 매입술(埋入術)', code: '3종' },
      { num: '29', disease: '비장(脾臟) 절제수술', code: '3종' }
    ]
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
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함](단, 랑게르한스소도(Islet of Langerhans)세포 이식수술은 제외함)', code: '5종' },
      { num: '39', disease: '탈장(脫腸) 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염(全身性 腹膜炎, Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수(蟲垂)절제술(충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', code: '2종' },
      { num: '42', disease: '직장탈(直腸脫) 근본수술', code: '1종' },
      { num: '43', disease: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', code: '4종' }
    ]
  },
  {
    category: '6. 비뇨기계·생식기계의 수술',
    title: '비뇨기계·생식기계의 수술(인공임신 중절수술은 제외함)',
    group: '일반수술',
    items: [
      { num: '44', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管) 관혈수술[개복술을 수반하는 것, 경요도적 조작 및 방광류 교정수술은 제외]', code: '4종' },
      { num: '45', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '46', disease: '방광류 교정수술', code: '1종' },
      { num: '47', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '48', disease: '음경(陰莖) 절단수술(포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '49', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊) 관혈수술, 전립선(前立腺) 관혈수술', code: '2종' },
      { num: '50', disease: '음낭관혈수술', code: '1종' },
      { num: '51', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '52', disease: '경질적 자궁, 난소, 난관 수술', code: '1종' },
      { num: '53', disease: '질탈(膣脫)근본수술', code: '1종' }
    ]
  },
  {
    category: '7. 내분비계의 수술',
    title: '내분비계의 수술',
    group: '일반수술',
    items: [
      { num: '54', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '55', disease: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', code: '3종' },
      { num: '56', disease: '부신(副腎) 절제수술', code: '4종' }
    ]
  },
  {
    category: '8. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '57', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '58', disease: '신경(神經) 관혈수술', code: '2종' },
      { num: '59', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', code: '4종' },
      { num: '60', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '9. 시각기의 수술',
    title: '시각기의 수술[약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '61', disease: '안검하수증(眼瞼下垂症)수술(안검내반증 포함)', code: '1종' },
      { num: '62', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '63', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '64', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '65', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '66', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '67', disease: '전방(前房), 홍채(虹彩), 유리체(玻璃體) 관혈수술', code: '2종' },
      { num: '68', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '69', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '70', disease: '망막박리(網膜剝離) 수술', code: '2종' },
      { num: '71', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [시력회복 및 시력개선 목적의 수술은 제외]', code: '1종' },
      { num: '72', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술', code: '2종' },
      { num: '73', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '74', disease: '안와내종양절제수술', code: '3종' },
      { num: '75', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '76', disease: '안근(眼筋)관혈수술', code: '1종' }
    ]
  },
  {
    category: '10. 청각기(聽覺器)의 수술',
    title: '청각기(聽覺器)의 수술',
    group: '일반수술',
    items: [
      { num: '77', disease: '관혈적 고막(鼓膜) 성형술[고막 패치술은 제외]', code: '2종' },
      { num: '78', disease: '유양동 절제술(乳樣洞切除術, mastoidectomy)', code: '2종' },
      { num: '79', disease: '중이(中耳) 관혈수술[중이내 튜브유치술 제외]', code: '2종' },
      { num: '80', disease: '중이내(中耳內) 튜브유치술[고막 패치술은 제외]', code: '1종' },
      { num: '81', disease: '내이(內耳) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '11. 상기 이외의 수술',
    title: '상기 이외의 수술[검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '82', disease: '상기 이외의 개두술(開頭術)', code: '3종' },
      { num: '83', disease: '상기 이외의 개흉술(開胸術)', code: '3종' },
      { num: '84', disease: '상기 이외의 개복술(開腹術)', code: '2종' },
      { num: '85', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) (E.S.W.T)은 제외', code: '1종' },
      { num: '86-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장', code: '3종' },
      { num: '86-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외)', code: '2종' },
      { num: '86-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' }
    ]
  },
  {
    category: '2. 악성신생물 치료 목적의 수술',
    title: '2. 악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery)(단, 기타피부암(C44) 제외) [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외함]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '3종' },
      { num: '2', disease: '내시경 수술, 카테터·고주파 전극 등에 의한 악성신생물 수술', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물 수술', code: '3종' }
    ]
  },
  {
    category: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    title: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료', code: '3종' }
    ]
  }
];

export const NH_SURGERY_1_5_GUIDELINES = [
  {
    num: '1',
    title: '수술의 정의',
    content: "'수술'이라 함은 의사, 치과의사의 면허를 가진 자(이하 \"의사\"라 합니다)가 피보험자의 질병 또는 상해로 인한 치료를 직접목적으로 필요하다고 인정한 경우로서 의료법 제3조(의료기관)에 규정한 국내의 병원이나 의원 또는 국외의 의료관련 법에서 정한 의료기관에서 의사의 관리 하에 수술하는 것을 말합니다. 이 때 수술이란 <수술분류표(1~5종)>에서 정한 행위[기구를 사용하여 생체(生體)에 절단(切斷, 특정부위를 잘라 내는 것), 절제(切除, 특정부위를 잘라 없애는 것) 등의 조작을 가하는 것[보건복지부 산하 신의료기술평가위원회(향후 제도변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법도 포함됩니다]을 말합니다. 단, 흡인(吸引, 주사기 등으로 빨아 들이는 것), 천자(穿刺, 바늘 또는 관을 꽂아 체액·조직을 뽑아내거나 약물을 주입하는 것) 등의 조치 및 신경(神經) BLOCK(신경의 차단) 등은 제외]를 하는 것을 말합니다."
  },
  {
    num: '2',
    title: '관혈수술의 정의',
    content: "'관혈(觀血)'수술이라 함은 병변 부위를 육안으로 직접 보면서 수술적 조작을 하기 위해 피부에 절개를 가하고 병변 부위를 노출시켜서 수술하는 것을 말합니다."
  },
  {
    num: '3',
    title: '근본 혹은 근치수술의 정의',
    content: "'근본(根本)' 혹은 '근치(根治)'수술이라 함은 일회의 수술로 해당 질병을 완전히 치유할 수 있는 수술을 말합니다."
  },
  {
    num: '4',
    title: '관혈적 악성신생물 근치수술',
    content: "'관혈적 악성신생물 근치수술'이라 함은 관혈적 방법을 통해 악성생물의 원발 병소를 완전히 절제 또는 적출하고 혹은 곽청술을 함께 실시한 경우입니다."
  },
  {
    num: '5',
    title: '선진의료적 첨단 수술 인정 및 적용 기준',
    content: "<수술분류표(1~5종)> 상에 열거되지 않은 선진의료적 첨단 수술에 대한 인정 및 적용 기준: <수술분류표(1~5종)>에서의 선진의료적 첨단 수술은 상기 '수술'의 정의에 해당하여야 하고 약물투여치료, 방사선 조사치료 또는 기타의 보존적 치료로 분류될 수 없는 경우이어야 합니다. (1) <수술분류표(1~5종)> 상의 수술 이외에 보건복지부 산하 신의료기술평가위원회(향후 제도 변경시에는 동 위원회와 동일한 기능을 수행하는 기관)로부터 안전성과 치료효과를 인정받은 최신 수술기법으로 치료한 경우 <수술분류표(1~5종)> 상의 동일부위 수술로 봅니다. 이 때에 해당 최신수술기법은 수술개시일로부터 60일이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다. (2) 단, 이 선진의료적 첨단 수술이 본질적으로 내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적 수술인 경우에는 <수술분류표(1~5종)> 중 'Ⅰ.일반 질병 및 상해치료 목적의 수술' 86항 (악성신생물의 경우는 'Ⅱ. 악성신생물 치료목적의 수술' 2항)을 우선 적용합니다."
  },
  {
    num: '6',
    title: '악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료',
    content: "'악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료'라 함은 선형가속기(LINAC)에서 발생되는 가는 방사선(Pencil beam)들을 다양한 각도에서 악성신생물을 향해 집중적으로 조사하면서 동시에 악성신생물의 움직임을 병변 추적 장치를 이용하여 실시간으로 추적하면서 치료하는 방법입니다."
  },
  {
    num: '7',
    title: '두개내 신생물 근치 감마나이프 (Gammaknife) 정위적 방사선 치료',
    content: "'두개내 신생물 근치 감마나이프 (Gammaknife) 정위적 방사선 치료'라 함은 정위 좌표계를 이용하여 코발트 60 방사성 동위원소 (Co-60) 에서 나오는 감마선을 두개강 내의 신생물을 향해 집중 조사함으로 두개(頭蓋)를 열지 않고도 수술적 제거와 같은 효과를 내는 치료를 말합니다."
  },
  {
    num: '8',
    title: '보장 제외 수술',
    content: "다음과 같은 수술은 수술보험금 지급대상에서 보장을 제외합니다. (1) 미용 성형상의 수술, (2) 피임(避妊) 목적의 수술, (3) 피임 및 불임술 후 가임목적의 수술, (4) 검사 및 진단을 위한 수술 [생검 (生檢), 복강경 검사(腹腔鏡檢査) 등]"
  }
];

// NH농협손해보험 144대질병 분류표
export const NH_SURGERY_144_SECTIONS = [
  // 【별표7-1】 27대질병 분류표
  {
    title: '[27대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '[ 결핵성 복막염(A18.30+) ]', code: 'K67.3*' },
      { num: '3', disease: '[ 장, 복막 및 장간막림프절의 결핵성장애(A18.3-+) ]', code: 'K93.0*' },
      { num: '4', disease: '[ 결핵관절염(A18.01+) ]', code: 'M01.1*' },
      { num: '5', disease: '[ 척추의 결핵(A18.00+) ]', code: 'M49.0*' },
      { num: '6', disease: '[ 뼈의 결핵(A18.02+) ]', code: 'M90.0*' },
      { num: '7', disease: '[ 결핵성 방광염(A18.11+) ]', code: 'N33.0*' },
      { num: '8', disease: '[ 자궁경부의 결핵염증(A18.17+) ]', code: 'N74.0*' },
      { num: '9', disease: '[ 여성 결핵성 골반염증질환(A18.17+) ]', code: 'N74.1*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[27대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[27대질병] 크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '[27대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '[ 거대세포바이러스간염(K77.0*) ]', code: 'B25.1+' },
      { num: '4', disease: '[ 톡소포자충간염(K77.0*) ]', code: 'B58.1+' }
    ]
  },
  {
    title: '[27대질병] 조로증',
    items: [
      { num: '1', disease: '조로증', code: 'E34.8' }
    ]
  },
  {
    title: '[27대질병] 중추신경계통의 염증성 질환(수막염)',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '[ 리스테리아 수막염 및 수막뇌염(G01*,G05.0*) ]', code: 'A32.1+' },
      { num: '4', disease: '[ 수막알균수막염(G01*) ]', code: 'A39.0+' },
      { num: '5', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '6', disease: '[ 엔테로바이러스수막염 등(G02.0*) ]', code: 'A87.0+' },
      { num: '7', disease: '[ 아데노바이러스수막염(G02.0*) ]', code: 'A87.1+' },
      { num: '8', disease: '[ 헤르페스바이러스수막염(G02.0*) ]', code: 'B00.3+' },
      { num: '9', disease: '[ 수두수막염(G02.0*) ]', code: 'B01.0+' },
      { num: '10', disease: '[ 대상포진수막염(G02.0*) ]', code: 'B02.1+' },
      { num: '11', disease: '[ 수막염이 합병된 홍역(G02.0*) ]', code: 'B05.1+' },
      { num: '12', disease: '[ 신경학적 합병증을 동반한 풍진(G02.0*,G05.1*) ]', code: 'B06.0+' },
      { num: '13', disease: '[ 볼거리수막염(G02.0*) ]', code: 'B26.1+' },
      { num: '14', disease: '[ 칸디다수막염(G02.1*) ]', code: 'B37.5+' },
      { num: '15', disease: '[ 콕시디오이데스진균수막염(G02.1*) ]', code: 'B38.4+' },
      { num: '16', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' }
    ]
  },
  {
    title: '[27대질병] 중추신경계통의 염증성 질환(뇌및척수의 염증성질환)',
    items: [
      { num: '1', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '2', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '3', disease: '[ 리스테리아 수막염 및 수막뇌염(G01*,G05.0*) ]', code: 'A32.1+' },
      { num: '4', disease: '[ 엔테로바이러스뇌염 및 뇌척수염(G05.1*) ]', code: 'A85.0+' },
      { num: '5', disease: '[ 아데노바이러스뇌염 및 뇌척수염(G05.1*) ]', code: 'A85.1+' },
      { num: '6', disease: '[ 헤르페스바이러스뇌염(G05.1*) ]', code: 'B00.4+' },
      { num: '7', disease: '[ 수두뇌염(G05.1*) ]', code: 'B01.1+' },
      { num: '8', disease: '[ 대상포진뇌염(G05.1*) ]', code: 'B02.0+' },
      { num: '9', disease: '[ 뇌염이 합병된 홍역(G05.1*) ]', code: 'B05.0+' },
      { num: '10', disease: '[ 신경학적 합병증을 동반한 풍진(G02.0*,G05.1*) ]', code: 'B06.0+' },
      { num: '11', disease: '[ 볼거리뇌염(G05.1*) ]', code: 'B26.2+' },
      { num: '12', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '13', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종', code: 'G07' },
      { num: '14', disease: '[ 아메바성 뇌농양(G07*) ]', code: 'A06.6+' },
      { num: '15', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '16', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[27대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[27대질병] 중추신경계통의 탈수초질환',
    items: [
      { num: '1', disease: '중추신경계통의 탈수초질환', code: 'G35~G37' }
    ]
  },
  {
    title: '[27대질병] 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '[27대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[27대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[27대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[27대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[27대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '[ 수막알균성 심장병 등((I32.0*,I39.8*,I41.0*,I52.0*) ]', code: 'A39.5+' },
      { num: '7', disease: '[ 칸디다심내막염(I39.8*) ]', code: 'B37.6+' }
    ]
  },
  {
    title: '[27대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[27대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[27대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[27대질병] 기타 동맥류 박리',
    items: [
      { num: '1', disease: '기타 동맥류 박리', code: 'I72' }
    ]
  },
  {
    title: '[27대질병] 버거씨병',
    items: [
      { num: '1', disease: '버거씨병', code: 'I73.1' }
    ]
  },
  {
    title: '[27대질병] 폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '[ 거대세포바이러스폐렴(J17.1*) ]', code: 'B25.0+' },
      { num: '8', disease: '[ 폐톡소포자충증(J17.3*) ]', code: 'B58.3+' },
      { num: '9', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '10', disease: '재향군인병', code: 'A48.1' }
    ]
  },
  {
    title: '[27대질병] 만성 하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[27대질병] 폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '[27대질병] 위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[27대질병] 급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '[27대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { num: '3', disease: '[ 거대세포바이러스췌장염(K87.1*) ]', code: 'B25.2+' },
      { num: '4', disease: '[ 볼거리췌장염(K87.1*) ]', code: 'B26.3+' }
    ]
  },
  {
    title: '[27대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },

  // 【별표7-2】 11대질병 분류표
  {
    title: '[11대질병] 당뇨병',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조-관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타 명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 단일신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '11', disease: '당뇨병에서의 사구체장애', code: 'N08.3' }
    ]
  },
  {
    title: '[11대질병] 뇌하수체질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[11대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[11대질병] 고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 망막병증(H35.0 중 고혈압성 망막병증에 한함)', code: 'H35.0' }
    ]
  },
  {
    title: '[11대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[11대질병] 식도정맥류',
    items: [
      { num: '1', disease: '식도정맥류', code: 'I85' }
    ]
  },
  {
    title: '[11대질병] 외부요인에 의한 폐질환',
    items: [
      { num: '1', disease: '외부요인에 의한 폐질환', code: 'J60~J70' }
    ]
  },
  {
    title: '[11대질병] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },
  {
    title: '[11대질병] 특정호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[11대질병] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[11대질병] 충수의 질환',
    items: [
      { num: '1', disease: '충수의 질환', code: 'K35~K38' }
    ]
  },

  // 【별표7-3】 59대생활질환 분류표
  {
    title: '[59대생활질환] 용혈-요독증후군 (햄버거병)',
    items: [
      { num: '1', disease: '용혈-요독증후군', code: 'D59.3' }
    ]
  },
  {
    title: '[59대생활질환] 비장질환',
    items: [
      { num: '1', disease: '비장의 질환', code: 'D73' }
    ]
  },
  {
    title: '[59대생활질환] 부갑상선질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[59대생활질환] 대사장애',
    items: [
      { num: '1', disease: '쿠싱증후군', code: 'E24' },
      { num: '2', disease: '부신생식기장애', code: 'E25' },
      { num: '3', disease: '고알도스테론증', code: 'E26' },
      { num: '4', disease: '부신의 기타 장애', code: 'E27' }
    ]
  },
  {
    title: '[59대생활질환] 수면무호흡증',
    items: [
      { num: '1', disease: '수면무호흡', code: 'G47.3' }
    ]
  },
  {
    title: '[59대생활질환] 중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[59대생활질환] 마비',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[59대생활질환] 결막장애',
    items: [
      { num: '1', disease: '결막의 장애', code: 'H10~H13' }
    ]
  },
  {
    title: '[59대생활질환] 공막, 각막, 홍채및 섬모체의 장애',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '[ 홍채섬모체염(H22.0*) ]', code: 'B00.50+' },
      { num: '3', disease: '[ 홍채염(H22.0*) ]', code: 'B00.50+' },
      { num: '4', disease: '[ 전방포도막염(H22.0*) ]', code: 'B00.50+' },
      { num: '5', disease: '[ 각막염(H19.1*) ]', code: 'B00.51+' },
      { num: '6', disease: '[ 각막결막염(H19.1*) ]', code: 'B00.51+' },
      { num: '7', disease: '[ 각막상피염(H19.1*) ]', code: 'B00.51+' },
      { num: '8', disease: '[ 간질각막염(H19.1*) ]', code: 'B00.51+' },
      { num: '9', disease: '[ 각막내피염(H19.1*) ]', code: 'B00.51+' },
      { num: '10', disease: '[ 아데노바이러스에 의한 각막결막염(H19.2*) ]', code: 'B30.0+' },
      { num: '11', disease: '[ 유행성 각막결막염(H19.2*) ]', code: 'B30.0+' },
      { num: '12', disease: '[ 조선소눈병(H19.2*) ]', code: 'B30.0+' },
      { num: '13', disease: '눈 및 눈부속기의 기타 처치후 장애(H59.8 중 미만성 층판성 각막염에 한함)', code: 'H59.8' }
    ]
  },
  {
    title: '[59대생활질환] 유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '[59대생활질환] 안구의 장애',
    items: [
      { num: '1', disease: '안구의 장애', code: 'H44' }
    ]
  },
  {
    title: '[59대생활질환] 시신경 및 시각경로의 장애',
    items: [
      { num: '1', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[59대생활질환] 안근, 양안운동, 조절 및 굴절의 장애',
    items: [
      { num: '1', disease: '안근, 양안운동, 조절 및 굴절의 장애', code: 'H49~H52' }
    ]
  },
  {
    title: '[59대생활질환] 시각장애 및 실명',
    items: [
      { num: '1', disease: '시각장애 및 실명', code: 'H53~H54' }
    ]
  },
  {
    title: '[59대생활질환] 눈 및 눈부속기의 기타 장애',
    items: [
      { num: '1', disease: '눈 및 눈부속기의 기타 장애 [ 눈 및 눈부속기의 기타 처치후 장애 제외 ]', code: 'H55~H59 (H59.8제외)' }
    ]
  },
  {
    title: '[59대생활질환] 외이의 질환',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' }
    ]
  },
  {
    title: '[59대생활질환] 중이염',
    items: [
      { num: '1', disease: '비화농성 중이염', code: 'H65' },
      { num: '2', disease: '화농성 및 상세불명의 중이염', code: 'H66' },
      { num: '3', disease: '달리 분류된 질환에서의 중이염 [ 홍역에서의 중이염(H67.1*) ]', code: 'H67, B05.3+' }
    ]
  },
  {
    title: '[59대생활질환] 중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '귀인두관염 및 귀인두관 폐색', code: 'H68' },
      { num: '2', disease: '귀인두관의 기타 장애', code: 'H69' },
      { num: '3', disease: '유돌염 및 관련 병태', code: 'H70' },
      { num: '4', disease: '중이의 진주종', code: 'H71' },
      { num: '5', disease: '고막의 천공', code: 'H72' },
      { num: '6', disease: '고막의 기타 장애', code: 'H73' },
      { num: '7', disease: '중이 및 유돌의 기타 장애', code: 'H74' },
      { num: '8', disease: '달리 분류된 질환에서의 중이 및 유돌의 기타 장애', code: 'H75' }
    ]
  },
  {
    title: '[59대생활질환] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[59대생활질환] 귀의 기타장애',
    items: [
      { num: '1', disease: '귀의 기타 장애', code: 'H90~H95' }
    ]
  },
  {
    title: '[59대생활질환] 정맥염 및 혈전정맥염',
    items: [
      { num: '1', disease: '정맥염 및 혈전정맥염', code: 'I80' }
    ]
  },
  {
    title: '[59대생활질환] 기타정맥의 색전증 및 혈전증',
    items: [
      { num: '1', disease: '기타정맥의 색전증 및 혈전증', code: 'I82' }
    ]
  },
  {
    title: '[59대생활질환] 음낭 정맥류',
    items: [
      { num: '1', disease: '음낭 정맥류', code: 'I86.1' }
    ]
  },
  {
    title: '[59대생활질환] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[59대생활질환] 인플루엔자',
    items: [
      { num: '1', disease: '확인된 동물매개 또는 범유행 인플루엔자바이러스에 의한 인플루엔자', code: 'J09' },
      { num: '2', disease: '확인된 계절성 인플루엔자바이러스에 의한 인플루엔자', code: 'J10' },
      { num: '3', disease: '바이러스가 확인되지 않은 인플루엔자', code: 'J11' }
    ]
  },
  {
    title: '[59대생활질환] 기타 급성 하기도감염',
    items: [
      { num: '1', disease: '기타 급성 하기도감염', code: 'J20~J22' }
    ]
  },
  {
    title: '[59대생활질환] 인후두부의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[59대생활질환] 성대결절',
    items: [
      { num: '1', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' }
    ]
  },
  {
    title: '[59대생활질환] 성인호흡곤란증후군',
    items: [
      { num: '1', disease: '성인호흡곤란증후군', code: 'J80' }
    ]
  },
  {
    title: '[59대생활질환] 호흡계통의 기타 질환',
    items: [
      { num: '1', disease: '호흡계통의 기타 질환 [ 류마티스폐질환(M05.1+) 제외 ]', code: 'J95~J99 (J99.0제외)' }
    ]
  },
  {
    title: '[59대생활질환] 침샘질환',
    items: [
      { num: '1', disease: '침샘의 질환', code: 'K11' }
    ]
  },
  {
    title: '[59대생활질환] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[59대생활질환] 위,십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[59대생활질환] 특정소화기질환',
    items: [
      { num: '1', disease: '위 및 십이지장의 기타 질환', code: 'K31' }
    ]
  },
  {
    title: '[59대생활질환] 특정 부위의 탈장',
    items: [
      { num: '1', disease: '대퇴탈장', code: 'K41' },
      { num: '2', disease: '배꼽탈장', code: 'K42' },
      { num: '3', disease: '복벽탈장', code: 'K43' },
      { num: '4', disease: '횡격막탈장', code: 'K44' },
      { num: '5', disease: '기타 복부탈장', code: 'K45' },
      { num: '6', disease: '상세불명의 복부탈장', code: 'K46' }
    ]
  },
  {
    title: '[59대생활질환] 비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[59대생활질환] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[59대생활질환] 과민대장증후군',
    items: [
      { num: '1', disease: '과민대장증후군', code: 'K58' }
    ]
  },
  {
    title: '[59대생활질환] 장의 특정기타질환',
    items: [
      { num: '1', disease: '장의 농양', code: 'K63.0' },
      { num: '2', disease: '장의 천공(비외상성)', code: 'K63.1' },
      { num: '3', disease: '장의 누공', code: 'K63.2' },
      { num: '4', disease: '장의 궤양', code: 'K63.3' }
    ]
  },
  {
    title: '[59대생활질환] 복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환 [ 결핵성 복막염(A18.30+) 제외 ]', code: 'K65~K67 (K67.3제외)' },
      { num: '2', disease: '[ 클라미디아복막염(K67.0*) ]', code: 'A74.8+' }
    ]
  },
  {
    title: '[59대생활질환] 장흡수장애',
    items: [
      { num: '1', disease: '장흡수장애', code: 'K90' }
    ]
  },
  {
    title: '[59대생활질환] 통풍',
    items: [
      { num: '1', disease: '통풍', code: 'M10' }
    ]
  },
  {
    title: '[59대생활질환] 특정전신결합조직장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' }
    ]
  },
  {
    title: '[59대생활질환] 전신홍반루푸스',
    items: [
      { num: '1', disease: '전신홍반루푸스', code: 'M32' }
    ]
  },
  {
    title: '[59대생활질환] 피부다발근염',
    items: [
      { num: '1', disease: '피부다발근염', code: 'M33' }
    ]
  },
  {
    title: '[59대생활질환] 전신경화증',
    items: [
      { num: '1', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '[59대생활질환] 근육장애',
    items: [
      { num: '1', disease: '근육 장애', code: 'M60~M63' }
    ]
  },
  {
    title: '[59대생활질환] 발바닥근막성섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증', code: 'M72.2' }
    ]
  },
  {
    title: '[59대생활질환] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[59대생활질환] 골수염',
    items: [
      { num: '1', disease: '골수염', code: 'M86' }
    ]
  },
  {
    title: '[59대생활질환] 골괴사증',
    items: [
      { num: '1', disease: '골괴사', code: 'M87' }
    ]
  },
  {
    title: '[59대생활질환] 뼈의 파젯병',
    items: [
      { num: '1', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' }
    ]
  },
  {
    title: '[59대생활질환] 뼈의 기타장애',
    items: [
      { num: '1', disease: '뼈의 기타 장애', code: 'M89' }
    ]
  },
  {
    title: '[59대생활질환] 연골병증',
    items: [
      { num: '1', disease: '연골병증', code: 'M91~M94' }
    ]
  },
  {
    title: '[59대생활질환] 사구체질환',
    items: [
      { num: '1', disease: '사구체질환 [ 당뇨병에서의 사구체장애 제외 ]', code: 'N00~N08 (N08.3제외)' }
    ]
  },
  {
    title: '[59대생활질환] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '신세뇨관-간질질환', code: 'N10~N16' }
    ]
  },
  {
    title: '[59대생활질환] 신장 및 요관의 기타장애',
    items: [
      { num: '1', disease: '신장 및 요관의 기타 장애', code: 'N25~N29' }
    ]
  },
  {
    title: '[59대생활질환] 비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애 [ 결핵성 방광염(A18.11+) 제외 ]', code: 'N33 (N33.0제외)' },
      { num: '5', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '6', disease: '[ 칸디다요도염(N37.0*) ]', code: 'B37.40+' },
      { num: '7', disease: '비뇨계통의 기타 질환 [ 스트레스요실금 제외 ], [ 기타 명시된 요실금 제외 ]', code: 'N39 (N39.3제외), (N39.4제외)' }
    ]
  },
  {
    title: '[59대생활질환] 특정요도질환',
    items: [
      { num: '1', disease: '요도염 및 요도증후군', code: 'N34' },
      { num: '2', disease: '요도협착', code: 'N35' },
      { num: '3', disease: '요도의 기타 장애', code: 'N36' }
    ]
  },

  // 【별표7-4】 43대생활질환 분류표
  {
    title: '[43대생활질환] 대상포진',
    items: [
      { num: '1', disease: '대상포진 [ 대상포진뇌염(G05.1*) 제외 ], [ 대상포진수막염(G02.0*) 제외 ]', code: 'B02 (B02.0제외), (B02.1제외)' }
    ]
  },
  {
    title: '[43대생활질환] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '[ 갑상선이행성 안구돌출(E05.0+) ]', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[43대생활질환] 다낭성난소증후군',
    items: [
      { num: '1', disease: '다낭성난소증후군', code: 'E28.2' }
    ]
  },
  {
    title: '[43대생활질환] 안면 신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애(안면 신경장애)', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[43대생활질환] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증(단일신경병증) [ 손목터널증후군 제외 ]', code: 'G56 (G56.0제외)' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의단일신경병증 [ 당뇨병성 단일신경병증 제외 ]', code: 'G59 (G59.0제외)' }
    ]
  },
  {
    title: '[43대생활질환] 손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '[43대생활질환] 맥립종 및 콩다래끼',
    items: [
      { num: '1', disease: '맥립종 및 콩다래끼', code: 'H00' }
    ]
  },
  {
    title: '[43대생활질환] 눈꺼풀의 기타 염증',
    items: [
      { num: '1', disease: '눈꺼풀의 기타 염증', code: 'H01' }
    ]
  },
  {
    title: '[43대생활질환] 눈꺼풀의 기타 장애',
    items: [
      { num: '1', disease: '눈꺼풀의 기타 장애', code: 'H02' }
    ]
  },
  {
    title: '[43대생활질환] 안와장애',
    items: [
      { num: '1', disease: '안와의 장애', code: 'H05' }
    ]
  },
  {
    title: '[43대생활질환] 맥락막 및 망막의 장애',
    items: [
      { num: '1', disease: '맥락막 및 망막의 장애 [ 고혈압성 망막병증(H35.0 중 고혈압성 망막병증에 한함) 제외 ], [ 황반 및 후극부의 변성 제외 ], [ 당뇨병성 망막병증 제외 ]', code: 'H30~H36 (H35.0제외), (H35.3제외), (H36.0제외)' }
    ]
  },
  {
    title: '[43대생활질환] 하지정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류', code: 'I83' }
    ]
  },
  {
    title: '[43대생활질환] 급성상기도감염',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[43대생활질환] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코용종', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '[43대생활질환] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[43대생활질환] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[43대생활질환] 사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[43대생활질환] 치열 및 치루',
    items: [
      { num: '1', disease: '항문 및 직장부의 열창 및 누공', code: 'K60' },
      { num: '2', disease: '항문 및 직장부의 농양', code: 'K61' },
      { num: '3', disease: '항문 및 직장의 기타 질환', code: 'K62' }
    ]
  },
  {
    title: '[43대생활질환] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[43대생활질환] 담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[43대생활질환] 특정 누적외상성질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경추수완증후군', code: 'M53.1' },
      { num: '3', disease: '기타 연조직장애 [ 발바닥근막성 섬유종증 제외 ], [ 어깨병변 제외 ]', code: 'M70~M79 (M74,M78제외), (M72.2제외), (M75제외)' }
    ]
  },
  {
    title: '[43대생활질환] 척추변형',
    items: [
      { num: '1', disease: '변형성 등병증', code: 'M40~M43' }
    ]
  },
  {
    title: '[43대생활질환] 척추병증',
    items: [
      { num: '1', disease: '척추병증 [ 척추의 결핵(A18.00+) 제외 ]', code: 'M45~M49 (M49.0*제외)' }
    ]
  },
  {
    title: '[43대생활질환] 추간판장애 (디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[43대생활질환] 기타 등병증',
    items: [
      { num: '1', disease: '[ 추간판 장애에서의 신경근 및 신경총 압박 ]', code: 'G55.1*' },
      { num: '2', disease: '달리 분류되지 않은 기타 등병증 [ 경추수완증후군 제외 ]', code: 'M53 (M53.1제외)' },
      { num: '3', disease: '등통증', code: 'M54' }
    ]
  },
  {
    title: '[43대생활질환] 윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막 및 힘줄장애', code: 'M65~M68' }
    ]
  },
  {
    title: '[43대생활질환] 어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },
  {
    title: '[43대생활질환] 신장 및 요관의 결석',
    items: [
      { num: '1', disease: '신장 및 요관의 결석', code: 'N20' }
    ]
  },
  {
    title: '[43대생활질환] 방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[43대생활질환] 요도결석증',
    items: [
      { num: '1', disease: '요도결석', code: 'N21.1' },
      { num: '2', disease: '기타 하부요로결석', code: 'N21.8' },
      { num: '3', disease: '상세불명의 하부요로결석', code: 'N21.9' },
      { num: '4', disease: '달리 분류된 질환에서의 요로의 결석', code: 'N22' }
    ]
  },
  {
    title: '[43대생활질환] 유방의 장애',
    items: [
      { num: '1', disease: '유방의 장애', code: 'N60~N64' }
    ]
  },
  {
    title: '[43대생활질환] 주침샘의 양성신생물',
    items: [
      { num: '1', disease: '주침샘의 양성신생물', code: 'D11' }
    ]
  },
  {
    title: '[43대생활질환] 소화계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    title: '[43대생활질환] 중이, 호흡계통 및 흉곽의 양성 신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 부위불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[43대생활질환] 골 및 관절연골의 양성 신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[43대생활질환] 조직의 양성 신생물',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[43대생활질환] 유방의 양성 신생물',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[43대생활질환] 여성생식기의 양성 신생물',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    title: '[43대생활질환] 남성생식기의 양성 신생물',
    items: [
      { num: '1', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[43대생활질환] 비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성 신생물', code: 'D30' }
    ]
  },
  {
    title: '[43대생활질환] 눈 및 부속기의 양성신생물',
    items: [
      { num: '1', disease: '눈 및 부속기의 양성 신생물', code: 'D31' }
    ]
  },
  {
    title: '[43대생활질환] 수막의 양성 신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[43대생활질환] 뇌 및 중추신경계통의 양성 신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[43대생활질환] 갑상선 및 내분비선의 양성 신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },

  // 【별표7-5】 다빈도4대질병 분류표
  {
    title: '[다빈도4대질병] 관절염',
    items: [
      { num: '1', disease: '감염성 관절병증 [ 결핵관절염(A18.01+) 제외 ]', code: 'M00~M03 (M01.1*제외)' },
      { num: '2', disease: '염증성 다발관절병증 [ 통풍 제외 ], [ 당뇨병성 관절병증 제외 ], [ 류마티스폐질환(M05.1+) ]', code: 'M05~M14 (M10제외), (M14.2*제외), J99.0*' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[다빈도4대질병] 백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '[다빈도4대질병] 생식기질환',
    items: [
      { num: '1', disease: '남성생식기관의 질환 [ 남성 불임 제외 ]', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '[ 편모충성 전립선염(N51.0*) ]', code: 'A59.01+' },
      { num: '3', disease: '[ 볼거리고환염(N51.1*) ]', code: 'B26.0+' },
      { num: '4', disease: '여성골반내기관의 염증성 질환 [ 자궁경부의 결핵염증(A18.17+) 제외 ], [ 결핵성 여성골반염증질환(A18.17+) 제외 ]', code: 'N70~N77 (N74.0*제외), (N74.1*제외)' },
      { num: '5', disease: '여성생식관의 비염증성 장애 [ 습관적 유산자 제외 ], [ 여성 불임 제외 ], [ 인공 수정과 관련된 합병증 제외 ]', code: 'N80~N95' },
      { num: '6', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '[다빈도4대질병] 치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 [ 포함 - 치질 ], [ 제외 - 출산 및 산후기 합병(O87.2), 임신합병(O22.4) ]', code: 'K64' }
    ]
  }
];

// NH농협손해보험 144대질병 상단 요약 분류표 데이터
export const NH_SURGERY_144_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  NH_SURGERY_144_SECTIONS.forEach((sec) => {
    const match = sec.title.match(/^\[(.*?)\]\s*(.*)$/);
    const rawGroup = match ? match[1] : sec.title;
    const rawDisease = match ? match[2] : sec.title;
    const title = rawGroup.endsWith('수술') ? rawGroup : `${rawGroup} 수술`;
    let disease = rawDisease
      .replace(/간\s*질\s*환/g, '간질환')
      .replace(/신\s*부\s*전/g, '신부전')
      .replace(/폐\s*렴/g, '폐렴')
      .replace(/\s+/g, ' ')
      .trim();
    if (!groupMap[title]) groupMap[title] = [];
    if (!groupMap[title].includes(disease)) {
      groupMap[title].push(disease);
    }
  });
  return Object.entries(groupMap).map(([title, diseases]) => ({
    title,
    items: diseases.map((d) => ({ disease: d }))
  }));
})();

// 【별표11】 16대질병 분류표
export const NH_SURGERY_16_SECTIONS = [
  {
    title: '[16대질병] 당뇨병',
    group: '16대질병',
    items: [
      { num: '1', disease: '당뇨병', code: 'E10~E14' }
    ]
  },
  {
    title: '[16대질병] 심장질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타형태의 심장병', code: 'I30~I52' }
    ]
  },
  {
    title: '[16대질병] 고혈압',
    group: '16대질병',
    items: [
      { num: '1', disease: '고혈압 질환', code: 'I10~I15' }
    ]
  },
  {
    title: '[16대질병] 뇌혈관질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[16대질병] 간질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' }
    ]
  },
  {
    title: '[16대질병] 위·십이지장궤양',
    group: '16대질병',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '[16대질병] 갑상선질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[16대질병] 동맥경화증',
    group: '16대질병',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[16대질병] 만성하기도질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[16대질병] 폐렴',
    group: '16대질병',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '[16대질병] 관절염',
    group: '16대질병',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00~M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05~M14' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[16대질병] 백내장',
    group: '16대질병',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '[16대질병] 녹내장',
    group: '16대질병',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[16대질병] 결핵',
    group: '16대질병',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[16대질병] 신부전',
    group: '16대질병',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[16대질병] 생식기질환',
    group: '16대질병',
    items: [
      { num: '1', disease: '남성생식기관의 질환', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '여성 골반내 기관의 염증성 질환', code: 'N70~N77' },
      { num: '3', disease: '여성 생식기관의 비염증성 장애 (습관유산자 제외) (여성 불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// NH농협손해보험 16대질병 상단 요약 분류표 데이터
export const NH_SURGERY_16_SUMMARY_SECTIONS = [
  {
    category: '16대질병 수술',
    diseases: [
      '당뇨병',
      '심장질환',
      '고혈압',
      '뇌혈관질환',
      '간질환',
      '위·십이지장궤양',
      '갑상선질환',
      '동맥경화증',
      '만성하기도질환',
      '폐렴',
      '관절염',
      '백내장',
      '녹내장',
      '결핵',
      '신부전',
      '생식기질환'
    ]
  }
];

// 【별표34】 71대질병 분류표
export const NH_SURGERY_71_SECTIONS = [
  // 【별표34-1】 22대특정질병
  {
    title: '[22대특정질병] 당뇨병',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조-관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타 명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 단일신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '11', disease: '당뇨병에서의 사구체장애', code: 'N08.3' }
    ]
  },
  {
    title: '[22대특정질병] 심장질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병 [ 칸디다심내막염(I39.8*) ] [ 수막알균성 심장병 등 ((I32.0*, I39.8*, I41.0*, I52.0*) ]', code: 'I30~I52, B37.6+, A39.5+' }
    ]
  },
  {
    title: '[22대특정질병] 고혈압질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증 (H35.0 중 고혈압성 망막병증에 한함)', code: 'H35.0' }
    ]
  },
  {
    title: '[22대특정질병] 뇌혈관질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[22대특정질병] 간질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환 [ 거대세포바이러스간염(K77.0*) ] [ 톡소포자충간염(K77.0*) ]', code: 'K70~K77, B25.1+, B58.1+' }
    ]
  },
  {
    title: '[22대특정질병] 위·십이지장궤양',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[22대특정질병] 갑상선질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '갑상선의 장애 [ 갑상선이상의 안구돌출(E05.0+) ]', code: 'E00~E07, H06.2*' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[22대특정질병] 동맥경화증',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[22대특정질병] 만성하부호흡기질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[22대특정질병] 폐렴',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리분류되지않은세균성폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴 [ 거대세포바이러스폐렴(J17.1*) ] [ 폐렴이 합병된 홍역(J17.1*) ] [ 수두폐렴(J17.1*) ] [ 폐톡소포자충증(J17.3*) ]', code: 'J17, B25.0+, B05.2+, B01.2+, B58.3+' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '[22대특정질병] 녹내장',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[22대특정질병] 결핵',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '세균학적 및 조직학적으로 확인된 호흡기결핵', code: 'A15' },
      { num: '2', disease: '세균학적으로나 조직학적으로 확인되지 않은 호흡기결핵', code: 'A16' },
      { num: '3', disease: '신경계통의 결핵', code: 'A17' },
      { num: '4', disease: '기타 기관의 결핵 [ 결핵관절염(A18.01+) ] [ 척추의 결핵(A18.00+) ] [ 뼈의 결핵(A18.02+) ] [ 결핵성 방광염(A18.11+) ] [ 자궁경부의 결핵(A18.17+) ] [ 여성 결핵성 골반염증질환(A18.17+) ] [ 결핵성 복막염(A18.30+) ] [ 장, 복막 및 장간막림프절의 결핵성장애(A18.3~*) ]', code: 'A18, M01.1*, M49.0*, M90.0*, N33.0*, N74.0*, N74.1*, K67.3*, K93.0*' },
      { num: '5', disease: '좁쌀 결핵', code: 'A19' },
      { num: '6', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[22대특정질병] 신부전',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[22대특정질병] 패혈증',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[22대특정질병] 중추신경계통의 염증성 질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염 [ 수막알균수막염(G01*) ]', code: 'G01, A39.0+' },
      { num: '3', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염 [ 아데노바이러스수막염(G02.0*) ] [ 엔테로바이러스수막염(G02.0*) ] [ 헤르페스바이러스수막염(G02.0*) ] [ 수막염이 합병된 홍역(G02.0*) ] [ 볼거리수막염(G02.0*) ] [ 수두수막염(G02.0*) ] [ 대상포진수막염(G02.0*) ] [ 칸디다수막염(G02.1*) ] [ 콕시디오이데스진균수막염(G02.1*) ]', code: 'G02, A87.1+, A87.0+, B00.3+, B05.1+, B26.1+, B01.0+, B02.1+, B37.5+, B38.4+' },
      { num: '4', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { num: '5', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '6', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염 [ 아데노바이러스뇌염(G05.1*) ] [ 엔테로바이러스뇌염(G05.1*) ] [ 헤르페스바이러스뇌염(G05.1*) ] [ 뇌염이 합병된 홍역(G05.1*) ] [ 볼거리뇌염(G05.1*) ] [ 수두뇌염(G05.1*) ] [ 대상포진뇌염(G05.1*) ]', code: 'G05, A85.1+, A85.0+, B00.4+, B05.0+, B26.2+, B01.1+, B02.0+' },
      { num: '7', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '8', disease: '달리 분류된 질환에서의 두 개내 및 척추내 농양 및 육아종 [ 아메바성 뇌농양(G07*) ]', code: 'G07, A06.6+' },
      { num: '9', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '10', disease: '중추신경계통의 염증성 질환의 후유증 [ 신경학적 합병증을 동반한 풍진(G05.1*, G02.0*, G05.1*) ] [ 리스테리아 수막염 및 수막뇌염(G01*, G05.0*) ]', code: 'G09, B06.0+, A32.1+' }
    ]
  },
  {
    title: '[22대특정질병] 파킨슨병',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[22대특정질병] 다발경화증',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[22대특정질병] 자율신경계통의 장애',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[22대특정질병] 대동맥류',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[22대특정질병] 폐질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '[22대특정질병] 급성 췌장염',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '[22대특정질병] 췌장질환',
    group: '22대특정질병',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애 [ 거대세포바이러스췌장염(K87.1*) ] [ 볼거리췌장염(K87.1*) ]', code: 'K87, B25.2+, B26.3+' }
    ]
  },

  // 【별표34-2】 다발성13대질병
  {
    title: '[다발성13대질병] 관절염',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '감염성 관절병증 (결핵관절염 제외)', code: 'M00~M03 (M01.1* 제외)' },
      { num: '2', disease: '염증성 다발관절병증 (당뇨병성 관절병증 제외) [ 류마티스폐질환(M05.1+) ]', code: 'M05~M14 (M14.2* 제외), J99.0*' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[다발성13대질병] 백내장',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '[다발성13대질병] 생식기질환',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '남성생식기관의 질환 (남성 불임 제외) [ 편모충성 전립선염(N51.0*) ] [ 볼거리고환염(N51.1*) ]', code: 'N40~N45, N47~N51, A59.08+, B26.0+' },
      { num: '2', disease: '여성골반내기관의 염증성 질환 (자궁경부의 결핵 제외, 결핵성 여성골반염증질환 제외)', code: 'N70~N77 (N74.0* 제외, N74.1* 제외)' },
      { num: '3', disease: '여성생식기관의 비염증성 장애 (습관적 유산자 제외) (여성 불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '[다발성13대질병] 소화계통의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    title: '[다발성13대질병] 중이, 호흡계통 및 흉곽의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '중이, 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 부위불명 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[다발성13대질병] 골 및 관절연골의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[다발성13대질병] 조직의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[다발성13대질병] 수막의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[다발성13대질병] 뇌 및 중추신경계통의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[다발성13대질병] 갑상선 및 내분비선의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[다발성13대질병] 유방의 양성 신생물',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[다발성13대질병] 생식기 양성종양',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '5', disease: '남성생식기관의양성신생물', code: 'D29' }
    ]
  },
  {
    title: '[다발성13대질병] 비뇨기관의 양성종양',
    group: '다발성13대질병',
    items: [
      { num: '1', disease: '비뇨기관의양성신생물', code: 'D30' }
    ]
  },

  // 【별표34-3】 35대생활질환
  {
    title: '[35대생활질환] 담석증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[35대생활질환] 사타구니 탈장',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '사타구니탈장/사타구니 탈장', code: 'K40' }
    ]
  },
  {
    title: '[35대생활질환] 편도염',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[35대생활질환] 축농증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[35대생활질환] 급성상기도감염',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[35대생활질환] 담낭담도질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[35대생활질환] 골다공증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[35대생활질환] 황반변성',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[35대생활질환] 후각특정질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염/후각특정질환', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '[35대생활질환] 인후두부위의 특정질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '편도주위 농양/인후두부위의 특정질환', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[35대생활질환] 근육장애',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '근염', code: 'M60' },
      { num: '2', disease: '근육의 석회화 및 골화', code: 'M61' },
      { num: '3', disease: '근육의 기타 장애', code: 'M62' },
      { num: '4', disease: '달리 분류된 질환에서의 근육장애', code: 'M63' }
    ]
  },
  {
    title: '[35대생활질환] 발바닥근막성섬유종증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '발바닥근막성섬유종증 발바닥근막성성유종증', code: 'M72.2' }
    ]
  },
  {
    title: '[35대생활질환] 중이 및 유돌의 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '중이 및 유돌6의 질환/중이 및 유돌의 질환 [ 중이염이 합병된 홍역(H67.1*) ] [ 홍역후 중이염(H67.1*) ]', code: 'H65~H75, B05.3+' }
    ]
  },
  {
    title: '[35대생활질환] 내이의 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '내이의 질환/내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[35대생활질환] 눈 및 눈부속기관의 특정질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애/눈 및 눈부속기관의 특정질환 [ 홍채섬모체염(H22.0*) ] [ 홍채염(H22.0*) ] [ 전방포도막염(H22.0*) ] [ 각막염(H19.1*) ] [ 각막결막염(H19.1*) ] [ 각막상피염(H19.1*) ] [ 간질각막염(H19.1*) ] [ 각막궤양(H19.1*) ] [ 아데노바이러스에 의한 각막결막염(H19.2*) ] [ 유행성 각막결막염(H19.2*) ] [ 조선소눈병(H19.2*) ] [ 미만성 표층성 각막염(H59.8 중 미만성 표층성 각막염에 한함) ]', code: 'H15~H22, B00.50+, B00.51+, B30.0+, H59.8' },
      { num: '2', disease: '맥락막 및 망막의 장애 (황반 및 후극부의 변성 제외, 고혈압성 망막병증 제외, 당뇨병성 망막병증 제외)', code: 'H30~H36 (H35.3 제외, H35.0 제외, H36.0 제외)' },
      { num: '3', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[35대생활질환] 사구체질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '급성 신염증후군/사구체질환', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의사구체장애 (당뇨병에서의 사구체장애 제외) [ 사구체질환 동반(N08.5*) ]', code: 'N08 (N08.3 제외), M32.1+' }
    ]
  },
  {
    title: '[35대생활질환] 신세뇨관-간질질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질신장염/신세뇨관-간질질환', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐쇄성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리 분류된 질환에서의신세뇨관-간질장애 [ 세뇨관-간질신장병증 동반(N16.4*) ]', code: 'N16, M32.1+' }
    ]
  },
  {
    title: '[35대생활질환] 방광의 결석',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '방광의 결석/방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[35대생활질환] 신장 및 요관의 기타장애',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '신세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[35대생활질환] 비뇨계통의 기타 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '방광의 기타 질환', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애 [ 칸디다 방광염 및 요도염(N37.0*) ]', code: 'N33, B37.40+' },
      { num: '5', disease: '비뇨계통의 기타 장애 (결핵성 방광염 제외, 스트레스요실금 제외, 기타 명시된 요실금 제외)', code: 'N39 (N33.0 제외, N39.3 제외, N39.4 제외)' }
    ]
  },
  {
    title: '[35대생활질환] 유방의 장애',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '양성 유방형성이상/유방의 장애', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[35대생활질환] 특정 부위의 탈장',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '대퇴탈장/특정 부위의 탈장', code: 'K41' },
      { num: '2', disease: '배꼽탈장', code: 'K42' },
      { num: '3', disease: '복벽탈장', code: 'K43' },
      { num: '4', disease: '횡격막탈장', code: 'K44' },
      { num: '5', disease: '기타 복부탈장', code: 'K45' },
      { num: '6', disease: '상세불명의 복부탈장', code: 'K46' }
    ]
  },
  {
    title: '[35대생활질환] 비감염성 장염 및 결장염',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[35대생활질환] 특정 장질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '장의 혈관장애/특정 장질환', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[35대생활질환] 복막의 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '복막의 질환/복막의 질환 (결핵성 복막염 제외) [ 기타 클라미디아질환(K67.0+) ]', code: 'K65~K67 (K67.3 제외), A74.8+' }
    ]
  },
  {
    title: '[35대생활질환] 척추변형',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '척추후만증 및 척추전만증', code: 'M40' },
      { num: '2', disease: '척추측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[35대생활질환] 척추병증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[35대생활질환] 추간판장애(디스크질환)',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '경추간판장애/추간판장애 (디스크질환)', code: 'M50' },
      { num: '2', disease: '기타 추간판장애 [ 추간판 장애에서의 신경근 및 신경총 압박(M51.1+) ]', code: 'M51, G55.1*' }
    ]
  },
  {
    title: '[35대생활질환] 안면 신경장애',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '삼차신경의 장애/안면 신경장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[35대생활질환] 단일신경병증',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '팔의 단일신경병증/단일신경병증 [ 복합부위통증증후군 II형 ]', code: 'G56, G90.6' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의단일신경병증 (당뇨병성 단일신경병증 제외)', code: 'G59 (G59.0 제외)' }
    ]
  },
  {
    title: '[35대생활질환] 특정 누적외상성 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범특정 누적외상성질환 [ 달리 분류된 기타 질환에서의 각막염 및 각막결막염 ]', code: 'M35, H19.3*' },
      { num: '2', disease: '경추상완증후군', code: 'M53.1' },
      { num: '3', disease: '기타 연조직장애 (발바닥근막성 섬유종증 제외, 어깨병변 제외)', code: 'M70~M79 (M72.2 제외, M75 제외)' }
    ]
  },
  {
    title: '[35대생활질환] 윤활막 및 힘줄장애',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '윤활막염 및 힘줄윤활막염', code: 'M65' },
      { num: '2', disease: '윤활막 및 힘줄의 자연파열', code: 'M66' },
      { num: '3', disease: '윤활막 및 힘줄의 기타 장애', code: 'M67' },
      { num: '4', disease: '달리 분류된 질환에서의 윤활막 및 힘줄의 장애', code: 'M68' }
    ]
  },
  {
    title: '[35대생활질환] 식도질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[35대생활질환] 위,십이지장 질환',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염/위,십이지장 질환', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[35대생활질환] 어깨병변',
    group: '35대생활질환',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },

  // 【별표34-4】 치핵
  {
    title: '[치핵] 치핵',
    group: '치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 (포함 - 치질, 제외 - 출산 및 산후기 합병(O87.2), 임신 합병(O22.4))', code: 'K64' }
    ]
  }
];

// NH농협손해보험 71대질병 상단 요약 분류표 데이터
export const NH_SURGERY_71_SUMMARY_SECTIONS = [
  {
    category: '22대특정질병 (22종)',
    diseases: [
      '당뇨병',
      '심장질환',
      '고혈압질환',
      '뇌혈관질환',
      '간질환',
      '위·십이지장궤양',
      '갑상선질환',
      '동맥경화증',
      '만성하부호흡기질환',
      '폐렴',
      '녹내장',
      '결핵',
      '신부전',
      '패혈증',
      '중추신경계통의 염증성 질환',
      '파킨슨병',
      '다발경화증',
      '자율신경계통의 장애',
      '대동맥류',
      '폐질환',
      '급성 췌장염',
      '췌장질환'
    ]
  },
  {
    category: '다발성13대질병 (13종)',
    diseases: [
      '관절염',
      '백내장',
      '생식기질환',
      '소화계통의 양성 신생물',
      '중이, 호흡계통 및 흉곽의 양성 신생물',
      '골 및 관절연골의 양성 신생물',
      '조직의 양성 신생물',
      '수막의 양성 신생물',
      '뇌 및 중추신경계통의 양성 신생물',
      '갑상선 및 내분비선의 양성 신생물',
      '유방의 양성 신생물',
      '생식기 양성종양',
      '비뇨기관의 양성종양'
    ]
  },
  {
    category: '35대생활질환 (35종)',
    diseases: [
      '담석증',
      '사타구니 탈장',
      '편도염',
      '축농증',
      '급성상기도감염',
      '담낭담도질환',
      '골다공증',
      '황반변성',
      '후각특정질환',
      '인후두부위의 특정질환',
      '근육장애',
      '발바닥근막성섬유종증',
      '중이 및 유돌의 질환',
      '내이의 질환',
      '눈 및 눈부속기관의 특정질환',
      '사구체질환',
      '신세뇨관-간질질환',
      '방광의 결석',
      '신장 및 요관의 기타장애',
      '비뇨계통의 기타 질환',
      '유방의 장애',
      '특정 부위의 탈장',
      '비감염성 장염 및 결장염',
      '특정 장질환',
      '복막의 질환',
      '척추변형',
      '척추병증',
      '추간판장애(디스크질환)',
      '안면 신경장애',
      '단일신경병증',
      '특정 누적외상성 질환',
      '윤활막 및 힘줄장애',
      '식도질환',
      '위,십이지장 질환',
      '어깨병변'
    ]
  },
  {
    category: '치핵 (1종)',
    diseases: [
      '치핵 및 항문주위정맥혈전증'
    ]
  }
];

export const NH_SURGERY_34_SECTIONS = [
  {
    title: '[34대질병] 당뇨병',
    group: '34대질병',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조-관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 단일신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '11', disease: '당뇨병에서의 사구체장애', code: 'N08.3' }
    ]
  },
  {
    title: '[34대질병] 심장질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '칸디다심내막염', code: 'B37.6' },
      { num: '7', disease: '수막구균성 심장막염', code: 'A39.5' },
      { num: '8', disease: '수막구균성 심내막염', code: 'A39.5' },
      { num: '9', disease: '수막구균성 심근염', code: 'A39.5' },
      { num: '10', disease: '수막구균성 심장염 NOS', code: 'A39.5' }
    ]
  },
  {
    title: '[34대질병] 고혈압질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    title: '[34대질병] 뇌혈관질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[34대질병] 간질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '거대세포바이러스간염', code: 'B25.1' },
      { num: '4', disease: '톡소포자충간염', code: 'B58.1' }
    ]
  },
  {
    title: '[34대질병] 위·십이지장궤양',
    group: '34대질병',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[34대질병] 갑상선질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '갑상선이행성 안구돌출', code: 'H06.2' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[34대질병] 동맥경화증',
    group: '34대질병',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[34대질병] 만성하부호흡기질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[34대질병] 폐렴',
    group: '34대질병',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '거대세포바이러스폐렴', code: 'B25.0' },
      { num: '10', disease: '폐렴이 합병된 홍역', code: 'B05.2' },
      { num: '11', disease: '수두폐렴', code: 'B01.2' },
      { num: '12', disease: '폐톡소포자충증', code: 'B58.3' }
    ]
  },
  {
    title: '[34대질병] 결핵',
    group: '34대질병',
    items: [
      { num: '1', disease: '세균학적 및 조직학적으로 확인된 호흡기결핵', code: 'A15' },
      { num: '2', disease: '세균학적으로나 조직학적으로 확인되지 않은 호흡기결핵', code: 'A16' },
      { num: '3', disease: '신경계통의 결핵', code: 'A17' },
      { num: '4', disease: '기타 기관의 결핵', code: 'A18' },
      { num: '5', disease: '좁쌀결핵', code: 'A19' },
      { num: '6', disease: '결핵 관절염', code: 'M01.1' },
      { num: '7', disease: '척추의 결핵', code: 'M49.0' },
      { num: '8', disease: '뼈의 결핵', code: 'M90.0' },
      { num: '9', disease: '결핵성 방광염', code: 'N33.0' },
      { num: '10', disease: '자궁경부의 결핵염증', code: 'N74.0' },
      { num: '11', disease: '여성 결핵성 골반염증질환', code: 'N74.1' },
      { num: '12', disease: '결핵성 복막염', code: 'K67.3' },
      { num: '13', disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0' },
      { num: '14', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[34대질병] 신부전',
    group: '34대질병',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[34대질병] 급성상기도감염',
    group: '34대질병',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[34대질병] 담낭담도질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[34대질병] 중이의 진주종',
    group: '34대질병',
    items: [
      { num: '1', disease: '중이의 진주종', code: 'H71' }
    ]
  },
  {
    title: '[34대질병] 귀경화증',
    group: '34대질병',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '[34대질병] 소화계통의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    title: '[34대질병] 중이, 호흡계통 및 흉곽의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '중이, 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 부위불명 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[34대질병] 골 및 관절연골의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[34대질병] 조직의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[34대질병] 수막의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[34대질병] 뇌 및 중추신경계통의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[34대질병] 갑상선 및 내분비선의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[34대질병] 유방의 양성 신생물',
    group: '34대질병',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[34대질병] 골다공증',
    group: '34대질병',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[34대질병] 관절염',
    group: '34대질병',
    items: [
      { num: '1', disease: '감염성 관절병증 (M01.1 제외)', code: 'M00~M03' },
      { num: '2', disease: '염증성 다발관절병증 (M14.2 제외)', code: 'M05~M14' },
      { num: '3', disease: '류마티스폐질환', code: 'J99.0' },
      { num: '4', disease: '관절증', code: 'M15~M19' },
      { num: '5', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[34대질병] 생식기질환',
    group: '34대질병',
    items: [
      { num: '1', disease: '남성생식기관의 질환 (남성 불임 제외)', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '편모충성 전립선염', code: 'A59.01' },
      { num: '3', disease: '볼거리고환염', code: 'B26.0' },
      { num: '4', disease: '여성골반내기관의 염증성 질환 (N74.0, N74.1제외)', code: 'N70~N77' },
      { num: '5', disease: '여성생식기관의 비염증성 장애 (습관적 유산자 제외) (여성 불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '6', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '[34대질병] 백내장',
    group: '34대질병',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '[34대질병] 녹내장',
    group: '34대질병',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[34대질병] 황반변성',
    group: '34대질병',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[34대질병] 담석증',
    group: '34대질병',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[34대질병] 사타구니 탈장',
    group: '34대질병',
    items: [
      { num: '1', disease: '사타구니 탈장', code: 'K40' }
    ]
  },
  {
    title: '[34대질병] 편도염',
    group: '34대질병',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[34대질병] 축농증',
    group: '34대질병',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  }
];

// NH농협손해보험 34대질병 상단 요약 분류표 데이터
export const NH_SURGERY_34_SUMMARY_SECTIONS = [
  {
    category: '34대질병 수술',
    diseases: [
      '당뇨병',
      '심장질환',
      '고혈압질환',
      '뇌혈관질환',
      '간질환',
      '위·십이지장궤양',
      '갑상선질환',
      '동맥경화증',
      '만성하부호흡기질환',
      '폐렴',
      '결핵',
      '신부전',
      '급성상기도감염',
      '담낭담도질환',
      '중이의 진주종',
      '귀경화증',
      '소화계통의 양성 신생물',
      '중이, 호흡계통 및 흉곽의 양성 신생물',
      '골 및 관절연골의 양성 신생물',
      '조직의 양성 신생물',
      '수막의 양성 신생물',
      '뇌 및 중추신경계통의 양성 신생물',
      '갑상선 및 내분비선의 양성 신생물',
      '유방의 양성 신생물',
      '골다공증',
      '관절염',
      '생식기질환',
      '백내장',
      '녹내장',
      '황반변성',
      '담석증',
      '사타구니 탈장',
      '편도염',
      '축농증'
    ]
  }
];


