import express from 'express';
const cofigviewEngine=(app)=>{
    app.set("view engtne","ejs");
    app.set("views","./src/views")
}
export default cofigviewEngine;