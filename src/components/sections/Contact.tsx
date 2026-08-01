import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { Github, Linkedin, Instagram } from '@/components/ui/icons'
import { contactSchema, type ContactFormData, projectTypes } from '@/lib/validation'
import { socialLinks, contactInfo } from '@/data/socialLinks'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/shared/SectionHeader'

const iconMap = { Github, Linkedin, Instagram } as const

function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs font-mono text-red-400 uppercase tracking-wide" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = cn(
  'w-full bg-transparent border-b-2 border-[#3f3f46] text-[#fafafa]',
  'text-lg py-3 px-0 placeholder:text-[#3f3f46]',
  'focus:outline-none focus:border-purple-500 transition-colors duration-200',
  'leading-tight'
)

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    if (submitting) return
    setSubmitting(true)

    // TODO: Integrar o formulário ao serviço de envio definido para produção (ex: EmailJS / Resend).
    await new Promise((r) => setTimeout(r, 1000))
    console.log('[FORMULÁRIO DE CONTATO]', data)

    setSubmitting(false)
    setSubmitted(true)
    reset()

    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-6" ref={ref}>
        <SectionHeader index="09" title="CONTATO" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-10 max-w-sm">
              Tem um projeto, oportunidade ou só quer trocar uma ideia? Manda uma mensagem.
            </p>

            <div className="space-y-5 mb-10">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-[#fafafa] hover:text-purple-400 transition-colors duration-200 group"
                aria-label={`Enviar e-mail para ${contactInfo.email}`}
              >
                <span className="size-10 border border-[#3f3f46] group-hover:border-purple-600 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <Mail size={14} className="text-purple-500" />
                </span>
                <span className="font-mono text-sm break-all">{contactInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-[#a1a1aa]">
                <span className="size-10 border border-[#27272a] flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-purple-500" />
                </span>
                <span className="font-mono text-sm uppercase tracking-wide">{contactInfo.location}</span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] mb-4">
                REDES SOCIAIS
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 border border-[#3f3f46] flex items-center justify-center text-[#a1a1aa] hover:border-purple-600 hover:text-purple-400 transition-all duration-200"
                      aria-label={link.label}
                    >
                      {Icon && <Icon size={15} />}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 border-l-2 border-purple-600 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-widest text-green-400">
                  DISPONÍVEL
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {contactInfo.availability}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-96 border-2 border-purple-600 p-8 text-center"
              >
                <div className="text-[3rem] mb-4">✓</div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#fafafa] mb-2">
                  MENSAGEM ENVIADA!
                </h3>
                <p className="text-sm text-[#a1a1aa]">
                  Vou responder em breve. Obrigado pelo contato.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulário de contato"
                className="space-y-7"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <FormField label="NOME *" error={errors.name?.message}>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Seu nome"
                      className={inputClass}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                  </FormField>
                  <FormField label="E-MAIL *" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="seu@email.com"
                      className={inputClass}
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <FormField label="WHATSAPP" error={errors.whatsapp?.message}>
                    <input
                      {...register('whatsapp')}
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                      autoComplete="tel"
                    />
                  </FormField>
                  <FormField label="TIPO DE PROJETO *" error={errors.projectType?.message}>
                    <select
                      {...register('projectType')}
                      className={cn(inputClass, 'cursor-pointer appearance-none')}
                      aria-required="true"
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" className="bg-[#09090b]">Selecione...</option>
                      {projectTypes.map((t) => (
                        <option key={t.value} value={t.value} className="bg-[#09090b]">
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField label="ASSUNTO *" error={errors.subject?.message}>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="Do que se trata?"
                    className={inputClass}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                  />
                </FormField>

                <FormField label="MENSAGEM *" error={errors.message?.message}>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Descreva seu projeto ou necessidade..."
                    className={cn(inputClass, 'resize-none')}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    'w-full h-14 flex items-center justify-center gap-3',
                    'bg-purple-600 hover:bg-purple-700 text-white',
                    'text-sm font-black uppercase cursor-pointer tracking-widest',
                    'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-400',
                    submitting && 'opacity-70 cursor-not-allowed'
                  )}
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      ENVIAR MENSAGEM
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
