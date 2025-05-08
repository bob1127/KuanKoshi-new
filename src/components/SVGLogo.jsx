import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 1500 1500"
      >
        <motion.text
          x="0%"
          y="0%"
          textAnchor="middle"
          fontSize="200"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeDasharray="500"
          strokeDashoffset="500"
          initial={{ strokeDashoffset: 500 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          宜園建設
        </motion.text>
      </svg>
    </motion.div>
  );
}
