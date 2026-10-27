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

function expectIsGameOver({
  gameState,
  expectValue,
}: {
  gameState: GameState
  expectValue: boolean
}) {
  expect(new TicTacToe(gameState).isGameOver()).toBe(expectValue)
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
    describe("2x2 box win", () => {
      test("x in a 2x2 box in the middle", () => {
        expectCheckWinner({
          gameState: [
            ["o", "-", "-", "-"],
            ["-", "x", "x", "-"],
            ["-", "x", "x", "o"],
            ["-", "o", "-", "-"],
          ],
          expectValue: "x",
        })
      })
      test("o in a 2x2 box in the bottom right", () => {
        expectCheckWinner({
          gameState: [
            ["x", "x", "-", "-"],
            ["-", "-", "x", "-"],
            ["x", "-", "o", "o"],
            ["-", "-", "o", "o"],
          ],
          expectValue: "o",
        })
      })
    })
  })

  describe("isGameOver", () => {
    test("game is over when every cell is taken and there is no winner", () => {
      expectIsGameOver({
        gameState: [
          ["x", "x", "o", "o"],
          ["o", "o", "x", "x"],
          ["x", "x", "o", "o"],
          ["o", "o", "x", "x"],
        ],
        expectValue: true,
      })
    })
    test("game is not over", () => {
      expectIsGameOver({
        gameState: [
          ["x", "o", "-", "-"],
          ["-", "x", "-", "-"],
          ["-", "-", "o", "-"],
          ["-", "-", "-", "-"],
        ],
        expectValue: false,
      })
    })
    test("game is over when there is a winner", () => {
      expectIsGameOver({
        gameState: [
          ["x", "x", "x", "x"],
          ["o", "o", "o", "-"],
          ["-", "-", "-", "-"],
          ["-", "-", "-", "-"],
        ],
        expectValue: true,
      })
    })
  })

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
