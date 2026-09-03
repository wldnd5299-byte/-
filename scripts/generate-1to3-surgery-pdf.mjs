import { Resvg } from '@resvg/resvg-js';
import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const PAGE_WIDTH = 1240;
const PAGE_HEIGHT = 1754; // A4 ratio @ ~150dpi
const MARGIN_X = 80;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2; // 1080
const COL_TYPE_WIDTH = 180;
const COL_NAME_WIDTH = CONTENT_WIDTH - COL_TYPE_WIDTH; // 900

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function renderHeaderRow(y) {
  const h = 50;
  return `
    <rect x="${MARGIN_X}" y="${y}" width="${CONTENT_WIDTH}" height="${h}" fill="#ffffff" stroke="#000000" stroke-width="1.5" />
    <line x1="${MARGIN_X + COL_NAME_WIDTH}" y1="${y}" x2="${MARGIN_X + COL_NAME_WIDTH}" y2="${y + h}" stroke="#000000" stroke-width="1.5" />
    <text x="${MARGIN_X + COL_NAME_WIDTH / 2}" y="${y + 32}" font-family="NanumGothic" font-size="19" font-weight="bold" text-anchor="middle" fill="#000000">수        술        명</text>
    <text x="${MARGIN_X + COL_NAME_WIDTH + COL_TYPE_WIDTH / 2}" y="${y + 22}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#000000">수술종류</text>
    <text x="${MARGIN_X + COL_NAME_WIDTH + COL_TYPE_WIDTH / 2}" y="${y + 42}" font-family="NanumGothic" font-size="16" font-weight="bold" text-anchor="middle" fill="#000000">분류(종)</text>
  `;
}

function renderSectionRow(y, text, h = 34) {
  return `
    <rect x="${MARGIN_X}" y="${y}" width="${CONTENT_WIDTH}" height="${h}" fill="#ffffff" stroke="#000000" stroke-width="1" />
    <line x1="${MARGIN_X + COL_NAME_WIDTH}" y1="${y}" x2="${MARGIN_X + COL_NAME_WIDTH}" y2="${y + h}" stroke="#000000" stroke-width="1.5" />
    <text x="${MARGIN_X + 15}" y="${y + 23}" font-family="NanumGothic" font-size="16" font-weight="bold" fill="#000000">${escapeXml(text)}</text>
  `;
}

function renderItemRow(y, lines, grade, h) {
  let textNodes = '';
  const startY = lines.length === 1 ? y + h / 2 + 6 : (lines.length === 2 ? y + 21 : y + 18);
  const lineHeight = 21;
  lines.forEach((line, idx) => {
    const isSub = idx > 0;
    const indent = isSub ? 32 : 15;
    textNodes += `<text x="${MARGIN_X + indent}" y="${startY + idx * lineHeight}" font-family="NanumGothic" font-size="15" fill="#000000">${escapeXml(line)}</text>`;
  });

  const gradeY = y + h / 2 + 7;

  return `
    <rect x="${MARGIN_X}" y="${y}" width="${CONTENT_WIDTH}" height="${h}" fill="#ffffff" stroke="#000000" stroke-width="1" />
    <line x1="${MARGIN_X + COL_NAME_WIDTH}" y1="${y}" x2="${MARGIN_X + COL_NAME_WIDTH}" y2="${y + h}" stroke="#000000" stroke-width="1.5" />
    ${textNodes}
    <text x="${MARGIN_X + COL_NAME_WIDTH + COL_TYPE_WIDTH / 2}" y="${gradeY}" font-family="NanumGothic" font-size="17" text-anchor="middle" fill="#000000">${grade}</text>
  `;
}

