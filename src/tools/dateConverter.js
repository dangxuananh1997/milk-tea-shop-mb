function addLeadingZero(number) {
  return number >= 10 ? number : `0${number}`;
}

function convertDate(dateString) {
  const date = new Date(dateString);
  return `${addLeadingZero(date.getUTCHours())}:${addLeadingZero(date.getUTCMinutes())} | `
    + `${addLeadingZero(date.getUTCDate())}-${addLeadingZero(date.getUTCMonth() + 1)}-${date.getUTCFullYear()}`;
}

function getDateString(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${addLeadingZero(date.getMonth() + 1)}-${addLeadingZero(date.getDate())}`;
}

function getCurrentDate() {
  return getDateString(`${new Date().toUTCString()}`);
}

export {
  convertDate,
  getCurrentDate,
};
