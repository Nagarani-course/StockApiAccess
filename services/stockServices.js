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

let saveStock = async (stock) => {
    const result = await stockModel.Stock.saveStock(stock);
    return result ;
}
module.exports = { fetchAllStockDetails, fetchAllStockNames, fetchStockCount, saveStock };