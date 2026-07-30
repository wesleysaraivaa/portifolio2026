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
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="05" title="FORMAÇÃO" className="mb-12" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
        >
          {educations.map((edu) => {
            const Icon = iconMap[edu.type as keyof typeof iconMap] || GraduationCap
            return (
              <motion.article
                key={edu.id}
                variants={staggerItem}
                className="group relative border-2 border-[#27272a] hover:border-purple-600 p-8 transition-all duration-300 bg-[#09090b]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 text-6xl font-black text-[#18181b] group-hover:text-purple-900 transition-colors duration-300 leading-none tracking-tighter select-none"
                >
                  {edu.number}
                </span>

                <Icon
                  size={24}
                  className="text-purple-500 mb-5"
                  aria-hidden="true"
                />

              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 border border-purple-800 px-2 py-0.5 mb-4 inline-block">
                {edu.type}
              </span>

              <h3 className="text-lg font-black uppercase tracking-tight text-[#fafafa] group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                {edu.degree}
              </h3>

              <p className="font-mono text-sm text-purple-400 group-hover:text-purple-300 transition-colors duration-300 mb-1">
                {edu.institution}
              </p>
              <p className="font-mono text-xs text-[#a1a1aa] mb-5 uppercase tracking-widest">
                {edu.period}
              </p>

              <p className="text-sm text-[#71717a] leading-relaxed group-hover:text-[#a1a1aa] transition-colors duration-300">
                {edu.description}
              </p>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-purple-600 transition-all duration-500"
              />
            </motion.article>
          )})}
        </motion.div>
      </div>
    </section>
  )
}
