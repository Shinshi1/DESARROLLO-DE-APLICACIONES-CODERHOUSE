import { configureStore } from "@reduxjs/toolkit"
import shopReducer from '../Features/Shop/shopSlice'

export default configureStore({
  reducer: {
    shopReducer
  }
})