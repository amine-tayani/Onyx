"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormSchema, createAccountSchema } from "./validators";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface Country {
  label: string;
  value: string;
}

export function CreateAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(createAccountSchema),
    mode: "onSubmit",
  });

  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const getCountries = async () => {
      const data = await fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select",
        {
          cache: "force-cache",
        }
      );
      const response = await data.json();
      setCountries(response.countries);
    };

    getCountries();
  }, []);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormSchema) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 mt-2">
            <div className="grid grid-cols-2 gap-x-3">
              <div className="grid gap-2">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-500 text-xs">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                          placeholder="Your first name"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-500 text-xs">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                          placeholder="Your last name"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-500 text-xs">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                        placeholder="Your email address"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                name="location"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-500 text-xs">
                      Location
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="text-neutral-500">
                          <SelectValue
                            className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                            placeholder="Select your country"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className="h-72">
                            <SelectGroup>
                              {countries.map((country) => (
                                <SelectItem
                                  key={country.value}
                                  value={country.value}
                                >
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                name="linkedin"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-500 text-xs">
                      LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                        placeholder="Your LinkedIn profile"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-500 text-xs">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 border-none"
                        placeholder="Your password"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className=" mt-6">
            <p className=" text-xs text-neutral-500">
              By clicking the button below, I agree to Onyx’s{" "}
              <Link
                href="/terms"
                className="text-neutral-300 hover:text-neutral-100"
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
              type="submit"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                ""
              )}
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
      </Form>
    </div>
  );
}
