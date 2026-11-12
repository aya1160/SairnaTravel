// Button.jsx
const base =
  'inline-flex items-center justify-center gap-2.5 rounded-xl border border-transparent ' +
  'font-extrabold whitespace-nowrap transition duration-300 cursor-pointer ' +
  'hover:-translate-y-[3px] active:translate-y-0 active:scale-[.98] ' +
  'motion-reduce:transition-none motion-reduce:hover:translate-y-0'

const variants = {
  primary:
    'bg-primary text-white shadow-[0_9px_20px_rgba(8,165,151,.19)] ' +
    'hover:bg-primary-deep hover:shadow-[0_12px_25px_rgba(8,165,151,.28)]',
  dark: 'bg-dark text-white hover:bg-[#174d61]',
  outline: 'bg-surface text-ink border-line hover:border-primary hover:text-primary',
  subtle: 'bg-surface-alt text-ink',
  white: 'bg-white text-[#114054] hover:bg-[#e7fff9]',
}

const sizes = {
  md: 'min-h-[49px] px-[22px] py-[11px] text-[13px]',
  sm: 'min-h-10 px-[15px] py-2 text-xs rounded-[10px]',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const extra = Component === 'button' ? { type: 'button' } : {}
  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...extra}
      {...props}
    >
      {children}
    </Component>
  )
}