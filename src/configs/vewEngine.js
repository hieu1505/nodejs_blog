import express from 'express';
const cofigviewEngine=(app)=>{
    app.use(express.static('./src/public'))
    app.set("view engtne","ejs");
    app.set("views","./src/views")
}
export default cofigviewEngine;