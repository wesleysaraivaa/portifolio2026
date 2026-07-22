export interface Experience {
  id: number
  number: string
  title: string
  period?: string
  description: string
  icon: string
  highlight?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    number: '01',
    title: 'PRIMEIRO CONTATO COM TECNOLOGIA',
    period: 'Infância',
    description: 'Curiosidade inata sobre o funcionamento das coisas: desmontando eletrônicos, explorando computadores e absorvendo tudo que a tecnologia oferecia.',
    icon: 'Zap',
  },
  {
    id: 2,
    number: '02',
    title: 'TÉCNICO EM INFORMÁTICA',
    period: '2009 – 2011',
    description: 'Formação técnica na EEEP Governador Waldemar de Alcântara. Três anos de imersão em hardware, software, redes e fundamentos da computação.',
    icon: 'Monitor',
    highlight: true,
  },
  {
    id: 3,
    number: '03',
    title: 'PROFESSOR DE INFORMÁTICA',
    description: 'Atuação como professor de informática, compartilhando conhecimento e desenvolvendo habilidades de comunicação e didática.',
    icon: 'GraduationCap',
  },
  {
    id: 4,
    number: '04',
    title: 'SUPORTE TÉCNICO E MANUTENÇÃO',
    description: 'Prestação de serviços de suporte técnico, diagnóstico, manutenção preventiva e corretiva de computadores.',
    icon: 'Wrench',
  },
  {
    id: 5,
    number: '05',
    title: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
    period: '2018 – 2021',
    description: 'Graduação em Análise e Desenvolvimento de Sistemas pela Anhanguera Educacional. Consolidação da base técnica em desenvolvimento de software.',
    icon: 'Code2',
    highlight: true,
  },
  {
    id: 6,
    number: '06',
    title: 'VENDAS E SISTEMAS ERP',
    description: 'Experiência com atendimento ao cliente, vendas e operação de sistemas ERP. Visão de negócio integrada à formação técnica.',
    icon: 'BarChart3',
  },
  {
    id: 7,
    number: '07',
    title: 'DESENVOLVIMENTO WEB PROFISSIONAL',
    description: 'Transição focada para desenvolvimento web: criação de sites, landing pages, sistemas e aplicações para clientes reais.',
    icon: 'Globe',
    highlight: true,
  },
  {
    id: 8,
    number: '08',
    title: 'UNIVERSOTECH',
    description: 'Criação da UniwersoTech, consolidando serviços de desenvolvimento web, suporte técnico e soluções digitais.',
    icon: 'Building2',
    highlight: true,
  },
]
