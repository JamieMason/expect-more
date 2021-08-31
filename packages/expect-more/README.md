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

```ts
import { endsWith, isWithinRange } from 'expect-more';

const result: boolean = endsWith('Script', 'JavaScript');
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

```ts
declare const isBoolean: (value: unknown) => value is boolean;
declare const isFalse: (value: unknown) => value is false;
declare const isNull: (value: unknown) => value is null;
declare const isRegExp: (value: unknown) => value is RegExp;
declare const isTrue: (value: unknown) => value is true;
declare const isUndefined: (value: unknown) => value is undefined;
```

### Functions

```ts
declare const isAsyncFunction: <T = (...args: any[]) => Promise<any>>(
  value: unknown,
) => value is T;
declare const isFunction: <T = (...args: any[]) => any>(value: unknown) => value is T;
declare const isGeneratorFunction: <T = Generator>(value: unknown) => value is T;
declare const throwsAnyError: <T = (...args: any[]) => any>(value: unknown) => value is T;
declare const throwsErrorOfType: <T = (...args: any[]) => any>(
  typeName: string,
  value: unknown,
) => value is T;
```

### Objects

```ts
declare const hasMember: <T = any>(memberName: string, value: unknown) => value is T;
declare const isEmptyObject: <T = any>(value: unknown) => value is T;
declare const isNil: (value: unknown) => value is undefined | null;
declare const isNonEmptyObject: <T = any>(value: unknown) => value is T;
declare const isObject: <T = any>(value: unknown) => value is T;
declare const isWalkable: <T = any>(value: unknown) => value is T;
```

### Arrays

```ts
declare const isArray: <T extends any[] = any[]>(value: unknown) => value is T;
declare const isArrayIncludingAllOf: <T extends any[] = any[]>(needed: any[], value: unknown) => value is T;
declare const isArrayIncludingAnyOf: <T extends any[] = any[]>(needed: any[], value: unknown) => value is T;
declare const isArrayIncludingOnly: <T extends any[] = any[]>(needed: any[], value: unknown) => value is T;
declare const isArrayOfBooleans: (value: unknown) => value is boolean[];
declare const isArrayOfNumbers: (value: unknown) => value is number[];
declare const isArrayOfObjects: <T extends any[] = any[]>(value: unknown) => value is T;
declare const isArrayOfSize: <T extends any[] = any[]>(
  size: number,
  value: unknown,
) => value is T;
declare const isArrayOfStrings: (value: unknown) => value is string[];
declare const isEmptyArray: <T extends [] = []>(any) => value is T;
declare const isNonEmptyArray: <T extends any[] = any[]>(value: unknown) => value is T;
```

### Dates

```ts
declare const isAfter: (other: Date, value: unknown) => value is Date;
declare const isBefore: (other: Date, value: unknown) => value is Date;
declare const isDate: (value: unknown) => value is Date;
declare const isDateBetween: (floor: Date, ceiling: Date, value: unknown) => value is Date;
declare const isDateInMonth: (index: number, value: unknown) => value is Date;
declare const isDateInYear: (year: number, value: unknown) => value is Date;
declare const isDateOnDayOfMonth: (day: number, value: unknown) => value is Date;
declare const isDateOnDayOfWeek: (index: number, value: unknown) => value is Date;
declare const isDateOnOrAfter: (other: Date, value: unknown) => value is Date;
declare const isDateOnOrBefore: (other: Date, value: unknown) => value is Date;
declare const isValidDate: (value: unknown) => value is Date;
```

### Numbers

```ts
declare const isCalculable: (value: unknown) => value is number;
declare const isDecimalNumber: (value: unknown) => value is number;
declare const isDivisibleBy: (other: number, value: unknown) => value is number;
declare const isEvenNumber: (value: unknown) => value is number;
declare const isGreaterThanOrEqualTo: (other: number, value: unknown) => value is number;
declare const isLessThanOrEqualTo: (other: number, value: unknown) => value is number;
declare const isNear: (other: number, epsilon: number, value: unknown) => value is number;
declare const isNegativeNumber: (value: unknown) => value is number;
declare const isNumber: (value: unknown) => value is number;
declare const isOddNumber: (value: unknown) => value is number;
declare const isPositiveNumber: (value: unknown) => value is number;
declare const isWholeNumber: (value: unknown) => value is number;
declare const isWithinRange: (
  floor: number,
  ceiling: number,
  value: unknown,
) => value is number;
```

### Strings

```ts
declare const endsWith: (other: string, value: unknown) => value is string;
declare const isEmptyString: (value: unknown) => value is string;
declare const isIso8601: (value: unknown) => value is string;
declare const isJsonString: (value: unknown) => value is string;
declare const isLongerThan: (other: string, value: unknown) => value is string;
declare const isNonEmptyString: (value: unknown) => value is string;
declare const isSameLengthAs: (other: string, value: unknown) => value is string;
declare const isShorterThan: (other: string, value: unknown) => value is string;
declare const isString: (value: unknown) => value is string;
declare const isVisibleString: (value: unknown) => value is string;
declare const isWhitespace: (value: unknown) => value is string;
declare const startsWith: (other: string, value: unknown) => value is string;
```

## API: `expect-more/gen`

```ts
declare const withMissingBranches: (value: object | any[]) => Generator;
declare const withMissingLeaves: (value: object | any[]) => Generator;
declare const withMissingNodes: (value: object | any[]) => Generator;
declare const withNullBranches: (value: object | any[]) => Generator;
declare const withNullLeaves: (value: object | any[]) => Generator;
declare const withNullNodes: (value: object | any[]) => Generator;
```
