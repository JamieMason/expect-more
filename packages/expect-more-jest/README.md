# expect-more-jest

> Write Beautiful Specs with Custom Matchers for Jest

[![NPM version](http://img.shields.io/npm/v/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![NPM downloads](http://img.shields.io/npm/dm/expect-more-jest.svg?style=flat-square)](https://www.npmjs.com/package/expect-more-jest)
[![Build Status](http://img.shields.io/travis/JamieMason/expect-more/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/expect-more)
[![Maintainability](https://api.codeclimate.com/v1/badges/9f4abbef97ae0d23d97e/maintainability)](https://codeclimate.com/github/JamieMason/expect-more/maintainability)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

expect-more-jest is a huge library of test matchers for a range of common use-cases, to make tests easier to read and
produce relevant and useful messages when they fail. Avoid vague messages such as _"expected false to be true"_ in
favour of useful cues like _"expected 3 to be even number"_, and avoid implementation noise such as
`expect(paws.length % 2 === 0).toEqual(true)` in favour of simply stating that you
`expect(paws.length).toBeEvenNumber()`.

## 🌩 Installation

```
npm install expect-more-jest --save-dev
```

## 🕹 Configuration

The simplest way to integrate is to set the [`setupFilesAfterEnv`][setup-files-after-env] array of Jest's
[jest.config.js][jest-config] to include `require.resolve('expect-more-jest')`.

Note: If your Editor does not recognise that you are using custom matchers, add a `global.d.ts` file at the root of your
project containing:

```ts
import 'expect-more-jest';
```

## 🔬 Matchers

- [toBeAfter](#tobeafter)
- [toBeArrayOfBooleans](#tobearrayofbooleans)
- [toBeArrayOfNumbers](#tobearrayofnumbers)
- [toBeArrayOfObjects](#tobearrayofobjects)
- [toBeArrayOfSize](#tobearrayofsize)
- [toBeArrayOfStrings](#tobearrayofstrings)
- [toBeArray](#tobearray)
- [toBeAsyncFunction](#tobeasyncfunction)
- [toBeBefore](#tobebefore)
- [toBeBoolean](#tobeboolean)
- [toBeCalculable](#tobecalculable)
- [toBeDate](#tobedate)
- [toBeDivisibleBy](#tobedivisibleby)
- [toBeEmptyArray](#tobeemptyarray)
- [toBeEmptyObject](#tobeemptyobject)
- [toBeEmptyString](#tobeemptystring)
- [toBeEvenNumber](#tobeevennumber)
- [toBeFalse](#tobefalse)
- [toBeFunction](#tobefunction)
- [toBeGeneratorFunction](#tobegeneratorfunction)
- [toBeIso8601](#tobeiso8601)
- [toBeJsonString](#tobejsonstring)
- [toBeLongerThan](#tobelongerthan)
- [toBeNonEmptyArray](#tobenonemptyarray)
- [toBeNonEmptyObject](#tobenonemptyobject)
- [toBeNonEmptyString](#tobenonemptystring)
- [toBeNumber](#tobenumber)
- [toBeObject](#tobeobject)
- [toBeOddNumber](#tobeoddnumber)
- [toBeRegExp](#toberegexp)
- [toBeSameLengthAs](#tobesamelengthas)
- [toBeShorterThan](#tobeshorterthan)
- [toBeString](#tobestring)
- [toBeTrue](#tobetrue)
- [toBeValidDate](#tobevaliddate)
- [toBeWhitespace](#tobewhitespace)
- [toBeWholeNumber](#tobewholenumber)
- [toBeWithinRange](#tobewithinrange)
- [toEndWith](#toendwith)
- [toHandleMissingBranches](#tohandlemissingbranches)
- [toHandleMissingLeaves](#tohandlemissingleaves)
- [toHandleMissingNodes](#tohandlemissingnodes)
- [toHandleNullBranches](#tohandlenullbranches)
- [toHandleNullLeaves](#tohandlenullleaves)
- [toHandleNullNodes](#tohandlenullnodes)
- [toHaveArrayOfBooleans](#tohavearrayofbooleans)
- [toHaveArrayOfNumbers](#tohavearrayofnumbers)
- [toHaveArrayOfObjects](#tohavearrayofobjects)
- [toHaveArrayOfSize](#tohavearrayofsize)
- [toHaveArrayOfStrings](#tohavearrayofstrings)
- [toHaveArray](#tohavearray)
- [toHaveBoolean](#tohaveboolean)
- [toHaveCalculable](#tohavecalculable)
- [toHaveDateAfter](#tohavedateafter)
- [toHaveDateBefore](#tohavedatebefore)
- [toHaveDate](#tohavedate)
- [toHaveEmptyArray](#tohaveemptyarray)
- [toHaveEmptyObject](#tohaveemptyobject)
- [toHaveEmptyString](#tohaveemptystring)
- [toHaveEvenNumber](#tohaveevennumber)
- [toHaveFalse](#tohavefalse)
- [toHaveIso8601](#tohaveiso8601)
- [toHaveJsonString](#tohavejsonstring)
- [toHaveLongerThan](#tohavelongerthan)
- [toHaveMethod](#tohavemethod)
- [toHaveNonEmptyArray](#tohavenonemptyarray)
- [toHaveNonEmptyObject](#tohavenonemptyobject)
- [toHaveNonEmptyString](#tohavenonemptystring)
- [toHaveNumberWithinRange](#tohavenumberwithinrange)
- [toHaveNumber](#tohavenumber)
- [toHaveObject](#tohaveobject)
- [toHaveOddNumber](#tohaveoddnumber)
- [toHaveSameLengthAs](#tohavesamelengthas)
- [toHaveShorterThan](#tohaveshorterthan)
- [toHaveString](#tohavestring)
- [toHaveTrue](#tohavetrue)
- [toHaveWhitespace](#tohavewhitespace)
- [toHaveWholeNumber](#tohavewholenumber)
- [toStartWith](#tostartwith)

### toBeAfter

Asserts that a value is a valid instance of `Date` whose value occurs after that of `other` Date.

##### `expect(value: any).toBeAfter(other: Date): R;`

```ts
expect(game.releaseDate).toBeAfter(new Date('1990-10-15'));
```

##### `expect.toBeAfter<T>(other: Date): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    releaseDate: expect.toBeAfter(new Date('1990-10-15'))
  })
);
```

### toBeArrayOfBooleans

Asserts that a value is an `Array` containing only `Boolean` values.

##### `expect(value: any).toBeArrayOfBooleans(): R;`

```ts
expect(player.attempts).toBeArrayOfBooleans();
```

##### `expect.toBeArrayOfBooleans<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ attempts: expect.toBeArrayOfBooleans() }));
```

### toBeArrayOfNumbers

Asserts that a value is an `Array` containing only `Number` values.

##### `expect(value: any).toBeArrayOfNumbers(): R;`

```ts
expect(player.highScores).toBeArrayOfNumbers();
```

##### `expect.toBeArrayOfNumbers<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ highScores: expect.toBeArrayOfNumbers() }));
```

### toBeArrayOfObjects

Asserts that a value is an `Array` containing only `Object` values.

##### `expect(value: any).toBeArrayOfObjects(): R;`

```ts
expect(team.members).toBeArrayOfObjects();
```

##### `expect.toBeArrayOfObjects<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ members: expect.toBeArrayOfObjects() }));
```

### toBeArrayOfSize

Asserts that a value is an `Array` containing `size` number of values.

##### `expect(value: any).toBeArrayOfSize(size: number): R;`

```ts
expect(cat.paws).toBeArrayOfSize(4);
```

##### `expect.toBeArrayOfSize<T>(size: number): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ paws: expect.toBeArrayOfSize(4) }));
```

### toBeArrayOfStrings

Asserts that a value is an `Array` containing only `String` values.

##### `expect(value: any).toBeArrayOfStrings(): R;`

```ts
expect(player.messages).toBeArrayOfStrings();
```

##### `expect.toBeArrayOfStrings<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeArrayOfStrings() }));
```

### toBeArray

Asserts that a value is a valid `Array` containing none or any number of items of any type.

##### `expect(value: any).toBeArray(): R;`

```ts
expect(player.messages).toBeArray();
```

##### `expect.toBeArray<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeArray() }));
```

### toBeAsyncFunction

Asserts that a value is a function using async/await syntax.

##### `expect(value: any).toBeAsyncFunction(): R;`

```ts
expect(async function() {}).toBeAsyncFunction();
```

##### `expect.toBeAsyncFunction<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.toBeAsyncFunction());
```

### toBeBefore

Asserts that a value is a valid instance of `Date` whose value occurs before that of `other` Date.

##### `expect(value: any).toBeBefore(other: Date): R;`

```ts
expect(game.releaseDate).toBeBefore(new Date('1990-10-15'));
```

##### `expect.toBeBefore<T>(other: Date): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    releaseDate: expect.toBeBefore(new Date('1990-10-15'))
  })
);
```

### toBeBoolean

Asserts that a value is a `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.

##### `expect(value: any).toBeBoolean(): R;`

```ts
expect(player.isActive).toBeBoolean();
```

##### `expect.toBeBoolean<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeBoolean() }));
```

### toBeCalculable

Assert subject can be used in Mathemetic calculations despite not being a `Number`, for example `"1" * "2" === 2`
whereas `"wut?" * 2 === NaN`.

##### `expect(value: any).toBeCalculable(): R;`

```ts
expect(ageField.value).toBeCalculable();
```

##### `expect.toBeCalculable<T>(): JestMatchers<T>;`

```ts
expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ ageField: expect.toBeCalculable() }));
```

### toBeDate

Asserts that a value is an instance of `Date`.

##### `expect(value: any).toBeDate(): R;`

```ts
expect(game.releaseDate).toBeDate();
```

##### `expect.toBeDate<T>(): JestMatchers<T>;`

```ts
expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ releaseDate: expect.toBeDate() }));
```

### toBeDivisibleBy

Asserts that a value is a `Number` divisible by `other` number.

##### `expect(value: any).toBeDivisibleBy(ber, divisor: any): R;`

```ts
expect(cat.paws).toBeDivisibleBy(2);
```

##### `expect.toBeDivisibleBy<T>(ber, divisor: any): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ paws: expect.toBeDivisibleBy(2) }));
```

### toBeEmptyArray

Asserts that a value is a valid `Array` containing no items.

##### `expect(value: any).toBeEmptyArray(): R;`

```ts
expect(player.messages).toBeEmptyArray();
```

##### `expect.toBeEmptyArray<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeEmptyArray() }));
```

### toBeEmptyObject

Asserts that a value is a valid `Object` containing no members.

##### `expect(value: any).toBeEmptyObject(): R;`

```ts
expect(openIssues.byId).toBeEmptyObject();
```

##### `expect.toBeEmptyObject<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ byId: expect.toBeEmptyObject() }));
```

### toBeEmptyString

Asserts that a value is a valid `String` containing no characters.

##### `expect(value: any).toBeEmptyString(): R;`

```ts
expect(defaults.nickname).toBeEmptyString();
```

##### `expect.toBeEmptyString<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ nickname: expect.toBeEmptyString() }));
```

### toBeEvenNumber

Asserts that a value is an even `Number`.

##### `expect(value: any).toBeEvenNumber(): R;`

```ts
expect(parallelogram.sides).toBeEvenNumber();
```

##### `expect.toBeEvenNumber<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ sides: expect.toBeEvenNumber() }));
```

### toBeFalse

Asserts that a value is a `false` or `new Boolean(false)`.

##### `expect(value: any).toBeFalse(): R;`

```ts
expect(player.isActive).toBeFalse();
```

##### `expect.toBeFalse<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeFalse() }));
```

### toBeFunction

Asserts that a value is a `Function`.

##### `expect(value: any).toBeFunction(): R;`

```ts
expect(player.shoot).toBeFunction();
```

##### `expect.toBeFunction<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ shoot: expect.toBeFunction() }));
```

### toBeGeneratorFunction

Asserts that a value is a function using yield syntax.

##### `expect(value: any).toBeGeneratorFunction(): R;`

```ts
expect(async function() {}).toBeGeneratorFunction();
```

##### `expect.toBeGeneratorFunction<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.toBeGeneratorFunction());
```

### toBeIso8601

Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and
times.

##### `expect(value: any).toBeIso8601(): R;`

```ts
expect(log.timestamp).toBeIso8601();
```

##### `expect.toBeIso8601<T>(): JestMatchers<T>;`

```ts
expect(log.timestamp).toEqual(expect.toBeIso8601());
expect(log).toEqual(
  expect.objectContaining({
    timestamp: expect.toBeIso8601()
  })
);
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ timestamp: expect.toBeIso8601() }));
```

### toBeJsonString

Asserts that a value is a `String` of valid JSON.

##### `expect(value: any).toBeJsonString(): R;`

```ts
expect(response.body).toBeJsonString();
```

##### `expect.toBeJsonString<T>(): JestMatchers<T>;`

```ts
expect(response.body).toEqual(expect.toBeJsonString());
expect(response).toEqual(
  expect.objectContaining({
    body: expect.toBeJsonString()
  })
);
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ body: expect.toBeJsonString() }));
```

### toBeLongerThan

Asserts that a value is a `String` or `Array` whose length is greater than `other`.

##### `expect(value: any).toBeLongerThan(other: string): R;`

```ts
expect(appendedFile.contents).toBeLongerThan(file.contents);
```

##### `expect.toBeLongerThan<T>(other: string): JestMatchers<T>;`

```ts
expect(appendedFile.contents).toEqual(expect.toBeLongerThan(file.contents));
expect(appendedFile).toEqual(
  expect.objectContaining({
    contents: expect.toBeLongerThan(file.contents)
  })
);
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    contents: expect.toBeLongerThan(file.contents)
  })
);
```

### toBeNonEmptyArray

Asserts that a value is an `Array` containing at least 1 value.

##### `expect(value: any).toBeNonEmptyArray(): R;`

```ts
expect(basket.items).toBeNonEmptyArray();
```

##### `expect.toBeNonEmptyArray<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ items: expect.toBeNonEmptyArray() }));
```

### toBeNonEmptyObject

Asserts that a value is an `Object` containing at least 1 member.

##### `expect(value: any).toBeNonEmptyObject(): R;`

```ts
expect(activeUsers.byId).toBeNonEmptyObject();
```

##### `expect.toBeNonEmptyObject<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ byId: expect.toBeNonEmptyObject() }));
```

### toBeNonEmptyString

Asserts that a value is a valid `String` containing at least one character.

##### `expect(value: any).toBeNonEmptyString(): R;`

```ts
expect(passwordField.value).toBeNonEmptyString();
```

##### `expect.toBeNonEmptyString<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ name: expect.toBeNonEmptyString() }));
```

### toBeNumber

Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.

##### `expect(value: any).toBeNumber(): R;`

```ts
expect(player.age).toBeNumber();
```

##### `expect.toBeNumber<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ age: expect.toBeNumber() }));
```

### toBeObject

Asserts that a value is an `Object`.

##### `expect(value: any).toBeObject(): R;`

```ts
expect(player).toBeObject();
```

##### `expect.toBeObject<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ player: expect.toBeObject() }));
```

### toBeOddNumber

Asserts that a value is an odd `Number`.

##### `expect(value: any).toBeOddNumber(): R;`

```ts
expect(triangle.sides).toBeOddNumber();
```

##### `expect.toBeOddNumber<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ sides: expect.toBeOddNumber() }));
```

### toBeRegExp

Asserts that a value is a regular expression.

##### `expect(value: any).toBeRegExp(): R;`

```ts
expect(/abc/).toBeRegExp();
expect(new RegExp('abc')).toBeRegExp();
```

##### `expect.toBeRegExp<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ pattern: expect.toBeRegExp() }));
```

### toBeSameLengthAs

Asserts that a value is a `String` or `Array` whose length is the same as `other`.

##### `expect(value: any).toBeSameLengthAs(other: string): R;`

```ts
expect(passwordField.value).toBeSameLengthAs(requirements.passwordLength);
```

##### `expect.toBeSameLengthAs<T>(other: string): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    value: expect.toBeSameLengthAs(requirements.passwordLength)
  })
);
```

### toBeShorterThan

Asserts that a value is a `String` or `Array` whose length is less than `other`.

##### `expect(value: any).toBeShorterThan(other: string): R;`

```ts
expect(truncatedFile.contents).toBeShorterThan(file.contents);
```

##### `expect.toBeShorterThan<T>(other: string): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    contents: expect.toBeShorterThan(file.contents)
  })
);
```

### toBeString

Asserts that a value is a `String` or `new String()`.

##### `expect(value: any).toBeString(): R;`

```ts
expect(player.name).toBeString();
```

##### `expect.toBeString<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ name: expect.toBeString() }));
```

### toBeTrue

Asserts that a value is a `true` or `new Boolean(true)`.

##### `expect(value: any).toBeTrue(): R;`

```ts
expect(player.isActive).toBeTrue();
```

##### `expect.toBeTrue<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeTrue() }));
```

### toBeValidDate

Asserts that a value is an instance of `Date` whose _value_ is valid. `Date` is little like `Promise` in that it is a
container for a value. `new Date('wut?')` for example, is a valid `Date` which wraps a value which is _not_ valid.

##### `expect(value: any).toBeValidDate(): R;`

```ts
expect(game.releaseDate).toBeValidDate();
```

##### `expect.toBeValidDate<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ releaseDate: expect.toBeValidDate() }));
```

### toBeWhitespace

Asserts that a value is a `String` containing only whitespace characters.

##### `expect(value: any).toBeWhitespace(): R;`

```ts
expect(htmlMinify.dataRemoved).toBeWhitespace();
```

##### `expect.toBeWhitespace<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ dataRemoved: expect.toBeWhitespace() }));
```

### toBeWholeNumber

Asserts that a value is a `Number` with no positive decimal places.

##### `expect(value: any).toBeWholeNumber(): R;`

```ts
expect(player.livesRemaining).toBeWholeNumber();
```

##### `expect.toBeWholeNumber<T>(): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ livesRemaining: expect.toBeWholeNumber() }));
```

### toBeWithinRange

Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to `ceiling`.

##### `expect(value: any).toBeWithinRange(floor: number, ceiling: number): R;`

```ts
expect(weapon.shotsRemaining).toBeWithinRange(0, weapon.capacity);
```

##### `expect.toBeWithinRange<T>(floor: number, ceiling: number): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    shotsRemaining: expect.toBeWithinRange(0, weapon.capacity)
  })
);
```

### toEndWith

Asserts that a value is a `String` whose trailing characters are `other` string.

##### `expect(value: any).toEndWith(other: string): R;`

```ts
expect(tvChannel.name).toEndWith(' HD');
```

##### `expect.toEndWith<T>(other: string): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ name: expect.toEndWith(' HD') }));
```

### toHandleMissingBranches

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested Object or Array property has been removed. It is intended to assert that a function is resilient against
incomplete or invalid data received from external sources.

See /packages/expect-more-jest/test/gen/missing-branches.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleMissingBranches(): R;`

