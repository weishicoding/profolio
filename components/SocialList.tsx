import React from "react";
import x from "@/public/twitterx.svg";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";
import discord from "@/public/discord.svg";
import SocialItem from "./SocialItem";
import Link from "next/link";

const iconImage = [
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/weishidev/",
  },
  {
    icon: github,
    url: "https://github.com/weishicoding",
  },
  {
    icon: x,
    url: "https://x.com/home",
  },
  {
    icon: discord,
    url: "https://discord.com/channels/@me",
  },
];
const SocialList = () => {
  return (
    <div className="flex gap-8 justify-center mt-8 md:mt-0">
      {iconImage.map((item, index) => (
        <Link href={item.url}>
          <SocialItem icon={item.icon} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
