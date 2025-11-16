let dotenv = require('dotenv');
let mongodb = require('mongodb');
let express = require('express');
dotenv.configDotenv();

let mongodb_url = process.env.MONGO_DB_URL;


let  app = express();
app.use(express.json());

let client;

// to connect mongodb database;

let ConnectDB = async() => {
    //const client = new mongodb.MongoClient(mongodb_url);
    try {
    client = await new mongodb.MongoClient(mongodb_url);
    //clientdb = client.db('stockfinnhub');
    client.connect();
    
    console.log('Connected to mongodb Database');
    return client;
    // console.log('---------------');
    // console.log(clientdb);
    // console.log('---------------');
    } catch(error) {
         console.log("Error Connecting DB ", error);
    }
}

module.exports = { ConnectDB, client} ;
