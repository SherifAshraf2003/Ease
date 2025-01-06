"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-PrimaryBackground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome Back to <span className="text-Primary">Ease</span>
            </h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-1">
              <Label className="text-SecondaryText" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-SecondaryText" htmlFor="password">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-Primary hover:text-Primary/90"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
              />
            </div>
            <Button
              className="w-full bg-Primary hover:bg-Primary/90 text-PrimaryBackground "
              size="lg"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 ">Or continue with</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full bg-PrimaryBackground  hover:bg-PrimaryBackground/50 text-PrimaryText hover:text-PrimaryText border-Primary border-[1px] "
            size="lg"
          >
            <svg className=" h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
          <div className="text-center text-sm ">
            Don't have an account ?{" "}
            <Link href="/sign-up" className="text-Primary ">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
