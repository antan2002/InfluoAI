import { cookies } from "next/headers";
import dynamic from "next/dynamic";

const Mail = dynamic(
  () =>
    import("@/app/mail/components/mail").then((mod) => ({ default: mod.Mail })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    ),
  },
);

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout:mail");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden h-screen flex-col overflow-scroll md:flex">
        <Mail
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
