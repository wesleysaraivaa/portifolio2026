import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from '@/components/ui/icons'
import { projects, projectCategories, type Project } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/shared/SectionHeader'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group relative border border-[#27272a] overflow-hidden cursor-pointer',
        'transition-all duration-300',
        index === 0 && 'md:col-span-2'
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={cn('overflow-hidden', index === 0 ? 'h-56 md:h-80' : 'h-44 md:h-80')}>
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={800}
          height={500}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.style.background = '#27272a'
            }
          }}
        />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-purple-600/90 flex flex-col items-center justify-center gap-4 p-6"
            aria-hidden="true"
          >
            <div className="flex gap-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-11 px-5 bg-white text-purple-700 text-xs font-bold uppercase tracking-widest hover:bg-purple-100 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver projeto ${project.title} ao vivo`}
                tabIndex={hovered ? 0 : -1}
              >
                <ExternalLink size={14} />
                VER PROJETO
              </a>
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-11 px-4 border-2 border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-purple-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  tabIndex={hovered ? 0 : -1}
                >
                  <Github size={14} />
                  CÓDIGO
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6 border-t border-[#27272a] group-hover:border-purple-600 transition-colors duration-300 bg-[#18181b]">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-base font-black uppercase tracking-tight text-[#fafafa] group-hover:text-purple-300 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-[#52525b] shrink-0">{project.year}</span>
        </div>
        <p className="text-xs text-[#a1a1aa] mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase tracking-widest text-purple-400 border border-purple-800 px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links visíveis para navegação por teclado sem depender do efeito de hover */}
        <div className="flex gap-3 mt-4">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            <ExternalLink size={11} />
            VER
          </a>
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#a1a1aa] hover:text-purple-400 transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
            >
              <Github size={11} />
              GITHUB
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<string>('todos')
  const ref = useRef(null)

  const filtered = filter === 'todos'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-6">
        <SectionHeader index="04" title="PROJETOS" className="mb-12" />

        <div
          className="flex flex-wrap gap-0 mb-12"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={cn(
                'h-10 px-5 text-xs font-mono uppercase tracking-widest border border-[#27272a] -mx-px transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-400',
                filter === cat.value
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : 'text-[#a1a1aa] hover:border-purple-600 hover:text-purple-400'
              )}
              aria-pressed={filter === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-[#a1a1aa] py-16 font-mono uppercase tracking-widest text-sm">
            NENHUM PROJETO NESTA CATEGORIA
          </p>
        )}
      </div>
    </section>
  )
}
