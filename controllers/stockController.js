const stockService = require('../services/stockServices.js');

let getAllStockDetails = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks...");
        const stocks = await stockService.fetchAllStockDetails();
       // console.log(stocks);
        //response.status(200).json({ messsage: "Stock fetched Successully in controller", data: stocks.data });
        response.status(200).json( stocks.data );
    } catch(error) {
        console.log(error);
        response.status(200).json({ messsage: "Error Fetching Stocks in controller...", data: error.messsage });   
    }
}

module.exports = { getAllStockDetails };