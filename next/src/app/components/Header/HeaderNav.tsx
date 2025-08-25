"use client";
export const dynamic = "force-static";

import React, { useState } from "react";

import CustomLink from "../UI/CustomLink/CustomLink";
import HeaderMenu from "./HeaderMenu";
import LinkButton from "../UI/LinkButton/LinkButton";

const HeaderNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="col-start-4 col-end-7 hidden items-center justify-between md:flex">
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
      <div className="z-50">
        <LinkButton
          color="secondary"
          label={showMenu ? "Fermer" : "Menu"}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
      {showMenu && <HeaderMenu />}
    </nav>
  );
};

export default HeaderNav;
