// Refactor following solution
// Get day number

// step 3: rename variables and function

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (str) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
