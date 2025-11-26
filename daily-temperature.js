// link to leetcode: https://leetcode.com/problems/longest-consecutive-sequence/description/
// log:
// using the stack to store the indices (index)
// in every iteration, we check if the current temperature is warmer (higher) than the temperture on the top of the stack
// if it is, we pop the stack and calculate the number of days by subtracting the current index with the top stack index and store it on the respective array (array[topStack index])
// we do this until the stack is empty or the current temperature is not warmer than the top of the stack
// the answer array will be filled with 0s initially, so we only need to update the answer array with the calculated number of days

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let ans = Array.from({ length: temperatures.length }, () => 0);
  let stack = []; // --> [ [index, temperature], [index, temperature], ...etc ];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][1] < temperatures[i]) {
      let [index, temperature] = stack.pop();
      ans[index] = i - index;
    }
    stack.push([i, temperatures[i]]);
  }

  return ans;
};

const case1 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(case1));

// after revisiting this problem, i dont think i need to store the temperature into the stack.
// i can use the index as the reference to the original temperatures array to get the temperature for the current stack