import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Code, Monitor, Headphones, Store, Building2 } from 'lucide-react'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import { SectionHeader } from '@/components/shared/SectionHeader'

const roles = [
  { icon: Code, label: 'Desenvolvedor Web', color: 'text-purple-400' },
  { icon: Monitor, label: 'Técnico em Informática', color: 'text-purple-400' },
  { icon: Headphones, label: 'Suporte Técnico', color: 'text-purple-400' },
  { icon: Store, label: 'Freelancer', color: 'text-purple-400' },
  { icon: Building2, label: 'UniwersoTech', color: 'text-purple-400' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOptions)

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="01" title="SOBRE" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-medium text-[#fafafa] leading-tight mb-8 max-w-2xl"
            >
              TECNOLOGIA SEMPRE FEZ PARTE DA MINHA TRAJETÓRIA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Desde a infância, minha curiosidade pelo funcionamento das coisas me levou a desmontar
                eletrônicos, explorar computadores e absorver tudo que a tecnologia oferecia. Esse interesse
                natural se transformou em caminho profissional quando ingressei no curso técnico em informática
                — três anos que foram fundamentais para expandir meu conhecimento técnico.
              </p>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento web,
                suporte técnico, manutenção de computadores e sistemas ERP. Ao longo da trajetória,
                trabalhei como professor de informática, técnico e vendedor, o que me deu uma visão
                ampla sobre tecnologia e negócios.
              </p>
              <p>
                Hoje desenvolvo sites, interfaces e aplicações para clientes reais, combinando habilidades
                técnicas com entendimento do negócio de cada cliente. Estou sempre aberto a novas
                oportunidades, projetos freelance e colaborações.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                <MapPin size={14} className="text-purple-500" />
                <span className="font-mono uppercase tracking-wide">Ubajara, Ceará</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
                <span className="font-mono uppercase tracking-wide text-green-400">
                  DISPONÍVEL PARA PROJETOS
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-0"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-[#52525b] mb-4">
              FUNÇÕES
            </p>
            {roles.map((role, i) => (
              <motion.div
                key={role.label}
                variants={staggerItem}
                className="group flex items-center gap-4 p-4 border border-[#27272a] hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 cursor-default"
              >
                <span className="text-xs font-mono text-[#52525b] group-hover:text-purple-200 transition-colors w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <role.icon
                  size={16}
                  className={`${role.color} group-hover:text-white transition-colors`}
                />
                <span className="text-sm font-medium uppercase tracking-wide text-[#fafafa] group-hover:text-white transition-colors">
                  {role.label}
                </span>
              </motion.div>
            ))}

            <div className="mt-6 p-4 border-l-2 border-purple-600">
              <p className="text-xs font-mono uppercase tracking-widest text-[#52525b] mb-2">
                MANIFESTO
              </p>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Criar soluções digitais que realmente funcionam para quem as usa. Simples assim.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
