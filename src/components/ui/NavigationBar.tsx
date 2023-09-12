"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="bg-neutral-900 container fixed left-1/2 top-0 z-50 -translate-x-1/2 pb-4 pt-4 lg:bg-transparent lg:pb-0 lg:pt-8 lg:dark:bg-transparent">
        <div className="flex flex-wrap items-center justify-between mx-10">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo.svg" width={40} height={40} alt="brand logo" />
            <span className="text-xl font-bold text-neutral-50">Onyx</span>
          </Link>
          <div className="order-3 w-full md:order-1 md:w-auto">
            <div
              id="example-panel"
              aria-hidden="false"
              className=""
              style={{ height: "auto" }}
            >
              <div>
                <ul
                  className={cn([
                    "bg-neutral-900 mt-12 md:mt-0 h-screen md:h-auto md:flex flex-col space-y-4 md:space-y-0 text-2xl md:text-sm md:flex-row md:items-center md:rounded md:border border-neutral-700",
                    navbar ? "block" : "hidden",
                  ])}
                >
                  {" "}
                  <li>
                    <Link
                      className="text-neutral-400 hover:text-neutral-50 inline-block md:pb-3 pt-6 transition-colors md:py-3 md:pl-4 md:pr-6 border-y md:border-y-0 border-neutral-700 pb-6 w-full"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-400 hover:text-neutral-50 inline-block transition-colors md:px-6 md:pb-3 md:pt-3 md:border-b-0 border-b w-full border-neutral-700 pb-6"
                      href="/#features"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-400 hover:text-neutral-50 inline-block transition-colors md:px-6 md:pb-3 md:pt-3 border-b w-full border-neutral-700 pb-6 md:border-b-0"
                      href="/#mission"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-400 hover:text-neutral-50 inline-block transition-colors md:px-6 md:pb-3 md:pt-3 border-b w-full border-neutral-700 pb-6 md:border-b-0"
                      href="/#faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-neutral-400 hover:text-neutral-50 inline-block transition-colors md:px-6 md:pb-3 md:pt-3 border-b w-full border-neutral-700 pb-6 md:border-b-0"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="order-2 flex items-center">
            <li>
              <Link
                className="hover:bg-neutral-800 text-neutral-100 border border-neutral-700 hover:border-transparent flex w-full items-center justify-center gap-2 rounded px-6 py-2 font-medium transition-colors lg:w-auto"
                href="/login"
              >
                Login{" "}
              </Link>
            </li>
            <li className="inline-block md:hidden">
              <button
                className="flex items-center px-2"
                aria-expanded="true"
                aria-controls="example-panel"
                onClick={() => setNavbar(!navbar)}
              >
                <span className="sr-only">Open Menu</span>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-neutral-400 hover:text-neutral-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-neutral-400 hover:text-neutral-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
