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
  Label,
  LabelList,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import { Separator } from "./ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

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

      <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>Total des activités </CardDescription>
          <CardTitle className="text-4xl tabular-nums">
            {activites?.length}{" "}
            <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
              en 2024
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              total: {
                label: "Total",
                color: "hsl(var(--chart-3))",
              },
            }}
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: -4,
                right: -4,
              }}
              data={actByMonth}
            >
              <Bar
                dataKey="total"
                fill="var(--color-total)"
                radius={5}
                fillOpacity={0.6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                  });
                }}
              />
              <ChartTooltip
                defaultIndex={2}
                content={
                  <ChartTooltipContent
                    hideIndicator
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      });
                    }}
                  />
                }
                cursor={false}
              />
              <ReferenceLine
                y={1200}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                strokeWidth={1}
              >
                <Label
                  position="insideBottomLeft"
                  value="Moyenne par mois"
                  offset={activites.length / actByMonth.length}
                  fill="hsl(var(--foreground))"
                />
                <Label
                  position="insideTopLeft"
                  value={activites.length}
                  className="text-lg"
                  fill="hsl(var(--foreground))"
                  offset={10}
                  startOffset={100}
                />
              </ReferenceLine>
            </BarChart>
          </ChartContainer>
        </CardContent>
        {/*         <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            Over the past 7 days, you have walked{" "}
            <span className="font-medium text-foreground">53,305</span> steps.
          </CardDescription>
          <CardDescription>
            You need <span className="font-medium text-foreground">12,584</span>{" "}
            more steps to reach your goal.
          </CardDescription>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Dashboard;
