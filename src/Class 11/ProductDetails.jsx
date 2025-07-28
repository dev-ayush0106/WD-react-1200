import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { add } from './CartSlicer';

const ProductDetails = () => {
    let [product, setProduct] = useState([]);
    let { id } = useParams();
    let navigate=useNavigate();
    async function dataFetch() {
        let data = await fetch(`https://dummyjson.com/products/${id}`)
        let jsonData = await data.json();
        // console.log(jsonData);
        setProduct(jsonData)
    }

    useEffect(() => {
        dataFetch()
    }, [])

    console.log(product)

    function moveBack(){
        navigate("/")
    }

    let dispatch=useDispatch();
    return (
        <div style={{ margin: "50px 0px" }}>
            <div style={{ marginLeft: "100px" }}>
                <button onClick={()=>{moveBack()}} style={{ padding: "10px" }}>
                    <FaAngleLeft />
                    Back
                </button>
            </div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>{product.title}</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={product.thumbnail} alt="!!!" />
                <div>
                    <p style={{ width: "500px" }}>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={()=>{dispatch(add(product))}}>Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
