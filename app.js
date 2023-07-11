const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require("method-override");



//------------------- * Middleware * -----------------

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({     
  extended: true
})); 


//-------------------- * Database * ---------------
const mongoose = require("mongoose")
const database = require("./src/database")
const yelpcamps = require("./src/model")


//----------------- * Routes * ------------------

//Home Route
app.get("/", (req,res)=>{
    yelpcamps.find({}).then((data)=>res.render("home", {camps: data})).catch((error)=>console.log(error, "Home route error"))
 });


app.get("/add", (req,res)=>{
    res.render("Add");
 })


app.post("/newCamp", (req,res)=>{
    yelpcamps.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    })
    res.redirect("/")
})

//Edit Data
app.get("/edit/:id",(req,res)=>{
    yelpcamps.findOne({
        _id: req.params.id
    }).then((data)=>res.render("Edit",{camp: data})).catch((err)=>console.log(err , "Edit route error"));
    
})

app.put("/edit/:id",(req,res)=>{
    yelpcamps.findOne({
        _id: req.params.id
    }).then((data)=>{
        data.name = req.body.name;
        data.image = req.body.image;
        data.description = req.body.description;
        
        data.save().then(()=>{res.redirect("/")})
    }).catch((error)=>{console.log("Edit route error")})
})

//Delete Data
app.delete("/delete/:id", (req,res)=>{
    yelpcamps.deleteOne({
        _id: req.params.id
    }).then(()=>{
        res.redirect("/")
    })
})
 
 //Server
app.listen(3000,function(){
    console.log("Server is running");
});

//module.exports = app;

