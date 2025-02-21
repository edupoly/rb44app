import React from 'react'
import { connect } from 'react-redux'
function Todolist(props) {
    console.log("Todolist rendered")
    var [ntd,setNTD] = React.useState('')
  return (
    <div className='border m-3 p-2'>
        <h3>Todolist</h3>
        <input type="text" onChange={(e)=>{setNTD(e.target.value)}}/>
        <button onClick={()=>{props.dispatch({type:'ADD_TODO',payload:ntd})}}>Add Todo</button>
        <ul>
            {
                props.todoReducer.todos.map((todo,i)=>{
                    return <li key={i}>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect(store=>store)(Todolist)