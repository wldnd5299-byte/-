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
}

generateDisputePages();
