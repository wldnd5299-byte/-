import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INSURERS_DATA } from '../src/data.ts';
import { Insurer } from '../src/types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeHtml(str: any): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const DISCLOSURE_URL_MAP: Record<string, string> = {
  'samsung-fire': 'https://www.samsungfire.com/vh/page/VH.HPIF0103.do',
  'hyundai-marine': 'https://www.hi.co.kr/serviceAction.do?view=bin/PA/03/HHPA03010M',
  'db-ins': 'https://www.idbins.com/FWMAIV1534.do',
  'kb-ins': 'https://www.kbinsure.co.kr/CG802030001.ec',
  'meritz-fire': 'https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/',
  'hanwha-general': 'https://www.hwgeneralins.com/notice/ir/product-ing01.do',
  'lotte-ins': 'https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp',
  'nh-fire': 'https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire',
  'hana-ins': 'https://www.hanainsure.co.kr/w/disclosure/product/saleProduct',
  'heungkuk-fire': 'https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do',
  'mg-ins': 'https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006',
  'lina-fire': 'https://www.chubb.com/kr-kr/disclosure/product.html',
  'aig-ins': 'https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702',
  'kakaopay-ins': 'https://www.kakaopayinsurance.com/disclosure/product',

  'samsung-life': 'https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M',
  'kyobo-life': 'https://www.kyobo.com/dgt/web/product-official/all-product/search',
  'hanwha-life': 'https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000',
  'shinhan-life': 'https://www.shinhanlife.co.kr/hp/cdhi0030.do',
  'metlife-life': 'https://brand.metlife.co.kr/pn/mcvrgProd/retrieveMcvrgProdMain.do',
  'kdb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'lina-life': 'https://www.lina.co.kr/disclosure/product-public-announcement/product-on-sales?key=0',
  'abl-life': 'https://www.abllife.co.kr/st/pban/prdtPban/whlPrdt/whlPrdt1/whlPrdt11?page=index',
  'heungkuk-life': 'https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y',
  'db-life': 'https://www.idblife.com/notice/product/sale',
  'dongyang-life': 'https://pbano.myangel.co.kr/paging/WE_AC_WEPAAP020100L',
  'kb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'miraeasset-life': 'https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do',
  'fubonhyundai-life': 'https://www.fubonhyundai.com/?lockDevice=PC&menuId=CUSI150000000000#CUSI150102010101',
  'hana-life': 'https://hanalife.co.kr/anm/product/allProduct.do?status=on',
  'im-life': 'https://www.imlifeins.co.kr/BA/BA_A020.do',
  'chubblife-life': 'https://www.chubblife.co.kr/front/official/sale/listSale.do',
  'nh-life': 'https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl',
  'aia-life': 'https://mypage.aia.co.kr/AIAHomepage/disclosure/our-products/selling/individual.do',
};

const CLAIM_PDF_URL_MAP: Record<string, string> = {
  // 손해보험사
  'samsung-fire': 'https://www.samsungfire.com/individual/customer/claim/document/index.html',
  'hyundai-marine': 'https://www.hi.co.kr/bin/CR/CR/CRCR1100G.jsp',
  'db-ins': 'https://www.idbins.com/FWMAIV1534.do',
  'kb-ins': 'https://www.kbinsure.co.kr/CG802030001.ec',
  'meritz-fire': 'https://www.meritzfire.com/customer/claim/document.do',
  'hanwha-general': 'https://www.hwgeneralins.com/notice/claim/document.do',
  'lotte-ins': 'https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp',
  'nh-fire': 'https://www.nhfire.co.kr/compensation/guide/retrieveGuideRequiredDocuments.nhfire',
  'hana-ins': 'https://www.hanainsure.co.kr/w/compensation/accident/requireDocument',
  'heungkuk-fire': 'https://www.heungkukfire.co.kr/FRW/compensation/guide/requireDocument.do',
  'mg-ins': 'https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006',
  'lina-fire': 'https://www.chubb.com/kr-kr/compensation/guide.html',
  'aig-ins': 'https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702',
  'kakaopay-ins': 'https://www.kakaopayinsurance.com/disclosure/product',

  // 생명보험사
  'samsung-life': 'https://www.samsunglife.com/individual/customer/claim/document/index.html',
  'kyobo-life': 'https://www.kyobo.com/dgt/web/customer/claim/document',
  'hanwha-life': 'https://www.hanwhalife.com/main/customer/claim/document/DF_CDDM100_P10000.do',
  'shinhan-life': 'https://www.shinhanlife.co.kr/hp/cdhi0030.do',
  'metlife-life': 'https://brand.metlife.co.kr/pn/mcvrgProd/retrieveMcvrgProdMain.do',
  'kdb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'lina-life': 'https://www.lina.co.kr/customer/claim/document.do',
  'abl-life': 'https://www.abllife.co.kr/customer/claim/document.do',
  'heungkuk-life': 'https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y',
  'db-life': 'https://www.idblife.com/notice/product/sale',
  'dongyang-life': 'https://pbano.myangel.co.kr/paging/WE_AC_WEPAAP020100L',
  'kb-life': 'https://www.kblife.co.kr/customer-common/productList.do',
  'miraeasset-life': 'https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do',
  'fubonhyundai-life': 'https://www.fubonhyundai.com/?lockDevice=PC&menuId=CUSI150000000000#CUSI150102010101',
  'hana-life': 'https://hanalife.co.kr/anm/product/allProduct.do?status=on',
  'im-life': 'https://www.imlifeins.co.kr/BA/BA_A020.do',
  'chubblife-life': 'https://www.chubblife.co.kr/front/official/sale/listSale.do',
  'nh-life': 'https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl',
  'aia-life': 'https://mypage.aia.co.kr/AIAHomepage/disclosure/our-products/selling/individual.do',
};

