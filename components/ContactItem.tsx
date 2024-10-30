import Image from "next/image";
import React from "react";
import { IconType } from "react-icons/lib";

interface ContactProps {
  Icon: IconType;
  title: string;
  context: string;
}

const ContactItem: React.FC<ContactProps> = ({ Icon, title, context }) => {
  return (
    <div className="flex items-center gap-8 mb-12">
      <button>
        {Icon && (
          <Icon className="w-[24px] h-[24px] xl:w-[36px] xl:h-[36px] text-accent" />
        )}
      </button>
      <div>
        <div className="text-2xl font-semibold text-white">{title}</div>
        <div className="text-xl text-slate-400">{context}</div>
      </div>
    </div>
  );
};

export default ContactItem;
