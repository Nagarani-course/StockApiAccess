const stockService = require('../services/stockServices.js');

let getAllStockDetails = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks...");
        const stocks = await stockService.fetchAllStockDetails();
        response.status(200).json({ messsage: "Stock fetched Successully", data: stocks });
    } catch(error) {
        response.status(200).json({ messsage: "Error Fetching Stocks...", data: error.messsage });   
    }
}

module.exports = { getAllStockDetails };