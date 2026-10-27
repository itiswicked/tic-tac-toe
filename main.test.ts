import { TicTacToe } from "./main";

describe("TicTacToe", () => {
  it("can be constructed", () => {
    expect(new TicTacToe()).toBeInstanceOf(TicTacToe);
  });
});