const getHomepageUrl = (insurer: Insurer): string => {
  if (insurer.homepageUrl) return insurer.homepageUrl;
  
  const customMap: Record<string, string> = {
    'lina-fire': 'https://www.chubb.com/kr-kr/',
    'mg-ins': 'https://www.yebyeol.co.kr/',
    'kdb-life': 'http://kdblife.co.kr/',
    'dongyang-life': 'https://www.myangel.co.kr/',
    'cardif-life': 'https://www.cardif.co.kr/',
    'hana-life': 'https://www.hanalife.co.kr/',
    'im-life': 'https://www.imlifeins.co.kr/',
    'chubblife-life': 'https://www.chubblife.co.kr/',
    'shinhanez-ins': 'https://www.shinhanez.co.kr/',
    'metlife-life': 'https://www.metlife.co.kr/',
  };

  if (customMap[insurer.id]) {
    return customMap[insurer.id];
  }

  try {
    const url = new URL(insurer.claimUrl);
    return `${url.protocol}//${url.hostname}`;
  } catch (e) {
    return insurer.claimUrl;
  }
};

export async function generateClaimPages() {
  console.log('🚀 Generating Insurer Claim SEO static pages (Phase 2-A)...');
  console.log(`- Total Insurers: ${INSURERS_DATA.length}개사`);

  const nonLifeInsurers = INSURERS_DATA.filter(i => i.type === 'property');
  const lifeInsurers = INSURERS_DATA.filter(i => i.type === 'life');

  console.log(`  * 손해보험: ${nonLifeInsurers.length}개사`);
  console.log(`  * 생명보험: ${lifeInsurers.length}개사`);

  let generatedCount = 0;

  for (const ins of INSURERS_DATA) {
    const typeLabel = ins.type === 'property' ? '손해보험' : '생명보험';
    const canonicalUrl = `https://insurancebridge.co.kr/claim/${ins.id}/`;
    
    // Check if fax contains standard numeric format or instructions
    const isStandardFax = ins.fax && /^[0-9\-\s~]+$/.test(ins.fax);
    
    const title = isStandardFax
      ? `${ins.name} 고객센터 전화번호·보험금청구 팩스(${ins.fax})·구비서류 | 보험브릿지`
      : `${ins.name} 고객센터 전화번호(${ins.phone})·보험금청구 방법·구비서류 | 보험브릿지`;

    const description = `${ins.name}(${typeLabel}) 대표 고객센터 전화번호(${ins.phone}), 보험금 청구 접수 채널, ${ins.fax ? `팩스 접수처(${ins.fax}), ` : ''}필수 구비서류 5종 목록 및 보상 청구 실무 팁 안내.`;

    const h1 = `${ins.name} 고객센터 및 보험금 청구 가이드`;

    const homepage = getHomepageUrl(ins);
    const disclosureUrl = DISCLOSURE_URL_MAP[ins.id] || '';
    const claimPdfUrl = CLAIM_PDF_URL_MAP[ins.id] || '';

    // Generate other insurer links for internal linking
    const otherInsurers = INSURERS_DATA.filter(other => other.id !== ins.id);

    const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(title)}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- JSON-LD BreadcrumbList -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "보험브릿지 홈",
          "item": "https://insurancebridge.co.kr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "보험사정보",
          "item": "https://insurancebridge.co.kr/claim/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${escapeHtml(ins.name)} 고객센터 및 보험금청구",
          "item": "${canonicalUrl}"
        }
      ]
    }
    </script>

    <!-- JSON-LD WebPage -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${escapeHtml(title)}",
      "description": "${escapeHtml(description)}",
      "url": "${canonicalUrl}",
      "inLanguage": "ko-KR",
      "publisher": {
        "@type": "Organization",
        "name": "보험브릿지",
        "url": "https://insurancebridge.co.kr"
      }
    }
    </script>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f8fafc; color: #1e293b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; line-height: 1.6;">
    <div id="root">
      <!-- Static SEO Header -->
      <header style="background: #123941; color: #ffffff; padding: 16px 20px; border-bottom: 1px solid #0d2a30;">
        <div style="max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 18px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span style="background: #fde047; color: #123941; padding: 3px 8px; border-radius: 6px; font-size: 13px; font-weight: 900;">보험브릿지</span>
            <span>실무정보 플랫폼</span>
          </a>
          <nav style="display: flex; gap: 14px; font-size: 13px; font-weight: 600; flex-wrap: wrap;">
            <a href="/claim/" style="color: #fde047; text-decoration: underline;">보험사정보</a>
            <a href="/terms/" style="color: #e2e8f0; text-decoration: none;">약관분류표</a>
            <a href="/surgery/1to5/" style="color: #e2e8f0; text-decoration: none;">수술명검색</a>
            <a href="/dispute/" style="color: #e2e8f0; text-decoration: none;">판례·분쟁</a>
            <a href="/age/" style="color: #e2e8f0; text-decoration: none;">보험나이</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1000px; margin: 0 auto; padding: 24px 16px;">
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Breadcrumb" style="font-size: 13px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <a href="/claim/" style="color: #64748b; text-decoration: none;">보험사 고객센터·보험금청구</a> &gt; 
          <span style="color: #0f172a; font-weight: 600;">${escapeHtml(ins.name)}</span>
        </nav>

        <!-- Main Insurer Hero Card -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; box-shadow: 0 4px 16px rgba(0,0,0,0.03); margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; background: ${ins.type === 'property' ? '#dbeafe' : '#fce7f3'}; color: ${ins.type === 'property' ? '#1e40af' : '#9d174d'};">
              ${escapeHtml(typeLabel)}
            </span>
            <span style="font-size: 12px; color: #64748b; font-weight: 600;">업데이트: 2026년 기준 실무 데이터</span>
          </div>

          <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin: 0 0 12px 0; line-height: 1.3;">
            ${escapeHtml(h1)}
          </h1>
          <p style="font-size: 14px; color: #475569; margin: 0 0 20px 0; line-height: 1.6;">
            <strong>${escapeHtml(ins.name)}</strong>의 대표 고객센터 전화번호, 사고접수 콜센터, 전용 청구 팩스(FAX) 번호, 공식 청구 페이지 및 필수 제출 구비서류 정보를 안내합니다.
          </p>

          <!-- Core Contact Highlights Box -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
            <div>
              <div style="font-size: 12px; color: #64748b; font-weight: 700; margin-bottom: 4px;">대표 고객센터</div>
              <div style="font-size: 20px; font-weight: 900; color: #0f766e;">
                <a href="tel:${escapeHtml(ins.phone.replace(/[^0-9]/g, ''))}" style="color: #0f766e; text-decoration: none;">
                  📞 ${escapeHtml(ins.phone)}
                </a>
              </div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">평일 09:00 ~ 18:00 (사고접수 24시간)</div>
            </div>

            ${ins.monitoringPhone ? `
            <div>
              <div style="font-size: 12px; color: #64748b; font-weight: 700; margin-bottom: 4px;">사고접수 모니터링</div>
              <div style="font-size: 18px; font-weight: 800; color: #1e293b;">
                <a href="tel:${escapeHtml(ins.monitoringPhone.replace(/[^0-9]/g, ''))}" style="color: #1e293b; text-decoration: none;">
                  📞 ${escapeHtml(ins.monitoringPhone)}
                </a>
              </div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">사고접수 전용 회선</div>
            </div>` : ''}

            <div>
              <div style="font-size: 12px; color: #64748b; font-weight: 700; margin-bottom: 4px;">보험금 청구 팩스(FAX)</div>
              <div style="font-size: ${isStandardFax ? '18px' : '15px'}; font-weight: 800; color: #2563eb;">
                📠 ${escapeHtml(ins.fax || '고객센터 문의 또는 앱 접수')}
              </div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">발송 전 피보험자 주민번호·계약확인 필</div>
            </div>
          </div>
        </div>

        <!-- Section 1: Claim Methods and Official Links -->
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
            <span style="color: #0f766e;">🌐</span> ${escapeHtml(ins.name)} 공식 웹사이트 및 청구 채널
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
            ${ins.claimUrl ? `
            <a href="${escapeHtml(ins.claimUrl)}" target="_blank" rel="noopener noreferrer" style="display: block; padding: 14px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; text-decoration: none; color: #166534; font-weight: 700; font-size: 14px;">
              <div style="font-size: 11px; color: #15803d; margin-bottom: 2px;">공식 접수창구</div>
              <div>💻 온라인 보험금 청구 바로가기 ↗</div>
            </a>` : ''}

            ${homepage ? `
            <a href="${escapeHtml(homepage)}" target="_blank" rel="noopener noreferrer" style="display: block; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; text-decoration: none; color: #334155; font-weight: 700; font-size: 14px;">
              <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">공식 홈페이지</div>
              <div>🏠 ${escapeHtml(ins.name)} 홈페이지 ↗</div>
            </a>` : ''}

            ${disclosureUrl ? `
            <a href="${escapeHtml(disclosureUrl)}" target="_blank" rel="noopener noreferrer" style="display: block; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; text-decoration: none; color: #334155; font-weight: 700; font-size: 14px;">
              <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">약관 및 상품공시</div>
              <div>📄 상품공시실 바로가기 ↗</div>
            </a>` : ''}

            ${claimPdfUrl ? `
            <a href="${escapeHtml(claimPdfUrl)}" target="_blank" rel="noopener noreferrer" style="display: block; padding: 14px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; text-decoration: none; color: #1e40af; font-weight: 700; font-size: 14px;">
              <div style="font-size: 11px; color: #2563eb; margin-bottom: 2px;">청구서 양식 다운로드</div>
              <div>📥 청구서식 및 필요서류 안내 ↗</div>
            </a>` : ''}
          </div>
        </section>

        <!-- Section 2: Required Documents -->
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
            <span style="color: #2563eb;">📑</span> ${escapeHtml(ins.name)} 보험금 청구 필수 구비서류
          </h2>
          <p style="font-size: 13px; color: #64748b; margin: 0 0 16px 0;">
            보험금 청구 시 아래 기본 서류를 준비하시기 바랍니다. 청구 유형(통원, 입원, 수술, 진단 등)에 따라 추가 진료 증빙이 필요할 수 있습니다.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <ul style="margin: 0; padding: 0; list-style: none;">
              ${(ins.requiredDocs || []).map((doc, dIdx) => `
                <li style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #1e293b;">
                  <span style="background: #2563eb; color: #ffffff; font-size: 11px; font-weight: 800; border-radius: 50%; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; shrink-0; margin-top: 1px;">
                    ${dIdx + 1}
                  </span>
                  <span>${escapeHtml(doc)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </section>

        ${ins.tips ? `
        <!-- Section 3: Professional Tips -->
        <section style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px; margin-bottom: 24px;">
          <h2 style="font-size: 16px; font-weight: 800; color: #92400e; margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
            <span>💡</span> ${escapeHtml(ins.name)} 보상 청구 실무 팁
          </h2>
          <p style="font-size: 14px; color: #78350f; margin: 0; line-height: 1.6;">
            ${escapeHtml(ins.tips)}
          </p>
        </section>` : ''}

        <!-- Section 4: Other Insurers (Internal Links) -->
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 16px 0;">
            🏢 국내 주요 보험사 고객센터 및 청구 팩스 바로가기
          </h2>
          
          <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1e40af; margin: 0 0 10px 0;">손해보험사 (14개)</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${nonLifeInsurers.map(other => `
                <a href="/claim/${other.id}/" style="padding: 6px 12px; background: ${other.id === ins.id ? '#1e40af' : '#f1f5f9'}; color: ${other.id === ins.id ? '#ffffff' : '#334155'}; border-radius: 8px; font-size: 12px; font-weight: ${other.id === ins.id ? '800' : '600'}; text-decoration: none; border: 1px solid ${other.id === ins.id ? '#1e40af' : '#e2e8f0'};">
                  ${escapeHtml(other.name)}
                </a>
              `).join('')}
            </div>
          </div>

          <div>
            <h3 style="font-size: 14px; font-weight: 700; color: #9d174d; margin: 0 0 10px 0;">생명보험사 (20개)</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${lifeInsurers.map(other => `
                <a href="/claim/${other.id}/" style="padding: 6px 12px; background: ${other.id === ins.id ? '#9d174d' : '#f1f5f9'}; color: ${other.id === ins.id ? '#ffffff' : '#334155'}; border-radius: 8px; font-size: 12px; font-weight: ${other.id === ins.id ? '800' : '600'}; text-decoration: none; border: 1px solid ${other.id === ins.id ? '#9d174d' : '#e2e8f0'};">
                  ${escapeHtml(other.name)}
                </a>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Bottom Interactive Hub CTA -->
        <div style="background: linear-gradient(135deg, #123941 0%, #1e5865 100%); border-radius: 16px; padding: 24px; color: #ffffff; text-align: center; box-shadow: 0 4px 12px rgba(18,57,65,0.15);">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 800; color: #fde047;">
            보험브릿지 대화형 실무 검색기
          </h3>
          <p style="margin: 0 0 16px 0; font-size: 13px; color: #cbd5e1; max-width: 600px; margin-left: auto; margin-right: auto;">
            34개 보험사 청구서식 검색, 약관 질병분류표(KCD), 1~5종 수술명 검색 및 판례·분쟁 조정 사례를 실시간으로 검색해 보세요.
          </p>
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            <a href="/claim/" style="display: inline-block; padding: 10px 20px; background: #fde047; color: #123941; border-radius: 8px; font-size: 13px; font-weight: 800; text-decoration: none;">
              전체 보험사 검색기 열기
            </a>
            <a href="/surgery/1to5/" style="display: inline-block; padding: 10px 20px; background: rgba(255,255,255,0.15); color: #ffffff; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid rgba(255,255,255,0.3);">
              1~5종 수술비 분류표
            </a>
          </div>
        </div>
      </main>

      <footer style="margin-top: 48px; border-top: 1px solid #e2e8f0; background: #ffffff; padding: 32px 16px; text-align: center; font-size: 12px; color: #64748b;">
        <div style="max-width: 1000px; margin: 0 auto; line-height: 1.8;">
          <p style="font-weight: 700; color: #334155; margin-bottom: 4px;">보험브릿지 | 보험설계사 실무 정보 플랫폼</p>
          <p>본 사이트에서 제공하는 정보는 보험설계사의 실무 참고용으로 제공되며 법적 효력을 갖는 유권해석이 아닙니다. 정확한 보장 및 보상 기준은 해당 보험사의 최신 개별 상품 약관을 반드시 확인하시기 바랍니다.</p>
          <p style="margin-top: 8px; color: #94a3b8;">© 2026 InsuranceBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

    const targetSubPath = `claim/${ins.id}`;

    // 1. Root directory (claim/{id}/index.html)
    const rootTargetDir = path.join(rootDir, targetSubPath);
    if (!fs.existsSync(rootTargetDir)) {
      fs.mkdirSync(rootTargetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(rootTargetDir, 'index.html'), html, 'utf-8');

    // 2. Public directory (public/claim/{id}/index.html)
    const publicTargetDir = path.join(rootDir, 'public', targetSubPath);
    if (!fs.existsSync(publicTargetDir)) {
      fs.mkdirSync(publicTargetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicTargetDir, 'index.html'), html, 'utf-8');

    // 3. Dist directory if exists
    const distTargetDir = path.join(rootDir, 'dist', targetSubPath);
    if (fs.existsSync(path.join(rootDir, 'dist'))) {
      if (!fs.existsSync(distTargetDir)) {
        fs.mkdirSync(distTargetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distTargetDir, 'index.html'), html, 'utf-8');
    }

    generatedCount++;
  }

  console.log(`🎉 Successfully generated all ${generatedCount} insurer claim SEO static pages!`);
}

generateClaimPages();
