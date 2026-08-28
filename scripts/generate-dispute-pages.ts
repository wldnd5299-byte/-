import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRECEDENTS_DATA } from '../src/data/disputeData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateDisputePages() {
  console.log(`Generating static pages for ${PRECEDENTS_DATA.length} dispute precedents...`);

  PRECEDENTS_DATA.forEach((item) => {
    const dirPath = path.join(rootDir, 'dispute', item.id);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const cleanTitle = item.title.replace(/\n+/g, ' ').trim();
    const pageTitle = `${cleanTitle} | 보험브릿지`;
    const canonicalUrl = `https://insurancebridge.co.kr/dispute/${item.id}/`;
    const description = item.summary.replace(/\n+/g, ' ').trim();

    const htmlContent = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="root">
      <main id="static-dispute-content" style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6;">
        <article>
          <header style="margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
            <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 0.25rem;">${escapeHtml(item.category)} | <span style="background: #123941; color: #fde047; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">${escapeHtml(item.badge)}</span></p>
            <h1 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 0.5rem 0; line-height: 1.3;">${escapeHtml(cleanTitle)}</h1>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.25rem 0;"><strong>사건/배포번호:</strong> ${escapeHtml(item.caseNumber)}</p>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.25rem 0;"><strong>출처:</strong> ${escapeHtml(item.source)}</p>
          </header>

          <section style="margin-top: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 0.25rem;">핵심 요약</h2>
            <p style="white-space: pre-line; margin-top: 0.5rem; color: #334155; line-height: 1.7;">${escapeHtml(item.summary)}</p>
          </section>

          <section style="margin-top: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 0.25rem;">사건 개요 및 기초 사실관계</h2>
            <div style="white-space: pre-line; margin-top: 0.5rem; color: #334155; line-height: 1.7;">${escapeHtml(item.background)}</div>
          </section>

          <section style="margin-top: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 0.25rem;">주요 판단기준 및 판결 요지</h2>
            <div style="white-space: pre-line; margin-top: 0.5rem; color: #334155; line-height: 1.7;">${escapeHtml(item.decision)}</div>
          </section>

          <section style="margin-top: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #123941; border-bottom: 2px solid #123941; padding-bottom: 0.25rem;">설계사 실무 안내 및 분쟁 대응 솔루션</h2>
            <div style="white-space: pre-line; margin-top: 0.5rem; background: #fffde7; padding: 1rem; border: 1px solid #fbc02d; border-radius: 6px; color: #1e293b; line-height: 1.7;">${escapeHtml(item.tip)}</div>
          </section>
        </article>
      </main>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

    fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent, 'utf-8');
    console.log(`Generated: dispute/${item.id}/index.html`);
  });

  console.log(`Finished generating ${PRECEDENTS_DATA.length} dispute pages.`);

  // Generate /dispute/index.html hub page with links to all dispute precedents
  const disputeHubTitle = '보험 판례·분쟁조정사례 | 보험브릿지';
  const disputeHubDesc = '보험금 지급, 고지의무, 암, 수술, 후유장해 등 보험 관련 법원 주요 판결문과 금융감독원 분쟁조정사례를 보험설계사 실무 관점에서 제공합니다.';
  const disputeHubCanonical = 'https://insurancebridge.co.kr/dispute/';

  const disputeCardsHtml = PRECEDENTS_DATA.map((item) => {
    const cleanTitle = item.title.replace(/\n+/g, ' ').trim();
    const cleanSummary = item.summary.replace(/\n+/g, ' ').trim();
    return `
      <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 11px; font-weight: 700; background: #123941; color: #fde047; padding: 2px 8px; border-radius: 4px;">
            ${escapeHtml(item.badge)}
          </span>
          <span style="font-size: 12px; color: #64748b; font-weight: 600;">
            ${escapeHtml(item.category)}
          </span>
        </div>
        <h2 style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0; line-height: 1.4;">
          <a href="/dispute/${item.id}/" style="color: #0f172a; text-decoration: none;">${escapeHtml(cleanTitle)}</a>
        </h2>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0 0 12px 0;">
          ${escapeHtml(cleanSummary)}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px; font-size: 12px;">
          <span style="color: #64748b;"><strong>사건번호:</strong> ${escapeHtml(item.caseNumber)}</span>
          <a href="/dispute/${item.id}/" style="color: #123941; font-weight: 700; text-decoration: none;">
            판결 전문 및 실무 해설 보기 →
          </a>
        </div>
      </article>
    `;
  }).join('\n');

  const disputeHubHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(disputeHubTitle)}</title>
    <meta name="description" content="${escapeHtml(disputeHubDesc)}" />
    <link rel="canonical" href="${disputeHubCanonical}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(disputeHubTitle)}" />
    <meta property="og:description" content="${escapeHtml(disputeHubDesc)}" />
    <meta property="og:url" content="${disputeHubCanonical}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(disputeHubTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(disputeHubDesc)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "보험 판례·분쟁조정사례",
      "description": "${escapeHtml(disputeHubDesc)}",
      "url": "${disputeHubCanonical}",
      "publisher": {
        "@type": "Organization",
        "name": "보험브릿지",
        "url": "https://insurancebridge.co.kr"
      }
    }
    </script>
  </head>
  <body style="margin: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; color: #1e293b; line-height: 1.6;">
    <div id="root">
      <header style="background: #123941; color: #ffffff; padding: 16px 24px; border-bottom: 3px solid #fde047;">
        <div style="max-width: 960px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span>보험브릿지</span>
            <span style="font-size: 11px; background: #fde047; color: #123941; padding: 2px 6px; border-radius: 4px; font-weight: 800;">실무플랫폼</span>
          </a>
          <nav style="display: flex; gap: 12px; font-size: 13px; font-weight: 600;">
            <a href="/dispute/" style="color: #fde047; text-decoration: none;">판례·분쟁조정</a>
            <a href="/terms/" style="color: #e2e8f0; text-decoration: none;">담보별 분류표</a>
            <a href="/surgery/" style="color: #e2e8f0; text-decoration: none;">수술명 검색</a>
            <a href="/info/" style="color: #e2e8f0; text-decoration: none;">정보글</a>
            <a href="/claim/" style="color: #e2e8f0; text-decoration: none;">고객센터</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 960px; margin: 24px auto; padding: 0 16px;">
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <span style="color: #0f172a; font-weight: 700;">판례 &amp; 분쟁사례</span>
        </nav>

        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">
            보험 판례 및 금융감독원 분쟁조정사례
          </h1>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">
            보험금 부지급 분쟁, 계약 전 알릴의무(고지의무), 암 진단비 지급 기준, 종수술비 인정 범위, 후유장해 지급률 등 법원 주요 판결문과 금융감독원 분쟁조정위원회의 핵심 결정을 설계사 실무 관점에서 정리하여 제공합니다.
          </p>
        </section>

        <section>
          ${disputeCardsHtml}
        </section>
      </main>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  fs.writeFileSync(path.join(rootDir, 'dispute', 'index.html'), disputeHubHtml, 'utf-8');
  console.log('Generated: dispute/index.html hub page with 15 case links.');
}

generateDisputePages();
