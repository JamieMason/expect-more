import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: null,
  name: 'toHaveOddNumber',
  passReceived: 3,
});
