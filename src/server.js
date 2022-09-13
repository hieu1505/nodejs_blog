import express from 'express';
import cofig from "./configs/vewEngine";
const app=express()
const port=3000
cofig(app)
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(port,()=>{
    console.log('ok')
})