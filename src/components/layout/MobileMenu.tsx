import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { socialLinks } from '@/data/socialLinks'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/lib/navigation'

interface NavItem {
  label: string
  number: string
  href: string
}

const navItems: NavItem[] = [
  { number: '00', label: 'INÍCIO', href: '#inicio' },
  { number: '01', label: 'SOBRE', href: '#sobre' },
  { number: '02', label: 'HABILIDADES', href: '#habilidades' },
  { number: '03', label: 'SERVIÇOS', href: '#servicos' },
  { number: '04', label: 'PROJETOS', href: '#projetos' },
  { number: '05', label: 'FORMAÇÃO', href: '#formacao' },
  { number: '06', label: 'PROCESSO', href: '#processo' },
  { number: '07', label: 'DIFERENCIAIS', href: '#diferenciais' }, 
  { number: '08', label: 'TRAJETÓRIA', href: '#trajetoria' }, 
  { number: '09', label: 'CONTATO', href: '#contato' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleLinkClick = (href: string) => {
    onClose()
    setTimeout(() => {
      scrollToSection(href)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-200 bg-[#09090b] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#3f3f46]">
            <span className="text-sm font-mono uppercase tracking-widest text-[#a1a1aa]">
              MENU
            </span>
            <button
              onClick={onClose}
              className="size-11 flex items-center justify-center border border-[#3f3f46] text-[#fafafa] hover:bg-purple-600 hover:border-purple-600 transition-colors duration-200"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6" aria-label="Navegação principal">
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="group w-full flex items-center gap-4 py-4 text-left border-b border-[#27272a] hover:border-purple-600 transition-colors duration-200"
                  >
                    <span className="text-xs font-mono text-purple-500 tracking-widest min-w-8">
                      {item.number}
                    </span>
                    <span className="text-3xl font-bold uppercase tracking-tight text-[#fafafa] group-hover:text-purple-400 transition-colors duration-200">
                      {item.label}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-6 border-t border-[#27272a]">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest text-[#a1a1aa]',
                    'hover:text-purple-400 transition-colors duration-200'
                  )}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
