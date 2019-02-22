const { expect } = require('chai');
const SudokuSolver = require('../src/sudoku-solver');

describe('Sudoku Solver', () => {
  it('returns false if the board is invalid', () => {
    const emptyBoard = [];
    const solver = new SudokuSolver(emptyBoard);
    const result = solver.valid();
    expect(result, 'This board should not be valid').to.be.false;
  });
});
