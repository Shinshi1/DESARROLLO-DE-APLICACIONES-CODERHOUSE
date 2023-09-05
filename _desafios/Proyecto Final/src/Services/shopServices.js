import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../Database/firebaseConfig'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProducts: builder.query({
      query: () => `products.json`,
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
    getOrders: builder.query({
      query: () => `orders.json`,
      // transformResponse: (response) => {
      //   const ordersTransformed = Object.values(response)
      //   return (ordersTransformed)
      // }
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`
    }),
    postProfileImage: builder.mutation({
      query: ({image, localId}) => ({
        url:`profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image
        }
      })
    }),
    getUserLocation: builder.query({
      query: (localId) => `locations/${localId}.json`
    }),
    postUserLocation: builder.mutation({
      query: ({location, localId}) => ({
        url:`locations/${localId}.json`,
        method: 'PUT',
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
        }
      })
    }),

    
  })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, usePostCartMutation, useGetProfileImageQuery, usePostProfileImageMutation, useGetUserLocationQuery, usePostUserLocationMutation, useGetOrdersQuery } = shopApi