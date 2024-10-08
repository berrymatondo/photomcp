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
  MdEdit,
  MdElectricBolt,
  MdLight,
  MdQuestionMark,
  MdSort,
  MdStop,
  MdUpload,
} from "react-icons/md";

const notifications = [
  {
    title: "Connexion au compte des photographes",
    description:
      "Se connection sur un des PC avec l'utilisateur -photostar- et le mot de pass -Nikon2017- ",
  },
  {
    title: "Copie des photos sur le disque d'un PC local",
    description:
      "Créer un dossier un ordinateur connecté au compte des photographes et copier vos photos de la carte SD à cet ordinateur",
  },
  {
    title: "Sélection des photos",
    description:
      "Supprimer les photos inexploitables, les doublons ainsi que celles qui se ressemblent fortement.",
  },
];

const boitier = [
  {
    title: "Via l'outil local",
    description:
      "Vous pouvez utiliser le programme installé par défaut sur le PC pour retoucher les photos",
  },
  {
    title: "ADOBE Lightroom",
    description:
      "Se connecter au cloud d'Adobe sur le compte du MCP et utiliser le logiciel Lightroom online",
  },
  {
    title: "Via l'appreil photo",
    description:
      "Les appareils photos, exemple le Nikon D750, offrent également des programmes de retouche basique",
  },
];

const arrets = [
  {
    title: "Connxion au drive",
    description:
      "Se connecter au drive du MCP(mcp.iccbxl@gmail.com) + mot de passe",
    image: chaire,
  },
  {
    title: "Dépôt sur le dossier",
    description:
      "Il suffit de faire un glisser-déposer des photos triés et retouchées dans le bon dossier",
    image: chaire,
  },
];

const DrivePage = () => {
  return (
    <GlobalLayout
      title="Dépôt des photos"
      desc="Ceci est un tutorial sur le tri et la sélection des photos"
      add={{
        bred: <CustomBreadcrumb name="Dépôt des photos" />,
      }}
      logo={<MdUpload className="text-yellow-600" />}
      back={true}
    >
      <div className="grid gap-4">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <p className="text-xl flex items-center gap-2 font-medium text-sky-600 py-2">
                  <MdSort className="text-green-600" /> Tri des photos
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
                  <MdEdit className="text-yellow-600" /> Retouche des photos
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
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                {" "}
                <p className="text-xl flex items-center gap-2 font-medium text-sky-600 py-2">
                  <MdUpload className="text-purple-600" />
                  {"Chargement sur le drive"}
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
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="pt-4 ">
          <CO />
        </div>
      </div>
    </GlobalLayout>
  );
};

export default DrivePage;

const CO = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Culte ordinaire</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] sm:max-h-[700px]">
        <DialogHeader>
          <DialogTitle>{"Cas d'un culte ordinaire"}</DialogTitle>
          <DialogDescription className="text-left flex flex-col gap-4">
            <p>
              Il faudrait créer le dossier du jour qui contiendra les
              sous-dossiers: Culte 1, Culte 2, Validation et Vignette
            </p>
            <p>
              <strong>Culte x:</strong> Contient un sous-dossier par photographe{" "}
            </p>
            <p>
              <strong>Validation:</strong> Contient les photos sélectionnées qui
              seront mises à disposition au pôle RS et autres{" "}
            </p>
            <p>
              <strong>Vignette:</strong> Contient les photos qui seront
              utilisées pour les vignettes Youtube principalement{" "}
            </p>
          </DialogDescription>
        </DialogHeader>
        {/*         <div className="grid gap-4 py-4 overflow-hidden">
          <Image
            alt="co"
            src={co}
            placeholder="blur"
            //  quality={100}
            //  fill
            //  sizes="100vw"
            className="object-cover z-10 rounded-lg"
          />
        </div> */}
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
