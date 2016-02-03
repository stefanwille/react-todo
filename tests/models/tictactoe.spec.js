import assert from 'assert'

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

class TicTacToe {
  constructor (objectToClone) {
    if (objectToClone) {
      this.fields = objectToClone.fields.slice()
    } else {
      this.fields = ['', '', '', '', '', '', '', '']
    }
  }

  getStone (position) {
    return this.fields[position]
  }

  setStone (position, stone) {
    this.fields[position] = stone
  }

  getWinningCombination () {
    const that = this
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      let combination = WINNING_COMBINATIONS[i]
      if (that.isWinningCombination(combination)) {
        return i
      }
    }
    return false
  }

  getTie () {
    return this.getStoneCount() === 9 && !this.getWinningCombination()
  }

  getGameOver () {
    return this.getTie() || this.getWinningCombination()
  }

  getStoneCount () {
    return this.fields.reduce(function (sum, v) { return v !== '' ? sum + 1 : sum }, 0)
  }

  isWinningCombination (combination) {
    return this.fields[combination[0]] !== '' &&
      this.fields[combination[0]] === this.fields[combination[1]] &&
      this.fields[combination[1]] === this.fields[combination[2]]
  }
}

describe('(Model) TicTacToe', function () {
  describe('stone()', function () {
    it('should return the stone at a given position.', function () {
      const t = new TicTacToe()
      assert.equal(t.getStone(0), '', 'Expected empty board')
      t.setStone(0, 'x')
      assert.equal(t.getStone(0), 'x')
    })
  })

  describe('constructor()', function () {
    it('should constructing an empty game', function () {
      const t = new TicTacToe()
      assert.ok(t)
    })

    it('should allow cloning from an existing game', function () {
      const oldT = new TicTacToe()
      oldT.setStone(1, 'o')
      const newT = new TicTacToe(oldT)
      assert.equal(newT.getStone(1), 'o')
    })
  })

  describe('getWinningCombination()', function () {
    it('should return the winning combination', function () {
      const t = new TicTacToe()
      t.setStone(3, 'x')
      t.setStone(4, 'x')
      t.setStone(5, 'x')
      assert.equal(t.getWinningCombination(), 1)
    })
  })

  describe('getTie()', function () {
    it('should return whether we have a tie', function () {
      const t = new TicTacToe()
      t.setStone(0, 'x')
      t.setStone(1, 'x')
      t.setStone(2, 'o')
      t.setStone(3, 'o')
      t.setStone(4, 'o')
      t.setStone(5, 'x')
      t.setStone(6, 'x')
      t.setStone(7, 'x')
      t.setStone(8, 'o')
      assert.equal(t.getStoneCount(), 9)
      assert.equal(t.getTie(), true)
    })
  })

  describe('getGameOver()', function () {
    it('should return whether the game ended', function () {
      const t = new TicTacToe()
      assert.equal(t.getGameOver(), false)
      t.setStone(0, 'x')
      t.setStone(1, 'x')
      t.setStone(2, 'o')
      t.setStone(3, 'o')
      t.setStone(4, 'o')
      t.setStone(5, 'x')
      t.setStone(6, 'x')
      t.setStone(7, 'x')
      t.setStone(8, 'o')
      assert.equal(t.getGameOver(), true)
    })
  })

  describe('arrow functions', () => {
    it('give us better syntax', () => {
      const input = [1, 2, 3]
      let expected = [1, 4, 9]
      let actual = input.map((v, t) => { console.log(t); return v * v })
      assert.deepEqual(actual, expected)
    })
  })
})
