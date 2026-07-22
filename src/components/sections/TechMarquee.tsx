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
  'Node.js', 'Tailwind CSS', 'WordPress', 'PostgreSQL', 'Supabase',
  'Git', 'GitHub',
]

export function TechMarquee() {
  return (
    <section
      aria-label="Tecnologias"
      className="w-full bg-purple-600 py-5 overflow-hidden border-y-2 border-purple-700"
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
            className="inline-flex items-center gap-6 mx-6 text-xl font-black uppercase tracking-tighter text-black"
          >
            {tech}
            <span className="text-purple-800 text-2xl" aria-hidden="true">·</span>
          </span>
        ))}
      </MarqueeComponent>
    </section>
  )
}
