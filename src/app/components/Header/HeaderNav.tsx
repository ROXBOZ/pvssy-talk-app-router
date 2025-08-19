export const dynamic = "force-static";

import ButtonLink from "../UIElements/ButtonLink";
import React from "react";

interface HeaderNavProps {
  headerMenu?: {
    _type: string;
    title?: string;
    link?: string;
    isAction?: boolean;
    content?: {
      pages?: { title: string; slug: { current: string } }[];
    };
  }[];
}

const HeaderNav = ({ headerMenu }: HeaderNavProps) => {
  return (
    <nav className="col-start-4 col-end-7 flex items-baseline justify-between">
      {headerMenu && (
        <ul className="flex gap-24">
          {headerMenu
            .filter((item) => item.title)
            .map((item, idx) => (
              <li key={idx}>{item.title}</li>
            ))}
        </ul>
      )}
      <ButtonLink
        color="secondary"
        href=""
        label="Participer"
        hasArrow={false}
      />
    </nav>
  );
};

export default HeaderNav;
