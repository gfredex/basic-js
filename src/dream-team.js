const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  /*
if (!Array.isArray(members)) {
    return false;
  }
  const filtredMembers = members.filter(value => typeof value === 'string');
  let result = '';
  filtredMembers.forEach((member) => {
    const clearMember = member.trim();
    if (clearMember.length > 0) {
      result += clearMember[0].toUpperCase();
    }
  });
  return result.split('').sort().join('');
  */
  const bigChar = [];
  if (!Array.isArray(members)) {
    return false;
  }
  const filtrString = members.filter(value => typeof value === 'string');

  for (let nameString of filtrString) {
    let clearString = nameString.trim();
    if (clearString.length) {
      bigChar.push(clearString[0].toUpperCase());
    }
  }
  return bigChar.sort().join('');
}

module.exports = {
  createDreamTeam
};
