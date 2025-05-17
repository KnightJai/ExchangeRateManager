function isValidDateFormat(dateStr) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr) && !isNaN(new Date(dateStr));
}

function isWithinLast90Days(dateStr) {
  const inputDate = new Date(dateStr);
  const today = new Date();

  const diffTime = new Date(today.toDateString()) - new Date(inputDate.toDateString());
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= 90;
}

function validateDate(dateStr) {
  if (!isValidDateFormat(dateStr)) {
    throw new Error('Invalid date format. Use YYYY-MM-DD.');
  }

  if (!isWithinLast90Days(dateStr)) {
    throw new Error('Date cannot be more than 90 days in the past.');
  }
}

module.exports = { validateDate };
