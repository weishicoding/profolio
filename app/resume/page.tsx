"use client";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>Resume</div>
    </motion.div>
  );
};

export default Resume;
