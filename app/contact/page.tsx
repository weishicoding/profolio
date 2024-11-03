"use client";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import ContactItem from "@/components/ContactItem";
import ContactMessage from "@/components/ContactMessage";
const contactList = [
  {
    Icon: IoIosCall,
    title: "Call me",
    context: "+358 417260384",
  },
  {
    Icon: MdEmail,
    title: "Email",
    context: "sanwind0305@gmail.com",
  },
  {
    Icon: CiLocationOn,
    title: "Location",
    context: "Helsinki, Finland",
  },
];

const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center items-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white my-12">
        Get in touch
      </div>
      <div className="xl:flex justify-around">
        <div>
          {[...contactList].map((item, index) => (
            <ContactItem {...item} key={index} />
          ))}
        </div>
        <div>
          <ContactMessage />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
