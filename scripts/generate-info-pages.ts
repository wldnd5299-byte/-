import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INFO_ARTICLES, INFO_CATEGORIES, InfoArticle } from '../src/data/info/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateInfoPages() {
  const publishedArticles = INFO_ARTICLES.filter((a) => a.isPublished);
  console.log(`Generating static pages for ${publishedArticles.length} published info articles...`);

  // 1. Ensure /info directory exists
  const infoRootDir = path.join(rootDir, 'info');
  if (!fs.existsSync(infoRootDir)) {
    fs.mkdirSync(infoRootDir, { recursive: true });
  }

  // 2. Generate /info/index.html (Hub Page)
  const hubTitle = '보험정보·실무가이드 | 보험브릿지';
  const hubDesc = '보험설계사와 금융소비자를 위한 알기 쉬운 질병수술비 해설, 암·뇌·심장 담보 분석, 질병코드 분류표 활용법, 실손의료비 계산 및 보상 실무 가이드를 제공합니다.';
  const hubCanonical = 'https://insurancebridge.co.kr/info/';

  const hubArticleCardsHtml = publishedArticles
    .map((art) => {
      const cat = INFO_CATEGORIES.find((c) => c.id === art.category);
      return `
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <span style="display: inline-block; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd;">
              ${escapeHtml(cat?.name || '실무가이드')}
            </span>
            <time style="font-size: 12px; color: #94a3b8;" datetime="${art.publishedAt}">${art.publishedAt}</time>
          </div>
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 10px 0; line-height: 1.4;">
            <a href="/info/${art.slug}/" style="color: #0f172a; text-decoration: none;">${escapeHtml(art.title)}</a>
          </h2>
          <p style="font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 16px;">
            ${escapeHtml(art.summary)}
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 12px; font-size: 12px;">
            <div style="color: #64748b; font-size: 11px;">
              ${art.tags.map((t) => `<span style="margin-right: 6px; color: #64748b;">#${escapeHtml(t)}</span>`).join('')}
            </div>
            <a href="/info/${art.slug}/" style="font-weight: 700; color: #123941; text-decoration: none;">
              전문 읽기 →
            </a>
          </div>
        </article>
      `;
    })
    .join('\n');

  const hubHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(hubTitle)}</title>
    <meta name="description" content="${escapeHtml(hubDesc)}" />
    <link rel="canonical" href="${hubCanonical}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(hubTitle)}" />
    <meta property="og:description" content="${escapeHtml(hubDesc)}" />
    <meta property="og:url" content="${hubCanonical}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(hubTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(hubDesc)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "보험정보·실무가이드",
      "description": "${escapeHtml(hubDesc)}",
      "url": "${hubCanonical}",
      "publisher": {
        "@type": "Organization",
        "name": "보험브릿지",
        "url": "https://insurancebridge.co.kr"
      }
    }
    </script>
  </head>
  <body>
    <div id="root">
      <div style="max-width: 960px; margin: 0 auto; padding: 32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <header style="background: #123941; color: #ffffff; padding: 36px 28px; border-radius: 16px; margin-bottom: 32px;">
          <p style="color: #cb9f74; font-size: 13px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase;">INSURANCE PRACTICAL GUIDE</p>
          <h1 style="font-size: 28px; font-weight: 800; margin: 0 0 12px 0;">보험정보·실무가이드</h1>
          <p style="font-size: 14px; color: #e2e8f0; margin: 0; line-height: 1.6;">
            보험설계사와 금융소비자가 약관과 분류표를 보다 쉽게 이해하고 현장에서 즉시 활용할 수 있도록 핵심 담보와 보상 실무를 알기 쉽게 해설합니다.
          </p>
        </header>
        <main>
          ${hubArticleCardsHtml}
        </main>
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  fs.writeFileSync(path.join(infoRootDir, 'index.html'), hubHtml, 'utf-8');
  console.log('Generated: /info/index.html');

  // 3. Generate each /info/{slug}/index.html
  publishedArticles.forEach((art) => {
    const articleDir = path.join(infoRootDir, art.slug);
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }

    const pageTitle = `${art.title} | 보험브릿지`;
    const canonicalUrl = `https://insurancebridge.co.kr/info/${art.slug}/`;
    const catMeta = INFO_CATEGORIES.find((c) => c.id === art.category);

    const relatedTermsHtml = art.relatedTerms && art.relatedTerms.length > 0
      ? `
        <div style="margin-top: 32px; padding: 20px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 10px;">
          <h3 style="font-size: 15px; font-weight: 700; color: #0369a1; margin: 0 0 10px 0;">🔗 연관 상세 담보 분류표</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 1.8;">
            ${art.relatedTerms.map((rt) => `
              <li>
                <a href="/terms/${rt.insurerId}/${rt.subTabId}/" style="color: #0284c7; font-weight: 600; text-decoration: underline;">
                  [${escapeHtml(rt.insurerName || '보험사')}] ${escapeHtml(rt.label)} 바로가기
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `
      : '';

    const relatedToolsHtml = art.relatedTools && art.relatedTools.length > 0
      ? `
        <div style="margin-top: 16px; padding: 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; font-size: 13px;">
          <strong style="color: #065f46;">🛠️ 관련 실무 검색 도구:</strong>
          ${art.relatedTools.includes('surgery') ? '<a href="/surgery/" style="margin-left: 10px; color: #059669; font-weight: 700; text-decoration: underline;">수술명 1~5종 분류 검색기</a>' : ''}
          ${art.relatedTools.includes('claim') ? '<a href="/claim/" style="margin-left: 10px; color: #d97706; font-weight: 700; text-decoration: underline;">보험사별 청구 서류 안내</a>' : ''}
        </div>
      `
      : '';

    const articleHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(art.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(art.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="article:published_time" content="${art.publishedAt}" />
    <meta property="article:modified_time" content="${art.updatedAt || art.publishedAt}" />
    <meta property="article:author" content="${escapeHtml(art.author.name)}" />
    <meta property="article:section" content="${escapeHtml(catMeta?.name || '보험실무')}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(art.description)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- JSON-LD Article Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${escapeHtml(art.title)}",
      "description": "${escapeHtml(art.description)}",
      "image": "https://insurancebridge.co.kr/og-image.png",
      "datePublished": "${art.publishedAt}",
      "dateModified": "${art.updatedAt || art.publishedAt}",
      "author": {
        "@type": "Person",
        "name": "${escapeHtml(art.author.name)}",
        "jobTitle": "${escapeHtml(art.author.role)}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "보험브릿지",
        "url": "https://insurancebridge.co.kr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://insurancebridge.co.kr/og-image.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${canonicalUrl}"
      }
    }
    </script>

    <!-- JSON-LD Breadcrumb Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "홈",
          "item": "https://insurancebridge.co.kr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "보험정보·실무가이드",
          "item": "https://insurancebridge.co.kr/info/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${escapeHtml(catMeta?.name || '가이드')}",
          "item": "https://insurancebridge.co.kr/info/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "${escapeHtml(art.title)}",
          "item": "${canonicalUrl}"
        }
      ]
    }
    </script>
  </head>
  <body>
    <div id="root">
      <main style="max-width: 860px; margin: 0 auto; padding: 32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #1e293b;">
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 20px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt;
          <a href="/info/" style="color: #64748b; text-decoration: none;">보험정보·실무가이드</a> &gt;
          <span>${escapeHtml(catMeta?.name || '가이드')}</span>
        </nav>

        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <header style="border-bottom: 1px solid #f1f5f9; padding-bottom: 24px; margin-bottom: 28px;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: #e0f2fe; color: #0369a1;">
                ${escapeHtml(catMeta?.name || '실무가이드')}
              </span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.35; margin: 0 0 16px 0;">
              ${escapeHtml(art.title)}
            </h1>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; font-size: 12px; color: #64748b; background: #f8fafc; padding: 12px 16px; border-radius: 8px;">
              <div>
                <strong>작성/검수:</strong> ${escapeHtml(art.author.name)} (${escapeHtml(art.author.role)})
              </div>
              <div>
                <span>발행일: ${art.publishedAt}</span>
              </div>
            </div>
          </header>

          <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 18px; border-radius: 0 8px 8px 0; margin-bottom: 28px;">
            <strong style="color: #92400e; font-size: 14px; display: block; margin-bottom: 6px;">💡 3줄 핵심 요약</strong>
            <p style="color: #78350f; font-size: 13px; margin: 0; line-height: 1.6;">
              ${escapeHtml(art.summary)}
            </p>
          </div>

          <div style="font-size: 15px; color: #334155;">
            ${art.contentHtml}
          </div>

          ${relatedTermsHtml}
          ${relatedToolsHtml}

          <footer style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
            <a href="/info/" style="font-size: 13px; font-weight: 700; color: #123941; text-decoration: none; background: #f1f5f9; padding: 8px 16px; border-radius: 8px;">
              ← 전체 가이드 목록으로
            </a>
          </footer>
        </article>
      </main>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

    fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml, 'utf-8');
    console.log(`Generated: /info/${art.slug}/index.html`);
  });

  console.log(`Finished generating all info pages.`);
}

generateInfoPages();
