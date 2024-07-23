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

type GlobalLayoutProps = {
  title: string;
  desc: string;
  add?: any;

  children: React.ReactNode;
};

const GlobalLayout = ({ title, desc, add, children }: GlobalLayoutProps) => {
  return (
    <div className="flex my-2 px-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-sky-600">{title}</CardTitle>
          <CardDescription>{desc} </CardDescription>
        </CardHeader>
        <CardContent>
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
