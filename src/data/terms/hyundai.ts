// Hyundai Marine terms data
import {
  HyundaiSpecificCancerItem,
  HyundaiSimultaneousItem,
  HyundaiSimultaneousRow,
  Hyundai71Item,
  Hyundai71Section
} from "./types";

export const HYUNDAI_MALE_CANCER_SUMMARY = [
  { group: '그룹 1', title: '두경부암', diseases: '두경부암' },
  { group: '그룹 2', title: '위암 및 식도암', diseases: '위암 및 식도암' },
  { group: '그룹 3', title: '소장·대장·항문암 및 기타 소화기암', diseases: '소장·대장·항문암 및 기타 소화기암' },
  { group: '그룹 4', title: '간·담낭·담도 암 및 췌장암', diseases: '간·담낭·담도 암 및 췌장암' },
  { group: '그룹 5', title: '흉곽내기관·중피성암 및 연조직암', diseases: '흉곽내기관·중피성암 및 연조직암' },
  { group: '그룹 6', title: '골·피부 등 전신부위암', diseases: '골·피부 등 전신부위암' },
  { group: '그룹 7', title: '유방·비뇨기관·부신 및 내분비선암', diseases: '유방·비뇨기관·부신 및 내분비선암' },
  { group: '그룹 8', title: '남성생식기관암', diseases: '남성생식기관암' },
  { group: '그룹 9', title: '뇌암 및 중추신경계통암', diseases: '뇌암 및 중추신경계통암' },
  { group: '그룹 10', title: '혈액암', diseases: '혈액암' },
  { group: '그룹 11', title: '갑상선암', diseases: '갑상선암' }
];

export const HYUNDAI_MALE_CANCER_SECTIONS = [
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
      { num: '18', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    group: '그룹 2',
    title: '위암 및 식도암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '4', disease: '복강내림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.2' }
    ]
  },
  {
    group: '그룹 3',
    title: '소장·대장·항문암 및 기타 소화기암',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '7', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '8', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '9', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '10', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '11', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 4',
    title: '간·담낭·담도 암 및 췌장암',
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
    group: '그룹 5',
    title: '흉곽내기관·중피성암 및 연조직암',
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
      { num: '11', disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { num: '12', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '13', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '14', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '15', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { num: '16', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '17', disease: '흉곽내림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.1' }
    ]
  },
  {
    group: '그룹 6',
    title: '골·피부 등 전신부위암',
    items: [
      { num: '1', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '2', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '3', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '6', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '7', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '8', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '9', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '10', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' },
      { num: '11', disease: '사타구니 및 다리 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.4' },
      { num: '12', disease: '골반내 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.5' },
      { num: '13', disease: '여러 부위의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.8' },
      { num: '14', disease: '상세불명의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.9' }
    ]
  },
  {
    group: '그룹 7',
    title: '유방·비뇨기관·부신 및 내분비선암',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '3', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '4', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '5', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '6', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '8', disease: '기타 내분비선 및 관련 구조물의 악성 신생물', code: 'C75' },
      { num: '9', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '10', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '11', disease: '유방의 이차성 악성 신생물', code: 'C79.80' },
      { num: '12', disease: '부신의 이차성 악성 신생물', code: 'C79.7' },
      { num: '13', disease: '겨드랑 및 팔 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.3' }
    ]
  },
  {
    group: '그룹 8',
    title: '남성생식기관암',
    items: [
      { num: '1', disease: '음경의 악성 신생물', code: 'C60' },
      { num: '2', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '3', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '4', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '5', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    group: '그룹 9',
    title: '뇌암 및 중추신경계통암',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수, 뇌신경 및 중추신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '4', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '5', disease: '신경계통의 기타 및 상세불명 부위의 이차성 악성 신생물', code: 'C79.4' }
    ]
  },
  {
    group: '그룹 10',
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
      { num: '18', disease: '본태성 혈소판증가증', code: 'D47.3' },
      { num: '19', disease: '골수섬유증', code: 'D47.4' },
      { num: '20', disease: '만성 호산구성 백혈병', code: 'D47.5' }
    ]
  },
  {
    group: '그룹 11',
    title: '갑상선암',
    items: [
      { num: '1', disease: '갑상선의 악성 신생물', code: 'C73' },
      { num: '2', disease: '머리, 얼굴 및 목의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.0' }
    ]
  }
];

export const HYUNDAI_FEMALE_CANCER_SUMMARY = [
  { group: '그룹 1', title: '두경부암', diseases: '두경부암' },
  { group: '그룹 2', title: '위암 및 식도암', diseases: '위암 및 식도암' },
  { group: '그룹 3', title: '소장·대장·항문암 및 기타 소화기암', diseases: '소장·대장·항문암 및 기타 소화기암' },
  { group: '그룹 4', title: '간·담낭·담도 암 및 췌장암', diseases: '간·담낭·담도 암 및 췌장암' },
  { group: '그룹 5', title: '흉곽내기관·중피성암 및 연조직암', diseases: '흉곽내기관·중피성암 및 연조직암' },
  { group: '그룹 6', title: '골·피부 등 전신부위암', diseases: '골·피부 등 전신부위암' },
  { group: '그룹 7', title: '유방·비뇨기관·부신 및 내분비선암', diseases: '유방·비뇨기관·부신 및 내분비선암' },
  { group: '그룹 8', title: '여성생식기암', diseases: '여성생식기암' },
  { group: '그룹 9', title: '난소암', diseases: '난소암' },
  { group: '그룹 10', title: '자궁암', diseases: '자궁암' },
  { group: '그룹 11', title: '뇌암 및 중추신경계통암', diseases: '뇌암 및 중추신경계통암' },
  { group: '그룹 12', title: '혈액암', diseases: '혈액암' },
  { group: '그룹 13', title: '갑상선암', diseases: '갑상선암' }
];

