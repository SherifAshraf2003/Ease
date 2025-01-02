"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import CountUp from "react-countup";
import img from "../../../public/Organic Social Media Strategy Hero.svg";

const Benefits = () => {
  return (
    <section className="py-24   ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-md  font-medium text-Secondary ">Engage</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-PrimaryText">
              Easily Revolutionize Your Social Media Engagement
            </h2>
            <p className=" mb-8 text-xl text-muted-foreground ">
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
                  className="text-4xl font-bold text-Secondary "
                />

                <p className="text-md text-muted-foreground">
                  Increase in time saved by easing your social engagement
                </p>
              </div>
              <div>
                <CountUp
                  end={40}
                  duration={3}
                  enableScrollSpy={true}
                  suffix="%"
                  className="text-4xl font-bold text-Secondary"
                />

                <p className="text-md text-muted-foreground">
                  Increase in number of leads generated
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-8">
              <button className="bg-Primary group flex justify-center items-center text-PrimaryBackground text-lg py-3 px-6 rounded-[5px] hover:bg-Primary/80 shadow-xl transition-all duration-300">
                <span className="mr-[2px]">Sign Up</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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
