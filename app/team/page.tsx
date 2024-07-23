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
import MemberForm from "@/components/team/memberForm";
import DeleteMember from "@/components/team/deleteMember";

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
      add={{
        name: "Nouveau membre",
        compo: (
          <MemberForm
            action="Nouveau Membre"
            desc="Ajouter un nouveau membre dans l'équipe photo."
            openDialog={false}
          />
        ),
      }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Membre</TableHead>
            <TableHead className="">Téléphone</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {team.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium">{member.firstname}</TableCell>
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
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </GlobalLayout>
  );
};

export default TeamPage;
