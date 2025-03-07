import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import { userApi } from '../services/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    user:userReducer,
    [userApi.reducerPath]:userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})
setupListeners(store.dispatch)