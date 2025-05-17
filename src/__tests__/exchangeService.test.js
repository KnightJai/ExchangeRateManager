const axios = require('axios');
const cache = require('../utils/cache');
const { getConvertedAmount, getHistoricalRateFromAPI } = require('../services/exchangeService');

jest.mock('axios');
jest.mock('../utils/cache');

describe('getConvertedAmount', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return converted amount from mocked API', async () => {
    cache.get.mockReturnValue(undefined);
    axios.get.mockResolvedValue({
      data: {
        success: true,
        result: 8500,
        info: {
          quote: 85,
        },
      },
    });

    const result = await getConvertedAmount('USD', 'INR', 100);
    expect(result).toBe(8500);
  });

  it('should use cached rate if available', async () => {
    cache.get.mockReturnValue(80);
    const result = await getConvertedAmount('USD', 'INR', 100);
    expect(result).toBe(8000);
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('should handle optional date parameter', async () => {
    cache.get.mockReturnValue(undefined);
    axios.get.mockResolvedValue({
      data: {
        success: true,
        result: 8500,
        info: {
          quote: 85,
        },
      },
    });

    const result = await getConvertedAmount('USD', 'INR', 100, '2023-05-01');
    expect(result).toBe(8500);
  });

  it('should throw error for bad API response', async () => {
    cache.get.mockReturnValue(undefined);
    axios.get.mockResolvedValue({ data: null });

    await expect(getConvertedAmount('USD', 'INR', 100)).rejects.toThrow(
      'Conversion failed. Check your API key or inputs.'
    );
  });
});

describe('getHistoricalRateFromAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return cached historical rate if available', async () => {
    cache.get.mockReturnValue(75);
    const result = await getHistoricalRateFromAPI('USD', 'INR', '2023-05-01');
    expect(result).toBe(75);
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('should fetch and cache historical rate if not cached', async () => {
    cache.get.mockReturnValue(undefined);
    axios.get.mockResolvedValue({
      data: {
        success: true,
        result: 77,
      },
    });

    const result = await getHistoricalRateFromAPI('USD', 'INR', '2023-05-01');
    expect(result).toBe(77);
    expect(cache.set).toHaveBeenCalledWith('history_USD_INR_2023-05-01', 77);
  });

  it('should throw error for bad historical API response', async () => {
    cache.get.mockReturnValue(undefined);
    axios.get.mockResolvedValue({ data: null });

    await expect(
      getHistoricalRateFromAPI('USD', 'INR', '2023-05-01')
    ).rejects.toThrow('Failed to fetch historical rate.');
  });
});

