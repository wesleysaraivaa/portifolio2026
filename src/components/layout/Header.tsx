import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/lib/navigation'

interface SubItem {
  label: string
  href: string
}

interface NavItem {
  number: string
  label: string
  href: string
  ids: string[]
  subItems?: SubItem[]
}

const navItems: NavItem[] = [
  { number: '00', label: 'INÍCIO', href: '#inicio', ids: ['inicio'] },
  { 
    number: '01', 
    label: 'SOBRE', 
    href: '#sobre', 
    ids: ['sobre', 'habilidades', 'formacao', 'trajetoria'],
    subItems: [
      { label: 'SOBRE MIM', href: '#sobre' },
      { label: 'HABILIDADES', href: '#habilidades' },
      { label: 'FORMAÇÃO', href: '#formacao' },
      { label: 'TRAJETÓRIA', href: '#trajetoria' }
    ]
  },
  { number: '02', label: 'SERVIÇOS', href: '#servicos', ids: ['servicos'] },
  { number: '03', label: 'PROJETOS', href: '#projetos', ids: ['projetos'] },
  { 
    number: '04', 
    label: 'PROCESSO', 
    href: '#processo', 
    ids: ['processo', 'diferenciais'],
    subItems: [
      { label: 'PROCESSO', href: '#processo' },
      { label: 'DIFERENCIAIS', href: '#diferenciais' }
    ]
  },
  { number: '05', label: 'CONTATO', href: '#contato', ids: ['contato'] },
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
    const allSectionIds = navItems.flatMap((item) => item.ids)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const matchedItem = navItems.find((item) => item.ids.includes(e.target.id))
            if (matchedItem) {
              setActiveSection(matchedItem.href.replace('#', ''))
            }
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    allSectionIds.forEach((id) => {
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
            className="cursor-pointer font-bold text-sm uppercase tracking-widest text-[#fafafa] hover:text-purple-400 transition-colors duration-200"
            aria-label="Ir para o início"
          >
            WPS
          </button>

          <nav className=" hidden lg:flex items-center gap-0 h-full" aria-label="Navegação principal">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group h-full flex items-center px-4"
              >
                <button
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-mono uppercase cursor-pointer tracking-widest transition-colors duration-200 py-5',
                    activeSection === item.href.replace('#', '')
                      ? 'text-purple-400'
                      : 'text-[#a1a1aa] hover:text-[#fafafa]'
                  )}
                >
                  <span className="text-purple-600 mr-1">{item.number}</span>
                  {item.label}
                  {item.subItems && (
                    <ChevronDown size={14} className="text-[#71717a] group-hover:text-purple-400 group-hover:rotate-180 transition-all duration-300 ease-out" />
                  )}
                </button>

                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="header-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500"
                  />
                )}

                {item.subItems && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-[#09090b]/98 backdrop-blur-md border border-[#3f3f46] p-1.5 min-w-[180px] flex flex-col opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 ease-[0.22,1,0.36,1] shadow-2xl z-50">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.href}
                        onClick={() => handleNav(sub.href)}
                        className="cursor-pointer text-left px-4 py-2.5 text-[12px] font-mono uppercase tracking-widest text-[#a1a1aa] hover:text-purple-400 hover:bg-[#18181b] transition-all duration-150"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contato')}
              className="cursor-pointer hidden md:flex items-center gap-2 h-9 px-5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-400"
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
