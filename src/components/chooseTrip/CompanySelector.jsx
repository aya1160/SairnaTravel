import { useState } from "react";
import { Bus, Star, ArrowLeft } from "lucide-react";

// بيانات تجريبية مؤقتة
const companies = [
  { id: "all", name: "كل الشركات", type: "all" },
  {
    id: "sham",
    name: "الشام للنقل",
    logo: "ش",
    rating: 4.9,
    color: "#109d9c",
    bg: "#e7f9f6",
  },
  {
    id: "furat",
    name: "الفرات للسياحة",
    logo: "ف",
    rating: 4.8,
    color: "#e69a46",
    bg: "#fff3df",
  },
  {
    id: "nawras",
    name: "النورس إكسبرس",
    logo: "ن",
    rating: 4.7,
    color: "#5085e6",
    bg: "#e9efff",
  },
  {
    id: "ittihad",
    name: "الاتحاد للنقل",
    logo: "ا",
    rating: 4.6,
    color: "#9969ce",
    bg: "#f1eafe",
  },
];

export default function CompanySelector({ onCompanyChange }) {

  const [selectedCompany, setSelectedCompany] = useState("furat");

  const handleSelect = (companyId) => {
    setSelectedCompany(companyId);

    if (onCompanyChange) {
      onCompanyChange(companyId);
    }
  };

  return (
    <section className="mt-[31px]" dir="rtl">

      {/* Heading */}
      <div className="mb-[15px] flex items-center justify-between gap-4">

        <div className="flex items-center gap-[11px]">

          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--soft-teal)] text-sm font-black text-[var(--primary)]">
            01
          </span>

          <div>
            <h3 className="m-0 text-[15px] font-extrabold">
              اختار شركة النقل
            </h3>

            <p className="m-0 text-[11px] text-[var(--muted)]">
              حدد الشركة اللي بتفضّلها، ومنعرضلك مواعيدها المتاحة.
            </p>
          </div>

        </div>

        <span className="flex items-center gap-[7px] text-[11px] font-extrabold text-[var(--muted)] max-sm:hidden">
          02
          <ArrowLeft size={15} />
          اختار الوقت والمقعد
        </span>

      </div>

      {/* Companies */}
      <div className="grid grid-cols-3 gap-2 min-[651px]:grid-cols-5 min-[651px]:gap-[11px]">

        {companies.map((company) => {

          const isActive = selectedCompany === company.id;

          return (
            <button
              key={company.id}
              type="button"
              onClick={() => handleSelect(company.id)}
              aria-pressed={isActive}
              className={`
                flex min-w-0 flex-col items-center gap-[7px]
                rounded-[13px] border px-[5px] py-3
                transition-all duration-200
                min-[651px]:px-[11px] min-[651px]:py-[15px]
                hover:-translate-y-[3px]
                hover:border-[var(--primary)]
                ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--soft-teal)] shadow-[0_0_0_2px_rgba(16,177,155,0.08)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }
              `}
            >

              {/* Logo */}
              {company.type === "all" ? (

                <span className="grid h-[32px] w-[32px] place-items-center text-[var(--primary)]">
                  <Bus size={24} strokeWidth={1.85} />
                </span>

              ) : (

                <span
                  className="flex h-8 w-8 items-center justify-center rounded-xl text-lg font-black"
                  style={{
                    color: company.color,
                    backgroundColor: company.bg,
                  }}
                >
                  {company.logo}
                </span>

              )}

              {/* Company Name */}
              <span className="text-center text-[10px] font-black leading-relaxed text-[var(--text)] min-[651px]:whitespace-nowrap min-[651px]:text-[11px]">

                {company.name}

              </span>

              {/* Rating */}
              {company.type === "all" ? (

                <small className="text-[10px] text-[var(--muted)]">
                  قارن الخيارات
                </small>

              ) : (

                <small className="inline-flex items-center justify-center gap-[5px] text-[10px] text-[var(--muted)]">

                  <Star
                    size={12}
                    className="text-[#E8A43D]"
                  />

                  <span>{company.rating}</span>

                </small>

              )}

            </button>
          );
        })}

      </div>

    </section>
  );
}