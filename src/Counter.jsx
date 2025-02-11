import React from 'react'
import useCounter from './useCounter';
function Counter() {
    var [counter,inc,dec]=useCounter()
  return (
    <div className='border border-2 m-3 p-3'>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>{inc()}}>Inc</button>
        <button onClick={()=>{dec()}}>Dec</button>
    </div>
  )
}

export default Counter