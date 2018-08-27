import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: [null],
  name: 'toHaveArrayOfNumbers',
  passReceived: [1, 4, 5]
});
