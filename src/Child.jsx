import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import mycontext from './MyContext'

function Child(props) {
    var un = useContext(mycontext);

  return (
    <div className='border p-2 m-2'>
        <h2>Child: {props.x} {un.username}</h2>
        <button onClick={()=>{un.abc()}}>Say HI</button>
        <GrandChild x={props.x}></GrandChild>
    </div>
  )
}

export default Child