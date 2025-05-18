const { getConvertedAmount, getHistoricalRateFromAPI } = require('../services/exchangeService');
const { getCryptoRate } = require('../services/cryptoService');
const { validateDate } = require('../utils/dateValidator');
const { convertCounter } = require('../utils/metrics');

const convertCurrency = async (req, res) => {
  try {
    convertCounter.inc();
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

const getHistoricalRate = async (req, res) => {
  try {
    const { from, to, date } = req.query;

    if (!from || !to || !date) {
      return res.status(400).json({ error: 'Missing required query parameters: from, to, date' });
    }

    validateDate(date);

    const rate = await getHistoricalRateFromAPI(from.toUpperCase(), to.toUpperCase(), date);
    return res.json({ rate });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const convertCryptoCurrency = async (req, res) => {
  try {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: 'Missing required query parameters: from, to, amount' });
    }

    const rate = await getCryptoRate(from.toUpperCase(), to.toUpperCase());
    const convertedAmount = rate * Number(amount);

    return res.json({ amount: convertedAmount });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  convertCurrency,
  getHistoricalRate,
  convertCryptoCurrency,
};
