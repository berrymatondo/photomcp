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
import { MdEdit } from "react-icons/md";

const team = [
  {
    id: 1,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
  {
    id: 2,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
  {
    id: 3,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
  {
    id: 4,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
  {
    id: 5,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
  {
    id: 6,
    firstname: "Etia",
    mobile: "+490 45 67 89",
  },
];

const TeamPage = () => {
  return (
    <GlobalLayout
      title="Equipe Photo"
      desc="Liste des membres actifs de l'équipe photo du MCP"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Membre</TableHead>
            <TableHead className="">Téléphone</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {team.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.firstname}</TableCell>
              <TableCell className="">{invoice.mobile}</TableCell>
              <TableCell className="text-right">
                <MdEdit />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </GlobalLayout>
  );
};

export default TeamPage;
