import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ index, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 border-b border-[#27272a] pb-6', className)}>
      <div className="flex items-baseline justify-between gap-6 mb-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-400">
          {index}
        </span>
        {subtitle && (
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#52525b]">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase tracking-[-0.035em] leading-[0.9] text-[#fafafa]">
        {title}
      </h2>
    </div>
  )
}
