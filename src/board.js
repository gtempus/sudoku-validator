const createIterator = Symbol('createIterator');
const distributeValues = Symbol('distributeValues');

class Board {
  constructor(boardArray) {
    this.boardArray = boardArray;
  }

  [ createIterator ](collection) {
    return ((function* generalIter(theCollection) {
      for (const element of theCollection) {
        yield element;
      }
    })(collection));
  }

  [ distributeValues ](row, rowIndex, theCells) {
    const offset = Math.sqrt(this.boardArray[0].length);
    const bucket = (theRow, col) => offset * Math.floor(theRow / offset) + Math.floor(col / offset);

    row.forEach((val, colIndex) => {
      const cellBucketKey = bucket(rowIndex, colIndex);
      const cellBucketValue = theCells.get(cellBucketKey) || [];
      cellBucketValue.push(val);
      theCells.set(cellBucketKey, cellBucketValue);
    });
  }

  rows() {
    return this[createIterator](this.boardArray);
  }

  columns() {
    const cols = [];
    this.boardArray[0].forEach((val, index) => {
      cols.push(this.boardArray.map(row => row[index]));
    });

    return this[createIterator](cols);
  }

  cells() {
    const theCells = new Map();
    this.boardArray.forEach((row, rowIndex) => {
      this[distributeValues](row, rowIndex, theCells);
    });

    return this[createIterator](theCells.values());
  }
}

module.exports = Board;
