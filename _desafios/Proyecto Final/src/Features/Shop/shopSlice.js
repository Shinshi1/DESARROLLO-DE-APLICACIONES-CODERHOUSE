import { createSlice } from "@reduxjs/toolkit"
import Products from '../../Data/products.json'
import Categories from '../../Data/categories.json'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      categorySelected: '',
      productIdSelected: null,
      allProducts: Products,
      productsSelected: [],
      productSelected: {},
      allCategories: Categories
    }
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
      state.value.categorySelected = action.payload
    },
    setProductIdSelected: (state, action) => {
      state.value.productSelected = state.value.allProducts.find(product => product.id === action.payload)
      state.value.productIdSelected = action.payload
    }
  }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer