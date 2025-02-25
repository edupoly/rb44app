import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice';

function Todolist() {
    var { todos }=useSelector(state=>state.todolist)
    var [ntd,setNtd]=useState('')
    var dispatch = useDispatch();
  return (
    <div>
        <h3>Todolist</h3>
        <input type="text" onChange={(e)=>{setNtd(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(ntd))}}>Add Todo</button>
        <ul>
            {
                todos.map((todo)=>{
                    return <li>
                        {todo}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist