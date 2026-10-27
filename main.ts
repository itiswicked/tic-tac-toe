const playerTokens = ["x", "o"]
const unused = "-"
type PlayerTokens = (typeof playerTokens)[number]
type Unused = typeof unused
export type Cell = PlayerTokens | Unused
export type GameState = Cell[][]
export class TicTacToe {
  constructor(private gameState: GameState) {
    const length = gameState[0].length
    const height = gameState.map((row) => row[0]).length
    if (length !== 4 || height !== 4) {
      throw Error("Invalid game board.")
    }
    this.gameState = gameState
  }

  public checkWinner(): PlayerTokens | null {
    let winner = null
    for (let rowIndex = 0; rowIndex < this.gameState.length; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < this.gameState.length;
        columnIndex++
      ) {
        winner = this.checkHorizontalWin(rowIndex)
        if (winner) return winner
        winner = this.checkVerticalWin(columnIndex)
        if (winner) return winner
        winner = this.checkBoxWin(rowIndex, columnIndex)
        if (winner) return winner
      }
    }

    winner = this.checkDiagonalWinDownLeft()
    if (winner) return winner
    winner = this.checkDiagonalWinDownRight()
    if (winner) return winner
    winner = this.checkFourCornersWin()
    return winner
  }

  private checkBoxWin(
    rowIndex: number,
    columnIndex: number,
  ): PlayerTokens | null {
    const cells = [
      this.gameState[rowIndex][columnIndex],
      // Right
      this.gameState.at(rowIndex)?.at(columnIndex + 1),
      // Down
      this.gameState.at(rowIndex + 1)?.at(columnIndex),
      // Diagonal down right
      this.gameState.at(rowIndex + 1)?.at(columnIndex + 1),
    ]
    let tokenToMatch = cells[0]

    for (const cell of cells) {
      if (cell === unused || cell !== tokenToMatch) return null
    }

    return tokenToMatch || null
  }

  private checkFourCornersWin() {
    const corners = [
      this.gameState[0][0],
      this.gameState[0][this.gameState.length - 1],
      this.gameState[this.gameState.length - 1][0],
      this.gameState[this.gameState.length - 1][this.gameState.length - 1],
    ]

    let tokenToMatch = corners[0]

    for (const corner of corners) {
      if (corner === unused || corner !== tokenToMatch) return null
    }
    return tokenToMatch
  }

  private checkDiagonalWinDownRight(): PlayerTokens | null {
    let rowIndex = 0
    let columnIndex = 0
    let tokenToMatch = this.gameState[rowIndex][columnIndex]
    let cell: Cell | null = tokenToMatch
    while (cell) {
      if (cell === unused || cell !== tokenToMatch) return null

      rowIndex++
      columnIndex++
      cell = this.gameState.at(rowIndex)?.at(columnIndex) || null
    }

    return tokenToMatch
  }

  private checkDiagonalWinDownLeft(): PlayerTokens | null {
    let rowIndex = 0
    let columnIndex = this.gameState[0].length - 1
    let tokenToMatch = this.gameState[rowIndex][columnIndex]
    let cell: Cell | null = tokenToMatch

    while (cell) {
      if (cell === unused || cell !== tokenToMatch) return null
      rowIndex++
      columnIndex--
      cell = this.gameState.at(rowIndex)?.at(columnIndex) || null
    }

    return tokenToMatch
  }

  private checkVerticalWin(columnIndex: number): PlayerTokens | null {
    let playerValueToMatch = this.gameState[0][columnIndex]
    for (const row of this.gameState) {
      const cell = row[columnIndex]
      if (cell === unused || cell !== playerValueToMatch) return null
    }
    return playerValueToMatch
  }

  private checkHorizontalWin(rowIndex: number): PlayerTokens | null {
    const row = this.gameState[rowIndex]
    let playerValueToMatch = row[0]
    for (const cell of row) {
      // If any cell is unused || all cell matches first value
      if (cell === unused || cell !== playerValueToMatch) return null
    }

    return playerValueToMatch
  }

  public anyMovesLeft() {
    for (const row of this.gameState) {
      for (const cell of row) {
        if (cell === unused) return true
      }
    }
    return false
  }

  public isGameOver() {
    // Check anyMovesLeft first because it is less costly than checking for win.
    if (!this.anyMovesLeft()) return true
    const winner = this.checkWinner()
    return !!playerTokens.find((token) => token === winner)
  }
}
