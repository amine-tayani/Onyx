"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAccountForm({ className, ...props }: UserAuthFormProps) {
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
          <div>
            <p className="text-sm text-neutral-500">
              We effortlessly link job seekers with their desired positions,
              simplifying the entire application tracking process for a smoother
              and fairer job hunt
            </p>
          </div>

          <div className="mt-2 my-2">
            <p className="text-sm text-neutral-500">
              <Link
                href="/password-reset"
                className="text-neutral-300 hover:text-neutral-100"
              >
                Forgot your password?
              </Link>
            </p>
          </div>
          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="firstname">
              Email Address
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="email"
              placeholder="Your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
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
              placeholder="Your password"
              type="password"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex space-x-4 items-center my-8">
          <Button
            variant="outline"
            disabled={isLoading}
            style={{ borderRadius: "0.3rem" }}
            className=""
          >
            {/* {isLoading && <Spinner className="mr-2" />} */}
            {isLoading && "Loading ..."}
            Login
          </Button>
          <p className="text-sm text-neutral-500">
            Don{"'"}t have an account?{" "}
            <Link
              href="/signup"
              className="text-neutral-300 hover:text-neutral-100"
            >
              Create account {">"}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
