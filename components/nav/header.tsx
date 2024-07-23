import Link from "next/link";
import React from "react";
import { MdCamera, MdGroup } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-200 flex items-center py-4 p-2">
      <MdCamera size={25} />
      <Link href="/home" className="font-medium">
        Team Photo
      </Link>
    </div>
  );
};

export default Header;
