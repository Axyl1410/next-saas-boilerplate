import { LoadingProgress } from "@/components/loading";
import { authClient } from "@/lib/auth-client";
import { Alert } from "@heroui/alert";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitted, setSubmitted] = useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));

      setSubmitted(data as Record<string, FormDataEntryValue>);

      setIsLoading(true);

      if (!submitted?.email) {
        return;
      }

      const { error } = await authClient.requestPasswordReset({
        email: submitted.email as string,
        redirectTo: "/reset-password",
      });

      if (error) {
        throw error;
      } else {
        setIsSuccess(true);
      }
    } catch {
      addToast({
        title: "Error",
        description: "An unexpected error occurred",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isSuccess ? (
        <Alert
          color="success"
          title="Please check your email inbox for a link to complete the reset."
        />
      ) : (
        <>
          <p className="text-default-500">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
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
        </>
      )}
      {isLoading && <LoadingProgress />}
    </>
  );
}
