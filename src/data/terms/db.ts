// DB Insurance terms data
import { DbCancerTableItem } from "./types";

export const DB_CANCER_SECTIONS = [
  {
    title: '두경부암',
    items: [
      { num: '1', disease: '입술의 악성 신생물', code: 'C00' },
      { num: '2', disease: '혀뿌리의 악성 신생물', code: 'C01' },
      { num: '3', disease: '혀의 기타 및 상세불명의 악성 신생물', code: 'C02' },
      { num: '4', disease: '잇몸의 악성 신생물', code: 'C03' },
      { num: '5', disease: '입바닥의 악성 신생물', code: 'C04' },
      { num: '6', disease: '구개의 악성 신생물', code: 'C05' },
      { num: '7', disease: '입의 기타 및 상세불명의 악성 신생물', code: 'C06' },
      { num: '8', disease: '귀밑샘의 악성 신생물', code: 'C07' },
      { num: '9', disease: '기타 및 상세불명의 주침샘의 악성 신생물', code: 'C08' },
      { num: '10', disease: '편도의 악성 신생물', code: 'C09' },
      { num: '11', disease: '입인두의 악성 신생물', code: 'C10' },
      { num: '12', disease: '비인두의 악성 신생물', code: 'C11' },
      { num: '13', disease: '이상동()의 악성 신생물', code: 'C12' },
      { num: '14', disease: '하인두의 악성 신생물', code: 'C13' },
      { num: '15', disease: '입술, 구강 및 인두의 기타 및 부위불명의 악성 신생물', code: 'C14' },
      { num: '16', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '17', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '18', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    title: '위식도암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' }
    ]
  },
  {
    title: '소장대장항문 및 기타암',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' }
    ]
  },
  {
    title: '간담낭담도 및 췌장암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부위의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' }
    ]
  },
  {
    title: '흉곽내기관중피성 및 연조직암',
    items: [
      { num: '1', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '2', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '3', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '6', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '7', disease: '중피종', code: 'C45' },
      { num: '8', disease: '카포시육종', code: 'C46' },
      { num: '9', disease: '말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { num: '10', disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { num: '11', disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' }
    ]
  },
  {
    title: '골피부 등 전신부위암',
    items: [
      { num: '1', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '2', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '3', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '이차성 및 상세불명 부위의 악성 신생물', code: 'C77~C80' },
      { num: '6', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  },
  {
    title: '유방비뇨기관부신 및 내분비선암',
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
    title: '(남성의 경우) 남성생식기암',
    items: [
      { num: '1', disease: '음경의 악성 신생물', code: 'C60' },
      { num: '2', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '3', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '4', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' }
    ]
  },
  {
    title: '(여성의 경우) 여성생식기암',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '4', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '5', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '6', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '7', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '8', disease: '태반의 악성 신생물', code: 'C58' }
    ]
  },
  {
    title: '뇌 및 중추신경계통암',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' }
    ]
  },
  {
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
      { num: '18', disease: '본태성(출혈성) 혈소판증', code: 'D47.3' },
      { num: '19', disease: '골수섬유증', code: 'D47.4' },
      { num: '20', disease: '만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  }
];

// DB손해보험 통합전이암 분류표 데이터
export const DB_CANCER_METASTASIS_SECTIONS = [
  {
    title: '위암 및 식도암의 전이암',
    items: [
      { num: '1', disease: '위의 이차성 악성 신생물', code: 'C78.80' }
    ]
  },
  {
    title: '소장대장항문암 및 기타암의 전이암',
    items: [
      { num: '1', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '2', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '3', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '4', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '5', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    title: '간담낭담도암 및 췌장암의 전이암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '2', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    title: '흉곽내기관중피성암 및 연조직암의 전이암',
    items: [
      { num: '1', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '2', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '3', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '4', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { num: '5', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' }
    ]
  },
  {
    title: '골피부 등 전신부위암의 전이암',
    items: [
      { num: '1', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { num: '2', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '3', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '4', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '5', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '6', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' }
    ]
  },
  {
    title: '유방비뇨기관부신암 및 내분비선암의 전이암',
    items: [
      { num: '1', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '2', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '3', disease: '유방의 이차성 악성 신생물', code: 'C79.80' },
      { num: '4', disease: '부신의 이차성 악성 신생물', code: 'C79.7' }
    ]
  },
  {
    title: '(남성의 경우) 남성생식기암의 전이암',
    items: [
      { num: '1', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    title: '(여성의 경우) 여성생식기암의 전이암',
    items: [
      { num: '1', disease: '난소의 이차성 악성 신생물', code: 'C79.6' },
      { num: '2', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    title: '뇌막 및 중추신경계통암의 전이암',
    items: [
      { num: '1', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '2', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' }
    ]
  }
];

// KB손해보험 별표115 통합암(유사암제외) 분류표

export const DB_11_SPECIFIC_CANCER_ITEMS: DbCancerTableItem[] = [
  { num: '1', name: '식도의 악성신생물', code: 'C15' },
  { num: '2', name: '췌장의 악성신생물', code: 'C25' },
  {
    num: '3',
    name: '골 및 관절연골의 악성신생물',
    code: 'C40 ~ C41',
    subItems: [
      { name: '사지의 골 및 관절연골의 악성신생물', code: 'C40' },
      { name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41' }
    ]
  },
  {
    num: '4',
    name: '뇌 및 중추신경계통의 기타부분의 악성신생물',
    code: 'C70 ~ C72',
    subItems: [
      { name: '수막의 악성신생물', code: 'C70' },
      { name: '뇌의 악성신생물', code: 'C71' },
      { name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72' }
    ]
  },
  {
    num: '5',
    name: '림프, 조혈 및 관련조직의 악성신생물',
    code: 'C81 ~ C96, D47.1, D47.5',
    subItems: [
      { name: '호지킨림프종', code: 'C81' },
      { name: '소포성 림프종', code: 'C82' },
      { name: '비소포성 림프종', code: 'C83' },
      { name: '성숙 T/NK-세포림프종', code: 'C84' },
      { name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
      { name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { name: '악성 면역증식성 질환', code: 'C88' },
      { name: '다발골수종 및 악성 형질세포 신생물', code: 'C90' },
      { name: '림프성 백혈병', code: 'C91' },
      { name: '골수성 백혈병', code: 'C92' },
      { name: '단핵구성 백혈병', code: 'C93' },
      { name: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { name: '상세불명 세포형의 백혈병', code: 'C95' },
      { name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96' },
      { name: '만성 골수증식질환', code: 'D47.1' },
      { name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  },
  { num: '6', name: '간 및 간내 담관의 악성신생물', code: 'C22' },
  { num: '7', name: '담낭의 악성신생물', code: 'C23' },
  { num: '8', name: '담도의 기타 및 상세불명 부분의 악성신생물', code: 'C24' },
  { num: '9', name: '기관의 악성신생물', code: 'C33' },
  { num: '10', name: '기관지 및 폐의 악성신생물', code: 'C34' },
  { num: '11', name: '소장의 악성신생물', code: 'C17' }
];

export const DB_11_SPECIFIC_CANCER_UNROLLED = [
  { num: '1', name: '식도의 악성신생물', code: 'C15', isSub: false },
  { num: '2', name: '췌장의 악성신생물', code: 'C25', isSub: false },
  { num: '3', name: '골 및 관절연골의 악성신생물', code: 'C40 ~ C41', isSub: false, isGroupHeader: true },
  { num: '', name: '사지의 골 및 관절연골의 악성신생물', code: 'C40', isSub: true },
  { num: '', name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41', isSub: true },
  { num: '4', name: '뇌 및 중추신경계통의 기타부분의 악성신생물', code: 'C70 ~ C72', isSub: false, isGroupHeader: true },
  { num: '', name: '수막의 악성신생물', code: 'C70', isSub: true },
  { num: '', name: '뇌의 악성신생물', code: 'C71', isSub: true },
  { num: '', name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72', isSub: true },
  { num: '5', name: '림프, 조혈 및 관련조직의 악성신생물', code: 'C81 ~ C96, D47.1, D47.5', isSub: false, isGroupHeader: true },
  { num: '', name: '호지킨림프종', code: 'C81', isSub: true },
  { num: '', name: '소포성 림프종', code: 'C82', isSub: true },
  { num: '', name: '비소포성 림프종', code: 'C83', isSub: true },
  { num: '', name: '성숙 T/NK-세포림프종', code: 'C84', isSub: true },
  { num: '', name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85', isSub: true },
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


export const DB_HIGH_COST_CANCER_ITEMS: DbCancerTableItem[] = [
  { num: '1', name: '식도의 악성신생물', code: 'C15' },
  { num: '2', name: '췌장의 악성신생물', code: 'C25' },
  {
    num: '3',
    name: '골 및 관절연골의 악성신생물',
    code: 'C40 ~ C41',
    subItems: [
      { name: '사지의 골 및 관절연골의 악성신생물', code: 'C40' },
      { name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41' }
    ]
  },
  {
    num: '4',
    name: '뇌 및 중추신경계통의 기타부분의 악성신생물',
    code: 'C70 ~ C72',
    subItems: [
      { name: '수막의 악성신생물', code: 'C70' },
      { name: '뇌의 악성신생물', code: 'C71' },
      { name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72' }
    ]
  },
  {
    num: '5',
    name: '림프, 조혈 및 관련조직의 악성신생물',
    code: 'C81 ~ C96',
    subItems: [
      { name: '호지킨림프종', code: 'C81' },
      { name: '소포성 림프종', code: 'C82' },
      { name: '비소포성 림프종', code: 'C83' },
      { name: '성숙 T/NK-세포림프종', code: 'C84' },
      { name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
      { name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { name: '악성 면역증식성 질환', code: 'C88' },
      { name: '다발골수종 및 악성 형질세포 신생물', code: 'C90' },
      { name: '림프성 백혈병', code: 'C91' },
      { name: '골수성 백혈병', code: 'C92' },
      { name: '단핵구성 백혈병', code: 'C93' },
      { name: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { name: '상세불명 세포형의 백혈병', code: 'C95' },
      { name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96' },
      { name: '만성 골수증식질환', code: 'D47.1' },
      { name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  }
];

export const DB_HIGH_COST_CANCER_UNROLLED = [
  { num: '1', name: '식도의 악성신생물', code: 'C15', isSub: false },
  { num: '2', name: '췌장의 악성신생물', code: 'C25', isSub: false },
  { num: '3', name: '골 및 관절연골의 악성신생물', code: 'C40 ~ C41', isSub: false, isGroupHeader: true },
  { num: '', name: '사지의 골 및 관절연골의 악성신생물', code: 'C40', isSub: true },
  { num: '', name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41', isSub: true },
  { num: '4', name: '뇌 및 중추신경계통의 기타부분의 악성신생물', code: 'C70 ~ C72', isSub: false, isGroupHeader: true },
  { num: '', name: '수막의 악성신생물', code: 'C70', isSub: true },
  { num: '', name: '뇌의 악성신생물', code: 'C71', isSub: true },
  { num: '', name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72', isSub: true },
  { num: '5', name: '림프, 조혈 및 관련조직의 악성신생물', code: 'C81 ~ C96', isSub: false, isGroupHeader: true },
  { num: '', name: '호지킨림프종', code: 'C81', isSub: true },
  { num: '', name: '소포성 림프종', code: 'C82', isSub: true },
  { num: '', name: '비소포성 림프종', code: 'C83', isSub: true },
  { num: '', name: '성숙 T/NK-세포림프종', code: 'C84', isSub: true },
  { num: '', name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85', isSub: true },
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


export const DB_11_SPECIFIC_CANCER_SECTIONS = [
  {
    title: '[별표24] 11대특정암 분류표',
    items: DB_11_SPECIFIC_CANCER_UNROLLED.map(item => ({
      num: item.num,
      disease: item.isSub ? `- ${item.name}` : item.name,
      code: item.code
    }))
  }
];

export const DB_HIGH_COST_CANCER_SECTIONS = [
  {
    title: '[별표25] 고액치료비암 분류표',
    items: DB_HIGH_COST_CANCER_UNROLLED.map(item => ({
      num: item.num,
      disease: item.isSub ? `- ${item.name}` : item.name,
      code: item.code
    }))
  }
];


export const HEART_GROUPS = [
  { group: '그룹 1', name: '급성 심근경색증', codes: 'I21, I22', diseases: '급성 전벽/후벽 심근경색증, 후속 심근경색증', payout: '가입금액 100% 지급' },
  { group: '그룹 2', name: '협심증 및 허혈성 심장질환', codes: 'I20, I24, I25', diseases: '안정형 협심증, 변이형 협심증, 만성 허혈성 심장병', payout: '가입금액 100% 지급' },
  { group: '그룹 3', name: '부정맥 및 서맥성 질환', codes: 'I47, I48, I49', diseases: '발작성 빈맥, 심방세동 및 조동, 기타 심장부정맥', payout: '가입금액 100% 지급' },
  { group: '그룹 4', name: '심부전 및 심내막염, 심근병증', codes: 'I30, I33, I42, I50', diseases: '급성 심낭염, 만성 심부전, 확장성 심근병증', payout: '가입금액 100% 지급' },
  { group: '그룹 5', name: '심장 판막 및 선천적 기형', codes: 'I34~I38, Q20~Q24', diseases: '승모판 및 대동맥판 장애, 선천적 심장 중격 결손', payout: '가입금액 100% 지급' }
];

// DB손해보험 통합형 심장관련질환 I 요약 및 세부분류표 데이터
export const DB_HEART_I_SUMMARY = [
  {
    group: '<세해보장 - 1>',
    title: '급성심근경색증',
    category: '<세해보장 - 1> 급성심근경색증',
    diseases: '급성심근경색증(I21), 후속 심근경색증(I22), 급성심근경색증 후 특정 현존 합병증(I23)'
  },
  {
    group: '<세해보장 - 2>',
    title: '허혈심장질환(급성심근경색증제외)',
    category: '<세해보장 - 2> 허혈심장질환(급성심근경색증제외)',
    diseases: '협심증(I20), 기타 급성 허혈심장질환(I24), 만성 허혈심장병(I25)'
  }
];

export const DB_HEART_I_SECTIONS = [
  {
    title: '<세해보장 - 1> 급성심근경색증',
    items: [
      { num: '1', disease: '급성심근경색증', code: 'I21' },
      { num: '2', disease: '후속 심근경색증', code: 'I22' },
      { num: '3', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' }
    ]
  },
  {
    title: '<세해보장 - 2> 허혈심장질환(급성심근경색증제외)',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', code: 'I25' }
    ]
  }
];

// DB손해보험 통합형 심장관련질환 II 요약 및 세부분류표 데이터
export const DB_HEART_II_SUMMARY = [
  {
    group: '<세해보장 - 1>',
    title: '주요심장염증질환',
    category: '<세해보장 - 1> 주요심장염증질환',
    diseases: '급성 심장막염(I30), 심장막의 기타질환(I31), 달리 분류된 질환에서의 심장막염(I32), 급성 및 아급성 심내막염(I33), 상세불명 판막의 심내막염(I38), 급성 심근염(I40), 달리 분류된 질환에서의 심근염(I41)'
  },
  {
    group: '<세해보장 - 2>',
    title: '심근병증',
    category: '<세해보장 - 2> 심근병증',
    diseases: '심근병증(I42), 달리 분류된 질환에서의 심근병증(I43)'
  },
  {
    group: '<세해보장 - 3>',
    title: '특정3대심장질환',
    category: '<세해보장 - 3> 특정3대심장질환',
    diseases: '인공소생에 성공한 심장정지(I46.0), 발작성 빈맥(I47), 심방세동 및 조동(I48), 기타 심장부정맥(I49), 심부전(I50)'
  },
  {
    group: '<세해보장 - 4>',
    title: '심장판막질환',
    category: '<세해보장 - 4> 심장판막질환',
    diseases: '비류마티스성 승모판장애(I34), 비류마티스성 대동맥판장애(I35), 비류마티스성 삼천판장애(I36), 폐동맥판장애(I37), 달리분류된 질환에서의 심내막염 및 심장판막장애(I39)'
  },
  {
    group: '<세해보장 - 5>',
    title: '류마티스심장질환',
    category: '<세해보장 - 5> 류마티스심장질환',
    diseases: '류마티스성 승모판질환(I05), 류마티스성 대동맥판질환(I06), 류마티스성 삼천판질환(I07), 다발판막질환(I08), 기타 류마티스심장질환(I09)'
  }
];

export const DB_HEART_II_SECTIONS = [
  {
    title: '<세해보장 - 1> 주요심장염증질환',
    items: [
      { num: '1', disease: '급성 심장막염', code: 'I30' },
      { num: '2', disease: '심장막의 기타질환', code: 'I31' },
      { num: '3', disease: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { num: '4', disease: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '5', disease: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '6', disease: '급성 심근염', code: 'I40' },
      { num: '7', disease: '달리 분류된 질환에서의 심근염', code: 'I41' }
    ]
  },
  {
    title: '<세해보장 - 2> 심근병증',
    items: [
      { num: '1', disease: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', code: 'I43' }
    ]
  },
  {
    title: '<세해보장 - 3> 특정3대심장질환',
    items: [
      { num: '1', disease: '인공소생에 성공한 심장정지', code: 'I46.0' },
      { num: '2', disease: '발작성 빈맥', code: 'I47' },
      { num: '3', disease: '심방세동 및 조동', code: 'I48' },
      { num: '4', disease: '기타 심장부정맥', code: 'I49' },
      { num: '5', disease: '심부전', code: 'I50' }
    ]
  },
  {
    title: '<세해보장 - 4> 심장판막질환',
    items: [
      { num: '1', disease: '비류마티스성 승모판장애', code: 'I34' },
      { num: '2', disease: '비류마티스성 대동맥판장애', code: 'I35' },
      { num: '3', disease: '비류마티스성 삼천판장애', code: 'I36' },
      { num: '4', disease: '폐동맥판장애', code: 'I37' },
      { num: '5', disease: '달리분류된 질환에서의 심내막염 및 심장판막장애', code: 'I39' }
    ]
  },
  {
    title: '<세해보장 - 5> 류마티스심장질환',
    items: [
      { num: '1', disease: '류마티스성 승모판질환', code: 'I05' },
      { num: '2', disease: '류마티스성 대동맥판질환', code: 'I06' },
      { num: '3', disease: '류마티스성 삼천판질환', code: 'I07' },
      { num: '4', disease: '다발판막질환', code: 'I08' },
      { num: '5', disease: '기타 류마티스심장질환', code: 'I09' }
    ]
  }
];

// DB손해보험 통합형 뇌관련질환 I 요약 및 세부분류표 데이터
export const DB_BRAIN_I_SUMMARY = [
  {
    group: '<세해보장 - 1>',
    title: '뇌졸중',
    category: '<세해보장 - 1> 뇌졸중',
    diseases: '거미막하 출혈(I60), 뇌내출혈(I61), 기타 비외상성 두개내 출혈(I62), 뇌경색증(I63), 뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착(I65), 뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착(I66)'
  },
  {
    group: '<세해보장 - 2>',
    title: '뇌혈관질환(뇌졸중제외)',
    category: '<세해보장 - 2> 뇌혈관질환(뇌졸중제외)',
    diseases: '출혈 또는 경색증으로 명시되지 않은 뇌졸중(I64), 기타 뇌혈관 질환(I67), 달리 분류된 질환에서의 뇌혈관장애(I68), 뇌혈관질환의 후유증(I69)'
  }
];

export const DB_BRAIN_I_SECTIONS = [
  {
    title: '<세해보장 - 1> 뇌졸중',
    items: [
      { num: '1', disease: '거미막하 출혈', code: 'I60' },
      { num: '2', disease: '뇌내출혈', code: 'I61' },
      { num: '3', disease: '기타 비외상성 두개내 출혈', code: 'I62' },
      { num: '4', disease: '뇌경색증', code: 'I63' },
      { num: '5', disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { num: '6', disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' }
    ]
  },
  {
    title: '<세해보장 - 2> 뇌혈관질환(뇌졸중제외)',
    items: [
      { num: '1', disease: '출혈 또는 경색증으로 명시되지 않은 뇌졸중', code: 'I64' },
      { num: '2', disease: '기타 뇌혈관 질환', code: 'I67' },
      { num: '3', disease: '달리 분류된 질환에서의 뇌혈관장애', code: 'I68' },
      { num: '4', disease: '뇌혈관질환의 후유증', code: 'I69' }
    ]
  }
];

// DB손해보험 통합형 뇌관련질환 II 요약 및 세부분류표 데이터
export const DB_BRAIN_II_SUMMARY = [
  {
    group: '<세해보장 - 1>',
    title: '파킨슨병',
    category: '<세해보장 - 1> 파킨슨병',
    diseases: '파킨슨병(G20), 파킨슨병에서의 치매(G20†)(F02.3)'
  },
  {
    group: '<세해보장 - 2>',
    title: '뇌전증',
    category: '<세해보장 - 2> 뇌전증',
    diseases: '뇌전증(G40), 뇌전증지속상태(G41)'
  },
  {
    group: '<세해보장 - 3>',
    title: '주요상해뇌출혈',
    category: '<세해보장 - 3> 주요상해뇌출혈',
    diseases: '경막외출혈(S06.4), 외상성 경막하출혈(S06.5), 외상성 거미막하출혈(S06.6)'
  }
];

export const DB_BRAIN_II_SECTIONS = [
  {
    title: '<세해보장 - 1> 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '파킨슨병에서의 치매(G20†)', code: 'F02.3' }
    ]
  },
  {
    title: '<세해보장 - 2> 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '<세해보장 - 3> 주요상해뇌출혈',
    items: [
      { num: '1', disease: '경막외출혈', code: 'S06.4' },
      { num: '2', disease: '외상성 경막하출혈', code: 'S06.5' },
      { num: '3', disease: '외상성 거미막하출혈', code: 'S06.6' }
    ]
  }
];

// DB손해보험 심장질환진단비(I/II/III) 분류표 데이터
export const DB_HEART_SPECIFIC_I_SECTIONS = [
  {
    title: '심장질환(특정 I)',
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
      { num: '10', disease: '달리 분류된 질환에서의 심근염', code: 'I41' }
    ]
  }
];

export const DB_HEART_SPECIFIC_II_SECTIONS = [
  {
    title: '심장질환(특정 II)',
    items: [
      { num: '1', disease: '급성 심근경색증', code: 'I21' },
      { num: '2', disease: '후속 심근경색증', code: 'I22' },
      { num: '3', disease: '급성 심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '4', disease: '인공소생에 성공한 심장정지', code: 'I46.0' }
    ]
  }
];

export const DB_HEART_SPECIFIC_III_SECTIONS = [
  {
    title: '심장질환(특정 III)',
    items: [
      { num: '1', disease: '비류마티스성 승모판장애', code: 'I34' },
      { num: '2', disease: '비류마티스성 대동맥판장애', code: 'I35' },
      { num: '3', disease: '비류마티스성 삼천판장애', code: 'I36' },
      { num: '4', disease: '폐동맥판장애', code: 'I37' },
      { num: '5', disease: '달리분류된 질환에서의 심내막염 및 심장판막장애', code: 'I39' },
      { num: '6', disease: '발작성 빈맥', code: 'I47' },
      { num: '7', disease: '심방세동 및 조동', code: 'I48' },
      { num: '8', disease: '심부전', code: 'I50' }
    ]
  }
];

export const DB_HEART_SIMPLE_SECTIONS = [
  ...DB_HEART_SPECIFIC_I_SECTIONS,
  ...DB_HEART_SPECIFIC_II_SECTIONS,
  ...DB_HEART_SPECIFIC_III_SECTIONS
];

// 3. Brain Groups Data
export const BRAIN_GROUPS = [
  { group: '그룹 1', name: '뇌출혈 (지주막하, 뇌내)', codes: 'I60, I61, I62', diseases: '거미막밑 출혈, 뇌내출혈, 기타 비외상성 머리속 출혈', payout: '가입금액 100% 지급' },
  { group: '그룹 2', name: '뇌경색증', codes: 'I63', diseases: '뇌동맥 폐색 및 협착으로 인한 뇌경색증', payout: '가입금액 100% 지급' },
  { group: '그룹 3', name: '뇌졸중 (뇌출혈+뇌경색)', codes: 'I60 ~ I63', diseases: '뇌출혈 및 뇌경색증의 급성기 전체 합산', payout: '가입금액 100% 지급' },
  { group: '그룹 4', name: '기타 뇌혈관 질환 (뇌동맥류)', codes: 'I67, I68', diseases: '비파열성 대뇌동맥류, 모야모야병, 대뇌동맥경화증', payout: '가입금액 100% 지급' },
  { group: '그룹 5', name: '뇌혈관 질환의 후유증', codes: 'I69', diseases: '뇌출혈 또는 뇌경색 후유증으로 인한 중추 마비/장해', payout: '가입금액 100% 지급' },
  { group: '그룹 6', name: '대동맥류 및 박리', codes: 'I71', diseases: '흉부 대동맥류, 복부 대동맥류, 대동맥 내막 박리증', payout: '가입금액 100% 지급' }
];

// DB손해보험 13대 질병수술 분류표 데이터

export const DB_SURGERY_13_SECTIONS = [
  {
    title: '당뇨병질환',
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병\n[A39.5† : 수막구균성 심장병 등((I32.0*,I39.8*,I41.0*,I52.0*))]\n[B37.6† : 칸디다심내막염]', code: 'I30~I52\nA39.5†\nB37.6†' }
    ]
  },
  {
    title: '고혈압질환',
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
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환\n[B25.1† : 거대세포바이러스간염(K77.0*)]\n[B58.1† : 톡소포자충간염(K77.0*)]', code: 'K70~K77\nB25.1†\nB58.1†' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애\n[H06.2* : 갑상선이상성 안구돌출(E05.0+)]', code: 'E00~E07\nH06.2*' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴\n[B25.0† : 거대세포바이러스폐렴(J17.1*)]\n[B05.2† : 폐렴이 합병된 홍역(J17.1*)]\n[B01.2† : 수두폐렴(J17.1*)]\n[B58.3† : 폐톡소포자충증(J17.3*)]', code: 'J17\nB25.0†\nB05.2†\nB01.2†\nB58.3†' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵\n[M01.1* : 결핵관절염(A18.01+)]\n[M49.0* : 척추의 결핵(A18.00+)]\n[M90.0* : 뼈의 결핵(A18.02+)]\n[N33.0* : 결핵성 방광염(A18.11+)]\n[N74.0* : 자궁경부의 결핵감염(A18.15+)]\n[N74.1* : 여성 결핵성 골반염증질환(A18.16+)]\n[K67.3* : 결핵성 복막염(A18.30+)]\n[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)]', code: 'A15~A19\nM01.1*\nM49.0*\nM90.0*\nN33.0*\nN74.0*\nN74.1*\nK67.3*\nK93.0*' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  }
];

// DB손해보험 16대 질병수술 분류표 데이터
export const DB_SURGERY_16_SECTIONS = [
  {
    title: '당뇨병',
    items: [
      { num: '1', disease: '당뇨병', code: 'E10 ~ E14' }
    ]
  },
  {
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    title: '고혈압',
    items: [
      { num: '1', disease: '고혈압 질환', code: 'I10 ~ I15' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간질환', code: 'K70 ~ K77' }
    ]
  },
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07, E89.0' },
      { num: '2', disease: '처치후 갑상선 기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선 기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선 기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하기도질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05 ~ M14' },
      { num: '3', disease: '관절증', code: 'M15 ~ M19' },
      { num: '4', disease: '기타관절장애', code: 'M20 ~ M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    title: '생식기 질환',
    items: [
      { num: '1', disease: '남성생식기관의 질환 (남성불임 제외)', code: 'N40 ~ N45, N47 ~ N51' },
      { num: '2', disease: '여성골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { num: '3', disease: '여성생식기관의 비염증성 장애 (습관유산자, 여성불임, 인공수정 합병증 제외)', code: 'N80 ~ N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// DB손해보험 18대 질병수술 분류표 데이터
export const DB_SURGERY_18_SECTIONS = [
  {
    title: '당뇨병 질환',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조-관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타 명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 다발신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '11', disease: '당뇨병에서의 사구체장애', code: 'N08.3' }
    ]
  },
  {
    title: '심장 질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { num: '6', disease: '[A39.5† : 수막구균성 심장병 등 ((I32.0*, I39.8*, I41.0*, I52.0*))]', code: 'A39.5†' },
      { num: '7', disease: '[B37.6† : 칸디다심내막염]', code: 'B37.6†' }
    ]
  },
  {
    title: '고혈압질환',
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
    title: '뇌혈관 질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간 질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' },
      { num: '3', disease: '[B25.1† : 거대세포바이러스간염(K77.0*)]', code: 'B25.1†' },
      { num: '4', disease: '[B58.1† : 톡소포자충간염(K77.0*)]', code: 'B58.1†' }
    ]
  },
  {
    title: '위.십이지장 궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선 질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07' },
      { num: '2', disease: '[H06.2* : 갑상선이상성 안구돌출(E05.0+)]', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '[B25.0† : 거대세포바이러스폐렴(J17.1*)]', code: 'B25.0†' },
      { num: '8', disease: '[B05.2† : 폐렴이 합병된 홍역(J17.1*)]', code: 'B05.2†' },
      { num: '9', disease: '[B01.2† : 수두폐렴(J17.1*)]', code: 'B01.2†' },
      { num: '10', disease: '[B58.3† : 톡소포자충폐증(J17.3*)]', code: 'B58.3†' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' },
      { num: '13', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '[M01.1* : 결핵관절염(A18.01+)]', code: 'M01.1*' },
      { num: '3', disease: '[M49.0* : 척추의 결핵(A18.00+)]', code: 'M49.0*' },
      { num: '4', disease: '[M90.0* : 뼈의 결핵(A18.02+)]', code: 'M90.0*' },
      { num: '5', disease: '[N33.0* : 결핵성 방광염(A18.11+)]', code: 'N33.0*' },
      { num: '6', disease: '[N74.0* : 자궁경부의 결핵감염(A18.15+)]', code: 'N74.0*' },
      { num: '7', disease: '[N74.1* : 여성 결핵성 골반염증질환(A18.16+)]', code: 'N74.1*' },
      { num: '8', disease: '[K67.3* : 결핵성 복막염(A18.30+)]', code: 'K67.3*' },
      { num: '9', disease: '[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)]', code: 'K93.0*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니 탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '치핵',
    items: [
      { num: '1', disease: '포함 - 치질\n제외 - 합병증: 출산 및 산후기(O87.2), 임신(O22.4)', code: 'K64' }
    ]
  }
];

// DB손해보험 21대 질병수술 분류표 데이터
export const DB_SURGERY_21_SECTIONS = [
  {
    title: '당뇨병 질환',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조 관련 당뇨병', code: 'E12' },
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
    title: '심장 질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { num: '6', disease: '[A39.5† : 수막구균성 심장병 등((I32.0*, I39.8*, I41.0*, I52.0*))]', code: 'A39.5†' }
    ]
  },
  {
    title: '고혈압 질환',
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
    title: '뇌혈관 질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간 질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' },
      { num: '3', disease: '[B25.1† : 거대세포바이러스간염(K77.0*)]', code: 'B25.1†' },
      { num: '4', disease: '[B58.1† : 톡소포자충간염(K77.0*)]', code: 'B58.1†' }
    ]
  },
  {
    title: '위십이지장 궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선 질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '[B25.0† : 거대세포바이러스폐렴(J17.1*)]', code: 'B25.0†' },
      { num: '8', disease: '[B05.2† : 폐렴이 합병된 홍역(J17.1*)]', code: 'B05.2†' },
      { num: '9', disease: '[B01.2† : 수두폐렴(J17.1*)]', code: 'B01.2†' },
      { num: '10', disease: '[B58.3† : 톡소포자충폐증(J17.3*)]', code: 'B58.3†' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' },
      { num: '13', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05 ~ M14' },
      { num: '3', disease: '[J99.0* : 류마티스폐질환(M05.1†)]', code: 'J99.0*' },
      { num: '4', disease: '관절증', code: 'M15 ~ M19' },
      { num: '5', disease: '기타 관절장애', code: 'M20 ~ M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '[M01.1* : 결핵관절염(A18.01+)]', code: 'M01.1*' },
      { num: '3', disease: '[M49.0* : 척추의 결핵(A18.00+)]', code: 'M49.0*' },
      { num: '4', disease: '[M90.0* : 뼈의 결핵(A18.02+)]', code: 'M90.0*' },
      { num: '5', disease: '[N33.0* : 결핵성 방광염(A18.11+)]', code: 'N33.0*' },
      { num: '6', disease: '[N74.0* : 자궁경부의 결핵감염(A18.15+)]', code: 'N74.0*' },
      { num: '7', disease: '[N74.1* : 여성 결핵성 골반염증질환(A18.16+)]', code: 'N74.1*' },
      { num: '8', disease: '[K67.3* : 결핵성 복막염(A18.30+)]', code: 'K67.3*' },
      { num: '9', disease: '[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)]', code: 'K93.0*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    title: '생식기 질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환 (남성불임 제외)', code: 'N40 ~ N45, N47 ~ N51' },
      { num: '2', disease: '[A59.01† : 편모충성 전립선염(N51.0*)]', code: 'A59.01†' },
      { num: '3', disease: '[A18.13† : 전립선의 결핵(N51.0*)]', code: 'A18.13†' },
      { num: '4', disease: '[A18.14† : 기타 남성생식기관의 결핵(N51.-*)]', code: 'A18.14†' },
      { num: '5', disease: '[B26.0† : 볼거리고환염(N51.1*)]', code: 'B26.0†' },
      { num: '6', disease: '여성 골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { num: '7', disease: '[A18.15† : 자궁경부의 결핵(N74.0*)]', code: 'A18.15†' },
      { num: '8', disease: '[A18.16† : 결핵성 여성골반염증질환(N74.1*)]', code: 'A18.16†' },
      { num: '9', disease: '여성 생식기관 비염증성 장애 (습관유산자, 여성불임, 인공수정과 관련된 합병증 제외)', code: 'N80 ~ N95' },
      { num: '10', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '치핵',
    items: [
      { num: '1', disease: '포함 - 치질 (제외-합병증: 출산 및 산후기 O87.2, 임신 합병 O22.4)', code: 'K64' }
    ]
  }
];

// DB손해보험 40대 질병수술 상단 요약 분류표 데이터
export const DB_SURGERY_40_SUMMARY_SECTIONS = [
  {
    title: '37대 질병',
    items: [
      { num: '1', disease: '당뇨병질환', code: '' },
      { num: '2', disease: '심장질환', code: '' },
      { num: '3', disease: '고혈압질환', code: '' },
      { num: '4', disease: '뇌혈관질환', code: '' },
      { num: '5', disease: '간질환', code: '' },
      { num: '6', disease: '위·십이지장궤양', code: '' },
      { num: '7', disease: '갑상선질환', code: '' },
      { num: '8', disease: '동맥경화증', code: '' },
      { num: '9', disease: '만성하부호흡기질환', code: '' },
      { num: '10', disease: '폐렴', code: '' },
      { num: '11', disease: '녹내장', code: '' },
      { num: '12', disease: '결핵', code: '' },
      { num: '13', disease: '신부전', code: '' },
      { num: '14', disease: '담석증', code: '' },
      { num: '15', disease: '사타구니 탈장', code: '' },
      { num: '16', disease: '편도염', code: '' },
      { num: '17', disease: '축농증', code: '' },
      { num: '18', disease: '손목터널증후군', code: '' },
      { num: '19', disease: '어깨병변', code: '' },
      { num: '20', disease: '골다공증', code: '' },
      { num: '21', disease: '황반변성', code: '' },
      { num: '22', disease: '급성상기도감염', code: '' },
      { num: '23', disease: '담낭담도질환', code: '' },
      { num: '24', disease: '인후부위의 특정질환', code: '' },
      { num: '25', disease: '특정 부위의 탈장', code: '' },
      { num: '26', disease: '후각특정질환', code: '' },
      { num: '27', disease: '중이의 진주종 및 폴립', code: '' },
      { num: '28', disease: '귀경화증', code: '' },
      { num: '29', disease: '소화기계통의 양성신생물', code: '' },
      { num: '30', disease: '중이·호흡계통 및 흉곽의 양성신생물', code: '' },
      { num: '31', disease: '골 및 관절연골의 양성신생물', code: '' },
      { num: '32', disease: '조직의 양성신생물', code: '' },
      { num: '33', disease: '수막의 양성신생물', code: '' },
      { num: '34', disease: '뇌 및 중추신경계통의 양성신생물', code: '' },
      { num: '35', disease: '갑상선 및 내분비선의 양성신생물', code: '' },
      { num: '36', disease: '비뇨기관의 양성신생물', code: '' },
      { num: '37', disease: '치핵', code: '' }
    ]
  },
  {
    title: '특정다빈도 3대 질병',
    items: [
      { num: '1', disease: '관절염', code: '' },
      { num: '2', disease: '백내장', code: '' },
      { num: '3', disease: '생식기질환', code: '' }
    ]
  }
];

// DB손해보험 40대 질병수술 세부분류표 데이터
export const DB_SURGERY_40_SECTIONS = [
  {
    title: '당뇨병질환',
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병\n[A39.5† : 수막구균성 심장병 등((I32.0*,I39.8*,I41.0*,I52.0*))]\n[B37.6† : 칸디다심내막염]', code: 'I30~I52\nA39.5†\nB37.6†' }
    ]
  },
  {
    title: '고혈압질환',
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
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환\n[B25.1† : 거대세포바이러스간염(K77.0*)]\n[B58.1† : 톡소포자충간염(K77.0*)]', code: 'K70~K77\nB25.1†\nB58.1†' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애\n[H06.2* : 갑상선이상성 안구돌출(E05.0+)]', code: 'E00~E07\nH06.2*' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴\n[B25.0† : 거대세포바이러스폐렴(J17.1*)]\n[B05.2† : 폐렴이 합병된 홍역(J17.1*)]\n[B01.2† : 수두폐렴(J17.1*)]\n[B58.3† : 폐톡소포자충증(J17.3*)]', code: 'J17\nB25.0†\nB05.2†\nB01.2†\nB58.3†' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵\n[M01.1* : 결핵관절염(A18.01+)]\n[M49.0* : 척추의 결핵(A18.00+)]\n[M90.0* : 뼈의 결핵(A18.02+)]\n[N33.0* : 결핵성 방광염(A18.11+)]\n[N74.0* : 자궁경부의 결핵감염(A18.15+)]\n[N74.1* : 여성 결핵성 골반염증질환(A18.16+)]\n[K67.3* : 결핵성 복막염(A18.30+)]\n[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)]', code: 'A15~A19\nM01.1*\nM49.0*\nM90.0*\nN33.0*\nN74.0*\nN74.1*\nK67.3*\nK93.0*' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },
  {
    title: '골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '특정 부위의 탈장',
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
    title: '후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알러지성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '중이의 진주종 및 폴립',
    items: [
      { num: '1', disease: '중이의 진주종', code: 'H71' },
      { num: '2', disease: '중이의 폴립', code: 'H74.4' }
    ]
  },
  {
    title: '귀경화증',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화기계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '중이·호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성신생물', code: 'D15' }
    ]
  },
  {
    title: '골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성신생물', code: 'D16' }
    ]
  },
  {
    title: '조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성신생물', code: 'D21' }
    ]
  },
  {
    title: '수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성신생물', code: 'D32' }
    ]
  },
  {
    title: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 양성신생물', code: 'D33' }
    ]
  },
  {
    title: '갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성신생물', code: 'D35' }
    ]
  },
  {
    title: '비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '치핵',
    items: [
      { num: '1', disease: '포함 - 치질\n제외 - 합병증: 출산 및 산후기(O87.2), 임신(O22.4)', code: 'K64' }
    ]
  },
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증\n[M01.1* : 결핵관절염(A18.01+)] 제외\n[M14.2 : 당뇨병성 관절병증] 제외', code: 'M00~M03\nM01.1* 제외\nM14.2 제외' },
      { num: '2', disease: '염증성 다발관절병증\n[J99.0* : 류마티스폐질환(M05.1+)]', code: 'M05~M14\nJ99.0*' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환\n[A59.01† : 편모충성 전립선염(N51.0*)]\n[B26.0† : 볼거리고환염(N51.1*)]', code: 'N40~N45, N49~N51\nA59.01†\nB26.0†' },
      { num: '2', disease: '여성 골반내 기관의 염증성 질환\n[N74.0* : 자궁경부의 결핵감염(A18.15+)] 제외\n[N74.1* : 여성 결핵성 골반염증질환(A18.16+)] 제외', code: 'N70~N77\nN74.0* 제외\nN74.1* 제외' },
      { num: '3', disease: '여성 생식기관 비염증성 장애\n(습관유산자 제외)\n(여성 불임 제외)\n(인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// DB손해보험 77대 질병수술 상단 요약 분류표 데이터
export const DB_SURGERY_77_SUMMARY_SECTIONS = [
  {
    title: '24대 질병',
    items: [
      { num: '1', disease: '당뇨병 질환', code: '' },
      { num: '2', disease: '심장 질환', code: '' },
      { num: '3', disease: '고혈압 질환', code: '' },
      { num: '4', disease: '뇌혈관 질환', code: '' },
      { num: '5', disease: '간 질환', code: '' },
      { num: '6', disease: '위·십이지장궤양', code: '' },
      { num: '7', disease: '갑상선 질환', code: '' },
      { num: '8', disease: '동맥경화증', code: '' },
      { num: '9', disease: '만성 하부호흡기 질환', code: '' },
      { num: '10', disease: '폐렴', code: '' },
      { num: '11', disease: '녹내장', code: '' },
      { num: '12', disease: '결핵', code: '' },
      { num: '13', disease: '신부전', code: '' },
      { num: '14', disease: '패혈증', code: '' },
      { num: '15', disease: '중추신경계통의 염증성 질환', code: '' },
      { num: '16', disease: '파킨슨병', code: '' },
      { num: '17', disease: '다발경화증', code: '' },
      { num: '18', disease: '자율신경계통의 장애', code: '' },
      { num: '19', disease: '대동맥류', code: '' },
      { num: '20', disease: '폐질환', code: '' },
      { num: '21', disease: '급성 췌장염', code: '' },
      { num: '22', disease: '췌장 질환', code: '' },
      { num: '23', disease: '크로이츠펠트-야콥병', code: '' },
      { num: '24', disease: '조로증', code: '' }
    ]
  },
  {
    title: '특정 4대 질병',
    items: [
      { num: '1', disease: '담석증', code: '' },
      { num: '2', disease: '사타구니 탈장', code: '' },
      { num: '3', disease: '편도염', code: '' },
      { num: '4', disease: '축농증', code: '' }
    ]
  },
  {
    title: '46대 생활질병',
    items: [
      { num: '1', disease: '손목터널증후군', code: '' },
      { num: '2', disease: '어깨병변', code: '' },
      { num: '3', disease: '골다공증', code: '' },
      { num: '4', disease: '황반변성', code: '' },
      { num: '5', disease: '급성 상기도감염', code: '' },
      { num: '6', disease: '담낭담도 질환', code: '' },
      { num: '7', disease: '인후부위의 특정질환', code: '' },
      { num: '8', disease: '특정 부위의 탈장', code: '' },
      { num: '9', disease: '치핵', code: '' },
      { num: '10', disease: '후각 특정질환', code: '' },
      { num: '11', disease: '중이의 진주종 및 폴립', code: '' },
      { num: '12', disease: '귀경화증', code: '' },
      { num: '13', disease: '근육장애', code: '' },
      { num: '14', disease: '발바닥근막성 섬유종증', code: '' },
      { num: '15', disease: '중이 및 유돌의 질환', code: '' },
      { num: '16', disease: '내이의 질환', code: '' },
      { num: '17', disease: '눈 및 눈부속기관의 특정질환', code: '' },
      { num: '18', disease: '사구체질환', code: '' },
      { num: '19', disease: '신세뇨관-간질질환', code: '' },
      { num: '20', disease: '방광의 결석', code: '' },
      { num: '21', disease: '신장 및 요관의 기타 장애', code: '' },
      { num: '22', disease: '비뇨계통의 기타 질환', code: '' },
      { num: '23', disease: '유방의 장애', code: '' },
      { num: '24', disease: '비감염성 장염 및 결장염', code: '' },
      { num: '25', disease: '특정 장질환', code: '' },
      { num: '26', disease: '복막의 질환', code: '' },
      { num: '27', disease: '척추변형', code: '' },
      { num: '28', disease: '척추병증', code: '' },
      { num: '29', disease: '추간판장애(디스크질환)', code: '' },
      { num: '30', disease: '안면신경장애', code: '' },
      { num: '31', disease: '단일신경병증', code: '' },
      { num: '32', disease: '특정 누적외상성질환', code: '' },
      { num: '33', disease: '윤활막 및 힘줄장애', code: '' },
      { num: '34', disease: '식도질환', code: '' },
      { num: '35', disease: '위·십이지장 질환', code: '' },
      { num: '36', disease: '외이의 질환 및 귀의 기타장애', code: '' },
      { num: '37', disease: '소화기계통의 양성신생물', code: '' },
      { num: '38', disease: '중이·호흡계통 및 흉곽의 양성신생물', code: '' },
      { num: '39', disease: '골 및 관절연골의 양성신생물', code: '' },
      { num: '40', disease: '조직의 양성신생물', code: '' },
      { num: '41', disease: '유방의 양성신생물', code: '' },
      { num: '42', disease: '생식기의 양성신생물', code: '' },
      { num: '43', disease: '비뇨기관의 양성신생물', code: '' },
      { num: '44', disease: '수막의 양성신생물', code: '' },
      { num: '45', disease: '뇌 및 중추신경계통의 양성신생물', code: '' },
      { num: '46', disease: '갑상선 및 내분비선의 양성신생물', code: '' }
    ]
  },
  {
    title: '특정 다빈도 3대 질병',
    items: [
      { num: '1', disease: '관절염', code: '' },
      { num: '2', disease: '백내장', code: '' },
      { num: '3', disease: '생식기 질환', code: '' }
    ]
  }
];

// DB손해보험 77대 질병수술 세부분류표 데이터
export const DB_SURGERY_77_SECTIONS = [
  // <수술비의 경우 세부분장 - 1> 24대질병
  {
    title: '당뇨병질환',
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병\n[A39.5† : 수막알균성 심장병((I32.0*,I39.8*,I41.0*,I52.0*))]\n[B37.6† : 칸디다심내막염]', code: 'I30~I52\nA39.5†\nB37.6†' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화\n[주1) H35.0(배경망막병증 및 망막혈관변화) 중 고혈압성 망막병증에 한함]', code: 'H35.0주1)' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환\n[B25.1† : 거대세포바이러스간염(K77.0*)]\n[B58.1† : 톡소포자충간염(K77.0*)]', code: 'K70~K77\nB25.1†\nB58.1†' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애\n[H06.2* : 갑상선이상성 안구돌출(E05.0+)]', code: 'E00~E07\nH06.2*' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴\n[B25.0† : 거대세포바이러스폐렴(J17.1*)]\n[B05.2† : 폐렴이 합병된 홍역(J17.1*)]\n[B01.2† : 수두폐렴(J17.1*)]\n[B58.3† : 폐톡소포자충증(J17.3*)]', code: 'J17\nB25.0†\nB05.2†\nB01.2†\nB58.3†' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵\n[M01.1* : 결핵관절염(A18.01+)]\n[M49.0* : 척추의 결핵(A18.00+)]\n[M90.0* : 뼈의 결핵(A18.02+)]\n[N33.0* : 결핵성 방광염(A18.11+)]\n[N74.0*, N74.1* : 여성생식기관의 결핵(A18.17+)]\n[K67.3* : 결핵성 복막염(A18.30+)]\n[K93.0* : 장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)]', code: 'A15~A19\nM01.1*\nM49.0*\nM90.0*\nN33.0*\nN74.0*, N74.1*\nK67.3*\nK93.0*' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '중추신경계통의 염증성 질환\n[A39.0† : 수막알균수막염(G01*)]\n[A87.1† : 아데노바이러스수막염(G02.0*)]\n[A87.0† : 엔테로바이러스수막염(G02.0*)]\n[B00.3† : 헤르페스바이러스수막염(G02.0*)]\n[B05.1† : 수막염이합병된홍역(G02.0*)]\n[B26.1† : 볼거리수막염(G02.0*)]\n[B01.0† : 수두수막염(G02.0*)]\n[B02.1† : 대상포진수막염(G02.0*)]\n[B37.5† : 칸디다수막염(G02.1*)]\n[B38.4† : 콕시디오이데스진균수막염(G02.1*)]\n[A85.1† : 아데노바이러스뇌염(G05.1*)]\n[A85.0† : 엔테로바이러스뇌염(G05.1*)]\n[B00.4† : 헤르페스바이러스뇌염(G05.1*)]\n[B05.0† : 뇌염이합병된홍역(G05.1*)]\n[B26.2† : 볼거리뇌염(G05.1*)]\n[B01.1† : 수두뇌염(G05.1*)]\n[B02.0† : 대상포진뇌염(G05.1*)]\n[B06.0† : 신경학적합병증을동반한풍진(G05.1*, G02.0*)]\n[A32.1† : 리스테리아수막염및수막뇌염(G01*, G05.0*)]\n[A06.6† : 아메바성뇌종양(G07*)]', code: 'G00~G09\nA39.0†\nA87.1†\nA87.0†\nB00.3†\nB05.1†\nB26.1†\nB01.0†\nB02.1†\nB37.5†\nB38.4†\nA85.1†\nA85.0†\nB00.4†\nB05.0†\nB26.2†\nB01.1†\nB02.0†\nB06.0†\nA32.1†\nA06.6†' }
    ]
  },
  {
    title: '파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애\n[G90.5 복합부위통증증후군 I 형] 제외\n[G90.6 복합부위통증증후군 II 형] 제외\n[G90.7 기타 및 상세불명 유형의 복합부위통증증후군] 제외', code: 'G90\nG90.5 제외\nG90.6 제외\nG90.7 제외' }
    ]
  },
  {
    title: '대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애\n[B25.2† : 거대세포바이러스췌장염(K87.1*)]\n[B26.3† : 볼거리췌장염(K87.1*)]', code: 'K87\nB25.2†\nB26.3†' }
    ]
  },
  {
    title: '크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '조로증',
    items: [
      { num: '1', disease: '조로증', code: 'E34.8' }
    ]
  },

  // <수술비의 경우 세부분장 - 2> 특정4대질병
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },

  // <수술비의 경우 세부분장 - 3> 46대생활질병
  {
    title: '손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },
  {
    title: '골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '담낭담도질환',
    items: [
      { num: '1', disease: '담낭염(쓸개염)', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양(고름집)', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '특정 부위의 탈장',
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
    title: '치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증\n포함 - 치질\n제외 - 합병증: 출산 및 산후기(O87.2), 임신(O22.4)', code: 'K64' }
    ]
  },
  {
    title: '후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '중이의 진주종 및 폴립',
    items: [
      { num: '1', disease: '중이의 진주종', code: 'H71' },
      { num: '2', disease: '중이의 폴립', code: 'H74.4' }
    ]
  },
  {
    title: '귀경화증',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '근육장애',
    items: [
      { num: '1', disease: '근육장애', code: 'M60~M63' }
    ]
  },
  {
    title: '발바닥근막성 섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증', code: 'M72.2' }
    ]
  },
  {
    title: '중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환\n[H71 : 중이의 진주종] 제외\n[H74.4 : 중이의 폴립] 제외\n[B05.3† : 중이염이합병된홍역(H67.1*)]', code: 'H65~H75\nH71 제외\nH74.4 제외\nB05.3†' }
    ]
  },
  {
    title: '내이의 질환',
    items: [
      { num: '1', disease: '전정기능의 장애', code: 'H81' },
      { num: '2', disease: '달리 분류된 질환에서의 현기증증후군', code: 'H82' },
      { num: '3', disease: '내이의 기타 질환', code: 'H83' }
    ]
  },
  {
    title: '눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애\n[B00.50† : 홍채섬모체염(H22.0*)]\n[B00.51† : 각막염(H19.1*)]\n[B30.0† : 아데노바이러스에의한각막결막염(H19.2*)]', code: 'H15~H22\nB00.50†\nB00.51†\nB30.0†' },
      { num: '2', disease: '맥락막 및 망막의 장애\n[H35.3 : 황반및후극부의변성] 제외\n[H35.0 : 배경망막병증 및 망막혈관변화] 제외 주3)\n[주3) H35.0(배경망막병증 망막혈관변화) 중 고혈압 성 망막병증에 한함]\n[H36.0 : 당뇨병성망막병증] 제외', code: 'H30~H36\nH35.3 제외\nH35.0주3) 제외\nH36.0 제외' },
      { num: '3', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' },
      { num: '4', disease: '눈 및 눈부속기의 기타 처치후 장애 주4)\n[주4) H59.8(눈 및 눈부속기의 기타 처치후 장애) 중 미만성 성판성 각막염에 한함]', code: 'H59.8주4)' }
    ]
  },
  {
    title: '사구체질환',
    items: [
      { num: '1', disease: '사구체질환\n[M32.1† : 기관 또는 계통 침범을 동반한 전신홍반루푸스(N08.5*)] 주5)\n[주5) M32.1+(기관 또는 계통 침범을 동반한 전신홍반루푸스) 중 사구체질환을 동반한 전신홍반루푸스에 한함]\n[N08.3 : 당뇨병에서의사구체장애] 제외', code: 'N00~N08\nM32.1†주5)\nN08.3 제외' }
    ]
  },
  {
    title: '신세뇨관-간질질환',
    items: [
      { num: '1', disease: '신세뇨관-간질질환\n[M32.1† : 기관 또는 계통 침범을 동반한 전신홍반루푸스(N16.4*)] 주6)\n[주6) M32.1+(기관 또는 계통 침범을 동반한 전신홍반루푸스) 중 세뇨관-간질신장병증을 동반한 전신홍반루푸스에 한함]', code: 'N10~N16\nM32.1†주6)' }
    ]
  },
  {
    title: '방광의결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '신장 및 요관의 기타 장애', code: 'N25~N29' }
    ]
  },
  {
    title: '비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애\n[N33.0* : 결핵성방광염(A18.11+)] 제외', code: 'N33\nN33.0* 제외' },
      { num: '5', disease: '달리 분류된 질환에서의 요도장애\n[B37.40† : 칸디다 방광염 및 요도염(N37.0*)]', code: 'N37\nB37.40†' },
      { num: '6', disease: '비뇨계통의 기타장애\n[N39.3 : 스트레스요실금] 제외\n[N39.4 : 기타명시된요실금] 제외', code: 'N39\nN39.3 제외\nN39.4 제외' }
    ]
  },
  {
    title: '유방의 장애',
    items: [
      { num: '1', disease: '유방의 장애', code: 'N60~N64' }
    ]
  },
  {
    title: '비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '비감염성 장염 및 결장염', code: 'K50~K52' }
    ]
  },
  {
    title: '특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환\n[K67.3* : 결핵성복막염(A18.30+)] 제외', code: 'K65~K67\nK67.3* 제외' }
    ]
  },
  {
    title: '척추변형',
    items: [
      { num: '1', disease: '변형성 등병증', code: 'M40~M43' }
    ]
  },
  {
    title: '척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타척추병증', code: 'M48' }
    ]
  },
  {
    title: '추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' },
      { num: '3', disease: '[G55.1* : 추간판장애에서의신경근및신경총압박(M50-M51+)]', code: 'G55.1*' }
    ]
  },
  {
    title: '안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증\n[G56.0 : 손목터널증후군] 제외', code: 'G56\nG56.0 제외' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의 단일신경병증\n[G59.0* : 당뇨병성단일신경병증] 제외', code: 'G59\nG59.0* 제외' }
    ]
  },
  {
    title: '특정 누적외상성질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경수상완증후군', code: 'M53.1' },
      { num: '3', disease: '기타 연조직장애\n[M72.2 : 발바닥근막성섬유종증] 제외\n[M75 : 어깨병변] 제외', code: 'M70~M79\n(M74,M78) 제외\nM72.2 제외\nM75 제외' }
    ]
  },
  {
    title: '윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막 및 힘줄장애', code: 'M65~M68' }
    ]
  },
  {
    title: '식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '위,십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '외이의 질환 및 귀의 기타장애',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' },
      { num: '2', disease: '귀의 기타장애', code: 'H90~H95' }
    ]
  },
  {
    title: '소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화기통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '중이·호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성신생물', code: 'D15' }
    ]
  },
  {
    title: '골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성신생물', code: 'D16' }
    ]
  },
  {
    title: '조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성신생물', code: 'D21' }
    ]
  },
  {
    title: '유방의 양성신생물',
    items: [
      { num: '1', disease: '유방의 양성신생물', code: 'D24' }
    ]
  },
  {
    title: '생식기의 양성신생물',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '5', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성신생물', code: 'D32' }
    ]
  },
  {
    title: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성신생물', code: 'D33' }
    ]
  },
  {
    title: '갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성신생물', code: 'D35' }
    ]
  },

  // <수술비의 경우 세부분장 - 4> 특정다빈도3대질병
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증\n[M01.1* : 결핵관절염(A18.01+)] 제외', code: 'M00~M03\nM01.1* 제외' },
      { num: '2', disease: '염증성 다발관절병증\n[J99.0* : 류마티스폐질환(M05.1+)] 제외\n[M14.2* : 당뇨병성 관절병증] 제외', code: 'M05~M14\nJ99.0* 제외\nM14.2* 제외' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환\n[A59.08+ : 기타 및 상세불명의 비뇨생식기계 편모충증(N51.0*)]주7)\n[주7) A59.08+(기타 및 상세불명의 비뇨생식기계 편모충증) 중 편모충성 전립선염에 한함]\n[B26.0+ : 볼거리고환염(N51.1*)]', code: 'N40~N45, N49~N51\nA59.08+주7)\nB26.0+' },
      { num: '2', disease: '여성 골반기관의 염증성 질환\n[N74.0*, N74.1* : 여성생식기관의 결핵(A18.17+)] 제외', code: 'N70~N77\nN74.0*, N74.1* 제외' },
      { num: '3', disease: '여성 생식관 비염증성 장애\n(습관적 유산자 제외)\n(여성 불임 제외)\n(인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// DB손해보험 106대 질병수술 상단 요약 분류표 데이터
export const DB_SURGERY_106_SUMMARY_SECTIONS = [
  {
    title: '21대 질병',
    items: [
      { num: '1', disease: '당뇨병 질환', code: '' },
      { num: '2', disease: '심장 질환', code: '' },
      { num: '3', disease: '고혈압 질환', code: '' },
      { num: '4', disease: '뇌혈관 질환', code: '' },
      { num: '5', disease: '간 질환', code: '' },
      { num: '6', disease: '동맥경화증', code: '' },
      { num: '7', disease: '신부전', code: '' },
      { num: '8', disease: '만성 하부호흡기 질환', code: '' },
      { num: '9', disease: '폐렴', code: '' },
      { num: '10', disease: '결핵', code: '' },
      { num: '11', disease: '패혈증', code: '' },
      { num: '12', disease: '중추신경계통의 염증성 질환', code: '' },
      { num: '13', disease: '파킨슨병', code: '' },
      { num: '14', disease: '다발경화증', code: '' },
      { num: '15', disease: '자율신경계통의 장애', code: '' },
      { num: '16', disease: '대동맥류', code: '' },
      { num: '17', disease: '폐질환', code: '' },
      { num: '18', disease: '급성 췌장염', code: '' },
      { num: '19', disease: '췌장 질환', code: '' },
      { num: '20', disease: '크로이츠펠트-야콥병', code: '' },
      { num: '21', disease: '조로증', code: '' }
    ]
  },
  {
    title: '5대 질병',
    items: [
      { num: '1', disease: '위십이지장궤양', code: '' },
      { num: '2', disease: '녹내장', code: '' },
      { num: '3', disease: '뇌전증', code: '' },
      { num: '4', disease: '버거씨병', code: '' },
      { num: '5', disease: '위공장궤양', code: '' }
    ]
  },
  {
    title: '60대 생활질환',
    items: [
      { num: '1', disease: '담석증', code: '' },
      { num: '2', disease: '사타구니 탈장', code: '' },
      { num: '3', disease: '편도염', code: '' },
      { num: '4', disease: '축농증', code: '' },
      { num: '5', disease: '손목터널증후군', code: '' },
      { num: '6', disease: '어깨병변', code: '' },
      { num: '7', disease: '골다공증', code: '' },
      { num: '8', disease: '황반변성', code: '' },
      { num: '9', disease: '급성상기도감염', code: '' },
      { num: '10', disease: '담낭담도질환', code: '' },
      { num: '11', disease: '인후부위의 특정질환', code: '' },
      { num: '12', disease: '특정 부위의 탈장', code: '' },
      { num: '13', disease: '후각특정질환', code: '' },
      { num: '14', disease: '중이의 진주종 및 폴립', code: '' },
      { num: '15', disease: '귀경화증', code: '' },
      { num: '16', disease: '근육장애', code: '' },
      { num: '17', disease: '발바닥근막성 섬유종증', code: '' },
      { num: '18', disease: '중이 및 유돌의 질환', code: '' },
      { num: '19', disease: '내이의 질환', code: '' },
      { num: '20', disease: '눈 및 눈부속기관의 특정질환', code: '' },
      { num: '21', disease: '사구체질환', code: '' },
      { num: '22', disease: '신세뇨관-간질질환', code: '' },
      { num: '23', disease: '신장 및 요관의 기타 장애', code: '' },
      { num: '24', disease: '비뇨계통의 기타 질환', code: '' },
      { num: '25', disease: '유방의 장애', code: '' },
      { num: '26', disease: '비감염성 장염 및 결장염', code: '' },
      { num: '27', disease: '특정 장질환', code: '' },
      { num: '28', disease: '복막의 질환', code: '' },
      { num: '29', disease: '척추변형', code: '' },
      { num: '30', disease: '척추병증', code: '' },
      { num: '31', disease: '추간판장애(디스크질환)', code: '' },
      { num: '32', disease: '안면신경장애', code: '' },
      { num: '33', disease: '단일신경병증', code: '' },
      { num: '34', disease: '특정 누적외상성질환', code: '' },
      { num: '35', disease: '윤활막 및 힘줄장애', code: '' },
      { num: '36', disease: '식도질환', code: '' },
      { num: '37', disease: '위십이지장 질환', code: '' },
      { num: '38', disease: '외이의 질환 및 귀의 기타장애', code: '' },
      { num: '39', disease: '소화기계통의 양성신생물', code: '' },
      { num: '40', disease: '중이호흡계통 및 흉곽의 양성신생물', code: '' },
      { num: '41', disease: '골 및 관절연골의 양성신생물', code: '' },
      { num: '42', disease: '조직의 양성신생물', code: '' },
      { num: '43', disease: '양성신생물', code: '' },
      { num: '44', disease: '유방의 양성신생물', code: '' },
      { num: '45', disease: '생식기의 양성신생물', code: '' },
      { num: '46', disease: '비뇨기관의 양성신생물', code: '' },
      { num: '47', disease: '수막의 양성신생물', code: '' },
      { num: '48', disease: '뇌 및 중추신경계통의 양성신생물', code: '' },
      { num: '49', disease: '갑상선 및 내분비선의 양성신생물', code: '' },
      { num: '50', disease: '부갑상선기능질환', code: '' },
      { num: '51', disease: '뇌하수체기능질환', code: '' },
      { num: '52', disease: '특정소화기질환', code: '' },
      { num: '53', disease: '장흡수장애', code: '' },
      { num: '54', disease: '비장질환', code: '' },
      { num: '55', disease: '전신결합조직장애', code: '' },
      { num: '56', disease: '대사장애', code: '' },
      { num: '57', disease: '수면무호흡증', code: '' },
      { num: '58', disease: '결막장애', code: '' },
      { num: '59', disease: '침샘질환', code: '' },
      { num: '60', disease: '갑상선질환 및 기타 등병증', code: '' }
    ]
  },
  {
    title: '특정 다빈도 3대 질병',
    items: [
      { num: '1', disease: '관절염', code: '' },
      { num: '2', disease: '백내장', code: '' },
      { num: '3', disease: '생식기 질환', code: '' }
    ]
  },
  {
    title: '17대 질병 수술',
    items: [
      { num: '1', disease: '치핵', code: '' },
      { num: '2', disease: '치열 및 치루', code: '' },
      { num: '3', disease: '중증근무력증', code: '' },
      { num: '4', disease: '전신결합조직장애 II', code: '' },
      { num: '5', disease: '안와장애', code: '' },
      { num: '6', disease: '유리체의 장애', code: '' },
      { num: '7', disease: '골수염', code: '' },
      { num: '8', disease: '골괴사증', code: '' },
      { num: '9', disease: '뼈의 파젯병', code: '' },
      { num: '10', disease: '연골병증', code: '' },
      { num: '11', disease: '눈 및 부속기 양성신생물', code: '' },
      { num: '12', disease: '동맥색전증 및 혈전증', code: '' },
      { num: '13', disease: '하지정맥류', code: '' },
      { num: '14', disease: '신장 및 요관의 결석', code: '' },
      { num: '15', disease: '충수질환', code: '' },
      { num: '16', disease: '요도결석증', code: '' },
      { num: '17', disease: '방광의 결석', code: '' }
    ]
  }
];

// DB손해보험 106대 질병수술 세부분류표 데이터 (119대 스타일 카드)
export const DB_SURGERY_106_SECTIONS = [
  // 21대 질병
  {
    title: '당뇨병질환',
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00  I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05  I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20  I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26  I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30  I52' },
      { num: '6', disease: '수막구균성 심장염', code: 'A39.5†' },
      { num: '7', disease: '칸디다 심내막염', code: 'B37.6†' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화 (고혈압성 망막병증에 한함)', code: 'H35.0주)' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60  I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15  B19' },
      { num: '2', disease: '간의 질환(알코올성 간질환, 간경변증 등)', code: 'K70  K77' },
      { num: '3', disease: '거세포바이러스간염', code: 'B25.1†' },
      { num: '4', disease: '톡소포자충간염', code: 'B58.1†' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '거세포바이러스폐렴', code: 'B25.0†' },
      { num: '8', disease: '폐렴이 합병된 홍역', code: 'B05.2†' },
      { num: '9', disease: '수두폐렴', code: 'B01.2†' },
      { num: '10', disease: '폐톡소포자충증', code: 'B58.3†' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15  A19' },
      { num: '2', disease: '결핵관절염', code: 'M01.1*' },
      { num: '3', disease: '척추의 결핵', code: 'M49.0*' },
      { num: '4', disease: '뼈의 결핵', code: 'M90.0*' },
      { num: '5', disease: '결핵성 방광염', code: 'N33.0*' },
      { num: '6', disease: '여성생식기관의 결핵 (자궁경부 결핵, 결핵성 여성골반염증질환에 한함)', code: 'N74.0*, N74.1*' },
      { num: '7', disease: '결핵성 복막염', code: 'K67.3*' },
      { num: '8', disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0*' },
      { num: '9', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17  N19' }
    ]
  },
  {
    title: '패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '중추신경계통의 염증성 질환', code: 'G00  G09' },
      { num: '2', disease: '수막알균수막염', code: 'A39.0†' },
      { num: '3', disease: '아데노바이러스수막염', code: 'A87.1†' },
      { num: '4', disease: '엔테로바이러스수막염', code: 'A87.0†' },
      { num: '5', disease: '헤르페스바이러스수막염', code: 'B00.3†' },
      { num: '6', disease: '수막염이 합병된 홍역', code: 'B05.1†' },
      { num: '7', disease: '볼거리수막염', code: 'B26.1†' },
      { num: '8', disease: '수두수막염', code: 'B01.0†' },
      { num: '9', disease: '대상포진수막염', code: 'B02.1†' },
      { num: '10', disease: '칸디다수막염', code: 'B37.5†' },
      { num: '11', disease: '콕시디오이데스진균수막염', code: 'B38.4†' },
      { num: '12', disease: '아데노바이러스뇌염', code: 'A85.1†' },
      { num: '13', disease: '엔테로바이러스뇌염', code: 'A85.0†' },
      { num: '14', disease: '헤르페스바이러스뇌염', code: 'B00.4†' },
      { num: '15', disease: '뇌염이 합병된 홍역', code: 'B05.0†' },
      { num: '16', disease: '볼거리뇌염', code: 'B26.2†' },
      { num: '17', disease: '수두뇌염', code: 'B01.1†' },
      { num: '18', disease: '대상포진뇌염', code: 'B02.0†' },
      { num: '19', disease: '신경학적 합병증을 동반한 풍진', code: 'B06.0†' },
      { num: '20', disease: '리스테리아수막염 및 수막뇌염', code: 'A32.1†' },
      { num: '21', disease: '아메바성 뇌종양', code: 'A06.6†' }
    ]
  },
  {
    title: '파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' },
      { num: '2', disease: '[제외] 복합부위통증증후군 I형', code: 'G90.5 제외' },
      { num: '3', disease: '[제외] 복합부위통증증후군 II형', code: 'G90.6 제외' },
      { num: '4', disease: '[제외] 기타 및 상세불명 유형의 복합부위통증증후군', code: 'G90.7 제외' }
    ]
  },
  {
    title: '대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85  J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90  J94' }
    ]
  },
  {
    title: '급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '췌장 질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { num: '3', disease: '거세포바이러스췌장염', code: 'B25.2†' },
      { num: '4', disease: '볼거리췌장염', code: 'B26.3†' }
    ]
  },
  {
    title: '크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '조로증',
    items: [
      { num: '1', disease: '조로증', code: 'E34.8' }
    ]
  },

  // 5대 질병
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염[버거병]', code: 'I73.1' }
    ]
  },
  {
    title: '위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },

  // 60대 생활질환
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },
  {
    title: '골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00  J06' }
    ]
  },
  {
    title: '담낭담도질환',
    items: [
      { num: '1', disease: '담낭염(쓸개염)', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양(고름집)', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '특정 부위의 탈장',
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
    title: '후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '중이의 진주종 및 폴립',
    items: [
      { num: '1', disease: '중이의 진주종', code: 'H71' },
      { num: '2', disease: '중이의 폴립', code: 'H74.4' }
    ]
  },
  {
    title: '귀경화증',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '근육장애',
    items: [
      { num: '1', disease: '근육장애', code: 'M60  M63' }
    ]
  },
  {
    title: '발바닥근막성 섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증', code: 'M72.2' }
    ]
  },
  {
    title: '중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환', code: 'H65  H75' },
      { num: '2', disease: '[제외] 중이의 진주종', code: 'H71 제외' },
      { num: '3', disease: '[제외] 중이의 폴립', code: 'H74.4 제외' },
      { num: '4', disease: '중이염이 합병된 홍역', code: 'B05.3†' }
    ]
  },
  {
    title: '내이의 질환',
    items: [
      { num: '1', disease: '전정기능의 장애', code: 'H81' },
      { num: '2', disease: '달리 분류된 질환에서의 현기증후군', code: 'H82' },
      { num: '3', disease: '내이의 기타 질환', code: 'H83' }
    ]
  },
  {
    title: '눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15  H22' },
      { num: '2', disease: '홍채섬모체염', code: 'B00.50†' },
      { num: '3', disease: '각막염', code: 'B00.51†' },
      { num: '4', disease: '아데노바이러스에 의한 각막결막염', code: 'B30.0†' },
      { num: '5', disease: '맥락막 및 망막의 장애', code: 'H30  H36' },
      { num: '6', disease: '[제외] 황반 및 후극부의 변성', code: 'H35.3 제외' },
      { num: '7', disease: '[제외] 배경망막병증 망막혈관변화', code: 'H35.0 제외' },
      { num: '8', disease: 'H35.0(배경망막병증 망막혈관변화) 중 고혈압성 망막병증에 한함', code: 'H35.0주)' },
      { num: '9', disease: '[제외] 당뇨병성 망막병증', code: 'H36.0 제외' },
      { num: '10', disease: '시신경 및 시각경로의 장애', code: 'H46  H48' },
      { num: '11', disease: '눈 및 눈부속기의 기타 처치후 장애(미만성 증판성 각막염에 한함)', code: 'H59.8주4)' }
    ]
  },
  {
    title: '사구체질환',
    items: [
      { num: '1', disease: '사구체질환', code: 'N00  N08' },
      { num: '2', disease: '기관 또는 계통 침범을 동반한 전신홍반루푸스(사구체질환 동반)', code: 'M32.1†(N08.5*)' },
      { num: '3', disease: '[제외] 당뇨병에서의 사구체장애', code: 'N08.3 제외' }
    ]
  },
  {
    title: '신세뇨관-간질질환',
    items: [
      { num: '1', disease: '신세뇨관-간질질환', code: 'N10  N16' },
      { num: '2', disease: '기관 또는 계통 침범을 동반한 전신홍반루푸스(신세뇨관-간질신장병증 동반)', code: 'M32.1†(N16.4*)' }
    ]
  },
  {
    title: '신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '신장 및 요관의 기타 장애', code: 'N25  N29' }
    ]
  },
  {
    title: '비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '[제외] 결핵성방광염', code: 'N33.0* 제외' },
      { num: '6', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '7', disease: '칸디다 방광염 및 요도염', code: 'B37.40†' },
      { num: '8', disease: '비뇨계통의 기타장애', code: 'N39' },
      { num: '9', disease: '[제외] 스트레스요실금', code: 'N39.3 제외' },
      { num: '10', disease: '[제외] 기타명시된요실금', code: 'N39.4 제외' }
    ]
  },
  {
    title: '유방의 장애',
    items: [
      { num: '1', disease: '유방의 장애', code: 'N60  N64' }
    ]
  },
  {
    title: '비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '비감염성 장염 및 결장염', code: 'K50  K52' }
    ]
  },
  {
    title: '특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환', code: 'K65  K67' },
      { num: '2', disease: '[제외] 결핵성복막염', code: 'K67.3* 제외' }
    ]
  },
  {
    title: '척추변형',
    items: [
      { num: '1', disease: '변형성 등병증', code: 'M40  M43' }
    ]
  },
  {
    title: '척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' },
      { num: '3', disease: '추간판장애에서의 신경뿌리 및 신경총압박', code: 'G55.1*' }
    ]
  },
  {
    title: '안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '[제외] 손목터널증후군', code: 'G56.0 제외' },
      { num: '3', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '4', disease: '기타 단일신경병증', code: 'G58' },
      { num: '5', disease: '달리 분류된 질환에서의 단일신경병증', code: 'G59' },
      { num: '6', disease: '[제외] 당뇨병성 단일신경병증', code: 'G59.0* 제외' },
      { num: '7', disease: '복합부위통증증후군 II형', code: 'G90.6' }
    ]
  },
  {
    title: '특정 누적외상성질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경추상완증후군', code: 'M53.1' },
      { num: '3', disease: '기타 연조직장애 (M74, M78 제외)', code: 'M70  M79' },
      { num: '4', disease: '[제외] 발바닥근막성섬유종증', code: 'M72.2 제외' },
      { num: '5', disease: '[제외] 어깨병변', code: 'M75 제외' }
    ]
  },
  {
    title: '윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막 및 힘줄장애', code: 'M65  M68' }
    ]
  },
  {
    title: '식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '위,십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '외이의 질환 및 귀의 기타장애',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60  H62' },
      { num: '2', disease: '귀의 기타장애', code: 'H90  H95' }
    ]
  },
  {
    title: '소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '중이호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉관내 기관의 양성신생물', code: 'D15' }
    ]
  },
  {
    title: '골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성신생물', code: 'D16' }
    ]
  },
  {
    title: '조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성신생물', code: 'D19' }
    ]
  },
  {
    title: '양성신생물',
    items: [
      { num: '1', disease: '후복막 및 복막 연조직의 양성신생물', code: 'D20' },
      { num: '2', disease: '결합조직 및 기타 연조직의 기타 양성신생물', code: 'D21' }
    ]
  },
  {
    title: '유방의 양성신생물',
    items: [
      { num: '1', disease: '유방의 양성신생물', code: 'D24' }
    ]
  },
  {
    title: '생식기의 양성신생물',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '5', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성신생물', code: 'D32' }
    ]
  },
  {
    title: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성신생물', code: 'D33' }
    ]
  },
  {
    title: '갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성신생물', code: 'D35' }
    ]
  },
  {
    title: '부갑상선기능질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '뇌하수체기능질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '특정소화기질환',
    items: [
      { num: '1', disease: '위 및 십이지장의 기타질환', code: 'K31' }
    ]
  },
  {
    title: '장흡수장애',
    items: [
      { num: '1', disease: '장흡수장애', code: 'K90' }
    ]
  },
  {
    title: '비장질환',
    items: [
      { num: '1', disease: '비장의 질환', code: 'D73' }
    ]
  },
  {
    title: '전신결합조직장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' }
    ]
  },
  {
    title: '대사장애',
    items: [
      { num: '1', disease: '쿠싱증후군', code: 'E24' },
      { num: '2', disease: '부신생식기장애', code: 'E25' },
      { num: '3', disease: '고알도스테론증', code: 'E26' },
      { num: '4', disease: '부신의 기타 장애', code: 'E27' }
    ]
  },
  {
    title: '수면무호흡증',
    items: [
      { num: '1', disease: '수면무호흡', code: 'G47.3' }
    ]
  },
  {
    title: '결막장애',
    items: [
      { num: '1', disease: '결막의 장애', code: 'H10  H13' }
    ]
  },
  {
    title: '침샘질환',
    items: [
      { num: '1', disease: '침샘의 질환', code: 'K11' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00  E07' },
      { num: '2', disease: '갑상선이상성 안구돌출', code: 'H06.2*' },
      { num: '3', disease: '처치후 / 방사선조사후 / 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '기타 등병증',
    items: [
      { num: '1', disease: '등통증', code: 'M54' }
    ]
  },

  // 특정 다빈도 3대 질병
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00  M03' },
      { num: '2', disease: '[제외] 결핵관절염', code: 'M01.1* 제외' },
      { num: '3', disease: '염증성 다발관절병증', code: 'M05  M14' },
      { num: '4', disease: '류마티스폐질환', code: 'J99.0*' },
      { num: '5', disease: '[제외] 당뇨병성 관절병증', code: 'M14.2* 제외' },
      { num: '6', disease: '관절증', code: 'M15  M19' },
      { num: '7', disease: '기타 관절장애', code: 'M20  M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '생식기 질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환', code: 'N40  N45, N49  N51' },
      { num: '2', disease: '편모충성 전립선염', code: 'A59.08†' },
      { num: '3', disease: '볼거리고환염', code: 'B26.0†' },
      { num: '4', disease: '여성 골반기관의 염증성 질환', code: 'N70  N77' },
      { num: '5', disease: '[제외] 여성생식기관의 결핵', code: 'N74.0*, N74.1* 제외' },
      { num: '6', disease: '여성 생식관 비염증성 장애 (습관성 유산, 여성 불임, 인공수정 합병증 제외)', code: 'N80  N95' },
      { num: '7', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },

  // 17대 질병 수술
  {
    title: '치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 (포함: 치질 / 제외: 출산, 산후기, 임신 합병증)', code: 'K64' }
    ]
  },
  {
    title: '치열 및 치루',
    items: [
      { num: '1', disease: '항문 및 직장부의 열창 및 누공', code: 'K60' },
      { num: '2', disease: '항문 및 직장부의 농양', code: 'K61' }
    ]
  },
  {
    title: '중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '전신결합조직장애 II',
    items: [
      { num: '1', disease: '전신홍반루푸스', code: 'M32' },
      { num: '2', disease: '피부다발근염', code: 'M33' },
      { num: '3', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '안와장애',
    items: [
      { num: '1', disease: '안와의 장애', code: 'H05' }
    ]
  },
  {
    title: '유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '골수염',
    items: [
      { num: '1', disease: '골수염', code: 'M86' }
    ]
  },
  {
    title: '골괴사증',
    items: [
      { num: '1', disease: '골괴사', code: 'M87' }
    ]
  },
  {
    title: '뼈의 파젯병',
    items: [
      { num: '1', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' }
    ]
  },
  {
    title: '연골병증',
    items: [
      { num: '1', disease: '연골병증', code: 'M91  M94' }
    ]
  },
  {
    title: '눈 및 부속기 양성신생물',
    items: [
      { num: '1', disease: '눈 및 부속기의 양성 신생물', code: 'D31' }
    ]
  },
  {
    title: '동맥색전증 및 혈전증',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' }
    ]
  },
  {
    title: '하지정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류', code: 'I83' },
      { num: '2', disease: '임신중 하지의 정맥류성 정맥', code: 'O22.0' },
      { num: '3', disease: '산후기중 기타 정맥합병증', code: 'O87.8' }
    ]
  },
  {
    title: '신장 및 요관의 결석',
    items: [
      { num: '1', disease: '신장 및 요관의 결석', code: 'N20' }
    ]
  },
  {
    title: '충수질환',
    items: [
      { num: '1', disease: '충수의 질환', code: 'K35  K38' }
    ]
  },
  {
    title: '요도결석증',
    items: [
      { num: '1', disease: '요도결석', code: 'N21.1' },
      { num: '2', disease: '기타 및 상세불명의 하부요로결석', code: 'N21.8, N21.9' },
      { num: '3', disease: '달리 분류된 질환에서의 요로의 결석', code: 'N22*' }
    ]
  },
  {
    title: '방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  }
];

// DB손해보험 119대 질병수술 상단 요약 분류표 데이터
export const DB_SURGERY_119_SUMMARY_SECTIONS = [
  {
    title: '20대 질병 수술',
    items: [
      { num: '1', disease: '심장질환', code: 'I00~I09, I20~I25, I26~I28, I30~I52, A39.5†, B37.6†' },
      { num: '2', disease: '뇌혈관질환', code: 'I60~I69' },
      { num: '3', disease: '간질환', code: 'B15~B19, K70~K77, B25.1†, B58.1†' },
      { num: '4', disease: '동맥경화증', code: 'I70' },
      { num: '5', disease: '신부전', code: 'N17~N19' },
      { num: '6', disease: '만성하부호흡기질환', code: 'J40~J47' },
      { num: '7', disease: '폐렴', code: 'J12~J18, A48.1, B05.2' },
      { num: '8', disease: '결핵', code: 'A15~A19, B90' },
      { num: '9', disease: '패혈증', code: 'A40~A41' },
      { num: '10', disease: '중추신경계통의염증성질환', code: 'G00~G09' },
      { num: '11', disease: '파킨슨병', code: 'G20~G22' },
      { num: '12', disease: '다발경화증', code: 'G35' },
      { num: '13', disease: '자율신경계통의 장애', code: 'G90' },
      { num: '14', disease: '대동맥류', code: 'I71' },
      { num: '15', disease: '폐질환', code: 'J80~J84, J96~J99' },
      { num: '16', disease: '급성 췌장염', code: 'K85' },
      { num: '17', disease: '췌장질환', code: 'K86~K87' },
      { num: '18', disease: '크로이츠펠트-야콥병', code: 'A81.0' },
      { num: '19', disease: '조로증', code: 'E34.8' },
      { num: '20', disease: '기타동맥류 박리', code: 'I72' }
    ]
  },
  {
    title: '5대 질병 수술',
    items: [
      { num: '1', disease: '위십이지장궤양', code: 'K25~K27' },
      { num: '2', disease: '녹내장', code: 'H40, H42' },
      { num: '3', disease: '뇌전증', code: 'G40~G41' },
      { num: '4', disease: '버거씨병', code: 'I73.1' },
      { num: '5', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '69대 생활질환 수술',
    items: [
      { num: '1', disease: '담석증', code: 'K80' },
      { num: '2', disease: '편도염', code: 'J35' },
      { num: '3', disease: '축농증', code: 'J32' },
      { num: '4', disease: '사타구니탈장', code: 'K40' },
      { num: '5', disease: '손목터널증후군', code: 'G56.0' },
      { num: '6', disease: '어깨병변', code: 'M75' },
      { num: '7', disease: '골다공증', code: 'M80~M82, M84' },
      { num: '8', disease: '황반변성', code: 'H35.3' },
      { num: '9', disease: '급성상기도감염', code: 'J00~J06' },
      { num: '10', disease: '담낭담도질환', code: 'K81~K83' },
      { num: '11', disease: '인후부위의 특정질환', code: 'J37~J39' },
      { num: '12', disease: '특정 부위의 탈장', code: 'K41~K46' },
      { num: '13', disease: '후각특정질환', code: 'J34' },
      { num: '14', disease: '중이의 진주종 및 폴립', code: 'H71, H74.4' },
      { num: '15', disease: '귀경화증', code: 'H80' },
      { num: '16', disease: '인플루엔자', code: 'J09~J11' },
      { num: '17', disease: '기타 급성 하기도감염', code: 'J20~J22' },
      { num: '18', disease: '외부요인 폐질환', code: 'J60~J70' },
      { num: '19', disease: '기타 호흡기질환', code: 'J80~J99' },
      { num: '20', disease: '근육장애', code: 'M60~M63' },
      { num: '21', disease: '발바닥근막성섬유종증', code: 'M72.2' },
      { num: '22', disease: '중이 및 유돌의 질환', code: 'H65~H75' },
      { num: '23', disease: '내이의 질환', code: 'H80~H83' },
      { num: '24', disease: '눈 및 눈부속기관의 특정질환', code: 'H00~H59' },
      { num: '25', disease: '사구체질환', code: 'N00~N08' },
      { num: '26', disease: '신세뇨관-간질질환', code: 'N10~N16' },
      { num: '27', disease: '신장 및 요관의 기타 장애', code: 'N25~N29' },
      { num: '28', disease: '비뇨계통의 기타 질환', code: 'N30~N39' },
      { num: '29', disease: '유방의 장애', code: 'N60~N64' },
      { num: '30', disease: '비감염성 장염 및 결장염', code: 'K50~K52' },
      { num: '31', disease: '특정 장질환', code: 'K55~K57' },
      { num: '32', disease: '복막의 질환', code: 'K65~K67' },
      { num: '33', disease: '척추변형', code: 'M40~M43' },
      { num: '34', disease: '척추병증', code: 'M45~M48' },
      { num: '35', disease: '추간판장애(디스크질환)', code: 'M50~M51' },
      { num: '36', disease: '안면신경장애', code: 'G50~G52' },
      { num: '37', disease: '단일신경병증', code: 'G56~G59' },
      { num: '38', disease: '특정 누적외상성질환', code: 'M35, M53.1, M70~M79' },
      { num: '39', disease: '윤활막 및 힘줄장애', code: 'M65~M68' },
      { num: '40', disease: '식도질환', code: 'K20~K23' },
      { num: '41', disease: '위,십이지장 질환', code: 'K29~K30' },
      { num: '42', disease: '외이의 질환 및 귀의 기타장애', code: 'H60~H62, H90~H95' },
      { num: '43', disease: '장의 특정기타질환', code: 'K59~K63' },
      { num: '44', disease: '특정 요도질환', code: 'N34~N36' },
      { num: '45', disease: '당뇨병질환', code: 'E10~E14, G59.0, G63.2, H28.0, H36.0, M14.2, N08.3' },
      { num: '46', disease: '고혈압질환', code: 'I10~I13, I15, I67.4, H35.02' },
      { num: '47', disease: '소화기계통의 양성신생물', code: 'D12~D13' },
      { num: '48', disease: '중이.호흡계통 및 흉각의 양성신생물', code: 'D14' },
      { num: '49', disease: '골 및 관절연골의 양성신생물', code: 'D16' },
      { num: '50', disease: '조직의 양성신생물', code: 'D17, D21' },
      { num: '51', disease: '유방의 양성신생물', code: 'D24' },
      { num: '52', disease: '생식기의 양성신생물', code: 'D25~D29' },
      { num: '53', disease: '비뇨기관의 양성신생물', code: 'D30' },
      { num: '54', disease: '수막의 양성신생물', code: 'D32' },
      { num: '55', disease: '뇌 및 중추신경계통의 양성신생물', code: 'D33' },
      { num: '56', disease: '갑상선 및 내분비선의 양성신생물', code: 'D34~D35' },
      { num: '57', disease: '주침샘의 양성 신생물', code: 'D11' },
      { num: '58', disease: '부갑상선기능질환', code: 'E21' },
      { num: '59', disease: '뇌하수체기능질환', code: 'E22~E23' },
      { num: '60', disease: '특정소화기질환', code: 'K90~K93' },
      { num: '61', disease: '장흡수장애', code: 'K90' },
      { num: '62', disease: '비장질환', code: 'D73' },
      { num: '63', disease: '전신결합조직장애', code: 'M30~M36' },
      { num: '64', disease: '대사장애', code: 'E70~E90' },
      { num: '65', disease: '수면무호흡증', code: 'G47.3' },
      { num: '66', disease: '결막장애', code: 'H10~H13' },
      { num: '67', disease: '침샘질환', code: 'K11' },
      { num: '68', disease: '갑상선질환', code: 'E00~E07, E89.0' },
      { num: '69', disease: '기타 등병증', code: 'M53~M54' }
    ]
  },
  {
    title: '특정 다빈도 3대 질병 수술',
    items: [
      { num: '1', disease: '관절염', code: 'M00~M03, M05~M14, M15~M19, M20~M25' },
      { num: '2', disease: '백내장', code: 'H25~H27' },
      { num: '3', disease: '생식기질환', code: 'N40~N51, N70~N77, N80~N95, N99' }
    ]
  },
  {
    title: '22대 질병 수술',
    items: [
      { num: '1', disease: '치핵', code: 'K64' },
      { num: '2', disease: '치열 및 치루', code: 'K60' },
      { num: '3', disease: '중증근무력증', code: 'G70.0' },
      { num: '4', disease: '전신결합조직장애II', code: 'M30~M36' },
      { num: '5', disease: '안와장애', code: 'H05' },
      { num: '6', disease: '유리체의 장애', code: 'H43' },
      { num: '7', disease: '골수염', code: 'M86' },
      { num: '8', disease: '골괴사증', code: 'M87' },
      { num: '9', disease: '뼈의 파젯병', code: 'M88' },
      { num: '10', disease: '연골병증', code: 'M91~M94' },
      { num: '11', disease: '눈 및 부속기 양성신생물', code: 'D31' },
      { num: '12', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '13', disease: '하지정맥류', code: 'I83' },
      { num: '14', disease: '신장 및 요관의 결석', code: 'N20' },
      { num: '15', disease: '충수질환', code: 'K35~K38' },
      { num: '16', disease: '요도결석증', code: 'N21.1' },
      { num: '17', disease: '방광의 결석', code: 'N21.0' },
      { num: '18', disease: '다낭성 난소증후군', code: 'E28.2' },
      { num: '19', disease: '대상포진', code: 'B02' },
      { num: '20', disease: '식도정맥류', code: 'I85' },
      { num: '21', disease: '안구의 장애', code: 'H44, H55, H57' },
      { num: '22', disease: '음낭 정맥류', code: 'I86.1' }
    ]
  }
];

// DB손해보험 119대 질병수술 분류표 데이터
export const DB_SURGERY_119_SECTIONS = [
  {
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00  I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05  I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20  I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26  I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30  I52' },
      { num: '6', disease: '수막구균성 심장염', code: 'A39.5†' },
      { num: '7', disease: '칸디다 심장염', code: 'B37.6†' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌내출혈 및 기타 비외상성 뇌내출혈', code: 'I60  I62' },
      { num: '2', disease: '뇌경색증', code: 'I63' },
      { num: '3', disease: '뇌경색증을 유발하지 않은 뇌전동맥/대뇌아동맥의 폐쇄 및 협착', code: 'I65  I66' },
      { num: '4', disease: '기타 뇌혈관질환 및 뇌혈관질환의 후유증', code: 'I67  I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15  B19' },
      { num: '2', disease: '간의 질환(알코올성 간질환, 간경변증 등)', code: 'K70  K77' },
      { num: '3', disease: '거세포바이러스성 간염', code: 'B25.1†' },
      { num: '4', disease: '톡소포자충 간염', code: 'B58.1†' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증(동맥경화증)', code: 'I70' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '급성 신부전', code: 'N17' },
      { num: '2', disease: '만성 신장병(만성 신부전)', code: 'N18' },
      { num: '3', disease: '상세불명의 신부전', code: 'N19' }
    ]
  },
  {
    title: '만성하부호흡기질환',
    items: [
      { num: '1', disease: '기관지염, 천식, 폐기종, 만성 폐쇄성 폐질환', code: 'J40  J47' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '폐렴(세균성, 바이러스성 등)', code: 'J12  J18' },
      { num: '2', disease: '레지오넬라병', code: 'A48.1' },
      { num: '3', disease: '홍역 폐렴', code: 'B05.2' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '호흡기 결핵 및 기타 결핵', code: 'A15  A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '패혈증',
    items: [
      { num: '1', disease: '연쇄구균 패혈증 및 기타 패혈증', code: 'A40  A41' }
    ]
  },
  {
    title: '중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '세균성 수막염, 뇌염, 뇌척수염 및 척수염', code: 'G00  G09' }
    ]
  },
  {
    title: '파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병 및 이차성 파킨슨증', code: 'G20  G22' }
    ]
  },
  {
    title: '다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '대동맥류',
    items: [
      { num: '1', disease: '대동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '폐질환',
    items: [
      { num: '1', disease: '성인호흡곤란증후군, 폐부종, 간질성 폐질환', code: 'J80  J84' },
      { num: '2', disease: '호흡부전 및 기타 호흡기 장애', code: 'J96  J99' }
    ]
  },
  {
    title: '급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '췌장질환',
    items: [
      { num: '1', disease: '기타 췌장질환(만성 췌장염 등)', code: 'K86  K87' }
    ]
  },
  {
    title: '크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '조로증',
    items: [
      { num: '1', disease: '조로증', code: 'E34.8' }
    ]
  },
  {
    title: '기타동맥류 박리',
    items: [
      { num: '1', disease: '기타 동맥의 동맥류 및 박리', code: 'I72' }
    ]
  },
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양, 십이지장궤양, 상세불명 부위의 소화성 궤양', code: 'K25  K27' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장 및 달리 분류된 질환에서의 녹내장', code: 'H40, H42' }
    ]
  },
  {
    title: '뇌전증',
    items: [
      { num: '1', disease: '뇌전증 및 뇌전증 지속상태', code: 'G40  G41' }
    ]
  },
  {
    title: '버거씨병',
    items: [
      { num: '1', disease: '폐색성 혈전혈관염(버거씨병)', code: 'I73.1' }
    ]
  },
  {
    title: '위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염(축농증)', code: 'J32' }
    ]
  },
  {
    title: '사타구니탈장',
    items: [
      { num: '1', disease: '서타구니(사타구니) 탈장', code: 'K40' }
    ]
  },
  {
    title: '손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군(수근관증후군)', code: 'G56.0' }
    ]
  },
  {
    title: '어깨병변',
    items: [
      { num: '1', disease: '어깨병변(회전근개 증후군, 오십견 등)', code: 'M75' }
    ]
  },
  {
    title: '골다공증',
    items: [
      { num: '1', disease: '골다공증 및 병적 골절을 동반한 골다공증', code: 'M80  M82, M84' }
    ]
  },
  {
    title: '황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '급성상기도감염',
    items: [
      { num: '1', disease: '급성 비인두염, 급성 부비동염 등 급성 상기도 감염', code: 'J00  J06' }
    ]
  },
  {
    title: '담낭담도질환',
    items: [
      { num: '1', disease: '담낭염 및 기타 담낭담도의 질환', code: 'K81  K83' }
    ]
  },
  {
    title: '인후부위의 특정질환',
    items: [
      { num: '1', disease: '만성 후두염, 후두 및 인후부의 기타 질환', code: 'J37  J39' }
    ]
  },
  {
    title: '특정 부위의 탈장',
    items: [
      { num: '1', disease: '대퇴탈장, 배꼽탈장, 복벽탈장 등', code: 'K41  K46' }
    ]
  },
  {
    title: '후각특정질환',
    items: [
      { num: '1', disease: '코 및 부비동의 기타 장애', code: 'J34' }
    ]
  },
  {
    title: '중이의 진주종 및 폴립',
    items: [
      { num: '1', disease: '중이의 진주종 및 중이의 폴립', code: 'H71, H74.4' }
    ]
  },
  {
    title: '귀경화증',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '인플루엔자',
    items: [
      { num: '1', disease: '인플루엔자(독감)', code: 'J09  J11' }
    ]
  },
  {
    title: '기타 급성 하기도감염',
    items: [
      { num: '1', disease: '급성 기관지염 및 급성 세기관지염', code: 'J20  J22' }
    ]
  },
  {
    title: '외부요인 폐질환',
    items: [
      { num: '1', disease: '진폐증, 먼지/유기물질/약제에 의한 폐질환', code: 'J60  J70' }
    ]
  },
  {
    title: '기타 호흡기질환',
    items: [
      { num: '1', disease: '기타 호흡기 질환', code: 'J80  J99' }
    ]
  },
  {
    title: '근육장애',
    items: [
      { num: '1', disease: '근염, 근육의 석회화 및 기타 근육 장애', code: 'M60  M63' }
    ]
  },
  {
    title: '발바닥근막성섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증(족저근막염)', code: 'M72.2' }
    ]
  },
  {
    title: '중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '삼출성 중이염, 화농성 중이염 및 유돌염', code: 'H65  H75' }
    ]
  },
  {
    title: '내이의 질환',
    items: [
      { num: '1', disease: '메니에르병, 현훈 및 내이 질환', code: 'H80  H83' }
    ]
  },
  {
    title: '눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '눈 다래끼, 공막염, 각막염, 사시 등', code: 'H00  H59' }
    ]
  },
  {
    title: '사구체질환',
    items: [
      { num: '1', disease: '급성/만성 사구체신염, 신증후군', code: 'N00  N08' }
    ]
  },
  {
    title: '신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성/만성 신장염(신우신염)', code: 'N10  N16' }
    ]
  },
  {
    title: '신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '신장의 수축, 위축, 요관 장애', code: 'N25  N29' }
    ]
  },
  {
    title: '비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염, 신경성 방광, 요도증후군', code: 'N30  N39' }
    ]
  },
  {
    title: '유방의 장애',
    items: [
      { num: '1', disease: '유방의 섬유낭성 증후군, 유방의 비대/통증', code: 'N60  N64' }
    ]
  },
  {
    title: '비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병, 궤양성 대장염, 궤양성 장염', code: 'K50  K52' }
    ]
  },
  {
    title: '특정 장질환',
    items: [
      { num: '1', disease: '장관의 혈관장애, 게실질환, 마비성 장폐색증', code: 'K55  K57' }
    ]
  },
  {
    title: '복막의 질환',
    items: [
      { num: '1', disease: '복막염, 복막의 유착', code: 'K65  K67' }
    ]
  },
  {
    title: '척추변형',
    items: [
      { num: '1', disease: '척추측만증, 척추후만증, 척추전만증', code: 'M40  M43' }
    ]
  },
  {
    title: '척추병증',
    items: [
      { num: '1', disease: '강직성 척추염, 척추증, 척추관 협착증', code: 'M45  M48' }
    ]
  },
  {
    title: '추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '목디스크(경추 추간판장애), 허리디스크(요추 추간판장애)', code: 'M50  M51' }
    ]
  },
  {
    title: '안면신경장애',
    items: [
      { num: '1', disease: '삼차신경통, 안면신경 장애(벨마비)', code: 'G50  G52' }
    ]
  },
  {
    title: '단일신경병증',
    items: [
      { num: '1', disease: '상지/하지의 단일신경병증', code: 'G56  G59' }
    ]
  },
  {
    title: '특정 누적외상성질환',
    items: [
      { num: '1', disease: '건초염, 근육관절통, 경경완증후군', code: 'M35, M53.1, M70  M79' }
    ]
  },
  {
    title: '윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막염, 건초염, 힘줄 파열', code: 'M65  M68' }
    ]
  },
  {
    title: '식도질환',
    items: [
      { num: '1', disease: '식도염, 역류성 식도염, 식도 궤양', code: 'K20  K23' }
    ]
  },
  {
    title: '위,십이지장 질환',
    items: [
      { num: '1', disease: '급성/만성 위염, 십이지장염, 소화불량', code: 'K29  K30' }
    ]
  },
  {
    title: '외이의 질환 및 귀의 기타장애',
    items: [
      { num: '1', disease: '외이도염, 난청, 이명', code: 'H60  H62, H90  H95' }
    ]
  },
  {
    title: '장의 특정기타질환',
    items: [
      { num: '1', disease: '과민성 대장 증후군, 치열/치루 제외 장 질환', code: 'K59  K63' }
    ]
  },
  {
    title: '특정 요도질환',
    items: [
      { num: '1', disease: '요도염, 요도협착', code: 'N34  N36' }
    ]
  },
  {
    title: '당뇨병질환',
    items: [
      { num: '1', disease: '인슐린 의존/비의존 당뇨병 및 당뇨 합병증', code: 'E10  E14, G59.0, G63.2, H28.0, H36.0, M14.2, N08.3' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성 고혈압, 고혈압성 심장/신장 질환, 이차성 고혈압', code: 'I10  I13, I15, I67.4, H35.02' }
    ]
  },
  {
    title: '소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '위, 소장, 대장, 용종(폴립) 등 소화기 양성종양', code: 'D12  D13' }
    ]
  },
  {
    title: '중이.호흡계통 및 흉각의 양성신생물',
    items: [
      { num: '1', disease: '코, 후두, 기관지, 폐의 양성신생물', code: 'D14' }
    ]
  },
  {
    title: '골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '뼈 및 관절연골의 양성신생물', code: 'D16' }
    ]
  },
  {
    title: '조직의 양성신생물',
    items: [
      { num: '1', disease: '지방종, 결합조직 및 연조직의 양성신생물', code: 'D17, D21' }
    ]
  },
  {
    title: '유방의 양성신생물',
    items: [
      { num: '1', disease: '유방 선종, 섬유선종, 유방 양성종양', code: 'D24' }
    ]
  },
  {
    title: '생식기의 양성신생물',
    items: [
      { num: '1', disease: '자궁근종, 난소 양성종양, 자궁경부 폴립', code: 'D25  D29' }
    ]
  },
  {
    title: '비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '신장, 방광, 요도 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '수막의 양성신생물',
    items: [
      { num: '1', disease: '뇌수막종, 척수수막종', code: 'D32' }
    ]
  },
  {
    title: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌양성종양, 뇌신경 양성신생물', code: 'D33' }
    ]
  },
  {
    title: '갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선 선종, 부신 양성신생물', code: 'D34  D35' }
    ]
  },
  {
    title: '주침샘의 양성 신생물',
    items: [
      { num: '1', disease: '귀밑샘, 턱밑샘의 양성신생물', code: 'D11' }
    ]
  },
  {
    title: '부갑상선기능질환',
    items: [
      { num: '1', disease: '부갑상선 기능항진증/기능저하증', code: 'E21' }
    ]
  },
  {
    title: '뇌하수체기능질환',
    items: [
      { num: '1', disease: '뇌하수체 기능항진증/기능저하증', code: 'E22  E23' }
    ]
  },
  {
    title: '특정소화기질환',
    items: [
      { num: '1', disease: '기타 소화계통의 질환', code: 'K90  K93' }
    ]
  },
  {
    title: '장흡수장애',
    items: [
      { num: '1', disease: '복강병, 소화흡수 장애', code: 'K90' }
    ]
  },
  {
    title: '비장질환',
    items: [
      { num: '1', disease: '비장종대, 비장 농양, 비장 질환', code: 'D73' }
    ]
  },
  {
    title: '전신결합조직장애',
    items: [
      { num: '1', disease: '루푸스, 전신경화증, 다발성근염', code: 'M30  M36' }
    ]
  },
  {
    title: '대사장애',
    items: [
      { num: '1', disease: '아미노산 대사장애, 지질대사장애, 고지혈증', code: 'E70  E90' }
    ]
  },
  {
    title: '수면무호흡증',
    items: [
      { num: '1', disease: '폐색성 수면무호흡증', code: 'G47.3' }
    ]
  },
  {
    title: '결막장애',
    items: [
      { num: '1', disease: '결막염, 익상편(군날개)', code: 'H10  H13' }
    ]
  },
  {
    title: '침샘질환',
    items: [
      { num: '1', disease: '타석증, 침샘염', code: 'K11' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선 기능항진증, 갑상선 기능저하증, 갑상선염', code: 'E00  E07, E89.0' }
    ]
  },
  {
    title: '기타 등병증',
    items: [
      { num: '1', disease: '요통, 좌골신경통, 등통증', code: 'M53  M54' }
    ]
  },
  {
    title: '관절염',
    items: [
      { num: '1', disease: '류마티스 관절염, 퇴행성 관절염(골관절염), 무릎관절증', code: 'M00  M03, M05  M14, M15  M19, M20  M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년 백내장, 기타 백내장, 수정체 장애', code: 'H25  H27' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '전립선비대증, 골반염, 자궁내막증, 자궁경부이형성증', code: 'N40  N51, N70  N77, N80  N95, N99' }
    ]
  },
  {
    title: '치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위 정맥혈전증(치질)', code: 'K64' }
    ]
  },
  {
    title: '치열 및 치루',
    items: [
      { num: '1', disease: '항문 및 직장부위의 치열 및 치루', code: 'K60' }
    ]
  },
  {
    title: '중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증', code: 'G70.0' }
    ]
  },
  {
    title: '전신결합조직장애II',
    items: [
      { num: '1', disease: '다발성 결절성 동맥염, 육아종증', code: 'M30  M36' }
    ]
  },
  {
    title: '안와장애',
    items: [
      { num: '1', disease: '안와 염증, 안와 함몰/장애', code: 'H05' }
    ]
  },
  {
    title: '유리체의 장애',
    items: [
      { num: '1', disease: '유리체 출혈, 유리체 혼탁', code: 'H43' }
    ]
  },
  {
    title: '골수염',
    items: [
      { num: '1', disease: '급성/만성 골수염', code: 'M86' }
    ]
  },
  {
    title: '골괴사증',
    items: [
      { num: '1', disease: '대퇴골두 무혈성 괴사증 등 골괴사증', code: 'M87' }
    ]
  },
  {
    title: '뼈의 파젯병',
    items: [
      { num: '1', disease: '변형성 골염(뼈의 파젯병)', code: 'M88' }
    ]
  },
  {
    title: '연골병증',
    items: [
      { num: '1', disease: '구경골 골연골증, 척추 골연골증', code: 'M91  M94' }
    ]
  },
  {
    title: '눈 및 부속기 양성신생물',
    items: [
      { num: '1', disease: '안구, 눈꺼풀, 결막 양성신생물', code: 'D31' }
    ]
  },
  {
    title: '동맥색전증 및 혈전증',
    items: [
      { num: '1', disease: '복부대동맥/사지동맥 색전증 및 혈전증', code: 'I74' }
    ]
  },
  {
    title: '하지정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류(통증/부종 동반)', code: 'I83' }
    ]
  },
  {
    title: '신장 및 요관의 결석',
    items: [
      { num: '1', disease: '신장 결석 및 요관 결석', code: 'N20' }
    ]
  },
  {
    title: '충수질환',
    items: [
      { num: '1', disease: '급성 충수염(맹장염) 및 충수 기타 질환', code: 'K35  K38' }
    ]
  },
  {
    title: '요도결석증',
    items: [
      { num: '1', disease: '하부 요로의 결석(요도결석)', code: 'N21.1' }
    ]
  },
  {
    title: '방광의 결석',
    items: [
      { num: '1', disease: '방광 결석', code: 'N21.0' }
    ]
  },
  {
    title: '다낭성 난소증후군',
    items: [
      { num: '1', disease: '다낭성 난소 증후군', code: 'E28.2' }
    ]
  },
  {
    title: '대상포진',
    items: [
      { num: '1', disease: '대상포진 및 대상포진 신경통', code: 'B02' }
    ]
  },
  {
    title: '식도정맥류',
    items: [
      { num: '1', disease: '출혈/비출혈성 식도정맥류', code: 'I85' }
    ]
  },
  {
    title: '안구의 장애',
    items: [
      { num: '1', disease: '안구 안구진, 사시, 안구 장애', code: 'H44, H55, H57' }
    ]
  },
  {
    title: '음낭 정맥류',
    items: [
      { num: '1', disease: '음낭 정맥류(정색관 정맥류)', code: 'I86.1' }
    ]
  }
];

