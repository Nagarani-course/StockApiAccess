const stockModel = require("../models/stockModel.js");

let fetchAllStockDetails = async () => {
    const stock = await stockModel.Stock.getAllStockDetails();
    return stock;
}

let fetchAllStockNames = async () => {
    const stock = await stockModel.Stock.getAllStockNames();
    return stock;
}

let fetchStockCount = async () => {
    const stockCount = await stockModel.Stock.getStockCount();
    return stockCount;
}
module.exports = { fetchAllStockDetails, fetchAllStockNames, fetchStockCount };