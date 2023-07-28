import { createSlice } from "@reduxjs/toolkit"
import Products from '../../Data/products.json'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      categorySelected: '',
      productIdSelected: null,
      allProducts: Products,
      productsSelected: []
    }
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
      state.value.categorySelected = action.payload
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload
    }
  }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer