"use client";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>work</div>
    </motion.div>
  );
};

export default Work;
