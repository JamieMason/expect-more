export const createResult = ({
  pass,
  message,
  notMessage,
}: {
  pass: boolean;
  message: () => string;
  notMessage: () => string;
}): jest.CustomMatcherResult => ({
  message: () => (pass ? notMessage() : message()).trim(),
  pass,
});
