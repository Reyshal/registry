import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import { motion } from "framer-motion";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="my-6 text-2xl font-bold"
      >
        Search Results
      </motion.h1>
      <div className="mt-4 space-y-4">{renderedResults}</div>
    </div>
  );
}
