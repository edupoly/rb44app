import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type==='INC'){
        return {counter:state.counter+1}
    }
    if(action.type==='DEC'){
        return {counter:state.counter-1}
    }
    if(action.type==='RESET'){
        return {counter:0}
    }
}
function Counter() {
    var [state,dispatch]=useReducer(reducer,{counter:0})

  return (
    <div className='border m-2 p-2'>
        <h3>Counter:{state.counter}</h3>
        <button onClick={()=>{dispatch({type:"INC"})}}>Increment </button>
        <button>Decrement</button>
        <button onClick={()=>{dispatch({type:'RESET'})}}>Reset</button>
    </div>
  )
}

export default Counter