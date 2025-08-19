import ArticlesDirectory from "./components/Homepage/ArticlesDirectory/ArticlesDirectory";
import HeroSection from "./components/Homepage/HeroSection";
import PagesDirectory from "./components/Homepage/PagesDirectory";
import React from "react";
import Stats from "./components/Homepage/Stats";
import { client } from "../../config/sanity";

interface HomeContent {
  _type: string;
  [key: string]: unknown;
}

interface HeroBlockData {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: {
    asset: { _ref: string };
    alt?: string;
  };
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
                return <ArticlesDirectory key={index} />;
              case "textImageBlock":
                return (
                  <HeroSection
                    key={index}
                    data={item as unknown as HeroBlockData}
                  />
                );
              default:
                return null;
            }
          }
          return null;
        })}
    </div>
  );
}

interface HomepageData {
  content?: HomeContent[];
}

async function getData(): Promise<HomepageData | null> {
  try {
    return await client.fetch(
      `*[_type == "homepage" && !(_id in path("drafts.**"))][0]{
        content[]{
          ...,
          callToAction{
            ...,
            linkRef->{_id, _type, title, slug}
          },
          figure{
            ...,
            image{
              ...,
              asset->
            }
          }
        }
      }`,
    );
  } catch (error) {
    console.error("Error fetching tagline:", error);
    return null;
  }
}
