"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const responseData = [
  { day: "Mon", ai: 85, template: 78 },
  { day: "Tue", ai: 88, template: 80 },
  { day: "Wed", ai: 92, template: 82 },
  { day: "Thu", ai: 89, template: 81 },
  { day: "Fri", ai: 90, template: 83 },
  { day: "Sat", ai: 87, template: 79 },
  { day: "Sun", ai: 86, template: 77 },
];

export function ResponseEffectiveness() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Response Effectiveness</CardTitle>
        <CardDescription>AI vs Template Response Rates</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={responseData}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="ai"
              name="AI Responses"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="template"
              name="Template Responses"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
