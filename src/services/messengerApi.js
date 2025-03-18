// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const messengerApi = createApi({
  reducerPath: 'messengerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4140' }),
  endpoints: (builder) => ({
    
    getAllUsers:builder.query({
      query:(token)=>{
        return {
          url:"/getAllUsers",
          method:"GET",
          headers:{
            'token':window.localStorage.getItem("token")
          }
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery
} = messengerApi