"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

type MemberFormProps = {
  openDialog: boolean;
  action: string;
  desc: string;
  member: any;
};

const DeleteMember = ({
  openDialog,
  member,
  action,
  desc,
}: MemberFormProps) => {
  const [open, setOpen] = useState(openDialog);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <MdDelete className="text-red-600" size={20} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{action}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-center">
              Supprimer le membre{" "}
              <strong className="text-red-600">{member.firstname}</strong> ?
            </p>
          </div>
          <DialogFooter className="flex  gap-4">
            <Button type="button">Annuler</Button>
            <Button className="text-red-600" variant="outline" type="submit">
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteMember;
