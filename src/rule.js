const difference = Symbol('difference');

class Rule {
  constructor(numberSet, boardIterator) {
    this.boardIterator = boardIterator;
    this.numberSet = numberSet;
  }

  [ difference ](boardElement) {
    const elementSet = new Set(boardElement);
    const theDifference = new Set([...this.numberSet]);

    for (const elem of elementSet) {
      theDifference.delete(elem);
    }

    return (theDifference.size || boardElement.length !== this.numberSet.size);
  }

  isSatisfied() {
    let result = true;
    for (const boardElement of this.boardIterator) {
      result = result && !(this[difference](boardElement));
    }
    return result;
  }
}

module.exports = Rule;
