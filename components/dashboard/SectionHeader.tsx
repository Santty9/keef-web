export default function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/70">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-2 text-2xl font-black text-white">{title}</h3>
      </div>

      {action ? action : null}
    </div>
  );
}