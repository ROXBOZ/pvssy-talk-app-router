import ArticlesDirectory from "./components/Homepage/ArticlesDirectory/ArticlesDirectory";
import HeroSection from "./components/Homepage/HeroSection";
import PagesDirectory from "./components/Homepage/PagesDirectory";
import React from "react";
import Stats from "./components/Homepage/Stats";
import { client } from "../../config/sanity";

interface HomeContent {
  _type: string;
  [key: string]: any;
}

export default async function Home() {
  const data = await getData();
  const content = data?.content || [];

  return (
    <div id="content" className="flex flex-col gap-48">
      {content &&
        content.map((item: HomeContent, index: number) => {
          if (item && item._type) {
            switch (item._type) {
              case "dotsZone":
                return <Stats key={index} />;
              case "linkCards":
                return <PagesDirectory key={index} />;
              case "painsBlock":
                return <ArticlesDirectory item={content} key={index} />;
              case "textImageBlock":
                return <HeroSection key={index} />;
              default:
                return null;
            }
          }
          return null;
        })}
    </div>
  );
}

async function getData(): Promise<any | null> {
  try {
    return await client.fetch(
      '*[_type == "homepage" && !(_id in path("drafts.**"))][0]{content[]{...}}',
    );
  } catch (error) {
    console.error("Error fetching tagline:", error);
    return null;
  }
}
