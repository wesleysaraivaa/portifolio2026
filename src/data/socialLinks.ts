export interface SocialLink {
  id: string
  label: string
  url: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/wesleysaraivaa',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wesleysaraivaa/',
    icon: 'Linkedin',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/uniwersotech',
    icon: 'Instagram',
  },
]

export const contactInfo = {
  email: 'uniwersotech@gmail.com',
  whatsapp: 'Contato via e-mail ou redes sociais',
  location: 'Ubajara, Ceará',
  availability: 'Disponível para oportunidades e projetos freelance',
}
