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
import { MdComment } from "react-icons/md";
import MemberForm from "@/components/team/memberForm";
import DeleteMember from "@/components/team/deleteMember";
import prisma from "@/lib/prisma";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Member } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";

const TeamPage = async ({
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
    //take: take,
    //skip: skip,
    /*     include: {
      department: true,
    }, */
    /*     include: {
      address: true,
      zone: true,
    }, */
    where: {
      lastname: { contains: search as string, mode: "insensitive" },
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      mobile: true,
      comments: true,
      status: true,
      staann: true,
      //users: true,
      //  company: true,
    },
    orderBy: {
      status: "asc",
    },
  });

  // console.log("members:", members);

  //const session = await auth();
  return (
    <GlobalLayout
      title="Equipe Photo"
      desc="Liste des membres actifs de l'équipe photo du MCP"
      add={{
        name: "Nouveau membre",
        compo: (
          <MemberForm
            action="Nouveau Membre"
            desc="Ajouter un nouveau membre dans l'équipe photo."
            openDialog={false}
          />
        ),
        bred: <CustomBreadcrumb name="Equipe" />,
      }}
    >
      {/*       <ScrollArea className="hidden h-[550px]">
       */}{" "}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Membre</TableHead>
            <TableHead className="">Téléphone</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member: any) => (
            <TableRow
              key={member.id}
              className={
                member.status == "RETIRE"
                  ? "text-red-600"
                  : member.status == "INACTIF"
                  ? `text-gray-400`
                  : ""
              }
            >
              <TableCell>
                <div className="flex items-end gap-1">
                  <span className="font-medium">{member.lastname} </span>
                  {member.comments && <MdComment className="text-teal-600" />}
                </div>
                {member.firstname}
              </TableCell>
              <TableCell className="">{member.mobile}</TableCell>
              <TableCell className="text-right flex items-center gap-6">
                <DeleteMember
                  action="Supprimer Membre"
                  desc="Supprimer un membre de l'équipe photo."
                  openDialog={false}
                  member={member}
                />
                <MemberForm
                  action="Editer Membre"
                  desc="Editer un membre de l'équipe photo."
                  openDialog={false}
                  type="M"
                  member={member}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/*       </ScrollArea>
       */}{" "}
    </GlobalLayout>
  );
};

export default TeamPage;

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
