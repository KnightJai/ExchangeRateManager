const axios = require('axios');
const cache = require('../utils/cache');

const getConvertedAmount = async (from, to, amount, date) => {
  const baseUrl = process.env.EXCHANGE_API_URL;
  const accessKey = process.env.ACCESS_KEY;

  const cacheKey = `${from}_${to}_${date || 'latest'}`;

  // Check cache first
  const cachedRate = cache.get(cacheKey);
  if (cachedRate) {
    console.log('Using cached rate');
    return cachedRate * amount;
  }

  // If not cached, call API
  let url = `${baseUrl}/convert?access_key=${accessKey}&from=${from}&to=${to}&amount=${amount}`;
  if (date) {
    url += `&date=${date}`;
  }

  const response = await axios.get(url);
  console.log('API Response:', response.data);

  if (!response.data || !response.data.result) {
    throw new Error('Conversion failed. Check your API key or inputs.');
  }

  const rate = response.data.info.quote;
  cache.set(cacheKey, rate);

  return rate * amount;
};

module.exports = { getConvertedAmount };



