"use client";

import { useSearchParams } from "next/navigation";

import EmailForm from "./components/email-form";
import ResetForm from "./components/reset-form";

export default function ResetPassword() {
  const token = useSearchParams().get("token");

  if (token) {
    return <ResetForm />;
  }

  return <EmailForm />;
}
