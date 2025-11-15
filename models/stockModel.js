const axios = require('axios');
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
        return symbols;
        }catch(error){
            throw new Error('Error fetching Symbols in model...', error);
        }
    }
}

module.exports = { Stock: new Stock() };