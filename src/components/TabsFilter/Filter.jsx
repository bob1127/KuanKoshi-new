import { motion } from "framer-motion";

const Filter = ({ activeCategory, setActiveCategory, categories }) => {
  return (
    <div className="filter-container flex flex-wrap gap-4 my-4 items-center">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`px-4 py-2 border rounded-full ${
          activeCategory === "all"
            ? "bg-[#375E77] text-white"
            : "bg-white text-black"
        }`}
        onClick={() => setActiveCategory("all")}
      >
        全部
      </motion.button>

      {categories?.map((cat) => (
        <motion.button
          whileTap={{ scale: 0.9 }}
          key={cat.slug}
          className={`px-4 py-2 border rounded-full ${
            activeCategory === cat.slug
              ? "bg-[#375E77] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveCategory(cat.slug)}
        >
          {cat.name}
        </motion.button>
      ))}
    </div>
  );
};

export default Filter;
