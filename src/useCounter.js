import React from "react";
function useCounter(){
    var [counter,setCounter] = React.useState(0);
    function incCounter(){
        setCounter(counter+1)
    }
    function decCounter(){
        setCounter(counter-1)
    }
    return [counter,incCounter,decCounter]
}
export default useCounter;