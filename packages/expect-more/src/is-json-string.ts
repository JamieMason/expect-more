export const isJsonString = (value: any) => {
  try {
    return JSON.parse(value) !== null;
  } catch (err) {
    return false;
  }
};
