import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import DestinationCard from "./DestinationCard";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  return (
    <section className="py-[58px] sm:py-[86px]">
      <Container>
        <div className="mb-7 flex flex-col items-start gap-2.5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <Eyebrow icon={Sparkles}>اكتشف سوريا</Eyebrow>
            <h2 className="mt-3 mb-1.5 text-[28px] tracking-[-0.6px] sm:text-[clamp(25px,3vw,36px)]">
              على وين حابب <span className="text-primary">تسافر؟</span>
            </h2>
            <p className="m-0 text-xs text-muted">
              وجهات مختلفة، ونفس الشعور الحلو لما تكون بالطريق.
            </p>
          </div>

          <Link
            to="/results"
            className="group flex items-center gap-2.5 text-xs font-black whitespace-nowrap text-primary-deep"
          >
            استكشف الرحلات
            <ArrowLeft
              size={18}
              strokeWidth={1.85}
              className="transition-transform group-hover:-translate-x-1.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-[11px] sm:gap-[18px] min-[901px]:grid-cols-4">
          {destinations.map((d) => (
            <DestinationCard key={d.key} destination={d} />
          ))}
        </div>
      </Container>
    </section>
  );
}