"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveContainer, Tooltip, Treemap } from "recharts";

const audienceData = [
  {
    name: "Demographics",
    children: [
      { name: "18-24", size: 35, color: "#8884d8" },
      { name: "25-34", size: 45, color: "#82ca9d" },
      { name: "35-44", size: 15, color: "#ffc658" },
      { name: "45+", size: 5, color: "#ff7300" },
    ],
  },
];

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, name, size } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: audienceData[0].children[index]?.color,
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
        }}
      />
      {width > 50 && height > 50 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {`${name} (${size}%)`}
        </text>
      )}
    </g>
  );
};

export function AudienceInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience Demographics</CardTitle>
        <CardDescription>Age distribution of engaged users</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <Treemap
            data={audienceData}
            dataKey="size"
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent />}
          >
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
