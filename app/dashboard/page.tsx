import GlobalLayout from "@/components/all/globalLayout";
import Dashboard from "@/components/dashboard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllActivites } from "@/lib/_activiteActions";
import { getAllMembers } from "@/lib/_memberActions";
import React from "react";

const DashboardPage = async () => {
  const res = await getAllMembers();
  const members = res?.data;

  const res2 = await getAllActivites();
  const activites = res2?.data;

  const mbrDel = members?.filter((member) => member.staann == "D");

  const mbrIna = members?.filter(
    (member) => member.staann != "D" && member.status == "INACTIF"
  );

  //console.log("activites", activites);

  const act = activites?.map((ac) => ({
    date: ac.date.substring(3),
    //date: ac.date.split("-").reverse().join("-").substring(0, 8).concat("01"),
    nbrMbr: ac._count,
  }));

  // console.log("act", act);

  let act2: any[] = [];

  if (act)
    for (let i = 0; i < act?.length; i++) {
      //console.log("actIII", i, act[i].date);

      if (act2.find((el: any) => el.date == act[i].date)) {
        let objIndex = act2.findIndex((obj) => obj.date == act[i].date);
        //console.log("TOOOO", objIndex, act2[objIndex]);

        act2[objIndex].total += 1;
      } else {
        // console.log("KO", i);
        act2.push({ date: act[i].date, total: 1 });
      }
    }

  //actByMonth
  const actByMonth = act2?.map((ac) => ({
    //date: ac.date.substring(3),
    date: ac.date.split("-").reverse().join("-").substring(0, 8).concat("-01"),
    total: ac.total,
  }));

  //console.log("ACT2: ", act2);
  //console.log("actByMonth: ", actByMonth);

  return (
    <GlobalLayout
      title="Equipe Photo"
      desc="Liste des membres actifs de l'équipe photo du MCP"
      add={{
        name: "Dashboard",

        bred: <CustomBreadcrumb name="Dashboard" />,
      }}
    >
      <Dashboard
        members={members}
        mbrDel={mbrDel}
        mbrIna={mbrIna}
        activites={activites}
        actByMonth={actByMonth}
      />
    </GlobalLayout>
  );
};

export default DashboardPage;

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
