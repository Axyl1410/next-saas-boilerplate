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
      className="flex h-full flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <Input type="email" label="Email address" variant="bordered" required />
      </div>

      <div>
        <Input type="password" label="Password" variant="bordered" required />
      </div>

      <div>
        <Button color="primary" className="w-full">
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
          startContent={
            <Icon icon="ic:baseline-keyboard-backspace" width={20} />
          }
          variant="flat"
          onPress={onBackClick}
          className="w-full"
        >
          Other Sign In options
        </Button>
      </div>
      <p className="mt-4 text-center text-sm">
        Forgot your password? &nbsp;
        <Link href="/reset-password" className="text-primary">
          Reset password
        </Link>
      </p>
    </motion.div>
  );
}
