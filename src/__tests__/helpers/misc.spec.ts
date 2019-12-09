import { arraysAreSame, joinArrays, orderedArray, toggleInArray, uniqArrayItems } from '../../helpers/misc'

describe('ordered array', () => {
  it('zero', () => {
    expect(orderedArray(0)).toEqual([])
  })

  it('positive', () => {
    expect(orderedArray(3)).toEqual([0, 1, 2])
  })

  it('negative', () => {
    expect(orderedArray(-3)).toEqual([])
  })
})

describe('arrays are same', () => {
  it('both zero', () => {
    expect(arraysAreSame([], [])).toBe(true)
  })

  it('with same length and values', () => {
    expect(arraysAreSame([1], [1])).toBe(true)
  })

  it('with same length and not same values', () => {
    expect(arraysAreSame([1], [2])).toBe(false)
  })

  it('with different direction', () => {
    expect(arraysAreSame([1, 2], [2, 1])).toBe(false)
  })

  it('with different length', () => {
    expect(arraysAreSame([1], [1, 1])).toBe(false)
  })
})

describe('toggle in array', () => {
  it('on', () => {
    expect(toggleInArray([], 1)).toEqual([1])
  })

  it('off', () => {
    expect(toggleInArray([1], 1)).toEqual([])
  })
})

describe('join arrays', () => {
  it('both zero', () => {
    expect(joinArrays([], [])).toEqual([])
  })

  it('positive', () => {
    expect(joinArrays([1, 2], [2, 3])).toEqual([1, 2, 2, 3])
  })
})

describe('uniq array items', () => {
  it('zero', () => {
    expect(uniqArrayItems([])).toEqual([])
  })

  it('positive', () => {
    expect(uniqArrayItems([1, 2, 2, 3, 2])).toEqual([1, 2, 3])
  })
})
