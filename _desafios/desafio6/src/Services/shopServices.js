import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../Database/firebaseConfig'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products.json`,
    }),
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const productsTransformed = Object.values(response)
        return (productsTransformed)
      }
    }),
    getProductById: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const productTransformed = Object.values(response).pop()
        return (productTransformed)
      }
    }),
    postCart: builder.mutation({
      query: (order) => ({
        url: `orders.json`,
        method: `POST`,
        body: order
      })
    }),
    
  })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, usePostCartMutation } = shopApi