const stockService = require('../services/stockServices.js');

let getAllStockDetails = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks...");
        const stocks = await stockService.fetchAllStockDetails();
        response.status(200).json( "stocks instered successfully" );
    } catch(error) {
        console.log(error);
        response.status(200).json({ messsage: "Error Fetching Stocks in controller...", data: error.messsage });   
    }
}

let getAllStockNames = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks names...");
        const stocksNames = await stockService.fetchAllStockNames();
        console.log(stocksNames);
        response.status(200).json( stocksNames );
    } catch(error) {
        console.log(error);
        response.status(200).json({ messsage: "Error Fetching Stocks names in controller...", data: error.messsage });   
    }
}

let getCount = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks count...");
        const count = await stockService.fetchStockCount();
        response.status(200).json( "Number of Stocks: "+count );
    } catch(error) {
        console.log(error);
        response.status(200).json({ messsage: "Error Fetching Stocks Count in controller...", data: error.messsage });   
    }
}

module.exports = { getAllStockDetails, getAllStockNames, getCount };