```ts
import { get } from 'lodash';
// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};
// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = (data) => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleMissingBranches(shape);
});
// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({
    deeply: {
      dippy: {
        bout: {
          the: {
            way: {
              you: [walk]
            }
          }
        }
      }
    }
  }) => walk;
  expect(unsafe).toHandleMissingBranches(shape);
});
```

##### `expect.toHandleMissingBranches<T>(): JestMatchers<T>;`

```ts
```

### toHandleMissingLeaves

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested leaf value has been removed. It is intended to assert that a function is resilient against incomplete or invalid
data received from external sources.

See /packages/expect-more-jest/test/gen/missing-leaves.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleMissingLeaves(): R;`

```ts
expect(selectVenueNames).toHandleMissingLeaves(upcomingEvents);
```

##### `expect.toHandleMissingLeaves<T>(): JestMatchers<T>;`

```ts
```

### toHandleMissingNodes

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested branch or leaf has been removed. It is intended to assert that a function is resilient against incomplete or
invalid data received from external sources.

See /packages/expect-more-jest/test/gen/missing-nodes.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleMissingNodes(): R;`

```ts
import { get } from 'lodash';
// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};
// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = (data) => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleMissingNodes(shape);
});
// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({
    deeply: {
      dippy: {
        bout: {
          the: {
            way: {
              you: [walk]
            }
          }
        }
      }
    }
  }) => walk;
  expect(unsafe).toHandleMissingNodes(shape);
});
```

