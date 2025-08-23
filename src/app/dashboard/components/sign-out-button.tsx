"use client";

import { LoadingScreen } from "@/components/loading";
import { signOut } from "@/lib/auth-client";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        disabled={loading}
        color="primary"
        onPress={() =>
          signOut({
            fetchOptions: {
              onResponse: () => {
                setLoading(false);
              },
              onRequest: () => {
                setLoading(true);
              },
              onError: (ctx) => {
                addToast({
                  title: "Something Wrong",
                  description: ctx.error.message,
                  color: "danger",
                });
              },
              onSuccess: async () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign Out
      </Button>
      {loading && <LoadingScreen />}
    </>
  );
}
