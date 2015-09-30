# is-whole-number-array

isWholeNumberArray is a module that takes an array and it checks if the elements in the array are whole numbers. The elements can be string whole number or just whole numbers. Built in ES6, transpiled to ES5 using babel.

## Installation

`npm install is-whole-number-array --save`

## Usage

```javascript

var isWholeNumberArray = require('is-whole-number-array');

var wholeNumberArray = [1, 2, 3];
var stringWholeNumbersArray = ['1', '2', '3'];
var realNumberArray = [1.1, 2.2, 3.3];
var stringRealNumberArray = ['1.1', '2.2', '3.3'];

console.log(isWholeNumberArray(wholeNumberArray)); // true
console.log(isWholeNumberArray(stringWholeNumbersArray)); // true
console.log(isWholeNumberArray(realNumberArray)); // false
console.log(isWholeNumberArray(stringRealNumberArray)); // false

 ```

## Run Code Sample

`npm start`

## Tests

`npm test`

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 2015-09-30    1.0.0 Initial release

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2015 by Abdul Khan and Alexey Novak
