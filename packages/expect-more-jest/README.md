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
import matchers from 'expect-more-jest';

beforeEach(() => {
  expect.extend(matchers);
});
```

## API

### General

+ `toBeBoolean(received: any)`
+ `toBeFalse(received: any)`
+ `toBeNull(received: any)`
+ `toBeRegExp(received: any)`
+ `toBeTrue(received: any)`
+ `toBeUndefined(received: any)`
+ `toBeWalkable(received: any)`

### Functions

+ `toBeFunction(received: any)`

### Objects

+ `toBeEmptyObject(received: any)`
+ `toBeNonEmptyObject(received: any)`
+ `toBeObject(received: any)`

### Arrays

+ `toBeArray(received: any)`
+ `toBeArrayOfBooleans(received: any)`
+ `toBeArrayOfNumbers(received: any)`
+ `toBeArrayOfObjects(received: any)`
+ `toBeArrayOfStrings(received: any)`
+ `toBeEmptyArray(received: any)`
+ `toBeNonEmptyArray(received: any)`

### Dates

+ `toBeAfter(received: any, other: Date)`
+ `toBeBefore(received: any, other: Date)`
+ `toBeDate(received: any)`
+ `toBeIso8601(received: any)`
+ `toBeValidDate(received: any)`

### Numbers

+ `toBeArrayOfSize(received: any, size: number)`
+ `toBeCalculable(received: any)`
+ `toBeEvenNumber(received: any)`
+ `toBeNear(received: any, proximity: { epsilon: number; number: number })`
+ `toBeNumber(received: any)`
+ `toBeOddNumber(received: any)`
+ `toBeWholeNumber(received: any)`
+ `toBeWithinRange(received: any, range: { ceiling: number; floor: number })`

### Strings

+ `toBeEmptyString(received: any)`
+ `toBeJsonString(received: any)`
+ `toBeLongerThan(received: any, other: string)`
+ `toBeNonEmptyString(received: any)`
+ `toBeSameLengthAs(received: any, other: string)`
+ `toBeShorterThan(received: any, other: string)`
+ `toBeString(received: any)`
+ `toBeWhitespace(received: any)`
+ `toEndWith(received: any, other: string)`
+ `toStartWith(received: any, other: string)`
