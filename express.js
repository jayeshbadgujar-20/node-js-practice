const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./route");
const env = require("dotenv");
const postRoute = require("./post");
env.config();

app.use(express.json());
app.use("/user" , router);
app.use("/authorisedUser",postRoute)


mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_connection)
  // if(err) throw err
  // console.log("Connection Created");

  // Promises
  .then(() => {
    console.log("Connection Created")
  })
  .catch((err) => {
    console.log(`There will be some error ${err}`)
  })

// app.listen(5000);






app.get("/",(req,res)=>{
    res.send("Hello World...!");
})
//  app.listen(4000);

app.post("/",(req,res)=>{
    res.send("This is post methods")
})
app.listen(4000);
