import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  INSURER_TERMS_LIST, 
  INSURER_SUBTABS, 
  getSectionsForInsurerSubTab, 
  getSummaryForSubTab,
  INSURER_PHONE_MAP,
  getInsurerTheme
} from '../src/data/terms/index.ts';

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

function renderSectionToHtml(sec: any, idx: number): string {
  if (!sec) return '';
  
  const title = sec.title || sec.category || sec.group || `분류 ${idx + 1}`;
  const code = sec.code || '';
  const grade = sec.grade || '';
  const notes = sec.notes || sec.desc || sec.description || '';
  const items = sec.items || sec.diseases || sec.subItems || [];

  let itemsHtml = '';
  if (Array.isArray(items) && items.length > 0) {
    itemsHtml = items.map((item: any, iIdx: number) => {
      if (typeof item === 'string') {
        return `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 14px; color: #64748b; font-size: 13px; text-align: center; width: 50px;">${iIdx + 1}</td>
            <td style="padding: 10px 14px; color: #1e293b; font-size: 14px; font-weight: 500;" colspan="2">${escapeHtml(item)}</td>
          </tr>
        `;
      }

      const dName = item.disease || item.name || item.title || '';
      const dCode = item.code || item.num || '';
      const dGrade = item.grade || item.amount || '';
      const dSubItems = item.subItems || [];

      let subItemsText = '';
      if (Array.isArray(dSubItems) && dSubItems.length > 0) {
        subItemsText = `<div style="margin-top: 6px; font-size: 12px; color: #64748b; background: #f8fafc; padding: 6px 10px; border-radius: 6px;">
          ${dSubItems.map((s: any) => typeof s === 'string' ? escapeHtml(s) : `${escapeHtml(s.name || s.disease)} (${escapeHtml(s.code || '')})`).join(', ')}
        </div>`;
      }

      return `
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 14px; color: #64748b; font-size: 13px; text-align: center; width: 50px;">${iIdx + 1}</td>
          <td style="padding: 10px 14px; color: #0f172a; font-size: 14px; font-weight: 600;">
            ${escapeHtml(dName)}
            ${subItemsText}
          </td>
          <td style="padding: 10px 14px; color: #0369a1; font-size: 13px; font-family: monospace; font-weight: 600; text-align: right; white-space: nowrap;">
            ${escapeHtml(dCode)}
            ${dGrade ? `<span style="margin-left: 8px; background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 11px;">${escapeHtml(dGrade)}</span>` : ''}
          </td>
        </tr>
      `;
    }).join('');
  }

  return `
    <div style="margin-bottom: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
      <div style="background: #f8fafc; padding: 14px 18px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <h3 style="margin: 0; font-size: 15px; font-weight: 700; color: #123941; display: flex; align-items: center; gap: 8px;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #123941;"></span>
          ${escapeHtml(title)}
        </h3>
        <div style="display: flex; gap: 6px; align-items: center;">
          ${code ? `<span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 700; font-family: monospace;">${escapeHtml(code)}</span>` : ''}
          ${grade ? `<span style="background: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 700;">${escapeHtml(grade)}</span>` : ''}
        </div>
      </div>
      ${notes ? `<div style="padding: 10px 18px; background: #fffbeb; border-bottom: 1px solid #fef3c7; font-size: 12px; color: #92400e; line-height: 1.5;">${escapeHtml(notes)}</div>` : ''}
      ${itemsHtml ? `
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
              <th style="padding: 8px 14px; font-size: 12px; font-weight: 600; color: #64748b; text-align: center; width: 50px;">No</th>
              <th style="padding: 8px 14px; font-size: 12px; font-weight: 600; color: #64748b;">질병명 / 보장분류</th>
              <th style="padding: 8px 14px; font-size: 12px; font-weight: 600; color: #64748b; text-align: right;">질병코드 (KCD) / 종수술</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
      ` : ''}
    </div>
  `;
}

export function generateTermsPages() {
  console.log('Generating static HTML pages for all Insurer Terms & Classifications...');
  let totalPagesGenerated = 0;
  const activeInsurersWithSubtabs = new Set(
    INSURER_TERMS_LIST.filter(ins => (INSURER_SUBTABS[ins.id] || []).length > 0).map(ins => ins.id)
  );

  for (const insurer of INSURER_TERMS_LIST) {
    const subtabs = INSURER_SUBTABS[insurer.id] || [];
    const phone = INSURER_PHONE_MAP[insurer.id] || '고객센터';
    const theme = getInsurerTheme(insurer.id);

    // 1. Generate Subtab Detailed Pages
    for (const st of subtabs) {
      const dirPath = path.join(rootDir, 'terms', insurer.id, st.id);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const pageTitle = `${insurer.name} ${st.label} 약관 및 질병코드 분류표 | 보험브릿지`;
      const canonicalUrl = `https://insurancebridge.co.kr/terms/${insurer.id}/${st.id}/`;
      const description = `${insurer.name}의 ${st.label} 담보별 질병코드(KCD), 수술 및 진단비 분류 기준, 보장 범위 상세 정보를 보험설계사 실무용으로 확인하세요.`;
      
      const sections = getSectionsForInsurerSubTab(insurer.id, st.id) || [];
      const summary = getSummaryForSubTab(insurer.id, st.id);

      let contentHtml = '';
      if (Array.isArray(sections) && sections.length > 0) {
        contentHtml = sections.map((sec, idx) => renderSectionToHtml(sec, idx)).join('\n');
      } else if (typeof sections === 'object') {
        const keys = Object.keys(sections);
        contentHtml = keys.map((k, idx) => renderSectionToHtml((sections as any)[k], idx)).join('\n');
      }

      // Render summary banner if available
      let summaryHtml = '';
      if (summary) {
        const sumItems = Array.isArray(summary) ? summary : (summary.items || [summary]);
        summaryHtml = `
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #166534; display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 16px;">💡</span> ${insurer.name} ${st.label} 핵심 보약 요약
            </h4>
            <div style="font-size: 13px; color: #15803d; line-height: 1.6;">
              ${sumItems.map((s: any) => typeof s === 'string' ? `<p style="margin: 4px 0;">• ${escapeHtml(s)}</p>` : `<p style="margin: 4px 0;">• <strong>${escapeHtml(s.title || s.name || '')}:</strong> ${escapeHtml(s.desc || s.summary || s.diseases || '')}</p>`).join('')}
            </div>
          </div>
        `;
      }

      // Other subtabs quick navigation
      const otherSubtabsHtml = subtabs.map(s => `
        <a href="/terms/${insurer.id}/${s.id}/" style="display: inline-block; padding: 6px 12px; margin: 4px; background: ${s.id === st.id ? '#123941' : '#f1f5f9'}; color: ${s.id === st.id ? '#ffffff' : '#334155'}; border-radius: 8px; font-size: 12px; font-weight: 600; text-decoration: none; border: 1px solid ${s.id === st.id ? '#123941' : '#e2e8f0'};">
          ${escapeHtml(s.label)} ${s.groupCount ? `<span style="font-size: 10px; opacity: 0.8;">(${escapeHtml(s.groupCount)})</span>` : ''}
        </a>
      `).join('');

      // JSON-LD Structured Data
      const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
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
                "name": "담보별 약관분류표",
                "item": "https://insurancebridge.co.kr/terms/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": insurer.name,
                "item": `https://insurancebridge.co.kr/terms/${insurer.id}/`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": st.label,
                "item": canonicalUrl
              }
            ]
          },
          {
            "@type": "Article",
            "headline": pageTitle,
            "description": description,
            "url": canonicalUrl,
            "publisher": {
              "@type": "Organization",
              "name": "보험브릿지",
              "url": "https://insurancebridge.co.kr/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://insurancebridge.co.kr/og-image.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          }
        ]
      };

      const html = `<!doctype html>
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
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(pageTitle)}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body style="margin: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; color: #1e293b; line-height: 1.6;">
    <div id="root">
      <header style="background: #123941; color: #ffffff; padding: 16px 24px; border-bottom: 3px solid #fde047;">
        <div style="max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span>보험브릿지</span>
            <span style="font-size: 11px; background: #fde047; color: #123941; padding: 2px 6px; border-radius: 4px; font-weight: 800;">실무플랫폼</span>
          </a>
          <nav style="display: flex; gap: 12px; font-size: 13px; font-weight: 600;">
            <a href="/terms/" style="color: #fde047; text-decoration: none;">담보별 분류표</a>
            <a href="/surgery/" style="color: #e2e8f0; text-decoration: none;">수술명 검색</a>
            <a href="/indemnity/" style="color: #e2e8f0; text-decoration: none;">실손의료비 계산</a>
            <a href="/dispute/" style="color: #e2e8f0; text-decoration: none;">판례·분쟁조정</a>
            <a href="/claim/" style="color: #e2e8f0; text-decoration: none;">보험사 고객센터</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 24px auto; padding: 0 16px;">
        <!-- Breadcrumb Navigation -->
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <a href="/terms/" style="color: #64748b; text-decoration: none;">담보별 약관분류표</a> &gt; 
          <a href="/terms/${insurer.id}/" style="color: #64748b; text-decoration: none;">${escapeHtml(insurer.name)}</a> &gt; 
          <span style="color: #0f172a; font-weight: 700;">${escapeHtml(st.label)}</span>
        </nav>

        <!-- Insurer Header Card -->
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 18px; margin-bottom: 18px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                <span style="background: #123941; color: #ffffff; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">${escapeHtml(insurer.name)}</span>
                <span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600;">고객센터: ${escapeHtml(phone)}</span>
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1.4;">
                ${escapeHtml(insurer.name)} ${escapeHtml(st.label)} 약관 및 질병코드 분류표
              </h1>
            </div>
            <a href="/terms/" style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: #123941; color: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 2px 4px rgba(18,57,65,0.2);">
              <span>대화형 검색기로 열기</span> &rarr;
            </a>
          </div>

          <!-- Other Subtabs for this insurer -->
          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #64748b;">${escapeHtml(insurer.name)} 담보별 분류표 바로가기:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              ${otherSubtabsHtml}
            </div>
          </div>
        </article>

        <!-- Summary if present -->
        ${summaryHtml}

        <!-- Static Rendered Disease / Surgery Table -->
        <section id="terms-static-table-content">
          ${contentHtml || '<p style="padding: 20px; text-align: center; color: #64748b;">해당 담보의 상세 분류 데이터는 약관 원문 및 대화형 검색기에서 확인하실 수 있습니다.</p>'}
        </section>

        <!-- Bottom CTA Box -->
        <div style="background: linear-gradient(135deg, #123941 0%, #1e5865 100%); border-radius: 16px; padding: 24px; color: #ffffff; text-align: center; margin-top: 32px; box-shadow: 0 4px 12px rgba(18,57,65,0.15);">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 800; color: #fde047;">
            ${escapeHtml(insurer.name)} 질병코드 및 수술명 실시간 검색
          </h3>
          <p style="margin: 0 0 16px 0; font-size: 13px; color: #cbd5e1; max-width: 600px; margin-left: auto; margin-right: auto;">
            보험브릿지 대화형 검색기에서 키워드 검색, 질병코드(KCD) 역추적, 수술 종수분류 및 PDF 인쇄 기능을 바로 이용하실 수 있습니다.
          </p>
          <a href="/terms/" style="display: inline-block; padding: 12px 24px; background: #fde047; color: #123941; border-radius: 10px; font-size: 14px; font-weight: 800; text-decoration: none;">
            보험브릿지 담보분류 마스터 열기
          </a>
        </div>
      </main>

      <footer style="margin-top: 48px; border-top: 1px solid #e2e8f0; background: #ffffff; padding: 32px 16px; text-align: center; font-size: 12px; color: #64748b;">
        <div style="max-width: 1100px; margin: 0 auto; line-height: 1.8;">
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

      fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf-8');
      totalPagesGenerated++;
    }

    // 2. Generate Insurer-Level Landing Page (/terms/[insurerId]/index.html) ONLY if insurer has subtabs
    if (subtabs.length > 0) {
      const insurerDirPath = path.join(rootDir, 'terms', insurer.id);
      if (!fs.existsSync(insurerDirPath)) {
        fs.mkdirSync(insurerDirPath, { recursive: true });
      }

      const insurerPageTitle = `${insurer.name} 담보별 약관 및 질병분류표 모음 | 보험브릿지`;
      const insurerCanonicalUrl = `https://insurancebridge.co.kr/terms/${insurer.id}/`;
      const insurerDescription = `${insurer.name}의 암, 뇌혈관, 심혈관, 1~5종 수술비 등 ${subtabs.length}개 주요 담보별 약관 질병코드 분류표를 한눈에 확인하세요.`;

      const subtabsListHtml = subtabs.map(s => `
        <a href="/terms/${insurer.id}/${s.id}/" style="display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; text-decoration: none; color: #0f172a; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.02); margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #123941;"></span>
            <span style="font-size: 15px; font-weight: 700;">${escapeHtml(s.label)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${s.groupCount ? `<span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">${escapeHtml(s.groupCount)}</span>` : ''}
            <span style="color: #0369a1; font-weight: 700; font-size: 14px;">상세보기 &rarr;</span>
          </div>
        </a>
      `).join('');

      const insurerHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(insurerPageTitle)}</title>
    <meta name="description" content="${escapeHtml(insurerDescription)}" />
    <link rel="canonical" href="${insurerCanonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(insurerPageTitle)}" />
    <meta property="og:description" content="${escapeHtml(insurerDescription)}" />
    <meta property="og:url" content="${insurerCanonicalUrl}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(insurerPageTitle)}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(insurerPageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(insurerDescription)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />
  </head>
  <body style="margin: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; color: #1e293b; line-height: 1.6;">
    <div id="root">
      <header style="background: #123941; color: #ffffff; padding: 16px 24px; border-bottom: 3px solid #fde047;">
        <div style="max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span>보험브릿지</span>
            <span style="font-size: 11px; background: #fde047; color: #123941; padding: 2px 6px; border-radius: 4px; font-weight: 800;">실무플랫폼</span>
          </a>
          <nav style="display: flex; gap: 12px; font-size: 13px; font-weight: 600;">
            <a href="/terms/" style="color: #fde047; text-decoration: none;">담보별 분류표</a>
            <a href="/surgery/" style="color: #e2e8f0; text-decoration: none;">수술명 검색</a>
            <a href="/indemnity/" style="color: #e2e8f0; text-decoration: none;">실손의료비 계산</a>
            <a href="/dispute/" style="color: #e2e8f0; text-decoration: none;">판례·분쟁조정</a>
            <a href="/claim/" style="color: #e2e8f0; text-decoration: none;">보험사 고객센터</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 24px auto; padding: 0 16px;">
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <a href="/terms/" style="color: #64748b; text-decoration: none;">담보별 약관분류표</a> &gt; 
          <span style="color: #0f172a; font-weight: 700;">${escapeHtml(insurer.name)}</span>
        </nav>

        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">
            ${escapeHtml(insurer.name)} 담보별 약관 및 질병분류표
          </h1>
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #64748b;">
            ${escapeHtml(insurer.name)}의 주요 담보별 질병코드(KCD), 수술 분류, 지급 기준을 담보별로 조회하실 수 있습니다.
          </p>
          <div style="margin-top: 20px;">
            ${subtabsListHtml || '<p style="color: #64748b;">담보 목록을 불러오는 중입니다.</p>'}
          </div>
        </article>
      </main>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

      fs.writeFileSync(path.join(insurerDirPath, 'index.html'), insurerHtml, 'utf-8');
      totalPagesGenerated++;
    }
  }

  // 3. Clean up any directories in /terms/ that are not valid active insurers
  const termsBaseDir = path.join(rootDir, 'terms');
  if (fs.existsSync(termsBaseDir)) {
    const existingDirs = fs.readdirSync(termsBaseDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const dirName of existingDirs) {
      if (!activeInsurersWithSubtabs.has(dirName)) {
        const removePath = path.join(termsBaseDir, dirName);
        fs.rmSync(removePath, { recursive: true, force: true });
        console.log(`Cleaned up empty/inactive insurer directory: terms/${dirName}`);
      }
    }
  }

  // 4. Generate /terms/index.html with full internal links to all 7 insurers and 101 coverage pages
  const allInsurersCardsHtml = INSURER_TERMS_LIST
    .filter(ins => (INSURER_SUBTABS[ins.id] || []).length > 0)
    .map(ins => {
      const subtabs = INSURER_SUBTABS[ins.id] || [];
      const subtabsLinks = subtabs.map(st => `
        <a href="/terms/${ins.id}/${st.id}/" style="display: inline-flex; align-items: center; padding: 6px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; font-weight: 600; color: #0f172a; text-decoration: none; transition: all 0.15s ease;">
          ${escapeHtml(st.label)}
        </a>
      `).join('');

      return `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background: #123941; color: #ffffff; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">손해보험</span>
              <a href="/terms/${ins.id}/" style="font-size: 17px; font-weight: 800; color: #0f172a; text-decoration: none;">
                ${escapeHtml(ins.name)}
              </a>
            </div>
            <a href="/terms/${ins.id}/" style="font-size: 13px; font-weight: 700; color: #0369a1; text-decoration: none;">
              전체 ${subtabs.length}개 담보 모음 &rarr;
            </a>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${subtabsLinks}
          </div>
        </div>
      `;
    }).join('');

  const termsHubHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>보험사별 담보·질병코드 분류표 | 보험브릿지</title>
    <meta name="description" content="DB손보, 삼성화재, KB손보, 메리츠화재, 한화손보, 롯데손보, 현대해상 등 주요 보험사의 암, 뇌혈관, 심장, 수술비 담보별 질병코드(KCD)와 세부 분류 기준을 한눈에 조회하세요." />
    <link rel="canonical" href="https://insurancebridge.co.kr/terms/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="보험사별 담보·질병코드 분류표 | 보험브릿지" />
    <meta property="og:description" content="DB손보, 삼성화재, KB손보, 메리츠화재, 한화손보, 롯데손보, 현대해상 등 주요 보험사의 암, 뇌혈관, 심장, 수술비 담보별 질병코드(KCD)와 세부 분류 기준을 한눈에 조회하세요." />
    <meta property="og:url" content="https://insurancebridge.co.kr/terms/" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="보험사별 담보·질병코드 분류표 | 보험브릿지" />
    <meta name="twitter:description" content="DB손보, 삼성화재, KB손보, 메리츠화재, 한화손보, 롯데손보, 현대해상 등 주요 보험사의 암, 뇌혈관, 심장, 수술비 담보별 질병코드(KCD)와 세부 분류 기준을 한눈에 조회하세요." />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />
  </head>
  <body style="margin: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; color: #1e293b; line-height: 1.6;">
    <div id="root">
      <header style="background: #123941; color: #ffffff; padding: 16px 24px; border-bottom: 3px solid #fde047;">
        <div style="max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span>보험브릿지</span>
            <span style="font-size: 11px; background: #fde047; color: #123941; padding: 2px 6px; border-radius: 4px; font-weight: 800;">실무플랫폼</span>
          </a>
          <nav style="display: flex; gap: 12px; font-size: 13px; font-weight: 600;">
            <a href="/terms/" style="color: #fde047; text-decoration: none;">담보별 분류표</a>
            <a href="/surgery/" style="color: #e2e8f0; text-decoration: none;">수술명 검색</a>
            <a href="/indemnity/" style="color: #e2e8f0; text-decoration: none;">실손의료비 계산</a>
            <a href="/dispute/" style="color: #e2e8f0; text-decoration: none;">판례·분쟁조정</a>
            <a href="/claim/" style="color: #e2e8f0; text-decoration: none;">보험사 고객센터</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 24px auto; padding: 0 16px;">
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <span style="color: #0f172a; font-weight: 700;">담보별 약관분류표</span>
        </nav>

        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">
            보험사별 담보 및 질병코드(KCD) 약관분류표
          </h1>
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #64748b; line-height: 1.6;">
            DB손해보험, 삼성화재, KB손해보험, 메리츠화재, 한화손해보험, 롯데손해보험, 현대해상, NH농협손해보험, 하나손해보험 등 주요 9개 손해보험사의 암·뇌·심·수술비 등 총 110개 담보별 약관 질병코드 분류표를 대조하고 검색할 수 있습니다.
          </p>
        </section>

        <!-- 9 Insurers and 110 Coverage Direct Links -->
        <section id="terms-insurers-directory">
          <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">
            보험사별 담보 바로가기 (9개 보험사 · 110개 담보)
          </h2>
          ${allInsurersCardsHtml}
        </section>
      </main>

      <footer style="margin-top: 48px; border-top: 1px solid #e2e8f0; background: #ffffff; padding: 32px 16px; text-align: center; font-size: 12px; color: #64748b;">
        <div style="max-width: 1100px; margin: 0 auto; line-height: 1.8;">
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

  fs.writeFileSync(path.join(rootDir, 'terms', 'index.html'), termsHubHtml, 'utf-8');
  console.log(`Generated /terms/index.html hub page with full internal links.`);

  console.log(`Generated ${totalPagesGenerated} static pages for Insurer Terms!`);
}

generateTermsPages();
