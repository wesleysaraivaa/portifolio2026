export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'FRONT-END',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsividade'],
  },
  {
    id: 'backend',
    label: 'BACK-END',
    skills: ['Node.js', 'Express', 'APIs REST', 'Lógica de Programação'],
  },
  {
    id: 'database',
    label: 'BANCO DE DADOS',
    skills: ['PostgreSQL', 'Supabase', 'SQL'],
  },
  {
    id: 'tools',
    label: 'FERRAMENTAS',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Figma'],
  },
  {
    id: 'support',
    label: 'SUPORTE TÉCNICO',
    skills: ['Diagnóstico', 'Manutenção Preventiva', 'Manutenção Corretiva', 'Formatação', 'Instalação', 'Configuração', 'Montagem', 'Upgrade', 'Otimização'],
  },
  {
    id: 'soft',
    label: 'SOFT SKILLS',
    skills: ['Trabalho em Equipe', 'Adaptabilidade', 'Comunicação', 'Atendimento', 'Aprendizado Contínuo', 'Resolução de Problemas'],
  },
]
