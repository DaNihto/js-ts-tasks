/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let convertedValue: number;

  if (from === 'C' && to === 'K') {
    convertedValue = value + 273.15;
  } else if (from === 'K' && to === 'C') {
    convertedValue = value - 273.15;
  } else if (from === 'm' && to === 'mi') {
    convertedValue = value / 1609.34;
  } else if (from === 'mi' && to === 'm') {
    convertedValue = value * 1609.34;
  } else if (from === 'gr' && to === 'pound') {
    convertedValue = value / 453.592;
  } else if (from === 'pound' && to === 'gr') {
    convertedValue = value * 453.592;
  } else {
    convertedValue = value;
  }

  return parseFloat(convertedValue.toFixed(2));

};
