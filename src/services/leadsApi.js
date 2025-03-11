// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/leads' }),
  endpoints: (builder) => ({
    addLead:builder.mutation({
        query:(lead)=>{
            return {
                url:"/",
                method:"POST",
                body:lead
            }
        }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddLeadMutation 
} = leadsApi