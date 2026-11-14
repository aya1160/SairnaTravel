import { Search, Bus, Ticket, Sparkles } from "lucide-react";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "اختار وجهتك",
    description: "حدّد من وين لوين وتاريخ الرحلة المناسب إلك.",
    iconClass: "bg-soft-teal text-primary",
  },
  {
    number: "02",
    icon: Bus,
    title: "لاقي رحلتك",
    description: "قارن الشركات والمواعيد والأسعار واختر الأفضل.",
    iconClass: "bg-[#fff4e4] text-[#e4a34c]",
  },
  {
    number: "03",
    icon: Ticket,
    title: "احجز مقعدك",
    description: "اختار مقعدك وأكّد الحجز، وتذكرتك بتصير جاهزة.",
    iconClass: "bg-[#eaf1ff] text-[#5988d1]",
  },
];

export default function ProcessSteps() {
  return (
    <section className="border-y border-line bg-surface-alt py-[86px] max-[650px]:py-[58px]">
      <Container>
        {/* Section Heading */}
        <div className="mb-[35px] text-center">
          <Eyebrow icon={Sparkles}>السفر صار أبسط</Eyebrow>

          <h2 className="mt-3 mb-1.5 text-[clamp(25px,3vw,36px)] tracking-[-0.6px] max-[650px]:text-[28px]">
            3 خطوات... <span className="text-primary">وتكون بالطريق</span>
          </h2>

          <p className="m-0 text-xs text-muted">
            ما في داعي للتعقيد. كل شي مرتب بواجهة وحدة.
          </p>
        </div>

        {/* Process Cards */}
        <ol className="grid grid-cols-3 gap-5 max-[650px]:grid-cols-1 max-[650px]:gap-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="relative overflow-hidden rounded-[20px] border border-line bg-surface p-8 transition-[translate,box-shadow] duration-300 hover:-translate-y-[7px] hover:shadow-card-lg max-[900px]:p-[22px] max-[650px]:grid max-[650px]:grid-cols-[50px_1fr] max-[650px]:gap-x-[15px] max-[650px]:gap-y-0.5 max-[650px]:p-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-[14px] left-[25px] text-[54px] leading-none font-black text-line max-[650px]:top-0 max-[650px]:left-5"
                >
                  {step.number}
                </span>

                <div
                  className={`mb-[21px] grid size-[60px] place-items-center rounded-[18px] max-[650px]:row-span-2 max-[650px]:mb-0 max-[650px]:size-12 max-[650px]:rounded-[13px] ${step.iconClass}`}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.85}
                    aria-hidden="true"
                    className="max-[650px]:size-6"
                  />
                </div>

                <h3 className="mb-2 text-lg max-[650px]:mb-0 max-[650px]:text-[15px]">
                  {step.title}
                </h3>

                <p className="m-0 text-xs leading-[2] text-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}