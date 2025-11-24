const { response } = require('express');
const stockService = require('../services/stockServices.js');
const url = require('url');

let getAllStockDetails = async(request, response) => {
    try {
        console.log("Inside controller: fetching all stcoks...");
        const stocks = await stockService.fetchAllStockDetails();
        console.log( "stocks instered successfully" );
        response.status(200).json( stocks );
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

let storeStock = async(request, response) => {
    try{
       const result = stockService.saveStock(request.body);
       console.log(result);
       response.status(200).json( "Stock Stored: "+result );
    } catch(error){
        console.log(error);
        response.status(404).json({ messsage: error });   
    }
}


let getOneStockDetails = async(request, response) => {
    try {
        console.log('welcome');
        const parsedUrl = url.parse(request.url, true); // true to parse query string into an object
        const queryParams = parsedUrl.query;
        console.log("Inside controller: fetching all stcoks count...");
        const stockDetail = await stockService.fetchOneStock(queryParams.description);
        
        response.status(200).json( stockDetail );
    } catch(error) {
        console.log(error);
        response.status(404).json({ messsage: "Error Fetching Stock in controller...", data: error.messsage });   
    }
}

let getStockPurchaseDetiail = async(request, response) => {
    try {
        const parsedUrl = url.parse(request.url, true); // true to parse query string into an object
        const queryParams = parsedUrl.query;
        console.log("Inside controller: fetching all stcoks count...");
        const purchaseDetail = await stockService.fetchPurchaseDetail(queryParams.symbol);
        response.status(200).json( purchaseDetail );
    } catch(error) {
        console.log(error);
        response.status(404).json({ messsage: "Error Fetching Stock Purchase in controller...", data: error.messsage });   
    }
}

module.exports = { getAllStockDetails, getAllStockNames, getCount, storeStock, getOneStockDetails, getStockPurchaseDetiail };