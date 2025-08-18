import Link from "next/link";
import React from "react";

function ButtonLink({ hasArrow }: { hasArrow: boolean }) {
  return (
    <Link
      className="group flex w-fit items-center gap-2 rounded-full bg-violet-300 px-4 py-2 ring-violet-400 ring-inset hover:ring-2 hover:delay-200 hover:duration-200 active:bg-violet-400"
      href=""
    >
      Label title
      {hasArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}

export default ButtonLink;
