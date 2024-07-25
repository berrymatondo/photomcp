import GlobalLayout from "@/components/all/globalLayout";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ActiviteForm from "@/components/activites/activiteForm";
import prisma from "@/lib/prisma";
import DeleteActivite from "@/components/activites/deleteActivite";
import { MdComment } from "react-icons/md";
import ServiceTeam from "@/components/activites/serviceTeam";

const ActivitesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const skip =
    typeof searchParams.skip === "string" ? Number(searchParams.skip) : 0;
  const take =
    typeof searchParams.take === "string" ? Number(searchParams.take) : 10;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  // const usrCount = await prisma.member.count();
  const members = await prisma.member.findMany({
    /*   where: {
    name: { contains: search as string, mode: "insensitive" },
  }, */
  });
  const activites = await prisma.activite.findMany({
    take: take,
    skip: skip,
    /*     include: {
        department: true,
      }, */
    /*     include: {
        address: true,
        zone: true,
      }, */
    where: {
      name: { contains: search as string, mode: "insensitive" },
    },
    select: {
      id: true,
      name: true,
      date: true,

      comments: true,
      //users: true,
      //  company: true,
    },
    orderBy: {
      date: "asc",
    },
  });
  return (
    <GlobalLayout
      title="Activités de l'église"
      desc="Agenda des activités du campus ICC Bruxelles pour l'équipe photo"
      add={{
        name: "Nouvelle activité",
        compo: (
          <ActiviteForm
            action="Nouvelle activité"
            desc="Ajouter une nouvelle activité dans l'agenda de l'équipe photo."
            openDialog={false}
          />
        ),
        bred: <CustomBreadcrumb name="Activités" />,
      }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Activité</TableHead>
            <TableHead className="">En service</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activites
            .sort(
              (a: any, b: any) =>
                Date.parse(b.date.split("-").reverse().join("-")) -
                Date.parse(a.date.split("-").reverse().join("-"))
            )
            .map((activite) => (
              <TableRow
                key={activite.id}
                className={activite.date < "TODAY" ? `text-gray-400` : ""}
              >
                <TableCell>
                  <p className="text-black font-medium">{activite.date} </p>
                  <p className="">{activite.name} </p>
                </TableCell>
                <TableCell className=" ">
                  <ServiceTeam
                    openDialog={false}
                    action="toto"
                    activite={activite}
                    desc="dododo"
                    members={members}
                  />
                </TableCell>
                <TableCell className="text-right flex items-center gap-6">
                  <DeleteActivite
                    action="Supprimer activité"
                    desc="Supprimer une activité de l'équipe photo."
                    openDialog={false}
                    activite={activite}
                  />
                  <ActiviteForm
                    action="Editer activité"
                    desc="Editer une activté de l'équipe photo."
                    openDialog={false}
                    type="M"
                    activite={activite}
                  />
                  {activite.comments && <MdComment />}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </GlobalLayout>
  );
};

export default ActivitesPage;

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
