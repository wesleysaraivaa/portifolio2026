export interface Project {
  id: number
  title: string
  slug: string
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
    fullDescription: 'Plataforma digital desenvolvida para a empresa de turismo Passaport Ibiapaba, localizada em Ubajara, Ceará. O site apresenta os roteiros turísticos da Serra da Ibiapaba com design voltado para conversão de visitantes em clientes.',
    image: '/site-passaport.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://passaportibiapaba.com.br/',
    featured: true,
    status: 'live',
    year: 2023,
  },

  {
    id: 2,
    title: 'Página Retrô de links',
    slug: 'retro-links',
    fullDescription: 'Uma experiência de links totalmente personalizada, criada a partir da estética visual do Game Boy. O projeto explora pixel art, composição retrô, microinterações e responsividade para transformar uma página simples de links em uma interface única e memorável. Desenvolvido com React, TypeScript e Vite, com foco em componentização, experiência do usuário e fidelidade à proposta visual.',
    image: '/retro-gameboy.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'estudo',
    projectUrl: 'https://my-links-retro-gameboy-wheat.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/my-links-retro-gameboy',
    featured: false,
    status: 'live',
    year: 2026,
  },

  {
    id: 3,
    title: 'Menu de Sobremesas - UniwersoTech',
    slug: 'menu-sobremesas-uniwersoTech',
    fullDescription: 'Aplicação de cardápio online desenvolvida para facilitar vendas pelo WhatsApp. O cliente navega pelo menu, seleciona itens e envia o pedido diretamente pelo app.',
    image: '/site-menu.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Font Awesome ', 'Toastify JS '],
    category: 'estudo',
    projectUrl: 'https://menu-sobremesa.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/menu-sobremesa',
    featured: true,
    status: 'live',
    year: 2024,
  },

  {
    id: 4,
    title: 'Cafeteria e Gelateria Florenzi Ubajara',
    slug: 'florenzi-gelato',
    fullDescription: 'Landing page profissional desenvolvida para a Cafeteria e Gelateria Florenzi Ubajara. O projeto conta com uma seção Hero de alto impacto totalmente animada via scroll utilizando GSAP (GreenSock), apresentando o cardápio e o espaço de forma imersiva, dinâmica e com alta performance.',
    image: '/site-florenzi-gelato.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger'],
    category: 'site',
    projectUrl: 'https://florenzi-gelato.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/florenzi-gelato',
    featured: true,
    status: 'live',
    year: 2026,
  },

  {
    id: 5,
    title: 'Landing Page de Filmes',
    slug: 'landing-page-filmes',
    fullDescription: 'Aplicação que consome a API do The Movie Database (TMDB) para exibir filmes em cartaz, populares e bem avaliados. Interface dinâmica com busca e detalhamento.',
    image: '/api-filmes.png',
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
    title: 'Jeri Life Tour',
    slug: 'jeri-life-tur',
    fullDescription: 'Landing page desenvolvida para empresa de turismo em Jericoacoara com apresentação dos serviços, galeria de fotos, localização e botão de agendamento via WhatsApp.',
    image: '/site-jeri-life-tur.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://jeri-life-tur.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/jeriLifeTur',
    featured: true,
    status: 'live',
    year: 2026,
  },

  {
    id: 7,
    title: 'Consulta de CNPJ',
    slug: 'consulta-cnpj',
    fullDescription: 'Ferramenta web que consome a BrasilAPI para consultar dados de empresas pelo CNPJ. Exibe informações completas como razão social, endereço, situação cadastral e mais.',
    image: '/api-brasilApi.png',
    technologies: ['React', 'JavaScript', 'BrasilAPI', 'CSS'],
    category: 'sistema',
    projectUrl: 'https://consultar-cnpj-3dih.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/consultar-cnpj',
    featured: false,
    status: 'live',
    year: 2023,
  },

  {
    id: 8,
    title: 'Alô Guincho',
    slug: 'allo-guincho',
    fullDescription: 'Site desenvolvido para empresa de guincho em Sao Paulo - SP. O site apresenta os serviços da empresa com design moderno e responsivo.',
    image: '/site-guincho.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Font Awesome '],
    category: 'site',
    projectUrl: 'https://www.alloguincho.com.br/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/allo-guincho',
    featured: true,
    status: 'live',
    year: 2026,
  },

  {
    id: 9,
    title: 'Dra. Elaine Rute Araújo',
    slug: 'dra-elaine-rute',
    fullDescription: 'Landing page profissional desenvolvida para Dra. Elaine Rute Araújo, advogada. O projeto apresenta os serviços jurídicos com foco em credibilidade e conversão.',
    image: '/site-dra-elaine-rute.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://elaine-rute-landing-page.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/elaine-rute-landing-page',
    featured: true,
    status: 'live',
    year: 2023,
  },
]

export const projectCategories = [
  { value: 'todos', label: 'TODOS' },
  { value: 'site', label: 'SITES' },
  { value: 'sistema', label: 'SISTEMAS' },
  { value: 'estudo', label: 'ESTUDOS' },
  { value: 'consultoria', label: 'CONSULTORIAS' },
] as const
