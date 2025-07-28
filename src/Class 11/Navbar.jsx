import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Navbar = () => {

    let navigate=useNavigate()
    let cartCount=useSelector((state)=>state.cart)
    console.log(cartCount)
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"30px"}}>
      <h2>Redux</h2>
      <h2 onClick={()=>{navigate("/products/:id/cart")}}>My Bag {cartCount.length}</h2>
    </div>
  )
}

export default Navbar
