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

## Installation

```
npm install expect-more-jest --save-dev
```

## Usage

```js
import { asymmetric, matchers } from 'expect-more-jest';

beforeEach(() => {
  Object.assign(expect, asymmetric);
  expect.extend(matchers);
});
```

## API

### General

+ `.toBeBoolean()`
+ `.toBeFalse()`
+ `.toBeNull()`
+ `.toBeRegExp()`
+ `.toBeTrue()`
+ `.toBeUndefined()`
+ `.toBeWalkable()`
+ `expect.walkable()`

### Functions

+ `.toBeFunction()`
+ `.toSurvive(deconstructor)`

### Objects

+ `.toBeEmptyObject()`
+ `.toBeNonEmptyObject()`
+ `.toBeObject()`
+ `expect.nonEmptyObject()`

### Arrays

+ `.toBeArray()`
+ `.toBeArrayOfBooleans()`
+ `.toBeArrayOfNumbers()`
+ `.toBeArrayOfObjects()`
+ `.toBeArrayOfStrings()`
+ `.toBeEmptyArray()`
+ `.toBeNonEmptyArray()`
+ `expect.arrayOfBooleans()`
+ `expect.arrayOfNumbers()`
+ `expect.arrayOfObjects()`
+ `expect.arrayOfSize(number)`
+ `expect.arrayOfStrings()`
+ `expect.nonEmptyArray()`

### Dates

+ `.toBeAfter(date)`
+ `.toBeBefore(date)`
+ `.toBeDate()`
+ `.toBeIso8601()`
+ `.toBeValidDate()`
+ `expect.after(date)`
+ `expect.before(date)`
+ `expect.iso8601()`
+ `expect.validDate()`

### Numbers

+ `.toBeArrayOfSize(number)`
+ `.toBeCalculable()`
+ `.toBeEvenNumber()`
+ `.toBeNear(epsilon: number; number: number)`
+ `.toBeNumber()`
+ `.toBeOddNumber()`
+ `.toBeWholeNumber()`
+ `.toBeWithinRange(floor: number, ceiling: number)`
+ `expect.calculable()`
+ `expect.divisibleBy(number)`
+ `expect.evenNumber()`
+ `expect.near(other: number, epsilon: number)`
+ `expect.oddNumber()`
+ `expect.wholeNumber()`
+ `expect.withinRange(floor: number, ceiling: number)`

### Strings

+ `.toBeEmptyString()`
+ `.toBeJsonString()`
+ `.toBeLongerThan(string)`
+ `.toBeNonEmptyString()`
+ `.toBeSameLengthAs(string)`
+ `.toBeShorterThan(string)`
+ `.toBeString()`
+ `.toBeWhitespace()`
+ `.toEndWith(string)`
+ `.toStartWith(string)`
+ `expect.endingWith(string)`
+ `expect.jsonString()`
+ `expect.longerThan(string)`
+ `expect.nonEmptyString()`
+ `expect.sameLengthAs(string)`
+ `expect.shorterThan(string)`
+ `expect.startingWith(string)`
+ `expect.whitespace()`
