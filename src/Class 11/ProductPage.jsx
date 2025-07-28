import React from 'react'
import { useNavigate } from 'react-router';

const ProductPage = ({id,thumbnail,title}) => {
    let navigate=useNavigate();
    function handleClick(){
            navigate(`/products/${id}`);
        }
    return (
        <div onClick={()=>{handleClick()}} style={{ display: "flex", flexDirection: "column", width: "200px", border: "2px solid black", margin: "20px", padding: "10px" }}>
            <img src={thumbnail} alt="" />
            <span>{title}</span>
        </div>
    )
}

export default ProductPage
