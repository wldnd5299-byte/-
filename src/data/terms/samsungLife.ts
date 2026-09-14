// Samsung Life terms data
// 【별표2】 통합암(전이포함) 분류표
// (초기유방암, 중증 이외 갑상선암, 기타피부암, 비침습 방광암 및 대장점막내암 제외)

export const SAMSUNG_LIFE_INTEGRATED_CANCER_SUMMARY = [
  { group: '그룹 1', title: '위·식도·대장암 및 기타암(전이포함)', diseases: '위·식도·대장암 및 기타암(전이포함)' },
  { group: '그룹 2', title: '간·담낭·담도암 및 췌장암(전이포함)', diseases: '간·담낭·담도암 및 췌장암(전이포함)' },
  { group: '그룹 3', title: '흉곽내기관·중피성암 및 연조직암(전이포함)', diseases: '흉곽내기관·중피성암 및 연조직암(전이포함)' },
  { group: '그룹 4', title: '골·피부 등 전신부위암(전이포함)', diseases: '골·피부 등 전신부위암(전이포함)' },
  { group: '그룹 5', title: '비뇨기·갑상선암 및 내분비선암(전이포함)', diseases: '비뇨기·갑상선암 및 내분비선암(전이포함)' },
  { group: '그룹 6', title: '여성·남성특정암(전이포함)', diseases: '여성·남성특정암(전이포함)' },
  { group: '그룹 7', title: '눈 및 뇌암(전이포함)', diseases: '눈 및 뇌암(전이포함)' },
  { group: '그룹 8', title: '혈액암 및 림프종', diseases: '혈액암 및 림프종' },
  { group: '그룹 9', title: '두경부암', diseases: '두경부암' }
];

