import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import shopReducer from '../Features/Shop/shopSlice'
import cartReducer from '../Features/Cart/cartSlice'
import orderReducer from '../Features/Order/orderSlice'
import userReducer from '../Features/User/userSlice'
import { shopApi } from '../Services/shopServices'
import { authApi } from "../Services/authServices"

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    orderReducer,
    userReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})
setupListeners(store.dispatch)

export default store