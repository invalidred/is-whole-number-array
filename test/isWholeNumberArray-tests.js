/*global it, describe, require*/

var chai = require('chai'),
    expect = chai.expect,
    isNumberArray = require('../dist/isWholeNumberArray.js');

describe('isNumberArray', function() {

  var result, array;

  beforeEach(function() {
    result = undefined;
  });

  var testCases = [
    {
      title: 'empty array should return false',
      array: undefined,
      result: false
    },
    {
      title: 'whole numbers array',
      array: [1, 2, 3, 4, 5, 6],
      result: true
    },
    {
      title: 'empty array should return false',
      array: ['1', '2', '3', '4', '5', '6'],
      result: true
    },
    {
      title: 'both whole numbers and string whole numbers array',
      array: [1, '2', 3, '4', 5, '6'],
      result: true
    },
    {
      title: 'real number array',
      array: [1.1, 2.2, 3.3],
      result: false
    },
    {
      title: 'real string number array',
      array: ['1.1', '2.2', '3.3'],
      result: false
    }
  ];

  testCases.forEach(function(testCase) {
    it(testCase.title, function() {
      result = isNumberArray(testCase.array);
      expect(result).to.equal(testCase.result);
    });
  });
});