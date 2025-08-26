import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";

import { ResetPasswordEmail } from "@/components/email/reset-password";
import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { resend } from "@/lib/resend";

export default function Home() {
  const handle = async () => {
    "use server";
    await resend.emails.send({
      from: "Axyl Team <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Reset your password",
      react: ResetPasswordEmail({
        userFirstname: "Truong",
        resetPasswordLink: "https://www.google.com",
      }),
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl justify-center text-center">
        <span className={title()}>Next.js Boilerplate &nbsp;</span>
        <span className={title({ color: "violet" })}>comprehensive&nbsp;</span>
        <br />
        <span className={title()}>A starter kit designed to</span>
        <div className={subtitle({ class: "mt-4" })}>
          help you launch your SaaS application in record time.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/sign-in"
        >
          Sign in
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Button onPress={handle}>test</Button>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
