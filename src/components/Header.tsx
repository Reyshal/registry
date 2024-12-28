import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between px-4 border-b h-14"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-indigo-500"
      >
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </motion.div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </motion.div>
  );
}