##### `expect.toHandleMissingNodes<T>(): JestMatchers<T>;`

```ts
```

### toHandleNullBranches

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested Object or Array property has been set to null. It is intended to assert that a function is resilient against
incomplete or invalid data received from external sources.

See /packages/expect-more-jest/test/gen/null-branches.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleNullBranches(): R;`

```ts
import { get } from 'lodash';
// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};
// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = (data) => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleNullBranches(shape);
});
// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({
    deeply: {
      dippy: {
        bout: {
          the: {
            way: {
              you: [walk]
            }
          }
        }
      }
    }
  }) => walk;
  expect(unsafe).toHandleNullBranches(shape);
});
```

##### `expect.toHandleNullBranches<T>(): JestMatchers<T>;`

```ts
```

### toHandleNullLeaves

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested leaf value has been set to null. It is intended to assert that a function is resilient against incomplete or
invalid data received from external sources.

See the /packages/expect-more-jest/test/gen/null-leaves.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleNullLeaves(): R;`

```ts
expect(selectVenueNames).toHandleNullLeaves(upcomingEvents);
```

##### `expect.toHandleNullLeaves<T>(): JestMatchers<T>;`

```ts
```

### toHandleNullNodes

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested branch or leaf value has been set to null. It is intended to assert that a function is resilient against
incomplete or invalid data received from external sources.

