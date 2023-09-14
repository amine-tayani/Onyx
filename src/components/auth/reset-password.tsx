"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ResetPasswordForm({ className, ...props }: UserAuthFormProps) {
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
          <Input
            className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
            id="email"
            placeholder="Email Address"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
          />
          <Button
            variant="outline"
            disabled={isLoading}
            style={{ borderRadius: "0.3rem" }}
            className=""
          >
            {isLoading && "loading..."}
            Recover Password
          </Button>
          <Link
            href="/login"
            className="text-neutral-400 hover:text-neutral-100 text-sm my-2"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
