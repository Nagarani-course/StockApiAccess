const axios = require('axios');
let dbconfig = require('../config/dbconfig.js');
let { client } = require('../config/dbconfig.js');
let dotenv = require('dotenv');
dotenv.configDotenv();

const finnApiKey = "d4c8eqpr01qudf6h50t0d4c8eqpr01qudf6h50tg";

class Stock{
    constructor(symbol, price, volume){
        console.log("Constr", symbol);
        this.symbol = symbol;
        this.price = price;
        this.volume = volume;
    }

    async getAllStockDetails(){
        try{
        console.log("Fetching All stocks from the DB...");
        const apiUrl = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${finnApiKey}`;
        const symbols = await axios.get(apiUrl);
        const clientdb = await dbconfig.ConnectDB();
        // to drop existing collections to update live data
        clientdb.collection('StockSymbols').drop();
        clientdb.collection('StockSymbols').insertMany(symbols.data);
        console.log('inserted..');
        const result = clientdb.collection('StockSymbols').find({}).toArray();
        return result;
        }catch(error){
           console.error('Error fetching Symbols in model...', error);
        }
    }

    async getAllStockNames(){
        try{
        console.log("Fetching All stocks names from the DB...");
        const clientdb = await dbconfig.ConnectDB();
        const projections = {
            projection: {
                description: 1,
                _id: 0
            }
        };
        const stocknames = clientdb.collection('StockSymbols').find({}, projections).toArray();
        console.log('Sucsess Stock Names..');
        return stocknames;
        }catch(error){
           console.error('Error fetching stock names in model...', error);
        }
    }


    async getStockCount(){
        try{
        console.log("Fetching All stocks count from the DB...");
        const clientdb = await dbconfig.ConnectDB();
        const stockCount = clientdb.collection('StockSymbols').count();
        console.log('Sucsess Stock Count..');
        return stockCount;
        }catch(error){
           console.error('Error fetching stock count in model...', error);
        }
    }

    async saveStock(stock){
        try{
            console.log("Storing stock count from the DB...");
            const clientdb =await dbconfig.ConnectDB();
            const result = clientdb.collection('StockPurchase').insertOne(stock);
            return result;
        }catch(error){
            console.error('Error storing stock in model...', error);
        }
    }

    async getOneStockDetails(description){
        try{
        const clientdb = await dbconfig.ConnectDB();
        console.log("Fetching one stocks count from the DB..."+ description);
        const oneStock = clientdb.collection('StockSymbols').findOne({ description });
        return oneStock;
        }catch(error){
           console.error('Error fetching one stock in model...', error);
        }
    }

    async getStockPurchase(symbol){
        try{
        const clientdb = await dbconfig.ConnectDB();
        console.log("Fetching one stocks purchase from the DB..."+ symbol);
        const stockPurchase = clientdb.collection('StockPurchase').findOne({ symbol });
        return stockPurchase;
        }catch(error){
           console.error('Error fetching one stock purchase in model...', error);
        }
    }
}

module.exports = { Stock: new Stock() };