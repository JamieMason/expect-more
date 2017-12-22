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

![Screenshot of expect-more-jest in VS Code](https://s14.postimg.org/howowt129/expect-more-jest.png)

## What

A huge library of test matchers a range of common use-cases.

## Why

Custom Matchers make tests easier to read and produce relevant and useful messages when they fail.

## How

By avoiding vague messages such as _"expected false to be true"_ in favour of useful cues such as _"expected 3 to be
even number"_ and avoiding implementation noise such as `expect(paws.length % 2 === 0).toEqual(true)` in favour of
simply stating that you `expect(paws.length).toBeEvenNumber()`.

## Status

expect-more-jest is a recent TypeScript rewrite of [jasmine-expect][jasmine-expect]
[![NPM downloads for jasmine-expect](http://img.shields.io/npm/dm/jasmine-expect.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-expect).
Most effort is required on [documentation][documentation] and any contributions in this area would be really welcome.

## Installation

```
npm install expect-more-jest --save-dev
```

## Setup

The simplest way to integrate is to include the following in your [jest.config.js][jest-config]:

```js
module.exports = {
  // ...
  setupTestFrameworkScriptFile: require.resolve('expect-more-jest')
  // ...
};
```

If your project requires more setup than just these matchers, point your
[`setupTestFrameworkScriptFile`][setup-test-framework-script-file] entry to a JavaScript file somewhere in your project
like so:

```js
module.exports = {
  // ...
  setupTestFrameworkScriptFile: '<rootDir>/test/setup-test-framework-script-file.js'
  // ...
};
```

In that file (in this example we have chosen `./test/setup-test-framework-script-file.js`) include:

```js
import 'expect-more-jest';
// ...then your other setup code
```

or:

```js
require('expect-more-jest');
// ...then your other setup code
```

## API

### Asymmetric Matchers

* [`expect.after(date: Date)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/after.md)
* [`expect.arrayOfBooleans()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-booleans.md)
* [`expect.arrayOfNumbers()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-numbers.md)
* [`expect.arrayOfObjects()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-objects.md)
* [`expect.arrayOfSize(size: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-size.md)
* [`expect.arrayOfStrings()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/array-of-strings.md)
* [`expect.before(date: Date)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/before.md)
* [`expect.calculable()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/calculable.md)
* [`expect.divisibleBy(other: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/divisible-by.md)
* [`expect.endingWith(other: string)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/ending-with.md)
* [`expect.evenNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/even-number.md)
* [`expect.iso8601()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/iso8601.md)
* [`expect.jsonString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/json-string.md)
* [`expect.longerThan(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/longer-than.md)
* [`expect.near(other: number, epsilon: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/near.md)
* [`expect.nonEmptyArray()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-array.md)
* [`expect.nonEmptyObject()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-object.md)
* [`expect.nonEmptyString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/non-empty-string.md)
* [`expect.oddNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/odd-number.md)
* [`expect.sameLengthAs(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/same-length-as.md)
* [`expect.shorterThan(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/shorter-than.md)
* [`expect.startingWith(other: string)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/starting-with.md)
* [`expect.validDate()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/valid-date.md)
* [`expect.whitespace()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/whitespace.md)
* [`expect.wholeNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/whole-number.md)
* [`expect.withinRange(floor: number, ceiling: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/asymmetric/within-range.md)

### Matchers

* [`expect(date: Date).toBeAfter(other: Date)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-after.md)
* [`expect(value).toBeArray()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array.md)
* [`expect(value).toBeArrayOfBooleans()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-booleans.md)
* [`expect(value).toBeArrayOfNumbers()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-numbers.md)
* [`expect(value).toBeArrayOfObjects()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-objects.md)
* [`expect(value).toBeArrayOfSize(size: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-size.md)
* [`expect(value).toBeArrayOfStrings()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-array-of-strings.md)
* [`expect(date: Date).toBeBefore(other: Date)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-before.md)
* [`expect(value).toBeBoolean()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-boolean.md)
* [`expect(value).toBeCalculable()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-calculable.md)
* [`expect(value).toBeDate()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-date.md)
* [`expect(value).toBeDivisibleBy(other: number)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-divisible-by.md)
* [`expect(value).toBeEmptyArray()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-array.md)
* [`expect(value).toBeEmptyObject()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-object.md)
* [`expect(value).toBeEmptyString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-empty-string.md)
* [`expect(value).toBeEvenNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-even-number.md)
* [`expect(value).toBeFalse()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-false.md)
* [`expect(value).toBeFunction()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-function.md)
* [`expect(value).toBeIso8601()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-iso8601.md)
* [`expect(value).toBeJsonString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-json-string.md)
* [`expect(value: string | any[]).toBeLongerThan(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-longer-than.md)
* [`expect(value).toBeNonEmptyArray()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-array.md)
* [`expect(value).toBeNonEmptyObject()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-object.md)
* [`expect(value).toBeNonEmptyString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-non-empty-string.md)
* [`expect(value).toBeNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-number.md)
* [`expect(value).toBeObject()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-object.md)
* [`expect(value).toBeOddNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-odd-number.md)
* [`expect(value).toBeRegExp()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-reg-exp.md)
* [`expect(value: string | any[]).toBeSameLengthAs(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-same-length-as.md)
* [`expect(value: string | any[]).toBeShorterThan(other: string | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-shorter-than.md)
* [`expect(value).toBeString()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-string.md)
* [`expect(value).toBeTrue()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-true.md)
* [`expect(value).toBeValidDate()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-valid-date.md)
* [`expect(value).toBeWhitespace()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-whitespace.md)
* [`expect(value).toBeWholeNumber()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-whole-number.md)
* [`expect(value).toBeWithinRange()`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-be-within-range.md)
* [`expect(value: string).toEndWith(other: string)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-end-with.md)
* [`expect(value: string).toStartWith(other: string)`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-start-with.md)
* [`expect(fn).toHandleMissingBranches(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-missing-branches.md)
* [`expect(fn).toHandleMissingLeaves(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-missing-leaves.md)
* [`expect(fn).toHandleMissingNodes(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-missing-nodes.md)
* [`expect(fn).toHandleNullBranches(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-null-branches.md)
* [`expect(fn).toHandleNullLeaves(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-null-leaves.md)
* [`expect(fn).toHandleNullNodes(shape: object | any[])`](https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-handle-null-nodes.md)

<!-- Links -->

[documentation]: https://github.com/JamieMason/expect-more/tree/master/packages/expect-more-jest/docs
[jasmine-expect]: https://github.com/JamieMason/Jasmine-Matchers#readme
[jest-config]: https://facebook.github.io/jest/docs/en/configuration.html
[jest]: http://facebook.github.io/jest
[setup-test-framework-script-file]: https://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string
