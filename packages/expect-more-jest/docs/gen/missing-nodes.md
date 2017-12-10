# gen.missingNodes(value: array | object)

When given a JSON-serialisable data structure, generates multiple copies where a single nested branch or leaf value is
missing. It is intended to be used with the [expect().toSurvive][to-survive] matcher to assert that a function is
resilient against incomplete or invalid data received from external sources.

## Example

See the [spec for gen.missingNodes][missing-nodes] for detail on how values are deconstructed and the [spec for
expect().toSurvive][to-survive-spec] for more context.

```js
expect(selectVenueNames).toSurvive(gen.missingNodes(upcomingEvents));
```

[missing-nodes]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/missing-nodes.spec.ts
[to-survive-spec]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/matchers/to-survive.spec.ts
[to-survive]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/docs/matchers/to-survive.md
