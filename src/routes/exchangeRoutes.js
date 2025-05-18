const express = require('express');
const router = express.Router();
const { convertCurrency, getHistoricalRate, convertCryptoCurrency, } = require('../controllers/exchangeController');

router.get('/convert', convertCurrency);
router.get('/history', getHistoricalRate);
router.get('/crypto-convert', convertCryptoCurrency);

module.exports = router;
