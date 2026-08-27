// Hana Insurance terms data
// 【별표26】 통합암(유사암제외) 분류표
// 2-28. 통합암진단비(유사암제외)(건강Grade)(갱신형) 특별약관

export const HANA_INTEGRATED_CANCER_SUMMARY = [
  { group: '그룹 1', title: '두경부암', diseases: '두경부암' },
  { group: '그룹 2', title: '소화기관암', diseases: '소화기관암' },
  { group: '그룹 3', title: '간암, 담낭암, 기타담도암 및 췌장암', diseases: '간암, 담낭암, 기타담도암 및 췌장암' },
  { group: '그룹 4', title: '폐암', diseases: '폐암' },
  { group: '그룹 5', title: '3대특정고액암', diseases: '3대특정고액암' },
  { group: '그룹 6', title: '생식기관련암', diseases: '생식기관련암' },
  { group: '그룹 7', title: '유방암 및 비뇨기관암', diseases: '유방암 및 비뇨기관암' },
  { group: '그룹 8', title: '11대특정암Ⅱ', diseases: '11대특정암Ⅱ' },
  { group: '그룹 9', title: '혈액암', diseases: '혈액암' }
];

export const HANA_INTEGRATED_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '두경부암',
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
      { num: '13', disease: '이상동(梨狀洞)의 악성 신생물', code: 'C12' },
      { num: '14', disease: '하인두의 악성 신생물', code: 'C13' },
      { num: '15', disease: '입술, 구강 및 인두내의 기타 및 부위불명의 악성 신생물', code: 'C14' },
      { num: '16', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '17', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '18', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '19', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    group: '그룹 2',
    title: '소화기관암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '4', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '5', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '6', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '7', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '8', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '9', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '10', disease: '대장 및 직장의 이차성 악성 신생물(암)', code: 'C78.5' },
      { num: '11', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '12', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '13', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '14', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 3',
    title: '간암, 담낭암, 기타담도암 및 췌장암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '5', disease: '간 및 간내 담관의 이차성 악성 신생물(암)', code: 'C78.7' },
      { num: '6', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    group: '그룹 4',
    title: '폐암',
    items: [
      { num: '1', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '2', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '3', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '4', disease: '폐의 이차성 악성신생물(암)', code: 'C78.0' },
      { num: '5', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물(암)', code: 'C78.3' }
    ]
  },
  {
    group: '그룹 5',
    title: '3대특정고액암',
    items: [
      { num: '1', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '2', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '3', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '4', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '5', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '6', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '7', disease: '종격의 이차성 악성신생물(암)', code: 'C78.1' },
      { num: '8', disease: '흉막의 이차성 악성신생물(암)', code: 'C78.2' },
      { num: '9', disease: '뇌 및 뇌막의 이차성 악성 신생물(암)', code: 'C79.3' },
      { num: '10', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물(암)', code: 'C79.4' },
      { num: '11', disease: '골 및 골수의 이차성 악성 신생물(암)', code: 'C79.5' }
    ]
  },
  {
    group: '그룹 6',
    title: '생식기관련암',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '4', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '5', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '6', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '7', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '8', disease: '태반의 악성 신생물', code: 'C58' },
      { num: '9', disease: '음경의 악성 신생물', code: 'C60' },
      { num: '10', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '11', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '12', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '13', disease: '난소의 이차성 악성 신생물(암)', code: 'C79.6' },
      { num: '14', disease: '생식기관의 이차성 악성 신생물(암)', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 7',
    title: '유방암 및 비뇨기관암',
    items: [
      { num: '1', disease: '유방의 악성신생물', code: 'C50' },
      { num: '2', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '3', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '4', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '5', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '6', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '신장 및 신우의 이차성 악성 신생물(암)', code: 'C79.0' },
      { num: '8', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물(암)', code: 'C79.1' },
      { num: '9', disease: '유방의 이차성 악성 신생물(암)', code: 'C79.80' }
    ]
  },
  {
    group: '그룹 8',
    title: '11대특정암Ⅱ',
    items: [
      { num: '1', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '2', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '3', disease: '중피종', code: 'C45' },
      { num: '4', disease: '카포시육종', code: 'C46' },
      { num: '5', disease: '말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { num: '6', disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { num: '7', disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { num: '8', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '9', disease: '기타 내분비선 및 관련 구조물의 악성 신생물', code: 'C75' },
      { num: '10', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '11', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { num: '12', disease: '후복막 및 복막의 이차성 악성 신생물(암)', code: 'C78.6' },
      { num: '13', disease: '피부의 이차성 악성 신생물(암)', code: 'C79.2' },
      { num: '14', disease: '부신의 이차성 악성 신생물(암)', code: 'C79.7' },
      { num: '15', disease: '기타 명시된 부위의 이차성 악성 신생물(암)', code: 'C79.88' },
      { num: '16', disease: '상세불명 부위의 이차성 악성 신생물(암)', code: 'C79.9' },
      { num: '17', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '18', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    group: '그룹 9',
    title: '혈액암',
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
      { num: '18', disease: '본태성 혈소판혈증', code: 'D47.3' },
      { num: '19', disease: '골수섬유증', code: 'D47.4' },
      { num: '20', disease: '만성 호산구성 백혈병', code: 'D47.5' }
    ]
  }
];

// 【별표16】 고액치료비암 분류표
export const HANA_HIGH_COST_CANCER_UNROLLED = [
  { num: '1', name: '식도의 악성신생물', code: 'C15', isSub: false },
  { num: '2', name: '췌장의 악성신생물', code: 'C25', isSub: false },
  { num: '3', name: '골 및 관절연골의 악성신생물', code: 'C40~C41', isSub: false, isGroupHeader: true },
  { num: '', name: '사지의 골 및 관절연골의 악성신생물', code: 'C40', isSub: true },
  { num: '', name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41', isSub: true },
  { num: '4', name: '수막, 뇌 및 기타 중추신경계통의 악성신생물', code: 'C70~C72', isSub: false, isGroupHeader: true },
  { num: '', name: '수막의 악성신생물', code: 'C70', isSub: true },
  { num: '', name: '뇌의 악성신생물', code: 'C71', isSub: true },
  { num: '', name: '척수, 뇌신경 및 중추신경계통의 기타 부분의 악성신생물', code: 'C72', isSub: true },
  { num: '5', name: '림프, 조혈 및 관련조직의 악성신생물', code: 'C81~C96', isSub: false, isGroupHeader: true },
  { num: '', name: '호지킨림프종', code: 'C81', isSub: true },
  { num: '', name: '소포성 림프종', code: 'C82', isSub: true },
  { num: '', name: '비소포성 림프종', code: 'C83', isSub: true },
  { num: '', name: '성숙 T/NK-세포림프종', code: 'C84', isSub: true },
  { num: '', name: '기타 상세불명 유형의 비호지킨 림프종', code: 'C85', isSub: true },
  { num: '', name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86', isSub: true },
  { num: '', name: '악성 면역증식성 질환', code: 'C88', isSub: true },
  { num: '', name: '다발골수종 및 악성 형질세포 신생물', code: 'C90', isSub: true },
  { num: '', name: '림프성 백혈병', code: 'C91', isSub: true },
  { num: '', name: '골수성 백혈병', code: 'C92', isSub: true },
  { num: '', name: '단핵구성 백혈병', code: 'C93', isSub: true },
  { num: '', name: '명시된 세포형의 기타 백혈병', code: 'C94', isSub: true },
  { num: '', name: '상세불명 세포형의 백혈병', code: 'C95', isSub: true },
  { num: '', name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96', isSub: true },
  { num: '', name: '만성 골수증식질환', code: 'D47.1', isSub: true },
  { num: '', name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5', isSub: true }
];

export const HANA_HIGH_COST_CANCER_SECTIONS = [
  {
    title: '【별표16】 고액치료비암 분류표',
    items: HANA_HIGH_COST_CANCER_UNROLLED.map(item => ({
      num: item.num,
      disease: item.isSub ? `- ${item.name}` : item.name,
      code: item.code
    }))
  }
];

// 【별표17】 11대특정암 분류표
export const HANA_11_SPECIFIC_CANCER_UNROLLED = [
  { num: '1', name: '식도의 악성신생물', code: 'C15', isSub: false },
  { num: '2', name: '위의 악성신생물', code: 'C16', isSub: false },
  { num: '3', name: '췌장의 악성신생물', code: 'C25', isSub: false },
  { num: '4', name: '뇌 및 중추신경계통의 기타부분의 악성신생물', code: 'C70~C72', isSub: false, isGroupHeader: true },
  { num: '', name: '수막의 악성신생물', code: 'C70', isSub: true },
  { num: '', name: '뇌의 악성신생물', code: 'C71', isSub: true },
  { num: '', name: '척수, 뇌신경 및 중추신경계통의 기타 부분의 악성신생물', code: 'C72', isSub: true },
  { num: '5', name: '림프, 조혈 및 관련조직의 악성신생물', code: 'C81~C96, D47.1, D47.5', isSub: false, isGroupHeader: true },
  { num: '', name: '호지킨림프종', code: 'C81', isSub: true },
  { num: '', name: '소포성 림프종', code: 'C82', isSub: true },
  { num: '', name: '비소포성 림프종', code: 'C83', isSub: true },
  { num: '', name: '성숙 T/NK-세포림프종', code: 'C84', isSub: true },
  { num: '', name: '기타 상세불명 유형의 비호지킨 림프종', code: 'C85', isSub: true },
  { num: '', name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86', isSub: true },
  { num: '', name: '악성 면역증식성 질환', code: 'C88', isSub: true },
  { num: '', name: '다발골수종 및 악성 형질세포 신생물', code: 'C90', isSub: true },
  { num: '', name: '림프성 백혈병', code: 'C91', isSub: true },
  { num: '', name: '골수성 백혈병', code: 'C92', isSub: true },
  { num: '', name: '단핵구성 백혈병', code: 'C93', isSub: true },
  { num: '', name: '명시된 세포형의 기타 백혈병', code: 'C94', isSub: true },
  { num: '', name: '상세불명 세포형의 백혈병', code: 'C95', isSub: true },
  { num: '', name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96', isSub: true },
  { num: '', name: '만성 골수증식질환', code: 'D47.1', isSub: true },
  { num: '', name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5', isSub: true },
  { num: '6', name: '간 및 간내 담관의 악성신생물', code: 'C22', isSub: false },
  { num: '7', name: '담낭의 악성신생물', code: 'C23', isSub: false },
  { num: '8', name: '담도의 기타 및 상세불명 부분의 악성신생물', code: 'C24', isSub: false },
  { num: '9', name: '기관의 악성신생물', code: 'C33', isSub: false },
  { num: '10', name: '기관지 및 폐의 악성신생물', code: 'C34', isSub: false },
  { num: '11', name: '소장의 악성신생물', code: 'C17', isSub: false }
];

export const HANA_11_SPECIFIC_CANCER_SECTIONS = [
  {
    title: '【별표17】 11대특정암 분류표',
    items: HANA_11_SPECIFIC_CANCER_UNROLLED.map(item => ({
      num: item.num,
      disease: item.isSub ? `- ${item.name}` : item.name,
      code: item.code
    }))
  }
];

// 통합뇌질환 분류표 (KB손해보험 통합뇌질병 동일 양식)
export const HANA_BRAIN_DISEASE_ITEMS = [
  {
    category: '뇌전증',
    items: [
      { name: '뇌전증', code: 'G40' },
      { name: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    category: '일과성 뇌허혈발작',
    items: [
      { name: '척추-뇌기저동맥증후군', code: 'G45.0' },
      { name: '경동맥증후군(대뇌반구성)', code: 'G45.1' },
      { name: '다발성 및 양쪽 뇌전동맥증후군', code: 'G45.2' },
      { name: '일과성 흑암시', code: 'G45.3' },
      { name: '기타 일과성 뇌허혈발작 및 관련 증후군', code: 'G45.8' },
      { name: '상세불명의 일과성 뇌허혈발작', code: 'G45.9' }
    ]
  },
  {
    category: '뇌혈관질환(뇌출혈 · 뇌경색)',
    items: [
      { name: '거미막하출혈', code: 'I60' },
      { name: '뇌내출혈', code: 'I61' },
      { name: '기타 비외상성 두개내 출혈', code: 'I62' },
      { name: '뇌경색증', code: 'I63' }
    ]
  },
  {
    category: '뇌혈관질환(협착증)',
    items: [
      { name: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { name: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' }
    ]
  },
  {
    category: '뇌혈관질환(뇌졸중제외)',
    items: [
      { name: '출혈 또는 경색증으로 명시되지 않은 뇌졸중', code: 'I64' },
      { name: '기타 뇌혈관 질환', code: 'I67' },
      { name: '달리 분류된 질환에서의 뇌혈관장애', code: 'I68' },
      { name: '뇌혈관질환의 후유증', code: 'I69' }
    ]
  }
];

export const HANA_BRAIN_DISEASE_SECTIONS = HANA_BRAIN_DISEASE_ITEMS.map((cat) => ({
  title: cat.category,
  items: cat.items.map((i, iIdx) => ({
    num: String(iIdx + 1),
    disease: i.name,
    code: i.code
  }))
}));

// 【별표28】 통합심질환 분류표
export const HANA_INTEGRATED_HEART_SUMMARY = [
  {
    category: '심근병증(허혈성제외)',
    title: '심근병증(허혈성제외)',
    diseases: '심근병증(I42), 달리 분류된 질환에서의 심근병증(I43)'
  },
  {
    category: '심장판막협착증(대동맥판막)',
    title: '심장판막협착증(대동맥판막)',
    diseases: '류마티스성 대동맥판협착(I06.0), 기능부전이 있는 류마티스성 대동맥판협착(I06.2), 대동맥판협착(I35.0), 기능부전을 동반한 대동맥판협착(I35.2)'
  },
  {
    category: '특정심장질환 III',
    title: '특정심장질환 III',
    diseases: '급성 심근경색증(I21), 후속 심근경색증(I22), 급성 심근경색증 후 특정 현존 합병증(I23), 인공소생에 성공한 심장정지(I46.0)'
  },
  {
    category: '특정심장질환 IV',
    title: '특정심장질환 IV',
    diseases: '협심증(I20), 기타 급성 허혈심장질환(I24), 만성 허혈심장병(I25), 급성 심장막염(I30), 심장막의 기타질환(I31), 달리 분류된 질환에서의 심장막염(I32), 급성 및 아급성 심내막염(I33), 상세불명 판막의 심내막염(I38), 급성 심근염(I40), 달리 분류된 질환에서의 심근염(I41), 발작성 빈맥(I47), 심방세동 및 조동(I48), 심부전(I50)'
  },
  {
    category: '기타심장부정맥',
    title: '기타심장부정맥',
    diseases: '기타 심장부정맥(I49)'
  }
];

export const HANA_INTEGRATED_HEART_SECTIONS = [
  {
    title: '심근병증(허혈성제외)',
    items: [
      { num: '1', disease: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', code: 'I43' }
    ]
  },
  {
    title: '심장판막협착증(대동맥판막)',
    items: [
      { num: '1', disease: '류마티스성 대동맥판협착', code: 'I06.0' },
      { num: '2', disease: '기능부전이 있는 류마티스성 대동맥판협착', code: 'I06.2' },
      { num: '3', disease: '대동맥판협착', code: 'I35.0' },
      { num: '4', disease: '기능부전을 동반한 대동맥판협착', code: 'I35.2' }
    ]
  },
  {
    title: '특정심장질환 III',
    items: [
      { num: '1', disease: '급성 심근경색증', code: 'I21' },
      { num: '2', disease: '후속 심근경색증', code: 'I22' },
      { num: '3', disease: '급성 심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '4', disease: '인공소생에 성공한 심장정지', code: 'I46.0' }
    ]
  },
  {
    title: '특정심장질환 IV',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', code: 'I25' },
      { num: '4', disease: '급성 심장막염', code: 'I30' },
      { num: '5', disease: '심장막의 기타질환', code: 'I31' },
      { num: '6', disease: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { num: '7', disease: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '8', disease: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '9', disease: '급성 심근염', code: 'I40' },
      { num: '10', disease: '달리 분류된 질환에서의 심근염', code: 'I41' },
      { num: '11', disease: '발작성 빈맥', code: 'I47' },
      { num: '12', disease: '심방세동 및 조동', code: 'I48' },
      { num: '13', disease: '심부전', code: 'I50' }
    ]
  },
  {
    title: '기타심장부정맥',
    items: [
      { num: '1', disease: '기타 심장부정맥', code: 'I49' }
    ]
  }
];

// 【별표】 여성16대질병 분류표
export const HANA_WOMEN_16_DISEASES_SUMMARY = [
  {
    title: '여성16대질병',
    diseases: '당뇨병, 심장질환, 고혈압, 뇌혈관질환, 간질환, 위·십이지장궤양, 갑상선질환, 동맥경화증, 만성하기도질환, 폐렴, 관절염, 백내장, 녹내장, 결핵, 신부전, 생식기질환'
  }
];

export const HANA_WOMEN_16_DISEASES_SECTIONS = [
  {
    category: '1) 당뇨병',
    items: [
      { disease: '당뇨병', code: 'E10~E14' }
    ]
  },
  {
    category: '2) 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { disease: '허혈성 심장질환', code: 'I20~I25' },
      { disease: '폐성심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' }
    ]
  },
  {
    category: '3) 고혈압',
    items: [
      { disease: '고혈압 질환', code: 'I10~I15' }
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
      { disease: '간의 질환', code: 'K70~K77' }
    ]
  },
  {
    category: '6) 위·십이지장궤양',
    items: [
      { disease: '위궤양, 십이지장궤양, 상세불명부위의 소화성궤양', code: 'K25~K27' }
    ]
  },
  {
    category: '7) 갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '8) 동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '9) 만성하기도질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액농성 만성기관지염', code: 'J41' },
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
      { disease: '달리 분류되지 않은 세균 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    category: '11) 관절염',
    items: [
      { disease: '감염성 관절병증', code: 'M00~M03' },
      { disease: '염증성 다발관절병증', code: 'M05~M14' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '기타 관절 장애', code: 'M20~M25' }
    ]
  },
  {
    category: '12) 백내장',
    items: [
      { disease: '노년성 백내장, 기타 백내장, 수정체의 기타장애', code: 'H25, H26, H27' }
    ]
  },
  {
    category: '13) 녹내장',
    items: [
      { disease: '녹내장, 달리 분류된 질환에서의 녹내장', code: 'H40, H42' }
    ]
  },
  {
    category: '14) 결핵',
    items: [
      { disease: '결핵, 결핵의 후유증', code: 'A15~A19, B90' }
    ]
  },
  {
    category: '15) 신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '16) 생식기질환',
    items: [
      { disease: '여성 골반내 기관의 염증성 질환', code: 'N70~N77' },
      { disease: '여성생식관의 비염증성 장애(습관성 유산자, 여성불임증, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { disease: '남성 생식기관의 질환', code: 'N40~N45, N47~N51' },
      { disease: '비뇨생식계통의 기타장애', code: 'N99' }
    ]
  }
];

// 【별표78】 1~5종수술III 분류표
export const HANA_SURGERY_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy) 단, 유방의 비대(N62) 제외', code: '3종' },
      { num: '3-1', disease: '유방의 비대(N62)', code: '1종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외) [단, 치료목적의 Mammotomy는 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' }
    ]
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술, 수면중 무호흡 수술은 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는것]', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 [다지증에 대한 절단수술은 제외함]', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는것]', code: '3종' },
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
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것 ]', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' }
    ]
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
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외함)', code: '5종' },
      { num: '39', disease: '탈장(脫腸) 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염(全身性 腹膜炎, Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수(蟲垂)절제술(충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', code: '2종' },
      { num: '42', disease: '직장탈(直腸脫) 근본수술', code: '1종' },
      { num: '43', disease: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] 단, 직장탈근본수술은 제외', code: '4종' },
      { num: '44', disease: '치루(痔瘻), 탈항(脫肛), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외함]', code: '1종' }
    ]
  },
  {
    category: '6. 비뇨기계·생식기계의 수술',
    title: '비뇨기계·생식기계의 수술 (인공임신중절수술은 제외함)',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管)관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류·요실금 교정수술', code: '1종' },
      { num: '48', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '49', disease: '음경(陰莖) 절단수술 (포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '50', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊)관혈수술, 전립선(前立腺)관혈수술', code: '2종' },
      { num: '51', disease: '음낭관혈수술', code: '1종' },
      { num: '52', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '53', disease: '경질적 자궁, 난소, 난관 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '54', disease: '제왕절개만출술(帝王切開娩出術)', code: '1종' },
      { num: '55', disease: '질탈(膣脫)근본수술', code: '1종' }
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
      { num: '63', disease: '안검하수증(眼瞼下垂症)수술(안검내반증 제외)', code: '1종' },
      { num: '64', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '65', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '66', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '67', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '68', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '69', disease: '전방(前房), 홍채(虹彩), 유리체(玻璃體) 관혈수술', code: '2종' },
      { num: '70', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '71', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '72', disease: '망막박리(網膜剝離) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '73', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '74', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '75', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '76', disease: '안와내종양절제수술', code: '3종' },
      { num: '77', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '78', disease: '안근(眼筋)관혈수술', code: '1종' }
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
      { num: '87', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] * 체외충격파치료술(E.S.W.T)은 제외', code: '2종' },
      { num: '88-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '88-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외) 단, 결장의 용종(K63.5) 또는 결장 및 직장 양성신생물(D12.0~12.8) 제외', code: '2종' },
      { num: '88-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락, 결장의 용종(K63.5) 또는 결장 및 직장 양성신생물(D12.0~12.8)', code: '1종' }
    ]
  },
  {
    category: '2. 악성신생물 치료 목적의 수술',
    title: '2. 악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery) 단, 기타피부암(C44) 제외 [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외함]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '3종' },
      { num: '2', disease: '내시경 수술, 카테터·고주파 전극 등에 의한 악성신생물 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  },
  {
    category: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    title: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  }
];

// 하나손해보험 136대 질병수술 분류표 [별표44~49] 데이터
export const HANA_SURGERY_136_SECTIONS = [
  // 【별표44】 17대질병 분류표
  {
    title: '[17대질병] 크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '[17대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨병', code: 'G21' }
    ]
  },
  {
    title: '[17대질병] 다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[17대질병] 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '[17대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[17대질병] 기타 마비증후군',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[17대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[17대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[17대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1+' },
      { num: '4', disease: '톡소포자충 간염(K77.0*)', code: 'B58.1+' }
    ]
  },
  {
    title: '[17대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '수막구균성 심장병 등(I32.0*,I39.8*,I41.0*,I52.0*)', code: 'A39.5+' },
      { num: '7', disease: '칸디다심내막염(I39.8*)', code: 'B37.6+' }
    ]
  },
  {
    title: '[17대질병] 고혈압성질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '배경망막병증 및 망막혈관변화(고혈압성)', code: 'H35.0' },
      { num: '7', disease: '고혈압성 뇌병증', code: 'I67.4' }
    ]
  },
  {
    title: '[17대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[17대질병] 대동맥류 및 박리',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[17대질병] 기타 동맥류 및 박리',
    items: [
      { num: '1', disease: '기타 동맥류 및 박리', code: 'I72' }
    ]
  },
  {
    title: '[17대질병] 만성 폐쇄성 폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' }
    ]
  },
  {
    title: '[17대질병] 결절성 다발동맥염 및 관련 병태',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' }
    ]
  },
  {
    title: '[17대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },

  // 【별표45】 14대질병Ⅱ 분류표
  {
    title: '[14대질병Ⅱ] 기관지확장증',
    items: [
      { num: '1', disease: '기관지확장증', code: 'J47' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 기타 폐질환',
    items: [
      { num: '1', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '2', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 뇌하수체질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 만성 하부 호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J42' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 성인호흡곤란증후군',
    items: [
      { num: '1', disease: '성인호흡곤란증후군', code: 'J80' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 외부요인에 의한 폐질환',
    items: [
      { num: '1', disease: '외부요인에 의한 폐질환', code: 'J60~J70' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 위궤양 및 십이지장 궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 중추 신경계통의 염증성질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '수막구균수막염(G01*)', code: 'A39.0+' },
      { num: '4', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '5', disease: '아데노바이러스수막염(G02.0*)', code: 'A87.1+' },
      { num: '6', disease: '엔테로바이러스수막염(G02.0*)', code: 'A87.0+' },
      { num: '7', disease: '헤르페스바이러스수막염(G02.0*)', code: 'B00.3+' },
      { num: '8', disease: '수막염이 합병된 홍역(G02.0*)', code: 'B05.1+' },
      { num: '9', disease: '볼거리수막염(G02.0*)', code: 'B26.1+' },
      { num: '10', disease: '수두수막염(G02.0*)', code: 'B01.0+' },
      { num: '11', disease: '대상포진수막염(G02.0*)', code: 'B02.1+' },
      { num: '12', disease: '칸디다수막염(G02.1*)', code: 'B37.5+' },
      { num: '13', disease: '콕시디오이데스진균수막염(G02.1*)', code: 'B38.4+' },
      { num: '14', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { num: '15', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '16', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '17', disease: '아데노바이러스뇌염(G05.1*)', code: 'A85.1+' },
      { num: '18', disease: '엔테로바이러스뇌염(G05.1*)', code: 'A85.0+' },
      { num: '19', disease: '헤르페스바이러스뇌염(G05.1*)', code: 'B00.4+' },
      { num: '20', disease: '홍역에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B05.0+' },
      { num: '21', disease: '볼거리에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B26.2+' },
      { num: '22', disease: '수두후에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B01.1+' },
      { num: '23', disease: '대상포진에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B02.0+' },
      { num: '24', disease: '신경학적 합병증을 동반한 풍진에서의 뇌염, 척수염 또는 뇌척수염(G05.1*, G02.0*, G05.1*)', code: 'B06.0+' },
      { num: '25', disease: '리스테리아 수막염 및 수막뇌염(G01*, G05.0*)', code: 'A32.1+' },
      { num: '26', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '27', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종', code: 'G07' },
      { num: '28', disease: '아메바성 뇌농양(G07*)', code: 'A06.6+' },
      { num: '29', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '30', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 천식',
    items: [
      { num: '1', disease: '천식', code: 'J45' },
      { num: '2', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 특정호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 패혈증',
    items: [
      { num: '1', disease: '연쇄구균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { num: '8', disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { num: '9', disease: '수두폐렴(J17.1*)', code: 'B01.2+' },
      { num: '10', disease: '폐톡소포자충증(J17.3*)', code: 'B58.3+' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' },
      { num: '13', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '[14대질병Ⅱ] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },

  // 【별표46】 26대질병 분류표
  {
    title: '[26대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '결핵성복막염(A18.30*)', code: 'K67.3*' },
      { num: '3', disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3~*)', code: 'K93.0*' },
      { num: '4', disease: '결핵 관절염(A18.01*)', code: 'M01.1*' },
      { num: '5', disease: '척추의 결핵(A18.00*)', code: 'M49.0*' },
      { num: '6', disease: '뼈의 결핵(A18.02*)', code: 'M90.0*' },
      { num: '7', disease: '결핵성 방광염(A18.11*)', code: 'N33.0*' },
      { num: '8', disease: '자궁경부의 결핵감염(A18.15*)', code: 'N74.0*' },
      { num: '9', disease: '여성 결핵성 골반염증질환(A18.16*)', code: 'N74.1*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[26대질병] 용혈-요독증후군',
    items: [
      { num: '1', disease: '용혈-요독증후군', code: 'D59.3' }
    ]
  },
  {
    title: '[26대질병] 비장의 질환',
    items: [
      { num: '1', disease: '비장의 질환', code: 'D73' }
    ]
  },
  {
    title: '[26대질병] 당뇨병',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조 관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 단일신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '9', disease: '당뇨병에서의 사구체장애', code: 'N08.3' },
      { num: '10', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '11', disease: '당뇨병성 망막병증', code: 'H36.0' }
    ]
  },
  {
    title: '[26대질병] 부갑상선질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[26대질병] 특정 기타 내분비선의 장애',
    items: [
      { num: '1', disease: '쿠싱증후군', code: 'E24' },
      { num: '2', disease: '부신생식기장애', code: 'E25' },
      { num: '3', disease: '고알도스테론증', code: 'E26' },
      { num: '4', disease: '부신의 기타 장애', code: 'E27' }
    ]
  },
  {
    title: '[26대질병] 다낭성 난소증후군',
    items: [
      { num: '1', disease: '다낭성 난소증후군', code: 'E28.2' }
    ]
  },
  {
    title: '[26대질병] 안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' }
    ]
  },
  {
    title: '[26대질병] 기타 뇌신경의 장애',
    items: [
      { num: '1', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[26대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[26대질병] 버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염(버거병)', code: 'I73.1' }
    ]
  },
  {
    title: '[26대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[26대질병] 문맥혈전증',
    items: [
      { num: '1', disease: '문맥혈전증', code: 'I81' }
    ]
  },
  {
    title: '[26대질병] 비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[26대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐쇄', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[26대질병] 장의 특정기타질환',
    items: [
      { num: '1', disease: '장의 농양', code: 'K63.0' },
      { num: '2', disease: '장의 천공(비외상성)', code: 'K63.1' },
      { num: '3', disease: '장의 누공', code: 'K63.2' },
      { num: '4', disease: '장의 궤양', code: 'K63.3' }
    ]
  },
  {
    title: '[26대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[26대질병] 담낭담도 질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[26대질병] 급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '[26대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { num: '3', disease: '거대세포바이러스췌장염(K87.1*)', code: 'B25.2+' },
      { num: '4', disease: '볼거리췌장염(K87.1*)', code: 'B26.3+' }
    ]
  },
  {
    title: '[26대질병] 장흡수장애',
    items: [
      { num: '1', disease: '장흡수장애', code: 'K90' }
    ]
  },
  {
    title: '[26대질병] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등뼈증', code: 'M43' }
    ]
  },
  {
    title: '[26대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[26대질병] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염증후군', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의 사구체장애 (당뇨병에서의 사구체장애 제외)', code: 'N08(N08.3제외)' },
      { num: '10', disease: '사구체질환 동반(N08.5*)', code: 'M32.13+' }
    ]
  },
  {
    title: '[26대질병] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리 분류된 질환에서의 신세뇨관-간질장애', code: 'N16' },
      { num: '8', disease: '세뇨관-간질신장병증 동반(N16.4*)', code: 'M32.13+' }
    ]
  },
  {
    title: '[26대질병] 신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '신세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },

  // 【별표47】 40대질병 분류표
  {
    title: '[40대질병] 골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[40대질병] 조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[40대질병] 유방의 양성종양',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[40대질병] 자궁의 양성신생물',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' }
    ]
  },
  {
    title: '[40대질병] 난소의 양성신생물',
    items: [
      { num: '1', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '2', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '3', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[40대질병] 수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[40대질병] 갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[40대질병] 뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물',
    items: [
      { num: '1', disease: '뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[40대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[40대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의 단일신경병증 (당뇨병성 단일신경병증 제외)', code: 'G59(G59.0제외)' }
    ]
  },
  {
    title: '[40대질병] 눈 및 눈 부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '홍채섬모체염(H22.0*)', code: 'B00.50+' },
      { num: '3', disease: '홍채염(H22.0*)', code: 'B00.50+' },
      { num: '4', disease: '전방포도막염(H22.0*)', code: 'B00.50+' },
      { num: '5', disease: '각막염(H19.1*)', code: 'B00.51+' },
      { num: '6', disease: '각막결막염(H19.1*)', code: 'B00.51+' },
      { num: '7', disease: '각막상피염(H19.1*)', code: 'B00.51+' },
      { num: '8', disease: '간질각막염(H19.1*)', code: 'B00.51+' },
      { num: '9', disease: '각막내피염(H19.1*)', code: 'B00.51+' },
      { num: '10', disease: '(아데노바이러스에 의한 각막결막염(H19.2*) 제외)', code: 'B30.0+제외' },
      { num: '11', disease: '(유행성 각막결막염(H19.2*) 제외)', code: 'B30.0+제외' },
      { num: '12', disease: '(조선소눈병(H19.2*) 제외)', code: 'B30.0+제외' },
      { num: '13', disease: '맥락막 및 망막의 장애 (배경망막병증 및 망막혈관변화 중 고혈압성 망막병증 제외, 황반 및 후극부의 변성 제외, 당뇨병성 망막병증 제외)', code: 'H30~H36' },
      { num: '14', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[40대질병] 백내장',
    items: [
      { num: '1', disease: '노년 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '[40대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[40대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[40대질병] 유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '[40대질병] 안구의 장애',
    items: [
      { num: '1', disease: '안구의 장애', code: 'H44' }
    ]
  },
  {
    title: '[40대질병] 중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환', code: 'H65~H75' },
      { num: '2', disease: '중이염이 합병된 홍역(H67.1*)', code: 'B05.3+' },
      { num: '3', disease: '홍역후 중이염(H67.1*)', code: 'B05.3+' }
    ]
  },
  {
    title: '[40대질병] 내이의 질환',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' },
      { num: '2', disease: '전정기능의 장애', code: 'H81' },
      { num: '3', disease: '달리 분류된 질환에서의 현기증후군', code: 'H82' },
      { num: '4', disease: '내이의 질환', code: 'H83' }
    ]
  },
  {
    title: '[40대질병] 기타 정맥의 색전증 및 혈전증',
    items: [
      { num: '1', disease: '기타 정맥의 색전증 및 혈전증', code: 'I82' }
    ]
  },
  {
    title: '[40대질병] 하지의 정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류', code: 'I83' }
    ]
  },
  {
    title: '[40대질병] 식도정맥류',
    items: [
      { num: '1', disease: '식도정맥류', code: 'I85' },
      { num: '2', disease: '달리 분류된 질환에서의 출혈을 동반하지 않은 식도정맥류', code: 'I98.2' },
      { num: '3', disease: '달리 분류된 질환에서의 출혈을 동반한 식도정맥류', code: 'I98.3' }
    ]
  },
  {
    title: '[40대질병] 특정 인플루엔자',
    items: [
      { num: '1', disease: '확인된 동물매개 또는 범유행 인플루엔자바이러스에 의한 인플루엔자', code: 'J09' },
      { num: '2', disease: '확인된 계절성 인플루엔자바이러스에 의한 인플루엔자', code: 'J10' },
      { num: '3', disease: '바이러스가 확인되지 않은 인플루엔자', code: 'J11' }
    ]
  },
  {
    title: '[40대질병] 기타 급성 하기도감염',
    items: [
      { num: '1', disease: '기타 급성 하기도감염', code: 'J20~J22' }
    ]
  },
  {
    title: '[40대질병] 만성 부비동염',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[40대질병] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[40대질병] 위, 십이지장염',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' }
    ]
  },
  {
    title: '[40대질병] 위 및 십이지장의 기타 질환',
    items: [
      { num: '1', disease: '위 및 십이지장의 기타질환', code: 'K31' }
    ]
  },
  {
    title: '[40대질병] 충수의 질환',
    items: [
      { num: '1', disease: '충수의 질환', code: 'K35~K38' }
    ]
  },
  {
    title: '[40대질병] 사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니 탈장', code: 'K40' }
    ]
  },
  {
    title: '[40대질병] 특정 부위의 탈장',
    items: [
      { num: '1', disease: '대퇴탈장', code: 'K41' },
      { num: '2', disease: '배꼽탈장', code: 'K42' },
      { num: '3', disease: '복벽탈장', code: 'K43' },
      { num: '4', disease: '횡격막탈장', code: 'K44' },
      { num: '5', disease: '기타 복벽탈장', code: 'K45' },
      { num: '6', disease: '상세불명의 복벽탈장', code: 'K46' }
    ]
  },
  {
    title: '[40대질병] 복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환 (결핵성 복막염(K67.3) 제외)', code: 'K65~K67(K67.3제외)' },
      { num: '2', disease: '기타 클라미디아질환(K67.0*)', code: 'A74.8+' }
    ]
  },
  {
    title: '[40대질병] 특정 소화계통의 기타 질환',
    items: [
      { num: '1', disease: '소화계통의 기타 질환', code: 'K92' }
    ]
  },
  {
    title: '[40대질병] 관절염',
    items: [
      { num: '1', disease: '감염성 관절병증 (결핵관절염(M01.1*) 제외)', code: 'M00~M03(M01.1*제외)' },
      { num: '2', disease: '염증성 다발관절병증 (당뇨병성 관절병증(M14.2*) 제외)', code: 'M05~M14(M14.2*제외)' },
      { num: '3', disease: '류마티스 폐질환(M05.1+)', code: 'J99.0*' },
      { num: '4', disease: '관절증', code: 'M15~M19' },
      { num: '5', disease: '기타 관절 장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[40대질병] 결합조직의 기타 전신침범',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '달리 분류된 기타 질환에서의 각막염 및 각막결막염', code: 'H19.3*' }
    ]
  },
  {
    title: '[40대질병] 추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' },
      { num: '3', disease: '추간판 장애에서의 신경근 및 신경총 압박(M51.1+)', code: 'G55.1*' }
    ]
  },
  {
    title: '[40대질병] 근육장애',
    items: [
      { num: '1', disease: '근염', code: 'M60' },
      { num: '2', disease: '근육의 석회화 및 골화', code: 'M61' },
      { num: '3', disease: '근육의 기타 장애', code: 'M62' },
      { num: '4', disease: '달리 분류된 질환에서의 근육장애', code: 'M63' }
    ]
  },
  {
    title: '[40대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[40대질병] 골수염',
    items: [
      { num: '1', disease: '골수염', code: 'M86' }
    ]
  },
  {
    title: '[40대질병] 비뇨계통의기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애 (결핵성 방광염(A18.11+) 제외)', code: 'N33(N33.0제외)' },
      { num: '5', disease: '비뇨계통의 기타 장애', code: 'N37' },
      { num: '6', disease: '칸디다요도염(N37.0*)', code: 'B37.40+' },
      { num: '7', disease: '달리 분류된 질환에서의 요도장애 (스트레스요실금(N39.3), 기타 명시된 요실금(N39.4) 제외)', code: 'N39(N39.3,N39.4제외)' }
    ]
  },
  {
    title: '[40대질병] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },

  // 【별표48】 38대질병 분류표
  {
    title: '[38대질병] 대상포진',
    items: [
      { num: '1', disease: '대상포진', code: 'B02' }
    ]
  },
  {
    title: '[38대질병] 주침샘의 양성신생물',
    items: [
      { num: '1', disease: '주침샘의 양성신생물', code: 'D11' }
    ]
  },
  {
    title: '[38대질병] 소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화기계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '[38대질병] 중이·호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[38대질병] 비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '[38대질병] 눈 및 눈 부속기관의 기타질환',
    items: [
      { num: '1', disease: '눈 및 부속기의 양성 신생물', code: 'D31' },
      { num: '2', disease: '아데노바이러스에 의한 각막결막염(H19.2*)', code: 'B30.0+' },
      { num: '3', disease: '유행성 각막결막염(H19.2*)', code: 'B30.0+' },
      { num: '4', disease: '조선소눈병(H19.2*)', code: 'B30.0+' }
    ]
  },
  {
    title: '[38대질병] 수면무호흡',
    items: [
      { num: '1', disease: '수면무호흡', code: 'G47.3' }
    ]
  },
  {
    title: '[38대질병] 중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[38대질병] 안와장애',
    items: [
      { num: '1', disease: '안와장애', code: 'H05' }
    ]
  },
  {
    title: '[38대질병] 결막장애',
    items: [
      { num: '1', disease: '결막장애', code: 'H10~H13' }
    ]
  },
  {
    title: '[38대질병] 미만성 층판성 각막염',
    items: [
      { num: '1', disease: '미만성 층판성 각막염', code: 'H59.8' }
    ]
  },
  {
    title: '[38대질병] 외이의 질환 및 귀의 기타장애',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' },
      { num: '2', disease: '귀의 기타장애', code: 'H90~H95' }
    ]
  },
  {
    title: '[38대질병] 정맥염 및 혈전정맥염',
    items: [
      { num: '1', disease: '정맥염 및 혈전정맥염', code: 'I80' }
    ]
  },
  {
    title: '[38대질병] 음낭정맥류',
    items: [
      { num: '1', disease: '음낭 정맥류', code: 'I86.1' }
    ]
  },
  {
    title: '[38대질병] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[38대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[38대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코 및 비동의 기타장애', code: 'J34' },
      { num: '4', disease: '코용종', code: 'J33' }
    ]
  },
  {
    title: '[38대질병] 편도 및 아데노이드의 만성 질환',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[38대질병] 인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[38대질병] 침샘질환',
    items: [
      { num: '1', disease: '침샘의 질환', code: 'K11' }
    ]
  },
  {
    title: '[38대질병] 혀의 질환',
    items: [
      { num: '1', disease: '혀의 질환', code: 'K14' }
    ]
  },
  {
    title: '[38대질병] 기능성 소화불량',
    items: [
      { num: '1', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[38대질병] 기타 괴사성 혈관병증',
    items: [
      { num: '1', disease: '기타 괴사성 혈관병증', code: 'M31' }
    ]
  },
  {
    title: '[38대질병] 전신홍반루푸스',
    items: [
      { num: '1', disease: '전신홍반루푸스', code: 'M32' }
    ]
  },
  {
    title: '[38대질병] 피부다발근염',
    items: [
      { num: '1', disease: '피부다발근염', code: 'M33' }
    ]
  },
  {
    title: '[38대질병] 전신경화증',
    items: [
      { num: '1', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '[38대질병] 달리 분류된 질환에서의 척추병증',
    items: [
      { num: '1', disease: '달리 분류된 질환에서의 척추병증', code: 'M49' }
    ]
  },
  {
    title: '[38대질병] 특정 기타등병증',
    items: [
      { num: '1', disease: '달리 분류되지 않은 기타 등병증', code: 'M53' },
      { num: '2', disease: '등통증', code: 'M54' }
    ]
  },
  {
    title: '[38대질병] 윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막염 및 힘줄윤활막염', code: 'M65' },
      { num: '2', disease: '윤활막 및 힘줄의 자연파열', code: 'M66' },
      { num: '3', disease: '윤활막 및 힘줄의 기타 장애', code: 'M67' },
      { num: '4', disease: '달리 분류된 질환에서의 윤활막 및 힘줄의 장애', code: 'M68' }
    ]
  },
  {
    title: '[38대질병] 기타 연조직장애',
    items: [
      { num: '1', disease: '기타 연조직장애 (M74, M78 제외)', code: 'M70~M79(M74,M78제외)' }
    ]
  },
  {
    title: '[38대질병] 뼈의 파젯병',
    items: [
      { num: '1', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' }
    ]
  },
  {
    title: '[38대질병] 뼈의 기타 장애',
    items: [
      { num: '1', disease: '뼈의 기타 장애', code: 'M89' }
    ]
  },
  {
    title: '[38대질병] 연골병증',
    items: [
      { num: '1', disease: '연골병증', code: 'M91~M94' }
    ]
  },
  {
    title: '[38대질병] 하부요로의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' },
      { num: '2', disease: '요도결석', code: 'N21.1' },
      { num: '3', disease: '기타 하부요로결석', code: 'N21.8' },
      { num: '4', disease: '상세불명의 하부요로결석', code: 'N21.9' },
      { num: '5', disease: '달리 분류된 질환에서의 요로의 결석', code: 'N22*' }
    ]
  },
  {
    title: '[38대질병] 상세불명의 신장 급통증',
    items: [
      { num: '1', disease: '상세불명의 신장 급통증', code: 'N23' }
    ]
  },
  {
    title: '[38대질병] 특정요도질환',
    items: [
      { num: '1', disease: '요도염 및 요도증후군', code: 'N34' },
      { num: '2', disease: '요도협착', code: 'N35' },
      { num: '3', disease: '요도의 기타 장애', code: 'N36' }
    ]
  },
  {
    title: '[38대질병] 생식기질환',
    items: [
      { num: '1', disease: '남성생식기의 질환 (남성불임 제외)', code: 'N40~N45,N47~N51' },
      { num: '2', disease: '편모충성 전립선염(N51.0*)', code: 'A59.08+' },
      { num: '3', disease: '볼거리고환염(N51.1*)', code: 'B26.0+' },
      { num: '4', disease: '여성골반내 기관의 염증성 질환 (자궁경부의 결핵감염(A18.15+), 여성 결핵성 골반염증질환(A18.16+) 제외)', code: 'N70~N77(N74.0*,N74.1*제외)' },
      { num: '5', disease: '여성생식기관의 비염증성 장애 (습관적 유산자, 여성불임, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '6', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '[38대질병] 다한증',
    items: [
      { num: '1', disease: '다한증', code: 'R61' }
    ]
  },

  // 【별표49】 치핵 분류표
  {
    title: '[치핵] 치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 (포함: 치질 / 제외: 출산 및 산후기 합병(O87.2), 임신 합병(O22.4))', code: 'K64' }
    ]
  }
];

// 하나손해보험 136대 질병수술 상단 요약 분류표 데이터
export const HANA_SURGERY_136_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  HANA_SURGERY_136_SECTIONS.forEach((sec) => {
    const match = sec.title.match(/^\[(.*?)\]\s*(.*)$/);
    const rawGroup = match ? match[1] : sec.title;
    const rawDisease = match ? match[2] : sec.title;
    const title = rawGroup.endsWith('수술비') ? rawGroup : `${rawGroup} 수술비`;
    const disease = rawDisease.trim();
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

// ==========================================
// 하나손해보험 73대 질병수술비 데이터
// ==========================================
export const HANA_SURGERY_73_SECTIONS = [
  // 【별표9】 7대질병 분류표
  {
    title: '[7대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { num: '6', disease: '수막구균성 심장막염', code: 'A39.5' },
      { num: '7', disease: '수막구균성 심내막염', code: 'A39.5' },
      { num: '8', disease: '수막구균성 심근염', code: 'A39.5' },
      { num: '9', disease: '수막구균성 심장염 NOS', code: 'A39.5' },
      { num: '10', disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    title: '[7대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '[7대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' },
      { num: '3', disease: '거대세포바이러스간염', code: 'B25.1' },
      { num: '4', disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    title: '[7대질병] 고혈압',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화(고혈압성)', code: 'H35.0' }
    ]
  },
  {
    title: '[7대질병] 당뇨병',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조 관련 당뇨병', code: 'E12' },
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
    title: '[7대질병] 만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[7대질병] 위궤양 및 십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },

  // 【별표25】 특정15대질병 분류표
  {
    title: '[특정15대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '결핵성복막염(A18.30+)', code: 'K67.3*' },
      { num: '3', disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3~*)', code: 'K93.0*' },
      { num: '4', disease: '결핵 관절염(A18.01+)', code: 'M01.1*' },
      { num: '5', disease: '척추의 결핵(A18.00+)', code: 'M49.0*' },
      { num: '6', disease: '뼈의 결핵(A18.02+)', code: 'M90.0*' },
      { num: '7', disease: '결핵성 방광염(A18.11+)', code: 'N33.0*' },
      { num: '8', disease: '자궁경부의 결핵감염(A18.15+)', code: 'N74.0*' },
      { num: '9', disease: '여성 결핵성 골반염증질환(A18.16+)', code: 'N74.1*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[특정15대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄구균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[특정15대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '갑상선이상성 안구돌출(E05.0+)', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[특정15대질병] 중추 신경계통의 염증성질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '수막구균수막염(G01*)', code: 'A39.0+' },
      { num: '4', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '5', disease: '아데노바이러스수막염(G02.0*)', code: 'A87.1+' },
      { num: '6', disease: '엔테로바이러스수막염(G02.0*)', code: 'A87.0+' },
      { num: '7', disease: '헤르페스바이러스수막염(G02.0*)', code: 'B00.3+' },
      { num: '8', disease: '수막염이 합병된 홍역(G02.0*)', code: 'B05.1+' },
      { num: '9', disease: '볼거리수막염(G02.0*)', code: 'B26.1+' },
      { num: '10', disease: '수두수막염(G02.0*)', code: 'B01.0+' },
      { num: '11', disease: '대상포진수막염(G02.0*)', code: 'B02.1+' },
      { num: '12', disease: '칸디다수막염(G02.1*)', code: 'B37.5+' },
      { num: '13', disease: '콕시디오이데스진균수막염(G02.1*)', code: 'B38.4+' },
      { num: '14', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { num: '15', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '16', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '17', disease: '아데노바이러스뇌염(G05.1*)', code: 'A85.1+' },
      { num: '18', disease: '엔테로바이러스뇌염(G05.1*)', code: 'A85.0+' },
      { num: '19', disease: '헤르페스바이러스뇌염(G05.1*)', code: 'B00.4+' },
      { num: '20', disease: '홍역에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B05.0+' },
      { num: '21', disease: '볼거리에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B26.2+' },
      { num: '22', disease: '수두후에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B01.1+' },
      { num: '23', disease: '대상포진에서의 뇌염, 척수염 또는 뇌척수염(G05.1*)', code: 'B02.0+' },
      { num: '24', disease: '신경학적 합병증을 동반한 풍진에서의 뇌염, 척수염 또는 뇌척수염(G05.1*, G02.0*, G05.1*)', code: 'B06.0+' },
      { num: '25', disease: '리스테리아 수막염 및 수막뇌염(G01*, G05.0*)', code: 'A32.1+' },
      { num: '26', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '27', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종', code: 'G07' },
      { num: '28', disease: '아메바성 뇌농양(G07*)', code: 'A06.6+' },
      { num: '29', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '30', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[특정15대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[특정15대질병] 다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[특정15대질병] 자율 신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[특정15대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[특정15대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[특정15대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[특정15대질병] 폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0+' },
      { num: '8', disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2+' },
      { num: '9', disease: '수두폐렴(J17.1*)', code: 'B01.2+' },
      { num: '10', disease: '폐톡소포자충증(J17.3*)', code: 'B58.3+' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' },
      { num: '13', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '[특정15대질병] 폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '[특정15대질병] 급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '[특정15대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { num: '3', disease: '거대세포바이러스췌장염(K87.1*)', code: 'B25.2+' },
      { num: '4', disease: '볼거리췌장염(K87.1*)', code: 'B26.3+' }
    ]
  },
  {
    title: '[특정15대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },

  // 【별표26】 다발성15대질병 분류표
  {
    title: '[다발성15대질병] 소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화기계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '[다발성15대질병] 중이·호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[다발성15대질병] 골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[다발성15대질병] 조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[다발성15대질병] 유방의 양성종양',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[다발성15대질병] 여성 생식기의 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    title: '[다발성15대질병] 남성 생식기의 양성종양',
    items: [
      { num: '1', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[다발성15대질병] 비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '[다발성15대질병] 수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[다발성15대질병] 뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[다발성15대질병] 갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[다발성15대질병] 백내장',
    items: [
      { num: '1', disease: '노년 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '[다발성15대질병] 하지의 정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류', code: 'I83' }
    ]
  },
  {
    title: '[다발성15대질병] 충수의 질환',
    items: [
      { num: '1', disease: '충수의 질환', code: 'K35~K38' }
    ]
  },
  {
    title: '[다발성15대질병] 관절염',
    items: [
      { num: '1', disease: '감염성 관절병증 (결핵관절염 제외)', code: 'M00~M03 (M01.1* 제외)' },
      { num: '2', disease: '염증성 다발관절병증 (당뇨병성 관절병증 제외)', code: 'M05~M14 (M14.2* 제외)' },
      { num: '3', disease: '류마티스 폐질환(M05.1+)', code: 'J99.0*' },
      { num: '4', disease: '관절증', code: 'M15~M19' },
      { num: '5', disease: '기타 관절 장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[다발성15대질병] 생식기질환',
    items: [
      { num: '1', disease: '남성생식기의 질환 (남성불임 제외)', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '편모충성 전립선염(N51.0*)', code: 'A59.01+' },
      { num: '3', disease: '볼거리고환염(N51.1*)', code: 'B26.0+' },
      { num: '4', disease: '여성골반내 기관의 염증성 질환 (자궁경부의 결핵감염(A18.15+) 제외, 여성 결핵성 골반염증질환(A18.16+) 제외)', code: 'N70~N77 (N74.0* 제외, N74.1* 제외)' },
      { num: '5', disease: '여성생식기관의 비염증성 장애 (습관적 유산자 제외, 여성불임 제외, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '6', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },

  // 【별표27】 35대생활질환 분류표
  {
    title: '[35대생활질환] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[35대생활질환] 사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니 탈장', code: 'K40' }
    ]
  },
  {
    title: '[35대생활질환] 편도 및 아데노이드의 만성 질환',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[35대생활질환] 만성 부비동염',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[35대생활질환] 급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[35대생활질환] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '[35대생활질환] 인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[35대생활질환] 근육장애',
    items: [
      { num: '1', disease: '근염', code: 'M60' },
      { num: '2', disease: '근육의 석회화 및 골화', code: 'M61' },
      { num: '3', disease: '근육의 기타 장애', code: 'M62' },
      { num: '4', disease: '달리 분류된 질환에서의 근육장애', code: 'M63' }
    ]
  },
  {
    title: '[35대생활질환] 발바닥근막성 섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증', code: 'M72.2' }
    ]
  },
  {
    title: '[35대생활질환] 중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환', code: 'H65~H75' },
      { num: '2', disease: '중이염이 합병된 홍역(H67.1*)', code: 'B05.3+' },
      { num: '3', disease: '홍역후 중이염(H67.1*)', code: 'B05.3+' }
    ]
  },
  {
    title: '[35대생활질환] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[35대생활질환] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[35대생활질환] 눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '홍채섬모체염(H22.0*)', code: 'B00.50+' },
      { num: '3', disease: '홍채염(H22.0*)', code: 'B00.50+' },
      { num: '4', disease: '전방포도막염(H22.0*)', code: 'B00.50+' },
      { num: '5', disease: '각막염(H19.1*)', code: 'B00.51+' },
      { num: '6', disease: '각막결막염(H19.1*)', code: 'B00.51+' },
      { num: '7', disease: '각막상피염(H19.1*)', code: 'B00.51+' },
      { num: '8', disease: '간질각막염(H19.1*)', code: 'B00.51+' },
      { num: '9', disease: '각막내피염(H19.1*)', code: 'B00.51+' },
      { num: '10', disease: '아데노바이러스에 의한 각막결막염(H19.2*)', code: 'B30.0+' },
      { num: '11', disease: '유행성 각막결막염(H19.2*)', code: 'B30.0+' },
      { num: '12', disease: '조선소눈병(H19.2*)', code: 'B30.0+' },
      { num: '13', disease: '맥락막 및 망막의 장애 (황반 및 후극부의 변성 제외, 배경망막병증 및 망막혈관변화(고혈압성) 제외, 당뇨병성 망막병증 제외)', code: 'H30~H36 (H35.3제외, H36.0제외)' },
      { num: '14', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[35대생활질환] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염증후군', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의사구체장애 (당뇨병에서의 사구체장애 제외)', code: 'N08 (N08.3제외)' },
      { num: '10', disease: '사구체질환 동반(N08.5*)', code: 'M32.13+' }
    ]
  },
  {
    title: '[35대생활질환] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리 분류된 질환에서의신세뇨관-간질장애', code: 'N16' },
      { num: '8', disease: '세뇨관-간질신장병증 동반(N16.4*)', code: 'M32.13+' }
    ]
  },
  {
    title: '[35대생활질환] 방광의결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[35대생활질환] 신장 및 요관의 기타 장애',
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
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '비뇨계통의 기타 장애', code: 'N37' },
      { num: '6', disease: '칸디다 방광염 및 요도염(N37.0*)', code: 'B37.40+' },
      { num: '7', disease: '달리 분류된 질환에서의 요도장애 (결핵성 방광염(A18.11+)제외, 스트레스요실금 제외, 기타 명시된 요실금 제외)', code: 'N39 (N33.0제외, N39.3제외, N39.4제외)' }
    ]
  },
  {
    title: '[35대생활질환] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[35대생활질환] 특정 부위의 탈장',
    items: [
      { num: '1', disease: '대퇴탈장', code: 'K41' },
      { num: '2', disease: '배꼽탈장', code: 'K42' },
      { num: '3', disease: '복벽탈장', code: 'K43' },
      { num: '4', disease: '횡격막탈장', code: 'K44' },
      { num: '5', disease: '기타 복벽탈장', code: 'K45' },
      { num: '6', disease: '상세불명의 복벽탈장', code: 'K46' }
    ]
  },
  {
    title: '[35대생활질환] 비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[35대생활질환] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[35대생활질환] 복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환 (결핵성 복막염 제외)', code: 'K65~K67 (K67.3제외)' },
      { num: '2', disease: '기타 클라미디아질환(K67.0*)', code: 'A74.8+' }
    ]
  },
  {
    title: '[35대생활질환] 담낭담도 질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[35대생활질환] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등뼈증', code: 'M43' }
    ]
  },
  {
    title: '[35대생활질환] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[35대생활질환] 추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' },
      { num: '3', disease: '추간판 장애에서의 신경근 및 신경총 압박(M51.1+)', code: 'G55.1*' }
    ]
  },
  {
    title: '[35대생활질환] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[35대생활질환] 안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[35대생활질환] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의단일신경병증 (당뇨병성 단일신경병증 제외)', code: 'G59 (G59.0제외)' }
    ]
  },
  {
    title: '[35대생활질환] 특정 누적외상성 질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '달리 분류된 기타 질환에서의 각막염 및 각막', code: 'H19.3*' },
      { num: '3', disease: '결막염', code: 'M53.1' },
      { num: '4', disease: '경추상완증후군', code: 'M70~M79 (M74,M78 제외)' },
      { num: '5', disease: '기타 연조직장애 ((발바닥근막성 섬유종증 제외(M72.2제외)), (어깨병변 제외(M75제외)))', code: '' }
    ]
  },
  {
    title: '[35대생활질환] 윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막염 및 힘줄윤활막염', code: 'M65' },
      { num: '2', disease: '윤활막 및 힘줄의 자연파열', code: 'M66' },
      { num: '3', disease: '윤활막 및 힘줄의 기타 장애', code: 'M67' },
      { num: '4', disease: '달리 분류된 질환에서의 윤활막 및 힘줄의 장애', code: 'M68' }
    ]
  },
  {
    title: '[35대생활질환] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[35대생활질환] 위,십이지장질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[35대생활질환] 어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },

  // 【별표28】 치핵 분류표
  {
    title: '[치핵] 치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 (포함: 치질 / 제외: 출산 및 산후기 합병(O87.2), 임신 합병(O22.4))', code: 'K64' }
    ]
  }
];

// 하나손해보험 73대 질병수술 상단 요약 분류표 데이터
export const HANA_SURGERY_73_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  HANA_SURGERY_73_SECTIONS.forEach((sec) => {
    const match = sec.title.match(/^\[(.*?)\]\s*(.*)$/);
    const rawGroup = match ? match[1] : sec.title;
    const rawDisease = match ? match[2] : sec.title;
    const title = rawGroup.endsWith('수술비') ? rawGroup : `${rawGroup} 수술비`;
    const disease = rawDisease.trim();
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





