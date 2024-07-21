import Link from "next/link";
import React from "react";

const ftc = [
  { id: 1, title: "Utilisatioon de la lumière", link: "/ft/lumiere" },
  { id: 2, title: "Utilisation du drive", link: "/ft/drive" },
];
const FTPage = () => {
  return (
    <div className="flex flex-col">
      {ftc.map((el) => (
        <Link href={el.link} key={el.id}>
          {el.title}
        </Link>
      ))}
    </div>
  );
};

export default FTPage;
