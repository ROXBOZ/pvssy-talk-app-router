import { client } from "../../config/sanity";
import ArticlesDirectory from "./components/Pages/Homepage/ArticlesDirectory/ArticlesDirectory";

import HeroSection, {
  HeroBlockData,
} from "./components/Pages/Homepage/HeroSection/HeroSection";
import PagesDirectory, {
  PageDirectoryData,
} from "./components/Pages/Homepage/PagesDirectory";
import Stats from "./components/Pages/Homepage/Stats/Stats";

interface HomeContent {
  _type: string;
  [key: string]: unknown;
}

export default async function Home() {
  const data = await getData();
  const content = data?.content || [];

  return (
    <div id="content" className="flex flex-col gap-32">
      {content &&
        content.map((item: HomeContent, index: number) => {
          if (item && item._type) {
            switch (item._type) {
              case "dotsZone":
                return <Stats key={index} />;
              case "linkCards":
                return (
                  <PagesDirectory
                    key={index}
                    data={item as unknown as PageDirectoryData}
                  />
                );
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
