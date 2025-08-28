import { Link } from "@heroui/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">Reset your password</div>
      {children}
      <div className="text-center">
        <Link className="text-primary text-sm hover:underline" href="/sign-in">
          Back to login
        </Link>
      </div>
    </div>
  );
}
