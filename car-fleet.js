// link to leetcode: https://leetcode.com/problems/car-fleet/description/
// log:
// stack is actually not required for this problem. but i found it more easy to manage it with a stack
// first of, we should sort it by using the position and then iterate through it
// for every iteration, we can check the remaining hour to the distance by using (target - currPosition) / currSpeed
// if the value on top of the stack is lower then the current remaining hour, then we push the current remaining hour to the stack
// the answer would be the size of the current stack


/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let stack = [];
  let sortedPosition = [];

  for (let i = 0; i < position.length; i++) {
    sortedPosition[i] = [speed[i], position[i]];
  }

  sortedPosition.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < position.length; i++) {
    let rem = (target - sortedPosition[i][1]) / sortedPosition[i][0];
    if (stack.length > 0 && stack[stack.length - 1] < rem) {
      stack.push(rem);
    }

    if (stack.length === 0) {
      stack.push(rem);
    }
  }

  return stack.length;
};


// sorted position & speed
// [ [ 0, 1 ], [ 3, 3 ], [ 5, 1 ], [ 8, 4 ], [ 10, 2 ] ]

// hour to distance
// 0 -> (12 - 0) / 1 = 12
// 3 -> (12 - 3) / 3 = 3
// 5 -> (12 - 5) / 1 = 7
// 8 -> (12 - 8) / 4 = 1
// 10 -> (12 - 10) / 2 = 1

// sorted position & speed
// [ [ 6, 3 ], [ 8, 2 ] ] | target = 10

// hour to distance
// 6 -> (10 - 6) / 3 = 1.234
// 8 -> (10 - 8) / 2 = 1

// sorted position & speed
// [ [0, 2], [2, 3], [4, 1] ] | target = 10

// hour to distance
// 0 -> (10 - 0) / 2 = 5
// 2 -> (10 - 2) / 3 = 2.667
// 4 -> (10 - 4) / 1 = 6