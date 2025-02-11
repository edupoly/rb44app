import { useState } from "react";

function useStorageState(key,inv){
    var [state,setState]=useState(window.localStorage.getItem('count') || inv)
    
    function updateState(newval){
        window.localStorage.setItem(key,newval)
        setState(newval)
    }
    function reset(){
        setState(inv)
        window.localStorage.removeItem(inv)
    }
    return [state,updateState,reset]
}
export default useStorageState;