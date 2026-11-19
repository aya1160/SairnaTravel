import { useNavigate } from "react-router-dom";

import {
  Star,
  Snowflake,
  Wifi,
  Plug,
  ArrowLeft,
} from "lucide-react";

// بيانات الشركات التجريبية
const companies = [
  {
    id: "sham",
    name: "الشام للنقل",
    logo: "ش",
    logoColor: "#109d9c",
    logoBg: "#e7f9f6",
    rating: "4.9",
    description: "رحلات منتظمة بين المحافظات وتجربة سفر مريحة.",
    services: [
      { name: "مكيّف", icon: Snowflake },
      { name: "Wi-Fi", icon: Wifi },
      { name: "شحن USB", icon: Plug },
    ],
    destinations: "+12",
    schedule: "يومياً",
  },
  {
    id: "furat",
    name: "الفرات للسياحة",
    logo: "ف",
    logoColor: "#e69a46",
    logoBg: "#fff3df",
    rating: "4.8",
    description: "أسطول حديث ومواعيد متنوعة على مدار الأسبوع.",
    services: [
      { name: "مكيّف", icon: Snowflake },
      { name: "مقاعد واسعة", icon: Plug },
    ],
    destinations: "+12",
    schedule: "يومياً",
  },
  {
    id: "nawras",
    name: "النورس إكسبرس",
    logo: "ن",
    logoColor: "#5085e6",
    logoBg: "#e9efff",
    rating: "4.7",
    description: "رحلات يومية وخيارات مناسبة لكل المسافرين.",
    services: [
      { name: "مكيّف", icon: Snowflake },
      { name: "Wi-Fi", icon: Wifi },
    ],
    destinations: "+12",
    schedule: "يومياً",
  },
  {
    id: "ittihad",
    name: "الاتحاد للنقل",
    logo: "ا",
    logoColor: "#9969ce",
    logoBg: "#f1eafe",
    rating: "4.6",
    description: "ربط المدن السورية بمواعيد مرنة وسهلة الحجز.",
    services: [
      { name: "مكيّف", icon: Snowflake },
      { name: "شحن USB", icon: Plug },
    ],
    destinations: "+12",
    schedule: "يومياً",
  },
];

export default function CompaniesGrid() {
  const navigate = useNavigate();

  // الانتقال إلى صفحة الرحلات مع إرسال معرف الشركة
  const handleCompanyRoutes = (companyId) => {
    navigate("/choose-trip", {
      state: {
        companyId,
      },
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-[86px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <article
            key={company.id}
            className="
              flex flex-col
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--surface)]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">
              <span
                className="
                  grid h-16 w-16 place-items-center
                  rounded-2xl
                  text-2xl font-black
                "
                style={{
                  color: company.logoColor,
                  backgroundColor: company.logoBg,
                }}
              >
                {company.logo}
              </span>

              <span
                className="
                  inline-flex items-center gap-1
                  rounded-full
                  bg-[var(--soft-teal)]
                  px-3 py-2
                  text-xs font-bold
                  text-[var(--primary)]
                "
              >
                <Star size={14} fill="currentColor" />
                {company.rating} / 5
              </span>
            </div>

            {/* Company Info */}
            <h2 className="mb-2 text-lg font-extrabold text-[var(--text)]">
              {company.name}
            </h2>

            <p className="mb-5 text-sm leading-7 text-[var(--muted)]">
              {company.description}
            </p>

            {/* Amenities */}
            <div className="mb-6 flex flex-wrap gap-2">
              {company.services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <span
                    key={index}
                    className="
                      inline-flex items-center gap-1.5
                      rounded-lg
                      border border-[var(--border)]
                      bg-[var(--surface-alt)]
                      px-3 py-2
                      text-xs font-bold
                      text-[var(--muted)]
                    "
                  >
                    <Icon size={13} />
                    {service.name}
                  </span>
                );
              })}
            </div>

            {/* Company Meta */}
            <div
              className="
                mb-5 grid grid-cols-2
                border-b border-t border-[var(--border)]
                py-4
              "
            >
              <div className="flex flex-col gap-1">
                <b className="text-lg font-extrabold text-[var(--text)]">
                  {company.destinations}
                </b>
                <small className="text-xs text-[var(--muted)]">
                  وجهة تجريبية
                </small>
              </div>

              <div className="flex flex-col gap-1">
                <b className="text-lg font-extrabold text-[var(--text)]">
                  {company.schedule}
                </b>
                <small className="text-xs text-[var(--muted)]">
                  مواعيد متاحة
                </small>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => handleCompanyRoutes(company.id)}
              className="
                mt-auto flex min-h-[49px] w-full
                items-center justify-center gap-2
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[13px] font-extrabold
                text-[var(--text)]
                transition-all duration-300
                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
                active:scale-[0.98]
              "
            >
              عرض رحلات الشركة
              <ArrowLeft size={17} />
            </button>
          </article>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs text-[var(--muted)]">
        ملاحظة: أسماء الشركات وتقييماتها وأوقات الرحلات المعروضة
        بيانات توضيحية ضمن مشروع التدريب.
      </p>
    </section>
  );
}