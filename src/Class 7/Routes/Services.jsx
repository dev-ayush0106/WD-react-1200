import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Services = () => {
  let navigate=useNavigate();
  return (
    <div>
      <h1>Services</h1>
      <div style={{display:"flex",gap:"50px",justifyContent:"center",margin:"20px 0px"}}>
      <button onClick={()=>{navigate("javafs")}}>Go to JAVA FULL STACK</button>
      <button onClick={()=>{navigate("pythonfs")}}>Go to PYTHON FULL STACK</button> 
      <button onClick={()=>{navigate("mern")}}>Go to MERN FULL STACK</button>
      </div>
      <Outlet/>
    </div>
  )
}

export default Services
