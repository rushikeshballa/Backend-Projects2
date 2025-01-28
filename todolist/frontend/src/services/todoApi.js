import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500' }),
  endpoints: (builder) => ({

   gettodolist : builder.query({
    query:()=>"/"
    
   })

  }),
})



export const { useGettodolistQuery } = todoApi