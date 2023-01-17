const express= require('express');
const cors = require("cors");
const mongoose= require('mongoose');
const router = require("./router");
var bcrypt = require('bcryptjs');

const app=express();
const path = require('path')
const promClient = require('prom-client');
const {activeConnections,total_logs} = require('./metrics')
const rateLimit = require('express-rate-limit')

//applying express-rete-limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 15, 
    standardHeaders: true, 
    legacyHeaders: false, 
    skip: (req) => {
        const { path } = req;
        const skipPaths = ['/auth/metrics'];
        return skipPaths.includes(path);
    }
})

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(limiter)
app.use(router);


// simple route
app.get("/auth", (req, res) => {
    total_logs.inc();
    res.json({ message: "Welcome to ouma application." });
  });

app.get('/auth/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
   const metrics = await promClient.register.metrics();
   res.end(metrics);
});


app.listen(process.env.APP_PORT,()=>{
    console.log("Server started on port ",process.env.APP_PORT)
})
