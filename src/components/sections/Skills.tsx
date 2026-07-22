import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id)
  const current = skillCategories.find((c) => c.id === active)!

  return (
    <section id="habilidades" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">


      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="03" title="HABILIDADES" />

        <div className="flex flex-wrap gap-0 border-b border-[#27272a] mb-12 overflow-x-auto no-scrollbar" role="tablist" aria-label="Categorias de habilidades">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={cn(
                'px-5 py-4 text-xs font-mono uppercase tracking-widest border-b-2 -mb-0.5 transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-purple-400',
                active === cat.id
                  ? 'border-purple-500 text-purple-400 bg-purple-950/30'
                  : 'border-transparent text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46]'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-label={current.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div aria-hidden="true" className="relative mb-8 overflow-hidden">
              <span className="text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-tighter text-[#18181b] leading-none block">
                {current.label}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
              {current.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group border border-[#27272a] p-4 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 cursor-default"
                >
                  <span className="text-[10px] font-mono text-[#52525b] group-hover:text-purple-200 block mb-2 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wide text-[#fafafa] group-hover:text-white transition-colors leading-tight block">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
