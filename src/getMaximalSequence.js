/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length <= 1) {
    return arr;
  };
  let longest = [];
  let current = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      current.push(arr[i]);
    } else {
      if (current.length > longest.length) {
        longest = current;
      };
      current = [arr[i]];
    };
  };
  //если в конце массива самая длинная последоваьельность, то цикл ее не вывел в макс, поэтому нужно проверить и сделать это снова
  if (current.length > longest.length) {
    longest = current;
  };
  
  return longest;
};
