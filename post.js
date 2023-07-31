const route = require("express").Router();
const verify = require("./verifytoken");

route.get("/",verify,(req,res)=>{
    res.json({
    post: {
        title: "Jwt Token",
        description: "This Is Our First Token"
    }    
 })
})

module.exports = route;