import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import IconButton from '../ui/IconButton'

const KEY = 'sairna-theme'

function getInitialTheme() {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* التخزين غير متاح: نتجاهل */
    }
  }, [theme])

  const isDark = theme === 'dark'
  return (
    <IconButton
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="تبديل المظهر"
      title="تبديل المظهر"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </IconButton>
  )
}