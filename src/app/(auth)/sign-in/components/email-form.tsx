"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./constants";

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
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <Input type="email" label="Email address" variant="bordered" required />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input type="password" label="Password" variant="bordered" required />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button color="primary" className="w-full">
          Sign In
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
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
      </motion.div>
    </motion.div>
  );
}
