
import {
  Star,
  Bus,
  Armchair,
  Snowflake,
  Plug,
  Route,
  ArrowLeft,
} from "lucide-react";

export default function TripCard({ trip }) {
  return (
    <article className="overflow-hidden rounded-[17px] border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#b4e4db] hover:shadow-[var(--shadow-md)]">

      {/* Header */}
      <div className="flex items-center justify-between gap-[10px] px-[23px] pt-[19px] pb-[13px]">

        <div className="flex items-center gap-[11px]">
          <span
            className="grid h-[49px] w-[49px] shrink-0 place-items-center rounded-[14px] text-[27px] font-black"
            style={{
              color: trip.logoColor || "#e69a46",
              backgroundColor: trip.logoBg || "#fff3df",
            }}
          >
            {trip.logo || "ف"}
          </span>

          <div>
            <strong className="block text-[13px]">
              {trip.company}
            </strong>

            <span className="flex items-center gap-1 text-[11px] font-black text-[#edac41]">
              <Star size={14} />
              {trip.rating}
              <i className="text-[var(--muted)] not-italic">·</i>
              {trip.badge}
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-[6px] rounded-[20px] border border-[var(--border)] px-[11px] py-[5px] text-[10px] font-bold text-[var(--muted)]">
          <Bus size={16} />
          {trip.type}
        </span>

      </div>

      {/* Body */}
      <div className="grid grid-cols-1 items-center gap-[14px] px-[23px] pt-[14px] pb-[23px] md:grid-cols-[minmax(0,1fr)_180px]">

        {/* Timing */}
        <div className="flex items-center justify-between gap-[17px]">

          <div className="flex min-w-[60px] flex-col">
            <b className="text-[23px] font-black leading-[1.5]">
              {trip.departure}
            </b>
            <span className="text-[11px] font-extrabold text-[var(--muted)]">
              {trip.from}
            </span>
          </div>

          <div className="flex min-w-[110px] flex-1 flex-col items-center">

            <span className="text-[10px] font-extrabold text-[var(--muted)]">
              {trip.duration}
            </span>

            <div className="my-1 flex w-full items-center justify-center gap-[9px] text-[var(--primary)]">
              <i className="flex-1 border-t border-dashed border-[#b6ccd2]" />
              <Bus size={18} />
              <i className="flex-1 border-t border-dashed border-[#b6ccd2]" />
            </div>

            <small className="text-[10px] font-extrabold text-[var(--primary)]">
              {trip.routeType}
            </small>

          </div>

          <div className="flex min-w-[60px] flex-col">
            <b className="text-[23px] font-black leading-[1.5]">
              {trip.arrival}
            </b>
            <span className="text-[11px] font-extrabold text-[var(--muted)]">
              {trip.to}
            </span>
          </div>

        </div>

        {/* Booking */}
        <div className="flex flex-col border-r border-[var(--border)] pr-5">

          <small className="text-[10px] text-[var(--muted)]">
            السعر للشخص
          </small>

          <b className="whitespace-nowrap text-[19px] font-black text-[var(--dark-deep)] [data-theme=dark_&]:text-[var(--text)]">
            {trip.price}
          </b>

          <span className="mb-[11px] flex items-center gap-[5px] text-[10px] font-extrabold text-[var(--primary)]">
            <Armchair size={15} />
            {trip.seats} مقعد متاح
          </span>

          <button
            onClick={() => trip.onSelect?.(trip.id)}
            className="flex min-h-[38px] items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-[10px] py-[7px] text-[11px] font-bold text-white transition-opacity hover:opacity-90"
          >
            اختيار المقاعد
            <ArrowLeft size={16} />
          </button>

        </div>

      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-[7px] border-t border-[var(--border)] px-[23px] py-[11px]">

        <span className="inline-flex items-center gap-[5px] rounded-md bg-[var(--surface-alt)] px-[9px] py-[5px] text-[10px] font-bold text-[var(--muted)]">
          <Snowflake size={13} />
          مكيّف
        </span>

        <span className="inline-flex items-center gap-[5px] rounded-md bg-[var(--surface-alt)] px-[9px] py-[5px] text-[10px] font-bold text-[var(--muted)]">
          <Plug size={13} />
          مقاعد واسعة
        </span>

        <span className="mr-auto inline-flex items-center gap-[5px] text-[10px] text-[var(--muted)]">
          <Route size={15} />
          ~ {trip.distance}
        </span>

      </div>

    </article>
  );
}
