import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/`,
    }),
    getMoviesbytitle: builder.query({
      query: (titl) => `/movies/title/${titl}`,
    
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery,useGetMoviesbytitleQuery } = moviesApi