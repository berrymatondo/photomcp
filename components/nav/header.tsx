import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { MdLinkedCamera, MdLogin, MdLogout } from "react-icons/md";
import { Badge } from "../ui/badge";

const Header = () => {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");

  return (
    <div className="sticky top-0  bg-sky-950 flex justify-between items-center p-4 pl-0 m-1 rounded-lg">
      <div className="flex items-center gap-2 bg-sky-600 text-white p-2 rounded-r-full">
        <MdLinkedCamera size={30} className="" />
        <Link href="/" className="font-medium">
          Team Photo
        </Link>
      </div>
      <div>
        {"1" == "1" ? (
          <MdLogin size={30} className="text-green-600" />
        ) : (
          <div className="flex ju gap-2 items-center">
            <Badge className="bg-teal-600">Véronica</Badge>
            <MdLogout size={30} className="text-red-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
