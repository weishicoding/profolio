"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Animal from "@/public/animal.png";
import Boycott from "@/public/smaller-boycott.png";
import Emdr from "@/public/easy-emdr.png";

const cardList = [
  {
    image: Animal,
    title: "Animal Alliance Pledge",
    decription: "Helping the Planet by Helping Animals",
    style: "from-green-300 to-green-400",
    url: "https://www.animalalliancepledge.org/pledge.html",
  },
  {
    image: Boycott,
    title: "Easy EMDR",
    decription: "Simplifying Telehealth for EMDR Therapists",
    style: "from-purple-300 to-purple-400",
    url: "https://www.animalalliancepledge.org/pledge.html",
  },
  {
    image: Emdr,
    title: "Boycott Buddy",
    decription: "Consumer transparency resources",
    style: "from-blue-300 to-blue-400",
    url: "https://www.animalalliancepledge.org/pledge.html",
  },
];

const Work = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-3xl text-center items-center w-full md:text-4xl lg:text-5xl pt-10 md:pt-0 font-extrabold text-white my-12">
          Featured Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {...cardList.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.decription}
              style={item.style}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
