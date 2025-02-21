import { createStore,combineReducers } from "redux";
import counterReducer from "./reducers/counter.reducer";
import todoReducer from "./reducers/todolist.reducer";
var store = createStore(combineReducers({counterReducer,todoReducer}))
export default store;