See /packages/expect-more-jest/test/gen/null-nodes.spec.ts for detail on how values are deconstructed.

##### `expect(value: any).toHandleNullNodes(): R;`

```ts
import { get } from 'lodash';
// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};
// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = (data) => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleNullNodes(shape);
});
// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({
    deeply: {
      dippy: {
        bout: {
          the: {
            way: {
              you: [walk]
            }
          }
        }
      }
    }
  }) => walk;
  expect(unsafe).toHandleNullNodes(shape);
});
```

##### `expect.toHandleNullNodes<T>(): JestMatchers<T>;`

```ts
```

### toHaveArrayOfBooleans

Asserts value has an own or nested named property which is an Array of booleans.

##### `expect(value: any).toHaveArrayOfBooleans(propPath: string): R;`

```ts
expect({ foo: { bar: [true, new Boolean()] } }).toHaveArrayOfBooleans('foo.bar');
```

##### `expect.toHaveArrayOfBooleans<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArrayOfBooleans('messages'));
```

### toHaveArrayOfNumbers

Asserts value has an own or nested named property which is an Array of numbers.

##### `expect(value: any).toHaveArrayOfNumbers(propPath: string): R;`

```ts
expect({ foo: { bar: [1, new Number(8)] } }).toHaveArrayOfNumbers('foo.bar');
```

##### `expect.toHaveArrayOfNumbers<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArrayOfNumbers('scores'));
```

### toHaveArrayOfObjects

Asserts value has an own or nested named property which is an Array of objects.

##### `expect(value: any).toHaveArrayOfObjects(propPath: string): R;`

```ts
expect({ foo: { bar: [{}, new Object()] } }).toHaveArrayOfObjects('foo.bar');
```

##### `expect.toHaveArrayOfObjects<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArrayOfObjects('friends'));
```

### toHaveArrayOfSize

Asserts value has an own or nested named property which is an Array with the given number of members.

##### `expect(value: any).toHaveArrayOfSize(propPath: string, size: number): R;`

```ts
expect({ foo: { bar: [true, 12] } }).toHaveArrayOfSize('foo.bar', 2);
```

##### `expect.toHaveArrayOfSize<T>(propPath: string, size: number): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArrayOfSize('friends', 0));
```

### toHaveArrayOfStrings

Asserts value has an own or nested named property which is an Array of strings.

##### `expect(value: any).toHaveArrayOfStrings(propPath: string): R;`

```ts
expect({ foo: { bar: ['hello', new String()] } }).toHaveArrayOfStrings('foo.bar');
```

##### `expect.toHaveArrayOfStrings<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArrayOfStrings('messages'));
```

### toHaveArray

Asserts value has an own or nested named property which is an Array.

##### `expect(value: any).toHaveArray(propPath: string): R;`

```ts
expect({ foo: { bar: [] } }).toHaveArray('foo.bar');
```

##### `expect.toHaveArray<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveArray('messages'));
```

### toHaveBoolean

Asserts that value has an own or nested named property which is a boolean or `new Boolean`.

##### `expect(value: any).toHaveBoolean(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveBoolean('foo.bar');
```

##### `expect.toHaveBoolean<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveBoolean('foo.bar'));
```

### toHaveCalculable

Asserts that value has an own or nested named property which is calculable.

##### `expect(value: any).toHaveCalculable(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveCalculable('foo.bar');
```

##### `expect.toHaveCalculable<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveCalculable('foo.bar'));
```

### toHaveDateAfter

Asserts that value has an own or nested named property which is a date after the given date.

##### `expect(value: any).toHaveDateAfter(propPath: string, otherDate: Date): R;`

```ts
expect({ foo: { bar: X } }).toHaveDateAfter('foo.bar');
```

##### `expect.toHaveDateAfter<T>(propPath: string, otherDate: Date): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveDateAfter('foo.bar'));
```

### toHaveDateBefore

Asserts that value has an own or nested named property which is a date before the given date.

##### `expect(value: any).toHaveDateBefore(propPath: string, otherDate: Date): R;`

```ts
expect({ foo: { bar: X } }).toHaveDateBefore('foo.bar');
```

##### `expect.toHaveDateBefore<T>(propPath: string, otherDate: Date): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveDateBefore('foo.bar'));
```

### toHaveDate

Asserts that value has an own or nested named property which is a date.

##### `expect(value: any).toHaveDate(propPath: string): R;`

```ts
expect({ foo: { bar: new Date() } }).toHaveDate('foo.bar');
```

##### `expect.toHaveDate<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveDate('foo.bar'));
```

### toHaveEmptyArray

Asserts that value has an own or nested named property which is an empty array.

##### `expect(value: any).toHaveEmptyArray(propPath: string): R;`

```ts
expect({ foo: { bar: [] } }).toHaveEmptyArray('foo.bar');
```

##### `expect.toHaveEmptyArray<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveEmptyArray('foo.bar'));
```

### toHaveEmptyObject

Asserts that value has an own or nested named property which is an empty object.

##### `expect(value: any).toHaveEmptyObject(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveEmptyObject('foo.bar');
```

##### `expect.toHaveEmptyObject<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveEmptyObject('foo.bar'));
```

### toHaveEmptyString

Asserts that value has an own or nested named property which is an empty string.

##### `expect(value: any).toHaveEmptyString(propPath: string): R;`

```ts
expect({ foo: { bar: '' } }).toHaveEmptyString('foo.bar');
```

##### `expect.toHaveEmptyString<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveEmptyString('foo.bar'));
```

### toHaveEvenNumber

Asserts that value has an own or nested named property which is an even number or `new Number`.

##### `expect(value: any).toHaveEvenNumber(propPath: string): R;`

```ts
expect({ foo: { bar: 4 } }).toHaveEvenNumber('foo.bar');
```

##### `expect.toHaveEvenNumber<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveEvenNumber('foo.bar'));
```

### toHaveFalse

Asserts that value has an own or nested named property which is false or `new False()`.

##### `expect(value: any).toHaveFalse(propPath: string): R;`

```ts
expect({ foo: { bar: false } }).toHaveFalse('foo.bar');
```

##### `expect.toHaveFalse<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveFalse('foo.bar'));
```

### toHaveIso8601

Asserts that value has an own or nested named property which is an ISO 8601 date string.

##### `expect(value: any).toHaveIso8601(propPath: string): R;`

```ts
expect({ foo: { bar: '2018-08-27T14:22:37' } }).toHaveIso8601('foo.bar');
```

##### `expect.toHaveIso8601<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveIso8601('foo.bar'));
```

### toHaveJsonString

Asserts that value has an own or nested named property which is a JSON string.

##### `expect(value: any).toHaveJsonString(propPath: string): R;`

```ts
expect({ foo: { bar: '{}' } }).toHaveJsonString('foo.bar');
```

##### `expect.toHaveJsonString<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveJsonString('foo.bar'));
```

### toHaveLongerThan

Asserts that value has an own or nested named property which is a string or array longer than the given string or array.

##### `expect(value: any).toHaveLongerThan(propPath: string, other: string | any[]): R;`

```ts
expect({ foo: { bar: X } }).toHaveLongerThan('foo.bar');
```

##### `expect.toHaveLongerThan<T>(propPath: string, other: string | any[]): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveLongerThan('foo.bar'));
```

### toHaveMethod

Asserts that value has an own or nested named property which is a method (function).

##### `expect(value: any).toHaveMethod(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveMethod('foo.bar');
```

##### `expect.toHaveMethod<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveMethod('foo.bar'));
```

### toHaveNonEmptyArray

Asserts that value has an own or nested named property which is an array with at least one member.

##### `expect(value: any).toHaveNonEmptyArray(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveNonEmptyArray('foo.bar');
```

##### `expect.toHaveNonEmptyArray<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveNonEmptyArray('foo.bar'));
```

### toHaveNonEmptyObject

Asserts that value has an own or nested named property which is an object with at least one member.

##### `expect(value: any).toHaveNonEmptyObject(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveNonEmptyObject('foo.bar');
```

##### `expect.toHaveNonEmptyObject<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveNonEmptyObject('foo.bar'));
```

### toHaveNonEmptyString

Asserts that value has an own or nested named property which is a string with at least one character.

##### `expect(value: any).toHaveNonEmptyString(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveNonEmptyString('foo.bar');
```

##### `expect.toHaveNonEmptyString<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveNonEmptyString('foo.bar'));
```

### toHaveNumberWithinRange

Asserts that value has an own or nested named property which is a number greater than or equal to floor and less than or
equal to ceiling.

##### `expect(value: any).toHaveNumberWithinRange(propPath: string, floor: number, ceiling: number): R;`

```ts
expect({ foo: { bar: X } }).toHaveNumberWithinRange('foo.bar');
```

##### `expect.toHaveNumberWithinRange<T>(propPath: string, floor: number, ceiling: number): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveNumberWithinRange('foo.bar'));
```

### toHaveNumber

Asserts that value has an own or nested named property which is a number or `new Number`.

##### `expect(value: any).toHaveNumber(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveNumber('foo.bar');
```

##### `expect.toHaveNumber<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveNumber('foo.bar'));
```

### toHaveObject

Asserts that value has an own or nested named property which is an object.

##### `expect(value: any).toHaveObject(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveObject('foo.bar');
```

##### `expect.toHaveObject<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveObject('foo.bar'));
```

### toHaveOddNumber

Asserts that value has an own or nested named property which is an odd number.

##### `expect(value: any).toHaveOddNumber(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveOddNumber('foo.bar');
```

##### `expect.toHaveOddNumber<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveOddNumber('foo.bar'));
```

### toHaveSameLengthAs

Asserts that value has an own or nested named property which is a string same or array length as the given string or
array.

##### `expect(value: any).toHaveSameLengthAs(propPath: string, other: string | any[]): R;`

```ts
expect({ foo: { bar: X } }).toHaveSameLengthAs('foo.bar');
```

##### `expect.toHaveSameLengthAs<T>(propPath: string, other: string | any[]): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveSameLengthAs('foo.bar'));
```

### toHaveShorterThan

Asserts that value has an own or nested named property which is a string or array shorter than the given string or
array.

##### `expect(value: any).toHaveShorterThan(propPath: string, other: string | any[]): R;`

```ts
expect({ foo: { bar: X } }).toHaveShorterThan('foo.bar');
```

##### `expect.toHaveShorterThan<T>(propPath: string, other: string | any[]): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveShorterThan('foo.bar'));
```

### toHaveString

Asserts that value has an own or nested named property which is a string.

##### `expect(value: any).toHaveString(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveString('foo.bar');
```

##### `expect.toHaveString<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveString('foo.bar'));
```

### toHaveTrue

Asserts that value has an own or nested named property which is true.

##### `expect(value: any).toHaveTrue(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveTrue('foo.bar');
```

##### `expect.toHaveTrue<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveTrue('foo.bar'));
```

### toHaveWhitespace

Asserts that value has an own or nested named property which is a string containing only whitespace characters.

##### `expect(value: any).toHaveWhitespace(propPath: string): R;`

```ts
expect({ foo: { bar: ' ' } }).toHaveWhitespace('foo.bar');
```

##### `expect.toHaveWhitespace<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveWhitespace('foo.bar'));
```

### toHaveWholeNumber

Asserts that value has an own or nested named property which is a number without any decimal places.

##### `expect(value: any).toHaveWholeNumber(propPath: string): R;`

```ts
expect({ foo: { bar: X } }).toHaveWholeNumber('foo.bar');
```

##### `expect.toHaveWholeNumber<T>(propPath: string): JestMatchers<T>;`

```ts
expect(received).toHaveBeenCalledWith(expect.toHaveWholeNumber('foo.bar'));
```

### toStartWith

Asserts that a value is a `String` whose leading characters are `other` string.

##### `expect(value: any).toStartWith(other: string): R;`

```ts
expect(location.postcode).toStartWith('LS1');
```

##### `expect.toStartWith<T>(other: string): JestMatchers<T>;`

```ts
expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ postcode: expect.toStartWith('LS1') }));
```

## 👀 Other Projects

If you find my Open Source projects useful, please share them ❤️

- [**eslint-formatter-git-log**](https://github.com/JamieMason/eslint-formatter-git-log)<br>ESLint Formatter featuring
  Git Author, Date, and Hash
- [**eslint-plugin-move-files**](https://github.com/JamieMason/eslint-plugin-move-files)<br>Move and rename files while
  keeping imports up to date
- [**eslint-plugin-prefer-arrow-functions**](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions)<br>Convert
  functions to arrow functions
- [**ImageOptim-CLI**](https://github.com/JamieMason/ImageOptim-CLI)<br>Automates ImageOptim, ImageAlpha, and JPEGmini
  for Mac to make batch optimisation of images part of your automated build process.
- [**karma-benchmark**](https://github.com/JamieMason/karma-benchmark)<br>Run Benchmark.js over multiple Browsers, with
  CI compatible output
- [**self-help**](https://github.com/JamieMason/self-help#readme)<br>Interactive Q&A Guides for Web and the Command Line
- [**syncpack**](https://github.com/JamieMason/syncpack#readme)<br>Manage multiple package.json files, such as in Lerna
  Monorepos and Yarn Workspaces

## 🤓 Author

<img src="https://www.gravatar.com/avatar/acdf106ce071806278438d8c354adec8?s=100" align="left">

I'm [Jamie Mason] from [Leeds] in England, I began Web Design and Development in 1999 and have been Contracting and
offering Consultancy as Fold Left Ltd since 2012. Who I've worked with includes [Sky Sports], [Sky Bet], [Sky Poker],
The [Premier League], [William Hill], [Shell], [Betfair], and Football Clubs including [Leeds United], [Spurs], [West
Ham], [Arsenal], and more.

<div align="center">

[![Follow JamieMason on GitHub][github badge]][github] [![Follow fold_left on Twitter][twitter badge]][twitter]

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
