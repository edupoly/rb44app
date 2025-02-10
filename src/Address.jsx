import React, { useRef } from 'react';
var Address=React.forwardRef((props,refs)=>{
    function checkEnter3(e){
        if(e.key==='Enter'){
          refs[1].current.focus();
        }
    }
    return (
        <div className="border boder-2 m-3 p-2">
            <input type="text" ref={refs[0]} onKeyUp={(e)=>{checkEnter3(e)}}/>
        </div>
    )
})
export default Address;