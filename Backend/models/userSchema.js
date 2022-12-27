const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
   fname:{
    type:String,
    required:true,
    trim:true
   },
   lname:{
    type:String,
    required:true,
    trim:true
   },
   email:{
    type:String,
    require:true,
    unique:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid email id");
        }
    }
   },
   mobile:{
    type:String,
    require:true,
    unique:true
   },
   message:[]

})
const users = new mongoose.model("users",userSchema)
module.exports = users;