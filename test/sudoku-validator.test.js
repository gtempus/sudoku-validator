const { expect } = require('chai');
const SudokuValidator = require('../src/sudoku-validator');

describe('Sudoku Validator', () => {
  it('returns false if the board is invalid', () => {
    const emptyBoard = [];
    const rulesStub = {
      areSatisfied: (board) => false,
    };

    const validator = new SudokuValidator(emptyBoard, rulesStub);

    const result = validator.valid();
    expect(result, 'This board should not be valid').to.be.false;
  });

  it('returns true if the board is valid', () => {
    const simpleBoard = [
      [ 1, 2, 3, 4 ],
      [ 3, 4, 1, 2 ],
      [ 2, 3, 4, 1 ],
      [ 4, 1, 2, 3 ],
    ];
    const rulesStub = {
      areSatisfied: (board) => true,
    };

    const validator = new SudokuValidator(simpleBoard, rulesStub);
    const result = validator.valid();
    expect(result, 'This board should be valid').to.be.true;
  });
});
