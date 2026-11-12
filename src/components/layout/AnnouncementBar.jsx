import { Sparkles } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="flex min-h-8 items-center justify-center gap-2.25 bg-dark-deep px-3 py-1 text-center text-[9px] font-bold tracking-[.1px] text-[#d4f2ec] sm:text-[10px]">
      <span className="size-1.5 rounded-full bg-[#58d7bb] shadow-[0_0_0_4px_rgba(88,215,187,.12)]" />
      <span>رحلات بين المدن السورية، بخطوات بسيطة وواضحة</span>
      <Sparkles size={13} className="shrink-0 text-[#ffce87]" aria-hidden="true" />
    </div>
  )
}