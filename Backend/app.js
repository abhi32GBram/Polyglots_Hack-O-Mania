const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to Hack-O-Mania")
})

app.listen(3000,()=>{
    console.log("listening at Port - 3000")
})