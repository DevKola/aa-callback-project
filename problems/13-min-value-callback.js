/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (arr, cb) {
  let smallest = 0;
  if (cb === undefined) {
    smallest = arr.reduce((acc, cur) => {
      if (acc < cur) {
        return acc;
      } else {
        return cur;
      }
    });
  } else {
    smallest = Math.sqrt(arr[0]);
    arr.forEach((el) => {
      if (cb) {
        let res = cb(el);
        if (res < smallest) smallest = res;
      }
    });
  }
  return smallest;
};

console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
