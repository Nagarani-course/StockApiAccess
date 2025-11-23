const express = require('express');
const router = express.Router();

const { getAllStockDetails, getAllStockNames, getCount, storeStock } = require('../controllers/stockController.js');

router.get('/allStocks', getAllStockDetails);
router.get('/allStockNames', getAllStockNames);
router.get('/stockCount', getCount);
router.post('/storeStock', storeStock);

module.exports = router;

