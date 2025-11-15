const stockModel = require("../models/stockModel.js");

let fetchAllStockDetails = async () => {
    const stock = await stockModel.Stock.getAllStockDetails();
    //console.log(stock)
    return stock;
}

module.exports = { fetchAllStockDetails };