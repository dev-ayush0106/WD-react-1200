import React from 'react'
import { useLocation } from 'react-router'

const NotFound = () => {
    let path=useLocation();
    console.log(path);
  return (
    <div>
      <h1>Erro 404 Page Not Found!</h1>
      <h2>Path Not find {<span style={{color:"red"}}>{path.pathname}</span>}</h2>
    </div>
  )
}

export default NotFound
