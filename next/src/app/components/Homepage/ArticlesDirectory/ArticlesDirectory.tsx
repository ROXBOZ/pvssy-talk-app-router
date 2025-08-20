"use client";

import React, { useState } from "react";
import Card, { CardBaseProps } from "../../UI/Card/Card";
import ArticlesHeading from "../../Pages/Homepage/ArticlesDirectory/ArticlesHeading";
import DirectoryPagination from "../../Pages/Homepage/ArticlesDirectory/DirectoryPagination";
import { client } from "../../../../../config/sanity";

const ArticlesDirectory = () => {
  const headingRef = React.useRef<HTMLHeadingElement>(
    null,
  ) as React.RefObject<HTMLHeadingElement>;
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
      headingRef.current?.scrollIntoView({
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
        h2Ref={headingRef}
      />

      <div className="customGrid">
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
