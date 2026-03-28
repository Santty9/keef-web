export default function DashboardCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}