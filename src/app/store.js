import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import { userApi } from '../services/userApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { leadsApi } from '../services/leadsApi';
import { messengerApi } from '../services/messengerApi';
export const store = configureStore({
  reducer: {
    user:userReducer,
    [userApi.reducerPath]:userApi.reducer,
    [leadsApi.reducerPath]:leadsApi.reducer,
    [messengerApi.reducerPath]:messengerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,leadsApi.middleware,messengerApi.middleware),
})
setupListeners(store.dispatch)