import ButtonLink from "../../UIElements/ButtonLink";
import React from "react";

interface DirectoryPaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const DirectoryPagination: React.FC<DirectoryPaginationProps> = ({
  page,
  totalPages,
  setPage,
}) => {
  if (totalPages <= 1) return null;
  return (
    <div className="mt-8 flex items-baseline justify-center gap-4">
      <ButtonLink
        label="Précédente"
        color="border"
        onClick={() => setPage(Math.max(0, page - 1))}
        disabled={page === 0}
        hasArrow={true}
        arrowDirection="left"
      />
      <span>
        Page {page + 1} sur {totalPages}
      </span>
      <ButtonLink
        label="Suivante"
        color="border"
        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        hasArrow={true}
        arrowDirection="right"
      />
    </div>
  );
};

export default DirectoryPagination;
