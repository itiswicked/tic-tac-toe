import { TicTacToe, type GameState, type Cell } from "./main"

function expectAnyMovesLeft({
  gameState,
  expectValue,
}: {
  gameState: GameState
  expectValue: boolean
}) {
  expect(new TicTacToe(gameState).anyMovesLeft()).toBe(expectValue)
}

function expectCheckWinner({
  gameState,
  expectValue,
}: {
  gameState: GameState
  expectValue: Cell
}) {
  expect(new TicTacToe(gameState).checkWinner()).toEqual(expectValue)
}

describe("TicTacToe", () => {
  describe("checkWinner", () => {
    describe("Horizontal win", () => {
      test("first row is all x", () => {
        expectCheckWinner({
          gameState: [
            ["x", "x", "x", "x"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ],
          expectValue: "x",
        })
      })
      test("second row is all o", () => {
        expectCheckWinner({
          gameState: [
            ["x", "x", "x", "-"],
            ["o", "o", "o", "o"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ],
          expectValue: "o",
        })
      })
    })
    describe("Vertical win", () => {})
    describe("Diagonal win", () => {})
    describe("4 corners win", () => {})
    describe("2x2 box win", () => {})
  })

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
