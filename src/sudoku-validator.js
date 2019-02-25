class SudokuValidator {
  constructor(board, rules) {
    this.board = board;
    this.rules = rules;
    this.rules.board = this.board;
  }

  valid() {
    return this.rules.areSatisfied();
  }
}

module.exports = SudokuValidator;
