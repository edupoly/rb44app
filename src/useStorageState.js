import { useState } from "react";

function useStorageState(key,inv){
    var [state,setState]=useState(JSON.parse(window.localStorage.getItem(key)) || [...inv])
    
    function updateState(newval){
        window.localStorage.setItem(key,JSON.stringify([...newval]))
        setState([...newval])
    }
    function reset(){
        setState(inv)
        window.localStorage.removeItem(inv)
    }
    return [state,updateState,reset]
}
export default useStorageState;