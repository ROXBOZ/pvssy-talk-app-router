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
    <div className="font-heading *: flex items-baseline gap-2 *:rounded-full *:border-2 *:px-4 *:py-1 *:hover:cursor-pointer">
      {filterOptions.map((filter, index) => (
        <span
          key={index}
          onClick={() => handleFilter(filter)}
          className={`border-tertiary-400 font-heading hover:bg-tertiary-400 hover:border-tertiary-400 flex cursor-pointer items-baseline gap-2 rounded-full border-2 px-4 py-1 transition-all delay-200 duration-200 ${selectedFilter === filter && "bg-tertiary-500"} `}
        >
          {filter}
        </span>
      ))}
      <span className="border-primary-100" onClick={handleReset}>
        ✕ reset
      </span>
    </div>
  );
};

export default Filter;
