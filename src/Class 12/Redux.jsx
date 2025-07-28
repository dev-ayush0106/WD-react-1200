import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './CounterSlice';

const Redux = () => {
    let [amount,setAmount]=useState(0)
    let count=useSelector((state)=>state.counter.value)

    let dispatch=useDispatch();
    function inc(){
        dispatch(increment())
    }
    function dec(){
        dispatch(decrement())
    }

    function res(){
        dispatch(reset())
    }

    function incByAmount(){
        dispatch(incrementByAmount(amount))
    }
    console.log(count)
  return (
    <div>
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
      <button onClick={res}>Reset</button>

      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.valueAsNumber)} />
      <button onClick={incByAmount}>Increase</button>

    </div>
  )
}

export default Redux
