/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  let res = [];
  for (let i = 0; i <= promisesArray.length; i++) {
    promisesArray[i].then((data) => {
      res.push(data);
    }, 
    (data) => {
      return res;
    });

  }
  return res;
};
