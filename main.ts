const playerTokens = ["x", "o"]
const unused = "-"
type PlayerTokens = (typeof playerTokens)[number]
type Unused = typeof unused
type Cell = PlayerTokens | Unused
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

  public checkWinner() {}

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
