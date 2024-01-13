import React, { useState } from 'react'

function Calculator() {

  const [data,setData] = useState({
    inputOne : '',
    inputTwo : '',
    result : '',
    operator : '',
    message : '',
    className : 'error',
  })

  function handleClick (param) {
    if(data.inputOne == '' || data.inputTwo == ''){
        return setData({...data,message:'Error!',className:'error',result:'Fields cannot be EMPTY'})
    }


    
    let a = Number(data.inputOne);
    let b = Number(data.inputTwo);
    let res = operation(param,a,b)


    if(isNaN(res)){
        return setData({...data,message:'Error!',className:'error',result:'Both the  inputs should be NUMBERS'})
    }
    else{
        return setData({...data,message:'Success!',className:'success',result:res})
    }
    
  }


  function operation (param,a,b) {
    switch (param) {
        case 'addition': return a+b
        case 'substraction': return a-b
        case 'multiplication': return a*b
        case 'division': return a/b
        default: return 
    }
  }


  return (
    <div className='calculator'>
        <div className='heading'>React Calculator</div>
      <div>
        <input type='text' onChange={(e) => setData({...data,inputOne : e.target.value})} placeholder='Num 1'/>
      </div>
      <div>
        <input type='text'onChange={(e) => setData({...data,inputTwo:e.target.value})} placeholder='Num 2'/>
      </div>
      <div className='btn'>
        <button onClick={() => handleClick('addition')}>+</button>
        <button onClick={() => handleClick('substraction')} >-</button>
        <button onClick={() => handleClick('multiplication')} >x</button>
        <button onClick={() => handleClick('division')} >/</button>
      </div>
      <div className={data.className}>{data.message}</div>
      <div className='result'>{data.result!==''?'Result : ':''}{data.result}</div>
      
    </div>
  )
}

export default Calculator