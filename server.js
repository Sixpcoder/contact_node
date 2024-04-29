const express = require('express');
const dotenv =require('dotenv').config();
const mongo = require("mongoose")


const app =express();
const port = 3000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactroutes"));


mongo.connect("mongodb+srv://alirounak333:NIqrqxm8J9ITMgow@cluster0.02om1vl.mongodb.net/")
.then(()=>{
    app.listen(port,()=>{
        console.log("Server started on port "+port)
    })
})
.catch((error)=>
console.log(`${error}`))