require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/router") // use to import router
require("./db/conn")//only use this to connect database
const port = process.env.PORT || 6002;
/*app.get("/",(req,res)=>{
    res.status(200).json("server started")
})*/
//use cors
app.use(cors());
//use json
app.use(express.json());
//use router
app.use(router);
app.listen(port,()=>{
    console.log("server is listening at port number 6002")
})