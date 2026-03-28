import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex w-full justify-center">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/register"
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "bg-white/[0.05] border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.10)] backdrop-blur-2xl rounded-[32px]",
            headerTitle: "text-white",
            headerSubtitle: "text-zinc-400",
            socialButtonsBlockButton:
              "bg-white/5 border border-white/10 text-white hover:bg-white/10",
            formButtonPrimary:
              "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 hover:opacity-95 text-white shadow-[0_0_30px_rgba(217,70,239,0.30)]",
            formFieldInput:
              "bg-black/30 border border-white/10 text-white placeholder:text-zinc-500",
            footerActionLink: "text-fuchsia-300 hover:text-fuchsia-200",
          },
        }}
      />
    </div>
  );
}