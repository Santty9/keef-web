"use client";

import { useDashboard } from "@/components/dashboard/DashboardContext";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function PublicProfileButton({
  fullWidth = false,
  children,
}: {
  fullWidth?: boolean;
  children?: React.ReactNode;
}) {
  const { username } = useDashboard();

  return (
    <Link
      href={`/${username || "keef"}`}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <Eye size={18} />
      {children || "Ver perfil público"}
    </Link>
  );
}