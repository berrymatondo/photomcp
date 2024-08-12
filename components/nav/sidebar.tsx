"use client";
import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { MdEvent, MdHome, MdPeople } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";

const tabLinks = [
  {
    id: 1,
    link: "/dashboard",
    title: "Dashboard",
    logo: <BiSolidDashboard size={35} />,
  },
  {
    id: 2,
    link: "/activites",
    title: "Activités",
    logo: <MdEvent size={35} />,
  },
  {
    id: 3,
    link: "/team",
    title: "Equipe",
    logo: <MdPeople size={35} />,
  },
  {
    id: 4,
    link: "/ft",
    title: "Procédures",
    logo: <FiBookOpen size={35} />,
  },
];

const Sidebar = () => {
  /*   const headersList = headers();
  const pathname = headersList.get("x-pathname"); */
  const pathname = usePathname();

  const shortPath = pathname?.split("/")[1].split("/")[0];

  //console.log("shortPath", shortPath);

  return (
    <div className="rounded-lg bg-neutral-100 w-full sticky bottom-0 mt-1 ">
      <ul className="p-2  flex flex-col items-start justify-start">
        {tabLinks.map((el) => (
          <Link
            key={el.id}
            href={el.link}
            className={`flex items-center justify-start w-full mb-2 px-2 gap-2 hover:text-sky-600 ${
              el.link.split("/")[1] == shortPath
                ? "text-sky-600"
                : "text-gray-400"
            }`}
          >
            {el.logo}
            <p
              className={`text-md    ${
                el.link.split("/")[1] == shortPath
                  ? "text-sky-700 font-bold"
                  : "text-black font-normal hover:text-sky-600 "
              }`}
            >
              {el.title}
            </p>
          </Link>
        ))}
      </ul>
      {/*       <p className="text-xs text-center"> &copy; Berry MATONDO</p>
       */}{" "}
    </div>
  );
};

export default Sidebar;
