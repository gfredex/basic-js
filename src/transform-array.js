const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    const curentItem = arr[i];
    if (arr[i] === '--discard-next') {
      i += 2;
    } else if (arr[i] === '--discard-prev' && (typeof (arr[i - 1]) === "number")) {
      if (newArr.length) {
        newArr.pop();
      }
    } else if (arr[i] === '--double-next' && (typeof (arr[i + 1]) === "number")) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && (typeof (arr[i - 1]) === "number")) {
      newArr.push(arr[i - 1]);
    } else if (typeof curentItem === "number") {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = {
  transform
};
