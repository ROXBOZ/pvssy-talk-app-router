// Utility functions for filtering and extracting filters from articles
export function extractFilters(articles: { filters?: string[] }[]): string[] {
  return Array.from(
    new Set(
      articles.flatMap((article) =>
        Array.isArray(article.filters) ? article.filters : [],
      ),
    ),
  );
}

export function filterArticles<T extends { filters?: string[] }>(
  articles: T[],
  selectedFilter: string | null,
): T[] {
  if (!selectedFilter) return articles;
  return articles.filter((article) =>
    Array.isArray(article.filters)
      ? article.filters.includes(selectedFilter)
      : false,
  );
}
