export const ActionEmailType = {
  UPDATE_EMAIL: "UPDATE_EMAIL",
};

export const ActionPasswordType = {
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
};

export const ActionLoginType = {
  ...ActionEmailType,
  ...ActionPasswordType,
};

export type EmailState = {
  email: string;
};

export type PasswordState = {
  password: string;
};

export type LoginState = {
  email: string;
  password: string;
};

export const initialStateEmail: EmailState = {
  email: "",
};
export const initialStatePassword: PasswordState = {
  password: "",
};

export const initialStateLogin: LoginState = {
  ...initialStateEmail,
  ...initialStatePassword,
};

export type FormLoginAction = {
  type: (typeof ActionLoginType)[keyof typeof ActionLoginType];
  payload: string;
};

export type FormResetPasswordAction = {
  type: (typeof ActionPasswordType)[keyof typeof ActionPasswordType];
  payload: string;
};

export type FormEmailAction = {
  type: (typeof ActionEmailType)[keyof typeof ActionEmailType];
  payload: string;
};
