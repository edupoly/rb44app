import React, { useState } from 'react'
import useStorageState from './useStorageState'

function Todolist() {
    var [todos,setTodos,reset] = useStorageState('todos',['todo1','another todo','onemore todo'])
    var [ntd,setntd] = useState('')
    function addTodo(){
        setTodos([...todos,ntd])
    }
    return (
    <div>
        <h2>Todolist</h2>

        <input type="text" onChange={(e)=>{setntd(e.target.value)}}/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul>
            {
                todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist