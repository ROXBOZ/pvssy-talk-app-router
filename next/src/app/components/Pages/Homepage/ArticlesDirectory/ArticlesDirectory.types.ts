import { PortableTextBlock } from "@portabletext/react";

export interface FilterProps {
  filterOptions: string[];
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
}

export type Article = { _id: string; filters?: string[] };

export interface ArticlesHeadingProps {
  filters: string[];
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
  h2Ref?: React.RefObject<HTMLHeadingElement>;
}

export interface HeadingData {
  title: string;
  text: PortableTextBlock[];
}

export interface DirectoryPaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}
