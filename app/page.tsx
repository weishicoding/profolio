"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import TechScroll from "@/components/TechLogoBar";
import SocialList from "@/components/SocialList";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
            <div className="text-center xl:text-left order-2 xl:order-none xl:ml-32">
              <div className="text-xl animate__animated animate__backInLeft animate__delay-1s">
                Software Developer
              </div>
              <h1 className="h1 mb-6 animate__animated animate__bounceInLeft animate__delay-1s">
                Hey, I'm <br />
                <span className="text-emerald-400">Will Shi</span>
              </h1>
              <p className="max-x-[100px] text-white/90 animate__animated animate__bounceInLeft animate__delay-1s">
                Here, you can check out what I'm working on. I try my best to
                create things with ❤️
              </p>
              <div className="md:flex gap-16 mt-10 justify-center items-center xl:justify-normal animate__animated animate__fadeInUp animate__delay-1s ">
                <Button className="gap-2" variant="default">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <SocialList />
              </div>
            </div>
          </div>
          {/* Add the tech scroll section */}
          <TechScroll />
        </div>
      </section>
    </motion.div>
  );
}
