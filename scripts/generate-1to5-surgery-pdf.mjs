import { Resvg } from '@resvg/resvg-js';
import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const PAGE_WIDTH = 1754;
const PAGE_HEIGHT = 1240; // A4 Landscape ratio
const MARGIN_LEFT = 45;
const MARGIN_RIGHT = 45;
const COL_GAP = 28;
const TABLE_WIDTH = (PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT - COL_GAP) / 2; // 818
const COL_CAT_W = 160;
const COL_GRADE_W = 75;
const COL_NAME_W = TABLE_WIDTH - COL_CAT_W - COL_GRADE_W; // 583

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function renderColHeader(x, y, h = 42, customCatTitle = '구분', customNameTitle = '수술명') {
  return `
    <rect x="${x}" y="${y}" width="${TABLE_WIDTH}" height="${h}" fill="#eef0f2" stroke="#222222" stroke-width="1.2" />
    <line x1="${x + COL_CAT_W}" y1="${y}" x2="${x + COL_CAT_W}" y2="${y + h}" stroke="#222222" stroke-width="1.2" />
    <line x1="${x + COL_CAT_W + COL_NAME_W}" y1="${y}" x2="${x + COL_CAT_W + COL_NAME_W}" y2="${y + h}" stroke="#222222" stroke-width="1.2" />
    <text x="${x + COL_CAT_W / 2}" y="${y + 26}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#111111">${escapeXml(customCatTitle)}</text>
    <text x="${x + COL_CAT_W + COL_NAME_W / 2}" y="${y + 26}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#111111">${escapeXml(customNameTitle)}</text>
    <text x="${x + COL_CAT_W + COL_NAME_W + COL_GRADE_W / 2}" y="${y + 18}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">수술</text>
    <text x="${x + COL_CAT_W + COL_NAME_W + COL_GRADE_W / 2}" y="${y + 34}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">종류</text>
  `;
}

function renderCategoryBox(x, y, h, lines) {
  let textNodes = '';
  const totalTextH = lines.length * 20;
  const startY = y + (h - totalTextH) / 2 + 15;
  lines.forEach((line, idx) => {
    const isSub = line.startsWith('[') || line.startsWith('(');
    const weight = isSub ? 'normal' : 'bold';
    const size = isSub ? 13 : 15;
    textNodes += `<text x="${x + COL_CAT_W / 2}" y="${startY + idx * 20}" font-family="NanumGothic" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="#111111">${escapeXml(line)}</text>`;
  });

  return `
    <rect x="${x}" y="${y}" width="${COL_CAT_W}" height="${h}" fill="#fcfcfc" stroke="#222222" stroke-width="1" />
    ${textNodes}
  `;
}

function renderItemRow(x, y, h, lines, grade, isSubItem = false) {
  let textNodes = '';
  const lineHeight = 19;
  const totalTextH = lines.length * lineHeight;
  const startY = y + (h - totalTextH) / 2 + 14;

  lines.forEach((line, idx) => {
    const isSub = isSubItem || idx > 0;
    const indent = isSubItem ? 28 : (idx > 0 ? 24 : 10);
    const size = 13.8;
    textNodes += `<text x="${x + COL_CAT_W + indent}" y="${startY + idx * lineHeight}" font-family="NanumGothic" font-size="${size}" fill="#111111">${escapeXml(line)}</text>`;
  });

  const gradeY = y + h / 2 + 5.5;

  return `
    <rect x="${x + COL_CAT_W}" y="${y}" width="${COL_NAME_W + COL_GRADE_W}" height="${h}" fill="#ffffff" stroke="#222222" stroke-width="1" />
    <line x1="${x + COL_CAT_W + COL_NAME_W}" y1="${y}" x2="${x + COL_CAT_W + COL_NAME_W}" y2="${y + h}" stroke="#222222" stroke-width="1" />
    ${textNodes}
    <text x="${x + COL_CAT_W + COL_NAME_W + COL_GRADE_W / 2}" y="${gradeY}" font-family="NanumGothic" font-size="16" font-weight="${grade === '-' ? 'normal' : 'bold'}" text-anchor="middle" fill="#111111">${grade}</text>
  `;
}

