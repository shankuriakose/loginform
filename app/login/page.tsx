// src/components/LoginForm.jsx
import React from "react";

// You would replace these with your actual logo and social icons
import MynaLogo from "@/public/next.svg";
import GoogleIcon from "@/public/globe.svg";
import AppleIcon from "@/public/vercel.svg";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* The background is a simplified version of the image. For an exact match, use a complex CSS gradient or an image. */}
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, #c3d9e8 0%, #d6e2c3 30%, #b8c7a6 60%, #f5f0d3 100%)",
          }}
        ></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white/50 p-8 shadow-xl backdrop-blur-md">
        <div className="mb-6 flex items-center justify-center gap-2">
          {/* Myna UI Logo and Name */}
          <img src={MynaLogo} alt="Myna UI Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Myna UI</h1>
        </div>

        <h2 className="mb-1 text-center text-2xl font-semibold">Login</h2>
        <p className="mb-6 text-center text-gray-500">Nice to see you again!</p>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white p-3 font-medium transition-colors hover:bg-gray-50">
            <img src={GoogleIcon} alt="Google Icon" className="h-5 w-5" />
            Login with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white p-3 font-medium transition-colors hover:bg-gray-50">
            <img src={AppleIcon} alt="Apple Icon" className="h-5 w-5" />
            Login with Apple
          </button>
        </div>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Email/Password Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="team@mynaul.com"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-green p-3 font-semibold text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
          >
            Sign In <span className="font-bold">→</span>
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="font-medium text-gray-600 hover:underline">
            Forgot Password?
          </a>
          <span className="ml-2">New to MynaUI?</span>
          <a
            href="#"
            className="ml-1 font-semibold text-primary-green hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 z-10 w-full text-center text-sm text-white">
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Status
          </a>
        </div>
        <p className="mt-2 text-gray-200">
          &copy; 2025 MynaUI All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default LoginForm;
