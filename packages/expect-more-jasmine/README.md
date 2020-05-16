# expect-more-jasmine

> Write Beautiful Specs with Custom Matchers for Jasmine

[![NPM version](http://img.shields.io/npm/v/expect-more-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jasmine)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jasmine)
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

expect-more-jasmine is a huge library of test matchers for a range of common use-cases, to make
tests easier to read and produce relevant and useful messages when they fail.

Avoid vague messages such as _"expected false to be true"_ in favour of useful cues like _"expected
3 to be even number"_, and avoid implementation noise such as
`expect(paws.length % 2 === 0).toEqual(true)` in favour of simply stating that you
`expect(paws.length).toBeEvenNumber()`.

## 🌩 Installation

```
npm install expect-more-jasmine --save-dev
```

## 🕹 Configuration

`import 'expect-more-jasmine'` or `require('expect-more-jasmine')` at the top your test file.

## 🔬 Matchers

<details><summary><code>toBeAfter</code></summary>

```ts
expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
```

</details>

<details><summary><code>toBeArrayOfBooleans</code></summary>

```ts
expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
```

</details>

<details><summary><code>toBeArrayOfNumbers</code></summary>

```ts
expect([12, 0, 14]).toBeArrayOfNumbers();
```

</details>

<details><summary><code>toBeArrayOfObjects</code></summary>

```ts
expect([{}, new Object()]).toBeArrayOfObjects();
```

</details>

<details><summary><code>toBeArrayOfSize</code></summary>

```ts
expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
```

</details>

<details><summary><code>toBeArrayOfStrings</code></summary>

```ts
expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
```

</details>

<details><summary><code>toBeArray</code></summary>

```ts
expect([2, true, 'string']).toBeArray();
```

</details>

<details><summary><code>toBeAsyncFunction</code></summary>

```ts
expect(async () => {
  await fetch('...');
}).toBeAsyncFunction();
```

</details>

<details><summary><code>toBeBefore</code></summary>

```ts
expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
```

</details>

<details><summary><code>toBeBoolean</code></summary>

```ts
expect(false).toBeBoolean();
```

</details>

<details><summary><code>toBeCalculable</code></summary>

```ts
expect('100').toBeCalculable();
```

</details>

<details><summary><code>toBeDate</code></summary>

```ts
expect(new Date('2019-12-31')).toBeDate();
```

</details>

<details><summary><code>toBeDecimalNumber</code></summary>

```ts
expect(12.55).toBeDecimalNumber();
```

</details>

<details><summary><code>toBeDivisibleBy</code></summary>

```ts
expect(12).toBeDivisibleBy(2);
```

</details>

<details><summary><code>toBeEmptyArray</code></summary>

```ts
expect([]).toBeEmptyArray();
```

</details>

<details><summary><code>toBeEmptyObject</code></summary>

```ts
expect({}).toBeEmptyObject();
```

</details>

<details><summary><code>toBeEmptyString</code></summary>

```ts
expect('').toBeEmptyString();
```

</details>

<details><summary><code>toBeEvenNumber</code></summary>

```ts
expect(2).toBeEvenNumber();
```

</details>

<details><summary><code>toBeFalse</code></summary>

```ts
expect(false).toBeFalse();
```

</details>

<details><summary><code>toBeFunction</code></summary>

```ts
expect(() => 'i am a function').toBeFunction();
```

</details>

<details><summary><code>toBeGeneratorFunction</code></summary>

```ts
expect(function* gen() {
  yield 'i am a generator';
}).toBeGeneratorFunction();
```

</details>

<details><summary><code>toBeIso8601</code></summary>

```ts
expect('1999-12-31T23:59:59').toBeIso8601();
```

</details>

<details><summary><code>toBeJsonString</code></summary>

```ts
expect('{"i":"am valid JSON"}').toBeJsonString();
```

</details>

<details><summary><code>toBeLongerThan</code></summary>

```ts
expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
```

</details>

<details><summary><code>toBeNonEmptyArray</code></summary>

```ts
expect(['i', 'am not empty']).toBeNonEmptyArray();
```

</details>

<details><summary><code>toBeNonEmptyObject</code></summary>

```ts
expect({ i: 'am not empty' }).toBeNonEmptyObject();
```

</details>

<details><summary><code>toBeNonEmptyString</code></summary>

```ts
expect('i am not empty').toBeNonEmptyString();
```

</details>

<details><summary><code>toBeNumber</code></summary>

```ts
expect(8).toBeNumber();
```

</details>

<details><summary><code>toBeObject</code></summary>

```ts
expect({}).toBeObject();
```

</details>

<details><summary><code>toBeOddNumber</code></summary>

```ts
expect(5).toBeOddNumber();
```

</details>

<details><summary><code>toBeRegExp</code></summary>

```ts
expect(new RegExp('i am a regular expression')).toBeRegExp();
```

</details>

<details><summary><code>toBeSameLengthAs</code></summary>

```ts
expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
```

</details>

<details><summary><code>toBeShorterThan</code></summary>

```ts
expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
```

</details>

<details><summary><code>toBeString</code></summary>

```ts
expect('i am a string').toBeString();
```

</details>

<details><summary><code>toBeTrue</code></summary>

```ts
expect(true).toBeTrue();
```

</details>

<details><summary><code>toBeValidDate</code></summary>

```ts
expect(new Date('2020-01-01')).toBeValidDate();
```

</details>

<details><summary><code>toBeWalkable</code></summary>

```ts
expect({}).toBeWalkable();
```

</details>

<details><summary><code>toBeWhitespace</code></summary>

```ts
expect(' ').toBeWhitespace();
```

</details>

<details><summary><code>toBeWholeNumber</code></summary>

```ts
expect(8).toBeWholeNumber();
```

</details>

<details><summary><code>toBeWithinRange</code></summary>

```ts
expect(7).toBeWithinRange(0, 10);
```

</details>

<details><summary><code>toEndWith</code></summary>

```ts
expect('JavaScript').toEndWith('Script');
```

</details>

<details><summary><code>toHaveArrayOfBooleans</code></summary>

```ts
expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans(
  'child.grandchild',
);
```

</details>

<details><summary><code>toHaveArrayOfNumbers</code></summary>

```ts
expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
```

</details>

<details><summary><code>toHaveArrayOfObjects</code></summary>

```ts
expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
```

</details>

<details><summary><code>toHaveArrayOfSize</code></summary>

```ts
expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toHaveArrayOfSize(
  'child.grandchild',
  4,
);
```

</details>

<details><summary><code>toHaveArrayOfStrings</code></summary>

```ts
expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toHaveArrayOfStrings(
  'child.grandchild',
);
```

</details>

<details><summary><code>toHaveArray</code></summary>

```ts
expect({ child: { grandchild: [2, true, 'string'] } }).toHaveArray('child.grandchild');
```

</details>

<details><summary><code>toHaveAsyncFunction</code></summary>

```ts
expect({
  child: {
    grandchild: async () => {
      await fetch('...');
    },
  },
}).toHaveAsyncFunction('child.grandchild');
```

</details>

<details><summary><code>toHaveBoolean</code></summary>

```ts
expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
```

</details>

<details><summary><code>toHaveCalculable</code></summary>

```ts
expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
```

</details>

<details><summary><code>toHaveDateAfter</code></summary>

```ts
expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveDateAfter(
  'child.grandchild',
  new Date('2019-12-31'),
);
```

</details>

<details><summary><code>toHaveDateBefore</code></summary>

```ts
expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateBefore(
  'child.grandchild',
  new Date('2020-01-01'),
);
```

</details>

<details><summary><code>toHaveDate</code></summary>

```ts
expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDate('child.grandchild');
```

</details>

<details><summary><code>toHaveDecimalNumber</code></summary>

```ts
expect({ child: { grandchild: 12.55 } }).toHaveDecimalNumber('child.grandchild');
```

</details>

<details><summary><code>toHaveDivisibleBy</code></summary>

```ts
expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
```

</details>

<details><summary><code>toHaveEmptyArray</code></summary>

```ts
expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
```

</details>

<details><summary><code>toHaveEmptyObject</code></summary>

```ts
expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
```

</details>

<details><summary><code>toHaveEmptyString</code></summary>

```ts
expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
```

</details>

<details><summary><code>toHaveEndingWith</code></summary>

```ts
expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
```

</details>

<details><summary><code>toHaveEvenNumber</code></summary>

```ts
expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
```

</details>

<details><summary><code>toHaveFalse</code></summary>

```ts
expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
```

</details>

<details><summary><code>toHaveGeneratorFunction</code></summary>

```ts
expect({
  child: {
    grandchild: function* gen() {
      yield 'i am a generator';
    },
  },
}).toHaveGeneratorFunction('child.grandchild');
```

</details>

<details><summary><code>toHaveGreaterThanOrEqualTo</code></summary>

```ts
expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
```

</details>

<details><summary><code>toHaveIso8601</code></summary>

```ts
expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toHaveIso8601('child.grandchild');
```

</details>

<details><summary><code>toHaveJsonString</code></summary>

```ts
expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
```

</details>

<details><summary><code>toHaveLessThanOrEqualTo</code></summary>

```ts
expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
```

</details>

<details><summary><code>toHaveLongerThan</code></summary>

```ts
expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [
  2,
  'items',
]);
```

</details>

<details><summary><code>toHaveMethod</code></summary>

```ts
expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
```

</details>

<details><summary><code>toHaveNonEmptyArray</code></summary>

```ts
expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
```

</details>

<details><summary><code>toHaveNonEmptyObject</code></summary>

```ts
expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
```

</details>

<details><summary><code>toHaveNonEmptyString</code></summary>

```ts
expect({ child: { grandchild: 'i am not empty' } }).toHaveNonEmptyString('child.grandchild');
```

</details>

<details><summary><code>toHaveNull</code></summary>

```ts
expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
```

</details>

<details><summary><code>toHaveNumberNear</code></summary>

```ts
expect({ child: { grandchild: 4.8 } }).toHaveNumberNear('child.grandchild', 5, 0.5);
```

</details>

<details><summary><code>toHaveNumberWithinRange</code></summary>

```ts
expect({ child: { grandchild: 7 } }).toHaveNumberWithinRange('child.grandchild', 0, 10);
```

</details>

<details><summary><code>toHaveNumber</code></summary>

```ts
expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
```

</details>

<details><summary><code>toHaveObject</code></summary>

```ts
expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
```

</details>

<details><summary><code>toHaveOddNumber</code></summary>

```ts
expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
```

</details>

<details><summary><code>toHaveRegExp</code></summary>

```ts
expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp(
  'child.grandchild',
);
```

</details>

<details><summary><code>toHaveSameLengthAs</code></summary>

```ts
expect({ child: { grandchild: ['i also have', '2 items'] } }).toHaveSameLengthAs(
  'child.grandchild',
  ['i have', '2 items'],
);
```

</details>

<details><summary><code>toHaveShorterThan</code></summary>

```ts
expect({ child: { grandchild: ['i have one item'] } }).toHaveShorterThan('child.grandchild', [
  'i',
  'have',
  4,
  'items',
]);
```

</details>

<details><summary><code>toHaveStartingWith</code></summary>

```ts
expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
```

</details>

<details><summary><code>toHaveString</code></summary>

```ts
expect({ child: { grandchild: 'i am a string' } }).toHaveString('child.grandchild');
```

</details>

<details><summary><code>toHaveTrue</code></summary>

```ts
expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
```

</details>

<details><summary><code>toHaveUndefined</code></summary>

```ts
expect({ child: { grandchild: undefined } }).toHaveUndefined('child.grandchild');
```

</details>

<details><summary><code>toHaveValidDate</code></summary>

```ts
expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveValidDate('child.grandchild');
```

</details>

<details><summary><code>toHaveWalkable</code></summary>

```ts
expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
```

</details>

<details><summary><code>toHaveWhitespace</code></summary>

```ts
expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
```

</details>

<details><summary><code>toHaveWholeNumber</code></summary>

```ts
expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
```

</details>

<details><summary><code>toStartWith</code></summary>

```ts
expect('JavaScript').toStartWith('Java');
```

</details>

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
