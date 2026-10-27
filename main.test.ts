import { TicTacToe, type GameState } from "./main"

function expectAnyMovesLeft({
  gameState,
  expectValue,
}: {
  gameState: GameState
  expectValue: boolean
}) {
  expect(new TicTacToe(gameState).anyMovesLeft()).toBe(expectValue)
}

describe("TicTacToe", () => {
  describe("checkWinner", () => {})

  describe("isGameOver", () => {})

  describe("AnyMovesLeft", () => {
    test("has moves left", () => {
      expectAnyMovesLeft({
        gameState: [
          ["x", "-", "-", "-"],
          ["-", "-", "-", "-"],
          ["-", "-", "-", "-"],
          ["-", "-", "-", "-"],
        ],
        expectValue: true,
      })
    })
    test("does not have moves left", () => {
      expectAnyMovesLeft({
        gameState: [
          ["x", "x", "x", "x"],
          ["x", "x", "x", "x"],
          ["x", "x", "x", "x"],
          ["x", "x", "x", "x"],
        ],
        expectValue: false,
      })
    })
  })
})
