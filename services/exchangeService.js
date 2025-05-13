const axios = require('axios');

const getConvertedAmount = async (from, to, amount, date) => {
  const baseUrl = process.env.EXCHANGE_API_URL;
  const accessKey = process.env.ACCESS_KEY;

  let url = `${baseUrl}/convert?access_key=${accessKey}&from=${from}&to=${to}&amount=${amount}`;
  if (date) {
    url += `&date=${date}`;
  }

  const response = await axios.get(url);
  console.log('API Response:', response.data);

  if (!response.data || !response.data.result) {
    throw new Error('Conversion failed. Check your API key or inputs.');
  }

  return response.data.result;
};

module.exports = { getConvertedAmount };


