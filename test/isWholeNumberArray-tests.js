/*global it, describe, require*/

var chai = require('chai'),
    expect = chai.expect,
    isNumberArray = require('../dist/isWholeNumberArray.js');

describe('isNumberArray', function() {

  it('empty array should return false', function() {
    var result = isNumberArray();
    expect(result).to.equal(false);
  });

  it('whole numbers array', function() {
    var array = [1,2,3,4,5,6];
    var result = isNumberArray(array);
    expect(result).to.equal(true);
  });

  it('whole string numbers array', function() {
    var array = ['1', '2', '3', '4', '5', '6'];
    var result = isNumberArray(array);
    expect(result).to.equal(true);
  });

  it('both whole numbers and string whole numbers array', function() {
    var array = [1, '2', 3, '4', 5, '6'];
    var result = isNumberArray(array);
    expect(result).to.equal(true);
  });

  it('real number array', function() {
    var array = [1.1, 2.2, 3.3];
    var result = isNumberArray(array);
    expect(result).to.equal(false);
  });

  it('real string number array', function() {
    var array = ['1.1', '2.2', '3.3'];
    var result = isNumberArray(array);
    expect(result).to.equal(false);
  });
});

