import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Onyx",
  description: "Sign in to Onyx and Manage your job applications.",
};
export default function LoginPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Sign in to Onyx</h3>
        <p className="text-sm text-gray-500">
          Start creating short links with superpowers.
        </p>
      </div>
    </div>
  );
}
