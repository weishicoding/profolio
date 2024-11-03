import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  style: string;
  url: string;
}

const ProjectCard: React.FC<CardProps> = ({
  image,
  title,
  description,
  style,
  url,
}) => {
  return (
    <div className="group cursor-pointer relative transiton ease-in hover:-translate-y-2 duration-300">
      <Link href={url}>
        {/* Image Card with Rounded Corners */}
        <div className="rounded-2xl overflow-hidden w-full relative">
          <div className="relative w-full h-[400px]">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Overlay Text Container */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${style} p-6 rounded-b-2xl`}
            >
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
