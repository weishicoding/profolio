import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  name: string;
}

const TechLogoCard: React.FC<CardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-10 w-10 md:h-12 md:w-12 lg:w-16 lg:h-16">
        <Image
          src={image}
          alt={image}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <span className="mt-4 text-sm text-accent capitalize">{name}</span>
    </div>
  );
};

export default TechLogoCard;
