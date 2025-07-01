import React from 'react'

const Second = ({value,value1,value2,value3,detail}) => {
    console.log(detail)
  return (
    <div>
        {/* <h1>
      Hii My name is : {value}
      </h1>
        <h1>
      Hii My age is : {value1}
      </h1>
        <h1>
      Hii My city is : {value2}
      </h1>
        <h1>
      Hii My company is : {value3}
      </h1> */}

      <div>
        <h2>Phone Name:{detail[0]}</h2>
        <h2>Phone RAM:{detail[1]}</h2>
        <h2>Phone Storage:{detail[2]}</h2>
        <h2>Phone Processor:{detail[3]}</h2>
      </div>
      <hr />
    </div>
  )
}

export default Second
