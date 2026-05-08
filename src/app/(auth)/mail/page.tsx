const MailPage = dynamic(() => import("@/app/mail/index"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const ComposeButton = dynamic(
  () => import("@/app/mail/components/compose-button"),
  {
    ssr: false,
  },
);

const WebhookDebugger = dynamic(
  () => import("@/app/mail/components/webhook-debugger"),
  {
    ssr: false,
  },
);

import { ModeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-4">
          <UserButton />
          <ModeToggle />
          <ComposeButton />
          {process.env.NODE_ENV === "development" && <WebhookDebugger />}
        </div>
      </div>
      <MailPage />
    </>
  );
}
