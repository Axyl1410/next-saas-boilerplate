"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { addToast } from "@heroui/toast";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducer, useState } from "react";

import { containerVariants } from "../../components/constants";

import { LoadingScreen } from "@/components/loading";
import { signUp } from "@/lib/auth-client";
import { convertImageToBase64 } from "@/lib/utils";
import { formReducerSignUp } from "@/reducer";
import { ActionSignUpType, initialStateSignUp } from "@/types";

export default function SignupForm() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(formReducerSignUp, initialStateSignUp);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionSignUpType.UPDATE_FIRST_NAME,
      payload: e.target.value,
    });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionSignUpType.UPDATE_LAST_NAME,
      payload: e.target.value,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionSignUpType.UPDATE_EMAIL, payload: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionSignUpType.UPDATE_PASSWORD,
      payload: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPasswordTouched(true);
    dispatch({
      type: ActionSignUpType.UPDATE_CONFIRM_PASSWORD,
      payload: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = state.firstName;
    const lastName = state.lastName;
    const email = state.email;
    const password = state.password;
    const confirmPassword = state.confirmPassword;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      addToast({
        title: "Error",
        description: "Please enter your email and password",
        color: "danger",
      });

      return;
    }

    await signUp.email(
      {
        name: firstName + " " + lastName,
        email,
        password,
        image: image ? await convertImageToBase64(image) : "",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onError: (ctx) => {
          setLoading(false);
          addToast({
            title: "Error",
            description: ctx.error.message,
            color: "danger",
          });
        },
        onSuccess: () => {
          onOpen();
          setLoading(false);
        },
      },
    );
  };

  return (
    <motion.div
      animate="visible"
      className="flex flex-col gap-4"
      initial="hidden"
      variants={containerVariants}
    >
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            required
            label="First name"
            type="text"
            variant="bordered"
            onChange={handleFirstNameChange}
          />
          <Input
            required
            label="Last name"
            type="text"
            variant="bordered"
            onChange={handleLastNameChange}
          />
        </div>

        <Input
          required
          label="Email"
          type="email"
          variant="bordered"
          onChange={handleEmailChange}
        />

        <Input
          required
          label="Password"
          type="password"
          variant="bordered"
          onChange={handlePasswordChange}
        />

        <Input
          required
          errorMessage={
            confirmPasswordTouched && state.password !== state.confirmPassword
              ? "Passwords do not match"
              : ""
          }
          isInvalid={
            confirmPasswordTouched && state.password !== state.confirmPassword
          }
          label="Confirm Password"
          type="password"
          variant="bordered"
          onChange={handleConfirmPasswordChange}
        />

        <div className="grid w-full gap-2">
          <label htmlFor="image">Profile Image (optional)</label>
          <div className="flex items-end gap-4">
            {imagePreview && (
              <div className="relative h-16 w-16 overflow-hidden rounded-sm">
                <Image
                  alt="Profile preview"
                  layout="fill"
                  objectFit="cover"
                  src={imagePreview}
                />
              </div>
            )}
            <div className="flex w-full items-center gap-2">
              <Input
                accept="image/*"
                className="w-full"
                id="image"
                type="file"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <button
                  aria-label="Remove image"
                  className="cursor-pointer"
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                >
                  X
                </button>
              )}
            </div>
          </div>
        </div>

        <Button className="w-full" color="primary" type="submit">
          Create account
        </Button>
      </Form>

      <div>
        <p className="mt-4 text-center text-sm">
          Already have an account? &nbsp;
          <Link className="text-primary text-sm" href="/sign-in">
            Log In
          </Link>
        </p>
      </div>
      {loading && <LoadingScreen />}
      <Modal isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registration Successful
              </ModalHeader>
              <ModalBody>
                <p>
                  You have successfully registered your account. Please check
                  your email to verify your account before signing in.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    window.location.href = "/sign-in";
                  }}
                >
                  Got it
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
