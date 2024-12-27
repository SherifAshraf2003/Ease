"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary-foreground">
              Engage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-primary-foreground">
              Easily Revolutionize Your Social Media Engagement
            </h2>
            <p className=" mb-8 text-primary-foreground">
              With Ease, save valuable time while enhancing your engagement.
              Capture leads and foster meaningful connections with every
              interaction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-foreground">
                  65%
                </div>
                <p className="text-sm text-muted-foreground">
                  Increase in time saved by easing your social engagement
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground">
                  40%
                </div>
                <p className="text-sm text-muted-foreground">
                  Increase in number of leads generated
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                variant="secondary"
                className="text-primary-foreground hover:text-primary-foreground"
              >
                Sign Up <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Platform benefits"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
