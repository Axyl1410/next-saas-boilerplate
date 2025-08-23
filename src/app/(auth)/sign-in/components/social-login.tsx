"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, socialButtons } from "./constants";

interface SocialLoginProps {
  onEmailClick: () => void;
}

export default function SocialLogin({ onEmailClick }: SocialLoginProps) {
  return (
    <motion.div
      key="social-login"
      className="flex h-full flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <Button
          color="primary"
          startContent={<Icon icon="ic:baseline-email" width={24} />}
          onPress={onEmailClick}
          className="w-full"
        >
          Continue with Email
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </motion.div>

      {socialButtons.map((button) => (
        <motion.div key={button.text} variants={itemVariants}>
          <Button
            startContent={
              <Icon
                className="text-default-500"
                icon={button.icon}
                width={button.icon === "cib:discord" ? 20 : 24}
              />
            }
            variant={button.variant}
            className="w-full"
          >
            {button.text}
          </Button>
        </motion.div>
      ))}

      <motion.div variants={itemVariants}>
        <p className="mt-4 text-center">
          Need to create an account? &nbsp;
          <Link href="/sign-up" className="text-primary">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
