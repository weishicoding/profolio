"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.jpg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] md:w-[400px] md:h-[400px] mix-blend-lighten"
        >
          <Image
            src={profile}
            alt=""
            fill
            className="rounded-full object-cover border-8 border-white hover:border-accent"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
