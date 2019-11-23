export const makeBEMModifier = (base: string, modifier: string): string =>
  `${base}--${modifier}`

export interface IBEMProps {
  isLoading?: boolean
  isDisabled?: boolean
  isActive?: boolean
  modifiers?: string[]
  mix?: string
}

export const makeBemClassNames =
  (
    baseClass: string,
    { isLoading, isActive, isDisabled, modifiers = [] }: IBEMProps
  ): string => {
    const result = [baseClass]

    if (isLoading) result.push('is-loading')
    if (isDisabled) result.push('is-disabled')
    if (isActive) result.push('is-active')

    if (baseClass && modifiers.length) {
      const makeModifier = makeBEMModifier.bind(null, baseClass)

      result.push(...modifiers.map(makeModifier))
    }

    return result.join(' ')
  }
