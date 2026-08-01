import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, LayoutDashboard, FileCode, Cpu, Headphones } from 'lucide-react'
import { services } from '@/data/services'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'
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
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="03" title="SERVIÇOS" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className={cn(
                  'group relative border border-[#27272a] p-8 hover:bg-purple-600 hover:border-purple-600',
                  'transition-all duration-300 cursor-default flex flex-col',
                  i === 0 && 'lg:col-span-2'
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 text-6xl font-black text-[#27272a] group-hover:text-purple-700 transition-colors duration-300 leading-none tracking-tighter select-none"
                >
                  {service.number}
                </span>

                {Icon && (
                  <div className="mb-5">
                    <Icon
                      size={28}
                      className="text-purple-400 group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <h3 className="text-xl font-black uppercase tracking-tight text-[#fafafa] group-hover:translate-x-1 transition-transform duration-300 mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[#a1a1aa] group-hover:text-purple-100 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-6" aria-label={`Itens do serviço ${service.title}`}>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-mono text-[#71717a] group-hover:text-purple-200 transition-colors duration-300 uppercase tracking-wide"
                    >
                      <span aria-hidden="true" className="size-1.5 bg-purple-500 group-hover:bg-white transition-colors duration-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleContact}
                  className={cn(
                    'w-full h-11 border cursor-pointer border-purple-600 group-hover:border-white text-xs font-bold uppercase tracking-widest',
                    'text-purple-400 group-hover:text-white group-hover:bg-purple-800',
                    'transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white'
                  )}
                  aria-label={`Solicitar serviço: ${service.title}`}
                >
                  SOLICITAR SERVIÇO
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
