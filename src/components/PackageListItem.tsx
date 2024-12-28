import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";
import { motion } from "framer-motion";

interface PackageListItemProps {
  pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-between p-4 border rounded"
    >
      <div className="flex flex-col gap-2">
        <Link
          to={`/packages/${pack.name}`}
          className="text-xl font-bold transition-colors hover:text-indigo-500"
        >
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex flex-wrap gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link to={`/packages/${pack.name}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 2 }}
            className="px-3 py-2 text-lg text-white bg-indigo-500 rounded"
          >
            View
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
