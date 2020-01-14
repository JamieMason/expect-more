import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: 1,
  failReceived: [1, 2],
  name: 'toHaveArrayOfSize',
  passOther: 1,
  passReceived: [null],
});
