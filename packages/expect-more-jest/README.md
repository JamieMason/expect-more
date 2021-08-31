# expect-more-jest

> Write Beautiful Specs with Custom Matchers for Jest

[![NPM version](http://img.shields.io/npm/v/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![Build Status](http://img.shields.io/travis/JamieMason/expect-more/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/expect-more)
[![Maintainability](https://api.codeclimate.com/v1/badges/9f4abbef97ae0d23d97e/maintainability)](https://codeclimate.com/github/JamieMason/expect-more/maintainability)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

## Table of Contents

- [Overview](#overview)
- [🌩 Installation](#-installation)
- [🕹 Configuration](#-configuration)
- [🔬 Matchers](#-matchers)
- [🙋🏽‍♂️ Getting Help](#%EF%B8%8F-getting-help)
- [👀 Other Projects](#-other-projects)
- [🤓 Author](#-author)

## Overview

expect-more-jest is a huge library of test matchers for a range of common use-cases, to make tests
easier to read and produce relevant and useful messages when they fail.

Avoid vague messages such as _"expected false to be true"_ in favour of useful cues like _"expected
3 to be even number"_, and avoid implementation noise such as
`expect(paws.length % 2 === 0).toEqual(true)` in favour of simply stating that you
`expect(paws.length).toBeEvenNumber()`.

## 🌩 Installation

```
npm install expect-more-jest --save-dev
```

## 🕹 Configuration

Include one of the following at the top of your test file.

```ts
import 'expect-more-jest';
// or
require('expect-more-jest');
```

## 🔬 Matchers

```ts
describe('expect-more-jest', () => {
  it('makes your tests and output easier to read', () => {
    expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
    expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
    expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
    expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
    expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
    expect([12, 0, 14]).toBeArrayOfNumbers();
    expect([{}, new Object()]).toBeArrayOfObjects();
    expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
    expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
    expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toBeArrayOf({
      name: expect.toBeNonEmptyString(),
    });
    expect([2, true, 'string']).toBeArray();
    expect(async () => {
      await fetch('...');
    }).toBeAsyncFunction();
    expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
    expect(false).toBeBoolean();
    expect('100').toBeCalculable();
    expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
    expect(new Date('2021-08-29')).toBeDateInMonth(7);
    expect(new Date('2021-08-29')).toBeDateInYear(2021);
    expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
    expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
    expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
    expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
    expect(new Date('2019-12-31')).toBeDate();
    expect(12.55).toBeDecimalNumber();
    expect(12).toBeDivisibleBy(2);
    expect([]).toBeEmptyArray();
    expect({}).toBeEmptyObject();
    expect('').toBeEmptyString();
    expect(2).toBeEvenNumber();
    expect(false).toBeFalse();
    expect(() => 'i am a function').toBeFunction();
    expect(function* gen() {
      yield 'i am a generator';
    }).toBeGeneratorFunction();
    expect('1999-12-31T23:59:59').toBeIso8601();
    expect('{"i":"am valid JSON"}').toBeJsonString();
    expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
    expect(-18).toBeNegativeNumber();
    expect(undefined).toBeNil();
    expect(['i', 'am not empty']).toBeNonEmptyArray();
    expect({ i: 'am not empty' }).toBeNonEmptyObject();
    expect('i am not empty').toBeNonEmptyString();
    expect({ x: 12, y: 22 }).toBeNullableOf({
      x: expect.toBeNumber(),
      y: expect.toBeNumber(),
    });
    expect(null).toBeNullableOf({
      x: expect.toBeNumber(),
      y: expect.toBeNumber(),
    });
    expect(8).toBeNumber();
    expect({}).toBeObject();
    expect(5).toBeOddNumber();
    expect({ x: 12, y: 22 }).toBeOptionalOf({
      x: expect.toBeNumber(),
      y: expect.toBeNumber(),
    });
    expect(undefined).toBeOptionalOf({
      x: expect.toBeNumber(),
      y: expect.toBeNumber(),
    });
    expect(5).toBePositiveNumber();
    expect(new RegExp('i am a regular expression')).toBeRegExp();
    expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
    expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
    expect('i am a string').toBeString();
    expect(true).toBeTrue();
    expect(new Date('2020-01-01')).toBeValidDate();
    expect('i am visible').toBeVisibleString();
    expect({}).toBeWalkable();
    expect(' ').toBeWhitespace();
    expect(8).toBeWholeNumber();
    expect(7).toBeWithinRange(0, 10);
    expect('JavaScript').toEndWith('Script');
    expect('JavaScript').toStartWith('Java');
  });
});
```

## 🙋🏽‍♂️ Getting Help

Get help with issues by creating a [Bug Report] or discuss ideas by opening a [Feature Request].

[bug report]: https://github.com/JamieMason/expect-more/issues/new?template=bug_report.md
[feature request]: https://github.com/JamieMason/expect-more/issues/new?template=feature_request.md

## 👀 Other Projects

If you find my Open Source projects useful, please share them ❤️

- [**eslint-formatter-git-log**](https://github.com/JamieMason/eslint-formatter-git-log)<br>ESLint
  Formatter featuring Git Author, Date, and Hash
- [**eslint-plugin-move-files**](https://github.com/JamieMason/eslint-plugin-move-files)<br>Move and
  rename files while keeping imports up to date
- [**eslint-plugin-prefer-arrow-functions**](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions)<br>Convert
  functions to arrow functions
- [**ImageOptim-CLI**](https://github.com/JamieMason/ImageOptim-CLI)<br>Automates ImageOptim,
  ImageAlpha, and JPEGmini for Mac to make batch optimisation of images part of your automated build
  process.
- [**karma-benchmark**](https://github.com/JamieMason/karma-benchmark)<br>Run Benchmark.js over
  multiple Browsers, with CI compatible output
- [**self-help**](https://github.com/JamieMason/self-help#readme)<br>Interactive Q&A Guides for Web
  and the Command Line
- [**syncpack**](https://github.com/JamieMason/syncpack#readme)<br>Manage multiple package.json
  files, such as in Lerna Monorepos and Yarn Workspaces

## 🤓 Author

<img src="https://www.gravatar.com/avatar/acdf106ce071806278438d8c354adec8?s=100" align="left">

I'm [Jamie Mason] from [Leeds] in England, I began Web Design and Development in 1999 and have been
Contracting and offering Consultancy as Fold Left Ltd since 2012. Who I've worked with includes [Sky
Sports], [Sky Bet], [Sky Poker], The [Premier League], [William Hill], [Shell], [Betfair], and
Football Clubs including [Leeds United], [Spurs], [West Ham], [Arsenal], and more.

<div align="center">

[![Follow JamieMason on GitHub][github badge]][github]
[![Follow fold_left on Twitter][twitter badge]][twitter]

</div>

<!-- images -->

[github badge]: https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow
[twitter badge]: https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow

<!-- links -->

[arsenal]: https://www.arsenal.com
[betfair]: https://www.betfair.com
[github]: https://github.com/JamieMason
[jamie mason]: https://www.linkedin.com/in/jamiemasonleeds
[leeds united]: https://www.leedsunited.com/
[leeds]: https://www.instagram.com/visitleeds
[premier league]: https://www.premierleague.com
[shell]: https://www.shell.com
[sky bet]: https://www.skybet.com
[sky poker]: https://www.skypoker.com
[sky sports]: https://www.skysports.com
[spurs]: https://www.tottenhamhotspur.com
[twitter]: https://twitter.com/fold_left
[west ham]: https://www.whufc.com
[william hill]: https://www.williamhill.com
[jest-config]: https://jestjs.io/docs/en/configuration
[jest]: https://jestjs.io
[setup-files-after-env]: https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
