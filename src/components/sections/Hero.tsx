import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Github, Linkedin, Instagram } from '@/components/ui/icons'
import { socialLinks } from '@/data/socialLinks'
import { scrollToSection } from '@/lib/navigation'
import wesleyDevImg from '@/assets/images/wesley-dev.png'
import LiquidEther from '@/components/ui/LiquidEther'

const iconMap = { Github, Linkedin, Instagram } as const

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
          className="w-full h-full opacity-90 mix-blend-screen"
          colors={['#6d28d9', '#8b5cf6', '#c4b5fd']}
          mouseForce={25}
          cursorSize={140}
          resolution={0.55}
          autoDemo={true}
          autoSpeed={0.55}
          autoIntensity={2.8}
          autoResumeDelay={1500}
          autoRampDuration={0.8}
          takeoverDuration={0.25}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#09090b]/20 via-transparent to-[#09090b]/85"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-5vw] top-1/2 -translate-y-1/2 text-[clamp(8rem,30vw,28rem)] font-black uppercase leading-none text-[#18181b] pointer-events-none select-none tracking-tighter z-[2]"
      >
        WEB
      </div>

      <div aria-hidden="true" className="absolute left-[5%] top-0 bottom-0 w-px bg-[#27272a] hidden xl:block z-[2]" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-[95vw] mx-auto w-full px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa]">
              DESENVOLVEDOR WEB · UBAJARA, CEARÁ
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-[clamp(4rem,14vw,11rem)] font-black uppercase leading-none tracking-tighter text-[#fafafa]"
            >
              WESLEY
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-end gap-4 flex-wrap"
            >
              <span className="text-[clamp(4rem,14vw,11rem)] font-black uppercase leading-none tracking-tighter text-purple-500">
                SARAIVA
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[clamp(1rem,2vw,1.25rem)] text-[#a1a1aa] max-w-2xl mb-3"
          >
            Desenvolvedor web, técnico em informática e criador de soluções digitais.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-[#71717a] max-w-xl mb-10 leading-relaxed"
          >
            Desenvolvo sites, interfaces e aplicações voltadas para empresas, profissionais
            e projetos que precisam fortalecer sua presença digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projetos"
              onClick={(e) => { e.preventDefault(); scrollToSection('#projetos') }}
              className="inline-flex items-center justify-center h-14 px-8 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-400"
            >
              VER PROJETOS
            </a>
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contato') }}
              className="inline-flex items-center justify-center h-14 px-8 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-400"
            >
              FALAR COMIGO
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
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
                  className="size-10 border border-[#3f3f46] flex items-center justify-center text-[#a1a1aa] hover:border-purple-600 hover:text-purple-400 transition-all duration-200"
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
              className="absolute -top-4 -left-4 w-full h-full bg-purple-700 z-0"
            />
            <div className="relative z-10 border-2 border-purple-600 overflow-hidden">
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
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-10 max-w-[95vw] mx-auto w-full px-4 md:px-6 mt-8 lg:mt-12"
      >
        <div className="border border-[#27272a] inline-flex items-center gap-3 px-4 py-2">
          <span className="size-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa]">
            DISPONÍVEL PARA OPORTUNIDADES E PROJETOS
          </span>
        </div>
      </motion.div>

      <button
        onClick={handleScroll}
        aria-label="Rolar para próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a1a1aa] hover:text-purple-400 transition-colors duration-200 z-10"
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
