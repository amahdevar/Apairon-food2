import moment from "moment-jalaali";

// Enable jalaali (Persian) calendar in moment.js
moment.loadPersian({ usePersianDigits: false });

/**
 * Check if a given date is a valid Persian date and is not Thursday or Friday.
 * @param {Object} date - The date object { year, month, day } from the calendar library.
 * @returns {boolean} - True if the date is valid and not Thursday/Friday, otherwise false.
 */
export const isPersianDate = (date) => {
  if (!date || !date.year || !date.month || !date.day) return false;

  const gregorianDate = moment
    .from(`${date.year}-${date.month}-${date.day}`, "jYYYY-jM-jD")
    .toDate();

  const dayOfWeek = gregorianDate.getDay(); // 0=Sunday, ..., 6=Saturday
  return dayOfWeek !== 4 && dayOfWeek !== 5; // Exclude Thursdays (4) and Fridays (5)
};

/**
 * Converts a Persian calendar date to a Gregorian date.
 * @param {Object} persianDate - The Persian date object { year, month, day }.
 * @returns {Date} - The corresponding Gregorian date object.
 */
export const toGregorian = (persianDate) => {
  return moment
    .from(`${persianDate.year}-${persianDate.month}-${persianDate.day}`, "jYYYY-jM-jD")
    .toDate();
};

/**
 * Converts a Gregorian date to a Persian calendar date.
 * @param {Date} gregorianDate - The Gregorian date object.
 * @returns {Object} - The corresponding Persian date object { year, month, day }.
 */
export const toPersian = (gregorianDate) => {
  const persianDate = moment(gregorianDate).format("jYYYY-jM-jD").split("-");
  return {
    year: parseInt(persianDate[0], 10),
    month: parseInt(persianDate[1], 10),
    day: parseInt(persianDate[2], 10),
  };
};

/**
 * Filters a list of Persian calendar dates, excluding Thursdays and Fridays.
 * @param {Array} dates - Array of Persian calendar dates [{ year, month, day }, ...].
 * @returns {Array} - Filtered array of Persian calendar dates.
 */
export const filterValidDates = (dates) => {
  return dates.filter(isPersianDate);
};
