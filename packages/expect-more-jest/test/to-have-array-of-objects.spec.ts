import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: [null],
  name: 'toHaveArrayOfObjects',
  passReceived: [{}]
});
