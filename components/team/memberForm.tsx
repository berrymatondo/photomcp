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
import { MemberSchema } from "@/lib/schemas";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";

import * as z from "zod";
import { toast } from "sonner";
import { createMember, getMember, updateMember } from "@/lib/_memberActions";
import { MemberStatuses } from "@prisma/client";
import { Textarea } from "../ui/textarea";

type MemberFormProps = {
  openDialog: boolean;
  action: string;
  desc: string;
  type?: string;
  member?: any;
};

const MemberForm = ({
  openDialog,
  action,
  desc,
  type,
  member,
}: MemberFormProps) => {
  const [open, setOpen] = useState(openDialog);

  const [loading, setLoading] = useState(false);
  const [readMember, setReadMember] = useState(member);

  // console.log("usr:  ", member);
  //console.log("readMember:  ", readMember);

  const form = useForm<z.infer<typeof MemberSchema>>({
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      id: member ? readMember.id : undefined,
      firstname: member ? readMember.firstname : "",
      lastname: member ? readMember.lastname : "",
      email: member ? readMember.email : "",
      mobile: member ? readMember.mobile : "",
      comments: member ? readMember.comments : "",
      status: member ? readMember.status : undefined,
    },
  });

  useEffect(() => {
    const fetchNewData = async (idd: any) => {
      const resu = await getMember(idd);
      const dat = resu?.data;
      setReadMember(dat);

      form.setValue("firstname", dat?.firstname as string);
      form.setValue("lastname", dat?.lastname as string);
      form.setValue("mobile", dat?.mobile as string);
      form.setValue("email", dat?.email as string);
      form.setValue("comments", dat?.comments as string);
      form.setValue("status", dat?.status as MemberStatuses);

      //console.log("IDd  ", dat);
    };
    if (member) fetchNewData(member.id);
  }, [form, member?.id, member, open]);

  const procesForm = async (values: z.infer<typeof MemberSchema>) => {
    setLoading(true);
    //console.log("Value: ", values);
    //console.log("usr: ", member);

    // const result = await registerUser(values);
    let res;
    if (member) res = await updateMember(values);
    else res = await createMember(values);

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

    if (member)
      toast.success(`Le membre a été mis à jour avec succès.`, {
        description: new Date().toISOString().split("T")[0],
      });
    else
      toast.success(`Le membre a été créé avec succès.`, {
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
        <DialogTrigger asChild>
          {type == "M" ? (
            <MdEdit className="text-sky-600" size={20} />
          ) : (
            <Button className="w-full bg-sky-600">{action}</Button>
          )}
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
                      name="firstname"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Prénom"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer le prénom du membre"
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
                      name="lastname"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Nom"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer le nom du membre"
                                type="text"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Email"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer l'adresse mail email du membre"
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
                      name="mobile"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-1/2">
                            <FormLabel>{"Téléphone"}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Entrer le téélphone du membre"
                                type="text"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  {member && (
                    <>
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => {
                          return (
                            <FormItem className="w-1/2">
                              <FormLabel>Statut</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger id="framework">
                                  <SelectValue placeholder="Sélectionner un statut" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                  {Object.values(MemberStatuses)?.map(
                                    (ur: any) => (
                                      <SelectItem key={ur} value={ur}>
                                        {ur}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

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
                  )}
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

export default MemberForm;
