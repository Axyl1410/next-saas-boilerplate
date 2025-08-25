"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { addToast } from "@heroui/toast";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { containerVariants } from "../../components/constants";

import { socialButtons } from "./constants";

import { LoadingProgress } from "@/components/loading";
import { signIn } from "@/lib/auth-client";

interface SocialLoginProps {
  onEmailClick: () => void;
}

export default function SocialLogin({ onEmailClick }: SocialLoginProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick(provider: string) {
    await signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onError: (ctx) => {
          setLoading(false);
          addToast({
            title: "Something wrong",
            description: ctx.error.message,
            color: "danger",
          });
        },
        onSuccess: () => {
          setLoading(false);
        },
      },
    );
  }

  return (
    <motion.div
      key="social-login"
      animate="visible"
      className="flex h-full flex-col gap-4"
      initial="hidden"
      variants={containerVariants}
    >
      <div>
        <Button
          className="w-full"
          color="primary"
          startContent={<Icon icon="ic:baseline-email" width={24} />}
          onPress={onEmailClick}
        >
          Continue with Email
        </Button>
      </div>

      <div>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </div>

      {socialButtons.map((button) => (
        <div key={button.text}>
          <Button
            className="w-full"
            disabled={loading}
            startContent={
              <Icon
                className="text-default-500"
                icon={button.icon}
                width={button.icon === "cib:discord" ? 20 : 24}
              />
            }
            variant={button.variant}
            onPress={() => handleClick(button.provider)}
          >
            {button.text}
          </Button>
        </div>
      ))}

      <p className="mt-4 text-center text-sm">
        Need to create an account? &nbsp;
        <Link className="text-primary" href="/sign-up">
          Sign Up
        </Link>
      </p>

      {loading && <LoadingProgress />}
    </motion.div>
  );
}
