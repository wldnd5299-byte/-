import { InsurerTerm } from "./types";

export const INSURER_TERMS_LIST: InsurerTerm[] = [
  // 1. 손해보험사 (16개)
  { id: 'samsung-fire', name: '삼성화재', type: 'property', url: 'https://www.samsungfire.com/vh/page/VH.HPIF0103.do', defaultSubTab: 'samsung_cancer' },
  { id: 'hyundai-marine', name: '현대해상', type: 'property', url: 'https://www.hi.co.kr/bin/CR/CR/CRCR1100G.jsp', defaultSubTab: 'hyundai_male_cancer' },
  { id: 'db-ins', name: 'DB손해보험', type: 'property', url: 'https://www.idbins.com/pc/front/disclosure/product/list.do', defaultSubTab: 'cancer' },
  { id: 'kb-ins', name: 'KB손해보험', type: 'property', url: 'https://www.kbinsure.co.kr/CG302090001.ec', defaultSubTab: 'kb_cancer' },
  { id: 'meritz-fire', name: '메리츠화재', type: 'property', url: 'https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/', defaultSubTab: 'meritz_integrated_cancer' },
  { id: 'hanwha-general', name: '한화손해보험', type: 'property', url: 'https://www.hwgeneralins.com/notice/ir/product-ing01.do', defaultSubTab: 'hanwha_integrated_cancer' },
  { id: 'lotte-ins', name: '롯데손해보험', type: 'property', url: 'https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp', defaultSubTab: 'lotte_integrated_cancer' },
  { id: 'nh-fire', name: '농협손해보험', type: 'property', url: 'https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire', defaultSubTab: 'nh_cancer' },
  { id: 'hana-ins', name: '하나손해보험', type: 'property', url: 'https://www.hanainsure.co.kr/w/disclosure/product/saleProduct', defaultSubTab: 'hana_integrated_cancer' },
  { id: 'heungkuk-fire', name: '흥국화재', type: 'property', url: 'https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do' },
  { id: 'mg-ins', name: 'MG(예별)손해보험', type: 'property', url: 'https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006' },
  { id: 'lina-fire', name: '라이나손해보험', type: 'property', url: 'https://www.chubb.com/kr-kr/disclosure/product.html' },
  { id: 'aig-ins', name: 'AIG손해보험', type: 'property', url: 'https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702' },
  { id: 'shinhanez-ins', name: '신한EZ손해보험', type: 'property', url: 'https://www.shinhanez.co.kr/static/pub/PUB2000T021.html?ver=1.2_utm_source=shinhanez' },
  { id: 'axa-ins', name: 'AXA손해보험', type: 'property', url: 'https://www.axa.co.kr/AsianPlatformInternet/html/axacms/common/intro/disclosure/insurance/index.html' },
  { id: 'carrot-ins', name: '캐롯손해보험', type: 'property', url: 'https://www.carrotins.com/desktop/disclosure/product/term/' },

  // 2. 생명보험사 (19개)
  { id: 'samsung-life', name: '삼성생명', type: 'life', url: 'https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M' },
  { id: 'kyobo-life', name: '교보생명', type: 'life', url: 'https://www.kyobo.com/dgt/web/product-official/all-product/search' },
  { id: 'hanwha-life', name: '한화생명', type: 'life', url: 'https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000' },
  { id: 'shinhan-life', name: '신한라이프', type: 'life', url: 'https://www.shinhanlife.co.kr/hp/cdhi0030.do' },
  { id: 'metlife-life', name: '메트라이프생명', type: 'life', url: 'https://brand.metlife.co.kr/pn/mcvrgProd/retrieveMcvrgProdMain.do' },
  { id: 'kdb-life', name: 'KDB생명', type: 'life', url: 'https://www.kblife.co.kr/customer-common/productList.do' },
  { id: 'lina-life', name: '라이나생명', type: 'life', url: 'https://www.lina.co.kr/disclosure/product/termList.do' },
  { id: 'abl-life', name: 'ABL생명', type: 'life', url: 'https://www.abllife.co.kr/disclosure/product/termList.do' },
  { id: 'heungkuk-life', name: '흥국생명', type: 'life', url: 'https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y' },
  { id: 'db-life', name: 'DB생명', type: 'life', url: 'https://www.idblife.com/notice/product/sale' },
  { id: 'dongyang-life', name: '동양생명', type: 'life', url: 'https://pbano.myangel.co.kr/paging/WE_AC_WEPAAP020100L' },
  { id: 'kblife-life', name: 'KB라이프생명', type: 'life', url: 'https://www.kblife.co.kr/customer-common/productList.do' },
  { id: 'miraeasset-life', name: '미래에셋생명', type: 'life', url: 'https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do' },
  { id: 'fubonhyundai-life', name: '푸본현대생명', type: 'life', url: 'https://www.fubonhyundai.com/?lockDevice=PC&menuId=CUSI150000000000#CUSI150102010101' },
  { id: 'hana-life', name: '하나생명', type: 'life', url: 'https://hanalife.co.kr/anm/product/allProduct.do?status=on' },
  { id: 'im-life', name: 'IM라이프', type: 'life', url: 'https://www.imlifeins.co.kr/BA/BA_A020.do' },
  { id: 'chubblife-life', name: '처브라이프', type: 'life', url: 'https://www.chubblife.co.kr/front/official/sale/listSale.do' },
  { id: 'nh-life', name: '농협생명', type: 'life', url: 'https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl' },
  { id: 'aia-life', name: 'AIA생명', type: 'life', url: 'https://mypage.aia.co.kr/AIAHomepage/disclosure/our-products/selling/individual.do' },
];

