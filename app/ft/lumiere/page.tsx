import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import co from "../../../public/co.png";
import chaire from "../../../public/chair.jpeg";
import proj1 from "../../../public/proj1.jpeg";

const notifications = [
  {
    title: "Allumer les projecteurs de la chair (intérieur et extérieur)",
    description:
      "Ces projecteurs sont des lumières froides. Elles peuvent preuvent prendre 2 à 5 minutes pour s'allumer",
  },
  {
    title: "Allumer les projecteurs du rail et du mur",
    description:
      "Tous les projecteurs au dessus des chantres, des musiciens ainsi que ceux du rail du dessus de la caméra principale ",
  },
  {
    title: "Allumer les projecteurs du sol",
    description:
      "Il y au totale 8 projecteurs au sol. Il faut mettre sous tension la projecteur à droite de l'orateur, ce celui-ci qui alimente les projecteurs au sol derrière les chanrtes et les musiciens",
  },
];

const boitier = [
  {
    title: "Mettre le boitier sous tension",
    description:
      "Ceci se fait via l'intérieur de la rallonge paratgé avec la table de son",
  },
  {
    title: "Débrancher le câble mini-usb du boitier",
    description:
      "Pour utiliser le boitier il faut s'assurer que le boiter n'est pas rélié à l'ordinateur via le mini cable usb",
  },
  {
    title:
      "Choisir le type d'événement et appuyer sur les différents boutons du boitier en fonction de la configuration",
    description: "Différentes configurations:",
  },
];

const arrets = [
  {
    title: "Appuyer sur le bouton du boitier qui est allumé",
    description:
      "Ceci devra éteindre tous les boutons du boitier ainsi que les projecteurs de l'auditorium",
    image: chaire,
  },
  {
    title: "Eteindre les projecteurs de la chair (intérieur et extérieur)",
    description: "-",
    image: chaire,
  },
  {
    title: "Eteindre les projecteurs du rail et du mur",
    description: "-",
    image: proj1,
  },
  {
    title: "Eteindre les projecteurs du sol",
    description:
      "Ceci se fait manuellement derrière le projecteur au sol situé à droite de l'orateur",
    image: proj1,
  },
];

const LumierePage = () => {
  return (
    <div className="max-md:mx-1 md:container py-24">
      <Card className="">
        <CardHeader>
          <CardTitle className="uppercase">
            {"La lumière via le boitier"}
          </CardTitle>
          <CardDescription>
            {
              "Ceci est un tutorial sur l'utilisation de la lumière de l'auditorium principal"
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <p className="text-xl font-medium text-sky-600 py-2">
                    Mise sous tension
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {" "}
                  <p className="text-xl font-medium text-sky-600 py-2">
                    Comment utiliser le boitier
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    {boitier.map((notification, index) => (
                      <div
                        key={index}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="container">
                      <CO />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {" "}
                  <p className="text-xl font-medium text-sky-600 py-2">
                    {"Arrêt total"}
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    {arrets.map((notification, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[80px_1fr] gap-2 p-4"
                      >
                        {/*                         <div className="relative w-16 h-16 overflow-hidden">
                          <Image
                            alt="co"
                            src={chaire}
                            placeholder="blur"
                            //  quality={100}
                            fill
                            //  sizes="100vw"
                            className="object-cover z-10"
                          />
                        </div> */}
                        <BIG img={notification.image} />
                        <div
                          key={index}
                          className="mb-4 grid  items-start pd-2 last:mb-0 last:pb-0"
                        >
                          {/*                           <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                           */}{" "}
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
        {/*         <CardFooter>
          <Button className="w-full">Mark all as read</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default LumierePage;

const CO = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Culte ordinaire</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] sm:max-h-[700px]">
        <DialogHeader>
          <DialogTitle>{"Configuration d'un culte ordinaire"}</DialogTitle>
          {/*           <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-hidden">
          <Image
            alt="co"
            src={co}
            placeholder="blur"
            //  quality={100}
            //  fill
            //  sizes="100vw"
            className="object-cover z-10 rounded-lg"
          />
        </div>
        {/*         <DialogFooter>
          <Button type="submit">Quitter</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

type BigProps = {
  img: any;
};
const BIG = ({ img }: BigProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="empty">
          <div className="relative w-12 h-12  overflow-hidden">
            <Image
              alt="co"
              src={img}
              //placeholder="blur"
              //  quality={100}
              fill
              //  sizes="100vw"
              className="object-cover z-10"
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] sm:max-h-[700px]">
        <DialogHeader>
          <DialogTitle>{"Configuration d'un culte ordinaire"}</DialogTitle>
          {/*           <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-hidden">
          <Image
            alt="co"
            src={chaire}
            placeholder="blur"
            //  quality={100}
            //  fill
            //  sizes="100vw"
            className="object-cover z-10 rounded-lg"
          />
        </div>
        {/*         <DialogFooter>
            <Button type="submit">Quitter</Button>
          </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
