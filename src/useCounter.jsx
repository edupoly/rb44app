// import React from "react";
import useStorageState from './useStorageState'
function useCounter(){
    var [counter,setCounter] = useStorageState(0);
    function incCounter(){
        setCounter(+counter+1)
    }
    function decCounter(){
        setCounter(counter-1)
    }
    return [counter,incCounter,decCounter]
}
export default useCounter;