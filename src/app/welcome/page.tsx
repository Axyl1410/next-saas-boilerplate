import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function WelcomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="space-y-4 text-center">
      <div>Welcome {session.user.name}</div>
      <Link
        className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        href="/dashboard"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
