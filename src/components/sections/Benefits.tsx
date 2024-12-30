"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import CountUp from "react-countup";
import img from "../../../public/Organic Social Media Strategy Hero.svg";

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-background shadow-xl ">
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
                <CountUp
                  end={65}
                  duration={3}
                  enableScrollSpy={true}
                  suffix="%"
                  className="text-4xl font-bold text-primary-foreground"
                />

                <p className="text-sm text-muted-foreground">
                  Increase in time saved by easing your social engagement
                </p>
              </div>
              <div>
                <CountUp
                  end={40}
                  duration={3}
                  enableScrollSpy={true}
                  suffix="%"
                  className="text-4xl font-bold text-primary-foreground"
                />

                <p className="text-sm text-muted-foreground">
                  Increase in number of leads generated
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <Button className="bg-white text-lg py-6 px-6 rounded-[5px] hover:bg-white/85 shadow-xl ">
                Sign Up <ArrowRight className=" h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={img}
              alt="Platform benefits"
              width={600}
              height={400}
              className="rounded-lg  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
