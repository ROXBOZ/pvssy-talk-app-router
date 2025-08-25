export const dynamic = "force-static";

import CustomLink from "../UI/CustomLink/CustomLink";
import React from "react";

const HeaderNav = () => {
  return (
    <nav className="col-start-4 col-end-7 hidden items-baseline justify-between md:flex">
      <ul className="flex gap-12">
        <li>
          <CustomLink href="https://github.com/ROXBOZ/pvssy-talk-app-router">
            GitHub Repo
          </CustomLink>
        </li>
        <li className="cursor-not-allowed opacity-50">Sanity CMS</li>
        <li>
          <CustomLink href="https://68a831750ff5aeab1676d791-tfhusmwkoi.chromatic.com/?path=/docs/ui-LinkButton--docs">
            Storybook
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://www.pvssy-talk.org">
            Online Website <sup>v2</sup>
          </CustomLink>
        </li>
      </ul>
      {/* <LinkButton color="secondary" label="Menu" /> */}
      {/* {headerMenu && (
        <ul className="flex gap-24">
          {headerMenu
            .filter((item) => item.title)
            .map((item, idx) => (
              <li key={idx}>{item.title}</li>
            ))}
        </ul>
      )}
      <LinkButton
        color="secondary"
        href=""
        label="Participer"
        hasArrow={false}
      /> */}
    </nav>
  );
};

export default HeaderNav;
