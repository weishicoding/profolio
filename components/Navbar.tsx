"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Navigation links data
const navigationLinks = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8 xl:py-12 text-white">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="inline-block rounded-md xl:mr-6 border-4 border-white 
                     text-white select-none p-2 text-2xl xl:text-3xl font-extrabold 
                     hover:border-accent transition-all duration-300
                     animate__animated animate__fadeInDown"
          >
            WS
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-8">
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
          className="rounded-md xl:mr-6 border-4 border-white 
                   text-accent select-none p-2 text-2xl xl:text-3xl font-extrabold 
                   hover:bg-accent-hover hover:border-accent hover:text-white
                   transition-all duration-300
                   animate__animated animate__flipInX animate__delay-1s"
        >
          Hire me
        </Link>
      </nav>

      {/* Mobile Navigation placeholder */}
      <nav className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-black p-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  block py-2 capitalize text-xl
                  ${link.path === pathname ? "text-accent" : ""}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      {/* Add mobile navigation implementation here */}
    </header>
  );
};

export default Navbar;
