export interface Project {
  id: number
  title: string
  slug: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  category: 'site' | 'sistema' | 'estudo' | 'consultoria'
  projectUrl: string
  repositoryUrl?: string
  featured: boolean
  status: 'live' | 'archived' | 'wip'
  year: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Passaport Ibiapaba',
    slug: 'passaport-ibiapaba',
    description: 'Site desenvolvido para empresa de turismo de Ubajara.',
    fullDescription: 'Plataforma digital desenvolvida para a empresa de turismo Passaport Ibiapaba, localizada em Ubajara, Ceará. O site apresenta os roteiros turísticos da Serra da Ibiapaba com design voltado para conversão de visitantes em clientes.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/site-passaport.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://passaportibiapaba.com.br/',
    featured: true,
    status: 'live',
    year: 2023,
  },
  {
    id: 2,
    title: 'Consulta de CNPJ',
    slug: 'consulta-cnpj',
    description: 'Aplicação que consome a BrasilAPI para consultar CNPJ.',
    fullDescription: 'Ferramenta web que consome a BrasilAPI para consultar dados de empresas pelo CNPJ. Exibe informações completas como razão social, endereço, situação cadastral e mais.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/api-brasilApi.png',
    technologies: ['React', 'JavaScript', 'BrasilAPI', 'CSS'],
    category: 'sistema',
    projectUrl: 'https://consultar-cnpj-3dih.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/consultar-cnpj',
    featured: false,
    status: 'live',
    year: 2023,
  },
  {
    id: 3,
    title: 'Menu de Sobremesas - UniwersoTech',
    slug: 'menu-sobremesas-uniwersoTech',
    description: 'Um sistema web moderno para exibição e gerenciamento de pedidos de sobremesas.',
    fullDescription: 'Aplicação de cardápio online desenvolvida para facilitar vendas pelo WhatsApp. O cliente navega pelo menu, seleciona itens e envia o pedido diretamente pelo app.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/site-menu.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS','Font Awesome ','Toastify JS ',],
    category: 'site',
    projectUrl: 'https://menu-sobremesa.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/menu-sobremesa',
    featured: true,
    status: 'live',
    year: 2024,
  },
  {
    id: 4,
    title: 'Dra. Elaine Rute Araújo',
    slug: 'dra-elaine-rute',
    description: 'Site institucional desenvolvido para uma advogada.',
    fullDescription: 'Landing page profissional desenvolvida para Dra. Elaine Rute Araújo, advogada. O projeto apresenta os serviços jurídicos com foco em credibilidade e conversão.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/site-dra-elaine-rute.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://elaine-rute-landing-page.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/elaine-rute-landing-page',
    featured: true,
    status: 'live',
    year: 2023,
  },
  {
    id: 5,
    title: 'Landing Page de Filmes',
    slug: 'landing-page-filmes',
    description: 'Página consumindo API de filmes (TMDB).',
    fullDescription: 'Aplicação que consome a API do The Movie Database (TMDB) para exibir filmes em cartaz, populares e bem avaliados. Interface dinâmica com busca e detalhamento.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/api-filmes.png',
    technologies: ['React', 'JavaScript', 'TMDB API', 'CSS'],
    category: 'estudo',
    projectUrl: 'https://movies-neon-seven.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/movies',
    featured: false,
    status: 'live',
    year: 2022,
  },
  {
    id: 6,
    title: 'Barbearia',
    slug: 'barbearia',
    description: 'Landing page para barbearia com design moderno.',
    fullDescription: 'Landing page desenvolvida para barbearia com apresentação dos serviços, galeria de cortes, localização e botão de agendamento via WhatsApp.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/site-barbearia.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://barber-styllers.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/barber-styllers',
    featured: false,
    status: 'live',
    year: 2022,
  },
  {
    id: 7,
    title: 'Página Retrô de links',
    slug: 'retro-links',
    description: 'Uma página de links inspirada no Game Boy, combinando estética retrô, interações e desenvolvimento moderno.',
    fullDescription: 'Uma experiência de links totalmente personalizada, criada a partir da estética visual do Game Boy. O projeto explora pixel art, composição retrô, microinterações e responsividade para transformar uma página simples de links em uma interface única e memorável. Desenvolvido com React, TypeScript e Vite, com foco em componentização, experiência do usuário e fidelidade à proposta visual.' ,
    image: '',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'estudo',
    projectUrl: 'https://my-links-retro-gameboy-wheat.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/my-links-retro-gameboy',
    featured: false,
    status: 'live',
    year: 2022,
  },
]

export const projectCategories = [
  { value: 'todos', label: 'TODOS' },
  { value: 'site', label: 'SITES' },
  { value: 'sistema', label: 'SISTEMAS' },
  { value: 'estudo', label: 'ESTUDOS' },
  { value: 'consultoria', label: 'CONSULTORIAS' },
] as const
