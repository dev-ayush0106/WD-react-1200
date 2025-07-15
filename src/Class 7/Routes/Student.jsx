import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import StudentDetail from './StudentDetail'

const Student = () => {
    let [id,setId]=useState("");
    let navi=useNavigate();

    function sumbitData(e){
        e.preventDefault()
        setId(e.target.value);
    }
  return (
    <div>
      <h1>Student Details</h1>
      <form onSubmit={()=>{sumbitData}}>
      <input type="text" /> 
      <button onClick={()=>{navi("/student/:id")}}>Find Data</button>
    </form>
      <StudentDetail/>
    </div>
  )
}

export default Student
