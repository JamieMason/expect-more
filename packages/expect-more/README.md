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
export declare const isBoolean: (value: unknown) => value is boolean;
export declare const isFalse: (value: unknown) => value is false;
export declare const isNull: (value: unknown) => value is null;
export declare const isRegExp: (value: unknown) => value is RegExp;
export declare const isTrue: (value: unknown) => value is true;
export declare const isUndefined: (value: unknown) => value is undefined;
```

### Functions

```ts
export declare const isAsyncFunction: <T = (...args: any[]) => Promise<any>>(
  value: unknown,
) => value is T;
export declare const isFunction: <T = (...args: any[]) => any>(value: unknown) => value is T;
export declare const isGeneratorFunction: <T = Generator>(value: unknown) => value is T;
export declare const throwsAnyError: <T = (...args: any[]) => any>(value: unknown) => value is T;
export declare const throwsErrorOfType: <T = (...args: any[]) => any>(
  typeName: string,
  value: unknown,
) => value is T;
```

### Objects

```ts
export declare const hasMember: <T = any>(memberName: string, value: unknown) => value is T;
export declare const isEmptyObject: <T = any>(value: unknown) => value is T;
export declare const isNonEmptyObject: <T = any>(value: unknown) => value is T;
export declare const isObject: <T = any>(value: unknown) => value is T;
export declare const isWalkable: <T = any>(value: unknown) => value is T;
```

### Arrays

```ts
export declare const isArray: <T extends any[] = any[]>(value: unknown) => value is T;
export declare const isArrayOfBooleans: (value: unknown) => value is boolean[];
export declare const isArrayOfNumbers: (value: unknown) => value is number[];
export declare const isArrayOfObjects: <T extends any[] = any[]>(value: unknown) => value is T;
export declare const isArrayOfSize: <T extends any[] = any[]>(
  size: number,
  value: unknown,
) => value is T;
export declare const isArrayOfStrings: (value: unknown) => value is string[];
export declare const isEmptyArray: <T extends [] = []>(any) => value is T;
export declare const isNonEmptyArray: <T extends any[] = any[]>(value: unknown) => value is T;
```

### Dates

```ts
export declare const isAfter: (other: Date, value: unknown) => value is Date;
export declare const isBefore: (other: Date, value: unknown) => value is Date;
export declare const isDate: (value: unknown) => value is Date;
export declare const isValidDate: (value: unknown) => value is Date;
```

### Numbers

```ts
export declare const isCalculable: (value: unknown) => value is number;
export declare const isDecimalNumber: (value: unknown) => value is number;
export declare const isDivisibleBy: (other: number, value: unknown) => value is number;
export declare const isEvenNumber: (value: unknown) => value is number;
export declare const isGreaterThanOrEqualTo: (other: number, value: unknown) => value is number;
export declare const isLessThanOrEqualTo: (other: number, value: unknown) => value is number;
export declare const isNear: (other: number, epsilon: number, value: unknown) => value is number;
export declare const isNumber: (value: unknown) => value is number;
export declare const isOddNumber: (value: unknown) => value is number;
export declare const isWholeNumber: (value: unknown) => value is number;
export declare const isWithinRange: (
  floor: number,
  ceiling: number,
  value: unknown,
) => value is number;
```

### Strings

```ts
export declare const endsWith: (other: string, value: unknown) => value is number;
export declare const isEmptyString: (value: unknown) => value is number;
export declare const isIso8601: (value: unknown) => value is number;
export declare const isJsonString: (value: unknown) => value is number;
export declare const isLongerThan: (other: string, value: unknown) => value is number;
export declare const isNonEmptyString: (value: unknown) => value is number;
export declare const isSameLengthAs: (other: string, value: unknown) => value is number;
export declare const isShorterThan: (other: string, value: unknown) => value is number;
export declare const isString: (value: unknown) => value is number;
export declare const isVisibleString: (value: unknown) => value is number;
export declare const isWhitespace: (value: unknown) => value is number;
export declare const startsWith: (other: string, value: unknown) => value is number;
```

## API: `expect-more/gen`

```ts
export declare const withMissingBranches: (value: object | any[]) => Generator;
export declare const withMissingLeaves: (value: object | any[]) => Generator;
export declare const withMissingNodes: (value: object | any[]) => Generator;
export declare const withNullBranches: (value: object | any[]) => Generator;
export declare const withNullLeaves: (value: object | any[]) => Generator;
export declare const withNullNodes: (value: object | any[]) => Generator;
```
