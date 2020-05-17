import 'expect-more-jest';

describe('when a test subject contains an object with no prototype', () => {
  describe('when the test fails (array has 1 item not 8)', () => {
    it('should construct matcher test failure messages correctly', () => {
      try {
        expect.assertions(3);
        expect([Object.create(null)]).toBeArrayOfSize(8);
      } catch (err) {
        expect(err.message).toContain('to be an array containing exactly');
        expect(err.message).not.toContain('Cannot convert object to primitive value');
      }
    });
  });
});
