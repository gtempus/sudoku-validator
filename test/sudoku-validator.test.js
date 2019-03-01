const { expect } = require('chai');
const SudokuValidator = require('../src/sudoku-validator');
const Board = require('../src/board');

describe('Sudoku Validator', () => {
  it('returns false if the board is invalid', () => {
    const invalidBoard = new Board([]);
    const rulesStub = {
      areSatisfied: board => false,
    };

    const validator = new SudokuValidator(invalidBoard, rulesStub);

    const result = validator.valid();
    expect(result, 'This board should not be valid').to.be.false;
  });

  it('returns true if the board is valid', () => {
    const validBoard = new Board([[1]]);
    const rulesStub = {
      areSatisfied: board => true,
    };

    const validator = new SudokuValidator(validBoard, rulesStub);
    const result = validator.valid();
    expect(result, 'This board should be valid').to.be.true;
  });
});
