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
      const combination = WINNING_COMBINATIONS[i]
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
    return this.fields.reduce((sum, v) => v !== '' ? sum + 1 : sum, 0)
  }

  isWinningCombination (combination) {
    return this.fields[combination[0]] !== '' &&
      this.fields[combination[0]] === this.fields[combination[1]] &&
      this.fields[combination[1]] === this.fields[combination[2]]
  }
}

export default TicTacToe
