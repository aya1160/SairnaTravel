import { Link } from "react-router-dom";
import { Info, Sparkles } from "lucide-react";

import AuthVisual from "./AuthVisual";

// note اختياري: مربع المعلومات يلي بآخر الفورم بتصميم المدرب
function AuthLayout({
  badge,
  title,
  highlight,
  subtitle,
  onSubmit,
  error,
  note,
  switchText,
  switchLabel,
  switchTo,
  children,
}) {
  return (
    <section className="bg-[var(--bg)] pb-[78px] pt-[54px] max-[650px]:pb-12 max-[650px]:pt-[26px]">
      <div className="mx-auto w-[min(1216px,calc(100%_-_68px))] max-[1150px]:w-[min(1216px,calc(100%_-_48px))] max-[650px]:w-[calc(100%_-_34px)]">
        <div className="grid min-h-[610px] grid-cols-2 overflow-hidden rounded-[25px] border border-[color:var(--border)] bg-[var(--surface)] [box-shadow:var(--shadow)] max-[650px]:grid-cols-1">
          <div className="flex flex-col justify-center px-[min(6vw,80px)] py-[49px] max-[900px]:p-[36px] max-[650px]:px-[23px] max-[650px]:py-[29px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--soft-teal)] px-[14px] py-[5px] text-[11px] font-black tracking-[.12px] text-[color:var(--primary-deep)]">
                <Sparkles
                  size={13}
                  className="text-[color:var(--primary)]"
                  aria-hidden="true"
                />
                {badge}
              </span>

              <h1 className="mb-[5px] mt-3 text-[30px] tracking-[-.7px] max-[650px]:text-[27px]">
                {title}{" "}
                <span className="text-[color:var(--primary)]">{highlight}</span>
              </h1>

              <p className="mb-3 text-[12px] text-[color:var(--muted)]">
                {subtitle}
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="mb-[15px] mt-[25px] flex flex-col gap-[17px]"
            >
              {children}

              {error && (
                <p
                  role="alert"
                  className="rounded-[10px] bg-red-500/10 px-[13px] py-[10px] text-[11px] font-bold text-red-400"
                >
                  {error}
                </p>
              )}
            </form>

            <p className="mb-[15px] mt-3 text-center text-[11px] text-[color:var(--muted)]">
              {switchText}{" "}
              <Link
                to={switchTo}
                className="font-black text-[color:var(--primary)]"
              >
                {switchLabel}
              </Link>
            </p>

            {note && (
              <div className="flex items-start gap-2 rounded-[10px] bg-[var(--surface-alt)] p-[13px] text-[10px] text-[color:var(--muted)]">
                <Info
                  size={18}
                  className="shrink-0 text-[color:var(--primary)]"
                  aria-hidden="true"
                />
                {note}
              </div>
            )}
          </div>

          <AuthVisual />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;