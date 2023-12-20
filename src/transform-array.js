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
    if (arr[i] !== undefined && curentItem === 'number') {
      newArr.push(arr[i]);
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (newArr.length) {
        newArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1]);
    }


    //   case '--discard-next'
    //     i++;
    //     break;
    //   case '--discard-prev'
    //     if (newArr.length) {
    //       newArr.pop();
    //     }
    //     break;
    //   case '--double-next'
    //     newArr.push(arr[i + 1]);
    //     break;
    //   case '--double-prev'
    //   newArr.push(arr[i - 1])
    //     break;
    // }
    // default:
    // if (arr[i] !== undefined && typeof.arr[i] === 'number') {
    //   newArr.push(arr[i]);
    // }
  }
  return newArr;
}

module.exports = {
  transform
};
