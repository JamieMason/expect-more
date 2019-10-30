import { isDate } from './is-date';

export const isValidDate = (value) => isDate(value) && !isNaN(value.getTime());
