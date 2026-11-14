import { Link } from "react-router-dom";
import { Globe, Mail, Phone, ArrowUp } from "lucide-react";

import Container from "../ui/Container";
import Logo from "./Logo";

const exploreLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/results", label: "احجز رحلتك" },
  { to: "/companies", label: "شركات النقل" },
  { to: "/tracking", label: "تتبّع رحلتك" },
];

const accountLinks = [
  { to: "/login", label: "تسجيل الدخول" },
  { to: "/register", label: "إنشاء حساب" },
  { to: "/my-trips", label: "حجوزاتي" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep pt-14 text-[#d2e4e9]">

      {/* Footer Main */}
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-[#254451] pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.25fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Logo variant="light" />

            <p className="mt-4 mb-5 max-w-[290px] text-xs leading-[2.1] text-[#9cb4c0]">
              طريقة أجمل وأسهل للسفر بين المحافظات السورية.
              ابحث، اختار، واحجز بكل راحة.
            </p>

            <div className="flex gap-2">
              {[Globe, Mail, Phone].map((Icon, index) => (
                <span
                  key={index}
                  className="grid size-[35px] place-items-center rounded-[10px] border border-[#335362] text-[#cce9e9]"
                >
                  <Icon size={17} />
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start gap-[13px]">
            <h4 className="mb-2.5 mt-1.5 text-[13px] font-bold text-white">
              استكشف
            </h4>

            {exploreLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[11px] text-[#a3c0ca] transition-colors hover:text-[#40d1bb]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Account */}
          <div className="flex flex-col items-start gap-[13px]">
            <h4 className="mb-2.5 mt-1.5 text-[13px] font-bold text-white">
              حسابك
            </h4>

            {accountLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[11px] text-[#a3c0ca] transition-colors hover:text-[#40d1bb]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-[13px]">
            <h4 className="mb-2.5 mt-1.5 text-[13px] font-bold text-white">
              نحن هون لمساعدتك
            </h4>

            <div className="flex items-center gap-2 text-[11px] text-[#a3c0ca]" dir="ltr">
              <Mail size={16} />
              hello@sairna.example
            </div>
          </div>

        </div>

        {/* Photo Credits */}
        <div className="border-b border-[#254451] py-5 text-[10px] leading-7 text-[#8eabb7]">
          مصادر الصور (Wikimedia Commons):{" "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Syria,_Damascus,_The_Umayyad_Mosque.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#40d1bb]"
          >
            دمشق / الهيرو — Vyacheslav Argenberg (CC BY 4.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Citadel_of_Aleppo,_Gates,_Aleppo,_Syria.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#40d1bb]"
          >
            حلب — Vyacheslav Argenberg (CC BY 4.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Beach_Latakia_1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#40d1bb]"
          >
            اللاذقية — Ahmad Ahmad (CC BY-SA 3.0)
          </a>

          {" · "}

          <a
            href="https://commons.wikimedia.org/wiki/File:Homs_Khalid_Ibn_al-Walid_Mosque_3074.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#40d1bb]"
          >
            حمص — Dosseman (CC BY-SA 4.0)
          </a>

          <p className="mt-1">
            تُحمّل الصور عند الاتصال بالإنترنت؛ تُعرض الروابط البديلة عند فشل المصدر الأول.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-[10px] text-[#8eabb7] sm:flex-row">
          <p>© {new Date().getFullYear()} سيرنا. جميع الحقوق محفوظة.</p>

          <Link
            to="/"
            aria-label="العودة إلى الرئيسية"
            className="flex items-center gap-2 transition-colors hover:text-[#40d1bb]"
          >
            العودة للأعلى
            <ArrowUp size={14} />
          </Link>
        </div>

      </Container>
    </footer>
  );
}