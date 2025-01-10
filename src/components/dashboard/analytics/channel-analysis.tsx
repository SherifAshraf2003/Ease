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
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const platformData = [
  { name: "Instagram", value: 65 },
  { name: "Facebook", value: 35 },
];

const COLORS = ["#8884d8", "#82ca9d"];

const engagementByPlatform = [
  { platform: "Instagram", comments: 856, dms: 432, likes: 1543 },
  { platform: "Facebook", comments: 645, dms: 234, likes: 987 },
];

export function ChannelAnalysis() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Platform Distribution</CardTitle>
          <CardDescription>Engagement split between platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Engagement by Platform</CardTitle>
          <CardDescription>Breakdown of engagement metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementByPlatform}>
              <Tooltip />
              <Bar dataKey="comments" fill="#8884d8" />
              <Bar dataKey="dms" fill="#82ca9d" />
              <Bar dataKey="likes" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
