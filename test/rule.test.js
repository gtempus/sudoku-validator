const { expect } = require('chai');
const Board = require('../src/board');
const Rule = require('../src/rule.js');

describe('Rule', () => {
  it('returns `true` if the rule is satisfied', () => {
    const simpleValidBoard = new Board([[1]]);
    const rule = new Rule(new Set([1]), simpleValidBoard.rows());
    const result = rule.isSatisfied();
    expect(result, 'This board should be valid').to.be.true;
  });

  it('returns `false` if the rule is NOT satisfied', () => {
    const boardWithDuplicateEntries = new Board([[1, 1]]);
    const rule = new Rule(new Set([1]), boardWithDuplicateEntries.rows());
    const result = rule.isSatisfied();
    expect(result, 'This board should be invalid').to.be.false;
  });
});
