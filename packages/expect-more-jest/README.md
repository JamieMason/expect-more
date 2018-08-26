# expect-more-jest

Write Beautiful Specs with Custom Matchers for Jest

[![NPM version](http://img.shields.io/npm/v/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![Build Status](http://img.shields.io/travis/JamieMason/expect-more/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/expect-more)
[![Code Climate](https://img.shields.io/codeclimate/github/JamieMason/expect-more.svg?style=flat-square)](https://codeclimate.com/github/JamieMason/expect-more)
[![Gitter Chat for expect-more](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/expect-more)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/foldleft)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/expect-more-jest?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

expect-more-jest is a huge library of test matchers for a range of common use-cases, to make tests easier to read and
produce relevant and useful messages when they fail. Avoid vague messages such as _"expected false to be true"_ in
favour of useful cues like _"expected 3 to be even number"_, and avoid implementation noise such as
`expect(paws.length % 2 === 0).toEqual(true)` in favour of simply stating that you
`expect(paws.length).toBeEvenNumber()`.

## Installation

```
npm install expect-more-jest --save-dev
```

## Configuration

The simplest way to integrate is to set the [`setupTestFrameworkScriptFile`][setup-test-framework-script-file] value of
Jest's [jest.config.js][jest-config] to `require.resolve('expect-more-jest')`. If your project requires more setup than
just registering these matchers, include `require('expect-more-jest');` or `import 'expect-more-jest';` somewhere in the
file you have pointed your `setupTestFrameworkScriptFile` at.

Note: If your Editor does not recognise that you are using custom matchers, add a `global.d.ts` file at the root of your
project containing:

```ts
import 'expect-more-jest';
```

## Matchers

```ts
expect(date: Date).toBeAfter(other: Date)
expect(value).toBeArray()
expect(value).toBeArrayOfBooleans()
expect(value).toBeArrayOfNumbers()
expect(value).toBeArrayOfObjects()
expect(value).toBeArrayOfSize(size: number)
expect(value).toBeArrayOfStrings()
expect(date: Date).toBeBefore(other: Date)
expect(value).toBeBoolean()
expect(value).toBeCalculable()
expect(value).toBeDate()
expect(value).toBeDivisibleBy(other: number)
expect(value).toBeEmptyArray()
expect(value).toBeEmptyObject()
expect(value).toBeEmptyString()
expect(value).toBeEvenNumber()
expect(value).toBeFalse()
expect(value).toBeFunction()
expect(value).toBeIso8601()
expect(value).toBeJsonString()
expect(value: string | any[]).toBeLongerThan(other: string | any[])
expect(value).toBeNonEmptyArray()
expect(value).toBeNonEmptyObject()
expect(value).toBeNonEmptyString()
expect(value).toBeNumber()
expect(value).toBeObject()
expect(value).toBeOddNumber()
expect(value).toBeRegExp()
expect(value: string | any[]).toBeSameLengthAs(other: string | any[])
expect(value: string | any[]).toBeShorterThan(other: string | any[])
expect(value).toBeString()
expect(value).toBeTrue()
expect(value).toBeValidDate()
expect(value).toBeWhitespace()
expect(value).toBeWholeNumber()
expect(value: string).toEndWith(other: string)
expect(fn).toHandleMissingBranches(shape: object | any[])
expect(fn).toHandleMissingLeaves(shape: object | any[])
expect(fn).toHandleMissingNodes(shape: object | any[])
expect(fn).toHandleNullBranches(shape: object | any[])
expect(fn).toHandleNullLeaves(shape: object | any[])
expect(fn).toHandleNullNodes(shape: object | any[])
expect(value: string).toStartWith(other: string)
```

<!-- Links -->

[jest-config]: https://facebook.github.io/jest/docs/en/configuration.html
[jest]: http://facebook.github.io/jest
[setup-test-framework-script-file]: https://facebook.github.io/jest/docs/en/configuration.html
