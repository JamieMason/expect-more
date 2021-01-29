# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.2.2](https://github.com/JamieMason/expect-more/compare/expect-more-jest@5.2.1...expect-more-jest@5.2.2) (2021-01-29)


### Bug Fixes

* **npm:** update dependencies ([2b18adb](https://github.com/JamieMason/expect-more/commit/2b18adba015b749cf7947bf98cf2a964ecbe15bc))





## [5.2.1](https://github.com/JamieMason/expect-more/compare/expect-more-jest@5.2.0...expect-more-jest@5.2.1) (2020-12-06)


### Bug Fixes

* **expect:** replace object with Record<any, any> ([19e282b](https://github.com/JamieMason/expect-more/commit/19e282b83ab3485081e8c9aed3db210bd09b7595))





# [5.2.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@5.1.0...expect-more-jest@5.2.0) (2020-05-30)


### Features

* **jest:** add expect(value).toBeNullableOf(<asymmetricMatcher>) ([e4ce690](https://github.com/JamieMason/expect-more/commit/e4ce690a2c510e8b613e8e3b0ca624d12320496c))
* **jest:** add expect(value).toBeOptionalOf(<asymmetricMatcher>) ([b8b826f](https://github.com/JamieMason/expect-more/commit/b8b826f26a5bbbd79915d9e411861a291e84c13e))
* **jest:** add expect(value).toBeVisibleString() ([1b594d4](https://github.com/JamieMason/expect-more/commit/1b594d49ca8ad43eeb03b31302e794fdf4cf26d0))





# [5.1.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@5.0.0...expect-more-jest@5.1.0) (2020-05-17)


### Features

* **jest:** add expect(array).toBeArrayOf(<asymmetricMatcher>) ([465aa6c](https://github.com/JamieMason/expect-more/commit/465aa6c632cfdb685b407e13c11fe2a4c91923e4))





# [5.0.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@4.1.0...expect-more-jest@5.0.0) (2020-05-17)


### Features

* **jest:** deprecate toHave* Matchers ([22f95c5](https://github.com/JamieMason/expect-more/commit/22f95c5f9f50095aabfb13706a36a9a555120cbc))


### BREAKING CHANGES

* **jest:** Jest's `toHaveProperty` Matcher and expect-more-jest's Asymmetric
Matchers (eg. `expect.toBeString()` instead of `expect().toBeString()`)
can be composed to achieve the same result as the `toHave*` Matchers.

The diff below demonstrates the equivalent assertions:

```diff
- expect(val).toHaveArray('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeArray())
- expect(val).toHaveArrayOfBooleans('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeArrayOfBooleans())
- expect(val).toHaveArrayOfNumbers('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeArrayOfNumbers())
- expect(val).toHaveArrayOfObjects('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeArrayOfObjects())
- expect(val).toHaveArrayOfSize('a.b', 5)
+ expect(val).toHaveProperty('a.b', expect.toBeArrayOfSize(5))
- expect(val).toHaveArrayOfStrings('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeArrayOfStrings())
- expect(val).toHaveAsyncFunction('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeAsyncFunction())
- expect(val).toHaveBoolean('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeBoolean())
- expect(val).toHaveCalculable('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeCalculable())
- expect(val).toHaveDateAfter('a.b', new Date())
+ expect(val).toHaveProperty('a.b', expect.toBeDateAfter(new Date()))
- expect(val).toHaveDateBefore('a.b', new Date())
+ expect(val).toHaveProperty('a.b', expect.toBeDateBefore(new Date()))
- expect(val).toHaveDate('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeDate())
- expect(val).toHaveDecimalNumber('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeDecimalNumber())
- expect(val).toHaveDivisibleBy('a.b', 2)
+ expect(val).toHaveProperty('a.b', expect.toBeDivisibleBy(2))
- expect(val).toHaveEmptyArray('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeEmptyArray())
- expect(val).toHaveEmptyObject('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeEmptyObject())
- expect(val).toHaveEmptyString('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeEmptyString())
- expect(val).toHaveEndingWith('a.b', 'tring')
+ expect(val).toHaveProperty('a.b', expect.toBeEndingWith('tring'))
- expect(val).toHaveEvenNumber('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeEvenNumber())
- expect(val).toHaveFalse('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeFalse())
- expect(val).toHaveGeneratorFunction('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeGeneratorFunction())
- expect(val).toHaveGreaterThanOrEqualTo('a.b', 3)
+ expect(val).toHaveProperty('a.b', expect.toBeGreaterThanOrEqualTo(3))
- expect(val).toHaveIso8601('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeIso8601())
- expect(val).toHaveJsonString('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeJsonString())
- expect(val).toHaveLessThanOrEqualTo('a.b', 5)
+ expect(val).toHaveProperty('a.b', expect.toBeLessThanOrEqualTo(, 5))
- expect(val).toHaveLongerThan('a.b', 'abc')
+ expect(val).toHaveProperty('a.b', expect.toBeLongerThan('abc'))
- expect(val).toHaveMethod('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeFunction())
- expect(val).toHaveNonEmptyArray('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeNonEmptyArray())
- expect(val).toHaveNonEmptyObject('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeNonEmptyObject())
- expect(val).toHaveNonEmptyString('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeNonEmptyString())
- expect(val).toHaveNull('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeNull())
- expect(val).toHaveNumber('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeNumber())
- expect(val).toHaveNumberNear('a.b', 2)
+ expect(val).toHaveProperty('a.b', expect.toBeNumberNear(2))
- expect(val).toHaveNumberWithinRange('a.b', 1, 5)
+ expect(val).toHaveProperty('a.b', expect.toBeNumberWithinRange(1, 5))
- expect(val).toHaveObject('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeObject())
- expect(val).toHaveOddNumber('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeOddNumber())
- expect(val).toHaveRegExp('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeRegExp())
- expect(val).toHaveSameLengthAs('a.b', 'other')
+ expect(val).toHaveProperty('a.b', expect.toBeSameLengthAs('other'))
- expect(val).toHaveShorterThan('a.b', 'abc')
+ expect(val).toHaveProperty('a.b', expect.toBeShorterThan('abc'))
- expect(val).toHaveStartingWith('a.b', 'ab')
+ expect(val).toHaveProperty('a.b', expect.toBeStartingWith('ab'))
- expect(val).toHaveString('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeString())
- expect(val).toHaveTrue('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeTrue())
- expect(val).toHaveUndefined('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeUndefined())
- expect(val).toHaveValidDate('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeValidDate())
- expect(val).toHaveWalkable('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeWalkable())
- expect(val).toHaveWhitespace('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeWhitespace())
- expect(val).toHaveWholeNumber('a.b')
+ expect(val).toHaveProperty('a.b', expect.toBeWholeNumber())





# [4.1.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@4.0.2...expect-more-jest@4.1.0) (2020-05-16)


### Features

* **jasmine:** add expect-more-jasmine ([570c411](https://github.com/JamieMason/expect-more/commit/570c4110db1271858e431d22e05e404be3bc6219))





## [4.0.2](https://github.com/JamieMason/expect-more/compare/expect-more-jest@4.0.1...expect-more-jest@4.0.2) (2020-05-02)


### Bug Fixes

* **jest:** handle objects without prototypes ([3fc1ea2](https://github.com/JamieMason/expect-more/commit/3fc1ea2030df49d9a6bc8042f41bcaffc220aaa3)), closes [#35](https://github.com/JamieMason/expect-more/issues/35)
* **npm:** update dependencies ([6eca1c1](https://github.com/JamieMason/expect-more/commit/6eca1c13ae6725658bf733ff932b5900e8ace334))





## [4.0.1](https://github.com/JamieMason/expect-more/compare/expect-more-jest@4.0.0...expect-more-jest@4.0.1) (2020-04-28)


### Bug Fixes

* **npm:** update dependencies ([e1b6808](https://github.com/JamieMason/expect-more/commit/e1b68088c06f9df88a7f100922c7b2449c5ce9c2))





# [4.0.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@3.0.0...expect-more-jest@4.0.0) (2020-01-19)


### Features

* **jest:** deprecate toHandle* matchers in favour of generators ([20137c7](https://github.com/JamieMason/expect-more/commit/20137c7de32ee3d93218e9dc1e057f946d05875b))
* **jest:** generate expect-more-jest from expect-more ([3571d73](https://github.com/JamieMason/expect-more/commit/3571d733d87955351aa38140e6cd4bef1c7a8dc2))


### BREAKING CHANGES

* **jest:** This new approach is now available which is faster and supports more
use-cases, including async. The deprecated test matchers could only
assert whether your function under test throws when parts of its input
data are missing or null.

You can still test for just those scenarios, or test in more detail for
what kind of Error your function throws, or otherwise (as below) for
what the function should return under those conditions.

```js
import { withMissingNodes } from 'expect-more/gen';

it('should return null if any part of the API contract is broken', () => {
  for (let brokenContract of withMissingNodes(contract)) {
    expect(fn(brokenContract)).toBeNull();
  }
});
```





# [3.0.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.4.2...expect-more-jest@3.0.0) (2019-11-03)


### Bug Fixes

* **npm:** update dependencies ([1ecf9a0](https://github.com/JamieMason/expect-more/commit/1ecf9a04d914725c4aea904d809b2e0ca26c93ee)), closes [DefinitelyTyped/DefinitelyTyped#39243](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/39243)


### Features

* **jest:** add toBeAsyncFunction matcher ([1f49f77](https://github.com/JamieMason/expect-more/commit/1f49f771e8c0543b1e57e8435e9d69859574d913)), closes [#21](https://github.com/JamieMason/expect-more/issues/21)
* **jest:** add toBeGeneratorFunction matcher ([4fde99e](https://github.com/JamieMason/expect-more/commit/4fde99e485a35403dd5c139c5b2a0b932a1833dd)), closes [#21](https://github.com/JamieMason/expect-more/issues/21)


### BREAKING CHANGES

* **npm:** https://github.com/DefinitelyTyped/DefinitelyTyped/pull/39243 introduced
a breaking change which affects any TypeScript project that uses
`expect.extend`. This may have a knock-on effect on projects using
expect-more-jest.





## [2.4.2](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.4.1...expect-more-jest@2.4.2) (2019-06-17)


### Bug Fixes

* **npm:** update dependencies ([69c2ada](https://github.com/JamieMason/expect-more/commit/69c2ada)), closes [#25](https://github.com/JamieMason/expect-more/issues/25) [#26](https://github.com/JamieMason/expect-more/issues/26) [#27](https://github.com/JamieMason/expect-more/issues/27) [#28](https://github.com/JamieMason/expect-more/issues/28) [#29](https://github.com/JamieMason/expect-more/issues/29) [#30](https://github.com/JamieMason/expect-more/issues/30)





## [2.4.1](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.4.0...expect-more-jest@2.4.1) (2019-02-02)


### Bug Fixes

* **npm:** update dependencies ([44fe454](https://github.com/JamieMason/expect-more/commit/44fe454))
* **typings:** correct typings for toBeWithinRange ([99038a8](https://github.com/JamieMason/expect-more/commit/99038a8)), closes [#22](https://github.com/JamieMason/expect-more/issues/22) [#23](https://github.com/JamieMason/expect-more/issues/23)





# [2.4.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.3.0...expect-more-jest@2.4.0) (2019-01-12)


### Features

* **jest:** add CLI to generate new matchers ([b61c08e](https://github.com/JamieMason/expect-more/commit/b61c08e))
* **jest:** add shorthand property matchers ([631f5f4](https://github.com/JamieMason/expect-more/commit/631f5f4))
* **jest:** add toBeWithinRange matcher ([b7163b1](https://github.com/JamieMason/expect-more/commit/b7163b1))





<a name="2.3.0"></a>
# [2.3.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.2.0...expect-more-jest@2.3.0) (2018-08-26)


### Features

* **jest:** improve asymmetric matcher intellisense documentation ([a818b20](https://github.com/JamieMason/expect-more/commit/a818b20))





<a name="2.2.0"></a>

# [2.2.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.1.0...expect-more-jest@2.2.0) (2018-08-26)

### Features

- **jest:** display matcher documentation in intellisense
  ([6bae199](https://github.com/JamieMason/expect-more/commit/6bae199))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/JamieMason/expect-more/compare/expect-more-jest@2.0.0...expect-more-jest@2.1.0) (2018-08-25)

### Features

- **jest:** add types for asymmetric matchers ([13fe78d](https://github.com/JamieMason/expect-more/commit/13fe78d))

<a name="2.0.0"></a>

# 2.0.0 (2018-06-17)

### Bug Fixes

- **jest:** export correct typings ([0c0bdf8](https://github.com/JamieMason/expect-more/commit/0c0bdf8))
- **jest:** fix expect().toHandle\* regression ([12e7cf6](https://github.com/JamieMason/expect-more/commit/12e7cf6))

### Features

- **core:** update length comparing methods to accept arrays
  ([3878699](https://github.com/JamieMason/expect-more/commit/3878699))
- **jest:** add asymmetric matchers ([71238d5](https://github.com/JamieMason/expect-more/commit/71238d5))
- **jest:** add toHandle[Missing|Null][branches|leaves|nodes]
  ([41302c8](https://github.com/JamieMason/expect-more/commit/41302c8)), closes
  [#5](https://github.com/JamieMason/expect-more/issues/5)
- **jest:** add toSurvive matcher ([5763fab](https://github.com/JamieMason/expect-more/commit/5763fab))
- **jest:** expose library as jest matchers ([db74006](https://github.com/JamieMason/expect-more/commit/db74006))
- **jest:** generators of incomplete forms of a given shape
  ([622fe52](https://github.com/JamieMason/expect-more/commit/622fe52))
- **jest:** improve fail message for expect().toSurvive()
  ([2f4052b](https://github.com/JamieMason/expect-more/commit/2f4052b))
- **jest:** remove expect.walkable and expect().toBeWalkable
  ([6e2e2c4](https://github.com/JamieMason/expect-more/commit/6e2e2c4))
- **jest:** use jest v23's asymmetric matchers ([b20d6b2](https://github.com/JamieMason/expect-more/commit/b20d6b2))

### BREAKING CHANGES

- **jest:** Jest did not previously support custom asymmetric matchers, so `expect` was decorated from the outside to
  provide this behaviour. Since Jest v23 it is now supported officially.

As such, the following asymmetric matchers have been renamed:

expect.after → expect.toBeAfter expect.arrayOfBooleans → expect.toBeArrayOfBooleans expect.arrayOfNumbers →
expect.toBeArrayOfNumbers expect.arrayOfObjects → expect.toBeArrayOfObjects expect.arrayOfSize → expect.toBeArrayOfSize
expect.arrayOfStrings → expect.toBeArrayOfStrings expect.before → expect.toBeBefore expect.calculable →
expect.toBeCalculable expect.divisibleBy → expect.toBeDivisibleBy expect.endingWith → expect.toBeEndingWith
expect.evenNumber → expect.toBeEvenNumber expect.iso8601 → expect.toBeIso8601 expect.jsonString → expect.toBeJsonString
expect.longerThan → expect.toBeLongerThan expect.near → expect.toBeNear expect.nonEmptyArray → expect.toBeNonEmptyArray
expect.nonEmptyObject → expect.toBeNonEmptyObject expect.nonEmptyString → expect.toBeNonEmptyString expect.oddNumber →
expect.toBeOddNumber expect.sameLengthAs → expect.toBeSameLengthAs expect.shorterThan → expect.toBeShorterThan
expect.startingWith → expect.toBeStartingWith expect.validDate → expect.toBeValidDate expect.whitespace →
expect.toBeWhitespace expect.wholeNumber → expect.toBeWholeNumber expect.withinRange → expect.toBeWithinRange

- **jest:** These matchers replace expect().toSurvive()
