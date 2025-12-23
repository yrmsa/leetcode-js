// link to leetcode: https://leetcode.com/problems/trapping-rain-water/description/
// log:
// TODO: write log, at work rn

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalArea = 0;
    let maxLeft = [];
    let maxRight = [];
    
    for (let i = 0; i < height.length; i++) {
      if (i === 0) {
        maxLeft.push(height[i]);
      } else {
        const max = Math.max(maxLeft[i-1], height[i]);
        maxLeft.push(max);
      }
    }

    for (let i = height.length - 1; i >= 0; i--) {
      if (i === height.length - 1) {
        maxRight.push(height[i]);
      } else {
        const max = Math.max(maxRight[maxRight.length - 1], height[i]);
        maxRight.push(max);
      }
    }

    maxRight.reverse();

    console.log(maxLeft);
    console.log(maxRight);

    for (let i = 0; i < height.length; i++) {
      const min = Math.min(maxLeft[i], maxRight[i]);
      const area = min - height[i];
      if (area > 0) {
        totalArea += area;
      }
    }

    return totalArea;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // output 6
console.log(trap([4,2,0,3,2,5])) // output 9
console.log(trap([4, 2, 3])) // output 1
console.log(trap([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])); // output 26
