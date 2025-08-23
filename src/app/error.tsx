"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <h2>Something went wrong!</h2>
          <p className="max-w-3xl text-center text-sm/6 text-balance">
            {error.message}
          </p>
          <div className="grid grid-cols-2 items-center justify-center gap-2">
            <Link
              isExternal
              href="https://github.com/Axyl1410/next-saas-boilerplate/issues/new"
            >
              <Button>Report Error on GitHub</Button>
            </Link>
            <Button color="primary" onPress={() => window.location.reload()}>
              Refresh
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
