import { useState } from "react";

function useStorageState(inv){
    var [state,setState]=useState(window.localStorage.getItem('count') || inv)
    
    function updateState(newval){
        window.localStorage.setItem('count',newval)
        setState((newval))
    }
    
    return [state,updateState]
}
export default useStorageState;