// Meritz Fire terms data
import {
  MeritzIntegratedTreatmentItem,
  MeritzPracticalTreatmentItem,
  MeritzNoncoveredTreatmentItem,
  MeritzNoncoveredPrimaryTreatmentItem,
  MeritzDiseaseIntegratedTreatmentItem
} from "./types";

export const MERITZ_INTEGRATED_CANCER_METASTASIS_SECTIONS = [
  {
    title: '특정소액암(전이포함)',
    items: [
      { num: '1', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '2', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '3', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '4', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '5', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '6', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '7', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '8', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '9', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '10', disease: '진성 적혈구증가증', code: 'D45' },
      { num: '11', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77', isMetastasis: true },
      { num: '12', disease: '피부의 이차성 악성 신생물', code: 'C79.2', isMetastasis: true },
      { num: '13', disease: '유방의 이차성 악성 신생물', code: 'C79.80', isMetastasis: true },
      { num: '14', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88', isMetastasis: true },
      { num: '15', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9', isMetastasis: true }
    ]
  },
  {
    title: '특정소화기암(전이포함)',
    items: [
      { num: '1', disease: '위의 악성 신생물', code: 'C16' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '7', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '8', disease: '소장의 이차성 악성 신생물', code: 'C78.4', isMetastasis: true },
      { num: '9', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5', isMetastasis: true },
      { num: '10', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6', isMetastasis: true },
      { num: '11', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7', isMetastasis: true },
      { num: '12', disease: '위의 이차성 악성 신생물', code: 'C78.80', isMetastasis: true },
      { num: '13', disease: '비장의 이차성 악성 신생물', code: 'C78.82', isMetastasis: true },
      { num: '14', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88', isMetastasis: true },
      { num: '15', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89', isMetastasis: true },
      { num: '16', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81', isMetastasis: true }
    ]
  },
  {
    title: '14대특정암(전이포함)',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '호흡기 및 흉곽내기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 비강 및 중이의 악성 신생물', code: 'C30' },
      { num: ' ', disease: '- 부비동의 악성 신생물', code: 'C31' },
      { num: ' ', disease: '- 후두의 악성 신생물', code: 'C32' },
      { num: ' ', disease: '- 기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: ' ', disease: '- 심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '3', disease: '중피성 및 연조직의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { num: ' ', disease: '- 기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { num: '4', disease: '여성생식기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 외음의 악성 신생물', code: 'C51' },
      { num: ' ', disease: '- 질의 악성 신생물', code: 'C52' },
      { num: ' ', disease: '- 자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: ' ', disease: '- 난소의 악성 신생물', code: 'C56' },
      { num: ' ', disease: '- 기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: ' ', disease: '- 태반의 악성 신생물', code: 'C58' },
      { num: '5', disease: '남성생식기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 음경의 악성 신생물', code: 'C60' },
      { num: ' ', disease: '- 기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '6', disease: '요로의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: ' ', disease: '- 기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '눈 및 부속기의 악성 신생물', code: 'C69' },
      { num: '8', disease: '부신 및 기타 내분비선의 악성 신생물', code: 'C74~C75' },
      { num: '9', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '10', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' },
      { num: '11', disease: '골수형성이상증후군', code: 'D46' },
      { num: '12', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '13', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '14', disease: '골수성유증', code: 'D47.4' },
      { num: '15', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0', isMetastasis: true },
      { num: '16', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1', isMetastasis: true },
      { num: '17', disease: '난소의 이차성 악성 신생물', code: 'C79.6', isMetastasis: true },
      { num: '18', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  },
  {
    title: '10대특정암(전이포함)',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '3', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '6', disease: '중피종', code: 'C45' },
      { num: '7', disease: '카포시육종', code: 'C46' },
      { num: '8', disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { num: '9', disease: '뇌 및 중추신경계통의 기타부분의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 수막의 악성 신생물', code: 'C70' },
      { num: ' ', disease: '- 뇌의 악성 신생물', code: 'C71' },
      { num: ' ', disease: '- 척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '10', disease: '림프, 조혈 및 관련조직의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 호지킨림프종', code: 'C81' },
      { num: ' ', disease: '- 소포성 림프종', code: 'C82' },
      { num: ' ', disease: '- 비소포성 림프종', code: 'C83' },
      { num: ' ', disease: '- 성숙 T/NK-세포림프종', code: 'C84' },
      { num: ' ', disease: '- 기타 및 상세불명 유형의 비호지킨림프종', code: 'C85' },
      { num: ' ', disease: '- T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { num: ' ', disease: '- 악성 면역증식성 질환', code: 'C88' },
      { num: ' ', disease: '- 다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { num: ' ', disease: '- 림프성 백혈병', code: 'C91' },
      { num: ' ', disease: '- 골수성 백혈병', code: 'C92' },
      { num: ' ', disease: '- 단핵구성 백혈병', code: 'C93' },
      { num: ' ', disease: '- 명시된 세포형의 기타 백혈병', code: 'C94' },
      { num: ' ', disease: '- 상세불명 세포형의 백혈병', code: 'C95' },
      { num: ' ', disease: '- 림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' },
      { num: ' ', disease: '- 만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' },
      { num: '11', disease: '폐의 이차성 악성 신생물', code: 'C78.0', isMetastasis: true },
      { num: '12', disease: '종격의 이차성 악성 신생물', code: 'C78.1', isMetastasis: true },
      { num: '13', disease: '흉막의 이차성 악성 신생물', code: 'C78.2', isMetastasis: true },
      { num: '14', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3', isMetastasis: true },
      { num: '15', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3', isMetastasis: true },
      { num: '16', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4', isMetastasis: true },
      { num: '17', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5', isMetastasis: true },
      { num: '18', disease: '부신의 이차성 악성 신생물', code: 'C79.7', isMetastasis: true }
    ]
  },
  {
    title: '4대고액암(전이포함)',
    items: [
      { num: '1', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '2', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '3', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '4', disease: '골 및 관절연골의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: ' ', disease: '- 기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '5', disease: '췌장의 이차성 악성 신생물', code: 'C78.81', isMetastasis: true }
    ]
  }
];

// 메리츠화재 통합암(유사암제외) 분류표 [별표10] 데이터 (5개 그룹)
export const MERITZ_INTEGRATED_CANCER_SECTIONS = [
  {
    title: '특정소액암',
    items: [
      { num: '1', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '2', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '3', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '4', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '5', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '6', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '7', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '8', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '9', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '10', disease: '진성 적혈구증가증', code: 'D45' }
    ]
  },
  {
    title: '특정소화기암',
    items: [
      { num: '1', disease: '위의 악성 신생물', code: 'C16' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '7', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' }
    ]
  },
  {
    title: '15대특정암',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '호흡기 및 흉곽내기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 비강 및 중이의 악성 신생물', code: 'C30' },
      { num: ' ', disease: '- 부비동의 악성 신생물', code: 'C31' },
      { num: ' ', disease: '- 후두의 악성 신생물', code: 'C32' },
      { num: ' ', disease: '- 기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: ' ', disease: '- 심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '3', disease: '중피성 및 연조직의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 말초신경 및 자율신경계통의 악성 신생물', code: 'C47' },
      { num: ' ', disease: '- 기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { num: '4', disease: '여성생식기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 외음의 악성 신생물', code: 'C51' },
      { num: ' ', disease: '- 질의 악성 신생물', code: 'C52' },
      { num: ' ', disease: '- 자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: ' ', disease: '- 난소의 악성 신생물', code: 'C56' },
      { num: ' ', disease: '- 기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: ' ', disease: '- 태반의 악성 신생물', code: 'C58' },
      { num: '5', disease: '남성생식기관의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 음경의 악성 신생물', code: 'C60' },
      { num: ' ', disease: '- 기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '6', disease: '요로의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: ' ', disease: '- 기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '눈 및 부속기의 악성 신생물', code: 'C69' },
      { num: '8', disease: '부신 및 기타 내분비선의 악성 신생물', code: 'C74~C75' },
      { num: '9', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '10', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' },
      { num: '11', disease: '골수형성이상증후군', code: 'D46' },
      { num: '12', disease: '만성 골수증식질환', code: 'D47.1' },
      { num: '13', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '14', disease: '골수성유증', code: 'D47.4' },
      { num: '15', disease: '불명확한, 이차성 및 상세불명 부위의 악성신생물', code: 'C77~C80' }
    ]
  },
  {
    title: '10대특정암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '3', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '4', disease: '흉선의 악성 신생물', code: 'C37' },
      { num: '5', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '6', disease: '중피종', code: 'C45' },
      { num: '7', disease: '카포시육종', code: 'C46' },
      { num: '8', disease: '후복막 및 복막의 악성 신생물', code: 'C48' },
      { num: '9', disease: '뇌 및 중추신경계통의 기타부분의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 수막의 악성 신생물', code: 'C70' },
      { num: ' ', disease: '- 뇌의 악성 신생물', code: 'C71' },
      { num: ' ', disease: '- 척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '10', disease: '림프, 조혈 및 관련조직의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 호지킨림프종', code: 'C81' },
      { num: ' ', disease: '- 소포성 림프종', code: 'C82' },
      { num: ' ', disease: '- 비소포성 림프종', code: 'C83' },
      { num: ' ', disease: '- 성숙 T/NK-세포림프종', code: 'C84' },
      { num: ' ', disease: '- 기타 및 상세불명 유형의 비호지킨림프종', code: 'C85' },
      { num: ' ', disease: '- T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
      { num: ' ', disease: '- 악성 면역증식성 질환', code: 'C88' },
      { num: ' ', disease: '- 다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { num: ' ', disease: '- 림프성 백혈병', code: 'C91' },
      { num: ' ', disease: '- 골수성 백혈병', code: 'C92' },
      { num: ' ', disease: '- 단핵구성 백혈병', code: 'C93' },
      { num: ' ', disease: '- 명시된 세포형의 기타 백혈병', code: 'C94' },
      { num: ' ', disease: '- 상세불명 세포형의 백혈병', code: 'C95' },
      { num: ' ', disease: '- 림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' },
      { num: ' ', disease: '- 만성 호산구성 백혈병[과호산구증후군]', code: 'D47.5' }
    ]
  },
  {
    title: '4대고액암',
    items: [
      { num: '1', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '2', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '3', disease: '췌장의 악성 신생물', code: 'C25' },
      { num: '4', disease: '골 및 관절연골의 악성 신생물', code: '-' },
      { num: ' ', disease: '- 사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: ' ', disease: '- 기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' }
    ]
  }
];

// 메리츠화재 1-5종 수술분류표II 데이터
export const MERITZ_SURGERY1_5_SECTIONS = [
  {
    category: '1. 피부, 유방의 수술',
    title: '1. 피부, 유방의 수술',
    group: '일반수술',
    items: [
      { num: '1', disease: '피부이식수술(25㎠이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25㎠미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(切斷術, Mastectomy) * 단, 유방의비대(한국표준질병사인분류 N62)로 인한 수술은 1종으로 분류합니다.', code: '3종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외) [단, 치료목적의 진공흡입기를 이용한 유방수술(맘모톰 등)은 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다. 양측 유방을 각각의 부위로 판단하지 않습니다.]', code: '1종' }
    ]
  },
  {
    category: '2. 근골(筋骨)의 수술 주1)',
    title: '2. 근골(筋骨)의 수술 주1)',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술, 수면중 무호흡 수술은 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩胛骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는 것]', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 [다지증에 대한 절단수술은 제외함]', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술', code: '1종' }
    ]
  },
  {
    category: '3. 호흡기계, 흉부(胸部)의 수술',
    title: '3. 호흡기계, 흉부(胸部)의 수술',
    group: '일반수술',
    items: [
      { num: '15', disease: '만성부비동염(慢性副鼻腔炎) 근본수술(根本手術)', code: '1종' },
      { num: '16', disease: '후두(喉頭) 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것 ]', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉곽(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술[개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '4. 순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락 · 발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락 · 발가락 혈관관혈수술', code: '1종' },
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
    title: '5. 소화기계의 수술',
    group: '일반수술',
    items: [
      { num: '30', disease: '이하선 절제수술', code: '3종' },
      { num: '31-1', disease: '악하선, 설하선 절제수술', code: '2종' },
      { num: '31-2', disease: '기타 타액선 절제수술(타석제거는 제외)', code: '1종' },
      { num: '32', disease: '식도(食道) 이단술(離斷術) [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]', code: '4종' },
      { num: '33', disease: '위 절제수술(胃 切除手術, Gastrectomy) [개복술을 수반하는 것]', code: '4종' },
      { num: '34', disease: '기타의 위 · 식도 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '3종' },
      { num: '35', disease: '간장(肝臟), 췌장(膵臟) 관혈수술 [개복술을 수반하는 것]', code: '4종' },
      { num: '36', disease: '담낭(膽囊), 담도(膽道) 관혈수술 [개복술을 수반하는 것] * 단, 담석증(한국표준질병사인분류 K80)으로 인한 수술은 2종으로 분류합니다.', code: '3종' },
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
    category: '6. 비뇨기계 · 생식기계의 수술 (인공임신중절수술은 제외함)',
    title: '6. 비뇨기계 · 생식기계의 수술 (인공임신중절수술은 제외함)',
    group: '일반수술',
    items: [
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管)관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류 · 요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류 · 요실금 교정수술', code: '1종' },
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
    title: '7. 내분비기계의 수술',
    group: '일반수술',
    items: [
      { num: '56', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '57', disease: '갑상선(甲狀腺) · 부갑상선(副甲狀腺) 관혈수술', code: '3종' },
      { num: '58', disease: '부신(副腎) 절제수술', code: '4종' }
    ]
  },
  {
    category: '8. 신경계의 수술',
    title: '8. 신경계의 수술',
    group: '일반수술',
    items: [
      { num: '59', disease: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '60', disease: '신경(神經) 관혈수술', code: '2종' },
      { num: '61', disease: '관혈적 척수종양(脊髓腫瘍) 절제수술', code: '4종' },
      { num: '62', disease: '척수경막내외(脊髓硬膜內外) 관혈수술', code: '3종' }
    ]
  },
  {
    category: '9. 시각기의 수술 [약물주입술은 제외]',
    title: '9. 시각기의 수술 [약물주입술은 제외]',
    group: '일반수술',
    items: [
      { num: '63', disease: '안검하수증(眼瞼下垂症)수술(안검내반증 제외)', code: '1종' },
      { num: '64', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '65', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '66', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '67', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '68', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '69', disease: '전방(前房), 홍채(虹彩), 유리체(瑠璃體) 관혈수술', code: '2종' },
      { num: '70', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '71', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '72', disease: '망막박리(網膜剝離) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '73', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] [시력회복 및 시력개선 목적의 수술은 제외]', code: '1종' },
      { num: '74', disease: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '75', disease: '안구적출술, 조직충전술(組織充塡術)', code: '3종' },
      { num: '76', disease: '안와내양절제수술', code: '3종' },
      { num: '77', disease: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', code: '1종' },
      { num: '78', disease: '안근(眼筋)관혈수술', code: '1종' }
    ]
  },
  {
    category: '10. 청각기(聽覺器)의 수술',
    title: '10. 청각기(聽覺器)의 수술',
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
    category: '11. 상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    title: '11. 상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    group: '일반수술',
    items: [
      { num: '84', disease: '상기 이외의 개두술(開頭術)', code: '3종' },
      { num: '85', disease: '상기 이외의 개흉술(開胸術)', code: '3종' },
      { num: '86', disease: '상기 이외의 개복술(開腹術)', code: '2종' },
      { num: '87', disease: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] * 체외충격파치료술(E.S.W.T)은 제외', code: '2종' },
      { num: '88-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 뇌, 심장 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '88-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외) * 단, 대장의 용종 또는 대장의 양성신생물의 내시경적 절제술은 1종으로 분류합니다.', code: '2종' },
      { num: '88-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' }
    ]
  },
  {
    category: 'II. 악성신생물 치료 목적의 수술',
    title: 'II. 악성신생물 치료 목적의 수술',
    group: '악성신생물',
    items: [
      { num: '1', disease: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery) 단, 기타피부암(C44) 제외 [내시경 수술, 카테터 · 고주파 전극 등의 경피적 수술 등은 제외함]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44)', code: '3종' },
      { num: '2', disease: '내시경 수술, 카테터 · 고주파 전극 등에 의한 악성신생물 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  },
  {
    category: 'III. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    title: 'III. 악성신생물 근치 · 두개내신생물 근치 방사선 조사 분류표',
    group: '방사선조사',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  }
];

// 메리츠화재 이전 1-5종 수술분류표 데이터 (별표29)
export const MERITZ_SURGERY1_5_OLD_SECTIONS = [
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '1. 피부, 유방의 수술',
    items: [
      { num: '1', disease: '피부이식수술(25이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', code: '3종' },
      { num: '2', disease: '피부이식수술(25미만인 경우)', code: '1종' },
      { num: '3', disease: '유방절단수술(, Mastectomy)', code: '3종' },
      { num: '4', disease: '기타 유방수술(농양의 절개 및 배액은 제외) [단, 치료목적의 진공흡입기를 이용한 유방수술(맘모톰 등)은 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다. 양측 유방을 각각의 부위로 판단하지 않습니다.]', code: '1종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '2. 근골()의 수술',
    subTitle: '주1) 근골()의 수술에서 발정술() 등 내고정물 제거술은 제외하며, 치()  치은  치근()  치조골()의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것도 제외합니다.',
    items: [
      { num: '5', disease: '골() 이식수술', code: '2종' },
      { num: '6', disease: '두개골(, cranium) 관혈수술 [비골()  비중격()  상악골()  하악골()  악관절()은 제외함]', code: '3종' },
      { num: '7', disease: '비골() 수술 [비중격 만곡증()수술, 수면중 무호흡 수술은 제외]', code: '1종' },
      { num: '8', disease: '상악골(), 하악골(), 악관절() 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(), 골반골(), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(), 견갑골(), 늑골(), 흉골() 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단()에 수반하는 것] (다지증에 대한 절단수술은 제외)', code: '1종' },
      { num: '11-2', disease: '기타 사지()절단수술 (다지증에 대한 절단수술은 제외)', code: '3종' },
      { num: '12', disease: '절단()된 사지()재접합수술() [골, 관절의 이단()에 수반하는것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(), 사지관절() 관혈수술', code: '2종' },
      { num: '14', disease: '근(), 건(), 인대(), 연골() 관혈수술', code: '1종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '3. 호흡기계, 흉부()의 수술',
    items: [
      { num: '15', disease: '만성부비강염() 근본수술()', code: '1종' },
      { num: '16', disease: '후두() 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(), 기관지(), 폐(), 흉막() 관혈수술 [개흉술(, Thoracotomy)을 수반하는 것]', code: '4종' },
      { num: '19', disease: '폐장() 이식수술 [수용자()에 한함]', code: '5종' },
      { num: '20', disease: '흉곽() 형성수술()', code: '3종' },
      { num: '21', disease: '종격종양(), 흉선 절제수술[개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '4. 순환기계, 비장()의 수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류() 근본수술 및 손가락발가락 혈관관혈수술', code: '1종' },
      { num: '24', disease: '대동맥(), 대정맥(), 폐동맥(), 관동맥() 관혈수술[개흉술, 개복술을 수반하는 것]', code: '5종' },
      { num: '25', disease: '심막() 관혈수술 [개흉술을 수반하는 것]', code: '4종' },
      { num: '26', disease: '심장내() 관혈수술 [개흉술을 수반하는 것]', code: '5종' },
      { num: '27', disease: '심장 이식수술 [수용자에 한함]', code: '5종' },
      { num: '28', disease: '체내용() 인공심박조율기(Artificial pacemaker) 매입술()', code: '3종' },
      { num: '29', disease: '비장() 절제수술', code: '3종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '5. 소화기계의 수술',
    items: [
      { num: '30', disease: '이하선 절제수술', code: '3종' },
      { num: '31-1', disease: '악하선, 설하선 절제수술', code: '2종' },
      { num: '31-2', disease: '기타 타액선 절제수술(타석제거는 제외)', code: '1종' },
      { num: '32', disease: '식도() 이단술() [개흉술, 개복술(, Laparotomy)을 수반하는 것]', code: '4종' },
      { num: '33', disease: '위 절제수술( , Gastrectomy) [개복술을 수반하는 것]', code: '4종' },
      { num: '34', disease: '기타의 위식도 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '3종' },
      { num: '35', disease: '간장(), 췌장() 관혈수술 [개복술을 수반하는 것]', code: '4종' },
      { num: '36', disease: '담낭(), 담도() 관혈수술 [개복술을 수반하는 것]', code: '3종' },
      { num: '37', disease: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', code: '5종' },
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans) 세포 이식수술은 제외함)', code: '5종' },
      { num: '39', disease: '탈장() 근본수술', code: '1종' },
      { num: '40', disease: '전신성 복막염( , Generalized peritonitis) 수술', code: '2종' },
      { num: '41', disease: '충수()절제술(충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술()', code: '2종' },
      { num: '42', disease: '직장탈() 근본수술', code: '1종' },
      { num: '43', disease: '소장(), 결장(), 직장(), 장간막() 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', code: '4종' },
      { num: '44', disease: '치루(), 탈항(), 치핵() 근본수술 [근치를 목적으로 하지 않은 수술은 제외함]', code: '1종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '6. 비뇨기계생식기계의 수술 (인공임신중절수술은 제외함)',
    items: [
      { num: '45', disease: '신장(), 방광(), 신우(), 요관()관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류요실금 교정수술', code: '1종' },
      { num: '48', disease: '신장() 이식수술() [수용자에 한함]', code: '5종' },
      { num: '49', disease: '음경() 절단수술 (포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '50', disease: '고환(), 부고환(), 정관(), 정색(), 정낭()관혈수술, 전립선()관혈수술', code: '2종' },
      { num: '51', disease: '음낭관혈수술', code: '1종' },
      { num: '52', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '53', disease: '경질적 자궁, 난소, 난관 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '54', disease: '제왕절개만출술()', code: '1종' },
      { num: '55', disease: '질탈()근본수술', code: '1종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '7. 내분비기계의 수술',
    items: [
      { num: '56', disease: '뇌하수체종양() 절제수술', code: '5종' },
      { num: '57', disease: '갑상선()부갑상선() 관혈수술', code: '3종' },
      { num: '58', disease: '부신() 절제수술', code: '4종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '8. 신경계의 수술',
    items: [
      { num: '59', disease: '두개내() 관혈수술 [개두술(, Craniotomy)을 수반하는 것]', code: '5종' },
      { num: '60', disease: '신경() 관혈수술', code: '2종' },
      { num: '61', disease: '관혈적 척수종양() 절제수술', code: '4종' },
      { num: '62', disease: '척수경막내외() 관혈수술', code: '3종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '9. 시각기계의 수술 [약물주입술은 제외]',
    items: [
      { num: '63', disease: '안검하수증()수술(안검내반증 제외)', code: '1종' },
      { num: '64', disease: '누소관()형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '65', disease: '누낭비강() 관혈수술', code: '2종' },
      { num: '66', disease: '결막낭() 형성수술', code: '2종' },
      { num: '67', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '68', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '69', disease: '전방(), 홍채(), 유리체() 관혈수술', code: '2종' },
      { num: '70', disease: '녹내장() 관혈수술', code: '3종' },
      { num: '71', disease: '백내장(), 수정체() 관혈수술', code: '1종' },
      { num: '72', disease: '망막박리() 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '73', disease: '레이저(Laser)에 의한 안구() 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] [시력회복 및 시력개선 목적의 수술은 제외]', code: '1종' },
      { num: '74', disease: '냉동응고()에 의한 안구() 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '75', disease: '안구적출술, 조직충전술()', code: '3종' },
      { num: '76', disease: '안와내양절제수술', code: '3종' },
      { num: '77', disease: '관혈적 안와내() 이물제거수술()', code: '1종' },
      { num: '78', disease: '안근()관혈수술', code: '1종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '10. 청각기()의 수술',
    items: [
      { num: '79', disease: '관혈적 고막() 성형술 [고막 패치술은 제외]', code: '2종' },
      { num: '80', disease: '유양동 절제술(, mastoidectomy)', code: '2종' },
      { num: '81', disease: '중이() 관혈수술 [중이내 튜브유치술 제외]', code: '2종' },
      { num: '82', disease: '중이내() 튜브유치술 [고막 패치술은 제외, 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '83', disease: '내이() 관혈수술', code: '3종' }
    ]
  },
  {
    category: '. 일반 질병 및 상해 치료목적의 수술',
    title: '11. 상기 이외의 수술 [검사, 처치, 약물주입요법은 포함하지 않음]',
    subTitle: '주2) 상기 1~87항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적(,Percutaneous) 수술은 88항을 적용합니다. 다만, 복강경흉강경에 의한 수술은 해당부위(1~87항)의 수술로 적용합니다.',
    items: [
      { num: '84', disease: '상기 이외의 개두술()', code: '3종' },
      { num: '85', disease: '상기 이외의 개흉술()', code: '3종' },
      { num: '86', disease: '상기 이외의 개복술()', code: '2종' },
      { num: '87', disease: '체외충격파쇄석술(, E.S.W.L) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] (* 체외충격파치료술(E.S.W.T)은 제외)', code: '2종' },
      { num: '88-1', disease: '내시경 또는 카테터고주파 전극 등에 의한 경피적 수술 - 뇌, 심장 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '88-2', disease: '내시경 또는 카테터고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '88-3', disease: '내시경 또는 카테터고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' }
    ]
  },
  {
    category: '. 악성신생물 치료 목적의 수술',
    title: '. 악성신생물 치료 목적의 수술',
    subTitle: '주1) 제자리암경계성종양에 대한 수술은 ‘. 일반 질병 및 상해치료 목적의 수술’ 항목의 적용을 받습니다. 주2) 카테터(Catheter)를 이용한 흡인천자약물주입요법은 포함하지 않습니다. 주3) 비고형암에 대한 비관혈적 근치술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다. (비고형암에 대한 비관혈적 근치술 중 조혈모세포이식술은 일련의 과정을 모두 포함하여 1회의 수술로 인정, 중심정맥삽관술 등은 5종 미인정) 주4) 상기 ‘. 악성신생물 치료 목적의 수술’ 항목에서 복강경흉강경에 의한 수술은 위의 ‘1.’ 또는 ‘3’으로 적용합니다.',
    items: [
      { num: '1', disease: '관혈적 악성신생물() 근치수술(, Radical curative surgery) [단, 기타피부암(C44) 제외, 내시경 수술, 카테터  고주파 전극 등의 경피적 수술 등은 제외함]', code: '5종' },
      { num: '1-1', disease: '기타피부암(C44) 관혈적 악성신생물 근치수술', code: '3종' },
      { num: '2', disease: '내시경 수술, 카테터  고주파 전극 등에 의한 악성신생물 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '3', disease: '상기 이외의 기타 악성신생물수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' }
    ]
  },
  {
    category: '. 악성신생물 근치두개내신생물 근치 방사선 조사',
    title: '. 악성신생물 근치두개내신생물 근치 방사선 조사 분류표',
    subTitle: '주) 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.',
    items: [
      { num: '1', disease: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사()를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(  , Stereotactic radiotherapy)를 포함함]', code: '3종' },
      { num: '2', disease: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료', code: '3종' }
    ]
  }
];

// 메리츠화재 7대질병 분류표 데이터
export const MERITZ_7_DISEASES_SECTIONS = [
  {
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장 질환', code: 'I05 ~ I09' },
      { disease: '허혈심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { disease: '수막구균성 심장질환', code: 'A39.5' },
      { disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    category: '뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    category: '간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' },
      { disease: '거대세포바이러스간염', code: 'B25.1' },
      { disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    category: '고혈압질환',
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
    category: '당뇨병질환',
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
    category: '만성 하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명의 부위의 소화성 궤양', code: 'K27' }
    ]
  }
];

// 메리츠화재 18대질병 분류표 데이터
export const MERITZ_18_DISEASES_SECTIONS = [
  {
    category: '당뇨병질환',
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
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장 질환', code: 'I05 ~ I09' },
      { disease: '허혈심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { disease: '수막구균성 심장질환', code: 'A39.5' },
      { disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    category: '고혈압질환',
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
    category: '뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    category: '간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' },
      { disease: '거대세포바이러스간염', code: 'B25.1' },
      { disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    category: '갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00 ~ E07' },
      { disease: '갑상선이상성 안구돌출', code: 'H06.2' },
      { disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '만성 하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식 지속 상태', code: 'J46' }
    ]
  },
  {
    category: '폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '수두폐렴', code: 'B01.2' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' },
      { disease: '거대세포바이러스폐렴', code: 'B25.0' },
      { disease: '폐 톡소포자충증', code: 'B58.3' }
    ]
  },
  {
    category: '백내장',
    items: [
      { disease: '노년성 백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    category: '녹내장',
    items: [
      { disease: '녹내장', code: 'H40' },
      { disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    category: '결핵',
    items: [
      { disease: '결핵', code: 'A15 ~ A19' },
      { disease: '결핵의 후유증', code: 'B90' },
      { disease: '결핵성 복막염', code: 'K67.3' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0' },
      { disease: '결핵 관절염', code: 'M01.1' },
      { disease: '척추의 결핵', code: 'M49.0' },
      { disease: '뼈의 결핵', code: 'M90.0' },
      { disease: '결핵성 방광염', code: 'N33.0' },
      { disease: '자궁경부의 결핵감염', code: 'N74.0' },
      { disease: '여성 결핵성 골반염증질환', code: 'N74.1' }
    ]
  },
  {
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    category: '담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    category: '사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    category: '편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    category: '축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  }
];

// 메리츠화재 30대질병 분류표 데이터
export const MERITZ_30_DISEASES_SECTIONS = [
  {
    group: 'A',
    category: '당뇨병질환',
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
    group: 'A',
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { disease: '허혈심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { disease: '수막구균성 심장질환', code: 'A39.5' },
      { disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    group: 'A',
    category: '고혈압질환',
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
    group: 'A',
    category: '뇌혈관 질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    group: 'A',
    category: '간 질환',
    items: [
      { disease: '바이러스 간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' },
      { disease: '거대세포바이러스간염', code: 'B25.1' },
      { disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    group: 'A',
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    group: 'A',
    category: '갑상선 질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00 ~ E07' },
      { disease: '갑상선이상성 안구돌출', code: 'H06.2' },
      { disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    group: 'A',
    category: '동맥 경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    group: 'A',
    category: '만성 하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식 지속 상태', code: 'J46' }
    ]
  },
  {
    group: 'A',
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    group: 'A',
    category: '폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '수두폐렴', code: 'B01.2' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' },
      { disease: '거대세포바이러스폐렴', code: 'B25.0' },
      { disease: '폐 톡소포자충증', code: 'B58.3' }
    ]
  },
  {
    group: 'A',
    category: '결핵',
    items: [
      { disease: '결핵', code: 'A15 ~ A19' },
      { disease: '결핵의 후유증', code: 'B90' },
      { disease: '결핵성 복막염', code: 'K67.3' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0' },
      { disease: '결핵 관절염', code: 'M01.1' },
      { disease: '척추의 결핵', code: 'M49.0' },
      { disease: '뼈의 결핵', code: 'M90.0' },
      { disease: '결핵성 방광염', code: 'N33.0' },
      { disease: '자궁경부의 결핵감염', code: 'N74.0' },
      { disease: '여성 결핵성 골반염증질환', code: 'N74.1' }
    ]
  },
  {
    group: 'B',
    category: '백내장',
    items: [
      { disease: '노년성 백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    group: 'B',
    category: '녹내장',
    items: [
      { disease: '녹내장', code: 'H40' },
      { disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    group: 'B',
    category: '황반변성',
    items: [
      { disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    group: 'B',
    category: '담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    group: 'B',
    category: '사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    group: 'C',
    category: '편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    group: 'C',
    category: '축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    group: 'C',
    category: '급성상기도감염',
    items: [
      { disease: '급성상기도감염', code: 'J00 ~ J06' }
    ]
  },
  {
    group: 'C',
    category: '담낭담도질환',
    items: [
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타질환', code: 'K82' },
      { disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    group: 'C',
    category: '중이의진주종',
    items: [
      { disease: '중이의 진주종', code: 'H71' }
    ]
  },
  {
    group: 'C',
    category: '귀경화증',
    items: [
      { disease: '귀경화증', code: 'H80' }
    ]
  },
  {
    group: 'C',
    category: '소화기계통의 양성신생물(D13)',
    items: [
      { disease: '기타 및 부위불명 소화기계통의 양성신생물', code: 'D13' }
    ]
  },
  {
    group: 'C',
    category: '중이, 호흡계통 및 흉곽의 양성신생물',
    items: [
      { disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    group: 'C',
    category: '골 및 관절연골의 양성 신생물',
    items: [
      { disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    group: 'C',
    category: '조직의 양성신생물',
    items: [
      { disease: '중피조직의 양성 신생물', code: 'D19' },
      { disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    group: 'C',
    category: '수막의 양성 신생물',
    items: [
      { disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    group: 'C',
    category: '뇌 및 중추신경계통의 양성 신생물',
    items: [
      { disease: '뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    group: 'C',
    category: '갑상선 및 내분비선의 양성신생물',
    items: [
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  }
];

// 메리츠화재 64대질병 분류표 데이터
export const MERITZ_64_DISEASES_SECTIONS = [
  // --- 1. 7대질병 (7개) ---
  {
    title: '[7대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장 질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '수막구균성 심장질환', code: 'A39.5' },
      { num: '7', disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    title: '[7대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[7대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '거대세포바이러스간염', code: 'B25.1' },
      { num: '4', disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    title: '[7대질병] 고혈압질환',
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
    title: '[7대질병] 당뇨병질환',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조 관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성단일신경병증', code: 'G59.0' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2' },
      { num: '11', disease: '당뇨병에서의사구체장애', code: 'N08.3' }
    ]
  },
  {
    title: '[7대질병] 만성 하부호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
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

  // --- 2. 특정 15대질병 (15개) ---
  {
    title: '[특정15대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' },
      { num: '3', disease: '결핵성복막염', code: 'K67.3' },
      { num: '4', disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0' },
      { num: '5', disease: '결핵 관절염', code: 'M01.1' },
      { num: '6', disease: '척추의 결핵', code: 'M49.0' },
      { num: '7', disease: '뼈의 결핵', code: 'M90.0' },
      { num: '8', disease: '결핵성 방광염', code: 'N33.0' },
      { num: '9', disease: '자궁경부의 결핵감염', code: 'N74.0' },
      { num: '10', disease: '여성 결핵성 골반염증질환', code: 'N74.1' }
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
      { num: '2', disease: '갑상선이상성 안구돌출', code: 'H06.2' },
      { num: '3', disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[특정15대질병] 중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염(수막구균수막염 A39.0)', code: 'G01' },
      { num: '3', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염(아데노바이러스수막염 A87.1, 엔테로바이러스수막염 A87.0, 헤르페스바이러스수막염 B00.3, 수막염이 합병된 홍역 B05.1, 볼거리수막염 B26.1, 수두수막염 B01.0, 대상포진수막염 B02.1, 칸디다수막염 B37.5, 콕시디오이데스진균수막염 B38.4)', code: 'G02' },
      { num: '4', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { num: '5', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '6', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염(아데노바이러스뇌염 A85.1, 엔테로바이러스뇌염 A85.0, 헤르페스바이러스뇌염 B00.4, 뇌염이 합병된 홍역 B05.0, 볼거리뇌염 B26.2, 수두뇌염 B01.1, 대상포진뇌염 B02.0)', code: 'G05' },
      { num: '7', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '8', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종(아메바성 뇌농양 A06.6)', code: 'G07' },
      { num: '9', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '10', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
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
    title: '[특정15대질병] 자율신경계통의 장애',
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
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '수두폐렴', code: 'B01.2' },
      { num: '10', disease: '폐렴이 합병된 홍역', code: 'B05.2' },
      { num: '11', disease: '거대세포바이러스폐렴', code: 'B25.0' },
      { num: '12', disease: '폐 톡소포자충증', code: 'B58.3' }
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
      { num: '2', disease: '달리 분류된 질환에서의 담당, 담도 및 췌장의 장애(거대세포바이러스췌장염 B25.2+, 볼거리췌장염 B26.3+)', code: 'K87' }
    ]
  },
  {
    title: '[특정15대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },

  // --- 3. 다빈도39대질병 (39개) ---
  {
    title: '[다빈도39대질병] 소화기계통의 양성신생물(D13)',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화기관의 양성신생물', code: 'D13' }
    ]
  },
  {
    title: '[다빈도39대질병] 중이·호흡기계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽 내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[다빈도39대질병] 골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[다빈도39대질병] 조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[다빈도39대질병] 여성생식기의 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    title: '[다빈도39대질병] 남성생식기의 양성종양',
    items: [
      { num: '1', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[다빈도39대질병] 비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '[다빈도39대질병] 수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[다빈도39대질병] 뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[다빈도39대질병] 갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[다빈도39대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[다빈도39대질병] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[다빈도39대질병] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[다빈도39대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 앨러지성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '[다빈도39대질병] 인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[다빈도39대질병] 중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환(중이염이 합병된 홍역 B05.3*, 홍역후 중이염 B05.3*)', code: 'H65~H75' }
    ]
  },
  {
    title: '[다빈도39대질병] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[다빈도39대질병] 백내장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },
  {
    title: '[다빈도39대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[다빈도39대질병] 눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애(홍채섬모체염/홍채염/전방포도막염 B00.50+, 각막염/각막결막염/각막상피염/간질각막염/각막내피염 B00.51+, 아데노바이러스에 의한 각막결막염/유행성 각막결막염/조선소눈병 B30.0+)', code: 'H15~H22' },
      { num: '2', disease: '맥락막 및 망막의 장애 (황반 및 후극부 변성 H35.3 제외, 고혈압성 망막병증 H35.02 제외, 당뇨병성 망막병증 H36.0 제외)', code: 'H30~H36' },
      { num: '3', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[다빈도39대질병] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염증후군', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의 사구체장애 (당뇨병에서의 사구체장애 N08.3 제외)', code: 'N08' }
    ]
  },
  {
    title: '[다빈도39대질병] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리 분류된 질환에서의 신세뇨관-간질장애', code: 'N16' }
    ]
  },
  {
    title: '[다빈도39대질병] 방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[다빈도39대질병] 신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[다빈도39대질병] 비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '비뇨계통의 기타 장애(칸디다 방광염 및 요도염 B37.40+)', code: 'N37' },
      { num: '6', disease: '달리 분류된 질환에서의 요도장애 (결핵성 방광염 A18.11† 제외, 스트레스요실금 N39.3 제외, 기타 명시된 요실금 N39.4 제외)', code: 'N39' }
    ]
  },
  {
    title: '[다빈도39대질병] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[다빈도39대질병] 사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[다빈도39대질병] 특정 부위의 탈장',
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
    title: '[다빈도39대질병] 비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[다빈도39대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[다빈도39대질병] 복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환 (결핵성 복막염 K67.3 제외)', code: 'K65~K67' }
    ]
  },
  {
    title: '[다빈도39대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[다빈도39대질병] 담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[다빈도39대질병] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[다빈도39대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[다빈도39대질병] 추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[다빈도39대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[다빈도39대질병] 안면신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[다빈도39대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의 단일신경병증 (당뇨병성 단일신경병증 G59.0 제외)', code: 'G59' }
    ]
  },

  // --- 4. 관절염·생식기질환 (2개) ---
  {
    title: '[관절염·생식기질환] 관절염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00~M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05~M14' },
      { num: '3', disease: '류마티스 폐질환', code: 'J99.0' },
      { num: '4', disease: '관절증', code: 'M15~M19' },
      { num: '5', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[관절염·생식기질환] 생식기질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환 (남성 불임 제외)', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '편모충 전립선염', code: 'A59.01' },
      { num: '3', disease: '볼거리고환염', code: 'B26.0' },
      { num: '4', disease: '여성 골반내 기관의 염증성 질환', code: 'N70~N77' },
      { num: '5', disease: '여성 생식기관 비염증성 장애 (습관유산자 제외, 여성 불임 제외, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { num: '6', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },

  // --- 5. 치핵 (1개) ---
  {
    title: '[치핵] 치핵',
    items: [
      { num: '1', disease: '치핵 및 항문주위 정맥의 혈전증 (포함 - 치질 K64 / 제외 - 출산 및 산후기 합병 O87.2, 임신 합병 O22.4)', code: 'K64' }
    ]
  }
];

// 메리츠화재 64대질병수술 상단 요약 분류표 데이터
export const MERITZ_64_DISEASES_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  MERITZ_64_DISEASES_SECTIONS.forEach((sec) => {
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

// 메리츠화재 6대심장질환 분류표 데이터
export const MERITZ_6HEART_DISEASES_SECTIONS = [
  {
    category: '1.만성 류마티스심장질환',
    items: [
      { disease: '류마티스성 승모판질환', code: 'I05' },
      { disease: '류마티스성 대동맥판질환', code: 'I06' },
      { disease: '류마티스성 삼첨판질환', code: 'I07' },
      { disease: '다발판막질환', code: 'I08' },
      { disease: '기타 류마티스심장질환', code: 'I09' }
    ]
  },
  {
    category: '2.심장염증질환',
    items: [
      { disease: '급성 심장막염', code: 'I30' },
      { disease: '심장막의 기타 질환', code: 'I31' },
      { disease: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { disease: '급성 및 아급성 심내막염', code: 'I33' },
      { disease: '상세불명 판막의 심내막염', code: 'I38' },
      { disease: '급성 심근염', code: 'I40' },
      { disease: '달리 분류된 질환에서의 심근염', code: 'I41' }
    ]
  },
  {
    category: '3.심근병증',
    items: [
      { disease: '심근병증', code: 'I42' },
      { disease: '달리 분류된 질환에서의 심근병증', code: 'I43' }
    ]
  },
  {
    category: '4.부정맥',
    items: [
      { disease: '발작성 빈맥', code: 'I47' },
      { disease: '심방세동 및 조동', code: 'I48' },
      { disease: '기타 심장부정맥', code: 'I49' }
    ]
  },
  {
    category: '5.심부전',
    items: [
      { disease: '심부전', code: 'I50' }
    ]
  },
  {
    category: '6.기타심장질환',
    items: [
      { subCategory: '달리분류된 질환에서의 심내막염 및 심장판막장애', disease: '달리 분류된 질환에서의 상세불명 판막의 심내막염', code: 'I39.8' },
      { subCategory: '중증 방실차단', disease: '방실차단, 2도', code: 'I44.1' },
      { subCategory: '중증 방실차단', disease: '완전방실차단', code: 'I44.2' },
      { subCategory: '중증 방실차단', disease: '기타 및 상세불명의 심방실차단', code: 'I44.3' },
      { subCategory: '인공소생 심장정지', disease: '인공소생에 성공한 심장정지', code: 'I46.0' }
    ]
  }
];

// 메리츠화재 5대질환 분류표 데이터
export const MERITZ_5_DISEASES_SECTIONS = [
  {
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장 질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' }
    ]
  },
  {
    category: '뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    category: '간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1†' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1†' }
    ]
  },
  {
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '폐질환',
    items: [
      { disease: '폐기종', code: 'J43' },
      { disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { disease: '기관지확장증', code: 'J47' },
      { disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  }
];

export const MERITZ_5_DISEASES_SUMMARY = MERITZ_5_DISEASES_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease}${i.code ? ` (${i.code})` : ''}`)
}));

// interface moved to types.ts

export const MERITZ_INTEGRATED_TREATMENT_ITEMS: MeritzIntegratedTreatmentItem[] = [
  // 검사 (8개)
  { category: '검사', name: '암 내시경검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '5만원', '100m': '5만원' },
  { category: '검사', name: '암 MRI촬영검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '5만원', '100m': '5만원' },
  { category: '검사', name: '암 양전자단층촬영(PET)검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '5만원', '100m': '5만원' },
  { category: '검사', name: '암 특정단일유전자검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '5만원', '100m': '5만원' },
  { category: '검사', name: '암 초음파검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '10만원', '100m': '10만원' },
  { category: '검사', name: '암 CT촬영검사(급여)', count: '연간 1회한', '40m': '5만원', '80m': '10만원', '100m': '10만원' },
  { category: '검사', name: '암 특정생검조직병리검사(급여)', count: '연간 1회한', '40m': '10만원', '80m': '20만원', '100m': '20만원' },
  { category: '검사', name: '암 특정NGS유전자패널검사(급여)', count: '연간 1회한', '40m': '100만원', '80m': '100만원', '100m': '100만원' },

  // 주요 치료 (7개)
  { category: '주요 치료', name: '암(유사암제외) 수술', count: '수술 1회당', '40m': '500만원', '80m': '750만원', '100m': '1,000만원' },
  { category: '주요 치료', name: '유사암 수술', count: '수술 1회당', '40m': '100만원', '80m': '150만원', '100m': '200만원' },
  { category: '주요 치료', name: '암(유사암제외) 항암방사선치료', count: '연간 1회한', '40m': '500만원', '80m': '750만원', '100m': '1,000만원' },
  { category: '주요 치료', name: '기타피부암 및 갑상선암 항암방사선치료', count: '연간 1회한', '40m': '100만원', '80m': '150만원', '100m': '200만원' },
  { category: '주요 치료', name: '암(유사암제외) 항암약물치료', count: '연간 1회한', '40m': '500만원', '80m': '750만원', '100m': '1,000만원' },
  { category: '주요 치료', name: '기타피부암 및 갑상선암 항암약물치료', count: '연간 1회한', '40m': '100만원', '80m': '150만원', '100m': '200만원' },
  { category: '주요 치료', name: '항암세기조절방사선치료', count: '연간 1회한', '40m': '500만원', '80m': '750만원', '100m': '1,000만원' },

  // 비급여(전액본인부담 포함)치료 (5개)
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 암(특정암제외) 다빈치로봇수술', count: '연간 1회한', '40m': '500만원', '80m': '750만원', '100m': '1,000만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 특정암 다빈치로봇수술', count: '연간 1회한', '40m': '100만원', '80m': '150만원', '100m': '200만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 표적항암약물허가치료', count: '연간 1회한', '40m': '1,000만원', '80m': '2,000만원', '100m': '3,000만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 특정면역항암약물허가치료', count: '연간 1회한', '40m': '1,000만원', '80m': '2,000만원', '100m': '3,000만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 항암양성자방사선치료', count: '연간 1회한', '40m': '1,000만원', '80m': '2,000만원', '100m': '3,000만원' },

  // 통증완화치료 (1개)
  { category: '통증완화치료', name: '암(유사암제외) 특정통증완화치료(급여)', count: '연간 1회한', '40m': '30만원', '80m': '40만원', '100m': '50만원' },

  // 재활치료 (2개)
  { category: '재활치료', name: '입원 암 재활치료(급여)', count: '연간 20회한 (각각 1일 1회한)', '40m': '2만원', '80m': '2만원', '100m': '2만원' },
  { category: '재활치료', name: '외래 암 재활치료(급여)', count: '연간 20회한 (각각 1일 1회한)', '40m': '2만원', '80m': '2만원', '100m': '2만원' },
];

export const MERITZ_INTEGRATED_TREATMENT_SECTIONS = [
  {
    category: '검사',
    items: MERITZ_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '검사').map(i => ({ disease: i.name, code: i['40m'] }))
  },
  {
    category: '주요 치료',
    items: MERITZ_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '주요 치료').map(i => ({ disease: i.name, code: i['40m'] }))
  },
  {
    category: '비급여(전액본인부담 포함)치료',
    items: MERITZ_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '비급여(전액본인부담 포함)치료').map(i => ({ disease: i.name, code: i['40m'] }))
  },
  {
    category: '통증완화치료',
    items: MERITZ_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '통증완화치료').map(i => ({ disease: i.name, code: i['40m'] }))
  },
  {
    category: '재활치료',
    items: MERITZ_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '재활치료').map(i => ({ disease: i.name, code: i['40m'] }))
  }
];

export const MERITZ_INTEGRATED_TREATMENT_SUMMARY = MERITZ_INTEGRATED_TREATMENT_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease} (${i.code})`)
}));

// 메리츠화재 암통합치료비(실속형) 데이터
// interface moved to types.ts

export const MERITZ_PRACTICAL_TREATMENT_ITEMS: MeritzPracticalTreatmentItem[] = [
  // 주요 치료 (6개)
  { category: '주요 치료', name: '암(유사암제외) 수술', count: '수술 1회당', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
  { category: '주요 치료', name: '유사암 수술', count: '수술 1회당', '10m': '50만원', '30m': '100만원', '50m': '150만원', '70m': '200만원' },
  { category: '주요 치료', name: '암(유사암제외) 항암방사선치료', count: '연간 1회한', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
  { category: '주요 치료', name: '기타피부암 및 갑상선암 항암방사선치료', count: '연간 1회한', '10m': '50만원', '30m': '100만원', '50m': '150만원', '70m': '200만원' },
  { category: '주요 치료', name: '암(유사암제외) 항암약물치료', count: '연간 1회한', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
  { category: '주요 치료', name: '기타피부암 및 갑상선암 항암약물치료', count: '연간 1회한', '10m': '50만원', '30m': '100만원', '50m': '150만원', '70m': '200만원' },

  // 비급여(전액본인부담 포함)치료 (3개)
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 표적항암약물허가치료', count: '연간 1회한', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 특정면역항암약물허가치료', count: '연간 1회한', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
  { category: '비급여(전액본인부담 포함)치료', name: '비급여(전액본인부담 포함) 항암양성자방사선치료', count: '연간 1회한', '10m': '250만원', '30m': '500만원', '50m': '750만원', '70m': '1,000만원' },
];

export const MERITZ_PRACTICAL_TREATMENT_SECTIONS = [
  {
    category: '주요 치료',
    items: MERITZ_PRACTICAL_TREATMENT_ITEMS.filter(i => i.category === '주요 치료').map(i => ({ disease: i.name, code: i['10m'] }))
  },
  {
    category: '비급여(전액본인부담 포함)치료',
    items: MERITZ_PRACTICAL_TREATMENT_ITEMS.filter(i => i.category === '비급여(전액본인부담 포함)치료').map(i => ({ disease: i.name, code: i['10m'] }))
  }
];

export const MERITZ_PRACTICAL_TREATMENT_SUMMARY = MERITZ_PRACTICAL_TREATMENT_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease} (${i.code})`)
}));

// 메리츠화재 암통합치료비(비급여) 데이터
// interface moved to types.ts

export const MERITZ_NONCOVERED_TREATMENT_ITEMS: MeritzNoncoveredTreatmentItem[] = [
  // 주요 치료 (6개)
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 수술', count: '수술 1회당', '40m_under': '250만원', '40m_over': '500만원', '70m_under': '375만원', '70m_over': '750만원', '100m_under': '500만원', '100m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 유사암 수술', count: '수술 1회당', '40m_under': '50만원', '40m_over': '100만원', '70m_under': '75만원', '70m_over': '150만원', '100m_under': '100만원', '100m_over': '200만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 항암방사선치료', count: '연간 1회한', '40m_under': '250만원', '40m_over': '500만원', '70m_under': '375만원', '70m_over': '750만원', '100m_under': '500만원', '100m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 기타피부암 및 갑상선암 항암방사선치료', count: '연간 1회한', '40m_under': '50만원', '40m_over': '100만원', '70m_under': '75만원', '70m_over': '150만원', '100m_under': '100만원', '100m_over': '200만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 항암약물치료', count: '연간 1회한', '40m_under': '250만원', '40m_over': '500만원', '70m_under': '375만원', '70m_over': '750만원', '100m_under': '500만원', '100m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 기타피부암 및 갑상선암 항암약물치료', count: '연간 1회한', '40m_under': '50만원', '40m_over': '100만원', '70m_under': '75만원', '70m_over': '150만원', '100m_under': '100만원', '100m_over': '200만원' },

  // 특정 치료 (5개)
  { category: '특정 치료', name: '비급여(전액본인부담 포함) 암(특정암제외) 다빈치로봇수술', count: '연간 1회한', '40m_under': '250만원', '40m_over': '500만원', '70m_under': '375만원', '70m_over': '750만원', '100m_under': '500만원', '100m_over': '1,000만원' },
  { category: '특정 치료', name: '비급여(전액본인부담 포함) 특정암 다빈치로봇수술', count: '연간 1회한', '40m_under': '50만원', '40m_over': '100만원', '70m_under': '75만원', '70m_over': '150만원', '100m_under': '100만원', '100m_over': '200만원' },
  { category: '특정 치료', name: '비급여(전액본인부담 포함) 표적항암약물허가치료', count: '연간 1회한', '40m_under': '500만원', '40m_over': '1,000만원', '70m_under': '1,000만원', '70m_over': '2,000만원', '100m_under': '1,500만원', '100m_over': '3,000만원' },
  { category: '특정 치료', name: '비급여(전액본인부담 포함) 특정면역항암약물허가치료', count: '연간 1회한', '40m_under': '500만원', '40m_over': '1,000만원', '70m_under': '1,000만원', '70m_over': '2,000만원', '100m_under': '1,500만원', '100m_over': '3,000만원' },
  { category: '특정 치료', name: '비급여(전액본인부담 포함) 항암양성자방사선치료', count: '연간 1회한', '40m_under': '500만원', '40m_over': '1,000만원', '70m_under': '1,000만원', '70m_over': '2,000만원', '100m_under': '1,500만원', '100m_over': '3,000만원' },
];

export const MERITZ_NONCOVERED_TREATMENT_SECTIONS = [
  {
    category: '주요 치료',
    items: MERITZ_NONCOVERED_TREATMENT_ITEMS.filter(i => i.category === '주요 치료').map(i => ({ disease: i.name, code: i['40m_over'] }))
  },
  {
    category: '특정 치료',
    items: MERITZ_NONCOVERED_TREATMENT_ITEMS.filter(i => i.category === '특정 치료').map(i => ({ disease: i.name, code: i['40m_over'] }))
  }
];

export const MERITZ_NONCOVERED_TREATMENT_SUMMARY = MERITZ_NONCOVERED_TREATMENT_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease} (${i.code})`)
}));

// 메리츠화재 암통합치료비(비급여/주요치료) 데이터
// interface moved to types.ts

export const MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS: MeritzNoncoveredPrimaryTreatmentItem[] = [
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 수술', count: '수술 1회당', '30m_under': '250만원', '30m_over': '500만원', '50m_under': '375만원', '50m_over': '750만원', '70m_under': '500만원', '70m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 유사암 수술', count: '수술 1회당', '30m_under': '50만원', '30m_over': '100만원', '50m_under': '75만원', '50m_over': '150만원', '70m_under': '100만원', '70m_over': '200만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 항암방사선치료', count: '연간 1회한', '30m_under': '250만원', '30m_over': '500만원', '50m_under': '375만원', '50m_over': '750만원', '70m_under': '500만원', '70m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 기타피부암 및 갑상선암 항암방사선치료', count: '연간 1회한', '30m_under': '50만원', '30m_over': '100만원', '50m_under': '75만원', '50m_over': '150만원', '70m_under': '100만원', '70m_over': '200만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 암(유사암제외) 항암약물치료', count: '연간 1회한', '30m_under': '250만원', '30m_over': '500만원', '50m_under': '375만원', '50m_over': '750만원', '70m_under': '500만원', '70m_over': '1,000만원' },
  { category: '주요 치료', name: '비급여(전액본인부담 포함) 기타피부암 및 갑상선암 항암약물치료', count: '연간 1회한', '30m_under': '50만원', '30m_over': '100만원', '50m_under': '75만원', '50m_over': '150만원', '70m_under': '100만원', '70m_over': '200만원' },
];

export const MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS = [
  {
    category: '주요 치료',
    items: MERITZ_NONCOVERED_PRIMARY_TREATMENT_ITEMS.map(i => ({ disease: i.name, code: i['30m_over'] }))
  }
];

export const MERITZ_NONCOVERED_PRIMARY_TREATMENT_SUMMARY = MERITZ_NONCOVERED_PRIMARY_TREATMENT_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease} (${i.code})`)
}));

// 메리츠화재 질병통합치료비 데이터 (2-134. 질병 통합치료비보장 특별약관)
// interface moved to types.ts

export const MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS: MeritzDiseaseIntegratedTreatmentItem[] = [
  // 검사 (3개)
  { category: '검사', name: 'MRI촬영(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '5만원' },
  { category: '검사', name: 'CT촬영(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '5만원' },
  { category: '검사', name: '양전자단층촬영(PET)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '5만원' },

  // 수술(1-5종) (5개)
  { category: '수술(1-5종)', name: '1종수술', count: '수술 1회당', '20m': '5만원', '40m': '10만원', '70m': '20만원' },
  { category: '수술(1-5종)', name: '2종수술', count: '수술 1회당', '20m': '10만원', '40m': '20만원', '70m': '30만원' },
  { category: '수술(1-5종)', name: '3종수술', count: '수술 1회당', '20m': '30만원', '40m': '50만원', '70m': '100만원' },
  { category: '수술(1-5종)', name: '4종수술', count: '수술 1회당', '20m': '200만원', '40m': '300만원', '70m': '500만원' },
  { category: '수술(1-5종)', name: '5종수술', count: '수술 1회당', '20m': '300만원', '40m': '500만원', '70m': '700만원' },

  // 주요치료 (10개)
  { category: '주요치료', name: '특정시술치료(흡인,천자,절개)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '10만원' },
  { category: '주요치료', name: '특정시술치료(신경차단술)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '10만원' },
  { category: '주요치료', name: '특정시술치료(도수정복술)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '10만원' },
  { category: '주요치료', name: '창상봉합술치료(안면부,표재성)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '10만원' },
  { category: '주요치료', name: '창상봉합술치료(안면부이외,표재성)(급여)', count: '연간 1회한', '20m': '5만원', '40m': '5만원', '70m': '10만원' },
  { category: '주요치료', name: '지속적신대체요법(CRRT)(급여)', count: '연간 1회한', '20m': '300만원', '40m': '400만원', '70m': '500만원' },
  { category: '주요치료', name: '인공호흡기치료(12시간초과)(급여)', count: '연간 1회한', '20m': '100만원', '40m': '150만원', '70m': '200만원' },
  { category: '주요치료', name: '저체온요법치료(급여)', count: '연간 1회한', '20m': '50만원', '40m': '75만원', '70m': '100만원' },
  { category: '주요치료', name: '부분체외순환치료(급여)', count: '연간 1회한', '20m': '500만원', '40m': '750만원', '70m': '1,000만원' },
  { category: '주요치료', name: '종합병원 전신마취치료(6시간이상)(급여)', count: '연간 1회한', '20m': '300만원', '40m': '400만원', '70m': '500만원' },
];

export const MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS = [
  {
    category: '검사',
    items: MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '검사').map(i => ({ disease: i.name, code: i['20m'] }))
  },
  {
    category: '수술(1-5종)',
    items: MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '수술(1-5종)').map(i => ({ disease: i.name, code: i['20m'] }))
  },
  {
    category: '주요치료',
    items: MERITZ_DISEASE_INTEGRATED_TREATMENT_ITEMS.filter(i => i.category === '주요치료').map(i => ({ disease: i.name, code: i['20m'] }))
  }
];

export const MERITZ_DISEASE_INTEGRATED_TREATMENT_SUMMARY = MERITZ_DISEASE_INTEGRATED_TREATMENT_SECTIONS.map(s => ({
  category: s.category,
  diseases: s.items.map(i => `${i.disease} (${i.code})`)
}));

// 메리츠화재 131대수술비 분류표 데이터
export const MERITZ_131_DISEASES_SECTIONS = [
  {
    category: '1. 심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { disease: '허혈심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' }
    ]
  },
  {
    category: '2. 뇌혈관질환',
    items: [
      { disease: '거미막하출혈', code: 'I60' },
      { disease: '뇌내출혈', code: 'I61' },
      { disease: '기타 비외상성 두개내출혈', code: 'I62' },
      { disease: '뇌경색증', code: 'I63' },
      { disease: '출혈 또는 경색증으로 명시되지 않은 뇌졸중', code: 'I64' },
      { disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' },
      { disease: '기타 뇌혈관질환', code: 'I67' },
      { disease: '달리 분류된 질환에서의 뇌혈관장애', code: 'I68' },
      { disease: '뇌혈관질환의 후유증', code: 'I69' }
    ]
  },
  {
    category: '3. 특정31대질병',
    items: [
      { disease: '크로이츠펠트-야콥병', code: 'A81.0' },
      { disease: '뇌의 특정염증성질환', code: 'A83~A86 (A85.0+, A85.1+ 제외)' },
      { disease: '간질환 (바이러스 간염, 간의 질환, 거대세포/톡소포자충간염)', code: 'B15~B19, K70~K77, B25.1†, B58.1†' },
      { disease: '고혈압질환 (본태성, 심장병, 신장병, 이차성, 고혈압성 망막병증)', code: 'I10~I13, I15, H35.0' },
      { disease: '당뇨병질환 (1형, 2형, 영양실조관련, 기타/상세불명, 합병증)', code: 'E10~E14, G59.0*, G63.2*, H28.0*, H36.0*, M14.2*, N08.3*' },
      { disease: '조로증', code: 'E34.8' },
      { disease: '만성 하부 호흡기 질환 (급성/만성 기관지염, 천식 등)', code: 'J40~J46' },
      { disease: '위궤양 및 십이지장궤양', code: 'K25~K27' },
      { disease: '결핵 (결핵의 후유증 및 장, 척추, 뼈, 방광 등 결핵성 장애)', code: 'A15~A19, B90, K67.3*, K93.0*, M01.1*, M49.0*, M90.0*, N33.0*, N74.0*, N74.1*' },
      { disease: '패혈증 (연쇄알균패혈증, 기타 패혈증)', code: 'A40, A41' },
      { disease: '중추신경계통의 염증성 질환 (수막염, 뇌염, 척수염, 뇌척수염, 농양 등)', code: 'G00~G09, A39.0†, A87†, B00†, B01†, B02†, B05†, B26†, B37†, B38†, A85†, A06†' },
      { disease: '파킨슨병 (파킨슨병, 이차성 파킨슨증)', code: 'G20, G21' },
      { disease: '다발경화증', code: 'G35' },
      { disease: '뇌전증 (뇌전증, 뇌전증지속상태)', code: 'G40, G41' },
      { disease: '중증근무력증 및 기타 근신경장애', code: 'G70' },
      { disease: '뇌성마비', code: 'G80' },
      { disease: '마비 (편마비, 하반신마비, 사지마비, 기타 마비증후군)', code: 'G81~G83' },
      { disease: '자율신경계통의 장애', code: 'G90' },
      { disease: '수두증', code: 'G91' },
      { disease: '녹내장', code: 'H40, H42' },
      { disease: '죽상경화증', code: 'I70' },
      { disease: '대동맥동맥류 및 박리', code: 'I71' },
      { disease: '기타 동맥류 및 박리', code: 'I72' },
      { disease: '폐렴 (바이러스, 세균, 병원체, 레지오넬라병 등)', code: 'J12~J18, A48.1, B01.2†, B05.2†, B25.0†, B58.3†' },
      { disease: '폐질환 (폐기종, 만성 폐쇄성, 기관지확장증, 흉막 질환 등)', code: 'J43, J44, J47, J85~J86, J90~J94' },
      { disease: '외부요인에 의한 폐질환', code: 'J60~J70' },
      { disease: '폐부종', code: 'J81' },
      { disease: '특정호흡기질환 (폐호산구증가, 간질성 폐질환)', code: 'J82, J84' },
      { disease: '급성 췌장염', code: 'K85' },
      { disease: '췌장질환 (췌장 기타 질환, 담낭/담도/췌장 장애 등)', code: 'K86, K87, B25.2†, B26.3†' },
      { disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    category: '4. 다빈도62대질병',
    items: [
      { disease: '12대 양성종양 (주침샘, 소화계통, 호흡계, 골/연골, 자궁, 난소, 남성/비뇨, 눈, 수막, 뇌, 갑상선/내분비 양성신생물)', code: 'D11, D13~D16, D19~D21, D25~D28, D29~D35' },
      { disease: '특정 혈액 및 조혈기관의 질환 (용혈-요독증후군, 비장의 질환)', code: 'D59.3, D73' },
      { disease: '내분비계 질환 (갑상선, 부갑상선, 뇌하수체, 쿠싱증후군, 고알도스테론증 등)', code: 'E00~E07, H06.2*, E89.0, E20~E23, E24~E27' },
      { disease: '혈관질환 (버거병, 동맥색전/혈전증, 문맥혈전증, 림프절염, 식도정맥류)', code: 'I73.1, I74, I77, I81, I88, I89, I98.2, I98.3' },
      { disease: '급성 상기도감염 및 특정 인플루엔자 (상기도감염, 인플루엔자, 급성 하기도감염)', code: 'J00~J06, J09~J11, J22' },
      { disease: '축농증 및 인후부위 특정질환 (만성 부비동염, 편도주위농양, 만성 후두염, 성인호흡곤란)', code: 'J32, J36~J39, J80' },
      { disease: '이비인후과 질환 (외이, 중이/유돌, 내이, 귀의 기타 장애)', code: 'H60~H62, H65~H75, H80~H83, H90~H95, B05.3+' },
      { disease: '시각질환 (황반변성, 공막/각막/홍채 장애, 맥락막/망막 장애, 미만성 층판성 각막염)', code: 'H35.3, H15~H22, H30~H36, H46~H48, H59.8' },
      { disease: '사구체 및 신세뇨관-간질질환 (신염증후군, 신증후군, 세뇨관-간질신장염, 요로병증)', code: 'N00~N08, N10~N16' },
      { disease: '방광의 결석 및 신장/요관/비뇨계통 질환 (신장위축, 방광염, 신경근육장애, 칸디다요도염)', code: 'N21.0, N25~N29, N30~N33, N37, B37.40+, N39' },
      { disease: '특정요도질환 (요도염, 요도증후군, 요도협착)', code: 'N34~N36' },
      { disease: '소화기 침샘 및 식도 질환 (침샘 질환, 식도염, 위-식도역류병)', code: 'K11, K20~K23' },
      { disease: '위공장궤양 및 위십이지장 질환 (위염, 십이지장염, 기능성 소화불량)', code: 'K28, K29, K30' },
      { disease: '탈장 질환 (사타구니, 대퇴, 배꼽, 복벽, 횡격막, 기타 복부탈장)', code: 'K40~K46' },
      { disease: '비감염성 장염/결장염, 특정 장질환 및 복막질환 (크론병, 궤양성 대장염, 장폐쇄, 게실병)', code: 'K50~K52, K55~K57, K65~K67' },
      { disease: '담석증, 담낭담도질환 및 장흡수장애 (담낭염, 담도질환, 장흡수장애)', code: 'K80~K83, K90' },
      { disease: '특정 전신결합조직장애 및 결합조직 침범 (다발동맥염, 괴사성 혈관병증, 쉐그렌증후군)', code: 'M30, M31, M35, H19.3*' },
      { disease: '척추변형 및 척추병증 (척주측만/후만증, 강직척추염, 척추증)', code: 'M40~M43, M45~M48' },
      { disease: '추간판장애 (경추간판장애, 기타 추간판장애/디스크)', code: 'M50, M51' },
      { disease: '골다공증 (병적 골절 동반/미동반 골다공증, 골연속성 장애)', code: 'M80~M82, M84' },
      { disease: '안면 신경장애 및 단일신경병증 (삼차신경, 안면신경, 팔/다리 단일신경병증)', code: 'G50~G52, G56~G59' }
    ]
  },
  {
    category: '5. 특정다빈도29대질병',
    items: [
      { disease: '혀의 질환', code: 'K14' },
      { disease: '유방의 양성 신생물', code: 'D24' },
      { disease: '다낭성 난소증후군', code: 'E28.2' },
      { disease: '수면무호흡', code: 'G47.3' },
      { disease: '특정질환의 신경근 및 신경총 압박 (신생물, 추간판, 척추증, 기타)', code: 'G55.0~G55.3' },
      { disease: '안화장애 및 결막장애', code: 'H05, H10~H13' },
      { disease: '정맥염/혈전정맥염 및 기타 정맥 색전/혈전증', code: 'I80, I82' },
      { disease: '식도정맥류 및 음낭정맥류', code: 'I85, I86.1' },
      { disease: '급성 기관지염 및 급성 세기관지염', code: 'J20, J21' },
      { disease: '위 및 십이지장의 기타 질환', code: 'K31' },
      { disease: '특정 장질환 (과민대장증후군, 기타 기능성 장장애)', code: 'K58, K59' },
      { disease: '치열 및 치루 (항문 및 직장부위 열창, 누공, 농양)', code: 'K60, K61' },
      { disease: '특정 소화계통의 기타 질환', code: 'K92, K93' },
      { disease: '특정 전신결합조직장애II (전신홍반루푸스, 피부다발근염, 전신경화증)', code: 'M32~M34' },
      { disease: '달리 분류된 질환에서의 척추병증', code: 'M49' },
      { disease: '특정 기타등병증 및 근육 장애 (등통증, 근육 장애)', code: 'M53, M54, M60~M63' },
      { disease: '기타 연조직장애', code: 'M70~M79' },
      { disease: '골수염, 골괴사증, 뼈의 파젯병 및 기타 장애', code: 'M86~M89' },
      { disease: '연골병증', code: 'M91~M94' },
      { disease: '상세불명의 신장 급통증', code: 'N23' },
      { disease: '다한증', code: 'R61' }
    ]
  },
  {
    category: '6. 후각특정질환',
    items: [
      { disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { disease: '코용종', code: 'J33' },
      { disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    category: '7. 관절염 및 생식기질환',
    items: [
      { disease: '관절염 (감염성 관절병증, 염증성 다발관절병증, 관절증, 기타 관절장애)', code: 'M00~M03, M05~M14, M15~M19, M20~M25' },
      { disease: '남성 생식기관의 질환 (전립선염, 고환염, 부고환염 등)', code: 'N40~N45, N47~N51, A59.08†, B26.0†' },
      { disease: '여성골반내기관의 염증성 질환', code: 'N70~N77' },
      { disease: '여성 생식관의 비염증성 장애 (자궁내막증, 난소낭종, 비염증성 장애 등)', code: 'N80~N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    category: '8. 유방의 장애',
    items: [
      { disease: '양성 유방형성이상', code: 'N60' },
      { disease: '유방의 염증성 장애', code: 'N61' },
      { disease: '유방의 비대', code: 'N62' },
      { disease: '유방의 상세불명의 덩이', code: 'N63' },
      { disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    category: '9. 편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    category: '10. 치핵',
    items: [
      { disease: '치핵 및 항문주위정맥 혈전증 (치질 포함)', code: 'K64' }
    ]
  },
  {
    category: '11. 백내장',
    items: [
      { disease: '노년백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타 장애', code: 'H27' }
    ]
  }
];

// 메리츠화재 32대질병관혈 분류표 데이터
export const MERITZ_32_DISEASES_SECTIONS = [
  // --- 5대질병 ---
  {
    division: '5대질병',
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00~I02' },
      { disease: '만성 류마티스 심장 질환', code: 'I05~I09' },
      { disease: '허혈성심장질환', code: 'I20~I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { disease: '기타 형태의 심장병', code: 'I30~I52' },
      { disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' }
    ]
  },
  {
    division: '5대질병',
    category: '뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    division: '5대질병',
    category: '간질환',
    items: [
      { disease: '바이러스 간염', code: 'B15~B19' },
      { disease: '간의 질환', code: 'K70~K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1†' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1†' }
    ]
  },
  {
    division: '5대질병',
    category: '폐질환',
    items: [
      { disease: '폐기종', code: 'J43' },
      { disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { disease: '기관지확장증', code: 'J47' },
      { disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    division: '5대질병',
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17~N19' }
    ]
  },

  // --- 9대질병 ---
  {
    division: '9대질병',
    category: '만성하부호흡기질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    division: '9대질병',
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    division: '9대질병',
    category: '결핵',
    items: [
      { disease: '결핵', code: 'A15~A19' },
      { disease: '결핵의 후유증', code: 'B90' },
      { disease: '결핵성 복막염(A18.30†)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장염(A18.3*-*)', code: 'K93.0*' },
      { disease: '결핵성관절염(A18.01†)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.00†)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.02†)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.11†)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵육아종(A18.17†)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환(A18.17†)', code: 'N74.1*' }
    ]
  },
  {
    division: '9대질병',
    category: '갑상선질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00~E07' },
      { disease: '갑상선이상성 안구돌출(E05.0†)', code: 'H06.2*' },
      { disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    division: '9대질병',
    category: '동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    division: '9대질병',
    category: '대동맥류',
    items: [
      { disease: '대동맥맥류 및 박리', code: 'I71' }
    ]
  },
  {
    division: '9대질병',
    category: '폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '수두폐렴(J17.1*)', code: 'B01.2†' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2†' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0†' },
      { disease: '폐톡소포자충증(J17.3*)', code: 'B58.3†' }
    ]
  },
  {
    division: '9대질병',
    category: '급성췌장염',
    items: [
      { disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    division: '9대질병',
    category: '췌장질환',
    items: [
      { disease: '췌장의 기타 질환', code: 'K86' },
      { disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애', code: 'K87' },
      { disease: '거대세포바이러스 췌장염(K87.1*)', code: 'B25.2†' },
      { disease: '볼거리췌장염(K87.1*)', code: 'B26.3†' }
    ]
  },

  // --- 14대질병 ---
  {
    division: '14대질병',
    category: '소화계통의 양성신생물',
    items: [
      { disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    division: '14대질병',
    category: '중아호흡계통 및 흉곽의 양성신생물',
    items: [
      { disease: '종이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    division: '14대질병',
    category: '비뇨기관의 양성신생물',
    items: [
      { disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    division: '14대질병',
    category: '수막의 양성신생물',
    items: [
      { disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    division: '14대질병',
    category: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { disease: '뇌 및 중추신경계통의 기타 부위의 양성 신생물', code: 'D33' }
    ]
  },
  {
    division: '14대질병',
    category: '갑상선 및 내분비선의 양성신생물',
    items: [
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    division: '14대질병',
    category: '사구체질환',
    items: [
      { disease: '급성 신염증후군', code: 'N00' },
      { disease: '급속 진행성 신염증후군', code: 'N01' },
      { disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { disease: '만성 신염증후군', code: 'N03' },
      { disease: '신증후군', code: 'N04' },
      { disease: '상세불명의 신염증후군', code: 'N05' },
      { disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { disease: '달리 분류된 질환에서의 사구체장애(당뇨병에서의 사구체장애 N08.3 제외)', code: 'N08 (N08.3 제외)' }
    ]
  },
  {
    division: '14대질병',
    category: '신세뇨관-간질질환',
    items: [
      { disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { disease: '폐쇄성 및 역류성 요로병증', code: 'N13' },
      { disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { disease: '기타 세뇨관-간질질환', code: 'N15' },
      { disease: '달리 분류된 질환에서의 신세뇨관-간질장애', code: 'N16' }
    ]
  },
  {
    division: '14대질병',
    category: '신장 및 요관의 기타 장애',
    items: [
      { disease: '신세뇨관기능손상으로 인한 장애', code: 'N25' },
      { disease: '상세불명의 신장위축', code: 'N26' },
      { disease: '원인불명의 작은 신장', code: 'N27' },
      { disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    division: '14대질병',
    category: '비뇨계통의 기타질환',
    items: [
      { disease: '방광염', code: 'N30' },
      { disease: '달리 분류되지 않은 방광의 신경근육유기능장애', code: 'N31' },
      { disease: '방광의 기타 장애', code: 'N32' },
      { disease: '달리 분류된 질환에서의 방광 장애', code: 'N33' },
      { disease: '달리 분류된 질환에서의 요도 장애', code: 'N37' },
      { disease: '칸디다 방광염 및 요도염(N37.0*)', code: 'B37.40†' },
      { disease: '비뇨계통의 기타 장애(결핵성 방광염(A18.11†)제외, 스트레스요실금(N39.3)제외, 기타 명시된 요실금(N39.4)제외)', code: 'N39 (N33.0제외, N39.3제외, N39.4제외)' }
    ]
  },
  {
    division: '14대질병',
    category: '특정 장질환',
    items: [
      { disease: '장의 혈관장애', code: 'K55' },
      { disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    division: '14대질병',
    category: '담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    division: '14대질병',
    category: '담낭담도질환',
    items: [
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타질환', code: 'K82' },
      { disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    division: '14대질병',
    category: '안면신경장애',
    items: [
      { disease: '삼차신경의 장애', code: 'G50' },
      { disease: '안면신경장애', code: 'G51' },
      { disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },

  // --- 4대질병 ---
  {
    division: '4대질병',
    category: '여성생식기의 양성종양',
    items: [
      { disease: '자궁의 평활근종', code: 'D25' },
      { disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { disease: '난소의 양성 신생물', code: 'D27' },
      { disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    division: '4대질병',
    category: '남성생식기의 양성종양',
    items: [
      { disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    division: '4대질병',
    category: '관절염',
    items: [
      { disease: '감염성 관절병증 (결핵성 관절염(A18.01†) 제외)', code: 'M00~M03 (M01.1* 제외)' },
      { disease: '염증성 다발관절병증', code: 'M05~M14' },
      { disease: '류마티스폐질환(M05.1†)', code: 'J99.0*' },
      { disease: '관절증', code: 'M15~M19' },
      { disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    division: '4대질병',
    category: '생식기질환',
    items: [
      { disease: '남성 생식기관의 질환(남성 불임 제외)', code: 'N40~N45, N47~N51' },
      { disease: '편도선염 전립선염(N51.0*)', code: 'A59.06†' },
      { disease: '볼거리고환염(N51.1*)', code: 'B26.0†' },
      { disease: '여성골반장기내기관의 염증성 질환(자궁경부의결핵육아종(N74.0) 제외, 여성 결핵성 골반염증 질환(N74.1) 제외)', code: 'N70~N77 (N74.0제외, N74.1제외)' },
      { disease: '여성 생식기관의 비염증성 장애(습관적 유산자 제외, 여성 불임 제외, 인공 수정과 관련된 합병증 제외)', code: 'N80~N95' },
      { disease: '달리 분류되지 않은 비비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// 메리츠화재 82대질병 분류표 데이터
export const MERITZ_82_DISEASES_SECTIONS = [
  // --- 1. 심장질환 (1개 카테고리) ---
  {
    division: '심장질환',
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장 질환', code: 'I05 ~ I09' },
      { disease: '허혈심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' }
    ]
  },

  // --- 2. 뇌혈관질환 (1개 카테고리) ---
  {
    division: '뇌혈관질환',
    category: '뇌혈관질환',
    items: [
      { disease: '거미막하출혈', code: 'I60' },
      { disease: '뇌내출혈', code: 'I61' },
      { disease: '기타 비외상성 두개내출혈', code: 'I62' },
      { disease: '뇌경색증', code: 'I63' },
      { disease: '출혈 또는 경색증으로 명시되지 않는 뇌졸중', code: 'I64' },
      { disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' },
      { disease: '기타 뇌혈관 질환', code: 'I67' },
      { disease: '달리 분류된 질환에서의 뇌혈관 장애', code: 'I68' },
      { disease: '뇌혈관 질환의 후유증', code: 'I69' }
    ]
  },

  // --- 3. 특정27대질병 (27개 카테고리) ---
  {
    division: '특정27대질병',
    category: '간질환',
    items: [
      { disease: '바이러스간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' },
      { disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1†' },
      { disease: '톡소포자충간염(K77.0*)', code: 'B58.1†' }
    ]
  },
  {
    division: '특정27대질병',
    category: '고혈압 질환',
    items: [
      { disease: '본태성(원발성) 고혈압', code: 'I10' },
      { disease: '고혈압성 심장병', code: 'I11' },
      { disease: '고혈압성 신장병', code: 'I12' },
      { disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '이차성 고혈압', code: 'I15' },
      { disease: '고혈압성 망막병증 (단, 고혈압성 망막병증 이외의 배경망막병증 및 망막혈관변화는 제외)', code: 'H35.0' }
    ]
  },
  {
    division: '특정27대질병',
    category: '당뇨병 질환',
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
    division: '특정27대질병',
    category: '만성 하부 호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    division: '특정27대질병',
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    division: '특정27대질병',
    category: '결핵',
    items: [
      { disease: '결핵', code: 'A15 ~ A19' },
      { disease: '결핵의 후유증', code: 'B90' },
      { disease: '결핵성 복막염(A18.30†)', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)', code: 'K93.0*' },
      { disease: '결핵관절염(A18.01+)', code: 'M01.1*' },
      { disease: '척추의 결핵(A18.00+)', code: 'M49.0*' },
      { disease: '뼈의 결핵(A18.02+)', code: 'M90.0*' },
      { disease: '결핵성 방광염(A18.11+)', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염(A18.17+)', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환(A18.17+)', code: 'N74.1*' }
    ]
  },
  {
    division: '특정27대질병',
    category: '패혈증',
    items: [
      { disease: '연쇄알균패혈증', code: 'A40' },
      { disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    division: '특정27대질병',
    category: '중추신경계통의 염증성 질환',
    items: [
      { disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { disease: '달리 분류된 세균성 질환에서의 수막염(수막알균수막염 G01*)', code: 'G01 / A39.0†' },
      { disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염 (아데노바이러스수막염 G02.0*, 엔테로바이러스수막염 G02.0*, 헤르페스바이러스수막염 G02.0*, 수두수막염 G02.0*, 대상포진수막염 G02.0*, 수막염이 합병된 홍역 G02.0*, 볼거리수막염 G02.0*, 칸디다수막염 G02.1*, 콕시디오이데스진균수막염 G02.1*)', code: 'G02' },
      { disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염 (아데노바이러스뇌염 G05.1*, 엔테로바이러스뇌염 G05.1*, 헤르페스바이러스뇌염 G05.1*, 수두뇌염 G05.1*, 대상포진뇌염 G05.1*, 뇌염이 합병된 홍역 G05.1*, 볼거리뇌염 G05.1*)', code: 'G05' },
      { disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종(아메바성 뇌농양 G07*)', code: 'G07 / A06.6†' },
      { disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    division: '특정27대질병',
    category: '파킨슨병',
    items: [
      { disease: '파킨슨병', code: 'G20' },
      { disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    division: '특정27대질병',
    category: '다발경화증',
    items: [
      { disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    division: '특정27대질병',
    category: '뇌전증',
    items: [
      { disease: '뇌전증', code: 'G40' },
      { disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    division: '특정27대질병',
    category: '중증 근무력증',
    items: [
      { disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    division: '특정27대질병',
    category: '뇌성마비',
    items: [
      { disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    division: '특정27대질병',
    category: '마비',
    items: [
      { disease: '편마비', code: 'G81' },
      { disease: '하반신마비 및 사지마비', code: 'G82' },
      { disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    division: '특정27대질병',
    category: '자율신경계통의 장애',
    items: [
      { disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    division: '특정27대질병',
    category: '수두증',
    items: [
      { disease: '수두증', code: 'G91' }
    ]
  },
  {
    division: '특정27대질병',
    category: '녹내장',
    items: [
      { disease: '녹내장', code: 'H40' },
      { disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    division: '특정27대질병',
    category: '동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    division: '특정27대질병',
    category: '대동맥류',
    items: [
      { disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    division: '특정27대질병',
    category: '폐렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '수두폐렴(J17.1*)', code: 'B01.2†' },
      { disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2†' },
      { disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0†' },
      { disease: '폐톡소포자충증(J17.3*)', code: 'B58.3†' }
    ]
  },
  {
    division: '특정27대질병',
    category: '폐질환',
    items: [
      { disease: '폐기종', code: 'J43' },
      { disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { disease: '기관지확장증', code: 'J47' },
      { disease: '하기도의 화농성 및 괴사성 병태', code: 'J85 ~ J86' },
      { disease: '흉막의 기타 질환', code: 'J90 ~ J94' }
    ]
  },
  {
    division: '특정27대질병',
    category: '외부요인에 의한 폐질환',
    items: [
      { disease: '외부요인에 의한 폐질환', code: 'J60 ~ J70' }
    ]
  },
  {
    division: '특정27대질병',
    category: '폐부종',
    items: [
      { disease: '폐부종', code: 'J81' }
    ]
  },
  {
    division: '특정27대질병',
    category: '특정호흡기질환',
    items: [
      { disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    division: '특정27대질병',
    category: '급성 췌장염',
    items: [
      { disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    division: '특정27대질병',
    category: '췌장질환',
    items: [
      { disease: '췌장의 기타 질환', code: 'K86' },
      { disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애 (거대세포바이러스췌장염 K87.1*, 볼거리췌장염 K87.1*)', code: 'K87 / B25.2†, B26.3†' }
    ]
  },
  {
    division: '특정27대질병',
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17 ~ N19' }
    ]
  },

  // --- 4. 다빈도48대질병 (48개 카테고리) ---
  {
    division: '다빈도48대질병',
    category: '소화계통의 양성신생물(D13)',
    items: [
      { disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '중이호흡계통 및 흉곽의 양성신생물',
    items: [
      { disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '골 및 관절연골의 양성신생물',
    items: [
      { disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '조직의 양성신생물',
    items: [
      { disease: '중피조직의 양성 신생물', code: 'D19' },
      { disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '여성생식기의 양성종양',
    items: [
      { disease: '자궁의 평활근종', code: 'D25' },
      { disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { disease: '난소의 양성 신생물', code: 'D27' },
      { disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '남성생식기의 양성종양',
    items: [
      { disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '비뇨기관의 양성신생물',
    items: [
      { disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '눈 및 부속기관의 양성종양',
    items: [
      { disease: '눈 및 부속기의 양성 신생물', code: 'D31' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '수막의 양성신생물',
    items: [
      { disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '뇌 및 중추신경계통의 양성신생물',
    items: [
      { disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '갑상선 및 내분비선의 양성신생물',
    items: [
      { disease: '갑상선의 양성 신생물', code: 'D34' },
      { disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '갑상선질환',
    items: [
      { disease: '갑상선의 장애 (갑상선이상성 안구돌출 E05.0*)', code: 'E00 ~ E07 / H06.2*' },
      { disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '부갑상선 질환',
    items: [
      { disease: '부갑상선기능저하증', code: 'E20' },
      { disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '뇌하수체 질환',
    items: [
      { disease: '뇌하수체의 기능항진', code: 'E22' },
      { disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '버거씨병',
    items: [
      { disease: '폐색혈전혈관염[버거병]', code: 'I73.1' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '동맥 및 세동맥의 질환',
    items: [
      { disease: '동맥색전증 및 혈전증', code: 'I74' },
      { disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '림프절염',
    items: [
      { disease: '비특이성 림프절염', code: 'I88' },
      { disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '급성상기도감염',
    items: [
      { disease: '급성상기도감염', code: 'J00 ~ J06' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '축농증',
    items: [
      { disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '편도염',
    items: [
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '인후부위의 특정질환',
    items: [
      { disease: '편도주위 농양', code: 'J36' },
      { disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '후각특정질환',
    items: [
      { disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { disease: '코폴립', code: 'J33' },
      { disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '외이의 질환',
    items: [
      { disease: '외이의 질환', code: 'H60 ~ H62' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '중이 및 유돌의 질환',
    items: [
      { disease: '중이 및 유돌의 질환 (중이염이 합병된 홍역 H67.1*, 홍역후 중이염 H67.1*)', code: 'H65 ~ H75 / B05.3†' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '내이의 질환',
    items: [
      { disease: '내이의 질환', code: 'H80 ~ H83' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '황반변성',
    items: [
      { disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '눈 및 눈부속기관의 특정질환',
    items: [
      { disease: '공막, 각막, 홍채 및 섬모체의 장애 (홍채섬모체염 H22.0*, 홍채염 H22.0*, 전방포도막염 H22.0*, 각막염 H19.1*, 각막결막염 H19.1*, 각막상피염 H19.1*, 간질각막염 H19.1*, 각막내피염 H19.1*, 아데노바이러스에 의한 각막결막염 H19.2*, 유행성 각막결막염 H19.2*, 조선소눈병 H19.2*)', code: 'H15 ~ H22 / B00.50+, B00.51+, B30.0+' },
      { disease: '맥락막 및 망막의 장애 (단, 고혈압성 망막병증 H35.0, 황반변성 H35.3, 당뇨병 망막병증 H36.0 제외)', code: 'H30 ~ H36' },
      { disease: '시신경 및 시각경로의 장애', code: 'H46 ~ H48' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '사구체질환',
    items: [
      { disease: '급성 신염증후군', code: 'N00' },
      { disease: '급속 진행성 신염증후군', code: 'N01' },
      { disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { disease: '만성 신염증후군', code: 'N03' },
      { disease: '신증후군', code: 'N04' },
      { disease: '상세불명의 신염증후군', code: 'N05' },
      { disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { disease: '달리 분류된 질환에서의 사구체장애 (당뇨병에서의 사구체장애 N08.3 제외)', code: 'N08' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '신세뇨관-간질질환',
    items: [
      { disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { disease: '약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { disease: '달리 분류된 질환에서의 신세뇨관-간질장애', code: 'N16' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '방광의 결석',
    items: [
      { disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '신장 및 요관의 기타 장애',
    items: [
      { disease: '세뇨관기능손상으로 인한 장애', code: 'N25' },
      { disease: '상세불명의 신장위축', code: 'N26' },
      { disease: '원인불명의 작은 신장', code: 'N27' },
      { disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '비뇨계통의 기타 질환',
    items: [
      { disease: '방광염', code: 'N30' },
      { disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { disease: '방광의 기타 장애', code: 'N32' },
      { disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { disease: '달리 분류된 질환에서의 요도장애 (칸디다 방광염 및 요도염 N37.0*)', code: 'N37 / B37.40†' },
      { disease: '비뇨계통의 기타 장애 (결핵성 방광염 A18.11†, 스트레스요실금 N39.3, 기타 명시된 요실금 N39.4 제외)', code: 'N39' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '유방의 장애',
    items: [
      { disease: '양성 유방형성이상', code: 'N60' },
      { disease: '유방의 염증성 장애', code: 'N61' },
      { disease: '유방의 비대', code: 'N62' },
      { disease: '유방의 상세불명의 덩이', code: 'N63' },
      { disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '식도질환',
    items: [
      { disease: '식도염', code: 'K20' },
      { disease: '위-식도역류병', code: 'K21' },
      { disease: '식도의 기타질환', code: 'K22' },
      { disease: '달리 분류된 질환에서의 식도의 장애 (결핵성 식도염 A18.82†, K23.0 제외)', code: 'K23' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '위공장궤양',
    items: [
      { disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '위,십이지장 질환',
    items: [
      { disease: '위염 및 십이지장염', code: 'K29' },
      { disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '사타구니 탈장',
    items: [
      { disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '특정 부위의 탈장',
    items: [
      { disease: '대퇴탈장', code: 'K41' },
      { disease: '배꼽탈장', code: 'K42' },
      { disease: '복벽탈장', code: 'K43' },
      { disease: '횡격막탈장', code: 'K44' },
      { disease: '기타 복부탈장', code: 'K45' },
      { disease: '상세불명의 복부탈장', code: 'K46' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '비감염성 장염 및 결장염',
    items: [
      { disease: '크론병[국소성 장염]', code: 'K50' },
      { disease: '궤양성 대장염', code: 'K51' },
      { disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '특정 장질환',
    items: [
      { disease: '장의 혈관장애', code: 'K55' },
      { disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '복막의 질환',
    items: [
      { disease: '복막의 질환 (결핵성 복막염 A18.30†, K67.3 제외)', code: 'K65 ~ K67' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '담석증',
    items: [
      { disease: '담석증', code: 'K80' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '담낭담도 질환',
    items: [
      { disease: '담낭염', code: 'K81' },
      { disease: '담낭의 기타질환', code: 'K82' },
      { disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '척추변형',
    items: [
      { disease: '척주후만증 및 척주전만증', code: 'M40' },
      { disease: '척주측만증', code: 'M41' },
      { disease: '척추골연골증', code: 'M42' },
      { disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '척추병증',
    items: [
      { disease: '강직척추염', code: 'M45' },
      { disease: '기타 염증성 척추병증', code: 'M46' },
      { disease: '척추증', code: 'M47' },
      { disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '추간판장애(디스크질환)',
    items: [
      { disease: '경추간판장애', code: 'M50' },
      { disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '골다공증',
    items: [
      { disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '안면 신경장애',
    items: [
      { disease: '삼차신경의 장애', code: 'G50' },
      { disease: '안면신경장애', code: 'G51' },
      { disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    division: '다빈도48대질병',
    category: '단일신경병증',
    items: [
      { disease: '팔의 단일신경병증', code: 'G56' },
      { disease: '다리의 단일신경병증', code: 'G57' },
      { disease: '기타 단일신경병증', code: 'G58' },
      { disease: '달리 분류된 질환에서의 단일신경병증 (당뇨병성 단일신경병증 G59.0 제외)', code: 'G59' }
    ]
  },

  // --- 5. 관절염생식기질환 (2개 카테고리) ---
  {
    division: '관절염생식기질환',
    category: '관절염',
    items: [
      { disease: '감염성 관절병증 (결핵 관절염 A18.01†, M01.1 제외)', code: 'M00 ~ M03' },
      { disease: '염증성 다발관절병증 (당뇨병성 관절병증 M14.2 제외, 류마티스페질환 M05.1†)', code: 'M05 ~ M14 / J99.0*' },
      { disease: '관절증', code: 'M15 ~ M19' },
      { disease: '기타 관절장애', code: 'M20 ~ M25' }
    ]
  },
  {
    division: '관절염생식기질환',
    category: '생식기질환',
    items: [
      { disease: '남성 생식기관의 질환 (남성 불임 제외, 편모충성 전립선염 N51.0*, 볼거리고환염 N51.1*)', code: 'N40~N45, N47~N51 / A59.08†, B26.0†' },
      { disease: '여성 골반내 기관의 염증성 질환 (자궁경부 결핵감염 A18.17† N74.0, 여성 결핵성 골반염증질환 A18.17† N74.1 제외)', code: 'N70 ~ N77' },
      { disease: '여성 생식관의 비염증성 장애 (습관성 유산자, 여성 불임, 인공 수정 관련 합병증 제외)', code: 'N80 ~ N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },

  // --- 6. 치핵 (1개 카테고리) ---
  {
    division: '치핵',
    category: '치핵 및 항문주위 정맥의 혈전증',
    items: [
      { disease: '치핵 및 항문주위 정맥의 혈전증 (포함 - 치질 K64 / 제외 - 합병증: 출산 및 산후기 O87.2, 임신 O22.4)', code: 'K64' }
    ]
  },

  // --- 7. 백내장 (1개 카테고리) ---
  {
    division: '백내장',
    category: '백내장',
    items: [
      { disease: '노년성 백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타 장애', code: 'H27' }
    ]
  }
];

// 삼성화재 통합암(전이포함) 및 현대해상 남성통합암 요약/세부분류표 데이터
