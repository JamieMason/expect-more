# gen.missingBranches(value: array | object)

When given a JSON-serialisable data structure, generates multiple copies where a single nested Object or Array property
is missing. It is intended to be used with the [expect().toSurvive][to-survive] matcher to assert that a function is
resilient against incomplete or invalid data received from external sources.

## Example

See the [spec for gen.missingBranches][missing-branches] for detail on how values are deconstructed and the [spec for
expect().toSurvive][to-survive-spec] for more context.

```js
expect(selectVenueNames).toSurvive(gen.missingBranches(upcomingEvents));
```

[missing-branches]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/missing-branches.spec.ts
[to-survive-spec]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/matchers/to-survive.spec.ts
[to-survive]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-survive.md
