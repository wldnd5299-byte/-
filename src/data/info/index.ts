import { InfoArticle, InfoCategory } from './types';

export * from './types';

// Vite compile-time eager glob import
function loadViteArticles(): InfoArticle[] {
  const articles: InfoArticle[] = [];
  const slugSet = new Set<string>();

  // import.meta.glob is statically analyzed and bundled by Vite
  const modules = import.meta.glob('./items/*.ts', { eager: true });
  for (const path in modules) {
    const mod = modules[path] as Record<string, any>;
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
        throw new Error(`[InfoArticles Loader] Duplicate slug detected: "${foundArticle.slug}" in module ${path}`);
      }
      slugSet.add(foundArticle.slug);
      articles.push(foundArticle);
    }
  }

  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export const INFO_ARTICLES: InfoArticle[] = loadViteArticles();

export const getPublishedArticles = (): InfoArticle[] => {
  return INFO_ARTICLES.filter(a => a.isPublished);
};

export const getArticleBySlug = (slug: string): InfoArticle | undefined => {
  return INFO_ARTICLES.find(a => a.slug === slug && a.isPublished);
};

export const getArticlesByCategory = (category: InfoCategory): InfoArticle[] => {
  return INFO_ARTICLES.filter(a => a.category === category && a.isPublished);
};

export const getRelatedArticlesForTerm = (insurerId: string, subTabId: string): InfoArticle[] => {
  const targetPath = `/terms/${insurerId}/${subTabId}/`;
  return INFO_ARTICLES.filter(a =>
    a.isPublished &&
    (a.primaryRelatedLink?.url === targetPath || a.additionalLinks?.some(link => link.url === targetPath))
  );
};
