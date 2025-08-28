import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useReducer, useState } from "react";

import { LoadingProgress } from "@/components/loading";
import { authClient } from "@/lib/auth-client";
import { formReducerEmail } from "@/reduce";
import { ActionEmailType, initialStateEmail } from "@/types";

export default function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, dispatch] = useReducer(formReducerEmail, initialStateEmail);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionEmailType.UPDATE_EMAIL, payload: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      const email = state.email;

      if (!email) {
        addToast({
          title: "Error",
          description: "Please enter your email",
          color: "danger",
        });
        setIsLoading(false);

        return;
      }

      const { error } = await authClient.requestPasswordReset({
        email,
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
              onChange={handleEmailChange}
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
