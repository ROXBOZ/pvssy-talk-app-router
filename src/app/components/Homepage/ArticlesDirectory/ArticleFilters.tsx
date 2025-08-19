import React from "react";

export interface FilterProps {
  filterOptions: string[];
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

const Filter: React.FC<FilterProps> = ({
  filterOptions,
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleFilter = (filter: string) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const handleReset = () => {
    setSelectedFilter(null);
  };

  return (
    <div className="font-heading flex flex-wrap items-baseline gap-2">
      {filterOptions.map((filter, index) => (
        <span
          key={index}
          onClick={() => handleFilter(filter)}
          className={`border-tertiary-400 font-heading hover:bg-tertiary-400 hover:border-tertiary-400 relative z-10 flex cursor-pointer items-baseline gap-2 rounded-full border-2 px-4 py-1 blur-none transition-all delay-200 duration-200 ${selectedFilter === filter ? "bg-tertiary-500" : ""}`}
        >
          {filter}
        </span>
      ))}
      <span
        className="border-primary-100 cursor-pointer rounded-full border-2 px-4 py-1"
        onClick={handleReset}
      >
        ✕ reset
      </span>
    </div>
  );
};

export default Filter;
