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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import GlobalLayout from "@/components/all/globalLayout";
import {
  MdCamera,
  MdElectricBolt,
  MdHandshake,
  MdLight,
  MdPinEnd,
  MdQuestionMark,
  MdStop,
  MdWork,
} from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";

const notifications = [
  {
    title: "Actions de grâces",
    description:
      "Rendre des actions de grâce au Seigneur pour le souffle de vie et pour le service qui va commencer",
  },
  {
    title: "Laisser la place au Saint-Esprit",
    description:
      "Le service est avant tou spirituel, demander au Saint-Esprit de nous remplir, nous guider et nous revêtir de puissance et d'onction afin de rendre un service qui lui soit agréable",
  },
  {
    title: "Sujet libre",
    description: "Laisser vous conduire par le Saint-Esprit ...",
  },
];

const boitier = [
  {
    title: "Vérification du matériel",
    description:
      "Vérifier que le patériel pris (appareil photo, batterie et carte SD) est bien fonctionnel",
  },
  {
    title: "Batterie en charge",
    description:
      "Si toutes les betteries ne sont pas utilisées, garder toute (au moins) une en charge",
  },
  {
    title: "Dispatching",
    description:
      "Faire le dispatching de l'équipe: photographes et lumière. S'encourager mutuellement, être complémentaire et assister les nouveaux qui ont rejoints l'équipe",
  },
];

const arrets = [
  {
    title: "Vérification du matériel",
    description:
      "Vérifier que le patériel pris (appareil photo, batterie et carte SD) est bien fonctionnel",
  },
  {
    title: "Ranger correctement le matériel",
    description: "-",
    image: chaire,
  },
  {
    title: "Eteindre la lumière et l'airCo en sortant du bureau",
    description: "-",
    image: proj1,
  },
];

const ServicePage = () => {
  return (
    <GlobalLayout
      title="Prise de service"
      desc="Voici quelques lignes directrices pour le service à la photographie "
      add={{
        bred: <CustomBreadcrumb name="Prise de service" />,
      }}
      logo={<MdCamera className="text-purple-600" />}
      back={true}
    >
      <div className="grid gap-4">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <p className="text-xl flex items-center gap-2 font-medium text-sky-600 py-2">
                  <FaPrayingHands className="text-green-600" /> La prière
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
                <p className="text-xl flex items-center gap-2 font-medium text-sky-600 py-2">
                  <MdWork className="text-yellow-600" /> Entrée en service
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

                  {/*                   <div className="container">
                    <CO />
                  </div> */}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                {" "}
                <p className="text-xl flex items-center gap-2 font-medium text-sky-600 py-2">
                  <MdPinEnd className="text-red-600" />
                  {"Fin du service"}
                </p>
              </AccordionTrigger>
              <AccordionContent className=" ml-0">
                <div>
                  {arrets.map((notification, index) => (
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
          </Accordion>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default ServicePage;

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
  //console.log("img: ", img.src);

  return (
    <Dialog>
      <DialogTrigger asChild className="px-0">
        <Button variant="empty" className="">
          <div className="relative w-12 h-12  overflow-hidden ">
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
            src={img}
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

const CustomBreadcrumb = ({ name }: { name: string }) => {
  return (
    <Breadcrumb className=" mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ft">Fiches tech</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
