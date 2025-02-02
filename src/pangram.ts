/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  let letters: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let isPangram: boolean = true
  if (typeof word == 'string') {
    letters.forEach(letter => {
      if (!word.includes(letter)) {
        isPangram = false;
      }
    });
    return isPangram;
  } else {
    numbers.forEach(num => {
      if (!word.toString().includes(num.toString())) {
        isPangram = false;
      }
    });
    return isPangram;
  }
};
