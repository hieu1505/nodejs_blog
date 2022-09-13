import express from 'express';
import cofig from "./configs/vewEngine";
require('dotenv').config();
const app=express()
const port=process.env.PORT||3000;
console.log(port)
cofig(app)
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(port,()=>{
    console.log('ok')
})