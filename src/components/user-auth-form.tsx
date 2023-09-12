"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4 mt-2">
          <div className="grid grid-cols-2 gap-x-3">
            <div className="grid gap-2">
              <Label className="text-neutral-500 text-xs" htmlFor="firstname">
                First Name
              </Label>
              <Input
                className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                id="firstName"
                placeholder="Your first name"
                type="text"
                autoCapitalize="none"
                autoComplete="firstName"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-neutral-500 text-xs" htmlFor="firstname">
                Last Name
              </Label>
              <Input
                className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
                id="lastName"
                placeholder="Your Last name"
                type="text"
                autoCapitalize="none"
                autoComplete="lastName"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="firstname">
              Your Email
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="email"
              placeholder="Type your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="location">
              Country
            </Label>
            <Combobox />
          </div>
          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="linkedin">
              Linkedin Profile
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="linkedin"
              placeholder="Type your Linkedin Profile"
              type="text"
              autoCapitalize="none"
              autoComplete="linkedin"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="password">
              Password
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="password"
              placeholder="Must be at least 12 characters"
              type="password"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className=" mt-6">
          <p className=" text-xs text-neutral-500">
            By clicking the button below, I agree to Onyx’s{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-neutral-300 hover:text-neutral-100"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex space-x-4 items-center my-8">
          <Button
            variant="outline"
            disabled={isLoading}
            style={{ borderRadius: "0.3rem" }}
            className=""
          >
            {isLoading && "loading..."}
            Continue
          </Button>
          <p className="text-sm text-neutral-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-neutral-300 hover:text-neutral-100 underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
