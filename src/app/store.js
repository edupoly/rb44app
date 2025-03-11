import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import { userApi } from '../services/userApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { leadsApi } from '../services/leadsApi';
export const store = configureStore({
  reducer: {
    user:userReducer,
    [userApi.reducerPath]:userApi.reducer,
    [leadsApi.reducerPath]:leadsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,leadsApi.middleware),
})
setupListeners(store.dispatch)