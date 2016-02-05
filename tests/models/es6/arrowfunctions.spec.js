import assert from 'assert'

describe('ES6', () => {
  describe('arrow functions', () => {
    it('gives us better syntax', () => {
      const input = [1, 2, 3]
      const expected = [1, 4, 9]
      const actual = input.map(v => v * v)
      assert.deepEqual(actual, expected)
    })
  })
})
