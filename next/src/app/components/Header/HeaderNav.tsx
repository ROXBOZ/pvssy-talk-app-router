export const dynamic = "force-static";

import ButtonLink from "../UI/ButtonLink/ButtonLink";
import Link from "next/link";
import React from "react";

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
        <li>
          <Link href="https://68a831750ff5aeab1676d791-tfhusmwkoi.chromatic.com/?path=/docs/ui-buttonlink--docs">
            Storybook
          </Link>
        </li>
        <li>
          <Link href="https://www.pvssy-talk.org">
            Online Website <sup>v2</sup>
          </Link>
        </li>
      </ul>
      <ButtonLink color="secondary" label="Menu" />
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
