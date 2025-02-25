import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos:['get house','pay emi','pay school fee']
}
var todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action)
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(1,action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer