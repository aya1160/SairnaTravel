import { ChevronLeft, Sparkles, Bus } from "lucide-react";

export default function PageBanner() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--surface-alt)] to-[var(--bg)] px-0 py-[26px] pb-[45px]">

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -left-[120px] -top-[180px] h-[350px] w-[350px] rounded-full border border-dashed border-[rgba(25,167,154,0.1)]" />

      <div className="container relative mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-[22px] flex items-center gap-2 text-[11px] font-extrabold text-[var(--muted)]">

          <a href="pages/home/Home.jsx" className="transition-colors hover:text-[var(--primary)]">
            الرئيسية
          </a>

          <ChevronLeft size={14} strokeWidth={1.85} />

          <span className="text-[var(--text)]">
            نتائج البحث
          </span>

        </div>

        {/* Banner Heading */}
        <div className="flex items-center justify-between gap-[25px]">

          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--primary)]">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface)]">
                <Sparkles size={13} strokeWidth={1.85} />
              </span>

              لنكمل الطريق

            </span>

            <h1 className="mt-[11px] mb-[5px] text-[30px] font-extrabold md:text-[36px]">
              اختار الرحلة{" "}
              <span className="text-[var(--primary)]">
                اللي بتشبهك.
              </span>
            </h1>

            <p className="m-0 text-[13px] text-[var(--muted)]">
              قارن بين الشركات والأوقات، واحجز مقعدك بكل سهولة.
            </p>
          </div>

          {/* Bus Icon */}
          <div className="hidden rotate-[-7deg] text-[var(--primary)] opacity-35 sm:block">
            <Bus size={70} strokeWidth={1.85} />
          </div>

        </div>
      </div>
    </section>
  );
}