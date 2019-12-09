export const orderedArray = (count: number): number[] => Array.from(Array(count < 0 ? 0 : count).keys())

export const toggleInArray = <T>(array: T[], item: T): T[] => {
  return array.includes(item) ? array.filter(a => item !== a) : [...array, item]
}

export const joinArrays = <T>(array1: T[], array2: T[]): T[] => {
  return [...array1, ...array2]
}

export const uniqArrayItems = <T>(array: T[]) => {
  return Array.from(new Set<T>(array))
}

export const arraysAreSame = <T>(array1: T[], array2: T[]): boolean => {
  if (array1.length !== array2.length) return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }

  return true
}
