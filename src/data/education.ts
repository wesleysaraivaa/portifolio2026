export interface Education {
  id: number
  number: string
  degree: string
  institution: string
  period: string
  type: string
  description: string
}

export const educations: Education[] = [
  {
    id: 1,
    number: '01',
    degree: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
    institution: 'Anhanguera Educacional',
    period: '2018 – 2021',
    type: 'Tecnólogo',
    description: 'Formação superior em tecnologia com foco em desenvolvimento de software, banco de dados, engenharia de sistemas e metodologias ágeis.',
  },
  {
    id: 2,
    number: '02',
    degree: 'TÉCNICO EM INFORMÁTICA',
    institution: 'EEEP Governador Waldemar de Alcântara',
    period: '2009 – 2011',
    type: 'Curso Técnico',
    description: 'Formação técnica integrada ao ensino médio com foco em hardware, software, redes de computadores e fundamentos da programação.',
  },
]
