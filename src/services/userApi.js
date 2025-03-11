// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4140' }),
  endpoints: (builder) => ({
    loginUser:builder.mutation({
        query:(user)=>{
            return {
                url:"/login",
                method:"POST",
                body:user
            }
        }
    }),
    getUserDetailsByToken:builder.query({
      query:(token)=>{
        return {
          url:"/getDetailsByToken",
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
  useGetUserDetailsByTokenQuery,
  useLazyGetUserDetailsByTokenQuery,
  useLoginUserMutation 
} = userApi