import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",margin:"30px",justifyContent:"space-between"}}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav">
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/student'>Student Detail</Link>
            <Link to='/contactus'>Contact Us</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
