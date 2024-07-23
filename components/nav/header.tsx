import Link from "next/link";
import React from "react";
import { MdCamera, MdGroup, MdLogin, MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-200 flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <MdCamera size={30} className="text-sky-600" />
        <Link href="/home" className="font-medium">
          Team Photo
        </Link>
      </div>
      <div>
        {"1" == "1" ? (
          <MdLogin size={30} className="text-green-600" />
        ) : (
          <p className="flex ju gap-2 items-center">
            <span className="">Etia</span>
            <MdLogout size={30} className="text-red-600" />
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
