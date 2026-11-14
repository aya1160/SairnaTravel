const metrics = [
  { value: "14", label: "محافظة سورية" },
  { value: "4", label: "شركات نقل تجريبية" },
  { value: "+30", label: "خيار رحلة باليوم" },
  { value: "24/7", label: "سهولة الوصول للموقع" },
];

export default function MetricsStrip() {
  return (
    <section className="w-full  border-border bg-surface">
      <div className="mx-auto grid min-h-26.75 w-full max-w-[1216px] grid-cols-2 items-center px-4 sm:flex sm:justify-around sm:px-6 lg:px-8">

        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="relative flex flex-col items-center justify-center gap-1 py-4 text-center sm:flex-1"
          >
            <strong className="text-[27px] font-black leading-[1.4] text-dark-deep [[data-theme=dark]_&]:text-[var(--text)]">
              {metric.value}
            </strong>

            <span className="text-[11px] font-bold text-muted">
              {metric.label}
            </span>

            {index !== metrics.length - 1 && (
              <span className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-border sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}