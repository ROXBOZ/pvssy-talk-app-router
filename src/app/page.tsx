import ArticlesDirectory from "./components/Homepage/ArticlesDirectory/ArticlesDirectory";
import PageSuggestionScreen from "./components/Homepage/PageSuggestionScreen";
import PagesDirectory from "./components/Homepage/PagesDirectory";
import StatsScreen from "./components/Homepage/StatsScreen";

export default async function Home() {
  return (
    <div className="flex flex-col gap-48">
      <StatsScreen />
      <ArticlesDirectory />
      <PageSuggestionScreen />
      <PagesDirectory />
      <PageSuggestionScreen />
      <PagesDirectory />
    </div>
  );
}
