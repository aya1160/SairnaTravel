import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Marker,
} from "react-leaflet";
import {
  ChevronLeft,
  Sparkles,
  Navigation,
  ArrowRight,
  ArrowLeft,
  Info,
  Check,
  Bus,
  MapPin,
  Route,
  Clock,
  Pause,
  Play,
  RefreshCw,
  Globe,
} from "lucide-react";

/* ───────────── الهيدر ───────────── */
export function TrackingHeader() {
  return (
    <section className="flex items-end justify-between gap-5 pt-7 pb-6">
      <div>
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-[var(--muted)]">
          <Link to="/">الرئيسية</Link>
          <ChevronLeft size={14} />
          <Link to="/my-trips">حجوزاتي</Link>
          <ChevronLeft size={14} />
          <span className="font-bold">تتبّع الرحلة</span>
        </nav>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-alt)] px-3 py-1 text-[11px] font-bold text-[var(--primary)]">
          <Sparkles size={13} /> تابع الطريق
        </span>

        <h1 className="mt-2.5 flex flex-wrap items-center gap-4 text-[29px] font-black">
          رحلتك قدام عيونك
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a0e6c7] bg-[#e8fff4] px-[11px] py-1.5 text-[10px] font-bold text-[#10a578]">
            <Navigation size={15} /> محاكاة تفاعلية
          </span>
        </h1>

        <p className="mt-1.5 text-xs text-[var(--muted)]">
          خط السير على الخريطة مع محطات ووقت وصول توضيحي.
        </p>
      </div>

     <Link
  to="/my-trips"
  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-bold text-[var(--text)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
>
  <ArrowRight size={17} /> كل الحجوزات
</Link>
    </section>
  );
}

/* ───────────── أجزاء السايدبار (داخلية) ───────────── */
function TripProgress({ progress }) {
  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between">
        <h3 className="text-[13px] font-bold">تقدّم الرحلة</h3>
        <strong className="text-[13px] text-[var(--primary)]">
          {Math.round(progress)}%
        </strong>
      </div>

      <div className="h-[9px] overflow-hidden rounded-full bg-[var(--surface-alt)]">
        <span
          className="block h-full rounded-full bg-[linear-gradient(90deg,#0cb5a3,#69d1b2)] transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function Stop({ icon: Icon, title, subtitle, time, isActive, isLast }) {
  return (
    <div className="relative mb-[29px] flex items-start gap-3 last:mb-0">
      <span
        className={`relative z-[2] grid h-[31px] w-[31px] flex-none place-items-center rounded-full border-[3px] border-[var(--surface)] ${
          isLast
            ? "bg-[var(--surface-alt)] text-[var(--muted)]"
            : "bg-[var(--primary)] text-white"
        }`}
      >
        <Icon size={14} />
      </span>

      <div className="flex flex-col">
        <b className="text-xs">{title}</b>
        <small className="text-[10px] text-[var(--muted)]">{subtitle}</small>
      </div>

      <time
        className={`ms-auto whitespace-nowrap text-[10px] ${
          isActive ? "font-black text-[var(--primary)]" : "text-[var(--muted)]"
        }`}
      >
        {time}
      </time>
    </div>
  );
}

function TripTimeline({ trip, statusText }) {
  return (
    <div className="relative mt-[25px] mb-[18px] before:absolute before:top-[15px] before:bottom-[26px] before:end-[15px] before:border-e-2 before:border-dashed before:border-[#cce1de] before:content-['']">
      <Stop
        icon={Check}
        title={trip.from}
        subtitle="محطة الانطلاق"
        time={trip.departureTime}
      />
      <Stop
        icon={Bus}
        title="على الطريق"
        subtitle={statusText}
        time="الآن*"
        isActive
      />
      <Stop
        icon={MapPin}
        title={trip.to}
        subtitle="محطة الوصول"
        time={trip.arrivalTime}
        isLast
      />
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col rounded-[11px] border border-[var(--border)] p-[13px]">
      <span className="flex items-center gap-1.5 text-[10px] text-[var(--muted)]">
        <Icon size={16} /> {label}
      </span>
      <b className="mt-[5px] text-base">{value}</b>
    </div>
  );
}

function TripControls({ isPlaying, isFinished, onToggle, onReset }) {
  return (
    <div className="mt-[18px] flex gap-[9px]">
      <button
        type="button"
        onClick={onToggle}
        disabled={isFinished}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-bold text-white disabled:opacity-50"
      >
        {isPlaying ? <Pause size={17} /> : <Play size={17} />}
        {isPlaying ? "إيقاف الحركة" : "تشغيل الحركة"}
      </button>

      <button
        type="button"
        onClick={onReset}
        aria-label="إعادة المحاكاة"
        className="grid w-[49px] place-items-center rounded-xl border border-[var(--border)] bg-white"
      >
        <RefreshCw size={18} />
      </button>
    </div>
  );
}

