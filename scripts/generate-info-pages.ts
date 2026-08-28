import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INFO_CATEGORIES, InfoArticle } from '../src/data/info/types.ts';
import { loadInfoArticlesAsync } from '../src/data/info/loader.node.ts';

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

const TOOL_DEFINITIONS: Record<string, { title: string; url: string; desc: string }> = {
  claim: {
    title: '보험사별 고객센터 및 청구서류',
    url: '/claim/',
    desc: '국내 주요 보험사 고객센터 번호 및 보험금 청구 양식 다운로드'
  },
  terms: {
    title: '보험사별 담보별 분류표',
    url: '/terms/',
    desc: '7대 손해보험사 주요 담보별 질병코드(KCD) 원문 분류표'
  },
  surgery: {
    title: '1~3종·1~5종 수술명 검색',
    url: '/surgery/',
    desc: '약관 기반 1~3종 및 1~5종 질병/상해 수술명 즉시 검색'
  },
  dispute: {
    title: '판례 & 분쟁자료',
    url: '/dispute/',
    desc: '금융감독원 분쟁조정사례 및 법원 판례 실무 해설'
  },
  'planner-goods': {
    title: '영업자료',
    url: '/planner-goods/',
    desc: '보험설계사를 위한 상담자료, 인포그래픽 및 실무자료'
  },
  age: {
    title: '보험나이 계산기',
    url: '/age/',
    desc: '생년월일 기준 보험나이 및 상령일(나이 증가일) 자동 계산'
  },
  indemnity: {
    title: '실손의료비 계산기',
    url: '/indemnity/',
    desc: '1~5세대 실손보험 세대별 예상 실손의료비 계산'
  }
};

