import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Signup | Onyx",
  description: "Sign up to Onyx and Manage your job applications.",
};
export default function Signup() {
  return (
    <div className="container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">
            Create an Onyx Account
          </h1>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
