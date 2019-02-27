const createIterator = Symbol('createIterator');

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

  rows() {
    return this[createIterator](this.boardArray);
  }

  columns() {
    const cols = [];
    this.boardArray[0].forEach((val, index) => {
      cols.push(
        this.boardArray.map(row => row[index])
      );
    });

    return this[createIterator](cols);
  }

  cells() {
    const theCells = new Map();
    const offset = Math.sqrt(this.boardArray[0].length);
    const bucket = (row, col) => offset * Math.floor(row / offset) + Math.floor(col / offset);

    this.boardArray.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        const cellBucketKey = bucket(rowIndex, colIndex);
        const cellBucketValue = theCells.get(cellBucketKey) || [];
        cellBucketValue.push(val);
        theCells.set(cellBucketKey, cellBucketValue);
      });
    });

    return this[createIterator](theCells.values());
  }
}

module.exports = Board;
