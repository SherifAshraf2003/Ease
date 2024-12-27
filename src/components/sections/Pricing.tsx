"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Box } from "lucide-react";

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/50 to-background"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Pricing Options
          </h2>
          <p className="text-primary-foreground">
            Choose the plan that fits your business needs.
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant={billingInterval === "monthly" ? "default" : "secondary"}
              onClick={() => setBillingInterval("monthly")}
              className="text-primary-foreground hover:text-primary-foreground"
            >
              Monthly
            </Button>
            <Button
              variant={billingInterval === "yearly" ? "default" : "secondary"}
              onClick={() => setBillingInterval("yearly")}
              className="text-primary-foreground hover:text-primary-foreground"
            >
              Yearly
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-primary-foreground">
                Basic Plan
              </h3>
              <div className="text-4xl font-bold text-primary-foreground">
                Free
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Automated comment management
              </li>
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Customizable response templates
              </li>
            </ul>
            <Button className="w-full text-primary-foreground hover:text-primary-foreground">
              Get started
            </Button>
          </Card>
          <Card className="p-8 border-primary bg-gradient-to-br from-white to-blue-50/30">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-primary-foreground">
                Business Plan
              </h3>
              <div className="text-4xl font-bold text-primary-foreground">
                $29
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Engagement analytics dashboard
              </li>
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Keyword-triggered responses
              </li>
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Cross-platform support
              </li>
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                All Basic Plan features
              </li>
              <li className="flex items-center gap-2">
                <Box className="h-4 w-4" />
                Advanced analytics tools
              </li>
            </ul>
            <Button className="w-full text-primary-foreground hover:text-primary-foreground">
              Get started
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
