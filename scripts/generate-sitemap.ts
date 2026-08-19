import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRECEDENTS_DATA } from '../src/data/disputeData';
import { INSURER_TERMS_LIST, INSURER_SUBTABS } from '../src/data/terms/index.ts';
import { loadInfoArticlesAsync } from '../src/data/info/loader.node.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export async function generateSitemap() {
  console.log('Generating comprehensive sitemap.xml for InsuranceBridge...');

  const infoArticles = await loadInfoArticlesAsync();

  const coreUrls = [
    { loc: 'https://insurancebridge.co.kr/', changefreq: 'daily', priority: '1.0' },
    { loc: 'https://insurancebridge.co.kr/claim/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/terms/', changefreq: 'weekly', priority: '0.9' },
    { loc: 'https://insurancebridge.co.kr/surgery/', changefreq: 'weekly', priority: '0.9' },
    { loc: 'https://insurancebridge.co.kr/indemnity/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/age/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/planner-goods/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/dispute/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/info/', changefreq: 'weekly', priority: '0.9' },
  ];

  const infoUrls = infoArticles.filter((a) => a.isPublished).map((item) => ({
    loc: `https://insurancebridge.co.kr/info/${item.slug}/`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const disputeUrls = PRECEDENTS_DATA.map((item) => ({
    loc: `https://insurancebridge.co.kr/dispute/${item.id}/`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const termsUrls: { loc: string; changefreq: string; priority: string }[] = [];

  for (const insurer of INSURER_TERMS_LIST) {
    const subtabs = INSURER_SUBTABS[insurer.id] || [];
    if (subtabs.length > 0) {
      // Insurer landing
      termsUrls.push({
        loc: `https://insurancebridge.co.kr/terms/${insurer.id}/`,
        changefreq: 'weekly',
        priority: '0.8',
      });
      // Insurer subtabs
      for (const st of subtabs) {
        termsUrls.push({
          loc: `https://insurancebridge.co.kr/terms/${insurer.id}/${st.id}/`,
          changefreq: 'weekly',
          priority: '0.8',
        });
      }
    }
  }

  const allUrls = [...coreUrls, ...infoUrls, ...disputeUrls, ...termsUrls];

  console.log(`Total URLs to include in sitemap: ${allUrls.length}`);
  console.log(`- Core URLs: ${coreUrls.length}`);
  console.log(`- Info Articles: ${infoUrls.length}`);
  console.log(`- Precedents / Disputes: ${disputeUrls.length}`);
  console.log(`- Terms & Insurers: ${termsUrls.length}`);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // 1. Write to public/sitemap.xml
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('Generated: public/sitemap.xml');

  // 2. Also write to root/sitemap.xml and dist/sitemap.xml if dist directory exists
  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
    console.log('Generated: dist/sitemap.xml');
  }

  console.log('Sitemap generation completed successfully.');
}

generateSitemap();
