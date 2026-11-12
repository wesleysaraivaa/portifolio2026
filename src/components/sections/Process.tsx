import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Search, FileCode, Code2, Rocket } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'

const steps = [
  { number: '01', title: 'CONVERSA INICIAL', description: 'Entendemos suas necessidades e objetivos.', icon: MessageSquare },
  { number: '02', title: 'ENTENDIMENTO', description: 'Análise do contexto, público e referências.', icon: Search },
  { number: '03', title: 'PROPOSTA E PLANEJAMENTO', description: 'Definição de escopo, prazos e estrutura.', icon: FileCode },
  { number: '04', title: 'DESENVOLVIMENTO', description: 'Construção da solução com código limpo e moderno.', icon: Code2 },
  { number: '05', title: 'ENTREGA E SUPORTE', description: 'Publicação, testes e acompanhamento pós-entrega.', icon: Rocket },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="processo" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader index="06" title="COMO EU TRABALHO" subtitle="PROCESSO" className="mb-12"/>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="group relative card p-8 cursor-default"
            >
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-6 right-0 w-px h-8 bg-[#27272a] translate-x-0.5"
                />
              )}

              <span
                aria-hidden="true"
                className="block text-3xl font-black text-brand-900 leading-none mb-3 select-none"
              >
                {step.number}
              </span>

              <step.icon
                size={18}
                className="text-brand-400 mb-3"
                aria-hidden="true"
              />

              <h3 className="text-sm md:text-base lg:text-lg font-semibold tracking-[-0.01em] text-[#fafafa] mb-2 leading-tight line-clamp-2 wrap-break-word">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-[#71717a] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
