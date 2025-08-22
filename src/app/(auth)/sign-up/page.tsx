import { Link } from "@heroui/link";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-4">
      <div>SignUp</div> <div>SignUp</div> <div>SignUp</div> <div>SignUp</div>{" "}
      <Link href="/sign-in">sign in</Link>
    </div>
  );
}
