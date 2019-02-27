const { expect } = require('chai');
const Rules = require('../src/rules');

describe('Rules', () => {
  it('returns `true` if the board has no rules', () => {
    const rules = new Rules();
    const simpleBoard = [
      [ 1, 2, 3, 4 ],
      [ 3, 4, 1, 2 ],
      [ 2, 3, 4, 1 ],
      [ 4, 1, 2, 3 ],
    ];

    const result = rules.areSatisfied(simpleBoard);

    expect(result, 'All rules should be satisfied.').to.be.true;
  });

  it('returns `false` if there is a problem with rows', () => {
    const rowRuleThatFails = {
      isSatisfied() { return false; }
    };
    const rules = new Rules(rowRuleThatFails);

    const simpleBoard = [
      [ 1, 2, 3, 2 ], // double 2s in row 1
      [ 3, 4, 1, 4 ], // double 4s in row 2
      [ 2, 3, 4, 1 ],
      [ 4, 1, 2, 3 ],
    ];

    const result = rules.areSatisfied(simpleBoard);

    expect(result, 'The first two rows should be invalid.').to.be.false;
  });

  it('returns `false` if one of two rules fails', () => {
    const rowRuleThatSucceeds = {
      isSatisfied() { return true; }
    };

    const colRuleThatFails = {
      isSatisfied() { return false; }
    };

    const rules = new Rules(rowRuleThatSucceeds, colRuleThatFails);

    const simpleBoard = [
      [ 1, 2, 3, 2 ], // double 2s in row 1
      [ 3, 4, 1, 4 ], // double 4s in row 2
      [ 2, 3, 4, 1 ],
      [ 4, 1, 2, 3 ],
    ];

    const result = rules.areSatisfied(simpleBoard);

    expect(result, 'The board should be invalid').to.be.false;
  });
});
