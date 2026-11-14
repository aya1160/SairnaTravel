export default function Eyebrow({ icon: Icon, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-soft-teal px-3.5 py-[5px] text-[11px] font-black tracking-[0.12px] text-primary-deep ${className}`}
    >
      {Icon && <Icon size={13} strokeWidth={1.85} className="text-primary" aria-hidden="true" />}
      {children}
    </span>
  );
}