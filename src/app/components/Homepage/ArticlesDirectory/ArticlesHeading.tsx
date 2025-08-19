"use client";

import Filter from "./ArticleFilters";
import { PortableText } from "@portabletext/react";
import React from "react";
import { useSanityFetch } from "@/app/hooks/useSanityFetch";

interface ArticlesHeadingProps {
  filters: string[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

interface HeadingData {
  title: string;
  text: any;
}

const ArticlesHeading: React.FC<ArticlesHeadingProps> = ({
  filters,
  selectedFilter,
  setSelectedFilter,
}) => {
  const heading = useSanityFetch<HeadingData>(
    `*[_type == "homepage" && !(_id in path("drafts.**"))][0]{content[]{..., _type, title, text}}`,
    (data) =>
      data?.content?.find((item: any) => item._type === "painsBlock") ?? null,
  );
  if (!heading) return null;

  return (
    <div className="customGrid items-baseline py-8">
      <div className="col-start-1 col-end-6 lg:col-end-3">
        <h2 className="font-heading text-3xl">{heading.title}</h2>
      </div>
      <div className="col-start-1 col-end-6 flex flex-col gap-4 lg:col-start-3">
        {heading.text && <PortableText value={heading.text} />}
        <Filter
          filterOptions={filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </div>
  );
};

export default ArticlesHeading;
