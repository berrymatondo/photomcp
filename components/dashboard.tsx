"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import { Separator } from "./ui/separator";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

type DashboardProps = {
  members: any;
  mbrDel: any;
  mbrIna: any;
  activites: any;
  actByMonth: any;
};
const Dashboard = ({
  members,
  mbrDel,
  mbrIna,
  activites,
  actByMonth,
}: DashboardProps) => {
  console.log("actByMonth:", actByMonth);

  return (
    <div className="flex gap-2 max-md:flex-col">
      <Card className="max-w-xs" x-chunk="charts-01-chunk-4">
        <CardContent className="flex gap-4 p-4 pb-2">
          <ChartContainer
            config={{
              move: {
                label: "Move",
                color: "hsl(var(--chart-1))",
              },
              stand: {
                label: "Stand",
                color: "hsl(var(--chart-2))",
              },
              exercise: {
                label: "Exercise",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[140px] w-full"
          >
            <BarChart
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 10,
              }}
              data={[
                {
                  activity: "Membres actifs",
                  value:
                    ((members?.length - mbrDel?.length - mbrIna?.length) /
                      members?.length) *
                    100,
                  label: `${
                    members?.length - mbrDel?.length - mbrIna?.length
                  } / ${members?.length} `,
                  fill: "var(--color-stand)",
                },
                {
                  activity: "Membres inactifs",
                  value: (mbrIna?.length / members?.length) * 100,
                  label: `${mbrIna?.length} / ${members?.length} `,
                  fill: "var(--color-exercise)",
                },
                {
                  activity: "Membres retirés",
                  value: (mbrDel?.length / members?.length) * 100,
                  label: `${mbrDel?.length} / ${members?.length} `,
                  fill: "var(--color-move)",
                },
              ]}
              layout="vertical"
              barSize={32}
              barGap={2}
            >
              <XAxis type="number" dataKey="value" hide />
              <YAxis
                dataKey="activity"
                type="category"
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                className="capitalize"
              />
              <Bar dataKey="value" radius={5}>
                <LabelList
                  position="insideLeft"
                  dataKey="label"
                  fill="white"
                  offset={8}
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex flex-row border-t p-4">
          <div className="flex w-full items-center gap-2">
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-xs text-muted-foreground">Membres</div>
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                {members?.length - mbrDel?.length - mbrIna?.length}
                <span className="text-sm font-normal text-muted-foreground">
                  Actifs
                </span>
              </div>
            </div>
            <Separator orientation="vertical" className="mx-2 h-10 w-px" />
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-xs text-muted-foreground">Membres</div>
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                {mbrIna?.length}
                <span className="text-sm font-normal text-muted-foreground">
                  Inactifs
                </span>
              </div>
            </div>
            <Separator orientation="vertical" className="mx-2 h-10 w-px" />
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-xs text-muted-foreground">Membres</div>
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                {mbrDel?.length}
                <span className="text-sm font-normal text-muted-foreground">
                  retirés
                </span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Activtes / Mois en 2024</CardDescription>
        </CardHeader>
        <CardContent className="p-1">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={actByMonth}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={8}
                axisLine={false}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("fr-FR", {
                    month: "short",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="total" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
