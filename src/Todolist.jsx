import React, { useState } from 'react'
import useTodolist from './useTodolist'

function Todolist() {
    var [todos,addTodo,delTodo]=useTodolist()
    var [newtodo,setNewtodo] = useState('');
  return (
    <div className='border border-3 p-3 m-3'>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={()=>{addTodo(newtodo)}}>Add Todo</button>
        <ul>
            {
                todos.map((todo,i)=>{
                    return <li>
                            {todo}
                            <button onClick={()=>{delTodo(i)}}>Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist