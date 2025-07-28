import { button, div } from 'motion/react-client';
import React, { useEffect, useState } from 'react'
import "./page.css"
import ProductPage from './ProductPage';

const Pagination = () => {
    let[products,setProducts]=useState([]);
    let[current,setCurrent]=useState(0);
    let[forward,setForward]=useState(0);
    let[backward,setBackward]=useState(3);

    let url="https://dummyjson.com/products?limit=500"

    async function dataFetch(){
        let data= await fetch(url);
        let resData= await data.json();
        setProducts(resData.products);
    }

    useEffect(()=>{
        dataFetch()
    },[]);

    console.log(products);

    let PAGE_SIZE=20;
    let totalProduct=products.length
    let noOfPages=Math.ceil(totalProduct/PAGE_SIZE); //10

    let start=current*PAGE_SIZE;
    let end=start+PAGE_SIZE;

    function handlePage(n){
        setCurrent(n);
    }
    
    function prevPage(){
        setCurrent((prev)=>prev-1);
        setForward((prev)=>prev-1)
        setBackward((prev)=>prev-1)
    }
    function nextPage(){
        setCurrent((prev)=>prev+1);
        setForward((prev)=>prev+1)
        setBackward((prev)=>prev+1)
    }

    
  return (
    <div>
      <div style={{display:"flex",gap:"10px",justifyContent:"center"}}
      >
        <button disabled={current==0} onClick={()=>{prevPage()}}>Prev</button>
        {[...Array(noOfPages).keys().map((n)=>{
            return(
                <button className={(current===n?"active":"")} onClick={()=>{handlePage(n)}} style={{padding:"5px"}}>{n+1}</button>
            )
        })]}
        <button disabled={current==noOfPages-1} onClick={()=>{nextPage()}}>Next</button>
</div>
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}> 
        {
            products.slice(start,end).map((product)=>{
                return(
                    <ProductPage thumbnail={product.thumbnail}
                    id={product.id} title={product.title} image={product.image}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default Pagination
