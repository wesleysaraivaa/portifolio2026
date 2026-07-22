import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'

const differentials = [
  { number: '01', title: 'ATENDIMENTO PRÓXIMO', description: 'Comunicação direta e transparente em todas as etapas do projeto.' },
  { number: '02', title: 'SOLUÇÕES PERSONALIZADAS', description: 'Cada projeto é único. Sem templates prontos sem propósito.' },
  { number: '03', title: 'EXPERIÊNCIA COM SUPORTE', description: 'Formação técnica que vai além do código: entendo o lado do usuário.' },
  { number: '04', title: 'VISÃO DE NEGÓCIO', description: 'Desenvolvimento pensado nos objetivos reais do cliente.' },
  { number: '05', title: 'COMUNICAÇÃO SIMPLES', description: 'Sem jargões desnecessários. Clareza em todo o processo.' },
  { number: '06', title: 'RESPONSIVIDADE', description: 'Tudo funciona perfeitamente em qualquer dispositivo.' },
  { number: '07', title: 'APRENDIZADO CONTÍNUO', description: 'Sempre atualizado com as melhores práticas do mercado.' },
  { number: '08', title: 'COMPROMISSO TOTAL', description: 'Do início à entrega: comprometimento com prazo e qualidade.' },
]

export function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-[#18181b] relative overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="06" title="MAIS DO QUE CÓDIGO" subtitle="DIFERENCIAIS" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {differentials.map((item) => (
            <motion.div
              key={item.number}
              variants={staggerItem}
              className="group relative border border-[#27272a] p-6 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 cursor-default"
            >
              <span
                aria-hidden="true"
                className="block text-[clamp(2.5rem,6vw,4rem)] font-black text-[#27272a] group-hover:text-purple-700 transition-colors duration-300 leading-none tracking-tighter mb-4 select-none"
              >
                {item.number}
              </span>

              <h3 className="text-sm font-black uppercase tracking-tight text-[#fafafa] group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#71717a] group-hover:text-purple-200 transition-colors duration-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
