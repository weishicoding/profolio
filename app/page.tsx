import Image from "next/image";
import profile from "@/public/profile.jpg";
import Link from "next/link";
import Header from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="xl:p-20 pt-10 xl:pb-22">
        <div className="">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="relative w-[400px] h-[400px] mb-8">
              <Image
                src={profile}
                alt="Picture of the author"
                fill
                className="rounded-full object-cover border-4 border-white hover:border-accent"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl text-center max-w-3xl">
              Hey, I'm <span className="text-emerald-400">Will Shi</span>. Here,
              you can check out what I'm working on. I try my best to create
              things with ❤️
            </h1>
            <div className="mt-32 space-y-32">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-96 w-full bg-gray-100 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
