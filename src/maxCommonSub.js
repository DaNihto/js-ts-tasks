/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  if (str1===str2) {
    return str1;
  };
  let longStr = (str1.length >= str2.length)?str1:str2;
  let shortStr = (str1.length >= str2.length)?str2:str1;
  let longest = "";
  let current = "";
  for (let i = 0; i <= shortStr.length; i++) {
    if (longStr.includes(current + shortStr[i])) {
      current += shortStr[i];
      if (current.length > longest.length) {
        longest = current;
      }
    } else {
      if (current.length > longest.length) {
        longest = current;
        current = ""
      }
    }
  }
  if (current.length > longest.length) {
    longest = current;
  };
  return longest
  
};
