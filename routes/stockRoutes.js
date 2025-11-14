const express = require('express');
const router = express.Router();

const { getAllStockDetails } = require('../controllers/stockController.js');

router.get('/allStocks', getAllStockDetails);

module.exports = router;

