import { ShieldCheck, Sparkles, Ticket } from "lucide-react";

function AuthVisual() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[linear-gradient(165deg,#123e51_0%,#1b7176_100%)] px-[35px] py-[42px] text-white max-[650px]:order-first max-[650px]:min-h-[300px] max-[650px]:p-[25px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[210px] -top-[170px] h-[440px] w-[440px] rounded-full border border-dashed border-[rgba(255,255,255,.18)]"
      />

      <div className="relative z-[2]">
        <span className="inline-flex items-center gap-2 rounded-[30px] bg-white/[0.12] px-[14px] py-[6px] text-[11px] font-extrabold">
          <Sparkles size={18} aria-hidden="true" />
          عالم جديد بانتظارك
        </span>

        <h2 className="mb-1 mt-[25px] text-[40px] leading-[1.55] text-white max-[900px]:text-[28px] max-[650px]:mb-0 max-[650px]:mt-[15px] max-[650px]:text-[27px] max-[650px]:leading-[1.35]">
          كل الطرق <br /> بتوصّل لذكريات.
        </h2>

        <p className="mb-3 text-[12px] text-[#d7f0eb] max-[650px]:mb-0">
          ومن أول محطة رح نكون معك.
        </p>
      </div>

      <img
        src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/68/Syria%2C_Damascus%2C_The_Umayyad_Mosque.jpg&w=1100&q=85"
        alt="الجامع الأموي في دمشق"
        decoding="async"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="relative -mx-[2.5%] my-auto aspect-[1.45] max-h-[300px] w-[105%] -rotate-[4deg] rounded-[17px] object-cover object-center shadow-[0_22px_46px_rgba(0,0,0,.18)] max-[900px]:-mx-[2%] max-[650px]:absolute max-[650px]:bottom-[15px] max-[650px]:left-[11px] max-[650px]:m-0 max-[650px]:max-h-[190px] max-[650px]:w-[52%]"
      />

      <div className="relative mt-[30px] flex items-center gap-[22px] text-[11px] max-[650px]:hidden">
        <span className="flex items-center gap-[7px]">
          <ShieldCheck size={19} aria-hidden="true" />
          سهل وواضح
        </span>

        <span className="flex items-center gap-[7px]">
          <Ticket size={19} aria-hidden="true" />
          حجز بخطوات بسيطة
        </span>
      </div>
    </div>
  );
}

export default AuthVisual;