// import React from "react";
import useStorageState from './useStorageState'
function useCounter(iv){
    var [counter,setCounter,reset] = useStorageState('count',iv);
    function incCounter(){
        setCounter(+counter+1)
    }
    function decCounter(){
        setCounter(counter-1)
    }
    return [counter,incCounter,decCounter,reset]
}
export default useCounter;