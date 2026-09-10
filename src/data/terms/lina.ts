// Lina Insurance terms data
// 【별표88】 통합전이암 분류표
// 원본 약관 SOURCE-LOCK: public/downloads/lina-integrated-cancer-metastasis.pdf

export const LINA_INTEGRATED_CANCER_METASTASIS_SUMMARY = [
  { group: '그룹 1', title: '전이암(위, 식도)', diseases: '위의 이차성 악성 신생물' },
  { group: '그룹 2', title: '전이암(소장, 대장, 항문 및 기타)', diseases: '소장, 대장 및 직장, 비장, 기타 및 상세불명의 소화기관의 이차성 악성 신생물' },
  { group: '그룹 3', title: '전이암(간, 담낭, 담도 및 췌장)', diseases: '간 및 간내 담관, 췌장의 이차성 악성 신생물' },
  { group: '그룹 4', title: '전이암(흉곽내기관, 중피성 및 연조직)', diseases: '폐, 종격, 흉막, 기타 및 상세불명의 호흡기관, 후복막 및 복막의 이차성 악성 신생물' },
  { group: '그룹 5', title: '전이암(골, 피부 등 전신부위)', diseases: '림프절, 피부, 골 및 골수, 기타 명시/상세불명 부위의 이차성 악성 신생물, 부위의 명시가 없는 악성 신생물' },
  { group: '그룹 6', title: '전이암(유방, 비뇨기관, 부신 및 내분비선)', diseases: '신장 및 신우, 방광과 기타 및 상세불명의 비뇨기관, 유방, 부신의 이차성 악성 신생물' },
  { group: '그룹 7', title: '전이암(남성생식기, 여성생식기)', diseases: '생식기관(남성생식기), 난소(여성생식기), 생식기관(여성생식기)의 이차성 악성 신생물' },
  { group: '그룹 8', title: '전이암(뇌 및 중추신경계통)', diseases: '뇌 및 뇌막, 신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물' }
];

