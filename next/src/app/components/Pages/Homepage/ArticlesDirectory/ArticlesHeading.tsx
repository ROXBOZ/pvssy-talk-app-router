"use client";

import Filter from "./ArticleFilters";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import React from "react";
import { useSanityFetch } from "@/app/hooks/useSanityFetch";

interface ArticlesHeadingProps {
  filters: string[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
  h2Ref?: React.RefObject<HTMLHeadingElement>;
}

interface HeadingData {
  title: string;
  text: PortableTextBlock[];
}

const ArticlesHeading: React.FC<ArticlesHeadingProps> = ({
  filters,
  selectedFilter,
  setSelectedFilter,
  h2Ref,
}) => {
  const heading = useSanityFetch<HeadingData>(
    `*[_type == "homepage" && !(_id in path("drafts.**"))][0]{content[]{..., _type, title, text}}`,
    (data: unknown) => {
      if (
        data &&
        typeof data === "object" &&
        "content" in data &&
        Array.isArray((data as Record<string, unknown>).content)
      ) {
        const contentArr = (data as { content: unknown[] }).content;
        const block = contentArr.find(
          (item): item is HeadingData & { _type: string } =>
            !!item &&
            typeof item === "object" &&
            (item as Record<string, unknown>)._type === "painsBlock" &&
            typeof (item as Record<string, unknown>).title === "string" &&
            Array.isArray((item as Record<string, unknown>).text),
        );
        if (block) {
          return {
            title: block.title,
            text: block.text,
          };
        }
        return null;
      }
      return null;
    },
  );
  if (!heading) return null;

  return (
    <div id="articles-directory" className="customGrid items-baseline py-8">
      <div className="col-start-1 col-end-6 lg:col-end-3">
        <h2 ref={h2Ref} className="font-heading text-3xl">
          {heading.title}
        </h2>
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
