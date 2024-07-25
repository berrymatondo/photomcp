import Image from "next/image";
import Link from "next/link";
import vero from "../public/team/gracep.png";

import { MdEvent, MdHome, MdLinkedCamera, MdPeople } from "react-icons/md";

const tabLinks = [
  {
    id: 1,
    link: "/team",
    title: "L'Equipe",
    logo: <MdPeople size={40} />,
  },
  {
    id: 2,
    link: "/activites",
    title: "Activités",
    logo: <MdEvent size={40} />,
  },

  {
    id: 3,
    link: "/ft",
    title: "Procédures",
    logo: <MdHome size={40} />,
  },
];

export default function Home() {
  return (
    <div className=" bg-sky-950 overflow-hidden relative rounded-lg m-1">
      <div className="text-white mt-8 flex">
        {/*         <span className="flex bg-sky-600 p-2 font-medium text-lg rounded-r-full">
          <MdLinkedCamera size={25} className="text-white mr-2" /> Team Photo
        </span> */}
        <MdLinkedCamera size={200} className="text-white/30 ml-8" />
      </div>

      <div className=" flex justify-end w-full absolute z-10 top-1/2 right-0">
        <p className="rounded-l-full bg-white/30 w-1/2 text-white p-2  text-right">
          {"Espace dédié à la gestion du pôle photo du MCP"}
        </p>
      </div>
      <div className="absolute z-10 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className=" container flex items-center justify-between gap-4">
          {tabLinks.map((el) => (
            <Link
              key={el.id}
              href={el.link}
              className={`flex flex-col justify-center items-center text-white px-8 w-28 h-20 bg-sky-900/40 rounded-lg`}
            >
              {el.logo}
              <p className="text-sm text-yellow-400">{el.title}</p>
            </Link>
          ))}
        </ul>
      </div>
      <Image
        alt="co"
        src={vero}
        placeholder="blur"
        //  quality={100}
        //  fill
        //  sizes="100vw"
        className="object-cover z-5 rounded-lg absolute bottom-0"
      />
    </div>
  );
}
