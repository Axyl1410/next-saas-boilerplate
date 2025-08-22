"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useState } from "react";

export default function SignIn() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div>SignIn</div> <div>SignIn</div> <div>SignIn</div> <div>SignIn</div>{" "}
      <div>SignIn</div> <div>SignIn</div> <div>SignIn</div> <div>SignIn</div>
      {!hidden && (
        <>
          <div>SignIn</div> <div>SignIn</div> <div>SignIn</div>{" "}
        </>
      )}
      <Link href="/sign-up">sign up</Link>
      <Button onPress={() => setHidden(!hidden)}>
        {hidden ? "Show" : "Hide"}
      </Button>
    </div>
  );
}
