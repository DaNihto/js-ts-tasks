/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let seenNums = []
  for (let i = 0; i < arr.length; i++) {
    if (!(seenNums.includes(arr[i]))) {
      seenNums.push(arr[i]);
    };
  };
  return seenNums.length;
};
