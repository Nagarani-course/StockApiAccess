let express = require('express');
let app = express();
let stockRouter = require('./routes/stockRoutes.js');

app.use(express.json());

app.use('/stocks', stockRouter);


//http://localhost:3000/stocks/allStocks
app.listen(9090, () => console.log("server is listening on the 9090 port"));