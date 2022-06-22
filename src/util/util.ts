import moment from "moment";

/**
 * format Date to given date time format string
 * customize format using the table in url: https://momentjs.com/docs/#/displaying/
 * @param date
 * @param formatPattern
 */
export const getFormattedDate = (date: Date, formatPattern: string = 'MMM DD, YYYY') => {
  return moment(date).format(formatPattern);
}

/**
 * Add leading zeros to a number to make it has fix size of digits.
 * @param num
 * @param size - size of digits the number should look.
 */
export const addLeadingZeros = (num: number, size: number): string => {
  if (num.toString().length > size) {
    return num.toString();
  }

  const withZeros = "0000" + num;
  return withZeros.substring(withZeros.length - size);
}

