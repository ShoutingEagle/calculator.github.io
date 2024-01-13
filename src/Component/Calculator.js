import React, { useState } from 'react'

function Calculator() {

  const [data,setData] = useState({
    inputOne : '',
    inputTwo : '',
    operator : '',
    message : false,
    className : 'error',
  })

    console.log(data);
  return (
    <div>
      <div><input type='text'/></div>
      <div><input type='text'/></div>
      <div>
        <button onClick={addInput}>+</button>
        <button onClick={subtractInput} >-</button>
        <button onClick={multiplyInput} >*</button>
        <button onClick={divideInput} >/</button>
      </div>
      <div className={className}>{message?'Success!':'Error!'}</div>
      <div></div>
      
    </div>
  )
}

export default Calculator