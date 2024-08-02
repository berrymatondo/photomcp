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

  children: React.ReactNode;
};

const GlobalLayout = ({
  title,
  desc,
  add,
  back,
  children,
}: GlobalLayoutProps) => {
  const router = useRouter();
  return (
    <div className="flex my-2 px-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-sky-600">
            <p className="flex items-center justify-between">
              {title}{" "}
              {back ? <MdArrowBack onClick={() => router.back()} /> : ""}
            </p>
          </CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
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
