const initialState={
    count:0
}

function counterReducer(state=initialState,action){

    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    return state
    
}
export default counterReducer;