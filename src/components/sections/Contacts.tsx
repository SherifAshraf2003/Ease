"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sherifelamir2003@gmail.com",
      link: "mailto:sherifelamir2003@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1093200715",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "21 hussein hegazy St, Ismailia, Egypt",
      link: "https://www.google.com/maps/@30.5900996,32.2676849,20.25z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative flex justify-center items-center overflow-hidden bg-Primary/40 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-purple-300 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-black/40 blur-3xl" />
      </div>

      <div className="container  px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          <div className=" flex justify-center ">
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2 text-center"
              >
                <h2 className="text-3xl  text-PrimaryText font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-PrimaryText/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help you with any questions or support you may
                  need.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-none bg-white/50 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <a
                        href={item.link}
                        className="flex items-center gap-4"
                        target={item.icon === MapPin ? "_blank" : undefined}
                        rel={
                          item.icon === MapPin
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <div className="rounded-full  p-3 text-primary transition-colors  group-hover:text-primary-foreground">
                          <item.icon className="h-5 w-5 text-Primary group-hover:text-Primary/70 " />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-SecondaryText ">
                            {item.label}
                          </div>
                          <div className="font-medium text-PrimaryText ">
                            {item.value}
                          </div>
                        </div>
                        <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-50" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
