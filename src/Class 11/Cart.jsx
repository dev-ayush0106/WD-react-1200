import { h1 } from 'motion/react-client'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { remove } from './CartSlicer'

const Cart = () => {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let cartproducts=useSelector((state)=>state.cart)
    console.log(cartproducts)

    function removeItem(id){
        dispatch(remove(id));
    }
  return (
    <div >
    <button onClick={()=>{navigate("/")}} style={{display:"flex",justifyContent:"flex-start",width:"60px",margin:"30px"}}>
        <FaAngleLeft style={{marginTop:"5px"}}/>
        Back
    </button>
      <h1 style={{display:"flex",justifyContent:"center"}}>My Bag</h1>

    {
        (cartproducts.length==0)?
        <h2>No Products Added To the Bag</h2>:
    
      <div>
        {cartproducts.map((el)=>{
            return(
                <div>
                    <img src={el.thumbnail} alt="" />
                    <h3>{el.title}</h3>
                    <h3>{el.price}</h3>
                    <button onClick={()=>{removeItem(el.id)}}>Remove From Cart</button>
                </div>
            )
        })}
      </div>
}
    </div>
  )
}

export default Cart;
