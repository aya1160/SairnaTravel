export default function IconButton({ className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`inline-grid size-10 shrink-0 cursor-pointer place-items-center rounded-xl border border-line bg-surface text-ink transition duration-300 hover:border-primary hover:bg-soft-teal hover:text-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}