# expect-more

> Curried JavaScript Type Testing Library with Zero Dependencies

[![NPM version](http://img.shields.io/npm/v/expect-more.svg?style=flat-square)](https://www.npmjs.com/package/expect-more)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more.svg?style=flat-square)](https://www.npmjs.com/package/expect-more)
[![Build Status](http://img.shields.io/travis/JamieMason/expect-more/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/expect-more)
[![Maintainability](https://api.codeclimate.com/v1/badges/9f4abbef97ae0d23d97e/maintainability)](https://codeclimate.com/github/JamieMason/expect-more/maintainability)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

## Installation

```
npm install expect-more --save-dev
```

## Usage

```js
import { endsWith, isWithinRange } from 'expect-more';

endsWith('Script', 'JavaScript');
// => true

const endsWithScript = endsWith('Script');
endsWithScript('JavaScript');
// => true

isWithinRange(10, 20, 21);
// => false

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34].filter(isWithinRange(5, 15));
// => [5, 8, 13]
```

## API: `expect-more`

### General

- `isBoolean: (value: any) => boolean`
- `isFalse: (value: any) => boolean`
- `isNull: (value: any) => boolean`
- `isRegExp: (value: any) => boolean`
- `isTrue: (value: any) => boolean`
- `isUndefined: (value: any) => boolean`

### Functions

- `isAsyncFunction: (value: any) => boolean`
- `isFunction: (value: any) => boolean`
- `isGeneratorFunction: (value: any) => boolean`
- `throwsAnyError: (value: () => void) => boolean`
- `throwsErrorOfType: (typeName: string, value: () => void) => boolean`

### Objects

- `hasMember: (memberName: string, value: any) => boolean`
- `isEmptyObject: (value: any) => boolean`
- `isNonEmptyObject: (value: any) => boolean`
- `isObject: (value: any) => boolean`
- `isWalkable: (value: any) => boolean`

### Arrays

- `isArray: (value: any) => boolean`
- `isArrayOfBooleans: (value: any) => boolean`
- `isArrayOfNumbers: (value: any) => boolean`
- `isArrayOfObjects: (value: any) => boolean`
- `isArrayOfSize: (size: number, value: any) => boolean`
- `isArrayOfStrings: (value: any) => boolean`
- `isEmptyArray: (any) => boolean`
- `isNonEmptyArray: (value: any) => boolean`

### Dates

- `isAfter: (other: Date, value: any) => boolean`
- `isBefore: (other: Date, value: any) => boolean`
- `isDate: (value: any) => boolean`
- `isValidDate: (value: any) => boolean`

### Numbers

- `isCalculable: (value: any) => boolean`
- `isDecimalNumber: (value: any) => boolean`
- `isDivisibleBy: (other: number, value: any) => boolean`
- `isEvenNumber: (value: any) => boolean`
- `isGreaterThanOrEqualTo: (other: number, value: any) => boolean`
- `isLessThanOrEqualTo: (other: number, value: any) => boolean`
- `isNear: (other: number, epsilon: number, value: any) => boolean`
- `isNumber: (value: any) => boolean`
- `isOddNumber: (value: any) => boolean`
- `isWholeNumber: (value: any) => boolean`
- `isWithinRange: (floor: number, ceiling: number, value: any) => boolean`

### Strings

- `endsWith: (other: string, value: any) => boolean`
- `isEmptyString: (value: any) => boolean`
- `isIso8601: (value: any) => boolean`
- `isJsonString: (value: any) => boolean`
- `isLongerThan: (other: string, value: any) => boolean`
- `isNonEmptyString: (value: any) => boolean`
- `isSameLengthAs: (other: string, value: any) => boolean`
- `isShorterThan: (other: string, value: any) => boolean`
- `isString: (value: any) => boolean`
- `isVisibleString: (value: any) => boolean`
- `isWhitespace: (value: any) => boolean`
- `startsWith: (other: string, value: any) => boolean`

## API: `expect-more/gen`

- `withMissingBranches: (value: object | any[]) => Generator`
- `withMissingLeaves: (value: object | any[]) => Generator`
- `withMissingNodes: (value: object | any[]) => Generator`
- `withNullBranches: (value: object | any[]) => Generator`
- `withNullLeaves: (value: object | any[]) => Generator`
- `withNullNodes: (value: object | any[]) => Generator`
