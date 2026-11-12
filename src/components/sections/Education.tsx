import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { educations } from '@/data/education'
import { GraduationCap, Award } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'

const iconMap = { Tecnólogo: GraduationCap, 'Curso Técnico': Award } as const

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="formacao" className="py-24 md:py-32 bg-[#18181b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader index="05" title="FORMAÇÃO" className="mb-12" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr] gap-0"
        >
          {educations.map((edu) => {
            const Icon = iconMap[edu.type as keyof typeof iconMap] || GraduationCap
            return (
              <motion.article
                key={edu.id}
                variants={staggerItem}
                className="relative card p-8 bg-[#09090b]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 text-6xl font-black text-brand-900 leading-none tracking-tighter select-none"
                >
                  {edu.number}
                </span>

                <Icon
                  size={24}
                  className="text-brand-400 mb-5"
                  aria-hidden="true"
                />

              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-300 bg-brand-900/40 border border-brand-900 px-2 py-0.5 mb-4 inline-block">
                {edu.type}
              </span>

              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#fafafa] leading-tight mb-2">
                {edu.degree}
              </h3>

              <p className="font-mono text-sm text-brand-400 mb-1">
                {edu.institution}
              </p>
              <p className="font-mono text-xs text-[#a1a1aa] mb-5 uppercase tracking-widest">
                {edu.period}
              </p>

              <p className="text-sm md:text-base text-[#71717a] leading-relaxed">
                {edu.description}
              </p>
            </motion.article>
          )})}
        </motion.div>
      </div>
    </section>
  )
}
