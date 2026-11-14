import { Link } from 'react-router-dom'
import logoUrl from '../../assets/images/logo.svg'

export default function Logo({ variant = 'default' }) {
  const isLight = variant === 'light'

  return (
    <Link to="/" aria-label="سيرنا - الرئيسية" className="inline-flex shrink-0 items-center gap-2.5">
      <img src={logoUrl} alt="" className="size-[39px] sm:size-12" />
      <span className="flex flex-col leading-[1.2]">
        <strong
          className={`text-[25px] font-black tracking-[-1.5px] sm:text-[30px] ${
            isLight ? 'text-white' : 'text-dark-deep dark:text-ink'
          }`}
        >
          سيرنا<span className="text-primary">.</span>
        </strong>
        <small
          className={`mt-[5px] whitespace-nowrap text-[8px] font-bold sm:mt-[7px] sm:text-[9px] ${
            isLight ? 'text-[#9ac4cd]' : 'text-muted'
          }`}
        >
          رحلتك بتبلّش من هون
        </small>
      </span>
    </Link>
  )
}