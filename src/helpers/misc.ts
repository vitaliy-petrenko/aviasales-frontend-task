export const orderedArray = (count: number): number[] => Array.from(Array(count).keys())

export const toggleInArray = <T>(array: T[], item: T): T[] => {
  return array.includes(item) ? array.filter(a => item !== a) : [...array, item]
}

export const mergeArrays = <T>(array1: T[], array2: T[]): T[] => {
  const set = new Set<T>(array1)

  array2.forEach(set.add.bind(set))

  return Array.from(set)
}

export const arraysIsSame = <T>(array1: T[], array2: T[]): boolean => {
  if (array1.length !== array2.length) return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }

  return true
}
