"use client";

import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { addToast } from "@heroui/toast";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useReducer, useState } from "react";

import { containerVariants } from "../../components/constants";

import { LoadingProgress } from "@/components/loading";
import { signIn } from "@/lib/auth-client";
import { formReducerLogin } from "@/reducer";
import { ActionLoginType, initialStateLogin } from "@/types";

interface EmailFormProps {
  onBackClick: () => void;
}

export default function EmailForm({ onBackClick }: EmailFormProps) {
  const [state, dispatch] = useReducer(formReducerLogin, initialStateLogin);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionLoginType.UPDATE_EMAIL, payload: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionLoginType.UPDATE_PASSWORD,
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = state.email;
    const password = state.password;
    const rememberMe = isSelected;

    if (!email || !password) {
      addToast({
        title: "Error",
        description: "Please enter your email and password",
        color: "danger",
      });

      return;
    }

    await signIn.email(
      {
        email,
        password,
        rememberMe,
        callbackURL: "/dashboard",
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
      },
    );
  };

  return (
    <motion.div
      key="email-form"
      animate="visible"
      className="flex h-full flex-col gap-4"
      initial="hidden"
      variants={containerVariants}
    >
      <Form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          required
          label="Email address"
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

        <div className="flex items-center">
          <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
            Remember me
          </Checkbox>
        </div>

        <Button className="w-full" color="primary" type="submit">
          Sign In
        </Button>
      </Form>
      <div>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </div>

      <div>
        <Button
          className="w-full"
          startContent={
            <Icon icon="ic:baseline-keyboard-backspace" width={20} />
          }
          variant="flat"
          onPress={onBackClick}
        >
          Other Sign In options
        </Button>
      </div>
      <p className="mt-4 text-center text-sm">
        Forgot your password? &nbsp;
        <Link className="text-primary text-sm" href="/reset-password">
          Forgot Password
        </Link>
      </p>
      {loading && <LoadingProgress />}
    </motion.div>
  );
}
