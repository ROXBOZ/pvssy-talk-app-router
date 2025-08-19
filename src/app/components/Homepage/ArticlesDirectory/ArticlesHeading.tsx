"use client";

import Filter from "./ArticleFilters";
import React from "react";

interface ArticlesHeadingProps {
  filters: string[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

const ArticlesHeading: React.FC<ArticlesHeadingProps> = ({
  filters,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <div className="customGrid items-baseline py-8">
      <div className="col-start-1 col-end-6 lg:col-end-3">
        <h2 className="font-heading text-3xl">S’informer sur ses douleurs</h2>
      </div>
      <div className="col-start-1 col-end-6 flex flex-col gap-4 lg:col-start-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto
          quaerat, laborum consequatur alias quas accusamus laudantium illo id.
          Sit, magni harum? Voluptatibus deleniti ut, nobis voluptatum itaque
          delectus distinctio.
        </p>
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
