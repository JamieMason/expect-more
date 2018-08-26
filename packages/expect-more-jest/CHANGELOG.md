# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
