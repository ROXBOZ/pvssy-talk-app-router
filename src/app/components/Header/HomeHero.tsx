import ButtonLink from "../UIElements/ButtonLink/ButtonLink";
import HeaderBar from "./TopBar"; // client component
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
      <div className="lg:customGrid flex flex-1 flex-col items-center justify-center p-4 lg:flex-row">
        <div className="bg-tertiary-500/30 animation pvssy-size-pulse aspect-square h-full scale-70 rounded-full blur-3xl">
          <div className="animation pvssy-size-pulse bg-tertiary-600 aspect-square h-full scale-70 rounded-full blur-3xl"></div>
        </div>
        <h1 className="font-heading col-start-4 col-end-7 flex-1 text-6xl lg:text-8xl">
          {data.tagline}
        </h1>
      </div>
      <div className="darker flex justify-center p-4">
        <ButtonLink
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
