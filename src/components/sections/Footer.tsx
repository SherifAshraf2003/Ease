import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center ">
      <div className="container flex flex-col gap-8 py-8  ">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <Link
            href="/"
            className="flex items-center text-lg text-Primary font-semibold tracking-tight transition-colors "
          >
            Ease
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link
              href="/about"
              className="transition-colors hover:text-PrimaryText"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-PrimaryText"
            >
              Contact Us
            </Link>
            <Link
              href="/support"
              className="transition-colors hover:text-PrimaryText"
            >
              Support Center
            </Link>
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ease. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-PrimaryText transition-colors hover:text-PrimaryText/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-PrimaryText transition-colors hover:text-PrimaryText/80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