// DB손해보험 1-5종 수술비(동일질병당) 상단 요약 분류표 데이터
export const DB_SURGERY_1_5_SUMMARY_SECTIONS = [
  { category: '1종 수술', diseases: '축농증, 편도, 치핵, 하지정맥류, 백내장, 요실금, 제왕절개, 피부이식(25%미만) 등' },
  { category: '2종 수술', diseases: '골이식, 맹장(충수절제), 사지골/관절 관혈, 자궁/난소/난관 관혈, 체외충격파쇄석술 등' },
  { category: '3종 수술', diseases: '유방절단술, 척추골/골반골 관혈, 관혈적 뇌/심장 수술 제외 신경/혈관 관혈, 녹내장 관혈 등' },
  { category: '4종 수술', diseases: '위/간/췌장/십이지장 개복 관혈수술, 개흉술 수반 폐/기관지 수술, 신장/방광 개복수술 등' },
  { category: '5종 수술', diseases: '개흉/개복 대동맥/관동맥 관혈수술, 심장내 관혈수술, 뇌하수체종양 절제술, 장기이식수술 등' },
];

// DB손해보험 1-5종 수술비(질병통합치료비) 상단 요약 분류표 데이터 (동일 양식 적용)
export const DB_SURGERY_1_5_OLD_SUMMARY_SECTIONS = DB_SURGERY_1_5_SUMMARY_SECTIONS;

