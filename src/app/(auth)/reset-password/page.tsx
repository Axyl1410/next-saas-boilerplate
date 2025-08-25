"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

import { useFormSubmit } from "@/hooks/use-form-submit";
import { authClient } from "@/lib/auth-client";

export default function ResetPassword() {
  const { submitted, handleSubmit } = useFormSubmit();

  const handle = async () => {
    if (!submitted?.email) {
      return;
    }
    const { error } = await authClient.requestPasswordReset({
      email: submitted.email as string,
      redirectTo: "/reset-password",
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">Reset your password</div>
      <p className="text-default-500">
        To reset your password, enter your email below and submit. An email will
        be sent to you with instructions about how to complete the process.
      </p>
      <Form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          name="email"
          type="email"
          variant="bordered"
        />
        <Button className="w-full" color="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="text-center">
        <Link className="text-primary hover:underline" href="/sign-in">
          Back to login
        </Link>
      </div>
      <Button onPress={handle}>Reset Password</Button>
    </div>
  );
}
