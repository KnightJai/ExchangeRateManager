const axios = require('axios');
const { getConvertedAmount } = require('../services/exchangeService');

jest.mock('axios');

describe('getConvertedAmount', () => {
  it('should return converted amount from mocked API', async () => {
    axios.get.mockResolvedValue({
      data: {
        success: true,
        result: 8500,
        info: {
          quote: 85
        }
      }
    });

    const from = 'USD';
    const to = 'INR';
    const amount = 100;

    const result = await getConvertedAmount(from, to, amount);
    expect(result).toBe(8500);
  });

it('should throw error for bad API response', async () => {
  const cache = require('../utils/cache');
  jest.spyOn(cache, 'get').mockReturnValue(undefined);

  axios.get.mockResolvedValue({ data: null });

  await expect(getConvertedAmount('USD', 'INR', 100))
    .rejects.toThrow('Conversion failed. Check your API key or inputs.');
});

});
