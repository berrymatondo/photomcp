import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { MdBook, MdEvent, MdFileOpen, MdHome, MdPeople } from "react-icons/md";

const Footer = () => {
  return (
    <div className="sticky bottom-0 py-1 ">
      <div className="py-2 container flex items-center justify-between">
        <MdHome size={30} className="text-red-400" />
        <MdEvent size={30} className="text-red-400" />
        <MdPeople size={30} className="text-red-400" />
        <FiBookOpen size={30} className="text-red-400" />
      </div>
      <p className="text-xs text-center"> &copy; Berry MATONDO</p>
    </div>
  );
};

export default Footer;
