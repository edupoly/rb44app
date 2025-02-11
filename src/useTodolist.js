import React from "react";
function useTodolist(){
    var [todos,setTodos] = React.useState(['pay maintance','get car','pay emi'])
    function addTodo(newtodo){
        setTodos((prv)=>{
            return [...prv,newtodo]
        })
    }
    function delTodo(index){
        setTodos((prv)=>{
            prv.splice(index,1)
            return [...prv]
        })
    }
    return [todos,addTodo,delTodo]
}
export default useTodolist;