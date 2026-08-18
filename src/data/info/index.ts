export * from './types';
export * from './items/samsung-15-disease-surgery';

import { InfoArticle, InfoCategory } from './types';
import { SAMSUNG_15_DISEASE_SURGERY_ARTICLE } from './items/samsung-15-disease-surgery';

export const INFO_ARTICLES: InfoArticle[] = [
  SAMSUNG_15_DISEASE_SURGERY_ARTICLE
];

export const getPublishedArticles = (): InfoArticle[] => {
  return INFO_ARTICLES.filter(a => a.isPublished);
};

export const getArticleBySlug = (slug: string): InfoArticle | undefined => {
  return INFO_ARTICLES.find(a => a.slug === slug && a.isPublished);
};

export const getArticlesByCategory = (category: InfoCategory): InfoArticle[] => {
  return INFO_ARTICLES.filter(a => a.category === category && a.isPublished);
};

// Helper: Get related articles for a given insurer/subtab for terms pages
export const getRelatedArticlesForTerm = (insurerId: string, subTabId: string): InfoArticle[] => {
  const targetPath = `/terms/${insurerId}/${subTabId}/`;
  return INFO_ARTICLES.filter(a =>
    a.isPublished &&
    (a.primaryRelatedLink?.url === targetPath || a.additionalLinks?.some(link => link.url === targetPath))
  );
};
