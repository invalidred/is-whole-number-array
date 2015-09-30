/* global require */

var /* isNumberArray = require('is-whole-number-array'), // Use this require if you load module through npm */
    isNumberArray = require('./dist/isWholeNumberArray.js'),
    array1 = [1, 2, 3, 4],
    array2 = [1, 'a', 2, 'b'];

console.log('Array %s is all numbers %s',
  array1.toString(), isNumberArray(array1));

console.log('Array %s is all numbers %s',
  array2.toString(), isNumberArray(array2));