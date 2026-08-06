import { SurgeryRecord } from './types';

// 삼성화재 1~8종 수술비 분류표 데이터 (고객 제공 이미지 기준 누락 없이 수록)
export const SURGERY_1TO8_RECORDS: SurgeryRecord[] = [
  // --- A: 이식 및 특수 수술 ---
  {
    id: '1to8-A010',
    category: '간 이식',
    name: '간 이식',
    code: 'A010',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A020',
    category: '폐 이식',
    name: '폐 이식',
    code: 'A020',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A030',
    category: '심장 이식',
    name: '심장 이식',
    code: 'A030',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A040',
    category: '장 이식',
    name: '췌장 이식',
    code: 'A040',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A050',
    category: '소장 이식',
    name: '소장 이식',
    code: 'A050',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A061',
    category: '조혈모세포 이식',
    name: '조혈모세포 이식, 동종이식',
    code: 'A061',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A062',
    category: '조혈모세포 이식',
    name: '조혈모세포 이식, 자가이식',
    code: 'A062',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A070',
    category: '신장 이식',
    name: '신장 이식',
    code: 'A070',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A080',
    category: '체외순환막형산화요법(ECMO), 개심술미동반',
    name: '체외순환막형 산화요법(ECMO), 개심술 미동반',
    code: 'A080',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A091',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애의 경우), 인공호흡기 장기 사용',
    code: 'A091',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A092',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애의 경우), 인공호흡기 단기 사용',
    code: 'A092',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A093',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애의 경우), 인공호흡기 미사용',
    code: 'A093',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A094',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애 제외), 인공호흡기 장기 사용',
    code: 'A094',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A095',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애 제외), 인공호흡기 단기 사용',
    code: 'A095',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A096',
    category: '기관절개술',
    name: '기관 절개술(안면, 구강, 경부 장애 제외), 인공호흡기 미사용',
    code: 'A096',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-A100',
    category: '사지 이식',
    name: '사지 이식',
    code: 'A100',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },

  // --- B: 뇌 및 신경계 수술 ---
  {
    id: '1to8-B011',
    category: '뇌동맥류수술',
    name: '복잡 뇌동맥류 수술(뇌졸중 동반)',
    code: 'B011',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B012',
    category: '뇌동맥류수술',
    name: '단순 뇌동맥류 수술(뇌졸중 동반)',
    code: 'B012',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B013',
    category: '뇌동맥류수술',
    name: '복잡 뇌동맥류 수술(뇌졸중 미동반)',
    code: 'B013',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B014',
    category: '뇌동맥류수술',
    name: '단순 뇌동맥류 수술(뇌졸중 미동반)',
    code: 'B014',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B015',
    category: '뇌동맥류수술',
    name: '뇌동맥류 색전술(뇌졸중 동반)',
    code: 'B015',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B016',
    category: '뇌동맥류수술',
    name: '뇌동맥류 색전술(뇌졸중 미동반)',
    code: 'B016',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B017',
    category: '뇌동맥류수술',
    name: '뇌동맥류 복합 수술(뇌졸중 동반)',
    code: 'B017',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B018',
    category: '뇌동맥류수술',
    name: '뇌동맥류 복합 색전술(뇌졸중 동반)',
    code: 'B018',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B021',
    category: '뇌혈관수술',
    name: '두개내 혈관 수술(뇌졸중 동반)',
    code: 'B021',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B022',
    category: '뇌혈관수술',
    name: '두개내 혈관 수술(뇌졸중 미동반)',
    code: 'B022',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B023',
    category: '뇌혈관수술',
    name: '뇌신경계 혈관기형 및 동정맥루 색전술(뇌졸중 동반)',
    code: 'B023',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B024',
    category: '뇌혈관수술',
    name: '뇌신경계 혈관기형 및 동정맥루 색전술(뇌졸중 미동반)',
    code: 'B024',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B025',
    category: '뇌혈관수술',
    name: '경피적 뇌혈관 수술(협착·폐쇄 및 혈전제거 동시의 경우)',
    code: 'B025',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B026',
    category: '뇌혈관수술',
    name: '경피적 뇌혈관 수술(협착 및 폐쇄의 경우)',
    code: 'B026',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B027',
    category: '뇌혈관수술',
    name: '경피적 뇌혈관 수술(혈전제거의 경우)',
    code: 'B027',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B031',
    category: '혈종제거술 및 기타개두술(외상 제외)',
    name: '혈종제거술(외상 제외)',
    code: 'B031',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B032',
    category: '혈종제거술 및 기타개두술(외상 제외)',
    name: '두개내 감압술(외상 제외)',
    code: 'B032',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B033',
    category: '혈종제거술 및 기타개두술(외상 제외)',
    name: '두개골 성형술(외상 제외)',
    code: 'B033',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B041',
    category: '두개외 혈관수술',
    name: '두개외 혈관수술(뇌졸중 동반)',
    code: 'B041',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B042',
    category: '두개외 혈관수술',
    name: '두개외 혈관수술(뇌졸중 미동반)',
    code: 'B042',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B043',
    category: '두개외 혈관수술',
    name: '경피적 두개외 혈관수술',
    code: 'B043',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B050',
    category: '뇌기저부 수술',
    name: '뇌기저부 수술',
    code: 'B050',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B061',
    category: '뇌종양 절제술',
    name: '복잡 천막상부 종양절제술',
    code: 'B061',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B062',
    category: '뇌종양 절제술',
    name: '단순 천막상부 종양절제술',
    code: 'B062',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B063',
    category: '뇌종양 절제술',
    name: '복잡 천막하부 종양절제술',
    code: 'B063',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B064',
    category: '뇌종양 절제술',
    name: '단순 천막하부 종양절제술',
    code: 'B064',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B065',
    category: '뇌종양 절제술',
    name: '경피적 뇌신경계 종양 수술',
    code: 'B065',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B066',
    category: '뇌종양 절제술',
    name: '경비적 뇌하수체 종양 절제술',
    code: 'B066',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B070',
    category: '신경계 신경자극기 설치술',
    name: '신경계 신경자극기 설치술',
    code: 'B070',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B081',
    category: '뇌전증 수술',
    name: '뇌전증 수술(전극삽입술 시행)',
    code: 'B081',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B082',
    category: '뇌전증 수술',
    name: '뇌전증 수술(전극삽입술 미시행)',
    code: 'B082',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B091',
    category: '정위수술',
    name: '중추신경계 정위수술(뇌종양 및 기타 병소발생술)',
    code: 'B091',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B092',
    category: '정위수술',
    name: '중추신경계 정위수술(두개내 출혈)',
    code: 'B092',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B093',
    category: '정위수술',
    name: '뇌정위 방사선 수술(두개내 출혈 및 뇌혈관 기형)',
    code: 'B093',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B094',
    category: '정위수술',
    name: '뇌정위 방사선 수술(양성 뇌종양)',
    code: 'B094',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B095',
    category: '정위수술',
    name: '뇌정위 방사선 수술(기타)',
    code: 'B095',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B096',
    category: '정위수술',
    name: '중추신경계 체부 정위 방사선 수술',
    code: 'B096',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B100',
    category: '뇌신경 수술',
    name: '뇌신경 수술',
    code: 'B100',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B110',
    category: '뇌척수액 우회로조성술',
    name: '뇌척수액 우회로조성술',
    code: 'B110',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B121',
    category: '외상 개두술',
    name: '혈종제거술(외상 관련), 경막외 출혈',
    code: 'B121',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B122',
    category: '외상 개두술',
    name: '혈종제거술(외상 관련), 경막하 출혈',
    code: 'B122',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B123',
    category: '외상 개두술',
    name: '혈종제거술(외상 관련), 뇌내 출혈',
    code: 'B123',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B124',
    category: '외상 개두술',
    name: '두개내 감압술(외상 관련)',
    code: 'B124',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B125',
    category: '외상 개두술',
    name: '두개골 성형술(외상 관련)',
    code: 'B125',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B130',
    category: '기타 개두술',
    name: '기타 개두술',
    code: 'B130',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B141',
    category: '천두술',
    name: '천두술(경막하 또는 경막외)',
    code: 'B141',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B142',
    category: '천두술',
    name: '천두술(뇌내)',
    code: 'B142',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B143',
    category: '천두술',
    name: '천두술(기타)',
    code: 'B143',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B151',
    category: '척추강내 병소절제술',
    name: '척수내 종양절제술',
    code: 'B151',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B152',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척수병증 동반)',
    code: 'B152',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B153',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척수병증 미동반)',
    code: 'B153',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B154',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척추고정술 동반)',
    code: 'B154',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B161',
    category: '척추변형 척추고정술',
    name: '청소년기 척추변형 척추고정술',
    code: 'B161',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B162',
    category: '척추변형 척추고정술',
    name: '성인기 척추변형 척추고정술(감압술 동반)',
    code: 'B162',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B163',
    category: '척추변형 척추고정술',
    name: '성인기 척추변형 척추고정술(감압술 미동반)',
    code: 'B163',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B171',
    category: '기타 척추 수술',
    name: '척추고정술(척수병증 동반)',
    code: 'B171',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B172',
    category: '기타 척추 수술',
    name: '척추고정술(척수병증 미동반)',
    code: 'B172',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B173',
    category: '기타 척추 수술',
    name: '척추후궁절제술 및 추간판제거술(척수병증 동반)',
    code: 'B173',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B174',
    category: '기타 척추 수술',
    name: '척추후궁절제술 및 추간판제거술(척수병증 미동반)',
    code: 'B174',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B175',
    category: '기타 척추 수술',
    name: '기타 척추 수술(척수병증 동반)',
    code: 'B175',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B176',
    category: '기타 척추 수술',
    name: '기타 척추 수술(척수병증 미동반)',
    code: 'B176',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B181',
    category: '척추 중재시술',
    name: '척추 중재시술(뼈에 시행한 경우)',
    code: 'B181',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B182',
    category: '척추 중재시술',
    name: '척추 중재시술(신경에 시행한 경우)',
    code: 'B182',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B191',
    category: '신경절설 및 척추강내 약물주입 펌프이식술',
    name: '척수신경자극기 및 약물주입 펌프의 설치술 또는 교환술',
    code: 'B191',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B192',
    category: '신경절설 및 척추강내 약물주입 펌프이식술',
    name: '척수신경자극기 및 약물주입 펌프의 시험적 거치술 또는 제거술',
    code: 'B192',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B201',
    category: '기타 신경계수술',
    name: '주요 말초 및 뇌 신경 수술',
    code: 'B201',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B202',
    category: '기타 신경계수술',
    name: '기타 말초 및 뇌 신경 수술',
    code: 'B202',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B203',
    category: '기타 신경계수술',
    name: '수근관 이완술',
    code: 'B203',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B204',
    category: '기타 신경계수술',
    name: '기타 근육, 건 및 인대 이완술',
    code: 'B204',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B205',
    category: '기타 신경계수술',
    name: '기타 신경계 수술',
    code: 'B205',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B211',
    category: '복잡 척추수술',
    name: '복잡 척추교정술',
    code: 'B211',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-B212',
    category: '복잡 척추수술',
    name: '복잡 척추후궁절제술',
    code: 'B212',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C011',
    category: '안부 관통상 수술',
    name: '복잡 안부 관통상 수술',
    code: 'C011',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C012',
    category: '안부 관통상 수술',
    name: '전안부 관통상 수술(수정체 수술 동반)',
    code: 'C012',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C013',
    category: '안부 관통상 수술',
    name: '전안부 관통상 수술(수정체 수술 미동반)',
    code: 'C013',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C014',
    category: '안부 관통상 수술',
    name: '후안부 관통상 수술',
    code: 'C014',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C021',
    category: '안와 수술',
    name: '복잡 안와 수술, 한쪽',
    code: 'C021',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C022',
    category: '안와 수술',
    name: '복잡 안와 수술, 양쪽',
    code: 'C022',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C023',
    category: '안와 수술',
    name: '단순 안와 수술',
    code: 'C023',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C030',
    category: '안구 수술(종양 수술 포함)',
    name: '안구 수술(종양 수술 포함)',
    code: 'C030',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C043',
    category: '망막 및 유리체 수술',
    name: '망막 및 유리체 수술(망막주위막 제거술 동반, 수정체 수술 동반)',
    code: 'C043',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C044',
    category: '망막 및 유리체 수술',
    name: '망막 및 유리체 수술(망막주위막 제거술 동반, 수정체 수술 미동반)',
    code: 'C044',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C045',
    category: '망막 및 유리체 수술',
    name: '망막 및 유리체 수술(망막주위막 제거술 미동반, 수정체 수술 동반)',
    code: 'C045',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C046',
    category: '망막 및 유리체 수술',
    name: '망막 및 유리체 수술(망막주위막 제거술 미동반, 수정체 수술 미동반)',
    code: 'C046',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C051',
    category: '안구 표면재건술',
    name: '주요 각막이식수술',
    code: 'C051',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C052',
    category: '안구 표면재건술',
    name: '기타 각막이식수술',
    code: 'C052',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C053',
    category: '안구 표면재건술',
    name: '공막 및 각막윤부이식수술',
    code: 'C053',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C061',
    category: '수정체 소절개 수술(유리체 절제술 유무와 무관)',
    name: '주요 수정체 소절개 수술(유리체 절제술 유무와 무관), 한쪽',
    code: 'C061',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C062',
    category: '수정체 소절개 수술(유리체 절제술 유무와 무관)',
    name: '기타 수정체 소절개 수술(유리체 절제술 유무와 무관), 한쪽',
    code: 'C062',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C063',
    category: '수정체 소절개 수술(유리체 절제술 유무와 무관)',
    name: '주요 수정체 소절개 수술(유리체 절제술 유무와 무관), 양쪽',
    code: 'C063',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C064',
    category: '수정체 소절개 수술(유리체 절제술 유무와 무관)',
    name: '기타 수정체 소절개 수술(유리체 절제술 유무와 무관), 양쪽',
    code: 'C064',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C071',
    category: '수정체 대절개 수술(유리체 절제술 유무와 무관)',
    name: '수정체 대절개 수술(유리체 절제술 유무와 무관), 한쪽',
    code: 'C071',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C072',
    category: '수정체 대절개 수술(유리체 절제술 유무와 무관)',
    name: '기타 수정체 대절개 수술(유리체 절제술 유무와 무관), 한쪽',
    code: 'C072',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C073',
    category: '수정체 대절개 수술(유리체 절제술 유무와 무관)',
    name: '기타 수정체 대절개 수술(유리체 절제술 유무와 무관), 양쪽',
    code: 'C073',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C080',
    category: '후발성 백내장 수술',
    name: '후발성 백내장 수술',
    code: 'C080',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C091',
    category: '녹내장 수술',
    name: '복잡 녹내장 수술(수정체 수술 동반)',
    code: 'C091',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C092',
    category: '녹내장 수술',
    name: '복잡 녹내장 수술(수정체 수술 미동반)',
    code: 'C092',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C093',
    category: '녹내장 수술',
    name: '단순 녹내장 수술(수정체 수술 동반)',
    code: 'C093',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C094',
    category: '녹내장 수술',
    name: '단순 녹내장 수술(수정체 수술 미동반)',
    code: 'C094',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C101',
    category: '기타 안구내 수술',
    name: '기타 주요 안구내 수술',
    code: 'C101',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C102',
    category: '기타 안구내 수술',
    name: '기타 단순 안구내 수술',
    code: 'C102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C111',
    category: '사시 수술',
    name: '복잡 사시 수술',
    code: 'C111',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C112',
    category: '사시 수술',
    name: '단순 사시 수술',
    code: 'C112',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C121',
    category: '안검 수술',
    name: '복잡 안검 수술, 제1형',
    code: 'C121',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C122',
    category: '안검 수술',
    name: '복잡 안검 수술, 제2형',
    code: 'C122',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C123',
    category: '안검 수술',
    name: '복잡 안검 수술, 제3형',
    code: 'C123',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C124',
    category: '안검 수술',
    name: '주요 안검 수술, 제1형',
    code: 'C124',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C125',
    category: '안검 수술',
    name: '주요 안검 수술, 제2형',
    code: 'C125',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C126',
    category: '안검 수술',
    name: '주요 안검 수술, 제3형',
    code: 'C126',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C127',
    category: '안검 수술',
    name: '기타 안검 수술',
    code: 'C127',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C131',
    category: '눈물길 수술',
    name: '복잡 눈물길 수술',
    code: 'C131',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C132',
    category: '눈물길 수술',
    name: '주요 눈물길 수술, 한쪽',
    code: 'C132',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C133',
    category: '눈물길 수술',
    name: '주요 눈물길 수술, 양쪽',
    code: 'C133',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C135',
    category: '눈물길 수술',
    name: '기타 눈물길 수술(경비내시경 포함), 단안',
    code: 'C135',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C136',
    category: '눈물길 수술',
    name: '기타 눈물길 수술(경비내시경 포함), 양안',
    code: 'C136',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C141',
    category: '결막 수술',
    name: '결막낭 재건술',
    code: 'C141',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C142',
    category: '결막 수술',
    name: '복잡 결막 수술',
    code: 'C142',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C143',
    category: '결막 수술',
    name: '단순 결막 수술',
    code: 'C143',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-C150',
    category: '기타 안구외수술',
    name: '기타 안구외 수술',
    code: 'C150',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D011',
    category: '내이 수술',
    name: '귀 이식술',
    code: 'D011',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D012',
    category: '내이 수술',
    name: '주요 내이 수술',
    code: 'D012',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D013',
    category: '내이 수술',
    name: '단순 내이 수술',
    code: 'D013',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D021',
    category: '중이 및 유양돌기 수술',
    name: '고실유양돌기 수술',
    code: 'D021',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D022',
    category: '중이 및 유양돌기 수술',
    name: '유양돌기 수술',
    code: 'D022',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D023',
    category: '중이 및 유양돌기 수술',
    name: '고실 수술',
    code: 'D023',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D024',
    category: '중이 및 유양돌기 수술',
    name: '이소골 재건술',
    code: 'D024',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D025',
    category: '중이 및 유양돌기 수술',
    name: '등골수술',
    code: 'D025',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D026',
    category: '중이 및 유양돌기 수술',
    name: '환기관삽입 고막절개술',
    code: 'D026',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D031',
    category: '외이 및 귀 수술',
    name: '주요 외이 및 귀 수술',
    code: 'D031',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D032',
    category: '외이 및 귀 수술',
    name: '단순 외이 및 귀 수술',
    code: 'D032',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D041',
    category: '귀 및 코의 악성종양 수술',
    name: '귀 및 두개저 악성종양 수술',
    code: 'D041',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D042',
    category: '귀 및 코의 악성종양 수술',
    name: '비강, 부비동, 비인강 악성종양',
    code: 'D042',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D051',
    category: '부비동개방 수술',
    name: '부비동 개방 수술(한 개, 한쪽)',
    code: 'D051',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D052',
    category: '부비동개방 수술',
    name: '부비동 개방 수술(한 개, 양쪽)',
    code: 'D052',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D053',
    category: '부비동개방 수술',
    name: '부비동 개방 수술(여러 개, 한쪽)',
    code: 'D053',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D054',
    category: '부비동개방 수술',
    name: '부비동 개방 수술(여러 개, 양쪽)',
    code: 'D054',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D061',
    category: '내시경을 이용한 부비동 수술',
    name: '내시경을 이용한 부비동 수술(한 개, 한쪽)',
    code: 'D061',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D062',
    category: '내시경을 이용한 부비동 수술',
    name: '내시경을 이용한 부비동 수술(한 개, 양쪽)',
    code: 'D062',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D065',
    category: '내시경을 이용한 부비동 수술',
    name: '내시경을 이용한 부비동 수술(여러 개, 한쪽)',
    code: 'D065',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D066',
    category: '내시경을 이용한 부비동 수술',
    name: '복잡 내시경을 이용한 부비동 수술(여러 개, 한쪽)',
    code: 'D066',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D067',
    category: '내시경을 이용한 부비동 수술',
    name: '내시경을 이용한 부비동 수술(여러 개, 양쪽)',
    code: 'D067',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D068',
    category: '내시경을 이용한 부비동 수술',
    name: '복잡 내시경을 이용한 부비동 수술(여러 개, 양쪽)',
    code: 'D068',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D081',
    category: '코 수술',
    name: '주요 코 수술',
    code: 'D081',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D082',
    category: '코 수술',
    name: '비중격 및 비갑개수술',
    code: 'D082',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D083',
    category: '코 수술',
    name: '단순 코 수술',
    code: 'D083',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D090',
    category: '구강 및 타액선 악성종양 수술',
    name: '구강 및 타액선 악성종양 수술',
    code: 'D090',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D101',
    category: '후두 및 인두 악성종양 수술',
    name: '주요 후두 및 인두 악성종양 수술(경동맥소체 포함)',
    code: 'D101',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D102',
    category: '후두 및 인두 악성종양 수술',
    name: '단순 후두 및 인두 악성종양 수술',
    code: 'D102',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D111',
    category: '경부림프절절제술',
    name: '경부림프절절제술, 한쪽',
    code: 'D111',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D112',
    category: '경부림프절절제술',
    name: '경부림프절절제술, 양쪽',
    code: 'D112',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D121',
    category: '안면골 수술',
    name: '악관절 수술',
    code: 'D121',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D122',
    category: '안면골 수술',
    name: '주요 안면골 수술',
    code: 'D122',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D123',
    category: '안면골 수술',
    name: '단순 안면골 수술',
    code: 'D123',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D130',
    category: '두경부 재건술',
    name: '두경부 재건술',
    code: 'D130',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D141',
    category: '타액선 수술',
    name: '이하선수술',
    code: 'D141',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D142',
    category: '타액선 수술',
    name: '악하선 및 설하선 수술',
    code: 'D142',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D143',
    category: '타액선 수술',
    name: '기타 타액선 수술',
    code: 'D143',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D144',
    category: '타액선 수술',
    name: '타석제거술',
    code: 'D144',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D150',
    category: '경부 수술',
    name: '경부 수술',
    code: 'D150',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D161',
    category: '편도 및 아데노이드 수술',
    name: '주요 편도 및 아데노이드 수술',
    code: 'D161',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D162',
    category: '편도 및 아데노이드 수술',
    name: '단순 편도 및 아데노이드 수술',
    code: 'D162',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D171',
    category: '구강, 인후두 수술',
    name: '주요 구강 및 인두, 후두 수술',
    code: 'D171',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D172',
    category: '구강, 인후두 수술',
    name: '단순 구강 및 인두, 후두 수술',
    code: 'D172',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-D200',
    category: '기타 이비인후, 구강 질환 수술',
    name: '기타 이비인후, 구강 질환 수술',
    code: 'D200',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E011',
    category: '주요 흉부 수술',
    name: '기관 및 기관지 수술',
    code: 'E011',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E012',
    category: '주요 흉부 수술',
    name: '주요 폐 수술(악성종양의 경우)',
    code: 'E012',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E013',
    category: '주요 흉부 수술',
    name: '주요 폐 수술(악성종양 제외)',
    code: 'E013',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E014',
    category: '주요 흉부 수술',
    name: '기타 폐 수술',
    code: 'E014',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E015',
    category: '주요 흉부 수술',
    name: '종격동 수술',
    code: 'E015',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E016',
    category: '주요 흉부 수술',
    name: '주요 흉곽 수술',
    code: 'E016',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E017',
    category: '주요 흉부 수술',
    name: '기타 흉곽 수술',
    code: 'E017',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E018',
    category: '주요 흉부 수술',
    name: '흉강경을 이용한 주요 수술',
    code: 'E018',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E019',
    category: '주요 흉부 수술',
    name: '흉강경을 이용한 기타 수술',
    code: 'E019',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E020',
    category: '기관지경 및 방사선하 수술',
    name: '기관지경 및 방사선하 수술',
    code: 'E020',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E032',
    category: '기타 호흡기계 수술',
    name: '수면무호흡증후군 수술',
    code: 'E032',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E033',
    category: '기타 호흡기계 수술',
    name: '호흡기계 기타 단순 수술',
    code: 'E033',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E034',
    category: '기타 호흡기계 수술',
    name: '기타 호흡기계 수술',
    code: 'E034',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E520',
    category: '폐농양 배액술',
    name: '폐농양 배액술',
    code: 'E520',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-E530',
    category: '흉막삼출 배액술',
    name: '흉막삼출 배액술',
    code: 'E530',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F011',
    category: '자동체내제세동기 시술',
    name: '자동체내제세동기 설치술 또는 교환술',
    code: 'F011',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F012',
    category: '자동체내제세동기 시술',
    name: '자동체내제세동기 교정술',
    code: 'F012',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F021',
    category: '심장판막 수술(심도자술 사용)',
    name: '대동맥판 수술(심도자술 사용)',
    code: 'F021',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F022',
    category: '심장판막 수술(심도자술 사용)',
    name: '승모판 또는 삼천판 수술(심도자술 사용)',
    code: 'F022',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F023',
    category: '심장판막 수술(심도자술 사용)',
    name: '폐동맥판 수술(심도자술 사용)',
    code: 'F023',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F031',
    category: '심장판막 수술(심도자술 미사용)',
    name: '대동맥판 수술(심도자술 미사용)',
    code: 'F031',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F032',
    category: '심장판막 수술(심도자술 미사용)',
    name: '승모판 또는 삼천판 수술(심도자술 미사용)',
    code: 'F032',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F033',
    category: '심장판막 수술(심도자술 미사용)',
    name: '폐동맥판 수술(심도자술 미사용)',
    code: 'F033',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F041',
    category: '관상동맥 우회로 조성술',
    name: '관상동맥 우회로 조성술(심도자술 사용, 인공심장폐장치 사용)',
    code: 'F041',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F042',
    category: '관상동맥 우회로 조성술',
    name: '관상동맥 우회로 조성술(심도자술 미사용, 인공심장폐장치 사용)',
    code: 'F042',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F043',
    category: '관상동맥 우회로 조성술',
    name: '관상동맥 우회로 조성술(심도자술 사용, 인공심장폐장치 미사용)',
    code: 'F043',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F044',
    category: '관상동맥 우회로 조성술',
    name: '관상동맥 우회로 조성술(심도자술 미사용, 인공심장폐장치 미사용)',
    code: 'F044',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F053',
    category: '기타 심홍부 수술',
    name: '기타 심홍부 수술(인공심장폐장치 사용)',
    code: 'F053',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F054',
    category: '기타 심홍부 수술',
    name: '기타 심홍부 수술(인공심장폐장치 미사용)',
    code: 'F054',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F061',
    category: '주요 혈관복구 수술(인공심장폐장치 사용)',
    name: '파열 동맥류 또는 대동맥 축착 교정술(인공심장폐장치 사용)',
    code: 'F061',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F062',
    category: '주요 혈관복구 수술(인공심장폐장치 사용)',
    name: '비파열 동맥류 또는 대동맥 축착 교정술(인공심장폐장치 사용)',
    code: 'F062',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F063',
    category: '주요 혈관복구 수술(인공심장폐장치 사용)',
    name: '기타 주요 혈관복구 수술(인공심장폐장치 사용)',
    code: 'F063',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F071',
    category: '주요 혈관복구 수술(인공심장폐장치 미사용)',
    name: '파열 동맥류 또는 대동맥 축착 교정술(인공심장폐장치 미사용)',
    code: 'F071',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F072',
    category: '주요 혈관복구 수술(인공심장폐장치 미사용)',
    name: '비파열 동맥류 또는 대동맥 축착 교정술(인공심장폐장치 미사용)',
    code: 'F072',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F073',
    category: '주요 혈관복구 수술(인공심장폐장치 미사용)',
    name: '기타 주요 혈관복구 수술(인공심장폐장치 미사용)',
    code: 'F073',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F081',
    category: '대동맥 경피적 수술',
    name: '복부대동맥 및 장골동맥류 경피적 수술(파열 미동반)',
    code: 'F081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F082',
    category: '대동맥 경피적 수술',
    name: '복부대동맥 및 장골동맥류 경피적 수술(파열 동반)',
    code: 'F082',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F083',
    category: '대동맥 경피적 수술',
    name: '흉부대동맥류 경피적 수술',
    code: 'F083',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F084',
    category: '대동맥 경피적 수술',
    name: '대동맥박리 경피적 수술',
    code: 'F084',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F091',
    category: '정맥 및 대정맥 경피적 수술',
    name: '심부정맥혈전증 경피적 수술',
    code: 'F091',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F092',
    category: '정맥 및 대정맥 경피적 수술',
    name: '대정맥 필터설치를 위한 경피적 수술',
    code: 'F092',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F101',
    category: '경도관 심장결손 폐쇄술',
    name: '경도관 심방중격결손 폐쇄술',
    code: 'F101',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F102',
    category: '경도관 심장결손 폐쇄술',
    name: '경도관 동맥관개존증 폐쇄술',
    code: 'F102',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F103',
    category: '경도관 심장결손 폐쇄술',
    name: '기타 경도관 심장 결손 폐쇄술',
    code: 'F103',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F111',
    category: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 동반)',
    name: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 동반, 단일혈관)',
    code: 'F111',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F112',
    category: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 동반)',
    name: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 동반, 다발혈관)',
    code: 'F112',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F121',
    category: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 미동반)',
    name: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 미동반, 단일혈관)',
    code: 'F121',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F122',
    category: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 미동반)',
    name: '급성 심근경색증의 경피적 관상동맥 수술(심각한 합병증 미동반, 다발혈관)',
    code: 'F122',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F133',
    category: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술',
    name: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술(단일혈관, 만성폐쇄성병변의 경우 제외)',
    code: 'F133',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F134',
    category: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술',
    name: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술(단일혈관, 만성폐쇄성병변의 경우 포함)',
    code: 'F134',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F135',
    category: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술',
    name: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술(다발혈관, 만성폐쇄성병변의 경우 제외)',
    code: 'F135',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F136',
    category: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술',
    name: '급성 심근경색증이 아닌 기타 경피적 관상동맥 수술(다발혈관, 만성폐쇄성병변의 경우 포함)',
    code: 'F136',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F141',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 포함)',
    name: '심실빈맥 전극도자 절제술(3차원 지도화 기능 포함)',
    code: 'F141',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F142',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 포함)',
    name: '심방세동 전극도자 절제술(3차원 지도화 기능 포함)',
    code: 'F142',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F143',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 포함)',
    name: '발작성 심실상빈맥 및 심방조동 전극도자 절제술(3차원 지도화 기능 포함)',
    code: 'F143',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F151',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 미포함)',
    name: '심실빈맥 전극도자 절제술(3차원 지도화 기능 미포함)',
    code: 'F151',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F152',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 미포함)',
    name: '심방세동 전극도자 절제술(3차원 지도화 기능 미포함)',
    code: 'F152',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F153',
    category: '부정맥의 경피적 수술(3차원 지도화 기능 미포함)',
    name: '발작성 심실상빈맥 및 심방조동 전극도자 절제술(3차원 지도화 기능 미포함)',
    code: 'F153',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F161',
    category: '경피적 풍선 판막성형술',
    name: '경피적 승모판 풍선 판막성형술',
    code: 'F161',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F162',
    category: '경피적 풍선 판막성형술',
    name: '경피적 대동맥 또는 폐동맥 풍선 판막성형술',
    code: 'F162',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F181',
    category: '혈관 기형의 경피적 수술',
    name: '동정맥 기형의 경피적 색전술(두경부 제외)',
    code: 'F181',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F182',
    category: '혈관 기형의 경피적 수술',
    name: '관상동맥 및 폐동맥 기형의 경피적 색전술(두경부 제외)',
    code: 'F182',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F192',
    category: '말초동맥의 경피적 수술',
    name: '말초동맥 색전증 및 혈전증의 경피적 수술',
    code: 'F192',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F193',
    category: '말초동맥의 경피적 수술',
    name: '말초동맥 동맥류 및 박리의 경피적 수술',
    code: 'F193',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F194',
    category: '말초동맥의 경피적 수술',
    name: '말초동맥 만성 폐쇄성 질환의 경피적 수술, 여러 개',
    code: 'F194',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F195',
    category: '말초동맥의 경피적 수술',
    name: '말초동맥 만성 폐쇄성 질환의 경피적 수술, 한 개',
    code: 'F195',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F200',
    category: '기타 경피적 심혈관 수술',
    name: '기타 경피적 심혈관 수술',
    code: 'F200',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F211',
    category: '체내 심박조율기 설치술(급성 심근경색증, 심부전, 쇼크의 경우)',
    name: '영구적 심박조율기 설치술',
    code: 'F211',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F212',
    category: '체내 심박조율기 설치술(급성 심근경색증, 심부전, 쇼크의 경우)',
    name: '영구적 심박조율기 교환술',
    code: 'F212',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F213',
    category: '체내 심박조율기 설치술(급성 심근경색증, 심부전, 쇼크의 경우)',
    name: '심박조율기 제거 및 전환술',
    code: 'F213',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F220',
    category: '기타 혈관 복구 수술',
    name: '기타 혈관 복구 수술',
    code: 'F220',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F230',
    category: '순환 장애 절단술(수족부 제외)',
    name: '순환 장애 절단술(수족부 제외)',
    code: 'F230',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F240',
    category: '순환 장애 수족부 절단술',
    name: '순환 장애 수족부 절단술',
    code: 'F240',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F253',
    category: '정맥 결찰 및 스트리핑',
    name: '정맥류 광범위 절제술(여러 개)',
    code: 'F253',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F254',
    category: '정맥 결찰 및 스트리핑',
    name: '정맥류 광범위 절제술(한 개)',
    code: 'F254',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F252',
    category: '정맥 결찰 및 스트리핑',
    name: '정맥류 국소 절제술',
    code: 'F252',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-F260',
    category: '기타 순환기계 수술',
    name: '기타 순환기계 수술',
    code: 'F260',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G011',
    category: '식도 수술',
    name: '식도 악성종양 근치 수술 및 식도 재건술',
    code: 'G011',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G012',
    category: '식도 수술',
    name: '기타 주요 식도 수술',
    code: 'G012',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G013',
    category: '식도 수술',
    name: '기타 단순 식도 수술',
    code: 'G013',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G021',
    category: '직장절제술(림프절절제 동반)',
    name: '복강경을 이용한 직장절제술(림프절절제 동반)',
    code: 'G021',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G022',
    category: '직장절제술(림프절절제 동반)',
    name: '개복에 의한 직장절제술(림프절절제 동반)',
    code: 'G022',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G031',
    category: '직장절제술(림프절절제 미동반)',
    name: '복강경을 이용한 직장절제술(림프절절제 미동반)',
    code: 'G031',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G032',
    category: '직장절제술(림프절절제 미동반)',
    name: '개복에 의한 직장절제술(림프절절제 미동반)',
    code: 'G032',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G041',
    category: '경항문 및 경천골 접근 직장절제술',
    name: '경항문 및 경천골 접근 직장절제술(악성 종양의 경우)',
    code: 'G041',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G042',
    category: '경항문 및 경천골 접근 직장절제술',
    name: '경항문 및 경천골 접근 직장절제술(악성 종양 제외)',
    code: 'G042',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G050',
    category: '주요십이지장수술',
    name: '주요 십이지장 수술',
    code: 'G050',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G060',
    category: '식도정맥류수술',
    name: '식도 정맥류 수술',
    code: 'G060',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G071',
    category: '위전절제술',
    name: '복강경을 이용한 위전절제술',
    code: 'G071',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G072',
    category: '위전절제술',
    name: '개복에 의한 위전절제술',
    code: 'G072',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G081',
    category: '위아전절제술',
    name: '복강경을 이용한 위아전절제술',
    code: 'G081',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G082',
    category: '위아전절제술',
    name: '개복에 의한 위아전절제술',
    code: 'G082',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G091',
    category: '기타 위절제술',
    name: '복강경을 이용한 기타 위절제술',
    code: 'G091',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G092',
    category: '기타 위절제술',
    name: '개복에 의한 기타 위절제술',
    code: 'G092',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G093',
    category: '기타 위절제술',
    name: '복강경을 이용한 기타 설상절제술',
    code: 'G093',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G094',
    category: '기타 위절제술',
    name: '개복에 의한 기타 설상절제술',
    code: 'G094',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G101',
    category: '소화성 궤양 수술',
    name: '복강경을 이용한 소화성 궤양 수술',
    code: 'G101',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G102',
    category: '소화성 궤양 수술',
    name: '개복에 의한 소화성 궤양 수술',
    code: 'G102',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G111',
    category: '기타 위 및 식도 수술',
    name: '복강경을 이용한 기타 위 및 식도 수술',
    code: 'G111',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G112',
    category: '기타 위 및 식도 수술',
    name: '개복에 의한 기타 위 및 식도 수술',
    code: 'G112',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G121',
    category: '결장 및 직장 전 절제술',
    name: '복강경을 이용한 결장 및 직장 전 절제술',
    code: 'G121',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G122',
    category: '결장 및 직장 전 절제술',
    name: '개복에 의한 결장 및 직장 전 절제술',
    code: 'G122',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G131',
    category: '결장절제술(림프절절제 동반)',
    name: '복강경을 이용한 결장절제술(림프절절제 동반)',
    code: 'G131',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G132',
    category: '결장절제술(림프절절제 동반)',
    name: '개복에 의한 결장절제술(림프절절제 동반)',
    code: 'G132',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G141',
    category: '결장절제술(림프절절제 미동반)',
    name: '복강경을 이용한 결장절제술(림프절절제 미동반)',
    code: 'G141',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G142',
    category: '결장절제술(림프절절제 미동반)',
    name: '개복에 의한 결장절제술(림프절절제 미동반)',
    code: 'G142',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G151',
    category: '기타 대장 수술',
    name: '복강경을 이용한 기타 대장 수술',
    code: 'G151',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G152',
    category: '기타 대장 수술',
    name: '개복에 의한 기타 대장 수술',
    code: 'G152',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G171',
    category: '소장 및 장간막 수술',
    name: '복강경을 이용한 주요 소장 및 장간막 수술',
    code: 'G171',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G172',
    category: '소장 및 장간막 수술',
    name: '개복에 의한 주요 소장 및 장간막 수술',
    code: 'G172',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G173',
    category: '소장 및 장간막 수술',
    name: '장폐색 수술 및 기타 장 수술',
    code: 'G173',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G180',
    category: '장루 수술',
    name: '장루 수술',
    code: 'G180',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G190',
    category: '횡격막 탈장 수술',
    name: '횡격막 탈장 수술',
    code: 'G190',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G201',
    category: '탈장 수술, 서혜 및 대퇴부 제외',
    name: '복강경을 이용한 탈장 수술, 서혜 및 대퇴부 제외(장절제 동반)',
    code: 'G201',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G202',
    category: '탈장 수술, 서혜 및 대퇴부 제외',
    name: '개복에 의한 탈장 수술, 서혜 및 대퇴부 제외(장절제 동반)',
    code: 'G202',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G203',
    category: '탈장 수술, 서혜 및 대퇴부 제외',
    name: '복강경을 이용한 탈장 수술, 서혜 및 대퇴부 제외(장절제 미동반)',
    code: 'G203',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G204',
    category: '탈장 수술, 서혜 및 대퇴부 제외',
    name: '개복에 의한 탈장 수술, 서혜 및 대퇴부 제외(장절제 미동반)',
    code: 'G204',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G211',
    category: '충수절제술',
    name: '복강경을 이용한 충수절제술(복잡 주진단의 경우)',
    code: 'G211',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G212',
    category: '충수절제술',
    name: '복강경을 이용한 충수절제술(복잡 주진단이 아닌 경우)',
    code: 'G212',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G213',
    category: '충수절제술',
    name: '개복에 의한 충수절제술(복잡 주진단의 경우)',
    code: 'G213',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G214',
    category: '충수절제술',
    name: '개복에 의한 충수절제술(복잡 주진단이 아닌 경우)',
    code: 'G214',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G221',
    category: '재발 서혜 및 대퇴부 탈장 수술',
    name: '복강경을 이용한 재발 서혜 및 대퇴부 탈장 수술, 한쪽',
    code: 'G221',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G222',
    category: '재발 서혜 및 대퇴부 탈장 수술',
    name: '복강경을 이용한 재발 서혜 및 대퇴부 탈장 수술, 양쪽',
    code: 'G222',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G223',
    category: '재발 서혜 및 대퇴부 탈장 수술',
    name: '개복에 의한 재발 서혜 및 대퇴부 탈장 수술, 한쪽',
    code: 'G223',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G224',
    category: '재발 서혜 및 대퇴부 탈장 수술',
    name: '개복에 의한 재발 서혜 및 대퇴부 탈장 수술, 양쪽',
    code: 'G224',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G230',
    category: '서혜 및 대퇴부 탈장 수술(장절제 동반)',
    name: '서혜 및 대퇴부 탈장 수술(장절제 동반)',
    code: 'G230',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G241',
    category: '복강경을 이용한 서혜 및 대퇴부 탈장 수술(장절제 미동반)',
    name: '복강경을 이용한 서혜 및 대퇴부 탈장 수술(장절제 미동반), 한쪽',
    code: 'G241',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G242',
    category: '복강경을 이용한 서혜 및 대퇴부 탈장 수술(장절제 미동반)',
    name: '복강경을 이용한 서혜 및 대퇴부 탈장 수술(장절제 미동반), 양쪽',
    code: 'G242',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G251',
    category: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반)',
    name: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반, 복잡 주진단의 경우), 한쪽',
    code: 'G251',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G252',
    category: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반)',
    name: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반, 복잡 주진단이 아닌 경우), 한쪽',
    code: 'G252',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G253',
    category: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반)',
    name: '개복에 의한 서혜 및 대퇴부 탈장 수술(장절제 미동반), 양쪽',
    code: 'G253',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G260',
    category: '복수 항문 수술',
    name: '복수 항문 수술',
    code: 'G260',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G271',
    category: '치핵 수술',
    name: '주요 치핵 수술',
    code: 'G271',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G272',
    category: '치핵 수술',
    name: '단순 치핵 수술',
    code: 'G272',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G281',
    category: '항문 주위 농양 수술',
    name: '주요 항문 주위 농양 수술',
    code: 'G281',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G282',
    category: '항문 주위 농양 수술',
    name: '단순 항문 주위 농양 수술',
    code: 'G282',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G291',
    category: '치루 수술',
    name: '주요 치루 수술',
    code: 'G291',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G292',
    category: '치루 수술',
    name: '단순 치루 수술',
    code: 'G292',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G300',
    category: '치열 수술 및 항문협착증 수술',
    name: '치열 수술 및 항문협착증 수술',
    code: 'G300',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G311',
    category: '경항문 및 질접근 수술',
    name: '직장 질류 수술',
    code: 'G311',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G312',
    category: '경항문 및 질접근 수술',
    name: '직장 탈출증 수술 및 괄약근성형술(직장류 교정술 포함)',
    code: 'G312',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G320',
    category: '화농성한선염 수술',
    name: '화농성한선염 수술',
    code: 'G320',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G332',
    category: '기타 소화기계 수술',
    name: '기타 소화기계 수술',
    code: 'G332',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G340',
    category: '소화기계 질환의 혈관색전술',
    name: '소화기계 질환의 혈관색전술',
    code: 'G340',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G503',
    category: '위내시경 시술',
    name: '위내시경 시술(주요 소화기 질환의 경우)',
    code: 'G503',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G504',
    category: '위내시경 시술',
    name: '위내시경 시술(주요 소화기 질환이 아닌 경우)',
    code: 'G504',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G505',
    category: '위내시경 시술',
    name: '위내시경 시술, 당일퇴원',
    code: 'G505',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G523',
    category: '결장경 시술',
    name: '결장경 시술(주요 소화기 질환의 경우)',
    code: 'G523',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G524',
    category: '결장경 시술',
    name: '결장경 시술(주요 소화기 질환이 아닌 경우)',
    code: 'G524',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G525',
    category: '결장경 시술',
    name: '결장경 시술, 당일퇴원',
    code: 'G525',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G531',
    category: '구불결장경 시술',
    name: '구불결장경 시술',
    code: 'G531',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G532',
    category: '구불결장경 시술',
    name: '구불결장경 시술, 당일퇴원',
    code: 'G532',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G540',
    category: '소화기 내시경 시술, 화학요법을 동반한 경우, 재원기간 2일 이상',
    name: '소화기 내시경 시술, 화학요법을 동반한 경우, 재원기간 2일 이상',
    code: 'G540',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G550',
    category: '소장내시경 시술',
    name: '소장내시경 시술',
    code: 'G550',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G560',
    category: '소화관 협착을 위한 방사선하 시술',
    name: '소화관 협착을 위한 방사선하 시술',
    code: 'G560',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-G570',
    category: '소화기계 질환의 경피적 배액술',
    name: '소화기계 질환의 경피적 배액술',
    code: 'G570',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H010',
    category: '간담도췌장 복합수술',
    name: '간담도췌장 복합수술',
    code: 'H010',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H021',
    category: '간담도 복합수술',
    name: '주요 간담도 복합수술',
    code: 'H021',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H022',
    category: '간담도 복합수술',
    name: '기타 간담도 복합수술',
    code: 'H022',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H030',
    category: '담도췌장 복합수술',
    name: '담도췌장 복합수술',
    code: 'H030',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H041',
    category: '간 절제술',
    name: '복강경을 이용한 주요 간 절제술',
    code: 'H041',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H042',
    category: '간 절제술',
    name: '개복에 의한 주요 간 절제술',
    code: 'H042',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H043',
    category: '간 절제술',
    name: '복강경을 이용한 기타 간 절제술',
    code: 'H043',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H044',
    category: '간 절제술',
    name: '개복에 의한 기타 간 절제술',
    code: 'H044',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H051',
    category: '간 수술',
    name: '복강경을 이용한 간 수술',
    code: 'H051',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H052',
    category: '간 수술',
    name: '개복에 의한 간 수술',
    code: 'H052',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H060',
    category: '간담도계 질환 치료를 위한 단락술',
    name: '간담도계 질환 치료를 위한 단락술',
    code: 'H060',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H071',
    category: '담도 절제술(림프절 절제 동반)',
    name: '복강경을 이용한 담도 절제술(림프절 절제 동반)',
    code: 'H071',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H072',
    category: '담도 절제술(림프절 절제 동반)',
    name: '개복에 의한 담도 절제술(림프절 절제 동반)',
    code: 'H072',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H081',
    category: '담도 절제술(림프절 절제 미동반)',
    name: '복강경을 이용한 담도 절제술(림프절 절제 미동반)',
    code: 'H081',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H082',
    category: '담도 절제술(림프절 절제 미동반)',
    name: '개복에 의한 담도 절제술(림프절 절제 미동반)',
    code: 'H082',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H091',
    category: '주요 담도 수술',
    name: '복강경을 이용한 주요 담도 수술',
    code: 'H091',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H092',
    category: '주요 담도 수술',
    name: '개복에 의한 주요 담도 수술',
    code: 'H092',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H101',
    category: '담낭절제술',
    name: '복강경을 이용한 담낭절제술(총수담관 탐구술 및 경피적담낭조루술 동반)',
    code: 'H101',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H102',
    category: '담낭절제술',
    name: '개복에 의한 담낭절제술(총수담관 탐구술 및 경피적담낭조루술 동반)',
    code: 'H102',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H103',
    category: '담낭절제술',
    name: '복강경을 이용한 담낭절제술(총수담관 탐구술 동반)',
    code: 'H103',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H104',
    category: '담낭절제술',
    name: '개복에 의한 담낭절제술(총수담관 탐구술 동반)',
    code: 'H104',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H105',
    category: '담낭절제술',
    name: '복강경을 이용한 담낭절제술(경피적 담낭조루술 동반)',
    code: 'H105',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H106',
    category: '담낭절제술',
    name: '개복에 의한 담낭절제술(경피적담낭 조루술 동반)',
    code: 'H106',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H107',
    category: '담낭절제술',
    name: '복강경을 이용한 담낭절제술(총수담관 탐구술 및 경피적담낭조루술 미동반)',
    code: 'H107',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H108',
    category: '담낭절제술',
    name: '개복에 의한 담낭절제술(총수담관 탐구술 및 경피적담낭조루술 미동반)',
    code: 'H108',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H111',
    category: '췌장절제술',
    name: '복강경을 이용한 췌장절제술',
    code: 'H111',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H112',
    category: '췌장절제술',
    name: '개복에 의한 췌장절제술',
    code: 'H112',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H121',
    category: '췌장 수술',
    name: '복강경을 이용한 췌장 수술',
    code: 'H121',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H122',
    category: '췌장 수술',
    name: '개복에 의한 췌장 수술',
    code: 'H122',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H142',
    category: '기타 간담도 및 췌장 시술',
    name: '역행성담췌관내시경 시술',
    code: 'H142',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H143',
    category: '기타 간담도 및 췌장 시술',
    name: '담석 제거를 위한 체외충격파쇄석술',
    code: 'H143',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H144',
    category: '기타 간담도 및 췌장 시술',
    name: '기타 간담도 및 췌장 수술',
    code: 'H144',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H145',
    category: '기타 간담도 및 췌장 시술',
    name: '경피적 담관경 시술',
    code: 'H145',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H146',
    category: '기타 간담도 및 췌장 시술',
    name: '경피적 담관 시술',
    code: 'H146',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H152',
    category: '간담도 및 췌장의 경피적 시술',
    name: '경피적 혈관 시술(간의 악성종양 제외)',
    code: 'H152',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H154',
    category: '간담도 및 췌장의 경피적 시술',
    name: '담도협착을 위한 경피적 시술',
    code: 'H154',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H155',
    category: '간담도 및 췌장의 경피적 시술',
    name: '담석제거를 위한 경피적 시술',
    code: 'H155',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H156',
    category: '간담도 및 췌장의 경피적 시술',
    name: '경피적 혈관 시술(간의 악성종양의 경우), 소작술 동반',
    code: 'H156',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H157',
    category: '간담도 및 췌장의 경피적 시술',
    name: '경피적 혈관 시술(간의 악성종양의 경우), 소작술 미동반',
    code: 'H157',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H500',
    category: '출혈성 정맥류에 대한 내시경 시술',
    name: '출혈성 정맥류에 대한 내시경 시술',
    code: 'H500',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H510',
    category: '간암의 경피적 치료술',
    name: '간암의 경피적 치료술',
    code: 'H510',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-H520',
    category: '간담도 및 췌장 질환의 경피적 배액술',
    name: '간담도 및 췌장 질환의 경피적 배액술',
    code: 'H520',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I011',
    category: '양쪽 또는 복수 주요 관절 수술',
    name: '양쪽 또는 복수 주요 관절 수술(치환술의 경우)',
    code: 'I011',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I012',
    category: '양쪽 또는 복수 주요 관절 수술',
    name: '양쪽 또는 복수 주요 관절 수술(치환술 제외)',
    code: 'I012',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I021',
    category: '고관절 재치환술 및 치환술',
    name: '고관절 전재치환술',
    code: 'I021',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I022',
    category: '고관절 재치환술 및 치환술',
    name: '고관절 전치환술',
    code: 'I022',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I023',
    category: '고관절 재치환술 및 치환술',
    name: '고관절 부분치환술',
    code: 'I023',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I031',
    category: '슬관절 재치환술 및 치환술',
    name: '슬관절 전재치환술',
    code: 'I031',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I032',
    category: '슬관절 재치환술 및 치환술',
    name: '슬관절 전치환술',
    code: 'I032',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I033',
    category: '슬관절 재치환술 및 치환술',
    name: '슬관절 부분치환술',
    code: 'I033',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I041',
    category: '기타 관절 재치환술 및 치환술',
    name: '기타 관절 전재치환술',
    code: 'I041',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I042',
    category: '기타 관절 재치환술 및 치환술',
    name: '기타 관절 전치환술',
    code: 'I042',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I043',
    category: '기타 관절 재치환술 및 치환술',
    name: '기타 관절 부분치환술',
    code: 'I043',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I044',
    category: '기타 관절 재치환술 및 치환술',
    name: '인공관절삽입물 제거술',
    code: 'I044',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I050',
    category: '혈관부착 골피부판 이식 및 사지 재접합술',
    name: '혈관부착 골피부판 이식 및 사지 재접합술',
    code: 'I050',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I061',
    category: '척추강내 병소절제술',
    name: '척수내 종양절제술',
    code: 'I061',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I062',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척수병증 동반)',
    code: 'I062',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I063',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척수병증 미동반)',
    code: 'I063',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I064',
    category: '척추강내 병소절제술',
    name: '척추강내 병소절제술(척추고정술 동반)',
    code: 'I064',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I071',
    category: '척추변형 척추고정술',
    name: '청소년기 척추변형 척추고정술',
    code: 'I071',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I072',
    category: '척추변형 척추고정술',
    name: '성인기 척추변형 척추고정술(감압술 동반)',
    code: 'I072',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I073',
    category: '척추변형 척추고정술',
    name: '성인기 척추변형 척추고정술(감압술 미동반)',
    code: 'I073',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I081',
    category: '기타 척추 수술',
    name: '척추고정술(척수병증 동반)',
    code: 'I081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I082',
    category: '기타 척추 수술',
    name: '척추고정술(척수병증 미동반)',
    code: 'I082',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I083',
    category: '기타 척추 수술',
    name: '척추후궁절제술 및 추간판제거술(척수병증 동반)',
    code: 'I083',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I084',
    category: '기타 척추 수술',
    name: '척추후궁절제술 및 추간판제거술(척수병증 미동반)',
    code: 'I084',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I085',
    category: '기타 척추 수술',
    name: '기타 척추 수술(척수병증 동반)',
    code: 'I085',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I086',
    category: '기타 척추 수술',
    name: '기타 척추 수술(척수병증 미동반)',
    code: 'I086',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I091',
    category: '척추 중재시술',
    name: '척추 중재시술(뼈에 시행한 경우)',
    code: 'I091',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I092',
    category: '척추 중재시술',
    name: '척추 중재시술(신경에 시행한 경우)',
    code: 'I092',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I101',
    category: '신경절설 및 척추강내 약물주입 펌프이식술',
    name: '척수신경자극기 및 약물주입 펌프의 설치술 또는 교환술',
    code: 'I101',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I102',
    category: '신경절설 및 척추강내 약물주입 펌프이식술',
    name: '척수신경자극기 및 약물주입 펌프의 시험적 거치술 또는 제거술',
    code: 'I102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I111',
    category: '절단술',
    name: '주요 절단술',
    code: 'I111',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I112',
    category: '절단술',
    name: '기타 절단술',
    code: 'I112',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I121',
    category: '골종양의 절제술',
    name: '골악성종양의 광범위 절제술(재건술 동반)',
    code: 'I121',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I122',
    category: '골종양의 절제술',
    name: '골악성종양의 광범위 절제술(골반골, 대퇴골, 하퇴골)',
    code: 'I122',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I123',
    category: '골종양의 절제술',
    name: '골악성종양의 광범위 절제술(기타)',
    code: 'I123',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I124',
    category: '골종양의 절제술',
    name: '골양성종양의 소파술 또는 절제술',
    code: 'I124',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I131',
    category: '골수염 및 농양 수술',
    name: '골수염 및 농양 수술(골반골, 대퇴골, 하퇴골, 상완골, 전완골, 쇄골)',
    code: 'I131',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I132',
    category: '골수염 및 농양 수술',
    name: '골수염 및 농양 수술(기타)',
    code: 'I132',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I133',
    category: '골수염 및 농양 수술',
    name: '근농양 배농술',
    code: 'I133',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I141',
    category: '고관절 및 대퇴부 수술',
    name: '양쪽 또는 복수 고관절 및 대퇴부 수술',
    code: 'I141',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I142',
    category: '고관절 및 대퇴부 수술',
    name: '한쪽 고관절 및 대퇴부 수술',
    code: 'I142',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I160',
    category: '상완골, 경골 및 비골 수술',
    name: '상완골, 경골 및 비골 수술',
    code: 'I160',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I171',
    category: '단단성형술',
    name: '단단성형술(수족지 제외)',
    code: 'I171',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I172',
    category: '단단성형술',
    name: '단단성형술(수족지)',
    code: 'I172',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I181',
    category: '견부 수술',
    name: '회전근개 수술',
    code: 'I181',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I182',
    category: '견부 수술',
    name: '관절와순 수술',
    code: 'I182',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I183',
    category: '견부 수술',
    name: '복수 진단 견부 수술',
    code: 'I183',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I184',
    category: '견부 수술',
    name: '기타 견부 수술',
    code: 'I184',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I191',
    category: '슬부 수술',
    name: '십자인대 수술',
    code: 'I191',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I192',
    category: '슬부 수술',
    name: '반달연골 수술, 양쪽',
    code: 'I192',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I193',
    category: '슬부 수술',
    name: '반달연골 수술, 한쪽',
    code: 'I193',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I194',
    category: '슬부 수술',
    name: '기타 슬관절 수술',
    code: 'I194',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I200',
    category: '주관절 및 전완부 수술',
    name: '주관절 및 전완부 수술',
    code: 'I200',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I211',
    category: '족부 및 족관절 수술',
    name: '족부 및 족관절 힘줄인대 수술',
    code: 'I211',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I212',
    category: '족부 및 족관절 수술',
    name: '족관절 골연골 병변 수술',
    code: 'I212',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I213',
    category: '족부 및 족관절 수술',
    name: '기타 족부 및 족관절 수술',
    code: 'I213',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I220',
    category: '체내고정장치 제거술',
    name: '체내고정장치 제거술',
    code: 'I220',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I251',
    category: '완관절 및 수부 수술',
    name: '주요 완관절 및 수부 수술',
    code: 'I251',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I252',
    category: '완관절 및 수부 수술',
    name: '단순 완관절 및 수부 수술',
    code: 'I252',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I261',
    category: '미세혈관 조직이식 또는 피부이식',
    name: '미세혈관 조직이식',
    code: 'I261',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I262',
    category: '미세혈관 조직이식 또는 피부이식',
    name: '기타 피판술',
    code: 'I262',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I263',
    category: '미세혈관 조직이식 또는 피부이식',
    name: '피부 및 지방 이식술',
    code: 'I263',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I271',
    category: '연조직 수술',
    name: '복잡한 연조직 수술',
    code: 'I271',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I272',
    category: '연조직 수술',
    name: '주요 연조직 수술',
    code: 'I272',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I273',
    category: '연조직 수술',
    name: '단순 연조직 수술',
    code: 'I273',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I281',
    category: '기타 골절 수술',
    name: '골반 및 비구 골절 수술',
    code: 'I281',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I282',
    category: '기타 골절 수술',
    name: '대퇴부 골절 수술',
    code: 'I282',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I283',
    category: '기타 골절 수술',
    name: '슬관절 및 하퇴골 골절 수술',
    code: 'I283',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I284',
    category: '기타 골절 수술',
    name: '족관절 및 족부 골절 수술',
    code: 'I284',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I285',
    category: '기타 골절 수술',
    name: '견부 및 상완골 골절 수술',
    code: 'I285',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I286',
    category: '기타 골절 수술',
    name: '전완부 골절 수술',
    code: 'I286',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I287',
    category: '기타 골절 수술',
    name: '수부 골절 수술',
    code: 'I287',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I290',
    category: '기타 결합조직 수술',
    name: '기타 결합조직 수술',
    code: 'I290',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I301',
    category: '복잡 인공관절치환술',
    name: '복잡 양쪽 또는 복수 인공관절치환술',
    code: 'I301',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I302',
    category: '복잡 인공관절치환술',
    name: '복잡 인공관절전재치환술, 주요(고관절, 슬관절)',
    code: 'I302',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I303',
    category: '복잡 인공관절치환술',
    name: '복잡 인공관절전재치환술, 기타(견관절, 주관절, 족관절)',
    code: 'I303',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I304',
    category: '복잡 인공관절치환술',
    name: '복잡 인공관절치환술, 주요(고관절, 슬관절)',
    code: 'I304',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I305',
    category: '복잡 인공관절치환술',
    name: '복잡 인공관절치환술, 기타(견관절, 주관절, 족관절)',
    code: 'I305',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I306',
    category: '복잡 인공관절치환술',
    name: '복잡 인공관절부분치환술',
    code: 'I306',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I311',
    category: '복잡 척추 수술',
    name: '복잡 척추고정술',
    code: 'I311',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I312',
    category: '복잡 척추 수술',
    name: '복잡 척추후궁절제술',
    code: 'I312',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I321',
    category: '복잡 관절 수술',
    name: '복잡 사지골절정복 복술',
    code: 'I321',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I322',
    category: '복잡 관절 수술',
    name: '복잡 관절고정술',
    code: 'I322',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I323',
    category: '복잡 관절 수술',
    name: '복잡 사지관절절제술',
    code: 'I323',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I324',
    category: '복잡 관절 수술',
    name: '복잡 가관절수술',
    code: 'I324',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I325',
    category: '복잡 관절 수술',
    name: '복잡 반월판연골절제술',
    code: 'I325',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I331',
    category: '복잡 근골격계 염증성 질환 수술',
    name: '복잡 화농성관절염절개술',
    code: 'I331',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I332',
    category: '복잡 근골격계 염증성 질환 수술',
    name: '복잡 골수염 및 농양수술',
    code: 'I332',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-I500',
    category: '근골격계 질환의 경피적 배액술',
    name: '근골격계 질환의 경피적 배액술',
    code: 'I500',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J010',
    category: '피부, 피하조직 및 유방 질환에 대한 미세혈관 조직이식',
    name: '피부, 피하조직 및 유방 질환에 대한 미세혈관 조직이식',
    code: 'J010',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J021',
    category: '피판술, 피부이식술 및 변연절제술(피부궤양, 봉소염의 경우)',
    name: '피판술(피부궤양, 봉소염의 경우)',
    code: 'J021',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J022',
    category: '피판술, 피부이식술 및 변연절제술(피부궤양, 봉소염의 경우)',
    name: '피부 이식술(피부궤양, 봉소염의 경우)',
    code: 'J022',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J031',
    category: '피판술, 피부이식술 및 변연절제술(피부궤양, 봉소염 제외)',
    name: '피판술(피부궤양, 봉소염 제외)',
    code: 'J031',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J032',
    category: '피판술, 피부이식술 및 변연절제술(피부궤양, 봉소염 제외)',
    name: '피부 이식술(피부궤양, 봉소염 제외)',
    code: 'J032',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J041',
    category: '기타 피부, 피하조직수술',
    name: '피부 및 연조직 악성종양 적출술',
    code: 'J041',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J042',
    category: '기타 피부, 피하조직수술',
    name: '피부 및 연조직 수술',
    code: 'J042',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J043',
    category: '기타 피부, 피하조직수술',
    name: '기타 피부, 피하조직수술',
    code: 'J043',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J051',
    category: '유방재건술',
    name: '자가조직을 이용한 유방재건술',
    code: 'J051',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J052',
    category: '유방재건술',
    name: '보형물을 이용한 유방재건술',
    code: 'J052',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J061',
    category: '주요 유방 수술',
    name: '근치 유방절제술',
    code: 'J061',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J062',
    category: '주요 유방 수술',
    name: '유방절제술(악성종양의 경우)',
    code: 'J062',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J063',
    category: '주요 유방 수술',
    name: '유방절제술(악성종양 제외)',
    code: 'J063',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J071',
    category: '단순 유방 수술',
    name: '진공흡입보조장치를 이용한 단순 유방 수술',
    code: 'J071',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J072',
    category: '단순 유방 수술',
    name: '절개에 의한 단순 유방 수술',
    code: 'J072',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J081',
    category: '액와 수술',
    name: '액와 수술(악성종양의 경우)',
    code: 'J081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J082',
    category: '액와 수술',
    name: '액와 수술(악성종양 제외)',
    code: 'J082',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J090',
    category: '기타 유방 및 액와 수술',
    name: '기타 유방 및 액와 수술',
    code: 'J090',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J100',
    category: '항문 주위 및 모소 수술',
    name: '항문 주위 및 모소 수술',
    code: 'J100',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-J110',
    category: '항문 주위 및 모소 수술',
    name: '교감신경절제술',
    code: 'J110',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K011',
    category: '내분비, 영양 및 대사장애 절단술',
    name: '내분비, 영양 및 대사장애 절단술(수족부 제외)',
    code: 'K011',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K012',
    category: '내분비, 영양 및 대사장애 절단술',
    name: '내분비, 영양 및 대사장애 수족부 절단술',
    code: 'K012',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K021',
    category: '뇌하수체 수술',
    name: '천막상부 종양 절제술',
    code: 'K021',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K023',
    category: '뇌하수체 수술',
    name: '복잡 경비적 뇌하수체종양 절제술',
    code: 'K023',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K024',
    category: '뇌하수체 수술',
    name: '단순 경비적 뇌하수체종양 절제술',
    code: 'K024',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K031',
    category: '부신 수술',
    name: '복강경을 이용한 부신수술',
    code: 'K031',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K032',
    category: '부신 수술',
    name: '개복에 의한 부신수술',
    code: 'K032',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K041',
    category: '내분비, 영양 및 대사장애 피부이식 및 상처변연절제술',
    name: '내분비, 영양 및 대사장애 유리 피판술',
    code: 'K041',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K042',
    category: '내분비, 영양 및 대사장애 피부이식 및 상처변연절제술',
    name: '내분비, 영양 및 대사장애 기타 피판술',
    code: 'K042',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K043',
    category: '내분비, 영양 및 대사장애 피부이식 및 상처변연절제술',
    name: '내분비, 영양 및 대사장애 피부 이식술',
    code: 'K043',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K051',
    category: '부갑상선 수술',
    name: '내시경을 이용한 부갑상선 수술',
    code: 'K051',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K052',
    category: '부갑상선 수술',
    name: '절개에 의한 부갑상선 수술',
    code: 'K052',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K063',
    category: '주요 갑상선 악성 종양 수술',
    name: '주요 갑상선 악성 종양 수술(양쪽)',
    code: 'K063',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K064',
    category: '주요 갑상선 악성 종양 수술',
    name: '주요 갑상선 악성 종양 수술(한쪽)',
    code: 'K064',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K075',
    category: '주요 갑상선 악성 종양 제외 수술',
    name: '주요 갑상선 악성 종양 제외 수술(양쪽)',
    code: 'K075',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K076',
    category: '주요 갑상선 악성 종양 제외 수술',
    name: '주요 갑상선 악성 종양 제외 수술(한쪽)',
    code: 'K076',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K080',
    category: '기타 갑상선 수술',
    name: '기타 갑상선 수술',
    code: 'K080',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-K490',
    category: '기타 내분비, 영양 및 대사장애 수술',
    name: '기타 내분비, 영양 및 대사장애 수술',
    code: 'K490',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L010',
    category: '복막투석 도관 삽입술',
    name: '복막투석 도관 삽입술',
    code: 'L010',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L021',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '주요 신장, 신우 및 요관 신생물 수술',
    code: 'L021',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L022',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '기타 신장, 신우 및 요관 신생물 수술',
    code: 'L022',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L023',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '주요 방광 및 골반 신생물 수술',
    code: 'L023',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L024',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '기타 방광, 골반 및 요도 신생물 수술',
    code: 'L024',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L025',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '경요도 요관 및 방광 신생물 수술',
    code: 'L025',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L026',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '전립선 신생물 수술',
    code: 'L026',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L027',
    category: '신장 및 비뇨기계 신생물 수술',
    name: '복강경을 이용한 신장 및 비뇨기계 신생물 수술',
    code: 'L027',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L031',
    category: '신장 및 신우 수술',
    name: '복강경을 이용한 신장 및 신우 수술',
    code: 'L031',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L032',
    category: '신장 및 신우 수술',
    name: '개복에 의한 신장 및 신우 수술',
    code: 'L032',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L033',
    category: '신장 및 신우 수술',
    name: '경피적 신장 및 신우 수술, 한쪽',
    code: 'L033',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L034',
    category: '신장 및 신우 수술',
    name: '경피적 신장 및 신우 수술, 양쪽',
    code: 'L034',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L040',
    category: '요관 수술',
    name: '요관 수술',
    code: 'L040',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L051',
    category: '방광 수술',
    name: '개복에 의한 방광 수술',
    code: 'L051',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L052',
    category: '방광 수술',
    name: '경피적 방광 수술',
    code: 'L052',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L053',
    category: '방광 수술',
    name: '경요도 방광 수술',
    code: 'L053',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L060',
    category: '전립선 수술',
    name: '전립선 수술',
    code: 'L060',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L071',
    category: '요도 수술',
    name: '주요 요도 수술',
    code: 'L071',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L072',
    category: '요도 수술',
    name: '요도경하 요도 수술',
    code: 'L072',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L073',
    category: '요도 수술',
    name: '기타 요도 수술',
    code: 'L073',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L074',
    category: '요도 수술',
    name: '복잡 요실금 수술',
    code: 'L074',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L075',
    category: '요도 수술',
    name: '단순 요실금 수술',
    code: 'L075',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L081',
    category: '요로 결석 수술',
    name: '복강경을 이용한 요로 결석 수술',
    code: 'L081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L082',
    category: '요로 결석 수술',
    name: '신장, 신우 및 요관 결석 수술',
    code: 'L082',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L083',
    category: '요로 결석 수술',
    name: '경요도적 요관 결석 수술',
    code: 'L083',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L084',
    category: '요로 결석 수술',
    name: '방광 및 요도 결석 수술',
    code: 'L084',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L085',
    category: '요로 결석 수술',
    name: '연성내시경하 수술',
    code: 'L085',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L091',
    category: '요로결석 제거를 위한 체외충격파쇄석술',
    name: '요로결석 제거를 위한 체외충격파쇄석술, 복잡',
    code: 'L091',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L092',
    category: '요로결석 제거를 위한 체외충격파쇄석술',
    name: '요로결석 제거를 위한 체외충격파쇄석술, 단순',
    code: 'L092',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L101',
    category: '신장 및 비뇨기 질환의 신경 자극기 설치술',
    name: '신장 및 비뇨기 질환의 신경 자극기 설치술',
    code: 'L101',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L102',
    category: '신장 및 비뇨기 질환의 신경 자극기 설치술',
    name: '신장 및 비뇨기 질환의 시험적 거치술',
    code: 'L102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L111',
    category: '요로 질환 수술',
    name: '경요도 요로 질환 수술',
    code: 'L111',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L112',
    category: '요로 질환 수술',
    name: '외상 및 감염성 요로 질환 수술',
    code: 'L112',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L120',
    category: '기타 신장 및 비뇨기 질환의 경피적 시술',
    name: '기타 신장 및 비뇨기 질환의 경피적 시술',
    code: 'L120',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L131',
    category: '기타 신장 및 비뇨기계 시술',
    name: '혈액투석을 위한 단락 또는 동정맥루 조성술',
    code: 'L131',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L132',
    category: '기타 신장 및 비뇨기계 시술',
    name: '혈액투석 동정맥루의 경피적 수술, 복잡',
    code: 'L132',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L133',
    category: '기타 신장 및 비뇨기계 시술',
    name: '혈액투석 동정맥루의 경피적 수술, 단순',
    code: 'L133',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L134',
    category: '기타 신장 및 비뇨기계 시술',
    name: '기타 신장 및 비뇨기계 시술',
    code: 'L134',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L510',
    category: '방광요도경 시술',
    name: '방광요도경 시술',
    code: 'L510',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L520',
    category: '신장 및 비뇨기 질환의 경피적 배액술',
    name: '신장 및 비뇨기 질환의 경피적 배액술',
    code: 'L520',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-L530',
    category: '신장 및 비뇨기 질환의 경피적 경화술',
    name: '신장 및 비뇨기 질환의 경피적 경화술',
    code: 'L530',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M010',
    category: '남성 골반 수술',
    name: '남성 골반 수술',
    code: 'M010',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M021',
    category: '전립선 적출술',
    name: '주요 전립선 적출술',
    code: 'M021',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M022',
    category: '전립선 적출술',
    name: '기타 전립선 적출술',
    code: 'M022',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M030',
    category: '기타 전립선 수술',
    name: '기타 전립선 수술',
    code: 'M030',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M041',
    category: '음경 수술',
    name: '복잡 음경 수술',
    code: 'M041',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M042',
    category: '음경 수술',
    name: '단순 음경 수술',
    code: 'M042',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M043',
    category: '음경 수술',
    name: '페이로니 병 수술',
    code: 'M043',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M050',
    category: '포경 수술',
    name: '포경 수술',
    code: 'M050',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M061',
    category: '요도 수술',
    name: '주요 요도 수술',
    code: 'M061',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M062',
    category: '요도 수술',
    name: '단순 요도 수술',
    code: 'M062',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M071',
    category: '음낭 수술',
    name: '복잡 음낭 수술',
    code: 'M071',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M072',
    category: '음낭 수술',
    name: '단순 음낭 수술',
    code: 'M072',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M081',
    category: '고환 수술',
    name: '복강경을 이용한 복잡 고환 수술',
    code: 'M081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M082',
    category: '고환 수술',
    name: '개복에 의한 복잡 고환 수술',
    code: 'M082',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M083',
    category: '고환 수술',
    name: '단순 고환 수술',
    code: 'M083',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M091',
    category: '기타 고환 수술 및 생식기 적출술',
    name: '복강경을 이용한 정계정맥류',
    code: 'M091',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M092',
    category: '기타 고환 수술 및 생식기 적출술',
    name: '개복에 의한 정계정맥류',
    code: 'M092',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M093',
    category: '기타 고환 수술 및 생식기 적출술',
    name: '고환 및 생식기 적출술',
    code: 'M093',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M101',
    category: '기타 남성생식기계 시술',
    name: '기타 남성생식기계 시술(악성종양의 경우)',
    code: 'M101',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M102',
    category: '기타 남성생식기계 시술',
    name: '기타 남성생식기계 시술(악성종양 제외)',
    code: 'M102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-M500',
    category: '방광요도경 시술',
    name: '방광요도경 시술',
    code: 'M500',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N011',
    category: '자궁 수술(악성종양의 경우)',
    name: '복강경을 이용한 자궁 수술(악성종양의 경우)',
    code: 'N011',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N012',
    category: '자궁 수술(악성종양의 경우)',
    name: '개복에 의한 자궁 수술(악성종양의 경우)',
    code: 'N012',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N021',
    category: '주요 자궁절제술(악성종양 제외)',
    name: '복강경을 이용한 주요 자궁절제술(악성종양 제외)',
    code: 'N021',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N022',
    category: '주요 자궁절제술(악성종양 제외)',
    name: '개복에 의한 주요 자궁 절제술(악성종양 제외)',
    code: 'N022',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N031',
    category: '단순 자궁 수술(악성종양 제외)',
    name: '복강경을 이용한 단순 자궁 수술(악성종양 제외)',
    code: 'N031',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N032',
    category: '단순 자궁 수술(악성종양 제외)',
    name: '개복에 의한 단순 자궁 수술(악성종양 제외)',
    code: 'N032',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N041',
    category: '난소 및 부속기 수술(악성종양의 경우)',
    name: '복강경을 이용한 난소 및 부속기 수술(악성종양의 경우)',
    code: 'N041',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N042',
    category: '난소 및 부속기 수술(악성종양의 경우)',
    name: '개복에 의한 난소 및 부속기 수술(악성종양의 경우)',
    code: 'N042',
    grade1to5: '비해당',
    grade1to8: '7종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N051',
    category: '난소 수술(악성종양 제외)',
    name: '복강경을 이용한 난소 수술(악성종양 제외)',
    code: 'N051',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N052',
    category: '난소 수술(악성종양 제외)',
    name: '개복에 의한 난소 수술(악성종양 제외)',
    code: 'N052',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N061',
    category: '부속기 수술(악성종양 제외)',
    name: '복강경을 이용한 부속기 수술(악성종양 제외)',
    code: 'N061',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N062',
    category: '부속기 수술(악성종양 제외)',
    name: '개복에 의한 부속기 수술(악성종양 제외)',
    code: 'N062',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N071',
    category: '자궁경부, 질 및 외음부 수술(악성종양의 경우)',
    name: '복강경을 이용한 자궁경부, 질 및 외음부 수술(악성종양의 경우)',
    code: 'N071',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N072',
    category: '자궁경부, 질 및 외음부 수술(악성종양의 경우)',
    name: '개복에 의한 자궁경부, 질 및 외음부 수술(악성종양의 경우)',
    code: 'N072',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N081',
    category: '자궁경부, 질 및 외음부 수술(악성종양 제외)',
    name: '복강경을 이용한 자궁경부, 질 및 외음부 수술(악성종양 제외)',
    code: 'N081',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N082',
    category: '자궁경부, 질 및 외음부 수술(악성종양 제외)',
    name: '자궁경부, 질 및 외음부 수술(악성종양 제외)',
    code: 'N082',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N091',
    category: '기타 골반 수술 복원술',
    name: '복강경을 이용한 기타 골반 수술 복원술',
    code: 'N091',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N092',
    category: '기타 골반 수술 복원술',
    name: '개복에 의한 기타 골반 수술',
    code: 'N092',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N101',
    category: '주요 여성생식기계 복원술',
    name: '복강경을 이용한 주요 여성생식기계 복원술',
    code: 'N101',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N102',
    category: '주요 여성생식기계 복원술',
    name: '개복에 의한 주요 여성생식기계 복원술',
    code: 'N102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N110',
    category: '기타 여성생식기계 복원술',
    name: '기타 여성생식기계 복원술',
    code: 'N110',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N121',
    category: '복강경 수술 및 기타 난관 결찰술',
    name: '복강경 수술',
    code: 'N121',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N130',
    category: '자궁경 수술',
    name: '자궁경 수술',
    code: 'N130',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N141',
    category: '자궁소파술',
    name: '치료적 자궁소파술',
    code: 'N141',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N161',
    category: '기타 여성생식기계 수술',
    name: '복강경을 이용한 기타 여성생식기계 수술',
    code: 'N161',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N162',
    category: '기타 여성생식기계 수술',
    name: '개복에 의한 기타 여성생식기계 수술',
    code: 'N162',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-N180',
    category: '여성생식기계 경피적 혈관 수술',
    name: '여성생식기계 경피적 혈관 수술',
    code: 'N180',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O011',
    category: '제왕절개분만(단태아)',
    name: '일반 제왕절개분만(단태아)',
    code: 'O011',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O012',
    category: '제왕절개분만(단태아)',
    name: '고위험 제왕절개분만(단태아)',
    code: 'O012',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O013',
    category: '제왕절개분만(단태아)',
    name: '질식분만 시도 후 제왕절개분만(단태아)',
    code: 'O013',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O022',
    category: '제왕절개분만(다태아)',
    name: '질식분만 시도 후 제왕절개분만(다태아)',
    code: 'O022',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O023',
    category: '제왕절개분만(다태아)',
    name: '일반 제왕절개분만(다태아)',
    code: 'O023',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O024',
    category: '제왕절개분만(다태아)',
    name: '고위험 제왕절개분만(다태아)',
    code: 'O024',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O081',
    category: '자궁외 임신 주요 수술',
    name: '복강경을 이용한 자궁외 임신 주요 수술',
    code: 'O081',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O082',
    category: '자궁외 임신 주요 수술',
    name: '개복에 의한 자궁외 임신 주요 수술',
    code: 'O082',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O091',
    category: '자궁외 임신 기타 수술',
    name: '복강경을 이용한 자궁외 임신 기타 수술',
    code: 'O091',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O092',
    category: '자궁외 임신 기타 수술',
    name: '개복에 의한 자궁외 임신 기타 수술',
    code: 'O092',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O102',
    category: '자궁경관봉축술',
    name: '치료적 자궁경관봉축술',
    code: 'O102',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O110',
    category: '분만 및 유산 후 관련 장애(수술시행)',
    name: '분만 및 유산 후 관련 장애(수술시행)',
    code: 'O110',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O120',
    category: '자궁소파술 및 흡인소파술',
    name: '자궁소파술 및 흡인소파술',
    code: 'O120',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-O130',
    category: '분만 및 유산 관련 자궁적출술',
    name: '분만 및 유산 관련 자궁적출술',
    code: 'O130',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-Q012',
    category: '비장 절제술',
    name: '성인의 복강경을 이용한 비장 절제술',
    code: 'Q012',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-Q013',
    category: '비장 절제술',
    name: '성인의 개복에 의한 비장 절제술',
    code: 'Q013',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-R010',
    category: '림프종 및 백혈병(주요 수술 시행)',
    name: '림프종 및 백혈병(주요 수술 시행)',
    code: 'R010',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-R020',
    category: '기타 신생물 질환(주요 수술 시행)',
    name: '기타 신생물 질환(주요 수술 시행)',
    code: 'R020',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-W010',
    category: '다발성 중요 외상 치료목적의 개두술',
    name: '다발성 중요 외상 치료목적의 개두술',
    code: 'W010',
    grade1to5: '비해당',
    grade1to8: '8종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-W020',
    category: '다발성 중요 외상 치료목적의 근골격계 주요 수술',
    name: '다발성 중요 외상 치료목적의 근골격계 주요 수술',
    code: 'W020',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-W030',
    category: '다발성 중요 외상 치료목적의 복부 수술',
    name: '다발성 중요 외상 치료목적의 복부 수술',
    code: 'W030',
    grade1to5: '비해당',
    grade1to8: '6종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-W040',
    category: '다발성 중요 외상 치료목적의 기타 수술',
    name: '다발성 중요 외상 치료목적의 기타 수술',
    code: 'W040',
    grade1to5: '비해당',
    grade1to8: '4종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X011',
    category: '하지 손상의 미세혈관 조직이식 및 피부이식',
    name: '하지 손상의 미세혈관 조직이식',
    code: 'X011',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X012',
    category: '하지 손상의 미세혈관 조직이식 및 피부이식',
    name: '하지 손상의 국소 피판 및 피부이식',
    code: 'X012',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X021',
    category: '수부 손상의 미세혈관 조직이식 및 피부이식',
    name: '수부 손상의 미세혈관 조직이식',
    code: 'X021',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X022',
    category: '수부 손상의 미세혈관 조직이식 및 피부이식',
    name: '수부 손상의 국소 피판 및 피부이식',
    code: 'X022',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X030',
    category: '기타 손상의 미세혈관 조직이식 및 피부이식',
    name: '기타 손상의 미세혈관 조직이식 및 피부이식',
    code: 'X030',
    grade1to5: '비해당',
    grade1to8: '3종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X041',
    category: '하지 손상의 기타 수술',
    name: '하지 손상의 골 및 관절 수술',
    code: 'X041',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X042',
    category: '하지 손상의 기타 수술',
    name: '하지 손상의 기타 수술',
    code: 'X042',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X051',
    category: '수부 손상의 기타 수술',
    name: '수부 손상의 골 및 관절 수술',
    code: 'X051',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X052',
    category: '수부 손상의 기타 수술',
    name: '수부 손상의 기타 수술',
    code: 'X052',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-X060',
    category: '기타 손상의 수술',
    name: '기타 손상의 수술',
    code: 'X060',
    grade1to5: '비해당',
    grade1to8: '1종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-Y010',
    category: '중증 화상(피부 이식 동반)',
    name: '중증 화상(피부 이식 동반)',
    code: 'Y010',
    grade1to5: '비해당',
    grade1to8: '5종',
    description: '',
    tips: ''
  },
  {
    id: '1to8-Y020',
    category: '중등도 화상(피부이식 혹은 흡입손상을 동반)',
    name: '중등도 화상(피부이식 혹은 흡입손상을 동반)',
    code: 'Y020',
    grade1to5: '비해당',
    grade1to8: '2종',
    description: '',
    tips: ''
  }
];

