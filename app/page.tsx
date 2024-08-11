import Image from "next/image";
import Link from "next/link";
import vero from "../public/ggbb.png";
import djou from "../public/team/djoulia.png";
import gp from "../public/team/gracep.png";
import vero1 from "../public/team/vero.png";
import magda from "../public/team/magda.png";
import quenan from "../public/team/quenan.png";
import temis from "../public/team/temis.png";

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
      <div className="text-white mt-8 flex flex-col">
        {/*         <span className="flex bg-sky-600 p-2 font-medium text-lg rounded-r-full">
          <MdLinkedCamera size={25} className="text-white mr-2" /> Team Photo
        </span> */}
        <MdLinkedCamera
          size={200}
          className="text-white/30 ml-8 text-sky-400"
        />
        {/*         <p className="text-xs text-center bg-sky-600 m-1 p-1 rounded-full">
          Ministère de la Communication et de la production
        </p> */}
      </div>
      <div className=" flex justify-end w-full absolute z-10 top-0 right-0">
        <div className="flex flex-col  w-full">
          <div className="flex ">
            <div className="h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={vero1}
                className="bg-blue-300/40 object-cover z-5 border-2 border-neutral-500 rounded-full"
              />
            </div>
            <div className="h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={gp}
                className="mt-8 object-cover z-5 bg-gray-200/40 border-2 border-neutral-500 rounded-full"
              />
            </div>
            <div className="h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={djou}
                className="object-cover z-5 bg-yellow-200/40 border-2 border-neutral-500 rounded-full"
              />
            </div>
          </div>
          <div className="flex ">
            <div className="h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={magda}
                className="object-cover z-5 bg-purple-200/40 border-2 border-neutral-500 rounded-full"
              />
            </div>
            <div className="mt-8 h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={quenan}
                className="object-cover z-5 bg-teal-300/40 border-2 border-neutral-500 rounded-full"
              />
            </div>
            <div className="h-32 w-16 m-2  bg-transparent overflow-hidden">
              <Image
                alt="co"
                src={temis}
                className="object-cover z-5 bg-sky-200/40 border-2 border-neutral-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" flex justify-end w-full absolute z-10 top-1/2 right-0">
        <p className="text-white rounded-l-full bg-white/30 w-1/2  p-2  text-right">
          <span>{"Espace équipe photo"}</span>
          <span className="block text-sky-500 font-semibold">{"MCP"}</span>
        </p>
      </div>
      {/*       <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
      </div> */}
      <Image
        alt="co"
        src={vero}
        //placeholder="blur"
        fill
        //  quality={100}
        //fill
        //sizes="100vw"
        className="object-cover z-5 "
      />
    </div>
  );
}
