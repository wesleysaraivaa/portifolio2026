import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ index, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 border-b-2 border-[#27272a] pb-6', className)}>
      <span className="text-xs font-mono uppercase tracking-widest text-purple-500 mb-3 block">
        {index} / {subtitle || title}
      </span>
      <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase tracking-tighter leading-none text-[#fafafa]">
        {title}
      </h2>
    </div>
  )
}
