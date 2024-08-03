"use client";
import GlobalLayout from "@/components/all/globalLayout";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAllMembers } from "@/lib/_memberActions";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { assignActivity } from "@/lib/_membersOnActivitesActions";
import { getActivite } from "@/lib/_activiteActions";

const EquipePage = () => {
  const activiteId = usePathname().split("activites/")[1].split("/equipe")[0];
  const [members, setMembers] = useState<any>();
  const [mbrAct, setMbrAct] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const fetchAllMembers = async (id: any) => {
      //
      const resu = await getActivite(id);
      const datau = resu?.data?.members;

      //console.log("datau", datau);

      //
      const res = await getAllMembers();
      const data = res?.data ? res?.data : undefined;
      let tmp;
      if (data && datau) {
        tmp = data.map((el) => ({ ...el, serv: false }));

        for (let i = 0; i < tmp.length; i++) {
          let fd = false;
          for (let j = 0; j < datau?.length || fd; j++) {
            if (tmp[i].id == datau[j].memberId) {
              tmp[i].serv = true;
            }
          }
        }
        //const ttt = tmp.map((tr) =>
        //  console.log("TMP", tmp);

        setMembers(tmp);
      }
    };

    /*     const fetchActivite = async (id: any) => {
      console.log("id: " + id);

      const res = await getActivite(id);
      const data = res?.data;

      setMbrAct(data);

      console.log("ACT", data);
    };

    fetchActivite(activiteId);*/
    fetchAllMembers(activiteId);
  }, []);

  const updateGlobal = (id: any) => {
    // console.log("xxx");

    const clonedData = [...members];
    setMembers(
      clonedData.map((d) => (d.id == id ? { ...d, serv: !d.serv } : d))
    );
    //  console.log("NEW GLOBAL:", clonedData);
  };

  return (
    <GlobalLayout
      title="Gestion de l'équipe"
      desc="Mise en place de l'équipe qui se chargera du service"
      add={{
        name: "Nouvelle activité",
        bred: <CustomBreadcrumb name="Activités" />,
      }}
      back={true}
    >
      <ScrollArea className=" h-96 text-md w-full flex  rounded-md border">
        {members?.map((member: any) => (
          <div
            key={member.id}
            className=" border-b flex items-center space-x-2 m-2 p-2 "
          >
            <Checkbox
              id="terms"
              checked={member.serv}
              onClick={() => updateGlobal(member.id)}
            />
            <label
              htmlFor="terms"
              className={`text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                member.staann == "D"
                  ? "text-red-600"
                  : member.status == "INACTIF"
                  ? "text-gray-400"
                  : ""
              }`}
            >
              {member.firstname}
            </label>
          </div>
        ))}
      </ScrollArea>
      <form
        action={() => {
          //          console.log("ici", activiteId, members);
          assignActivity(activiteId, members);
          router.push(`/activites`);
        }}
      >
        <Button type="submit" className="w-full bg-sky-500">
          Enregistrer
        </Button>
      </form>
    </GlobalLayout>
  );
};

export default EquipePage;

const CustomBreadcrumb = ({ name }: { name: string }) => {
  return (
    <Breadcrumb className=" mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/*         <BreadcrumbItem>
              <BreadcrumbLink href="/zones">Zones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
