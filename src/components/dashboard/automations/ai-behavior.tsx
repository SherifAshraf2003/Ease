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
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function AIBehavior() {
  const [tone, setTone] = useState(50);
  const [personalization, setPersonalization] = useState(50);
  const [useBusinessTerms, setUseBusinessTerms] = useState(true);
  const [businessTerms, setBusinessTerms] = useState(
    "product, service, customer satisfaction"
  );

  const handleSave = () => {
    // Here you would typically save these settings to your backend
    console.log("Saving AI behavior settings:", {
      tone,
      personalization,
      useBusinessTerms,
      businessTerms,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Behavior Settings</CardTitle>
          <CardDescription>
            Customize how the AI interacts with your audience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Tone</Label>
            <Slider
              value={[tone]}
              onValueChange={(value) => setTone(value[0])}
              max={100}
              step={1}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Formal</span>
              <span>Casual</span>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Personalization Level</Label>
            <Slider
              value={[personalization]}
              onValueChange={(value) => setPersonalization(value[0])}
              max={100}
              step={1}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Generic</span>
              <span>Highly Personalized</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="use-business-terms"
              checked={useBusinessTerms}
              onCheckedChange={setUseBusinessTerms}
            />
            <Label htmlFor="use-business-terms">
              Use Business-Specific Terminology
            </Label>
          </div>

          {useBusinessTerms && (
            <div className="space-y-2">
              <Label htmlFor="business-terms">
                Business Terms (comma-separated)
              </Label>
              <Textarea
                id="business-terms"
                value={businessTerms}
                onChange={(e) => setBusinessTerms(e.target.value)}
                placeholder="Enter business-specific terms..."
              />
            </div>
          )}

          <Button onClick={handleSave}>Save AI Behavior Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}
