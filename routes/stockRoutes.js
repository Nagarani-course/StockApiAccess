const express = require('express');
const router = express.Router();

const { getAllStockDetails, getAllStockNames, getCount, storeStock, getOneStockDetails, getStockPurchaseDetiail } = require('../controllers/stockController.js');

router.get('/allStocks', getAllStockDetails);
router.get('/allStockNames', getAllStockNames);
router.get('/stockCount', getCount);
router.post('/storeStockPurchase', storeStock);
router.get('/oneStockDetail', getOneStockDetails);
router.get('/stockPurchaseDetail', getStockPurchaseDetiail);

module.exports = router;
