"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export default function SignupForm() {
  return (
    <div className="flex flex-col gap-4">
      {/* First Name and Last Name - Side by Side */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input type="text" label="First name" variant="bordered" required />
        </div>
        <div>
          <Input type="text" label="Last name" variant="bordered" required />
        </div>
      </div>

      {/* Email */}
      <div>
        <Input type="email" label="Email" variant="bordered" required />
      </div>

      {/* Password */}
      <div>
        <Input
          type="password"
          label="Password"
          variant="bordered"
          placeholder="Password"
          required
        />
      </div>

      {/* Confirm Password */}
      <div>
        <Input
          type="password"
          label="Confirm Password"
          variant="bordered"
          placeholder="Confirm Password"
          required
        />
      </div>

      {/* Profile Image Upload */}
      <div>
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Profile Image (optional)
          </label>
          <div className="border-default-300 bg-background flex items-center gap-3 rounded-lg border p-3">
            <Button variant="flat" size="sm" className="shrink-0">
              Choose File
            </Button>
            <span className="text-default-500 text-sm">No file chosen</span>
          </div>
        </div>
      </div>

      {/* Create Account Button */}
      <div>
        <Button color="primary" className="w-full">
          Create account
        </Button>
      </div>

      <div>
        <p className="mt-4 text-center">
          Already have an account? &nbsp;
          <Link href="/sign-in" className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
