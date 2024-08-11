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
import { MdComment, MdComputer, MdLight, MdWork } from "react-icons/md";
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
import Link from "next/link";

const Process = () => {
  //const session = await auth();
  return (
    <GlobalLayout
      title="Fiches techniques"
      desc="Liste de toutes les fiches techniques de l'équipe photo"
      add={{
        bred: <CustomBreadcrumb name="Fiches techniques" />,
      }}
    >
      <div className="flex flex-col gap-4 text-sky-700">
        <p className="flex items-center gap-2">
          <MdWork size={25} className="text-purple-600" />
          <Link href="ft/service">Prise de service</Link>
        </p>{" "}
        <p className="flex items-center gap-2">
          <MdLight size={25} className="text-yellow-600" />
          <Link href="ft/lumiere">Utilisation de la lumière</Link>
        </p>
        <p className="flex items-center gap-2">
          <MdComputer size={25} className="text-green-600" />
          <Link href="ft/drive">Dépôt des photos sur le drive</Link>
        </p>
      </div>
    </GlobalLayout>
  );
};

export default Process;

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
