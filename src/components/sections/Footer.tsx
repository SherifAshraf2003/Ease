"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="font-bold text-xl text-primary-foreground">
            Ease
          </Link>
          <nav className="flex gap-8">
            <Link
              href="#"
              className="text-sm hover:text-primary-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary-foreground transition-colors"
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
  );
};

export default Footer;
