const express= require('express');
const cors = require("cors");
const mongoose= require('mongoose');
const router = require("./router");

const app=express();
const path = require('path')

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


connect()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

app.listen(process.env.APP_PORT,()=>{
    console.log("Server started on port ",process.env.APP_PORT)
})
