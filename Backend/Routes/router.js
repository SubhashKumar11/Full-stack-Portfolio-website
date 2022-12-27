const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema")
const nodemailer = require("nodemailer");

//email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})
//REGISTER USER DETAILS
router.post("/register",async(req,res)=>{
      // console.log(req.body); checking purpose
      //below part added after checking to store data in databae
    const {fname,lname,email,mobile,message} = req.body;
    if(!fname || !lname || !email || !mobile){
res.status(401).json({status:401,error:"All fields require"})
    }
    try {
        const preuser = await users.findOne({email:email});
if(preuser){

}else{
  const finaluser = new users({
    fname,lname,email,mobile,message 
  })  
  const storedata = await finaluser.save();  //save user to database
  //for sending email below code used
  const mailOption = {
    from:process.env.EMAIL,
    to:email,
    subject:"send email using nodejs",
    text:"your response recieved"
  }
  transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.log("error" + error);
    }else{
        console.log("email sent" + info.response)
        res.status(201).json({status:201,message:"email sent success"})
    }
  })
  res.status(201).json({status:201,storedata})
}

    } catch (error) {
        res.status(401).json({status:401,error:"All fields require"})
        console.log("catch error")
    }
 
})

module.exports = router;