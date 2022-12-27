import React from 'react'
import { useState } from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputvalue,setInputvalue] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    message:""
  });
  console.log(inputvalue);
  const getvalue = (e)=>{
//console.log(e.target.value)
const {name,value} = e.target;
setInputvalue(()=>{
  return{
    ...inputvalue,
    [name]:value
  }
})
  }
  //part added for backend
  const sentUserdata = async (e)=>{
    e.preventDefault();
    const {fname,lname,email,mobile,message} = inputvalue;
    if(fname == " "){
       toast.error("full name is require")
    }else if(lname==" "){
      toast.error("last name is require")
    }
    else if(email==""){
      toast.error("email is require")
    }
    else if(!email.includes("@")){
      toast.error("valid email id is require")
    }
    else if(mobile==""){
      toast.error("mobile no. is require")
    }
    else {
//part added for backend api call
const res = await fetch("http://localhost:6002/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    fname,lname,email,mobile,message
  })
});
const data = await res.json();
console.log(data);
if(data.status === 201){
  toast.success("reponse submitted");
  //this part is added to get empty box fields for new entry
  setInputvalue({
    ...inputvalue,
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    message:""
  })
}
    }
  }
  return (
    <>
      <div className="container mb-3 contact">
<h2 className="text-center">
  Contact Us
</h2>
<div className="container mt-2">
<Form className='row mt-2'>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' onChange={getvalue} placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' onChange={getvalue} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='mobile' onChange={getvalue} placeholder="Enter mobile number" />
      </Form.Group>
      <Form.Label>Message</Form.Label>
      <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="">
        <Form.Control
          as="textarea"
          placeholder="Write your comment..."
          style={{ height: '200px' }}
          name="message"
          onChange={getvalue}
        />
      </FloatingLabel>
    <div className="d-flex justify-content-center">
    <Button className='col-lg-6' variant="primary" name="submit" onClick={sentUserdata} type="submit">
        Submit
      </Button>
    </div>
    </Form>
    <ToastContainer />
</div>
      </div>
    </>
  )
}

export default Contact
