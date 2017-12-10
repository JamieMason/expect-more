# gen.nullBranches(value: array | object)

When given a JSON-serialisable data structure, generates multiple copies where a single nested Object or Array property
is null. It is intended to be used with the [expect().toSurvive][to-survive] matcher to assert that a function is
resilient against incomplete or invalid data received from external sources.

## Example

See the [spec for gen.nullBranches][null-branches] for detail on how values are deconstructed and the [spec for
expect().toSurvive][to-survive-spec] for more context.

```js
expect(selectVenueNames).toSurvive(gen.nullBranches(upcomingEvents));
```

[null-branches]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/null-branches.spec.ts
[to-survive-spec]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/matchers/to-survive.spec.ts
[to-survive]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-survive.md
