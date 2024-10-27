"use client";
import java from "@/public/java.svg";
import javascript from "@/public/javascript.svg";
import react from "@/public/react.svg";
import redis from "@/public/redis.svg";
import aws from "@/public/aws.svg";
import css3 from "@/public/css-3.svg";
import docker from "@/public/docker.svg";
import figma from "@/public/figma.svg";
import github from "@/public/github-icon.svg";
import html5 from "@/public/html-5.svg";
import jenkins from "@/public/jenkins.svg";
import mysql from "@/public/mysql.svg";
import typescript from "@/public/typescript-icon.svg";
import nginx from "@/public/nginx.svg";
import vue from "@/public/vue.svg";
import tailwindcss from "@/public/tailwindcss-icon.svg";
import spring from "@/public/spring.svg";
import nextjs from "@/public/nextjs-icon.svg";
import postgresql from "@/public/postgresql.svg";
import prisma from "@/public/prisma.svg";
import TechLogoCard from "./TechLogoCard";

import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

interface TechLogo {
  name: string;
  icon: string;
}

const techLogos: TechLogo[] = [
  { name: "java", icon: java },
  { name: "javascript", icon: javascript },
  { name: "typescript", icon: typescript },
  { name: "next.js", icon: nextjs },
  { name: "react.js", icon: react },
  { name: "vue.js", icon: vue },
  { name: "prisma", icon: prisma },
  { name: "spring", icon: spring },
  { name: "redis", icon: redis },
  { name: "postgresql", icon: postgresql },
  { name: "mysql", icon: mysql },
  { name: "HTML 5", icon: html5 },
  { name: "CSS 3", icon: css3 },
  { name: "tailwind CSS", icon: tailwindcss },
  { name: "docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "github", icon: github },
  { name: "nginx", icon: nginx },
  { name: "jenkins", icon: jenkins },
  { name: "figma", icon: figma },
];
export default function TechScroll() {
  let [ref, { width }] = useMeasure();
  console.log(width);
  const xTranslation = useMotionValue(0);

  const extendedLogos = [...techLogos, ...techLogos, ...techLogos];

  useEffect(() => {
    const totalWidth = width * 2; // Adjust based on duplication
    const controls = animate(xTranslation, [0, -totalWidth], {
      ease: "linear",
      duration: 50, // Increase duration to slow down the scroll
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => {
        xTranslation.set(0); // Reset to smooth looping
      },
    });
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="overflow-hidden  py-10 animate__animated animate__fadeInUp animate__delay-1s ">
      <motion.div
        className="relative flex gap-12 py-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {extendedLogos.map((tech, index) => (
          <TechLogoCard image={tech.icon} name={tech.name} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
