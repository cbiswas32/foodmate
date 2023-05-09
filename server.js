const express=require("express");
const http=require('http');
const Pizza = require('./models/pizzaModel');
const db = require("./db.js");





const app=express()
const port=process.env.PORT|8000;
const server=http.createServer(app)

var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))


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