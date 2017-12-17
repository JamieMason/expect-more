# expect-more-jest

Write Beautiful Specs with Custom Matchers for Jest

[![NPM version](http://img.shields.io/npm/v/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![Dependency Status](http://img.shields.io/david/JamieMason/expect-more-jest.svg?style=flat-square)](https://david-dm.org/JamieMason/expect-more-jest)
[![Build Status](http://img.shields.io/travis/JamieMason/expect-more-jest/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/expect-more-jest)
[![Code Climate](https://img.shields.io/codeclimate/github/JamieMason/expect-more.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/expect-more)
[![Gitter Chat for expect-more](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/expect-more)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/foldleft)
[![Donate via Gratipay](https://img.shields.io/gratipay/user/JamieMason.svg)](https://gratipay.com/~JamieMason/)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/expect-more-jest?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

## Status

This is a new project which needs a lot of work on documentation. It is under active development so there will likely be
changes, but at its core it is a rewrite of [jasmine-expect][jasmine-expect] which is a mature, well-tested library.

Contributors welcome, please get in touch.

## Installation

```
npm install expect-more-jest --save-dev
```

## Setup

Add a [`setupTestFrameworkScriptFile`][setup-test-framework-script-file] entry to your [Jest Configuration][jest-config]
which points to a JavaScript file somewhere in your project.

```json
{
  "setupTestFrameworkScriptFile": "<rootDir>/test/setup-test-framework-script-file.js"
}
```

In that file (in this example we have chosen `./test/setup-test-framework-script-file.js`) include the following:

```js
import { asymmetric, matchers } from 'expect-more-jest';

beforeEach(() => {
  // register asymmetric matchers such as expect.nonEmptyArray()
  Object.assign(expect, asymmetric);
  // register test matchers such as expect().toBeArray()
  expect.extend(matchers);
});
```

## API

### Asymmetric Matchers

* [expect.after](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/after.md)
* [expect.arrayOfBooleans](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-booleans.md)
* [expect.arrayOfNumbers](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-numbers.md)
* [expect.arrayOfObjects](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-objects.md)
* [expect.arrayOfSize](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-size.md)
* [expect.arrayOfStrings](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-strings.md)
* [expect.before](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/before.md)
* [expect.calculable](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/calculable.md)
* [expect.divisibleBy](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/divisible-by.md)
* [expect.endingWith](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/ending-with.md)
* [expect.evenNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/even-number.md)
* [expect.iso8601](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/iso8601.md)
* [expect.jsonString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/json-string.md)
* [expect.longerThan](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/longer-than.md)
* [expect.near](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/near.md)
* [expect.nonEmptyArray](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-array.md)
* [expect.nonEmptyObject](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-object.md)
* [expect.nonEmptyString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-string.md)
* [expect.oddNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/odd-number.md)
* [expect.sameLengthAs](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/same-length-as.md)
* [expect.shorterThan](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/shorter-than.md)
* [expect.startingWith](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/starting-with.md)
* [expect.validDate](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/valid-date.md)
* [expect.whitespace](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/whitespace.md)
* [expect.wholeNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/whole-number.md)
* [expect.withinRange](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/within-range.md)

### Generators

* [gen.missingBranches](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/missing-branches.md)
* [gen.missingLeaves](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/missing-leaves.md)
* [gen.missingNodes](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/missing-nodes.md)
* [gen.nullBranches](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/null-branches.md)
* [gen.nullLeaves](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/null-leaves.md)
* [gen.nullNodes](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/gen/null-nodes.md)

### Matchers

* [expect().toBeAfter](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-after.md)
* [expect().toBeArrayOfBooleans](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-booleans.md)
* [expect().toBeArrayOfNumbers](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-numbers.md)
* [expect().toBeArrayOfObjects](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-objects.md)
* [expect().toBeArrayOfSize](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-size.md)
* [expect().toBeArrayOfStrings](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-strings.md)
* [expect().toBeArray](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array.md)
* [expect().toBeBefore](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-before.md)
* [expect().toBeBoolean](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-boolean.md)
* [expect().toBeCalculable](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-calculable.md)
* [expect().toBeDate](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-date.md)
* [expect().toBeDivisibleBy](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-divisible-by.md)
* [expect().toBeEmptyArray](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-array.md)
* [expect().toBeEmptyObject](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-object.md)
* [expect().toBeEmptyString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-string.md)
* [expect().toBeEvenNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-even-number.md)
* [expect().toBeFalse](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-false.md)
* [expect().toBeFunction](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-function.md)
* [expect().toBeIso8601](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-iso8601.md)
* [expect().toBeJsonString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-json-string.md)
* [expect().toBeLongerThan](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-longer-than.md)
* [expect().toBeNonEmptyArray](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-array.md)
* [expect().toBeNonEmptyObject](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-object.md)
* [expect().toBeNonEmptyString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-string.md)
* [expect().toBeNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-number.md)
* [expect().toBeObject](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-object.md)
* [expect().toBeOddNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-odd-number.md)
* [expect().toBeRegExp](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-reg-exp.md)
* [expect().toBeSameLengthAs](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-same-length-as.md)
* [expect().toBeShorterThan](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-shorter-than.md)
* [expect().toBeString](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-string.md)
* [expect().toBeTrue](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-true.md)
* [expect().toBeValidDate](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-valid-date.md)
* [expect().toBeWhitespace](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-whitespace.md)
* [expect().toBeWholeNumber](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-whole-number.md)
* [expect().toBeWithinRange](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-within-range.md)
* [expect().toEndWith](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-end-with.md)
* [expect().toStartWith](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-start-with.md)
* [expect().toSurvive](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-survive.md)

<!-- Links -->

[jasmine-expect]: https://github.com/JamieMason/Jasmine-Matchers#readme
[jest-config]: https://facebook.github.io/jest/docs/en/configuration.html
[setup-test-framework-script-file]: https://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string
