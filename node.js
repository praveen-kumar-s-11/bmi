const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/main.html");
});
app.post("/",function(req,res){
var height=req.body.height;
var weight=req.body.weight;
var bmi=weight/(height)*(height);
    res.send("the bmi is"+bmi);
});
app.listen(3000,function(){
    console.log("server running");
});