// KB Insurance terms data
import { KbBrainTableItem, KbHeartItem, KbCancerTableItem } from "./types";

export const KB_CANCER_SECTIONS = [
  {
    title: '소화기관암',
    items: [
      { num: '1', disease: '식도의 악성 신생물', code: 'C15' },
      { num: '2', disease: '위의 악성 신생물', code: 'C16' },
      { num: '3', disease: '소장의 악성 신생물', code: 'C17' },
      { num: '4', disease: '결장의 악성 신생물', code: 'C18' },
      { num: '5', disease: '직장구불결장접합부의 악성 신생물', code: 'C19' },
      { num: '6', disease: '직장의 악성 신생물', code: 'C20' },
      { num: '7', disease: '항문 및 항문관의 악성 신생물', code: 'C21' },
      { num: '8', disease: '기타 및 부위불명 소화기관의 악성 신생물', code: 'C26' }
    ]
  },
  {
    title: '간암, 담낭암, 기타담도암 및 췌장암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' },
      { num: '2', disease: '담낭의 악성 신생물', code: 'C23' },
      { num: '3', disease: '담도의 기타 및 상세불명 부분의 악성 신생물', code: 'C24' },
      { num: '4', disease: '췌장의 악성 신생물', code: 'C25' }
    ]
  },
  {
    title: '폐암',
    items: [
      { num: '1', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '2', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '3', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' }
    ]
  },
  {
    title: '두경부암',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '3', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '4', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '5', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    title: '특정 소액암II',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '3', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '4', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '5', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '6', disease: '방광의 악성 신생물', code: 'C67' }
    ]
  },
  {
    title: '생식기암 및 비뇨기관암(자궁, 전립선, 방광제외)',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '5', disease: '태반의 악성 신생물', code: 'C58' },
      { num: '6', disease: '음경의 악성 신생물', code: 'C60' },
      { num: '7', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '8', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '9', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '10', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '11', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '12', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' }
    ]
  },
  {
    title: '3대특정고액암',
    items: [
      { num: '1', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '2', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '3', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '4', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '5', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '6', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' }
    ]
  },
  {
    title: '혈액암',
    items: [
      {
        num: '1',
        disease: '림프, 조혈 및 관련조직의 악성 신생물',
        code: 'C81, C82, C83, C84, C85, C86, C88, C90, C91, C92, C93, C94, C95, C96',
        subItems: [
          { disease: '호지킨 림프종', code: 'C81' },
          { disease: '소포성 림프종', code: 'C82' },
          { disease: '비소포성 림프종', code: 'C83' },
          { disease: '성숙 T/NK-세포 림프종', code: 'C84' },
          { disease: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
          { disease: 'T/NK-세포 림프종의 기타 명시된 형태', code: 'C86' },
          { disease: '악성 면역증식성 질환', code: 'C88' },
          { disease: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
          { disease: '림프성 백혈병', code: 'C91' },
          { disease: '골수성 백혈병', code: 'C92' },
          { disease: '단핵구성 백혈병', code: 'C93' },
          { disease: '명시된 세포형의 기타 백혈병', code: 'C94' },
          { disease: '상세불명 세포형의 백혈병', code: 'C95' },
          { disease: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' }
        ]
      },
      { num: '2', disease: '진성 적혈구 증가증', code: 'D45' },
      { num: '3', disease: '골수 형성이상 증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식 질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  },
  {
    title: '11대특정암',
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
      { num: '10', disease: '불명확한, 이차성 및 상세불명 부위의 악성 신생물', code: 'C76~C80' },
      { num: '11', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  }
];

// KB손해보험 별표116 통합암(전이암포함)(유사암제외) 분류표
export const KB_CANCER_METASTASIS_SECTIONS = [
  {
    title: '소화기관암(전이암포함)',
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
      { num: '10', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '11', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '12', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '13', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '14', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    title: '간암, 담낭암, 기타담도암 및 췌장암(전이암포함)',
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
    title: '폐암(전이암포함)',
    items: [
      { num: '1', disease: '기관의 악성 신생물', code: 'C33' },
      { num: '2', disease: '기관지 및 폐의 악성 신생물', code: 'C34' },
      { num: '3', disease: '기타 및 부위불명의 호흡기 및 흉곽내기관의 악성 신생물', code: 'C39' },
      { num: '4', disease: '폐의 이차성 악성신생물', code: 'C78.0' },
      { num: '5', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' }
    ]
  },
  {
    title: '두경부암',
    items: [
      { num: '1', disease: '입술, 구강 및 인두의 악성 신생물', code: 'C00~C14' },
      { num: '2', disease: '비강 및 중이의 악성 신생물', code: 'C30' },
      { num: '3', disease: '부비동의 악성 신생물', code: 'C31' },
      { num: '4', disease: '후두의 악성 신생물', code: 'C32' },
      { num: '5', disease: '눈 및 부속기의 악성 신생물', code: 'C69' }
    ]
  },
  {
    title: '특정 소액암II(전이암포함)',
    items: [
      { num: '1', disease: '유방의 악성 신생물', code: 'C50' },
      { num: '2', disease: '자궁경부의 악성 신생물', code: 'C53' },
      { num: '3', disease: '자궁체부의 악성 신생물', code: 'C54' },
      { num: '4', disease: '자궁의 상세불명 부분의 악성 신생물', code: 'C55' },
      { num: '5', disease: '전립선의 악성 신생물', code: 'C61' },
      { num: '6', disease: '방광의 악성 신생물', code: 'C67' },
      { num: '7', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '8', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    title: '생식기암 및 비뇨기관암(자궁, 전립선, 방광제외)(전이암포함)',
    items: [
      { num: '1', disease: '외음의 악성 신생물', code: 'C51' },
      { num: '2', disease: '질의 악성 신생물', code: 'C52' },
      { num: '3', disease: '난소의 악성 신생물', code: 'C56' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 악성 신생물', code: 'C57' },
      { num: '5', disease: '태반의 악성 신생물', code: 'C58' },
      { num: '6', disease: '음경의 악성 신생물', code: 'C60' },
      { num: '7', disease: '고환의 악성 신생물', code: 'C62' },
      { num: '8', disease: '기타 및 상세불명의 남성생식기관의 악성 신생물', code: 'C63' },
      { num: '9', disease: '신우를 제외한 신장의 악성 신생물', code: 'C64' },
      { num: '10', disease: '신우의 악성 신생물', code: 'C65' },
      { num: '11', disease: '요관의 악성 신생물', code: 'C66' },
      { num: '12', disease: '기타 및 상세불명의 비뇨기관의 악성 신생물', code: 'C68' },
      { num: '13', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '14', disease: '난소의 이차성 악성 신생물', code: 'C79.6' },
      { num: '15', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    title: '3대특정고액암(전이암포함)',
    items: [
      { num: '1', disease: '심장, 종격 및 흉막의 악성 신생물', code: 'C38' },
      { num: '2', disease: '사지의 골 및 관절연골의 악성 신생물', code: 'C40' },
      { num: '3', disease: '기타 및 상세불명 부위의 골 및 관절연골의 악성 신생물', code: 'C41' },
      { num: '4', disease: '수막의 악성 신생물', code: 'C70' },
      { num: '5', disease: '뇌의 악성 신생물', code: 'C71' },
      { num: '6', disease: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성 신생물', code: 'C72' },
      { num: '7', disease: '종격의 이차성 악성신생물', code: 'C78.1' },
      { num: '8', disease: '흉막의 이차성 악성신생물', code: 'C78.2' },
      { num: '9', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '10', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' },
      { num: '11', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' }
    ]
  },
  {
    title: '혈액암',
    items: [
      {
        num: '1',
        disease: '림프, 조혈 및 관련조직의 악성 신생물',
        code: 'C81, C82, C83, C84, C85, C86, C88, C90, C91, C92, C93, C94, C95, C96',
        subItems: [
          { disease: '호지킨 림프종', code: 'C81' },
          { disease: '소포성 림프종', code: 'C82' },
          { disease: '비소포성 림프종', code: 'C83' },
          { disease: '성숙 T/NK-세포 림프종', code: 'C84' },
          { disease: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
          { disease: 'T/NK-세포 림프종의 기타 명시된 형태', code: 'C86' },
          { disease: '악성 면역증식성 질환', code: 'C88' },
          { disease: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
          { disease: '림프성 백혈병', code: 'C91' },
          { disease: '골수성 백혈병', code: 'C92' },
          { disease: '단핵구성 백혈병', code: 'C93' },
          { disease: '명시된 세포형의 기타 백혈병', code: 'C94' },
          { disease: '상세불명 세포형의 백혈병', code: 'C95' },
          { disease: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성 신생물', code: 'C96' }
        ]
      },
      { num: '2', disease: '진성 적혈구 증가증', code: 'D45' },
      { num: '3', disease: '골수 형성이상 증후군', code: 'D46' },
      { num: '4', disease: '만성 골수증식 질환', code: 'D47.1' },
      { num: '5', disease: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
      { num: '6', disease: '골수섬유증', code: 'D47.4' },
      { num: '7', disease: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  },
  {
    title: '11대특정암(전이암포함)',
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
      { num: '12', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '13', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '14', disease: '부신의 이차성 악성 신생물', code: 'C79.7' },
      { num: '15', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '16', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '17', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' },
      { num: '18', disease: '독립된(원발성) 여러 부위의 악성 신생물', code: 'C97' }
    ]
  }
];

// KB손해보험 별표118 통합전이암 분류표
export const KB_METASTASIS_SECTIONS = [
  {
    title: '소화기관전이암',
    items: [
      { num: '1', disease: '소장의 이차성 악성 신생물', code: 'C78.4' },
      { num: '2', disease: '대장 및 직장의 이차성 악성 신생물', code: 'C78.5' },
      { num: '3', disease: '위의 이차성 악성 신생물', code: 'C78.80' },
      { num: '4', disease: '비장의 이차성 악성 신생물', code: 'C78.82' },
      { num: '5', disease: '기타 소화기관의 이차성 악성 신생물', code: 'C78.88' },
      { num: '6', disease: '상세불명의 소화기관의 이차성 악성 신생물', code: 'C78.89' }
    ]
  },
  {
    title: '간전이암, 담낭전이암, 기타담도전이암 및 췌장전이암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 이차성 악성 신생물', code: 'C78.7' },
      { num: '2', disease: '췌장의 이차성 악성 신생물', code: 'C78.81' }
    ]
  },
  {
    title: '폐전이암',
    items: [
      { num: '1', disease: '폐의 이차성 악성신생물', code: 'C78.0' },
      { num: '2', disease: '기타 및 상세불명의 호흡기관의 이차성 악성 신생물', code: 'C78.3' }
    ]
  },
  {
    title: '특정소액전이암II',
    items: [
      { num: '1', disease: '방광과 기타 및 상세불명의 비뇨기관의 이차성 악성 신생물', code: 'C79.1' },
      { num: '2', disease: '유방의 이차성 악성 신생물', code: 'C79.80' }
    ]
  },
  {
    title: '생식기전이암 및 비뇨기관전이암(자궁, 전립선, 방광제외)',
    items: [
      { num: '1', disease: '신장 및 신우의 이차성 악성 신생물', code: 'C79.0' },
      { num: '2', disease: '난소의 이차성 악성 신생물', code: 'C79.6' },
      { num: '3', disease: '생식기관의 이차성 악성 신생물', code: 'C79.81' }
    ]
  },
  {
    title: '3대특정고액전이암',
    items: [
      { num: '1', disease: '종격의 이차성 악성신생물', code: 'C78.1' },
      { num: '2', disease: '흉막의 이차성 악성신생물', code: 'C78.2' },
      { num: '3', disease: '뇌 및 뇌막의 이차성 악성 신생물', code: 'C79.3' },
      { num: '4', disease: '신경계통의 기타 및 상세불명 부분의 이차성 악성 신생물', code: 'C79.4' },
      { num: '5', disease: '골 및 골수의 이차성 악성 신생물', code: 'C79.5' }
    ]
  },
  {
    title: '11대특정전이암',
    items: [
      { num: '1', disease: '림프절의 이차성 및 상세불명의 악성 신생물', code: 'C77' },
      { num: '2', disease: '후복막 및 복막의 이차성 악성 신생물', code: 'C78.6' },
      { num: '3', disease: '피부의 이차성 악성 신생물', code: 'C79.2' },
      { num: '4', disease: '부신의 이차성 악성 신생물', code: 'C79.7' },
      { num: '5', disease: '기타 명시된 부위의 이차성 악성 신생물', code: 'C79.88' },
      { num: '6', disease: '상세불명 부위의 이차성 악성 신생물', code: 'C79.9' },
      { num: '7', disease: '부위의 명시가 없는 악성 신생물', code: 'C80' }
    ]
  }
];

// 메리츠화재 통합암(전이포함)(유사암제외) 분류표 [별표13] 데이터 (5개 그룹)

export const KB_HEART_SPECIFIC1_ITEMS: KbHeartItem[] = [
  { num: '1', name: '협심증', code: 'I20' },
  { num: '2', name: '기타 급성 허혈심장질환', code: 'I24' },
  { num: '3', name: '만성 허혈심장병', code: 'I25' },
  { num: '4', name: '급성 심장막염', code: 'I30' },
  { num: '5', name: '심장막의 기타질환', code: 'I31' },
  { num: '6', name: '달리 분류된 질환에서의 심장막염', code: 'I32' },
  { num: '7', name: '급성 및 아급성 심내막염', code: 'I33' },
  { num: '8', name: '상세불명 판막의 심내막염', code: 'I38' },
  { num: '9', name: '급성 심근염', code: 'I40' },
  { num: '10', name: '달리 분류된 질환에서의 심근염', code: 'I41' },
  { num: '11', name: '발작성 빈맥', code: 'I47' },
  { num: '12', name: '심방세동 및 조동', code: 'I48' },
  { num: '13', name: '심부전', code: 'I50' }
];

export const KB_HEART_SPECIFIC2_ITEMS: KbHeartItem[] = [
  { num: '1', name: '급성 심근경색증', code: 'I21' },
  { num: '2', name: '후속 심근경색증', code: 'I22' },
  { num: '3', name: '급성 심근경색증 후 특정 현존 합병증', code: 'I23' },
  { num: '4', name: '인공소생에 성공한 심장정지', code: 'I46.0' }
];

export const KB_BRAIN_ITEMS: KbBrainTableItem[] = [
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


export const KB_SPECIFIC_CANCER2_ITEMS: KbCancerTableItem[] = [
  {
    num: '1',
    name: '뇌 및 중추신경계통의 기타부분의 악성 신생물(암)',
    code: 'C70~C72',
    subItems: [
      { name: '수막의 악성 신생물(암)', code: 'C70' },
      { name: '뇌의 악성 신생물(암)', code: 'C71' },
      { name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물(암)', code: 'C72' }
    ]
  },
  { num: '2', name: '부위의 명시가 없는 악성 신생물(암)', code: 'C80' },
  {
    num: '3',
    name: '림프, 조혈 및 관련조직의 악성신생물(암)',
    code: 'C81~C96',
    subItems: [
      { name: '호지킨림프종', code: 'C81' },
      { name: '소포성 림프종', code: 'C82' },
      { name: '비소포성 림프종', code: 'C83' },
      { name: '성숙 T/NK-세포림프종', code: 'C84' },
      { name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
      { name: 'T/NK-세포 림프종의 기타 명시된 형태', code: 'C86' },
      { name: '악성 면역증식성 질환', code: 'C88' },
      { name: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { name: '림프성 백혈병', code: 'C91' },
      { name: '골수성 백혈병', code: 'C92' },
      { name: '단핵구성 백혈병', code: 'C93' },
      { name: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { name: '상세불명 세포형의 백혈병', code: 'C95' },
      { name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물(암)', code: 'C96' }
    ]
  },
  { num: '4', name: '진성 적혈구 증가증', code: 'D45' },
  { num: '5', name: '골수 형성이상 증후군', code: 'D46' },
  { num: '6', name: '만성 골수증식 질환', code: 'D47.1' },
  { num: '7', name: '본태성(출혈성) 혈소판혈증', code: 'D47.3' },
  { num: '8', name: '골수섬유증', code: 'D47.4' },
  { num: '9', name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
];

export const KB_10HIGH_CANCER_ITEMS: KbCancerTableItem[] = [
  { num: '1', name: '식도의 악성신생물(암)', code: 'C15' },
  { num: '2', name: '췌장의 악성신생물(암)', code: 'C25' },
  {
    num: '3',
    name: '골 및 관절연골의 악성 신생물(암)',
    code: 'C40~C41',
    subItems: [
      { name: '사지의 골 및 관절연골의 악성 신생물(암)', code: 'C40' },
      { name: '기타 및 상세불명 부위의 골 및 관절연골의 악성신생물(암)', code: 'C41' }
    ]
  },
  {
    num: '4',
    name: '뇌 및 중추신경계통의 기타부분의 악성 신생물(암)',
    code: 'C70~C72',
    subItems: [
      { name: '수막의 악성 신생물(암)', code: 'C70' },
      { name: '뇌의 악성 신생물(암)', code: 'C71' },
      { name: '척수, 뇌신경 및 중추 신경계통의 기타 부분의 악성신생물(암)', code: 'C72' }
    ]
  },
  {
    num: '5',
    name: '림프, 조혈 및 관련조직의 악성신생물(암)',
    code: 'C81, C82, C83, C84, C85, C86, C88, C90, C91, C92, C93, C94, C95, C96, D47.1, D47.5',
    subItems: [
      { name: '호지킨림프종', code: 'C81' },
      { name: '소포성 림프종', code: 'C82' },
      { name: '비소포성 림프종', code: 'C83' },
      { name: '성숙 T/NK-세포림프종', code: 'C84' },
      { name: '기타 및 상세불명 유형의 비호지킨 림프종', code: 'C85' },
      { name: 'T/NK-세포 림프종의 기타 명시된 형태', code: 'C86' },
      { name: '악성 면역증식성 질환', code: 'C88' },
      { name: '다발골수종 및 악성 형질세포신생물', code: 'C90' },
      { name: '림프성 백혈병', code: 'C91' },
      { name: '골수성 백혈병', code: 'C92' },
      { name: '단핵구성 백혈병', code: 'C93' },
      { name: '명시된 세포형의 기타 백혈병', code: 'C94' },
      { name: '상세불명 세포형의 백혈병', code: 'C95' },
      { name: '림프, 조혈 및 관련 조직의 기타 및 상세불명의 악성신생물(암)', code: 'C96' },
      { name: '만성 골수증식질환', code: 'D47.1' },
      { name: '만성 호산구성 백혈병(과호산구증후군)', code: 'D47.5' }
    ]
  },
  { num: '6', name: '간 및 간내 담관의 악성 신생물(암)', code: 'C22' },
  { num: '7', name: '담낭의 악성 신생물(암)', code: 'C23' },
  { num: '8', name: '담도의 기타 및 상세불명 부분의 악성 신생물(암)', code: 'C24' },
  { num: '9', name: '기관의 악성신생물(암)', code: 'C33' },
  { num: '10', name: '기관지 및 폐의 악성신생물(암)', code: 'C34' }
];


export const KB_HEART_SPECIFIC1_SECTIONS = [
  {
    title: '[별표35] 심장질환(특정 I) 분류표',
    items: KB_HEART_SPECIFIC1_ITEMS.map(item => ({
      num: item.num,
      disease: item.name,
      code: item.code
    }))
  }
];

export const KB_HEART_SPECIFIC2_SECTIONS = [
  {
    title: '[별표36] 심장질환(특정 II) 분류표',
    items: KB_HEART_SPECIFIC2_ITEMS.map(item => ({
      num: item.num,
      disease: item.name,
      code: item.code
    }))
  }
];

export const KB_BRAIN_SECTIONS = KB_BRAIN_ITEMS.map((cat, idx) => ({
  title: cat.category,
  items: cat.items.map((i, iIdx) => ({
    num: String(iIdx + 1),
    disease: i.name,
    code: i.code
  }))
}));

export const KB_SPECIFIC_CANCER2_SECTIONS = [
  {
    title: 'KB 특정암(2) 분류표',
    items: KB_SPECIFIC_CANCER2_ITEMS.map(item => ({
      num: item.num,
      disease: item.name,
      code: item.code,
      subItems: (item as any).subItems?.map((s: any) => ({ disease: s.name || s.disease, code: s.code }))
    }))
  }
];

export const KB_10HIGH_CANCER_SECTIONS = [
  {
    title: 'KB 10대 고액암 분류표',
    items: KB_10HIGH_CANCER_ITEMS.map(item => ({
      num: item.num,
      disease: item.name,
      code: item.code,
      subItems: (item as any).subItems?.map((s: any) => ({ disease: s.name || s.disease, code: s.code }))
    }))
  }
];


export const KB_INTEGRATED_TREATMENT_ITEMS = [
  {
    category: '질병통합치료(검사)',
    name: '질병MRI검사(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
    luxury: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
  },
  {
    category: '질병통합치료(검사)',
    name: '질병CT검사(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    luxury: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
  },
  {
    category: '질병통합치료(검사)(상해포함)',
    name: '양전자단층촬영(PET)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    luxury: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
  },
  {
    category: '질병통합치료(수술)',
    name: '질병 1종 수술',
    method: '수술 1회당',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
    luxury: { under1yr: '10만원', over1yr: '20만원', renew: '20만원' },
  },
  {
    category: '질병통합치료(수술)',
    name: '질병 2종 수술',
    method: '수술 1회당',
    practical: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
    basic: { under1yr: '10만원', over1yr: '20만원', renew: '20만원' },
    luxury: { under1yr: '15만원', over1yr: '30만원', renew: '30만원' },
  },
  {
    category: '질병통합치료(수술)',
    name: '질병 3종 수술',
    method: '수술 1회당',
    practical: { under1yr: '15만원', over1yr: '30만원', renew: '30만원' },
    basic: { under1yr: '25만원', over1yr: '50만원', renew: '50만원' },
    luxury: { under1yr: '50만원', over1yr: '100만원', renew: '100만원' },
  },
  {
    category: '질병통합치료(수술)',
    name: '질병 4종 수술',
    method: '수술 1회당',
    practical: { under1yr: '100만원', over1yr: '200만원', renew: '200만원' },
    basic: { under1yr: '150만원', over1yr: '300만원', renew: '300만원' },
    luxury: { under1yr: '250만원', over1yr: '500만원', renew: '500만원' },
  },
  {
    category: '질병통합치료(수술)',
    name: '질병 5종 수술',
    method: '수술 1회당',
    practical: { under1yr: '150만원', over1yr: '300만원', renew: '300만원' },
    basic: { under1yr: '250만원', over1yr: '500만원', renew: '500만원' },
    luxury: { under1yr: '350만원', over1yr: '700만원', renew: '700만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '질병특정시술치료(흡인,천자,절개,배액,배농)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    luxury: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '질병특정시술치료(신경차단술)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    luxury: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '질병특정시술치료(도수정복술)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    basic: { under1yr: '2만 5천원', over1yr: '5만원', renew: '5만원' },
    luxury: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '질병특정시술치료(기타시술)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '5천원', over1yr: '1만원', renew: '1만원' },
    basic: { under1yr: '1만원', over1yr: '2만원', renew: '2만원' },
    luxury: { under1yr: '1만원', over1yr: '2만원', renew: '2만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '질병특정시술치료(단순창상봉합술)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
    basic: { under1yr: '5만원', over1yr: '10만원', renew: '10만원' },
    luxury: { under1yr: '10만원', over1yr: '20만원', renew: '20만원' },
  },
  {
    category: '질병통합치료(주요치료)',
    name: '에크모치료(체외순환막형산화요법)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '250만원', over1yr: '500만원', renew: '500만원' },
    basic: { under1yr: '375만원', over1yr: '750만원', renew: '750만원' },
    luxury: { under1yr: '500만원', over1yr: '1,000만원', renew: '1,000만원' },
  },
  {
    category: '질병통합치료(주요치료)(상해포함)',
    name: '지속적신대체요법(CRRT)(급여)',
    method: '연간 1회한',
    practical: { under1yr: '150만원', over1yr: '300만원', renew: '300만원' },
    basic: { under1yr: '200만원', over1yr: '400만원', renew: '400만원' },
    luxury: { under1yr: '250만원', over1yr: '500만원', renew: '500만원' },
  },
  {
    category: '질병통합치료(주요치료)(상해포함)',
    name: '인공호흡기(12시간초과)치료(급여)',
    method: '연간 1회한',
    practical: { under1yr: '50만원', over1yr: '100만원', renew: '100만원' },
    basic: { under1yr: '75만원', over1yr: '150만원', renew: '150만원' },
    luxury: { under1yr: '100만원', over1yr: '200만원', renew: '200만원' },
  },
  {
    category: '질병통합치료(주요치료)(상해포함)',
    name: '저체온요법치료(급여)',
    method: '연간 1회한',
    practical: { under1yr: '25만원', over1yr: '50만원', renew: '50만원' },
    basic: { under1yr: '37만 5천원', over1yr: '75만원', renew: '75만원' },
    luxury: { under1yr: '50만원', over1yr: '100만원', renew: '100만원' },
  },
  {
    category: '질병통합치료(주요치료)(상해포함)',
    name: '종합병원 전신마취치료(급여)(6시간이상)',
    method: '치료 1회당',
    practical: { under1yr: '150만원', over1yr: '300만원', renew: '300만원' },
    basic: { under1yr: '200만원', over1yr: '400만원', renew: '400만원' },
    luxury: { under1yr: '250만원', over1yr: '500만원', renew: '500만원' },
  },
];

export const KB_INTEGRATED_TREATMENT_SECTIONS = (() => {
  const map: Record<string, any[]> = {};
  KB_INTEGRATED_TREATMENT_ITEMS.forEach((item, idx) => {
    if (!map[item.category]) map[item.category] = [];
    map[item.category].push({
      num: String(idx + 1),
      disease: `${item.name} (${item.method}) [실속: ${item.practical.over1yr} | 기본: ${item.basic.over1yr} | 고급: ${item.luxury.over1yr}]`,
      code: '통합치료'
    });
  });
  return Object.keys(map).map(cat => ({
    title: cat,
    items: map[cat]
  }));
})();

// KB손해보험 1-5종 수술 분류표 [별표55-1] 데이터
export const KB_SURGERY_1_5_SECTIONS = [
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
    title: '근골(筋骨)의 수술 [발정술(拔釘術) 등 내고정물 제거술은 제외함] [치(齒)·치은·치근(齒根)·치조골(齒槽骨)의 처치, 임플란트(Implant) 등 치과 처치 및 수술에 수반하는 것은 제외함]',
    group: '일반수술',
    items: [
      { num: '5', disease: '골(骨) 이식수술', code: '2종' },
      { num: '6', disease: '두개골(頭蓋骨, cranium) 관혈수술 [비골(鼻骨) · 비중격(鼻中隔) · 상악골(上顎骨) · 하악골(下顎骨) · 악관절(顎關節)은 제외함]', code: '3종' },
      { num: '7', disease: '비골(鼻骨) 수술 [비중격 만곡증(彎曲症)수술, 수면중 무호흡 수술은 제외]', code: '1종' },
      { num: '8', disease: '상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관혈수술', code: '2종' },
      { num: '9', disease: '척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술', code: '3종' },
      { num: '10', disease: '쇄골(鎖骨), 견갑골(肩甲骨), 늑골(肋骨), 흉골(胸骨) 관혈수술', code: '2종' },
      { num: '11-1', disease: '손가락, 발가락 절단수술 [골, 관절의 이단(離斷)에 수반하는것, 다지증 제외]', code: '1종' },
      { num: '11-2', disease: '기타 사지(四肢)절단수술 [다지증에 대한 절단수술은 제외함]', code: '3종' },
      { num: '12', disease: '절단(切斷)된 사지(四肢)재접합수술(再結合手術) [골, 관절의 이단(離斷)에 수반하는것]', code: '3종' },
      { num: '13-1', disease: '손가락, 발가락의 골 및 관절 관혈수술', code: '1종' },
      { num: '13-2', disease: '기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술', code: '2종' },
      { num: '14', disease: '근(筋), 건(腱), 인대(韌帶), 연골(軟骨) 관혈수술', code: '1종' }
    ]
  },
  {
    category: '3. 호흡기계, 흉부(胸部)의 수술',
    title: '호흡기계, 흉부(胸部)의 수술',
    group: '일반수술',
    items: [
      { num: '15', disease: '만성부비동염(慢性副鼻腔炎) 근본수술(根本手術)', code: '1종' },
      { num: '16', disease: '후두(喉頭) 관혈적 절제수술', code: '3종' },
      { num: '17', disease: '편도, 아데노이드 절제수술', code: '1종' },
      { num: '18', disease: '기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜) 관혈수술 [개흉술(開胸術, Thoracotomy)을 수반하는 것]', code: '4종' },
      { num: '19', disease: '폐장(肺臟) 이식수술 [수용자(受容者)에 한함]', code: '5종' },
      { num: '20', disease: '흉각(胸郭) 형성수술(形成手術)', code: '3종' },
      { num: '21', disease: '종격종양(縱隔腫瘍), 흉선 절제수술 [개흉술을 수반하는 것]', code: '4종' }
    ]
  },
  {
    category: '4. 순환기계, 비장(脾臟)의 수술',
    title: '순환기계, 비장(脾臟)의 수술',
    group: '일반수술',
    items: [
      { num: '22', disease: '혈관관혈수술(하지정맥류 및 손가락 · 발가락은 제외)', code: '3종' },
      { num: '23', disease: '하지 정맥류(靜脈瘤) 근본수술 및 손가락 · 발가락 혈관관혈수술', code: '1종' },
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
      { num: '34', disease: '기타의 위 · 식도 관혈수술 [개흉술, 개복술을 수반하는 것]', code: '3종' },
      { num: '35', disease: '간장(肝臟), 췌장(膵臟) 관혈수술 [개복술을 수반하는 것]', code: '4종' },
      { num: '36', disease: '담낭(膽囊), 담도(膽道) 관혈수술 [개복술을 수반하는 것]', code: '3종' },
      { num: '37', disease: '간장 이식수술 [수용자에 한함, 개복술을 수반하는 것]', code: '5종' },
      { num: '38', disease: '췌장 이식수술 [개복술을 수반해야 하며 수용자에 한함] (단, 랑게르한스 소도(Islet of Langerhans)세포 이식수술은 제외)', code: '5종' },
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
      { num: '45', disease: '신장(腎臟), 방광(膀胱), 신우(腎盂), 요관(尿管)관혈수술 [개복술을 수반하는 것, 경요도적 조작 및 방광류 · 요실금 교정수술은 제외]', code: '4종' },
      { num: '46', disease: '요도 관혈수술 [경요도적 조작은 제외함]', code: '2종' },
      { num: '47', disease: '방광류 · 요실금 교정수술', code: '1종' },
      { num: '48', disease: '신장(腎臟) 이식수술(移植手術) [수용자에 한함]', code: '5종' },
      { num: '49', disease: '음경(陰頸) 절단수술 (포경수술 및 음경이물제거수술은 제외)', code: '3종' },
      { num: '50', disease: '고환(睾丸), 부고환(副睾丸), 정관(精管), 정색(精索), 정낭(精囊)관혈수술, 전립선(前立腺)관혈수술', code: '2종' },
      { num: '51', disease: '음낭관혈수술', code: '1종' },
      { num: '52', disease: '자궁, 난소, 난관 관혈수술 (단, 제왕절개만출술 및 경질적인 조작은 제외)', code: '2종' },
      { num: '53', disease: '경질적 자궁, 난소, 난관 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '1종' },
      { num: '54', disease: '제왕절개만출술(帝王切開滿出術)', code: '1종' },
      { num: '55', disease: '질탈(膣脫)근본수술', code: '1종' }
    ]
  },
  {
    category: '7. 내분비계의 수술',
    title: '내분비계의 수술',
    group: '일반수술',
    items: [
      { num: '56', disease: '뇌하수체종양(腦下垂體腫瘍) 절제수술', code: '5종' },
      { num: '57', disease: '갑상선(甲狀腺) · 부갑상선(副甲狀腺) 관혈수술', code: '3종' },
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
      { num: '64', disease: '누소관(淚小管)형성수술(누관튜브삽입술 포함)', code: '1종' },
      { num: '65', disease: '누낭비강(淚囊鼻腔) 관혈수술', code: '2종' },
      { num: '66', disease: '결막낭(結膜囊) 형성수술', code: '2종' },
      { num: '67', disease: '각막, 결막, 공막 봉합수술', code: '1종' },
      { num: '68', disease: '각막, 공막 이식수술', code: '2종' },
      { num: '69', disease: '전방(前房), 홍채(虹彩), 유리체(玻璃體) 관혈수술', code: '2종' },
      { num: '70', disease: '녹내장(綠內障) 관혈수술', code: '3종' },
      { num: '71', disease: '백내장(白內障), 수정체(水晶體) 관혈수술', code: '1종' },
      { num: '72', disease: '망막박리(網膜剝離) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '2종' },
      { num: '73', disease: '레이저(Laser)에 의한 안구(眼球) 수술 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.] [시력회복 및 시력개선목적의 수술은 제외]', code: '1종' },
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
      { num: '88-1', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) · 고주파 전극 등에 의한 경피적 수술 - 뇌, 심장 [수술개시일부터 60일 이내 2회 이상의 수술은 1회의 수술로 간주하여 1회의 수술보험금을 지급하며 이후 동일한 기준으로 반복 지급이 가능합니다.]', code: '3종' },
      { num: '88-2', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) · 고주파 전극 등에 의한 경피적 수술 - 후두, 흉부장기(심장 제외), 복부장기(비뇨, 생식기 제외), 척추, 사지관절(손가락, 발가락은 제외) * 단, 대장의 용종 또는 대장의 양성신생물의 내시경적 절제술은 1종으로 분류합니다.', code: '2종' },
      { num: '88-3', disease: '내시경(Fiberscope)에 의한 내시경 수술 또는 카테터(Catheter) · 고주파 전극 등에 의한 경피적 수술 - 비뇨, 생식기 및 손가락, 발가락', code: '1종' }
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

// KB손해보험 21대 질병 분류표 [별표] 데이터

export const KB_SURGERY_21_SECTIONS = [
  {
    title: '당뇨병질환',
    items: [
      { num: '1', disease: '인슐린-의존당뇨병', code: 'E10' },
      { num: '2', disease: '인슐린-비의존당뇨병', code: 'E11' },
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' },
      { num: '6', disease: '수막구균성 심장질환', code: 'A39.5' },
      { num: '7', disease: '칸디다심내막염', code: 'B37.6' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(일차성)고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장질환', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장질환', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간 질 환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' },
      { num: '3', disease: '거대세포바이러스간염', code: 'B25.1' },
      { num: '4', disease: '톡소포자충 간염', code: 'B58.1' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25 ~ K27' },
      { num: '2', disease: '십이지장궤양', code: 'K25 ~ K27' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K25 ~ K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07, E89.0' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '5', disease: '갑상선이상성 안구돌출증', code: 'H06.2' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하기도 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40 ~ J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40 ~ J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40 ~ J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '폐 렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '폐렴이 합병된 홍역', code: 'B05.2' },
      { num: '10', disease: '거대세포바이러스폐렴', code: 'B25.0' },
      { num: '11', disease: '수두폐렴', code: 'B01.2' },
      { num: '12', disease: '폐 톡소포자충증', code: 'B58.3' }
    ]
  },
  {
    title: '관 절 염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05 ~ M14' },
      { num: '3', disease: '관절증', code: 'M15 ~ M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20 ~ M25' },
      { num: '5', disease: '류마티스 폐질환', code: 'J99.0' }
    ]
  },
  {
    title: '백 내 장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '녹 내 장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결 핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' },
      { num: '3', disease: '척추의 결핵', code: 'M49.0' },
      { num: '4', disease: '뼈의 결핵', code: 'M90.0' },
      { num: '5', disease: '결핵성 방광염', code: 'N33.0' },
      { num: '6', disease: '결핵복막염', code: 'K67.3' },
      { num: '7', disease: '장, 복막 및 장간막림프절의 결핵성 장애', code: 'K93.0' }
    ]
  },
  {
    title: '신 부 전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '남생식기관의 질환 (남성 불임 제외)', code: 'N40 ~ N45, N47 ~ N51' },
      { num: '2', disease: '여성골반내 기관의 염증성 질환', code: 'N70 ~ N77' },
      { num: '3', disease: '여성 생식기관의 비염증성 장애 (습관유산자 제외), (여성 불임 제외) (인공 수정과 관련된 합병증 제외)', code: 'N80 ~ N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' },
      { num: '5', disease: '편모충성 전립선염', code: 'A59.01' },
      { num: '6', disease: '전립선의 결핵', code: 'A18.13' },
      { num: '7', disease: '기타 남성 생식기관의 결핵', code: 'A18.14' },
      { num: '8', disease: '볼거리고환염', code: 'B26.0' },
      { num: '9', disease: '자궁경부의 결핵', code: 'A18.15' },
      { num: '10', disease: '결핵성 여성 골반 염증성 질환', code: 'A18.16' }
    ]
  },
  {
    title: '담 석 증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편 도 염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축 농 증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '치 핵',
    items: [
      { num: '1', disease: '치핵 (포함: 치질, 항문 및 직장의 정맥류 / 제외: 출산 및 산후기 합병증(O87.2), 임신 합병증(O22.4))', code: 'I84' }
    ]
  }
];

// KB손해보험 101대 질병 분류표 [별표52] 데이터
export const KB_SURGERY_101_SECTIONS = [
  // 별표 52-1 10대질병 분류표
  {
    title: '[10대질병] 당뇨병질환',
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
    title: '[10대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '[A39.5+:수막구균성심장질환 (I32.0*,I39.8*,I41.0*,I52.0*)]', code: 'A39.5+' },
      { num: '7', disease: '[B37.6+:칸디다심내막염(I39.8*)]', code: 'B37.6+' }
    ]
  },
  {
    title: '[10대질병] 고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성)고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    title: '[10대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[10대질병] 간 질 환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '[B25.1+:대세포바이러스간염(K77.0*)]', code: 'B25.1+' },
      { num: '4', disease: '[B58.1+:톡소포자충간염(K77.0*)]', code: 'B58.1+' }
    ]
  },
  {
    title: '[10대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[10대질병] 기관지·폐의 특정질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐색성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' }
    ]
  },
  {
    title: '[10대질병] 만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40~J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40~J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40~J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[10대질병] 신 부 전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[10대질병] 수막의 양성종양',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },

  // 별표 52-2 27대질병 분류표
  {
    title: '[27대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '[M01.1*:결핵관절염(A18.01+)]', code: 'M01.1*' },
      { num: '3', disease: '[M49.0*:척추의결핵(A18.00+)]', code: 'M49.0*' },
      { num: '4', disease: '[M90.0*:뼈의결핵(A18.02+)]', code: 'M90.0*' },
      { num: '5', disease: '[N33.0*:결핵성방광염(A18.11+)]', code: 'N33.0*' },
      { num: '6', disease: '[N74.0*:자궁경부의결핵감염(A18.15+)]', code: 'N74.0*' },
      { num: '7', disease: '[N74.1*:여성결핵성골반염증질환(A18.16+)]', code: 'N74.1*' },
      { num: '8', disease: '[K67.3*:결핵성복막염(A18.30+)]', code: 'K67.3*' },
      { num: '9', disease: '[K93.0*:장, 복막및장간막림프절의 결핵성장애(A18.3-+)]', code: 'K93.0*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[27대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '[H06.2*:갑상선이상성안구돌출(E05-+)]', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[27대질병] 안면 신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[27대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[27대질병] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },
  {
    title: '[27대질병] 폐 렴',
    items: [
      { num: '1', disease: '재향군인병', code: 'A48.1' },
      { num: '2', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '3', disease: '폐렴연쇄구균에 의한 폐렴', code: 'J13' },
      { num: '4', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '5', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '6', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '7', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '8', disease: '[B01.2+:수두폐렴(J17.1*)]', code: 'B01.2+' },
      { num: '9', disease: '[B05.2+:폐렴이합병된홍역(J17.1*)]', code: 'B05.2+' },
      { num: '10', disease: '[B25.0+:거대세포바이러스폐렴(J17.1*)]', code: 'B25.0+' },
      { num: '11', disease: '[B58.3+:폐톡소포자충증(J17.3*)]', code: 'B58.3+' },
      { num: '12', disease: '상세불명 병원체의 폐렴', code: 'J18' }
    ]
  },
  {
    title: '[27대질병] 특정 호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[27대질병] 폐질환',
    items: [
      { num: '1', disease: '폐 및 종격의 농양', code: 'J85' },
      { num: '2', disease: '농흉', code: 'J86' },
      { num: '3', disease: '달리 분류되지 않은 흉막삼출액', code: 'J90' },
      { num: '4', disease: '달리 분류된 병태에서의 흉막삼출액', code: 'J91' },
      { num: '5', disease: '흉막판', code: 'J92' },
      { num: '6', disease: '기흉', code: 'J93' },
      { num: '7', disease: '기타 흉막의 병태', code: 'J94' }
    ]
  },
  {
    title: '[27대질병] 위·십이지장 궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
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
    title: '[27대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
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
    title: '[27대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄구균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[27대질병] 부갑상선질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[27대질병] 다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[27대질병] 뇌하수체질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[27대질병] 뇌 및 척수의 염증성질환',
    items: [
      { num: '1', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '2', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '3', disease: '[A85.1+:아데노바이러스뇌염(G05.1*)]', code: 'A85.1+' },
      { num: '4', disease: '[A85.0+:엔테로바이러스뇌염(G05.1*)]', code: 'A85.0+' },
      { num: '5', disease: '[B00.4+:헤르페스바이러스뇌염(G05.1*)]', code: 'B00.4+' },
      { num: '6', disease: '[B05.0+:뇌염이 합병된 홍역(G05.1*)]', code: 'B05.0+' },
      { num: '7', disease: '[B26.2+:볼거리뇌염(G05.1*)]', code: 'B26.2+' },
      { num: '8', disease: '[B01.1+:수두뇌염(G05.1*)]', code: 'B01.1+' },
      { num: '9', disease: '[B02.0+:대상포진뇌염(G05.1*)]', code: 'B02.0+' },
      { num: '10', disease: '두개내 및 척수내 농양 및 육아종', code: 'G06' },
      { num: '11', disease: '달리 분류된 질환에서의 두개내 및 척수내 농양 및 육아종', code: 'G07' },
      { num: '12', disease: '[A06.6+:아메바성 뇌농양(G07*)]', code: 'A06.6+' },
      { num: '13', disease: '두개내 및 척수내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '14', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[27대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[27대질병] 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증 지속상태', code: 'G41' }
    ]
  },
  {
    title: '[27대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[27대질병] 수막염',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '[A39.0+:수막구균수막염(G01*)]', code: 'A39.0+' },
      { num: '4', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '5', disease: '[A87.1+:아데노바이러스수막염(G02.0*)]', code: 'A87.1+' },
      { num: '6', disease: '[A87.0+:엔테로바이러스수막염(G02.0*)]', code: 'A87.0+' },
      { num: '7', disease: '[B00.3+:헤르페스바이러스수막염(G02.0*)]', code: 'B00.3+' },
      { num: '8', disease: '[B05.1+:수막염이 합병된 홍역(G02.0*)]', code: 'B05.1+' },
      { num: '9', disease: '[B26.1+:볼거리수막염(G02.0*)]', code: 'B26.1+' },
      { num: '10', disease: '[B01.0+:수두수막염(G02.0*)]', code: 'B01.0+' },
      { num: '11', disease: '[B02.1+:대상포진수막염(G02.0*)]', code: 'B02.1+' },
      { num: '12', disease: '[B37.5+:칸디다수막염(G02.1*)]', code: 'B37.5+' },
      { num: '13', disease: '[B38.4+:콕시디오이데스진균수막염(G02.1*)]', code: 'B38.4+' },
      { num: '14', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' }
    ]
  },
  {
    title: '[27대질병] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염 증후군', code: 'N00' },
      { num: '2', disease: '급성 진행성 신염 증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염 증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염 증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의 사구체 장애', code: 'N08' },
      { num: '10', disease: '[당뇨병에서의사구체장애(N08.3)제외]', code: '(N08.3제외)' }
    ]
  },
  {
    title: '[27대질병] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질 신장염', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질 신장염', code: 'N11' },
      { num: '3', disease: '급성 또는 만성으로 명시되지 않은 세뇨관-간질 신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속유발 세뇨관-간질 및 세뇨관병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질 질환', code: 'N15' },
      { num: '7', disease: '달리 분류된 질환에서의 신세뇨관-간질 장애', code: 'N16' }
    ]
  },
  {
    title: '[27대질병] 신장 및 요관의 기타장애',
    items: [
      { num: '1', disease: '세뇨관 기능 손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장 위축', code: 'N26' },
      { num: '3', disease: '원인미상의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[27대질병] 하부호흡계통 및 흉각의 양성종양',
    items: [
      { num: '1', disease: '기관의 양성 신생물', code: 'D14.2' },
      { num: '2', disease: '기관지 및 폐의 양성 신생물', code: 'D14.3' },
      { num: '3', disease: '상세불명의 호흡계통의 양성 신생물', code: 'D14.4' },
      { num: '4', disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[27대질병] 뇌 및 중추신경계통의 양성종양',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[27대질병] 갑상선 및 내분비선의 양성종양',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },

  // 별표 52-3 21대질병 분류표
  {
    title: '[21대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[21대질병] 급성췌장염',
    items: [
      { num: '1', disease: '급성췌장염', code: 'K85' }
    ]
  },
  {
    title: '[21대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리분류된질환에서의당낭, 당도및췌장의장애', code: 'K87' },
      { num: '3', disease: '[B25.2+:거대세포바이러스췌장염(K87.1*)]', code: 'B25.2+' },
      { num: '4', disease: '[B26.3+:볼거리췌장염(K87.1*)]', code: 'B26.3+' }
    ]
  },
  {
    title: '[21대질병] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[21대질병] 비감염성장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[21대질병] 비장질환',
    items: [
      { num: '1', disease: '비장의질환', code: 'D73' }
    ]
  },
  {
    title: '[21대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[21대질병] 중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[21대질병] 손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '[21대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '[손목터널증후군(G56.0) 제외]', code: '(G56.0제외)' },
      { num: '3', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '4', disease: '기타 단일신경병증', code: 'G58' },
      { num: '5', disease: '달리 분류된 질환에서의 기타 단일신경병증', code: 'G59.8' }
    ]
  },
  {
    title: '[21대질병] 마비',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[21대질병] 척추변형',
    items: [
      { num: '1', disease: '척추후만증 및 척추전만증', code: 'M40' },
      { num: '2', disease: '척추측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[21대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[21대질병] 추간판장애',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[21대질병] 전신결합조직 장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' },
      { num: '3', disease: '전신홍반루푸스', code: 'M32' },
      { num: '4', disease: '[기관또는계통침범을동반한전신홍반루푸스(M32.1)제외]', code: '(M32.1제외)' },
      { num: '5', disease: '피부다발근염', code: 'M33' },
      { num: '6', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '[21대질병] 유방의장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[21대질병] 난소 및 난관의 질환',
    items: [
      { num: '1', disease: '난관염 및 난소염', code: 'N70' },
      { num: '2', disease: '난소, 난관 및 넓은인대의 비염증성 장애', code: 'N83' }
    ]
  },
  {
    title: '[21대질병] 간·담관·췌장의 양성종양',
    items: [
      { num: '1', disease: '간의양성신생물', code: 'D13.4' },
      { num: '2', disease: '간외담관의 양성 신생물', code: 'D13.5' },
      { num: '3', disease: '췌장의 양성 신생물', code: 'D13.6' },
      { num: '4', disease: '내분비췌장의 양성 신생물', code: 'D13.7' }
    ]
  },
  {
    title: '[21대질병] 골 및 관절연골의 양성종양',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[21대질병] 유방의 양성종양',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[21대질병] 난소의 양성종양',
    items: [
      { num: '1', disease: '난소의 양성 신생물', code: 'D27' }
    ]
  },

  // 별표 52-4 41대질병 분류표
  {
    title: '[41대질병] 관절염 및 다발관절병증',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00~M03' },
      { num: '2', disease: '[결핵관절염(M01.1)제외]', code: '(M01.1제외)' },
      { num: '3', disease: '염증성 다발관절병증', code: 'M05~M14' },
      { num: '4', disease: '[당뇨병성관절병증(M14.2)제외]', code: '(M14.2제외)' },
      { num: '5', disease: '[J99.0*:류마티스폐질환(M05.1+)]', code: 'J99.0*' },
      { num: '6', disease: '[M07.0*:원위지골간 건선관절병증(L40.5+)]', code: 'L40.5+' },
      { num: '7', disease: '[M09.0*:건선에서의 연소성 관절염(L40.5+)]', code: 'L40.5+' }
    ]
  },
  {
    title: '[41대질병] 관절증',
    items: [
      { num: '1', disease: '다발관절증', code: 'M15' },
      { num: '2', disease: '고관절증', code: 'M16' },
      { num: '3', disease: '무릎관절증', code: 'M17' },
      { num: '4', disease: '제1수근중수관절의 관절증', code: 'M18' },
      { num: '5', disease: '기타 관절증', code: 'M19' }
    ]
  },
  {
    title: '[41대질병] 관절장애',
    items: [
      { num: '1', disease: '무릎뼈의 장애', code: 'M22' },
      { num: '2', disease: '무릎의 내부장애', code: 'M23' },
      { num: '3', disease: '기타 특정 관절장애', code: 'M24' },
      { num: '4', disease: '달리 분류되지 않은 기타 관절장애', code: 'M25' }
    ]
  },
  {
    title: '[41대질병] 누적 외상성 질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경추상완증후군', code: 'M53.1' },
      { num: '3', disease: '근육 장애', code: 'M60~M63' },
      { num: '4', disease: '윤활막 및 힘줄장애', code: 'M65~M68' },
      { num: '5', disease: '기타 연조직장애', code: 'M70~M79 (M74,M78제외)' }
    ]
  },
  {
    title: '[41대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[41대질병] 눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막,각막,홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '맥락막 및 망막의 장애', code: 'H30~H36' },
      { num: '3', disease: '[고혈압성망막병증(H35.02)제외]', code: '(H35.02 제외)' },
      { num: '4', disease: '[황반 및 후극부의 변성(H35.3) 제외]', code: '(H35.3제외)' },
      { num: '5', disease: '[당뇨병성망막병증(H36.0)제외]', code: '(H36.0제외)' }
    ]
  },
  {
    title: '[41대질병] 시신경 및 시각로의 장애',
    items: [
      { num: '1', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[41대질병] 유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '[41대질병] 중이염',
    items: [
      { num: '1', disease: '비화농성 중이염', code: 'H65' },
      { num: '2', disease: '화농성 및 상세불명의 중이염', code: 'H66' },
      { num: '3', disease: '달리 분류된 질환에서의 중이염', code: 'H67' }
    ]
  },
  {
    title: '[41대질병] 중이 및 유돌의 질환',
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
    title: '[41대질병] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[41대질병] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[41대질병] 통풍',
    items: [
      { num: '1', disease: '통풍', code: 'M10' }
    ]
  },
  {
    title: '[41대질병] 사지 후천변형',
    items: [
      { num: '1', disease: '손가락 및 발가락의 후천변형', code: 'M20' },
      { num: '2', disease: '사지의 기타 후천변형', code: 'M21' }
    ]
  },
  {
    title: '[41대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' }
    ]
  },
  {
    title: '[41대질병] 뼈의병증',
    items: [
      { num: '1', disease: '골수염', code: 'M86' },
      { num: '2', disease: '골괴사', code: 'M87' },
      { num: '3', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' },
      { num: '4', disease: '뼈의 기타 장애', code: 'M89' }
    ]
  },
  {
    title: '[41대질병] 연골병증',
    items: [
      { num: '1', disease: '고관절 및 골반의 연소성 골연골증', code: 'M91' },
      { num: '2', disease: '기타 연소성 골연골증', code: 'M92' },
      { num: '3', disease: '기타 골연골병증', code: 'M93' },
      { num: '4', disease: '연골의 기타 장애', code: 'M94' }
    ]
  },
  {
    title: '[41대질병] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[41대질병] 위십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[41대질병] 담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타 질환', code: 'K82' },
      { num: '3', disease: '담도의 기타 질환', code: 'K83' }
    ]
  },
  {
    title: '[41대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[41대질병] 복막의 질환',
    items: [
      { num: '1', disease: '복막염', code: 'K65' },
      { num: '2', disease: '복막의 기타 장애', code: 'K66' },
      { num: '3', disease: '달리 분류된 감염성 질환에서의 복막의 장애', code: 'K67' },
      { num: '4', disease: '[결핵성복막염(K67.3)제외]', code: '(K67.3 제외)' }
    ]
  },
  {
    title: '[41대질병] 사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[41대질병] 특정부위의 탈장',
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
    title: '[41대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[41대질병] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[41대질병] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[41대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 앨러지성 비염', code: 'J30' },
      { num: '2', disease: '만성 비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타 장애', code: 'J34' }
    ]
  },
  {
    title: '[41대질병] 인후부위특정 질환',
    items: [
      { num: '1', disease: '편도주위농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타질환', code: 'J39' }
    ]
  },
  {
    title: '[41대질병] 방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[41대질병] 비뇨계통의 기타질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '[결핵성방광염(N33.0)제외]', code: '(N33.0제외)' },
      { num: '6', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '7', disease: '비뇨계통의 기타 장애', code: 'N39' },
      { num: '8', disease: '[스트레스요실금(N39.3)제외]', code: '(N39.3제외)' },
      { num: '9', disease: '[기타명시된요실금(N39.4)제외]', code: '(N39.4제외)' }
    ]
  },
  {
    title: '[41대질병] 전립선 질환',
    items: [
      { num: '1', disease: '전립선증식증', code: 'N40' },
      { num: '2', disease: '전립선의 염증성 질환', code: 'N41' },
      { num: '3', disease: '전립선의 기타 장애', code: 'N42' }
    ]
  },
  {
    title: '[41대질병] 남성 생식기관의 질환',
    items: [
      { num: '1', disease: '음낭수종 및 정액류', code: 'N43' },
      { num: '2', disease: '고환의 염전', code: 'N44' },
      { num: '3', disease: '고환염 및 부고환염', code: 'N45' }
    ]
  },
  {
    title: '[41대질병] 여성 골반내기관의 염증성 질환',
    items: [
      { num: '1', disease: '자궁경부를 제외한 자궁의 염증성 질환', code: 'N71' },
      { num: '2', disease: '자궁경부의 염증성 질환', code: 'N72' },
      { num: '3', disease: '기타 여성골반염증질환', code: 'N73' },
      { num: '4', disease: '달리 분류된 질환에서의 여성골반염증장애', code: 'N74' },
      { num: '5', disease: '[자궁경부의결핵감염(N74.0)제외]', code: '(N74.0제외)' },
      { num: '6', disease: '[여성결핵성골반염증질환(N74.1)제외]', code: '(N74.1제외)' },
      { num: '7', disease: '바르톨린선의 질환', code: 'N75' },
      { num: '8', disease: '질 및 외음부의 기타 염증', code: 'N76' },
      { num: '9', disease: '달리 분류된 질환에서의 외음질의 궤양 및 염증', code: 'N77' }
    ]
  },
  {
    title: '[41대질병] 여성생식관의 비염증성 질환',
    items: [
      { num: '1', disease: '자궁내막증', code: 'N80' },
      { num: '2', disease: '여성생식기탈출', code: 'N81' },
      { num: '3', disease: '여성생식관을 침범한 누공', code: 'N82' },
      { num: '4', disease: '여성생식관의 폴립', code: 'N84' },
      { num: '5', disease: '자궁경부를 제외한 자궁의 기타 비염증성 장애', code: 'N85' },
      { num: '6', disease: '자궁경부의 미란 및 외반', code: 'N86' },
      { num: '7', disease: '자궁경부의 이형성', code: 'N87' },
      { num: '8', disease: '자궁경부의 기타 비염증성 장애', code: 'N88' },
      { num: '9', disease: '질의 기타 비염증성 장애', code: 'N89' },
      { num: '10', disease: '외음부 및 회음부의 기타 비염증성 장애', code: 'N90' },
      { num: '11', disease: '무월경,소량및희발월경', code: 'N91' },
      { num: '12', disease: '과다,빈발및불규칙월경', code: 'N92' },
      { num: '13', disease: '기타 이상 자궁 및 질 출혈', code: 'N93' },
      { num: '14', disease: '여성생식기관 및 월경주기와 관련된 통증 및 기타병태', code: 'N94' },
      { num: '15', disease: '폐경 및 기타 폐경전후 장애', code: 'N95' }
    ]
  },
  {
    title: '[41대질병] 소화계통의 양성종양',
    items: [
      { num: '1', disease: '식도의 양성 신생물', code: 'D13.0' },
      { num: '2', disease: '위의 양성 신생물', code: 'D13.1' },
      { num: '3', disease: '십이지장의 양성 신생물', code: 'D13.2' },
      { num: '4', disease: '기타 및 상세불명 부분 소장의 양성 신생물', code: 'D13.3' },
      { num: '5', disease: '부위불명의 소화계통의 양성 신생물', code: 'D13.9' }
    ]
  },
  {
    title: '[41대질병] 상부호흡계통의 양성종양',
    items: [
      { num: '1', disease: '중이, 비강 및 부비동의 양성 신생물', code: 'D14.0' },
      { num: '2', disease: '후두의 양성 신생물', code: 'D14.1' }
    ]
  },
  {
    title: '[41대질병] 조직의 양성종양',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[41대질병] 생식기 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '4', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[41대질병] 비뇨기관의 양성종양',
    items: [
      { num: '1', disease: '비뇨기관의 양성 신생물', code: 'D30' }
    ]
  },
  {
    title: '[41대질병] 눈의 양성종양',
    items: [
      { num: '1', disease: '각막의 양성 신생물', code: 'D31.1' },
      { num: '2', disease: '망막의 양성 신생물', code: 'D31.2' },
      { num: '3', disease: '맥락막의 양성 신생물', code: 'D31.3' },
      { num: '4', disease: '성모체의 양성 신생물', code: 'D31.4' }
    ]
  },

  // 별표 52-5 백내장 분류표
  {
    title: '[백내장] 백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },

  // 별표 52-6 치핵 분류표
  {
    title: '[치핵] 치핵',
    items: [
      { num: '1', disease: '포함: 치질 / 제외: 합병증 (출산 및 산후기 O87.2, 임신 O22.4)', code: 'K64' }
    ]
  }
];

// KB손해보험 101대 질병수술 상단 요약 분류표 데이터
export const KB_SURGERY_101_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  KB_SURGERY_101_SECTIONS.forEach((sec) => {
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

// KB손해보험 112대 질병 분류표 [별표42] 데이터
export const KB_SURGERY_112_SECTIONS = [
  // 별표 17-1 15대질병 분류표
  {
    title: '[15대질병] 폐렴',
    items: [
      { num: '1', disease: '재향군인병', code: 'A48.1' },
      { num: '2', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '3', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '4', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '5', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '6', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '7', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '8', disease: '[B01.2+:수두폐렴(J17.1*)]', code: 'B01.2+' },
      { num: '9', disease: '[B05.2+:폐렴이합병된홍역(J17.1*)]', code: 'B05.2+' },
      { num: '10', disease: '[B25.0+:거대세포바이러스폐렴(J17.1*)]', code: 'B25.0+' },
      { num: '11', disease: '[B58.3+:폐톡소포자충증(J17.3*)]', code: 'B58.3+' },
      { num: '12', disease: '상세불명 병원체의 폐렴', code: 'J18' }
    ]
  },
  {
    title: '[15대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '[A39.5+:수막알균성 심장병(I32.0*,I39.8*,I41.0*,I52.0*)]', code: 'A39.5+' },
      { num: '7', disease: '[B37.6+:칸디다심내막염(I39.8*)]', code: 'B37.6+' }
    ]
  },
  {
    title: '[15대질병] 고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성)고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화(H35.0) 중 고혈압성 망막병증 (주: H35.0 중 고혈압성 망막병증에 한함)', code: 'H35.0주)' }
    ]
  },
  {
    title: '[15대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[15대질병] 간 질 환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '[B25.1+:거대세포바이러스간염(K77.0*)]', code: 'B25.1+' },
      { num: '4', disease: '[B58.1+:톡소포자충간염(K77.0*)]', code: 'B58.1+' }
    ]
  },
  {
    title: '[15대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[15대질병] 만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40~J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40~J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40~J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[15대질병] 신 부 전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[15대질병] 뇌 및 중추신경계통의 양성종양',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[15대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[15대질병] 간·담관·췌장의 양성종양',
    items: [
      { num: '1', disease: '간의양성신생물', code: 'D13.4' },
      { num: '2', disease: '간외담관의 양성 신생물', code: 'D13.5' },
      { num: '3', disease: '췌장의 양성 신생물', code: 'D13.6' },
      { num: '4', disease: '내분비췌장의 양성 신생물', code: 'D13.7' }
    ]
  },
  {
    title: '[15대질병] 수막의 양성종양',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[15대질병] 기관지·폐의 특정질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' }
    ]
  },
  {
    title: '[15대질병] 급성췌장염',
    items: [
      { num: '1', disease: '급성췌장염', code: 'K85' }
    ]
  },
  {
    title: '[15대질병] 버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염[버거병]', code: 'I73.1' }
    ]
  },

  // 별표 17-2 24대질병 분류표
  {
    title: '[24대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '[M01.1*:결핵관절염(A18.01+)]', code: 'M01.1*' },
      { num: '3', disease: '[M49.0*:척추의 결핵(A18.00+)]', code: 'M49.0*' },
      { num: '4', disease: '[M90.0*:뼈의 결핵(A18.02+)]', code: 'M90.0*' },
      { num: '5', disease: '[N33.0*:결핵성 방광염(A18.11+)]', code: 'N33.0*' },
      { num: '6', disease: '[N74.0*:자궁경부의 결핵감염(A18.17+)]', code: 'N74.0*' },
      { num: '7', disease: '[N74.1*:여성 결핵성 골반염증질환(A18.17+)]', code: 'N74.1*' },
      { num: '8', disease: '[K67.3*:결핵성복막염(A18.30+)]', code: 'K67.3*' },
      { num: '9', disease: '[K93.0*:장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*+)]', code: 'K93.0*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[24대질병] 안면 신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[24대질병] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },
  {
    title: '[24대질병] 당뇨병질환',
    items: [
      { num: '1', disease: '1형당뇨병', code: 'E10' },
      { num: '2', disease: '2형당뇨병', code: 'E11' },
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
    title: '[24대질병] 특정 호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[24대질병] 폐질환',
    items: [
      { num: '1', disease: '폐 및 중격의 농양', code: 'J85' },
      { num: '2', disease: '농흉', code: 'J86' },
      { num: '3', disease: '달리 분류되지 않은 흉막상출액', code: 'J90' },
      { num: '4', disease: '달리 분류된 병태에서의 흉막상출액', code: 'J91' },
      { num: '5', disease: '흉막판', code: 'J92' },
      { num: '6', disease: '기흉', code: 'J93' },
      { num: '7', disease: '기타 흉막의 병태', code: 'J94' }
    ]
  },
  {
    title: '[24대질병] 위·십이지장 궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[24대질병] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[24대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[24대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[24대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[24대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[24대질병] 다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[24대질병] 뇌하수체질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[24대질병] 뇌 및 척수의 염증성질환',
    items: [
      { num: '1', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '2', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '3', disease: '[A85.1+:아데노바이러스뇌염(G05.1*)]', code: 'A85.1+' },
      { num: '4', disease: '[A85.0+:엔테로바이러스뇌염(G05.1*)]', code: 'A85.0+' },
      { num: '5', disease: '[B00.4+:헤르페스바이러스뇌염(G05.1*)]', code: 'B00.4+' },
      { num: '6', disease: '[B05.0+:뇌염이 합병된 홍역(G05.1*)]', code: 'B05.0+' },
      { num: '7', disease: '[B26.2+:볼거리뇌염(G05.1*)]', code: 'B26.2+' },
      { num: '8', disease: '[B01.1+:수두뇌염(G05.1*)]', code: 'B01.1+' },
      { num: '9', disease: '[B02.0+:대상포진뇌염(G05.1*)]', code: 'B02.0+' },
      { num: '10', disease: '두개내 및 척수내 농양 및 육아종', code: 'G06' },
      { num: '11', disease: '달리 분류된 질환에서의 두개내 및 척수내 농양 및 육아종', code: 'G07' },
      { num: '12', disease: '[A06.6+:아메바성 뇌농양(G07*)]', code: 'A06.6+' },
      { num: '13', disease: '두개내 및 척수내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '14', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[24대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[24대질병] 뇌전증(간질)',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '[24대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[24대질병] 수막염',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '[A39.0+:수막알균수막염(G01*)]', code: 'A39.0+' },
      { num: '4', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '5', disease: '[A87.1+:아데노바이러스수막염(G02.0*)]', code: 'A87.1+' },
      { num: '6', disease: '[A87.0+:엔테로바이러스수막염(G02.0*)]', code: 'A87.0+' },
      { num: '7', disease: '[B00.3+:헤르페스바이러스수막염(G02.0*)]', code: 'B00.3+' },
      { num: '8', disease: '[B05.1+:수막염이 합병된 홍역(G02.0*)]', code: 'B05.1+' },
      { num: '9', disease: '[B26.1+:볼거리수막염(G02.0*)]', code: 'B26.1+' },
      { num: '10', disease: '[B01.0+:수두수막염(G02.0*)]', code: 'B01.0+' },
      { num: '11', disease: '[B02.1+:대상포진수막염(G02.0*)]', code: 'B02.1+' },
      { num: '12', disease: '[B37.5+:칸디다수막염(G02.1*)]', code: 'B37.5+' },
      { num: '13', disease: '[B38.4+:콕시디오이데스진균수막염(G02.1*)]', code: 'B38.4+' },
      { num: '14', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' }
    ]
  },
  {
    title: '[24대질병] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염 증후군', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염 증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염 증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염 증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의 사구체 장애', code: 'N08' },
      { num: '10', disease: '[당뇨병에서의사구체장애(N08.3)제외]', code: '(N08.3제외)' }
    ]
  },
  {
    title: '[24대질병] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성세뇨관-간질신장염', code: 'N10' },
      { num: '2', disease: '만성세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성또는만성으로명시되지않은세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속유발 세뇨관-간질 및 세뇨관병태', code: 'N14' },
      { num: '6', disease: '기타신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리분류된질환에서의신세뇨관-간질장애', code: 'N16' }
    ]
  },
  {
    title: '[24대질병] 신장 및 요관의 기타장애',
    items: [
      { num: '1', disease: '신세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[24대질병] 하부호흡계통 및 흉각의 양성종양',
    items: [
      { num: '1', disease: '기관의 양성 신생물', code: 'D14.2' },
      { num: '2', disease: '기관지및폐의양성신생물', code: 'D14.3' },
      { num: '3', disease: '상세불명의호흡계통의양성신생물', code: 'D14.4' },
      { num: '4', disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[24대질병] 용혈-요독증후군(햄버거병)',
    items: [
      { num: '1', disease: '용혈-요독증후군', code: 'D59.3' }
    ]
  },

  // 별표 17-3 22대질병 분류표
  {
    title: '[22대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '[H06.2*:갑상선이상성안구돌출(E05.0+)]', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: 'E89.0' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[22대질병] 부갑상선질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[22대질병] 간암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' }
    ]
  },
  {
    title: '[22대질병] 기관지 및 폐암',
    items: [
      { num: '1', disease: '기관지 및 폐의 악성 신생물', code: 'C34' }
    ]
  },
  {
    title: '[22대질병] 난소암',
    items: [
      { num: '1', disease: '난소의 악성 신생물', code: 'C56' }
    ]
  },
  {
    title: '[22대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[22대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리분류된질환에서의담당, 담도및췌장의장애', code: 'K87' },
      { num: '3', disease: '[B25.2+:거대세포바이러스췌장염(K87.1*)]', code: 'B25.2+' },
      { num: '4', disease: '[B26.3+:볼거리췌장염(K87.1*)]', code: 'B26.3+' }
    ]
  },
  {
    title: '[22대질병] 비감염성장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[22대질병] 비장질환',
    items: [
      { num: '1', disease: '비장의질환', code: 'D73' }
    ]
  },
  {
    title: '[22대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[22대질병] 중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[22대질병] 손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '[22대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '[손목터널증후군(G56.0) 제외]', code: '(G56.0제외)' },
      { num: '3', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '4', disease: '기타 단일신경병증', code: 'G58' },
      { num: '5', disease: '달리 분류된 질환에서의 기타 단일신경병증', code: 'G59.8' }
    ]
  },
  {
    title: '[22대질병] 마비',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[22대질병] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척주골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[22대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[22대질병] 추간판장애',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[22대질병] 전신결합조직장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' },
      { num: '3', disease: '림프절외 NK/T-세포림프종, 비강형태', code: 'C86.0' },
      { num: '4', disease: '전신홍반루푸스', code: 'M32' },
      { num: '5', disease: '[기관또는계통침범을동반한전신홍반루푸스(M32.1) 제외]', code: '(M32.1제외)' },
      { num: '6', disease: '피부다발근염', code: 'M33' },
      { num: '7', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '[22대질병] 난소·난관의 질환',
    items: [
      { num: '1', disease: '난관염 및 난소염', code: 'N70' },
      { num: '2', disease: '난소, 난관 및 넓은인대의 비염증성 장애', code: 'N83' }
    ]
  },
  {
    title: '[22대질병] 갑상선 및 내분비선의 양성종양',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[22대질병] 골 및 관절연골의 양성종양',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[22대질병] 난소의 양성종양',
    items: [
      { num: '1', disease: '난소의 양성 신생물', code: 'D27' }
    ]
  },

  // 별표 17-4 49대질병 분류표
  {
    title: '[49대질병] 관절염 및 다발관절병증',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00~M03' },
      { num: '2', disease: '[결핵관절염(M01.1)제외]', code: '(M01.1제외)' },
      { num: '3', disease: '염증성 다발관절병증', code: 'M05~M14' },
      { num: '4', disease: '[당뇨병성관절병증(M14.2)제외]', code: '(M14.2제외)' },
      { num: '5', disease: '[J99.0*:류마티스폐질환(M05.1+)]', code: 'J99.0*' },
      { num: '6', disease: '[M07.0*:원위지골간 건선관절병증(L40.5+)]', code: 'L40.5+' },
      { num: '7', disease: '[M09.0*:건선에서의 연소성 관절염(L40.5+)]', code: 'L40.5+' }
    ]
  },
  {
    title: '[49대질병] 관절증',
    items: [
      { num: '1', disease: '다발관절증', code: 'M15' },
      { num: '2', disease: '고관절증', code: 'M16' },
      { num: '3', disease: '무릎관절증', code: 'M17' },
      { num: '4', disease: '제1수근수중수관절의 관절증', code: 'M18' },
      { num: '5', disease: '기타 관절증', code: 'M19' }
    ]
  },
  {
    title: '[49대질병] 관절장애',
    items: [
      { num: '1', disease: '무릎뼈의 장애', code: 'M22' },
      { num: '2', disease: '무릎의 내부장애', code: 'M23' },
      { num: '3', disease: '기타 특정 관절장애', code: 'M24' },
      { num: '4', disease: '달리 분류되지 않은 기타 관절장애', code: 'M25' }
    ]
  },
  {
    title: '[49대질병] 누적 외상성 질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경추상완증후군', code: 'M53.1' },
      { num: '3', disease: '근육 장애', code: 'M60~M63' },
      { num: '4', disease: '윤활막 및 힘줄장애', code: 'M65~M68' },
      { num: '5', disease: '기타 연조직장애 (M74,M78제외)', code: 'M70~M79 (M74,M78제외)' }
    ]
  },
  {
    title: '[49대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[49대질병] 눈 및 눈부속기의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '눈 및 눈부속기의 기타 처치후 장애(H59.8) 중 미만성 총판성 각막염 (주: H59.8 중 미만성 총판성 각막염에 한함)', code: 'H59.8*)' },
      { num: '3', disease: '맥락막 및 망막의 장애', code: 'H30~H36' },
      { num: '4', disease: '[배경망막병증 망막혈관변화(H35.0) 중 고혈압성 망막병증 제외] (주: H35.0 중 고혈압성 망막병증만 보상에서 제외)', code: '(H35.0*) 제외)' },
      { num: '5', disease: '[황반 및 후극부의 변성(H35.3) 제외]', code: '(H35.3제외)' },
      { num: '6', disease: '[당뇨병성 망막병증(H36.0)제외]', code: '(H36.0제외)' }
    ]
  },
  {
    title: '[49대질병] 시신경 및 시각경로의 장애',
    items: [
      { num: '1', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[49대질병] 유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '[49대질병] 중이염',
    items: [
      { num: '1', disease: '비화농성 중이염', code: 'H65' },
      { num: '2', disease: '화농성 및 상세불명의 중이염', code: 'H66' },
      { num: '3', disease: '달리 분류된 질환에서의 중이염', code: 'H67' }
    ]
  },
  {
    title: '[49대질병] 중이 및 유돌의 질환',
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
    title: '[49대질병] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[49대질병] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[49대질병] 통풍',
    items: [
      { num: '1', disease: '통풍', code: 'M10' }
    ]
  },
  {
    title: '[49대질병] 사지 후천변형',
    items: [
      { num: '1', disease: '손가락 및 발가락의 후천변형', code: 'M20' },
      { num: '2', disease: '사지의 기타 후천변형', code: 'M21' }
    ]
  },
  {
    title: '[49대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' }
    ]
  },
  {
    title: '[49대질병] 뼈의병증',
    items: [
      { num: '1', disease: '골수염', code: 'M86' },
      { num: '2', disease: '골괴사', code: 'M87' },
      { num: '3', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' },
      { num: '4', disease: '뼈의 기타 장애', code: 'M89' }
    ]
  },
  {
    title: '[49대질병] 연골병증',
    items: [
      { num: '1', disease: '고관절 및 골반의 연소성 골연골증', code: 'M91' },
      { num: '2', disease: '기타 연소성 골연골증', code: 'M92' },
      { num: '3', disease: '기타 골연골병증', code: 'M93' },
      { num: '4', disease: '연골의 기타 장애', code: 'M94' }
    ]
  },
  {
    title: '[49대질병] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[49대질병] 위십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[49대질병] 담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타 질환', code: 'K82' },
      { num: '3', disease: '담도의 기타 질환', code: 'K83' }
    ]
  },
  {
    title: '[49대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[49대질병] 복막의질환',
    items: [
      { num: '1', disease: '복막염', code: 'K65' },
      { num: '2', disease: '복막의 기타 장애', code: 'K66' },
      { num: '3', disease: '달리 분류된 감염성 질환에서의 복막의 장애', code: 'K67' },
      { num: '4', disease: '[결핵성복막염(K67.3) 제외]', code: '(K67.3 제외)' }
    ]
  },
  {
    title: '[49대질병] 사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[49대질병] 특정부위의 탈장',
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
    title: '[49대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[49대질병] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[49대질병] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[49대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성 비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타 장애', code: 'J34' }
    ]
  },
  {
    title: '[49대질병] 인후부위특정 질환',
    items: [
      { num: '1', disease: '편도주위농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타질환', code: 'J39' }
    ]
  },
  {
    title: '[49대질병] 방광의결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[49대질병] 비뇨계통의 기타질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '[결핵성방광염(N33.0)제외]', code: '(N33.0제외)' },
      { num: '6', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '7', disease: '비뇨계통의 기타 장애', code: 'N39' },
      { num: '8', disease: '[스트레스요실금(N39.3)제외]', code: '(N39.3제외)' },
      { num: '9', disease: '[기타명시된요실금(N39.4)제외]', code: '(N39.4제외)' }
    ]
  },
  {
    title: '[49대질병] 전립선 질환',
    items: [
      { num: '1', disease: '전립선증식증', code: 'N40' },
      { num: '2', disease: '전립선의 염증성 질환', code: 'N41' },
      { num: '3', disease: '전립선의 기타 장애', code: 'N42' }
    ]
  },
  {
    title: '[49대질병] 남성 생식기관의 질환',
    items: [
      { num: '1', disease: '음낭수종 및 정액류', code: 'N43' },
      { num: '2', disease: '고환의 염전', code: 'N44' },
      { num: '3', disease: '고환염 및 부고환염', code: 'N45' }
    ]
  },
  {
    title: '[49대질병] 여성 골반내기관의 염증성 질환',
    items: [
      { num: '1', disease: '자궁경부를 제외한 자궁의 염증성 질환', code: 'N71' },
      { num: '2', disease: '자궁경부의 염증성 질환', code: 'N72' },
      { num: '3', disease: '기타 여성골반염증질환', code: 'N73' },
      { num: '4', disease: '달리 분류된 질환에서의 여성골반염증장애', code: 'N74' },
      { num: '5', disease: '[자궁경부의결핵감염(N74.0)제외]', code: '(N74.0제외)' },
      { num: '6', disease: '[여성결핵성골반염증질환(N74.1)제외]', code: '(N74.1제외)' },
      { num: '7', disease: '바르톨린선의 질환', code: 'N75' },
      { num: '8', disease: '질 및 외음부의 기타 염증', code: 'N76' },
      { num: '9', disease: '달리 분류된 질환에서의 외음질의 궤양 및 염증', code: 'N77' }
    ]
  },
  {
    title: '[49대질병] 여성생식관의 비염증성 질환',
    items: [
      { num: '1', disease: '자궁내막증', code: 'N80' },
      { num: '2', disease: '여성생식기탈출', code: 'N81' },
      { num: '3', disease: '여성생식관을 침범한 누공', code: 'N82' },
      { num: '4', disease: '여성생식관의 폴립', code: 'N84' },
      { num: '5', disease: '자궁경부를 제외한 자궁의 기타 비염증성 장애', code: 'N85' },
      { num: '6', disease: '자궁경부의 미란 및 외반', code: 'N86' },
      { num: '7', disease: '자궁경부의 이형성', code: 'N87' },
      { num: '8', disease: '자궁경부의 기타 비염증성 장애', code: 'N88' },
      { num: '9', disease: '질의 기타 비염증성 장애', code: 'N89' },
      { num: '10', disease: '외음부 및 회음부의 기타 비염증성 장애', code: 'N90' },
      { num: '11', disease: '무월경,소량및희발월경', code: 'N91' },
      { num: '12', disease: '과다,빈발및불규칙월경', code: 'N92' },
      { num: '13', disease: '기타 이상 자궁 및 질 출혈', code: 'N93' },
      { num: '14', disease: '여성생식기관 및 월경주기와 관련된 통증 및 기타병태', code: 'N94' },
      { num: '15', disease: '폐경 및 기타 폐경전후 장애', code: 'N95' }
    ]
  },
  {
    title: '[49대질병] 소화계통의 양성종양',
    items: [
      { num: '1', disease: '식도의 양성 신생물', code: 'D13.0' },
      { num: '2', disease: '위의 양성 신생물', code: 'D13.1' },
      { num: '3', disease: '십이지장의 양성 신생물', code: 'D13.2' },
      { num: '4', disease: '기타 및 상세불명 부분 소장의 양성 신생물', code: 'D13.3' },
      { num: '5', disease: '부위불명의 소화계통의 양성 신생물', code: 'D13.9' }
    ]
  },
  {
    title: '[49대질병] 상부호흡계통의 양성종양',
    items: [
      { num: '1', disease: '중이, 비강 및 부비동의 양성 신생물', code: 'D14.0' },
      { num: '2', disease: '후두의 양성 신생물', code: 'D14.1' }
    ]
  },
  {
    title: '[49대질병] 조직의 양성종양',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[49대질병] 생식기 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '4', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[49대질병] 비뇨기관의 양성종양',
    items: [
      { num: '1', disease: '비뇨기관의 양성 신생물', code: 'D30' }
    ]
  },
  {
    title: '[49대질병] 눈의 양성종양',
    items: [
      { num: '1', disease: '각막의 양성 신생물', code: 'D31.1' },
      { num: '2', disease: '망막의 양성 신생물', code: 'D31.2' },
      { num: '3', disease: '맥락막의 양성 신생물', code: 'D31.3' },
      { num: '4', disease: '성모체의 양성 신생물', code: 'D31.4' }
    ]
  },
  {
    title: '[49대질병] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[49대질병] 유방의 양성종양',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[49대질병] 안와의 장애',
    items: [
      { num: '1', disease: '안와의 장애', code: 'H05' }
    ]
  },
  {
    title: '[49대질병] 외이의 질환',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' }
    ]
  },
  {
    title: '[49대질병] 과민대장증후군',
    items: [
      { num: '1', disease: '과민대장증후군', code: 'K58' }
    ]
  },
  {
    title: '[49대질병] 다한증',
    items: [
      { num: '1', disease: '다한증', code: 'R61' }
    ]
  },
  {
    title: '[49대질병] 위암',
    items: [
      { num: '1', disease: '위의 악성 신생물', code: 'C16' }
    ]
  },
  {
    title: '[49대질병] 갑상선암',
    items: [
      { num: '1', disease: '갑상선의 악성 신생물', code: 'C73' }
    ]
  },

  // 별표 17-5 백내장 분류표
  {
    title: '[백내장] 백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },

  // 별표 17-6 치핵 분류표
  {
    title: '[치핵] 치핵 및 항문주위 정맥혈전증',
    items: [
      { num: '1', disease: '포함: 치질 / 제외: 합병증 (출산 및 산후기 O87.2, 임신 O22.4)', code: 'K64' }
    ]
  }
];

// KB손해보험 112대 질병수술 상단 요약 분류표 데이터
export const KB_SURGERY_112_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  KB_SURGERY_112_SECTIONS.forEach((sec) => {
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

// KB손해보험 116대 질병수술 분류표 [별표32] 데이터
export const KB_SURGERY_116_SECTIONS = [
  // 별표32-1 15대질병 분류표
  {
    title: '[15대질병] 폐렴',
    items: [
      { num: '1', disease: '재향군인병', code: 'A48.1' },
      { num: '2', disease: '달리 분류되지 않은 바이러스폐렴', code: 'J12' },
      { num: '3', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '4', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '5', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '6', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '7', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '8', disease: '[B01.2+:수두폐렴(J17.1*)]', code: 'B01.2+' },
      { num: '9', disease: '[B05.2+:폐렴이합병된홍역(J17.1*)]', code: 'B05.2+' },
      { num: '10', disease: '[B25.0+:거대세포바이러스폐렴(J17.1*)]', code: 'B25.0+' },
      { num: '11', disease: '[B58.3+:폐톡소포자충증(J17.3*)]', code: 'B58.3+' },
      { num: '12', disease: '상세불명 병원체의 폐렴', code: 'J18' }
    ]
  },
  {
    title: '[15대질병] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '[A39.5+:수막알균성 심장병(I32.0*,I39.8*,I41.0*,I52.0*)]', code: 'A39.5+' },
      { num: '7', disease: '[B37.6+:칸디다심내막염(I39.8*)]', code: 'B37.6+' }
    ]
  },
  {
    title: '[15대질병] 고혈압질환',
    items: [
      { num: '1', disease: '본태성(원발성)고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '배경망막병증 및 망막혈관변화(H35.0) 중 고혈압성 망막병증', code: 'H35.0주)' }
    ]
  },
  {
    title: '[15대질병] 뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '[15대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '[B25.1+:거대세포바이러스간염(K77.0*)]', code: 'B25.1+' },
      { num: '4', disease: '[B58.1+:톡소포자충간염(K77.0*)]', code: 'B58.1+' }
    ]
  },
  {
    title: '[15대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[15대질병] 만성하부호흡기질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[15대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '[15대질병] 뇌 및 중추신경계통의 양성종양',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[15대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[15대질병] 간담관췌장의 양성종양',
    items: [
      { num: '1', disease: '간의 양성 신생물', code: 'D13.4' },
      { num: '2', disease: '간외담관의 양성 신생물', code: 'D13.5' },
      { num: '3', disease: '췌장의 양성 신생물', code: 'D13.6' },
      { num: '4', disease: '내분비췌장의 양성 신생물', code: 'D13.7' }
    ]
  },
  {
    title: '[15대질병] 수막의 양성종양',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[15대질병] 기관지폐의 특정질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' }
    ]
  },
  {
    title: '[15대질병] 급성췌장염',
    items: [
      { num: '1', disease: '급성췌장염', code: 'K85' }
    ]
  },
  {
    title: '[15대질병] 버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염[버거씨병]', code: 'I73.1' }
    ]
  },

  // 별표32-2 23대질병 분류표
  {
    title: '[23대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '[M01.1*:결핵관절염(A18.01+)]', code: 'M01.1*' },
      { num: '3', disease: '[M49.0*:척추의 결핵(A18.00+)]', code: 'M49.0*' },
      { num: '4', disease: '[M90.0*:뼈의 결핵(A18.02+)]', code: 'M90.0*' },
      { num: '5', disease: '[N33.0*:결핵성 방광염(A18.11+)]', code: 'N33.0*' },
      { num: '6', disease: '[N74.0*:자궁경부의 결핵감염(A18.17+)]', code: 'N74.0*' },
      { num: '7', disease: '[N74.1*:여성 결핵성 골반염증질환(A18.17+)]', code: 'N74.1*' },
      { num: '8', disease: '[K67.3*:결핵성복막염(A18.30+)]', code: 'K67.3*' },
      { num: '9', disease: '[K93.0*:장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*+)]', code: 'K93.0*' },
      { num: '10', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '[23대질병] 안면 신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[23대질병] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },
  {
    title: '[23대질병] 당뇨병질환',
    items: [
      { num: '1', disease: '1형당뇨병', code: 'E10' },
      { num: '2', disease: '2형당뇨병', code: 'E11' },
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
    title: '[23대질병] 특정 호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[23대질병] 폐질환',
    items: [
      { num: '1', disease: '폐 및 종격의 농양', code: 'J85' },
      { num: '2', disease: '농흉', code: 'J86' },
      { num: '3', disease: '달리 분류되지 않은 흉막삼출액', code: 'J90' },
      { num: '4', disease: '달리 분류된 병태에서의 흉막삼출액', code: 'J91' },
      { num: '5', disease: '흉막판', code: 'J92' },
      { num: '6', disease: '기흉', code: 'J93' },
      { num: '7', disease: '기타 흉막의 병태', code: 'J94' }
    ]
  },
  {
    title: '[23대질병] 위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[23대질병] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[23대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[23대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[23대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[23대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[23대질병] 뇌하수체질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[23대질병] 뇌 및 척수의 염증성질환',
    items: [
      { num: '1', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '2', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염', code: 'G05' },
      { num: '3', disease: '[A85.1+:아데노바이러스뇌염(G05.1*)]', code: 'A85.1+' },
      { num: '4', disease: '[A85.0+:엔테로바이러스뇌염(G05.1*)]', code: 'A85.0+' },
      { num: '5', disease: '[B00.4+:헤르페스바이러스뇌염(G05.1*)]', code: 'B00.4+' },
      { num: '6', disease: '[B05.0+:뇌염이 합병된 홍역(G05.1*)]', code: 'B05.0+' },
      { num: '7', disease: '[B26.2+:볼거리뇌염(G05.1*)]', code: 'B26.2+' },
      { num: '8', disease: '[B01.1+:수두뇌염(G05.1*)]', code: 'B01.1+' },
      { num: '9', disease: '[B02.0+:대상포진뇌염(G05.1*)]', code: 'B02.0+' },
      { num: '10', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '11', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종', code: 'G07' },
      { num: '12', disease: '[A06.6+:아메바성 뇌농양(G07*)]', code: 'A06.6+' },
      { num: '13', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '14', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[23대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[23대질병] 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '[23대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[23대질병] 수막염',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염', code: 'G01' },
      { num: '3', disease: '[A39.0+:수막알균수막염(G01*)]', code: 'A39.0+' },
      { num: '4', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염', code: 'G02' },
      { num: '5', disease: '[A87.1+:아데노바이러스수막염(G02.0*)]', code: 'A87.1+' },
      { num: '6', disease: '[A87.0+:엔테로바이러스수막염(G02.0*)]', code: 'A87.0+' },
      { num: '7', disease: '[B00.3+:헤르페스바이러스수막염(G02.0*)]', code: 'B00.3+' },
      { num: '8', disease: '[B05.1+:수막염이 합병된 홍역(G02.0*)]', code: 'B05.1+' },
      { num: '9', disease: '[B26.1+:볼거리수막염(G02.0*)]', code: 'B26.1+' },
      { num: '10', disease: '[B01.0+:수두수막염(G02.0*)]', code: 'B01.0+' },
      { num: '11', disease: '[B02.1+:대상포진수막염(G02.0*)]', code: 'B02.1+' },
      { num: '12', disease: '[B37.5+:칸디다수막염(G02.1*)]', code: 'B37.5+' },
      { num: '13', disease: '[B38.4+:콕시디오이데스진균수막염(G02.1*)]', code: 'B38.4+' },
      { num: '14', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' }
    ]
  },
  {
    title: '[23대질병] 사구체질환',
    items: [
      { num: '1', disease: '급성 신염증후군', code: 'N00' },
      { num: '2', disease: '급속 진행성 신염증후군', code: 'N01' },
      { num: '3', disease: '재발성 및 지속성 혈뇨', code: 'N02' },
      { num: '4', disease: '만성 신염증후군', code: 'N03' },
      { num: '5', disease: '신증후군', code: 'N04' },
      { num: '6', disease: '상세불명의 신염증후군', code: 'N05' },
      { num: '7', disease: '명시된 형태학적 병변을 동반한 고립된 단백뇨', code: 'N06' },
      { num: '8', disease: '달리 분류되지 않은 유전성 신장병증', code: 'N07' },
      { num: '9', disease: '달리 분류된 질환에서의 사구체장애', code: 'N08' },
      { num: '10', disease: '[당뇨병에서의 사구체장애(N08.3)제외]', code: '(N08.3제외)' }
    ]
  },
  {
    title: '[23대질병] 신세뇨관-간질질환',
    items: [
      { num: '1', disease: '급성 세뇨관-간질신장염', code: 'N10' },
      { num: '2', disease: '만성 세뇨관-간질신장염', code: 'N11' },
      { num: '3', disease: '급성또는만성으로명시되지않은세뇨관-간질신장염', code: 'N12' },
      { num: '4', disease: '폐색성 및 역류성 요로병증', code: 'N13' },
      { num: '5', disease: '약물 및 중금속유발 세뇨관-간질 및 세뇨관병태', code: 'N14' },
      { num: '6', disease: '기타 신세뇨관-간질질환', code: 'N15' },
      { num: '7', disease: '달리분류된질환에서의신세뇨관-간질장애', code: 'N16' }
    ]
  },
  {
    title: '[23대질병] 신장 및 요관의 기타장애',
    items: [
      { num: '1', disease: '신세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[23대질병] 하부호흡계통 및 흉곽의 양성종양',
    items: [
      { num: '1', disease: '기관의 양성 신생물', code: 'D14.2' },
      { num: '2', disease: '기관지 및 폐의 양성 신생물', code: 'D14.3' },
      { num: '3', disease: '상세불명의 호흡계통의 양성 신생물', code: 'D14.4' },
      { num: '4', disease: '기타 및 상세불명의 흉곽내기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[23대질병] 용혈-요독증후군(햄버거병)',
    items: [
      { num: '1', disease: '용혈-요독증후군', code: 'D59.3' }
    ]
  },

  // 별표32-3 22대질병 분류표
  {
    title: '[22대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00~E07' },
      { num: '2', disease: '[H06.2*:갑상선이상성안구돌출(E05.0+)]', code: 'H06.2*' },
      { num: '3', disease: '처치후 갑상선기능저하증', code: 'E89.0' },
      { num: '4', disease: '방사선조사후 갑상선기능저하증', code: '-' },
      { num: '5', disease: '수술후 갑상선기능저하증', code: '-' }
    ]
  },
  {
    title: '[22대질병] 부갑상선질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[22대질병] 간암',
    items: [
      { num: '1', disease: '간 및 간내 담관의 악성 신생물', code: 'C22' }
    ]
  },
  {
    title: '[22대질병] 기관지 및 폐암',
    items: [
      { num: '1', disease: '기관지 및 폐의 악성 신생물', code: 'C34' }
    ]
  },
  {
    title: '[22대질병] 난소암',
    items: [
      { num: '1', disease: '난소의 악성 신생물', code: 'C56' }
    ]
  },
  {
    title: '[22대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐쇄', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[22대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리분류된질환에서의담낭,담도및췌장의장애', code: 'K87' },
      { num: '3', disease: '[B25.2+:거대세포바이러스췌장염(K87.1*)]', code: 'B25.2+' },
      { num: '4', disease: '[B26.3+:볼거리췌장염(K87.1*)]', code: 'B26.3+' }
    ]
  },
  {
    title: '[22대질병] 비감염성장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[22대질병] 비장질환',
    items: [
      { num: '1', disease: '비장의질환', code: 'D73' }
    ]
  },
  {
    title: '[22대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[22대질병] 중증근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[22대질병] 손목터널증후군',
    items: [
      { num: '1', disease: '손목터널증후군', code: 'G56.0' }
    ]
  },
  {
    title: '[22대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56(G56.0제외)' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의 기타 단일신경병증', code: 'G59.8' }
    ]
  },
  {
    title: '[22대질병] 마비',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[22대질병] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[22대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[22대질병] 추간판장애',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[22대질병] 전신결합조직장애',
    items: [
      { num: '1', disease: '결절성 다발동맥염 및 관련 병태', code: 'M30' },
      { num: '2', disease: '기타 괴사성 혈관병증', code: 'M31' },
      { num: '3', disease: '림프절외 NK/T-세포림프종, 비강형태', code: 'C86.0' },
      { num: '4', disease: '전신홍반루푸스', code: 'M32(M32.1제외)' },
      { num: '5', disease: '피부다발근염', code: 'M33' },
      { num: '6', disease: '전신경화증', code: 'M34' }
    ]
  },
  {
    title: '[22대질병] 난소난관의 질환',
    items: [
      { num: '1', disease: '난관염 및 난소염', code: 'N70' },
      { num: '2', disease: '난소, 난관 및 넓은인대의 비염증성 장애', code: 'N83' }
    ]
  },
  {
    title: '[22대질병] 갑상선 및 내분비선의 양성종양',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[22대질병] 골 및 관절연골의 양성종양',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[22대질병] 난소의 양성종양',
    items: [
      { num: '1', disease: '난소의 양성 신생물', code: 'D27' }
    ]
  },

  // 별표32-4 49대질병 분류표
  {
    title: '[49대질병] 관절염 및 다발관절병증',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00~M03(M01.1제외)' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05~M14(M14.2제외)' },
      { num: '3', disease: '[J99.0*:류마티스폐질환(M05.1+)]', code: 'J99.0*' },
      { num: '4', disease: '[M07.0*:원위지골간 건선관절병증(L40.5+)]', code: 'L40.5+' },
      { num: '5', disease: '[M09.0*:건선에서의 연소성 관절염(L40.5+)]', code: 'L40.5+' }
    ]
  },
  {
    title: '[49대질병] 관절증',
    items: [
      { num: '1', disease: '다발관절증', code: 'M15' },
      { num: '2', disease: '고관절증', code: 'M16' },
      { num: '3', disease: '무릎관절증', code: 'M17' },
      { num: '4', disease: '제1수근중수관절의 관절증', code: 'M18' },
      { num: '5', disease: '기타 관절증', code: 'M19' }
    ]
  },
  {
    title: '[49대질병] 관절장애',
    items: [
      { num: '1', disease: '무릎뼈의 장애', code: 'M22' },
      { num: '2', disease: '무릎의 내부장애', code: 'M23' },
      { num: '3', disease: '기타 특정 관절장애', code: 'M24' },
      { num: '4', disease: '달리 분류되지 않은 기타 관절장애', code: 'M25' }
    ]
  },
  {
    title: '[49대질병] 누적외상성 질환',
    items: [
      { num: '1', disease: '결합조직의 기타 전신침범', code: 'M35' },
      { num: '2', disease: '경추상완증후군', code: 'M53.1' },
      { num: '3', disease: '근육 장애', code: 'M60~M63' },
      { num: '4', disease: '윤활막 및 힘줄장애', code: 'M65~M68' },
      { num: '5', disease: '기타 연조직장애', code: 'M70~M79(M74,M78제외)' }
    ]
  },
  {
    title: '[49대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[49대질병] 눈 및 눈부속기의 특정질환',
    items: [
      { num: '1', disease: '공막,각막,홍채 및 섬모체의 장애', code: 'H15~H22' },
      { num: '2', disease: '눈 및 눈부속기의 기타 처치후 장애(H59.8) 중 미만성 층판성 각막염', code: 'H59.8주)' },
      { num: '3', disease: '맥락막 및 망막의 장애', code: 'H30~H36(H35.0주제외,H35.3제외,H36.0제외)' }
    ]
  },
  {
    title: '[49대질병] 시신경 및 시각경로의 장애',
    items: [
      { num: '1', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[49대질병] 유리체의 장애',
    items: [
      { num: '1', disease: '유리체의 장애', code: 'H43' }
    ]
  },
  {
    title: '[49대질병] 중이염',
    items: [
      { num: '1', disease: '비화농성 중이염', code: 'H65' },
      { num: '2', disease: '화농성 및 상세불명의 중이염', code: 'H66' },
      { num: '3', disease: '달리 분류된 질환에서의 중이염', code: 'H67' }
    ]
  },
  {
    title: '[49대질병] 중이 및 유돌의 질환',
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
    title: '[49대질병] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[49대질병] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[49대질병] 통풍',
    items: [
      { num: '1', disease: '통풍', code: 'M10' }
    ]
  },
  {
    title: '[49대질병] 사지 후천변형',
    items: [
      { num: '1', disease: '손가락 및 발가락의 후천변형', code: 'M20' },
      { num: '2', disease: '사지의 기타 후천변형', code: 'M21' }
    ]
  },
  {
    title: '[49대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' }
    ]
  },
  {
    title: '[49대질병] 뼈의병증',
    items: [
      { num: '1', disease: '골수염', code: 'M86' },
      { num: '2', disease: '골괴사', code: 'M87' },
      { num: '3', disease: '뼈의 파젯병[변형성 골염]', code: 'M88' },
      { num: '4', disease: '뼈의 기타 장애', code: 'M89' },
      { num: '5', disease: '수데크위축', code: 'G90.5' }
    ]
  },
  {
    title: '[49대질병] 연골병증',
    items: [
      { num: '1', disease: '고관절 및 골반의 연소성 골연골증', code: 'M91' },
      { num: '2', disease: '기타 연소성 골연골증', code: 'M92' },
      { num: '3', disease: '기타 골연골병증', code: 'M93' },
      { num: '4', disease: '연골의 기타 장애', code: 'M94' }
    ]
  },
  {
    title: '[49대질병] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타 질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애', code: 'K23' }
    ]
  },
  {
    title: '[49대질병] 위십이지장질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' }
    ]
  },
  {
    title: '[49대질병] 담낭담도질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타 질환', code: 'K82' },
      { num: '3', disease: '담도의 기타 질환', code: 'K83' }
    ]
  },
  {
    title: '[49대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[49대질병] 복막의질환',
    items: [
      { num: '1', disease: '복막염', code: 'K65' },
      { num: '2', disease: '복막의 기타 장애', code: 'K66' },
      { num: '3', disease: '달리 분류된 감염성 질환에서의 복막의 장애', code: 'K67(K67.3제외)' }
    ]
  },
  {
    title: '[49대질병] 사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[49대질병] 특정부위의 탈장',
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
    title: '[49대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성 상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[49대질병] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[49대질병] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[49대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성 비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코용종', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타 장애', code: 'J34' }
    ]
  },
  {
    title: '[49대질병] 인후부위특정질환',
    items: [
      { num: '1', disease: '편도주위농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타질환', code: 'J39' }
    ]
  },
  {
    title: '[49대질병] 방광의결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[49대질병] 비뇨계통의 기타질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33(N33.0제외)' },
      { num: '5', disease: '달리 분류된 질환에서의 요도장애', code: 'N37' },
      { num: '6', disease: '비뇨계통의 기타 장애', code: 'N39(N39.3,N39.4제외)' }
    ]
  },
  {
    title: '[49대질병] 전립선 질환',
    items: [
      { num: '1', disease: '전립선증식증', code: 'N40' },
      { num: '2', disease: '전립선의 염증성 질환', code: 'N41' },
      { num: '3', disease: '전립선의 기타 장애', code: 'N42' }
    ]
  },
  {
    title: '[49대질병] 남성생식기관의 질환',
    items: [
      { num: '1', disease: '음낭수종 및 정액류', code: 'N43' },
      { num: '2', disease: '고환의 염전', code: 'N44' },
      { num: '3', disease: '고환염 및 부고환염', code: 'N45' }
    ]
  },
  {
    title: '[49대질병] 여성골반내기관의 염증성 질환',
    items: [
      { num: '1', disease: '자궁경부를 제외한 자궁의 염증성 질환', code: 'N71' },
      { num: '2', disease: '자궁경부의 염증성 질환', code: 'N72' },
      { num: '3', disease: '기타 여성골반염증질환', code: 'N73' },
      { num: '4', disease: '달리 분류된 질환에서의 여성골반염증장애', code: 'N74(N74.0,N74.1제외)' },
      { num: '5', disease: '바르톨린선의 질환', code: 'N75' },
      { num: '6', disease: '질 및 외음부의 기타 염증', code: 'N76' },
      { num: '7', disease: '달리 분류된 질환에서의 외음질의 궤양 및 염증', code: 'N77' }
    ]
  },
  {
    title: '[49대질병] 여성생식관의 비염증성 질환',
    items: [
      { num: '1', disease: '자궁내막증', code: 'N80' },
      { num: '2', disease: '여성생식기탈출', code: 'N81' },
      { num: '3', disease: '여성생식관을 침범한 누공', code: 'N82' },
      { num: '4', disease: '여성생식관의 용종', code: 'N84' },
      { num: '5', disease: '자궁경부를 제외한 자궁의 기타 비염증성 장애', code: 'N85' },
      { num: '6', disease: '자궁경부의 미란 및 외반', code: 'N86' },
      { num: '7', disease: '자궁경부의 이형성', code: 'N87' },
      { num: '8', disease: '자궁경부의 기타 비염증성 장애', code: 'N88' },
      { num: '9', disease: '질의 기타 비염증성 장애', code: 'N89' },
      { num: '10', disease: '외음부 및 회음부의 기타 비염증성 장애', code: 'N90' },
      { num: '11', disease: '무월경,소량및희발월경', code: 'N91' },
      { num: '12', disease: '과다,빈발및불규칙월경', code: 'N92' },
      { num: '13', disease: '기타 이상 자궁 및 질 출혈', code: 'N93' },
      { num: '14', disease: '여성생식기관 및 월경주기와 관련된 통증 및 기타병태', code: 'N94' },
      { num: '15', disease: '폐경 및 기타 폐경전후 장애', code: 'N95' }
    ]
  },
  {
    title: '[49대질병] 소화계통의 양성종양',
    items: [
      { num: '1', disease: '식도의 양성 신생물', code: 'D13.0' },
      { num: '2', disease: '위의 양성 신생물', code: 'D13.1' },
      { num: '3', disease: '십이지장의 양성 신생물', code: 'D13.2' },
      { num: '4', disease: '기타 및 상세불명 부분 소장의 양성 신생물', code: 'D13.3' },
      { num: '5', disease: '부위불명의 소화계통의 양성 신생물', code: 'D13.9' }
    ]
  },
  {
    title: '[49대질병] 상부호흡계통의 양성종양',
    items: [
      { num: '1', disease: '중이, 비강 및 부비동의 양성 신생물', code: 'D14.0' },
      { num: '2', disease: '후두의 양성 신생물', code: 'D14.1' }
    ]
  },
  {
    title: '[49대질병] 조직의 양성종양',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[49대질병] 생식기 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' },
      { num: '4', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[49대질병] 비뇨기관의 양성종양',
    items: [
      { num: '1', disease: '비뇨기관의 양성 신생물', code: 'D30' }
    ]
  },
  {
    title: '[49대질병] 눈의 양성종양',
    items: [
      { num: '1', disease: '각막의 양성 신생물', code: 'D31.1' },
      { num: '2', disease: '망막의 양성 신생물', code: 'D31.2' },
      { num: '3', disease: '맥락막의 양성 신생물', code: 'D31.3' },
      { num: '4', disease: '섬모체의 양성 신생물', code: 'D31.4' }
    ]
  },
  {
    title: '[49대질병] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[49대질병] 유방의 양성종양',
    items: [
      { num: '1', disease: '유방의 양성 신생물', code: 'D24' }
    ]
  },
  {
    title: '[49대질병] 안와의 장애',
    items: [
      { num: '1', disease: '안와의 장애', code: 'H05' }
    ]
  },
  {
    title: '[49대질병] 외이의 질환',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' }
    ]
  },
  {
    title: '[49대질병] 다한증',
    items: [
      { num: '1', disease: '다한증', code: 'R61' }
    ]
  },
  {
    title: '[49대질병] 위암',
    items: [
      { num: '1', disease: '위의 악성 신생물', code: 'C16' }
    ]
  },
  {
    title: '[49대질병] 갑상선암',
    items: [
      { num: '1', disease: '갑상선의 악성 신생물', code: 'C73' }
    ]
  },
  {
    title: '[49대질병] 특정소화기질환',
    items: [
      { num: '1', disease: '위 및 십이지장의 기타 질환[용종(K31.7)제외]', code: 'K31(K31.7제외)' }
    ]
  },

  // 별표32-5 백내장 분류표
  {
    title: '[백내장] 백내장',
    items: [
      { num: '1', disease: '노년백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  },

  // 별표32-6 6대질병 분류표
  {
    title: '[6대질병] 수면무호흡증',
    items: [
      { num: '1', disease: '수면무호흡', code: 'G47.3' }
    ]
  },
  {
    title: '[6대질병] 식도정맥류',
    items: [
      { num: '1', disease: '식도정맥류', code: 'I85' }
    ]
  },
  {
    title: '[6대질병] 요도결석증',
    items: [
      { num: '1', disease: '요도결석', code: 'N21.1' },
      { num: '2', disease: '기타 하부요로결석', code: 'N21.8' },
      { num: '3', disease: '상세불명의 하부요로결석', code: 'N21.9' }
    ]
  },
  {
    title: '[6대질병] 신장 및 요관의 결석',
    items: [
      { num: '1', disease: '신장 및 요관의 결석', code: 'N20' }
    ]
  },
  {
    title: '[6대질병] 치핵 및 항문주위 정맥혈전증',
    items: [
      { num: '1', disease: '포함: 치질 / 제외: 합병증 (출산 및 산후기 O87.2, 임신 O22.4)', code: 'K64' }
    ]
  },
  {
    title: '[6대질병] 치열 및 치루',
    items: [
      { num: '1', disease: '항문 및 직장부의 열창 및 누공', code: 'K60' },
      { num: '2', disease: '항문 및 직장부의 농양', code: 'K61' }
    ]
  }
];

// KB손해보험 116대 질병수술 상단 요약 분류표 데이터
export const KB_SURGERY_116_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  KB_SURGERY_116_SECTIONS.forEach((sec) => {
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

// DB손해보험 주요심,뇌5대혈관 및 양성뇌종양 분류표 데이터

export const KB_SURGERY_14_SECTIONS = [
  {
    title: '당뇨병질환',
    items: [
      { num: '1', disease: '인슐린-의존당뇨병', code: 'E10' },
      { num: '2', disease: '인슐린-비의존당뇨병', code: 'E11' },
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(일차성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장질환', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장질환', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간 질 환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25 ~ K27' },
      { num: '2', disease: '십이지장궤양', code: 'K25 ~ K27' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K25 ~ K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07, E89.0' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' }
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
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40 ~ J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40 ~ J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40 ~ J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '폐 렴',
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
    title: '백 내 장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '녹 내 장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결 핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신 부 전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  }
];

// KB손해보험 16대 질병 분류표 [별표15] 데이터
export const KB_SURGERY_16_SECTIONS = [
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
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
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
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    title: '위십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25 ~ K27' },
      { num: '2', disease: '십이지장궤양', code: 'K25 ~ K27' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K25 ~ K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07, E89.0' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' }
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
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40 ~ J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40 ~ J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40 ~ J42' },
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
      { num: '4', disease: '달리 분류되지 않은 세균 폐렴', code: 'J15' },
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
      { num: '4', disease: '기타 관절장애', code: 'M20 ~ M25' }
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
    title: '생식기질환',
    items: [
      { num: '1', disease: '남성생식기의 질환', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '여성골반내 기관의 염증성 질환', code: 'N70~N77' },
      { num: '3', disease: '여성 생식기관의 비염증성 장애 (습관유산자, 여성불임, 인공수정 관련 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  }
];

// KB손해보험 20대 질병 분류표 [별표] 데이터
export const KB_SURGERY_20_SECTIONS = [
  {
    title: '당뇨병질환',
    items: [
      { num: '1', disease: '인슐린-의존당뇨병', code: 'E10' },
      { num: '2', disease: '인슐린-비의존당뇨병', code: 'E11' },
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
    title: '심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00 ~ I02' },
      { num: '2', disease: '만성 류마티스 심장질환', code: 'I05 ~ I09' },
      { num: '3', disease: '허혈성 심장질환', code: 'I20 ~ I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26 ~ I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30 ~ I52' }
    ]
  },
  {
    title: '고혈압질환',
    items: [
      { num: '1', disease: '본태성(일차성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장질환', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장질환', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 뇌병증', code: 'I67.4' },
      { num: '7', disease: '고혈압성 망막병증', code: 'H35.02' }
    ]
  },
  {
    title: '뇌혈관질환',
    items: [
      { num: '1', disease: '뇌혈관 질환', code: 'I60 ~ I69' }
    ]
  },
  {
    title: '간 질 환',
    items: [
      { num: '1', disease: '바이러스 간염', code: 'B15 ~ B19' },
      { num: '2', disease: '간의 질환', code: 'K70 ~ K77' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25 ~ K27' },
      { num: '2', disease: '십이지장궤양', code: 'K25 ~ K27' },
      { num: '3', disease: '상세불명부위의 소화성궤양', code: 'K25 ~ K27' }
    ]
  },
  {
    title: '갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애', code: 'E00 ~ E07, E89.0' },
      { num: '2', disease: '처치후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '3', disease: '방사선조사후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' },
      { num: '4', disease: '수술후 갑상선기능저하증', code: 'E00 ~ E07, E89.0' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '만성하기도 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40 ~ J42' },
      { num: '2', disease: '단순성 및 점액농성 만성기관지염', code: 'J40 ~ J42' },
      { num: '3', disease: '상세불명의 만성기관지염', code: 'J40 ~ J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '폐 렴',
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
    title: '관 절 염',
    items: [
      { num: '1', disease: '감염성 관절병증', code: 'M00 ~ M03' },
      { num: '2', disease: '염증성 다발관절병증', code: 'M05 ~ M14' },
      { num: '3', disease: '관절증', code: 'M15 ~ M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20 ~ M25' }
    ]
  },
  {
    title: '백 내 장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타장애', code: 'H27' }
    ]
  },
  {
    title: '녹 내 장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '결 핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15 ~ A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' }
    ]
  },
  {
    title: '신 부 전',
    items: [
      { num: '1', disease: '신부전', code: 'N17 ~ N19' }
    ]
  },
  {
    title: '생식기질환',
    items: [
      { num: '1', disease: '남생식기관의 질환 (남성 불임 제외)', code: 'N40~N45, N47~N51' },
      { num: '2', disease: '여성골반내 기관의 염증성 질환', code: 'N70~N77' },
      { num: '3', disease: '여성 생식기관의 비염증성 장애 (습관유산자, 여성불임, 인공수정 관련 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },
  {
    title: '담 석 증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '사타구니탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '편 도 염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '축 농 증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  }
];

// DB손해보험 120대 질병수술 상단 요약 분류표 데이터
