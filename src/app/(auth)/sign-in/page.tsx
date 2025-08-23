import SignInForm from "./components/sign-in-form";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl">Sign In</div>
      <SignInForm />
    </div>
  );
}
