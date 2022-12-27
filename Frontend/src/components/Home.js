import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/esm/Button'
import th from './images/th.jpg'
const Home = () => {
  return (
    <>
      <div className="container home_container">
<div className="home_innerdiv">
  <div className="left_div">
<h2>Welcome to <span style={{color:'#6c63ff'}}>Portfolio</span></h2>
<p style={{color:'#666 ',letterSpacing:".5px",marginTop:'2px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat commodi similique quod nam exercitationem saepe maiores impedit laboriosam animi quia enim itaque eum iure cumque eos, inventore aut dolores dolore veniam delectus quos placeat quis. Vitae recusandae deserunt deleniti atque nisi sunt. Quidem nesciunt 
  quas quo dicta amet! Voluptates, aliquam.</p>
  <div className="btn_div mt-4">
<Button style={{background:"#2f2d69",marginRight:24,letterSpacing:"1px",border:"none",borderRadius:4}} variant="danger">Youtube</Button>
<Button style={{background:"#6c63ff",marginRight:24,letterSpacing:"1px",border:"none",borderRadius:4}} variant="danger">Youtube</Button>
  </div>
  </div>
  <div className="right_div">
    <img src={th} alt="" />
  </div>
</div>
      </div>
    </>
  )
}

export default Home
