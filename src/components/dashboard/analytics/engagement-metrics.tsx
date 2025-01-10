"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const dailyData = [
  { date: "Mon", comments: 145, dms: 89, likes: 230 },
  { date: "Tue", comments: 167, dms: 92, likes: 245 },
  { date: "Wed", comments: 188, dms: 105, likes: 290 },
  { date: "Thu", comments: 156, dms: 94, likes: 266 },
  { date: "Fri", comments: 201, dms: 118, likes: 310 },
  { date: "Sat", comments: 187, dms: 108, likes: 275 },
  { date: "Sun", comments: 143, dms: 85, likes: 240 },
];

const engagementRate = [
  { date: "Mon", rate: 3.2 },
  { date: "Tue", rate: 3.5 },
  { date: "Wed", rate: 3.8 },
  { date: "Thu", rate: 3.4 },
  { date: "Fri", rate: 4.0 },
  { date: "Sat", rate: 3.7 },
  { date: "Sun", rate: 3.3 },
];

export function EngagementMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-full lg:col-span-4">
        <CardHeader>
          <CardTitle>Daily Engagement</CardTitle>
          <CardDescription>Comments, DMs, and likes over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={dailyData}>
              <Tooltip />
              <Bar dataKey="comments" fill="#8884d8" stackId="stack" />
              <Bar dataKey="dms" fill="#82ca9d" stackId="stack" />
              <Bar dataKey="likes" fill="#ffc658" stackId="stack" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-3">
        <CardHeader>
          <CardTitle>Engagement Rate</CardTitle>
          <CardDescription>Average engagement rate per post</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={engagementRate}>
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
