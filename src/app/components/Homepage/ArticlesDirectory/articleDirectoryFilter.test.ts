import { extractFilters, filterArticles } from "./filterUtils";

type Article = { _id: string; filters?: string[] };

describe("Article Directory Filtering", () => {
  const articles: Article[] = [
    { _id: "1", filters: ["foo", "bar"] },
    { _id: "2", filters: ["bar"] },
    { _id: "3", filters: ["baz"] },
    { _id: "4", filters: [] },
    { _id: "5" },
  ];

  it("extracts all unique filters", () => {
    expect(extractFilters(articles)).toEqual(["foo", "bar", "baz"]);
  });

  it("returns all articles if no filter is selected", () => {
    expect(filterArticles(articles, null)).toEqual(articles);
  });

  it("filters articles by selected filter", () => {
    expect(filterArticles(articles, "bar")).toEqual([
      { _id: "1", filters: ["foo", "bar"] },
      { _id: "2", filters: ["bar"] },
    ]);
    expect(filterArticles(articles, "baz")).toEqual([
      { _id: "3", filters: ["baz"] },
    ]);
  });

  it("returns empty array if no articles match filter", () => {
    expect(filterArticles(articles, "notfound")).toEqual([]);
  });

  it("handles articles with no filters property", () => {
    expect(filterArticles([{ _id: "5" } as Article], "foo")).toEqual([]);
  });
});
