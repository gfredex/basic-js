const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sumChar = 0;
  const count = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);
  for (let char of s2) {
    if (count[char] && count[char] > 0) {
      sumChar++;
      count[char]--;
    }
  }
  return sumChar;
}

module.exports = {
  getCommonCharacterCount
};
