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
  const isSecondProject = index === 1

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group relative border border-[#27272a] hover:border-purple-500/50 bg-[#121214] overflow-hidden',
        'transition-all duration-300 flex flex-col h-full',
        'hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.18)]',
        index === 0 && 'md:col-span-2'
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Barra estilo janela de navegador*/}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#18181b] border-b border-[#27272a] text-[#71717a] shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#27272a] group-hover:bg-[#ef4444]/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27272a] group-hover:bg-[#eab308]/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27272a] group-hover:bg-[#22c55e]/80 transition-colors" />
        </div>
        <span className="text-[11px] font-mono tracking-wider text-[#71717a] group-hover:text-purple-300 transition-colors truncate max-w-50">
          {project.slug}.app
        </span>
        <span className="text-[10px] font-mono text-[#52525b] uppercase">{project.category}</span>
      </div>

      {/* Container da Imagem*/}
      <div
        className={cn(
          'relative overflow-hidden bg-[#09090b]',
          isSecondProject ? 'aspect-16/10 md:aspect-auto md:flex-1 shrink-0 md:shrink' : 'aspect-16/10 shrink-0'
        )}
      >
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          width={800}
          height={500}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.style.background = '#18181b'
            }
          }}
        />

        {/* Overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/70 to-transparent backdrop-blur-[2px] flex items-center justify-center gap-3 p-4"
              aria-hidden="true"
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-10 px-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver projeto ${project.title} ao vivo`}
                tabIndex={hovered ? 0 : -1}
              >
                <ExternalLink size={13} />
                VER PROJETO
              </a>
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-10 px-3.5 border border-white/30 bg-black/40 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest transition-all"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  tabIndex={hovered ? 0 : -1}
                >
                  <Github size={13} />
                  CÓDIGO
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={cn(
          'p-5 md:p-6 border-t border-[#27272a] bg-[#18181b] flex flex-col justify-between',
          isSecondProject ? 'md:flex-none' : 'flex-1'
        )}
      >
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg md:text-base font-black uppercase tracking-tight text-[#fafafa] group-hover:text-purple-300 transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-[#71717a] shrink-0">{project.year}</span>
          </div>

          <p className="text-sm md:text-base text-[#a1a1aa] mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono uppercase tracking-wider text-purple-300/90 bg-purple-950/40 border border-purple-800/60 px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-5 pt-3 border-t border-[#27272a]/80">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            <ExternalLink size={12} />
            VER
          </a>
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#71717a] hover:text-[#fafafa] transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
            >
              <Github size={12} />
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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader index="04" title="PROJETOS" className="mb-10" />

        {/* Filtros */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={cn(
                'h-9 px-4 text-xs font-mono cursor-pointer uppercase tracking-widest transition-all duration-200 border focus-visible:outline-2 focus-visible:outline-purple-400',
                filter === cat.value
                  ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.35)]'
                  : 'bg-[#18181b]/60 border-[#27272a] text-[#a1a1aa] hover:border-purple-600/60 hover:text-white'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
