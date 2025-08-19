"use client";

import Card, { CardBaseProps } from "../../UIElements/Card";
import React, { useState } from "react";

import ArticlesHeading from "./ArticlesHeading";
import DirectoryPagination from "./DirectoryPagination";
import { client } from "../../../../../config/sanity";

const ArticlesDirectory = () => {
  const articlesGridRef = React.useRef<HTMLDivElement>(null);
  const [articles, setArticles] = useState<CardBaseProps[] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 6;

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

  const filteredArticles = selectedFilter
    ? articles.filter((article) =>
        Array.isArray(article.filters)
          ? article.filters.includes(selectedFilter)
          : false,
      )
    : articles;

  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setTimeout(() => {
      articlesGridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const paginatedArticles = filteredArticles.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  return (
    <section>
      <ArticlesHeading
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div ref={articlesGridRef} className="customGrid">
        {paginatedArticles.map((article) => (
          <Card key={article._id} {...article} />
        ))}
      </div>

      <DirectoryPagination
        page={page}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </section>
  );
};

export default ArticlesDirectory;

async function getArticles(): Promise<CardBaseProps[] | null> {
  try {
    return await client.fetch(
      '*[_type == "pain" && !(_id in path("drafts.**"))] {..., filters}',
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}
