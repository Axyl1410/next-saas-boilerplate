import { Suspense } from "react";

import SignupForm from "./components/signup-form";
import SignupFormSkeleton from "./components/signup-form-skeleton";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">Sign Up</div>
      <p className="text-default-500">
        Enter your information to create an account.
      </p>
      <Suspense fallback={<SignupFormSkeleton />}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
