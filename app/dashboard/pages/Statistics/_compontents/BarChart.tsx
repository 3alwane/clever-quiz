"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { day: "Monday", XP: 186 },
  { day: "Tuesday", XP: 305 },
  { day: "Wensday", XP: 237 },
  { day: "Thursday", XP: 73 },
  { day: "Friday", XP: 209 },
  { day: "Saturady", XP: 214 },
  { day: "Sunday", XP: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ExperienceChart() {
  return (
    <ChartContainer className="h-64 mt-24" config={chartConfig}>
      <BarChart
        data={chartData}
        width={300} // adjust width as needed
        height={200} // increase this value for taller bars
        accessibilityLayer
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="XP" // Use "XP" to match the data in chartData
          fill="var(--color-desktop)"
          barSize={60} // Adjust thickness as needed
          radius={8}
        />
      </BarChart>
    </ChartContainer>
  );
}
