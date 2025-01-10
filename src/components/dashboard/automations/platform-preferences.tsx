"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type Platform = "instagram" | "facebook";
type Feature = "likes" | "comments" | "dms";

type PlatformPreference = {
  [key in Platform]: {
    [key in Feature]: boolean;
  };
};

const initialPreferences: PlatformPreference = {
  instagram: { likes: true, comments: true, dms: true },
  facebook: { likes: true, comments: true, dms: true },
};

export function PlatformPreferences() {
  const [preferences, setPreferences] =
    useState<PlatformPreference>(initialPreferences);

  const handleToggle = (platform: Platform, feature: Feature) => {
    setPreferences((prev) => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [feature]: !prev[platform][feature],
      },
    }));
  };

  const handleSave = () => {
    // Here you would typically save these settings to your backend
    console.log("Saving platform preferences:", preferences);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Platform Preferences</CardTitle>
          <CardDescription>
            Configure automation features for each platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(preferences).map(([platform, features]) => (
            <div key={platform} className="space-y-4">
              <h3 className="text-lg font-semibold capitalize">{platform}</h3>
              {Object.entries(features).map(([feature, isEnabled]) => (
                <div
                  key={feature}
                  className="flex items-center justify-between"
                >
                  <Label
                    htmlFor={`${platform}-${feature}`}
                    className="capitalize"
                  >
                    {feature}
                  </Label>
                  <Switch
                    id={`${platform}-${feature}`}
                    checked={isEnabled}
                    onCheckedChange={() =>
                      handleToggle(platform as Platform, feature as Feature)
                    }
                  />
                </div>
              ))}
            </div>
          ))}
          <Button onClick={handleSave}>Save Platform Preferences</Button>
        </CardContent>
      </Card>
    </div>
  );
}
