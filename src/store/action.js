import { ADD_TODO, INC } from "./actiontypes"

export function incCounter(){
    return {type:INC}
}

export function addTodoItem(val){
    return {type:ADD_TODO,payload:val}
}
export function getCountries(){

    return (dispatch)=>{
        dispatch({type:'LOADING_COUNTRIES'})
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then(data=>{
                return dispatch({type:"UPDATE_COUNTRIES",payload:data})
            }
        )
    }




    

}