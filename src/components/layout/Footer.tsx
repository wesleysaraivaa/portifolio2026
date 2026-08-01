import { ArrowUp } from 'lucide-react'
import { Github, Linkedin, Instagram } from '@/components/ui/icons'
import { socialLinks } from '@/data/socialLinks'

const iconMap = {
  Github,
  Linkedin,
  Instagram,
} as const

const footerLinks = [
  { label: 'SOBRE', href: '#sobre' },
  { label: 'HABILIDADES', href: '#habilidades' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'CONTATO', href: '#contato' },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-[#09090b] border-t-2 border-purple-600 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[clamp(6rem,18vw,14rem)] font-black uppercase tracking-tighter text-[#18181b] pointer-events-none select-none leading-none whitespace-nowrap"
      >
        WESLEY
      </div>

      <div className="relative z-10 max-w-[95vw] mx-auto px-4 md:px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#27272a]">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#fafafa] mb-1">
              WESLEY SARAIVA
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">
              DESENVOLVEDOR WEB · UNIVERSOTECH
            </p>
            <p className="text-sm text-[#a1a1aa] max-w-xs">
              Desenvolvimento web, suporte técnico e soluções digitais em Ubajara, Ceará.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-4">
              NAVEGAÇÃO
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-purple-400 transition-colors duration-200 uppercase tracking-wide font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-4">
              REDES SOCIAIS
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-purple-400 transition-colors duration-200"
                    aria-label={`Visitar ${link.label}`}
                  >
                    {Icon && <Icon size={14} />}
                    {link.label}
                  </a>
                )
              })}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest">
                Ubajara, Ceará
              </span>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-xs text-[#a1a1aa]">
              © 2026 Wesley Saraiva. Todos os direitos reservados.
            </span>
            <span className="text-xs text-[#a1a1aa]">
              Desenvolvido por Wesley Saraiva.
            </span>
          </div>
          <button
            onClick={scrollTop}
            className="flex items-center cursor-pointer gap-2 text-xs font-mono uppercase tracking-widest text-[#a1a1aa] hover:text-purple-400 transition-colors duration-200 group"
            aria-label="Voltar ao topo"
          >
            VOLTAR AO TOPO
            <span className="size-7 border border-[#3f3f46] group-hover:border-purple-600 flex items-center justify-center transition-colors duration-200">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
