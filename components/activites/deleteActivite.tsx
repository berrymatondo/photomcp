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

import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

type ActiviteFormProps = {
  openDialog: boolean;
  action: string;
  desc: string;
  activite: any;
};

const DeleteActivite = ({
  openDialog,
  activite,
  action,
  desc,
}: ActiviteFormProps) => {
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
              {"Supprimer l'activité "}
              <strong className="text-red-600">
                {activite.name} du {activite.date}
              </strong>{" "}
              ?
            </p>
          </div>
          <DialogFooter className="flex  gap-4">
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              variant="empty"
              className="w-full "
            >
              {"Annuler"}
            </Button>
            <form
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
              <Button
                className="w-full text-red-600"
                variant="outline"
                type="submit"
              >
                Confirmer
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteActivite;
