import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: '01-01-2018',
  name: 'toHaveIso8601',
  passReceived: '2018-01-01',
});
