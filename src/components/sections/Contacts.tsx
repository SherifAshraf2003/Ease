"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-24 bg-gradient-to-br from-primary/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Get in Touch
            </h2>
            <p className=" mb-8 text-primary-foreground">
              We're here to help you with any questions or support you may need.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <div>
                  <div className="font-medium text-primary-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:hello@relume.io"
                    className=" text-primary-foreground"
                  >
                    hello@relume.io
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                <div>
                  <div className="font-medium text-primary-foreground">
                    Phone
                  </div>
                  <a
                    href="tel:+1 (555) 000-0000"
                    className="text-muted-foreground text-primary-foreground"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5" />
                <div>
                  <div className="font-medium text-primary-foreground">
                    Office
                  </div>
                  <div className="text-muted-foreground text-primary-foreground">
                    123 Sample St, Sydney, NSW 2000 AU
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src="/placeholder.svg"
              alt="Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
