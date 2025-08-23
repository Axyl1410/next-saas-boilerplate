"use client";

import SignupForm from "./components/signup-form";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl">Sign Up</div>
      <p className="text-default-500">
        Enter your information to create an account.
      </p>
      <SignupForm />
    </div>
  );
}
