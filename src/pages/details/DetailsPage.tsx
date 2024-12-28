import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <h1 className="my-4 text-3xl font-bold">{details.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{details.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{details.license}</div>
      </div>
      {details.author && (
        <div>
          <h3 className="text-lg font-bold">Author</h3>
          <div className="p-3 bg-gray-200 rounded">{details.author.name}</div>
        </div>
      )}
    </motion.div>
  );
}