// DB손해보험 구 1-5종 수술 분류표 데이터 (기존 1-5종 수술)
export const DB_SURGERY_1_5_OLD_SECTIONS = [
  {
    title: 'I. 피부, 유방의 수술',
    items: [
      { num: '1', disease: '피부이식수술(25 이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25 미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(, Mastectomy)', code: '3종' },
      { num: '4', disease: '기타 유방수술 [농양(고름집)의 절개 및 배액은 제외]', code: '1종' }
    ]
  },
  {
    title: 'II. 근골()의 수술 [발정술() 등 내고정물 제거술은 제외함]',
    items: [
      { num: '5', disease: '골() 이식수술', code: '2종' },
      { num: '6', disease: '두개골(, cranium) 관혈수술 [비골()비중격()상악골()하악골()악관절()은 제외]', code: '3종' },
      { num: '7', disease: '비골() 수술 [비중격 만곡증()수술]', code: '1종' },
      { num: '8', disease: '상악골(), 하악골(), 악관절() 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(), 골반골(), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(), 견갑골(), 늑골(), 흉골() 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단()에 수반하는 것]', code: '1종' },
      { num: '11-2', disease: '기타 사지() 절단수술 [다지증에 대한 절단수술은 제외]', code: '3종' },
      { num: '12', disease: '절단()된 사지() 재접합수술() [골, 관절의 이단()에 수반하는 것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(), 사기관절() 관혈수술', code: '2종' },
      { num: '14', disease: '근(), 건(), 인대(), 연골() 관혈수술', code: '1종' }
    ]
  },
  {
    title: 'III. 호흡기계, 흉부()의 수술',
    items: [
      { num: '15', disease: '만성부비강염() 근본수술()', code: '1종' },
      { num: '16', disease: '후두() 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(), 기관지(), 폐(), 흉막() 관혈수술 [개흉술(, Thoracotomy)을 수반하는 것]', code: '4종' },
      { num: '19', disease: '폐장(폐) 이식수술 [수용자()에 한함]', code: '5종' },
      { num: '20', disease: '흉각() 형성수술()', code: '3종' },
      { num: '21', disease: '종격종양(), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    title: 'IV. 순환기계, 비장()의 수술',
    items: [
      { num: '22', disease: '혈관관혈수술 [하지정맥류 및 손가락발가락은 제외]', code: '3종' },
      { num: '23', disease: '하지 정맥류() 근본수술 및 손가락발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(), 대정맥(), 폐동맥(), 관동맥() 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심막() 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
      { num: '26', disease: '심장내() 관혈수술 [개흉술을 수반하는 것]', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', code: '5종' },
      { num: '28', disease: '체내용() 인공심박조율기(, Artificial pacemaker) 매입술()', code: '3종' },
      { num: '29', disease: '비장() 절제수술', code: '3종' }
    ]
  },
  {
    title: 'V. 소화기계의 수술',
    items: [
      { num: '30', disease: '이하선 절제수술', code: '3종' },
      { num: '31-1', disease: '악하선, 설하선 절제수술', code: '2종' },
      { num: '31-2', disease: '기타 타액선 절제수술 (타석제거는 제외)', code: '1종' },
      { num: '32', disease: '식도() 이단술() [개흉술, 개복술(, Laparotomy)을 수반하는 것]', code: '4종' },
      { num: '33', disease: '위 절제수술( , Gastrectomy) [개복술을 수반하는 것]', code: '4종' },
      { num: '34', disease: '기타의 위식도 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '3종' },
      { num: '35', disease: '간장(), 췌장() 관혈수술 [개복술을 수반하는 것]', code: '4종' },
      { num: '36', disease: '담낭(), 담도() 관혈수술 [개복술을 수반하는 것]', code: '3종' },
      { num: '37', disease: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', code: '5종' },
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외)', code: '5종' },
      { num: '39', disease: '탈장() 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염(복막염, Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수()절제술(충수염관련 충수주위 농양(고름집)수술, 국한성 복막염 수술 포함), 맹장봉축술()', code: '2종' },
      { num: '42', disease: '직장탈() 근본수술', code: '1종' },
      { num: '43', disease: '소장(), 결장(), 직장(), 장간막() 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', code: '4종' },
      { num: '44', disease: '치루(), 치열(), 치핵() 근본수술 [근치를 목적으로 하지 않은 수술은 제외]', code: '1종' }
    ]
  },
  {
    title: 'VI. 비뇨기계, 생식기계의 수술 [인공임신중절수술은 제외함]',
    items: [
      { num: '45', disease: '신장(), 방광(), 신우(), 요관() 관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외]', code: '2종' },
      { num: '47', disease: '방광류 교정수술', code: '1종' },
      { num: '48', disease: '요실금수술(급여)', code: '1종' },
      { num: '49', disease: '신장() 이식수술() [수용자에 한함]', code: '5종' },
      { num: '50', disease: '음경() 절단수술 [포경수술 및 음경이물제거수술은 제외]', code: '3종' },
      { num: '51', disease: '고환(), 부고환(), 정관(), 정색(), 정낭()관혈수술, 전립선()관혈수술', code: '2종' },
      { num: '52', disease: '음낭관혈수술', code: '1종' },
      { num: '53', disease: '자궁, 난소, 난관 관혈수술 [단, 제왕절개만출술 및 경질적인 조작은 제외]', code: '2종' },
      { num: '54', disease: '제왕절개만출술()', code: '1종' },
      { num: '55', disease: '경질적 자궁, 난소, 난관 수술', code: '1종' },
      { num: '56', disease: '질탈()근본수술', code: '1종' }
    ]
  },
  {
    title: 'VII. 내분비계의 수술',
    items: [
      { num: '57', disease: '뇌하수체종양() 절제수술', code: '5종' },
      { num: '58', disease: '갑상선()부갑상선() 관혈수술', code: '3종' },
      { num: '59', disease: '부신() 절제수술', code: '4종' }
    ]
  },
  {
    title: 'VIII. 신경계의 수술',
    items: [
      { num: '60', disease: '두개내() 관혈수술 [개두술(, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '61', disease: '신경() 관혈수술', code: '2종' },
      { num: '62', disease: '관혈적 척수종양() 절제수술', code: '4종' },
      { num: '63', disease: '척수경막내외() 관혈수술', code: '3종' }
    ]
  },
  {
    title: 'IX. 시각기의 수술 [약물주입술은 제외]',
    items: [
      { num: '64', disease: '안검하수증()수술 [안검내반증 제외]', code: '1종' },
      { num: '65', disease: '누소관() 형성수술', code: '1종' },
      { num: '66', disease: '누낭비강() 관혈수술', code: '2종' },
      { num: '67', disease: '결막낭() 형성수술', code: '2종' },
      { num: '68', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '69', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '70', disease: '전방(), 홍채(), 유리체() 관혈수술', code: '2종' },
      { num: '71', disease: '녹내장() 관혈수술', code: '3종' },
      { num: '72', disease: '백내장(), 수정체() 관혈수술', code: '1종' },
      { num: '73', disease: '망막박리() 수술', code: '2종' },
      { num: '74', disease: '레이저(Laser)에 의한 안구() 수술 [시력회복 및 시력개선 목적의 수술은 제외]', code: '1종' },
      { num: '75', disease: '냉동응고()에 의한 안구() 수술', code: '2종' },
      { num: '76', disease: '안구적출술, 조직충전술()', code: '3종' },
      { num: '77', disease: '안와내종양절제수술', code: '3종' },
      { num: '78', disease: '관혈적 안와내() 이물제거수술()', code: '1종' },
      { num: '79', disease: '안근()관혈수술', code: '1종' }
    ]
  },
  {
    title: 'X. 청각기()의 수술',
    items: [
      { num: '80', disease: '관혈적 고막() 성형술 [고막 패치술은 제외]', code: '2종' },
      { num: '81', disease: '유양동 절제술(, mastoidectomy)', code: '2종' },
      { num: '82', disease: '중이() 관혈수술 [중이내 튜브유치술 제외]', code: '2종' },
      { num: '83', disease: '중이내() 튜브유치술 [고막 패치술은 제외]', code: '1종' },
      { num: '84', disease: '내이() 관혈수술', code: '3종' }
    ]
  },
  {
    title: 'XI. 상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    items: [
      { num: '85', disease: '상기 이외의 개두술()', code: '3종' },
      { num: '86', disease: '상기 이외의 개흉술()', code: '3종' },
      { num: '87', disease: '상기 이외의 개복술()', code: '2종' },
      { num: '88', disease: '체외충격파쇄석술(, E.S.W.L) [체외충격파치료술(E.S.W.T)은 제외]', code: '2종' },
      { num: '89-1', disease: '내시경 수술 또는 카테터고주파 전극 등에 의한 경피적 수술 - 뇌, 심장', code: '3종' },
      { num: '89-2', disease: '내시경 수술 또는 카테터고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기[심장 제외], 복부장기[비뇨, 생식기 제외], 척추, 사지관절[손가락, 발가락은 제외]', code: '2종' },
      { num: '89-3', disease: '내시경 수술 또는 카테터고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' }
    ]
  },
  {
    title: '2. 악성신생물 치료목적의 수술',
    items: [
      { num: '1', disease: '관혈적 악성신생물(성신생물) 근치수술 (기타피부암 제외) [내시경, 카테터고주파경피적 등 제외]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44) 근치수술', code: '3종' },
      { num: '2', disease: '내시경 수술', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술', code: '3종' }
    ]
  },
  {
    title: '3. 악성신생물 근치두개내신생물 근치 방사선 조사 분류표',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사()를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료 포함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마나이프(Gammaknife) 정위적 방사선 치료', code: '3종' }
    ]
  }
];

// 삼성화재 10대 주요암 분류표 데이터

export const DB_SURGERY_1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy)', code: '3종' },
      { num: '4', disease: '기타 유방수술[농양(고름집)의 절개 및 배액은 제외]', code: '1종' }
    ]
  },
  {
    category: '2. 근골(筋骨)의 수술',
    title: '근골(筋骨)의 수술 [발정술(拔釘術)등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨)·비중격(鼻中隔)·상악골(上顎骨)·하악골(下顎骨)·악관절(頭關節)은 제외]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症) 수술]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(頭關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는 것, 다지증 제외]', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 [다지증에 대한 절단수술은 제외]', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는 것]', code: '3종' },
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
      { num: '19', disease: '폐장(肺臟) 이식수술[수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술[하지정맥류 및 손가락·발가락은 제외]', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술[개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심장막(心臟膜) 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
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
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외)', code: '5종' },
      { num: '39', disease: '탈장(脫腸) 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염(全身性腹膜炎, Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수(蟲垂)절제술(충수염관련 충수주위 농양(고름집)수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', code: '2종' },
      { num: '42', disease: '직장탈(直腸脫) 근본수술', code: '1종' },
      { num: '43', disease: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', code: '4종' },
      { num: '44', disease: '치루(痔漏), 치열(痔裂), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외]', code: '1종' }
    ]
  },
  {
    category: '6. 비뇨기계, 생식기계의 수술',
    title: '비뇨기계, 생식기계의 수술 [인공임신중절수술은 제외함]',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管)관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외]', code: '2종' },
      { num: '47', disease: '방광류 교정수술', code: '1종' },
      { num: '48', disease: '요실금수술(급여)', code: '1종' },
      { num: '49', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '50', disease: '음경(陰莖) 절단수술 [포경수술 및 음경이물제거수술은 제외]', code: '3종' },
      { num: '51', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊)관혈수술, 전립선(前立腺)관혈수술', code: '2종' },
      { num: '52', disease: '음낭관혈수술', code: '1종' },
      { num: '53', disease: '자궁, 난소, 난관 관혈수술 [단, 제왕절개만출술 및 경질적인 조작은 제외]', code: '2종' },
      { num: '54', disease: '제왕절개만출술(帝王切開産出術) (단, 질병1~5종수술비 II (동일질병당 1회지급) 및 질병1~5종수술비 II (10년후2배체증)(동일질병당 1회지급) 담보에서만 보장)', code: '1종' },
      { num: '55', disease: '경질적 자궁, 난소, 난관 수술', code: '1종' },
      { num: '56', disease: '질탈(膣脫)근본수술', code: '1종' }
    ]
  },
  {
    category: '7. 내분비계의 수술',
    title: '내분비계의 수술',
    group: '일반수술',
    items: [
      { num: '57', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '58', disease: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', code: '3종' },
      { num: '59', disease: '부신(副腎) 절제수술', code: '4종' }
    ]
  },
  {
    category: '8. 신경계의 수술',
    title: '신경계의 수술',
    group: '일반수술',
    items: [
      { num: '60', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '61', disease: '신경(神經) 관혈수술', code: '2종' },
      { num: '62', disease: '관혈적 척수종양(脊椎腫瘍) 절제수술', code: '4종' },
      { num: '63', disease: '척수경막내외(脊椎硬膜內外) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '9. 시각기의 수술',
    title: '시각기의 수술 [약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '64', disease: '안검하수증(眼檢下垂症) 수술 [안검내반증 제외]', code: '1종' },
      { num: '65', disease: '눈물소관(淚小管,눈물길)형성수술 [누관튜브삽입술 포함]', code: '1종' },
      { num: '66', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '67', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '68', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '69', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '70', disease: '전방(前房), 홍채(虹彩), 유리체(琉璃體) 관혈수술', code: '2종' },
      { num: '71', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '72', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '73', disease: '망막박리(網膜剝離) 수술', code: '2종' },
      { num: '74', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [시력회복 및 시력개선 목적의 수술은 제외]', code: '1종' },
      { num: '75', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술', code: '2종' },
      { num: '76', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '77', disease: '안와내종양절제수술', code: '3종' },
      { num: '78', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '79', disease: '안근(眼筋)관혈수술', code: '1종' }
    ]
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
      { num: '84', disease: '내이(內耳) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '11. 상기 이외의 수술',
    title: '상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '85', disease: '상기 이외의 개두술(開頭術)', code: '3종' },
      { num: '86', disease: '상기 이외의 개흉술(開胸術)', code: '3종' },
      { num: '87', disease: '상기 이외의 개복술(開腹術)', code: '2종' },
      { num: '88', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) [체외충격파치료술(E.S.W.T)은 제외]', code: '2종' },
      { num: '89-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장', code: '3종' },
      { num: '89-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기[심장 제외], 복부장기[비뇨, 생식기 제외], 척추, 사지관절[손가락, 발가락은 제외]', code: '2종' },
      { num: '89-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' }
    ]
  },
  {
    category: '2. 악성신생물 치료목적의 수술',
    title: '2. 악성신생물 치료목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery). 단, 기타피부암(C44) 제외 [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '3종' },
      { num: '2', disease: '내시경 수술', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술', code: '3종' }
    ]
  },
  {
    category: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    title: '3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마나이프(Gammaknife) 정위적 방사선 치료', code: '3종' }
    ]
  }
];

// 한화손해보험 상해및질병통합치료비 (1천만원 / 3천만원 / 4천만원) 데이터

export const DB_MAJOR_5VASCULAR_BRAIN_SECTIONS = [
  {
    category: '주요심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장질환 (협심증, 급성 심근경색증 등)', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병 (심낭염, 심근염, 심부전 등)', code: 'I30~I52' },
    ]
  },
  {
    category: '뇌혈관질환',
    items: [
      { num: '1', disease: '지주막하 출혈', code: 'I60' },
      { num: '2', disease: '뇌내 출혈', code: 'I61' },
      { num: '3', disease: '기타 비외상성 인트라크라니알 출혈', code: 'I62' },
      { num: '4', disease: '뇌경색증', code: 'I63' },
      { num: '5', disease: '출혈 또는 경색증으로 명시되지 않은 뇌중풍', code: 'I64' },
      { num: '6', disease: '뇌혈관을 마비시키지 않은 대뇌전동맥의 폐색 및 협착', code: 'I65' },
      { num: '7', disease: '뇌혈관을 마비시키지 않은 대뇌동맥의 폐색 및 협착', code: 'I66' },
      { num: '8', disease: '기타 뇌혈관 질환 (뇌동맥류 포함)', code: 'I67' },
      { num: '9', disease: '달리 분류된 질환에서의 뇌혈관 장애', code: 'I68' },
      { num: '10', disease: '뇌혈관 질환의 후유증', code: 'I69' }
    ]
  },
  {
    category: '5대혈관질환',
    items: [
      { num: '1', disease: '대동맥류 및 박리', code: 'I71' },
      { num: '2', disease: '기타 동맥류 및 동맥박리', code: 'I72' },
      { num: '3', disease: '폐색혈전혈관염[버거씨병]', code: 'I73.1' },
      { num: '4', disease: '기타 동맥 및 소동맥의 장애', code: 'I77' },
      { num: '5', disease: '달리 분류된 질환에서의 동맥, 소동맥 및 모세혈관 장애', code: 'I79' }
    ]
  },
  {
    category: '양성뇌종양',
    items: [
      { num: '1', disease: '수막의 양성 신생물 (뇌수막, 척수수막)', code: 'D32' },
      { num: '2', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' },
      { num: '3', disease: '뇌하수체의 양성 신생물', code: 'D35.2' },
      { num: '4', disease: '두개인두관의 양성 신생물', code: 'D35.3' },
      { num: '5', disease: '송과선의 양성 신생물', code: 'D35.4' }
    ]
  }
];

// KB손해보험 14대 질병 분류표 [별표] 데이터

export const DB_SURGERY_120_SUMMARY_SECTIONS = [
  {
    title: '20대 질병',
    items: [
      { num: '1', disease: '심장질환', code: '' },
      { num: '2', disease: '뇌혈관질환', code: '' },
      { num: '3', disease: '간질환', code: '' },
      { num: '4', disease: '동맥경화증', code: '' },
      { num: '5', disease: '만성 하부호흡기 질환', code: '' },
      { num: '6', disease: '폐렴', code: '' },
      { num: '7', disease: '결핵', code: '' },
      { num: '8', disease: '신부전', code: '' },
      { num: '9', disease: '패혈증', code: '' },
      { num: '10', disease: '중추신경계통의 염증성 질환', code: '' },
      { num: '11', disease: '파킨슨병', code: '' },
      { num: '12', disease: '다발경화증', code: '' },
      { num: '13', disease: '자율신경계통의 장애', code: '' },
      { num: '14', disease: '대동맥류', code: '' },
      { num: '15', disease: '폐질환', code: '' },
      { num: '16', disease: '급성 췌장염', code: '' },
      { num: '17', disease: '췌장질환', code: '' },
      { num: '18', disease: '크로이츠펠트-야콥병', code: '' },
      { num: '19', disease: '조로증', code: '' },
      { num: '20', disease: '기타 동맥류 및 박리', code: '' }
    ]
  },
  {
    title: '5대 질병',
    items: [
      { num: '1', disease: '위십이지장궤양', code: '' },
      { num: '2', disease: '녹내장', code: '' },
      { num: '3', disease: '뇌전증', code: '' },
      { num: '4', disease: '버거씨병', code: '' },
      { num: '5', disease: '위공장궤양', code: '' }
    ]
  },
  {
    title: '68대 생활질환',
    items: [
      { num: '1', disease: '담석증', code: '' },
      { num: '2', disease: '사타구니 탈장', code: '' },
      { num: '3', disease: '편도염', code: '' },
      { num: '4', disease: '축농증', code: '' },
      { num: '5', disease: '손목터널증후군', code: '' },
      { num: '6', disease: '어깨병변', code: '' },
      { num: '7', disease: '골다공증', code: '' },
      { num: '8', disease: '황반변성', code: '' },
      { num: '9', disease: '급성상기도감염', code: '' },
      { num: '10', disease: '담낭담도질환', code: '' },
      { num: '11', disease: '인후부위의 특정질환', code: '' },
      { num: '12', disease: '특정 부위의 탈장', code: '' },
      { num: '13', disease: '후각특정질환', code: '' },
      { num: '14', disease: '중이의 진주종 및 용종', code: '' },
      { num: '15', disease: '귀경화증', code: '' },
      { num: '16', disease: '인플루엔자', code: '' },
      { num: '17', disease: '기타 급성 하기도감염', code: '' },
      { num: '18', disease: '외부요인 폐질환', code: '' },
      { num: '19', disease: '기타 호흡기질환', code: '' },
      { num: '20', disease: '근육장애', code: '' },
      { num: '21', disease: '발바닥근막성 섬유종증', code: '' },
      { num: '22', disease: '중이 및 유돌의 질환', code: '' },
      { num: '23', disease: '내이의 질환', code: '' },
      { num: '24', disease: '눈 및 눈부속기관의 특정질환', code: '' },
      { num: '25', disease: '사구체질환', code: '' },
      { num: '26', disease: '신세뇨관-간질질환', code: '' },
      { num: '27', disease: '신장 및 요관의 기타 장애', code: '' },
      { num: '28', disease: '비뇨계통의 기타 질환', code: '' },
      { num: '29', disease: '유방의 장애', code: '' },
      { num: '30', disease: '비감염성 장염 및 결장염', code: '' },
      { num: '31', disease: '특정 장질환', code: '' },
      { num: '32', disease: '복막의 질환', code: '' },
      { num: '33', disease: '척추변형', code: '' },
      { num: '34', disease: '척추병증', code: '' },
      { num: '35', disease: '추간판장애(디스크질환)', code: '' },
      { num: '36', disease: '안면신경장애', code: '' },
      { num: '37', disease: '단일신경병증', code: '' },
      { num: '38', disease: '특정 누적외상성질환', code: '' },
      { num: '39', disease: '윤활막 및 힘줄장애', code: '' },
      { num: '40', disease: '식도질환', code: '' },
      { num: '41', disease: '위,십이지장 질환', code: '' },
      { num: '42', disease: '외이의 질환 및 귀의 기타장애', code: '' },
      { num: '43', disease: '장의 특정기타질환', code: '' },
      { num: '44', disease: '특정 요도질환', code: '' },
      { num: '45', disease: '당뇨병질환', code: '' },
      { num: '46', disease: '고혈압질환', code: '' },
      { num: '47', disease: '소화기계통의 양성신생물', code: '' },
      { num: '48', disease: '중이호흡계통 및 흉곽의 양성신생물', code: '' },
      { num: '49', disease: '골 및 관절연골의 양성신생물', code: '' },
      { num: '50', disease: '조직의 양성신생물', code: '' },
      { num: '51', disease: '유방의 양성신생물', code: '' },
      { num: '52', disease: '생식기의 양성신생물', code: '' },
      { num: '53', disease: '비뇨기관의 양성신생물', code: '' },
      { num: '54', disease: '수막의 양성신생물', code: '' },
      { num: '55', disease: '뇌 및 중추신경계통의 기타 부분의 양성신생물', code: '' },
      { num: '56', disease: '갑상선 및 내분비선의 양성신생물', code: '' },
      { num: '57', disease: '주침샘의 양성신생물', code: '' },
      { num: '58', disease: '부갑상선기능 질환', code: '' },
      { num: '59', disease: '뇌하수체기능 질환', code: '' },
      { num: '60', disease: '특정소화기 질환', code: '' },
      { num: '61', disease: '장흡수장애', code: '' },
      { num: '62', disease: '비장질환', code: '' },
      { num: '63', disease: '전신결합조직 장애', code: '' },
      { num: '64', disease: '대사장애', code: '' },
      { num: '65', disease: '수면무호흡증', code: '' },
      { num: '66', disease: '침샘질환', code: '' },
      { num: '67', disease: '갑상선질환', code: '' },
      { num: '68', disease: '기타 등병증', code: '' }
    ]
  },
  {
    title: '특정 다빈도 5대 질병',
    items: [
      { num: '1', disease: '관절염', code: '' },
      { num: '2', disease: '백내장', code: '' },
      { num: '3', disease: '결막장애', code: '' },
      { num: '4', disease: '생식기질환', code: '' },
      { num: '5', disease: '특정 망막질환', code: '' }
    ]
  },
  {
    title: '22대 질병',
    items: [
      { num: '1', disease: '치핵', code: '' },
      { num: '2', disease: '치열 및 치루', code: '' },
      { num: '3', disease: '중증근무력증', code: '' },
      { num: '4', disease: '전신결합조직장애 II', code: '' },
      { num: '5', disease: '안와장애', code: '' },
      { num: '6', disease: '유리체의 장애', code: '' },
      { num: '7', disease: '골수염', code: '' },
      { num: '8', disease: '골괴사증', code: '' },
      { num: '9', disease: '뼈의 파젯병', code: '' },
      { num: '10', disease: '연골병증', code: '' },
      { num: '11', disease: '눈 및 부속기 양성신생물', code: '' },
      { num: '12', disease: '동맥색전증 및 혈전증', code: '' },
      { num: '13', disease: '하지정맥류', code: '' },
      { num: '14', disease: '신장 및 요관의 결석', code: '' },
      { num: '15', disease: '충수질환', code: '' },
      { num: '16', disease: '요도결석증', code: '' },
      { num: '17', disease: '방광의 결석', code: '' },
      { num: '18', disease: '다낭성 난소증후군', code: '' },
      { num: '19', disease: '대상포진', code: '' },
      { num: '20', disease: '식도정맥류', code: '' },
      { num: '21', disease: '안구의 장애', code: '' },
      { num: '22', disease: '음낭 정맥류', code: '' }
    ]
  }
];

// DB손해보험 120대 질병수술 세부분류표 데이터 (119대 스타일 카드)
export const DB_SURGERY_120_SECTIONS = [
  // 20대 질병
  {
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00  I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05  I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20  I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26  I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30  I52' },
      { num: '6', disease: '수막알균성 심장염', code: 'A39.5†' },
      { num: '7', disease: '칸디다심내막염', code: 'B37.6†' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60  I69' }
    ]
  },
  {
    title: '간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15  B19' },
      { num: '2', disease: '간의 질환', code: 'K70  K77' },
      { num: '3', disease: '거세포바이러스간염', code: 'B25.1†' },
      { num: '4', disease: '톡소포자충간염', code: 'B58.1†' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '거세포바이러스폐렴', code: 'B25.0†' },
      { num: '8', disease: '폐렴이 합병된 홍역', code: 'B05.2†' },
      { num: '9', disease: '수두폐렴', code: 'B01.2†' },
      { num: '10', disease: '폐톡소포자충증', code: 'B58.3†' },
      { num: '11', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '12', disease: '재향군인병', code: 'A48.1' },
      { num: '13', disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15  A19' },
      { num: '2', disease: '결핵관절염', code: 'M01.1*' },
      { num: '3', disease: '척추의 결핵', code: 'M49.0*' },
      { num: '4', disease: '뼈의 결핵', code: 'M90.0*' },
      { num: '5', disease: '결핵성 방광염', code: 'N33.0*' },
      { num: '6', disease: '여성생식기관의 결핵', code: 'N74.0*, N74.1*' },
      { num: '7', disease: '결핵성 복막염', code: 'K67.3*' },
      { num: '8', disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0*' },
      { num: '9', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17  N19' }
    ]
  },
  {
    title: '패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '중추신경계통의 염증성 질환', code: 'G00  G09' },
      { num: '2', disease: '수막알균수막염', code: 'A39.0†' },
      { num: '3', disease: '아데노바이러스수막염', code: 'A87.1†' },
      { num: '4', disease: '엔테로바이러스수막염', code: 'A87.0†' },
      { num: '5', disease: '헤르페스바이러스수막염', code: 'B00.3†' },
      { num: '6', disease: '수막염이합병된홍역', code: 'B05.1†' },
      { num: '7', disease: '볼거리수막염', code: 'B26.1†' },
      { num: '8', disease: '수두수막염', code: 'B01.0†' },
      { num: '9', disease: '대상포진수막염', code: 'B02.1†' },
      { num: '10', disease: '칸디다수막염', code: 'B37.5†' },
      { num: '11', disease: '콕시디오이데스진균수막염', code: 'B38.4†' },
      { num: '12', disease: '아데노바이러스뇌염', code: 'A85.1†' },
      { num: '13', disease: '엔테로바이러스뇌염', code: 'A85.0†' },
      { num: '14', disease: '헤르페스바이러스뇌염', code: 'B00.4†' },
      { num: '15', disease: '뇌염이합병된홍역', code: 'B05.0†' },
      { num: '16', disease: '볼거리뇌염', code: 'B26.2†' },
      { num: '17', disease: '수두뇌염', code: 'B01.1†' },
      { num: '18', disease: '대상포진뇌염', code: 'B02.0†' },
      { num: '19', disease: '신경학적합병증을동반한풍진', code: 'B06.0†' },
      { num: '20', disease: '리스테리아수막염및수막뇌염', code: 'A32.1†' },
      { num: '21', disease: '아메바성뇌종양', code: 'A06.6†' },
      { num: '22', disease: '뇌의 특정염증성질환', code: 'A83  A86' }
    ]
  },
  {
    title: '파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' },
      { num: '2', disease: '[제외] 복합부위통증증후군 I 형', code: 'G90.5 제외' },
      { num: '3', disease: '[제외] 복합부위통증증후군 II 형', code: 'G90.6 제외' },
      { num: '4', disease: '[제외] 기타 및 상세불명 유형의 복합부위통증증후군', code: 'G90.7 제외' }
    ]
  },
  {
    title: '대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85  J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90  J94' }
    ]
  },
  {
    title: '급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { num: '3', disease: '거세포바이러스췌장염', code: 'B25.2†' },
      { num: '4', disease: '볼거리췌장염', code: 'B26.3†' }
    ]
  },
  {
    title: '크로이츠펠트-야콥병',
    items: [
      { num: '1', disease: '크로이츠펠트-야콥병', code: 'A81.0' }
    ]
  },
  {
    title: '조로증',
    items: [
      { num: '1', disease: '조로증', code: 'E34.8' }
    ]
  },
  {
    title: '기타 동맥류 박리',
    items: [
      { num: '1', disease: '기타 동맥류 및 박리', code: 'I72' }
    ]
  },

  // 5대 질병
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염[버거병]', code: 'I73.1' }
    ]
  },
  {
    title: '위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },

  // 68대 생활질환
  {
    title: '담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '어깨병변',
    items: [
      { num: '1', disease: '어깨병변', code: 'M75' }
    ]
  },
  {
    title: '골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00  J06' }
    ]
  },
  {
    title: '담낭담도질환',
    items: [
      { num: '1', disease: '담낭염(쓸개염)', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양(고름집)', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '특정 부위의 탈장',
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
    title: '후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '중이의 진주종 및 용종',
    items: [
      { num: '1', disease: '중이의 진주종', code: 'H71' },
      { num: '2', disease: '중이의 용종', code: 'H74.4' }
    ]
  },
  {
    title: '귀경화증',
    items: [
      { num: '1', disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    title: '인플루엔자',
    items: [
      { num: '1', disease: '확인된 동물매개 또는 범유행 인플루엔자바이러스에 의한 인플루엔자', code: 'J09' },
      { num: '2', disease: '확인된 계절성 인플루엔자바이러스에 의한 인플루엔자', code: 'J10' },
      { num: '3', disease: '바이러스가 확인되지 않은 인플루엔자', code: 'J11' }
    ]
  },
  {
    title: '기타 급성 하기도감염',
    items: [
      { num: '1', disease: '기타 급성 하기도감염', code: 'J20  J22' }
    ]
  },
  {
    title: '외부요인 폐질환',
    items: [
      { num: '1', disease: '외부요인에 의한 폐질환', code: 'J60  J70' }
    ]
  },
  {
    title: '기타 호흡기질환',
    items: [
      { num: '1', disease: '주로 간질에 영향을 주는 기타 호흡기질환', code: 'J80  J84' }
    ]
  },
  {
    title: '근육장애',
    items: [
      { num: '1', disease: '근육장애', code: 'M60  M63' }
    ]
  },
  {
    title: '발바닥근막성 섬유종증',
    items: [
      { num: '1', disease: '발바닥근막성 섬유종증', code: 'M72.2' }
    ]
  },
  {
    title: '중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환', code: 'H65  H75' },
      { num: '2', disease: '[제외] 중이의 진주종', code: 'H71 제외' },
      { num: '3', disease: '[제외] 중이의 용종', code: 'H74.4 제외' },
      { num: '4', disease: '중이염이합병된홍역', code: 'B05.3†' }
    ]
  },
  {
    title: '내이의 질환',
    items: [
      { num: '1', disease: '전정기능의 장애', code: 'H81' },
      { num: '2', disease: '달리 분류된 질환에서의 현기증후군', code: 'H82' },
      { num: '3', disease: '내이의 기타 질환', code: 'H83' }
    ]
  },
  {
    title: '눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15  H22' },
      { num: '2', disease: '홍채섬모체염', code: 'B00.50†' },
      { num: '3', disease: '각막염', code: 'B00.51†' },
      { num: '4', disease: '아데노바이러스에 의한 각막결막염', code: 'B30.0†' },
      { num: '5', disease: '맥락막 및 망막의 염증성, 구조적 및 혈관성 장애', code: 'H30  H34' },
      { num: '6', disease: '시신경 및 시각경로의 장애', code: 'H46  H48' },
      { num: '7', disease: '눈 및 눈부속기의 기타 처치후 장애(미만성 층판성 각막염에 한함)', code: 'H59.8주2)' }
    ]
  },
  {
    title: '사구체질환',
    items: [
      { num: '1', disease: '사구체질환', code: 'N00  N08' },
      { num: '2', disease: '기관 또는 계통 침범을 동반한 전신홍반루푸스(사구체질환 동반)', code: 'M32.1†(N08.5*)' },
      { num: '3', disease: '[제외] 당뇨병에서의 사구체장애', code: 'N08.3 제외' }
    ]
  },
  {
    title: '신세뇨관-간질질환',
    items: [
      { num: '1', disease: '신세뇨관-간질질환', code: 'N10  N16' },
      { num: '2', disease: '기관 또는 계통 침범을 동반한 전신홍반루푸스(신세뇨관-간질신장병증 동반)', code: 'M32.1†(N16.4*)' }
    ]
  },
  {
    title: '신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '신장 및 요관의 기타 장애', code: 'N25  N29' }
    ]
  },
  {
    title: '비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '[제외] 결핵성방광염', code: 'N33.0* 제외' },
      { num: '6', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '7', disease: '칸디다 요도염', code: 'B37.40†' },
      { num: '8', disease: '비뇨계통의 기타장애', code: 'N39' },
      { num: '9', disease: '[제외] 스트레스요실금', code: 'N39.3 제외' },
      { num: '10', disease: '[제외] 기타명시된요실금', code: 'N39.4 제외' }
    ]
  },
  {
    title: '유방의 장애',
    items: [
      { num: '1', disease: '유방의 장애', code: 'N60  N64' }
    ]
  },
  {
    title: '비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '비감염성 장염 및 결장염', code: 'K50  K52' }
    ]
  },
  {
    title: '특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환', code: 'K65  K67' },
      { num: '2', disease: '[제외] 결핵성복막염', code: 'K67.3* 제외' }
    ]
  },
  {
    title: '척추변형',
    items: [
      { num: '1', disease: '변형성 등병증', code: 'M40  M43' }
    ]
  },
  {
    title: '척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' },
      { num: '5', disease: '달리 분류된 질환에서의 척추병증', code: 'M49' },
      { num: '6', disease: '[제외] 척추의 결핵', code: 'M49.0* 제외' }
    ]
  },
  {
    title: '추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' },
      { num: '3', disease: '추간판장애에서의 신경근 및 신경총압박', code: 'G55.1*' }
    ]
  },
  {
    title: '안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '[제외] 손목터널증후군', code: 'G56.0 제외' },
      { num: '3', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '4', disease: '기타 단일신경병증', code: 'G58' },
      { num: '5', disease: '달리 분류된 질환에서의 단일신경병증', code: 'G59' },
      { num: '6', disease: '[제외] 당뇨병성 단일신경병증', code: 'G59.0* 제외' }
    ]
  },
  {
    title: '특정 누적외상성질환',
    items: [
      { num: '1', disease: '경추상완증후군', code: 'M53.1' },
      { num: '2', disease: '기타 연조직장애 (M74, M78 제외)', code: 'M70  M79' },
      { num: '3', disease: '[제외] 발바닥근막성섬유종증', code: 'M72.2 제외' },
      { num: '4', disease: '[제외] 어깨병변', code: 'M75 제외' }
    ]
  },
  {
    title: '윤활막 및 힘줄장애',
    items: [
      { num: '1', disease: '윤활막 및 힘줄장애', code: 'M65  M68' }
    ]
  },
  {
    title: '식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '위,십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '외이의 질환 및 귀의 기타장애',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60  H62' },
      { num: '2', disease: '귀의 기타장애', code: 'H90  H95' }
    ]
  },
  {
    title: '장의 특정기타질환',
    items: [
      { num: '1', disease: '장의 농양', code: 'K63.0' },
      { num: '2', disease: '장의 천공(비외상성)', code: 'K63.1' },
      { num: '3', disease: '장의 누공', code: 'K63.2' },
      { num: '4', disease: '장의 궤양', code: 'K63.3' }
    ]
  },
  {
    title: '특정 요도질환',
    items: [
      { num: '1', disease: '요도염 및 요도증후군', code: 'N34' },
      { num: '2', disease: '요도협착', code: 'N35' },
      { num: '3', disease: '요도의 기타 장애', code: 'N36' }
    ]
  },
  {
    title: '당뇨병질환',
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
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화 (고혈압성 망막병증에 한함)', code: 'H35.0주5)' }
    ]
  },
  {
    title: '소화기계통의 양성신생물',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '중이호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성신생물', code: 'D15' }
    ]
  },
  {
    title: '골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성신생물', code: 'D16' }
    ]
  },
  {
    title: '조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성신생물', code: 'D21' }
    ]
  },
  {
    title: '유방의 양성신생물',
    items: [
      { num: '1', disease: '유방의 양성신생물', code: 'D24' }
    ]
  },
  {
    title: '생식기의 양성신생물',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '5', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성신생물', code: 'D32' }
    ]
  },
  {
    title: '뇌 및 중추신경계통의 기타 부분의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성신생물', code: 'D33' }
    ]
  },
  {
    title: '갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성신생물', code: 'D35' }
    ]
  },
  {
    title: '주침샘의 양성신생물',
    items: [
      { num: '1', disease: '주침샘의 양성신생물', code: 'D11' }
    ]
  },
  {
    title: '부갑상선기능 질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '뇌하수체기능 질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '특정소화기 질환',
    items: [
      { num: '1', disease: '위 및 십이지장의 기타질환', code: 'K31' }
    ]
  },
  {
    title: '장흡수장애',
    items: [
      { num: '1', disease: '장흡수장애', code: 'K90' }
    ]
  },
  {
    title: '비장질환',
    items: [
      { num: '1', disease: '비장의 질환', code: 'D73' }
    ]
  },
  {
    title: '전신결합조직 장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' }
    ]
  },
  {
    title: '대사장애',
    items: [
      { num: '1', disease: '쿠싱증후군', code: 'E24' },
      { num: '2', disease: '부신생식기장애', code: 'E25' },
      { num: '3', disease: '고알도스테론증', code: 'E26' },
      { num: '4', disease: '부신의 기타 장애', code: 'E27' }
    ]
  },
  {
    title: '수면무호흡증',
    items: [
      { num: '1', disease: '수면무호흡', code: 'G47.3' }
    ]
  },
  {
    title: '침샘질환',
    items: [
      { num: '1', disease: '침샘의 질환', code: 'K11' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00  E07' },
      { num: '2', disease: '갑상성이상성 안구돌출', code: 'H06.2*' },
      { num: '3', disease: '처치후 / 방사선조사후 / 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '기타 등병증',
    items: [
      { num: '1', disease: '달리 분류되지 않은 기타 등병증', code: 'M53' },
      { num: '2', disease: '[제외] 경추상완증후군', code: 'M53.1 제외' },
      { num: '3', disease: '등통증', code: 'M54' }
    ]
  },

  // 특정 다빈도 5대 질병
  {
    title: '관절염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00  M03' },
      { num: '2', disease: '[제외] 결핵관절염', code: 'M01.1* 제외' },
      { num: '3', disease: '염증성 다발관절병증', code: 'M05  M14' },
      { num: '4', disease: '류마티스폐질환', code: 'J99.0*' },
      { num: '5', disease: '[제외] 당뇨병성 관절병증', code: 'M14.2* 제외' },
      { num: '6', disease: '관절증', code: 'M15  M19' },
      { num: '7', disease: '기타 관절장애', code: 'M20  M25' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '결막장애',
    items: [
      { num: '1', disease: '결막의 장애', code: 'H10  H13' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환', code: 'N40  N45, N49  N51' },
      { num: '2', disease: '편모충성 전립선염', code: 'A59.08†' },
      { num: '3', disease: '볼거리고환염', code: 'B26.0†' },
      { num: '4', disease: '여성 골반기관의 염증성 질환', code: 'N70  N77' },
      { num: '5', disease: '[제외] 여성생식기관의 결핵', code: 'N74.0*, N74.1* 제외' },
      { num: '6', disease: '여성 생식관 비염증성 장애 (습관성 유산, 여성 불임, 인공수정 합병증 제외)', code: 'N80  N95' },
      { num: '7', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '특정 망막질환',
    items: [
      { num: '1', disease: '기타 망막장애', code: 'H35' },
      { num: '2', disease: '[제외] 황반 및 후극부의 변성', code: 'H35.3 제외' },
      { num: '3', disease: '[제외] 배경망막병증 망막혈관변화', code: 'H35.0 제외' },
      { num: '4', disease: 'H35.0(배경망막병증 망막혈관변화) 중 고혈압성 망막병증에 한함', code: 'H35.0주)' },
      { num: '5', disease: '달리 분류된 질환에서의 망막장애', code: 'H36' },
      { num: '6', disease: '[제외] 당뇨병성망막병증', code: 'H36.0 제외' }
    ]
  },

  // 22대 질병
  {
    title: '치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위정맥혈전증 (포함 - 치질 / 제외 - 출산, 산후기, 임신 합병증)', code: 'K64' }
    ]
  },
  {
    title: '치열 및 치루',
    items: [
      { num: '1', disease: '항문 및 직장부의 열창 및 누공', code: 'K60' },
      { num: '2', disease: '항문 및 직장부의 농양', code: 'K61' },
      { num: '3', disease: '항문 및 직장의 기타 질환', code: 'K62' }
    ]
  },
  {
    title: '중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '전신결합조직장애 II',
    items: [
      { num: '1', disease: '전신홍반루푸스', code: 'M32' },
      { num: '2', disease: '피부다발근염', code: 'M33' },
      { num: '3', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '안와장애',
    items: [
      { num: '1', disease: '안와의 장애', code: 'H05' }
    ]
  },
  {
    title: '유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '골수염',
    items: [
      { num: '1', disease: '골수염', code: 'M86' }
    ]
  },
  {
    title: '골괴사증',
    items: [
      { num: '1', disease: '골괴사', code: 'M87' }
    ]
  },
  {
    title: '뼈의 파젯병',
    items: [
      { num: '1', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' }
    ]
  },
  {
    title: '연골병증',
    items: [
      { num: '1', disease: '연골병증', code: 'M91  M94' }
    ]
  },
  {
    title: '눈 및 부속기 양성신생물',
    items: [
      { num: '1', disease: '눈 및 부속기의 양성 신생물', code: 'D31' }
    ]
  },
  {
    title: '동맥색전증 및 혈전증',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' }
    ]
  },
  {
    title: '하지정맥류',
    items: [
      { num: '1', disease: '하지의 정맥류', code: 'I83' },
      { num: '2', disease: '임신중 하지의 정맥류성 정맥', code: 'O22.0' },
      { num: '3', disease: '산후기중 기타 정맥합병증', code: 'O87.8' }
    ]
  },
  {
    title: '신장 및 요관의 결석',
    items: [
      { num: '1', disease: '신장 및 요관의 결석', code: 'N20' }
    ]
  },
  {
    title: '충수질환',
    items: [
      { num: '1', disease: '충수의 질환', code: 'K35  K38' }
    ]
  },
  {
    title: '요도결석증',
    items: [
      { num: '1', disease: '요도결석', code: 'N21.1' },
      { num: '2', disease: '기타 하부요로결석', code: 'N21.8' },
      { num: '3', disease: '상세불명의 하부요로결석', code: 'N21.9' },
      { num: '4', disease: '달리 분류된 질환에서의 요로의 결석', code: 'N22*' }
    ]
  },
  {
    title: '방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '다낭성 난소증후군',
    items: [
      { num: '1', disease: '다낭성 난소증후군', code: 'E28.2' }
    ]
  },
  {
    title: '대상포진',
    items: [
      { num: '1', disease: '대상포진', code: 'B02' },
      { num: '2', disease: '[제외] 대상포진뇌염', code: 'B02.0 제외' },
      { num: '3', disease: '[제외] 대상포진수막염', code: 'B02.1 제외' }
    ]
  },
  {
    title: '식도정맥류',
    items: [
      { num: '1', disease: '식도정맥류', code: 'I85' }
    ]
  },
  {
    title: '안구의 장애',
    items: [
      { num: '1', disease: '안구의 장애', code: 'H44' }
    ]
  },
  {
    title: '음낭 정맥류',
    items: [
      { num: '1', disease: '음낭 정맥류', code: 'I86.1' }
    ]
  }
];

