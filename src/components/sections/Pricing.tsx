"use client";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { plans } from "../../lib/staticData";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple,{" "}
            <span className="bg-Primary text-transparent bg-clip-text">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-SecondaryText max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={!isYearly ? "font-medium" : "text-SecondaryText"}>
              Monthly
            </span>
            <Switch
              className="text-Primary"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span
              className={isYearly ? "font-medium" : "text-muted-foreground"}
            >
              Yearly <span className="text-sm text-Primary">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.recommended
                  ? "border-Primary shadow-lg shadow-Primary/20"
                  : "border-border"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-Secondary text-PrimaryBackground text-sm rounded-full font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Recommended
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <p className="text-SecondaryText">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-SecondaryText">
                    {plan.price.monthly === 0
                      ? ""
                      : `/${isYearly ? "year" : "month"}`}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-Secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className={plan.recommended ? "" : "pt-12"}>
                <Button className="w-full bg-Primary text-PrimaryBackground ">
                  Get started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
