import React from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from './store/action'
function Todolist({todos,addTodo}) {
    console.log('todolist rerendered')
    var [ntd,setNTD] = React.useState('')
    return (
        <div className='border m-3 p-2'>
            <h3>Todolist</h3>
            <input type="text" onChange={(e)=>{setNTD(e.target.value)}}/>
            <button onClick={()=>{addTodo(ntd)}}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.todoReducer
}
function mapDispatchToProps(dispatch){
    return {
        addTodo:(todo)=>{dispatch(addTodoItem(todo))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)