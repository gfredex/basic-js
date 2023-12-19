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
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let indexPath = -1;

  if (date) {
    indexPath = -2;
    if (Object.prototype.toString.call(date).slice(8, -1) === 'Date') {
      if (Object.values(date).length || date.toString === 'Invalid Date') {
        indexPath = -2;
      } else {
        indexPath = Math.floor((date.getMonth() + 1) / 3) % 4;
      }
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



module.exports = {
  getSeason
};
