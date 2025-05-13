const { getConvertedAmount } = require('../services/exchangeService');
const { validateDate } = require('../utils/dateValidator');

const convertCurrency = async (req, res) => {
  try {
    const { from, to, amount, date } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: 'Missing required query parameters: from, to, amount' });
    }

    if (date) {
      validateDate(date);
    }

    const converted = await getConvertedAmount(from.toUpperCase(), to.toUpperCase(), amount, date);
    return res.json({ amount: converted });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { convertCurrency };