export const getLogoText = (name: string): string => {
  if (name.startsWith('BNP')) return 'BNP';
  if (name.startsWith('MG')) return 'MG';
  
  const coreName = name
    .replace(/(손해보험|연금보험|라이프생명|손해|화재|생명|보험|연금|해상|라이프)/g, '')
    .trim();

  if (coreName.length >= 3) {
    return coreName.substring(0, 3);
  }
  return coreName;
};

export const getInsurerTheme = (id: string) => {
  if (id.includes('samsung')) {
    return {
      logoColor: 'bg-blue-600 text-white border-blue-500/10',
      brandColor: '#0C4CA3',
      brandLight: 'bg-blue-50 border-blue-100 text-blue-700',
      brandHover: 'hover:bg-blue-50/50'
    };
  }
  if (id.includes('hyundai')) {
    return {
      logoColor: 'bg-orange-500 text-white border-orange-400/10',
      brandColor: '#F37021',
      brandLight: 'bg-orange-50 border-orange-100 text-orange-700',
      brandHover: 'hover:bg-orange-50/50'
    };
  }
  if (id.includes('db')) {
    return {
      logoColor: 'bg-green-600 text-white border-green-500/10',
      brandColor: '#118141',
      brandLight: 'bg-green-50 border-green-100 text-green-700',
      brandHover: 'hover:bg-green-50/50'
    };
  }
  if (id.includes('kb')) {
    return {
      logoColor: 'bg-yellow-500 text-slate-900 border-yellow-400/10',
      brandColor: '#4E4741',
      brandLight: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      brandHover: 'hover:bg-yellow-50/50'
    };
  }
  if (id.includes('meritz')) {
    return {
      logoColor: 'bg-red-600 text-white border-red-500/10',
      brandColor: '#E30613',
      brandLight: 'bg-red-50 border-red-100 text-red-700',
      brandHover: 'hover:bg-red-50/50'
    };
  }
  if (id.includes('hanwha')) {
    return {
      logoColor: 'bg-orange-500 text-white border-orange-400/10',
      brandColor: '#F37021',
      brandLight: 'bg-orange-50 border-orange-100 text-orange-700',
      brandHover: 'hover:bg-orange-50/50'
    };
  }
  if (id.includes('lotte')) {
    return {
      logoColor: 'bg-amber-600 text-white border-amber-500/10',
      brandColor: '#D97706',
      brandLight: 'bg-amber-50 border-amber-100 text-amber-700',
      brandHover: 'hover:bg-amber-50/50'
    };
  }
  if (id.includes('nh-') || id.includes('nonghyup')) {
    return {
      logoColor: 'bg-emerald-700 text-white border-emerald-600/10',
      brandColor: '#047857',
      brandLight: 'bg-emerald-50 border-emerald-100 text-emerald-700',
      brandHover: 'hover:bg-emerald-50/50'
    };
  }
  if (id.includes('hana')) {
    return {
      logoColor: 'bg-teal-600 text-white border-teal-500/10',
      brandColor: '#0D9488',
      brandLight: 'bg-teal-50 border-teal-100 text-teal-700',
      brandHover: 'hover:bg-teal-50/50'
    };
  }
  if (id.includes('heungkuk')) {
    return {
      logoColor: 'bg-pink-600 text-white border-pink-500/10',
      brandColor: '#DB2777',
      brandLight: 'bg-pink-50 border-pink-100 text-pink-700',
      brandHover: 'hover:bg-pink-50/50'
    };
  }
  if (id.includes('kyobo')) {
    return {
      logoColor: 'bg-sky-700 text-white border-sky-600/10',
      brandColor: '#0369A1',
      brandLight: 'bg-sky-50 border-sky-100 text-sky-700',
      brandHover: 'hover:bg-sky-50/50'
    };
  }
  if (id.includes('shinhan')) {
    return {
      logoColor: 'bg-indigo-600 text-white border-indigo-500/10',
      brandColor: '#4F46E5',
      brandLight: 'bg-indigo-50 border-indigo-100 text-indigo-700',
      brandHover: 'hover:bg-indigo-50/50'
    };
  }
  if (id.includes('metlife')) {
    return {
      logoColor: 'bg-cyan-600 text-white border-cyan-500/10',
      brandColor: '#0891B2',
      brandLight: 'bg-cyan-50 border-cyan-100 text-cyan-700',
      brandHover: 'hover:bg-cyan-50/50'
    };
  }
  if (id.includes('lina')) {
    return {
      logoColor: 'bg-red-500 text-white border-red-400/10',
      brandColor: '#EF4444',
      brandLight: 'bg-red-50 border-red-100 text-red-600',
      brandHover: 'hover:bg-red-50/50'
    };
  }
  if (id.includes('abl')) {
    return {
      logoColor: 'bg-red-700 text-white border-red-600/10',
      brandColor: '#B91C1C',
      brandLight: 'bg-red-50 border-red-100 text-red-700',
      brandHover: 'hover:bg-red-50/50'
    };
  }
  if (id.includes('mirae')) {
    return {
      logoColor: 'bg-amber-500 text-white border-amber-400/10',
      brandColor: '#F59E0B',
      brandLight: 'bg-amber-50 border-amber-100 text-amber-700',
      brandHover: 'hover:bg-amber-50/50'
    };
  }
  return {
    logoColor: 'bg-slate-600 text-white border-slate-500/10',
    brandColor: '#123941',
    brandLight: 'bg-slate-50 border-slate-100 text-slate-700',
    brandHover: 'hover:bg-slate-50'
  };
};

