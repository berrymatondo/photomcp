"use client";
import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

type GlobalLayoutProps = {
  title: string;
  desc: string;
  add?: any;
  back?: boolean;
  logo?: any;

  children: React.ReactNode;
};

const GlobalLayout = ({
  title,
  desc,
  add,
  back,
  logo,
  children,
}: GlobalLayoutProps) => {
  const router = useRouter();
  return (
    <div className="flex my-2 px-2 md:container">
      <Card className="w-full border-none">
        <CardHeader className="py-4 px-2">
          <CardTitle className="text-sky-600">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2">
                {logo}
                {title}{" "}
              </p>
              {back ? <MdArrowBack onClick={() => router.back()} /> : ""}
            </div>
          </CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          {add && add.bred}
          {add && add.compo}

          {children}
        </CardContent>
        {/*       <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
      </Card>
    </div>
  );
};

export default GlobalLayout;
