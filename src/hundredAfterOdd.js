/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let newArr = []
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i]%2===1) {
      newArr.push(100);
      i++;
    };
  };
};