// Page 1
function generatePage1Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
    
    <!-- Title Area -->
    <text x="${MARGIN_LEFT}" y="52" font-family="NanumGothic" font-size="24" font-weight="bold" fill="#0033cc">【별표78】 1~5종수술(동일) 분류표</text>
    <line x1="${MARGIN_LEFT}" y1="64" x2="${MARGIN_LEFT + 700}" y2="64" stroke="#0033cc" stroke-width="2.5" />
    
    <text x="${MARGIN_LEFT}" y="98" font-family="NanumGothic" font-size="18.5" font-weight="bold" fill="#111111">1. 일반적인 상해 및 질병 치료목적의 수술</text>
  `;

  // Left Column on Page 1
  const leftX = MARGIN_LEFT;
  let leftY = 118;
  svg += renderColHeader(leftX, leftY);
  leftY += 42;

  // 피부, 유방의 수술 (Items 1 to 4)
  const skinItems = [
    { lines: ['1. 피부이식수술(25㎠이상인 경우),', '   피판수술(피판분리수술, Z flap, W flap 제외)'], grade: '3', h: 44 },
    { lines: ['2. 피부이식수술(25㎠미만인 경우)'], grade: '1', h: 32 },
    { lines: ['3. 유방절단수술(切斷術, Mastectomy)'], grade: '3', h: 32 },
    { lines: ['4. 기타 유방수술[농양(고름집)의 절개 및 배액은', '   제외]'], grade: '1', h: 42 },
  ];
  const skinTotalH = skinItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, skinTotalH, ['피부, 유방의', '수술']);
  let tempY = leftY;
  skinItems.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  leftY += skinTotalH;

  // 근골의 수술 (Items 5 to 14)
  const muscleItems = [
    { lines: ['5. 골(骨) 이식수술'], grade: '2', h: 32 },
    { lines: ['6. 두개골(頭蓋骨, cranium) 관혈수술', '   [비골(鼻骨)·비중격(鼻中隔)·상악골(上顎骨)·하', '   악골(下顎骨)·악관절(顎關節)은 제외]'], grade: '3', h: 64 },
    { lines: ['7. 비골(鼻骨) 수술', '   [비중격 만곡증(彎曲症)수술]'], grade: '1', h: 42 },
    { lines: ['8. 상악골(上顎骨), 하악골(下顎骨), 악관절(顎關節) 관', '   혈수술'], grade: '2', h: 42 },
    { lines: ['9. 척추골(脊椎骨), 골반골(骨盤骨), 추간판 관혈수술'], grade: '3', h: 32 },
    { lines: ['10. 쇄골(鎖骨), 견갑골(肩胛骨), 늑골(肋骨), 흉골(胸', '    골) 관혈수술'], grade: '2', h: 42 },
    { lines: ['11. 사지(四肢) 절단수술', '    [다지증에 대한 절단수술은 제외]'], grade: '-', h: 42 },
    { lines: ['11-1. 손가락, 발가락 절단수술', '      [골, 관절의 이단(離斷)에 수반하는 것]'], grade: '1', h: 42, isSub: true },
    { lines: ['11-2. 기타 사지(四肢)절단수술'], grade: '3', h: 32, isSub: true },
    { lines: ['12. 절단(切斷)된 사지(四肢)재접합수술(再接合手術)', '    [골, 관절의 이단(離斷)에 수반하는 것]'], grade: '3', h: 42 },
    { lines: ['13. 사지골(四肢骨), 사지관절(四肢關節) 관혈수술'], grade: '-', h: 32 },
    { lines: ['13-1. 손가락, 발가락의 골 및 관절 관혈수술'], grade: '1', h: 32, isSub: true },
    { lines: ['13-2. 기타 사지골(四肢骨), 사지관절(四肢關節) 관혈수술'], grade: '2', h: 32, isSub: true },
    { lines: ['14. 근(筋), 건(腱), 인대(靭帶), 연골(軟骨) 관혈수술'], grade: '1', h: 32 },
  ];
  const muscleTotalH = muscleItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, muscleTotalH, [
    '근골(筋骨)의 수술', '',
    '[발정술(拔釘術)등', '내고정물 제거술은', '제외함]', '',
    '[치(齒)·치은·치근', '(齒根)·치조골(齒', '槽骨)의 처치, 임', '플란트(Implant)', '등 치과 처치 및', '수술에 수반하는', '것은 제외함]'
  ]);
  tempY = leftY;
  muscleItems.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade, item.isSub);
    tempY += item.h;
  });
  leftY += muscleTotalH;

  // Outer border left
  svg += `<rect x="${leftX}" y="118" width="${TABLE_WIDTH}" height="${leftY - 118}" fill="none" stroke="#222222" stroke-width="2" />`;

  // Right Column on Page 1
  const rightX = MARGIN_LEFT + TABLE_WIDTH + COL_GAP;
  let rightY = 118;
  svg += renderColHeader(rightX, rightY);
  rightY += 42;

  // 호흡기계, 흉부의 수술 (Items 15 to 21)
  const respItems = [
    { lines: ['15. 만성부비강염(慢性副鼻腔炎) 근본수술(根本手術)'], grade: '1', h: 31 },
    { lines: ['16. 후두(喉頭) 관혈적 절제수술'], grade: '3', h: 31 },
    { lines: ['17. 편도, 아데노이드 절제수술'], grade: '1', h: 31 },
    { lines: ['18. 기관(氣管), 기관지(氣管支), 폐(肺), 흉막(胸膜)', '   관혈수술', '   [개흉술(開胸術, Thoracotomy)을 수반하는 것]'], grade: '4', h: 63 },
    { lines: ['19. 폐장(肺臟) 이식수술[수용자(受容者)에 한함]'], grade: '5', h: 31 },
    { lines: ['20. 흉곽(胸郭) 형성수술(形成手術)'], grade: '3', h: 31 },
    { lines: ['21. 종격종양(縱隔腫瘍), 흉선 절제수술', '   [개흉술을 수반하는 것]'], grade: '4', h: 42 },
  ];
  const respTotalH = respItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, respTotalH, ['호흡기계,', '흉부(胸部)의', '수술']);
  tempY = rightY;
  respItems.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += respTotalH;

  // 순환기계, 비장의 수술 (Items 22 to 29)
  const circItems = [
    { lines: ['22. 혈관관혈수술[하지정맥류 및 손가락·발가락은 제외]'], grade: '3', h: 31 },
    { lines: ['23. 하지 정맥류(靜脈瘤) 근본수술 및 손가락·발가락', '   혈관관혈수술'], grade: '1', h: 42 },
    { lines: ['24. 대동맥(大動脈), 대정맥(大靜脈), 폐동맥(肺動脈),', '   관동맥(冠動脈) 관혈수술[개흉술, 개복술을 수반하는 것]'], grade: '5', h: 42 },
    { lines: ['25. 심장막(心臟膜) 관혈수술 [개흉술을 수반하는 것]'], grade: '4', h: 31 },
    { lines: ['26. 심장내(心臟內) 관혈수술 [개흉술을 수반하는 것]'], grade: '5', h: 31 },
    { lines: ['27. 심장 이식수술 [수용자에 한함]'], grade: '5', h: 31 },
    { lines: ['28. 체내용(體內用) 인공심박조율기(人工心搏調律機,', '   Artificial pacemaker) 매입술(埋入術)'], grade: '3', h: 42 },
    { lines: ['29. 비장(脾臟) 절제수술'], grade: '3', h: 31 },
  ];
  const circTotalH = circItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, circTotalH, ['순환기계,', '비장(脾臟)의', '수술']);
  tempY = rightY;
  circItems.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += circTotalH;

  // 소화기계의 수술 1부 (Items 30 to 36)
  const digItems1 = [
    { lines: ['30. 이하선 절제수술'], grade: '3', h: 31 },
    { lines: ['31-1. 악하선, 설하선 절제수술'], grade: '2', h: 31 },
    { lines: ['31-2. 기타 타액선 절제수술(타석제거는 제외)'], grade: '1', h: 31 },
    { lines: ['32. 식도(食道) 이단술(離斷術)', '   [개흉술, 개복술(開腹術, Laparotomy)을 수반하는 것]'], grade: '4', h: 42 },
    { lines: ['33. 위 절제수술(胃 切除手術, Gastrectomy)', '   [개복술을 수반하는 것]'], grade: '4', h: 42 },
    { lines: ['34. 기타의 위·식도 관혈수술', '   [개흉술, 개복술을 수반하는 것]'], grade: '3', h: 42 },
    { lines: ['35. 간장(肝臟), 췌장(膵臟) 관혈수술', '   [개복술을 수반하는 것]'], grade: '4', h: 42 },
    { lines: ['36. 담낭(膽囊), 담도(膽道) 관혈수술', '   [개복술을 수반하는 것]'], grade: '3', h: 42 },
  ];
  const digTotalH1 = digItems1.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, digTotalH1, ['소화기계의 수술']);
  tempY = rightY;
  digItems1.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += digTotalH1;

  // Outer border right
  svg += `<rect x="${rightX}" y="118" width="${TABLE_WIDTH}" height="${rightY - 118}" fill="none" stroke="#222222" stroke-width="2" />`;

  // Page number
  svg += `<text x="${PAGE_WIDTH / 2}" y="${PAGE_HEIGHT - 35}" font-family="NanumGothic" font-size="15" text-anchor="middle" fill="#666666">- 1 -</text>`;

  svg += `</svg>`;
  return svg;
}

// Page 2
function generatePage2Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
  `;

  // Left Column on Page 2
  const leftX = MARGIN_LEFT;
  let leftY = 48;
  svg += renderColHeader(leftX, leftY);
  leftY += 42;

  // 소화기계의 수술 2부 (Items 37 to 44)
  const digItems2 = [
    { lines: ['37. 간장 이식수술', '   [수용자에 한함, 개복술을 수반하는 것]'], grade: '5', h: 44 },
    { lines: ['38. 췌장 이식수술', '   [개복술을 수반해야 하며 수용자에 한함]', '   (단, 랑게르한스 소도(Islet of Langerhans)세포', '   이식수술은 제외)'], grade: '5', h: 84 },
    { lines: ['39. 탈장(脫腸) 근본수술'], grade: '1', h: 32 },
    { lines: ['40. 전신성 복막염(全身性腹膜炎, Generalized', '   peritonitis) 수술'], grade: '2', h: 44 },
    { lines: ['41. 충수(蟲垂)절제술(충수염관련 충수주위', '   농양(고름집)수술, 국한성 복막염 수술 포함),', '   맹장봉축술(盲腸縫縮術)'], grade: '2', h: 64 },
    { lines: ['42. 직장탈(直腸脫) 근본수술'], grade: '1', h: 32 },
    { lines: ['43. 소장(小腸), 결장(結腸), 직장(直腸),', '   장간막(腸間膜) 관혈수술 [개복술을 수반하는 것]', '   (단, 직장탈근본수술은 제외)'], grade: '4', h: 64 },
    { lines: ['44. 치루(痔瘻), 치열(痔裂), 치핵(痔核) 근본수술', '   [근치를 목적으로 하지 않은 수술은 제외]'], grade: '1', h: 44 },
  ];
  const digTotalH2 = digItems2.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, digTotalH2, ['소화기계의 수술']);
  let tempY = leftY;
  digItems2.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  leftY += digTotalH2;

  // 비뇨기계, 생식기계의 수술 1부 (Items 45 to 52)
  const uroItems1 = [
    { lines: ['45. 신장(腎臟), 방광(膀胱), 신우(腎盂),', '   요관(尿管)관혈수술 [개복술을 수반하는 것,', '   경요도적 조작 및 방광류·요실금 교정수술은 제외]'], grade: '4', h: 64 },
    { lines: ['46. 요도 관혈수술 [경요도적 조작은 제외]'], grade: '2', h: 34 },
    { lines: ['47. 방광류 교정수술'], grade: '1', h: 32 },
    { lines: ['48. 요실금수술(급여)'], grade: '1', h: 32 },
    { lines: ['49. 신장(腎臟) 이식수술(移植手術) [수용자에 한함]'], grade: '5', h: 34 },
    { lines: ['50. 음경(陰莖) 절단수술', '   [포경수술 및 음경이물제거수술은 제외]'], grade: '3', h: 44 },
    { lines: ['51. 고환(睾丸), 부고환(副睾丸), 정관(精管),', '   정색(精索), 정낭(精囊)관혈수술,', '   전립선(前立腺)관혈수술'], grade: '2', h: 64 },
    { lines: ['52. 음낭관혈수술'], grade: '1', h: 32 },
  ];
  const uroTotalH1 = uroItems1.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, uroTotalH1, [
    '비뇨기계,', '생식기계의', '수술', '',
    '[인공임신중절', '수술은 제외함]'
  ]);
  tempY = leftY;
  uroItems1.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  leftY += uroTotalH1;

  // Outer border left
  svg += `<rect x="${leftX}" y="48" width="${TABLE_WIDTH}" height="${leftY - 48}" fill="none" stroke="#222222" stroke-width="2" />`;

  // Right Column on Page 2
  const rightX = MARGIN_LEFT + TABLE_WIDTH + COL_GAP;
  let rightY = 48;
  svg += renderColHeader(rightX, rightY);
  rightY += 42;

  // 비뇨기계, 생식기계 2부 (Items 53 to 56)
  const uroItems2 = [
    { lines: ['53. 자궁, 난소, 난관 관혈수술', '   [단, 제왕절개만출술 및 경질적인 조작은 제외]'], grade: '2', h: 42 },
    { lines: ['54. 제왕절개만출술(帝王切開娩出術)', '   (단, 질병1~5종수술비Ⅱ(동일질병당 1회지급) 및', '   질병1~5종수술비Ⅱ(10년후2배체증)(동일질병당', '   1회지급) 담보에서만 보장)'], grade: '1', h: 80 },
    { lines: ['55. 경질적 자궁, 난소, 난관 수술'], grade: '1', h: 32 },
    { lines: ['56. 질탈(膣脫)근본수술'], grade: '1', h: 32 },
  ];
  const uroTotalH2 = uroItems2.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, uroTotalH2, ['비뇨기계,', '생식기계의', '수술']);
  tempY = rightY;
  uroItems2.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += uroTotalH2;

  // 내분비계의 수술 (Items 57 to 59)
  const endoItems = [
    { lines: ['57. 뇌하수체종양(腦下垂體腫瘍) 절제수술'], grade: '5', h: 32 },
    { lines: ['58. 갑상선(甲狀腺)·부갑상선(副甲狀腺) 관혈수술'], grade: '3', h: 32 },
    { lines: ['59. 부신(副腎) 절제수술'], grade: '4', h: 32 },
  ];
  const endoTotalH = endoItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, endoTotalH, ['내분비계의 수술']);
  tempY = rightY;
  endoItems.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += endoTotalH;

  // 신경계의 수술 (Items 60 to 63)
  const neuroItems = [
    { lines: ['60. 두개내(頭蓋內) 관혈수술', '   [개두술(開頭術, Craniotomy)을 수반하는 것]'], grade: '5', h: 42 },
    { lines: ['61. 신경(神經) 관혈수술'], grade: '2', h: 32 },
    { lines: ['62. 관혈적 척수종양(脊髓腫瘍) 절제수술'], grade: '4', h: 32 },
    { lines: ['63. 척수경막내외(脊髓硬膜內外) 관혈수술'], grade: '3', h: 32 },
  ];
  const neuroTotalH = neuroItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, neuroTotalH, ['신경계의 수술']);
  tempY = rightY;
  neuroItems.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += neuroTotalH;

  // 시각기의 수술 1부 (Items 64 to 75)
  const eyeItems1 = [
    { lines: ['64. 안검하수증(眼瞼下垂症)수술 [안검내반증 제외]'], grade: '1', h: 30 },
    { lines: ['65. 눈물소관(淚小管,눈물길)형성수술 [누관튜브삽입술', '   포함]'], grade: '1', h: 40 },
    { lines: ['66. 누낭비강(淚囊鼻腔) 관혈수술'], grade: '2', h: 30 },
    { lines: ['67. 결막낭(結膜囊) 형성수술'], grade: '2', h: 30 },
    { lines: ['68. 각막, 결막, 공막 봉합수술'], grade: '1', h: 30 },
    { lines: ['69. 각막, 공막 이식수술'], grade: '2', h: 30 },
    { lines: ['70. 전방(前房), 홍채(虹彩), 유리체(琉璃體) 관혈수술'], grade: '2', h: 30 },
    { lines: ['71. 녹내장(綠內障) 관혈수술'], grade: '3', h: 30 },
    { lines: ['72. 백내장(白內障), 수정체(水晶體) 관혈수술'], grade: '1', h: 30 },
    { lines: ['73. 망막박리(網膜剝離) 수술'], grade: '2', h: 30 },
    { lines: ['74. 레이저(Laser)에 의한 안구(眼球) 수술', '   [시력회복 및 시력개선 목적의 수술은 제외]'], grade: '1', h: 40 },
    { lines: ['75. 냉동응고(冷凍凝固)에 의한 안구(眼球) 수술'], grade: '2', h: 30 },
  ];
  const eyeTotalH1 = eyeItems1.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(rightX, rightY, eyeTotalH1, [
    '시각기의 수술', '',
    '[약물주입술은', '제외]'
  ]);
  tempY = rightY;
  eyeItems1.forEach(item => {
    svg += renderItemRow(rightX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  rightY += eyeTotalH1;

  // Outer border right
  svg += `<rect x="${rightX}" y="48" width="${TABLE_WIDTH}" height="${rightY - 48}" fill="none" stroke="#222222" stroke-width="2" />`;

  // Page number
  svg += `<text x="${PAGE_WIDTH / 2}" y="${PAGE_HEIGHT - 35}" font-family="NanumGothic" font-size="15" text-anchor="middle" fill="#666666">- 2 -</text>`;

  svg += `</svg>`;
  return svg;
}

// Page 3
function generatePage3Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
  `;

  // Left Column on Page 3
  const leftX = MARGIN_LEFT;
  let leftY = 48;
  svg += renderColHeader(leftX, leftY);
  leftY += 42;

  // 시각기의 수술 2부 (Items 76 to 79)
  const eyeItems2 = [
    { lines: ['76. 안구적출술, 조직충전술(組織充塡術)'], grade: '3', h: 32 },
    { lines: ['77. 안와내종양절제수술'], grade: '3', h: 32 },
    { lines: ['78. 관혈적 안와내(眼窩內) 이물제거수술(異物除去手術)'], grade: '1', h: 32 },
    { lines: ['79. 안근(眼筋)관혈수술'], grade: '1', h: 32 },
  ];
  const eyeTotalH2 = eyeItems2.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, eyeTotalH2, ['시각기의 수술']);
  let tempY = leftY;
  eyeItems2.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  leftY += eyeTotalH2;

  // 청각기의 수술 (Items 80 to 84)
  const earItems = [
    { lines: ['80. 관혈적 고막(鼓膜) 성형술 [고막 패치술은 제외]'], grade: '2', h: 32 },
    { lines: ['81. 유양동 절제술(乳樣洞切除術, mastoidectomy)'], grade: '2', h: 32 },
    { lines: ['82. 중이(中耳) 관혈수술 [중이내 튜브유치술 제외]'], grade: '2', h: 32 },
    { lines: ['83. 중이내(中耳內) 튜브유치술 [고막 패치술은 제외]'], grade: '1', h: 32 },
    { lines: ['84. 내이(內耳) 관혈수술'], grade: '3', h: 32 },
  ];
  const earTotalH = earItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, earTotalH, ['청각기(聽覺器)의', '수술']);
  tempY = leftY;
  earItems.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade);
    tempY += item.h;
  });
  leftY += earTotalH;

  // 상기 이외의 수술 (Items 85 to 89)
  const otherItems = [
    { lines: ['85. 상기 이외의 개두술(開頭術)'], grade: '3', h: 32 },
    { lines: ['86. 상기 이외의 개흉술(開胸術)'], grade: '3', h: 32 },
    { lines: ['87. 상기 이외의 개복술(開腹術)'], grade: '2', h: 32 },
    { lines: ['88. 체외충격파쇄석술(體外衝擊波破碎石術, E.S.W.L)', '   [체외충격파치료술(E.S.W.T)은 제외]'], grade: '2', h: 42 },
    { lines: ['89. 내시경(Fiberscope)에 의한 내시경 수술 또는', '   카테터 (Catheter)·고주파 전극 등에 의한 경피적', '   수술'], grade: '-', h: 64 },
    { lines: ['89-1. 뇌, 심장'], grade: '3', h: 32, isSub: true },
    { lines: ['89-2. 후두, 흉부장기[심장 제외], 복부장기[비뇨,', '    생식기 제외], 척추, 사지관절[손가락, 발가락은', '    제외]'], grade: '2', h: 64, isSub: true },
    { lines: ['89-3. 비뇨, 생식기 및 손가락, 발가락'], grade: '1', h: 32, isSub: true },
  ];
  const otherTotalH = otherItems.reduce((sum, item) => sum + item.h, 0);
  svg += renderCategoryBox(leftX, leftY, otherTotalH, [
    '상기 이외의', '수술', '',
    '[검사, 처치,', '약물주입요법은', '포함하지 않음]'
  ]);
  tempY = leftY;
  otherItems.forEach(item => {
    svg += renderItemRow(leftX, tempY, item.h, item.lines, item.grade, item.isSub);
    tempY += item.h;
  });
  leftY += otherTotalH;

  // Outer border left
  svg += `<rect x="${leftX}" y="48" width="${TABLE_WIDTH}" height="${leftY - 48}" fill="none" stroke="#222222" stroke-width="2" />`;

  // Notes below left column
  leftY += 16;
  svg += `
    <text x="${leftX}" y="${leftY}" font-family="NanumGothic" font-size="13.5" fill="#222222">주1) 상기 1~88항의 수술 중 내시경(Fiberscope)을 이용한 내시경 수술 또는 카테터</text>
    <text x="${leftX + 24}" y="${leftY + 20}" font-family="NanumGothic" font-size="13.5" fill="#222222">(Catheter)등에 의한 경피적(經皮的, Percutaneous) 수술은 89항을 적용합니다.</text>
    <text x="${leftX + 24}" y="${leftY + 40}" font-family="NanumGothic" font-size="13.5" fill="#222222">다만, 복강경·흉강경에 의한 수술은 해당부위(1~88항)의 수술로 적용합니다.</text>
    <text x="${leftX}" y="${leftY + 64}" font-family="NanumGothic" font-size="13.5" fill="#222222">주2) 상기 44항(치루(痔瘻), 치열(痔裂), 치핵(痔核) 근본수술), 48항(요실금수술(급</text>
    <text x="${leftX + 24}" y="${leftY + 84}" font-family="NanumGothic" font-size="13.5" fill="#222222">여)) 등의 수술은 해당 약관 및 가입 상품별 지급 기준에 따릅니다.</text>
  `;

  // Right Column on Page 3
  const rightX = MARGIN_LEFT + TABLE_WIDTH + COL_GAP;
  let rightY = 48;

  // Section 2: 악성신생물 치료목적의 수술
  svg += `<text x="${rightX}" y="${rightY + 18}" font-family="NanumGothic" font-size="18.5" font-weight="bold" fill="#111111">2. 악성신생물 치료목적의 수술</text>`;
  rightY += 34;

  const sec2ColCatW = 0; // In section 2, it only has 수술명 and 수술종류
  const sec2NameW = TABLE_WIDTH - COL_GRADE_W; // 743

  // Render sec2 header
  svg += `
    <rect x="${rightX}" y="${rightY}" width="${TABLE_WIDTH}" height="40" fill="#eef0f2" stroke="#222222" stroke-width="1.2" />
    <line x1="${rightX + sec2NameW}" y1="${rightY}" x2="${rightX + sec2NameW}" y2="${rightY + 40}" stroke="#222222" stroke-width="1.2" />
    <text x="${rightX + sec2NameW / 2}" y="${rightY + 25}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#111111">수        술        명</text>
    <text x="${rightX + sec2NameW + COL_GRADE_W / 2}" y="${rightY + 17}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">수술</text>
    <text x="${rightX + sec2NameW + COL_GRADE_W / 2}" y="${rightY + 33}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">종류</text>
  `;
  rightY += 40;

  function renderSec2Row(y, h, lines, grade, isSub = false) {
    let tNodes = '';
    const startY = y + (h - lines.length * 19) / 2 + 14;
    lines.forEach((line, idx) => {
      const indent = isSub ? 32 : 12;
      tNodes += `<text x="${rightX + indent}" y="${startY + idx * 19}" font-family="NanumGothic" font-size="14" fill="#111111">${escapeXml(line)}</text>`;
    });
    return `
      <rect x="${rightX}" y="${y}" width="${TABLE_WIDTH}" height="${h}" fill="#ffffff" stroke="#222222" stroke-width="1" />
      <line x1="${rightX + sec2NameW}" y1="${y}" x2="${rightX + sec2NameW}" y2="${y + h}" stroke="#222222" stroke-width="1" />
      ${tNodes}
      <text x="${rightX + sec2NameW + COL_GRADE_W / 2}" y="${y + h / 2 + 5.5}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#111111">${grade}</text>
    `;
  }

  const cancerItems = [
    { lines: [
      '1. 관혈적 악성신생물(惡性新生物) 근치수술(根治手術, Radical',
      '   curative surgery). 단, 기타피부암(C44) 제외',
      '   [내시경 수술, 카테터·고주파 전극 등의 경피적 수술 등은 제외]'
    ], grade: '5', h: 68 },
    { lines: ['1-1. 기타피부암(C44)'], grade: '3', h: 32, isSub: true },
    { lines: ['2. 내시경 수술'], grade: '3', h: 32 },
    { lines: ['3. 상기 이외의 기타 악성신생물수술'], grade: '3', h: 32 },
  ];

  cancerItems.forEach(item => {
    svg += renderSec2Row(rightY, item.h, item.lines, item.grade, item.isSub);
    rightY += item.h;
  });

  // Notes for Section 2
  rightY += 16;
  svg += `
    <text x="${rightX}" y="${rightY}" font-family="NanumGothic" font-size="13.5" fill="#222222">주) 1. 제자리암·경계성종양에 대한 수술은 ‘1. 일반 질병 및 재해치료 목적의 수술’</text>
    <text x="${rightX + 24}" y="${rightY + 20}" font-family="NanumGothic" font-size="13.5" fill="#222222">항목의 적용을 받습니다.</text>
    <text x="${rightX + 20}" y="${rightY + 42}" font-family="NanumGothic" font-size="13.5" fill="#222222">2. 카테터(Catheter)를 이용한 흡인·천자·약물주입요법은 포함하지 않습니다.</text>
    <text x="${rightX + 20}" y="${rightY + 64}" font-family="NanumGothic" font-size="13.5" fill="#222222">3. 비고형암에 대한 비관혈적 근치수술은 관혈적 악성신생물 근치수술에 준하여</text>
    <text x="${rightX + 24}" y="${rightY + 84}" font-family="NanumGothic" font-size="13.5" fill="#222222">5종 수술로 인정합니다.</text>
  `;
  rightY += 120;

  // Section 3: 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표
  svg += `<text x="${rightX}" y="${rightY}" font-family="NanumGothic" font-size="17.5" font-weight="bold" fill="#111111">3. 악성신생물 근치·두개내신생물 근치 방사선 조사 분류표</text>`;
  rightY += 16;

  // Header Sec 3
  svg += `
    <rect x="${rightX}" y="${rightY}" width="${TABLE_WIDTH}" height="40" fill="#eef0f2" stroke="#222222" stroke-width="1.2" />
    <line x1="${rightX + sec2NameW}" y1="${rightY}" x2="${rightX + sec2NameW}" y2="${rightY + 40}" stroke="#222222" stroke-width="1.2" />
    <text x="${rightX + sec2NameW / 2}" y="${rightY + 25}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#111111">방 사 선   조 사   분 류 항 목</text>
    <text x="${rightX + sec2NameW + COL_GRADE_W / 2}" y="${rightY + 17}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">수술</text>
    <text x="${rightX + sec2NameW + COL_GRADE_W / 2}" y="${rightY + 33}" font-family="NanumGothic" font-size="14" font-weight="bold" text-anchor="middle" fill="#111111">종류</text>
  `;
  rightY += 40;

  const radItems = [
    { lines: [
      '1. 악성신생물 근치 방사선 조사',
      '   [5,000Rad 이상의 조사(照射)를 하는 경우로 한정하며,',
      '   악성신생물 근치 사이버 나이프(Cyberknife) 정위적 방사선',
      '   치료(定位的 放射線 治療, Stereotactic radiotherapy)를 포함함]'
    ], grade: '3', h: 92 },
    { lines: [
      '2. 두개내 신생물 근치 감마 나이프(Gammaknife) 정위적 방사선',
      '   치료'
    ], grade: '3', h: 46 },
  ];

  radItems.forEach(item => {
    svg += renderSec2Row(rightY, item.h, item.lines, item.grade);
    rightY += item.h;
  });

  // Page number
  svg += `<text x="${PAGE_WIDTH / 2}" y="${PAGE_HEIGHT - 35}" font-family="NanumGothic" font-size="15" text-anchor="middle" fill="#666666">- 3 -</text>`;

  svg += `</svg>`;
  return svg;
}

async function generatePdf() {
  console.log('Generating 3 pages of 1~5종 수술분류표 PDF in Landscape mode...');

  const svgs = [generatePage1Svg(), generatePage2Svg(), generatePage3Svg()];
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  console.log(`PDF Dimensions: ${pdfWidth} x ${pdfHeight}`);

  for (let i = 0; i < svgs.length; i++) {
    console.log(`Rendering Page ${i + 1}...`);
    const resvg = new Resvg(svgs[i], {
      fitTo: { mode: 'width', value: PAGE_WIDTH },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    const base64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;

    if (i > 0) {
      pdf.addPage([pdfWidth, pdfHeight], 'landscape');
    }
    pdf.addImage(base64, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  }

  const outDir = path.resolve('public/downloads');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, '1-5종_수술분류표.pdf');
  const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);

  // Also copy to dist/downloads/ if it exists
  const distDir = path.resolve('dist/downloads');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, '1-5종_수술분류표.pdf'), pdfBuffer);
  }

  console.log(`Successfully generated: ${outPath} (${pdfBuffer.length} bytes)`);

  // Verify header
  const header = pdfBuffer.subarray(0, 5).toString('ascii');
  console.log(`Header: ${header}`);
  if (header.startsWith('%PDF-')) {
    console.log('Valid %PDF- header verified!');
  } else {
    throw new Error('Invalid PDF header');
  }
}

generatePdf().catch((err) => {
  console.error(err);
  process.exit(1);
});
