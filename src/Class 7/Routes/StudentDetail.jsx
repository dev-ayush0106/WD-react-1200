import React from 'react'
import { useParams } from 'react-router'

const StudentDetail = ({id}) => {
    let data=useParams(id); // object
    console.log(data);
  return (
    <div>
      <h2>Detail of Student Roll No is :{data.id}</h2>
    </div>
  )
}

export default StudentDetail
