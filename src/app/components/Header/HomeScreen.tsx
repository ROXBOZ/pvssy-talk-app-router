import HeaderBar from "../Header/TopBar"; // client component
import { client } from "../../../../config/sanity";

interface Tagline {
  tagline?: string;
}

const HomeScreen = async () => {
  const data: Tagline | null = await getData();
  if (!data) return null;

  return (
    <div className="flex h-[95vh] flex-col bg-violet-300">
      <HeaderBar />
      <div className="flex flex-1 flex-col items-center justify-center p-4 lg:flex-row">
        <div className="flex-1">img</div>
        <h1 className="font-heading flex-1 text-6xl lg:text-8xl">
          {data.tagline}
        </h1>
      </div>
    </div>
  );
};

export default HomeScreen;

// Server-side fetch function
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
