export const createResult = ({
  pass,
  message,
  notMessage,
}: {
  pass: boolean;
  message: () => string;
  notMessage: () => string;
}) => ({
  message: () => (pass ? notMessage() : message()).trim(),
  pass,
});
