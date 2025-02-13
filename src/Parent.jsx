import React from 'react'
import Child from './Child';

function Parent() {
    var x = "Praveen";
  return (
    <div className='border p-2 m-2'>
        <h1>Parent :{x}</h1>
        <Child x={x}></Child>
    </div>
  )
}

export default Parent