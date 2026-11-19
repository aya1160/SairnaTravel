
import { ChevronLeft, Sparkles } from "lucide-react";

export default function TransportCompaniesBanner() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        border-b border-[var(--border)]
        bg-[linear-gradient(140deg,var(--surface-alt),var(--bg))]
        pt-[26px] pb-[45px]
        after:content-[''] after:absolute
        after:w-[350px] after:h-[350px]
        after:border after:border-dashed
        after:border-[rgba(25,167,154,0.1)]
        after:rounded-full
        after:-left-[120px] after:-top-[180px]
        after:pointer-events-none
      "
    >
      <div className="container mx-auto relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-extrabold text-[var(--muted)] mb-[22px]">
          <a
            href="#home"
            className="transition-colors hover:text-[var(--primary)]"
          >
            الرئيسية
          </a>

          <ChevronLeft size={14} />

          <span className="text-[var(--text)]">
            شركات النقل
          </span>
        </div>

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-sm font-bold">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(25,167,154,0.1)] text-[var(--primary)]">
            <Sparkles size={13} />
          </span>

          شركاء الطريق
        </span>

        {/* Title */}
        <h1 className="text-[clamp(29px,3.2vw,42px)] font-extrabold mt-[11px] mb-[6px]">
          شركات بتوصلك{" "}
          <span className="text-[var(--primary)]">
            لوين ما بدك.
          </span>
        </h1>

        {/* Description */}
        <p className="text-[13px] text-[var(--muted)] m-0">
          تعرّف على شركات النقل الموجودة في النموذج واختار الأنسب إلك.
        </p>

      </div>
    </section>
  );
}
