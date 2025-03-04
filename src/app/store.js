import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice";
import todoReducer from '../features/todolist/todolistSlice';
import { countriesApi } from "../services/countries";
import { productsApi } from "../services/products";
import { myproductsApi } from "../services/myproducts";
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
        [myproductsApi.reducerPath]:myproductsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,myproductsApi.middleware),
})
setupListeners(store.dispatch)