export interface Service {
  id: number
  number: string
  title: string
  description: string
  items: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'DESENVOLVIMENTO DE SITES',
    description: 'Criação de sites profissionais voltados para fortalecer a presença digital de empresas e profissionais.',
    items: ['Landing pages', 'Sites institucionais', 'Portfólios', 'SEO', 'Responsividade'],
    icon: 'Globe',
  },
  {
    id: 2,
    number: '02',
    title: 'SISTEMAS WEB',
    description: 'Desenvolvimento de aplicações e sistemas web com foco em usabilidade e performance.',
    items: ['Painéis administrativos', 'Dashboards', 'Formulários', 'APIs', 'Aplicações customizadas'],
    icon: 'LayoutDashboard',
  },
  {
    id: 3,
    number: '03',
    title: 'MANUTENÇÃO DE COMPUTADORES',
    description: 'Diagnóstico, limpeza, formatação e montagem de computadores para uso pessoal e empresarial.',
    items: ['Diagnóstico completo', 'Limpeza interna', 'Formatação', 'Montagem personalizada', 'Upgrade de hardware'],
    icon: 'Cpu',
  },
  {
    id: 4,
    number: '04',
    title: 'SUPORTE TÉCNICO',
    description: 'Atendimento técnico especializado para resolução de problemas e orientação ao usuário.',
    items: ['Instalação de software', 'Configuração de sistemas', 'Diagnóstico remoto', 'Orientação ao usuário', 'Atendimento presencial'],
    icon: 'Headphones',
  },
]
