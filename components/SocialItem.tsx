import Image from "next/image";
import React from "react";

interface ItemProps {
  icon: string;
}

const SocialItem: React.FC<ItemProps> = ({ icon }) => {
  return (
    <div className="relative overflow-hidden h-[32px] w-[32px] rounded-xl flex justify-center items-center cursor-pointer hover:bg-accent transiton ease-in hover:-translate-y-1 duration-200 ">
      <Image
        src={icon}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        sizes="32px"
      />
    </div>
  );
};

export default SocialItem;
