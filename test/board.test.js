'use strict';
const { expect } = require('chai');
const Board = require('../src/board');

describe('Board', () => {
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
