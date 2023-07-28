import { configureStore } from "@reduxjs/toolkit"
import shopReducer from '../Features/Shop/shopSlice'
import cartReducer from '../Features/Cart/cartSlice'
import orderReducer from '../Features/Order/orderSlice'

export default configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    orderReducer
  }
})