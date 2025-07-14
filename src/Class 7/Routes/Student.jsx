import React from 'react'
import { useParams } from 'react-router'
import StudentDetail from './StudentDetail'

const Student = () => {
  return (
    <div>
      <h1>Student Details</h1>
      <input type="text" /> 
      <button>Find Data</button>
      <StudentDetail/>
    </div>
  )
}

export default Student
