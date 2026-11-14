import { ArrowLeft } from "lucide-react";


const CARD_SIZE =
  "aspect-[0.87] max-[900px]:aspect-[1.35] max-[650px]:aspect-[0.98]";

export default function DestinationCard({ destination, onClick, disabled = false }) {
  const { name, tagline, image } = destination;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-[19px] bg-linear-to-br from-[#23586a] to-[#769f99] text-start shadow-card transition-[translate,box-shadow] duration-[350ms] hover:-translate-y-[7px] hover:shadow-card-lg disabled:pointer-events-none disabled:opacity-60 max-[650px]:rounded-2xl ${CARD_SIZE}`}
    >
      <img
        src={image}
        alt={`صورة من ${name} في سوريا`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover saturate-[.94] contrast-[1.035] transition-transform duration-[550ms] group-hover:scale-[1.09]"
      />

      <span className="absolute inset-0 flex items-end justify-between bg-[linear-gradient(0deg,rgba(7,35,48,.87)_0%,rgba(7,35,48,.25)_59%,rgba(7,35,48,.03)_86%)] p-5 text-white max-[650px]:p-[13px]">
        <span className="flex flex-col">
          <strong className="text-[21px] font-bold max-[650px]:text-lg">{name}</strong>
          <small className="text-[11px] opacity-[.82] max-[650px]:text-[9px]">{tagline}</small>
        </span>

        <span className="grid size-[39px] place-items-center rounded-full border border-white/40 bg-white/20 transition duration-250 group-hover:-translate-x-1 group-hover:bg-primary max-[650px]:size-[30px]">
          <ArrowLeft size={18} strokeWidth={1.85} aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}