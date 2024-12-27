import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <h1 className="my-6 text-2xl font-bold">Search Results</h1>
      <div className="mt-4 space-y-4">{renderedResults}</div>
    </div>
  );
}