/* ───────────── السايدبار ───────────── */
export function TripSidebar({ trip, sim }) {
  const { company } = trip;

  return (
    <aside className="rounded-[19px] border border-[var(--border)] bg-[var(--surface)] p-[22px]">
      {/* الحالة */}
      <div className="flex items-center gap-2 text-[11px] font-extrabold text-[#10966f]">
        <span className="h-[9px] w-[9px] animate-pulse rounded-full bg-[#13b98d] shadow-[0_0_0_4px_#e3f7ee]" />
        الرحلة قيد العرض التجريبي
        <small dir="ltr" className="ms-auto font-bold text-[var(--muted)]">
          {trip.code}
        </small>
      </div>

      {/* من → إلى */}
      <div className="my-[25px] flex items-center justify-between gap-3">
        <div>
          <small className="block text-[11px] text-[var(--muted)]">من</small>
          <h2 className="my-0.5 text-[22px] font-bold">{trip.from}</h2>
        </div>
        <ArrowLeft size={21} className="text-[var(--primary)]" />
        <div>
          <small className="block text-[11px] text-[var(--muted)]">إلى</small>
          <h2 className="my-0.5 text-[22px] font-bold">{trip.to}</h2>
        </div>
      </div>

      {/* الشركة */}
      <div className="flex items-center gap-[9px]">
        <span
          className="grid h-[50px] w-[50px] place-items-center rounded-xl text-2xl font-black"
          style={{ color: company.color, background: company.bg }}
        >
          {company.logo}
        </span>
        <div className="flex flex-col">
          <b className="text-xs">{company.name}</b>
          <small className="text-[10px] text-[var(--muted)]">
            موعد الانطلاق {trip.departureTime}
          </small>
        </div>
      </div>

      <div className="my-[22px] border-t border-dashed border-[var(--border)]" />

      <TripProgress progress={sim.progress} />
      <TripTimeline trip={trip} statusText={sim.statusText} />

      <div className="grid grid-cols-2 gap-[9px]">
        <Stat
          icon={Route}
          label="المسافة الكلية"
          value={`~${trip.distanceKm} كم`}
        />
        <Stat icon={Clock} label="المتبقي التقديري" value={sim.eta} />
      </div>

      <TripControls
        isPlaying={sim.isPlaying}
        isFinished={sim.isFinished}
        onToggle={sim.toggle}
        onReset={sim.reset}
      />

      <p className="mt-[17px] flex items-start gap-[7px] text-[10px] leading-[1.85] text-[var(--muted)]">
        <Info size={17} className="flex-none" />
        هذه محاكاة تعليمية فوق خريطة جغرافية حقيقية، وليست تتبع GPS. خط الربط
        بين المدن تقريبي؛ افتح Google Maps لمعرفة الطرق الفعلية.
      </p>
    </aside>
  );
}

/* ───────────── الخريطة ───────────── */
const pill =
  "flex items-center gap-2 rounded-[11px] border border-black/10 bg-white px-3.5 py-2.5 text-[11px] font-extrabold text-[#224457] shadow-[0_8px_22px_rgba(15,64,75,.07)]";

// أيقونة الباص (نفس SVG تبع النموذج)
const BUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>`;

const busIcon = L.divIcon({
  className: "",
  iconSize: [42, 42],
  iconAnchor: [21, 21],
  html: `<div class="grid h-[42px] w-[42px] place-items-center rounded-full border-[3px] border-[#10b49d] bg-white text-[#0ca99c] shadow-[0_5px_18px_rgba(10,70,74,.25)]">${BUS_SVG}</div>`,
});

export function TrackingMap({ trip, progress }) {
  const { from, to, fromCoords: start, toCoords: end } = trip;

  // موقع الباص = نقطة بين البداية والنهاية حسب نسبة التقدّم
  const t = progress / 100;
  const bus = [
    start[0] + (end[0] - start[0]) * t,
    start[1] + (end[1] - start[1]) * t,
  ];

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1" +
    `&origin=${encodeURIComponent(`${from}, Syria`)}` +
    `&destination=${encodeURIComponent(`${to}, Syria`)}` +
    "&travelmode=driving";

  return (
    <div className="relative min-h-[650px] min-w-0 overflow-hidden rounded-[19px] border border-[var(--border)] bg-[#e5f0eb]">
      {/* الخريطة */}
      <div
        dir="ltr"
        className="absolute inset-0 z-[1] [&_.leaflet-top]:top-[70px]"
      >
        <MapContainer
          bounds={[start, end]}
          boundsOptions={{ padding: [60, 60] }}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* الجزء المقطوع (خط كامل) والمتبقي (منقّط) */}
          <Polyline
            positions={[start, bus]}
            pathOptions={{ color: "#0ca99c", weight: 4 }}
          />
          <Polyline
            positions={[bus, end]}
            pathOptions={{
              color: "#0ca99c",
              weight: 4,
              dashArray: "8 8",
              opacity: 0.6,
            }}
          />

          <CircleMarker
            center={start}
            radius={7}
            pathOptions={{
              color: "#0ca99c",
              fillColor: "#0ca99c",
              fillOpacity: 1,
            }}
          />
          <CircleMarker
            center={end}
            radius={7}
            pathOptions={{
              color: "#0ca99c",
              fillColor: "#fff",
              fillOpacity: 1,
            }}
          />

          <Marker position={bus} icon={busIcon} />
        </MapContainer>
      </div>

      {/* الشريط العلوي */}
      <div className="pointer-events-none absolute inset-x-[17px] top-[17px] z-[4] flex items-center justify-between gap-2.5">
        <div className={pill}>
          <span className="h-2 w-2 rounded-full bg-[#13b98d]" />
          OpenStreetMap · خريطة تفاعلية
        </div>
        <div className={`${pill} text-[10px]`}>
          <Globe size={16} /> عرض الخريطة
        </div>
      </div>

      {/* زر الاتجاهات */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pill} absolute bottom-[85px] end-[17px] z-[4]`}
      >
        <Route size={17} /> عرض الطرق في Google Maps
      </a>

      {/* الشريط السفلي */}
      <div className="pointer-events-none absolute inset-x-[17px] bottom-[32px] z-[3] flex items-center justify-between gap-[7px]">
        <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-white px-3 py-2 text-[10px] font-extrabold text-[#1d4a56] shadow-[0_6px_20px_rgba(0,0,0,.05)]">
          <MapPin size={17} /> {from} ← {to}
        </span>
        <span className="text-[9px] font-bold text-[#83989f]">
          المسار تقريبي · افتح Google Maps للاتجاهات الفعلية
        </span>
      </div>
    </div>
  );
}