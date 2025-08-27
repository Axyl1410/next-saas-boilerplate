"use client";

import { Link } from "@heroui/link";
import { useSearchParams } from "next/navigation";
import EmailForm from "./components/email-form";

export default function ResetPassword() {
  const data = useSearchParams();
  const token = data.get("token");

  if (token) {
    return (
      <div>
        Reset your password
        <p>{token}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">Reset your password</div>
      <EmailForm />
      <div className="text-center">
        <Link className="text-primary text-sm hover:underline" href="/sign-in">
          Back to login
        </Link>
      </div>
    </div>
  );
}
