import { Link, useNavigate } from "react-router-dom";

import {
  Plus,
  Ticket,
  CircleCheck,
  Bus,
  Armchair,
  Wallet,
  Route,
} from "lucide-react";

// بيانات تجريبية - نستبدلها لاحقاً ببيانات API
const trips = [
  {
    id: "SR-6499399",
    from: "حلب",
    to: "دمشق",
    departureTime: "17:00",
    arrivalTime: "23:04",
    date: "الخميس، ١٩ تشرين الثاني ٢٠٢٦",
    company: "الشام للنقل",
    companyLetter: "ش",
    companyColor: "#109d9c",
    companyBg: "#e7f9f6",
    seat: 3,
    price: "127,000",
  },
  {
    id: "SR-5758573",
    from: "حلب",
    to: "دمشق",
    departureTime: "17:00",
    arrivalTime: "23:04",
    date: "السبت، ١٤ تشرين الثاني ٢٠٢٦",
    company: "الشام للنقل",
    companyLetter: "ش",
    companyColor: "#109d9c",
    companyBg: "#e7f9f6",
    seat: 9,
    price: "127,000",
  },
  {
    id: "SR-0029251",
    from: "حلب",
    to: "دمشق",
    departureTime: "09:00",
    arrivalTime: "15:22",
    date: "الاثنين، ٩ تشرين الثاني ٢٠٢٦",
    company: "الفرات للسياحة",
    companyLetter: "ف",
    companyColor: "#e69a46",
    companyBg: "#fff3df",
    seat: 15,
    price: "115,000",
  },
];

export default function MyTrips() {
  const navigate = useNavigate();

  // الانتقال إلى صفحة تتبع الرحلة
  const handleTrackTrip = (trip) => {
    navigate("/tracking", {
      state: {
        bookingId: trip.id,
        trip,
      },
    });
  };

  return (
    <section className="py-[86px]">
      <div className="container mx-auto w-[min(var(--container),calc(100%-68px))]">

        {/* Section Header */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">

          <div>
            <h2 className="text-2xl font-black text-[var(--text)]">
              رحلاتي القادمة
            </h2>

            <p className="mt-2 text-sm text-[var(--muted)]">
              رحلاتك المحفوظة على هذا المتصفح
            </p>
          </div>

          {/* New Booking */}
          <Link
            to="/results"
            className="
              inline-flex min-h-10 items-center justify-center gap-2
              rounded-[10px] bg-[var(--primary)]
              px-[15px] py-2 text-xs font-extrabold text-white
              shadow-[0_9px_20px_rgba(8,165,151,0.19)]
              transition-all duration-300
              hover:-translate-y-[3px]
              hover:bg-[var(--primary-deep)]
            "
          >
            <Plus size={17} />
            حجز جديد
          </Link>
        </div>

        {/* Trips List */}
        <div className="flex flex-col gap-5">

          {trips.map((trip) => (
            <article
              key={trip.id}
              className="
                overflow-hidden rounded-2xl
                border border-[var(--border)]
                bg-[var(--surface)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Card Header */}
              <div className="
                flex flex-wrap items-center justify-between
                gap-4 border-b border-[var(--border)]
                px-5 py-4
              ">

                <div className="flex items-center gap-3">

                  <span className="
                    grid h-11 w-11 place-items-center
                    rounded-xl bg-[var(--soft-teal)]
                    text-[var(--primary)]
                  ">
                    <Ticket size={20} />
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[var(--muted)]">
                      رقم الحجز
                    </span>

                    <b dir="ltr" className="text-sm text-[var(--text)]">
                      {trip.id}
                    </b>
                  </div>
                </div>

                {/* Booking Status */}
                <span className="
                  inline-flex items-center gap-1.5
                  rounded-full bg-emerald-50
                  px-3 py-1.5 text-xs font-bold
                  text-emerald-600
                ">
                  <CircleCheck size={15} />
                  تم تأكيد الحجز
                </span>

              </div>

              {/* Card Body */}
              <div className="p-5">

                {/* Route */}
                <div className="
                  grid grid-cols-[1fr_auto_1fr]
                  items-center gap-3
                ">

                  {/* Departure */}
                  <div className="text-right">
                    <small className="text-xs text-[var(--muted)]">
                      من
                    </small>

                    <h3 className="my-1 text-xl font-black text-[var(--text)]">
                      {trip.from}
                    </h3>

                    <b dir="ltr" className="text-sm text-[var(--primary)]">
                      {trip.departureTime}
                    </b>
                  </div>

                  {/* Route Graphic */}
                  <div className="flex flex-col items-center gap-2">

                    <span className="
                      grid h-10 w-10 place-items-center
                      rounded-full bg-[var(--soft-teal)]
                      text-[var(--primary)]
                    ">
                      <Bus size={20} />
                    </span>

                    <div className="h-px w-full min-w-20 border-t border-dashed border-[var(--primary)]" />

                    <small className="
                      whitespace-nowrap text-[10px]
                      text-[var(--muted)]
                    ">
                      {trip.date}
                    </small>

                  </div>

                  {/* Arrival */}
                  <div className="text-left">
                    <small className="text-xs text-[var(--muted)]">
                      إلى
                    </small>

                    <h3 className="my-1 text-xl font-black text-[var(--text)]">
                      {trip.to}
                    </h3>

                    <b dir="ltr" className="text-sm text-[var(--primary)]">
                      {trip.arrivalTime}
                    </b>
                  </div>

                </div>

                {/* Trip Details */}
                <div className="
                  mt-6 flex flex-wrap items-center gap-x-6 gap-y-3
                  border-t border-[var(--border)]
                  pt-4 text-xs text-[var(--muted)]
                ">

                  {/* Company */}
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="
                        grid h-7 w-7 place-items-center
                        rounded-lg text-xs font-black
                      "
                      style={{
                        color: trip.companyColor,
                        backgroundColor: trip.companyBg,
                      }}
                    >
                      {trip.companyLetter}
                    </span>

                    {trip.company}
                  </span>

                  {/* Seat */}
                  <span className="inline-flex items-center gap-2">
                    <Armchair size={16} />
                    المقعد: {trip.seat}
                  </span>

                  {/* Price */}
                  <span className="inline-flex items-center gap-2">
                    <Wallet size={16} />
                    {trip.price} ل.س
                  </span>

                </div>

              </div>

              {/* Card Actions */}
              <div className="
                flex flex-wrap items-center gap-3
                border-t border-[var(--border)]
                bg-[var(--surface-alt)] px-5 py-4
              ">

                {/* Track Trip */}
                <button
                  onClick={() => handleTrackTrip(trip)}
                  className="
                    inline-flex min-h-10 items-center justify-center
                    gap-2 rounded-xl border border-[var(--border)]
                    bg-[var(--surface)] px-4 py-2
                    text-xs font-extrabold text-[var(--text)]
                    transition-all duration-300
                    hover:border-[var(--primary)]
                    hover:text-[var(--primary)]
                  "
                >
                  <Route size={17} />
                  تتبّع الرحلة
                </button>

                {/* View Ticket */}
                <button
                  type="button"
                  className="
                    inline-flex min-h-10 items-center justify-center
                    gap-2 rounded-xl bg-[var(--soft-teal)]
                    px-4 py-2 text-xs font-extrabold
                    text-[var(--text)]
                    transition-all duration-300
                    hover:text-[var(--primary)]
                  "
                >
                  <Ticket size={17} />
                  عرض التذكرة
                </button>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}