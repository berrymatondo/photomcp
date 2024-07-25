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
import { deleteActivite } from "@/lib/_activiteActions";
import { Member } from "@prisma/client";

import { useState } from "react";
import { MdDelete, MdPeople } from "react-icons/md";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

type ActiviteFormProps = {
  openDialog: boolean;
  action?: string;
  desc?: string;
  activite?: any;
  members: any;
  moa: any;
};

const ServiceTeam = ({
  openDialog,
  activite,
  action,
  desc,
  moa,
  members,
}: ActiviteFormProps) => {
  const [open, setOpen] = useState(openDialog);
  // console.log("LOGGG ", activite?.members);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* <MdPeople className="text-teal-600" size={25} /> */}
          <div>
            {activite?.members?.map((el: any) => (
              <div key={el.id} className="flex items-center p-0 ">
                <p className="text-xs">{el.member.firstname}</p>
              </div>
            ))}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{activite.name}</DialogTitle>
            <DialogDescription>
              <div>
                {activite.date}
                <p className="text-black text-sm">{activite.comments}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-center font-bold text-lg">
              {"Membres en service"}
            </p>
            <ScrollArea className=" h-72 text-md w-full flex  rounded-md border">
              {/*               {members.map((member: Member) => (
                <div
                  key={member.id}
                  className=" border-b flex items-center space-x-2 m-2 p-2 "
                >
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {member.firstname}
                  </label>
                </div>
              ))} */}
              {activite?.members?.map((el: any) => (
                <div
                  key={el.id}
                  className=" border-b flex items-center space-x-2 m-2 p-2 "
                >
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {el.member.firstname}
                  </label>
                </div>
              ))}
            </ScrollArea>
          </div>
          <DialogFooter className="flex  gap-4">
            <div className=" flex justify-between">
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
                variant="empty"
                className=""
              >
                {"Annuler"}
              </Button>
              <form
                className="flex"
                action={() => {
                  "use serer";
                  deleteActivite(activite.id);
                  toast.success(`L'activité a été supprimée avec succès.`, {
                    description: new Date().toISOString().split("T")[0],
                  });
                  setOpen(!open);
                  //window.location.reload();
                }}
              >
                <Button className="" type="submit">
                  Enregistrer
                </Button>
              </form>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceTeam;
