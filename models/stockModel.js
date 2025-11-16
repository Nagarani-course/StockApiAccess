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
        console.log(symbols.data)
        const c= await dbconfig.ConnectDB();
        const clientdb =  c.db('stockfinnhub');
        console.log('---------------');
       // console.log(dbconfig);
        console.log('---------------');
        //console.log(dbconfig.clientdb);
       // const db = dbconfig.d('stockfinnhub');
        const result = clientdb.collection('StockSymbols').insertMany(symbols.data);
        console.log('---------------');
        //console.log(dbconfig);
        console.log('---------------');
        console.log('inserted..', result);
        return result;
        
        //return symbols;
        }catch(error){
           // throw new Error('Error fetching Symbols in model...', error);
           console.error('Error fetching Symbols in model...', error);
        }
    }
}

module.exports = { Stock: new Stock() };