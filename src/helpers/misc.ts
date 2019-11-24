export const orderedArray = (count: number): number[] => Array.from(Array(count).keys())

export const toggleInArray = <T>(array: T[], item: T): T[] => {
  return array.includes(item) ? array.filter(a => item !== a) : [...array, item]
}