// Page 1
function generatePage1Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
    <text x="${MARGIN_X}" y="70" font-family="NanumGothic" font-size="20" font-weight="bold" fill="#000000">(별표3)</text>
    <text x="${PAGE_WIDTH / 2}" y="125" font-family="NanumGothic" font-size="26" font-weight="bold" text-anchor="middle" text-decoration="underline" fill="#000000">수  술  분  류  표</text>
    
    <text x="${MARGIN_X}" y="172" font-family="NanumGothic" font-size="15.5" fill="#000000">
      이 약관에서 “수술” 이란 질병 및 재해의 치료를 직접목적으로 아래 분류표에서 정한
    </text>
    <text x="${MARGIN_X}" y="196" font-family="NanumGothic" font-size="15.5" fill="#000000">
      대상에 대해 기구를 사용해서 생체(生體)에 절단(切斷), 적제(摘除) 등의 조작(操作)을
    </text>
    <text x="${MARGIN_X}" y="220" font-family="NanumGothic" font-size="15.5" fill="#000000">
      가하는 것을 말합니다.
    </text>
  `;

  let currentY = 240;
  svg += renderHeaderRow(currentY);
  currentY += 50;

  // 피부, 유방
  svg += renderSectionRow(currentY, '■ 피부, 유방의 수술(皮膚, 乳房의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['1. 식피술(植皮術) (25cm² 미만은 제외함)'], '2', 32);
  currentY += 32;
  svg += renderItemRow(currentY, ['2. 유방절단술(乳房切斷術)'], '2', 32);
  currentY += 32;

  // 근골의 수술
  svg += renderSectionRow(currentY, '■ 근골의 수술(筋骨의 手術) [발정술(拔釘術)은 제외함]');
  currentY += 34;
  svg += renderItemRow(currentY, ['3. 골이식술(骨移植術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['4. 골수염, 골결핵수술(骨髓炎, 骨結核手術)', '[농양(膿瘍)의 단순한 절개는 제외함]'], '2', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['5. 두개골 관혈수술(頭蓋骨 觀血手術)', '[비골, 비중격(鼻骨, 鼻中隔)은 제외함]'], '2', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['6. 비골 관혈수술(鼻骨 觀血手術)', '[비중격만곡증수술(鼻中隔彎曲症手術)은 제외함]'], '1', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['7. 상악골, 하악골, 악관절 관혈수술(上顎骨,', '下顎骨, 顎關節 觀血手術) [치, 치육(齒, 齒肉)의 처치에', '수반하는 것은 제외함]'], '2', 68);
  currentY += 68;
  svg += renderItemRow(currentY, ['8. 척추, 골반 관혈수술(脊椎, 骨盤 觀血手術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['9. 쇄골, 견갑골, 늑골, 흉골 관혈수술', '(鎖骨, 肩胛骨, 肋骨, 胸骨 觀血手術)'], '1', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['10. 사지절단술(四肢切斷術) [손가락, 발가락은 제외함]'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['11. 절단사지재접합술(切斷四肢再接合術)', '[골, 관절(骨, 關節)의 이단(離斷)에 수반하는 것]'], '2', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['12. 사지골, 사지관절 관혈수술(四肢骨, 四肢 關節 觀血手術)', '[손가락, 발가락은 제외함]'], '1', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['13. 근, 건, 인대 관혈수술(筋, 腱, 靭帶 觀血 手術)', '[손가락, 발가락은 제외함. 근염, 결절종,', '점액종수술(筋炎, 結節腫, 粘液腫 手術은 제외함]'], '1', 68);
  currentY += 68;

  // 호흡기, 흉부의 수술
  svg += renderSectionRow(currentY, '■ 호흡기, 흉부의 수술(呼吸器, 胸部의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['14. 만성부비강염근본수술(慢性副鼻腔炎根本手術)'], '1', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['15. 후두전적제술(喉頭全摘除術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['16. 기관, 기관지, 폐, 흉막수술 (氣管, 氣管支, 肺, 胸膜手術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['17. 흉곽형성술(胸郭形成術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['18. 종격종양적출술(縱隔腫瘍摘出術)'], '3', 31);
  currentY += 31;

  // 순환기, 비의 수술
  svg += renderSectionRow(currentY, '■ 순환기, 비의 수술(循環器, 脾의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['19. 관혈적혈관형성술(觀血的血管形成術)', '[혈액투석용(血液透析用) Shunt 형성술(形成術)을 제외함]'], '2', 48);
  currentY += 48;
  svg += renderItemRow(currentY, ['20. 정맥류근본수술(靜脈瘤根本手術)'], '1', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['21. 인동맥, 인정맥, 폐동맥, 관동맥수술', '(人動脈, 人靜脈, 肺動脈, 冠動脈手術)', '[개흉, 개복술(開胸, 開腹術)을 수반하는 것]'], '3', 68);
  currentY += 68;
  svg += renderItemRow(currentY, ['22. 심막절개, 봉합술(心膜切開, 縫合術)'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['23. 직시하심장내수술(直視下心臟內手術)'], '3', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['24. 체내용(體內用), Pace Maker'], '2', 31);
  currentY += 31;
  svg += renderItemRow(currentY, ['25. 비적제술(脾摘除術)'], '2', 31);
  currentY += 31;

  // Outer border
  svg += `<rect x="${MARGIN_X}" y="240" width="${CONTENT_WIDTH}" height="${currentY - 240}" fill="none" stroke="#000000" stroke-width="2" />`;
  svg += `</svg>`;
  return svg;
}

// Page 2
function generatePage2Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
  `;

  let currentY = 70;
  svg += renderHeaderRow(currentY);
  currentY += 50;

  // 소화기의 수술
  svg += renderSectionRow(currentY, '■ 소화기의 수술(消化器의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['26. 이하선종양적출술(耳下腺腫瘍摘出術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['27. 악하선종양적출술(顎下腺腫瘍摘出術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['28. 식도이단술(食道離斷術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['29. 위절제술(胃切除術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['30. 기타의 위, 식도수술(胃, 食刀手術)', '[개흉, 개복술(開胸, 蓋覆術)을 수반하는 것]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['31. 복막염수술(腹膜炎手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['32. 간장, 담낭, 담도, 췌장 관혈수술', '(肝臟, 膽囊, 膽道, 膵臟 觀血手術)'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['33. 탈장 근본수술(脫腸 根本手術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['34. 충수절제술, 맹장봉축술(蟲垂切除術, 盲腸縫縮術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['35. 직장탈근본수술(直腸脫 根本手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['36. 기타의 장, 장간막수술(腸, 腸間膜手術)', '[개복술(開腹術)을 수반하는 것]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['37. 치루, 탈항, 치핵근본수술 (痔瘻, 脫肛, 痔核根本手術)', '[근치(根治)를 목적으로 한 것으로 처치,', '단순한 치핵(痔核)만의 수술은 제외함]'], '1', 66);
  currentY += 66;

  // 뇨, 성기의 수술
  svg += renderSectionRow(currentY, '■ 뇨, 성기의 수술(尿, 性器의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['38. 신이식수술(腎移植手術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['39. 신장, 신우, 뇨관, 방광 관혈수술', '(腎臟, 腎盂, 尿管, 膀胱 觀血手術)', '[경뇨도적조작(經尿道的操作)은 제외함]'], '2', 66);
  currentY += 66;
  svg += renderItemRow(currentY, ['40. 뇨도협착 관혈수술(經尿狹窄 觀血手術)', '[경뇨도적조작(經尿道的操作)은 제외함]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['41. 뇨류폐쇄 관혈수술(尿瘻閉鎖 觀血手術)', '[경뇨도적조작(經尿道的操作)은 제외함]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['42. 음경절단술(陰莖切斷術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['43. 고환, 부고환, 정관, 정색, 정낭, 전립선', '수술(睾丸, 副睾丸, 精管, 精索, 精囊, 前立腺手術)'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['44. 음낭수종근본수술(陰囊水腫根本手術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['45. 자궁광범전적제술(子宮廣汎全摘除術)', '[단순자궁전적(單純子宮全摘) 등의 자궁전적', '제술(全摘除術)은 제외함]'], '3', 66);
  currentY += 66;
  svg += renderItemRow(currentY, ['46. 자궁경관형성술, 자궁경관봉축술', '(子宮頸管形成術, 子宮頸管縫縮術)'], '1', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['47. 제왕절개만출술(帝王切開娩出術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['48. 자궁외임신수술(子宮外妊娠手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['49. 자궁탈, 질탈수술(子宮脫, 膣脫手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['50. 기타의 자궁수술(子宮手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['51. 난관, 난소 관혈수술(卵管, 卵巢 觀血手術)', '[경질적조작(經膣的操作)은 제외함]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['52. 기타의 난관, 난소수술(卵管, 卵巢手術)'], '1', 30);
  currentY += 30;

  // 내분비기의 수술
  svg += renderSectionRow(currentY, '■ 내분비기의 수술(內分泌器의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['53. 하수체종양적제술(下垂體腫瘍摘除術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['54. 갑상선수술(甲狀腺手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['55. 부신전적제술(副腎全摘除術)'], '2', 30);
  currentY += 30;

  // 신경의 수술
  svg += renderSectionRow(currentY, '■ 신경의 수술(神經의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['56. 두개내 관혈수술(頭蓋內 觀血手術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['57. 신경 관혈수술(神經 觀血手術)', '[형성술, 이식술, 절제술, 감압술, 개방술,', '염제술(形成術, 移植術, 切除術, 減壓術, 開放術, 捻除術]'], '2', 66);
  currentY += 66;
  svg += renderItemRow(currentY, ['58. 관혈적척수종양적출수술(觀血的脊髓腫瘍摘出手術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['59. 척수경막내외 관혈수술(脊髓硬膜內外 觀血手術)'], '2', 30);
  currentY += 30;

  // Outer border
  svg += `<rect x="${MARGIN_X}" y="70" width="${CONTENT_WIDTH}" height="${currentY - 70}" fill="none" stroke="#000000" stroke-width="2" />`;
  svg += `</svg>`;
  return svg;
}

// Page 3
function generatePage3Svg() {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_WIDTH}" height="${PAGE_HEIGHT}">
    <rect width="100%" height="100%" fill="#ffffff" />
  `;

  let currentY = 70;
  svg += renderHeaderRow(currentY);
  currentY += 50;

  // 감각기, 시기의 수술
  svg += renderSectionRow(currentY, '■ 감각기, 시기의 수술(感覺器, 視器의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['60. 안검하수증수술(眼瞼下垂症手術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['61. 누소관형성술(淚小管形成術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['62. 누낭비강문합술(淚囊鼻腔吻合術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['63. 결막낭형성술(結膜囊 形成術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['64. 각막이식술(角膜利殖術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['65. 관혈적전방, 홍채, 초자체, 안와내이물제거', '술(觀血的前房, 虹彩, 硝子體, 眼窩內異物 除去術)'], '1', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['66. 홍채전후유착박리술(虹彩前後癒着剝離術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['67. 녹내장 관혈수술(綠內障 觀血手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['68. 백내장, 수정체 관혈수술', '(白內障, 水晶體 觀血手術)'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['69. 초자체 관혈수술(硝子體, 觀血手術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['70. 망막박리증수술(網膜薄利症手術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['71. Laser, 냉동응고(冷凍凝固)에 의한 안구수술(眼球手術)', '[시술(施術) 개시일부터 60일간에 1회의 급여를 한도로 함]'], '1', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['72. 안구적제술, 조직충전술 (眼球摘除術, 組織充塡術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['73. 안와종양적출술(眼窩腫瘍摘出術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['74. 안근이식술(眼筋移植術)'], '1', 30);
  currentY += 30;

  // 감각기, 청기의 수술
  svg += renderSectionRow(currentY, '■ 감각기, 청기의 수술(感覺器, 聽器의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['75. 관혈적고막, 고실형성술(觀血的鼓膜, 鼓室形成術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['76. 유양동삭개술(乳樣洞削開術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['77. 중이근본수술(中耳根本手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['78. 내이 관혈수술(內耳 觀血手術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['79. 청신경종양적출술(聽神經腫瘍摘出術)'], '3', 30);
  currentY += 30;

  // 악성신생물의 수술
  svg += renderSectionRow(currentY, '■ 악성신생물의 수술(惡性新生物의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['80. 악성신생물근치수술(惡性新生物 根治手術)'], '3', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['81. 악성신생물온열요법(惡性新生物溫熱療法)', '[시술(施術) 개시일부터 60일간에 1회의 급여를 한도로 함]'], '1', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['82. 기타의 악성신생물수술(惡性新生物手術)'], '2', 30);
  currentY += 30;

  // 상기 이외의 수술
  svg += renderSectionRow(currentY, '■ 상기 이외의 수술(上記 以外의 手術)');
  currentY += 34;
  svg += renderItemRow(currentY, ['83. 상기 이외의 개두술(開頭術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['84. 상기 이외의 개흉술(開胸術)'], '2', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['85. 상기 이외의 개복술(開腹術)'], '1', 30);
  currentY += 30;
  svg += renderItemRow(currentY, ['86. 충격파(衝擊波)에 의한 체내결석파쇄술(體內結石破碎術)', '[시술(施術) 개시일부터 60일간에 1회의 급여를 한도로 함]'], '2', 46);
  currentY += 46;
  svg += renderItemRow(currentY, ['87. Fiberscope 또는 혈관(血管) Basket Catheter', '에 의한 뇌, 후두, 흉부, 복부장기 수술', '(腦, 喉頭, 胸部, 腹部腸器手術)', '[검사, 처치는 포함하지 않음. 시술(施術) 개시일부터', '60일간에 1회의 급여를 한도로 함]'], '1', 106);
  currentY += 106;

  // 신생물근치 방사선조사
  svg += renderSectionRow(currentY, '■ 신생물근치 방사선조사(新生物根治 放射線照射)');
  currentY += 34;
  svg += renderItemRow(currentY, ['88. 신생물근치 방사선조사(新生物根治 放射線照射)', '[5,000 Rad 이상의 조사(照射)로 시술(施術)', '개시일부터 60일간에 1회의 급여를 한도로 함]'], '1', 66);
  currentY += 66;

  // Outer border
  svg += `<rect x="${MARGIN_X}" y="70" width="${CONTENT_WIDTH}" height="${currentY - 70}" fill="none" stroke="#000000" stroke-width="2" />`;

  // Note below table
  currentY += 22;
  svg += `
    <text x="${MARGIN_X}" y="${currentY}" font-family="NanumGothic" font-size="15" fill="#000000">주) 1. 상기 『수술 분류표』상의 수술을 대신하여 완치율이 높고 일반적으로 의학계에서</text>
    <text x="${MARGIN_X + 42}" y="${currentY + 24}" font-family="NanumGothic" font-size="15" fill="#000000">인정하고 있는 첨단의 치료기법으로 시술한 경우 『수술 분류표』상의 동일부위</text>
    <text x="${MARGIN_X + 42}" y="${currentY + 48}" font-family="NanumGothic" font-size="15" fill="#000000">수술로 봅니다.</text>
  `;

  svg += `</svg>`;
  return svg;
}

async function generatePdf() {
  console.log('Generating 3 pages of 1~3종 수술분류표 PDF...');

  const svgs = [generatePage1Svg(), generatePage2Svg(), generatePage3Svg()];
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  for (let i = 0; i < svgs.length; i++) {
    console.log(`Rendering Page ${i + 1}...`);
    const resvg = new Resvg(svgs[i], {
      fitTo: { mode: 'width', value: PAGE_WIDTH },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    const base64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;

    if (i > 0) {
      pdf.addPage();
    }
    pdf.addImage(base64, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  }

  const outDir = path.resolve('public/downloads');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, '1-3종_수술분류표.pdf');
  const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);

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