export const HYUNDAI_FEMALE_CANCER_SECTIONS = [
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
      { num: '18', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    group: '그룹 2',
    title: '위암 및 식도암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '4', disease: '복강내림프절의 이차성 및 상세불명의 악성신생물', code: 'C77.2' }
    ]
  },
  {
    group: '그룹 3',
    title: '소장·대장·항문암 및 기타 소화기암',
    items: [
      { num: '1', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '2', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '3', disease: '직장구결장접합부의 악성 신생물', code: 'C19' },
      { num: '4', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '5', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '6', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' },
      { num: '7', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '8', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '9', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '10', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '11', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    group: '그룹 4',
    title: '간·담낭·담도 암 및 췌장암',
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
    group: '그룹 5',
    title: '흉곽내기관·중피성암 및 연조직암',
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
      { num: '11', disease: '기타 결합조직 및 연조직의 악성 신생물', code: 'C49' },
      { num: '12', disease: '폐의 이차성 악성 신생물', code: 'C78.0' },
      { num: '13', disease: '종격의 이차성 악성 신생물', code: 'C78.1' },
      { num: '14', disease: '흉막의 이차성 악성 신생물', code: 'C78.2' },
      { num: '15', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' },
      { num: '16', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '17', disease: '흉곽내림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.1' }
    ]
  },
  {
    group: '그룹 6',
    title: '골·피부 등 전신부위암',
    items: [
      { num: '1', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '2', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '3', disease: '피부의 악성 흑색종', code: 'C43' },
      { num: '4', disease: '기타 및 부위불명의 악성 신생물', code: 'C76' },
      { num: '5', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '6', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' },
      { num: '7', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.86' },
      { num: '8', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '9', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '10', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' },
      { num: '11', disease: '사타구니 및 다리 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.4' },
      { num: '12', disease: '골반내 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.5' },
      { num: '13', disease: '여러 부위의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.8' },
      { num: '14', disease: '상세불명의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.9' }
    ]
  },
  {
    group: '그룹 7',
    title: '유방·비뇨기관·부신 및 내분비선암',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '3', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '4', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '5', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '6', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '7', disease: '부신의 악성 신생물', code: 'C74' },
      { num: '8', disease: '기타 내분비선 및 관련 구조물의 악성 신생물', code: 'C75' },
      { num: '9', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '10', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '11', disease: '유방의 이차성 악성 신생물', code: 'C79.80' },
      { num: '12', disease: '부신의 이차성 악성 신생물', code: 'C79.7' },
      { num: '13', disease: '겨드랑 및 팔 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.3' }
    ]
  },
  {
    group: '그룹 8',
    title: '여성생식기암',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '4', disease: '포도상태반의 악성 신생물', code: 'C58' },
      { num: '5', disease: '여성생식기관의 이차성 악성 신생물', code: 'C79.6' }
    ]
  },
  {
    group: '그룹 9',
    title: '난소암',
    items: [
      { num: '1', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '2', disease: '난소의 이차성 악성 신생물', code: 'C79.60' }
    ]
  },
  {
    group: '그룹 10',
    title: '자궁암',
    items: [
      { num: '1', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '2', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '3', disease: '상세불명 부분의 자궁의 악성 신생물', code: 'C55' }
    ]
  },
  {
    group: '그룹 11',
    title: '뇌암 및 중추신경계통암',
    items: [
      { num: '1', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '2', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '3', disease: '척수, 뇌신경 및 중추신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '4', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '5', disease: '신경계통의 기타 및 상세불명 부위의 이차성 악성 신생물', code: 'C79.4' }
    ]
  },
  {
    group: '그룹 12',
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
      { num: '18', disease: '본태성 혈소판증가증', code: 'D47.3' },
      { num: '19', disease: '골수섬유증', code: 'D47.4' },
      { num: '20', disease: '만성 호산구성 백혈병', code: 'D47.5' }
    ]
  },
  {
    group: '그룹 13',
    title: '갑상선암',
    items: [
      { num: '1', disease: '갑상선의 악성 신생물', code: 'C73' },
      { num: '2', disease: '머리, 얼굴 및 목의 림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77.0' }
    ]
  }
];

export const HYUNDAI_HEART_SECTIONS = [
  {
    group: '그룹 1',
    title: '심혈관질환(특정 I, I49제외)',
    items: [
      { num: '1', disease: '협심증', code: 'I20' },
      { num: '2', disease: '기타 급성 허혈심장질환', code: 'I24' },
      { num: '3', disease: '만성 허혈심장병', code: 'I25' },
      { num: '4', disease: '발작성 빈맥', code: 'I47' },
      { num: '5', disease: '심방세동 및 조동', code: 'I48' },
      { num: '6', disease: '심부전', code: 'I50' },
      { num: '7', disease: '신생아심부전', code: 'P29.0' },
      { num: '8', disease: '신생아의 일과성 심근허혈', code: 'P29.4' },
      { num: '9', disease: '출생전후기에 기원한 심혈관장애', code: 'P29.8' }
    ]
  },
  {
    group: '그룹 2',
    title: '심혈관질환(특정 II)',
    items: [
      { num: '1', disease: '급성심근경색증', code: 'I21' },
      { num: '2', disease: '후속심근경색증', code: 'I22' },
      { num: '3', disease: '급성심근경색증 후 특정 현존 합병증', code: 'I23' },
      { num: '4', disease: '인공소생에 성공한 심장정지', code: 'I46.0' }
    ]
  },
  {
    group: '그룹 3',
    title: '심혈관질환(주요심장염증)',
    items: [
      { num: '1', disease: '급성 심장막염', code: 'I30' },
      { num: '2', disease: '심장막의 기타 질환', code: 'I31' },
      { num: '3', disease: '달리 분류된 질환에서의 심장막염', code: 'I32' },
      { num: '4', disease: '급성 및 아급성 심내막염', code: 'I33' },
      { num: '5', disease: '상세불명 판막의 심내막염', code: 'I38' },
      { num: '6', disease: '급성 심근염', code: 'I40' },
      { num: '7', disease: '달리 분류된 질환에서의 심근염', code: 'I41' }
    ]
  },
  {
    group: '그룹 4',
    title: '심혈관질환(I49)',
    items: [
      { num: '1', disease: '기타 심장부정맥', code: 'I49' },
      { num: '2', disease: '신생아심장리듬장애', code: 'P29.1' }
    ]
  },
  {
    group: '그룹 5',
    title: '심혈관질환(특정2대)',
    items: [
      { num: '1', disease: '방실차단, 2도', code: 'I44.1' },
      { num: '2', disease: '완전방실차단', code: 'I44.2' },
      { num: '3', disease: '기타 및 상세불명의 심방실차단', code: 'I44.3' },
      { num: '4', disease: '이중성유속차단', code: 'I45.2' },
      { num: '5', disease: '삼중성유속차단', code: 'I45.3' },
      { num: '6', disease: '기타 심장부정맥', code: 'I49' },
      { num: '7', disease: '신생아심장리듬장애', code: 'P29.1' }
    ]
  },
  {
    group: '그룹 6',
    title: '심혈관질환(대동맥판막협착증)',
    items: [
      { num: '1', disease: '류마티스성 대동맥협착', code: 'I06.0' },
      { num: '2', disease: '폐쇄부전이 있는 류마티스성 대동맥협착', code: 'I06.2' },
      { num: '3', disease: '대동맥판협착', code: 'I35.0' },
      { num: '4', disease: '폐쇄부전을 동반한 대동맥판협착', code: 'I35.2' }
    ]
  },
  {
    group: '그룹 7',
    title: '심혈관질환(심근병증)',
    items: [
      { num: '1', disease: '심근병증', code: 'I42' },
      { num: '2', disease: '달리 분류된 질환에서의 심근병증', code: 'I43' }
    ]
  }
];

export const HYUNDAI_HEART_SUMMARY = [
  { group: '그룹 1', title: '심혈관질환(특정 I, I49제외)', category: '그룹 1 (심혈관질환(특정 I, I49제외))', diseases: '협심증(I20), 기타 급성 허혈심장질환(I24), 만성 허혈심장병(I25), 발작성 빈맥(I47), 심방세동 및 조동(I48), 심부전(I50), 신생아특정심혈관질환(P29.0, P29.4, P29.8)' },
  { group: '그룹 2', title: '심혈관질환(특정 II)', category: '그룹 2 (심혈관질환(특정 II))', diseases: '급성심근경색증(I21), 후속심근경색증(I22), 급성심근경색증 후 특정 현존 합병증(I23), 인공소생에 성공한 심장정지(I46.0)' },
  { group: '그룹 3', title: '심혈관질환(주요심장염증)', category: '그룹 3 (심혈관질환(주요심장염증))', diseases: '급성 심장막염(I30), 심장막의 기타 질환(I31), 달리 분류된 질환에서의 심장막염(I32), 급성 및 아급성 심내막염(I33), 상세불명 판막의 심내막염(I38), 급성 심근염(I40), 달리 분류된 질환에서의 심근염(I41)' },
  { group: '그룹 4', title: '심혈관질환(I49)', category: '그룹 4 (심혈관질환(I49))', diseases: '기타 심장부정맥(I49), 신생아심장리듬장애(P29.1)' },
  { group: '그룹 5', title: '심혈관질환(특정2대)', category: '그룹 5 (심혈관질환(특정2대))', diseases: '특정 방실차단 및 전도장애(I44.1, I44.2, I44.3, I45.2, I45.3), 기타 심장부정맥(I49), 신생아심장리듬장애(P29.1)' },
  { group: '그룹 6', title: '심혈관질환(대동맥판막협착증)', category: '그룹 6 (심혈관질환(대동맥판막협착증))', diseases: '류마티스성 대동맥협착(I06.0), 폐쇄부전이 있는 류마티스성 대동맥협착(I06.2), 대동맥판협착(I35.0), 폐쇄부전을 동반한 대동맥판협착(I35.2)' },
  { group: '그룹 7', title: '심혈관질환(심근병증)', category: '그룹 7 (심혈관질환(심근병증))', diseases: '심근병증(I42), 달리 분류된 질환에서의 심근병증(I43)' }
];

export const HYUNDAI_BRAIN_I_SUMMARY = [
  { group: '뇌혈관질환(Ⅰ)', category: '뇌혈관질환(Ⅰ)', title: '뇌혈관질환(Ⅰ)', diseases: '출혈 또는 경색증으로 명시되지 않는 뇌졸중(I64), 기타 뇌혈관질환(I67), 달리 분류된 질환에서의 뇌혈관 장애(I68), 뇌혈관질환의 후유증(I69)' }
];

export const HYUNDAI_BRAIN_I_SECTIONS = [
  {
    group: '뇌혈관질환(Ⅰ)',
    title: '[별표89] 뇌혈관질환(Ⅰ) 분류표',
    category: '뇌혈관질환(Ⅰ)',
    items: [
      { num: '1', disease: '출혈 또는 경색증으로 명시되지 않는 뇌졸중', code: 'I64' },
      { num: '2', disease: '기타 뇌혈관질환', code: 'I67' },
      { num: '3', disease: '달리 분류된 질환에서의 뇌혈관 장애', code: 'I68' },
      { num: '4', disease: '뇌혈관질환의 후유증', code: 'I69' }
    ]
  }
];

export const HYUNDAI_BRAIN_II_SUMMARY = [
  { group: '그룹 1', category: '그룹 1 (뇌혈관질환(Ⅱ))', title: '뇌혈관질환(Ⅱ)', diseases: '거미막하출혈(I60), 뇌내출혈(I61), 기타 비외상성 두개내 출혈(I62), 뇌경색증(I63), 뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착(I65), 뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착(I66)' },
  { group: '그룹 2', category: '그룹 2 (신생아뇌출혈)', title: '신생아뇌출혈', diseases: '출산 손상으로 인한 두 개내 열상 및 출혈(P10), 태아 및 신생아의 두 개내 비외상성 출혈(P52)' }
];

export const HYUNDAI_BRAIN_II_SECTIONS = [
  {
    group: '그룹 1',
    title: '뇌혈관질환(Ⅱ)',
    category: '뇌혈관질환(Ⅱ)',
    items: [
      { num: '1', disease: '거미막하출혈', code: 'I60' },
      { num: '2', disease: '뇌내출혈', code: 'I61' },
      { num: '3', disease: '기타 비외상성 두개내 출혈', code: 'I62' },
      { num: '4', disease: '뇌경색증', code: 'I63' },
      { num: '5', disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { num: '6', disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' }
    ]
  },
  {
    group: '그룹 2',
    title: '신생아뇌출혈',
    category: '신생아뇌출혈',
    items: [
      { num: '1', disease: '출산 손상으로 인한 두 개내 열상 및 출혈', code: 'P10' },
      { num: '2', disease: '태아 및 신생아의 두 개내 비외상성 출혈', code: 'P52' }
    ]
  }
];
export const HYUNDAI_SURGERY_1_5_SECTIONS = [
  {
    category: '피부, 유방의 수술',
    items: [
      { num: '1', name: '피부이식수술(25cm²이상인 경우), 피판수술(피판분리수술, Z flap, W flap 제외)', type: '3종' },
      { num: '2', name: '피부이식수술(25cm²미만인 경우)', type: '1종' },
      { num: '3', name: '유방절단수술(切斷術, Mastectomy)', type: '-' },
      { num: '3-1', name: '유방절단수술(切斷術, Mastectomy)(제자리암, 경계성종양)', type: '3종' },
      { num: '3-2', name: '기타 유방절단수술(切斷術, Mastectomy)', type: '2종' },
      { num: '4', name: '기타 유방수술(농양의 절개 및 배액은 제외) [단, 치료목적의 유방절제술(Mammotomy)는 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '1종' }
    ]
  },
  {
    category: '근골(筋骨)의 수술',
    subTitle: '[발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    items: [
      { num: '5', name: '골(骨) 이식수술', type: '2종' },
      { num: '6', name: '두개골(頭蓋骨, cranium) 관혈수술 [비골(코뼈)·비중격(鼻中隔)·상악골(위턱뼈)·하악골(아래턱뼈)·악관절(頸關節)은 제외함]', type: '3종' },
      { num: '7', name: '비골(코뼈) 수술 [비중격 만곡증(鼻中隔 彎曲症)수술 제외]', type: '1종' },
      { num: '8', name: '상악골(위턱뼈), 하악골(아래턱뼈), 악관절(頸關節) 관혈수술', type: '2종' },
      { num: '9', name: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', type: '3종' },
      { num: '10', name: '쇄골(빗장뼈), 견갑골(어깨뼈), 늑골(갈비뼈), 흉골(胸骨) 관혈수술', type: '2종' },
      { num: '11', name: '사지(四肢) 절단수술(다지증에 대한 절단수술 포함)', type: '-' },
      { num: '11-1', name: '손가락, 발가락 절단수술[골, 관절의 이단(離斷)에 수반하는 것]', type: '1종' },
      { num: '11-2', name: '다지증에 대한 손가락, 발가락 절단수술', type: '1종' },
      { num: '11-3', name: '기타 사지(四肢)절단수술', type: '3종' },
      { num: '12', name: '절단(切斷)된 사지(四肢)재접합수술(再接合手術) [골, 관절의 이단(離斷)에 수반하는것]', type: '3종' },
      { num: '13', name: '사지골(四肢骨), 사지관절(四肢關節) 관혈수술', type: '-' },
      { num: '13-1', name: '손가락, 발가락의 골 및 관절 관혈수술', type: '1종' },
      { num: '13-2', name: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', type: '2종' },
      { num: '14', name: '근(筋), 건(腱), 인대(韌帶), 연골(軟骨) 관혈수술', type: '1종' }
    ]
  },
  {
    category: '호흡기계, 흉부(胸部)의 수술',
    items: [
      { num: '15', name: '만성부비동염(慢性副鼻腔炎) 근본수술(根本手術)', type: '1종' },
      { num: '16', name: '후두(喉頭) 관혈적 절제수술', type: '3종' },
      { num: '17', name: '편도, 아데노이드 절제수술', type: '1종' },
      { num: '18', name: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것]', type: '4종' },
      { num: '19', name: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', type: '5종' },
      { num: '20', name: '흉곽(胸廓) 형성수술(形成手術)', type: '3종' },
      { num: '21', name: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', type: '4종' }
    ]
  },
  {
    category: '순환기계, 비장(脾臟)의 수술',
    items: [
      { num: '22', name: '혈관관혈수술(하지정맥류 및 손가락·발가락은 제외)', type: '3종' },
      { num: '23', name: '하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락 혈관관혈수술', type: '1종' },
      { num: '24', name: '대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈), 관동맥(冠動脈) 관혈수술 [개흉술, 개복술을 수반하는 것]', type: '5종' },
      { num: '25', name: '심막(心膜) 관혈수술 [개흉술을 수반하는 것]', type: '4종' },
      { num: '26', name: '심장내(心臟內) 관혈수술 [개흉술을 수반하는 것]', type: '5종' },
      { num: '27', name: '심장 이식수술 [수용자에 한함]', type: '5종' },
      { num: '28', name: '체내용(體內用) 인공심박조율기(人工心搏調律機, Artificial pacemaker) 매입술(埋入術)', type: '3종' },
      { num: '29', name: '비장(脾臟) 절제수술', type: '3종' }
    ]
  },
  {
    category: '소화기계의 수술',
    items: [
      { num: '30', name: '이하선 절제수술', type: '3종' },
      { num: '31-1', name: '악하선, 설하선 절제수술', type: '2종' },
      { num: '31-2', name: '기타 타액선 절제수술(타석제거는 제외)', type: '1종' },
      { num: '32', name: '식도(食道) 이단술(離斷術) [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]', type: '4종' },
      { num: '33', name: '위 절제수술(胃 切除手術, Gastrectomy) [개복술을 수반하는 것]', type: '4종' },
      { num: '34', name: '기타의 위·식도 관혈수술 [개흉술, 개복술을 수반하는 것]', type: '3종' },
      { num: '35', name: '간장(肝臟), 췌장(膵臟) 관혈수술 [개복술을 수반하는 것]', type: '4종' },
      { num: '36', name: '담낭(膽囊), 담도(膽道) 관혈수술 [개복술을 수반하는 것]', type: '3종' },
      { num: '37', name: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', type: '5종' },
      { num: '38', name: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외함)', type: '5종' },
      { num: '39', name: '탈장(脫腸) 근본수술', type: '1종' },
      { num: '40', name: '전신성 복막염(全身性 腹膜炎, Generalized peritonitis) 수술', type: '2종' },
      { num: '41', name: '충수(蟲垂)절제술(충수염관련 충수주위 농양수술, 국한성 복막염 수술 포함), 맹장봉축술(盲腸縫縮術)', type: '2종' },
      { num: '42', name: '직장탈(直腸脫) 근본수술', type: '1종' },
      { num: '43', name: '소장(小腸), 결장(結腸), 직장(直腸), 장간막(腸間膜) 관혈수술 [개복술을 수반하는 것] (단, 직장탈근본수술은 제외)', type: '4종' },
      { num: '44', name: '치루(痔 fistula), 탈항(脫肛), 치핵(痔核) 근본수술 [근치를 목적으로 하지 않은 수술은 제외함]', type: '1종' }
    ]
  },
  {
    category: '비뇨기계·생식기계의 수술',
    subTitle: '(인공임신중절수술은 제외함)',
    items: [
      { num: '45', name: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管) 관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류·요실금 교정수술은 제외]', type: '4종' },
      { num: '46', name: '요도 관혈수술 [경요도적 조작은 제외함]', type: '2종' },
      { num: '47', name: '방광류·요실금 교정수술', type: '1종' },
      { num: '48', name: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', type: '5종' },
      { num: '49', name: '음경(陰莖) 절단수술 (포경수술 및 음경이물제거수술은 제외)', type: '3종' },
      { num: '50', name: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊) 관혈수술, 전립선(前立腺) 관혈수술', type: '2종' },
      { num: '51', name: '음낭 관혈수술(선천성 음낭수종 수술 제외)', type: '1종' },
      { num: '52', name: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', type: '2종' },
      { num: '53', name: '경질적 자궁, 난소, 난관 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '1종' },
      { num: '54', name: '제왕절개만출술(帝王切開産出術)', type: '1종' },
      { num: '55', name: '질탈(膣脫) 근본수술', type: '1종' }
    ]
  },
  {
    category: '내분비계의 수술',
    items: [
      { num: '56', name: '뇌하수체종양(腦下垂體腫瘍) 절제수술', type: '5종' },
      { num: '57', name: '갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술', type: '3종' },
      { num: '58', name: '부신(副腎) 절제수술', type: '4종' }
    ]
  },
  {
    category: '신경계의 수술',
    items: [
      { num: '59', name: '두개내(頭蓋內) 관혈수술 [개두술(開頭術, Craniotomy)을 수반하는 것]', type: '5종' },
      { num: '60', name: '신경(神經) 관혈수술', type: '2종' },
      { num: '61', name: '관혈적 척수종양(脊髓腫瘍) 절제수술', type: '4종' },
      { num: '62', name: '척수경막내외(脊髓硬膜內外) 관혈수술', type: '3종' }
    ]
  },
  {
    category: '시각기의 수술',
    subTitle: '[약물주입술은 제외]',
    items: [
      { num: '63', name: '안검하수증(눈꺼풀처짐증) 수술(안검내반증 포함)', type: '1종' },
      { num: '64', name: '누소관(淚小管) 형성수술(누관튜브삽입술 포함)', type: '1종' },
      { num: '65', name: '누낭비강(淚囊鼻腔) 관혈수술', type: '2종' },
      { num: '66', name: '결막낭(結膜囊) 형성수술', type: '2종' },
      { num: '67', name: '각막, 결막, 공막 봉합수술', type: '1종' },
      { num: '68', name: '각막, 공막 이식수술', type: '2종' },
      { num: '69', name: '전방(前房), 홍채(虹彩), 유리체(琉璃體) 관혈수술', type: '2종' },
      { num: '70', name: '녹내장(綠內障) 관혈수술', type: '3종' },
      { num: '71', name: '백내장(白內障), 수정체(水晶體) 관혈수술', type: '1종' },
      { num: '72', name: '망막박리(網膜剝離) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '2종' },
      { num: '73', name: '레이저(Laser)에 의한 안구(眼球) 수술 [시력회복 및 시력개선 목적의 수술은 제외] [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '1종' },
      { num: '74', name: '냉동응고(冷凍凝固)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '2종' },
      { num: '75', name: '안구적출술, 조직충전술(組織充電術)', type: '3종' },
      { num: '76', name: '안와내종양절제수술', type: '3종' },
      { num: '77', name: '관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)', type: '1종' },
      { num: '78', name: '안근(眼筋) 관혈수술', type: '1종' }
    ]
  },
  {
    category: '청각기(聽覺器)의 수술',
    items: [
      { num: '79', name: '관혈적 고막(鼓膜) 성형술 [고막 패치술은 제외]', type: '2종' },
      { num: '80', name: '유양동 절제술(乳樣洞切除術, mastoidectomy)', type: '2종' },
      { num: '81', name: '중이(中耳) 관혈수술 [중이내 튜브유치술 제외]', type: '2종' },
      { num: '82', name: '중이내(中耳內) 튜브유치술 [고막 패치술은 제외, 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '1종' },
      { num: '83', name: '내이(內耳) 관혈수술', type: '3종' }
    ]
  },
  {
    category: '상기 이외의 수술',
    subTitle: '[검사, 처치, 약물주입요법은 포함하지 않음]',
    items: [
      { num: '84', name: '상기 이외의 개두술(開頭術)', type: '3종' },
      { num: '85', name: '상기 이외의 개흉술(開胸術)', type: '3종' },
      { num: '86', name: '상기 이외의 개복술(開腹術)', type: '2종' },
      { num: '87', name: '체외충격파쇄석술(體外衝擊波碎石術, E.S.W.L) [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] * 체외충격파치료술(E.S.W.T)은 제외', type: '2종' },
      { num: '88', name: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter)·고주파 전극 등에 의한 경피(피부를 통한)적 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '-' },
      { num: '88-1', name: '뇌, 심장', type: '3종' },
      { num: '88-2', name: '후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외)', type: '2종' },
      { num: '88-3', name: '비뇨, 생식기 및 손가락, 발가락', type: '1종' },
      { num: '89', name: '상기 이외의 선천성 질환으로 인한 수술(개두술, 개흉술, 개복술 제외)', type: '1종' }
    ],
    footnotes: [
      "주) 상기 1~87항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터(Catheter) 등에 의한 경피적(經皮的, Percutaneous) 수술은 88항을 적용합니다. 다만, 복강경·흉강경에 의한 수술은 해당부위(1~87항)의 수술로 적용합니다."
    ]
  },
  {
    category: 'II. 악성신생물 치료 목적의 수술',
    items: [
      { num: '1', name: '관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical curative surgery)(단, 기타피부암(C44), 갑상선암(C73), 유방암(C50), 자궁경부의 암(C53), 자궁체부의 암(C54), 전립선암(C61), 방광암(C67) 제외) [내시경 수술, 카테터·고주파 전극 등의 경피(피부를 통한)적 수술 등은 제외함]', type: '5종' },
      { num: '1-1', name: '기타피부암(C44)', type: '3종' },
      { num: '1-2', name: '갑상선암(C73), 유방암(C50), 자궁경부의 암(C53), 자궁체부의 암(C54), 전립선암(C61), 방광암(C67)', type: '4종' },
      { num: '2', name: '내시경 수술, 카테터·고주파 전극 등에 의한 악성신생물 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '3종' },
      { num: '3', name: '상기 이외의 기타 악성신생물수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', type: '3종' }
    ],
    footnotes: [
      "주) 1. 제자리암·경계성종양에 대한 수술은 'I. 일반 질병 및 상해 치료 목적의 수술' 항목의 적용을 받습니다.",
      "2. 카테터(Catheter)를 이용한 흡인·천자·약물주입요법은 포함하지 않습니다.",
      "3. 비고형암에 대한 비관혈적 근치수술은 관혈적 악성신생물 근치수술에 준하여 5종 수술로 인정합니다.",
      "  - 비고형암에 대한 비관혈적 근치술 중 조혈모세포 이식술은 일련의 과정(추출, 필터링, 배양, 제거, 주입)을 모두 포함하여 1회의 수술로 인정합니다.",
      "  - 다만 약물 등을 투여하기 위한 시술(예. 중심정맥관삽관술)만 시행할 경우에는 5종으로 인정하지 않습니다."
    ]
  },
  {
    category: 'III. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표',
    items: [
      { num: '1', name: '악성신생물 근치 방사선 조사 [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며, 악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선 치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]', type: '3종' },
      { num: '2', name: '두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선 치료', type: '3종' }
    ],
    footnotes: [
      "주) 수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다."
    ]
  }
];


export const HYUNDAI_SPECIFIC_CANCER_ITEMS: { num: string; name: string; code: string }[] = [
  { num: '1', name: '식도의 악성신생물', code: 'C15' },
  { num: '2', name: '간 및 간내 담관의 악성신생물', code: 'C22' },
  { num: '3', name: '담낭의 악성신생물', code: 'C23' },
  { num: '4', name: '담도의 기타 및 상세불명 부분의 악성신생물', code: 'C24' },
  { num: '5', name: '췌장의 악성신생물', code: 'C25' },
  { num: '6', name: '기관의 악성신생물', code: 'C33' },
  { num: '7', name: '기관지 및 폐의 악성신생물', code: 'C34' },
  { num: '8', name: '사지의 골 및 관절연골의 악성신생물', code: 'C40' },
  { num: '9', name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물', code: 'C41' },
  { num: '10', name: '수막의 악성신생물', code: 'C70' },
  { num: '11', name: '뇌의 악성신생물', code: 'C71' },
  { num: '12', name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물', code: 'C72' },
  { num: '13', name: '호지킨림프종', code: 'C81' },
  { num: '14', name: '소포성 림프종', code: 'C82' },
  { num: '15', name: '비소포성 림프종', code: 'C83' },
  { num: '16', name: '성숙 T/NK-세포림프종', code: 'C84' },
  { num: '17', name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
  { num: '18', name: 'T/NK-세포림프종의 기타 명시된 형태', code: 'C86' },
  { num: '19', name: '악성 면역증식성 질환', code: 'C88' },
  { num: '20', name: '다발성 골수종 및 악성 형질세포 신생물', code: 'C90' },
  { num: '21', name: '림프성 백혈병', code: 'C91' },
  { num: '22', name: '골수성 백혈병', code: 'C92' },
  { num: '23', name: '단핵구성 백혈병', code: 'C93' },
  { num: '24', name: '명시된 세포형의 기타 백혈병', code: 'C94' },
  { num: '25', name: '상세불명 세포형의 백혈병', code: 'C95' },
  { num: '26', name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물', code: 'C96' },
  { num: '27', name: '만성 골수증식질환', code: 'D47.1' },
  { num: '28', name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
];


export const HYUNDAI_SPECIFIC_CANCER_SECTIONS = [
  {
    title: '현대해상 특정암 분류표',
    items: HYUNDAI_SPECIFIC_CANCER_ITEMS.map(item => ({
      num: item.num,
      disease: item.name,
      code: item.code
    }))
  }
];


export const HYUNDAI_3_DISEASES_SECTIONS: Hyundai71Section[] = [
  {
    category: '관 절 염',
    items: [
      { disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { disease: '염증성 다발관절병증 (당뇨병성 관절병증 제외)', code: 'M05 ~ M14 (M14.2)' },
      { disease: '관절증', code: 'M15 ~ M19' },
      { disease: '기타 관절 장애', code: 'M20 ~ M25' }
    ]
  },
  {
    category: '백 내 장',
    items: [
      { disease: '노년 백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    category: '생식기질환',
    items: [
      { disease: '남성생식기관의 질환 (남성불임 제외)', code: 'N40~N45, N49~N51' },
      { disease: '여성골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { disease: '여성생식기관의 비염증성 장애 (습관적 유산자 제외) (여성불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80 ~ N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

export const HYUNDAI_7_DISEASES_SECTIONS = [
  {
    category: '심장질환',
    items: [
      { disease: '급성류마티스열', code: 'I00 ~ I02' },
      { disease: '만성류마티스성 심장질환', code: 'I05 ~ I09' },
      { disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { disease: '폐성심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    category: '뇌혈관질환',
    items: [
      { disease: '대뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    category: '간 질 환',
    items: [
      { disease: '바이러스성 간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    category: '고 혈 압',
    items: [
      { disease: '고혈압성 질환', code: 'I10 ~ I15' }
    ]
  },
  {
    category: '당 뇨 병',
    items: [
      { disease: '당뇨병', code: 'E10 ~ E14' }
    ]
  },
  {
    category: '만성 하기도 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 정액농성 만성기관지염', code: 'J41' },
      { disease: '상세불명의 만성기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명의 소화성 궤양', code: 'K27' }
    ]
  }
];

export const HYUNDAI_14_DISEASES_SECTIONS = [
  {
    category: '당뇨병',
    items: [
      { disease: '당뇨병', code: 'E10 ~ E14' }
    ]
  },
  {
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    category: '고혈압',
    items: [
      { disease: '고혈압 질환', code: 'I10 ~ I15' }
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
      { disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    category: '위,십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명부위의 소화성궤양', code: 'K27' }
    ]
  },
  {
    category: '갑상선 질환',
    items: [
      { disease: '갑상선의 장애', code: 'E00 ~ E07' },
      { disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    category: '동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '만성하기도 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 점액농성 만성 기관지염', code: 'J41' },
      { disease: '상세불명의 만성 기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속 상태', code: 'J46' }
    ]
  },
  {
    category: '폐렴',
    items: [
      { disease: '달리 분류되지 않는 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않는 세균 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않는 기타 감염성 병원체의 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
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
      { disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    category: '신부전',
    items: [
      { disease: '신부전', code: 'N17 ~ N19' }
    ]
  }
];

export const HYUNDAI_16_DISEASES_SECTIONS = [
  {
    category: '고혈압',
    items: [
      { disease: '고혈압성 질환 (본태성 고혈압, 고혈압성 심장병/신장병, 이차성 고혈압)', code: 'I10 ~ I13, I15' },
      { disease: '고혈압성 합병증 (고혈압성 뇌병증, 고혈압성 망막병증)', code: 'I67.4, H35.02' }
    ]
  },
  {
    category: '당뇨병',
    items: [
      { disease: '당뇨병 질환', code: 'E10 ~ E14' },
      { disease: '당뇨병성 합병증 (단일/다발신경병증, 백내장, 망막병증, 관절병증, 사구체장애)', code: 'G59.0, G63.2, H28.0, H36.0, M14.2, N08.3' }
    ]
  },
  {
    category: '심장질환',
    items: [
      { disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { disease: '허혈심장질환', code: 'I20 ~ I25' },
      { disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '기타 형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    category: '뇌혈관질환',
    items: [
      { disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    category: '간 질 환',
    items: [
      { disease: '바이러스 간염', code: 'B15 ~ B19' },
      { disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    category: '만성하부호흡기 질환',
    items: [
      { disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '단순성 및 정액화농성 만성기관지염', code: 'J41' },
      { disease: '상세불명의 만성기관지염', code: 'J42' },
      { disease: '천식', code: 'J45' },
      { disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    category: '위궤양 및 십이지장궤양',
    items: [
      { disease: '위궤양', code: 'K25' },
      { disease: '십이지장궤양', code: 'K26' },
      { disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    category: '갑상선질환',
    items: [
      { disease: '갑상선의 장애 (처치후, 방사선조사후, 수술후 갑상선기능저하증 포함)', code: 'E00 ~ E07, E89.0' }
    ]
  },
  {
    category: '동맥경화증',
    items: [
      { disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    category: '폐 렴',
    items: [
      { disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '인플루엔자에 의한 폐렴', code: 'J14' },
      { disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '재향군인병', code: 'A48.1' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2' }
    ]
  },
  {
    category: '녹 내 장',
    items: [
      { disease: '녹내장', code: 'H40' },
      { disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    category: '결 핵',
    items: [
      { disease: '결핵', code: 'A15 ~ A19' },
      { disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    category: '신 부 전',
    items: [
      { disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    category: '관 절 염',
    items: [
      { disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { disease: '염증성 다발관절병증 (당뇨병성 관절병증 제외)', code: 'M05 ~ M14 (M14.2)' },
      { disease: '관절증', code: 'M15 ~ M19' },
      { disease: '기타 관절 장애', code: 'M20 ~ M25' }
    ]
  },
  {
    category: '백 내 장',
    items: [
      { disease: '노년 백내장', code: 'H25' },
      { disease: '기타 백내장', code: 'H26' },
      { disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    category: '생식기질환',
    items: [
      { disease: '남성생식기의 질환 (남성불임 제외)', code: 'N40 ~ N45, N47 ~ N51' },
      { disease: '여성골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { disease: '여성생식기관의 비염증성 장애 (습관적 유산자 제외) (여성불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80 ~ N95' },
      { disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

export const HYUNDAI_7_DISEASES_SUMMARY = HYUNDAI_7_DISEASES_SECTIONS.map(s => ({
  category: s.category.replace(/\s+/g, ''),
  diseases: s.items.map(i => i.disease)
}));

export const HYUNDAI_14_DISEASES_SUMMARY = HYUNDAI_14_DISEASES_SECTIONS.map(s => ({
  category: s.category.replace(/\s+/g, ''),
  diseases: s.items.map(i => i.disease)
}));

export const HYUNDAI_16_DISEASES_SUMMARY = HYUNDAI_16_DISEASES_SECTIONS.map(s => ({
  category: s.category.replace(/\s+/g, ''),
  diseases: s.items.map(i => i.disease)
}));

// interface moved to types.ts

// interface moved to types.ts

export const HYUNDAI_SIMULTANEOUS_22_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: '뼈 및 관절의 결핵',
    targetCode: 'A18.0†',
    simultaneousItems: [
      { disease: '결핵 관절염', code: 'M01.1*' },
      { disease: '척추의 결핵', code: 'M49.0*' },
      { disease: '뼈의 결핵', code: 'M90.0*' }
    ]
  },
  {
    targetDisease: '비뇨생식계통의 결핵',
    targetCode: 'A18.1†',
    simultaneousItems: [
      { disease: '결핵성 방광염', code: 'N33.0*' },
      { disease: '자궁경부의 결핵감염', code: 'N74.0*' },
      { disease: '여성 결핵성 골반염증질환', code: 'N74.1*' }
    ]
  },
  {
    targetDisease: '장,복막 및 장간막 림프절의 결핵',
    targetCode: 'A18.3†',
    simultaneousItems: [
      { disease: '결핵성 복막염', code: 'K67.3*' },
      { disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0*' }
    ]
  },
  {
    targetDisease: '갑상선독증[갑상선기능항진증]',
    targetCode: 'E05-†',
    simultaneousItems: [
      { disease: '갑상선이상성 안구돌출', code: 'H06.2*' }
    ]
  },
  {
    targetDisease: '달리 분류된 질환에서의 상세불명 판막의 심내막염',
    targetCode: 'I39.8*',
    simultaneousItems: [
      { disease: '칸디다심내막염', code: 'B37.6†' }
    ]
  },
  {
    targetDisease: '달리 분류된 바이러스질환에서의 폐렴',
    targetCode: 'J17.1*',
    simultaneousItems: [
      { disease: '거대세포바이러스폐렴', code: 'B25.0†' },
      { disease: '폐렴이 합병된 홍역', code: 'B05.2†' },
      { disease: '수두폐렴', code: 'B01.2†' }
    ]
  },
  {
    targetDisease: '기생충질환에서의 폐렴',
    targetCode: 'J17.3*',
    simultaneousItems: [
      { disease: '폐톡소포자충증', code: 'B58.3†' }
    ]
  },
  {
    targetDisease: '달리 분류된 감염성 및 기생충성 질환에서의 간장애',
    targetCode: 'K77.0*',
    simultaneousItems: [
      { disease: '거대세포바이러스간염', code: 'B25.1†' },
      { disease: '톡소포자충간염', code: 'B58.1†' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 심장막염',
    targetCode: 'I32.0*주1)',
    simultaneousItems: [
      { disease: '수막구균성 심낭염', code: 'A39.5†' }
    ]
  },
  {
    targetDisease: '달리 분류된 질환에서의 상세불명 판막의 심내막염',
    targetCode: 'I39.8*주1)',
    simultaneousItems: [
      { disease: '수막구균성 심내막염', code: 'A39.5†' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 심근염',
    targetCode: 'I41.0*주1)',
    simultaneousItems: [
      { disease: '수막구균성 심근염', code: 'A39.5†' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 기타 심장장애',
    targetCode: 'I52.0*주1)',
    simultaneousItems: [
      { disease: '수막구균성 심장장애 NOS', code: 'A39.5†' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 수막염',
    targetCode: 'G01',
    simultaneousItems: [
      { disease: '수막구균수막염', code: 'A39.0' },
      { disease: '결핵성 수막염', code: 'A17.0†' }
    ]
  },
  {
    targetDisease: '달리 분류된 바이러스질환에서의 수막염',
    targetCode: 'G02.0',
    simultaneousItems: [
      { disease: '아데노바이러스수막염', code: 'A87.1' },
      { disease: '엔테로바이러스수막염', code: 'A87.0' },
      { disease: '헤르페스바이러스수막염', code: 'B00.3' },
      { disease: '수막염이 합병된 홍역', code: 'B05.1' },
      { disease: '볼거리수막염', code: 'B26.1' },
      { disease: '수두수막염', code: 'B01.0' },
      { disease: '대상포진수막염', code: 'B02.1' }
    ]
  },
  {
    targetDisease: '진균증에서의 수막염',
    targetCode: 'G02.1',
    simultaneousItems: [
      { disease: '칸디다수막염', code: 'B37.5' },
      { disease: '콕시디오이데스진균수막염', code: 'B38.4' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 뇌염, 척수염 및 뇌척수염',
    targetCode: 'G05.0',
    simultaneousItems: [
      { disease: '결핵성 수막뇌염', code: 'A17.81†' }
    ]
  },
  {
    targetDisease: '달리 분류된 바이러스질환에서의 뇌염, 척수염 및 뇌척수염',
    targetCode: 'G05.1',
    simultaneousItems: [
      { disease: '아데노바이러스뇌염', code: 'A85.1' },
      { disease: '엔테로바이러스뇌염', code: 'A85.0' },
      { disease: '헤르페스바이러스뇌염', code: 'B00.4' },
      { disease: '뇌염이 합병된 홍역', code: 'B05.0' },
      { disease: '볼거리뇌염', code: 'B26.2' },
      { disease: '수두뇌염', code: 'B01.1' },
      { disease: '대상포진뇌염', code: 'B02.0' }
    ]
  },
  {
    targetDisease: '뇌염 / 수막염 / 수막뇌염',
    targetCode: 'G05.1주2) / G02.0주2) / G05.1주2)',
    simultaneousItems: [
      { disease: '신경학적 합병증을 동반한 풍진', code: 'B06.0†' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 수막염 / 리스테리아 수막염 및 수막뇌염',
    targetCode: 'G01주3) / G05.0주3)',
    simultaneousItems: [
      { disease: '리스테리아 수막염 및 수막뇌염', code: 'A32.1†' }
    ]
  },
  {
    targetDisease: '두개내 및 척추내 농양 및 육아종 / 달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종',
    targetCode: 'G07',
    simultaneousItems: [
      { disease: '아메바성 뇌농양', code: 'A06.6' },
      { disease: '수막결핵종', code: 'A17.1†' },
      { disease: '뇌 및 척수의 결핵종', code: 'A17.80†' },
      { disease: '기타 신경계통의 결핵', code: 'A17.88†' }
    ]
  },
  {
    targetDisease: '달리 분류된 질환에서의 췌장장애',
    targetCode: 'K87.1',
    simultaneousItems: [
      { disease: '거대세포바이러스췌장염', code: 'B25.2' },
      { disease: '볼거리췌장염', code: 'B26.3' }
    ]
  }
];

export const HYUNDAI_SIMULTANEOUS_13_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: '류마티스 폐질환',
    targetCode: 'M05.1†',
    simultaneousItems: [
      { disease: '류마티스 폐질환', code: 'J99.0*' }
    ]
  },
  {
    targetDisease: '달리 분류된 질환에서의 전립선장애',
    targetCode: 'N51.0*',
    simultaneousItems: [
      { disease: '편모충성 전립선염', code: 'A59.01†' },
      { disease: '전립선의 결핵', code: 'A18.13†' },
      { disease: '기타 남성 생식기관의 결핵', code: 'A18.14†' }
    ]
  },
  {
    targetDisease: '달리 분류된 질환에서의 고환 및 부고환의 장애',
    targetCode: 'N51.1*',
    simultaneousItems: [
      { disease: '볼거리고환염', code: 'B26.0†' }
    ]
  },
  {
    targetDisease: '자궁경부의 결핵감염',
    targetCode: 'N74.0',
    simultaneousItems: [
      { disease: '자궁경부의 결핵', code: 'A18.15†' }
    ]
  },
  {
    targetDisease: '결핵성 자궁내막염',
    targetCode: 'N74.1',
    simultaneousItems: [
      { disease: '결핵성 여성골반염증질환, 결핵성 자궁내막염, 결핵성 난소염 및 난관염', code: 'A18.16†' }
    ]
  }
];

export const HYUNDAI_SIMULTANEOUS_35_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: '경추간판장애 및 기타 추간판장애',
    targetCode: 'M50~M51†',
    simultaneousItems: [
      { disease: '추간판 장애에서의 신경근 및 신경총 압박', code: 'G55.1' }
    ]
  },
  {
    targetDisease: '결핵성 중이염',
    targetCode: 'H67.0',
    simultaneousItems: [
      { disease: '귀의 결핵', code: 'A18.6' }
    ]
  },
  {
    targetDisease: '달리 분류된 바이러스질환에서의 중이염',
    targetCode: 'H67.1',
    simultaneousItems: [
      { disease: '중이염이 합병된 홍역(H67.1*)', code: 'B05.3†' },
      { disease: '홍역후 중이염(H67.1*)', code: 'B05.3*' }
    ]
  },
  {
    targetDisease: '맥락망막염 / 상공막염 / 간질각막염 / 홍채성모체염',
    targetCode: 'H32.0주1) / H19.0주1) / H19.2주1) / H22.0주1)',
    simultaneousItems: [
      { disease: '눈의 결핵', code: 'A18.5' }
    ]
  },
  {
    targetDisease: '달리 분류된 기타 감염성 및 기생충 질환에서의 각막염 및 각막결막염',
    targetCode: 'H22.0',
    simultaneousItems: [
      { disease: '홍채성모체염', code: 'B00.50†' },
      { disease: '홍채염', code: 'B00.50†' },
      { disease: '전방포도막염', code: 'B00.50†' }
    ]
  },
  {
    targetDisease: '헤르페스바이러스 각막염 및 각막결막염 / 달리 분류된 기타 감염성 및 기생충 질환에서의 각막염 및 각막결막염',
    targetCode: 'H19.1 / H19.2',
    simultaneousItems: [
      { disease: '각막염', code: 'B00.51†' },
      { disease: '각막결막염', code: 'B00.51†' },
      { disease: '각막상피염', code: 'B00.51†' },
      { disease: '간질각막염', code: 'B00.51†' },
      { disease: '각막내피염', code: 'B00.51†' },
      { disease: '아데노바이러스에 의한 각막결막염', code: 'B30.0†' },
      { disease: '유행성 각막결막염', code: 'B30.0†' },
      { disease: '조선소눈병', code: 'B30.0†' }
    ]
  },
  {
    targetDisease: '전신결합조직장애에서의 사구체장애 / 전신결합조직장애에서의 신세뇨관-간질장애',
    targetCode: 'N08.5주2) / N16.4주2)',
    simultaneousItems: [
      { disease: '신장침범 동반', code: 'M32.13†' }
    ]
  },
  {
    targetDisease: '달리 분류된 감염성 및 기생충질환에서의 신장 및 요관의 기타',
    targetCode: 'N29.1',
    simultaneousItems: [
      { disease: '신장의 결핵', code: 'A18.10†' },
      { disease: '요관의 결핵', code: 'A18.18†' }
    ]
  },
  {
    targetDisease: '결핵성 식도염',
    targetCode: 'K23.0',
    simultaneousItems: [
      { disease: '달리 분류되지 않은 소화기관의 결핵', code: 'A18.82†' }
    ]
  },
  {
    targetDisease: '결핵성 방광염',
    targetCode: 'N33.0',
    simultaneousItems: [
      { disease: '방광의 결핵', code: 'A18.11†' }
    ]
  },
  {
    targetDisease: '클라미디아복막염',
    targetCode: 'K67.0',
    simultaneousItems: [
      { disease: '기타 클라미디아질환', code: 'A74.8' }
    ]
  },
  {
    targetDisease: '건조증후군[쇼그렌]',
    targetCode: 'M35.0',
    simultaneousItems: [
      { disease: '달리 분류된 기타 질환에서의 각막염 및 각막결막염', code: 'H19.3' }
    ]
  },
  {
    targetDisease: '달리 분류된 세균성 질환에서의 윤활막염 및 힘줄윤활막염',
    targetCode: 'M68.0',
    simultaneousItems: [
      { disease: '기타 관절의 결핵', code: 'A18.08†' }
    ]
  }
];

export const HYUNDAI_SIMULTANEOUS_120_58_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: "경추간판장애 및 기타 추간판장애",
    targetCode: "M50~M51+",
    simultaneousItems: [
      { disease: "추간판 장애에서의 신경근 및 신경총 압박", code: "G55.1*" }
    ]
  },
  {
    targetDisease: "결핵에서의 중이염",
    targetCode: "H67.0*",
    simultaneousItems: [
      { disease: "결핵성 중이염", code: "A18.6+" }
    ]
  },
  {
    targetDisease: "홍역에서의 중이염",
    targetCode: "H67.1*",
    simultaneousItems: [
      { disease: "중이염이 합병된 홍역(H67.1*)", code: "B05.3+" },
      { disease: "홍역후 중이염(H67.1*)", code: "B05.3+" }
    ]
  },
  {
    targetDisease: "결핵성 맥락망막염 / 결핵성 상공막염 / 결핵에서의 각막염 및 각막결막염(간질성) / 결핵에서의 홍채성모체염",
    targetCode: "H32.0*주1) / H19.0*주1) / H19.2*주1) / H22.0*주1)",
    simultaneousItems: [
      { disease: "눈의 결핵", code: "A18.5+" }
    ]
  },
  {
    targetDisease: "헤르페스바이러스[단순헤르페스] 감염에서의 홍채성모체염",
    targetCode: "H22.0*",
    simultaneousItems: [
      { disease: "홍채성모체염", code: "B00.50+" },
      { disease: "홍채염", code: "B00.50+" },
      { disease: "전방포도막염", code: "B00.50+" }
    ]
  },
  {
    targetDisease: "헤르페스바이러스 각막염 및 각막결막염",
    targetCode: "H19.1*",
    simultaneousItems: [
      { disease: "각막염", code: "B00.51+" },
      { disease: "각막결막염", code: "B00.51+" },
      { disease: "각막상피염", code: "B00.51+" },
      { disease: "간질각막염", code: "B00.51+" },
      { disease: "각막내피염", code: "B00.51+" }
    ]
  },
  {
    targetDisease: "유행성 각막결막염",
    targetCode: "H19.2*",
    simultaneousItems: [
      { disease: "아데노바이러스에 의한 각막결막염", code: "B30.0+" },
      { disease: "유행성 각막결막염", code: "B30.0+" },
      { disease: "조선소눈병", code: "B30.0+" }
    ]
  },
  {
    targetDisease: "전신홍반루푸스에서의 사구체장애",
    targetCode: "N08.5*",
    simultaneousItems: [
      { disease: "사구체질환 동반 전신홍반루푸스 (제외 - 사구체질환 동반 이외의 전신홍반루푸스)", code: "M32.1+" }
    ]
  },
  {
    targetDisease: "전신홍반루푸스에서의 신세뇨관-간질장애",
    targetCode: "N16.4*",
    simultaneousItems: [
      { disease: "세뇨관-간질신장병증 동반 전신홍반루푸스 (제외 - 신세뇨관-간질신장병증 동반 이외의 전신홍반루푸스)", code: "M32.1+" }
    ]
  },
  {
    targetDisease: "달리 분류된 감염성 및 기생충성 질환에서의 신장 및 요관의 기타 장애",
    targetCode: "N29.1*",
    simultaneousItems: [
      { disease: "신장의 결핵", code: "A18.10+" },
      { disease: "요관의 결핵", code: "A18.18+" }
    ]
  },
  {
    targetDisease: "결핵성 식도염",
    targetCode: "K23.0*",
    simultaneousItems: [
      { disease: "식도의 결핵", code: "A18.82+" }
    ]
  },
  {
    targetDisease: "결핵성 방광염",
    targetCode: "N33.0*",
    simultaneousItems: [
      { disease: "방광의 결핵", code: "A18.11†" }
    ]
  },
  {
    targetDisease: "클라미디아복막염",
    targetCode: "K67.0*",
    simultaneousItems: [
      { disease: "클라미디아복막염", code: "A74.8+" }
    ]
  },
  {
    targetDisease: "각막결막염을(를) 동반한 쉐그렌증후군",
    targetCode: "M35.0+",
    simultaneousItems: [
      { disease: "건성 각막결막염", code: "H19.3*" }
    ]
  },
  {
    targetDisease: "결핵에서의 윤활막염 및 힘줄윤활막염",
    targetCode: "M68.0*",
    simultaneousItems: [
      { disease: "결핵성 윤활막염", code: "A18.08†" },
      { disease: "결핵성 힘줄윤활막염", code: "A18.08†" }
    ]
  },
  {
    targetDisease: "달리 분류된 감염성 및 기생충성 질환에서의 결막염",
    targetCode: "H13.1*",
    simultaneousItems: [
      { disease: "아데노바이러스에 의한 결막염", code: "B30.1+" },
      { disease: "클라미디아결막염", code: "A74.0+" },
      { disease: "급성 유행성 출혈성 결막염(엔테로바이러스)", code: "B30.3+" },
      { disease: "결막염", code: "B00.52+" },
      { disease: "기타 바이러스결막염", code: "B30.8+" }
    ]
  }
];

export const HYUNDAI_SIMULTANEOUS_120_24_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: "뼈 및 관절의 결핵",
    targetCode: "A18.0+",
    simultaneousItems: [
      { disease: "결핵 관절염", code: "M01.1*" },
      { disease: "척추의 결핵", code: "M49.0*" },
      { disease: "뼈의 결핵", code: "M90.0*" }
    ]
  },
  {
    targetDisease: "비뇨생식계통의 결핵",
    targetCode: "A18.1+",
    simultaneousItems: [
      { disease: "결핵성 방광염", code: "N33.0*" },
      { disease: "자궁경부의 결핵감염", code: "N74.0*" },
      { disease: "여성 결핵성 골반염증질환", code: "N74.1*" }
    ]
  },
  {
    targetDisease: "장,복막 및 장간막 림프절의 결핵",
    targetCode: "A18.3+",
    simultaneousItems: [
      { disease: "결핵성 복막염", code: "K67.3*" },
      { disease: "장, 복막 및 장간막림프절의 결핵성 장애", code: "K93.0*" }
    ]
  },
  {
    targetDisease: "달리 분류된 질환에서의 상세불명 판막의 심내막염",
    targetCode: "I39.8*",
    simultaneousItems: [
      { disease: "칸디다심내막염", code: "B37.6+" }
    ]
  },
  {
    targetDisease: "달리 분류된 바이러스질환에서의 폐렴",
    targetCode: "J17.1*",
    simultaneousItems: [
      { disease: "거대세포바이러스폐렴", code: "B25.0+" },
      { disease: "폐렴이 합병된 홍역", code: "B05.2+" },
      { disease: "수두폐렴", code: "B01.2+" }
    ]
  },
  {
    targetDisease: "톡소포자충증에서의 폐렴",
    targetCode: "J17.3*",
    simultaneousItems: [
      { disease: "폐톡소포자충증", code: "B58.3+" }
    ]
  },
  {
    targetDisease: "달리 분류된 감염성 및 기생충성 질환에서의 간장애",
    targetCode: "K77.0*",
    simultaneousItems: [
      { disease: "거대세포바이러스간염", code: "B25.1+" },
      { disease: "톡소포자충간염", code: "B58.1+" }
    ]
  },
  {
    targetDisease: "달리 분류된 세균성 질환에서의 심장막염",
    targetCode: "I32.0*주1)",
    simultaneousItems: [
      { disease: "수막알균성 심장막염", code: "A39.5+" }
    ]
  },
  {
    targetDisease: "달리 분류된 질환에서의 상세불명 판막의 심내막염",
    targetCode: "I39.8*주1)",
    simultaneousItems: [
      { disease: "수막알균성 심내막염", code: "A39.5+" }
    ]
  },
  {
    targetDisease: "달리 분류된 세균성 질환에서의 심근염",
    targetCode: "I41.0*주1)",
    simultaneousItems: [
      { disease: "수막알균성 심근염", code: "A39.5+" }
    ]
  },
  {
    targetDisease: "달리 분류된 세균성 질환에서의 기타 심장장애",
    targetCode: "I52.0*주1)",
    simultaneousItems: [
      { disease: "수막알균성 심장장애 NOS", code: "A39.5+" }
    ]
  },
  {
    targetDisease: "달리 분류된 세균성 질환에서의 수막염",
    targetCode: "G01*",
    simultaneousItems: [
      { disease: "수막알균수막염", code: "A39.0" },
      { disease: "결핵성 수막염", code: "A17.0+" }
    ]
  },
  {
    targetDisease: "달리 분류된 바이러스질환에서의 수막염",
    targetCode: "G02.0*",
    simultaneousItems: [
      { disease: "아데노바이러스수막염", code: "A87.1+" },
      { disease: "엔테로바이러스수막염", code: "A87.0+" },
      { disease: "헤르페스바이러스수막염", code: "B00.3+" },
      { disease: "수막염이 합병된 홍역", code: "B05.1+" },
      { disease: "볼거리수막염", code: "B26.1+" },
      { disease: "수두수막염", code: "B01.0+" },
      { disease: "대상포진수막염", code: "B02.1+" }
    ]
  },
  {
    targetDisease: "진균증에서의 수막염",
    targetCode: "G02.1*",
    simultaneousItems: [
      { disease: "칸디다수막염", code: "B37.5+" },
      { disease: "콕시디오이데스진균수막염", code: "B38.4+" }
    ]
  },
  {
    targetDisease: "결핵(~에서의) 뇌염, 척수염 또는 뇌척수염",
    targetCode: "G05.0*",
    simultaneousItems: [
      { disease: "결핵성 수막뇌염", code: "A17.81+" }
    ]
  },
  {
    targetDisease: "달리 분류된 바이러스질환에서의 뇌염, 척수염 및 뇌척수염",
    targetCode: "G05.1*",
    simultaneousItems: [
      { disease: "아데노바이러스뇌염", code: "A85.1+" },
      { disease: "엔테로바이러스뇌염", code: "A85.0+" },
      { disease: "헤르페스바이러스뇌염", code: "B00.4+" },
      { disease: "뇌염이 합병된 홍역", code: "B05.0+" },
      { disease: "볼거리뇌염", code: "B26.2+" },
      { disease: "수두뇌염", code: "B01.1+" },
      { disease: "대상포진뇌염", code: "B02.0+" }
    ]
  },
  {
    targetDisease: "풍진에서의 뇌염, 척수염 또는 뇌척수염 / 풍진(에 의한)수막염",
    targetCode: "G05.1*주2) / G02.0*주2)",
    simultaneousItems: [
      { disease: "신경학적 합병증을 동반한 풍진", code: "B06.0+" }
    ]
  },
  {
    targetDisease: "리스테리아(~에서의) 수막염 / 리스테리아(~에서의) 뇌염, 척수염 또는 뇌척수염",
    targetCode: "G01*주3) / G05.0*주3)",
    simultaneousItems: [
      { disease: "리스테리아 수막염 및 수막뇌염", code: "A32.1+" }
    ]
  },
  {
    targetDisease: "달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종",
    targetCode: "G07*",
    simultaneousItems: [
      { disease: "아메바성 뇌농양", code: "A06.6" },
      { disease: "수막결핵종", code: "A17.1+" },
      { disease: "뇌 및 중추신경계통의 결핵종", code: "A17.80+" },
      { disease: "기타 신경계통의 결핵", code: "A17.88+" }
    ]
  },
  {
    targetDisease: "달리 분류된 질환에서의 췌장장애",
    targetCode: "K87.1*",
    simultaneousItems: [
      { disease: "거대세포바이러스췌장염", code: "B25.2+" },
      { disease: "볼거리췌장염", code: "B26.3+" }
    ]
  }
];

export const HYUNDAI_SIMULTANEOUS_120_THYROID_DISEASES: HyundaiSimultaneousRow[] = [
  {
    targetDisease: "갑상선독증",
    targetCode: "E05-+",
    simultaneousItems: [
      { disease: "갑상선이상성 안구돌출", code: "H06.2*" }
    ]
  }
];







// interface moved to types.ts

// interface moved to types.ts

export const HYUNDAI_71_SUMMARY_SECTIONS = [
  {
    category: '22대특정질병',
    diseases: '고혈압, 당뇨병, 심장질환, 뇌혈관질환, 간질환, 위궤양 및 십이지장궤양, 갑상선질환, 동맥경화증, 만성하부호흡기질환, 폐렴, 녹내장, 결핵, 신부전, 패혈증, 중추신경계통의 염증성 질환, 파킨슨병, 다발경화증, 자율신경계통의 장애, 대동맥류, 폐질환, 급성 췌장염, 췌장질환'
  },
  {
    category: '다발성13대질병',
    diseases: '관절염, 백내장, 생식기질환, 소화기계통의 양성신생물, 중이·호흡계통 및 흉각의 양성신생물, 골 및 관절연골의 양성신생물, 조직의 양성신생물, 생식기 양성종양, 비뇨기관의 양성신생물, 수막의 양성신생물, 뇌 및 중추신경계통의 양성신생물, 갑상선 및 내분비선의 양성신생물, 유방의 양성종양'
  },
  {
    category: '35대생활질환',
    diseases: '담석증, 사타구니 탈장, 편도 및 아데노이드의 만성 질환, 만성 부비동염, 급성상기도감염, 후각특정질환, 인후부위의 특정질환, 근육장애, 발바닥근막성 섬유종증, 중이 및 유돌의 질환, 내이의 질환, 황반변성, 눈 및 눈부속기관의 특정질환, 사구체질환, 신세뇨관-간질질환, 방광의 결석, 신장 및 요관의 기타 장애, 비뇨계통의 기타 질환, 유방의 장애, 특정 부위의 탈장, 비감염성 장염 및 결장염, 특정 장질환, 복막의 질환, 담낭담도 질환, 척추변형, 척추병증, 추간판장애(디스크질환), 골다공증, 안면 신경장애, 단일신경 병증, 특정 누적외상성질환, 윤활막 및 힘줄장애, 식도질환, 위·십이지장 질환, 어깨병변'
  },
  {
    category: '치핵',
    diseases: '치핵 및 항문주위정맥혈전증'
  }
];

export const HYUNDAI_71_DISEASES_SECTIONS: Hyundai71Section[] = [
  {
    category: '[별표-질병관련] 22대특정질병 분류표',
    items: [
      { disease: '[고혈압성 질환] 본태성(원발성) 고혈압', code: 'I10' },
      { disease: '[고혈압성 질환] 고혈압성 심장병', code: 'I11' },
      { disease: '[고혈압성 질환] 고혈압성 신장병', code: 'I12' },
      { disease: '[고혈압성 질환] 고혈압성 심장 및 신장병', code: 'I13' },
      { disease: '[고혈압성 질환] 이차성 고혈압', code: 'I15' },
      { disease: '[고혈압성 합병증] 고혈압성 뇌병증', code: 'I67.4' },
      { disease: '[고혈압성 합병증] 고혈압성 망막병증', code: 'H35.02' },
      { disease: '[당뇨병 질환] 1형 당뇨병', code: 'E10' },
      { disease: '[당뇨병 질환] 2형 당뇨병', code: 'E11' },
      { disease: '[당뇨병 질환] 영양실조 관련 당뇨병', code: 'E12' },
      { disease: '[당뇨병 질환] 기타 명시된 당뇨병', code: 'E13' },
      { disease: '[당뇨병 질환] 상세불명의 당뇨병', code: 'E14' },
      { disease: '[당뇨병성 합병증] 당뇨병성 단일신경병증', code: 'G59.0' },
      { disease: '[당뇨병성 합병증] 당뇨병성 다발신경병증', code: 'G63.2' },
      { disease: '[당뇨병성 합병증] 당뇨병성 백내장', code: 'H28.0' },
      { disease: '[당뇨병성 합병증] 당뇨병성 망막병증', code: 'H36.0' },
      { disease: '[당뇨병성 합병증] 당뇨병성 관절병증', code: 'M14.2' },
      { disease: '[당뇨병성 합병증] 당뇨병에서의 사구체장애', code: 'N08.3' },
      { disease: '[심장질환] 급성 류마티스열', code: 'I00 ~ I02' },
      { disease: '[심장질환] 만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { disease: '[심장질환] 허혈심장질환', code: 'I20 ~ I25' },
      { disease: '[심장질환] 폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { disease: '[심장질환] 기타 형태의 심장병', code: 'I30 ~ I52' },
      { disease: '[뇌혈관질환] 뇌혈관 질환', code: 'I60 ~ I69' },
      { disease: '[간 질환] 바이러스 간염', code: 'B15 ~ B19' },
      { disease: '[간 질환] 간의 질환', code: 'K70 ~ K77' },
      { disease: '[위궤양 및 십이지장궤양] 위궤양', code: 'K25' },
      { disease: '[위궤양 및 십이지장궤양] 십이지장궤양', code: 'K26' },
      { disease: '[위궤양 및 십이지장궤양] 상세불명 부위의 소화성 궤양', code: 'K27' },
      { disease: '[갑상선질환] 갑상선의 장애', code: 'E00~E07' },
      { disease: '[갑상선질환] 처치후 갑상선기능저하증', code: 'E89.0' },
      { disease: '[갑상선질환] 방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { disease: '[갑상선질환] 수술후 갑상선기능저하증', code: 'E89.0' },
      { disease: '[동맥경화증] 죽상경화증', code: 'I70' },
      { disease: '[만성 하부호흡기질환] 급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { disease: '[만성 하부호흡기질환] 단순성 및 정액화농성 만성기관지염', code: 'J41' },
      { disease: '[만성 하부호흡기질환] 상세불명의 만성기관지염', code: 'J42' },
      { disease: '[만성 하부호흡기질환] 천식', code: 'J45' },
      { disease: '[만성 하부호흡기질환] 천식지속상태', code: 'J46' },
      { disease: '[폐렴] 달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { disease: '[폐렴] 폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { disease: '[폐렴] 인플루엔자에 의한 폐렴', code: 'J14' },
      { disease: '[폐렴] 달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { disease: '[폐렴] 달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { disease: '[폐렴] 달리 분류된 질환에서의 폐렴', code: 'J17' },
      { disease: '[폐렴] 상세불명 병원체의 폐렴', code: 'J18' },
      { disease: '[폐렴] 재향군인병', code: 'A48.1' },
      { disease: '[폐렴] 폐렴이 합병된 홍역', code: 'B05.2' },
      { disease: '[녹내장] 녹내장', code: 'H40' },
      { disease: '[녹내장] 달리 분류된 질환에서의 녹내장', code: 'H42' },
      { disease: '[결핵] 결핵', code: 'A15 ~ A19' },
      { disease: '[결핵] 결핵의 후유증', code: 'B90' },
      { disease: '[신부전] 신부전', code: 'N17 ~ N19' },
      { disease: '[패혈증] 연쇄구균패혈증', code: 'A40' },
      { disease: '[패혈증] 기타 패혈증', code: 'A41' },
      { disease: '[중추신경계통의 염증성 질환] 달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { disease: '[중추신경계통의 염증성 질환] 달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { disease: '[중추신경계통의 염증성 질환] 달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { disease: '[중추신경계통의 염증성 질환] 기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { disease: '[중추신경계통의 염증성 질환] 뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { disease: '[중추신경계통의 염증성 질환] 달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { disease: '[중추신경계통의 염증성 질환] 두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { disease: '[중추신경계통의 염증성 질환] 달리 분류된 질환에서의 두 개내 및 척추내 농양 및 육아종', code: 'G07' },
      { disease: '[중추신경계통의 염증성 질환] 두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { disease: '[중추신경계통의 염증성 질환] 중추신경계통의 염증성 질환의 후유증', code: 'G09' },
      { disease: '[파킨슨병] 파킨슨병', code: 'G20' },
      { disease: '[파킨슨병] 이차성 파킨슨증', code: 'G21' },
      { disease: '[다발경화증] 다발경화증', code: 'G35' },
      { disease: '[자율신경계통의 장애] 자율신경계통의 장애', code: 'G90' },
      { disease: '[대동맥류] 대동맥동맥류 및 박리', code: 'I71' },
      { disease: '[폐질환] 폐기종', code: 'J43' },
      { disease: '[폐질환] 기타 만성 폐색성 폐질환', code: 'J44' },
      { disease: '[폐질환] 기관지확장증', code: 'J47' },
      { disease: '[폐질환] 하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { disease: '[폐질환] 흉막의 기타 질환', code: 'J90~J94' },
      { disease: '[급성 췌장염] 급성 췌장염', code: 'K85' },
      { disease: '[췌장질환] 췌장의 기타 질환', code: 'K86' },
      { disease: '[췌장질환] 달리 분류된 질환에서의 담당, 담도 및 췌장의 장애', code: 'K87' }
    ]
  },
  {
    category: '[별표-질병관련] 다발성13대질병 분류표',
    items: [
      { disease: '[관절염] 감염성 관절병증', code: 'M00 ~ M03' },
      { disease: '[관절염] 염증성 다발관절병증(당뇨병성 관절병증 제외)', code: 'M05 ~ M14 (M14.2제외)' },
      { disease: '[관절염] 관절증', code: 'M15 ~ M19' },
      { disease: '[관절염] 기타 관절 장애', code: 'M20 ~ M25' },
      { disease: '[백내장] 노년 백내장', code: 'H25' },
      { disease: '[백내장] 기타 백내장', code: 'H26' },
      { disease: '[백내장] 수정체의 기타장애', code: 'H27' },
      { disease: '[생식기질환] 남생식기의 질환(남성불임 제외)', code: 'N40~N45, N47~N51' },
      { disease: '[생식기질환] 여성골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { disease: '[생식기질환] 여성생식기관의 비염증성 장애(습관적 유산자, 여성불임, 인공 수정 관련 합병증 제외)', code: 'N80 ~ N95' },
      { disease: '[생식기질환] 달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' },
      { disease: '[소화기계통의 양성신생물] 기타 및 부위불명 소화기계통의 양성신생물', code: 'D13' },
      { disease: '[중이·호흡계통 및 흉각의 양성신생물] 중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { disease: '[중이·호흡계통 및 흉각의 양성신생물] 기타 및 상세불명의 흉각내 기관의 양성 신생물', code: 'D15' },
      { disease: '[골 및 관절연골의 양성신생물] 골 및 관절연골의 양성 신생물', code: 'D16' },
      { disease: '[조직의 양성신생물] 중피조직의 양성 신생물', code: 'D19' },
      { disease: '[조직의 양성신생물] 후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { disease: '[조직의 양성신생물] 결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' },
      { disease: '[생식기 양성종양] 여성생식기-자궁의 평활근종', code: 'D25' },
      { disease: '[생식기 양성종양] 여성생식기-자궁의 기타 양성 신생물', code: 'D26' },
      { disease: '[생식기 양성종양] 여성생식기-난소의 양성 신생물', code: 'D27' },
      { disease: '[생식기 양성종양] 여성생식기-기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { disease: '[생식기 양성종양] 남성생식기-남성생식기관의 양성 신생물', code: 'D29' },
      { disease: '[비뇨기관의 양성신생물] 비뇨기관의 양성신생물', code: 'D30' },
      { disease: '[수막의 양성신생물] 수막의 양성 신생물', code: 'D32' },
      { disease: '[뇌 및 중추신경계통의 양성신생물] 뇌 및 기타 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' },
      { disease: '[갑상선 및 내분비선의 양성신생물] 갑상선의 양성 신생물', code: 'D34' },
      { disease: '[갑상선 및 내분비선의 양성신생물] 기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' },
      { disease: '[유방의 양성종양] 유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    category: '[별표-질병관련] 35대생활질환 분류표',
    items: [
      { disease: '[담석증] 담석증', code: 'K80' },
      { disease: '[사타구니 탈장] 사타구니 탈장', code: 'K40' },
      { disease: '[편도 및 아데노이드의 만성 질환] 편도 및 아데노이드의 만성 질환', code: 'J35' },
      { disease: '[만성 부비동염] 만성 부비동염', code: 'J32' },
      { disease: '[급성상기도감염] 급성상기도감염', code: 'J00-J06' },
      { disease: '[후각특정질환] 혈관운동성 및 알러지성 비염', code: 'J30' },
      { disease: '[후각특정질환] 만성비염, 비인두염 및 인두염', code: 'J31' },
      { disease: '[후각특정질환] 코폴립', code: 'J33' },
      { disease: '[후각특정질환] 코 및 비동의 기타장애', code: 'J34' },
      { disease: '[인후부위의 특정질환] 편도주위 농양', code: 'J36' },
      { disease: '[인후부위의 특정질환] 만성 후두염 및 후두기관염', code: 'J37' },
      { disease: '[인후부위의 특정질환] 달리 분류되지 않은 성대및 후두의 질환', code: 'J38' },
      { disease: '[인후부위의 특정질환] 상기도의 기타 질환', code: 'J39' },
      { disease: '[근육장애] 근염', code: 'M60' },
      { disease: '[근육장애] 근육의 석회화 및 골화', code: 'M61' },
      { disease: '[근육장애] 근육의 기타 장애', code: 'M62' },
      { disease: '[근육장애] 달리 분류된 질환에서의 근육장애', code: 'M63' },
      { disease: '[발바닥근막성 섬유종증] 발바닥근막성 섬유종증', code: 'M72.2' },
      { disease: '[중이 및 유돌의 질환] 중이 및 유돌의 질환', code: 'H65-H75' },
      { disease: '[내이의 질환] 내이의 질환', code: 'H80-H83' },
      { disease: '[황반변성] 황반 및 후극부의 변성', code: 'H35.3' },
      { disease: '[눈 및 눈부속기관의 특정질환] 공막, 각막, 홍채 및 성모체의 장애', code: 'H15-H22' },
      { disease: '[눈 및 눈부속기관의 특정질환] 맥락막 및 망막의 장애(황반변성, 고혈압성망막병증, 당뇨병성망막병증 제외)', code: 'H30-H36 (H35.3, H35.02, H36.0 제외)' },
      { disease: '[눈 및 눈부속기관의 특정질환] 시신경 및 시각경로의 장애', code: 'H46-H48' },
      { disease: '[사구체질환] 급성 신염증후군', code: 'N00' },
      { disease: '[사구체질환] 급속 진행성 신염증후군', code: 'N01' },
      { disease: '[사구체질환] 재발성 및 지속성 혈뇨', code: 'N02' },
      { disease: '[사구체질환] 만성 신염증후군', code: 'N03' },
      { disease: '[사구체질환] 신증후군', code: 'N04' },
      { disease: '[사구체질환] 상세불명의 신염증후군', code: 'N05' },
      { disease: '[사구체질환] 명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { disease: '[사구체질환] 달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { disease: '[사구체질환] 달리 분류된 질환에서의 사구체장애(당뇨병에서의 사구체장애 제외)', code: 'N08 (N08.3제외)' },
      { disease: '[신세뇨관-간질질환] 급성 세뇨관-간질신장염', code: 'N10' },
      { disease: '[신세뇨관-간질질환] 만성 세뇨관-간질신장염', code: 'N11' },
      { disease: '[신세뇨관-간질질환] 급성 또는 만성으로 명시되지 않은 세뇨관-간질신장염', code: 'N12' },
      { disease: '[신세뇨관-간질질환] 폐색성 및 역류성 요로병증', code: 'N13' },
      { disease: '[신세뇨관-간질질환] 약물 및 중금속 유발 세뇨관-간질 및 세뇨관 병태', code: 'N14' },
      { disease: '[신세뇨관-간질질환] 기타 신세뇨관-간질질환', code: 'N15' },
      { disease: '[신세뇨관-간질질환] 달리 분류된 질환에서의 신세뇨관-간질장애', code: 'N16' },
      { disease: '[방광의 결석] 방광의 결석', code: 'N21.0' },
      { disease: '[신장 및 요관의 기타 장애] 세뇨관기능손상으로 인한 장애', code: 'N25' },
      { disease: '[신장 및 요관의 기타 장애] 상세불명의 신장위축', code: 'N26' },
      { disease: '[신장 및 요관의 기타 장애] 원인불명의 작은 신장', code: 'N27' },
      { disease: '[신장 및 요관의 기타 장애] 달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { disease: '[신장 및 요관의 기타 장애] 달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' },
      { disease: '[비뇨계통의 기타 질환] 방광염', code: 'N30' },
      { disease: '[비뇨계통의 기타 질환] 달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { disease: '[비뇨계통의 기타 질환] 방광의 기타 장애', code: 'N32' },
      { disease: '[비뇨계통의 기타 질환] 달리 분류된 질환에서의 방광장애', code: 'N33' },
      { disease: '[비뇨계통의 기타 질환] 비뇨계통의 기타 장애', code: 'N37' },
      { disease: '[비뇨계통의 기타 질환] 달리 분류된 질환에서의 요도장애(결핵성 방광염, 스트레스요실금, 기타 명시된 요실금 제외)', code: 'N39 (N33.0, N39.3, N39.4 제외)' },
      { disease: '[유방의 장애] 양성 유방형성이상', code: 'N60' },
      { disease: '[유방의 장애] 유방의 염증성 장애', code: 'N61' },
      { disease: '[유방의 장애] 유방의 비대', code: 'N62' },
      { disease: '[유방의 장애] 유방의 상세불명의 덩이', code: 'N63' },
      { disease: '[유방의 장애] 유방의 기타 장애', code: 'N64' },
      { disease: '[특정 부위의 탈장] 대퇴탈장', code: 'K41' },
      { disease: '[특정 부위의 탈장] 배꼽탈장', code: 'K42' },
      { disease: '[특정 부위의 탈장] 복벽탈장', code: 'K43' },
      { disease: '[특정 부위의 탈장] 횡격막탈장', code: 'K44' },
      { disease: '[특정 부위의 탈장] 기타 복벽탈장', code: 'K45' },
      { disease: '[특정 부위의 탈장] 상세불명의 복벽탈장', code: 'K46' },
      { disease: '[비감염성 장염 및 결장염] 크론병[국소성 장염]', code: 'K50' },
      { disease: '[비감염성 장염 및 결장염] 궤양성 대장염', code: 'K51' },
      { disease: '[비감염성 장염 및 결장염] 기타 비감염성 위장염 및 결장염', code: 'K52' },
      { disease: '[특정 장질환] 장의 혈관장애', code: 'K55' },
      { disease: '[특정 장질환] 탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { disease: '[특정 장질환] 장의 게실병', code: 'K57' },
      { disease: '[복막의 질환] 복막의 질환(결핵성 복막염 제외)', code: 'K65-K67 (K67.3제외)' },
      { disease: '[담낭담도 질환] 담낭염', code: 'K81' },
      { disease: '[담낭담도 질환] 담낭의 기타질환', code: 'K82' },
      { disease: '[담낭담도 질환] 담도의 기타질환', code: 'K83' },
      { disease: '[척추변형] 척추후만증 및 척추전만증', code: 'M40' },
      { disease: '[척추변형] 척추측만증', code: 'M41' },
      { disease: '[척추변형] 척추골연골증', code: 'M42' },
      { disease: '[척추변형] 기타 변형성 등병증', code: 'M43' },
      { disease: '[척추병증] 강직척추염', code: 'M45' },
      { disease: '[척추병증] 기타 염증성 척추병증', code: 'M46' },
      { disease: '[척추병증] 척추증', code: 'M47' },
      { disease: '[척추병증] 기타 척추병증', code: 'M48' },
      { disease: '[추간판장애(디스크질환)] 경추간판장애', code: 'M50' },
      { disease: '[추간판장애(디스크질환)] 기타 추간판장애', code: 'M51' },
      { disease: '[골다공증] 병적 골절을 동반한 골다공증', code: 'M80' },
      { disease: '[골다공증] 병적 골절이 없는 골다공증', code: 'M81' },
      { disease: '[골다공증] 달리 분류된 질환에서의 골다공증', code: 'M82' },
      { disease: '[골다공증] 골연속성의 장애', code: 'M84' },
      { disease: '[안면 신경장애] 삼차신경의 장애', code: 'G50' },
      { disease: '[안면 신경장애] 안면신경장애', code: 'G51' },
      { disease: '[안면 신경장애] 기타 뇌신경의 장애', code: 'G52' },
      { disease: '[단일신경 병증] 팔의 단일신경병증', code: 'G56' },
      { disease: '[단일신경 병증] 다리의 단일신경병증', code: 'G57' },
      { disease: '[단일신경 병증] 기타 단일신경병증', code: 'G58' },
      { disease: '[단일신경 병증] 달리 분류된 질환에서의 단일신경병증(당뇨병성 단일신경병증 제외)', code: 'G59 (G59.0제외)' },
      { disease: '[특정 누적외상성질환] 결합조직의 기타 전신침범', code: 'M35' },
      { disease: '[특정 누적외상성질환] 경추상완증후군', code: 'M53.1' },
      { disease: '[특정 누적외상성질환] 기타 연조직장애(발바닥근막성 섬유종증, 어깨병변 제외)', code: 'M70-M79 (M74,M78제외, M72.2제외, M75제외)' },
      { disease: '[윤활막 및 힘줄장애] 윤활막염 및 힘줄윤활막염', code: 'M65' },
      { disease: '[윤활막 및 힘줄장애] 윤활막 및 힘줄의 자연파열', code: 'M66' },
      { disease: '[윤활막 및 힘줄장애] 윤활막 및 힘줄의 기타 장애', code: 'M67' },
      { disease: '[윤활막 및 힘줄장애] 달리 분류된 질환에서의 윤활막 및 힘줄의 장애', code: 'M68' },
      { disease: '[식도질환] 식도염', code: 'K20' },
      { disease: '[식도질환] 위-식도역류병', code: 'K21' },
      { disease: '[식도질환] 식도의 기타질환', code: 'K22' },
      { disease: '[식도질환] 달리 분류된 질환에서의 식도의 장애', code: 'K23' },
      { disease: '[위,십이지장 질환] 위염 및 십이지장염', code: 'K29' },
      { disease: '[위,십이지장 질환] 기능성 소화불량', code: 'K30' },
      { disease: '[어깨병변] 어깨병변', code: 'M75' }
    ]
  },
  {
    category: '[별표-질병관련] 치핵 분류표',
    items: [
      { disease: '치핵 및 항문주위정맥혈전증 (포함 - 치질 / 제외 - 출산 및 산후기 합병 O87.2, 임신 합병 O22.4)', code: 'K64' }
    ]
  }
];

export const HYUNDAI_120_SUMMARY_SECTIONS = [
  {
    category: '26대 질병 II',
    diseases: '중증근무력증, 안와장애, 유리체의 장애, 하지정맥류, 과민대장증후군, 전신결합조직장애 II, 치열 및 치루, 골수염 및 골괴사증, 뼈의 파젯병 및 뼈의기타장애, 연골병증, 신장 및 요관의 결석, 요도결석증, 다한증, 눈및부속기관의 양성종양, 수면무호흡증, 결막장애, 외이의 질환, 림프절염, 대상포진, 급성 기관지염, 급성 세기관지염, 정맥염 및 혈전정맥염, 기타 정맥의 색전증 및 혈전증, 식도정맥류, 후각특정질환 II, 유방의장애 II'
  },
  {
    category: '58대 질병 II',
    diseases: '담석증, 사타구니 탈장, 편도 및 아데노이드의 만성 질환, 만성 부비동염, 급성상기도감염, 후각특정질환, 인후부위의 특정질환, 성대결절, 근육장애, 발바닥근막성 섬유종증, 중이염, 중이 및 유돌의 질환, 내이의 질환, 황반변성, 공막각막홍채섬모체의 장애, 맥락막 및 망막의 장애, 시신경 및 시각경로의 장애, 사구체질환, 신세뇨관-간질질환, 방광의결석, 신장 및 요관의 기타 장애, 비뇨계통의 기타 질환, 유방의장애, 특정 부위의 탈장, 비감염성장염 및 결장염, 특정장질환, 복막의질환, 담낭담도질환, 척추변형, 척추병증, 추간판장애(디스크질환), 골다공증, 안면신경장애, 손목터널증후군, 단일신경병증, 특정 누적외상성질환, 윤활막 및 힘줄장애, 식도질환, 위십이지장 질환, 어깨병변, 고혈압, 당뇨병, 용혈-요독증후군(행버거병), 비장질환, 부갑상선질환, 뇌하수체질환, 대사장애, 마비, 귀의 기타장애, 동맥및세동맥의 질환, 외부요인에의한폐질환, 폐부종, 특정호흡기질환, 침샘질환, 위공창궤양, 특정소화기질환, 장흡수장애, 전신결합조직장애 I'
  },
  {
    category: '24대 질병',
    diseases: '심장질환, 뇌혈관질환, 간질환, 위십이지장궤양, 동맥경화증, 만성 하부호흡기질환, 폐렴, 녹내장, 결핵, 신부전, 패혈증, 중추신경계통의 염증성질환(수막염), 중추신경계통의 염증성질환(뇌및척수의염증성질환), 파킨슨병, 다발경화증, 자율신경계통의 장애, 대동맥류, 폐질환, 급성 췌장염, 췌장질환, 뇌전증, 뇌성마비, 수두증, 버거씨병'
  },
  {
    category: '치핵',
    diseases: '치핵'
  },
  {
    category: '갑상선 관련 질병',
    diseases: '갑상선질환, 갑상선의 양성신생물'
  },
  {
    category: '다발성 10대 질병',
    diseases: '소화기계통의 양성신생물, 중이호흡계통 및 흉각의 양성신생물, 골 및 관절연골의 양성신생물, 조직의 양성신생물, 생식기의 양성종양, 비뇨기관의 양성신생물, 수막의 양성신생물, 뇌 및 중추신경계통의 양성신생물, 내분비선의 양성신생물, 유방의 양성종양'
  }
];

export const HYUNDAI_120_DISEASES_SECTIONS: Hyundai71Section[] = [
  {
    category: '26대 질병 II',
    items: [
      { disease: '중증근무력증', code: 'G70' },
      { disease: '안와장애', code: 'H05' },
      { disease: '유리체의 장애', code: 'H43' },
      { disease: '하지정맥류', code: 'I83, O22.0, O87.8' },
      { disease: '과민대장증후군', code: 'K58' },
      { disease: '치열 및 치루', code: 'K60, K61, K62' },
      { disease: '전신결합조직장애 II', code: 'M32, M33, M34' },
      { disease: '골수염 및 골괴사증', code: 'M86, M87' },
      { disease: '뼈의 파젯병 및 뼈의기타장애', code: 'M88, M89' },
      { disease: '연골병증', code: 'M91, M92, M93, M94' },
      { disease: '신장 및 요관의 결석', code: 'N20' },
      { disease: '요도결석증', code: 'N21.1, N21.8, N21.9, N22' },
      { disease: '다한증', code: 'R61' },
      { disease: '눈 및 부속기관의 양성종양', code: 'D31' },
      { disease: '수면무호흡증', code: 'G47.3' },
      { disease: '결막장애', code: 'H10, H11, H13' },
      { disease: '외이의 질환', code: 'H60, H61, H62' },
      { disease: '림프절염', code: 'I88, I89' },
      { disease: '대상포진', code: 'B02' },
      { disease: '급성 기관지염', code: 'J20' },
      { disease: '급성 세기관지염', code: 'J21' },
      { disease: '정맥염 및 혈전정맥염', code: 'I80' },
      { disease: '기타 정맥의 색전증 및 혈전증', code: 'I82' },
      { disease: '식도정맥류', code: 'I85' },
      { disease: '후각특정질환 II', code: 'J34' },
      { disease: '유방의장애 II', code: 'N62' }
    ]
  },
  {
    category: '58대 질병 II',
    items: [
      { disease: '담석증', code: 'K80' },
      { disease: '사타구니 탈장', code: 'K40' },
      { disease: '편도 및 아데노이드의 만성 질환', code: 'J35' },
      { disease: '만성 부비동염', code: 'J32' },
      { disease: '급성상기도감염', code: 'J00 ~ J06' },
      { disease: '후각특정질환', code: 'J30, J31, J33' },
      { disease: '인후부위의 특정질환', code: 'J36, J37, J39' },
      { disease: '성대결절', code: 'J38' },
      { disease: '근육장애', code: 'M60, M61, M62, M63' },
      { disease: '발바닥근막성 섬유종증', code: 'M72.2' },
      { disease: '중이염', code: 'H65, H66, H67' },
      { disease: '중이 및 유돌의 질환', code: 'H68 ~ H75' },
      { disease: '내이의 질환', code: 'H80 ~ H83' },
      { disease: '황반변성', code: 'H35.3' },
      { disease: '공막각막홍채섬모체의 장애', code: 'H15 ~ H22' },
      { disease: '맥락막 및 망막의 장애', code: 'H30 ~ H36 (H35.3 제외, H36.0 제외)' },
      { disease: '시신경 및 시각경로의 장애', code: 'H46, H47, H48' },
      { disease: '사구체질환', code: 'N00 ~ N07, N08 (N08.3 제외)' },
      { disease: '신세뇨관-간질질환', code: 'N10 ~ N16' },
      { disease: '방광의결석', code: 'N21.0' },
      { disease: '신장 및 요관의 기타 장애', code: 'N25 ~ N29' },
      { disease: '비뇨계통의 기타 질환', code: 'N30 ~ N33, N37, N39 (N33.0, N39.3, N39.4 제외)' },
      { disease: '유방의 장애', code: 'N60, N61, N63, N64' },
      { disease: '특정 부위의 탈장', code: 'K41 ~ K46' },
      { disease: '비감염성장염 및 결장염', code: 'K50, K51, K52' },
      { disease: '특정 장질환', code: 'K55, K56, K57' },
      { disease: '복막의 질환', code: 'K65 ~ K67 (K67.3 제외)' },
      { disease: '담낭담도 질환', code: 'K81, K82, K83' },
      { disease: '척추변형', code: 'M40, M41, M42, M43' },
      { disease: '척추병증', code: 'M45, M46, M47, M48' },
      { disease: '추간판장애(디스크질환)', code: 'M50, M51' },
      { disease: '골다공증', code: 'M80, M81, M82, M84' },
      { disease: '안면 신경장애', code: 'G50, G51' },
      { disease: '기타 뇌신경의 장애', code: 'G52' },
      { disease: '손목터널증후군', code: 'G56.0' },
      { disease: '단일신경병증', code: 'G56 ~ G59 (G56.0, G59.0 제외)' },
      { disease: '특정 누적외상성질환', code: 'M35, M53.1, M70 ~ M79 (M74, M78, M72.2, M75 제외)' },
      { disease: '윤활막 및 힘줄장애', code: 'M65, M66, M67, M68' },
      { disease: '식도질환', code: 'K20, K21, K22, K23' },
      { disease: '위십이지장 질환', code: 'K29, K30' },
      { disease: '어깨병변', code: 'M75' },
      { disease: '고혈압', code: 'I10, I11, I12, I13, I15' },
      { disease: '고혈압성 합병증', code: 'I67.4, H35.0' },
      { disease: '당뇨병', code: 'E10, E11, E12, E13, E14' },
      { disease: '당뇨병성 합병증', code: 'G59.0, G63.2, H28.0, H36.0, M14.2, N08.3' },
      { disease: '용혈-요독증후군(햄버거병)', code: 'D59.3' },
      { disease: '비장질환', code: 'D73' },
      { disease: '부갑상선질환', code: 'E20, E21' },
      { disease: '뇌하수체질환', code: 'E22, E23' },
      { disease: '대사장애', code: 'E24, E25, E26, E27' },
      { disease: '마비', code: 'G81, G82, G83' },
      { disease: '귀의 기타장애', code: 'H90 ~ H95' },
      { disease: '동맥 및 세동맥의 질환', code: 'I74, I77' },
      { disease: '외부요인에 의한 폐질환', code: 'J60 ~ J70' },
      { disease: '폐부종', code: 'J81' },
      { disease: '특정호흡기질환', code: 'J82, J84' },
      { disease: '침샘질환', code: 'K11' },
      { disease: '위공창궤양', code: 'K28' },
      { disease: '특정소화기질환', code: 'K31 (K31.7 제외)' },
      { disease: '장흡수장애', code: 'K90' },
      { disease: '전신결합조직장애 I', code: 'M30, M31' }
    ]
  },
  {
    category: '24대 질병',
    items: [
      { disease: '심장질환', code: 'I00 ~ I09, I20 ~ I25, I26 ~ I28, I30 ~ I52' },
      { disease: '뇌혈관질환', code: 'I60 ~ I69' },
      { disease: '간질환', code: 'B15 ~ B19, K70 ~ K77' },
      { disease: '위십이지장궤양', code: 'K25 ~ K27' },
      { disease: '동맥경화증', code: 'I70' },
      { disease: '만성 하부호흡기질환', code: 'J40 ~ J47' },
      { disease: '폐렴', code: 'J12 ~ J18' },
      { disease: '녹내장', code: 'H40 ~ H42' },
      { disease: '결핵', code: 'A15 ~ A19' },
      { disease: '신부전', code: 'N17 ~ N19' },
      { disease: '패혈증', code: 'A40 ~ A41' },
      { disease: '중추신경계통의 염증성질환(수막염)', code: 'G00 ~ G03' },
      { disease: '중추신경계통의 염증성질환(뇌및척수의염증성질환)', code: 'G04 ~ G09' },
      { disease: '파킨슨병', code: 'G20 ~ G22' },
      { disease: '다발경화증', code: 'G35' },
      { disease: '자율신경계통의 장애', code: 'G90' },
      { disease: '대동맥류', code: 'I71' },
      { disease: '폐질환', code: 'J80 ~ J84' },
      { disease: '급성 췌장염', code: 'K85' },
      { disease: '췌장질환', code: 'K86' },
      { disease: '뇌전증', code: 'G40 ~ G41' },
      { disease: '뇌성마비', code: 'G80' },
      { disease: '수두증', code: 'G91' },
      { disease: '버거씨병', code: 'I73.1' }
    ]
  },
  {
    category: '치핵',
    items: [
      { disease: '치핵 및 항문정맥류', code: 'K64' }
    ]
  },
  {
    category: '갑상선 관련 질병',
    items: [
      { disease: '갑상선질환', code: 'E00 ~ E07' },
      { disease: '갑상선의 양성신생물', code: 'D34' }
    ]
  },
  {
    category: '다발성 10대 질병',
    items: [
      { disease: '소화기계통의 양성신생물', code: 'D12, D13' },
      { disease: '중이호흡계통 및 흉각의 양성신생물', code: 'D14' },
      { disease: '골 및 관절연골의 양성신생물', code: 'D16' },
      { disease: '조직의 양성신생물', code: 'D17, D21' },
      { disease: '생식기의 양성종양', code: 'D25 ~ D29' },
      { disease: '비뇨기관의 양성신생물', code: 'D30' },
      { disease: '수막의 양성신생물', code: 'D32' },
      { disease: '뇌 및 중추신경계통의 양성신생물', code: 'D33' },
      { disease: '내분비선의 양성신생물', code: 'D35' },
      { disease: '유방의 양성종양', code: 'D24' }
    ]
  }
];