// 1. Cancer Groups Data (9 groups for KB, Samsung, or Standard fallbacks)
export const getCancerGroups = (id: string) => {
  if (id.includes('kb')) {
    return [
      { group: '그룹 1', name: '특정 소화기암', codes: 'C15 ~ C17', diseases: '식도암, 위암, 소장암', payout: '가입금액 100% 지급' },
      { group: '그룹 2', name: '대장암 (충수, 결장, 직장)', codes: 'C18 ~ C20', diseases: '대장결장암, 충수돌기암, 직장암', payout: '가입금액 100% 지급' },
      { group: '그룹 3', name: '간 및 췌장, 담낭암', codes: 'C22 ~ C25', diseases: '간세포암, 담도암, 담낭암, 췌장암', payout: '가입금액 100% 지급' },
      { group: '그룹 4', name: '호흡기 및 흉곽내기관암', codes: 'C30 ~ C39', diseases: '후두암, 기관지 및 폐암, 흉선암', payout: '가입금액 100% 지급' },
      { group: '그룹 5', name: '유방암 및 여성생식기암', codes: 'C50 ~ C58', diseases: '유방암, 자궁경부암, 난소암, 자궁체부암', payout: '가입금액 100% 지급' },
      { group: '그룹 6', name: '전립선암 및 남성생식기암', codes: 'C60 ~ C63', diseases: '전립선암, 고환암, 음경암', payout: '가입금액 100% 지급' },
      { group: '그룹 7', name: '비뇨기계암', codes: 'C64 ~ C68', diseases: '신장암, 방광암, 요관 및 신우암', payout: '가입금액 100% 지급' },
      { group: '그룹 8', name: '뇌 및 중추신경계, 골암', codes: 'C40 ~ C41, C70 ~ C72', diseases: '골 및 관절연골암, 뇌암, 척수암', payout: '가입금액 100% 지급' },
      { group: '그룹 9', name: '혈액암 및 조혈조직암', codes: 'C81 ~ C96', diseases: '급성/만성 백혈병, 악성 림프종, 다발성 골수종', payout: '가입금액 100% 지급' }
    ];
  }
  if (id.includes('db')) {
    return [
      { group: '그룹 1', name: '두경부암', codes: 'C00 ~ C14, C30 ~ C31, C69', diseases: '입술, 혀, 잇몸, 편도, 비인두, 비강, 부비동, 안구 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 2', name: '위식도암', codes: 'C15, C16', diseases: '식도, 위의 악성 신생물', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 3', name: '소장대장항문 및 기타암', codes: 'C17 ~ C21, C26', diseases: '소장, 결장, 직장, 항문, 기타 소화기관', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 4', name: '간담낭담도 및 췌장암', codes: 'C22 ~ C25', diseases: '간 및 간내담관, 담낭, 담도, 췌장의 악성 신생물', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 5', name: '흉곽내기관중피성 및 연조직암', codes: 'C32 ~ C34, C37 ~ C39, C45 ~ C49', diseases: '후두, 폐, 흉선, 심장, 종격, 흉막, 중피종, 연조직암 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 6', name: '골피부 등 전신부위암', codes: 'C40 ~ C41, C43, C76 ~ C80, C97', diseases: '뼈 및 관절연골, 피부 흑색종, 전신 전이암, 여러 원발암 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 7', name: '유방비뇨기관부신 및 내분비선암', codes: 'C50, C64 ~ C68, C74 ~ C75', diseases: '유방, 신장, 신우, 요관, 방광, 부신, 내분비선 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 8-1', name: '남성생식기암 (남성)', codes: 'C60 ~ C63', diseases: '음경, 전립선, 고환, 기타 남성생식기관', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 8-2', name: '여성생식기암 (여성)', codes: 'C51 ~ C58', diseases: '외음, 질, 자궁경부, 자궁체부, 난소, 태반 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 9', name: '뇌 및 중추신경계통암', codes: 'C70 ~ C72', diseases: '수막, 뇌, 척수 및 중추신경계통의 악성 신생물', payout: '각 그룹별 가입금액 100% 최초 1회지급' },
      { group: '그룹 10', name: '혈액암', codes: 'C81 ~ C96, D45 ~ D46, D47.1/3/4/5', diseases: '림프종, 백혈병, 다발골수종, 골수형성이상증후군 등', payout: '각 그룹별 가입금액 100% 최초 1회지급' }
    ];
  }
  if (id.includes('samsung')) {
    return [
      { group: '그룹 1', name: '식도, 위 및 결장직장암', codes: 'C15, C16, C18~C20', diseases: '식도암, 위암, 대장암, 직장암', payout: '가입금액 100% 지급' },
      { group: '그룹 2', name: '간 및 췌장, 담도계암', codes: 'C22 ~ C25', diseases: '간세포성 선암, 담낭암, 췌장외분비암', payout: '가입금액 100% 지급' },
      { group: '그룹 3', name: '기관지 및 폐암 (호흡기계)', codes: 'C33, C34', diseases: '소세포암, 비소세포폐암, 기관지암', payout: '가입금액 100% 지급' },
      { group: '그룹 4', name: '유방암 및 생식기계 선암', codes: 'C50, C51~C58', diseases: '침윤성 유방암, 난소암, 자궁내막암', payout: '가입금액 100% 지급' },
      { group: '그룹 5', name: '남성 생식기계 및 전립선암', codes: 'C61 ~ C63', diseases: '전립선 선암, 고환 종양', payout: '가입금액 100% 지급' },
      { group: '그룹 6', name: '신장, 방광 및 비뇨기계암', codes: 'C64 ~ C67', diseases: '신우선암, 방광 이행상피세포암', payout: '가입금액 100% 지급' },
      { group: '그룹 7', name: '뇌하수체, 신경 및 중추계', codes: 'C70 ~ C72', diseases: '뇌교종, 수막종, 교모세포종', payout: '가입금액 100% 지급' },
      { group: '그룹 8', name: '림프종 및 다발골수종', codes: 'C81 ~ C90', diseases: '호지킨 림프종, 비호지킨 림프종, 골수종', payout: '가입금액 100% 지급' },
      { group: '그룹 9', name: '백혈병 및 림프모구성질환', codes: 'C91 ~ C95', diseases: '급성 골수성 백혈병, 만성 림프구성 백혈병', payout: '가입금액 100% 지급' }
    ];
  }
  return [
    { group: '그룹 1', name: '소화기계 기관암 (위, 식도, 소장)', codes: 'C15 ~ C17', diseases: '식도암, 위암, 십이지장암, 소장암', payout: '가입금액 100% 지급' },
    { group: '그룹 2', name: '대장 및 소화기관 특정암 (결장, 직장)', codes: 'C18 ~ C21', diseases: '대장결장암, 결장 선암, 직장암', payout: '가입금액 100% 지급' },
    { group: '그룹 3', name: '간, 췌장, 담낭 및 담도암', codes: 'C22 ~ C25', diseases: '간암, 담도암, 담낭암, 췌장암', payout: '가입금액 100% 지급' },
    { group: '그룹 4', name: '호흡기 및 흉곽내기관암 (폐, 후두)', codes: 'C30 ~ C39', diseases: '폐암, 기관지선암, 후두암, 종격동암', payout: '가입금액 100% 지급' },
    { group: '그룹 5', name: '유방암 및 자궁, 난소암 (여성형 암)', codes: 'C50, C51~C56', diseases: '유방상피성암, 침윤성관암, 자궁경부암, 난소선암', payout: '가입금액 100% 지급' },
    { group: '그룹 6', name: '남성생식기암 (전립선, 고환)', codes: 'C60 ~ C63', diseases: '전립선암, 고환종양, 음경암', payout: '가입금액 100% 지급' },
    { group: '그룹 7', name: '비뇨기계 및 중추신경계암 (신장, 뇌)', codes: 'C64~C68, C70~C72', diseases: '신장암, 방광암, 뇌종양, 교모세포종, 척수암', payout: '가입금액 100% 지급' },
    { group: '그룹 8', name: '혈액, 조혈 및 림프종 (백혈병)', codes: 'C81 ~ C96', diseases: '악성림프종, 급성골수성백혈병, 다발성골수종', payout: '가입금액 100% 지급' }
  ];
};

