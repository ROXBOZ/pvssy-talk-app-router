import Card, { CardBaseProps } from "../../Card";

import ArticlesHeading from "./ArticlesHeading";
import React from "react";
import { client } from "../../../../../config/sanity";

interface ArticleCardProps extends CardBaseProps {}

const ArticlesDirectory = async () => {
  const articles: ArticleCardProps[] | null = await getArticles();
  if (!articles || articles.length === 0) return null;

  return (
    <div>
      <ArticlesHeading />
      <div className="customGrid">
        {articles.map((article) => (
          <Card key={article._id} {...article} />
        ))}
      </div>
    </div>
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
