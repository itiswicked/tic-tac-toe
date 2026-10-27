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
    describe("Vertical win", () => {
      test("first column is all x", () => {
        expectCheckWinner({
          gameState: [
            ["x", "o", "-", "-"],
            ["x", "o", "-", "-"],
            ["x", "-", "o", "-"],
            ["x", "-", "-", "-"],
          ],
          expectValue: "x",
        })
      })
      test("last column is all o", () => {
        expectCheckWinner({
          gameState: [
            ["x", "x", "-", "o"],
            ["-", "x", "-", "o"],
            ["x", "-", "-", "o"],
            ["-", "-", "-", "o"],
          ],
          expectValue: "o",
        })
      })
    })
    describe("Diagonal win", () => {
      test("x down and to the right", () => {
        expectCheckWinner({
          gameState: [
            ["x", "o", "-", "-"],
            ["-", "x", "-", "o"],
            ["-", "-", "x", "-"],
            ["o", "-", "-", "x"],
          ],
          expectValue: "x",
        })
      })
      test("o down and to the left", () => {
        expectCheckWinner({
          gameState: [
            ["x", "x", "-", "o"],
            ["-", "x", "o", "x"],
            ["-", "o", "-", "-"],
            ["o", "-", "x", "x"],
          ],
          expectValue: "o",
        })
      })
    })
    describe("4 corners win", () => {
      test("x in all four corners", () => {
        expectCheckWinner({
          gameState: [
            ["x", "-", "-", "x"],
            ["o", "o", "-", "-"],
            ["-", "-", "o", "-"],
            ["x", "-", "-", "x"],
          ],
          expectValue: "x",
        })
      })
      test("o in all four corners", () => {
        expectCheckWinner({
          gameState: [
            ["o", "x", "x", "o"],
            ["-", "x", "-", "-"],
            ["-", "-", "x", "-"],
            ["o", "-", "-", "o"],
          ],
          expectValue: "o",
        })
      })
    })
    xdescribe("2x2 box win", () => {})
  })

  xdescribe("isGameOver", () => {})

  xdescribe("AnyMovesLeft", () => {
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
