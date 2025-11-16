let express = require('express');
let dotenv = require('dotenv');
let dbconfig = require('./config/dbconfig.js');

dotenv.configDotenv();

let PORT = process.env.PORT;

let app = express();
let stockRouter = require('./routes/stockRoutes.js');

app.use(express.json());

dbconfig.ConnectDB();

app.use('/stocks', stockRouter);


//http://localhost:3000/stocks/allStocks
app.listen(PORT, () => console.log(`server is listening on the ${PORT} port`));