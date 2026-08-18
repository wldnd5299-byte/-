// 메리츠화재 82대질병분류표 데이터 (64대질병 및 KB손보 포맷과 동일한 title / num / disease / code 구조)
export const MERITZ_82_DISEASES_SECTIONS = [
  // --- 1. 심장질환 (1개) ---
  {
    title: '[심장질환] 심장질환',
    items: [
      { num: '1', disease: '급성 류마티스열', code: 'I00~I02' },
      { num: '2', disease: '만성 류마티스 심장 질환', code: 'I05~I09' },
      { num: '3', disease: '허혈심장질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장병', code: 'I30~I52' },
      { num: '6', disease: '수막알균성 심근염(I41.0*)', code: 'A39.5†' },
      { num: '7', disease: '수막알균성 심내막염(I39.8*)', code: 'A39.5†' },
      { num: '8', disease: '수막알균성 심장막염(I32.0*)', code: 'A39.5†' },
      { num: '9', disease: '수막알균성 심장염 NOS(I52.0*)', code: 'A39.5†' },
      { num: '10', disease: '칸디다심내막염(I39.8*)', code: 'B37.6†' }
    ]
  },

  // --- 2. 뇌혈관질환 (1개) ---
  {
    title: '[뇌혈관질환] 뇌혈관질환',
    items: [
      { num: '1', disease: '거미막하출혈', code: 'I60' },
      { num: '2', disease: '뇌내출혈', code: 'I61' },
      { num: '3', disease: '기타 비외상성 두개내출혈', code: 'I62' },
      { num: '4', disease: '뇌경색증', code: 'I63' },
      { num: '5', disease: '출혈 또는 경색증으로 명시되지 않는 뇌졸중', code: 'I64' },
      { num: '6', disease: '뇌경색증을 유발하지 않은 뇌전동맥의 폐쇄 및 협착', code: 'I65' },
      { num: '7', disease: '뇌경색증을 유발하지 않은 대뇌동맥의 폐쇄 및 협착', code: 'I66' },
      { num: '8', disease: '기타 뇌혈관 질환', code: 'I67' },
      { num: '9', disease: '달리 분류된 질환에서의 뇌혈관 장애', code: 'I68' },
      { num: '10', disease: '뇌혈관 질환의 후유증', code: 'I69' }
    ]
  },

  // --- 3. 특정27대질병 (27개) ---
  {
    title: '[특정27대질병] 간질환',
    items: [
      { num: '1', disease: '바이러스간염', code: 'B15~B19' },
      { num: '2', disease: '간의 질환', code: 'K70~K77' },
      { num: '3', disease: '거대세포바이러스간염(K77.0*)', code: 'B25.1†' },
      { num: '4', disease: '톡소포자충간염(K77.0*)', code: 'B58.1†' }
    ]
  },
  {
    title: '[특정27대질병] 고혈압 질환',
    items: [
      { num: '1', disease: '본태성(원발성) 고혈압', code: 'I10' },
      { num: '2', disease: '고혈압성 심장병', code: 'I11' },
      { num: '3', disease: '고혈압성 신장병', code: 'I12' },
      { num: '4', disease: '고혈압성 심장 및 신장병', code: 'I13' },
      { num: '5', disease: '이차성 고혈압', code: 'I15' },
      { num: '6', disease: '고혈압성 망막병증 (단, 고혈압성 망막병증 이외의 배경망막병증 및 망막혈관변화는 제외)', code: 'H35.0' }
    ]
  },
  {
    title: '[특정27대질병] 당뇨병 질환',
    items: [
      { num: '1', disease: '1형 당뇨병', code: 'E10' },
      { num: '2', disease: '2형 당뇨병', code: 'E11' },
      { num: '3', disease: '영양실조-관련 당뇨병', code: 'E12' },
      { num: '4', disease: '기타 명시된 당뇨병', code: 'E13' },
      { num: '5', disease: '상세불명의 당뇨병', code: 'E14' },
      { num: '6', disease: '당뇨병성 단일신경병증', code: 'G59.0*' },
      { num: '7', disease: '당뇨병성 다발신경병증', code: 'G63.2*' },
      { num: '8', disease: '당뇨병성 백내장', code: 'H28.0*' },
      { num: '9', disease: '당뇨병성 망막병증', code: 'H36.0*' },
      { num: '10', disease: '당뇨병성 관절병증', code: 'M14.2*' },
      { num: '11', disease: '당뇨병에서의 사구체장애', code: 'N08.3*' }
    ]
  },
  {
    title: '[특정27대질병] 만성 하부 호흡기 질환',
    items: [
      { num: '1', disease: '급성인지 만성인지 명시되지 않은 기관지염', code: 'J40' },
      { num: '2', disease: '단순성 및 점액화농성 만성 기관지염', code: 'J41' },
      { num: '3', disease: '상세불명의 만성 기관지염', code: 'J42' },
      { num: '4', disease: '천식', code: 'J45' },
      { num: '5', disease: '천식지속상태', code: 'J46' }
    ]
  },
  {
    title: '[특정27대질병] 위궤양 및 십이지장궤양',
    items: [
      { num: '1', disease: '위궤양', code: 'K25' },
      { num: '2', disease: '십이지장궤양', code: 'K26' },
      { num: '3', disease: '상세불명 부위의 소화성 궤양', code: 'K27' }
    ]
  },
  {
    title: '[특정27대질병] 결핵',
    items: [
      { num: '1', disease: '결핵', code: 'A15~A19' },
      { num: '2', disease: '결핵의 후유증', code: 'B90' },
      { num: '3', disease: '결핵성 복막염(A18.30†)', code: 'K67.3*' },
      { num: '4', disease: '장, 복막 및 장간막림프절의 결핵성 장애(A18.3-*)', code: 'K93.0*' },
      { num: '5', disease: '결핵관절염(A18.01+)', code: 'M01.1*' },
      { num: '6', disease: '척추의 결핵(A18.00+)', code: 'M49.0*' },
      { num: '7', disease: '뼈의 결핵(A18.02+)', code: 'M90.0*' },
      { num: '8', disease: '결핵성 방광염(A18.11+)', code: 'N33.0*' },
      { num: '9', disease: '자궁경부의 결핵감염(A18.17+)', code: 'N74.0*' },
      { num: '10', disease: '여성 결핵성 골반염증질환(A18.17+)', code: 'N74.1*' }
    ]
  },
  {
    title: '[특정27대질병] 패혈증',
    items: [
      { num: '1', disease: '연쇄알균패혈증', code: 'A40' },
      { num: '2', disease: '기타 패혈증', code: 'A41' }
    ]
  },
  {
    title: '[특정27대질병] 중추신경계통의 염증성 질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 세균성 수막염', code: 'G00' },
      { num: '2', disease: '달리 분류된 세균성 질환에서의 수막염(수막알균수막염 G01*)', code: 'G01 / A39.0†' },
      { num: '3', disease: '달리 분류된 기타 감염성 및 기생충 질환에서의 수막염 (아데노바이러스수막염 G02.0*, 엔테로바이러스수막염 G02.0*, 헤르페스바이러스수막염 G02.0*, 수두수막염 G02.0*, 대상포진수막염 G02.0*, 수막염이 합병된 홍역 G02.0*, 볼거리수막염 G02.0*, 칸디다수막염 G02.1*, 콕시디오이데스진균수막염 G02.1*)', code: 'G02' },
      { num: '4', disease: '기타 및 상세불명의 원인에 의한 수막염', code: 'G03' },
      { num: '5', disease: '뇌염, 척수염 및 뇌척수염', code: 'G04' },
      { num: '6', disease: '달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염 (아데노바이러스뇌염 G05.1*, 엔테로바이러스뇌염 G05.1*, 헤르페스바이러스뇌염 G05.1*, 수두뇌염 G05.1*, 대상포진뇌염 G05.1*, 뇌염이 합병된 홍역 G05.1*, 볼거리뇌염 G05.1*)', code: 'G05' },
      { num: '7', disease: '두개내 및 척추내 농양 및 육아종', code: 'G06' },
      { num: '8', disease: '달리 분류된 질환에서의 두개내 및 척추내 농양 및 육아종(아메바성 뇌농양 G07*)', code: 'G07 / A06.6†' },
      { num: '9', disease: '두개내 및 척추내 정맥염 및 혈전정맥염', code: 'G08' },
      { num: '10', disease: '중추신경계통의 염증성 질환의 후유증', code: 'G09' }
    ]
  },
  {
    title: '[특정27대질병] 파킨슨병',
    items: [
      { num: '1', disease: '파킨슨병', code: 'G20' },
      { num: '2', disease: '이차성 파킨슨증', code: 'G21' }
    ]
  },
  {
    title: '[특정27대질병] 다발경화증',
    items: [
      { num: '1', disease: '다발경화증', code: 'G35' }
    ]
  },
  {
    title: '[특정27대질병] 뇌전증',
    items: [
      { num: '1', disease: '뇌전증', code: 'G40' },
      { num: '2', disease: '뇌전증지속상태', code: 'G41' }
    ]
  },
  {
    title: '[특정27대질병] 중증 근무력증',
    items: [
      { num: '1', disease: '중증근무력증 및 기타 근신경장애', code: 'G70' }
    ]
  },
  {
    title: '[특정27대질병] 뇌성마비',
    items: [
      { num: '1', disease: '뇌성마비', code: 'G80' }
    ]
  },
  {
    title: '[특정27대질병] 마비',
    items: [
      { num: '1', disease: '편마비', code: 'G81' },
      { num: '2', disease: '하반신마비 및 사지마비', code: 'G82' },
      { num: '3', disease: '기타 마비증후군', code: 'G83' }
    ]
  },
  {
    title: '[특정27대질병] 자율신경계통의 장애',
    items: [
      { num: '1', disease: '자율신경계통의 장애', code: 'G90' }
    ]
  },
  {
    title: '[특정27대질병] 수두증',
    items: [
      { num: '1', disease: '수두증', code: 'G91' }
    ]
  },
  {
    title: '[특정27대질병] 녹내장',
    items: [
      { num: '1', disease: '녹내장', code: 'H40' },
      { num: '2', disease: '달리 분류된 질환에서의 녹내장', code: 'H42' }
    ]
  },
  {
    title: '[특정27대질병] 동맥경화증',
    items: [
      { num: '1', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '[특정27대질병] 대동맥류',
    items: [
      { num: '1', disease: '대동맥동맥류 및 박리', code: 'I71' }
    ]
  },
  {
    title: '[특정27대질병] 폐렴',
    items: [
      { num: '1', disease: '달리 분류되지 않은 바이러스 폐렴', code: 'J12' },
      { num: '2', disease: '폐렴연쇄알균에 의한 폐렴', code: 'J13' },
      { num: '3', disease: '인플루엔자균에 의한 폐렴', code: 'J14' },
      { num: '4', disease: '달리 분류되지 않은 세균성 폐렴', code: 'J15' },
      { num: '5', disease: '달리 분류되지 않은 기타 감염성 병원체에 의한 폐렴', code: 'J16' },
      { num: '6', disease: '달리 분류된 질환에서의 폐렴', code: 'J17' },
      { num: '7', disease: '상세불명 병원체의 폐렴', code: 'J18' },
      { num: '8', disease: '재향군인병', code: 'A48.1' },
      { num: '9', disease: '수두폐렴(J17.1*)', code: 'B01.2†' },
      { num: '10', disease: '폐렴이 합병된 홍역(J17.1*)', code: 'B05.2†' },
      { num: '11', disease: '거대세포바이러스폐렴(J17.1*)', code: 'B25.0†' },
      { num: '12', disease: '폐톡소포자충증(J17.3*)', code: 'B58.3†' }
    ]
  },
  {
    title: '[특정27대질병] 폐질환',
    items: [
      { num: '1', disease: '폐기종', code: 'J43' },
      { num: '2', disease: '기타 만성 폐쇄성 폐질환', code: 'J44' },
      { num: '3', disease: '기관지확장증', code: 'J47' },
      { num: '4', disease: '하기도의 화농성 및 괴사성 병태', code: 'J85~J86' },
      { num: '5', disease: '흉막의 기타 질환', code: 'J90~J94' }
    ]
  },
  {
    title: '[특정27대질병] 외부요인에 의한 폐질환',
    items: [
      { num: '1', disease: '외부요인에 의한 폐질환', code: 'J60~J70' }
    ]
  },
  {
    title: '[특정27대질병] 폐부종',
    items: [
      { num: '1', disease: '폐부종', code: 'J81' }
    ]
  },
  {
    title: '[특정27대질병] 특정호흡기질환',
    items: [
      { num: '1', disease: '달리 분류되지 않은 폐호산구증가', code: 'J82' },
      { num: '2', disease: '기타 간질성 폐질환', code: 'J84' }
    ]
  },
  {
    title: '[특정27대질병] 급성 췌장염',
    items: [
      { num: '1', disease: '급성 췌장염', code: 'K85' }
    ]
  },
  {
    title: '[특정27대질병] 췌장질환',
    items: [
      { num: '1', disease: '췌장의 기타 질환', code: 'K86' },
      { num: '2', disease: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애 (거대세포바이러스췌장염 K87.1*, 볼거리췌장염 K87.1*)', code: 'K87 / B25.2†, B26.3†' }
    ]
  },
  {
    title: '[특정27대질병] 신부전',
    items: [
      { num: '1', disease: '신부전', code: 'N17~N19' }
    ]
  },

  // --- 4. 다빈도48대질병 (48개) ---
  {
    title: '[다빈도48대질병] 소화계통의 양성신생물(D13)',
    items: [
      { num: '1', disease: '기타 및 부위불명 소화계통의 양성 신생물', code: 'D13' }
    ]
  },
  {
    title: '[다빈도48대질병] 중이호흡계통 및 흉곽의 양성신생물',
    items: [
      { num: '1', disease: '중이 및 호흡계통의 양성 신생물', code: 'D14' },
      { num: '2', disease: '기타 및 상세불명의 흉곽내 기관의 양성 신생물', code: 'D15' }
    ]
  },
  {
    title: '[다빈도48대질병] 골 및 관절연골의 양성신생물',
    items: [
      { num: '1', disease: '골 및 관절연골의 양성 신생물', code: 'D16' }
    ]
  },
  {
    title: '[다빈도48대질병] 조직의 양성신생물',
    items: [
      { num: '1', disease: '중피조직의 양성 신생물', code: 'D19' },
      { num: '2', disease: '후복막 및 복막 연조직의 양성 신생물', code: 'D20' },
      { num: '3', disease: '결합조직 및 기타 연조직의 기타 양성 신생물', code: 'D21' }
    ]
  },
  {
    title: '[다빈도48대질병] 여성생식기의 양성종양',
    items: [
      { num: '1', disease: '자궁의 평활근종', code: 'D25' },
      { num: '2', disease: '자궁의 기타 양성 신생물', code: 'D26' },
      { num: '3', disease: '난소의 양성 신생물', code: 'D27' },
      { num: '4', disease: '기타 및 상세불명의 여성생식기관의 양성 신생물', code: 'D28' }
    ]
  },
  {
    title: '[다빈도48대질병] 남성생식기의 양성종양',
    items: [
      { num: '1', disease: '남성생식기관의 양성 신생물', code: 'D29' }
    ]
  },
  {
    title: '[다빈도48대질병] 비뇨기관의 양성신생물',
    items: [
      { num: '1', disease: '비뇨기관의 양성신생물', code: 'D30' }
    ]
  },
  {
    title: '[다빈도48대질병] 눈 및 부속기관의 양성종양',
    items: [
      { num: '1', disease: '눈 및 부속기의 양성 신생물', code: 'D31' }
    ]
  },
  {
    title: '[다빈도48대질병] 수막의 양성신생물',
    items: [
      { num: '1', disease: '수막의 양성 신생물', code: 'D32' }
    ]
  },
  {
    title: '[다빈도48대질병] 뇌 및 중추신경계통의 양성신생물',
    items: [
      { num: '1', disease: '뇌 및 중추신경계통의 기타 부분의 양성 신생물', code: 'D33' }
    ]
  },
  {
    title: '[다빈도48대질병] 갑상선 및 내분비선의 양성신생물',
    items: [
      { num: '1', disease: '갑상선의 양성 신생물', code: 'D34' },
      { num: '2', disease: '기타 및 상세불명의 내분비선의 양성 신생물', code: 'D35' }
    ]
  },
  {
    title: '[다빈도48대질병] 갑상선질환',
    items: [
      { num: '1', disease: '갑상선의 장애 (갑상선이상성 안구돌출 E05.0*)', code: 'E00~E07 / H06.2*' },
      { num: '2', disease: '처치후 갑상선기능저하증, 방사선조사후 갑상선기능저하증, 수술후 갑상선기능저하증', code: 'E89.0' }
    ]
  },
  {
    title: '[다빈도48대질병] 부갑상선 질환',
    items: [
      { num: '1', disease: '부갑상선기능저하증', code: 'E20' },
      { num: '2', disease: '부갑상선기능항진증 및 부갑상선의 기타 장애', code: 'E21' }
    ]
  },
  {
    title: '[다빈도48대질병] 뇌하수체 질환',
    items: [
      { num: '1', disease: '뇌하수체의 기능항진', code: 'E22' },
      { num: '2', disease: '뇌하수체의 기능저하 및 기타 장애', code: 'E23' }
    ]
  },
  {
    title: '[다빈도48대질병] 버거씨병',
    items: [
      { num: '1', disease: '폐색혈전혈관염[버거병]', code: 'I73.1' }
    ]
  },
  {
    title: '[다빈도48대질병] 동맥 및 세동맥의 질환',
    items: [
      { num: '1', disease: '동맥색전증 및 혈전증', code: 'I74' },
      { num: '2', disease: '동맥 및 세동맥의 기타 장애', code: 'I77' }
    ]
  },
  {
    title: '[다빈도48대질병] 림프절염',
    items: [
      { num: '1', disease: '비특이성 림프절염', code: 'I88' },
      { num: '2', disease: '림프관 및 림프절의 기타 비감염성 장애', code: 'I89' }
    ]
  },
  {
    title: '[다빈도48대질병] 급성상기도감염',
    items: [
      { num: '1', disease: '급성상기도감염', code: 'J00~J06' }
    ]
  },
  {
    title: '[다빈도48대질병] 축농증',
    items: [
      { num: '1', disease: '만성 부비동염', code: 'J32' }
    ]
  },
  {
    title: '[다빈도48대질병] 편도염',
    items: [
      { num: '1', disease: '편도 및 아데노이드의 만성 질환', code: 'J35' }
    ]
  },
  {
    title: '[다빈도48대질병] 인후부위의 특정질환',
    items: [
      { num: '1', disease: '편도주위 농양', code: 'J36' },
      { num: '2', disease: '만성 후두염 및 후두기관염', code: 'J37' },
      { num: '3', disease: '달리 분류되지 않은 성대 및 후두의 질환', code: 'J38' },
      { num: '4', disease: '상기도의 기타 질환', code: 'J39' }
    ]
  },
  {
    title: '[다빈도48대질병] 후각특정질환',
    items: [
      { num: '1', disease: '혈관운동성 및 알레르기성 비염', code: 'J30' },
      { num: '2', disease: '만성비염, 비인두염 및 인두염', code: 'J31' },
      { num: '3', disease: '코폴립', code: 'J33' },
      { num: '4', disease: '코 및 비동의 기타장애', code: 'J34' }
    ]
  },
  {
    title: '[다빈도48대질병] 외이의 질환',
    items: [
      { num: '1', disease: '외이의 질환', code: 'H60~H62' }
    ]
  },
  {
    title: '[다빈도48대질병] 중이 및 유돌의 질환',
    items: [
      { num: '1', disease: '중이 및 유돌의 질환 (중이염이 합병된 홍역 H67.1*, 홍역후 중이염 H67.1*)', code: 'H65~H75 / B05.3†' }
    ]
  },
  {
    title: '[다빈도48대질병] 내이의 질환',
    items: [
      { num: '1', disease: '내이의 질환', code: 'H80~H83' }
    ]
  },
  {
    title: '[다빈도48대질병] 황반변성',
    items: [
      { num: '1', disease: '황반 및 후극부의 변성', code: 'H35.3' }
    ]
  },
  {
    title: '[다빈도48대질병] 눈 및 눈부속기관의 특정질환',
    items: [
      { num: '1', disease: '공막, 각막, 홍채 및 섬모체의 장애 (홍채섬모체염 H22.0*, 홍채염 H22.0*, 전방포도막염 H22.0*, 각막염 H19.1*, 각막결막염 H19.1*, 각막상피염 H19.1*, 간질각막염 H19.1*, 각막내피염 H19.1*, 아데노바이러스에 의한 각막결막염 H19.2*, 유행성 각막결막염 H19.2*, 조선소눈병 H19.2*)', code: 'H15~H22 / B00.50+, B00.51+, B30.0+' },
      { num: '2', disease: '맥락막 및 망막의 장애 (단, 고혈압성 망막병증 H35.0, 황반변성 H35.3, 당뇨병 망막병증 H36.0 제외)', code: 'H30~H36' },
      { num: '3', disease: '시신경 및 시각경로의 장애', code: 'H46~H48' }
    ]
  },
  {
    title: '[다빈도48대질병] 사구체질환',
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
    title: '[다빈도48대질병] 신세뇨관-간질질환',
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
    title: '[다빈도48대질병] 방광의 결석',
    items: [
      { num: '1', disease: '방광의 결석', code: 'N21.0' }
    ]
  },
  {
    title: '[다빈도48대질병] 신장 및 요관의 기타 장애',
    items: [
      { num: '1', disease: '세뇨관기능손상으로 인한 장애', code: 'N25' },
      { num: '2', disease: '상세불명의 신장위축', code: 'N26' },
      { num: '3', disease: '원인불명의 작은 신장', code: 'N27' },
      { num: '4', disease: '달리 분류되지 않은 신장 및 요관의 기타 장애', code: 'N28' },
      { num: '5', disease: '달리 분류된 질환에서의 신장 및 요관의 기타 장애', code: 'N29' }
    ]
  },
  {
    title: '[다빈도48대질병] 비뇨계통의 기타 질환',
    items: [
      { num: '1', disease: '방광염', code: 'N30' },
      { num: '2', disease: '달리 분류되지 않은 방광의 신경근육기능장애', code: 'N31' },
      { num: '3', disease: '방광의 기타 장애', code: 'N32' },
      { num: '4', disease: '달리 분류된 질환에서의 방광장애', code: 'N33' },
      { num: '5', disease: '달리 분류된 질환에서의 요도장애 (칸디다 방광염 및 요도염 N37.0*)', code: 'N37 / B37.40†' },
      { num: '6', disease: '비뇨계통의 기타 장애 (결핵성 방광염 A18.11†, 스트레스요실금 N39.3, 기타 명시된 요실금 N39.4 제외)', code: 'N39' }
    ]
  },
  {
    title: '[다빈도48대질병] 유방의 장애',
    items: [
      { num: '1', disease: '양성 유방형성이상', code: 'N60' },
      { num: '2', disease: '유방의 염증성 장애', code: 'N61' },
      { num: '3', disease: '유방의 비대', code: 'N62' },
      { num: '4', disease: '유방의 상세불명의 덩이', code: 'N63' },
      { num: '5', disease: '유방의 기타 장애', code: 'N64' }
    ]
  },
  {
    title: '[다빈도48대질병] 식도질환',
    items: [
      { num: '1', disease: '식도염', code: 'K20' },
      { num: '2', disease: '위-식도역류병', code: 'K21' },
      { num: '3', disease: '식도의 기타질환', code: 'K22' },
      { num: '4', disease: '달리 분류된 질환에서의 식도의 장애 (결핵성 식도염 A18.82†, K23.0 제외)', code: 'K23' }
    ]
  },
  {
    title: '[다빈도48대질병] 위공장궤양',
    items: [
      { num: '1', disease: '위공장궤양', code: 'K28' }
    ]
  },
  {
    title: '[다빈도48대질병] 위,십이지장 질환',
    items: [
      { num: '1', disease: '위염 및 십이지장염', code: 'K29' },
      { num: '2', disease: '기능성 소화불량', code: 'K30' }
    ]
  },
  {
    title: '[다빈도48대질병] 사타구니 탈장',
    items: [
      { num: '1', disease: '사타구니탈장', code: 'K40' }
    ]
  },
  {
    title: '[다빈도48대질병] 특정 부위의 탈장',
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
    title: '[다빈도48대질병] 비감염성 장염 및 결장염',
    items: [
      { num: '1', disease: '크론병[국소성 장염]', code: 'K50' },
      { num: '2', disease: '궤양성 대장염', code: 'K51' },
      { num: '3', disease: '기타 비감염성 위장염 및 결장염', code: 'K52' }
    ]
  },
  {
    title: '[다빈도48대질병] 특정 장질환',
    items: [
      { num: '1', disease: '장의 혈관장애', code: 'K55' },
      { num: '2', disease: '탈장이 없는 마비성 장폐색증 및 장폐색', code: 'K56' },
      { num: '3', disease: '장의 게실병', code: 'K57' }
    ]
  },
  {
    title: '[다빈도48대질병] 복막의 질환',
    items: [
      { num: '1', disease: '복막의 질환 (결핵성 복막염 A18.30†, K67.3 제외)', code: 'K65~K67' }
    ]
  },
  {
    title: '[다빈도48대질병] 담석증',
    items: [
      { num: '1', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '[다빈도48대질병] 담낭담도 질환',
    items: [
      { num: '1', disease: '담낭염', code: 'K81' },
      { num: '2', disease: '담낭의 기타질환', code: 'K82' },
      { num: '3', disease: '담도의 기타질환', code: 'K83' }
    ]
  },
  {
    title: '[다빈도48대질병] 척추변형',
    items: [
      { num: '1', disease: '척주후만증 및 척주전만증', code: 'M40' },
      { num: '2', disease: '척주측만증', code: 'M41' },
      { num: '3', disease: '척추골연골증', code: 'M42' },
      { num: '4', disease: '기타 변형성 등병증', code: 'M43' }
    ]
  },
  {
    title: '[다빈도48대질병] 척추병증',
    items: [
      { num: '1', disease: '강직척추염', code: 'M45' },
      { num: '2', disease: '기타 염증성 척추병증', code: 'M46' },
      { num: '3', disease: '척추증', code: 'M47' },
      { num: '4', disease: '기타 척추병증', code: 'M48' }
    ]
  },
  {
    title: '[다빈도48대질병] 추간판장애(디스크질환)',
    items: [
      { num: '1', disease: '경추간판장애', code: 'M50' },
      { num: '2', disease: '기타 추간판장애', code: 'M51' }
    ]
  },
  {
    title: '[다빈도48대질병] 골다공증',
    items: [
      { num: '1', disease: '병적 골절을 동반한 골다공증', code: 'M80' },
      { num: '2', disease: '병적 골절이 없는 골다공증', code: 'M81' },
      { num: '3', disease: '달리 분류된 질환에서의 골다공증', code: 'M82' },
      { num: '4', disease: '골연속성의 장애', code: 'M84' }
    ]
  },
  {
    title: '[다빈도48대질병] 안면 신경장애',
    items: [
      { num: '1', disease: '삼차신경의 장애', code: 'G50' },
      { num: '2', disease: '안면신경장애', code: 'G51' },
      { num: '3', disease: '기타 뇌신경의 장애', code: 'G52' }
    ]
  },
  {
    title: '[다빈도48대질병] 단일신경병증',
    items: [
      { num: '1', disease: '팔의 단일신경병증', code: 'G56' },
      { num: '2', disease: '다리의 단일신경병증', code: 'G57' },
      { num: '3', disease: '기타 단일신경병증', code: 'G58' },
      { num: '4', disease: '달리 분류된 질환에서의 단일신경병증 (당뇨병성 단일신경병증 G59.0 제외)', code: 'G59' }
    ]
  },

  // --- 5. 관절염생식기질환 (2개) ---
  {
    title: '[관절염생식기질환] 관절염',
    items: [
      { num: '1', disease: '감염성 관절병증 (결핵 관절염 A18.01†, M01.1 제외)', code: 'M00~M03' },
      { num: '2', disease: '염증성 다발관절병증 (당뇨병성 관절병증 M14.2 제외, 류마티스페질환 M05.1†)', code: 'M05~M14 / J99.0*' },
      { num: '3', disease: '관절증', code: 'M15~M19' },
      { num: '4', disease: '기타 관절장애', code: 'M20~M25' }
    ]
  },
  {
    title: '[관절염생식기질환] 생식기질환',
    items: [
      { num: '1', disease: '남성 생식기관의 질환 (남성 불임 제외, 편모충성 전립선염 N51.0*, 볼거리고환염 N51.1*)', code: 'N40~N45, N47~N51 / A59.08†, B26.0†' },
      { num: '2', disease: '여성 골반내 기관의 염증성 질환 (자궁경부 결핵감염 A18.17† N74.0, 여성 결핵성 골반염증질환 A18.17† N74.1 제외)', code: 'N70~N77' },
      { num: '3', disease: '여성 생식관의 비염증성 장애 (습관성 유산자, 여성 불임, 인공 수정 관련 합병증 제외)', code: 'N80~N95' },
      { num: '4', disease: '달리 분류되지 않은 비뇨생식계통의 처치후 장애', code: 'N99' }
    ]
  },

  // --- 6. 치핵 (1개) ---
  {
    title: '[치핵] 치핵 및 항문주위 정맥의 혈전증',
    items: [
      { num: '1', disease: '치핵 및 항문주위 정맥의 혈전증 (포함 - 치질 K64 / 제외 - 합병증: 출산 및 산후기 O87.2, 임신 O22.4)', code: 'K64' }
    ]
  },

  // --- 7. 백내장 (1개) ---
  {
    title: '[백내장] 백내장',
    items: [
      { num: '1', disease: '노년성 백내장', code: 'H25' },
      { num: '2', disease: '기타 백내장', code: 'H26' },
      { num: '3', disease: '수정체의 기타 장애', code: 'H27' }
    ]
  }
];

// 메리츠화재 82대질병수술 상단 요약 분류표 데이터
export const MERITZ_82_DISEASES_SUMMARY_SECTIONS = (() => {
  const groupMap: Record<string, string[]> = {};
  MERITZ_82_DISEASES_SECTIONS.forEach((sec) => {
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
