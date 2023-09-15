"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChangePasswordForm({ className, ...props }: UserAuthFormProps) {
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
          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="firstname">
              New Password
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="newPassword"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="newPassword"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-neutral-500 text-xs" htmlFor="password">
              Confirm new password
            </Label>
            <Input
              className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none "
              id="confirmPassword"
              placeholder=""
              type="password"
              autoComplete="confirmPassword"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex my-8">
          <Button
            variant="outline"
            disabled={isLoading}
            style={{ borderRadius: "0.3rem" }}
          >
            {isLoading && "Loading ..."}
            {!isLoading && "Change Password"}
          </Button>
        </div>
      </form>
    </div>
  );
}
