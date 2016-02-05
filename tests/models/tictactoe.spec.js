import assert from 'assert'

import TicTacToe from 'models/tictactoe'

describe('(Model) TicTacToe', () => {
  describe('stone()', () => {
    it('returns the stone at a given position.', () => {
      let t = new TicTacToe()
      assert.equal(t.getStone(0), '', 'Expected empty board')
      t = t.setStone(0, 'x')
      assert.equal(t.getStone(0), 'x')
    })
  })

  describe('constructor()', () => {
    it('makes an empty game', () => {
      const t = new TicTacToe()
      assert.ok(t)
    })
  })

  describe('getWinningCombination()', () => {
    it('returns the id of the winning combination', () => {
      let ticTacToe = new TicTacToe()
      ticTacToe = ticTacToe.setStone(3, 'x')
      ticTacToe = ticTacToe.setStone(4, 'x')
      ticTacToe = ticTacToe.setStone(5, 'x')
      assert.equal(ticTacToe.getWinningCombination(), 1)
    })
  })

  describe('getTie()', () => {
    it('returns whether we have a tie (boolean)', () => {
      let ticTacToe = new TicTacToe()
      ticTacToe = ticTacToe.setStone(0, 'x')
      ticTacToe = ticTacToe.setStone(1, 'x')
      ticTacToe = ticTacToe.setStone(2, 'o')
      ticTacToe = ticTacToe.setStone(3, 'o')
      ticTacToe = ticTacToe.setStone(4, 'o')
      ticTacToe = ticTacToe.setStone(5, 'x')
      ticTacToe = ticTacToe.setStone(6, 'x')
      ticTacToe = ticTacToe.setStone(7, 'x')
      ticTacToe = ticTacToe.setStone(8, 'o')
      assert.equal(ticTacToe.getStoneCount(), 9)
      assert.equal(ticTacToe.getTie(), true)
    })
  })

  describe('getGameOver()', () => {
    it('returns whether the game ended (boolean)', () => {
      let ticTacToe = new TicTacToe()
      assert.equal(ticTacToe.getGameOver(), false)
      ticTacToe = ticTacToe.setStone(0, 'x')
      ticTacToe = ticTacToe.setStone(1, 'x')
      ticTacToe = ticTacToe.setStone(2, 'o')
      ticTacToe = ticTacToe.setStone(3, 'o')
      ticTacToe = ticTacToe.setStone(4, 'o')
      ticTacToe = ticTacToe.setStone(5, 'x')
      ticTacToe = ticTacToe.setStone(6, 'x')
      ticTacToe = ticTacToe.setStone(7, 'x')
      ticTacToe = ticTacToe.setStone(8, 'o')
      assert.equal(ticTacToe.getGameOver(), true)
    })
  })
})
