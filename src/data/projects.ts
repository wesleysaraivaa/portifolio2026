export interface Project {
  id: number
  title: string
  slug: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  category: 'site' | 'sistema' | 'estudo' | 'wordpress'
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
    image: 'https://my-portifolio-pied.vercel.app/src/img/passaport.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://passaportibiapaba.com.br/',
    featured: true,
    status: 'live',
    year: 2023,
  },
  {
    id: 2,
    title: 'Dra. Elaine Rute Araújo',
    slug: 'dra-elaine-rute',
    description: 'Site institucional desenvolvido para uma advogada.',
    fullDescription: 'Landing page profissional desenvolvida para Dra. Elaine Rute Araújo, advogada. O projeto apresenta os serviços jurídicos com foco em credibilidade e conversão.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/elaine.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'site',
    projectUrl: 'https://elaine-rute-landing-page.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/elaine-rute-landing-page',
    featured: true,
    status: 'live',
    year: 2023,
  },
  {
    id: 3,
    title: 'Cardápio Online',
    slug: 'cardapio-online',
    description: 'Cardápio digital para vendas via WhatsApp.',
    fullDescription: 'Aplicação de cardápio online desenvolvida para facilitar vendas pelo WhatsApp. O cliente navega pelo menu, seleciona itens e envia o pedido diretamente pelo app.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/cardapio.webp',
    technologies: ['React', 'JavaScript', 'CSS'],
    category: 'sistema',
    projectUrl: 'https://menu-sobremesa.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/menu-sobremesa',
    featured: false,
    status: 'live',
    year: 2023,
  },
  {
    id: 4,
    title: 'Consulta de CNPJ',
    slug: 'consulta-cnpj',
    description: 'Aplicação que consome a BrasilAPI para consultar CNPJ.',
    fullDescription: 'Ferramenta web que consome a BrasilAPI para consultar dados de empresas pelo CNPJ. Exibe informações completas como razão social, endereço, situação cadastral e mais.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/cnpj.webp',
    technologies: ['React', 'JavaScript', 'BrasilAPI', 'CSS'],
    category: 'sistema',
    projectUrl: 'https://consultar-cnpj-3dih.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/consultar-cnpj',
    featured: false,
    status: 'live',
    year: 2023,
  },
  {
    id: 5,
    title: 'Landing Page de Filmes',
    slug: 'landing-page-filmes',
    description: 'Página consumindo API de filmes (TMDB).',
    fullDescription: 'Aplicação que consome a API do The Movie Database (TMDB) para exibir filmes em cartaz, populares e bem avaliados. Interface dinâmica com busca e detalhamento.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/movies.webp',
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
    image: 'https://my-portifolio-pied.vercel.app/src/img/barber.webp',
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
    title: 'Página de Login',
    slug: 'pagina-login',
    description: 'Tela de login responsiva criada para praticar responsividade.',
    fullDescription: 'Projeto de estudo focado em responsividade. Tela de login com validação de formulário, design clean e adaptação perfeita para diferentes tamanhos de tela.',
    image: 'https://my-portifolio-pied.vercel.app/src/img/login.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'estudo',
    projectUrl: 'https://login-responsive-red.vercel.app/',
    repositoryUrl: 'https://github.com/wesleysaraivaa/login-responsive',
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
  { value: 'wordpress', label: 'WORDPRESS' },
] as const
