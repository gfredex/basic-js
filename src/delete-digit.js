const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (typeof n !== 'number') {
    return 0;
  }
  let maxNumber = 0;
  const strNumber = n.toString();
  for (let i = 0; i < strNumber.length; i++) {
    const curSum = parseInt(strNumber.slice(0, i) + strNumber.slice(i + 1));
    if (curSum > maxNumber) {
      maxNumber = curSum;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
