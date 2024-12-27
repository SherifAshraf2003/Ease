"use client";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 border-b border-primary/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary-foreground">
          Ease
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#features"
            className="hover:text-primary-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-primary-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#support"
            className="hover:text-primary-foreground transition-colors"
          >
            Support
          </Link>
          <div className="relative group">
            <button className="hover:text-primary-foreground transition-colors">
              Resources
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
