import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Code, Monitor, Wrench } from 'lucide-react'
import { Github, Linkedin, Instagram } from '@/components/ui/icons'
import { socialLinks } from '@/data/socialLinks'
import { scrollToSection } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import wesleyDevImg from '@/assets/images/wesley-dev.png'
import LiquidEther from '@/components/ui/LiquidEther'

const iconMap = { Github, Linkedin, Instagram } as const

const services = [
  { icon: Code, label: 'Dev Web' },
  { icon: Monitor, label: 'Suporte TI' },
  { icon: Wrench, label: 'Manutenção' },
] as const

function CornerMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('absolute size-3 pointer-events-none z-20', className)}>
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
      className="relative min-h-svh flex flex-col justify-center overflow-hidden bg-[#09090b] pt-24 pb-16"
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

      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none bg-linear-to-b from-[#09090b]/50 via-transparent to-[#09090b]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-4vw] top-1/2 -translate-y-1/2 text-[clamp(7rem,22vw,22rem)] font-black uppercase leading-none text-[#18181b]/60 pointer-events-none select-none tracking-tighter z-1"
      >
        DEV
      </div>

      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-2 pointer-events-none"
      >
        <CornerMark className="left-4 top-24" />
        <CornerMark className="right-4 top-24" />
        <CornerMark className="left-4 bottom-12" />
        <CornerMark className="right-4 bottom-12" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center"
      >
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#71717a]"
          >
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="text-[#fafafa] font-semibold">Wesley Saraiva</span>
            <span className="text-[#3f3f46]">·</span>
            <span className="text-emerald-400">Disponível</span>
          </motion.div>

          <div className="overflow-hidden mb-6 sm:mb-7">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-[clamp(2.1rem,6.5vw,4.8rem)] font-black uppercase tracking-[-0.04em] leading-[0.96] text-[#fafafa] max-w-2xl"
            >
              SITES, SISTEMAS{' '}
              <span className="text-brand-400">&</span>{' '}
              INTERFACES SOB MEDIDA.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 sm:mb-8"
          >
            {services.map((svc) => (
              <div
                key={svc.label}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 border border-[#27272a] hover:border-brand-400/50 bg-[#121214]/60 transition-colors duration-200 cursor-default"
              >
                <svc.icon size={13} className="text-brand-400 shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-wider sm:tracking-widest text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors duration-200">
                  {svc.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 font-mono text-xs uppercase tracking-widest text-[#52525b]"
          >
            {['React', 'TypeScript', 'Tailwind', 'Node.js'].map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#3f3f46]" aria-hidden="true">/</span>}
                <span>{tech}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#projetos')
                }}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-12 px-5 sm:px-6 bg-brand-400 hover:bg-brand-300 active:scale-95 text-[#09090b] text-xs font-bold font-mono uppercase tracking-wider sm:tracking-widest transition-all duration-200"
              >
                <span>VER PROJETOS</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contato')
                }}
                className="inline-flex items-center justify-center h-11 sm:h-12 px-5 sm:px-6 border border-[#3f3f46] hover:border-brand-400 hover:text-brand-400 text-[#fafafa] text-xs font-bold font-mono uppercase tracking-wider sm:tracking-widest transition-all duration-200"
              >
                FALAR COMIGO
              </a>
            </div>

            <div className="hidden sm:block h-6 w-px bg-[#27272a] mx-1" aria-hidden="true" />

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:border-brand-400 hover:text-brand-400 transition-all duration-200"
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={14} />}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="hidden lg:block relative w-72 xl:w-80 shrink-0"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-brand-400 to-transparent"
          />

          <div className="relative">
            <div className="absolute -top-3 right-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#09090b] border border-[#27272a] font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              DISPONÍVEL
            </div>

            <div className="border border-[#27272a] overflow-hidden bg-[#121214]">
              <img
                src={wesleyDevImg}
                alt="Wesley Saraiva — Desenvolvedor Web em Ubajara, Ceará"
                width={320}
                height={400}
                className="w-full object-cover object-top"
                loading="eager"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
              <span>UBAJARA, CE</span>
              <span>-3.8°S, -40.9°W</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <button
        onClick={handleScroll}
        aria-label="Rolar para próxima seção"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#a1a1aa] hover:text-brand-400 transition-colors duration-200 z-10"
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
