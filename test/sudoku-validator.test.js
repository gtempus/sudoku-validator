const { expect } = require('chai');
const SudokuValidator = require('../src/sudoku-validator');

describe('Sudoku Validator', () => {
  it('returns false if the board is invalid', () => {
    const emptyBoard = [];
    const solver = new SudokuValidator(emptyBoard);
    const result = solver.valid();
    expect(result, 'This board should not be valid').to.be.false;
  });
});
