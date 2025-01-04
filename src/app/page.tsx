"use client";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
}
