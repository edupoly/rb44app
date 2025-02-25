import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

function Counter() {
    var {count} = useSelector(state=>state.counter)
    var dispatch = useDispatch()

  return (
    <div>
        <h2>Counter:{count}</h2>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
    </div>
  )
}

export default Counter