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
    deleteLead:builder.mutation({
        query:(lead)=>{
            return {
                url:`/${lead.id}`,
                method:"DELETE"
            }
        }
    }),
    updateLead:builder.mutation({
        query:(lead)=>{
            return {
                url:`/${lead.id}`,
                method:"PUT",
                body:lead
            }
        }
    }),
    addLeadRemark:builder.mutation({
      query:({id,remarks})=>{
          return {
              url:`/${id}`,
              method:"PATCH",
              body:{remarks}
          }
      }
  }),
    getAllLeads:builder.query({
      query:()=>{
        return {
          url:"/",
          method:"GET"
        }
      }
    }),
    getLeadDetailsById:builder.query({
      query:(id)=>{
        return {
          url:`/${id}`,
          method:"GET"
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddLeadMutation,
  useGetAllLeadsQuery,
  useDeleteLeadMutation,
  useLazyGetAllLeadsQuery,
  useGetLeadDetailsByIdQuery,
  useLazyGetLeadDetailsByIdQuery,
  useUpdateLeadMutation,
  useAddLeadRemarkMutation
} = leadsApi