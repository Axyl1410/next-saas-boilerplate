import {
  ActionLoginType,
  EmailState,
  FormEmailAction,
  FormLoginAction,
  FormResetPasswordAction,
  LoginState,
  PasswordState,
} from "@/types";

export function formReducerLogin(state: LoginState, action: FormLoginAction) {
  switch (action.type) {
    case ActionLoginType.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ActionLoginType.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export const formReducerResetPassword = (
  state: PasswordState,
  action: FormResetPasswordAction,
) => {
  return { ...state, password: action.payload };
};

export const formReducerEmail = (
  state: EmailState,
  action: FormEmailAction,
) => {
  return { ...state, email: action.payload };
};
