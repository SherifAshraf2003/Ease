"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const sentimentData = [
  { hour: "00:00", positive: 45, neutral: 30, negative: 25 },
  { hour: "04:00", positive: 35, neutral: 40, negative: 25 },
  { hour: "08:00", positive: 55, neutral: 25, negative: 20 },
  { hour: "12:00", positive: 65, neutral: 20, negative: 15 },
  { hour: "16:00", positive: 60, neutral: 25, negative: 15 },
  { hour: "20:00", positive: 50, neutral: 30, negative: 20 },
];

export function CustomerSentiment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Sentiment</CardTitle>
        <CardDescription>Sentiment analysis by time of day</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={sentimentData}>
            <Tooltip />
            <Bar
              dataKey="positive"
              name="Positive"
              fill="#4ade80"
              stackId="stack"
            />
            <Bar
              dataKey="neutral"
              name="Neutral"
              fill="#94a3b8"
              stackId="stack"
            />
            <Bar
              dataKey="negative"
              name="Negative"
              fill="#f87171"
              stackId="stack"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
