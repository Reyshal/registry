import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((pack) => {
    return (
      <motion.div
        layout
        whileHover={{ scale: 1.1 }}
        key={pack.name}
        className="flex flex-col justify-between gap-3 p-4 transition-colors border rounded shadow"
      >
        <div className="flex flex-col gap-1 border-gray-100 border-bottom">
          <div className="font-bold text-center">{pack.name}</div>
          <div className="text-sm text-gray-500">{pack.description}</div>
          <div className="text-sm text-gray-500">
            {pack.maintainers.length} Maintainers
          </div>
        </div>
        <Link to={`/packages/${pack.name}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 2 }}
            className="text-center transition-colors border border-gray-900 rounded hover:bg-indigo-500 hover:text-white hover:border-indigo-500"
          >
            View
          </motion.div>
        </Link>
      </motion.div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          The NPM Registry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto max-w-[600px] text-gray-500"
        >
          The package manager for Javascript. Search and view packages.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4"
      >
        {renderedPackages}
      </motion.div>
    </div>
  );
}
