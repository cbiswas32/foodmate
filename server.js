const express=require("express");
const http=require('http');
const cors = require('cors');
const Pizza = require('./models/pizzaModel');
const db = require("./db.js");





const app=express()
const port=process.env.PORT|8000;
const server=http.createServer(app)

var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

const corsOptions = {
    origin: 'https://foodmate.onrender.com',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://foodmate.onrender.com");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})

const customMiddleweres=(req,res,next)=>{
    console.log("Middlewere executed ....");
    next();
}


app.use(express.json());
app.use(customMiddleweres);

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)



server.listen(port,()=>{
    console.log(`Listening to requests on http://localhost:${port}`)
})