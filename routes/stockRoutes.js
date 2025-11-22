const express = require('express');
const router = express.Router();

const { getAllStockDetails, getAllStockNames, getCount } = require('../controllers/stockController.js');

router.get('/allStocks', getAllStockDetails);
router.get('/allStockNames', getAllStockNames);
router.get('/stockCount', getCount);

module.exports = router;

