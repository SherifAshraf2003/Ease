import Image, { StaticImageData } from "next/image";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { X } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4   h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <h2 className=" text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-PrimaryBackground group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200  w-full text-7xl  mx-auto flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-foreground">
          Automate in Minutes,{" "}
          <span className="font-bold text-Primary ">Not Hours</span>
        </h2>

        <div className="py-20 flex flex-col lg:flex-row items-center justify-center  dark:bg-black w-full gap-4 mx-auto px-8">
          <Card title="Connect Your Socials" icon="1">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName=" bg-Primary "
            />
          </Card>
          <Card title=" Set your trigger words" icon="2">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card title="Choose AI Magic or Custom Templates" icon="3">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-900"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
