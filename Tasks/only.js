// Refactor following solution
// Copy only listed values from dict

// step 1: add 'use strict'

'use strict';

only = (W, ...only) => {
  [];
  X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return W;
};

module.exports = only;
