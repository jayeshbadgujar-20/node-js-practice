const express = require('express').Router();
const route = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userModule =require('./module');
const {registerValidation, loginValidation} = require("./validation");




// Register user, Send data (CRUD OPERATIONS)
route.post("/register", async(req,res)=>{
  const {error} = registerValidation(req.body);

    if(error) return res.status(404).send(error.details[0].message);

    const salt = await bcrypt.genSalt(10)
    const hashpasswd = await bcrypt.hash(req.body.password,salt);

    const emailExist = await userModule.findOne({email:req.body.email});
    if(emailExist) return res.status(404).send("Email is already exist");
   
   
    const newUser = new userModule({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:hashpasswd
    })
    try {
       const saveData = await newUser.save() ;
       res.send(saveData);
    } catch (error) {
        console.log(error)
    }
})


// login validation API
 route.post("/login",async(req,res)=>{
    const {error} = loginValidation(req.body)
    if (error) return res.status(404).send(error.details[0].message);

    // Email Validation
    const userExist = await userModule.findOne({email:req.body.email})
    if (!userExist) return res.status(404).send("Invalid email id")

    // Login password Validation
     const ispasss = await bcrypt.compare(req.body.password,userExist.password)
     if (!ispasss) return res.status(404).send("Invalid password")

     const token = jwt.sign({_id:userExist._id},process.env.Token_secret)

     res.header('auth-token' ,token).send(token)
     
     res.send("Login Successful");
 })










// Showdata
  route.get("/showData" ,async(req,res)=>{
    try {
        const showData = await  userModule.find();
        res.send(showData);
    } catch (error) {
        console.log(error);
    }
  })

//   Delete user
   route.delete("/delete",async(req,res)=>{
    let id = req.query.id;
    try {
        const deleteDate = await userModule.findByIdAndDelete();
        res.send("Delete Data Successfully");
    } catch (error) {
        console.log(error)
    }
   })

// Update Data
  route.post("/update",async(req,res)=>{
    let _id = req.body._id;
    try {
        const deleteDate = await userModule.findByIdAndUpdate(_id,req.body);
        res.send("Data Updated");
    } catch (error) {
        console.log(error)
    }
   })

    //Show one user
    route.get("/Showone",async(req,res)=>{
        const id = req.query.id

        try {
           const Showone = await userModule.findById(id);
           res.send(Showone);
        } catch (error) {
            console.log(error);
        }
    })


  module.exports = route;