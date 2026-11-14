import {
  Sparkles,
  CircleCheck,
  ArrowLeft,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function RouteFeature() {
  return (
    <section className="py-12">
      <Container>

        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-line bg-surface min-h-[435px] max-[750px]:grid-cols-1">

          {/* Feature Content */}

          <div className="flex flex-col justify-center p-[50px] max-[900px]:p-8 max-[650px]:p-6">

          <div className="w-fit">
  <Eyebrow icon={Sparkles}>
    وين وصلت الرحلة؟
  </Eyebrow>
</div>  

            <h2 className="mt-5 text-[clamp(28px,3vw,40px)] leading-[1.65] font-black">
              الطريق قدامك.
              <br />
              <span className="text-primary">
                لحظة بلحظة؟
              </span>
            </h2>

            <p className="mt-[15px] mb-[18px] text-[13px] leading-[2.15] text-muted">
              بصفحة التتبّع بتشوف خط سير الرحلة ومحطاتها
              وحالتها ضمن نموذج تفاعلي سهل وواضح.
            </p>

            {/* Features */}

            <div className="flex items-center gap-2.5 mb-[11px] text-xs font-extrabold">
              <CircleCheck
                size={18}
                className="text-primary"
              />
              عرض المسار على الخريطة
            </div>

            <div className="flex items-center gap-2.5 mb-[11px] text-xs font-extrabold">
              <CircleCheck
                size={18}
                className="text-primary"
              />
              وقت وصول تقديري ومحطات الطريق
            </div>

            {/* Navigation Button */}

            <Link
              to="/tracking"
              className="mt-5 inline-flex w-fit items-center gap-3 rounded-[15px] bg-primary px-7 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              جرّب تتبّع رحلة
              <ArrowLeft size={19} />
            </Link>

            <small className="mt-[13px] text-[9px] text-muted">
              * الخريطة وحركة الحافلة في هذا النموذج توضيحية وليست GPS مباشر.
            </small>

          </div>

          {/* Map Preview */}

          <div className="flex flex-col justify-center bg-[#e9f6f0] p-7 max-[650px]:p-5">

            {/* Map Header */}

            <div className="mb-[15px] flex items-center gap-2 text-xs font-extrabold text-[#215467]">

              <span className="size-[9px] rounded-full bg-[#13b58d] shadow-[0_0_0_5px_rgba(16,180,141,0.13)]" />

              معاينة مسار رحلة

              <b className="mr-auto">
                حلب ← دمشق
              </b>

            </div>

            {/* Google Map */}

            <div
              className="relative h-[280px] overflow-hidden rounded-[22px] shadow-[0_12px_30px_rgba(34,97,86,0.1)]"
              aria-label="خريطة توضيحية بين حلب ودمشق"
            >

              <iframe
                title="Google Maps - حلب إلى دمشق"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
                src="https://maps.google.com/maps?q=34.85795%2C36.70540&z=7&output=embed"
              />

              <a
                href="https://www.google.com/maps/dir/?api=1&origin=Aleppo,Syria&destination=Damascus,Syria&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 rounded-lg bg-white px-4 py-3 text-xs font-extrabold text-[#087e80] shadow-md transition hover:bg-gray-100"
              >
                فتح المسار في Google Maps ↗
              </a>

            </div>

            {/* Map Footer */}

            <div className="mt-[15px] flex items-center gap-5 text-[11px] font-black text-[#235666]">

              <span className="flex items-center gap-1">
                <MapPin size={16} />
                دمشق
              </span>

              <div className="relative h-0.5 flex-1 bg-[#b1dbce]">
                <span className="absolute right-[48%] -top-1 size-[10px] rounded-full bg-[#15ac99]" />
              </div>

              <span className="flex items-center gap-1">
                <MapPin size={16} />
                حلب
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}