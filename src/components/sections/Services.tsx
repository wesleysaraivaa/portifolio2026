import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, LayoutDashboard, FileCode, Cpu, Headphones, ArrowUpRight } from 'lucide-react'
import { services } from '@/data/services'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { scrollToSection } from '@/lib/navigation'

const iconMap = { Globe, LayoutDashboard, FileCode, Cpu, Headphones } as const

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleContact = () => {
    scrollToSection('#contato')
  }

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#18181b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader index="03" title="SERVIÇOS" subtitle="O QUE EU FAÇO" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-t border-[#27272a]"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.button
                key={service.id}
                type="button"
                variants={staggerItem}
                onClick={handleContact}
                aria-label={`Solicitar serviço: ${service.title}`}
                className="group relative block w-full text-left cursor-pointer border-b border-[#27272a] transition-colors duration-300 hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-400"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-400 origin-top scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-x-8 gap-y-4 py-8 md:py-10 md:pl-8 md:pr-16">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#52525b] transition-colors duration-300 group-hover:text-brand-400 md:col-span-1">
                    {service.number}
                  </span>

                  <h3 className="flex items-start gap-4 text-xl md:text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#fafafa] md:col-span-5">
                    {Icon && (
                      <Icon
                        size={22}
                        className="mt-0.5 shrink-0 text-brand-400"
                        aria-hidden="true"
                      />
                    )}
                    <span>{service.title}</span>
                  </h3>

                  <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed md:col-span-3">
                    {service.description}
                  </p>

                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 md:col-span-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#71717a]"
                      >
                        <span aria-hidden="true" className="size-1 shrink-0 bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-[#52525b] transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-[calc(50%_+_2px)]"
                />
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
