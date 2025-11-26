// link to leetcode: https://leetcode.com/problems/min-stack/description/
// log:
// the hard part for this problem is how to manage the minimum number on the current stack
// i can use a stack to store the minimum number on the current stack
// in this solution, i have 2 stack
// arr stack for the real stack purpose
// min stack for tracking the current minimum stack
// for each .push, we'll check if the top of the stack is higher than the value to push
// if it is, then we push the current value to the minimum stack
// for each .pop, we'll check if the top of the stack has the same value as the value we just pop
// if it is, then we pop the minimum stack

var MinStack = function () {
  this.arr = [];
  this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
  if (this.min.length !== 0 && this.min[this.min.length - 1] >= val) {
    this.min.push(val);
  }
  else if (this.min.length === 0) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.arr.pop() === this.min[this.min.length - 1]) {
    this.min.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */