"use client";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-PrimaryBackground backdrop-blur-sm z-50 border-b border-primary/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl text-Primary">
          Ease
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#features"
            className="hover:text-black/70 text-PrimaryText  transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-black/70 text-PrimaryText transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#contacts"
            className="hover:text-black/70 text-PrimaryText transition-colors"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-Primary text-base text-PrimaryText py-5 px-6 hover:bg-white/85 shadow-lg  transition-all duration-300 rounded-[3px] ">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
