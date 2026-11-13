import { useState, useEffect } from "react";
import { getCities } from "../../services/citiesService";

import {
  MapPin,
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
  Sparkles,
} from "lucide-react";

import Button from "../ui/Button";

// تاريخ اليوم
const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default function SearchBox({ onSearch }) {

  // المدن القادمة من API
  const [cities, setCities] = useState([]);

  const [citiesLoading, setCitiesLoading] = useState(true);
  const [citiesError, setCitiesError] = useState("");

  // بيانات البحث
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: getTodayDate(),
    people: "1",
  });

  // جلب المدن عند تحميل الصفحة
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setCitiesLoading(true);
        setCitiesError("");

        const data = await getCities();

        setCities(data);

        // تحديد أول مدينتين بشكل افتراضي
        if (data.length >= 2) {
          setFormData((prev) => ({
            ...prev,
            origin: String(data[0].id),
            destination: String(data[1].id),
          }));
        }

      } catch (error) {
        console.error("Error fetching cities:", error);

        setCitiesError("حدث خطأ أثناء تحميل المحافظات");

      } finally {
        setCitiesLoading(false);
      }
    };

    fetchCities();
  }, []);

  // تحديث الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // تبديل المحافظات
  const handleSwap = () => {
    setFormData((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  // إرسال البحث
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.origin === formData.destination) {
      alert("يرجى اختيار محافظتين مختلفتين");
      return;
    }

    const searchData = {
      originId: formData.origin,
      destinationId: formData.destination,
      date: formData.date,
      passengers: Number(formData.people),
    };

    onSearch?.(searchData);
  };

  // تنسيق الحقول
  const fieldClass =
    "relative flex h-[60px] min-w-0 items-center gap-2.5 rounded-[11px] border border-line bg-surface px-3.5 pt-3 pb-1 transition-all duration-200 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(13,172,155,0.08)]";

  const labelClass =
    "absolute right-3.5 top-[7px] text-[10px] font-bold text-muted";

  const controlClass =
    "mt-2 h-[30px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[11px] font-black text-ink outline-none";

  return (
    <section
      dir="rtl"
      className="relative z-[3] mt-[22px] rounded-[21px] border border-line bg-surface px-4 py-5 shadow-[0_21px_58px_rgba(11,71,72,0.1)] sm:px-6 sm:py-6"
    >

      {/* عنوان البحث */}
      <div className="mb-4 flex items-center justify-between gap-3">

        <div className="flex flex-wrap items-center gap-3">

          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-primary shadow-[0_0_0_5px_var(--soft-teal)]" />

          <strong className="text-[15px] font-black text-ink">
            وين رحلتك الجاية؟
          </strong>

          <span className="text-[11px] text-muted">
            اختار وجهتك وباقي التفاصيل علينا
          </span>

        </div>

        <div className="hidden shrink-0 items-center gap-1.5 text-[10px] font-extrabold text-primary sm:flex">
          <Sparkles size={16} />
          الحجز بـ 3 خطوات
        </div>

      </div>

      {/* رسالة التحميل */}
      {citiesLoading && (
        <p className="mb-3 text-sm text-muted">
          جاري تحميل المحافظات...
        </p>
      )}

      {/* رسالة الخطأ */}
      {citiesError && (
        <p className="mb-3 text-sm text-red-500">
          {citiesError}
        </p>
      )}

      {/* نموذج البحث */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.12fr)_34px_minmax(0,1.12fr)_minmax(0,1fr)_minmax(0,0.74fr)_minmax(0,1.14fr)]"
      >

        {/* محافظة الانطلاق */}
        <label className={fieldClass}>

          <span className={labelClass}>من وين؟</span>

          <MapPin
            size={19}
            className="mt-3 shrink-0 text-primary"
          />

          <select
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className={controlClass}
            disabled={citiesLoading || cities.length === 0}
            required
          >
            <option value="" disabled>
              اختر محافظة الانطلاق
            </option>

            {cities.map((city) => (
              <option key={city.id} value={String(city.id)}>
                {city.name}
              </option>
            ))}

          </select>

        </label>

        {/* تبديل المحافظات */}
        <button
          type="button"
          onClick={handleSwap}
          aria-label="تبديل المحافظات"
          disabled={!formData.origin || !formData.destination}
          className="mx-auto mb-[11px] grid h-[38px] w-[34px] place-items-center rounded-[10px] bg-soft-teal text-primary-deep transition-transform duration-300 hover:rotate-180 disabled:opacity-50"
        >
          <ArrowLeftRight size={19} />
        </button>

        {/* محافظة الوصول */}
        <label className={fieldClass}>

          <span className={labelClass}>لوين؟</span>

          <MapPin
            size={19}
            className="mt-3 shrink-0 text-primary"
          />

          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className={controlClass}
            disabled={citiesLoading || cities.length === 0}
            required
          >
            <option value="" disabled>
              اختر محافظة الوصول
            </option>

            {cities.map((city) => (
              <option key={city.id} value={String(city.id)}>
                {city.name}
              </option>
            ))}

          </select>

        </label>

        {/* تاريخ الرحلة */}
        <label className={fieldClass}>

          <span className={labelClass}>تاريخ الرحلة</span>

          <CalendarDays
            size={19}
            className="mt-3 shrink-0 text-primary"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            min={getTodayDate()}
            onChange={handleChange}
            className={controlClass}
            required
          />

        </label>

        {/* عدد المسافرين */}
        <label className={fieldClass}>

          <span className={labelClass}>المسافرين</span>

          <Users
            size={19}
            className="mt-3 shrink-0 text-primary"
          />

          <select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className={controlClass}
          >
            <option value="1">1 مسافر</option>
            <option value="2">2 مسافرين</option>
            <option value="3">3 مسافرين</option>
            <option value="4">4 مسافرين</option>
          </select>

        </label>

        {/* زر البحث */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={citiesLoading || cities.length < 2}
          className="h-[60px] w-full rounded-[11px] text-xs"
        >
          <Search size={19} />
          ابحث عن رحلات
        </Button>

      </form>

    </section>
  );
}