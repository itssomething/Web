'use strict'

function search(input, target) {
  //return input.indexOf(target);  // Remove this line and change to your own algorithm
  for(var i =0;i<input.length;i++){
    if ( target===input[i]) return i;
  }
  return -1;
}

module.exports = search
