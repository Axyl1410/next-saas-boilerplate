"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { containerVariants } from "../../components/constants";

interface EmailFormProps {
  onBackClick: () => void;
}

export default function EmailForm({ onBackClick }: EmailFormProps) {
  return (
    <motion.div
      key="email-form"
      animate="visible"
      className="flex h-full flex-col gap-4"
      initial="hidden"
      variants={containerVariants}
    >
      <div>
        <Input required label="Email address" type="email" variant="bordered" />
      </div>

      <div>
        <Input required label="Password" type="password" variant="bordered" />
      </div>

      <div>
        <Button className="w-full" color="primary">
          Sign In
        </Button>
      </div>

      <div>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </div>

      <div>
        <Button
          className="w-full"
          startContent={
            <Icon icon="ic:baseline-keyboard-backspace" width={20} />
          }
          variant="flat"
          onPress={onBackClick}
        >
          Other Sign In options
        </Button>
      </div>
      <p className="mt-4 text-center text-sm">
        Forgot your password? &nbsp;
        <Link className="text-primary" href="/reset-password">
          Forgot Password
        </Link>
      </p>
    </motion.div>
  );
}
