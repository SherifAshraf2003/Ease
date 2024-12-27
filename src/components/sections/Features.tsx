"use client";
import { Card } from "../ui/card";
import Image from "next/image";
import { Box } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Unlock the Power of Social Media Engagement
        </h2>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 space-y-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/30 hover:to-background">
              <Box className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comment-triggered DM Automation
              </h3>
              <p className="text-muted-foreground">
                Automatically send DMs when users comment on your posts,
                enhancing engagement effortlessly.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/30 hover:to-background">
              <Box className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart DM Responses</h3>
              <p className="text-muted-foreground">
                Respond instantly to keywords with tailored messages, ensuring
                relevant interactions every time.
              </p>
            </Card>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="Features illustration"
              width={300}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:col-span-2 space-y-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/30 hover:to-background">
              <Box className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Dual-action Engagement
              </h3>
              <p className="text-muted-foreground">
                Like comments and send DMs simultaneously, maximizing your
                engagement potential with every interaction.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/30 hover:to-background">
              <Box className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                AI-powered Messaging
              </h3>
              <p className="text-muted-foreground">
                Utilize AI to craft personalized messages, making every
                conversation feel unique and meaningful.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
