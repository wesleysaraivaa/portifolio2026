import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/lib/navigation'

const navItems = [
  { number: '00', label: 'INÍCIO', href: '#inicio' },
  { number: '01', label: 'SOBRE', href: '#sobre' },
  { number: '02', label: 'HABILIDADES', href: '#habilidades' },
  { number: '03', label: 'SERVIÇOS', href: '#servicos' },
  { number: '04', label: 'PROJETOS', href: '#projetos' },
  { number: '05', label: 'CONTATO', href: '#contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((i) => i.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    scrollToSection(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#09090b]/95 backdrop-blur-sm border-b-2 border-[#3f3f46]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-[95vw] mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <button
            onClick={() => handleNav('#inicio')}
            className="font-bold text-sm uppercase tracking-widest text-[#fafafa] hover:text-purple-400 transition-colors duration-200"
            aria-label="Ir para o início"
          >
            WESLEY SARAIVA
          </button>

          <nav className="hidden lg:flex items-center gap-0" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={cn(
                  'relative group px-4 py-5 text-xs font-mono uppercase tracking-widest transition-colors duration-200',
                  activeSection === item.href.replace('#', '')
                    ? 'text-purple-400'
                    : 'text-[#a1a1aa] hover:text-[#fafafa]'
                )}
              >
                <span className="text-purple-600 mr-1">{item.number}</span>
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="header-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contato')}
              className="hidden md:flex items-center gap-2 h-9 px-5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-400"
            >
              VAMOS CONVERSAR
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden size-10 flex items-center justify-center border border-[#3f3f46] text-[#fafafa] hover:bg-purple-600 hover:border-purple-600 transition-colors duration-200"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
