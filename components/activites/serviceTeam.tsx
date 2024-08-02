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
  console.log("activite", activite.id);
  console.log("members", members);
  //console.log("moa", moa);

  const totor = [];
  for (let i = 0; i < members.length; i++) {
    let found = false;
    for (let j = 0; j < activite?.members[j]?.length || found; j++) {
      if (members[i].id == members[j].member.id) found = true;
    }

    if (!found) totor.push(members[i]);
  }

  console.log("totor", totor);

  const [open, setOpen] = useState(openDialog);
  const [global, setGlobal] = useState(members);
  const [serviceTeam, setServiceTeam] = useState<any>([]);
  console.log("LOGGGGGGGGGGGGGGGGGGG", global);

  let tempo = [...activite.members];
  let tempo1 = [...members];
  let tempo2 = [];
  for (let i = 0; i < members.length; i++) {
    tempo2.push({
      id: members[i].id,
      firstname: members[i].firstname,
      serv: false,
    });
    for (let j = 0; j < tempo.length; j++) {
      if (tempo2[i].id === tempo[j].member.id) tempo2[i].serv = true;
    }
  }

  // setServiceTeam(tempo2);

  // for(let i = 0; i < members.length; i++) {}

  const save = async (fo: FormData) => {
    // "use server";
    console.log("CEci est un test", fo);
    console.log("CEci est un test", fo.get("toto"));
  };

  const updateGlobal = (id: any) => {
    const clonedData = [...global];
    setGlobal(
      clonedData.map((d) => (d.id == id ? { ...d, serv: !d.serv } : d))
    );
    console.log("NEW GLOBAL: ", global);
  };

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
                  {/*                   <Checkbox id="terms" />
                   */}{" "}
                  <label
                    htmlFor="terms"
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {el.member.firstname}
                  </label>
                </div>
              ))}
              <p>-------------------</p>
              <form
                action={(f: FormData) => {
                  "use serer";
                  console.log("DATA", f.get("val"));
                  console.log("GLOBAL", global);

                  /*                   toast.success(`L'activité a été supprimée avec succès.`, {
                    description: new Date().toISOString().split("T")[0],
                  }); */
                  setOpen(!open);
                  //window.location.reload();
                }}
              >
                {global
                  ?.filter(
                    (o: any) =>
                      !activite?.members.some((i: any) => i.member.id === o.id)
                  )
                  .map((el: any) => (
                    <div
                      key={el.id}
                      className=" border-b flex items-center space-x-2 m-2 p-2 "
                    >
                      <Checkbox
                        name="val"
                        id="terms"
                        onClick={() => updateGlobal(el.id)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {el.firstname}
                      </label>
                    </div>
                  ))}
                <Button type="submit" className="w-full my-2">
                  Mettre à jour
                </Button>
              </form>
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
              <form className="flex" action={save}>
                <input name="toto" type="checkbox" />
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
