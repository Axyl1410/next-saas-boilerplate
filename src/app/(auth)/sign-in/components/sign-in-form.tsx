"use client";

import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import EmailForm from "./email-form";
import EmailFormSkeleton from "./email-form-skeleton";
import SocialLogin from "./social-login";
import SocialLoginSkeleton from "./social-login-skeleton";

export default function SignInForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEmailClick = () => {
    setIsFormOpen(true);
  };

  const handleBackClick = () => {
    setIsFormOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {!isFormOpen ? (
        <Suspense fallback={<SocialLoginSkeleton />}>
          <SocialLogin onEmailClick={handleEmailClick} />
        </Suspense>
      ) : (
        <Suspense fallback={<EmailFormSkeleton />}>
          <EmailForm onBackClick={handleBackClick} />
        </Suspense>
      )}
    </AnimatePresence>
  );
}
