import { ChevronLeft, Sparkles } from "lucide-react";

export default function BookingsBanner() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-[var(--border)]
        bg-gradient-to-br from-[var(--surface-alt)] to-[var(--bg)]
        py-[26px] pb-[45px]
      "
    >
      <div
        className="
          relative z-10 mx-auto
          w-[min(var(--container),calc(100%-68px))]
        "
      >
        {/* Breadcrumb */}
        <div
          className="
            mb-[22px] flex items-center gap-2
            text-[11px] font-extrabold text-[var(--muted)]
          "
        >
          <a
            href="#home"
            className="transition-colors hover:text-[var(--primary)]"
          >
            الرئيسية
          </a>

          <ChevronLeft size={14} />

          <span className="text-[var(--text)]">
            حجوزاتي
          </span>
        </div>

        {/* Eyebrow */}
        <span
          className="
            inline-flex items-center gap-2
            text-sm font-bold text-[var(--primary)]
          "
        >
          <span
            className="
              grid h-6 w-6 place-items-center
              rounded-full bg-[var(--soft-teal)]
            "
          >
            <Sparkles size={13} />
          </span>

          كل رحلاتك بمكان واحد
        </span>

        {/* Title */}
        <h1
          className="
            my-[11px] mb-[6px]
            text-[clamp(29px,3.2vw,42px)]
            font-black text-[var(--text)]
          "
        >
          تذاكرك{" "}
          <span className="text-[var(--primary)]">
            دايماً معك.
          </span>
        </h1>

        {/* Description */}
        <p className="m-0 text-[13px] leading-7 text-[var(--muted)]">
          راقب حجوزاتك، وارجع لتفاصيل الرحلة وقت ما تحتاج.
        </p>
      </div>

      {/* Decorative Circle */}
      <div
        className="
          pointer-events-none absolute
          -left-[120px] -top-[180px]
          h-[350px] w-[350px]
          rounded-full border border-dashed
          border-[rgba(25,167,154,0.1)]
        "
      />
    </section>
  );
}