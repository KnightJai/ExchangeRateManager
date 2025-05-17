const { validateDate } = require('../utils/dateValidator');

describe('Date Validator', () => {
  test('should throw error for wrong format', () => {
    expect(() => validateDate('01-01-2023')).toThrow('Invalid date format');
  });

  test('should throw error for date older than 90 days', () => {
    expect(() => validateDate('2023-01-01')).toThrow('Date cannot be more than 90 days in the past.');
  });

  test('should pass for recent valid date', () => {
    const today = new Date();
    const validDate = new Date(today - 80 * 24 * 60 * 60 * 1000);
    const formatted = validDate.toISOString().split('T')[0];
    expect(() => validateDate(formatted)).not.toThrow();
  });
});
