'use strict';
const { expect } = require('chai');
const Board = require('../src/board');

describe('Board', () => {
  describe('Cells', () => {
    it('allows iteration over a board with one cell', () => {
      const board = new Board([
        [ 1 ],
      ]);

      let result = [];
      for (let cell of board.cells()) {
        result.push(cell);
      }

      expect(result).to.deep.equal(
        [
          [ 1 ]
        ]
      );
    });

    it('allows iteration over a board with four cells', () => {
      const board = new Board([
        [ 10, 11, 12, 13 ],
        [ 14, 15, 16, 17 ],
        [ 18, 19, 20, 21 ],
        [ 22, 23, 24, 25 ]
      ]);

      let result = [];
      for (let cell of board.cells()) {
        result.push(cell);
      }

      expect(result).to.deep.equal(
        [
          [ 10, 11, 14, 15 ],
          [ 12, 13, 16, 17 ],
          [ 18, 19, 22, 23 ],
          [ 20, 21, 24, 25 ]
        ]
      );
    });
    it('allows iteration over a board with nine cells', () => {
      const board = new Board([
        [ 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, 30, 31, 32, 33, 34, 35, 36 ],
        [ 37, 38, 39, 40, 41, 42, 43, 44, 45 ],
        [ 46, 47, 48, 49, 50, 51, 52, 53, 54 ],
        [ 55, 56, 57, 58, 59, 60, 61, 62, 63 ],
        [ 64, 65, 66, 67, 68, 69, 70, 71, 72 ],
        [ 73, 74, 75, 76, 78, 79, 80, 81, 82 ],
        [ 83, 84, 85, 86, 87, 88, 89, 90, 91 ]
      ]);

      let result = [];
      for (let cell of board.cells()) {
        result.push(cell);
      }

      expect(result).to.deep.equal(
        [
          [ 10, 11, 12, 19, 20, 21, 28, 29, 30 ],
          [ 13, 14, 15, 22, 23, 24, 31, 32, 33 ],
          [ 16, 17, 18, 25, 26, 27, 34, 35, 36 ],
          [ 37, 38, 39, 46, 47, 48, 55, 56, 57 ],
          [ 40, 41, 42, 49, 50, 51, 58, 59, 60 ],
          [ 43, 44, 45, 52, 53, 54, 61, 62, 63 ],
          [ 64, 65, 66, 73, 74, 75, 83, 84, 85 ],
          [ 67, 68, 69, 76, 78, 79, 86, 87, 88 ],
          [ 70, 71, 72, 80, 81, 82, 89, 90, 91 ]
        ]
      );
    });
  });
  describe('Columns', () => {
    it('allows iteration over a board with one column', () => {
      const board = new Board([
        [ 1 ],
        [ 2 ]
      ]);

      let result = [];
      for (let col of board.columns()) {
        result.push(col);
      }

      expect(result).to.deep.equal(
        [
          [ 1, 2 ],
        ]
      );
    });

    it('allows iteration over a board with two columns', () => {
      const board = new Board([
        [ 1, 2 ],
        [ 3, 4 ]
      ]);

      let result = [];
      for (let col of board.columns()) {
        result.push(col);
      }

      expect(result).to.deep.equal(
        [
          [ 1, 3 ],
          [ 2, 4 ]
        ]
      );
    });
  });
  describe('Rows', () => {
    it('allows iteration over each of the rows', () => {
      const board = new Board([
        [ 1 ],
        [ 2 ]
      ]);

      let result = [];
      for (let row of board.rows()) {
        result.push(row);
      }

      expect(result).to.deep.equal(
        [
          [ 1 ],
          [ 2 ]
        ]
      );
    });

    it('allows iteration over a board with three rows', () => {
      const board = new Board([
        [ 1 ],
        [ 2 ],
        [ 3 ],
      ]);

      let result = [];
      for (let row of board.rows()) {
        result.push(row);
      }

      expect(result).to.deep.equal(
        [
          [ 1 ],
          [ 2 ],
          [ 3 ],
        ]
      );
    });
  });
});
