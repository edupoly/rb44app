const initialState = {
    countries:[],
    isLoading:false
}
function countriesReducer(state=initialState,action){
    if(action.type==='UPDATE_COUNTRIES'){
        return {isLoading:false,countries:[...action.payload]}
    }
    if(action.type==='LOADING_COUNTRIES'){
        return {...state,isLoading:true}
    }
    return state
}
export default countriesReducer;