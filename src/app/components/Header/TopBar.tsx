export const dynamic = "force-static";

import HeaderNav from "./HeaderNav";
import React from "react";
import { client } from "../../../../config/sanity";

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

const TopBar = async () => {
  const data: HeaderNavProps | null = await getData();

  return (
    <header className="customGrid items-baseline justify-between p-4">
      <div className="font-heading text-2xl">pvssy&nbsp;talk</div>
      <HeaderNav headerMenu={data?.headerMenu} />
    </header>
  );
};

export default TopBar;

async function getData(): Promise<HeaderNavProps | null> {
  try {
    return await client.fetch(
      '*[_type == "menu" && !(_id in path("drafts.**"))][0]{headerMenu}',
    );
  } catch (error) {
    console.error("Error fetching header menu:", error);
    return null;
  }
}
