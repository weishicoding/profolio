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
    <>
      <div className="text-center items-center mb-12">
        <div className="text-3xl font-semibold text-accent">Contact me</div>
        <div className="text-xl mt-2">Get in touch</div>
      </div>
      <div className="xl:flex justify-between">
        <div>
          {[...contactList].map((item, index) => (
            <ContactItem {...item} key={index} />
          ))}
        </div>
        <div>
          <ContactMessage />
        </div>
      </div>
    </>
  );
};

export default Contact;
