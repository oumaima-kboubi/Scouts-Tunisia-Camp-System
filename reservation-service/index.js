const express= require('express');
const cors = require("cors");
const mongoose= require('mongoose');
const router = require("./router");
// const winston = require('winston');
// const { DatadogTransport } = require('winston-datadog');
// var {Loggly} = require('winston-loggly-bulk');
const uuid = require('uuid');
const app=express();
const path = require('path')
const promClient = require('prom-client');
const {articleAddedCounter} = require('./metrics')
// const {logger,winston} = require('./logger')



require('dotenv').config({
    path: path.join(__dirname, "/.env")
   })

   async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
            /* ,  ()=>{
                       console.log("Connected")
                   },
               e=>console.error(e)
           */
           )
           console.log("Connected to MongoDB")
    }catch(error){
        console.error(error)
    }
}

mongoose.set('strictQuery', true);

connect()

app.use(cors());
app.use((req, res, next) => {
    req.requestId = uuid.v4();
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);


// simple route
app.get("/res", (req, res) => {
    res.json({ message: "Welcome to ouma application." });
  });
  
app.get('/res/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
   const metrics = await promClient.register.metrics();
   res.end(metrics);
});


app.listen(process.env.APP_PORT,()=>{
    console.log("Server started on port ",process.env.APP_PORT)
})
