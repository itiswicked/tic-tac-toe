# 4x4 Tic-Tac-Toe

## Exercise Prompt

```
The exercise prompt:
Implement a 4x4 Tic-Tac-Toe/Connect Four solver. The program should take in a representation of a 4x4 board, and tell you the winner if any.
Victory is determined by one of five conditions:

Vertical
Horizontal
Diagonal
All Four Corner
2x2 box
Implementing a UI is not necessary: we are only interested in your implementation of the win condition.
Implement the below functions, and feel free to create any other types that you need, as well as unit tests (just tell us how to run them!). If you use AI please include your AI session transcripts. 

class TicTacToe {
    public checkWinner(/* {{ params, if any }} */): /*{{ return type }}*/ {};

    public anyMovesLeft(/* {{ params, if any }} */): /*{{ return type }}*/ {};

    public isGameOver(/* {{ params, if any }} */): /*{{ return type }}*/ {};
}
```

## Setup

```sh
npm install
```

## Running tests

```sh
npm test            # run once
npm run test:watch  # re-run on change
npm run typecheck   # tsc --noEmit
```


## Usage Of AI

I have attached the transcript of the conversation I had with claude.

I used AI for the following:
- Scaffolding the project
- setting up a test harness
- Asking it to add tests to the test file once a test pattern was established

I did not use AI for:
- Writing any game/business logic
- Refactoring any game/business logic
- Asking AI to come with test scenarios
- Resolving bugs

# Improvements

If I were to work on this more:

1. Have a game state object that stores the game state.
  - This would manage the game state, and a pivoted copy of it allowing one to read columns, so one does not have to construct one from every row's nth element.
  - gamestate.row(number) -> Cell[]
  - row.at(number) -> Cell
  - gameState.column(number) -> Cell[]
  - *columns() and *rows() generator functions may also be useful in managing loops in the caller scope.

2. Since game state is injected:
  - Really this a just at testing convenience for this project, but tic-tac-toe may need to start a "saved" game.
  - Need to make it optional and provide a blank game sate in the constructor when not passed in.
  - I am missing validation for the ingestion of game state. Is it the right dimensions?

3. I have made logic checking agnostic to the dimensions of the board, as long as height === width. However, the code is looking for a full occupancy of row, diagonal, or column.
  - With a larger board, it may be desireable to pass in a "Win condition length" if the Connect Four rules are to be respected fully. This value would then be used to check for contiguous subsets of tokens within a row, column, or diagonal.
  - Diagonal logic would need to change to look at all potential diagonals on the board, not just the diagonals starting and ending at the corners.
