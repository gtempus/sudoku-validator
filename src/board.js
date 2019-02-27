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

  columns() {
    let cols = [];
    this.boardArray[0].forEach((val, index) => {
      cols.push(
        this.boardArray.map((row) => row[index])
      );
    });

    return (function* colIter () {
      for (let col of cols) {
        yield col;
      }
    })();
  }

  cubes() { }
}

module.exports = Board;
