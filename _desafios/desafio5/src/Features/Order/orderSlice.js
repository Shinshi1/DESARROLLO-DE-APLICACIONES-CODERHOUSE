import { createSlice } from "@reduxjs/toolkit"
import Orders from '../../Data/orders.json'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: {
      Orders
    }
  },
  reducers: {}
})

export const {} = orderSlice.actions

export default orderSlice.reducer