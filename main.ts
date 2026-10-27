const playerTokens = ["x", "o"]
type PlayerTokens = typeof playerTokens[number]
type Unused = "-"
type Cell = PlayerTokens | Unused
type GameState = Cell[][]
export class TicTacToe {
  constructor(private gameState: GameState) {}
  public checkWinner() {}

  public anyMovesLeft() {}

  public isGameOver() {}
}
