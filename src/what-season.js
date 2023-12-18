const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let indexPath = -1;
  if (!date) {
    indexPath = -1;
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn']
  if (Object.toString.call(date).slice(8, -1) === 'Date') {
    indexPath = -2;
    const myMonthDate = date.getMonth();
    if (Object.values(date).length || date.toString === 'Invalid Date') {
      indexPath = -2;
    } else {
      if (myMonthDate === 11 || myMonthDate === 0 || myMonthDate === 1) {
        indexPath = 0;
      } else if (myMonthDate === 2 || myMonthDate === 3 || myMonthDate === 4) {
        indexPath = 1
      } else if (myMonthDate === 5 || myMonthDate === 6 || myMonthDate === 7) {
        indexPath = 2
      } else if (myMonthDate === 8 || myMonthDate === 9 || myMonthDate === 10) {
        indexPath = 3
      }
    }

    switch (indexPath) {
      case -2:
        throw new Error("Invalid date!");
        break;
      case -1:
        return 'Unable to determine the time of year!';
        break;
      default:
        return seasons[indexPath]
    }

  }

  // return 'Unable to determine the time of year!'
}


module.exports = {
  getSeason
};
