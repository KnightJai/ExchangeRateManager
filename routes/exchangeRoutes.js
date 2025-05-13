const express = require('express');
const router = express.Router();
const { convertCurrency } = require('../controllers/exchangeController');

router.get('/convert', convertCurrency);

module.exports = router;
