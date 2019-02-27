class Rules {

  constructor(...rules) {
    this.rules = rules;
  }

  areSatisfied(board) {
    return this.rules.reduce(
      (result, rule) => result && rule.isSatisfied(board), true);
  }
}

module.exports = Rules;
