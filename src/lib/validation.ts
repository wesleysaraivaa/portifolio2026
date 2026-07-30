import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().optional(),
  subject: z.string().min(3, 'Assunto deve ter ao menos 3 caracteres'),
  projectType: z.string().min(1, 'Selecione um tipo de projeto'),
  message: z.string().min(20, 'Mensagem deve ter ao menos 20 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const projectTypes = [
  { value: 'site', label: 'Site Profissional' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'sistema', label: 'Sistema Web' },
  { value: 'manutencao', label: 'Manutenção' },
  { value: 'suporte', label: 'Suporte Técnico' },
  { value: 'oportunidade', label: 'Oportunidade de Trabalho' },
  { value: 'outro', label: 'Outro' },
] as const
