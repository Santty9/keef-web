export default function DashboardInput({
  placeholder,
  textarea = false,
}: {
  placeholder: string;
  textarea?: boolean;
}) {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        className="min-h-[140px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
    />
  );
}