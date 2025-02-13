import React, { useContext } from 'react'
import mycontext from './MyContext';

function GrandChild(props) {
    // var usr=useContext(mycontext);
  return (
    <mycontext.Consumer>
        {
            (usr)=>{
                return (
                    <div className='border p-2 m-2'>
                        <h2>Grand Child: {props.x} {usr.gender}</h2>
                    </div>
                )
            }
        }
    </mycontext.Consumer>
  )
}

export default GrandChild