const axios = require('axios');
let dbconfig = require('../config/dbconfig.js');
let { client } = require('../config/dbconfig.js');
let dotenv = require('dotenv');
dotenv.configDotenv();

const finnApiKey = "d4c8eqpr01qudf6h50t0d4c8eqpr01qudf6h50tg";

class Stock{
    constructor(symbol, price, volume){
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
        const result = clientdb.collection('StockSymbols').insertMany(symbols.data);
        console.log('inserted..', result);
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
}

module.exports = { Stock: new Stock() };