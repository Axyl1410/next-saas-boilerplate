import { Suspense } from "react";

import SignInForm from "./components/sign-in-form";
import Loading from "./loading";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl">Sign In</div>
      <Suspense fallback={<Loading />}>
        <SignInForm />
      </Suspense>
    </div>
  );
}
