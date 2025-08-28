import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { addToast } from "@heroui/toast";
import { redirect } from "next/navigation";
import { useState } from "react";

import { LoadingProgress } from "@/components/loading";
import { authClient } from "@/lib/auth-client";

interface ResetFormProps {
  token: string;
}

export default function ResetForm({ token }: ResetFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
      const password = String(formData.get("password") || "").trim();

      if (!password) {
        addToast({
          title: "Error",
          description: "Please enter your password",
          color: "danger",
        });
        setIsLoading(false);

        return;
      }

      const { error } = await authClient.resetPassword({
        newPassword: password,
        token,
      });

      if (error) {
        throw error;
      } else {
        onOpen();
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
      <p className="text-default-500">Please enter your new password below</p>
      <Form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          isRequired
          label="Password"
          name="password"
          type="password"
          variant="bordered"
        />
        <Button className="w-full" color="primary" type="submit">
          Reset password
        </Button>
      </Form>
      <Modal isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Password Reset Successful
              </ModalHeader>
              <ModalBody>
                <p>
                  Your password has been successfully reset. You can now use
                  your new password to log in to your account.
                </p>
                <p>
                  For security reasons, you will be logged out of all other
                  devices. You&apos;ll need to log in again with your new
                  password.
                </p>
                <p>
                  If you did not request this password reset or believe your
                  account has been compromised, please contact our support team
                  immediately.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    redirect("/sign-in");
                  }}
                >
                  Sign In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {isLoading && <LoadingProgress />}
    </>
  );
}
