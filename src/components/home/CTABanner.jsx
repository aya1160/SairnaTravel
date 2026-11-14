
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function CTABanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative flex items-center justify-between gap-7.5 overflow-hidden rounded-[24px] bg-[linear-gradient(105deg,#0e4653,#0b756e)] px-[60px] py-[39px] text-white max-[650px]:flex-col max-[650px]:items-start max-[650px]:px-6 max-[650px]:py-8">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -top-[140px] left-[22%] size-[230px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-[360px] right-[30%] size-[430px] rounded-full border border-white/10" />

          {/* Content */}
          <div className="relative z-[1]">

            <div className="w-fit [&_span]:!bg-white/10 [&_span]:!text-[#c7f6e8]">
              <Eyebrow icon={Sparkles}>
                جاهز تغير جو؟
              </Eyebrow>
            </div>

            <h2 className="mt-3 mb-0.5 text-[31px] font-black max-[650px]:text-[25px]">
              الطريق الجاي بيناديك.
            </h2>

            <p className="m-0 text-sm text-[#d4edeb]">
              دوّر على رحلة، واحجز أول مقعد إلك.
            </p>

          </div>

          {/* Navigation Button */}
          <Link
            to="/results"
            className="relative z-[2] inline-flex shrink-0 items-center gap-3 rounded-[14px] bg-white px-7 py-4 text-sm font-extrabold text-[#0b756e] transition-all hover:-translate-y-1 hover:shadow-lg max-[650px]:w-full max-[650px]:justify-center"
          >
            يلا نلاقي رحلة
            <ArrowLeft size={18} />
          </Link>

        </div>
      </Container>
    </section>
  );
}
