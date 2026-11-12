export default function Container({ className = '', children }) {
  return (
    <div
      className={`mx-auto w-[calc(100%_-_34px)] sm:w-[min(var(--container),calc(100%_-_48px))] xl:w-[min(var(--container),calc(100%_-_68px))] ${className}`}
    >
      {children}
    </div>
  )
}