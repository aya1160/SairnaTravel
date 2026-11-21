import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Armchair, ArrowLeft, ArrowRight, Bus, ChevronLeft,
  Gauge, Info, ShieldCheck, Ticket,
} from "lucide-react";
import Eyebrow from "../ui/Eyebrow";

/* ---------- helpers ---------- */
const formatPrice = (v) => `${Number(v).toLocaleString("en-US")} ل.س`;
const formatDate = (d) =>
  new Date(d).toLocaleDateString("ar-SY", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

/* ---------- Stepper ---------- */
const STEPS = ["اختيار المقاعد", "بيانات المسافرين", "المراجعة والتأكيد"];

function Stepper({ current }) {
  return (
    <div className="mt-[34px] mb-[26px] flex items-center justify-center">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const active = n <= current;
        return (
          <Fragment key={label}>
            {i > 0 && <div className="mx-3 h-px w-8 bg-[var(--border)] sm:mx-[17px] sm:w-[89px]" />}
            <div className={`flex items-center gap-[9px] ${active ? "text-[var(--primary-deep)]" : "text-[var(--muted)]"}`}>
              <span
                className={`grid h-[30px] w-[30px] place-items-center rounded-full border text-[11px] font-black ${
                  active
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-[var(--border)] bg-[var(--surface-alt)]"
                }`}
              >
                {n}
              </span>
              <b className="hidden whitespace-nowrap text-[11px] sm:inline">{label}</b>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

/* ---------- Head (breadcrumb + title + stepper) ---------- */
export function CheckoutHead({ step }) {
  return (
    <div className="pt-[30px]">
      <nav className="mb-[22px] flex items-center gap-2 text-[11px] font-extrabold text-[var(--muted)]">
        <Link to="/" className="hover:text-[var(--primary)]">الرئيسية</Link>
        <ChevronLeft size={14} />
        <Link to="/trips" className="hover:text-[var(--primary)]">الرحلات</Link>
        <ChevronLeft size={14} />
        <span className="text-[var(--text)]">إتمام الحجز</span>
      </nav>

      <div className="flex items-end justify-between gap-5">
        <div>
          <Eyebrow>باقي شوي وتوصل</Eyebrow>
          <h1 className="mt-[9px] text-[31px] font-black">
            كمّل حجز <span className="text-[var(--primary)]">رحلتك.</span>
          </h1>
        </div>
        <Link
          to="/trips"
          className="inline-flex items-center gap-2 text-[12px] font-bold text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
        >
          <ArrowRight size={17} />
          تغيير الرحلة
        </Link>
      </div>

      <Stepper current={step} />
    </div>
  );
}

/* ---------- Seat ---------- */
const SEAT_STYLES = {
  available:
    "border-[#c9dade] bg-[var(--surface)] text-[#8fadb4] hover:scale-[1.06] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  selected: "border-[var(--primary)] bg-[var(--primary)] text-white",
  busy: "cursor-not-allowed border-[#d9e1e3] bg-[#e2e9eb] text-[#aab9be] opacity-70 [[data-theme=dark]_&]:bg-[#304755]",
};

function Seat({ number, status, onClick }) {
  return (
    <button
      type="button"
      disabled={status === "busy"}
      aria-label={`مقعد ${number}`}
      aria-pressed={status === "selected"}
      onClick={() => onClick(number)}
      className={`relative grid h-[39px] min-w-0 place-items-center rounded-[9px] border transition ${SEAT_STYLES[status]}`}
    >
      <Armchair size={24} />
      <small className="absolute bottom-px left-1 text-[8px]">{number}</small>
    </button>
  );
}

/* ---------- Seat map ---------- */
const SEATS_PER_ROW = 4;

function SeatMap({ totalSeats, bookedSeats, selectedSeats, onToggleSeat }) {
  const rows = Array.from({ length: Math.ceil(totalSeats / SEATS_PER_ROW) }, (_, r) =>
    Array.from({ length: SEATS_PER_ROW }, (_, c) => r * SEATS_PER_ROW + c + 1).filter((n) => n <= totalSeats)
  );

  const renderSeat = (n) => (
    <Seat
      key={n}
      number={n}
      status={bookedSeats.includes(n) ? "busy" : selectedSeats.includes(n) ? "selected" : "available"}
      onClick={onToggleSeat}
    />
  );

  return (
    <div className="mx-auto w-full max-w-[353px] rounded-[100px_100px_26px_26px] border border-[var(--border)] bg-[var(--surface-alt)] px-[18px] pt-[21px] pb-[25px] shadow-[inset_0_0_0_6px_color-mix(in_srgb,var(--border)_35%,transparent)]">
      <div className="mb-[18px] flex items-center justify-between border-b border-dashed border-[#bdced2] px-[10px] pt-[7px] pb-4 text-[10px] font-extrabold text-[var(--muted)]">
        <span className="flex items-center gap-[6px]"><Bus size={20} /> مقدمة الحافلة</span>
        <span className="text-[var(--text)]"><Gauge size={27} /></span>
      </div>

      {rows.map((row, i) => (
        <div key={i} className="mb-[9px] grid grid-cols-[27px_1fr_1fr_15px_1fr_1fr] items-center gap-[7px]">
          <span className="text-center text-[10px] text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
          {row.slice(0, 2).map(renderSeat)}
          <span />
          {row.slice(2).map(renderSeat)}
        </div>
      ))}

      <div className="mt-[14px] flex flex-wrap items-center justify-center gap-[13px] border-t border-[var(--border)] pt-[18px] text-[10px] text-[var(--muted)]">
        <span className="flex items-center gap-[5px]"><i className="h-[13px] w-[13px] rounded-[4px] border border-[#b5ced2] bg-[var(--surface)]" /> متاح</span>
        <span className="flex items-center gap-[5px]"><i className="h-[13px] w-[13px] rounded-[4px] border border-[var(--primary)] bg-[var(--primary)]" /> مختار</span>
        <span className="flex items-center gap-[5px]"><i className="h-[13px] w-[13px] rounded-[4px] bg-[#c5d1d5]" /> محجوز</span>
      </div>
    </div>
  );
}

/* ---------- Hint card ---------- */
function SeatHintCard({ selectedSeats, passengers }) {
  return (
    <div>
      <div className="rounded-[17px] border border-[var(--border)] p-[22px]">
        <span className="mb-[13px] grid h-[50px] w-[50px] place-items-center rounded-[15px] bg-[var(--soft-teal)] text-[var(--primary)]">
          <Armchair size={24} />
        </span>
        <h3 className="mb-[5px] text-[16px] font-bold">مكانك، راحتك.</h3>
        <p className="text-[11px] leading-8 text-[var(--muted)]">
          اختار مقعدك حسب تفضيلك. المكان عند الشباك أو بالممر، الخيار إلك.
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-[17px] text-[11px]">
          <span>المقاعد المختارة</span>
          <strong className="text-[16px] text-[var(--primary)]">{selectedSeats.length} / {passengers}</strong>
        </div>

        <div className="mt-[14px] flex flex-wrap gap-[6px]">
          {selectedSeats.length === 0 ? (
            <span className="text-[var(--muted)]">لسا ما اخترت مقعد</span>
          ) : (
            selectedSeats.map((n) => (
              <span key={n} className="rounded-[7px] bg-[var(--soft-teal)] px-[10px] py-[5px] text-[10px] font-extrabold text-[var(--primary-deep)]">
                مقعد {n}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="mt-[14px] flex items-start gap-[9px] rounded-xl bg-[var(--soft-teal)] p-[13px] text-[10px] font-bold leading-[1.9] text-[var(--primary-deep)]">
        <Info size={19} className="mt-px shrink-0" />
        <span>لتكمل، اختار عدد مقاعد مساوي لعدد المسافرين.</span>
      </div>
    </div>
  );
}

/* ---------- Step 1: seat selection ---------- */
export function SeatSelectionStep({ totalSeats, bookedSeats, selectedSeats, passengers, onToggleSeat, onNext }) {
  const canContinue = selectedSeats.length === passengers;

  return (
    <div className="min-w-0 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-[29px] shadow-[var(--shadow)]">
      <div className="mb-[21px]">
        <h2 className="mb-[5px] flex items-center gap-[11px] text-[20px] font-bold">
          اختار مكانك المفضّل
          <Armchair size={23} className="text-[var(--primary)]" />
        </h2>
        <p className="text-[12px] text-[var(--muted)]">
          اختار {passengers} مقعد من المخطط. المقاعد الرمادية محجوزة مسبقاً.
        </p>
      </div>

      <div className="grid gap-[26px] md:grid-cols-[minmax(270px,1fr)_minmax(190px,.8fr)]">
        <SeatMap
          totalSeats={totalSeats}
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          onToggleSeat={onToggleSeat}
        />
        <SeatHintCard selectedSeats={selectedSeats} passengers={passengers} />
      </div>

      <div className="mt-[27px] flex items-center justify-between gap-[15px] border-t border-[var(--border)] pt-[22px]">
        <Link to="/trips" className="inline-flex items-center gap-2 rounded-xl bg-[var(--surface-alt)] px-5 py-3 text-[12px] font-bold">
          <ArrowRight size={17} />
          رجوع للرحلات
        </Link>
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-[12px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          متابعة الحجز
          <ArrowLeft size={17} />
        </button>
      </div>
    </div>
  );
}

/* ---------- Summary (shared by all steps) ---------- */
function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[11px] text-[var(--muted)]">{label}</span>
      <strong className="text-left text-[11px]">{value}</strong>
    </div>
  );
}

export function TripSummary({ trip, passengers, selectedSeats }) {
  return (
    <aside className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-[23px] shadow-[var(--shadow)] lg:sticky lg:top-[110px]">
      <div className="flex items-center gap-2 border-b border-[var(--border)] pb-[17px] text-[var(--primary)]">
        <Ticket size={21} />
        <h3 className="text-[16px] font-bold text-[var(--text)]">ملخص الحجز</h3>
      </div>

      <div className="my-[21px] flex items-center gap-[11px]">
        <span
          className="grid h-[49px] w-[49px] shrink-0 place-items-center rounded-[14px] text-[27px] font-black"
          style={{ color: trip.logoColor, backgroundColor: trip.logoBg }}
        >
          {trip.logo}
        </span>
        <div>
          <strong className="block text-[13px]">{trip.company}</strong>
          <small className="text-[10px] text-[var(--muted)]">{trip.type}</small>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-[var(--surface-alt)] p-[13px]">
        <div className="flex flex-col items-start text-[10px] text-[var(--muted)]">
          <small>الانطلاق</small>
          <b className="text-[14px] text-[var(--text)]">{trip.from}</b>
          <span>{trip.departure}</span>
        </div>
        <ArrowLeft size={21} className="text-[var(--primary)]" />
        <div className="flex flex-col items-start text-[10px] text-[var(--muted)]">
          <small>الوصول</small>
          <b className="text-[14px] text-[var(--text)]">{trip.to}</b>
          <span>{trip.arrival}</span>
        </div>
      </div>

      <div className="my-[23px] flex flex-col gap-[17px]">
        <Row label="تاريخ الرحلة" value={formatDate(trip.date)} />
        <Row label="المسافرين" value={passengers} />
        <Row label="المقاعد" value={selectedSeats.length ? selectedSeats.join("، ") : "لم تُحدّد بعد"} />
        <Row label="السعر للمسافر" value={formatPrice(trip.price)} />
      </div>

      <div className="flex items-baseline justify-between gap-2 border-t border-dashed border-[var(--border)] pt-5 pb-2">
        <span className="text-[12px] font-extrabold">السعر الإجمالي</span>
        <b className="text-[20px] text-[var(--primary)]">{formatPrice(trip.price * passengers)}</b>
      </div>

      <p className="mt-3 flex gap-[7px] rounded-[10px] bg-[var(--surface-alt)] p-[9px] text-[10px]">
        <ShieldCheck size={17} className="shrink-0 text-[var(--primary)]" />
        لا يوجد دفع حقيقي ضمن المشروع التعليمي.
      </p>
    </aside>
  );
}