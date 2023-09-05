import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { colors } from '../Global/theme'
import ProductItem from '../Components/ProductItem'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'

const ItemListCategory = ({
  navigation
}) => {
  const category = useSelector(state => state.shopReducer.value.categorySelected)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)


  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(() => {
    if (!isLoading) {
      const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }
  }, [productsFilteredByCategory, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\s]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }
  }

  return (
    <View style={styles.container}>
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={() => navigation.goBack()}
      />
      {products ?
        <FlatList
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
          showsVerticalScrollIndicator={false}
        /> :
        null
      }
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    height: '86%',
    backgroundColor: colors.quaternary,
    alignItems: 'center',
  },
})