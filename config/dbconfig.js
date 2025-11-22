let dotenv = require('dotenv');
let mongodb = require('mongodb');
let express = require('express');
dotenv.configDotenv();

let mongodb_url = process.env.MONGO_DB_URL;
let stockdb = process.env.DB;


let  app = express();
app.use(express.json());

let client;

// to connect mongodb database;

let ConnectDB = async() => {
    try {
    client = await new mongodb.MongoClient(mongodb_url);
    clientdb = client.db(stockdb);
    
    console.log('Connected to mongodb Database:');
    return clientdb;
    } catch(error) {
         console.log("Error Connecting DB ", error);
    }
}

module.exports = { ConnectDB, client} ;
