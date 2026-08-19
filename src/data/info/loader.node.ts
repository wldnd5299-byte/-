import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { InfoArticle, InfoCategory } from './types';

export * from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadInfoArticlesAsync(): Promise<InfoArticle[]> {
  const itemsDir = path.join(__dirname, 'items');
  const articles: InfoArticle[] = [];
  const slugSet = new Set<string>();

  if (fs.existsSync(itemsDir)) {
    const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'));
    for (const file of files) {
      const filePath = path.join(itemsDir, file);
      const fileUrl = pathToFileURL(filePath).href;
      const mod = await import(fileUrl);
      let foundArticle: InfoArticle | null = null;
      for (const key in mod) {
        const item = mod[key];
        if (item && typeof item === 'object' && typeof item.slug === 'string' && typeof item.title === 'string' && 'isPublished' in item) {
          foundArticle = item as InfoArticle;
          break;
        }
      }

      if (foundArticle) {
        if (slugSet.has(foundArticle.slug)) {
          throw new Error(`[InfoArticles Loader] Duplicate slug detected: "${foundArticle.slug}" in file ${file}`);
        }
        slugSet.add(foundArticle.slug);
        articles.push(foundArticle);
      }
    }
  }

  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
