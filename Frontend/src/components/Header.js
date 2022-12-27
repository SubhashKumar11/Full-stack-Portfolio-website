import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <>
   
    <Navbar bg="primary" variant="light">
        <Container>
            <div>
                <h2>
                <Nav.Link className='text-white' style={{color:"white"}} to="#home">Portfolio</Nav.Link>
                </h2>
            </div>
          <Nav className="">
            <NavLink className='text-white text-decoration-none common'to="/">Home</NavLink>
            <NavLink className='text-white text-decoration-none common'to="/about">About</NavLink>
            <NavLink className='text-white text-decoration-none common' to="/contact">Contact</NavLink>
            <NavLink  className='text-white text-decoration-none common'to="/playlist">Project</NavLink>
            <Button className='mx-4 ' variant="danger">Youtube</Button>
          </Nav>
        </Container>
      </Navbar>
     

     
    </>
  )
}

export default Header
