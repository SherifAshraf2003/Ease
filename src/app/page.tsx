"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const testimonials = [
    {
      quote: "Our engagement rates skyrocketed after using Ease!",
      author: "Alice Johnson",
      role: "Marketing Manager, XYZ Corp",
      stars: 5,
    },
    {
      quote: "The automated responses saved us hours each week!",
      author: "Michael Smith",
      role: "Social Media Lead, ABC Inc.",
      stars: 5,
    },
    {
      quote: "Ease has made our customer interactions feel personal again.",
      author: "Sarah Lee",
      role: "Community Manager, DEF Ltd.",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Ease
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#support"
              className="hover:text-primary transition-colors"
            >
              Support
            </Link>
            <div className="relative group">
              <button className="hover:text-primary transition-colors">
                Resources
              </button>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign Up</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            Transform Your Social Media
            <br />
            Engagement Effortlessly
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            With Ease, automate your Instagram and Facebook interactions
            seamlessly. Engage your audience with personalized responses and
            never miss an opportunity to connect.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center mb-16"
            variants={fadeInUp}
          >
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={fadeInUp}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-muted rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Platform preview"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium">Engage</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Easily Revolutionize Your Social Media Engagement
              </h2>
              <p className="text-muted-foreground mb-8">
                With Ease, save valuable time while enhancing your engagement.
                Capture leads and foster meaningful connections with every
                interaction.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold">65%</div>
                  <p className="text-sm text-muted-foreground">
                    Increase in time saved by easing your social engagement
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold">40%</div>
                  <p className="text-sm text-muted-foreground">
                    Increase in number of leads generated
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button>Learn More</Button>
                <Button variant="outline">
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

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unlock the Power of Social Media Engagement
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 space-y-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
                <Box className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Comment-triggered DM Automation
                </h3>
                <p className="text-muted-foreground">
                  Automatically send DMs when users comment on your posts,
                  enhancing engagement effortlessly.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
                <Box className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Smart DM Responses
                </h3>
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
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
                <Box className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Dual-action Engagement
                </h3>
                <p className="text-muted-foreground">
                  Like comments and send DMs simultaneously, maximizing your
                  engagement potential with every interaction.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
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

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Content will be added here */}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="py-24 bg-gradient-to-br from-blue-50/50 to-white"
        id="pricing"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Options</h2>
            <p className="text-muted-foreground">
              Choose the plan that fits your business needs.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant={billingInterval === "monthly" ? "default" : "outline"}
                onClick={() => setBillingInterval("monthly")}
              >
                Monthly
              </Button>
              <Button
                variant={billingInterval === "yearly" ? "default" : "outline"}
                onClick={() => setBillingInterval("yearly")}
              >
                Yearly
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Basic Plan</h3>
                <div className="text-4xl font-bold">Free</div>
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
              <Button className="w-full">Get started</Button>
            </Card>
            <Card className="p-8 border-primary bg-gradient-to-br from-white to-blue-50/30">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Business Plan</h3>
                <div className="text-4xl font-bold">
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
              <Button className="w-full">Get started</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Customer Testimonials
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ease has transformed our social media engagement strategy.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you with any questions or support you may
                need.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:hello@relume.io"
                      className="text-muted-foreground"
                    >
                      hello@relume.io
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <a
                      href="tel:+1 (555) 000-0000"
                      className="text-muted-foreground"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-muted-foreground">
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

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="font-bold text-xl">
              Ease
            </Link>
            <nav className="flex gap-8">
              <Link
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                Support Center
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8">
            © 2024 Ease. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
