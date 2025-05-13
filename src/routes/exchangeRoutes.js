const express = require('express');
const router = express.Router();
const { convertCurrency, getHistoricalRate } = require('../controllers/exchangeController');

router.get('/convert', convertCurrency);
router.get('/history', getHistoricalRate);

module.exports = router;
