import { createStore,combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counter.reducer";
import todoReducer from "./reducers/todolist.reducer";
import countriesReducer from "./reducers/countries.reducer";
import { thunk } from "redux-thunk";
var rootReducer = combineReducers({counterReducer,todoReducer,countriesReducer})
var store = createStore(rootReducer,applyMiddleware(thunk))
export default store;