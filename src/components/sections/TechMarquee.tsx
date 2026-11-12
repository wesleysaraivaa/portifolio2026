import type { ComponentType, ReactNode } from 'react'
import Marquee from 'react-fast-marquee'

type MarqueeProps = {
  speed?: number
  gradient?: boolean
  children?: ReactNode
  'aria-hidden'?: boolean | 'true' | 'false'
}

// Normaliza o export do react-fast-marquee para compatibilidade entre o Vite dev server e a build de produção.
const MarqueeComponent = (
  typeof Marquee === 'function'
    ? Marquee
    : ((Marquee as unknown as { default: ComponentType<MarqueeProps> }).default || Marquee)
) as ComponentType<MarqueeProps>

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase',
  'Git', 'GitHub',
]

export function TechMarquee() {
  return (
    <section
      aria-label="Tecnologias"
      className="w-full bg-[#0f0f12] py-5 overflow-hidden border-y border-[#27272a]"
    >
      <ul className="sr-only">
        {technologies.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <MarqueeComponent
        speed={60}
        gradient={false}
        aria-hidden="true"
      >
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 mx-6 text-base font-medium uppercase tracking-[0.15em] text-[#71717a]"
          >
            {tech}
            <span className="text-brand-500" aria-hidden="true">·</span>
          </span>
        ))}
      </MarqueeComponent>
    </section>
  )
}
