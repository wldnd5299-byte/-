import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INFO_ARTICLES, InfoArticle } from '../src/data/info/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeXml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateRss() {
  const publishedArticles = INFO_ARTICLES.filter((a) => a.isPublished);
  console.log(`Generating RSS feed for ${publishedArticles.length} published articles...`);

  const baseUrl = 'https://insurancebridge.co.kr';
  const now = new Date().toUTCString();

  const itemsXml = publishedArticles
    .map((art) => {
      const pubDate = new Date(art.publishedAt).toUTCString();
      const articleUrl = `${baseUrl}/info/${art.slug}/`;

      return `    <item>
      <title>${escapeXml(art.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(art.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>help@insurancebridge.co.kr (${escapeXml(art.author.name)})</author>
      <category>${escapeXml(art.category)}</category>
    </item>`;
    })
    .join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>보험브릿지 보험정보·실무가이드</title>
    <link>${baseUrl}/info/</link>
    <description>보험설계사와 금융소비자를 위한 약관 분석, N대 질병수술비 해설, 질병코드 분류표 및 보상 실무 가이드</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  // 1. Write to public/rss.xml
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml, 'utf-8');
  console.log('Generated: public/rss.xml');

  // 2. Also write to root/rss.xml or dist/rss.xml if dist directory exists
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'rss.xml'), rssXml, 'utf-8');
    console.log('Generated: dist/rss.xml');
  }

  console.log('RSS Feed generation completed.');
}

generateRss();
