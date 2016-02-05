import assert from 'assert'

describe('ES6', () => {
  describe('destructuring assignment', () => {
    describe('with an array', () => {
      it('assigns the array elements to an array of variables', () => {
        const [a, b, c] = [5, 6, 7]
        assert.equal(5, a)
        assert.equal(6, b)
        assert.equal(7, c)
      })

      it('can omit some array elements', () => {
        const [a, b] = [2, 3, 4]
        assert.equal(a, 2)
        assert.equal(b, 3)
      })

      it('catches remaining elements with a rest parameter', () => {
        const [a, ...b] = [5, 6, 7, 8, 9]
        assert.equal(a, 5)
        assert.deepEqual(b, [6, 7, 8, 9])
      })
    })

    describe('with a hash', () => {
      it('assigns the elements of a hash to hash/array of keys', () => {
        const {a, b, c} = {a: 5, b: 6, c: 7}
        assert.equal(5, a)
        assert.equal(6, b)
        assert.equal(7, c)
      })

      it('assigns the remaining elements of the hash to a rest parameter', () => {
        const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5}
        assert.equal(1, a)
        assert.equal(2, b)
        assert.deepEqual({c: 3, d: 4, e: 5}, rest)
      })
    })
  })
})
