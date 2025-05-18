const axios = require('axios');

const getCryptoRate = async (from, to) => {
  const url = `${process.env.CRYPTO_API_URL}/live?access_key=${process.env.CRYPTO_ACCESS_KEY}`;

  const response = await axios.get(url);
  const rates = response.data.rates;

  if (!rates[from]) {
    throw new Error(`Currency ${from} not supported.`);
  }

  if (to !== 'USD') {
    throw new Error('Currently only USD is supported as the target currency.');
  }

  const rate = rates[from];
  return rate;
};

module.exports = { getCryptoRate };

