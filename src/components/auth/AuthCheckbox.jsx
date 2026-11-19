function AuthCheckbox({ label, name, required = false, linkLabel, linkHref }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[11px]">
      <label className="flex items-center gap-[6px] text-[color:var(--muted)]">
        <input
          type="checkbox"
          name={name}
          required={required}
          className="cursor-pointer accent-[var(--primary)]"
        />
        {label}
      </label>

      {linkLabel && (
        <a href={linkHref} className="font-black text-[color:var(--primary)]">
          {linkLabel}
        </a>
      )}
    </div>
  );
}

export default AuthCheckbox;