import { Sparkles } from "lucide-react";
import { MOCK_EMAILS, MOCK_BAR_WIDTHS, SITE_CONFIG } from "@/lib/constants/landing";

export default function DashboardPreview() {
  return (
    <div
      className="glow-purple relative z-10 mx-auto mt-20 w-full max-w-5xl overflow-hidden rounded-2xl border border-black/10"
      style={{ background: "rgba(0,0,0,0.03)" }}
    >
      <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
        <div className="mx-4 flex h-6 flex-1 items-center rounded-md bg-black/5 px-3">
          <span className="text-xs text-black/20">app.mailix.io/mail</span>
        </div>
      </div>
      <div className="grid h-96 grid-cols-12">
        <div className="col-span-2 flex flex-col gap-1 border-r border-black/5 p-3">
          <div
            className="mb-4 h-8 w-8 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #E8D5AE, #F4EAD2)",
            }}
          />
          {["Inbox", "Sent", "Drafts"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-black/10 text-black" : "text-black/30"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="col-span-4 flex flex-col gap-2 border-r border-black/5 p-3">
          <div className="mb-2 flex h-7 items-center rounded-md bg-black/5 px-3">
            <span className="text-xs text-black/20">Search emails...</span>
          </div>
          {MOCK_EMAILS.map((email) => (
            <div
              key={email.name}
              className={`cursor-pointer rounded-lg p-3 ${email.unread ? "bg-black/5" : ""}`}
            >
              <div className="mb-1 flex items-start justify-between">
                <span
                  className={`text-xs font-medium ${email.unread ? "text-black" : "text-black/40"}`}
                >
                  {email.name}
                </span>
                <span className="text-[10px] text-black/20">
                  {email.time}
                </span>
              </div>
              <p className="truncate text-[10px] text-black/40">
                {email.subject}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-4 border-r border-black/5 p-4">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: "rgba(255,244,214,0.2)",
                color: "#E8D5AE",
              }}
            >
              K
            </div>
            <div>
              <p className="text-xs font-medium text-black">Kai</p>
              <p className="text-[10px] text-black/30">alerts@kai.com</p>
            </div>
          </div>
          <div className="space-y-2">
            {MOCK_BAR_WIDTHS.map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-black/10"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2 p-3">
          <div className="mb-2 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-[#BCF429]" />
            <span className="text-[10px] text-black/40">Ask AI</span>
          </div>
          <div className="rounded-lg bg-black/5 p-2 text-[9px] text-black/40">
            What is the mail from Kai about?
          </div>
          <div
            className="rounded-lg p-2 text-[9px] text-black/60"
            style={{
              background: "rgba(255,244,214,0.1)",
              border: "1px solid rgba(255,244,214,0.2)",
            }}
          >
            Kai is asking for feedback to improve their product...
          </div>
        </div>
      </div>
    </div>
  );
}