export const INSURER_PHONE_MAP: Record<string, string> = {
  'samsung-fire': '1588-5114',
  'hyundai-marine': '1588-5656',
  'db-ins': '1588-0100',
  'kb-ins': '1544-0114',
  'meritz-fire': '1566-7711',
  'hanwha-general': '1566-8000',
  'lotte-ins': '1588-3344',
  'nh-fire': '1644-9000',
  'hana-ins': '1566-3000',
  'heungkuk-fire': '1688-1688',
  'mg-ins': '1588-5959',
  'lina-fire': '1566-5800',
  'aig-ins': '1544-2792',
  'shinhanez-ins': '1660-1544',
  'axa-ins': '1566-1566',
  'carrot-ins': '1600-0100',
  'samsung-life': '1588-3114',
  'kyobo-life': '1588-1001',
  'hanwha-life': '1588-6363',
  'shinhan-life': '1588-5580',
  'metlife-life': '1588-9600',
  'kdb-life': '1588-4040',
  'lina-life': '1588-0058',
  'abl-life': '1588-6500',
  'heungkuk-life': '1588-2288',
  'db-life': '1588-5180',
  'dongyang-life': '1577-1004',
  'kblife-life': '1544-9000',
  'miraeasset-life': '1588-0220',
  'fubonhyundai-life': '1577-4600',
  'hana-life': '1577-1112',
  'im-life': '1588-2288',
  'chubblife-life': '1588-4300',
  'nh-life': '1544-4000',
  'aia-life': '1588-2513',
};
