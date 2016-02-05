import assert from 'assert'

import TicTacToe from 'models/tictactoe'

describe('(Model) TicTacToe', () => {
  describe('stone()', () => {
    it('returns the stone at a given position.', () => {
      const t = new TicTacToe()
      assert.equal(t.getStone(0), '', 'Expected empty board')
      t.setStone(0, 'x')
      assert.equal(t.getStone(0), 'x')
    })
  })

  describe('constructor()', () => {
    it('makes an empty game', () => {
      const t = new TicTacToe()
      assert.ok(t)
    })

    it('allows cloning from an existing game', () => {
      const oldT = new TicTacToe()
      oldT.setStone(1, 'o')
      const newT = new TicTacToe(oldT)
      assert.equal(newT.getStone(1), 'o')
    })
  })

  describe('getWinningCombination()', () => {
    it('returns the id of the winning combination', () => {
      const ticTacToe = new TicTacToe()
      ticTacToe.setStone(3, 'x')
      ticTacToe.setStone(4, 'x')
      ticTacToe.setStone(5, 'x')
      assert.equal(ticTacToe.getWinningCombination(), 1)
    })
  })

  describe('getTie()', () => {
    it('returns whether we have a tie (boolean)', () => {
      const ticTacToe = new TicTacToe()
      ticTacToe.setStone(0, 'x')
      ticTacToe.setStone(1, 'x')
      ticTacToe.setStone(2, 'o')
      ticTacToe.setStone(3, 'o')
      ticTacToe.setStone(4, 'o')
      ticTacToe.setStone(5, 'x')
      ticTacToe.setStone(6, 'x')
      ticTacToe.setStone(7, 'x')
      ticTacToe.setStone(8, 'o')
      assert.equal(ticTacToe.getStoneCount(), 9)
      assert.equal(ticTacToe.getTie(), true)
    })
  })

  describe('getGameOver()', () => {
    it('returns whether the game ended (boolean)', () => {
      const ticTacToe = new TicTacToe()
      assert.equal(ticTacToe.getGameOver(), false)
      ticTacToe.setStone(0, 'x')
      ticTacToe.setStone(1, 'x')
      ticTacToe.setStone(2, 'o')
      ticTacToe.setStone(3, 'o')
      ticTacToe.setStone(4, 'o')
      ticTacToe.setStone(5, 'x')
      ticTacToe.setStone(6, 'x')
      ticTacToe.setStone(7, 'x')
      ticTacToe.setStone(8, 'o')
      assert.equal(ticTacToe.getGameOver(), true)
    })
  })
})
