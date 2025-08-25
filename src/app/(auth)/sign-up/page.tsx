import { Suspense } from "react";

import SignupForm from "./components/signup-form";
import Loading from "./loading";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">Sign Up</div>
      <p className="text-default-500">
        Enter your information to create an account.
      </p>
      <Suspense fallback={<Loading />}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
