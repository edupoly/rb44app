import React from 'react'
import useCounter  from './useCounter';
function Counter() {
   var [counter,incCounter,decCounter]=useCounter();
  return (
    <div className='border m-2 p-2'>
        <h2>Counter:{counter}</h2>
        <button onClick={()=>{incCounter()}}>Increment</button>
        <button onClick={()=>{decCounter()}}>Decrement</button>
    </div>
  )
}

export default Counter