export async function generateInfoPages() {
  const allArticles = await loadInfoArticlesAsync();
  const publishedArticles = allArticles.filter((a) => a.isPublished);
  console.log(`Auto-discovered ${allArticles.length} articles (${publishedArticles.length} published).`);

  const infoRootDir = path.join(rootDir, 'info');
  if (!fs.existsSync(infoRootDir)) {
    fs.mkdirSync(infoRootDir, { recursive: true });
  }

  // 1. Safe Clean: Clean old generated slug directories inside /info/ that are not in current published articles
  const currentPublishedSlugs = new Set(publishedArticles.map(a => a.slug));
  const existingEntries = fs.readdirSync(infoRootDir, { withFileTypes: true });
  for (const entry of existingEntries) {
    if (entry.isDirectory()) {
      if (!currentPublishedSlugs.has(entry.name)) {
        const staleDir = path.join(infoRootDir, entry.name);
        console.log(`[Safe Clean] Removing stale generated directory: /info/${entry.name}`);
        fs.rmSync(staleDir, { recursive: true, force: true });
      }
    }
  }

  // Also clean dist/info/ stale directories if dist exists
  const distInfoDir = path.join(rootDir, 'dist', 'info');
  if (fs.existsSync(distInfoDir)) {
    const existingDistEntries = fs.readdirSync(distInfoDir, { withFileTypes: true });
    for (const entry of existingDistEntries) {
      if (entry.isDirectory() && !currentPublishedSlugs.has(entry.name)) {
        const staleDistDir = path.join(distInfoDir, entry.name);
        console.log(`[Safe Clean] Removing stale dist directory: /dist/info/${entry.name}`);
        fs.rmSync(staleDistDir, { recursive: true, force: true });
      }
    }
  }

  // 2. Generate /info/index.html (Hub Page)
  const hubTitle = '정보글 | 보험브릿지';
  const hubDesc = '보험설계사와 금융소비자를 위한 약관 해설, 질병코드(KCD) 분류표 활용법, 보상 실무 및 관련 도구 가이드를 제공합니다.';
  const hubCanonical = 'https://insurancebridge.co.kr/info/';

  const hubArticleCardsHtml = publishedArticles
    .map((art) => {
      const cat = INFO_CATEGORIES.find((c) => c.id === art.category);
      return `
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <span style="display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 6px; background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd;">
              ${escapeHtml(cat?.name || '정보글')}
            </span>
            <time style="font-size: 12px; color: #94a3b8;" datetime="${art.publishedAt}">${art.publishedAt}</time>
          </div>
          <h2 style="font-size: 17px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0; line-height: 1.4;">
            <a href="/info/${art.slug}/" style="color: #0f172a; text-decoration: none;">${escapeHtml(art.title)}</a>
          </h2>
          <p style="font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 14px;">
            ${escapeHtml(art.description)}
          </p>
          <div style="display: flex; justify-content: flex-end; border-top: 1px solid #f1f5f9; padding-top: 10px;">
            <a href="/info/${art.slug}/" style="font-size: 12px; font-weight: 700; color: #123941; text-decoration: none;">
              자세히 보기 →
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

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "정보글",
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
        <header style="background: #123941; color: #ffffff; padding: 32px 24px; border-radius: 16px; margin-bottom: 28px;">
          <p style="color: #cb9f74; font-size: 12px; font-weight: 700; margin: 0 0 6px 0; text-transform: uppercase;">INSURANCE INFORMATION & GUIDES</p>
          <h1 style="font-size: 26px; font-weight: 800; margin: 0 0 10px 0;">정보글</h1>
          <p style="font-size: 14px; color: #e2e8f0; margin: 0; line-height: 1.6;">
            보험설계사와 금융소비자를 위한 약관 해설, 질병분류코드 안내, 보상 실무 및 관련 도구 가이드입니다.
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

    const primaryLinkHtml = art.primaryRelatedLink
      ? `
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
          <h2 style="font-size: 15px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">📌 핵심 관련 페이지</h2>
          <a href="${escapeHtml(art.primaryRelatedLink.url)}" style="display: block; padding: 18px 20px; background: #123941; color: #ffffff; border-radius: 12px; text-decoration: none;">
            ${art.primaryRelatedLink.badge ? `<span style="display: inline-block; background: #cb9f74; color: #0f172a; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px;">${escapeHtml(art.primaryRelatedLink.badge)}</span>` : ''}
            <div style="font-size: 16px; font-weight: 800; color: #ffffff; margin-bottom: 4px;">
              ${escapeHtml(art.primaryRelatedLink.title)} →
            </div>
            ${art.primaryRelatedLink.desc ? `<div style="font-size: 13px; color: #cbd5e1; line-height: 1.5;">${escapeHtml(art.primaryRelatedLink.desc)}</div>` : ''}
          </a>
        </div>
      `
      : '';

    const secondaryToolsHtml = art.secondaryTools && art.secondaryTools.length > 0
      ? `
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
          <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">보험브릿지 관련 자료 및 실무 도구</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
            ${art.secondaryTools.map((toolKey) => {
              const def = TOOL_DEFINITIONS[toolKey];
              if (!def) return '';
              return `
                <a href="${escapeHtml(def.url)}" style="display: block; padding: 12px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; text-decoration: none;">
                  <div style="font-size: 13px; font-weight: 700; color: #1e293b; margin-bottom: 2px;">${escapeHtml(def.title)}</div>
                  <div style="font-size: 11px; color: #64748b;">${escapeHtml(def.desc)}</div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `
      : '';

    const faqsHtml = art.faqs && art.faqs.length > 0
      ? `
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
          <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">자주 묻는 질문 (FAQ)</h2>
          ${art.faqs.map(faq => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px;">
              <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Q. ${escapeHtml(faq.question)}</div>
              <div style="font-size: 12px; color: #475569; line-height: 1.6;">${escapeHtml(faq.answer)}</div>
            </div>
          `).join('')}
        </div>
      `
      : '';

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": art.title,
      "description": art.description,
      "image": "https://insurancebridge.co.kr/og-image.png",
      "datePublished": art.publishedAt,
      "dateModified": art.updatedAt || art.publishedAt,
      "author": {
        "@type": "Organization",
        "name": "보험브릿지",
        "url": "https://insurancebridge.co.kr"
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
        "@id": canonicalUrl
      }
    };

    const breadcrumbSchema = {
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
          "name": "정보글",
          "item": "https://insurancebridge.co.kr/info/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": catMeta?.name || '정보글',
          "item": "https://insurancebridge.co.kr/info/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": art.title,
          "item": canonicalUrl
        }
      ]
    };

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
    <meta property="article:section" content="${escapeHtml(catMeta?.name || '정보글')}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(art.description)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- JSON-LD Article Schema -->
    <script type="application/ld+json">
    ${JSON.stringify(articleSchema, null, 2)}
    </script>

    <!-- JSON-LD Breadcrumb Schema -->
    <script type="application/ld+json">
    ${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
  </head>
  <body>
    <div id="root">
      <main style="max-width: 820px; margin: 0 auto; padding: 32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #1e293b;">
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 20px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt;
          <a href="/info/" style="color: #64748b; text-decoration: none;">정보글</a> &gt;
          <span>${escapeHtml(catMeta?.name || '정보글')}</span>
        </nav>

        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
          <header style="border-bottom: 1px solid #f1f5f9; padding-bottom: 18px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 800; color: #0f172a; line-height: 1.35; margin: 0 0 10px 0;">
              ${escapeHtml(art.title)}
            </h1>
            <div style="font-size: 12px; color: #94a3b8;">
              <span>발행일: ${art.publishedAt}</span>
            </div>
          </header>

          <div style="font-size: 14px; color: #334155;">
            ${art.contentHtml}
          </div>

          ${primaryLinkHtml}
          ${secondaryToolsHtml}
          ${faqsHtml}

          <footer style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
            <a href="/info/" style="font-size: 13px; font-weight: 700; color: #123941; text-decoration: none; background: #f1f5f9; padding: 8px 16px; border-radius: 8px;">
              ← 전체 정보글 목록
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
