/**
  * Rola suavemente a página até a seção especificada pelo ID.
  * @param sectionId ID da seção (pode ser passado com ou sem o caractere '#').
  */
export function scrollToSection(sectionId: string): void {
  const id = sectionId.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
