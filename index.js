let express = require('express');
let dotenv = require('dotenv');
let dbconfig = require('./config/dbconfig.js');
const router = express.Router();
let cookieParser = require('cookie-parser');



dotenv.configDotenv();

let PORT = process.env.PORT;

let app = express();
let stockRouter = require('./routes/stockRoutes.js');

app.use(express.json());
app.set('json spaces', 2); 
//dbconfig.ConnectDB()

//app.use('/stocks', stockRouter);

let allRouters=[
    ["/api/stocks",stockRouter]
]

app.use(express.json())
    .use(cookieParser());

allRouters.forEach(it=>app.use(it[0],it[1]))

app.listen(PORT, () => console.log(`server is listening on the ${PORT} port`));

app.get("/", (req, res) =>{
    let routes = [
        ["/",app._router],
        ...allRouters
    ]
    let routesJs = {}
    routes.forEach(it=>{
        let key = it[0]
        let value  = it[1]?.stack.filter(r => r.route).map(r => ({method: Object.keys(r.route.methods)[0].toUpperCase(), path: r.route.path}));
        routesJs[key]=value
    })
       res.json(routesJs)
} )

