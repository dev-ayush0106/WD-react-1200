import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "./ThirdOne.css"

const ThirdOne = () => {
    let [status,setStatus]=useState(true);
    let [redStatus,setRedStatus]=useState(false);
    console.log(status)

    function update(){
        setStatus(!status)
    }

    function updateHeart(){
        setRedStatus(!redStatus);
    }
  return (
    <div>
{/* 
    {
        (status)?<h1>This is True</h1>:<h1>This is False</h1>
    }
      <button onClick={update}>Update to {(status)?"False":"True"}</button> */}

      {/* <FaRegHeart style={{fontSize:"4rem"}} className={(redStatus)?"red":""} onClick={updateHeart}/> */}
      
      {(redStatus)?
      <FaHeart style={{fontSize:"4rem",color:"red"}} onClick={updateHeart} />:
      <FaRegHeart style={{fontSize:"4rem"}} onClick={updateHeart}/>
}
      <br />
      <span>{(redStatus)? "Liked":""}</span>
    </div>
  )
}

export default ThirdOne
