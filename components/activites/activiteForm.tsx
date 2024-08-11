"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";

import * as z from "zod";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { ActiviteSchema } from "@/lib/schemas";
import {
  createActivite,
  getActivite,
  updateActivite,
} from "@/lib/_activiteActions";
import { Badge } from "../ui/badge";

type ActiviteFormProps = {
  openDialog: boolean;
  action: string;
  desc: string;
  type?: string;
  activite?: any;
};

const ActiviteForm = ({
  openDialog,
  action,
  desc,
  type,
  activite,
}: ActiviteFormProps) => {
  const [open, setOpen] = useState(openDialog);

  const [loading, setLoading] = useState(false);
  const [readActivite, setReadActivite] = useState(activite);

  // console.log("usr:  ", activite);
  //console.log("readMember:  ", readActivite);

  const form = useForm<z.infer<typeof ActiviteSchema>>({
    resolver: zodResolver(ActiviteSchema),
    defaultValues: {
      id: activite ? readActivite.id : undefined,
      name: activite ? readActivite.name : "",
      date: activite ? readActivite.date.split("-").reverse().join("-") : "",
      comments: activite ? readActivite.comments : "",
    },
  });

  useEffect(() => {
    const fetchNewData = async (idd: any) => {
      const resu = await getActivite(idd);
      const dat = resu?.data;
      setReadActivite(dat);

      form.setValue("name", dat?.name as string);
      form.setValue("date", dat?.date.split("-").reverse().join("-") as string);

      form.setValue("comments", dat?.comments as string);

      //console.log("IDd  ", dat);
    };
    if (activite) fetchNewData(activite.id);
  }, [form, activite?.id, activite, open]);

  const procesForm = async (values: z.infer<typeof ActiviteSchema>) => {
    setLoading(true);
    //console.log("Value: ", values);
    //console.log("activite: ", activite);

    // const result = await registerUser(values);
    let res;
    if (activite) res = await updateActivite(values);
    else res = await createActivite(values);

    if (!res) {
      console.log("Une erreur est srvenue...");
    }

    if (res?.error) {
      //console.log(res?.error);
      setLoading(false);
      toast.error(` ${res?.error}`, {
        description: new Date().toISOString().split("T")[0],
      });
      return;
    }

    if (activite)
      toast.success(`L'activité a été mise à jour avec succès.`, {
        description: new Date().toISOString().split("T")[0],
      });
    else
      toast.success(`L'activité a été créée avec succès.`, {
        description: new Date().toISOString().split("T")[0],
      });

    setLoading(false);
    form.reset();
    setOpen(false);
    //router.push("/admin/countries");
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="md:hidden" asChild>
          {type == "M" ? (
            <MdEdit className="text-sky-600" size={20} />
          ) : (
            <Button className="w-full bg-sky-600">{action}</Button>
          )}
        </DialogTrigger>

        <DialogTrigger className="max-md:hidden" asChild>
          {type == "M" ? (
            <Badge className="p-2 max-md:hidden bg-sky-600 hover:bg-sky-400  hover:cursor-pointer">
              {action}
            </Badge>
          ) : (
            <Badge className="max-md:hidden bg-sky-600 hover:bg-sky-400  hover:cursor-pointer">
              {action}
            </Badge>
          )}
          {/*           {type == "M" ? (
            <>
              <MdEdit className="md:hidden text-sky-600" size={20} />
              <Badge className="max-md:hidden bg-sky-600 hover:bg-sky-400 hover:cursor-pointer">
                Editer
              </Badge>
            </>
          ) : (
            <>
              <Button className="md:hidden w-full bg-sky-600">{action}</Button>
              <Badge className="max-md:hidden bg-sky-600 hover:bg-sky-400 hover:cursor-pointer">
                Editer
              </Badge>
            </>
          )} */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{action}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </DialogHeader>
          {/*           <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Prénom
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Téléphone
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div> */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(procesForm)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex gap-4 justify-between items-center">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Non de l'activité"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer le nom"
                                type="text"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Date de l'activité"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer la date"
                                type="date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <>
                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full">
                            <FormLabel>{"Notes"}</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Entrer une note"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="w-full">
                  {loading ? "En cours de traitemnt ..." : "Enregistrer"}
                </Button>
              </div>
            </form>
          </Form>
          {/* 
          <DialogFooter className="flex gap-4">
            {type == "M" && (
              <Button type="button" variant="outline">
                Annuler
              </Button>
            )}
            <Button type="submit">Enregistrer</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActiviteForm;
