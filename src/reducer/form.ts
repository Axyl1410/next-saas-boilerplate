import {
  ActionLoginType,
  ActionSignUpType,
  EmailState,
  FormEmailAction,
  FormLoginAction,
  FormResetPasswordAction,
  FormSignUpAction,
  LoginState,
  PasswordState,
  SignUpState,
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

export function formReducerSignUp(
  state: SignUpState,
  action: FormSignUpAction,
) {
  switch (action.type) {
    case ActionSignUpType.UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ActionSignUpType.UPDATE_LAST_NAME:
      return { ...state, lastName: action.payload };
    case ActionSignUpType.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ActionSignUpType.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case ActionSignUpType.UPDATE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
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
