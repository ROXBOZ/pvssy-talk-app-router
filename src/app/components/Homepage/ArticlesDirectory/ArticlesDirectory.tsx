"use client";

import Card, { CardBaseProps } from "../../UIElements/Card";
import React, { useState } from "react";

import ArticlesHeading from "./ArticlesHeading";
import { client } from "../../../../../config/sanity";

interface ArticleCardProps extends CardBaseProps {}

const ArticlesDirectory = () => {
  const [articles, setArticles] = useState<ArticleCardProps[] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  React.useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  if (!articles || articles.length === 0) return null;

  const filters = [
    ...new Set(
      articles.flatMap((article) =>
        Array.isArray(article.filters) ? article.filters : [],
      ),
    ),
  ];

  // Filter articles by selectedFilter
  const filteredArticles = selectedFilter
    ? articles.filter((article) =>
        Array.isArray(article.filters)
          ? article.filters.includes(selectedFilter)
          : false,
      )
    : articles;

  return (
    <section>
      <ArticlesHeading
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="customGrid">
        {filteredArticles.map((article) => (
          <Card key={article._id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesDirectory;

async function getArticles(): Promise<ArticleCardProps[] | null> {
  try {
    return await client.fetch(
      '*[_type == "pain" && !(_id in path("drafts.**"))] {..., filters}',
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}
