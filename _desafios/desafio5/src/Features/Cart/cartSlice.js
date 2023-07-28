import { createSlice } from "@reduxjs/toolkit"
import Cart from '../../Data/cart.json'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      Cart
    }
  },
  reducers: {}
})

export const {} = cartSlice.actions

export default cartSlice.reducer