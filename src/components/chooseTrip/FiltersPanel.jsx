
export default function FiltersPanel() {
  return (
    <aside className="sticky top-[103px] rounded-[17px] border border-[var(--border)] bg-[var(--surface)] p-[22px]">

      {/* Filters Header */}
      <div className="flex items-center justify-between gap-[7px] border-b border-[var(--border)] pb-[19px]">
        <h3 className="m-0 flex items-center gap-2 text-[13px] font-bold">
          الفلاتر
        </h3>
      </div>

      {/* Company Filter */}
      <div className="pt-[22px]">
        <h4 className="mb-[13px] text-[12px] font-bold">
          شركة النقل
        </h4>

        <div className="flex flex-col gap-3">

          {[
            { value: "all", label: "كل الشركات", count: 6 },
            { value: "sham", label: "الشام للنقل", count: 2 },
            { value: "furat", label: "الفرات للسياحة", count: 2 },
            { value: "nawras", label: "النورس إكسبرس", count: 1 },
            { value: "ittihad", label: "الاتحاد للنقل", count: 1 },
          ].map((company) => (
            <label
              key={company.value}
              className="flex cursor-pointer items-center gap-[10px] text-[11px] font-bold text-[var(--muted)]"
            >
              <input
                type="radio"
                name="company-filter"
                value={company.value}
                defaultChecked={company.value === "furat"}
                className="cursor-pointer accent-[var(--primary)]"
              />

              {company.label}

              <span className="mr-auto rounded-md bg-[var(--surface-alt)] px-[7px] text-[10px]">
                {company.count}
              </span>
            </label>
          ))}

        </div>
      </div>

      {/* Departure Time Filter */}
      <div className="mt-[25px] border-t border-[var(--border)] pt-[22px]">

        <h4 className="mb-[13px] text-[12px] font-bold">
          وقت الانطلاق
        </h4>

        <div className="flex flex-col gap-3">

          {[
            { value: "all", label: "كل الأوقات" },
            { value: "morning", label: "صباحاً (قبل 12)" },
            { value: "afternoon", label: "ظهراً (12–17)" },
            { value: "evening", label: "مساءً (بعد 17)" },
          ].map((time) => (
            <label
              key={time.value}
              className="flex cursor-pointer items-center gap-[10px] text-[11px] font-bold text-[var(--muted)]"
            >
              <input
                type="radio"
                name="time-filter"
                value={time.value}
                defaultChecked={time.value === "all"}
                className="cursor-pointer accent-[var(--primary)]"
              />

              {time.label}
            </label>
          ))}

        </div>
      </div>

      {/* Filter Info */}
      <div className="mt-[27px] flex gap-[9px] rounded-xl bg-[var(--soft-teal)] p-[13px] text-[var(--primary-deep)]">
        <p className="m-0 text-[10px] leading-[2] text-[var(--text)]">
          <b className="text-[11px]">معلومة</b>
          <br />
          يمكنك اختيار شركة النقل لتصفية الرحلات المتاحة حسب الشركة.
        </p>
      </div>

    </aside>
  );
}
