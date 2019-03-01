const { expect } = require('chai');
const Rules = require('../src/rules');
const Board = require('../src/board');

describe('Rules', () => {
  const board = new Board([[1]]);

  it('returns `true` if the board has no rules', () => {
    const rules = new Rules();

    const result = rules.areSatisfied(board);

    expect(result, 'All rules should be satisfied.').to.be.true;
  });

  it('returns `false` if there is a problem with rows', () => {
    const rowRuleThatFails = {
      isSatisfied() { return false; },
    };

    const rules = new Rules(rowRuleThatFails);

    const result = rules.areSatisfied(board);

    expect(result, 'The first two rows should be invalid.').to.be.false;
  });

  it('returns `false` if one of two rules fails', () => {
    const rowRuleThatSucceeds = {
      isSatisfied() { return true; },
    };

    const colRuleThatFails = {
      isSatisfied() { return false; },
    };

    const rules = new Rules(rowRuleThatSucceeds, colRuleThatFails);

    const result = rules.areSatisfied(board);

    expect(result, 'The board should be invalid').to.be.false;
  });
});
