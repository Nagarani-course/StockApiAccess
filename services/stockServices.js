const stockModel = require("../models/stockModel.js");

let fetchAllStockDetails = async () => {
    return await stockModel.Stock.getAllStockDetails();
}

module.exports = { fetchAllStockDetails };