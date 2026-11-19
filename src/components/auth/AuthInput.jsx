import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function AuthInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  autoComplete,
  dir,
  minLength,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-[12px] font-extrabold">{label}</span>

      <div className="flex h-[55px] items-center gap-[10px] rounded-[11px] border border-[color:var(--border)] px-[13px] text-[color:var(--muted)] transition-all duration-200 focus-within:border-[color:var(--primary)] focus-within:shadow-[0_0_0_3px_rgba(16,169,154,.09)]">
        {Icon && <Icon size={19} className="shrink-0" aria-hidden="true" />}

        <input
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          dir={dir}
          minLength={minLength}
          required={required}
          className="min-w-0 w-full flex-1 bg-transparent text-[12px] text-[color:var(--text)] outline-none placeholder:text-[#a5b4bc]"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={
              showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
            }
            className="grid place-items-center p-[5px] text-[color:var(--muted)]"
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        )}
      </div>
    </label>
  );
}

export default AuthInput;