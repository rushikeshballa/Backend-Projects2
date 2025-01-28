import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const schoolApi = createApi({
  reducerPath: 'schoolApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500' }),
  endpoints: (builder) => ({

    addComplaint: builder.mutation({
      query:(Compaint) => ({
        url:`/add`,
         method:`POST`,
         body:Compaint,
      })
    }),

  }),
})



export const { useAddComplaintMutation} = schoolApi