export const makeBEMModifier = (base: string, modifier: string): string => modifier ? `${base}--${modifier}` : ''

export interface IBEMProps {
  isLoading?: boolean
  isDisabled?: boolean
  isActive?: boolean
  modifiers?: string[]
  mix?: string[]
}

export const makeBemClassNames = (
  baseClass: string,
  { isLoading, isActive, isDisabled, modifiers = [], mix = [] }: IBEMProps
): string => {
  const result = [baseClass]

  if (isActive) result.push('is-active')
  if (isLoading) result.push('is-loading')
  if (isDisabled) result.push('is-disabled')

  if (modifiers.length) {
    const makeModifier = makeBEMModifier.bind(null, baseClass)

    result.push(...modifiers.filter(modifier => modifier).map(makeModifier))
  }

  if (mix.length) {
    result.push(...mix)
  }

  return result.join(' ')
}
