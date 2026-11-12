import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Github, Linkedin, Instagram } from '@/components/ui/icons'
import { socialLinks } from '@/data/socialLinks'
import { scrollToSection } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import wesleyDevImg from '@/assets/images/wesley-dev.png'
import LiquidEther from '@/components/ui/LiquidEther'

const iconMap = { Github, Linkedin, Instagram } as const

const stack = ['React', 'TypeScript', 'Node.js', 'Tailwind', 'Git']

function CornerMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('absolute size-3', className)}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#3f3f46]" />
      <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[#3f3f46]" />
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, 60])

  const handleScroll = () => {
    scrollToSection('#sobre')
  }

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative h-svh min-h-svh flex flex-col justify-center overflow-hidden bg-[#09090b] pt-16"
      aria-label="Apresentação"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <LiquidEther
          className="w-full h-full opacity-25 mix-blend-screen"
          colors={['#0b1f3a', '#1d4c8f', '#3b82f6']}
          mouseForce={12}
          cursorSize={140}
          resolution={0.55}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.1}
          autoResumeDelay={1800}
          autoRampDuration={1}
          takeoverDuration={0.35}
        />
      </div>

      {/* Grade técnica (blueprint) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none bg-linear-to-b from-[#09090b]/45 via-[#09090b]/35 to-[#09090b]/95"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-5vw] top-1/2 -translate-y-1/2 text-[clamp(8rem,30vw,28rem)] font-black uppercase leading-none text-[#18181b] pointer-events-none select-none tracking-tighter z-2"
      >
        WEB
      </div>

      {/* Marcas de registro — alinhadas à grade de conteúdo */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-3 pointer-events-none"
      >
        <CornerMark className="left-0 top-24" />
        <CornerMark className="right-0 top-24" />
        <CornerMark className="left-0 bottom-8" />
        <CornerMark className="right-0 bottom-8" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between gap-4 border-t border-[#27272a] pt-3 mb-8"
          >
            <span className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa]">
                DESENVOLVEDOR WEB · UBAJARA-CE
              </span>
            </span>
            <span className="hidden sm:block text-xs font-mono uppercase tracking-[0.2em] text-[#52525b]">
              PORTFÓLIO — 2026
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-[clamp(3rem,14vw,11rem)] font-black uppercase leading-none tracking-[-0.035em] text-[#fafafa]"
            >
              WESLEY
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-end gap-4 flex-wrap"
            >
              <span className="text-[clamp(3rem,14vw,11rem)] font-black uppercase leading-none tracking-[-0.035em] text-brand-400">
                SARAIVA
              </span>
            </motion.div>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-5 mb-6 font-mono text-xs uppercase tracking-[0.15em] text-[#71717a]"
            aria-label="Tecnologias principais"
          >
            {stack.map((tech, i) => (
              <li key={tech} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-brand-500">
                    /
                  </span>
                )}
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-[clamp(1rem,2vw,1.25rem)] text-[#a1a1aa] max-w-2xl mb-10 leading-relaxed"
          >
            Desenvolvedor web, técnico em informática e criador de soluções digitais — transformo
            necessidades de negócio em sites, interfaces e aplicações para quem precisa fortalecer
            a presença digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-row gap-4 mb-12"
          >
            <a
              href="#projetos"
              onClick={(e) => { e.preventDefault(); scrollToSection('#projetos') }}
              className="inline-flex items-center justify-center h-14 px-8 bg-brand-400 hover:bg-brand-300 active:scale-95 text-[#09090b] text-sm font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-400"
            >
              VER PROJETOS
            </a>
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contato') }}
              className="inline-flex items-center justify-center h-14 px-8 border border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-[#09090b] text-sm font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-400"
            >
              FALAR COMIGO
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#52525b]">
              REDES
            </span>
            <div className="h-px w-6 bg-[#3f3f46]" aria-hidden="true" />
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 border border-[#3f3f46] flex items-center justify-center text-[#a1a1aa] hover:border-brand-400 hover:text-brand-400 transition-all duration-200"
                  aria-label={link.label}
                >
                  {Icon && <Icon size={16} />}
                </a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="hidden lg:block relative"
        >
          <div className="relative w-65 xl:w-80">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 w-full h-full bg-brand-500 z-0"
            />
            <div className="relative z-10 border-2 border-brand-400 overflow-hidden">
              <img
                src={wesleyDevImg}
                alt="Wesley Saraiva — Desenvolvedor Web em Ubajara, Ceará"
                width={320}
                height={400}
                className="w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 right-0 font-mono text-[10px] uppercase tracking-widest text-[#52525b]"
            >
              -3.8°S, -40.9°W
            </div>
            <div className="absolute -top-3 -right-3 bg-green-600 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 z-20">
              DISPONÍVEL
            </div>
          </div>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
            FIG. 01 — WESLEY SARAIVA
          </p>
        </motion.div>
      </motion.div>

      <button
        onClick={handleScroll}
        aria-label="Rolar para próxima seção"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#a1a1aa] hover:text-brand-400 transition-colors duration-200 z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </button>
    </section>
  )
}
