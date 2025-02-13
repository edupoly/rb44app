import React, { useReducer } from 'react'

function todoReducer(state,action){
    console.log(action)
    if(action.type==='ADDTODO'){
        return {todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETETODO'){
        state.todos.splice(action.payload,1)
        return {todos:[...state.todos]}
    }
}

function Todolist() {
   var [state,dispatch]= useReducer(todoReducer,{todos:['todo1','another todo','more todo']})
    var [newTodo,setNewTodo] = React.useState('');
   return (
    <div className='border m-2 p-2'>
        <h2>Todolist</h2>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{dispatch({type:'ADDTODO',payload:newTodo})}}>Add Todo</button>
        <ul>
            {
                state.todos.map((todo,i)=>{
                    return <li>
                                {todo}
                                <button onClick={()=>{dispatch({type:'DELETETODO',payload:i})}}>Delete</button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist