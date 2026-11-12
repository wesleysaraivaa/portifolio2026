import type { ComponentType, ReactNode } from 'react'
import Marquee from 'react-fast-marquee'

type MarqueeComponentType = ComponentType<{
  speed?: number
  gradient?: boolean
  children?: ReactNode
  'aria-hidden'?: boolean | 'true' | 'false'
}>

const MarqueeComponent = (
  typeof Marquee === 'function'
    ? Marquee
    : (Marquee as unknown as { default: MarqueeComponentType }).default || Marquee
) as MarqueeComponentType

const marqueeItems = [
  'DISPONÍVEL PARA NOVOS DESAFIOS',
  'FREELANCE',
  'DESENVOLVIMENTO WEB',
  'SUPORTE TÉCNICO',
  'OPEN TO WORK',
]

export function Availability() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="disponibilidade"
      className="relative py-24 md:py-32 bg-[#0b1220] border-y border-[#101f33] overflow-hidden"
      aria-label="Disponibilidade profissional"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[clamp(4rem,18vw,16rem)] font-black uppercase tracking-[-0.04em] text-brand-900 leading-none opacity-70 whitespace-nowrap">
          DISPONÍVEL
        </span>
      </div>

      <div className="absolute top-0 left-0 right-0 border-b border-[#101f33] py-3 overflow-hidden">
        <ul className="sr-only">
          {marqueeItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <MarqueeComponent speed={50} gradient={false} aria-hidden="true">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6 text-xs font-mono uppercase tracking-[0.2em] text-[#71717a]">
              {item}
              <span aria-hidden="true" className="text-brand-500">·</span>
            </span>
          ))}
        </MarqueeComponent>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase tracking-[-0.035em] leading-[0.9] text-[#fafafa] mb-6">
          VAMOS CRIAR<br />
          <span className="text-brand-400">ALGO?</span>
        </h2>
        <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto mb-10 leading-relaxed">
          Estou aberto a oportunidades profissionais, projetos freelance e colaborações
          que envolvam desenvolvimento web, suporte técnico e soluções digitais.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="h-14 px-8 bg-brand-400 cursor-pointer hover:bg-brand-300 active:scale-95 text-[#09090b] text-sm font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-400"
          >
            ENTRAR EM CONTATO
          </button>
          <a
            href="https://www.linkedin.com/in/wesleysaraivaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-8 border border-[#3f3f46] text-[#fafafa] hover:border-brand-400 hover:text-brand-300 text-sm font-bold uppercase tracking-widest transition-colors duration-200 flex items-center focus-visible:outline-2 focus-visible:outline-brand-400"
          >
            VER LINKEDIN
          </a>
          <button
            className="h-14 px-8 border border-[#27272a] text-[#52525b] text-sm font-bold uppercase tracking-widest transition-colors duration-200 opacity-60 cursor-not-allowed"
            title="Currículo em PDF em breve"
            aria-disabled="true"
            onClick={() => {}}
          >
            BAIXAR CURRÍCULO
          </button>
        </div>
        <p className="text-xs font-mono text-[#52525b] mt-3">
          Currículo em PDF em breve.
        </p>
      </div>
    </section>
  )
}
