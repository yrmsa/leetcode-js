// link to leetcode: https://leetcode.com/problems/valid-sudoku/description/
// log:
// I figured out pretty much on how to solve this problem except on how to check the validity of each box
// after a simple math on the whiteboard, its actually pretty simple
// first step would be to have each row, col, and box an array of set
// we can define each of it as an array with the size of 9 and the value of empty set
// then for each row/col/box we can check if the current number is already present in the set or not
// if it is, then the board is not valid
// if its not, then we can add the number to the set and move to the next number

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  let row = Array.from({ length: 9 }, () => new Set());
  let col = Array.from({ length: 9 }, () => new Set());
  let box = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let boxIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
      let val = board[i][j];
      if (val === ".") continue;
      if (row[i].has(val)) return false;
      else if (col[j].has(val)) return false;
      else if (box[boxIndex].has(val)) return false;

      row[i].add(val);
      col[j].add(val);
      box[boxIndex].add(val);
    }
  }
  return true;
};


const board = [
  [".", "8", "7", "6", "5", "4", "3", "2", "1"],
  ["2", ".", ".", ".", ".", ".", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", ".", ".", "."],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", ".", "."],
  ["6", ".", ".", ".", ".", ".", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  ["8", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", ".", ".", ".", ".", ".", ".", ".", "."]
];

const board2 = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]
];
console.log(isValidSudoku(board2));