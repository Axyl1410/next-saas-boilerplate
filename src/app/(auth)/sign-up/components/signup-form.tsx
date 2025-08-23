"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { containerVariants } from "../../components/constants";

export default function SignupForm() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input type="text" label="First name" variant="bordered" required />
        </div>
        <div>
          <Input type="text" label="Last name" variant="bordered" required />
        </div>
      </div>

      <div>
        <Input type="email" label="Email" variant="bordered" required />
      </div>

      <div>
        <Input type="password" label="Password" variant="bordered" required />
      </div>

      <div>
        <Input
          type="password"
          label="Confirm Password"
          variant="bordered"
          required
        />
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Profile Image (optional)
          </label>
          <div className="border-default-300 bg-background flex items-center gap-3 rounded-lg border p-3 dark:bg-transparent">
            <Button variant="flat" size="sm" className="shrink-0">
              Choose File
            </Button>
            <span className="text-default-500 text-sm">No file chosen</span>
          </div>
        </div>
      </div>

      <div>
        <Button color="primary" className="w-full">
          Create account
        </Button>
      </div>

      <div>
        <p className="mt-4 text-center text-sm">
          Already have an account? &nbsp;
          <Link href="/sign-in" className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
