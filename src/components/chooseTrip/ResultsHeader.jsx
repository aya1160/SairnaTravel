import { CalendarDays, ArrowLeft } from "lucide-react";

export default function ResultsHeader({
  totalResults = 2,
  fromCity = "حلب",
  toCity = "السويداء",
  travelDate = "الجمعة، ٢٠ تشرين الثاني ٢٠٢٦",
  passengers = 1,
  sortBy = "earliest",
  onSortChange,
}) {
  return (
    <div className="mt-[38px] flex flex-col justify-between gap-5 md:flex-row md:items-center">

      {/* معلومات الرحلات */}
      <div>
        <h2 className="flex flex-wrap items-center gap-2 text-xl font-bold text-[var(--text)]">
          {totalResults} رحلات متاحة

          <span className="flex items-center gap-2 rounded-full bg-[var(--surface-alt)] px-3 py-1 text-sm font-medium">
            {fromCity}
            <ArrowLeft size={16} />
            {toCity}
          </span>
        </h2>

        <p className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
          <CalendarDays size={17} />
          {travelDate} · {passengers} مسافر
        </p>
      </div>

      {/* ترتيب الرحلات */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="sort-select"
          className="whitespace-nowrap text-sm text-[var(--muted)]"
        >
          ترتيب حسب
        </label>

        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)] outline-none"
        >
          <option value="earliest">وقت الانطلاق</option>
          <option value="cheap">أقل سعر</option>
          <option value="quick">أقصر مدة</option>
        </select>
      </div>

    </div>
  );
}