import Image from "next/image";
import profile from "@/public/profile.jpg";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="text-xl animate__animated animate__backInLeft">
              Software Developer
            </div>
            <h1 className="h1 mb-6 animate__animated animate__bounceInLeft animate__delay-1s">
              Hey, I'm <br />
              <span className="text-emerald-400">Will Shi</span>
            </h1>
            <p className="max-x-[100px] mb-10 text-white/90 animate__animated animate__backInUp animate__delay-1s">
              Here, you can check out what I'm working on. I try my best to
              create things with ❤️
            </p>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <Button className="uppercase items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
