"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto flex flex-col items-center justify-center gap-6 pt-36 text-center lg:pt-48">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl text-neutral-100">
        <span className="inline-block align-top max-w-[858.5px]">
          Unlock Your Dream Job
        </span>
      </h1>
      <p className="text-neutral-400 leading-normal tracking-tight md:text-base md:leading-7">
        <span
          className="inline-block align-top max-w-[703px]"
          style={{ textDecoration: "inherit" }}
        >
          Say goodbye to the chaos of scattered applications, missed
          opportunities, and endless spreadsheets. Onyx empowers you to take
          control of your job search, helping you organize and track your every
          step of the way.
        </span>
      </p>
      <div className="flex w-full items-center lg:w-auto">
        <Link
          className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border-none flex w-full items-center justify-center gap-2 rounded px-6 py-2 font-medium transition-colors lg:w-auto"
          href="/#features"
        >
          Explore More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 stroke-neutral-100"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
