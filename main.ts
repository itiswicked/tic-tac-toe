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
    for (let rowIndex = 0; rowIndex < this.gameState.length; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < this.gameState.length;
        columnIndex++
      ) {
        let winner = this.checkHorizontalWin(rowIndex)
        if (winner) return winner
      }
    }
    return null
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

  public isGameOver() {}
}
