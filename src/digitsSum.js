/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let sum = 0;
  let numAsStr = String(n)
  for (let i=0; i<numAsStr.length; i++) {
    sum +=Number(numAsStr[i]);
  };
  return sum;
};
