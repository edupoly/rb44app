import React,{useState} from 'react'
import useStorageState from './useStorageState';

function Counter() {
    var [counter,setCounter]=useStorageState(0);
    function inc(){
        setCounter(counter+1)
    }
    function dec(){
        setCounter(counter-1)
    }
  return (
    <div className='border border-2 m-3 p-3'>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>{inc()}}>Inc</button>
        <button onClick={()=>{dec()}}>Dec</button>
    </div>
  )
}

export default Counter