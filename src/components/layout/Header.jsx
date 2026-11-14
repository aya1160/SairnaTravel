import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { ArrowLeft, ChevronLeft, Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import IconButton from '../ui/IconButton'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/results', label: 'احجز رحلة' },
  { to: '/companies', label: 'شركات النقل' },
  { to: '/my-trips', label: 'حجوزاتي' },
  { to: '/tracking', label: 'تتبّع الرحلة' },
]

const desktopLink = ({ isActive }) =>
  'relative whitespace-nowrap py-8 text-xs font-extrabold transition-colors hover:text-ink ' +
  'after:absolute after:bottom-[17px] after:left-1/2 after:h-[3px] after:-translate-x-1/2 ' +
  'after:rounded-md after:bg-primary after:transition-[width] after:duration-300 hover:after:w-[23px] ' +
  (isActive ? 'text-ink after:w-[23px]' : 'text-muted after:w-0')

const mobileLink = ({ isActive }) =>
  `flex items-center justify-between border-b border-line px-2 py-3 font-bold ${
    isActive ? 'text-primary' : 'text-ink'
  }`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-lg">
      <Container className="flex h-16.5 items-center justify-between gap-5.5 md:h-17.75 lg:h-20.75">
        <Logo />

        <nav
          aria-label="التنقل الرئيسي"
          className="mx-auto hidden items-center gap-3.75 lg:flex xl:gap-6.75"
        >
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={desktopLink}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 xl:gap-3">
          <ThemeToggle />

          {/* مؤقتاً: المستخدم غير مسجّل دائماً. نبدّلها بحالة المستخدم في مرحلة المصادقة */}
          <Link
            to="/login"
            className="hidden whitespace-nowrap text-xs font-extrabold text-ink hover:text-primary sm:block"
          >
            دخول
          </Link>
          <span className="hidden sm:block">
            <Button as={Link} to="/register" variant="dark" size="sm">
              إنشاء حساب <ArrowLeft size={16} />
            </Button>
          </span>

          <IconButton
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="القائمة"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </div>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-surface px-5 py-3 sm:px-7 lg:hidden">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu} className={mobileLink}>
              {label}
              <ChevronLeft size={16} />
            </NavLink>
          ))}
          <NavLink to="/login" onClick={closeMenu} className={mobileLink}>
            تسجيل الدخول <ChevronLeft size={16} />
          </NavLink>
          <NavLink to="/register" onClick={closeMenu} className={mobileLink}>
            إنشاء حساب <ChevronLeft size={16} />
          </NavLink>
        </div>
      )}
    </header>
  )
}