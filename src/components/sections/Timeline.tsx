import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/data/experiences'
import { Zap, Monitor, GraduationCap, Wrench, Code2, BarChart3, Globe, Building2 } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'

const iconMap = { Zap, Monitor, GraduationCap, Wrench, Code2, BarChart3, Globe, Building2 } as const

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="trajetoria" className="py-24 md:py-32 bg-[#18181b] relative overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="08" title="TRAJETÓRIA" />

        <motion.ul
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
          aria-label="Linha do tempo profissional"
        >
          {experiences.map((exp) => {
            const Icon = iconMap[exp.icon as keyof typeof iconMap]
            return (
              <motion.li
                key={exp.id}
                variants={staggerItem}
                className="group relative grid grid-cols-[auto_1fr] gap-0 border-b border-[#27272a] hover:border-purple-600 transition-colors duration-300"
              >
                <div className="w-20 md:w-28 shrink-0 pt-6 pb-6 border-r border-[#27272a] group-hover:border-purple-600 transition-colors duration-300 pr-4 md:pr-6">
                  <span
                    aria-hidden="true"
                    className="block text-[clamp(1.8rem,5vw,3.5rem)] font-black text-[#27272a] group-hover:text-purple-700 transition-colors duration-300 leading-none tracking-tighter"
                  >
                    {exp.number}
                  </span>
                </div>

                <div className="py-6 pl-6 md:pl-8 flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && <Icon size={14} className="text-purple-500 shrink-0" />}
                      {exp.period && (
                        <span className="text-xs font-mono uppercase tracking-widest text-[#52525b]">
                          {exp.period}
                        </span>
                      )}
                      {exp.highlight && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 border border-purple-700 px-2 py-0.5">
                          DESTAQUE
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#fafafa] group-hover:text-purple-300 transition-colors duration-300 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
