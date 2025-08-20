export const dynamic = "force-static";

import Link from "next/link";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
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

const HeaderNav = () => {
  return (
    <nav className="col-start-4 col-end-7 hidden items-baseline justify-between md:flex">
      <ul className="flex gap-12">
        <li>
          <Link href="https://github.com/ROXBOZ/pvssy-talk-app-router">
            GitHub Repo
          </Link>
        </li>
        <li className="cursor-not-allowed opacity-50">Sanity CMS</li>
        <li className="cursor-not-allowed opacity-50">Storybook Doc</li>
        <li>
          <Link href="https://www.pvssy-talk.org">Online Website (V2)</Link>
        </li>
      </ul>
      {/* {headerMenu && (
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
      /> */}
    </nav>
  );
};

export default HeaderNav;
