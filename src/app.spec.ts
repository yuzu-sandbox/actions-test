import { sum } from './app'

describe('sum', () => {
  it('should be 1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(3)
  })
})