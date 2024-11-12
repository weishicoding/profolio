"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

// Navigation links data
const navigationLinks = [
  { name: "home", path: "/" },
  { name: "blog", path: "/blog" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-8 xl:py-12 text-white">
      {/* Desktop Navigation */}
      <nav className="flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="hidden md:flex rounded-xl xl:mr-6 border-4 border-white 
                     text-white select-none p-2 text-2xl xl:text-3xl font-extrabold 
                     hover:border-accent transition-all duration-300
                     animate__animated animate__fadeInDown"
          >
            WS
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  capitalize text-2xl xl:text-3xl cursor-pointer
                  transition-all duration-300
                  animate__animated animate__fadeInDown
                  hover:text-accent
                  ${
                    link.path === pathname
                      ? "text-accent border-b-2 border-accent"
                      : ""
                  }
                `}
                style={{
                  animationDelay: `${index * 0.1 + 0.3}s`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex rounded-xl xl:mr-6 border-4 border-white 
                   text-accent select-none p-2 text-2xl xl:text-3xl font-extrabold 
                   hover:bg-accent-hover hover:border-accent hover:text-white
                   transition-all duration-300
                   animate__animated animate__flipInX animate__delay-1s"
        >
          Hire me
        </Link>
        <div className="md:hidden">
          {/* mobile nav */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
