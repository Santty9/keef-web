export default function PrimaryButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.28)] transition hover:opacity-95 ${className}`}
    >
      {children}
    </button>
  );
}