export const LINA_INTEGRATED_CANCER_METASTASIS_SECTIONS = [
  {
    group: '그룹 1',
    title: '전이암(위, 식도)',
    items: [
      { num: '1', disease: '위의 이차성 악성 신생물', code: 'C78.80' }
    ]
  },
  {
    group: '그룹 2',
    title: '전이암(소장, 대장, 항문 및 기타)',
    items: [
      { num: '1', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '2', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '3', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '4', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '5', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 3',
    title: '전이암(간, 담낭, 담도 및 췌장)',
    items: [
      { num: '1', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '2', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    group: '그룹 4',
    title: '전이암(흉곽내기관, 중피성 및 연조직)',
    items: [
      { num: '1', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '2', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '3', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '4', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { num: '5', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' }
    ]
  },
  {
    group: '그룹 5',
    title: '전이암(골, 피부 등 전신부위)',
    items: [
      { num: '1', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { num: '2', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '3', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '4', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '5', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '6', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  },
  {
    group: '그룹 6',
    title: '전이암(유방, 비뇨기관, 부신 및 내분비선)',
    items: [
      { num: '1', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '2', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '3', disease: '유방의 이차성 악성 신생물', code: 'C79.80' },
      { num: '4', disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    group: '그룹 7',
    title: '전이암(남성생식기, 여성생식기)',
    items: [
      { num: '1', disease: '생식기관의 이차성 악성 신생물 (남성생식기)', code: 'C79.81' },
      { num: '2', disease: '난소의 이차성 악성 신생물 (여성생식기)', code: 'C79.6' },
      { num: '3', disease: '생식기관의 이차성 악성 신생물 (여성생식기)', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 8',
    title: '전이암(뇌 및 중추신경계통)',
    items: [
      { num: '1', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '2', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' }
    ]
  }
];

// 【별표17】 고액치료비암 분류표
// 원본 약관 SOURCE-LOCK: public/downloads/lina-high-cost-cancer.pdf

export const LINA_HIGH_COST_CANCER_UNROLLED = [
  { num: '1', name: '식도의 악성신생물', code: 'C15', isSub: false },
  { num: '2', name: '췌장의 악성신생물', code: 'C25', isSub: false },
  { num: '3', name: '골 및 관절연골의 악성신생물', code: 'C40~C41', isSub: false, isGroupHeader: true },
  { num: '', name: '사지의 골 및 관절연골의 악성 신생물', code: 'C40', isSub: true },
  { num: '', name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41', isSub: true },
  { num: '4', name: '뇌 및 중추신경계통의 기타부분의 악성신생물', code: 'C70~C72', isSub: false, isGroupHeader: true },
  { num: '', name: '수막의 악성신생물', code: 'C70', isSub: true },
  { num: '', name: '뇌의 악성신생물', code: 'C71', isSub: true },
  { num: '', name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72', isSub: true },
  { num: '5', name: '림프, 조혈 및 관련조직의 악성신생물', code: 'C81~C96, D47.1, D47.5', isSub: false, isGroupHeader: true },
  { num: '', name: '호지킨림프종', code: 'C81', isSub: true },
  { num: '', name: '소포성 림프종', code: 'C82', isSub: true },
  { num: '', name: '비소포성 림프종', code: 'C83', isSub: true },
  { num: '', name: '성숙 T/NK-세포림프종', code: 'C84', isSub: true },
  { num: '', name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85', isSub: true },
  { num: '', name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86', isSub: true },
  { num: '', name: '악성 면역증식질환', code: 'C88', isSub: true },
  { num: '', name: '다발성 골수종 및 악성 형질세포 신생물', code: 'C90', isSub: true },
  { num: '', name: '림프성 백혈병', code: 'C91', isSub: true },
  { num: '', name: '골수성 백혈병', code: 'C92', isSub: true },
  { num: '', name: '단핵구성 백혈병', code: 'C93', isSub: true },
  { num: '', name: '명시된 세포형의 기타 백혈병', code: 'C94', isSub: true },
  { num: '', name: '상세불명 세포형의 백혈병', code: 'C95', isSub: true },
  { num: '', name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96', isSub: true },
  { num: '', name: '만성 골수증식질환', code: 'D47.1', isSub: true },
  { num: '', name: '만성 호산구성 백혈병 [과호산구증후군]', code: 'D47.5', isSub: true }
];

export const LINA_HIGH_COST_CANCER_SECTIONS = [
  {
    title: '【별표17】 고액치료비암 분류표',
    items: LINA_HIGH_COST_CANCER_UNROLLED.map(item => ({
      num: item.num,
      disease: item.isSub ? `- ${item.name}` : item.name,
      code: item.code
    }))
  }
];

// 【별표79】 통합암 분류표
// 원본 약관 SOURCE-LOCK: public/downloads/lina-integrated-cancer.pdf

export const LINA_INTEGRATED_CANCER_SUMMARY = [
  { group: '그룹 1', title: '암(두경부)', diseases: '입술, 혀, 잇몸, 편도, 구강, 비강, 부비동, 안구 등의 악성 신생물' },
  { group: '그룹 2', title: '암(위, 식도)', diseases: '식도, 위의 악성 신생물' },
  { group: '그룹 3', title: '암(소장, 대장, 항문 및 기타)', diseases: '소장, 결장, 직장, 항문 및 기타 소화기관의 악성 신생물' },
  { group: '그룹 4', title: '암(간, 담낭, 담도 및 췌장)', diseases: '간 및 간내 담관, 담낭, 담도, 췌장의 악성 신생물' },
  { group: '그룹 5', title: '암(흉곽내기관, 중피성 및 연조직)', diseases: '후두, 기관, 폐, 흉선, 심장, 종격, 흉막, 중피종, 연조직의 악성 신생물' },
  { group: '그룹 6', title: '암(골, 피부 등 전신부위)', diseases: '골 및 관절연골, 피부 악성 흑색종, 기타 및 부위불명, 이차성 및 상세불명 부위, 독립된 원발성 여러 부위의 악성 신생물' },
  { group: '그룹 7', title: '암(유방, 비뇨기관, 부신 및 내분비선)', diseases: '유방, 신장, 신우, 요관, 방광, 비뇨기관, 부신, 내분비선의 악성 신생물' },
  { group: '그룹 8', title: '암(남성생식기, 여성생식기)', diseases: '음경, 전립선, 고환(남성) 및 외음, 질, 자궁, 난소, 태반(여성)의 악성 신생물' },
  { group: '그룹 9', title: '암(뇌 및 중추신경계통)', diseases: '수막, 뇌, 척수 및 중추신경계통의 악성 신생물' },
  { group: '그룹 10', title: '암(혈액)', diseases: '림프종, 백혈병, 다발골수종, 골수형성이상증후군 등 혈액 관련 악성 신생물' }
];

export const LINA_INTEGRATED_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '암(두경부)',
    items: [
      { num: '1', disease: '입술의 악성 신생물', code: 'C00' },
      { num: '2', disease: '혀뿌리의 악성 신생물', code: 'C01' },
      { num: '3', disease: '혀의 기타 및 상세불명 부분의 악성 신생물', code: 'C02' },
      { num: '4', disease: '잇몸의 악성 신생물', code: 'C03' },
      { num: '5', disease: '입바닥의 악성 신생물', code: 'C04' },
      { num: '6', disease: '구개의 악성 신생물', code: 'C05' },
      { num: '7', disease: '입의 기타 및 상세불명 부분의 악성 신생물', code: 'C06' },
      { num: '8', disease: '귀밑샘의 악성 신생물', code: 'C07' },
      { num: '9', disease: '기타 및 상세불명의 주침샘의 악성 신생물', code: 'C08' },
      { num: '10', disease: '편도의 악성 신생물', code: 'C09' },
      { num: '11', disease: '입인두의 악성 신생물', code: 'C10' },
      { num: '12', disease: '비인두의 악성 신생물', code: 'C11' },
      { num: '13', disease: '이상동(梨狀洞)의 악성 신생물', code: 'C12' },
      { num: '14', disease: '하인두의 악성 신생물', code: 'C13' },
      { num: '15', disease: '입술, 구강 및 인두내의 기타 및 부위불명의 악성 신생물', code: 'C14' },
      { num: '16', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '17', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '18', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    group: '그룹 2',
    title: '암(위, 식도)',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' }
    ]
  },
  {
    group: '그룹 3',
    title: '암(소장, 대장, 항문 및 기타)',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' }
    ]
  },
  {
    group: '그룹 4',
    title: '암(간, 담낭, 담도 및 췌장)',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' }
    ]
  },
  {
    group: '그룹 5',
    title: '암(흉곽내기관, 중피성 및 연조직)',
    items: [
      { num: '1', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '2', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '3', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '중피종', code: 'C45' },
      { num: '8', disease: '카포시육종', code: 'C46' },
      { num: '9', disease: '말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { num: '10', disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { num: '11', disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' }
    ]
  },
  {
    group: '그룹 6',
    title: '암(골, 피부 등 전신부위)',
    items: [
      { num: '1', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '2', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '3', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '이차성 및 상세불명 부위의 악성신생물', code: 'C77~C80' },
      { num: '6', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    group: '그룹 7',
    title: '암(유방, 비뇨기관, 부신 및 내분비선)',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '3', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '4', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '5', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '6', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '8', disease: '기타 내분비선 및 관련 구조물의 악성 신생물', code: 'C75' }
    ]
  },
  {
    group: '그룹 8',
    title: '암(남성생식기, 여성생식기)',
    items: [
      { num: '1', disease: '음경의 악성 신생물 (남성생식기)', code: 'C60' },
      { num: '2', disease: '전립선의 악성 신생물 (남성생식기)', code: 'C61' },
      { num: '3', disease: '고환의 악성 신생물 (남성생식기)', code: 'C62' },
      { num: '4', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물 (남성생식기)', code: 'C63' },
      { num: '5', disease: '외음의 악성 신생물 (여성생식기)', code: 'C51' },
      { num: '6', disease: '질의 악성 신생물 (여성생식기)', code: 'C52' },
      { num: '7', disease: '자궁경부의 악성 신생물 (여성생식기)', code: 'C53' },
      { num: '8', disease: '자궁체부의 악성 신생물 (여성생식기)', code: 'C54' },
      { num: '9', disease: '자궁의 상세불명 부분의 악성 신생물 (여성생식기)', code: 'C55' },
      { num: '10', disease: '난소의 악성 신생물 (여성생식기)', code: 'C56' },
      { num: '11', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물 (여성생식기)', code: 'C57' },
      { num: '12', disease: '태반의 악성 신생물 (여성생식기)', code: 'C58' }
    ]
  },
  {
    group: '그룹 9',
    title: '암(뇌 및 중추신경계통)',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' }
    ]
  },
  {
    group: '그룹 10',
    title: '암(혈액)',
    items: [
      { num: '1', disease: '호지킨림프종', code: 'C81' },
      { num: '2', disease: '소포성 림프종', code: 'C82' },
      { num: '3', disease: '비소포성 림프종', code: 'C83' },
      { num: '4', disease: '성숙T/NK-세포림프종', code: 'C84' },
      { num: '5', disease: '기타 및 상세불명 유형의 비호지킨림프종', code: 'C85' },
      { num: '6', disease: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { num: '7', disease: '악성 면역증식성 질환', code: 'C88' },
      { num: '8', disease: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { num: '9', disease: '림프성 백혈병', code: 'C91' },
      { num: '10', disease: '골수성 백혈병', code: 'C92' },
      { num: '11', disease: '단핵구성 백혈병', code: 'C93' },
      { num: '12', disease: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { num: '13', disease: '상세불명 세포형의 백혈병', code: 'C95' },
      { num: '14', disease: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' },
      { num: '15', disease: '진성 적혈구증가증', code: 'D45' },
      { num: '16', disease: '골수형성이상증후군', code: 'D46' },
      { num: '17', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '18', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '19', disease: '골수섬유증', code: 'D47.4' },
      { num: '20', disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  }
];

// 【별표75】 1~5종수술분류표
// 원본 약관 SOURCE-LOCK: public/downloads/lina-surgery-1to5.pdf

export const LINA_SURGERY_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy)', code: '3종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외) [단, 치료목적의 Mammotomy는 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' }
    ]
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술, 수면중 무호흡 수술, 도수정복술은 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩胛骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는것, 다지증 제외]', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 [다지증에 대한 절단수술은 제외함]', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', code: '1종' }
    ]
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
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '4. 순환기계, 비장(脾腸)의 수술',
    title: '순환기계, 비장(脾腸)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락·발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심막(心膜) 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
      { num: '26', disease: '심장내(心藏內) 관혈수술 [개흉술을 수반하는 것]', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', code: '5종' },
      { num: '28', disease: '체내용(體內用) 인공심박조율기(人工心搏調律機, Artificial pacemaker) 매입술(埋入術)', code: '3종' },
      { num: '29', disease: '비장(脾腸) 절제수술', code: '3종' }
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
      { num: '32', disease: '식도(食道) 이단술(離斷術) [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]', code: '4종' },
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
      { num: '44', disease: '치루(痔瘻), 탈항(脫肛), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외함]', code: '1종' }
    ]
  },
  {
    category: '6. 비뇨기계 · 생식기계의 수술',
    title: '비뇨기계 · 생식기계의 수술 (인공임신중절수술은 제외함)',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管) 관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류·요실금 교정수술', code: '1종' },
      { num: '48', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '49', disease: '음경(陰莖) 절단수술(포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '50', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊) 관혈수술, 전립선(前立腺) 관혈수술', code: '2종' },
      { num: '51', disease: '음낭관혈수술', code: '1종' },
      { num: '52', disease: '자궁, 난소, 난관 관혈수술(단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '53', disease: '경질적 자궁, 난소, 난관 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '54', disease: '제왕절개만출술(帝王切開娩出術)', code: '1종' },
      { num: '55', disease: '질탈(膣脫) 근본수술', code: '1종' }
    ]
  },
  {
    category: '7. 내분비기계의 수술',
    title: '내분비기계의 수술',
    group: '일반수술',
    items: [
      { num: '56', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '57', disease: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', code: '3종' },
      { num: '58', disease: '부신(副腎) 절제수술', code: '4종' }
    ]
  },
  {
    category: '8. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '59', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '60', disease: '신경(神經) 관혈수술', code: '2종' },
      { num: '61', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', code: '4종' },
      { num: '62', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '9. 시각기의 수술',
    title: '시각기의 수술 [약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '63', disease: '안검하수증(眼檢下垂症)수술(안검내반증 제외)', code: '1종' },
      { num: '64', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '65', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '66', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '67', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '68', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '69', disease: '전방(前房), 홍채(虹彩), 유리체(琉璃體) 관혈수술', code: '2종' },
      { num: '70', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '71', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '72', disease: '망막박리(網膜剝離) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '73', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '74', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '75', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '76', disease: '안와내양절제수술', code: '3종' },
      { num: '77', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '78', disease: '안근(眼筋) 관혈수술', code: '1종' }
    ]
  },
  {
    category: '10. 청각기(聽覺器)의 수술',
    title: '청각기(聽覺器)의 수술',
    group: '일반수술',
    items: [
      { num: '79', disease: '관혈적 고막(鼓膜) 성형술 [고막 패치술은 제외]', code: '2종' },
      { num: '80', disease: '유양동 절제술(乳樣洞切除術, mastoidectomy)', code: '2종' },
      { num: '81', disease: '중이(中耳) 관혈수술 [중이내 튜브유치술 제외]', code: '2종' },
      { num: '82', disease: '중이내(中耳內) 튜브유치술 [고막 패치술은 제외, 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '83', disease: '내이(內耳) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '11. 상기 이외의 수술',
    title: '상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '84', disease: '상기 이외의 개두술(開頭術)', code: '3종' },
      { num: '85', disease: '상기 이외의 개흉술(開胸術)', code: '3종' },
      { num: '86', disease: '상기 이외의 개복술(開腹術)', code: '2종' },
      { num: '87', disease: '체외충격파쇄석술(體外衝擊破碎石術, E.S.W.L) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] *체외충격파치료술(E.S.W.T)은 제외', code: '2종' },
      { num: '88-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '88-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '88-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' }
    ]
  },
  {
    category: '2. 악성신생물 치료 목적의 수술',
    title: '2. 악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery) 단, 기타피부암(C44) 제외 [내시경 수술, 카테터 · 고주파 전극 등의 경피적 수술 등은 제외함]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '3종' },
      { num: '2', disease: '내시경 수술, 카테터 · 고주파 전극 등에 의한 악성신생물 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  },
  {
    category: '3. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    title: '3. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  }
];



