"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { containerVariants } from "../../components/constants";

export default function SignupForm() {
  return (
    <motion.div
      animate="visible"
      className="flex flex-col gap-4"
      initial="hidden"
      variants={containerVariants}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input required label="First name" type="text" variant="bordered" />
        </div>
        <div>
          <Input required label="Last name" type="text" variant="bordered" />
        </div>
      </div>

      <div>
        <Input required label="Email" type="email" variant="bordered" />
      </div>

      <div>
        <Input required label="Password" type="password" variant="bordered" />
      </div>

      <div>
        <Input
          required
          label="Confirm Password"
          type="password"
          variant="bordered"
        />
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground text-sm font-medium">
            Profile Image (optional)
          </p>
          <div className="border-default-300 bg-background flex items-center gap-3 rounded-lg border p-3 dark:bg-transparent">
            <Button className="shrink-0" size="sm" variant="flat">
              Choose File
            </Button>
            <span className="text-default-500 text-sm">No file chosen</span>
          </div>
        </div>
      </div>

      <div>
        <Button className="w-full" color="primary">
          Create account
        </Button>
      </div>

      <div>
        <p className="mt-4 text-center text-sm">
          Already have an account? &nbsp;
          <Link className="text-primary text-sm" href="/sign-in">
            Log In
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
