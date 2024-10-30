"use client";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LuSend } from "react-icons/lu";

const ContactMessage = () => {
  return (
    <>
      <form className="flex flex-col gap-6 p-10 bg-[#001524] rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="Name" type="firstname" />
          <Input placeholder="Email" type="firstname" />
        </div>
        <Input placeholder="Project" type="firstname" />
        <Textarea className="h-[200px]" placeholder="Message" />
        <div className="md:flex gap-16 justify-center items-center xl:justify-normal animate__animated animate__fadeInUp animate__delay-1s ">
          <Button className="uppercase items-center gap-2">
            <span>Download CV</span>
            <LuSend className="text-xl" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactMessage;