export const SAMSUNG_LIFE_INTEGRATED_CANCER_SECTIONS = [
  {
    group: '그룹 1',
    title: '위·식도·대장암 및 기타암(전이포함)',
    items: [
      { disease: '식도의 악성 신생물', code: 'C15' },
      { disease: '위의 악성 신생물', code: 'C16' },
      { disease: '소장의 악성 신생물', code: 'C17' },
      { disease: '결장의 악성 신생물', code: 'C18' },
      { disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { disease: '직장의 악성 신생물', code: 'C20' },
      { disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 2',
    title: '간·담낭·담도암 및 췌장암(전이포함)',
    items: [
      { disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { disease: '담낭의 악성 신생물', code: 'C23' },
      { disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { disease: '췌장의 악성 신생물', code: 'C25' },
      { disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    group: '그룹 3',
    title: '흉곽내기관·중피성암 및 연조직암(전이포함)',
    items: [
      { disease: '후두의 악성 신생물', code: 'C32' },
      { disease: '기관의 악성 신생물', code: 'C33' },
      { disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { disease: '흉선의 악성 신생물', code: 'C37' },
      { disease: '심장 종격 및 흉막의 악성 신생물', code: 'C38' },
      { disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { disease: '중피종', code: 'C45' },
      { disease: '카포시육종', code: 'C46' },
      { disease: '말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' }
    ]
  },
  {
    group: '그룹 4',
    title: '골·피부 등 전신부위암(전이포함)',
    items: [
      { disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { disease: '피부의 악성 흑색종', code: 'C43' },
      { disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  },
  {
    group: '그룹 5',
    title: '비뇨기·갑상선암 및 내분비선암(전이포함)',
    items: [
      { disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { disease: '신우의 악성 신생물', code: 'C65' },
      { disease: '요관의 악성 신생물', code: 'C66' },
      { disease: '방광의 악성 신생물', code: 'C67' },
      { disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { disease: '갑상선의 악성 신생물', code: 'C73' },
      { disease: '부신의 악성 신생물', code: 'C74' },
      { disease: '기타 내분비선 및 관련 구조물의 악성 신생물', code: 'C75' },
      { disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    group: '그룹 6',
    title: '여성·남성특정암(전이포함)',
    items: [
      { disease: '유방의 악성 신생물', code: 'C50' },
      { disease: '유방의 이차성 악성 신생물', code: 'C79.80' },
      { disease: '외음의 악성 신생물', code: 'C51' },
      { disease: '질의 악성 신생물', code: 'C52' },
      { disease: '자궁경부의 악성 신생물', code: 'C53' },
      { disease: '자궁체부의 악성 신생물', code: 'C54' },
      { disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { disease: '난소의 악성 신생물', code: 'C56' },
      { disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { disease: '태반의 악성 신생물', code: 'C58' },
      { disease: '난소의 이차성 악성 신생물', code: 'C79.6' },
      { disease: '음경의 악성 신생물', code: 'C60' },
      { disease: '전립선의 악성 신생물', code: 'C61' },
      { disease: '고환의 악성 신생물', code: 'C62' },
      { disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 7',
    title: '눈 및 뇌암(전이포함)',
    items: [
      { disease: '눈 및 부속기의 악성 신생물', code: 'C69' },
      { disease: '수막의 악성 신생물', code: 'C70' },
      { disease: '뇌의 악성 신생물', code: 'C71' },
      { disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' }
    ]
  },
  {
    group: '그룹 8',
    title: '혈액암 및 림프종',
    items: [
      { disease: '호지킨림프종', code: 'C81' },
      { disease: '소포성 림프종', code: 'C82' },
      { disease: '비소포성 림프종', code: 'C83' },
      { disease: '성숙T/NK - 세포림프종', code: 'C84' },
      { disease: '기타 및 상세불명 유형의 비호지킨림프종', code: 'C85' },
      { disease: 'T/NK - 세포림프종의 기타 명시된 형태', code: 'C86' },
      { disease: '악성 면역증식성 질환', code: 'C88' },
      { disease: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { disease: '림프성 백혈병', code: 'C91' },
      { disease: '골수성 백혈병', code: 'C92' },
      { disease: '단핵구성 백혈병', code: 'C93' },
      { disease: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { disease: '상세불명 세포형의 백혈병', code: 'C95' },
      { disease: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' },
      { disease: '진성 적혈구증가증', code: 'D45' },
      { disease: '골수형성이상증후군', code: 'D46' },
      { disease: '만성 골수증식질환', code: 'D47.1' },
      { disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { disease: '골수섬유증', code: 'D47.4' },
      { disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  },
  {
    group: '그룹 9',
    title: '두경부암',
    items: [
      { disease: '입술의 악성 신생물', code: 'C00' },
      { disease: '혀뿌리의 악성 신생물', code: 'C01' },
      { disease: '혀의 기타 및 상세불명 부분의 악성 신생물', code: 'C02' },
      { disease: '잇몸의 악성 신생물', code: 'C03' },
      { disease: '입바닥의 악성 신생물', code: 'C04' },
      { disease: '구개의 악성 신생물', code: 'C05' },
      { disease: '입의 기타 및 상세불명 부분의 악성 신생물', code: 'C06' },
      { disease: '귀밑샘의 악성 신생물', code: 'C07' },
      { disease: '기타 및 상세불명의 주침샘의 악성 신생물', code: 'C08' },
      { disease: '편도의 악성 신생물', code: 'C09' },
      { disease: '입인두의 악성 신생물', code: 'C10' },
      { disease: '비인두의 악성 신생물', code: 'C11' },
      { disease: '이상동(梨狀洞)의 악성 신생물', code: 'C12' },
      { disease: '하인두의 악성 신생물', code: 'C13' },
      { disease: '입술, 구강 및 인두내의 기타 및 부위불명의 악성 신생물', code: 'C14' },
      { disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { disease: '부비동의 악성 신생물', code: 'C31' }
    ]
  }
];

// 【별표2】 통합양성신생물 분류표
export const SAMSUNG_LIFE_BENIGN_NEOPLASM_SUMMARY = [
  {
    category: '대장의 양성신생물 (6종)',
    diseases: [
      '상행결장의 양성 신생물',
      '횡행결장의 양성 신생물',
      '하행결장의 양성 신생물',
      '구불결장의 양성 신생물',
      '상세불명의 결장의 양성 신생물',
      '결장의 용종'
    ]
  },
  {
    category: '식도·결장·항문의 양성신생물 (9종)',
    diseases: [
      '맹장의 양성 신생물',
      '충수의 양성 신생물',
      '직장구불결장접합부의 양성 신생물',
      '직장의 양성 신생물',
      '항문 및 항문관의 양성 신생물',
      '직장용종',
      '식도의 양성 신생물',
      '기타 및 상세불명 부분 소장의 양성 신생물',
      '부위불명의 소화계통의 양성 신생물'
    ]
  },
  {
    category: '위·십이지장의 양성신생물 (3종)',
    diseases: [
      '위의 양성 신생물',
      '십이지장의 양성 신생물',
      '위 및 십이지장의 용종'
    ]
  },
  {
    category: '여성 및 남성 특정양성신생물 (12종)',
    diseases: [
      '흉곽내기관의 양성 지방종성 신생물',
      '복강내기관의 양성 지방종성 신생물',
      '정삭의 양성 지방종성 신생물',
      '기타 부위의 양성 지방종성 신생물',
      '상세불명의 양성 지방종성 신생물',
      '유방의 양성 신생물',
      '자궁의 평활근종',
      '자궁의 기타 양성 신생물',
      '난소의 양성 신생물',
      '기타 및 상세불명의 여성생식기관의 양성 신생물',
      '남성생식기관의 양성 신생물',
      '비뇨기관의 양성 신생물'
    ]
  },
  {
    category: '갑상선·두경부 양성신생물 (6종)',
    diseases: [
      '갑상선의 양성 신생물',
      '입인두의 기타 부분의 양성 신생물',
      '비인두의 양성 신생물',
      '하인두의 양성 신생물',
      '상세불명의 인두의 양성 신생물',
      '주침샘의 양성 신생물'
    ]
  },
  {
    category: '특정 기타부위 양성신생물 (18종)',
    diseases: [
      '흉선의 양성 신생물',
      '종격의 양성 신생물',
      '기타 명시된 흉곽내기관의 양성 신생물',
      '상세불명의 흉곽내기관의 양성 신생물',
      '골 및 관절연골의 양성 신생물',
      '림프관종, 모든 부위',
      '중피조직의 양성 신생물',
      '후복막 및 복막 연조직의 양성 신생물',
      '결합조직 및 기타 연조직의 기타 양성 신생물',
      '눈 및 부속기의 양성 신생물',
      '부신의 양성 신생물',
      '부갑상선의 양성 신생물',
      '경동맥소체의 양성 신생물',
      '대동맥소체 및 기타 부신경절의 양성 신생물',
      '기타 명시된 내분비선의 양성 신생물',
      '다선성 침범의 양성 신생물',
      '상세불명의 내분비선의 양성 신생물',
      '기타 및 상세불명 부위의 양성 신생물'
    ]
  },
  {
    category: '간·폐의 양성신생물 (9종)',
    diseases: [
      '간의 양성 신생물',
      '간외담관의 양성 신생물',
      '췌장의 양성 신생물',
      '내분비췌장의 양성 신생물',
      '중이, 비강 및 부비동의 양성 신생물',
      '후두의 양성 신생물',
      '기관의 양성 신생물',
      '기관지 및 폐의 양성 신생물',
      '상세불명의 호흡계통의 양성 신생물'
    ]
  },
  {
    category: '뇌·심장 양성신생물 (6종)',
    diseases: [
      '수막의 양성 신생물',
      '뇌 및 중추신경계통의 기타 부분의 양성 신생물',
      '뇌하수체의 양성 신생물',
      '두개인두관의 양성 신생물',
      '송과선의 양성 신생물',
      '심장의 양성 신생물'
    ]
  }
];

export const SAMSUNG_LIFE_BENIGN_NEOPLASM_SECTIONS = [
  {
    group: '그룹 1',
    title: '대장의 양성신생물',
    items: [
      { num: '1', disease: '상행결장의 양성 신생물', code: 'D12.2' },
      { num: '2', disease: '횡행결장의 양성 신생물', code: 'D12.3' },
      { num: '3', disease: '하행결장의 양성 신생물', code: 'D12.4' },
      { num: '4', disease: '구불결장의 양성 신생물', code: 'D12.5' },
      { num: '5', disease: '상세불명의 결장의 양성 신생물', code: 'D12.6' },
      { num: '6', disease: '결장의 용종', code: 'K63.5' }
    ]
  },
  {
    group: '그룹 2',
    title: '식도·결장·항문의 양성신생물',
    items: [
      { num: '1', disease: '맹장의 양성 신생물', code: 'D12.0' },
      { num: '2', disease: '충수의 양성 신생물', code: 'D12.1' },
      { num: '3', disease: '직장구불결장접합부의 양성 신생물', code: 'D12.7' },
      { num: '4', disease: '직장의 양성 신생물', code: 'D12.8' },
      { num: '5', disease: '항문 및 항문관의 양성 신생물', code: 'D12.9' },
      { num: '6', disease: '직장용종', code: 'K62.1' },
      { num: '7', disease: '식도의 양성 신생물', code: 'D13.0' },
      { num: '8', disease: '기타 및 상세불명 부분 소장의 양성 신생물', code: 'D13.3' },
      { num: '9', disease: '부위불명의 소화계통의 양성 신생물', code: 'D13.9' }
    ]
  },
  {
    group: '그룹 3',
    title: '위·십이지장의 양성신생물',
    items: [
      { num: '1', disease: '위의 양성 신생물', code: 'D13.1' },
      { num: '2', disease: '십이지장의 양성 신생물', code: 'D13.2' },
      { num: '3', disease: '위 및 십이지장의 용종', code: 'K31.7' }
    ]
  },
  {
    group: '그룹 4',
    title: '여성 및 남성 특정양성신생물',
    items: [
      { num: '1', disease: '흉곽내기관의 양성 지방종성 신생물', code: 'D17.4' },
      { num: '2', disease: '복강내기관의 양성 지방종성 신생물', code: 'D17.5' },
      { num: '3', disease: '정삭의 양성 지방종성 신생물', code: 'D17.6' },
      { num: '4', disease: '기타 부위의 양성 지방종성 신생물', code: 'D17.7' },
      { num: '5', disease: '상세불명의 양성 지방종성 신생물', code: 'D17.9' },
      { num: '6', disease: '유방의 양성 신생물', code: 'D24' },
      { num: '7', disease: '자궁의 평활근종', code: 'D25' },
      { num: '8', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '9', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '10', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '11', disease: '남성생식기관의 양성 신생물', code: 'D29' },
      { num: '12', disease: '비뇨기관의 양성 신생물', code: 'D30' }
    ]
  },
  {
    group: '그룹 5',
    title: '갑상선·두경부 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '입인두의 기타 부분의 양성 신생물', code: 'D10.5' },
      { num: '3', disease: '비인두의 양성 신생물', code: 'D10.6' },
      { num: '4', disease: '하인두의 양성 신생물', code: 'D10.7' },
      { num: '5', disease: '상세불명의 인두의 양성 신생물', code: 'D10.9' },
      { num: '6', disease: '주침샘의 양성 신생물', code: 'D11' }
    ]
  },
  {
    group: '그룹 6',
    title: '특정 기타부위 양성신생물',
    items: [
      { num: '1', disease: '흉선의 양성 신생물', code: 'D15.0' },
      { num: '2', disease: '종격의 양성 신생물', code: 'D15.2' },
      { num: '3', disease: '기타 명시된 흉곽내기관의 양성 신생물', code: 'D15.7' },
      { num: '4', disease: '상세불명의 흉곽내기관의 양성 신생물', code: 'D15.9' },
      { num: '5', disease: '골 및 관절연골의 양성 신생물', code: 'D16' },
      { num: '6', disease: '림프관종, 모든 부위', code: 'D18.1' },
      { num: '7', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '8', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '9', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' },
      { num: '10', disease: '눈 및 부속기의 양성 신생물', code: 'D31' },
      { num: '11', disease: '부신의 양성 신생물', code: 'D35.0' },
      { num: '12', disease: '부갑상선의 양성 신생물', code: 'D35.1' },
      { num: '13', disease: '경동맥소체의 양성 신생물', code: 'D35.5' },
      { num: '14', disease: '대동맥소체 및 기타 부신경절의 양성 신생물', code: 'D35.6' },
      { num: '15', disease: '기타 명시된 내분비선의 양성 신생물', code: 'D35.7' },
      { num: '16', disease: '다선성 침범의 양성 신생물', code: 'D35.8' },
      { num: '17', disease: '상세불명의 내분비선의 양성 신생물', code: 'D35.9' },
      { num: '18', disease: '기타 및 상세불명 부위의 양성 신생물', code: 'D36' }
    ]
  },
  {
    group: '그룹 7',
    title: '간·폐의 양성신생물',
    items: [
      { num: '1', disease: '간의 양성 신생물', code: 'D13.4' },
      { num: '2', disease: '간외담관의 양성 신생물', code: 'D13.5' },
      { num: '3', disease: '췌장의 양성 신생물', code: 'D13.6' },
      { num: '4', disease: '내분비췌장의 양성 신생물', code: 'D13.7' },
      { num: '5', disease: '중이, 비강 및 부비동의 양성 신생물', code: 'D14.0' },
      { num: '6', disease: '후두의 양성 신생물', code: 'D14.1' },
      { num: '7', disease: '기관의 양성 신생물', code: 'D14.2' },
      { num: '8', disease: '기관지 및 폐의 양성 신생물', code: 'D14.3' },
      { num: '9', disease: '상세불명의 호흡계통의 양성 신생물', code: 'D14.4' }
    ]
  },
  {
    group: '그룹 8',
    title: '뇌·심장 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' },
      { num: '2', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' },
      { num: '3', disease: '뇌하수체의 양성 신생물', code: 'D35.2' },
      { num: '4', disease: '두개인두관의 양성 신생물', code: 'D35.3' },
      { num: '5', disease: '송과선의 양성 신생물', code: 'D35.4' },
      { num: '6', disease: '심장의 양성 신생물', code: 'D15.1' }
    ]
  }
];

// 【별표5】 50대질병 상단 요약 분류표 데이터
export const SAMSUNG_LIFE_50_DISEASES_SUMMARY = [
  {
    category: "50대질병 (50종)",
    diseases: [
      "위·십이지장, 대장의 양성신생물",
      "특정 수면장애",
      "특정 정신질환",
      "이상지질혈증(고지혈증 포함)",
      "고혈압(원발성)",
      "요로결석",
      "디스크질환",
      "특정 귀어지럼증 및 돌발성 난청",
      "대상포진",
      "특정 백내장 및 수정체질환",
      "결핵[약제내성결핵(슈퍼결핵 포함) 제외]",
      "천식",
      "원형탈모증",
      "특정안면마비",
      "중이, 호흡계통, 흉곽내기관(심장 제외)의 양성신생물",
      "특정하지정맥류질환",
      "부정맥",
      "특정 눈염증",
      "특정 갑상선기능저하증",
      "일과성 뇌허혈발작",
      "주요 폐질환",
      "심장판막협착증(대동맥판막)",
      "통풍",
      "녹내장",
      "편마비",
      "욕창",
      "특정 소화계질환Ⅰ",
      "특정 소화계질환Ⅱ",
      "특정 기타 자가면역질환",
      "골, 관절연골의 양성신생물",
      "간염(B,C형)",
      "급성신우신염",
      "약제내성결핵(슈퍼결핵 포함)",
      "특정 관절병척추염Ⅱ",
      "간경변",
      "특정망막질환",
      "특정 호흡계질환",
      "특정천공",
      "특정 중추신경계질환",
      "주요심장염증질환",
      "패혈증",
      "뇌·심장의 양성신생물",
      "다발경화증",
      "크론병",
      "궤양성대장염",
      "뇌전증",
      "특정류마티스관절염",
      "특정 전신결합조직장애",
      "특정 심장질환",
      "심근병증"
    ]
  }
];

// 【별표5】 50대질병 세부 분류표 데이터
export const SAMSUNG_LIFE_50_DISEASES_SECTIONS = [
  {
    group: "50대질병",
    title: "[50대질병] 1. 위·십이지장, 대장의 양성신생물",
    items: [
      { num: "1", disease: "위의 양성신생물", code: "D13.1" },
      { num: "2", disease: "십이지장의 양성신생물", code: "D13.2" },
      { num: "3", disease: "위 및 십이지장의 용종", code: "K31.7" },
      { num: "4", disease: "맹장의 양성신생물", code: "D12.0" },
      { num: "5", disease: "충수의 양성신생물", code: "D12.1" },
      { num: "6", disease: "상행결장의 양성신생물", code: "D12.2" },
      { num: "7", disease: "횡행결장의 양성신생물", code: "D12.3" },
      { num: "8", disease: "하행결장의 양성신생물", code: "D12.4" },
      { num: "9", disease: "구불결장의 양성신생물", code: "D12.5" },
      { num: "10", disease: "상세불명의 결장의 양성신생물", code: "D12.6" },
      { num: "11", disease: "직장구불결장접합부의 양성신생물", code: "D12.7" },
      { num: "12", disease: "직장의 양성신생물", code: "D12.8" },
      { num: "13", disease: "직장용종", code: "K62.1" },
      { num: "14", disease: "결장의 용종", code: "K63.5" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 2. 특정 수면장애",
    items: [
      { num: "1", disease: "과다수면장애[과다수면]", code: "G47.1" },
      { num: "2", disease: "수면무호흡", code: "G47.3" },
      { num: "3", disease: "기면병 및 탈력발작", code: "G47.4" },
      { num: "4", disease: "비기질성 과다수면", code: "F51.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 3. 특정 정신질환",
    items: [
      { num: "1", disease: "우울에피소드", code: "F32" },
      { num: "2", disease: "재발성 우울장애", code: "F33" },
      { num: "3", disease: "광장공포증", code: "F40.0" },
      { num: "4", disease: "공황장애[간헐 발작성 불안]", code: "F41.0" },
      { num: "5", disease: "범불안장애", code: "F41.1" },
      { num: "6", disease: "강박장애", code: "F42" },
      { num: "7", disease: "외상후스트레스장애", code: "F43.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 4. 이상지질혈증(고지혈증 포함)",
    items: [
      { num: "1", disease: "지질단백질대사장애 및 기타 지질증", code: "E78" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 5. 고혈압(원발성)",
    items: [
      { num: "1", disease: "본태성(원발성) 고혈압", code: "I10" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 6. 요로결석",
    items: [
      { num: "1", disease: "신장 및 요관의 결석", code: "N20" },
      { num: "2", disease: "하부요로의 결석", code: "N21" },
      { num: "3", disease: "달리 분류된 질환에서의 요로의 결석", code: "N22" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 7. 디스크질환",
    items: [
      { num: "1", disease: "경추간판장애", code: "M50" },
      { num: "2", disease: "기타 추간판장애", code: "M51" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 8. 특정 귀어지럼증 및 돌발성 난청",
    items: [
      { num: "1", disease: "메니에르병", code: "H81.0" },
      { num: "2", disease: "양성 발작성 현기증", code: "H81.1" },
      { num: "3", disease: "전정신경세포염", code: "H81.2" },
      { num: "4", disease: "기타 말초성 현기증", code: "H81.3" },
      { num: "5", disease: "돌발성 특발성 청력소실", code: "H91.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 9. 대상포진",
    items: [
      { num: "1", disease: "대상포진", code: "B02" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 10. 특정 백내장 및 수정체질환",
    items: [
      { num: "1", disease: "모르가니형 노년백내장", code: "H25.2" },
      { num: "2", disease: "외상성 백내장", code: "H26.1" },
      { num: "3", disease: "합병백내장", code: "H26.2" },
      { num: "4", disease: "약물유발 백내장", code: "H26.3" },
      { num: "5", disease: "수정체의 탈구", code: "H27.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 11. 결핵[약제내성결핵(슈퍼결핵 포함) 제외]",
    items: [
      { num: "1", disease: "세균학적 및 조직학적으로 확인된 호흡기결핵", code: "A15" },
      { num: "2", disease: "세균학적으로나 조직학적으로 확인되지 않은 호흡기결핵", code: "A16" },
      { num: "3", disease: "신경계통의 결핵", code: "A17" },
      { num: "4", disease: "기타 기관의 결핵", code: "A18" },
      { num: "5", disease: "[M01.1* : 결핵관절염(A18.01†)]", code: "M01.1*" },
      { num: "6", disease: "[M49.0* : 척추의 결핵(A18.00†)]", code: "M49.0*" },
      { num: "7", disease: "[M90.0* : 뼈의 결핵(A18.02†)]", code: "M90.0*" },
      { num: "8", disease: "[N33.0* : 결핵성 방광염(A18.11†)]", code: "N33.0*" },
      { num: "9", disease: "[N74.0*,N74.1* : 여성생식기관의 결핵(A18.17†주))]\n주) A18.17†(여성생식기관의 결핵) 중 자궁경부의 결핵감염(N74.0*), 여성 결핵성 골반염증질환(N74.1*)에 한함", code: "N74.0*,N74.1*" },
      { num: "10", disease: "[K67.3* : 결핵성 복막염(A18.30†)]", code: "K67.3*" },
      { num: "11", disease: "[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-†)]", code: "K93.0*" },
      { num: "12", disease: "좁쌀결핵", code: "A19" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 12. 천식",
    items: [
      { num: "1", disease: "천식", code: "J45" },
      { num: "2", disease: "천식지속상태", code: "J46" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 13. 원형탈모증",
    items: [
      { num: "1", disease: "원형 탈모증", code: "L63" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 14. 특정안면마비",
    items: [
      { num: "1", disease: "벨마비", code: "G51.0" },
      { num: "2", disease: "슬신경절염", code: "G51.1" },
      { num: "3", disease: "멜커슨증후군", code: "G51.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 15. 중이, 호흡계통, 흉곽내기관(심장 제외)의 양성신생물",
    items: [
      { num: "1", disease: "중이 및 호흡계통의 양성 신생물", code: "D14" },
      { num: "2", disease: "기타 및 상세불명의 흉곽내기관의 양성 신생물 (심장의 양성신생물 제외)", code: "D15 (D15.1제외)" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 16. 특정하지정맥류질환",
    items: [
      { num: "1", disease: "궤양을 동반한 하지의 정맥류", code: "I83.0" },
      { num: "2", disease: "궤양과 염증을 동반한 하지의 정맥류", code: "I83.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 17. 부정맥",
    items: [
      { num: "1", disease: "발작성 빈맥", code: "I47" },
      { num: "2", disease: "심방세동 및 조동", code: "I48" },
      { num: "3", disease: "기타 심장부정맥", code: "I49" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 18. 특정 눈염증",
    items: [
      { num: "1", disease: "공막염", code: "H15.0" },
      { num: "2", disease: "상공막염", code: "H15.1" },
      { num: "3", disease: "홍채섬모체염", code: "H20" },
      { num: "4", disease: "맥락망막염증", code: "H30" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 19. 특정 갑상선기능저하증",
    items: [
      { num: "1", disease: "무증상 요오드결핍성 갑상선기능저하증", code: "E02" },
      { num: "2", disease: "기타 갑상선기능저하증", code: "E03" },
      { num: "3", disease: "자가면역성 갑상선염", code: "E06.3" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 20. 일과성 뇌허혈발작",
    items: [
      { num: "1", disease: "척추-뇌기저동맥증후군", code: "G45.0" },
      { num: "2", disease: "경동맥증후군(대뇌반구성)", code: "G45.1" },
      { num: "3", disease: "다발성 및 양쪽 뇌전동맥증후군", code: "G45.2" },
      { num: "4", disease: "일과성 흑암시", code: "G45.3" },
      { num: "5", disease: "기타 일과성 뇌허혈발작 및 관련 증후군", code: "G45.8" },
      { num: "6", disease: "상세불명의 일과성 뇌허혈발작", code: "G45.9" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 21. 주요 폐질환",
    items: [
      { num: "1", disease: "폐기종", code: "J43" },
      { num: "2", disease: "기타 만성 폐쇄성 폐질환", code: "J44" },
      { num: "3", disease: "기관지확장증", code: "J47" },
      { num: "4", disease: "달리 분류되지 않은 흉막삼출액", code: "J90" },
      { num: "5", disease: "달리 분류된 병태에서의 흉막삼출액", code: "J91" },
      { num: "6", disease: "흉막판", code: "J92" },
      { num: "7", disease: "기흉", code: "J93" },
      { num: "8", disease: "기타 흉막의 병태", code: "J94" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 22. 심장판막협착증(대동맥판막)",
    items: [
      { num: "1", disease: "류마티스성 대동맥판협착", code: "I06.0" },
      { num: "2", disease: "기능부전이 있는 류마티스성 대동맥판협착", code: "I06.2" },
      { num: "3", disease: "대동맥판협착", code: "I35.0" },
      { num: "4", disease: "기능부전을 동반한 대동맥판협착", code: "I35.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 23. 통풍",
    items: [
      { num: "1", disease: "통풍", code: "M10" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 24. 녹내장",
    items: [
      { num: "1", disease: "녹내장", code: "H40" },
      { num: "2", disease: "달리 분류된 질환에서의 녹내장", code: "H42" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 25. 편마비",
    items: [
      { num: "1", disease: "편마비", code: "G81" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 26. 욕창",
    items: [
      { num: "1", disease: "욕창궤양 및 압박부위", code: "L89" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 27. 특정 소화계질환Ⅰ",
    items: [
      { num: "1", disease: "[특정식도궤양] 출혈을 동반한 식도의 궤양", code: "K22.11" },
      { num: "2", disease: "[특정위궤양] 출혈이 있는 급성 위궤양", code: "K25.0" },
      { num: "3", disease: "[특정위궤양] 천공이 있는 급성 위궤양", code: "K25.1" },
      { num: "4", disease: "[특정위궤양] 출혈 및 천공이 모두 있는 급성 위궤양", code: "K25.2" },
      { num: "5", disease: "[특정십이지장궤양] 출혈이 있는 급성 십이지장궤양", code: "K26.0" },
      { num: "6", disease: "[특정십이지장궤양] 천공이 있는 급성 십이지장궤양", code: "K26.1" },
      { num: "7", disease: "[특정십이지장궤양] 출혈 및 천공이 모두 있는 급성 십이지장궤양", code: "K26.2" },
      { num: "8", disease: "[특정소화성궤양] 출혈이 있는 급성 상세불명 부위의 소화성 궤양", code: "K27.0" },
      { num: "9", disease: "[특정소화성궤양] 천공이 있는 급성 상세불명 부위의 소화성 궤양", code: "K27.1" },
      { num: "10", disease: "[특정소화성궤양] 출혈 및 천공이 모두 있는 급성 상세불명부위의 소화성 궤양", code: "K27.2" },
      { num: "11", disease: "[위공장궤양] 위공장궤양", code: "K28" },
      { num: "12", disease: "[특정위장염및결장염] 방사선에 의한 위장염 및 결장염", code: "K52.0" },
      { num: "13", disease: "[특정위장염및결장염] 독성 위장염 및 결장염", code: "K52.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 28. 특정 소화계질환Ⅱ",
    items: [
      { num: "1", disease: "[특정게실염] 천공 및 농양이 있는 소장의 게실병, 게실염", code: "K57.04" },
      { num: "2", disease: "[특정게실염] 천공 및 농양이 있는 대장의 게실병, 게실염", code: "K57.24" },
      { num: "3", disease: "[특정게실염] 천공 및 농양이 있는 소장과 대장 모두의 게실병, 게실염", code: "K57.44" },
      { num: "4", disease: "[특정게실염] 천공 및 농양이 있는 상세불명 부분의 장의 게실병, 게실염", code: "K57.84" },
      { num: "5", disease: "[충수질환] 급성 충수염", code: "K35" },
      { num: "6", disease: "[충수질환] 기타 충수염", code: "K36" },
      { num: "7", disease: "[충수질환] 상세불명의 충수염", code: "K37" },
      { num: "8", disease: "[충수질환] 충수의 기타 질환", code: "K38" },
      { num: "9", disease: "[복막질환] 복막염", code: "K65" },
      { num: "10", disease: "[복막질환] 복막의 기타 장애", code: "K66" },
      { num: "11", disease: "[기타장질환] 장의 혈관장애", code: "K55" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 29. 특정 기타 자가면역질환",
    items: [
      { num: "1", disease: "기타 혈전성향", code: "D68.6" },
      { num: "2", disease: "특발성 혈소판감소성 자반", code: "D69.3" },
      { num: "3", disease: "길랭-바레증후군", code: "G61.0" },
      { num: "4", disease: "중증근무력증", code: "G70.0" },
      { num: "5", disease: "람베르트-이튼증후군(C00-D48)", code: "G73.1" },
      { num: "6", disease: "자가면역성 간염", code: "K75.4" },
      { num: "7", disease: "보통천포창", code: "L10.0" },
      { num: "8", disease: "낙엽천포창", code: "L10.2" },
      { num: "9", disease: "수포성 유사천포창", code: "L12.0" },
      { num: "10", disease: "흉터유사천포창", code: "L12.1" },
      { num: "11", disease: "후천성 수포성 표피박리증", code: "L12.3" },
      { num: "12", disease: "전신적으로 발병된 연소성 관절염", code: "M08.2" },
      { num: "13", disease: "(혈청검사음성인) 연소성 다발관절염", code: "M08.3" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 30. 골, 관절연골의 양성신생물",
    items: [
      { num: "1", disease: "골 및 관절연골의 양성 신생물", code: "D16" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 31. 간염(B,C형)",
    items: [
      { num: "1", disease: "급성 B형간염", code: "B16" },
      { num: "2", disease: "만성 B형간염에서의 급성 델타(중복)감염", code: "B17.0" },
      { num: "3", disease: "급성 C형간염", code: "B17.1" },
      { num: "4", disease: "델타-병원체가 있는 만성 바이러스B형간염", code: "B18.0" },
      { num: "5", disease: "델타-병원체가 없는 만성 바이러스B형간염", code: "B18.1" },
      { num: "6", disease: "만성 바이러스C형간염", code: "B18.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 32. 급성신우신염",
    items: [
      { num: "1", disease: "급성 세뇨관-간질신장염", code: "N10" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 33. 약제내성결핵(슈퍼결핵 포함)",
    items: [
      { num: "1", disease: "다약제내성 결핵", code: "U84.30" },
      { num: "2", disease: "광범위약제내성 결핵", code: "U84.31" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 34. 특정 관절병척추염Ⅱ",
    items: [
      { num: "1", disease: "화농성 관절염", code: "M00" },
      { num: "2", disease: "달리 분류된 감염성 및 기생충성 질환에서의 관절의 직접감염(결핵관절염(A18.01) 제외)", code: "M01 (M01.1제외)" },
      { num: "3", disease: "반응성 관절병증", code: "M02" },
      { num: "4", disease: "달리 분류된 질환에서의 감염후 및 반응성 관절병증", code: "M03" },
      { num: "5", disease: "건선성 및 장병성 관절병증", code: "M07" },
      { num: "6", disease: "강직척추염", code: "M45" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 35. 간경변",
    items: [
      { num: "1", disease: "알코올성 간섬유증 및 간의 경화증", code: "K70.2" },
      { num: "2", disease: "알코올성 간경변증", code: "K70.3" },
      { num: "3", disease: "간의 섬유증 및 경변증을 동반한 독성간질환", code: "K71.7" },
      { num: "4", disease: "간의 섬유증 및 경변증", code: "K74" },
      { num: "5", disease: "간의 만성 수동울혈(심장성 간경화증)", code: "K76.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 36. 특정망막질환",
    items: [
      { num: "1", disease: "망막박리 및 망막열공", code: "H33" },
      { num: "2", disease: "황반 및 후극부의 변성", code: "H35.3" },
      { num: "3", disease: "망막층의 분리", code: "H35.7" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 37. 특정 호흡계질환",
    items: [
      { num: "1", disease: "[간질영향호흡기질환] 성인호흡곤란증후군", code: "J80" },
      { num: "2", disease: "[간질영향호흡기질환] 폐부종", code: "J81" },
      { num: "3", disease: "[간질영향호흡기질환] 달리 분류되지 않은 폐호산구증가", code: "J82" },
      { num: "4", disease: "[간질영향호흡기질환] 기타 간질성 폐질환", code: "J84" },
      { num: "5", disease: "[하기도화농괴사성질환] 폐 및 종격의 농양", code: "J85" },
      { num: "6", disease: "[하기도화농괴사성질환] 농흉", code: "J86" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 38. 특정천공",
    items: [
      { num: "1", disease: "식도의 천공", code: "K22.3" },
      { num: "2", disease: "장의 천공(비외상성)", code: "K63.1" },
      { num: "3", disease: "담낭의 천공", code: "K82.2" },
      { num: "4", disease: "담관의 천공", code: "K83.2" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 39. 특정 중추신경계질환",
    items: [
      { num: "1", disease: "[중추신경계 염증성질환] 기타 및 상세불명의 원인에 의한 수막염", code: "G03" },
      { num: "2", disease: "[중추신경계 염증성질환] 뇌염, 척수염 및 뇌척수염", code: "G04" },
      { num: "3", disease: "[중추신경계 염증성질환] 두개내 및 척추내 정맥염 및 혈전정맥염", code: "G08" },
      { num: "4", disease: "[두개·척추내 농양및육아종] 두개내 및 척추내 농양 및 육아종", code: "G06" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 40. 주요심장염증질환",
    items: [
      { num: "1", disease: "급성 심장막염", code: "I30" },
      { num: "2", disease: "심장막의 기타 질환", code: "I31" },
      { num: "3", disease: "달리 분류된 질환에서의 심장막염", code: "I32" },
      { num: "4", disease: "급성 및 아급성 심내막염", code: "I33" },
      { num: "5", disease: "상세불명 판막의 심내막염", code: "I38" },
      { num: "6", disease: "급성 심근염", code: "I40" },
      { num: "7", disease: "달리 분류된 질환에서의 심근염", code: "I41" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 41. 패혈증",
    items: [
      { num: "1", disease: "연쇄알균패혈증", code: "A40" },
      { num: "2", disease: "기타 패혈증", code: "A41" },
      { num: "3", disease: "패혈성 쇼크", code: "R57.2" },
      { num: "4", disease: "살모넬라패혈증", code: "A02.1" },
      { num: "5", disease: "패혈증형페스트", code: "A20.7" },
      { num: "6", disease: "탄저병패혈증", code: "A22.7" },
      { num: "7", disease: "에리시펠로트릭스 패혈증", code: "A26.7" },
      { num: "8", disease: "리스테리아패혈증", code: "A32.7" },
      { num: "9", disease: "방선균패혈증", code: "A42.7" },
      { num: "10", disease: "파종성 헤르페스바이러스병", code: "B00.7" },
      { num: "11", disease: "칸디다패혈증", code: "B37.7" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 42. 뇌·심장의 양성신생물",
    items: [
      { num: "1", disease: "수막의 양성 신생물", code: "D32" },
      { num: "2", disease: "뇌 및 중추신경계통의 기타 부분의 양성 신생물", code: "D33" },
      { num: "3", disease: "뇌하수체의 양성 신생물", code: "D35.2" },
      { num: "4", disease: "두개인두관의 양성 신생물", code: "D35.3" },
      { num: "5", disease: "송과선의 양성 신생물", code: "D35.4" },
      { num: "6", disease: "심장의 양성 신생물", code: "D15.1" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 43. 다발경화증",
    items: [
      { num: "1", disease: "다발경화증", code: "G35" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 44. 크론병",
    items: [
      { num: "1", disease: "크론병[국소성 장염]", code: "K50" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 45. 궤양성대장염",
    items: [
      { num: "1", disease: "궤양성 대장염", code: "K51" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 46. 뇌전증",
    items: [
      { num: "1", disease: "뇌전증", code: "G40" },
      { num: "2", disease: "뇌전증지속상태", code: "G41" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 47. 특정류마티스관절염",
    items: [
      { num: "1", disease: "혈청검사양성 류마티스관절염", code: "M05" },
      { num: "2", disease: "기타 류마티스관절염", code: "M06" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 48. 특정 전신결합조직장애",
    items: [
      { num: "1", disease: "결절성 다발동맥염 및 관련 병태", code: "M30" },
      { num: "2", disease: "기타 괴사성 혈관병증", code: "M31" },
      { num: "3", disease: "전신홍반루푸스", code: "M32" },
      { num: "4", disease: "피부다발근염", code: "M33" },
      { num: "5", disease: "전신경화증", code: "M34" },
      { num: "6", disease: "결합조직의 기타 전신침범", code: "M35" },
      { num: "7", disease: "달리 분류된 질환에서의 결합조직의 전신장애", code: "M36" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 49. 특정 심장질환",
    items: [
      { num: "1", disease: "인공소생에 성공한 심장정지", code: "I46.0" },
      { num: "2", disease: "심부전", code: "I50" }
    ]
  },
  {
    group: "50대질병",
    title: "[50대질병] 50. 심근병증",
    items: [
      { num: "1", disease: "심근병증", code: "I42" },
      { num: "2", disease: "달리 분류된 질환에서의 심근병증", code: "I43" }
    ]
  }
];

// 【별표2】 18대질병 상단 요약 분류표 데이터
export const SAMSUNG_LIFE_18_DISEASES_SUMMARY = [
  {
    category: "18대질병 (18종)",
    diseases: [
      "디스크질환",
      "대상포진",
      "천식",
      "원형탈모증",
      "부정맥",
      "주요 폐질환",
      "통풍",
      "욕창",
      "특정 소화계질환Ⅰ",
      "특정 소화계질환Ⅱ",
      "특정 호흡계질환",
      "주요심장염증질환",
      "패혈증",
      "뇌·심장의 양성신생물",
      "크론병",
      "궤양성대장염",
      "특정 심장질환",
      "심근병증"
    ]
  }
];

// 【별표2】 18대질병 세부 분류표 데이터
export const SAMSUNG_LIFE_18_DISEASES_SECTIONS = [
  {
    group: "18대질병",
    title: "[18대질병] 1. 디스크질환",
    items: [
      { num: "1", disease: "경추간판장애", code: "M50" },
      { num: "2", disease: "기타 추간판 장애", code: "M51" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 2. 대상포진",
    items: [
      { num: "1", disease: "대상포진", code: "B02" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 3. 천식",
    items: [
      { num: "1", disease: "천식", code: "J45" },
      { num: "2", disease: "천식지속상태", code: "J46" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 4. 원형탈모증",
    items: [
      { num: "1", disease: "원형탈모증", code: "L63" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 5. 부정맥",
    items: [
      { num: "1", disease: "발작성 빈맥", code: "I47" },
      { num: "2", disease: "심방세동 및 조동", code: "I48" },
      { num: "3", disease: "기타 심장부정맥", code: "I49" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 6. 주요 폐질환",
    items: [
      { num: "1", disease: "폐기종", code: "J43" },
      { num: "2", disease: "기타 만성 폐쇄성 폐질환", code: "J44" },
      { num: "3", disease: "기관지확장증", code: "J47" },
      { num: "4", disease: "달리 분류되지 않은 흉막삼출액", code: "J90" },
      { num: "5", disease: "달리 분류된 병태에서의 흉막삼출액", code: "J91" },
      { num: "6", disease: "흉막판", code: "J92" },
      { num: "7", disease: "기흉", code: "J93" },
      { num: "8", disease: "기타 흉막의 병태", code: "J94" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 7. 통풍",
    items: [
      { num: "1", disease: "통풍", code: "M10" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 8. 욕창",
    items: [
      { num: "1", disease: "욕창궤양 및 압박부위", code: "L89" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 9. 특정 소화계질환Ⅰ",
    items: [
      { num: "1", disease: "[특정식도궤양] 출혈을 동반한 식도의 궤양", code: "K22.11" },
      { num: "2", disease: "[특정위궤양] 출혈이 있는 급성 위궤양", code: "K25.0" },
      { num: "3", disease: "[특정위궤양] 천공이 있는 급성 위궤양", code: "K25.1" },
      { num: "4", disease: "[특정위궤양] 출혈 및 천공이 모두 있는 급성 위궤양", code: "K25.2" },
      { num: "5", disease: "[특정십이지장궤양] 출혈이 있는 급성 십이지장궤양", code: "K26.0" },
      { num: "6", disease: "[특정십이지장궤양] 천공이 있는 급성 십이지장궤양", code: "K26.1" },
      { num: "7", disease: "[특정십이지장궤양] 출혈 및 천공이 모두 있는 급성 십이지장궤양", code: "K26.2" },
      { num: "8", disease: "[특정소화성궤양] 출혈이 있는 급성 상세불명 부위의 소화성 궤양", code: "K27.0" },
      { num: "9", disease: "[특정소화성궤양] 천공이 있는 급성 상세불명 부위의 소화성 궤양", code: "K27.1" },
      { num: "10", disease: "[특정소화성궤양] 출혈 및 천공이 모두 있는 급성 상세불명부위의 소화성 궤양", code: "K27.2" },
      { num: "11", disease: "[위공장궤양] 위공장궤양", code: "K28" },
      { num: "12", disease: "[특정위장염및결장염] 방사선에 의한 위장염 및 결장염", code: "K52.0" },
      { num: "13", disease: "[특정위장염및결장염] 독성 위장염 및 결장염", code: "K52.1" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 10. 특정 소화계질환Ⅱ",
    items: [
      { num: "1", disease: "[특정게실염] 천공 및 농양이 있는 소장의 게실병, 게실염", code: "K57.04" },
      { num: "2", disease: "[특정게실염] 천공 및 농양이 있는 대장의 게실병, 게실염", code: "K57.24" },
      { num: "3", disease: "[특정게실염] 천공 및 농양이 있는 소장과 대장 모두의 게실병, 게실염", code: "K57.44" },
      { num: "4", disease: "[특정게실염] 천공 및 농양이 있는 상세불명 부분의 장의 게실병, 게실염", code: "K57.84" },
      { num: "5", disease: "[충수질환] 급성 충수염", code: "K35" },
      { num: "6", disease: "[충수질환] 기타 충수염", code: "K36" },
      { num: "7", disease: "[충수질환] 상세불명의 충수염", code: "K37" },
      { num: "8", disease: "[충수질환] 충수의 기타 질환", code: "K38" },
      { num: "9", disease: "[복막질환] 복막염", code: "K65" },
      { num: "10", disease: "[복막질환] 복막의 기타 장애", code: "K66" },
      { num: "11", disease: "[기타장질환] 장의 혈관장애", code: "K55" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 11. 특정 호흡계질환",
    items: [
      { num: "1", disease: "[간질영향호흡기질환] 성인호흡곤란증후군", code: "J80" },
      { num: "2", disease: "[간질영향호흡기질환] 폐부종", code: "J81" },
      { num: "3", disease: "[간질영향호흡기질환] 달리 분류되지 않은 폐호산구증가", code: "J82" },
      { num: "4", disease: "[간질영향호흡기질환] 기타 간질성 폐질환", code: "J84" },
      { num: "5", disease: "[하기도화농괴사성질환] 폐 및 종격의 농양", code: "J85" },
      { num: "6", disease: "[하기도화농괴사성질환] 농흉", code: "J86" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 12. 주요심장염증질환",
    items: [
      { num: "1", disease: "급성 심장막염", code: "I30" },
      { num: "2", disease: "심장막의 기타질환", code: "I31" },
      { num: "3", disease: "달리 분류된 질환에서의 심장막염", code: "I32" },
      { num: "4", disease: "급성 및 아급성 심내막염", code: "I33" },
      { num: "5", disease: "상세불명 판막의 심내막염", code: "I38" },
      { num: "6", disease: "급성 심근염", code: "I40" },
      { num: "7", disease: "달리 분류된 질환에서의 심근염", code: "I41" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 13. 패혈증",
    items: [
      { num: "1", disease: "연쇄알균 패혈증", code: "A40" },
      { num: "2", disease: "기타 패혈증", code: "A41" },
      { num: "3", disease: "패혈성 쇼크", code: "R57.2" },
      { num: "4", disease: "살모넬라 패혈증", code: "A02.1" },
      { num: "5", disease: "패혈증형 페스트", code: "A20.7" },
      { num: "6", disease: "탄저병 패혈증", code: "A22.7" },
      { num: "7", disease: "에리시펠로트릭스 패혈증", code: "A26.7" },
      { num: "8", disease: "리스테리아 패혈증", code: "A32.7" },
      { num: "9", disease: "방선균 패혈증", code: "A42.7" },
      { num: "10", disease: "파종성 헤르페스바이러스병", code: "B00.7" },
      { num: "11", disease: "칸디다 패혈증", code: "B37.7" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 14. 뇌·심장의 양성신생물",
    items: [
      { num: "1", disease: "수막의 양성 신생물", code: "D32" },
      { num: "2", disease: "뇌 및 중추신경계통의 기타 부분의 양성 신생물", code: "D33" },
      { num: "3", disease: "뇌하수체의 양성 신생물", code: "D35.2" },
      { num: "4", disease: "두개인두관의 양성 신생물", code: "D35.3" },
      { num: "5", disease: "송과선의 양성 신생물", code: "D35.4" },
      { num: "6", disease: "심장의 양성 신생물", code: "D15.1" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 15. 크론병",
    items: [
      { num: "1", disease: "크론병[국소성 장염]", code: "K50" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 16. 궤양성대장염",
    items: [
      { num: "1", disease: "궤양성 대장염", code: "K51" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 17. 특정 심장질환",
    items: [
      { num: "1", disease: "인공소생에 성공한 심장정지", code: "I46.0" },
      { num: "2", disease: "심부전", code: "I50" }
    ]
  },
  {
    group: "18대질병",
    title: "[18대질병] 18. 심근병증",
    items: [
      { num: "1", disease: "심근병증", code: "I42" },
      { num: "2", disease: "달리 분류된 질환에서의 심근병증", code: "I43" }
    ]
  }
];

