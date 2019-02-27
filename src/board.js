class Board {
  constructor(boardArray) {
    this.boardArray = boardArray;
  }

  rows() {
    return (function* rowIter (board) {
      for (let row of board) {
        yield row;
      }
    })(this.boardArray);
  }

  columns() { }

  cubes() { }
}

module.exports = Board;
