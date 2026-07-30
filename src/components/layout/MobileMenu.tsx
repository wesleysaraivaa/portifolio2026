import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { socialLinks } from '@/data/socialLinks'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/lib/navigation'

interface SubItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  number: string
  href: string
  subItems?: SubItem[]
}

const navItems: NavItem[] = [
  { number: '00', label: 'INÍCIO', href: '#inicio' },
  { 
    number: '01', 
    label: 'SOBRE', 
    href: '#sobre',
    subItems: [
      { label: 'SOBRE MIM', href: '#sobre' },
      { label: 'HABILIDADES', href: '#habilidades' },
      { label: 'FORMAÇÃO', href: '#formacao' },
      { label: 'TRAJETÓRIA', href: '#trajetoria' }
    ]
  },
  { number: '02', label: 'SERVIÇOS', href: '#servicos' },
  { number: '03', label: 'PROJETOS', href: '#projetos' },
  { 
    number: '04', 
    label: 'PROCESSO', 
    href: '#processo',
    subItems: [
      { label: 'PROCESSO', href: '#processo' },
      { label: 'DIFERENCIAIS', href: '#diferenciais' }
    ]
  },
  { number: '05', label: 'CONTATO', href: '#contato' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

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

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [href]: !prev[href],
    }))
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

          <nav className="flex-1 flex flex-col justify-center px-6 overflow-y-auto" aria-label="Navegação principal">
            <ul className="space-y-1 py-6">
              {navItems.map((item, i) => {
                const hasSubItems = !!item.subItems
                const isExpanded = !!expandedItems[item.href]

                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    <div>
                      {hasSubItems ? (
                        <button
                          onClick={() => toggleExpand(item.href)}
                          className="group w-full flex items-center justify-between py-4 text-left border-b border-[#27272a] hover:border-purple-600 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-purple-500 tracking-widest min-w-8">
                              {item.number}
                            </span>
                            <span className="text-3xl font-bold uppercase tracking-tight text-[#fafafa] group-hover:text-purple-400 transition-colors duration-200">
                              {item.label}
                            </span>
                          </div>
                          <ChevronDown
                            size={20}
                            className={cn(
                              'text-[#71717a] group-hover:text-purple-400 transition-transform duration-300',
                              isExpanded && 'rotate-180 text-purple-400'
                            )}
                          />
                        </button>
                      ) : (
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
                      )}

                      {hasSubItems && (
                        <motion.div
                          initial={false}
                          animate={isExpanded ? { height: 'auto', opacity: 1, marginTop: 8 } : { height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                          className="overflow-hidden flex flex-col pl-12 border-l border-[#27272a]/50 ml-4 gap-1"
                        >
                          {item.subItems?.map((sub) => (
                            <button
                              key={sub.href}
                              onClick={() => handleLinkClick(sub.href)}
                              className="text-left py-3 text-sm font-mono uppercase tracking-widest text-[#a1a1aa] hover:text-purple-400 transition-colors duration-150"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.li>
                )
              })}
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
