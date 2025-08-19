import ArticlesDirectory from "./components/Homepage/ArticlesDirectory/ArticlesDirectory";
import HeroSection from "./components/Homepage/HeroSection";
import PagesDirectory from "./components/Homepage/PagesDirectory";
import Stats from "./components/Homepage/Stats";

export default async function Home() {
  return (
    <div className="flex flex-col gap-48">
      <Stats />
      <ArticlesDirectory />
      <HeroSection />
      <PagesDirectory />
      <HeroSection />
      <PagesDirectory />
    </div>
  );
}
