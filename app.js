const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// const router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
// app.use("/css",express.static(__dirname + "public/css"));
// app.use("/js",express.static(__dirname + "public/js"));
// app.use("/images",express.static(__dirname + "public/images"));


app.get("/",function(req,res){
    res.sendFile(__dirname + "public/index.html");
    

});
app.get("/OurServices",function(req,res){
    res.sendFile(__dirname + "/public/OurServices.html");
})













app.listen(3000,function(){
    console.log("server is running at port 3000");
});