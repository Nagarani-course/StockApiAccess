class Stock{
    constructor(symbol, price, volume){
        this.symbol = symbol;
        this.price = price;
        this.volume = volume;
    }

    getAllStockDetails(){
        console.log("Fetching All stocks from the DB...");
        //return "Fetching from DB";
    }
}

module.exports = { Stock: new Stock() };