import React, { useState } from 'react'

const Third = () => {
    let [count,setCount]=useState(0);

    console.log(count);

    function incCount(){
        setCount(count+1)
    }

    function decCount(){
        setCount(count-1)
    }

    function resetCount(){
        setCount(0);
    }

    function inc20(){
        setCount(count+20)
    }

    function dec40(){
        setCount(count-40)
    }
  return (
    <div>
      <button onClick={incCount}>+</button>
      <button onClick={inc20}>+20</button>
      <span>{count}</span>
      <button onClick={dec40}>-40</button>
      <button onClick={decCount}>-</button>

      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Third
