/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  throw new Error('Not implemented');
  let salaries = [firstSalary, secondSalary, thirdSalary];
  return (Math.max(salaries)-Math.min(salaries));
};
