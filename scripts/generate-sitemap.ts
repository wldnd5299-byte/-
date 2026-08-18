import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRECEDENTS_DATA } from '../src/data/disputeData';
import { INSURER_TERMS_LIST, INSURER_SUBTABS } from '../src/data/terms/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export function generateSitemap() {
  console.log('Generating comprehensive sitemap.xml for InsuranceBridge...');

  const coreUrls = [
    { loc: 'https://insurancebridge.co.kr/', changefreq: 'daily', priority: '1.0' },
    { loc: 'https://insurancebridge.co.kr/claim/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/terms/', changefreq: 'weekly', priority: '0.9' },
    { loc: 'https://insurancebridge.co.kr/surgery/', changefreq: 'weekly', priority: '0.9' },
    { loc: 'https://insurancebridge.co.kr/indemnity/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/age/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/planner-goods/', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://insurancebridge.co.kr/dispute/', changefreq: 'weekly', priority: '0.8' },
  ];

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

  const allUrls = [...coreUrls, ...disputeUrls, ...termsUrls];

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
</urlset>
`;

  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`Successfully generated sitemap.xml with ${allUrls.length} URLs (Core: ${coreUrls.length}, Dispute: ${disputeUrls.length}, Terms: ${termsUrls.length})`);
}

generateSitemap();
