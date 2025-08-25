import HeaderBar from "./TopBar"; // client component
import LinkButton from "../UI/LinkButton/LinkButton";
import { client } from "../../../../config/sanity";

interface Tagline {
  tagline?: string;
}

const HomeHero = async () => {
  const data: Tagline | null = await getData();
  if (!data) return null;

  return (
    <div className="from-primary-400 to-primary-300 flex h-screen flex-col bg-gradient-to-b">
      <HeaderBar />
      <div className="customGrid flex flex-1 flex-col items-center justify-center p-4 lg:flex-row">
        <div className="home-hero__gradient col-span-3 h-full w-full" />
        <h1 className="typography__heading col-start-4 col-end-7 flex-1 text-6xl lg:text-8xl">
          {data.tagline}
        </h1>
      </div>
      <div className="darker flex justify-center p-4">
        <LinkButton
          label="Découvrir pvssy talk"
          href="#content"
          color="border"
          hasArrow={true}
          arrowDirection="bottom"
        />
      </div>
    </div>
  );
};

export default HomeHero;

async function getData(): Promise<Tagline | null> {
  try {
    return await client.fetch(
      '*[_type == "homepage" && !(_id in path("drafts.**"))][0]{tagline}',
    );
  } catch (error) {
    console.error("Error fetching tagline:", error);
    return null;
  }
}
